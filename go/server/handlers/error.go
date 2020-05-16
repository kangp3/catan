package handlers

import (
	"net/http"

	"github.com/go-chi/render"
)

type errResp struct {
	status int
}

func ErrResp(st int) *errResp {
	return &errResp{status: st}
}

func (resp *errResp) Render(_ http.ResponseWriter, r *http.Request) error {
	render.Status(r, resp.status)
	return nil
}
