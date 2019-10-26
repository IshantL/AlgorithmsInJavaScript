function sumZero(arr){
    for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                console.log(arr[i],arr[j]);
                if(arr[i]+ arr[j] ===0){
                    return [arr[i],arr[j]];
                }
    }
}

}

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
//sumZero([-2,0,1,3]) // undefined
//sumZero([1,2,3]) // undefine