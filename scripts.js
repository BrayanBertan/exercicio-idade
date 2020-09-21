var nasc = document.getElementById('nasc');
var idade = document.getElementById('idade');
document.getElementById('calcularIdade').addEventListener('click',calcular);
document.getElementById('limpar').addEventListener('click',limpar);

function calcular() {
    idade.innerText = 'Idade: ' +  (new Date().getFullYear() - parseInt(nasc.value.trim())) + ' ano(s).';
}

function limpar() {
    nasc.value = '';
    idade.innerText = '';
}

