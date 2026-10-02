

/*

    REMEMBER, we run for loops when we want something for 
    "n" number of times and we use while to evaluate any kind of expression
    as a conditoion 

*/

// This for loops print 5 times (0,1,2,3,4 = 5 times, until k=> 5)
console.log("\n********* for loop print for n numbers of times *************\n")
for(let k =0; k<5; k++)
{
    console.log("Print Nazmul",k,"Times")
}
/*
    we took a variable "a" which is true intially and i = 0, while loop checks,
    when a is true, print the i value and increment i = i+2, then inside the 
    while loop there is an if condition which verfies if the new incremented
    value of "i" is bigger or equal to 5. If it is, it turns  a= false and when 
    while checks to start again the loop that a = false, it stops

*/
console.log("\n****************** while loop for condition ***************\n")
var a = true
let i = 0
while(a)
{
    console.log("I will stop when i = 5 and now the value is: ", i)
    i = i+2
    if(i>=5)
    {
        a = false
    }

}

//  when we want to assign values we use "=" but when we want to compare
//  values of two, we use "=="




console.log("\n****** Print numbers that can be divided by 2 & 5 upto 50 ******\n")

/*
    This for loop print the value upto 50 if the number is divided by 2 and 5
*/
for(j=1; j<=50;j++)
{
    if( j%2 == 0 && j%5==0)
    {
        console.log("Print J: ", j)
    }
}

console.log("\n****** Print numbers that can be divided by 2 or 5 upto 50 ******\n")

/*
    This for loop print the value upto 50 if the number is divided by 2 or 5
*/
for(j=1; j<=50;j++)
{
    if( j%2 == 0 || j%5==0)
    {
        console.log("Print J: ", j)
    }
}

console.log("\n***** Print numbers  just first 5 that can be divided by 2 or 5 upto 50 ******\n")


/*
    This for loop print the first 5 values upto 50 if the number is divided by 2
    or 5. 
    
    How the for loop works?
    Before loop, it takes a variable "n" which is initially 0, now in loop it defines
    value j = 1, and checks if j is less or equal to 50 and increments after each 
    iteration 1. Now, if the number is divided by 2 or 5 it increase the value of 
    "n" by incrementing 1 each time (n++), after printing 5 numbers and when the 
    "n" value is equal to 5, it breaks the loop.
*/
n = 0;
for(j=1; j<=50;j++)
{
    if( j%2 == 0 || j%5==0)
    {
        n++
        console.log("Print j value the first 5 of 50 is: ", j)
        
        if(n==5)
        {
            break
        }
    }
}