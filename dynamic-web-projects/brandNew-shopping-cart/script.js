document.getElementById("case-increase").addEventListener("click", function(){

    const caseQuantity = document.getElementById("case-quantity");
    const caseCount = parseInt( caseQuantity.value );
    let caseIncrease = caseCount + 1 ;
    caseQuantity.value = caseIncrease ;
    let caseCost = caseIncrease * 59 ;

    document.getElementById("caseCost").innerText = caseCost;

    

})

document.getElementById("case-decrease").addEventListener("click",function(){
    const caseQuantity = document.getElementById("case-quantity");
    const caseCount = parseInt(caseQuantity.value);
    let caseDecrease = caseCount - 1;
    caseQuantity.value = caseDecrease;
    let caseCost = caseDecrease * 59;
    document.getElementById("caseCost").innerText = caseCost;
})