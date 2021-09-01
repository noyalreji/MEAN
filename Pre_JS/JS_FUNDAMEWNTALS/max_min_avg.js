<<<<<<< HEAD:js_fundamentals/max_min_avg.js
function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    var avg = sum / arr.length
    return `The minimum is ${min}, the maximum is ${max}, and the average is ${avg} `
}

=======
function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    var avg = sum / arr.length
    return `The minimum is ${min}, the maximum is ${max}, and the average is ${avg} `
}

>>>>>>> 1993e685f4afa96f4c9eb297825c5df883c1fdb4:max_min_avg.js
console.log(maxMinAvg([1, -2, 9, 4]));  