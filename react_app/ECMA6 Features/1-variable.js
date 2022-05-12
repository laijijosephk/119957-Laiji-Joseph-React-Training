var a = 10;
var b = 20;
// var is a keyword used to create a functional scope

// let : it is used to declare a variable having local or block scope
// const: for declaring constant variable and it is also block scoped
function sayHi()
{
    if(true)
    {
        const a = 10;
        let message = "Welcome to Koenig Solution";
        console.log(message);  //message
        a++;
    }
    // console.log(message);
}


sayHi();