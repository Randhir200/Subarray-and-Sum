var n=4;
var k=3
var arr=[2, 3, 4, 6];

function longestSubarray(arr,k){
    var left = -1
    var right = 0
    var sum = 0;
    for (i = 0;i<array.length;i++){
        if (array[i] % k != 0){
            if (left == -1){
                left = i
            } 
            right = i
            sum += array[i] // 2+4 = 6
        }
    }

    if (sum % k != 0){ return 1 } // 6
    if (left == -1){ return 0}
    left = left + 1
    right = array.length - right
    var max_window_size = array.length - min(left,right)
    return window_size;
}

console.log(longestSubarray(arr,k))