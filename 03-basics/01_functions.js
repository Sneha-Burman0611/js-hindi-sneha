

function sayMyName() {
    console.log("S");
    console.log("N");
    console.log("E");
    console.log("H");
    console.log("A");
}
//sayMyName()

function addTwoNumbers(number1, number2)
{
    console.log(number1 + number2);
}

//addTwoNumbers(3,4)

function addTwoNumbers(number1, number2){
    //let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
//console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
     //console.log(loginUserMessage("hitesh"))
    console.log(loginUserMessage())

    function calculateCartPrice(...num1)// rest operator
    {
        return num1
    }

    console.log(calculateCartPrice(200, 400, 500, 2000))

    function calculateCartPrice(val1, val2, ...num1) { //use of rest operator
        return num1;
    }
    
    console.log(calculateCartPrice(200, 400, 500, 2000)); // Output: [500, 2000]

    const user = {
        username: "hitesh",
        prices: 199
    }

    function handleObject(anyobject) {
        console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`); 
    }

    //handleObject(user);
    handleObject({
        username: "sam",
        prices: 399
    })

    const myNewArray = [200, 400, 100, 600]

    function returnSecondValue(getArray){
        return getArray[1]
    }

    console.log(returnSecondValue(myNewArray));
    console.log(returnSecondValue([200, 400, 500, 1000]));

