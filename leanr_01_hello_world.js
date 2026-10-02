

/*      ======== Data Types in JavaScript 01-02 ============== */

// To print something in console, we use "console.log("print this statement")"
console.log("Hello Nazmul, Welcome to JavaScript")

// To declare a variable we use var, let, const
// 1) number type
let a = 32

// print variable "a" 
console.log(a)

// Printing the data types of "a"
console.log(typeof(a))


// decimal number is also treated as number in javascript
let b = 543.5665
console.log(b);
console.log(typeof(b))

/*Here the variable c is var and below c is var, if we use "let" in "c"
it will not accept the new  variable because it is here string and 
below var c = a+b is a number. So, assaigning something completely new in
an existing declared variable only possible in javascript if we use "var"
instead of "let". You can try and check by changing for var to let.

THAT MEANS, var allows to declare the variable in completely refresh format

*/

// 2) String type
var c = "My name is Nazmul Mahe Alam"
console.log(c)
console.log(typeof(c))

// REMEMBER - both "c" declared above and below should be "var". One cannot
// be "var" and other is "let"
var c = a+b
console.log(c)
console.log(typeof(c))

// 3) Boolean type
let required = true
console.log(required)
console.log(typeof(required))

// only  boolean value can be changed by using "!" (not) but not any other type
// Now the value of required in presented to false but the actual value is 
// is the same as above "true"
console.log((!required))

// Do not think that "!" will change the variable value, no, required value is 
// true but we converted it  into false in the above line.
console.log(required)

// 4) object type and another is undifined type 

let null_value_type = null
console.log(null_value_type)
console.log(typeof(null_value_type))


/*
if you see below code of "age_in_number", first I declared it as a number 
then I declared it as a string but we learnt that "let" doesn't allow to 
reassign but here it is possible because first I declared "age_in_number"
with "let" but 2nd time I just call the variable and assigned with new
variable. I didn't use "let"
*/

let age_in_number = 32

console.log(age_in_number);
console.log(typeof(age_in_number))

age_in_number = "age is 32"
console.log(age_in_number);
console.log(typeof(age_in_number))

// const is used when we donot want to change a variable in our entire project
// or we can say const variable cannot be reassigned or redeclared 
const name_real = "N-Mahe Alam"
console.log(name_real)




