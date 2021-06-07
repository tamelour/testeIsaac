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


// animation header and scroll //


window.addEventListener('scroll', ()=>{
    var sobre = document.querySelector('#sobre');
    var emailBox = document.querySelector('.emailbox');
    var houseFur = document.querySelector('.house-fur');
    var balconyFur = document.querySelector('.balcony-fur');
    var card = document.querySelector('.card');
    var bar = document.querySelector('.bar-progress')

    const topo = window.pageYOffset + (window.innerHeight * 3) / 4;


    // if(topo > card.offsetTop){
    //     // //////////////// circle progress /////////////

    //     var number1 = document.querySelector('#count1');
    //     var loop1 = 0;

    //     setInterval(()=>{
    //         if(loop1 == 100){
    //             clearInterval();
    //         }else{
    //             loop1+=1
    //             number1.textContent = loop1 + "%";
    //         }
    //     }, 30);


    //     var number2 = document.querySelector('#count2');
    //     var loop2 = 0;

    //     setInterval(()=>{
    //         if(loop2 == 100){
    //             clearInterval();
    //         }else{
    //             loop2+=1
    //             number2.textContent = loop2 + "%";
    //         }
    //     }, 30);


    //     var number = document.querySelector('#count3');
    //     var loop3 = 0;

    //     setInterval(()=>{
    //         if(loop3 == 100){
    //             clearInterval();
    //         }else{
    //             loop3+=1
    //             number.textContent = loop3 + "%";
    //         }
    //     }, 30);

    //     bar.classList.add('animateProgress');

    // }else{
    //     bar.classList.remove('animateProgress');
    // }

    
    if(topo > houseFur.offsetTop){
        houseFur.classList.add('animateHouseFur');
    }else{
        houseFur.classList.remove('animateHouseFur');
    }

    if(topo > balconyFur.offsetTop){
        balconyFur.classList.add('animateBalconyFur');
    }else{
        balconyFur.classList.remove('animateBalconyFur');
    }

    if(topo > sobre.offsetTop){
        sobre.classList.add('sobreAnimation');
    }else{
        sobre.classList.remove('sobreAnimation');
    }

    if(topo > emailBox.offsetTop){
        emailBox.classList.add('animationEmail');
    }else{
        emailBox.classList.remove('animationEmail');
    }

});


// expandir a imagem //



function expand(){
    var background = document.querySelector("#backgroundImage");
    var image = document.querySelector('#expandImage')
    background.classList.add('expandImage');
    image.classList.add('imgOn');

    if(parseInt(image.style.width) > 700 ){
        background.addEventListener('click', () =>{
            background.classList.remove('expandImage');
            image.classList.remove('imgOn');   
        });
    }    
}


// abrindo e fechando menu //
var menu = document.querySelector('#menuOn');
menu.style.visibility="hidden";

function menuOn(){

    if(menu.style.visibility=="hidden"){

        menu.style.visibility="visible";
        menu.classList.add("showMenu");
    
    }else{
        menu.style.visibility="hidden";
        menu.classList.remove("showMenu");
    }
}


// emailBox //

var checkbox = document.querySelector('.doubt');
var p = document.querySelector('#hide');

checkbox.addEventListener('click', ()=>{

    if(checkbox.textContent != "Duvidas"){
        p.style.display="none";
        console.log(checkbox.textContent)
    }else{
        checkbox.textContent == "Duvidas"
    }
});

// //////////////// circle progress /////////////

var number1 = document.querySelector('#count1');
var loop1 = 0;

setInterval(()=>{
    if(loop1 == 100){
        clearInterval();
    }else{
        loop1+=1
        number1.textContent = loop1 + "%";
    }
}, 30);


var number2 = document.querySelector('#count2');
var loop2 = 0;

setInterval(()=>{
    if(loop2 == 100){
        clearInterval();
    }else{
        loop2+=1
        number2.textContent = loop2 + "%";
    }
}, 30);


var number = document.querySelector('#count3');
var loop3 = 0;

setInterval(()=>{
    if(loop3 == 100){
        clearInterval();
    }else{
        loop3+=1
        number.textContent = loop3 + "%";
    }
}, 30);

//////////////////////////////

// var contact = document.querySelector('.floating')

// function floatingContact() {
//     contact.style.opacity='1'
// }

// function Close(){
//     // document.querySelector(".floating").style. = "none";
//     document.querySelector(".floating").style.opacity = "0";
// }

function toggleDiv(){

    let contact = document.querySelector('.floating');
  
    contact.classList.toggle('hide');
  
  }