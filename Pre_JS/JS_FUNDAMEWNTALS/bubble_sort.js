function bblSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bblSort([234, 43, 55, 63, 5, 6, 235, 547]));


function bubblesort(arr) {
    for (var i = 0; i < arr.length - 1; i++){
        for (var j = 0; j < arr.length - 1 - i; j++){
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubblesort([234, 43, 55, 63, 5, 6, 235, 547]));

