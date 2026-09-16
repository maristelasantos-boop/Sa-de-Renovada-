# Query: 
# ContextLines: 1

// ==========================================
// SAÚDE RENOVADA
// JAVASCRIPT DA LANDING PAGE
// ==========================================


// Seleciona o formulário
const form = document.getElementById("contactForm");


// Seleciona a mensagem
const formMessage = document.getElementById("formMessage");


// Evento de envio do formulário
form.addEventListener("submit", function (event) {

    // Impede o envio real do formulário
    event.preventDefault();

    // Exibe mensagem para o usuário
    formMessage.textContent =
        "Formulário preenchido com sucesso! Esta é uma demonstração acadêmica.";

    // Limpa os campos
    form.reset();

});