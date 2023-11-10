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

const pendingContainer = document.querySelector(".pending-cont");
const finishedContainer = document.querySelector(".finished-cont");


let currentModalColor = "green";
let colors = ["pink", "blue", "purple", "green"];
let deleteFlag = false;

let allTickets = localStorage.getItem("allTickets") || [];
if(typeof allTickets === "string")
{
    allTickets = JSON.parse(allTickets);
    populateUI();
}
const uid = new ShortUniqueId();

/***Local storage render */
function populateUI(){
    for(let i=0;i<allTickets.length;i++)
    {
        createTicket(allTickets[i].content, allTickets[i].color,allTickets[i].id, allTickets[i].isPending)
    }
}

/************ change color /filter ticket ****************************************/
toolBoxPriorityContainer.addEventListener("click", function (e) {
    if(e.target === e.currentTarget)
        return;

    const currColorElement = e.target;
    const cColor = currColorElement.classList[1];
    const ticketBoxArr = pendingContainer.querySelectorAll('.ticket-cont');
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
    const ticketBoxArr = pendingContainer.querySelectorAll('.ticket-cont');
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



function createTicket(content,currentColor, cid, isPending) {

    if(content === "")
        return;
    const id = cid || uid();
    // make sure to do this using dom manipulation only using fragments.
    // ticket creation extract out as function.
    const ticketCont = document.createElement('div');
    ticketCont.setAttribute('class','ticket-cont');
    ticketCont.setAttribute('draggable',true);
    ticketCont.innerHTML = `<div class="ticket-color ${currentColor}"></div>
    <div class="ticket-id">${id}</div>
    <div class="ticket-area">${content}</div>
    <div class="lock-unlock"><i class="fa-solid fa-lock"></i></div>`

    if(isPending || !cid)
        pendingContainer.appendChild(ticketCont);
    else
        finishedContainer.appendChild(ticketCont);

    const ticketColorHeader = ticketCont.querySelector('.ticket-color');
    const ticketAreaEditable = ticketCont.querySelector('.ticket-area');
    const lockUnlockElement = ticketCont.querySelector('.lock-unlock');
    handleLockListener(lockUnlockElement,ticketAreaEditable, id);
    ticketColorHeaderListener(ticketColorHeader, id);
    deleteTicketListener(ticketCont,id);

    if(!!cid)
        return;

    let dataObj = {
        id,
        content,
        color: currentColor,
        isPending : true
    }
    allTickets.push(dataObj);
    updateLocalStorage();
}

function deleteTicketListener(ticketCont,id) {
    ticketCont.addEventListener('click', function(){
        if(deleteFlag) {
            ticketCont.remove();
            const listOfItems = allTickets.filter((ticket)=> ticket.id !== id);
            allTickets = listOfItems;
            updateLocalStorage();
        }
    })
}

function ticketColorHeaderListener(ticketColorHeader,id){
    ticketColorHeader.addEventListener('click',toggleHeaderColor);
    function toggleHeaderColor(e){
        const cTicketColor = e.target.classList[1];
        const idx = colors.indexOf(cTicketColor);
        const nextIdx = ((idx+1) % colors.length);
        const nextColor = colors[nextIdx];
        e.target.classList.remove(cTicketColor);
        e.target.classList.add(nextColor);

        const ticketObj = allTickets.find((ticket)=> ticket.id === id);
        ticketObj.color = nextColor;
        updateLocalStorage();
    }
}

function handleLockListener(lockUnlockElement,ticketAreaEditable, id) {
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
        const ticketObj = allTickets.find((ticket)=> ticket.id === id);
        ticketObj.content = ticketAreaEditable.textContent;
        updateLocalStorage();

    }
}

function updateLocalStorage(){
    localStorage.setItem("allTickets",JSON.stringify(allTickets));
}





