let arr1 = [2,3,1,5,3,2,7,9,11];
let arr2 = [];

for(let i=0;i<arr1.length;i++){
    let element = arr1[i];
    let indOfArr2 = arr2.indexOf(element); // what is the index number of 2 or 3 so on ....
    if( indOfArr2 == -1 ){ // if index number 0 or positive value , so it is already exit in arr2 .. avoid it
        arr2.push(element);
    }
}

console.log(arr2);