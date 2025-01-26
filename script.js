const perricosArray = []; //Un array que almacenará las URL de las imágens de perros para renderizarlas en la página

//const votesArray = [];


console.log(perricosArray);

// addPerrico();

const dogList = document.querySelector('#dog-list'); //modifica por id el div con id dog-list
//doglist es una variable que selecciona el elemento HTML con el ID dog-list. Este es el contenedor donde se insertaran las tarjetas de los perros

//función que agrega eventos a los botones Precioso y feísimo
function addSocialListeners(){

 // Función para los votos positivos: para cada botón de precioso, se añade un eventListener, busca al hermano anterior y le suma 1 
document.querySelectorAll('.like').forEach((buttonNode) => { //seleccióna todos los botones con la clase like
    buttonNode.addEventListener('click', function () { //al hacer click busca el elemento anterior (el contador de likes) e incrementa el número mostrado en el span .like-count
        console.log('me gusta clickado');
        const hermanico = buttonNode.previousElementSibling;
        const likeCountNode = hermanico.querySelector('.like-count'); //selecciona el elemento del html span con la class 'like-count'
        likeCountNode.innerText = Number(likeCountNode.innerText) + 1  //y al elemento con class -like-count, le suma 1.
    });
});

//Función para los votos negarivos
document.querySelectorAll('.dislike').forEach((buttonNode) => { //buttonNode es el botón en el que se hace clic (.like o .dislike).
    buttonNode.addEventListener('click', function () {         //previousElementSibling accede al contenedor inmediatamente anterior (el que contiene los contadores like-count o dislike-count).
        console.log('me gusta clickado');
        const hermanico = buttonNode.previousElementSibling;
        const dislikeCountNode = hermanico.querySelector('.dislike-count');
        dislikeCountNode.innerText = Number(dislikeCountNode.innerText) + 1
    });
});
}

/* Al hacer clic en el botón "Precioso":

buttonNode se refiere al botón <button class="like">Precioso</button>.
buttonNode.previousElementSibling se refiere al párrafo <p>😍 <span class="like-count"></span></p>, que contiene el contador.
Este acceso permite que luego se obtenga el elemento <span> dentro de ese párrafo y se incremente su contenido:

const likeCountNode = hermanico.querySelector('.like-count');
likeCountNode.innerText = Number(likeCountNode.innerText) + 1; */

/* previousElementSibling es una forma de navegar en el DOM para encontrar el hermano HTML anterior del elemento actual.
En este caso, se usa para identificar el contenedor de los contadores relacionados con el botón que fue clicado, permitiendo modificar sus valores.
 */


//esta función se encarga de añadir las cards de perritos

function renderPerrico(dogImage){ //recibe la URL de la imagen de perro
    //crea la tarjeta del perro con la imagen, botones y contadores de votos
    const htmlAdd =
    `<div class="dogCard" >
        <img class="image" id="perro" alt="imagen de perro" src="${dogImage}">
        <div class="cardVote" > 
            <div class="voteCard">
                <p>😍 <span class="like-count"></span></p>
                <button class="like">Precioso</button> 
            </div>
            <div class="voteCard">
                <p>🤢 <span class="dislike-count"></span></p>
                <button class="dislike">Feísimo</button>
            </div>
        </div>
    </div>`;
    //se inserta en el contenedor #dog-list usando innerHTML
    document.querySelector('#dog-list').innerHTML += htmlAdd;

}


function renderPerricoArray(){
    dogList.innerHTML = ''; // Limpiar el contenido de la lista de perros

    perricosArray.forEach((dogImage)=>{ //itera sobre perricosArray y renderiza todas las imágenes
        //const votes = votesArray[index] || {precioso:0, feisimo:0}; //inicializamos votos si no existen
        renderPerrico(dogImage);
        console.log('innerHtml posición', index, dogList.innerHTML);
    });

    addSocialListeners(); //llama a addSocialListeners para que los nuevos botones funcionen
}


// Función para agregar un perrico aleatorio al array, llama a la función d la API para obtener una URL del perro
const addPerrico = async ()=>{
    const perricoImg = await getRandomDogImage(); //la función getRandomDogImage se declara en el archivo api.js
    console.log(perricoImg);
    perricosArray.push(perricoImg); //añad la url al array perricosArray y la renderiza en la página con la función renderPerrico
    renderPerrico(perricoImg); // Re-renderizar la lista con la nueva imagen
    addSocialListeners(); //activa los eventos
};

// Función para agregar 5 perricos: definimos una función asíncrona con un for que no dejará de ejecutarse hasta que i > 5, es decir que pushee al array perricosArrar 5 imágenes random
const add5Perricos = async () => {
    for (let i = 0; i < 5; i++) {
        addPerrico(); 
    }
    addSocialListeners(); //activa los eventos
};

// Renderizar los perricos al cargar la página
// renderPerricoArray(); //esto hace que la página tenga de primeras imagenes con perritos y no queremos eso, queremos que la página no tenga ningún perrito 

//Listeners para los botones de añadir perritos

// Agregar evento al botón "Añadir 1 perrico más"
document.querySelector('#add-1-perrico').addEventListener('click', function(event){
    event.preventDefault(); // Evitar el envío del formulario
    addPerrico();
});

// Agregar evento al botón "Añadir 5 perricos más"
document.querySelector('#add-5-perrico').addEventListener('click', function(event){
    event.preventDefault(); // Evitar el envío del formulario
    add5Perricos();
});

