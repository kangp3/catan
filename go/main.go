package main

import (
	"fmt"
	"log"
	"net/http"

	"catan/server/handlers"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
)

func getRouter() http.Handler {
	r := chi.NewRouter()
	r.Use(middleware.RequestID)
	r.Use(middleware.Logger)
	r.Get("/healthcheck", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
	})
	r.Route("/catan", func(r chi.Router) {
		r.Get("/game", handlers.GetGame)
	})
	return r
}

func main() {
	port := 9000
	s := &http.Server{
		Addr:    fmt.Sprintf(":%d", port),
		Handler: getRouter(),
	}
	log.Printf("Listening on port %d", port)
	log.Fatal(s.ListenAndServe())
}
