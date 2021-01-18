function inchTOFeet(inchi){
    var feet = Math.floor(inchi/12) ;
    var inch = (inchi%12);
    var answer = feet+'.'+inch
    return answer;
}

var result = inchTOFeet(55);
console.log(result);