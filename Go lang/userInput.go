package main
import (
	"fmt"
	"reflect"
)


func main(){
	// output information
	var name string
	var cgpa float32

	fmt.Print("Enter name : ")
	fmt.Scan(&name)

	fmt.Print("Enter cgpa : ")
	fmt.Scan(&cgpa)

	fmt.Println(name, reflect.TypeOf(name))
	fmt.Print(cgpa, reflect.TypeOf(cgpa))

}