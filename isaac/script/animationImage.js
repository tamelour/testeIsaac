let time = 3000,
    images = document.querySelectorAll(".imagem"),
    countImage = images.length,
    count = 0;

function load(){
    images[count].classList.remove("animation");
    count++

    if(count == countImage){
        count = 0;
    }

    images[count].classList.add("animation");
}

window.addEventListener('load', ()=>{
    setInterval(()=>{
        load();
    }, time);
})