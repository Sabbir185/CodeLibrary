function randomNumber(){
    let randNumber = (Math.random()*10000+'').split('.')[0];
    document.getElementById('generate-display').value = randNumber;
}