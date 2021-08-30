function fizzbuzz(n){
    if (n <= 0) {
        return null;
    }
    if (isNaN(n)) {
        return "Parameter must be a positive number";
    }
    var arr = [];
    for(let i = 1; i <= n; i++){
      if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
      }else if (i % 3 === 0){
        console.log("Fizz");
      }else if (i % 5 === 0){
        console.log("Buzz");
      }else{
        console.log(i);
      }
    }
  }
  fizzbuzz(15)
  fizzbuzz("fifteen")