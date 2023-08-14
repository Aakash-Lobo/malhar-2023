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