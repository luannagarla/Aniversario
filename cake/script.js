// Inicializa o índice da camada
let currentLayerIndex = 0;

// Array com as partes do bolo, sem a cobertura
const layers = [
    { classes: ['cakeLayer', 'base'], text: 'Base' },
    { classes: ['cakeLayer', 'recheio'], text: 'Recheio' },
    { classes: ['cakeLayer', 'topo'], text: 'Topo' },
    { classes: ['vela'], text: 'Vela' }
];

// Função que é chamada quando o botão é clicado
document.getElementById('startButton').addEventListener('click', () => {
    const cakeContainer = document.getElementById('cakeContainer');

    // Verifica se ainda existem camadas para mostrar
    if (currentLayerIndex < layers.length) {
        const layer = document.createElement('div');
        layer.classList.add(...layers[currentLayerIndex].classes);
        layer.innerText = layers[currentLayerIndex].text;
        
        // Define a posição para empilhar as camadas de baixo para cima
        if (layers[currentLayerIndex].classes.includes('base')) {
            layer.style.bottom = '0px'; // A base fica no fundo
        } else {
            // Posiciona as camadas acima da base
            layer.style.bottom = `${currentLayerIndex * 60}px`;
        }

        cakeContainer.appendChild(layer);
        
        currentLayerIndex++; // Incrementa o índice para mostrar a próxima parte
    }
});