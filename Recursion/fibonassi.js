function fib(num){
    // add whatever parameters you deem necessary - good luck!  
    if(num ===1 || num ===2)return 1
    return fib(num-1) + fib(num -2)
  }
  fib(4) // 3