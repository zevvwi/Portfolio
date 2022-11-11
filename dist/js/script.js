let hamburger = document.querySelector('.hamburger'),
    close = document.querySelector('.menu__close'),
    menu = document.querySelector('.menu');

hamburger.addEventListener("click", () => {
    menu.classList.toggle('active');
})

close.addEventListener("click", () => {
    menu.classList.toggle('active');
})