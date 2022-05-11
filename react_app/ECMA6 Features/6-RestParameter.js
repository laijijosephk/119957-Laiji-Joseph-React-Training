// Spread Operator(...) Packing of Data in one variable
// function add(a,b,...numbers)
// {
//     console.log(a,b);
//     console.log(numbers);
// }
// add(1,2,3,4,5,6,7,8,9,10,11,12)


// (...) Spread operator as UnPacking
// Example-1
let odd = [1,3,5]
let combine = [2,4,6,...odd ]
console.log(combine);


// Example-2
function add(a,b,c)
{
    console.log(a,b,c);
}
add(...odd);