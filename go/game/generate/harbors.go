package generate

import (
	"catan/game/types"
	"math/rand"
)

var harborCounts = map[types.ResourceType]int{
	types.Brick: 1,
	types.Grain: 1,
	types.Ore:   1,
	types.Sheep: 1,
	types.Wood:  1,

	types.Wildcard: 4,
}

var harborPos = map[types.Coord]int{
	types.Coord{X: 0, Y: 3}:   types.DockSideDownRight,
	types.Coord{X: -2, Y: 3}:  types.DockSideDownLeft,
	types.Coord{X: -3, Y: 2}:  types.DockSideDownLeft,
	types.Coord{X: -3, Y: 0}:  types.DockSideLeft,
	types.Coord{X: -1, Y: -2}: types.DockSideUpLeft,
	types.Coord{X: 1, Y: -3}:  types.DockSideUpLeft,
	types.Coord{X: 3, Y: -3}:  types.DockSideUpRight,
	types.Coord{X: 3, Y: -1}:  types.DockSideRight,
	types.Coord{X: 2, Y: 1}:   types.DockSideRight,
}

func shuffleHarbors(size int) []types.ResourceType {
	resources := []types.ResourceType{}
	for resource, count := range harborCounts {
		for i := 0; i < count; i++ {
			resources = append(resources, resource)
		}
	}
	rand.Shuffle(len(resources), func(i, j int) {
		resources[i], resources[j] = resources[j], resources[i]
	})
	return resources
}

func assignHarbors(resources []types.ResourceType) []*types.Harbor {
	harbors := []*types.Harbor{}
	for coords, dockSide := range harborPos {
		harbor := &types.Harbor{
			Coords:   &types.Coord{X: coords.X, Y: coords.Y},
			DockSide: dockSide,
		}
		harbor.Resource, resources = resources[0], resources[1:]
		harbors = append(harbors, harbor)
	}
	return harbors
}

func generateHarbors(size int) []*types.Harbor {
	resources := shuffleHarbors(size)
	return assignHarbors(resources)
}
