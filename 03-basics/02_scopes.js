//var c = 300 //var is very problematic sp we dont use much of it

let a = 300
if (true) {
    let a = 10
    const b = 20
    //console.log("INNER: ", a);
}


//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    //two()
}

one()

if (true) {
    const username = "hitesh"
    if(username === "hitesh")
        {
            const website = " youtube "
           // console.log(username + website);
        }
        // console.log(website);
}

//console.log(username)

// +++++++++++++++ interesting +++++++++++++++

console.log(addone(5))// THIS WILL NOT THROW ERROR
function addone(num)
{
    return num + 1

}


console.log(addTwo(5))// IT WILL THROW ERROR
const addTwo = function(num) //EXPRESSION 
{
    return num + 2
}

addTwo(5)

//WE WILL LEARN LATER ABOUT HOISTING