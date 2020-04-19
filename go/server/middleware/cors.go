package middleware

import (
	"net/http"

	"github.com/go-chi/cors"
)

func CORS(allowed []string) func(http.Handler) http.Handler {
	return cors.New(cors.Options{
		AllowedOrigins:   allowed,
		AllowedMethods:   []string{"GET"},
		AllowedHeaders:   []string{"Content-Type"},
		AllowCredentials: true,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}).Handler
}
