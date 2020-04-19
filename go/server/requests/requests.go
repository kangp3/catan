package requests

import (
	"net/http"

	"github.com/gorilla/schema"
)

var decoder = schema.NewDecoder()

type Binder interface {
	Bind(r *http.Request) error
}

func BindQueryParams(r *http.Request, v Binder) error {
	if err := decoder.Decode(v, r.URL.Query()); err != nil {
		return err
	}
	return v.Bind(r)
}
