package responses

import (
	"net/http"

	"catan/game/types"
)

type Game struct {
	Size  int          `json:"size"`
	Hexes []*types.Hex `json:"hexes"`
}

func (resp *Game) Render(_ http.ResponseWriter, _ *http.Request) error {
	return nil
}
