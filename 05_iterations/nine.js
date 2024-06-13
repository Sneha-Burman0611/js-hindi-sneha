const myNums = [1, 2, 3];

// Using reduce with function
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);

// Using reduce with arrow function
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal); // Output: 6

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 2999
    },
    {
        itemName: "data science course",
        price: 5999 // Fixed the missing colon here
    }
];

const priceToPay = shoppingCart.reduce((acc, item) => item.price, 0)

console.log(priceToPay);