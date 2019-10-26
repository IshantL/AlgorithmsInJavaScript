function reverseInt( number){
    return Math.sign(number)*parseInt(number.toString().split("").reverse().join(""));
}

console.log(reverseInt(21));


/* function reverseInt( number){
    //try this .....
    var rev =0;
    debugger;
   while(number > 1){
       rem = number%10;
       number = number/10;
       rev =  rev* 10 + rem; 
   }
   return rev;
}

console.log(reverseInt(21));


 */