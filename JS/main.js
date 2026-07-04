const conteudo = document.getElementById("conteudo");
const personagens = document.getElementById("personagens");
const vilas = document.getElementById("vilas");
personagens.addEventListener("click", getPersonagem);
vilas.addEventListener("click", getVilas);

function getPersonagem() {
    fetch("https://dattebayo-api.onrender.com/characters")
        .then(response => response.json())
        .then(data => {
            conteudo.innerHTML = "";

            data.characters.forEach(personagem => {
                conteudo.innerHTML += `
                    <div class="card">
                        <img src="${personagem.images[0]}" alt="${personagem.name}">
                        <p>${personagem.name}</p>
                        <p>${personagem.debut.manga}</p>
                        
                    </div>
                `;
            });
        })
        .catch(error => console.log(error));
}

function getVilas() {    
    fetch("https://dattebayo-api.onrender.com/villages")
        .then(response => response.json())
        .then(data => {
            conteudo.innerHTML = "";

            data.villages.forEach(vila => {
                conteudo.innerHTML += `
                    <div class="card">
                        <p>${vila.id}</p>
                        <p>${vila.name}</p>                        
                    </div>
                `;
                console.log(vila.name);
            });
        })
        .catch(error => console.log(error));
}