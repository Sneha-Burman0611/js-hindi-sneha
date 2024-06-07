// singleton //object.create
//constructor se bnega to hamesha singleton banega
const mySym = Symbol("key1")


// object literals 
const JsUser= {
    name: "Sneha",
    "full name": "Sneha Burman",
    [mySym]: "mykey1",
    age: 18, 
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: "false",
    lastLoginDays: ["Monday", "Saturday"]
    }

    //console.log(JsUser.email)
    //console.log(JsUser["email"])
//console.log(JsUser[mySym])

JsUser.email = "hotesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting);
