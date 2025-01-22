const perricosArray = [];

console.log(perricosArray);

const dogList = document.querySelector('#dog-list'); //modifica por id el div con id dog-list

function renderPerricoArray(){

    dogList.innerHTML = ''; // Limpiar el contenido de la lista de perros

    perricosArray.forEach((dogImage, index)=>{
        const htmlAdd =
        `<div class="dogCard" >
            <img class="image" id="perro" alt="imagen de perro" src="${dogImage}">
            <div class="cardVote" > 
                <div class="voteCard">
                    <p>😍 0</p>
                    <button>Precioso</button> 
                </div>
                <div class="voteCard">
                    <p>🤢 0</p>
                    <button>Feísimo</button>
                </div>
            </div>
        </div>`;

        console.log('innerHtml posición', index, dogList.innerHTML);

        dogList.innerHTML += htmlAdd;
    });
}

console.log(dogList);

// Función para agregar un perrico aleatorio al array
const addPerrico = async ()=>{
    const perricoImg = await getRandomDogImage(); //la función getRandomDogImage se declara en el archivo api.js
    console.log(perricoImg);
    perricosArray.push(perricoImg);
    renderPerricoArray(); // Re-renderizar la lista con la nueva imagen
};

// Función para agregar 5 perricos: definimos una función asíncrona con un for que no dejará de ejecutarse hasta que i > 5, es decir que pushee al array perricosArrar 5 imágenes random
const add5Perricos = async () => {
    for (let i = 0; i < 5; i++) {
        const perricoImg = await getRandomDogImage();
        perricosArray.push(perricoImg);
    }
    renderPerricoArray(); // Re-renderizar la lista con las nuevas imágenes
};

// Renderizar los perricos al cargar la página
// renderPerricoArray(); //esto hace que la página tenga de primeras imagenes con perritos y no queremos eso, queremos que la página no tenga ningún perrito 

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

