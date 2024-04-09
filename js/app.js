let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop < 110) {
        document.getElementById("navbar").classList.add("sticky");
    } else {
        document.getElementById("navbar").classList.remove("sticky");
    }
}

