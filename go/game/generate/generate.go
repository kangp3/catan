package generate

import (
	"catan/game/types"
)

func NewGame(size int) []*types.Hex {
	hexes := generateHexes(size)
	return hexes
}
