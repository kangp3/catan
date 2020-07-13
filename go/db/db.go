package db

import (
	"context"
	"log"

	"github.com/jackc/pgx/v4/pgxpool"
)

var Pool *pgxpool.Pool

func InitPool(ctx context.Context) {
	cfg, err := pgxpool.ParseConfig("postgresql://catanathan:@localhost:5432/catan")
	if err != nil {
		log.Fatal(err)
	}
	Pool, err = pgxpool.ConnectConfig(ctx, cfg)
	if err != nil {
		log.Fatal(err)
	}
}
