const cards = document.querySelectorAll('.portfolio-card');
const cardsPerPage = 3;
let currentPage = 0;
const totalPages = Math.ceil(cards.length / cardsPerPage);

function showPage(page) {
    cards.forEach((card, index) => {
        card.style.display = (index >= page * cardsPerPage && index < (page + 1) * cardsPerPage) ? 'block' : 'none';
    });

    document.getElementById('prevBtn').disabled = page === 0;
    document.getElementById('nextBtn').disabled = page === totalPages - 1;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

// Initial page load
showPage(currentPage);