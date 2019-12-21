

const container = document.getElementById('container');
let row;
let cols;
let gridColor = "purple";

function gridMaker( rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for( i= 0; i <(rows * cols); i++){
       

        let cell = document.createElement('div');
        cell.innerText= (i+1);
        container.appendChild(cell).className ='grid-item';
    };


};

gridMaker(16,16);



//Add hover effect to change the color of a square when the mouse has gone over it. 
// Can use the 'onmouseover'

container.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = gridColor;
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500000);
  }, false);
  