 console.log("****************** if statement printing ***************")
let a = 5
if( a<10)
{
    console.log("{a} is smaller than 10")
}
else
{
    console.log("This will not print")
}

console.log("****************** else statement printing ***************")
let b = false

// this if(b) means if b is true, is some lanuage we use "if(b = true)" like that
if(b)
{
   console.log("This will not print as is not true means false") 
}
else
{
    console.log("Else statement printed as, b is false")
}

console.log("****************** ! (NOT) USING ***************")
//  REMEMBER, here we made the b= false into true by using "!" but the actual
//  value of "b" is always "false"
if(!b)
{
    console.log("Used the ! by making the false b into true")
}
else
{
   console.log("Will not be printed") 
}

console.log("****************** while loop print i ***************")
/*
While loop is used when we match a condition and if it is true then perform
the code in while block. ONCE we achieve our desire result from 
while loop, MAKE SURE you trun the condition statement false.

IN the below example, let's say, we want to print from 0 to 10. First, we
declared i is 0 outside of the loop. So, while loop checks the value if it is
lower than 10 or equal to 10 or not. Once it finds the i value is less than 10 
or equal to 10, it keeps printing i value. Inside the while you may see, every
time when we print the i value, after than we have increment the value of i. 
Everytime it prints i value and increments and when it reaches that i =11, bigger
than the condition, it stops the while loop.
*/
let i = 0
while(i<= 10)
{
    console.log("The of is this time is: ", i)
    // means i = i+1
    i++
}
/*
 in while loop when i=11 it stops and it exit from the while loop.
 IN THE , do-while loop what it does, it always first peform the task then check
 with the condition. So, here, this do-while loop, increment i by 1. So,
 the new value is 12 and in prints in the console. After that it checks, condition
 and finds if the i value is smaller and equal to 10 then do again but here the i
 value is 12 and it stops.
*/
console.log("************** do while loop- print first then perfome while *************")
do{
    i++
    console.log("Print new i", i)
    // make sure you always end your do-while loop with semicolon,
}while(i<=10);

