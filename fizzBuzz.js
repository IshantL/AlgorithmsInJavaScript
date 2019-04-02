/*

It will be a function that takes in a number as a parameter which we will call numb what this function

will do is it will log out to the consul every number from 1 to numb so if we pass the number 20 into

our fizz buzz function we should see the numbers 1 through 20 logged out in our console like this.

But that is not all that our algorithm will do.

For each number if the number is divisible by three we want to log out the word fizz instead of that

number if the number is divisible by five.

We want to log out the word buzz instead of that number.

And if a number is divisible by both 3 and 5 we want to log out the word fizz buzz instead of that number.

So instead of simply logging out each number from 1 to 20 we would expect our algorithm to log out a

result that looks like this

in which every number that is divisible by 3 and 5 is replaced by the word fizzer does every number

that is divisible by three is replaced by the word fizz and every number that is divisible by 5 is replaced

by the word buzz.
 */

 fizzbuzz= () => {
     var i =1;
    while(i<=20){
        if(i % 3 === 0 && i % 5 === 0)
        console.log("fizzbuzz");
        else if( i % 3 === 0)
        console.log("fizz");
        else if( i % 5 === 0)
        console.log("buzz");
        else
        console.log(i);
        i++;
    }
 }

 fizzbuzz();