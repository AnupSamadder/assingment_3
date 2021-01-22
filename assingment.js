function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}


function budgetCalculator(watch, phone, laptop){
    var totalPrice = (watch*50) + (phone*100) + (laptop*500);
    return totalPrice;
}


function hotelCost(day){
    cost = 0;
    if( day <= 10){
        cost = day * 100;
    }
    else if( day <= 20){
        var first10 = 10 * 100;
        var remaining = day - 10; 
        var second10 = remaining * 80;
        cost = first10 + second10;
    }
    else{
        var first10 = 10 * 100;
        var second10 = 10 * 80;
        var remaining = day - 20;
        var lastPerDays = remaining * 50;
        cost = first10 + second10 + lastPerDays;
    }
    return cost;
    }


function megaFriend(names){
    var maxword = names[0];
   
        for( var i = 0; i < names.length; i++){
        var element = names[i];
        if(element.length > maxword.length){
        maxword =element;
        }
      }
       return maxword;
    }
   