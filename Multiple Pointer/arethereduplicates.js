//Implement a function called, areThereDuplicates  which accepts a variable number of arguments, checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
    let map={};
    for(let t of args){
      map[t] =++map[t]|| 1;
      if(map[t]>1){
          return true;
      }
    }
    return false;
  }
  
  
  
  areThereDuplicates(1,2,3,4);

  function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a - b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }
  
  areThereDuplicates(1,4,3,6,2,2,3);