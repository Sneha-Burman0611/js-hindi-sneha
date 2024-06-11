// if

if (true) {
    // This block will always execute
    console.log("This code will execute because the condition is true.");
}

//code execute hoga

if (false) {
    // This block will never execute
    console.log("This code will not execute because the condition is false.");
}

//code execute nahi hoga

const isUserLoggedIn = true;
const temperature = 41;

if (temperature < 50) {
    console.log("Temperature is less than 50");
} else {
    console.log("Temperature is 50 or greater");
}

const score = 200

//if(score > 100)
//    {
//        let power ="fly"
//        console.log(`Userr power: ${power}`);
 //   }

 //   console.log(`User power: ${power}`);

const balance = 1000

//if (balance > 500) console.log("test"), console.log("test2");//not a good practice

//if(balance > 500) console.log("test")

// // if(balance < 500) {
//     console.log("less than 500");
// }
// else if(balance < 750)
// {
//     console.log("less than 750");
// }
// else if(balance < 900)
//     {
//       console.log("less than 900");
//     }
// else{
//     console.log("less than 1200");
// }// ye wala output aayega

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard)
    {
        console.log("Allow to buy course");
    }

if(loggedInFromGoogle || loggedInFromEmail)
    {
        console.log("User logged in");
    }    

