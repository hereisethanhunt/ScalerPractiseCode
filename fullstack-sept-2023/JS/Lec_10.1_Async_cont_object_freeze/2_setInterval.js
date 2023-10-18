

/***
 * create polyfill of setInterval with the help setTimeout
 * 1. setInterval -> settimout that is called at a given interval again and again
 *  Learning : whenever you want to have single source of truth -> non-primitive
 * 2. clearInterval  : simple fn that receives an object and it changes it's prop to false
 *   and setInterval only executes further setTimeouts on the basis of that flag 
 * */


/** create setInterval using setTimeout */
function mysetInterval(cb, delay) {
    let obj = {
        flag : false
    };
    function myfn(){
        if(obj.flag === false){
            cb();
            setTimeout(myfn, delay);}
    }
    setTimeout(myfn,delay)
    return obj
}
function myclearInterval(obj) {
    obj.flag = true;
}
/*******usage******/
function cb() {
    console.log("I will be called on every interval")
}
let obj = mysetInterval(cb, 1000);
// after 3 sec, call clear Interval
function clearCb() {
    console.log("cancelled th cb");
    myclearInterval(obj);// this will wont affect
}
setTimeout(clearCb, 3000);
