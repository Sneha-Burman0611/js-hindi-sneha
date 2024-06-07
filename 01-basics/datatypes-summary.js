//Primitive

//7 types : String, Number, Boolean, null, undefined,Symbol,
BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34564357678989n


//Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj =
{
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
   console.log("Hello World");
}

console.log(typeof scoreValue)
console.log(typeof anotherId)

/*Value	Type	typeof Result
"Hello"	String	"string"
42	Number	"number"
true	Boolean	"boolean"
null	Null	"object"
undefined	Undefined	"undefined"
Symbol()	Symbol	"symbol"
10n	BigInt	"bigint"*/

/*Value	Type	typeof Result
[1, 2, 3]	Array	"object"
{ name: "John", age: 30 }	Object	"object"
function() {}	Function	"function"
() => {}	Function	"function"*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);



 
