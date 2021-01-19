function doRecursive(n){

    if( n==0 || n==1 ){
        return n;
    }
    else{
        return ( doRecursive(n-1)+doRecursive(n-2) );
    }
}


let num = 0 ;
let n = 10 ;
for(let i=0;i<=n;i++){
    console.log(doRecursive(num));
    num++ ;
}