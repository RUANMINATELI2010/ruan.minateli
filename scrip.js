// Função para gerar números aleatórios entre 50 e 100
function gerarPercentual() {
    return Math.floor(Math.random() * 51) + 50;
}

// Atualiza os valores de produção, áreas verdes e poluição
function atualizarEstatisticas() {
    document.getElementById('prod').textContent = gerarPercentual() + '%';
    document.getElementById('verde').textContent = gerarPercentual() + '%';
    document.getElementById('pol').textContent = gerarPercentual() + '%';
}

// Evento do botão
document.getElementById('updateStats').addEventListener('click', atualizarEstatisticas);
