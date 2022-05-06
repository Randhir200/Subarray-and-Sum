var arr = [2,3,4,6]
var [n,k] = [4, 3];

function solve(arr,n,k){
  for(var i=0;i<n;i++){
      var window = n-i;
      var count = 0;
      var sum = 0;

      for(j=0;j<window;j++){
          sum+=arr[j];
      }

      if(sum%k!=0)count++
      for(j=window;j<n;j++){
          sum += arr[j];
          sum -= arr[j-window];
          if(sum%k!=0)count++
        }

        if(count>0){
            return count
        }
    }
    return 0;
}

console.log(solve(arr,n,k))