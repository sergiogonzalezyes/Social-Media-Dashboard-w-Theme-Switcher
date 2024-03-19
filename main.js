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
    BottomCardData.forEach(cardInfo => {
        const cardElement = createBottomCard(cardInfo);
        container.appendChild(cardElement);
    });
});



