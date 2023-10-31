"use strict";
// ## Requirements
// Must have features
//     * pass time in hours, minute and second
// * validation so that if user enters any time
//  
//              * edge cases -> validation
//                  * negative values
//                   * hours > 24 
// * greater 60 then it should move to left bit
// * start the count down 
//       * start, pause, continue 
// 

// Good to have
//     * reset option 

// ## Approach

// selected elements
// btns
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
const resetBtn = document.getElementById("reset");

// inputs
const minInput = document.getElementById("min");
const hrsInput = document.getElementById("hr");
const secInput = document.getElementById("sec");
let saveCountDownTime = 0; // save the countdown time on pause
let counterID; // id for setinterval

// 1. click -> start ->
//     pause -> display : block, start : hide
startBtn.addEventListener("click", function () {
    // 3 things -> 
    // 1. taking the input
    let mins = minInput.value || 0;
    let hrs = hrsInput.value || 0;
    let secs = secInput.value || 0;

    const {
        updatedSecs, 
        updatedMins, 
        updatedHrs
    } = updateTimeToLeftBit(secs,mins,hrs);

    minInput.value  = updatedMins;
    hrsInput.value = updatedHrs;
    secInput.value = updatedSecs;

    let dataInSeconds = parseInt(updatedSecs,10) + 
    parseInt(updatedMins,10)*60 + 
    parseInt(updatedHrs,10)*60*60;

    if(dataInSeconds === 0){
        alert("Please enter some value");
        return;
    }

    timer(dataInSeconds);
    pauseBtn.style.display = 'inline-block';
    startBtn.style.display = 'none';

})
pauseBtn.addEventListener("click", function () {
    clearInterval(counterID);

    continueBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';


})
continueBtn.addEventListener("click", function () {
    timer(saveCountDownTime);
    pauseBtn.style.display = 'inline-block';
    continueBtn.style.display = 'none';

})
resetBtn.addEventListener("click", function () {

    clearInterval(counterID);
    saveCountDownTime = 0;
    startBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
    continueBtn.style.display = 'none';
    minInput.value  = '00';
    hrsInput.value = '00';
    secInput.value = '00';
})



/***********************helper functions**************************/
function timer(countDownTime) {

    counterID = setInterval(()=>{
        countDownTime--;
        saveCountDownTime = countDownTime
        //console.log(countDownTime);

        let calculatedHrs = Math.floor(countDownTime/3600);
        let calculatedMins = Math.floor(countDownTime/60);
        let calculatedSecs = countDownTime % 60;
        console.log(calculatedHrs,"hrs");
        console.log(calculatedMins,"mins");
        console.log(calculatedSecs,"secs");

        const {
            updatedSecs, 
            updatedMins, 
            updatedHrs
        } = updateTimeToLeftBit(calculatedSecs,calculatedMins,calculatedHrs);
        minInput.value  = updatedMins;
        hrsInput.value = updatedHrs;
        secInput.value = updatedSecs;

        if(countDownTime === 0) {
            clearInterval(counterID);
            console.log("The timer has finished");
            return;
        }
    },1000);


}


function updateTimeToLeftBit(secs,mins,hrs) {
    if(secs >= 60){
        mins++;
        secs = secs - 60;
    }

    if(mins >= 60){
        hrs++;
        mins = mins - 60;
    }

    return {
        updatedSecs : secs,
        updatedMins : mins,
        updatedHrs : hrs
    }
}







/***
 * DRY -> do not repeat yourself
 * Single responsibility principles
 * */
