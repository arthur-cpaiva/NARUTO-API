const container = document.getElementById("personagens");

    fetch("https://dattebayo-api.onrender.com/characters")
        .then(response => response.json())
        .then(data => {

             container.innerHTML = "";
            
             data.characters.forEach(personagem =>{
                container.innerHTML += `
                 <div class="card">
                    <img src="${personagem.images[0]}" alt="${personagem.name}">
                    <p class="titulo">${personagem.name}</p>
                    <p class="debut">
                        ${personagem.debut.manga}; 
                    </p> 
                </div>
                `;
                // o ponto(.) se refere a sequência da primeira informação(debut)
        });

    })
    .catch(error => console.log(error));
