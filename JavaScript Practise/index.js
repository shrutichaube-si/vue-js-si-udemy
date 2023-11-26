// let a = null;
// let b = 345;
// let c = "Dhruv";
// let d = BigInt("430") + BigInt("3");
// let e = true;
// let f = Symbol("Hi this is a symbol");
// let g;
// console.log(a, b, c, d, e, f, g);
// console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);

// const item = {
//     "Harry": true,
//     "Lovish": false,
//     "Shubh": 67,
//     "Rohan": undefined
// }
// console.log(item["Harry"])

// let a = "Dhruv";
// let b = 69;
// console.log(typeof (a + b));

// const c = {
//     Dhruv: true,
//     fake: 69
// }
// console.log(c)
// c = 45
// c['friend'] = "Sush"
// c['name'] = "Jaanvi"

// const dict = {
//     Abrogate: "To revoke",
//     Byzantine: "Convoluted and complicated",
//     Cajole : "Persuade through flattery or coaxing"
// }
// console.log(dict);
// console.log(dict.Cajole);
// console.log(dict['Byzantine']);

// console.log("Operators in JS")
// let a = 10;
// let b = 20;
// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ",a*b);
// console.log("a / b = ",a/b);
// console.log("a ** b = ",a**b);
// console.log("a % b = ",a%b);

// console.log("++a = ",++a);
// console.log("a++ = ",a++);
// console.log("--a = ",--a);
// console.log("a-- = ",a--);
// console.log("a = ",a);
// console.log("a-- = ",a--);

// let a = prompt("Whats your age:");
// a = Number.parseInt(a);
// if(a<0){
//     alert("This is an Invalid Age")
// }
// else if(a<9){
//     alert("You are a fuckin kid..study plz!!")
// }
// else if (a<18 && a>=9){
//     alert("Yes you will drive the car once you reach 18 yrs of age")
// }
// else if (a<80 && a>=18){
//     alert("Yes you can drive the car")
// }
// else{
//     alert("No Timepass plz")
// }

// let a = prompt("What's your age:");
// a = Number.parseInt(a);

// switch (true) {
//   case a < 0:
//     alert("This is an Invalid Age");
//     break;
//   case a < 9:
//     alert("You are a fuckin kid..study plz!!");
//     break;
//   case a < 18 && a >= 9:
//     alert("Yes you will drive the car once you reach 18 yrs of age");
//     break;
//   case a < 80 && a >= 18:
//     alert("Yes you can drive the car");
//     break;
//   default:
//     alert("No Timepass plz");
//     break;
// }
/*let age = prompt("enter your age:")
age = Number.parseInt(age);
if(age>10 && age<20){
    console.log("Your age lies between 10 and 20")
}
else{
    console.log("Your age does not lie between 10 and 20")
}
let age = prompt("Enter your age:")
switch(age){
    case age<10 && age>20:
        console.log("Your age lies between 10 and 20");
        break;
    default:
        console.log("Your age does not lie between 10 and 20");
        break;    
}

let num = prompt("Enter the number to check if its divisible by 2 and 3");
num = Number.parseInt(num);
if(num%2 == 0 && num%3 == 0){
    console.log("Your number is divible by 2 and 3")
}
else{
    console.log("Your number is not divisible")
}
*/

//Array Functionss
//For Each
/*
const numbers = [1,2,3,4,5,6,7,8,9]
let sum = 0;

numbers.forEach(item => {
    //   console.log('a[' +index+ ']= ' +item);
    //   console.log(arr);
    sum += item;
    console.log(sum);
})

const letters = ['a','b','c','a','c','d','e','b','c','a','d','e','f']
const count = {};

letters.forEach(item => {
    if(count[item]){
        count[item] ++;
    }else{
        count[item] = 1;
    }
})
console.log(count);
*/
const numbers = [10,20,30,40,50]
const doubled = numbers.map(double)
const multiplied = numbers.map(multiply)
function double(value,index,arr){
    return value * 2
}
function multiply(value,index,arr){
    return value * index
}

const products = [
    {
    name : 'laptop',
    price : 1000,
    count : 3
},
{
    name : 'Desktop',
    price : 10000,
    count : 1
},
{
    name : 'Phone',
    price : 100,
    count : 5 
}]

const totalProductValue = products.map(item => ({
    name:item.name,
    totalValue : item.price * item.count
}))
console.log(totalProductValue)


// console.log(doubled)
// console.log(multiplied)