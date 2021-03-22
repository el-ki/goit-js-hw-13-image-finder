const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20763996-832cb39490986f382e23fb6d5';

// export default fetch(`${BASE_URL}?key=${API_KEY}&q=yellow+flowers&image_type=photo`)
//     .then(response => response.json())
//     .then(console.log());
// let searchQuery = 'dog';
// let pageNumber = 1;
function fetchImages(searchQuery, pageNumber, perPage) {
    return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}}&page=${pageNumber}&per_page=${perPage}&key=${API_KEY}`)
        .then(response => response.json());
}

export default fetchImages;

