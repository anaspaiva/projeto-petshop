import {clienteService} from "../service/cliente-service.js";

(async () => {
    const pegaURL = new URL (window.location); // window location - passar a informação de onde estamos na página
    const id = pegaURL.searchParams.get('id'); 
    const inputNome = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email]');
    try {
        const dados = await clienteService.detalhaCliente(id);
        inputNome.value = dados.nome;
        inputEmail.value = dados.email;
    }
    catch(erro){
        window.location.href = '../telas/erro.html';
    }

    const formulario =  document.querySelector('[data-form]');
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault();
        try {
            await clienteService.atualizaCleinte(id, inputNome.value, inputEmail.value);
                window.location.href = "../telas/edicao_concluida.html";
        }
        catch(erro){
            window.location.href = '../telas/erro.html';
        }
    })

}) ();


