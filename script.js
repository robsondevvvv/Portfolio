document.addEventListener('DOMContentLoaded', function() {
    const cordinha = document.querySelector('.cordinha');
    const cracha = document.querySelector('.cracha');

    // Ativa a animação da cordinha
    cordinha.classList.add('visivel');

    // Adiciona um atraso de 1s para o crachá aparecer
    setTimeout(() => {
        cracha.classList.add('visivel');
    }, 1000); // 1000ms = 1s
});