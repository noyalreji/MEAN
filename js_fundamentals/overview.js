function printValues() {
    console.log("The value of a is currently: ", a);
    console.log("The value of a is currently: ", b);

}

var a = 7;
var b = 87;
a += 5;
a *= 30;
b *= a;
printValues();
a /= 3;
b /= a;
printValues();