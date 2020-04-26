package handlers

import (
	"net/http"

	"catan/game/generate"
	"catan/server/requests"

	"github.com/go-chi/render"
)

func GetGame(w http.ResponseWriter, r *http.Request) {
	req := &requests.NewGame{}
	if err := requests.BindQueryParams(r, req); err != nil {
		render.Status(r, http.StatusBadRequest)
		return
	}
	render.Render(w, r, generate.NewGame(req.Size))
}
