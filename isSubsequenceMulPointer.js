// which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, 
function isSubsequence(str1,str2) {
    // good luck. Add any arguments you deem necessary.
    let str1Array =str1.split('');
    let str2Array =str2.split('');
    let p1=0,p2=0;
    for( let i =0; i< str1Array.length; i++){
        if(str1Array[p1] === str2Array[p2]){
            p1++;p2++;
        }else{
            p2++
        }
        if( p1 === str1Array.length -1){
            return true;
        }
    }
    return false;
  }
  isSubsequence("abc","abracadabra");