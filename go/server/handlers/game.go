package handlers

import (
	"net/http"

	"catan/db"
	"catan/game/generate"
	"catan/game/types"
	"catan/server/requests"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
)

func GetGame(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	req := &requests.NewGame{}
	if err := requests.BindQueryParams(r, req); err != nil {
		render.Render(w, r, ErrResp(http.StatusBadRequest))
		return
	}
	gameID := chi.URLParam(r, "gameID")

	game := generate.NewGame(req.Size)
	board := new(types.Board)
	err := db.Pool.
		QueryRow(ctx, `WITH inserted AS (
    INSERT INTO games (name, board, created_at)
    VALUES ($1, $2, now())
    ON CONFLICT (name) WHERE deleted_at IS NULL DO UPDATE
    SET name=EXCLUDED.name WHERE FALSE
    RETURNING *
)
SELECT board FROM inserted
UNION ALL
SELECT board FROM games WHERE name=$1
`, gameID, game.Board).Scan(board)
	if err != nil {
		render.Render(w, r, ErrResp(http.StatusInternalServerError))
		return
	}
	render.Render(w, r, &types.Game{
		Size:  req.Size,
		Board: board,
	})
}
