const item = document.getElementById("root");
item.textContent = 'hello world'
console.log({ item});

// declaration of a function
// names()
// names()
// function names(){
//     console.log('this is function1')
// }
// function names(){
//     console.log('this is function2')
// }
// // calling a function
// var fun1 = function(){
//     console.log("calling fn1/");
// };
// let fun2 = function(){
//     console.log("calling fn2/");
// };
// let fun3 = function () {
//     return {};
// };
// console.log(typeof fun3());
// console.log(
//     typeof (function () {
//         return "";
//     }
//     )()
// );
 // ES6 es2015(arrow function)
// const fun4 = () => {
//     console.log("arrow function");
// };
// fun4();
//? function with argruements
"use strict"
function arg1() {
    console.log(typeof arguments)
    console.log(typeof arguments.callee)
    console.log(typeof arguments.length)
    console.log( arguments)
    console.log( arguments.callee)
    console.log(arguments.length)
    arguments[5] = 5;
    console.log( arguments [0])
    console.log( arguments [1])
    console.log( arguments[2])
    console.log( arguments[3])
    console.log( arguments[4])
    console.log( arguments[5])
    console.log(arguments.length)
    for (let i = 0 ; i <= arguments.length;i++)console.log(arguments[i]);
}

arg1("","a",2,false);
function abc(name,age,job,company) {
    console.log(name);
    console.log(age);
    console.log(job);
    console.log(company);
    console.log({name , age, job, company});
}
abc("subu ",20,"student","rit")
abc("subu",20);

// dafault parameter
function abc (name,age=20,job= "student"){
    console.log(name);
    console.log(age);
    console.log(job);
    // console.log(company);
    console.log({name , age, job});
}
abc("subu",20,"student","rit");
abc("subu",20);
abc("subu");

console.log('hello world')
let alexa = "what happened subu tell me";
console.log(alexa);
function getuser(){
    console.log(alexa);
  console.log(this)
  console.log('hello world')
}

getuser();
// function restparamspre(p1,p2,p3,p4,p5){
//     console.log({p1,p2,p3,p4,p5}); //total argurements
//     console.log(arguments.length);
    
//     for (let i=0; i <= arguments.length; i++){
//         console.log(arguements[i]);
//     }
//     let arr = [];
    
//     // ? new loop for object and array {for..of}
//     for (values of arguements){
//         console.log(values);
//         arr.push(values)
//     }
//     console.log(arr)
// }
// restparamspre("subu",20,"suno sab ki karo man ki","best person for me nanu","biriyani")

// function restparams(p,p1,p2,...rest){
//     console.log({p1,rest}); //total arguments
//     console.log(arguments.length);
//     console.log(typeof rest);
//     console.log(typeof arguments);
//     console.log(Array.isArray(rest));
//     console.log(Array.isArray(arguments));

//     console.log(rest.length); //all of the array method is work in rest
//     console.log(arguments.length); //all the array method is work in rest
//     // for (let i =0 ; i<= arguments.length; i++){
//     //     console.log(arguments[i]);
//     // }
//     // // ? new loop for object and array { for ..of}
//     // for (values of rest){
//     //     console.log(values);
//     // }
// }
// restparams("subu",20,"suno sab ki karo man ki","best person for me nanu","biriyani","ahan")