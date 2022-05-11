// ES5 Function

// Named Function
function add(x,y)
{
    return x+y
}
console.log(add(15,10));

// Expression Function 
let add1 = function(x,y)
{
    return x+y
}
console.log( add1(5,10) )



// ES6 Arrow function (One line Function)
let add2 = (x,y) => x+y

console.log( add(25,30) );

let square = x => x*x
console.log( square(5) );

let msg = () => 
{ 
    console.log("This is Arrow Function")
    console.log("This is another way of writing function ")
}
msg()

let arr = ["John", "Peter", "Parker"]

// let lengths1 = arr.map(function(name){
//     return name.length
// }) 
let lengths = arr.map((name)=>name.length*2)

console.log(lengths); //[4,5,6]

