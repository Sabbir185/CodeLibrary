var a = 15;
var b = 9 ;
var c = 100 ;

// method 1
/*
    if( a>b && a>c){
        console.log("Max ",a)
    }
    else if( b>a && b>c){
        console.log("Max ",b)
    }
    else{
        console.log("Max ",c)
    }
*/


// method 2
/*
    if( a>b ){
        if(a>c){
            console.log(a);
        }
    }
    else{
        if(b>c){
            console.log(b);
        }
        else{
            console.log(c);
        }
    }
*/

var n = Math.max(a,b,c);
console.log("Max ",n);

var n = Math.min(a,b,c);
console.log("min ",n);