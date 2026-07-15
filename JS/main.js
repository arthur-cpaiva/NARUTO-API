const conteudo = document.getElementById("conteudo");
const personagens = document.getElementById("personagens");
const vilas = document.getElementById("vilas");

if (personagens) {
    personagens.addEventListener("click", getPersonagem);
}

if (vilas) {
    vilas.addEventListener("click", getVilas);
}

function getPersonagem() {
    fetch("https://dattebayo-api.onrender.com/characters")
        .then(response => response.json())
        .then(data => {
            conteudo.innerHTML = "";

            data.characters.forEach(personagens => {
                conteudo.innerHTML += `
                    <div class="card">
                        <img src="${personagens.images[0]}" alt="${personagens.name}">
                        <p>${personagens.name}</p>
                        <p>${personagens.debut.manga}</p>
                        
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

if (window.location.pathname.includes("personagens.html")) {
    getPersonagem();
}

if (window.location.pathname.includes("vilas.html")) {
    getVilas();
}