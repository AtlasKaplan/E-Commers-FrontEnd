document.addEventListener('DOMContentLoaded', function () {
    var hamburgerMenu = document.getElementById('hamburger-menu');
    var mobileMenu = document.getElementById('mobile-menu');
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    hamburgerMenu.addEventListener('click', function () {
        mobileMenu.style.left = '0%';
        overlay.style.display = 'block';
    });

    overlay.addEventListener('click', function () {
        mobileMenu.style.left = '-100%';
        overlay.style.display = 'none';
    });

    document.getElementById('close').addEventListener('click', function () {
        mobileMenu.style.left = '-100%';
        overlay.style.display = 'none';
    });

    var menuLinks = document.querySelectorAll('#mobile-menu a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            mobileMenu.style.left = '-100%';
            overlay.style.display = 'none';
        });
    });
});






$(document).ready(function () {
$(".image-container").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".prev-icon"),
    nextArrow: $(".next-icon"),
});
});





var counterBtn = document.getElementById("counterBtn");
var counterValue = document.getElementById("counterValue");

    var contador = 0;
    counterValue.textContent = contador;

    counterBtn.addEventListener("click", function(event) {
    if (event.target.classList.contains("plus-icon")) {
        contador++;
    } else if (event.target.classList.contains("minus-icon")) {
        contador = Math.max(0, contador - 1);
    }
    counterValue.textContent = contador;
    });