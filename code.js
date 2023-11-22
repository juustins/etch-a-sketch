
createGrids();


function createGrids(){
    let divArray = [];

    for(let i = 0; i < 16;i++){
        let gridDiv = document.createElement('div');
        gridDiv.classList.add("gridDiv");
        divArray.push(gridDiv);
    }

    const mainArea = document.querySelector("main");
    
    

    for(let i = 0; i < 16;i++){
        let gridColumn = document.createElement("div")
        gridColumn.classList.add("gridColomn")
        
        
        for(let j = 0; j < 16;j++){
            let gridDiv = document.createElement('div');
            gridDiv.classList.add("gridDiv");
            gridColumn.appendChild(gridDiv);
        }
        mainArea.appendChild(gridColumn);
    }
    
}

