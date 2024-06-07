// Initializing arrays
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[1]);  // Outputs the second element of myArr

// Array methods (commented out for now)

// myArr.push(6);  // Adds 6 to the end of myArr
// console.log(myArr);  // [0, 1, 2, 3, 4, 5, 6]

// myArr.pop();  // Removes the last element from myArr
// console.log(myArr);  // [0, 1, 2, 3, 4, 5]

// myArr.unshift(9);  // Adds 9 to the start of myArr
// Note: Unshift is not recommended for large arrays as it is time-consuming due to re-indexing
// console.log(myArr);  // [9, 0, 1, 2, 3, 4, 5]

// myArr.shift();  // Removes the first element from myArr
// console.log(myArr);  // [0, 1, 2, 3, 4, 5]

// Check if an array includes a certain element
// console.log(myArr.includes(9));  // false

// Find the index of a certain element
// console.log(myArr.indexOf(3));  // 3

// Join the array elements into a string
const newArr = myArr.join();

console.log(myArr);  // Outputs the original array [0, 1, 2, 3, 4, 5]
console.log(typeof newArr);  // Outputs 'string', as join() returns a string

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);