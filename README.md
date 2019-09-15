# DS and algo

## Steps:
Please open index.html in browser and open console for the output
Replace the src in index.html script tag to load the desired algorithm.

## Time complexity and Big O notation
- It is an method to clasiify how scalable is the algo is, and ait allow us to estimate the worst case of an algo or 
how long the algo takes based on the input size.

1. O(1) constant - as the input increase but the operations performed remains the same as hence it is constant.
2. O(n) -linear  - as the input increases the operations in proportional to the input and hence it gets increased based on input.
3. O(n^2)
4. O(log n)-Binary search

We're now going to discuss a topic called Big O big-O is a notation used to classify how scalable an

algorithm or function is.

And it allows us to estimate the worst case a runtime of an algorithm or how long it takes the algorithm

to complete based on the input size.

So what this means is that Big O informs us of how much slower an algorithm will run if it's input size

grows if the input size gets larger say an array of 100 elements instead of an array of 50 elements.

Will the runtime of the function stay the same.

Will the runtime get proportionally larger as the input size increases.

Will the runtime get exponentially larger.

Or will the runtime change in some other way.

This is what Big-O notation tells us and it describes how performant a function or an algorithm is.

Let's do an example to help us visualize how big O works.

If we have a function called log that simply takes in an array and it logs out the first two elements

in the array why it's Big O notation or runtime.

Going to be the runtime of this function is going to be constant.

Which we write as 0 of one in Big-O notation.

We know that the runtime is constant because as the input size increases or in this case as we increase

the size of the array the number of operations that we perform never changes.

We still only log out the first two elements no matter how large the array gets.

This is called Constant runtime and is written as 0 of 1 in Big-O notation.

We can see this visualized and this graph as the input size increases the X access the time that it

takes to run the function never changes which is on the y axis.

Let's do another example.

Now we have a function called the log of all which takes in an array and that logs out every element

in that array was the func.

What is the runtime of this function.

Well we know that we have to do an operation on every single element in the array now.

So as the input size increases our runtime will also increase.

For this function our runtime will increase proportionally to how much our input increases and that

makes sense right.

If our array has 5 elements we will have to perform 5 operations or log it out 5 times if it has 6 elements

we will have to perform 6 operations.

If it has 7 elements we will have to perform seven operations and so on.

This is called linear runtime because the runtime is proportional to the input and we write it as 0

of an in Big-O notation where O stands for the function we are evaluating and end stands for the size

of the input.

Let's run through two more run times or time complexity as there are very often seen throughout engineering

and programming and that we will come across in this course the next runtime that we will explore is

exponential runtime.

So now we have a function called ADD and log which takes in an array.

What it does is it gives us every possible combination of pairs in the array iterates through the whole

array and every element that it hits it goes through the whole array and hits on every element again.

So all possible pairs are made.

That's why we have two nested for loops here.

So for example if we have an array of three elements we have nine pairs that are logged out and if we

have an array of four elements we get 16 pairs logged out and so on.

This is exponential as we add one element to the input.

The runtime makes an exponential jump.

You can see this visualize on the graph and you can tell that this is not very efficient or performant.

If you write a function like this in your code you probably won't be able to notice the performance

issues with very small inputs.

But as your inputs start to scale and become very large a function with exponential time complexity

becomes very inefficient and can slow down in application.

So we try to stay away from creating functions that have this runtime as much as possible and exponential

runtime is written as O of and squared in Big O notation.

Now the final runtime that we will explore is logarithmic runtime and it is very performance.

An example of a logarithmic algorithm is binary search and you can see the code for this over here.

Now instead of running through this code let's think about it conceptually in any binary search algorithm.

We will have two inputs.

One is a list that must be sorted in some way either numerically from least to greatest or from Greatest

To least or alphabetically etc. has to be sorted in some way.

And our other input is simply just a single value that we want to try and search for within our array

binary search has a logarithmic runtime because with every operation that we perform we are cutting

the input in half.

This is great because even if we have a huge input we are only going to be looking at a fraction of

the elements to find the one that we are searching for.

Let's take a real life practical example a binary search if you had a physical dictionary and you wanted

to find a single word in that dictionary you would find it by doing binary search.

Probably without even realizing it.

Let's say that you are looking for the word house in your dictionary.

You would open up the dictionary to the middle and you would notice that you are in the section.

Well you know that house will be before the M.S. so we can totally forget about the second half of the

book.

So we just cut our input size or the number of elements that we have to search through in half.

We are now left with the front half of the book so we will go into the middle of this section and we

will notice that we are now in the F section.

We know the word house will be after the section.

So we throw away f and everything before it.

So we just cut our input sizes in half again we are now left with sections g through L..

We go to the middle of what we have left and we wind up in Section I.

We throw away everything after because we know House will not be in that area.

We go to the middle of what is left and we are now in the H section and we have successfully found the

word house.

This is essentially binary search and you can tell that it is efficient because we only performed about

four operations to find what we were looking for when our input had 26 elements as our input size grows

the number of operations that we will perform will not grow proportionally but it will grow logarithmically.

If we had an input size of 4000 elements it would only take us about 12 operations to find the element

that we are looking for.

This is really powerful and really efficient.

Binary Search is an example of a logarithmic runtime or time complexity which is written as all of a

log.

And in Big-O notation and you can see it depicted on our graph

that is it for our introduction to run time and Big-O notation now that we know what time complexity

and Big O notation are.

Let's code our harmless around some no algorithm.

There is a way to code it out in exponential time complexity and there is a way to code it out in linear

time complexity.

Obviously we want to do what is more performant.

So we will build it in linear time complexity.
