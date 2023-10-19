var a = 10;
let abc = "Hello"
function fn() {
    console.log("Hi I am Fn");
}

setTimeout(()=>{
    console.log(a, "this is a weird issue with multiple scripts");
},2000);


