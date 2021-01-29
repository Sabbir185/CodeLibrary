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



    const newFirstClassInput = document.getElementById('firstClassInput').value;
    const newFirstClassCount = parseInt(newFirstClassInput);

    const newEconomyClassInput = document.getElementById('economyClassInput').value;
    const newEconomyClassCount = parseInt(newEconomyClassInput);

    let subTotal = (newFirstClassCount * 150 ) + (newEconomyClassCount * 100 );

    document.getElementById('subtotal').innerText = subTotal;

}