function runProgram(input) {
    input = input.trim().split("\n");
    var [n,k] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    var count=0;
    var sum=0;
    console.log(longestSubarray(arr,k))
  }
  
  function longestSubarray(arr,k){ 
      var left = -1
      var right = 0
      var sum = 0;     // 2 4 3 5 1
      for (i = 0;i<arr.length;i++){
          if (arr[i] % k != 0){  // 3%3 =t
              if (left == -1){ //t
                  left = i  //  l=0
              } 
              right=i //1
          }
              sum += arr[i] //2+4+3+5+1 = 15
      }
      if (sum % k != 0){ //15%3==0?false
          return 1 //
          
      } // 6
      if (left == -1){ //
          return 0
      }
      left = left + 1 //2
      right = arr.length - right;
      var size = arr.length - Math.min(left,right)
      
      var count=0;
      var ksum = 0;
      for(var i=0;i<size;i++){
         ksum +=arr[i];
      }
      if(ksum%k!=0){
          count++;
      }
          // console.log(ksum);
      var l = 0;
      var r = size;
      while(r<arr.length){
          var nsum = ksum-arr[l]+arr[r];
          if(nsum%k!=0){
              count++;
          }
          l++;
          r++;
      }
      return count;
      
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  