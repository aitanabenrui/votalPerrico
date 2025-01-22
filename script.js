const perricosArray = ['https://lh5.googleusercontent.com/proxy/FkxxQHWFM7oVQre0EOcbaXyOBNM6RMwnyE3HCJ7Ii9rJZMMWV1bqHsW6e74eKGkAfdXj8a0xdGGpB-pPKZnWi-8O7kiUUIFK6WAyFBjaxueNFcn0oBE_-R0yU8wfeWq-Kg'];
console.log(perricosArray);

const dogList = document.querySelector('#dog-list'); //modifica por id el div con id dog-list

function renderPerricoArray(){

    perricosArray.forEach((dogImage)=>{
        const htmlAdd =
        `<div class="dogCard" >
            <img class="image" id="perro" alt="imagen de perro" src="${dogImage}">
            <div id="cardVote" > 
                    <p>😍</p>
                    <button>Precioso</button> 
                </div>
                <div class="voteCard">
                    <p>🤢</p>
                    <button>Feísimo</button>
                </div>
            </div>
        </div>`;

        dogList.innerHTML += htmlAdd;
    })
}
console.log(dogList);

const addPerrico = async ()=>{
    const perricoImg = await getRandomDogImage();
    perricosArray.push(perricoImg);
    renderPerricoArray();
}

document.querySelector('#add-1-perrico').addEventListener('click', function(){
    addPerrico();
});