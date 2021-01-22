import { addCartItem } from './build-cart.js';
import { calcOrderTotal } from '../utils.js';
import { userCart } from '../data/cart-items.js';
import { books } from '../data/book-list.js';
import { addToCart, clearCart, getCart, setCart } from '../cart-utils.js';

const shoppingCart = document.querySelector('#shopping-cart');

clearCart();
const CART = 'cart';
let testCart = [
    {
        id: 4,
        quantity: 6
    },
    {
        id: 3,
        quantity: 1
    },
];
setCart(testCart);
addToCart(1, 2);
let dog = getCart();
console.log(dog);

//flip if else when adding local storage functions
if (userCart.length === 0) {
    const tdCart = document.createElement('td');
    tdCart.textContent = `CART`;

    const tdIs = document.createElement('td');
    tdIs.textContent = `IS`;

    const tdEmpty = document.createElement('td');
    tdEmpty.textContent = `Empty`;

    shoppingCart.append(tdCart, tdIs, tdEmpty);
} else {
    for (let cartItem of userCart) {
        const trItem = addCartItem(cartItem, books);
        shoppingCart.append(trItem);
    }
    const tdBlank = document.createElement('td');

    const tdLabel = document.createElement('td');
    tdLabel.textContent = `Order Total`;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = `$${calcOrderTotal(userCart, books)}`;

    shoppingCart.append(tdBlank, tdLabel, tdTotal);
}