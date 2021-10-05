package main

import (
	"fmt"

	"github.com/sabbir185/firstApp/container"
)

func main() {
	area := 2 * container.Pi * float32(container.Radius)

	fmt.Printf("%.2f", area)
}
