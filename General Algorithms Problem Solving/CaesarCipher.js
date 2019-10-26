//Caesar Cipher
function caesarCipher(str, num){
let alph = str.split('');
var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
var newArray = [];
alph.forEach(element => {
    var index = validCharacters.indexOf(element);
    if(index >= 0){
       newIndex= index+(num%26);
       if (newIndex > 25) newIndex = newIndex - 26;
       if (newIndex < 0) newIndex = 26 + newIndex;
       newArray.push(validCharacters[newIndex]);
    }
    else{
        newArray.push(element);
    }
});
return newArray.join('');
}

var ans = caesarCipher('zoo keeper',2);
console.log(ans);
