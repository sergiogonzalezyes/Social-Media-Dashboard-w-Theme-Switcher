const TopCardData = [
    { username: '@nathanf', followers: '1987', today: '12', icon: 'images/icon-facebook.svg', name: 'facebook' },
    { username: '@nathanf', followers: '1044', today: '99', icon: 'images/icon-twitter.svg', name: 'twitter' },
    { username: '@realnathanf', followers: '11k', today: '1099', icon: 'images/icon-instagram.svg', name: 'instagram' },
    { username: 'Nathan F.', followers: '8239', today: '144', icon: 'images/icon-youtube.svg', name: 'youtube' }
];

function createTopCard(cardInfo) {
    const template = document.getElementById('top-card-template');
    const clone = template.content.cloneNode(true);

    clone.querySelector('.username').textContent = cardInfo.username;
    clone.querySelector('.followers').textContent = cardInfo.followers;
    clone.querySelector('.followers-today').textContent = cardInfo.today + ' Today';
    
    const iconElement = clone.querySelector('.card-icon');
    if (iconElement) {
        iconElement.src = cardInfo.icon;
        iconElement.alt = cardInfo.name;
    }

    return clone;
}

const BottomCardData = [
    { title: 'Page Views', pageViews: '87', today: '3%', icon: 'images/icon-facebook.svg', name: 'facebook' },
    { title: 'Likes', pageViews: '52', today: '2%', icon: 'images/icon-facebook.svg', name: 'facebook' },
    { title: 'Likes', pageViews: '5462', today: '2257%', icon: 'images/icon-instagram.svg', name: 'instagram' },
    { title: 'Profile Views', pageViews: '52k', today: '1375%', icon: 'images/icon-instagram.svg', name: 'instagram' },
    { title: 'Retweets', pageViews: '117', today: '303%', icon: 'images/icon-twitter.svg', name: 'twitter' },
    { title: 'Likes', pageViews: '507', today: '553%', icon: 'images/icon-twitter.svg', name: 'twitter' },
    { title: 'Likes', pageViews: '107', today: '19%', icon: 'images/icon-youtube.svg', name: 'youtube' },
    { title: 'Total Views', pageViews: '1407', today: '12%', icon: 'images/icon-youtube.svg', name: 'youtube' }
];

function createBottomCard(cardInfo) {
    const template = document.getElementById('bottom-card-template');
    const clone = template.content.cloneNode(true);

    clone.querySelector('.title').textContent = cardInfo.title;
    clone.querySelector('.number').textContent = cardInfo.pageViews;
    clone.querySelector('.number-today').textContent = cardInfo.today;

    const iconElement = clone.querySelector('.card-icon');
    if (iconElement) {
        iconElement.src = cardInfo.icon;
        iconElement.alt = cardInfo.name;
    }

    return clone;
}




export { createTopCard, TopCardData, createBottomCard, BottomCardData };