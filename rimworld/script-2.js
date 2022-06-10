window.addEventListener('load', function (){
    let preloader = document.querySelector('.preloader');
    window.setTimeout(()=>{
        preloader.style.opacity = 0;
    }, 1000)
    window.setTimeout(()=>{
        preloader.style.display = 'none';
    }, 3000)
})


let btnNext = document.querySelector(".next");
let btnPrev = document.querySelector(".prev");

let slides = document.querySelectorAll(".mySlides");
let i = 0;
slides[i].classList.add('block')

function nextSlides(){
      i++;
    if (i >= slides.length) {
        slides[i-1].classList.remove("block");
        i = 0;
        slides[i].classList.add("block");
    } else {
        slides[i-1].classList.remove("block");
        slides[i].classList.add("block");
    }
}

btnNext.addEventListener("click", function(){
    clearInterval(timer);
    nextSlides();
} ) 

btnPrev.addEventListener("click", function () {
    clearInterval(timer);
    i--;
    if (i < 0) {
        i = slides.length -1
        slides[0].classList.remove("block");     
        slides[i].classList.add("block");
    } else {
        slides[i+1].classList.remove("block");
        slides[i].classList.add("block");
    }
})

let timer = setInterval(nextSlides , 2000)


