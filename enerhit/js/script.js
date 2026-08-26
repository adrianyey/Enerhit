document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
  document.querySelector(".menu").classList.toggle("mostrar_menu");
}

const totalservices = document.getElementById('totalservices');
  let totalservicesState = false;
  document.getElementById('allServices').addEventListener('click', () => {
    totalservicesState = !totalservicesState;
    totalservices.style.display = totalservicesState ? 'block' : 'none';
  });


document.addEventListener('DOMContentLoaded', () => {
  fGaleria([], 41, 'galeria', 'galeria-portfolio', 'col-12 col-md-4 col-lg-6 p-1', '300px', 'jpg', true, '100%', 'rightButton3', 'leftButton3');
  fGaleria([], 4, 'main', 'galeria-main', 'col-12 col-md-4 col-lg-12 p-1', '400px', 'jpg', true, '100%', 'rightButton', 'leftButton');
  fGaleria([], 4, 'main', 'galeria-main-responsive', 'col-12 col-md-4 col-lg-12 p-1', '300px', 'jpg', true, '100%', 'rightButton4', 'leftButton4');
  fGaleria([], 11, 'clientes', 'galeria-clientes', 'col-6 col-md-4 col-lg-2', '50%', 'png', false, '50%', 'rightButton2', 'leftButton2');
});

function fGaleria(galeria, cantidadFotos, carpeta, contenedor, clase, altura, formato, objectFit, ancho, botond, botoni) {
  const imagenes = Array.from({ length: cantidadFotos }, (_, i) => `${carpeta}/${i + 1}.${formato}`);
  const contenedorElement = document.getElementById(contenedor);
  contenedorElement.innerHTML = '';

  imagenes.forEach(imagen => {
    const col = document.createElement('div');
    col.className = clase;

    const img = document.createElement('img');
    img.src = imagen;
    img.alt = imagen;
    img.style.width = ancho;
    img.style.height = altura;

    if (objectFit) {
      img.style.objectFit = 'cover';
    }

    img.style.borderRadius = '5px';
    col.appendChild(img);
    contenedorElement.appendChild(col);
  });

  document.getElementById(botoni).addEventListener('click', () => {
    contenedorElement.scrollBy({ top: 0, left: -450, behavior: 'smooth' });
  });

  document.getElementById(botond).addEventListener('click', () => {
    contenedorElement.scrollBy({ top: 0, left: 450, behavior: 'smooth' });
  });
}