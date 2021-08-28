var thaiFood = 150;
var group = 4;
// calculate the bill with tip
// divide by 4
var total = tip(thaiFood);
console.log(total/4);


function tip(bill){
    console.log(bill * 1.20);
    return bill * 1.20
}