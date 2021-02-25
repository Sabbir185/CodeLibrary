function randomNumber(){
    let randNumber = (Math.random()*10000+'').split('.')[0];
    
    while(randNumber.length != 4){
        randNumber = (Math.random()*10000+'').split('.')[0];
    }
    
    document.getElementById('generate-display').value = randNumber;
}


document.getElementById('digits-container').addEventListener("click",function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        //handle
    }
    else{
        document.getElementById('user-input').value += digit;
    }
});


function verifyPin(){
    const userPin = document.getElementById('user-input').value;
    const randomPin = document.getElementById('generate-display').value;

    if( userPin===randomPin){
        alert("successfull !");
    }
    else{
        alert("Bad !");
    }
}

