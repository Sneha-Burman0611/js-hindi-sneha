const userEmail = []
if(userEmail) {
    console.log("Got user email");
}
else{
    console.log("Dont have user email");
}

// falsy values

//false, 0, -0, BigInt On, null, undefined, Nan

//truthy values
// "0", 'false', " ", [], {}, funtion(){}//empty function

if(userEmail.length === 0)
    {
        console.log("Array is empty");
    }
 
const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
    {
        console.log("Object is empty");
    }

// Nullish Coalescing Operator (??): null undefined

let val1;
 //val1 = 5 ?? 10  //output 5
 //val1 = null ?? 10 //output 10
//val1 = undefined ?? 15 //output 15
//val1 = null ?? 10 ?? 15  //output 10
 //console.log(val1);

 // Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")

