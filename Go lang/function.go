package main
import (
	"fmt"
)

func doSum(a int, b int) int {
	return a + b
}

func addition(a, b, c int) int {
	return a + b + c
}


func main(){
	res := doSum(1, 2)
	res2 := addition(1, 2, 3)

	fmt.Println("doSum : ", res,"addition : ", res2)
}