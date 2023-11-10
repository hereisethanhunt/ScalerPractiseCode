// console.log("Js attached");
const containers = document.querySelectorAll('.container');
let draggedBox = null;
console.log(containers);
containers.forEach((container) => {
    // info whenver drag behaviour starts 
    container.addEventListener("dragstart", (event) => {
        console.log("Drag is started on ", container);
        draggedBox = event.target;
        event.target.style.opacity="0.5";
    })
    // when you are dragging over a drop point , only triggered when you are in draggable area  
    container.addEventListener("dragover", (event) => {
        event.preventDefault();
    })
    // when you either leave the draggable container / press esc
    container.addEventListener("dragend", (event) => {
        console.log("Dragging is finished", container);
        console.log(event.target,"dragend");
        event.target.style.opacity = "1";
    })
    // drop represent -> when you drop a draggable element in a drop zone
    container.addEventListener("drop", (event) => {
        console.log("Drop happened");
        
      
        if (draggedBox) {
            container.appendChild(draggedBox);
            console.log(draggedBox,"sds");
            const isPending = container.classList[0] == "pending-cont" ? true : false;
            const cId = draggedBox.querySelector(".ticket-id").innerText;
            console.log("cId", cId);
            let ticketObj = allTickets.find((ticketObject) => {
                return ticketObject.id == cId;
            })
            ticketObj.isPending = isPending;
            updateLocalStorage();
        }
        //container ---> if it is pending or finished
        // update ur obj --> using draggedbox
        // allTickets is accessible here. and extract ur obj.
        // then update the isPending to whatever is needed
        // update the isPending
    })

})
