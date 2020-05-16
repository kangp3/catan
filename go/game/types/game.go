package types

import "net/http"

type Game struct {
	Size int `json:"size"`
	*Board
}

// Renderer for go-chi
func (resp *Game) Render(_ http.ResponseWriter, _ *http.Request) error {
	return nil
}
