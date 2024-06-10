//Immediately Invoked FUNCTION expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})();// semicolon lgana zaroori hota hai isme

// global scope ki wjh se jo pollution hoti hai usko hatane ke liye use krte hain hm isse
(function aurcode(){
    console.log(`DB CONNECTED TWO`);
})();//named iife

//asise bhi chlalega

( () => {
    console.log(`DB CONNECTED TWO`);
})();//unnamed iife

//KUCH(parameter) PASS KARNA HAI TO KAISE KARENGE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')