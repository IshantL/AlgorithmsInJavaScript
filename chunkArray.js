const arrayChunk = (array,size)=>{
    debugger;
    var chuncked =[];
    for(let element of array){
    const last = chuncked[chuncked.length-1];
        if(!last || last.length ===size){
        chuncked.push([element]); 
    }else{
    last.push(element);
    }
    };
    return chuncked;
    }
    const ans = arrayChunk([1,2,3,4],2);
    console.log(ans);

    //solution 2

    const chunk2 = (array,size)=>{
        debugger;
        var chuncked =[];
        var i =0;
        while(i<array.length){
        chuncked.push(array.slice(i,i+size));
        i = i+size;
        }
        return chuncked;
        }
        chunk2([1,2,3,4],2);
