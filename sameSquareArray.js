function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}

var t1 = performance.now();
console.log(same([1,2,3,5,6,7,8,9,0],[1,2,4,5,6,7,8,9,0]));
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1)} seconds.`)