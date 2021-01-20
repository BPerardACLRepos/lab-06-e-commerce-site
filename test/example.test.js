import { shelveBook } from './build-shelf.js';

const test = QUnit.test;

test('time to test a function', (expect) => {

    const book = {
        id: 1,
        author: `Taro Gomi`,
        name: `Everyone Poops`,
        image: `../assets/everyone-poops.png`,
        description: `It all tastes the same coming out.`,
        genre: `Children's Literature`,
        price: `11.11`,
    }

    const expected = `<li><h4 class="books-author">Taro Gomi</h4><h3 class="books-title">Everyong Poops</h3><img class="books-image" src="../assets/everyone-poops.png" alt="Everyone Poops"><p class="books-description">It all tastes the same coming out.</p><p class="books-genre">Children's Literature</p><p class="books-price">$11.11</p><button value="1">Add to Cart</button></li>`;

    const actual = shelveBook(book);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
