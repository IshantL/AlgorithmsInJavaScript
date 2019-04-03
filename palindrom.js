//is palindrom

function isPalindrome(text){
if(text === text.split('').reverse().join(''))
return true;
else
return false;
}
console.log(isPalindrome("MADAM"));

function isPalindrome(text){
    let end = "";
    text.split('').forEach(element => {
        end = element+end
    });
    if(end === text)
    return true;
    else
    return false;
    }
    console.log(isPalindrome("MADAM"));

function isPalindrome(string) {
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    var lettersArr = [];
    charactersArr.forEach(char => {
      if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });
    
    return lettersArr.join('') === lettersArr.reverse().join('');
  }
   
  isPalindrome("Madam, I'm Adam");


/* var palindrom = str =>{
   return str === str.split("").reverse().join("");
}
console.log( palindrom("abcba")); */

/* var palindrom = str =>{
    return str.split("").every((char,i)=>{
        return char === str[str.length - i -1]
    });
 }
 console.log( palindrom("abcba")); */

 var palindrom = str =>{
    return str.split("").forEach((char,i)=>{
        debugger;
        return char === str[str.length - i -1]
    });
 }
 console.log( palindrom("abcba"));

