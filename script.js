let h1 = document.querySelector("h1")
let clock = document.querySelector("#clock");

setInterval(()=>{
    let date = new Date()
    h1.innerHTML = `This is a Current Time`;
    clock.innerHTML = date.toLocaleTimeString();
},1000)

