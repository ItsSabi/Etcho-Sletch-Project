

const container = document.getElementById('container');

let rows ;
let cols;

function gridMaker( rows, cols){

    for( i= 0; i <(rows * cols); i ++){
        let cell = document.createElement('div');
        cell.innerText= (i+1);
        container.appendChild(cell).className ='grid-item';
    };


};

gridMaker(16,16);