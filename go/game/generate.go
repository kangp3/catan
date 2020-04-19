package game

import (
	"log"
	"math/rand"

	"catan/game/types"
)

// Map of resources to the number of tiles that resource should have on the
// board
var resourceHexCounts = map[types.ResourceType]int{
	types.Brick:  3,
	types.Desert: 1,
	types.Grain:  4,
	types.Ore:    3,
	types.Sheep:  4,
	types.Wood:   4,
}

// Order of dice rolls to assign to hexes around the board
var rollOrder = []int{5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11}

// Set of transforms that define directions taken to walk around in a spiral
var spiralTransforms = []*types.Coord{
	{X: 1, Y: -1},
	{Y: -1},
	{X: -1},
	{X: -1, Y: 1},
	{Y: 1},
	{X: 1},
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

func generateHexes(size int, resources []types.ResourceType) []*types.Hex {
	hexes := []*types.Hex{}
	rolls := rollOrder[:]
	for ring := size - 1; ring > 0; ring-- {
		pos := &types.Coord{Y: ring}
		for _, transform := range spiralTransforms {
			steps := ring
			for i := 0; i < steps; i++ {
				hex := &types.Hex{Coords: &types.Coord{X: pos.X, Y: pos.Y}}
				hex.Resource, resources = resources[0], resources[1:]
				if hex.Resource != types.Desert {
					hex.Roll, rolls = rolls[0], rolls[1:]
				}
				log.Printf("COORDS ARE %+v, %+v", pos, hex.Coords)
				hexes = append(hexes, hex)

				pos.X += transform.X
				pos.Y += transform.Y
			}
		}
	}
	center := &types.Hex{
		Coords:   &types.Coord{X: 0, Y: 0},
		Resource: resources[0],
	}
	if center.Resource != types.Desert {
		center.Roll = rolls[0]
	}
	hexes = append(hexes, center)
	return hexes
}

func Generate(size int) []*types.Hex {
	resources := shuffleResources(size)
	hexes := generateHexes(size, resources)
	log.Printf("HEXES LENGTH %d", len(hexes))
	return hexes
}
