package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"catan/db"
	"catan/server/handlers"
	"catan/server/middleware"

	"github.com/go-chi/chi"
	chimiddleware "github.com/go-chi/chi/middleware"
	"gopkg.in/olahol/melody.v1"
)

func getRouter() http.Handler {
	m := melody.New()
	m.HandleMessage(func(s *melody.Session, msg []byte) {
		log.Printf("WS Headers: %+v", s.Request.Header)
		m.Broadcast(msg)
	})

	r := chi.NewRouter()
	r.Use(chimiddleware.RequestID)
	r.Use(chimiddleware.Logger)
	r.Use(middleware.CORS([]string{"http://localhost:8080"}))
	r.Get("/healthcheck", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
	})
	r.Route("/catan", func(r chi.Router) {
		r.Route("/game", func(r chi.Router) {
			r.Route("/{gameID}", func(r chi.Router) {
				r.Get("/", handlers.GetGame)
				r.Get("/ws", func(w http.ResponseWriter, r *http.Request) { m.HandleRequest(w, r) })
			})
		})
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

func init() {
	db.InitPool(context.Background())
}
