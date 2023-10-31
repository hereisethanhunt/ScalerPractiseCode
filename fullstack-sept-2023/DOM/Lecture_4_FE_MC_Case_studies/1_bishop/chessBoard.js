// init -> fn -> build whole chessboard
window.addEventListener("load", function () {
    let table = document.querySelector("#table");
    // chess grid creation  
    for(let ri=0;ri<8;ri++)
    {
        let tr = document.createElement("tr");
        for(let ci=0;ci<8;ci++)
        {
            let td = document.createElement("td");
            td.setAttribute("class",`box ${(ri + ci) % 2 === 0 ? 'white' : 'black'}`);
            td.setAttribute("data-id",`${ri}-${ci}`);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    let boxesArr = document.querySelectorAll(".box");
    table.addEventListener("mouseover", function (e) {

        const cellData = e.target.getAttribute('data-id');
        let [cRow, cCol] = cellData.split("-");
       
        for(let i =0; i< boxesArr.length; i++)
        {
            boxesArr[i].classList.remove('yellow');
        }
        let storage = {}; 
        storage[cellData] = true;
        console.log(storage,"storage")
        topLeft(cRow,cCol,storage);
        topRight(cRow,cCol,storage);
        bottomLeft(cRow,cCol,storage);
        bottomRight(cRow,cCol,storage);

        for(let i =0; i< boxesArr.length; i++)
        {
            const dataId = boxesArr[i].getAttribute('data-id')
            if(storage[dataId] === true)
            {
                boxesArr[i].classList.add('yellow');
            }
        }
    })

    function topLeft(cRow,cCol,storage) {
        cRow--;
        cCol--;
        while(cRow >= 0 && cCol >= 0)
        {
            storage[`${cRow}-${cCol}`] = true;
            cRow --;
            cCol --;
        }
    }

    function topRight(cRow,cCol,storage) {
        cRow--;
        cCol++;
        while(cRow >= 0 && cCol < 8)
        {
            storage[`${cRow}-${cCol}`] = true;
            cRow --;
            cCol ++;
        }
    }

    function bottomRight(cRow,cCol,storage) {
        cRow++;
        cCol++;
        while(cRow < 8 && cCol < 8)
        {
            storage[`${cRow}-${cCol}`] = true;
            cRow ++;
            cCol ++;
        }
    }

    function bottomLeft(cRow,cCol,storage) {
        cRow++;
        cCol--;
        while(cRow < 8  && cCol >= 0)
        {
            storage[`${cRow}-${cCol}`] = true;
            cRow ++;
            cCol --;
        }
    }


})