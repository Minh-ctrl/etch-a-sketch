const container= document.querySelector('.container');
const button= document.querySelector('.btn__size');
const slider= document.querySelector('.slider__size');

function slider_size(){
    create_grid(32);

    slider.addEventListener('change',()=>{
        create_grid(slider.value);
    })
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
    slider_size();
    choose_size();
