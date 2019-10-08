function averagePair(arr, avg){
    // add whatever parameters you deem necessary - good luck!
    let left =0;
    let right = arr.length -1;
    let tempAvg =0;
    for(let t of arr){
      tempAvg = (arr[left] + arr[right])/2;
      if( tempAvg === avg){
          return true;
      }else if( tempAvg < avg){
          left ++;
         
      } else{
           right --;
          }
    }
    return false;
  }
  
  averagePair([1,2,2],2.5)
  // Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.