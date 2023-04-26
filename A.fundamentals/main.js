let elm = document.getElementById("btn");
elm.addEventListener("click",() => alert("you clicked"));
debugger;
let name ="ashok sahu";
console.log(names);
names = "subu patro";
console.log(names);

debugger;
console.log(names); //subu patro
var names = "subu patro";
console.log(names);

{
    debugger;
    console.log(names); //error
    let names = "subu patro";
    console.log(names);
       
}

// let , const === scope(block)
// var === scope(global)
// var (if inside function === local/functional else === global)
// let/const (if inside function === local/functional else === block)
debugger;
function names2() {
  let names = "subu";
  console.log(names);
}
names();
