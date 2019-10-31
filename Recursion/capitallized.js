function capitalizeWords (arr) {
    // add whatever parameters you deem necessary - good luck!
    let cap=[];
    if(Array.isArray(arr)){
       for(let i =0; i<arr.length;i++){
       cap.push(capitalizeWords(arr[i]))
   }     
    }else{
       return arr.toUpperCase();
    }
      return cap;
  }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

  function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }
