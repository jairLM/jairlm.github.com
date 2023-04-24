
// Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close")
//Recorrerlos
links.forEach(function(link){

    //Agregar un evento click a cada uno de ellos
    link.addEventListener('click', function(ev){
        ev.preventDefault(); //previene el comportamiento por defecto de los elementos

        //Seleccionar el elemento con la clase .content
        let content = document.querySelector('.content')

        //quitarle las clases de animacion que ya tiene en la clase contain
        content.classList.remove("animate__fadeInDown");

        //Agregar clases para animar su salida (fadeOutUp)
        content.classList.add("animate__fadeOutUp");

        //funcion para ejecturar cierta accion despues de un periodo de tiempo (setTimeout, setInterval)
        
        setTimeout(function(){
            location.href="/boletines";
        },600);
        
        return false;
    })
})

