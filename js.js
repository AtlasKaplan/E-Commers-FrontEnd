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



