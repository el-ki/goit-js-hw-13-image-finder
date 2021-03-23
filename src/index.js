import './styles.css';
import ImgApiService from './js/apiService';
import cardsTemplate from './templates/cards.hbs';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';



const imgApiService = new ImgApiService();
// console.log(imgApiService);

const refs = {
    imageGallery: document.querySelector('.gallery'),
    searchForm: document.querySelector('.search-form'),
    loadMoreButton: document.querySelector('.load-more'),
}

refs.searchForm.addEventListener('submit', onSearch, 1000);
refs.loadMoreButton.addEventListener('click', onLoadMore, 1000);


function onSearch(event) {
    event.preventDefault();
    clearArticleContainer()
    imgApiService.query = event.currentTarget.elements.query.value.trim();

    if (imgApiService.query === '') {

        refs.loadMoreButton.classList.add('is-inactive');
        return alert({
            text: 'Please, insert a query!',
            delay: 1000,
        });
    }
    imgApiService.resetPage();
    imgApiService.fetchImages()
        .then(images => {
             if (images.length === 0) {
                return alert({
                text: 'No images for this query, try again!',
                delay: 1000,
        });
            }
            renderImageList(images)
        })
        .catch(err => `Something went wrong, try again`);
}

function onLoadMore() {
    imgApiService.fetchImages()
        .then(images => {
            if (images.length === 0) {
                return alert({
                    text: 'No more images!',
                    delay: 1000,
                })
            }
            renderImageList(images);
            let scroll = refs.imageGallery.scrollHeight - 890;
            // console.log(scroll);
            window.scrollTo({
            top: scroll,
            behavior: "smooth"
            });
            
        })
        .catch(err => `Something went wrong, try again`);;
}

function renderImageList(images) {
    refs.imageGallery.insertAdjacentHTML('beforeend', cardsTemplate(images));
    refs.loadMoreButton.classList.remove('is-inactive');
    refs.loadMoreButton.classList.add('is-active');
}
       
function clearArticleContainer() {
    refs.imageGallery.innerHTML = '';
}