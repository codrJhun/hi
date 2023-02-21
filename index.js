  const hamburger = document.querySelector(".hamburger");

  hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active1")
    navBar.classList.toggle("active")
  }


var navItems = document.querySelectorAll(".nav-bar ul li a");

navItems.forEach(function(item) {
  item.addEventListener("click", function() {
    navItems.forEach(function(item) {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});

var home = document.querySelector(".nav-bar ul li a")

window.addEventListener("load", function(){

  home.classList.add("active")
})




const aboutMe = document.querySelector('#about-me');

function animateAboutMe() {
  aboutMe.classList.add("animate");
  console.log('animateDiv() function called');
}

window.addEventListener('scroll', function() {
  const rect = aboutMe.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight && rect.bottom >= 0) {
    animateAboutMe();
  }
});