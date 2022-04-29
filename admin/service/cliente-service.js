// Este arquivo pede os dados e devolve uma resposta
const listaClientes = () => { //fazendo conexão com a API
    return fetch (`http://localhost:3000/profile`)
    .then (resposta => {
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi possível listar os clientes');
    }) 
};

const criaCliente = (nome, email) => {
    return fetch (`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        }, 
        body: JSON.stringify({ 
            nome: nome, 
            email: email
        })
    })
    .then(resposta => {
        if (resposta.ok) {
            return resposta.body;
        }
        throw new Error('Não foi possível criar um cliente');
    })
};

const removeCliente = (id) => { 
    return fetch (`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    }) 
    .then(resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possível remover o cliente');
        }
    })
};

const detalhaCliente = (id) => {
    return fetch (`http://localhost:3000/profile/${id}`)
    .then (resposta => {
        if (resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi possível detalhar o cliente');
    })
};

const atualizaCleinte = (id, nome, email) => {
    return fetch (`http://localhost:3000/profile/${id}`, {
        method: 'PUT', // put faz a subtituição dos dados anteriores para os novos dados
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome, 
            email: email
        })
    })
    .then(resposta => {
        if (resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi possível atualizar o cliente');
    })
};

export const clienteService = {
    listaClientes, 
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCleinte
};




