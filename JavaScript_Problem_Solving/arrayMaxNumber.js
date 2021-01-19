var arr = [11,4,23,55,15,77,3,100];

var max = arr[0];

for(var i=1; i<arr.length; i++ ){
    if( arr[i]>max ){
        max = arr[i]
    }
}
console.log("Max : ",max);



// minimum number

var min = arr[0];
for(var i=1; i<arr.length; i++){
    if( arr[i]<min ){
        min = arr[i];
    }
}
console.log("Min : ",min);