package math

func IntMax(x int, y ...int) int {
	max := x
	for _, v := range y {
		if v > max {
			max = v
		}
	}
	return max
}

func IntMin(x int, y ...int) int {
	min := x
	for _, v := range y {
		if v < min {
			min = v
		}
	}
	return min
}
