

/*

    REMEMBER, we run for loops when we want something for 
    "n" number of times and we use while to evaluate any kind of expression
    as a conditoion 

*/
console.log("\n********* for loop print for n numbers of times *************\n")
for(let k =0; k<5; k++)
{
    console.log("Print Nazmul",k,"Times")
}

console.log("\n****************** while loop for condition ***************\n")
var a = true
let i = 0
while(a)
{
    console.log("I will stop when i = 5", i)
    i = i+2
    if(i>=5)
    {
        a = false
    }

}

//  when we want to assign values we use "=" but when we want to compare
//  values of two, we use "=="


console.log("\n****** Print numbers that can be divided by 2 & 5 upto 50 ******\n")


for(j=1; j<=50;j++)
{
    if( j%2 == 0 && j%5==0)
    {
        console.log("Print J: ", j)
    }
}

console.log("\n****** Print numbers that can be divided by 2 or 5 upto 50 ******\n")


for(j=1; j<=50;j++)
{
    if( j%2 == 0 || j%5==0)
    {
        console.log("Print J: ", j)
    }
}

console.log("\n***** Print numbers  just first 5 that can be divided by 2 or 5 upto 50 ******\n")

n = 0;
for(j=1; j<=50;j++)
{
    if( j%2 == 0 || j%5==0)
    {
        n++
        console.log("Print j value the first 5 of 50 ", j)
        
        if(n==5)
        {
            break
        }
    }
}