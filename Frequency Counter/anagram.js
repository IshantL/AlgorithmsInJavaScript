function validAnagram(str1,str2){
    // add whatever parameters you deem necessary - good luck!
    if(str1.length !== str2.length){
        return false;
    }
    const obj1 ={};
    const obj2 ={};
    
    for( let ch of str1.toLowerCase()){
        obj1[ch] = ++obj1[ch] || 1;
    }
    for( let ch of str2.toLowerCase()){
        obj2[ch] = ++obj2[ch] || 1;
    }
    for( let key in obj1){
        if(obj1[key] !==obj2[key])
        return false;
    }
    return true;
  }
  
   //validAnagram('', '') // true
  // validAnagram('aaz', 'zza') // false
  // validAnagram('anagram', 'nagaram') // true
   //validAnagram("rat","car") // false) // false
  //validAnagram('awesome', 'awesom') // false
   validAnagram('qwerty', 'qeywrt') // true
  // validAnagram('texttwisttime', 'timetwisttext') // true
  