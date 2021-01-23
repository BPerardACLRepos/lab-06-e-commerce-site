import { shelveBook } from '../products/build-shelf.js';
import { findById, calcItemTotal, calcOrderTotal } from '../utils.js';
import { addCartItem } from '../cart/build-cart.js';
import { getCart, clearCart, setCart } from '../cart-utils.js';
import { CART } from '../constants.js';

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

    const expected = `<li><h4 class="books-author">Taro Gomi</h4><h3 class="books-title">Everyone Poops</h3><img class="books-image" src="../assets/everyone-poops.png" alt="Everyone Poops"><p class="books-description">It all tastes the same coming out.</p><p class="books-genre">Children's Literature</p><p class="books-price">$11.11</p><input type="number" min="1"><button value="1">Add to Cart</button></li>`;

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

//addCartItem tests
test('function takes a cart item and array and returns an HTML row for appending to cart table', (expect) => {
    const cartItem = {
        id: 1,
        quantity: 3
    };

    const testBook = [
        {
            id: 1,
            author: `Taro Gomi`,
            title: `Everyone Poops`,
            image: `../assets/everyone-poops.png`,
            description: `It all tastes the same coming out.`,
            genre: `Children's Literature`,
            price: 11.11,
        },
    ];

    const expected = `<tr><td>Everyone Poops by Taro Gomi</td><td>3</td><td>33.33</td></tr>`;

    const actual = addCartItem(cartItem, testBook);
    expect.equal(actual.outerHTML, expected);
});

//calcOrderTotal tests
test('function takes a cart array and products array and returns an integer total', (expect) => {
    const cartArray = [
        {
            id: 3,
            quantity: 2
        },
        {
            id: 2,
            quantity: 1
        },
    ];

    const productsArray = [
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

    const expected = 33.27;
    const actual = calcOrderTotal(cartArray, productsArray);
    expect.equal(actual, expected);
});

//clearCart tests
test('function clears local storage associated with key assigned to const CART', (expect) => {
    localStorage.setItem(CART, 'yollo');
    clearCart();

    const expected = null;
    const actual = localStorage.getItem(CART);
    expect.equal(actual, expected);
});

//setCart tests
test('function stringifies argument and assigns it to key CART in local storage', (expect) => {
    localStorage.removeItem(CART);
    setCart('yollo');


    const expected = JSON.stringify('yollo');
    const actual = localStorage.getItem(CART);
    expect.equal(actual, expected);
});

//getCart tests
test('function returns parsed JSON data for local storage key CART, or empty array if no data present for CART', (expect) => {
    localStorage.removeItem(CART);

    const expected = [];
    const actual = getCart();
    expect.deepEqual(actual, expected);

    localStorage.setItem(CART, JSON.stringify('yollo'));
    const expectedSet = 'yollo';
    const actualSet = getCart();
    expect.equal(actualSet, expectedSet);
});