
function productChangeCount(product , isIncrease){
    const productQuantity = document.getElementById(product+"-quantity");
    const productCount = parseInt(productQuantity.value);
    let productNewCount = productCount;
    if(isIncrease == true ){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productNewCount > 0 ){
        productNewCount = productCount - 1;
    }
    productQuantity.value = productNewCount;
    let productCost = 0;
    if(product == 'phone'){
        productCost = productNewCount * 1219;
    }
    if(product == 'case'){
        productCost = productNewCount * 59;
    }

    document.getElementById(product+"Cost").innerText = productCost;

    totalCalculation();
}

function totalCalculation(){
    const phoneInput = document.getElementById('phone-quantity');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('case-quantity');
    const caseCount = parseInt(caseInput.value);

    let total = (phoneCount * 1219) + (caseCount * 59) ;
    document.getElementById("total").innerText = '$'+ total;

    let grandTotal = (total * 0.05) + total ;         // assume that our tax 5%

    document.getElementById("grand-total").innerText = '$' + grandTotal ;

}


// function productChangeCount(isIncrease){
//     const caseQuantity = document.getElementById("case-quantity");
//     const caseCount = parseInt(caseQuantity.value);
//     let caseNewCount = caseCount;
//     if(isIncrease == true ){
//         caseNewCount = caseCount + 1;
//     }
//     if(isIncrease == false && caseNewCount > 0 ){
//         caseNewCount = caseCount - 1;
//     }
//     caseQuantity.value = caseNewCount;
//     let caseCost = caseNewCount * 59;
//     document.getElementById("caseCost").innerText = caseCost;
// }