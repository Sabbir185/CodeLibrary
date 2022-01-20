package main
import (
	"fmt"
)

func main(){
	// output information
	var weighInput float32
	var heightInput float32

	fmt.Println("BMI calculator")

	fmt.Print("Please enter your weight (kg) : ")
	fmt.Scan(&weighInput)

	fmt.Print("Please enter your height (m) : ")
	fmt.Scan(&heightInput)

	BMI := weighInput / ( heightInput * heightInput )

	fmt.Printf("\nYour BMI is : %.2f\n", BMI)

}