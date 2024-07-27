const renderSpace = document.getElementById("render");

fetch("dados.json")
    .then((response) => response.json())
    .then((data) => {
        renderUserInfo(data.nome, data.idade, data.email, data.pais);
        renderUserEndereco(data.enderecos);
        renderUserTel(data.telefones);
    })
    .catch((error) => {
        console.log("Erro: ", error);
    });

function criarElemento(tag, className, text) {
    const elemento = document.createElement(tag);
    elemento.className = className;
    elemento.textContent = text;

    return elemento;
}

function renderUserInfo(nome, idade, email, pais) {
    const infoCard = criarElemento("div", "card info-card");

    const descricaoCard = criarElemento("h3", "", "Informações do usuário");

    const nomeP = criarElemento("p", "card-item", `Nome: ${nome}`);
    const idadeP = criarElemento("p", "card-item", `Idade: ${idade}`);
    const emailP = criarElemento("p", "card-item", `Email: ${email}`);
    const paisP = criarElemento("p", "card-item", `País: ${pais}`);

    infoCard.append(descricaoCard, nomeP, idadeP, emailP, paisP);
    renderSpace.appendChild(infoCard);
}

function renderUserEndereco(enderecos) {
    enderecos.forEach((item, index) => {
        const cardEndereco = criarElemento("div", "card endereco-card");

        const descricaoCard = criarElemento("h3", "", `Endereço ${index + 1}`);

        const cepP = criarElemento("p", "card-item", `CEP: ${item.cep}`);
        const cidadeP = criarElemento(
            "p",
            "card-item",
            `Cidade: ${item.cidade}`
        );
        const ruaP = criarElemento("p", "card-item", `Rua: ${item.rua}`);
        const numeroP = criarElemento(
            "p",
            "card-item",
            `Número: ${item.numero}`
        );

        cardEndereco.append(descricaoCard, cepP, cidadeP, ruaP, numeroP);
        renderSpace.appendChild(cardEndereco);
    });
}

function renderUserTel(telefones) {
    telefones.forEach((item, index) => {
        const telefoneCard = criarElemento("div", "card tel-card");

        const descricaoCard = criarElemento("h3", "", `Telefone ${index + 1}`);

        const tipoP = criarElemento("p", "card-item", `Tipo: ${item.tipo}`);
        const numeroP = criarElemento(
            "p",
            "card-item",
            `Número: ${item.numero}`
        );

        telefoneCard.append(descricaoCard, tipoP, numeroP);
        renderSpace.appendChild(telefoneCard);
    });
}
