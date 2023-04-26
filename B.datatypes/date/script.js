const heading = document.getElementById('heading')
// heading.textContent = new Date()
// heading.innerHTML = new Date()
// heading.innerText = Date()
// console.innerText = new Date()
// console.innerText = new Date

heading.textContent = new Date().getDay()
heading.textContent = new Date().getMonth()
heading.textContent = new Date().getFullYear()
heading.textContent = new Date().getHours()
heading.textContent = new Date().getMinutes()
heading.textContent = new Date().getSeconds()
heading.textContent = new Date().getMilliseconds()
heading.textContent = new Date().getTime()
heading.textContent = new Date().getTimezoneOffset()
heading.textContent = new Date().getUTCDate()
heading.textContent = new Date().getUTCDay()

heading.textContent = new Date().toLocaleDateString()
heading.textContent = new Date().toTimeString()
heading.textContent = new Date().toLocaleString()
heading.textContent = new Date().toDateString()
heading.textContent = new Date().toString()

let date = new Date()
date.setDate(12)
console.log(date)

setTimeout(function ()  {
    console.log('hello')
}, 400);

setInterval(function ()  {
    return heading.textContent = date .getSeconds() 
}, 1000);
