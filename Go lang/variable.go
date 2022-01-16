package main

import (
	"fmt"
	"reflect" 
)

func main(){
	var name string = "Variable declare process in Golang"
	const PI float64 = 3.1416
	var r int = 3

	var rent_price int = 1000

	var area float64 = PI * float64( r * r)

	fmt.Println(name)

	fmt.Println("Type of r = ", reflect.TypeOf(r))

	fmt.Println("Type of rent_price = ", reflect.TypeOf(rent_price))

	fmt.Println("The area is : ", area)

	// shortcut technique 1

	n := 10
	m := 10.11123123123
	k := "Sabbir Ahmmed"

	fmt.Println(reflect.TypeOf(n), reflect.TypeOf(m), reflect.TypeOf(k))

	// shortcut technique 2
	var s = "Sabbir"
	var e, f = 2, 3
	a, b, c := 4, 5, 6

	fmt.Print("s = ", s,", e, f = ",e,f,", a b c = ", a, b, c)
}