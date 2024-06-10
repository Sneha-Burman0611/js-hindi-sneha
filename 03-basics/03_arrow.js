//this refers to this current context

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this) ;
    }
}

 //user.welcomeMessage()
 //user.username = "sam"
 //user.welcomeMessage()

 //console.log(this); //output {}

 // this cannot be used inside functions

 //function chai()
 //{
 //   let username = "hitesh"
 //   console.log(this.username);
 //}

 //chai()

 //const chai = function() {
 //   let username = "hitesh"
 //   console.log(this.username)
 //}

 //chai()
 //dono me same output

/* const chai = () => {
    let username = "hitesh"
    console.log(this.username);
 }
*/

// chai()

//-----------Arrow Function-------

//const addTwo = (num1, num2) => {
//    return num1 + num2
//}

//console.log(addTwo(3, 4))

// implicit return(mtlb return ni lgaana pddta whereas explict me lagana pddta hai )

const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4));


