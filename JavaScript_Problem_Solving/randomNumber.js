// var n = Math.random();
// console.log(n);


// I want to pickup a random number within 0 ~ 15 

var n = Math.random()*15;
var random = Math.round(n);  // to avoid float number
// console.log(random);


// number testing by using for loop 

for(let i=0; i<100; i++){
    var n = Math.random()*15;
    var random = Math.round(n);  // to avoid float number
    console.log(random);
}

// for 100 to 200 random number
// var random = 100 + Math.random()*100 ;