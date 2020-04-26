package types

type ResourceType string

const (
	Brick ResourceType = "brick"
	Grain ResourceType = "grain"
	Ore   ResourceType = "ore"
	Sheep ResourceType = "sheep"
	Wood  ResourceType = "wood"

	Desert ResourceType = "desert"

	Wildcard ResourceType = "wildcard"
)
