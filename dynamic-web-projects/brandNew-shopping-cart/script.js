document.getElementById("case-increase").addEventListener("click", function(){

    productChangeCount(true);

});

document.getElementById("case-decrease").addEventListener("click",function(){
    productChangeCount(false);
});

function productChangeCount(isIncrease){
    const caseQuantity = document.getElementById("case-quantity");
    const caseCount = parseInt(caseQuantity.value);
    // let caseDecrease = caseCount - 1;
    let caseNewCount = caseCount;
    if(isIncrease == true ){
        caseNewCount = caseCount + 1;
    }
    if(isIncrease == false && caseNewCount > 0 ){
        caseNewCount = caseCount - 1;
    }
    caseQuantity.value = caseNewCount;
    let caseCost = caseNewCount * 59;
    document.getElementById("caseCost").innerText = caseCost;
}