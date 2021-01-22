import { addToCart } from "../cart-utils.js";

export function shelveBook(book) {
    const li = document.createElement('li');

    const h4 = document.createElement('h4');
    h4.classList.add('books-author');
    h4.textContent = book.author;
    li.append(h4);

    const h3 = document.createElement('h3');
    h3.classList.add('books-title');
    h3.textContent = book.title;
    li.append(h3);

    const img = document.createElement('img');
    img.classList.add('books-image');
    img.src = book.image;
    img.alt = book.title;
    li.append(img);

    const pDesctiption = document.createElement('p');
    pDesctiption.classList.add('books-description');
    pDesctiption.textContent = book.description;
    li.append(pDesctiption);

    const pGenre = document.createElement('p');
    pGenre.classList.add('books-genre');
    pGenre.textContent = book.genre;
    li.append(pGenre);

    const pPrice = document.createElement('p');
    pPrice.classList.add('books-price');
    pPrice.textContent = `$${book.price}`;
    li.append(pPrice);

    const input = document.createElement('input');
    input.type = 'number';
    input.min = '1';
    li.append(input);

    const button = document.createElement('button');
    button.value = book.id;
    button.textContent = `Add to Cart`;
    li.append(button);

    button.addEventListener('click', () => {
        if (input.valueAsNumber > 0 && input.valueAsNumber % 1 === 0) {
            addToCart(parseInt(button.value), input.valueAsNumber)
        }
    });

    return li;
}