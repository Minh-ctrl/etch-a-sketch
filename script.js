const container= document.querySelector('.container');
const button= document.querySelector('.btn__size');
function default_gridsize(){
    create_grid(16);
}
function choose_size(){
    button.addEventListener('click',()=>{
        let options = prompt('how many blocks do you want? please choose from 10-64');
        if(options < 0 || options >65 || options === undefined || options === null){
            alert("Invalid Input, try again")
            default_gridsize();
        }
        else{
        create_grid(options);
    }})
}
function create_grid(grid){
    let x= grid * grid;
    document.documentElement.style.setProperty("--grid-size", grid);
    for (let i = 0; i < x; i++){
        const block= document.createElement('div');
        block.classList.add('block__RGB');
        container.appendChild(block);
        block.addEventListener('mouseover',()=>{
            let color= Math.floor(Math.random()*16777215).toString(16) ;
            block.style.backgroundColor='#' + color;
        })
    }}
    default_gridsize();
    choose_size();