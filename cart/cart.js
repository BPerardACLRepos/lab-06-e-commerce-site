import { addCartItem } from './build-cart.js';
import { calcOrderTotal } from '../utils.js';
import { books } from '../data/book-list.js';
import { addToCart, clearCart, getCart } from '../cart-utils.js';

const shoppingCart = document.querySelector('#shopping-cart');
const storedCart = getCart();

if (!storedCart.length) {
    const tdCart = document.createElement('td');
    tdCart.textContent = `CART`;

    const tdIs = document.createElement('td');
    tdIs.textContent = `IS`;

    const tdEmpty = document.createElement('td');
    tdEmpty.textContent = `Empty`;

    shoppingCart.append(tdCart, tdIs, tdEmpty);
} else {
    for (let storedItem of storedCart) {
        const trItem = addCartItem(storedItem, books);
        shoppingCart.append(trItem);
    }
    const tdBlank = document.createElement('td');

    const tdLabel = document.createElement('td');
    tdLabel.textContent = `Order Total`;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = `$${calcOrderTotal(storedCart, books)}`;

    shoppingCart.append(tdBlank, tdLabel, tdTotal);
}