package types

type Board struct {
	Hexes   []*Hex    `json:"hexes"`
	Harbors []*Harbor `json:"harbors"`
}
