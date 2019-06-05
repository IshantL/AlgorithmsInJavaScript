const arrayChunk = (array,size)=>{
    debugger;
    var chuncked =[];
    for(let element of array){
    const last = chuncked[chuncked.length-1];
        if(!last || last.length ===size){
        chuncked.push(element); 
    }else{
    last.push(element);
    }
    };
    return chuncked;
    }
    const ans = arrayChunk([1,2,3,4],2);
    console.log(ans);