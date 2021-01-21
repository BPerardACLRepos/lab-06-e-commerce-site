import { addCartItem } from './build-cart.js';
import { calcOrderTotal } from '../utils.js';
import { userCart } from '../data/cart-items.js';
import { books } from '../data/book-list.js';

const shoppingCart = document.querySelector('#shopping-cart');

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