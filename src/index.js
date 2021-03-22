import './styles.css';
import fetchImages from './js/apiService';
import cardsTemplate from './templates/cards.hbs';
import debounce from 'lodash.debounce';

const refs = {
    imageGallery: document.querySelector('.gallery'),
    input: document.querySelector('input[name="query"]')
}

function renderImageList(imageArray) { 
    const markup = cardsTemplate(imageArray);
    refs.imageGallery.innerHTML = markup;
}

function clearAll() {
    refs.imageGallery.innerHTML = '';
}

let page = 0;
let array = [];

function handleInput(event) {
    clearAll()
        const query = event.target.value;

    array.push(query);
    if (array[0] === query) {
        page += 1
    } if (array[0] !== query) {
        array = [];
        page = 1;
    } if (!query.trim()) {
        return;
    }

    fetchImages(query, page)
        .then(image => {

            renderImageList(image.hits)
        })
    .catch(err => `Something went wrong, try again`);
}
    
refs.input.addEventListener('input', debounce(handleInput, 1000))




