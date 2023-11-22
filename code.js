

createGrids(16);
createPromtButton();

function createPromtButton(){
    const mainArea = document.querySelector("main");

    let button = document.createElement("button");
    button.addEventListener("click", () => askForGridSize())
    button.textContent = "Adjust gridsize"

    let buttonArea = document.createElement("div")
    buttonArea.attribute = "#buttonArea";
    buttonArea.appendChild(button);

    mainArea.insertBefore(buttonArea,mainArea.firstChild);
}

function askForGridSize(){
    let gridsize = prompt("Gridsize(16): ","16")
    const mainAA = document.querySelector("main")
    mainAA.removeChild(mainAA.querySelector(".gridArea"))
    createGrids(gridsize);
}


function createGrids(gridSize){

    const mainArea = document.querySelector("main");
    let gridArea = document.createElement("div");
        gridArea.classList.add("gridArea");
    
    

    for(let i = 0; i < gridSize;i++){
        let gridColumn = document.createElement("div")
        gridColumn.classList.add("gridColomn")

        for(let j = 0; j < gridSize;j++){
            let gridDiv = document.createElement('div');
            gridDiv.classList.add("gridDiv");
            gridDiv.addEventListener("mouseover",function(){
                gridDiv.style.backgroundColor = "pink";
            });
            gridColumn.appendChild(gridDiv);
        }
        gridArea.appendChild(gridColumn);
        
    }
    mainArea.appendChild(gridArea);
    
}

