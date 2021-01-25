import { books } from '../data/book-list.js';
import { enterNewProduct } from './entry-utils.js';

const productEntryForm = document.querySelector('#product-entry');

productEntryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(productEntryForm);
    enterNewProduct(formData);
});