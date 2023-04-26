// callback function
// function n1(name) {
// console.log(name);
// function n2(name) {
//     console.log(name);
// }
// n2(name);
// }
// n1("subu")
// function n1(name){
//     let d= 5;
//     function n2(name) {
//         return name*2;
//     }
//     console.log(n2(name)+d);
// }
// n1(10);

// function outer(){
//     // console.log('abc')
//     let name = "sup";
//     // return true
//     return name
//     // return ''
// }
// outer("sup")
// // console.log(typeof outer())
// console.log(outer('sup'))
// console.log(outer(true))

// function outer(name){
//     if(typeof name ==="string"){
//         return "its a string bro"
//     }else if (typeof name==='boolean'){
//         return "its a boolean"
//     }else if (typeof name==='number'){
//         return "its a number"
//     }
//     else{
//         return "plz give a valid datatype"
//     }
// }
// outer()
// console.log(outer(function(){}))
// console.log(outer('ahan'))
// console.log(outer(true))
// console.log(outer(8))
// console.log(typeof outer())

// function multiSt(name,age){
//     return[name,age];
// }
// console.log(multiSt("subu",20))

// function fn1(age){
//     return age*2
// }
// function fn2(age2){
//     return age2*2
// }
// console.log(fn1(fn2(12)));
// function callback(){
//     console.log('callback function is calling..')
// }
// setTimeout(callback,1000)

// let elm = document.getElementById('iii')
//     elm.addEventListener('click',function(){
//     alert('calling function.')
// })
// console.log({elm})
// let arr = [1,2,3,4,5,6];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// const [n1,n2,n3,n4] = arr; //array destruvturing
// const [a, ...b] = arr; //spread operator
// console.log({n1,n2,n3,n4});
// console.log({a,b});

//callback function
const arg = (x) => {
    return x+6
}
const arrow = (fn) => {
    return fn*4
}
console.log(arrow(arg()));
console.log(arrow(5))
//curry function
function fn(a) {
    return function(b){
        return function (c){
            return a*b*c;
        }
    }
}
console.log(fn(10)(4)(6))