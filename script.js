document.addEventListener("DOMContentLoaded", function() {
    var grupos = document.querySelectorAll(".grupo");

    // Adiciona um evento de mouseover e mouseout a cada grupo
    grupos.forEach(function(grupo) {
        grupo.addEventListener("mouseover", function() {
            toggleCampo(this, '.campo1');
        });

        grupo.addEventListener("mouseout", function() {
            toggleCampo(this, '.campo1');
        });
    });

    var itens = document.querySelectorAll(".item");

    // Adiciona um evento de mouseover e mouseout a cada item
    itens.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            toggleCampo(this, '.campo2');
        });

        item.addEventListener("mouseout", function() {
            toggleCampo(this, '.campo2');
        });
    });

    var titulos = document.querySelectorAll(".lista-itens span");

    // Adiciona um evento de clique a cada título da lista de itens
    titulos.forEach(function(titulo) {
        titulo.addEventListener("click", function() {
            var formulario = this.nextElementSibling; // Pega o formulário após o título clicado
            formulario.classList.toggle("active"); // Alternar a classe 'active' no formulário
        });
    });
});

function toggleCampo(item, campoSelector) {
    var campo = item.querySelector(campoSelector);
    campo.style.display = campo.style.display === 'block' ? 'none' : 'block';
}
function login() {
    var cpf = document.querySelector('input[type="text"]').value;
    var senha = document.querySelector('input[type="password"]').value;

    // Aqui você faria uma requisição para o servidor para verificar o CPF e a senha
    // Por simplicidade, vamos apenas verificar se o CPF e a senha são válidos
    if (cpf === "123.456.789-00" && senha === "1234") {
        alert("Login bem-sucedido!");
        return true;
    } else {
        alert("CPF ou senha incorretos.");
        return false;
    }
}