let startButton = document.getElementById('inicia');
let clickButton = document.getElementById('contador');
let timerElement = document.getElementById('tempo');
let feedbackElement = document.getElementById('resultado');
let resetButton = document.getElementById('botaoreset');

let timer;
let secondsLeft = 10;
let clickCount = 0;

// Função de iniciar

startButton.addEventListener('click', function() {
    clickCount = 0;
    secondsLeft = 10;
    clickButton.disabled = false; // Ativa o botão de cliques
    startButton.disabled = true; // Desativa o botão de iniciar
    resetButton.style.display = 'none'; // Esconde o botão de reiniciar
    feedbackElement.textContent = ''; // Limpa o resultado

    timer = setInterval(function() {
        secondsLeft--;
        timerElement.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timer);
            clickButton.disabled = true; // Desativa o botão após o tempo acabar
            feedbackElement.textContent = `Você clicou ${clickCount} vezes!`;

            // Exibe o botão de reiniciar
            resetButton.style.display = 'inline-block';
        }
    }, 1000);
});

// Contador de cliques

clickButton.addEventListener('click', function() {
    clickCount++;
});

// Reinicia o jogo

resetButton.addEventListener('click', function() {
    startButton.disabled = false; // Reativa o botão de iniciar
    clickButton.disabled = true; // Desativa o botão de cliques
    resetButton.style.display = 'none'; // Esconde o botão de reiniciar
    timerElement.textContent = '10'; // Reseta o timer
    feedbackElement.textContent = ''; // Limpa o feedback
});
