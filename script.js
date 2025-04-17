// Array para armazenar os itens
const itensCadastrados = [];

// Elementos do DOM
const formCadastro = document.getElementById("formCadastro");
const listaItens = document.getElementById("listaItens");

// Cadastra novo item
formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value.trim();
    const descricao = document.getElementById("descricao").value.trim();

    // Validação
    if (!nome || !descricao) {
        alert("Preencha todos os campos!");
        return;
    }

    itensCadastrados.push({ nome, descricao });
    atualizarLista();
    formCadastro.reset();
});

// Remove item
function removerItem(index) {
    itensCadastrados.splice(index, 1);
    atualizarLista();
}

// Atualiza a lista na tela (versão com TABLE)
function atualizarLista() {
    listaItens.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${itensCadastrados.map((item, index) => `
                    <tr>
                        <td>${item.nome}</td>
                        <td>${item.descricao}</td>
                        <td><button class="btn-remover" onclick="removerItem(${index})">Remover</button></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Inicializa a lista vazia
atualizarLista();