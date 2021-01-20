import { shelveBook } from '../products/build-shelf.js';

const test = QUnit.test;

test('function takes object and returns formatted HTML for appending', (expect) => {

    const testBook = {
        id: 1,
        author: `Taro Gomi`,
        title: `Everyone Poops`,
        image: `../assets/everyone-poops.png`,
        description: `It all tastes the same coming out.`,
        genre: `Children's Literature`,
        price: `11.11`,
    };

    const expected = `<li><h4 class="books-author">Taro Gomi</h4><h3 class="books-title">Everyone Poops</h3><img class="books-image" src="../assets/everyone-poops.png" alt="Everyone Poops"><p class="books-description">It all tastes the same coming out.</p><p class="books-genre">Children's Literature</p><p class="books-price">$11.11</p><button value="1">Add to Cart</button></li>`;

    const actual = shelveBook(testBook);

    expect.equal(actual.outerHTML, expected);
});
