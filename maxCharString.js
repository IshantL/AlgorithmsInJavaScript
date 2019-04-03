var maxchar = str =>{
var strMap ={};
var counter = 0;
var maxCount = "";

 for( item of str){
    if(strMap[item]){
        strMap[item]++;
    }else{
        strMap[item] =1;
    }
 }

 for ( item in strMap){
     if(strMap[item] > counter){
         counter = strMap[item];
         maxCount = item;
     }
 }
 return maxCount;
}

console.log(maxchar("aaabbbbcc"));
// return b