// MENÚ RESPONSIVE
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });

        menu.classList.remove("active");
    });
});
//Validaciones
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;

    if(nombre === "" || correo === ""){
        alert("Por favor completa todos los campos.");
    }else{
        alert("Mensaje enviado correctamente.");
        formulario.reset();
    }
});

window.addEventListener("scroll", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const posicion = card.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if(posicion < pantalla - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease";
});