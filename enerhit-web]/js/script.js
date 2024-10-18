document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".menu").classList.toggle("mostrar_menu");
    
}


const totalservices = document.getElementById('totalservices');
let totalservicesState = false; // Cambié a 'let' para poder modificar su valor

document.getElementById('allServices').addEventListener('click', () => {
    totalservicesState = !totalservicesState; // Cambia el estado al hacer clic
    totalservices.style.display = totalservicesState ? 'block' : 'none'; // Muestra u oculta el elemento
});

