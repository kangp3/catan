package handlers

import (
	"net/http"

	"catan/server/responses"

	"github.com/go-chi/render"
)

func GetGame(w http.ResponseWriter, r *http.Request) {
	render.Render(w, r, &responses.Game{Size: 3})
}
