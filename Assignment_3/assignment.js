
// https://github.com/Sabbir185/CodeLibrary/tree/master/Assignment_3

/*
    KilometerTOMeter converter
    we know that 1 km = 1000 m
*/
function kilometerToMeter(value){
    let result = 0 ;
    if (value>=0){
        result = value * 1000 ; 
        return result ;
    }
    else{
        return ('Wrong input !')  // for handling string and negetive value
    }  
}








/*
    Budget calculation problem. 
    1 unit clock's price 50tk
    1 unit phone's price 100tk
    1 unit laptop's price 500tk
*/
function budgetCalculator(clocks,phones,laptops){
    let totalCost = 0;
    let clock = Math.floor(clocks);    // this types of unit can't be float
    let phone = Math.floor(phones);
    let laptop = Math.floor(laptops);
    if(clock>=0 && phone>=0 && laptop>=0){
        let clockPrice = (clock * 50);
        let phonePrice = (phone * 100);
        let laptopPrice = (laptop * 500);
        totalCost = clockPrice + phonePrice + laptopPrice ;
    }
    else{
        return ("Wrong input !")
    }
    return totalCost;
}







/*
    Hotel Cost problem. 1~10 days 100 tk , 11~20 days 80 tk, 21~more 50 tk
*/
function hotelCost(days){
    let day = Math.floor(days);   // for handling float number , day can't be float
    let totalCost=0, remainingDays = 0, remainingDaysCost = 0;

    if(day>0 && day<=10){ 
        return totalCost = day * 100;   // ten days cost
    }
    else if(day>=11 && day<=20){
        let tenDaysCost = (100*10);  // 1~10 days cost
        remainingDays = (day-10);           
        remainingDaysCost = (remainingDays * 80);  // 11~20 days cost
        return totalCost = tenDaysCost + remainingDaysCost ; // 1 ~ 20 days cost
    }
    else if(day>=21){
        let twentyDaysCost = (100*10) + (80*10);  // 1~20 days cost
        remainingDays = (day-20);
        remainingDaysCost = remainingDays * 50 ;
        return totalCost = twentyDaysCost + remainingDaysCost;
    }
    else{
        return ("Wrong input !");
    }
}







/*
    Mega Friends list
    findout largest friend name from array .
*/
function megaFriend(friends){
    if( friends.length > 0)
    {
        let largeName = friends[0];
        let maxLength = largeName.length;
        for(let i=1; i<friends.length; i++)
        { 
            if( friends[i].length > maxLength )
            {
                largeName = friends[i];         // update name
                maxLength = largeName.length;  // update length
            }
        }

        return largeName;
    }
    else{
        return ('Invalid input !');
    }
}



