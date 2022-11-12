let hamburger = document.querySelector('.hamburger'),
    close = document.querySelector('.menu__close'),
    menu = document.querySelector('.menu');
    window = document.querySelector('.menu__overlay');

hamburger.addEventListener("click", () => {
    menu.classList.toggle('active');
});

close.addEventListener("click", () => {
    menu.classList.toggle('active');
});

const counter = document.querySelectorAll('.checkpoint__percentage');
      line = document.querySelectorAll('.checkpoint__line-main .checkpoint__line-second');

counter.forEach( (item, i) => {
    line[i].style.width = item.innerHTML;
});