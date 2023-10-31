
const starContainer = document.querySelector("#star_container");
const countSpan = document.querySelector("#count");
const starsArr = document.querySelectorAll(".star");
let pidx = 0;
/**bubbling usecase and listener on parent */
starContainer.addEventListener("click", function (e) {
    //console.log(e.target.classList);
    if(e.target.classList.contains('star')) // e.target.classlist list of all the classes of that target
    {
        pidx = e.target.getAttribute('idx');
        countSpan.textContent = pidx;
        changeStar(pidx);
    }
});
starContainer.addEventListener("mouseover",function(e){
    if(e.target.classList.contains('star')) {
        const rating = e.target.getAttribute('idx');
        changeStar(rating);
    }
});

starContainer.addEventListener("mouseleave",function(e){        
        changeStar(pidx);
});

function changeStar(pidx) {
    for(let index = 0;index < starsArr.length; index++)
    {
        starsArr[index].classList.remove('yellow');
    }
    for(let index =0;index < pidx; index++)
    {
        starsArr[index].classList.add('yellow');
    }
}
















