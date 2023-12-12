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
















var counterBtn = document.getElementById("counterBtn");
var counterValue = document.getElementById("counterValue");

    // Inicializar contador
    var contador = 0;
    counterValue.textContent = contador;

    // Manejar clics en el botón
    counterBtn.addEventListener("click", function(event) {
      // Determinar si se hizo clic en el botón de más o menos
    if (event.target.classList.contains("plus-icon")) {
        // Incrementar el contador
        contador++;
    } else if (event.target.classList.contains("minus-icon")) {
        // Decrementar el contador, asegurándote de que no sea menor que cero
        contador = Math.max(0, contador - 1);
    }

      // Actualizar el valor del contador en el DOM
    counterValue.textContent = contador;
    });