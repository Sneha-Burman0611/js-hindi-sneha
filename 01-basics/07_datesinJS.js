//Dates
 let myDate = new Date()
 //console.log(myDate.toString());
 //console.log(myDate.toLocaleDateString())
 //console.log(typeof myDate)

 //let myCreatedDate = new Date(2023, 0, 23, 5, 3)
 //months 0 se start hoga javascript me
 let myCreatedDate = new Date("01-14-2023")
 //console.log(myCreatedDate.toDateString());

 let myTimeStamp = Date.now()

 //console.log(myTimeStamp);
 //console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000)); //to conver it into seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})







