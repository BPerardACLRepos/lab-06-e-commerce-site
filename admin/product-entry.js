import { books } from '../data/book-list.js';

const productEntryForm = document.querySelector('#product-entry');

productEntryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const productTraits = {};
    const newId = books.length + 1;
    productTraits.id = newId;

    const formData = new FormData(productEntryForm);
    const entries = formData.entries();
    for (let field of entries) {
        if (field[0] === 'price') {
            productTraits[field[0]] = Number(field[1]);
        } else {
            productTraits[field[0]] = field[1];
        }

    }
    console.log(productTraits);
    console.log(books);
    books.push(productTraits);
    console.log(books);
});