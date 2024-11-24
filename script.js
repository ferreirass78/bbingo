// Função para gerar a cartela de bingo
function gerarCartela() {
    const cartela = [];
    const colunas = [
        { min: 1, max: 15 },
        { min: 16, max: 30 },
        { min: 31, max: 45 },
        { min: 46, max: 60 },
        { min: 61, max: 75 }
    ];

    for (let i = 0; i < 5; i++) {
        const coluna = [];
        while (coluna.length < 5) {
            const num = Math.floor(Math.random() * (colunas[i].max - colunas[i].min + 1)) + colunas[i].min;
            if (!coluna.includes(num)) {
                coluna.push(num);
            }
        }
        cartela.push(coluna);
    }

    cartela[2][2] = 'Free'; // Marca o centro como "Free"

    return cartela;
}

// Função para renderizar a cartela
function renderizarCartela(cartela) {
    const cartelaDiv = document.getElementById('cartela');
    cartelaDiv.innerHTML = ''; // Limpa a cartela antes de renderizar

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const div = document.createElement('div');
            const numero = cartela[j][i];
            div.textContent = numero === 'Free' ? 'Free' : numero;
            if (numero === 'Free') {
                div.classList.add('free');
            } else {
                div.addEventListener('click', () => marcarNumero(j, i));
            }
            cartelaDiv.appendChild(div);
        }
    }
}

// Função para marcar um número na cartela
function marcarNumero(i, j) {
    const cartelaDiv = document.getElementById('cartela');
    const divs = cartelaDiv.getElementsByTagName('div');
    const index = i * 5 + j; // Calcula o índice no grid de 5x5
    const div = divs[index];

    if (div.textContent !== 'Free') {
        div.classList.add('marked');
    }
}

// Função para sortear um número
let numerosSorteados = new Set();
function sortearNumero() {
    const numero = Math.floor(Math.random() * 75) + 1;
    if (!numerosSorteados.has(numero)) {
        numerosSorteados.add(numero);
        document.getElementById('numero-sorteado').textContent = `Número Sorte
