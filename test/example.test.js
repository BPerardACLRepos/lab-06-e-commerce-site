import { shelveBook } from '../products/build-shelf.js';
import { findById, calcItemTotal } from '../utils.js';

const test = QUnit.test;

//shelveBook tests
test('function takes object and returns formatted HTML for appending', (expect) => {

    const testBook = {
        id: 1,
        author: `Taro Gomi`,
        title: `Everyone Poops`,
        image: `../assets/everyone-poops.png`,
        description: `It all tastes the same coming out.`,
        genre: `Children's Literature`,
        price: 11.11,
    };

    const expected = `<li><h4 class="books-author">Taro Gomi</h4><h3 class="books-title">Everyone Poops</h3><img class="books-image" src="../assets/everyone-poops.png" alt="Everyone Poops"><p class="books-description">It all tastes the same coming out.</p><p class="books-genre">Children's Literature</p><p class="books-price">$11.11</p><button value="1">Add to Cart</button></li>`;

    const actual = shelveBook(testBook);

    expect.equal(actual.outerHTML, expected);
});

//findById tests
test('function takes an id & array and returns item with matched id or null if none present', (expect) => {

    const items = [
        {
            id: 1,
            author: `Taro Gomi`,
            title: `Everyone Poops`,
            image: `../assets/everyone-poops.png`,
            description: `It all tastes the same coming out.`,
            genre: `Children's Literature`,
            price: 11.11,
        },
        {
            id: 2,
            author: `The Rock`,
            title: `Cooking`,
            image: `../assets/the-rock.png`,
            description: `Can you smell that?`,
            genre: `Culinary`,
            price: 15.51,
        },
        {
            id: 3,
            author: `Bill Murray`,
            title: `Post No Bills`,
            image: `../assets/post-no-bills.png`,
            description: `Nobody will ever believe you.`,
            genre: `Non-Fiction`,
            price: 8.88,
        },
    ];

    const expected = {
        id: 3,
        author: `Bill Murray`,
        title: `Post No Bills`,
        image: `../assets/post-no-bills.png`,
        description: `Nobody will ever believe you.`,
        genre: `Non-Fiction`,
        price: 8.88,
    };

    const actual = findById(3, items);
    expect.deepEqual(actual, expected);


    const expectedNull = null;

    const actualNull = findById(88, items);
    expect.deepEqual(actualNull, expectedNull);
});

//calcItemTotal tests
test('function takes an item & quantity and returns an integer price', (expect) => {

    const item = {
        id: 2,
        author: `The Rock`,
        title: `Cooking`,
        image: `../assets/the-rock.png`,
        description: `Can you smell that?`,
        genre: `Culinary`,
        price: 15.51,
    };

    const expected = 46.53;
    const actual = calcItemTotal(item, 3);
    expect.deepEqual(actual, expected);


    const expectedZero = 0;
    const actualZero = calcItemTotal(item, 0);
    expect.deepEqual(actualZero, expectedZero);
});