

const gridContainer = document.querySelector(".grid-container");

function createGrids(gridSize){
    const grid = document.createElement("div");
    grid.classList.add("grid");
    for(i = 0 ;i<gridSize*gridSize;i++){
       gridContainer.appendChild(grid.cloneNode(true)); 
    }
}

function fillgrid(e){
    e.target.style.backgroundColor = "black";
}

function clearGrid(){
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid)=>{
        grid.style.backgroundColor = "white";
    });
}


createGrids(16);
console.log(document.querySelector(".grid"));
const grids = document.querySelectorAll(".grid");
grids.forEach((grid)=>{
    grid.addEventListener('mouseover',fillgrid);
});
const resetBttn = document.querySelector(".reset");
resetBttn.addEventListener('click',clearGrid);

