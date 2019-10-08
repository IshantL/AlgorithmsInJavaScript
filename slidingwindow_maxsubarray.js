//Given an array of integers and a number, write a function called maxsubarray , which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
function maxSubarraySum(arr,range){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length < range) return null;
    let maxsum = 0;
    let tempSum =0;
    for(let i =0; i< range; i++){
        maxsum +=arr[i];
    }
    tempSum = maxsum;
    for(let i=range; i<arr.length; i++){
        tempSum = tempSum + arr[i] - arr[i-range];
        maxsum = Math.max(maxsum,tempSum);
    }
  return maxsum;
  }
  
  maxSubarraySum([100,200,300,400],2);


  function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    let max = -Infinity;
     for(let i=0; i< arr.length - num +1; i++){
         let temp =0;
         for(let j =1 ; j<= num ; j++){
             temp += arr[i+j];
         }
         if(temp>max){
             max= temp;
         }
     }
    return max;
  }
  
  // maxSubarraySum([1,2,5,2,8,1,5],2) // 10
  // maxSubarraySum([1,2,5,2,8,1,5],4) // 17
  maxSubarraySum([4,2,1,6],1) // 6
  // maxSubarraySum([4,2,1,6,2],4) // 13
  // maxSubarraySum([],4) // null