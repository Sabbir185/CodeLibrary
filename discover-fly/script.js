function counterHandler(className,counterButton){
    const ticketInput = document.getElementById(className+'ClassInput').value;
    const ticketCount = parseInt(ticketInput);
    
    let newCount = ticketCount;
    if( counterButton == 'plus'){
        newCount = ticketCount + 1;
    }
    if( counterButton == 'minus' && newCount > 0){
        newCount = ticketCount - 1;
    }

    document.getElementById(className+'ClassInput').value = newCount ;


    let subTotal = subTotalCalculate();
    document.getElementById('subtotal').innerText = subTotal;

    let taxCost = subTotal * 0.1      // 10% tax
    document.getElementById('taxPay').innerText = taxCost ;

    let totalCost = taxCost + subTotal;  // total tickets cost
    document.getElementById('totalCost').innerText = totalCost ;

}


function subTotalCalculate(){
    const newFirstClassInput = document.getElementById('firstClassInput').value;
    const newFirstClassCount = parseInt(newFirstClassInput);

    const newEconomyClassInput = document.getElementById('economyClassInput').value;
    const newEconomyClassCount = parseInt(newEconomyClassInput);

    let subTotal = (newFirstClassCount * 150 ) + (newEconomyClassCount * 100 );

    return subTotal;
}



// customization book now button
document.getElementById('bookNowBtn').addEventListener("click",function(){
    document.querySelector(".pop-up").style.display = "flex";
    document.querySelector(".popup-content").style.display = "block";

    buttonHide();
    displayContentShow();

})


// pick up information from above function / html elements 
// and display some values on pop-up window
function displayContentShow(){ 

   const flyInput = document.getElementById("flying-input").value;
   document.getElementById('fromInput').innerText = flyInput;

   const destinationInput = document.getElementById("destinationInput").value;
   document.getElementById("toInput").innerText = destinationInput;

   document.getElementById("firstClassTicket").innerText = document.getElementById("firstClassInput").value;

   document.getElementById("economyClassTicket").innerText = document.getElementById("economyClassInput").value;

   document.getElementById("totalPopUp").innerText = document.getElementById("totalCost").innerText;
}


function buttonHide(){
    document.getElementById("btnHide1").style.display = "none";
    document.getElementById("btnHide2").style.display = "none";
    document.getElementById("btnHide3").style.display = "none";
    document.getElementById("btnHide4").style.display = "none";
}


document.getElementById("close").addEventListener("click", function(){
    document.querySelector(".pop-up").style.display = "none";

    document.getElementById("btnHide1").style.display = "inline-block";
    document.getElementById("btnHide2").style.display = "inline-block";
    document.getElementById("btnHide3").style.display = "inline-block";
    document.getElementById("btnHide4").style.display = "inline-block";

    location.reload();
})