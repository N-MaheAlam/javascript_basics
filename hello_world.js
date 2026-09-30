

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

/*Here the variable c is var and below c is var, if we use "let" is "c"
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
// Now the value of required in converted to false
console.log((!required))

// Do not think that "!" will change the variable value no, required value is 
// true but we converted it  into false in the above line.
console.log(required)

// 4) object type and another is undifined type 

let null_value_type = null
console.log(null_value_type)
console.log(typeof(null_value_type))


let age_in_number = 32

console.log(age_in_number);
console.log(typeof(age_in_number))

age_in_number = "age is 32"
console.log(age_in_number);
console.log(typeof(age_in_number))




