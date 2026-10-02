
// This is one way to declare array using object "Array"

var marks = Array(5)
var marks = new Array(30,40,60,45,90)

// Or you can declare like below
console.log("\n********* Current Array *************\n")
var marks = [30,40,50,60,90]
console.log("Current Array",marks)

// new sub array which has value of index 1 and 2
console.log("\n********* New Sliced Sub Array *************\n")
 new_sub_array = marks.slice(1,3)
console.log()
console.log("New Updated  sub array is  ",new_sub_array)

console.log("\n********* Updated value in index 2 *************\n")
// change the value of index 2 which 50 into 33
marks[2] = 33
console.log()
console.log("New Updated  value in index 2 in this Array: ",marks)
console.log("\n********* Length of the Array *************\n")
console.log()
console.log("Length of this array:", marks.length)

console.log("\n********* poping from last index *************\n")
// The pop() method in JavaScript removes the last element from an 
// array and returns that element. This operation permanently mutates 
// (changes) the original array by
marks.pop()
console.log()
console.log("After poping last index value 90, new array is ", marks)

console.log("\n********* Add New Index at the End *************\n")
// If you want to add a new value at the last index of the array
marks.push(83)
console.log()
console.log("After adding last index value 83, new array is ", marks)

console.log("\n********* Add New Index at the First Index *************\n")
// If you want to add something in the first index of the array
marks.unshift(11)
console.log()
console.log("After adding first index value 11, new array is ", marks)

console.log("\n********* Give the index of 60 *************\n")
console.log()
// It will give you the index number of 60 which is 4th index
console.log("Giving back the index of 60 values: ",marks.indexOf(60))

console.log("\n********* Checks if 150 is present or not *************\n")
// It checks wether this array has value 150, if yes then returns true
// but here we don't have 150 and that's why it will return false
console.log()
console.log("Returning false as 150 is not present in " 
            +"current array",marks.includes(150))

console.log("\n********* Print All Values in Array and their sum  *************\n")
// Now, I will print all the values of the array and sum the all of the elements
sum = 0
for(let j=0; j<marks.length; j++)
{
    console.log("Printing each number present is array ", marks[j])
    sum = sum +marks[j]
}
console.log()
console.log("Total sum of numbers present in array mark is:", sum)
