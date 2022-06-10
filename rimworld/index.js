window.addEventListener('load', function (){
    let preloader = document.querySelector('.preloader');
    window.setTimeout(()=>{
        preloader.style.opacity = 0;
    }, 1000)
    window.setTimeout(()=>{
        preloader.style.display = 'none';
    }, 3000)
})