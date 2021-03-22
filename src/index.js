import './styles.css';
import fetchImages from './js/apiService';
import cardsTemplate from './templates/cards.hbs';
import debounce from 'lodash.debounce';
import * as basicLightbox from 'basiclightbox'

const refs = {
    imageGallery: document.querySelector('.gallery'),
    input: document.querySelector('input[name="query"]'),
    button: document.querySelector('.btn')
}

function renderImageList(imageArray) { 
    const markup = cardsTemplate(imageArray);
    refs.imageGallery.innerHTML = markup;
}

function clearAll() {
    refs.imageGallery.innerHTML = '';
}

let page = 0;
let perPage = 12;
let array = [];
let coordinateY = window.innerHeight;

function handleInput(event) {
    clearAll()
    perPage = 12;
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

    fetchImages(query, page, perPage)
        .then(image => {
            renderImageList(image.hits)
        })
        .catch(err => `Something went wrong, try again`);
    
    refs.button.addEventListener('click', debounce(() => {
        perPage += 12;
        fetchImages(query, page, perPage).then(image => {
            renderImageList(image.hits);
            coordinateY += coordinateY;
            console.log(coordinateY);
            window.scrollTo({
                top: coordinateY,
            behavior: "smooth"
        });
        })
        }), 1000)
}
    
refs.input.addEventListener('input', debounce(handleInput, 1000))

