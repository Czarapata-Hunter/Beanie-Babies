/* Imports */
import { getBeanies } from './fetch-utils.js';
import { renderBeanie } from './render-utils.js';
import { renderAstrologySignOption } from './render-utils.js';
import { getAstrologySigns } from './fetch-utils.js';

/* Get DOM Elements */
const beanieList = document.getElementById('listed-beanie');
const notificationDisplay = document.getElementById('notification-display');
const astrologySelect = document.getElementById('astrology-select');
const formSearch = document.getElementById('form-search');

/* State */
let beanies = [];
let error = null;
let count = 0;
let astrologySigns = [];

/* Events */
window.addEventListener('load', async () => {
    // findBeanies();
    const response = await getAstrologySigns();

    error = response.error;
    astrologySigns = response.data;

    if (!error) {
        displayAstrologySignOptions();
    }
});

async function findBeanies(name, astrologySign) {
    const response = await getBeanies(name, astrologySign);

    error = response.error;
    beanies = response.data;

    displayNotifications();
    if (!error) {
        displayBeanies();
    }
}

formSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formSearch);
    findBeanies(formData.get('name'), formData.get('astrologySign'));
});

/* Display Functions */
function displayBeanies() {
    beanieList.innerHTML = '';

    for (const beanie of beanies) {
        const beanieEl = renderBeanie(beanie);
        beanieList.append(beanieEl);
    }
}

function displayNotifications() {
    if (error) {
        notificationDisplay.classList.add('error');
        notificationDisplay.textContent = error.message;
    } else {
        notificationDisplay.classList.remove('error');
        notificationDisplay.textContent = `Showing ${beanies.length} of ${count} found beanies`;
    }
}

function displayAstrologySignOptions() {
    for (const astrologySign of astrologySigns) {
        const option = renderAstrologySignOption(astrologySign);
        astrologySelect.append(option);
    }
}
// (don't forget to call any display functions you want to run on page load!)
