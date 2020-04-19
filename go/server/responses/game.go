package responses

import "net/http"

type Game struct {
	Size int `json:"size"`
}

func (resp *Game) Render(_ http.ResponseWriter, _ *http.Request) error {
	return nil
}
