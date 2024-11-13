document.addEventListener("DOMContentLoaded", () => {
    // Selecionando todos os carrosséis
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach((carousel) => {
        // Selecionando os elementos de navegação e conteúdo dentro de cada carrossel
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');
        const track = carousel.querySelector('.carousel-track');
        const items = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        // Função para atualizar a posição do carrossel
        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // Função para ir para o item anterior
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = items.length - 1; // Volta para o último item
            }
            updateCarousel();
        });

        // Função para ir para o próximo item
        nextButton.addEventListener('click', () => {
            if (currentIndex < items.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Volta para o primeiro item
            }
            updateCarousel();
        });
    });
});
