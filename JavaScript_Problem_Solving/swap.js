var a = 5;
var b = 7;
console.log("before swaping : a= ",a," , b= ",b);
var temp = a ;
a = b;
b = temp ;
console.log("before swaping : a= ",a," , b= ",b);



// another method , no need to temp value

var x = 4;
var y = 3 ;

x = x + y ;
y = x - y ;
x = x - y ;
console.log("before swaping : x= ",x," , y= ",y);


// another javascript shortcut
m = 9 ;
n = 8;
[m,n] = [n,m];
console.log("After swapping : m = ",m," , n = ",n);

