// find out factorial of 4!

// for loop

function doFactorial(n){
    let fact = 1 ;
    for (let i = 1; i <= n; i++) {
        fact *= i ;
    }
    return fact;
}

let result1 = doFactorial(4);
console.log(result1);



// while loop

function doFact(num){
    let factorial = 1;
    let i = 1;
    while(i<=num){
        factorial *= i;
        i++ ;
    }
    return factorial;
}
let result2 = doFact(4);
console.log(result2);


// factorial

function factRecursive(fact){
    if(fact == 0 ){
        return 1;
    }
    else{
        return fact*factRecursive(fact-1);
    }
}
let result3 = factRecursive(4);
console.log(result3);