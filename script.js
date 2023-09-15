
const gridContainer = document.querySelector(".grid-container");

function createGrids(gridSize){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.opacity = "0";
    // grid.style.width = (320/gridSize)+"px";
    const containerWidth = getComputedStyle(gridContainer).width;
    grid.style.width =(parseInt(containerWidth)/gridSize)+"px";
    for(i = 0 ;i<gridSize*gridSize;i++){
       gridContainer.appendChild(grid.cloneNode(true)); 
    }
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid)=>{
        grid.removeEventListener('mouseover',eraseGrid);
        grid.removeEventListener('mouseover',shadeMode);
        grid.removeEventListener('mouseover',fillGridColor);
        grid.addEventListener('mouseover',fillGridBlack);
    });

}



function reset(){
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid)=>{
        grid.removeEventListener('mouseover',eraseGrid);
        grid.removeEventListener('mouseover',shadeMode);
        grid.removeEventListener('mouseover',fillGridColor);
        grid.addEventListener('mouseover',fillGridBlack);
        grid.style.opacity = "0";
    });
}
function eraseGrid(e){
    e.target.style.opacity = "0";
}
function fillGridBlack(e){
    // console.log("black");
    e.target.style.opacity = "1";
    e.target.style.backgroundColor = "black";
}
function fillGridColor(e){
    const color = document.querySelector("#color-selector");
    e.target.style.opacity = "1";
    e.target.style.backgroundColor = color.value;
}
function shadeMode(e){
    const color = document.querySelector("#color-selector");
    // console.log(e.target.style.opacity);
    if(parseInt(e.target.style.opacity)!==1){
        e.target.style.backgroundColor = color.value;
        // console.log("inside if");
        let newOpacity = parseFloat(e.target.style.opacity)+0.1;
        // console.log(newOpacity);
        e.target.style.opacity = newOpacity ;
    }
}


function layout(e){
    createGrids(parseInt(e.target.value));
}

createGrids(16);


const choiceLayout = document.querySelector("#layout-choice");
choiceLayout.addEventListener("change",layout);

const resetBttn = document.querySelector("#reset");
resetBttn.addEventListener('click',reset);

const eraseBttn = document.querySelector("#eraser");
eraseBttn.addEventListener('click',function(){
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid)=>{
        grid.addEventListener('mouseover',eraseGrid);
    });
});

const colorPenBttn = document.querySelector("#color-pen");
colorPenBttn.addEventListener("click",function(){
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid)=>{
        grid.removeEventListener('mouseover',eraseGrid);
        grid.removeEventListener('mouseover',shadeMode);
        grid.removeEventListener('mouseover',fillGridBlack);
        grid.addEventListener('mouseover',fillGridColor);
    });
});

const penBttn = document.querySelector("#black-pen");
penBttn.addEventListener("click",function(){
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid)=>{
        grid.removeEventListener('mouseover',eraseGrid);
        grid.removeEventListener('mouseover',shadeMode);
        grid.removeEventListener('mouseover',fillGridColor);
        grid.addEventListener('mouseover',fillGridBlack);
    });
});

const shadingPen = document.querySelector("#shading-pen");
shadingPen.addEventListener("click",function(){
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid)=>{
        grid.removeEventListener('mouseover',eraseGrid);
        grid.removeEventListener('mouseover',fillGridBlack);
        grid.removeEventListener('mouseover',fillGridColor);
        grid.addEventListener('mouseover',shadeMode);
    });
});







