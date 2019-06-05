const anagrams = ( strA, strB)=> {
    var map ={};
    for(let ch of strA.toLowerCase()){
        map[ch]= map[ch] ||map[ch]+1;
    }
}