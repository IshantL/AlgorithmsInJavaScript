/* var reverse = (str) => {
    return str.split("").reverse().join("");
}

var a =reverse("abcde");
console.log(a);
 */
/* 
var reverse = str => {
    var reversed ="";
    for ( i of str){
        reversed = i + reversed;
    }
    return reversed;

}
var a =reverse("abcde");
console.log(a);
 */

var reverse = str => {
    return str.split("").reduce((reversed,elem)=> elem + reversed,"");
}
var a =reverse("abcde");
console.log(a);