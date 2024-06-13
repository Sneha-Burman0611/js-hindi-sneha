const myObject = {
    js: "jaavscript",
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by app"
}

for (const key in myObject) {
     //console.log(`${key} shortcut is for ${myObject[key]}`);        
}

const programming = ["js", "rb" , "py", "java", "cpp"]

for (const key in programming) {
      //console.log(programming[key])
    }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for(const key in map)
    {
        console.log(key);
    }
  //not iteratable   

  //objects k adar for in 
  //arrays ke andar for of
  //mostly


  //\\for...in
//   Purpose: Iterates over the enumerable properties (keys) of an object.
// Use Case: Useful for iterating over object properties.
// Example:
// javascript
// Copy code
// const myObject = { a: 1, b: 2, c: 3 };
// for (const key in myObject) {
//     console.log(key);  // Logs 'a', 'b', 'c'
// }

//\\for...of
// Purpose: Iterates over the values of an iterable object (like arrays, strings, maps, etc.).
// Use Case: Useful for iterating over elements of an array or other iterable objects.
// Example:
// javascript
// Copy code
// const myArray = [10, 20, 30];
// for (const value of myArray) {
//     console.log(value);  // Logs 10, 20, 30
// }


