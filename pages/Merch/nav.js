const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");

  mobile_menu.classList.toggle('is-open');
});

const navbar = document.getElementById('navbar');
window.onscroll = () => {
    if (window.scrollY > 10) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};



/*

scrolling cards javscript test 

let holder = document.querySelectorAll('.container')[0],
  cards = document.querySelectorAll('.card');

let preActiveCard = cards[1];
let nextActiveCard = cards[2];

function scrollLeft() {
  holder.classList.remove('next');
  holder.classList.remove('reset');
  holder.classList.add('next');
  
  preActiveCard.classList.remove('active');
  nextActiveCard.classList.add('active');
  setTimeout(reset, 600);
}

function reset() {
  holder.classList.remove('next');
  holder.classList.add('reset');
  preActiveCard.classList.add('active');
  nextActiveCard.classList.remove('active');
}

setInterval(scrollLeft, 1500);


*/