package requests

import "net/http"

type NewGame struct {
	Size int `schema:"size"`
}

func (req *NewGame) Bind(_ *http.Request) error {
	if req.Size == 0 {
		req.Size = 3
	}
	return nil
}
