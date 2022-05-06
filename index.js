var arr = [2, 3, 4, 6];
var [n, k] = [4, 3];


function solve(arr, n, k) {
  for (var i = 0; i < n; i++) { //1
    var w = n - i; //3
    var c = 0;
    var sum = 0;
    for (var j = 0; j < w; j++) { //0 1 2
      sum += arr[j]; // 9
    }
    // k=3
    if (sum % k != 0) c++; //f
    for (var j = w; j < n; j++) { // 3-3
      sum += arr[j]; // 6+9 = 15
      sum -= arr[j - w]; // 15-2 = 13
      if (sum % k != 0) c++; // 1
    }
    if (c > 0) {
      return c; //
    }
  }
  return 0;
}


console.log(0);
