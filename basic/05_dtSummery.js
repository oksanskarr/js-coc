// Primitive Data Types 
// 7-Type => 1)String 2)Number 3)Boolean 4)null 5)undefined 6)Symbol 7)BigInt

// ReferenceType / NonPrimitive
// 1)Array 2)Object 3)function

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId);


//Reference D.T

const heros =["IronMan","Batman","Thor","Hulk"];    //Array

let myObj = {
    name : "jerry",
    age : 25,
}

let myFunction = function(){
    console.log("hellO world");
    
}

// +++++++++++++++++++++++++++++++++++++++++++++++++

// Premitive Type ==> Stack Memory
// NonPremitive Type ==> Heap Memory

let name = "sanskar";
let anotherName = name;

anotherName = "jerry";
console.log(name);
console.log(anotherName);

let userOne ={
    email :"sanskar@gmail.com",
    password : "sankfsl"
}
 let userTwo = userOne

 userTwo.email  = "jerry@gmail.com"
 console.log(userOne.email);
 console.log(userTwo.email);
 
 