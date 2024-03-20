import { createTopCard, TopCardData, createBottomCard, BottomCardData } from './scripts/card.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('top-card-container');
    TopCardData.forEach(cardInfo => {
        const cardElement = createTopCard(cardInfo);
        container.appendChild(cardElement);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('bottom-card-container');
    // foreach loop to create bottom card for every 4 elements then creates a new row
    let row = document.createElement('div');
    row.classList.add('cardRow');
    container.appendChild(row);
    BottomCardData.forEach((cardInfo, index) => {
        if (index % 4 === 0) {
            row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);
        }
        const cardElement = createBottomCard(cardInfo);
        row.appendChild(cardElement);
    });
});

