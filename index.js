var arr = [2,3,4,6]
var [n,k] = [4,3];
function solve(arr,n,k){
for(var i=0;i<n;i++){
    var w = n-i;
    var c = 0;
    var sum = 0;
    for(var j=0;j<w;j++){
        sum+=arr[j];
    }

    if(sum%k!=0) c++;
    for(var j=w;j<n;j++){
        sum+=arr[j];
        sum-=arr[j-w];
        if(sum%k!=0) c++;
    }
    if(c>0){
     return c;
    } 
}
return 0;
}

console.log(solve(arr,n,k));