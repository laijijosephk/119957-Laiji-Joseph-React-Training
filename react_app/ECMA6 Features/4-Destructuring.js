let even = [2,4,6,8,10];

// let a = even[0]
// let b = even[1]
// let c = even[2]
// let d = even[3]
// let e = even[4]

// Destructuring with array
let [a, b, c, d, e] = even;  // 2,4,6,8,10
let [x, y] = even;           // 2,4   
let [p, ,  ,  ,  q] = even   // 2,10   

// console.log(p,q);

// Destructuring with Object


let person = {
    name:'Sarah',
    country:'Nigeria',
    job:'Developer'
}

// console.log(person.job)
// console.log(person.name)
// console.log(person.country)

let {name, country, job} = person
console.log(name)
console.log(job)
console.log(country)