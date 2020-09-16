var idade = document.getElementById('idade');
var resultado = document.getElementById('resultado');
document.getElementById('calcularIdade').addEventListener('click',calcular);
document.getElementById('limpar').addEventListener('click',limpar);

function calcular() {
    resultado.innerText = 'Idade: ' +  (new Date().getFullYear() - parseInt(idade.value.trim())) + ' ano(s).';
}

function limpar() {
    idade.value = '';
    resultado.innerText = '';
}

