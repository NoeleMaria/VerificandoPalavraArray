let lista = ["maçã", "banana", "laranja", "uva", "goiaba"];
let palavraProcurada;

function arrayBotaoJS() {
    palavraProcurada = "laranja";

    document.getElementById('palavra-JS1').innerHTML = `<strong>Palavra:</strong> ${palavraProcurada}`;
    let resultado = document.getElementById('validacao-js');

    verificandoElementoArray(lista, palavraProcurada, resultado);
}

function arrayBotaoUsuario() {    
    palavraProcurada = document.getElementById('palavra-usuario1').value.trim();
    console.log(palavraProcurada);
    let resultado = document.getElementById('validacao-usuario');

    verificandoElementoArray(lista, palavraProcurada, resultado);
}

function verificandoElementoArray(lista, palavraProcurada, resultado) {
    let listaComEspaco = lista.join(', ');

    if(lista.includes(palavraProcurada)) {
        resultado.innerHTML = `A palavra "${palavraProcurada}" está inserida no array:<br> ${listaComEspaco}.`;
    } else if (!lista.includes(palavraProcurada)) {
        resultado.innerHTML = `A palavra "${palavraProcurada}" não está inserida no array:<br> ${listaComEspaco}.`;
    } else {
        resultado.innerHTML = 'Insira uma palavra.';
    }
}