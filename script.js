let currentLayerIndex = 0;

// Array com as partes do bolo e as imagens associadas a cada camada
const layers = [
    { classes: ['cakeLayer', 'base'], image: 'images/base.png' },    // Base do bolo
    { classes: ['cakeLayer', 'recheio'], image: 'images/recheio.png' },  // Recheio
    { classes: ['cakeLayer', 'topo'], image: 'images/topo.png' },      // Topo
    { classes: ['vela'], image: 'images/vela.png' }                   // Vela
];

// Função que é chamada quando o botão "Clique para fazer o bolo" é clicado
document.getElementById('startButton').addEventListener('click', () => {
    const cakeContainer = document.getElementById('cakeContainer');

    // Verifica se ainda existem camadas para mostrar
    if (currentLayerIndex < layers.length) {
        const layer = document.createElement('div');
        layer.classList.add(...layers[currentLayerIndex].classes);

        // Adiciona a imagem correspondente à camada
        layer.style.backgroundImage = `url(${layers[currentLayerIndex].image})`;

        // Ajusta a posição da camada para empilhar de baixo para cima
        if (layers[currentLayerIndex].classes.includes('base')) {
            layer.style.bottom = '0px'; // A base fica no fundo
        } else {
            // Posiciona as camadas acima da base
            layer.style.bottom = `${currentLayerIndex * 60}px`;
        }

        cakeContainer.appendChild(layer);
        
        currentLayerIndex++; // Incrementa o índice para mostrar a próxima parte
    }

    // Quando todas as camadas estiverem exibidas, mostre o botão para navegar para outra página
    if (currentLayerIndex === layers.length) {
        document.querySelector('.container button').hidden = true;  // Esconde o botão "Clique para fazer o bolo"
        document.querySelectorAll('.container')[1].hidden = false;  // Mostra o botão "Clique aqui :)"
        
        // Adiciona confetes na tela ao final da montagem do bolo
        setTimeout(() => {
            addConfetti();
        }, 500);  // Atraso para os confetes aparecerem após o bolo
    }
});

// Função para adicionar os confetes na tela
function addConfetti() {
    const numberOfConfetti = 150;  // Número de confetes
    const body = document.body;
    
    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confete');
        
        // Posiciona os confetes aleatoriamente na tela
        confetti.style.left = `${Math.random() * 100}%`;  // Posição horizontal aleatória
        confetti.style.animationDelay = `${Math.random() * 2}s`;  // Atraso de animação aleatório

        // Adiciona o confete ao body
        body.appendChild(confetti);
    }
}

// Adiciona o evento para redirecionar para outra página quando o botão for clicado
document.getElementById('nextPage').addEventListener('click', () => {
    window.location.href = "card/index.html";  // Substitua com o caminho da sua página de destino
});
