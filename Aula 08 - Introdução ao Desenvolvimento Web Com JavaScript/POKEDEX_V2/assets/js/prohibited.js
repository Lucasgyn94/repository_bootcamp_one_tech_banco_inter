const enterLink = document.getElementById('enterLink');
const pokeballImage = document.getElementById('pokeballImage');

let isOpen = false; // Variável para rastrear o estado da bola

enterLink.addEventListener('click', (e) => {
    e.preventDefault(); // Evita o comportamento padrão do link
    
    if (!isOpen) {
        // Se a bola estiver fechada, troque a imagem para a bola aberta
        pokeballImage.src = './assets/img/imagens-de-pokebola-aberta-png-6.png';
        isOpen = true;
        // Aguarde um tempo (por exemplo, 2 segundos) antes de redirecionar
        setTimeout(() => {
            window.location.href = './segunda-pagina.html';
        }, 2000); // 2000ms (2 segundos), ajuste conforme necessário
    }
});