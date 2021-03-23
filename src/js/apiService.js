const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20763996-832cb39490986f382e23fb6d5';

export default class ImgApiService {
    constructor() {
        this.searchQuery = '';
        this.pageNumber = 1;
    }
    fetchImages() {
        // console.log(this);
    return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}}&page=${this.pageNumber}&per_page=12&key=${API_KEY}`)
            .then(response => response.json())
        .then(({ hits }) => {
                this.incrementPage();
                return hits;
            })
    }
    
    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    get page() {
        return this.pageNumber;
    }

    set page(newPage) {
        this.pageNumber = newPage;
    }
    
}

