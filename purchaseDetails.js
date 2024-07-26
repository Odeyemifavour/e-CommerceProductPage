const plusOrder = document.querySelector('.plus-order');
const minusOrder = document.querySelector('.minus-order');
const orderNumber  = document.querySelector('.order-num');

let a = 1;
plusOrder.addEventListener('click', ()=>{
    a++;
    a =(a< 10) ? "0" + a : a;
    orderNumber.innerText = a;
});

minusOrder.addEventListener('click',()=>{
    if(a > 1){
        a--;
        a = (a <10 ) ? "0" + a : a;
        orderNumber.innerText = a;
    }
});

const blueColorAirpod = document.querySelector('.blue-color-airpod');
const greyColorAirpod = document.querySelector('.grey-color-airpod');
const whiteColorAirpod = document.querySelector('.white-color-airpod');
const blackColorAirpod = document.querySelector('.black-color-airpod');
const pinkColorAirpod = document.querySelector('.pink-color-airpod');

const blueAirpod = document.querySelector('.blue-airpod');
const greyAirpod = document.querySelector('.grey-airpod');
const whiteAirpod = document.querySelector('.white-airpod');
const blackAirpod = document.querySelector('.black-airpod');
const pinkAirpod = document.querySelector('.pink-airpod');

const blueImage = document.querySelector('.blue');
const greyImage = document.querySelector('.grey');
const whiteImage = document.querySelector('.white');
const blackImage = document.querySelector('.black');

blueColorAirpod.addEventListener('click',()=>{
    pinkAirpod.style.display = "none";
    greyAirpod.style.display = "none";
    whiteAirpod.style.display = "none";
    blackAirpod.style.display = "none";
    blueAirpod.style.display = "block";
    blueImage.classList.add('image-hover');
    whiteImage.classList.remove('image-hover');
    blackImage.classList.remove('image-hover');
    greyImage.classList.remove('image-hover');
})

blueImage.addEventListener('click',()=>{
    blueImage.classList.add('image-hover');
    greyImage.classList.remove('image-hover');
    whiteImage.classList.remove('image-hover');
    blackImage.classList.remove('image-hover');

    blueColorAirpod.classList.add('image-hover');
    greyColorAirpod.classList.remove('image-hover');
    whiteColorAirpod.classList.remove('image-hover');
    pinkColorAirpod.classList.remove('image-hover');
    blackColorAirpod.classList.remove('image-hover');

    pinkAirpod.style.display = "none";
    greyAirpod.style.display = "none";
    whiteAirpod.style.display = "none";
    blackAirpod.style.display = "none";
    blueAirpod.style.display = "block";
})

greyColorAirpod.addEventListener('click',()=>{
    pinkAirpod.style.display = "none";
    blueAirpod.style.display = "none";
    whiteAirpod.style.display = "none";
    blackAirpod.style.display = "none";
    greyAirpod.style.display = "block";

    greyImage.classList.add('image-hover');
    blueImage.classList.remove('image-hover');
    whiteImage.classList.remove('image-hover');
    blackImage.classList.remove('image-hover');
})

greyImage.addEventListener('click',()=>{
    greyImage.classList.add('image-hover');
    blueImage.classList.remove('image-hover');
    whiteImage.classList.remove('image-hover');
    blackImage.classList.remove('image-hover');

    greyColorAirpod.classList.toggle('image-hover');
    blueColorAirpod.classList.remove('image-hover');
    whiteColorAirpod.classList.remove('image-hover');
    pinkColorAirpod.classList.remove('image-hover');
    blackColorAirpod.classList.remove('image-hover');

    greyAirpod.style.display = "block";
    whiteAirpod.style.display = "none";
    blackAirpod.style.display = "none";
    blueAirpod.style.display = "none";
    pinkAirpod.style.display = "none";
})

whiteColorAirpod.addEventListener('click',()=>{
    pinkAirpod.style.display = "none";
    blueAirpod.style.display = "none";
    greyAirpod.style.display = "none";
    blackAirpod.style.display = "none";
    whiteAirpod.style.display = "block";

    whiteImage.classList.add('image-hover');
    greyImage.classList.remove('image-hover');
    blueImage.classList.remove('image-hover');
    blackImage.classList.remove('image-hover');
})

whiteImage.addEventListener('click',()=>{
    whiteImage.classList.add('image-hover');
    blueImage.classList.remove('image-hover');
    greyImage.classList.remove('image-hover');
    blackImage.classList.remove('image-hover');

    whiteColorAirpod.classList.toggle('image-hover');
    blueColorAirpod.classList.remove('image-hover');
    greyColorAirpod.classList.remove('image-hover');
    pinkColorAirpod.classList.remove('image-hover');
    blackColorAirpod.classList.remove('image-hover');

    whiteAirpod.style.display = "block";
    greyAirpod.style.display = "none";
    blackAirpod.style.display = "none";
    blueAirpod.style.display = "none";
    pinkAirpod.style.display = "none";
})

blackColorAirpod.addEventListener('click',()=>{
    pinkAirpod.style.display = "none";
    blueAirpod.style.display = "none";
    whiteAirpod.style.display = "none";
    greyAirpod.style.display = "none";
    blackAirpod.style.display = "block";
    blackImage.classList.add('image-hover');
    greyImage.classList.remove('image-hover');
    blueImage.classList.remove('image-hover');
    whiteImage.classList.remove('image-hover');
})

blackImage.addEventListener('click',()=>{
    blackImage.classList.add('image-hover');
    blueImage.classList.remove('image-hover');
    whiteImage.classList.remove('image-hover');
    greyImage.classList.remove('image-hover');

    blackColorAirpod.classList.toggle('image-hover');
    blueColorAirpod.classList.remove('image-hover');
    whiteColorAirpod.classList.remove('image-hover');
    pinkColorAirpod.classList.remove('image-hover');
    greyColorAirpod.classList.remove('image-hover');

    blackAirpod.style.display = "block";
    whiteAirpod.style.display = "none";
    greyAirpod.style.display = "none";
    blueAirpod.style.display = "none";
    pinkAirpod.style.display = "none";
})
pinkColorAirpod.addEventListener('click',()=>{
    greyAirpod.style.display = "none";
    blueAirpod.style.display = "none";
    whiteAirpod.style.display = "none";
    blackAirpod.style.display = "none";
    pinkAirpod.style.display = "block";
    whiteImage.classList.remove('image-hover');
    greyImage.classList.remove('image-hover');
    blueImage.classList.remove('image-hover');
    blackImage.classList.remove('image-hover');
})





