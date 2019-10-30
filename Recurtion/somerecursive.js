function someRecursive(arr, fun){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length <1){ return false}
    if( fun(arr[0])) {return true}
     return someRecursive(arr.slice(1),fun);
  }

  // SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
