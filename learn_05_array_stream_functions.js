
var marks = [10,20,30,40,50]

/*

I HAVE WRITTEN this for loop here, because this "reduce" array stream function
is performing the same as the loop.

WHAT this loop is doing, it took a "sum" variable which is 0 outiside loop.
Iterating till the length of the array and suming up all the array elements
in "sum" by iterating with the j as the index number.

*/

console.log("\n*********  *************\n")
sum = 0
for(let j=0; j<marks.length; j++)
{
    
    sum = sum +marks[j]
}
console.log("\n*********  Total sum of the array using for loop *************\n")
console.log("Total of the marks array: ",sum)
console.log()

/*
 This reduce anonymous function takes 2 arguments, one is "sum", where we want to
 store our operation for each index "sum + mark" and 2nd "mark" is the value of 
  each index. NEXT => the operation( sum + mark), intial value of sum (0)
  */

  //    *************************** reduce ********************************

console.log("\n********* Total sum of the array using reduce *************\n")
let total_sum_of_the_arry =  marks.reduce((sum, mark)=> sum + mark,0)
console.log("Total of the marks array: ",total_sum_of_the_arry)
console.log()


console.log("\n********* Total muliple of the array using reduce *************\n")
let total_multiply_of_array = marks.reduce((multiple, mark) => multiple * mark, 1)
console.log("Total Multiple of the marks array: ",total_multiply_of_array)
console.log()

// here the intial value for sub is 150
console.log("\n********* Subtraction of the array using reduce *************\n")
let total_subtraction_of_array = marks.reduce((sub, mark) => sub - mark, 150)
console.log("Total Subtraction of the marks array: ",total_subtraction_of_array)
console.log()

// The for loop is searching for even numbers in "all_numbers" array and once
// it finds, every number it pushes to the empty  "new_even_array"

var all_numbers = [11,12,13,14,15,16,17,18,19,20]
var new_even_array = []

// ****************** EVEN NUMBERS ARRAY *********************

for(i=0; i<all_numbers.length; i++)
{   
    // if the value of index all_numbers[i] is divided by 2 then push the new 
    // values comes from "all_numbers" into "new_even_array"
    if(all_numbers[i] % 2 == 0)
    {
        new_even_array.push(all_numbers[i])
    }
}
console.log("\n********* Printing Even Number From an Array Using for loop *************\n")
console.log(" New Even Numbers Array", new_even_array)
console.log()

// Now, the above even number can be achieved in more simple way using 
// JavaScript's array function name filter

// this filter, filters all elements one by one using filter in all_numbers
// array and for every element it check if this value "num" can be divided by 2 and
// reminder is 0 then store the value in a new return array 
// "new_filtered_even_array"

// REMEMBER, "filter" function always returns a new filtered ARRAY

//    *************************** reduce ********************************

let new_filtered_even_array = all_numbers.filter(num => num % 2 == 0)

console.log("\n********* Printing Even Number From an Array using filter *************\n")
console.log(" New Even Numbers Array", new_even_array)
console.log()

/*

 REMEMBER,

 In JavaScript, use filter() when you need to extract a subset of elements from
  an array based on a condition, and use reduce() when you need to transform 
  an entire array into a single value and map is used when we want to apply a 
  condition in every elements of an array
*/


//    *************************** map ********************************

var ages = [3,4,5,6,7,8,9, 10]

let new_age_array = ages.map(change_age => change_age * 2)
console.log("\n********* Each age value in array are mutiplied by 2 *************\n")
console.log(" New Even Numbers Array", new_age_array)
console.log()

/*

    NOW,
        we will apply all the array strems in a problem. 
        The PROBLEM IS:
                        Let's say we want all the ages that can be 
                        divided by 2, then multiple each value with 3,
                        then give the total sum of the new array elements

*/

/*  first, filter applied on each element that can be divided by 2 and returned an
     array [4,6,8,10]. Then, applied map to muliply each value of the array by 3 
     and returned [12,18, 24, 30]. Finallly, the reduce variable sum which is 0 at 
     first. Then it adds new array element value each time such as
            first   sum = 0
            So,     sum + val = 0 +12 = 12
            again   sum + val = 12( new sum value) + 18 = 30
            then,   sum + val = 30 + 24 = 54
            finally sum + val = 54 + 30 = 84 is returned and 
            store in "total_new_age"


*/
let total_new_age = ages.filter(age => age % 2 == 0).map(age => age * 3).
                                        reduce((sum, val) => sum + val, 0)

console.log("\n********* All streams in one solution example *************\n")
console.log(" Final total age: ", total_new_age)
console.log()

// ********************* sorting array

/*
    JavaScript has a built in sorting function "sort()" which helps to 
    sort any String array. 

*/

var random_string = ["Xray", "Dog", "Cat", "Apple", "Human", "Lion"]

random_string.sort()
console.log("\n********* Sorting Strings *************\n")
console.log(" New sorted array ", random_string)
console.log()

/*
     However, if we want to sort an array of numbers 
    we need to provide logic 
*/

var number_of_people = [50, 23, 1, 78, 47, 7, 19, 0, 9, 11, 39, 79]

//output  0,  1, 11, 19, 23,39, 47, 50,  7, 78, 79,  9]
// see ! 7 in the middle and 9 in last
console.log(" Although sorted used but unsorted array as the array"+
                    "is number",number_of_people.sort())

// sort always returns array
number_of_people.sort((a, b) => a-b);
console.log(" Now it is sorted ",number_of_people)


