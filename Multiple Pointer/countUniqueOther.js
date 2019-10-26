function countUniqueValues(arr){
    const count = {};
    for( let t of arr){
        count[t] = ++count[t] || 1; 
    }
    return Object.keys(count).length;
}

//countUniqueValues([1,1,1,1,1,2]) // 2
 countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4