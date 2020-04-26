package generate

import "catan/game/types"

func NewGame(size int) *types.Game {
	return &types.Game{
		Size:    size,
		Hexes:   generateHexes(size),
		Harbors: generateHarbors(size),
	}
}
