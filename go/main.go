package main

import (
	"fmt"
	"log"
	"net/http"

	"catan/server/handlers"
	"catan/server/middleware"

	"github.com/go-chi/chi"
	chimiddleware "github.com/go-chi/chi/middleware"
)

func getRouter() http.Handler {
	r := chi.NewRouter()
	r.Use(chimiddleware.RequestID)
	r.Use(chimiddleware.Logger)
	r.Use(middleware.CORS([]string{"http://localhost:8080"}))
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
