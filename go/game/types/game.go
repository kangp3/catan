package types

import "net/http"

type Game struct {
	Size    int       `json:"size"`
	Hexes   []*Hex    `json:"hexes"`
	Harbors []*Harbor `json:"harbors"`
}

func (resp *Game) Render(_ http.ResponseWriter, _ *http.Request) error {
	return nil
}
