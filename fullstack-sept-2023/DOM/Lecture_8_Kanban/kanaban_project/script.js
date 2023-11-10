/**
 * 1. Toggle editable behaviour
 * 2. change the color on click
 * */
/*****************Given ticket selection****************************/

const toolBoxPriorityContainer = document.querySelector(".toolbox-priority-cont");

const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".remove-btn");

const modal = document.querySelector(".modal-cont");
const prioritySetModal = modal.querySelector(".priority-color-cont");
const textArea = modal.querySelector(".textarea-cont");
const priorityColorArray = modal.querySelectorAll(".priority-color");

const mainContainer = document.querySelector(".main_cont");

let currentModalColor = "green";
let colors = ["pink", "blue", "purple", "green"];
let deleteFlag = false;


const uid = new ShortUniqueId();
/************ change color /filter ticket ****************************************/
toolBoxPriorityContainer.addEventListener("click", function (e) {
    if(e.target === e.currentTarget)
        return;

    const currColorElement = e.target;
    const cColor = currColorElement.classList[1];
    const ticketBoxArr = mainContainer.querySelectorAll('.ticket-cont');
    for(let i=0;i< ticketBoxArr.length;i++)
    {
        const currticketElem = ticketBoxArr[i].querySelector('.ticket-color');
        const ticketColor = currticketElem.classList[1];
        if(ticketColor === cColor)
            ticketBoxArr[i].style.display = 'block';
        else
            ticketBoxArr[i].style.display = 'none';
    }
});

toolBoxPriorityContainer.addEventListener("dblclick", function (e) {
    console.log(e.target,"e.target");
    console.log(e.currentTarget,"e.currentTarget");

    if(e.target === e.currentTarget)
        return;
    const ticketBoxArr = mainContainer.querySelectorAll('.ticket-cont');
    for(let i=0;i< ticketBoxArr.length;i++)
        ticketBoxArr[i].style.display = 'block';
});
/******************** modal and ticket creation ********************************/

prioritySetModal.addEventListener("click", function (e) {
    if(e.target === e.currentTarget)
        return;
    currentModalColor = e.target.classList[1];
    console.log(currentModalColor);
    for(let i=0;i< priorityColorArray.length;i++)
    {
        priorityColorArray[i].classList.remove('active');
    }
    e.target.classList.add('active');
});

modal.addEventListener("keypress", function (e) {

    if(e.key !== "Enter")
        return;

    const content = textArea.value;
    const ticketColor = currentModalColor;
    
    createTicket(content,ticketColor);
    modal.style.display = 'none';
    textArea.value = '';
    currentModalColor = 'green';
    for(let i=0;i< priorityColorArray.length;i++)
    {
        if(priorityColorArray[i].classList[1] === 'green')
            priorityColorArray[i].classList.add('active');
        else
            priorityColorArray[i].classList.remove('active');
    }
});

addBtn.addEventListener("click", function () {
    modal.style.display = 'flex';
});


deleteBtn.addEventListener("click",function (e) {
    if(!deleteFlag)
        e.target.style.color = "red";
    else
        e.target.style.color = "black";

    deleteFlag = !deleteFlag;
});


function createTicket(content,currentColor) {
    console.log(content,currentColor);
    // make sure to do this using dom manipulation only using fragments.
    // ticket creation extract out as function.
    const ticketCont = document.createElement('div');
    ticketCont.setAttribute('class','ticket-cont');
    ticketCont.innerHTML = `<div class="ticket-color ${currentColor}"></div>
    <div class="ticket-id">qzdxx2</div>
    <div class="ticket-area">${content}</div>
    <div class="lock-unlock"><i class="fa-solid fa-lock"></i></div>`
    mainContainer.appendChild(ticketCont);

    const ticketColorHeader = ticketCont.querySelector('.ticket-color');
    const ticketAreaEditable = ticketCont.querySelector('.ticket-area');
    const lockUnlockElement = ticketCont.querySelector('.lock-unlock');
    handleLockListener(lockUnlockElement,ticketAreaEditable);
    ticketColorHeaderListener(ticketColorHeader);
    deleteTicketListener(ticketCont);
}

function deleteTicketListener(ticketCont) {
    ticketCont.addEventListener('click', function(){
        if(deleteFlag)
            ticketCont.remove();
    })
}

function ticketColorHeaderListener(ticketColorHeader){
    ticketColorHeader.addEventListener('click',toggleHeaderColor);
    function toggleHeaderColor(e){
        const cTicketColor = e.target.classList[1];
        const idx = colors.indexOf(cTicketColor);
        const nextIdx = ((idx+1) % colors.length);
        const nextColor = colors[nextIdx];
        e.target.classList.remove(cTicketColor);
        e.target.classList.add(nextColor);
    }
}

function handleLockListener(lockUnlockElement,ticketAreaEditable) {
    lockUnlockElement.addEventListener('click',toggleLock);
    function toggleLock(e) {
        console.log(ticketAreaEditable,"hello");
        if(e.target.classList.contains('fa-lock'))
        {
            ticketAreaEditable.setAttribute('contenteditable','true');
            e.target.classList.remove('fa-lock');
            e.target.classList.add('fa-lock-open');
        }
        else
        {
            ticketAreaEditable.setAttribute('contenteditable','false');
            e.target.classList.remove('fa-lock-open');
            e.target.classList.add('fa-lock');
        }
    }
}







