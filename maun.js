setTimeout(()=>{
            window.alert("Welcome to Browser Information System");
        },3000)


console.log(window.innerWidth+ "px");
console.log(window.innerHeight+ "px");

console.log(window.screen.width +"px");
console.log(window.screen.height +"px");

console.log(window.navigator.language);
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.userAgent);

// console.log(window.location.href="https://www.google.com");


window.open("https://www.google.com", "_blank");


let counter= 0

let timer = setInterval(() => {
    counter++ 
    console.log(counter);
    
    if (counter === 10){
        clearInterval(timer);
        console.log();
        
        console.log(window.location.href="https://www.google.com");
    }
}, 1000)

