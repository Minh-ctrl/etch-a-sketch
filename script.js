const container= document.querySelector('.container')
function create_grid(){
    let options= prompt("how many blocks do you want? please choose from 10-64")
    let x= options * options;
    document.documentElement.style.setProperty("--columns-row", options);
    for (let i = 0; i < x; i++){
        const block= document.createElement('div');
        block.classList.add('block__RGB');
        container.appendChild(block);
        block.addEventListener('mouseover',()=>{
            let color= Math.floor(Math.random()*16777215).toString(16) ;
            block.style.backgroundColor='#' + color;
        })
    }}
    create_grid();
