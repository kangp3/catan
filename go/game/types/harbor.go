package types

const (
	DockSideLeft = iota + 1
	DockSideUpLeft
	DockSideUpRight
	DockSideRight
	DockSideDownRight
	DockSideDownLeft
)

type Harbor struct {
	Coords   *Coord       `json:"coords"`
	Resource ResourceType `json:"resource"`
	DockSide int          `json:"dock_side"`
}
