function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
let f1 ={}, f2={};
for(let t of arr1){
    f1[t] = ++f1[t] || 1;
}
for(let t1 of arr2){
        f2[t1] = ++f2[t1] || 1;
};

for( let key in f1){
    if(!(key**2 in f2)){
        return false;
    }
    if(f2[key**2] !== f1[key]){
        return false
    }
}
return true;
}
var t1 = performance.now();
console.log(same([1,2,5,3],[1,9,4,9]));
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) } seconds.`)