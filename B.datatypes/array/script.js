// const { functions } = require("lodash");

// const heading = document.getElementById('heading')
// heading.textContent = 'something'
// console.log(heading)
// let arr1 = []
// console.log(arr1)

// let arr2 = new Array()
// console.log(arr2)

// let arr3 = Array()
// console.log(arr2)
// let str = 'subu'
// let bool = false
// let num = 6

// console.log(Array.isArray(arr1))
// console.log(Array.isArray(arr2))
// console.log(Array.isArray(arr3))
//  console.log(Array.isArray(str))
// console.log(Array.isArray(bool))
// console.log(Array.isArray(num))

// console.log(typeof arr1)
// console.log(typeof arr2)
// console.log(typeof arr3)

// let arr = [];
// let num = 1;
// let obj = {};
// let fn = function () {};
// let str = 'string 1'
// let bool = true

// console.log (arr.length);
// console.log(arr instanceof Array);
// console.log(num instanceof Number);
// console.log(arr instanceof Object);
// console.log(obj instanceof Object);
// console.log(fn instanceof Function);
// console.log(fn instanceof Object);
// console.log(str instanceof String);
// console.log(str instanceof Object);
// console.log(bool instanceof Object);

// console.log(null instanceof Object);
// console.log(undefined instanceof Object);
// console.log(typeof null);
// console.log(typeof undefined);

// methods and properties
// let obj = {
//        neme : 'subu',  //property
//   function(){}  //method
// }
// let obj1 = new Object()
// console.log(typeof obj)
// console .log(typeof obj1)

// let arr = [];
// let arr1 = {};
// console.log(Array.isArray(arr))

// console.log(Array.isArray(arr1))

// console.log(arr.length)
// console.log(arr)
// console.log(arr.push('subu'))
// console.log(arr)
// console.log(arr.length)
// console.log(arr.push('nanu'))
// console.log(arr)
// console.log(arr.length)

// console.log(arr.length)
// console.log(arr)
// console.log(arr.unshift('subu'))
// console.log(arr)
// console.log(arr.length)
// console.log(arr.unshift('nanu'))
// console.log(arr)
// console.log(arr.length)

// console.log(arr.length)
// console.log(arr)
// console.log(arr.shift('subu'))
// console.log(arr)
// console.log(arr.length)
// console.log(arr.shift('nanu'))
// console.log(arr)
// console.log(arr.length)

// console.log(arr.length)
// console.log(arr)
// console.log(arr.pop('subu'))
// console.log(arr)
// console.log(arr.length)
// console.log(arr.pop('nanu'))
// console.log(arr)
// console.log(arr.length)

// let arr3 = ['supriya','kritarth','rinki','mumu','dudu'];
// console.log(arr3[1])
// console.log(arr3[0])
// console.log(arr3[2])
// console.log(arr3[3])
// console.log(arr3[4])

// console.log (arr3.includes())
// console.log (arr3.includes('mumu'))
// console.log (arr3.includes('dudu'))
// console.log (arr3.includes('gelu'))

// console.log(arr3.at(1))
// console.log(arr3.at(2))
// console.log(arr3.at(7))

let arr = [1,2,3,4,5,6,7,8,9 ]
console.log(arr.includes(1))
console.log(arr.includes(2))
console.log(arr.includes(00000002))
console.log(arr.includes('x'))
console.log(arr.includes(+'0'))

console.log(arr)
console.log(arr.fill(8))

const arr8=[6,7,8,9,0,3]
console.log(arr8)

console.log(arr8.sort())
console.log(arr8.sort(function(a,b){
    return b-a
}))
console.log(arr8.sort(function(a,b){
    return a-b
}))

let arr2 = [
    {
        name:'subu',
        age:20
    },
    {
        name:'ahan',
        age:.5
    },
];
console.log({arr2});
// console.log(arr2.map((value,index,arr)=>))
console.log(arr2.map(function(value,index,arr){
    return value.age
}))
function callback(value,index,arr){
    return value.age
}
console.log(arr2.map(callback))

let items = [
    {
      img: "no image",
      Totalrating: 2.7,
      ratings: 11,
      reviews: 3,
      price: 27000,
      specifications: {
        panel_type: "IPS Panel",
        Screen_resolution: "quad HD",
        brightness: 300,
        response_time: "4ms",
        refresh_rate: "75hz",
        warrenty: "3 years",
      },
    },
    {
      img: "no image",
      Totalrating: 4,
      ratings: 11,
      reviews: 3,
      price: 27500,
      specifications: {
        panel_type: "IPS Panel",
        Screen_resolution: "quad HD",
        brightness: 300,
        response_time: "4ms",
        refresh_rate: "75hz",
        warrenty: "3 years",
      },
    },
    {
      img: "no image",
      Totalrating: 4.1,
      ratings: 11,
      reviews: 3,
      price: 28000,
      specifications: {
        panel_type: "IPS Panel",
        Screen_resolution: "quad HD",
        brightness: 300,
        response_time: "4ms",
        refresh_rate: "75hz",
        warrenty: "3 years",
      },
    },
  ];
  
//   console.log({ items });
  // console.log(items.filter((elm)=>{
  //     return elm.Totalrating < 3
  // }))
  console.log(
    items.filter((elm) => {
      return elm.price > 27000;
    })
  );
  
//   console.log(
//     _.filter(items, (elm) => {
//       return elm.price > 27000;
//     })
//   );
  
//   console.log(
//     _.filter(items, (elm) => {
//       return elm.Totalrating < 3;
//     })
//   );
    

    







