
function sameFrequency(num1,num2){
    // good luck. Add any arguments you deem necessary.
    if( num1.toString().length !== num2.toString().length){
        return false
    }
    var obj={};var obj2={};
    for( let t of num1.toString()){
         obj[t] = ++obj[t] || 1;
    }
    for( let t of num2.toString()){
         obj2[t] = ++obj2[t] || 1;
    }
    for( let t in obj){
        if(obj[t]!= obj2[t]){
            return false;
        }else{
            return true;
        }
    }
  }
  
  sameFrequency(34,14);
  //Given two positive integers, find out if the two numbers have the same frequency of digits.