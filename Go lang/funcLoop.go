package main
import (
	"fmt"
)

func doSum(){
	sum := 0
	for i:=0; i<=10; i++ {
		sum += i	
	}

	fmt.Println("The sum is : ", sum)
}

func main(){

	doSum()

	fmt.Println("We can use for loop as a while loop : ")

	j := 1
	for j<=5 {
		fmt.Println("j is : ", j)
		j++
	}

	// infinite loop
	k := 1
	for {

		if k==4 {
			fmt.Println("k = ", k)
        	break
		}
        
		k++
    }
}