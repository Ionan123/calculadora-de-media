
const botao = document.querySelector("#helloBtn");

const mensagem = document.querySelector("#message");

botao.addEventListener("click", () => {

    mensagem.textContent =
        "Olá! Que bom ter você por aqui. 😄";

});
