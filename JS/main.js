document.getElementById('racaForm').addEventListener('submit', function (event) {

    event.preventDefault();

    let raca = document.getElementById("raca").value.toLowerCase().trim();

    if (!/^[A-Za-z\s]+$/.test(raca)) {
        alert('Por favor, digite uma raça válida.');
        return;
    }

    fetch(`https://dog.ceo/api/breed/${raca}/images`)
        .then(response => response.json())
        .then(data => {
            if (data.status === "error") {
                document.getElementById('resultado').innerHTML = 'Raça não encontrada.';
                return;
            } else {
                let imagens = "";

                for (let i = 0; i < 3; i++) {
                    imagens += `
                        <img src="${data.message[i]}"
                             alt="${raca}">`;
                }

                document.getElementById('resultado').innerHTML =
                    `<h3>Fotos da raça ${raca}</h3> ${imagens}`;
            }
        })
        .catch(error => {
            console.error('Erro ao buscar a raça:', error);
            document.getElementById('resultado').innerHTML = 'Erro ao buscar a raça.';
        });
});