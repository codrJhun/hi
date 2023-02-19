  const hamburger = document.querySelector(".hamburger");

  hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active1")
    navBar.classList.toggle("active")
  }