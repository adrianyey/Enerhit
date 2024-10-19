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







//llamamos a la funcion

//el que esta en la parte de portafolio
fGaleria([],12,'galeria','galeria-portfolio','col-6 col-md-4 col-lg-3 p-1','200px','jpg',true,'100%'); 


//main computadora
fGaleria([],4,'main','galeria-main','col-6 col-md-4 col-lg-12 p-1','400px','jpg',true,'100%'); 


//main responsive
fGaleria([],4,'main','galeria-main-responsive','col-12 col-md-4 col-lg-12 p-1','300px','jpg',true,'100%'); 

//galeria clientes
fGaleria([],4,'clientes','galeria-clientes','col-12 col-md-4 col-lg-12 ','80px','png',false,'120px'); 



//crea la galeria
function fGaleria(galeria,cantidadFotos,carpeta,contenedor,clase,altura,formato,objectFit,Ancho){

    for (let i = 1; i <= cantidadFotos; i++) {
        galeria.push(`../${carpeta}/${i}.${formato}`);
      }
      
      // Ahora puedes usar el arreglo para cargar las imágenes
      galeria.forEach((imagen) => {
        const col = document.createElement('div');
        col.className = clase; // Clases de Bootstrap para el diseño responsivo
      
        const img = document.createElement('img');
        img.src = imagen;
        img.alt = imagen;
        img.className = 'img-fluid'; // Clase de Bootstrap para imágenes responsivas
        img.style.width = Ancho; // Ancho fijo
        img.style.height = altura; // Alto fijo
        if(objectFit==true)
        {
            img.style.objectFit = objectFit; // Asegura que la imagen cubra el área sin distorsionarse 
        }else
        {

        }
       
        img.style.borderRadius='5px';// Opcional: esquina redondeada
      
        col.appendChild(img);
        document.getElementById(contenedor).appendChild(col);
      });
      
      
}
