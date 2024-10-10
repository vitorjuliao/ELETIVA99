// Função para abrir uma nova guia com uma mensagem, imagem e animação de porcentagem
function openMessage(message, isHealthy) {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Resultado</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin: 0;
                    padding: 2em;
                    background-color: #f5f5f5;
                    color: #333;
                }
                h1 {
                    color: #4caf50; /* Verde saudável */
                }
                .image {
                    margin-top: 1em;
                }
                img {
                    max-width: 100%;
                    height: auto;
                    border: 2px solid #4caf50;
                    border-radius: 8px;
                }
                .percentage {
                    font-size: 2em;
                    margin: 1em 0;
                    color: #4caf50;
                }
                .bar-container {
                    width: 100%;
                    background-color: #ddd;
                    border-radius: 5px;
                    overflow: hidden;
                    height: 30px;
                    margin: 0 auto;
                    max-width: 400px;
                }
                .bar {
                    height: 100%;
                    background-color: #4caf50;
                    width: 0%;
                    transition: width 2s ease;
                }
            </style>
        </head>
        <body>
            <h1>${message}</h1>
            ${isHealthy ? `
                <div class="percentage">100% Saudável</div>
                <div class="bar-container">
                    <div class="bar"></div>
                </div>
                <script>
                    // Animação da barra de porcentagem
                    document.querySelector('.bar').style.width = '100%';
                </script>
                <div class="image">
                    <img src="healthy-skeleton.png" alt="Esqueleto Saudável">
                </div>
            ` : ''}
        </body>
        </html>
    `);
    newWindow.document.close();
}

// Adiciona eventos aos botões
document.getElementById('pizza-button').addEventListener('click', () => {
    openMessage('Seu corpo não está saudável.', false);
});

document.getElementById('salad-button').addEventListener('click', () => {
    openMessage('Seu corpo está saudável.', true);
});
