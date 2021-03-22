const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20763996-832cb39490986f382e23fb6d5';

function fetchImages(searchQuery, pageNumber) {
    return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}}&page=${pageNumber}&per_page=12&key=${API_KEY}`)
        .then(response => response.json());
}

export default fetchImages;