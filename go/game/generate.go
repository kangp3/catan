package game

import (
	"math/rand"

	"catan/game/types"
	"catan/util/math"
)

var resourceHexCounts = map[types.ResourceType]int{
	types.Brick:  3,
	types.Desert: 1,
	types.Grain:  4,
	types.Ore:    3,
	types.Sheep:  4,
	types.Wood:   4,
}

func shuffleResources(size int) []types.ResourceType {
	// Build up a "deck" of all resources
	resources := []types.ResourceType{}
	for resource, count := range resourceHexCounts {
		for i := 0; i < count; i++ {
			resources = append(resources, resource)
		}
	}
	// Return shuffled "deck"
	rand.Shuffle(len(resources), func(i, j int) {
		resources[i], resources[j] = resources[j], resources[i]
	})
	return resources
}

func Generate(size int) []*types.Hex {
	resources := shuffleResources(size)

	radius := size - 1
	hexes := []*types.Hex{}
	for x := -radius; x < size; x++ {
		minY := math.IntMax(-radius, -radius-x)
		maxY := math.IntMin(radius, radius-x)
		for y := minY; y <= maxY; y++ {
			hex := &types.Hex{Coords: &types.Coord{X: x, Y: y}}
			hex.Resource, resources = resources[0], resources[1:]
			hexes = append(hexes, hex)
		}
	}
	return hexes
}
