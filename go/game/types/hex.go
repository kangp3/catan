package types

type Hex struct {
	Coords   *Coord       `json:"coords"`
	Resource ResourceType `json:"resource"`
	Roll     int          `json:"roll,omitempty"`
}
