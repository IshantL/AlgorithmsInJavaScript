function countUniqueValues(arr){
    let count =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==arr[i+1]){
            count++;
        }
    }
    return count;
}

//countUniqueValues([1,1,1,1,1,2]) // 2
 countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4