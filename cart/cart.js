import { addCartItem } from './build-cart.js';
import { calcItemTotal, calcOrderTotal, findById } from '../utils.js';
import { books } from '../data/book-list.js';
import { clearCart, getCart } from '../cart-utils.js';

const shoppingCart = document.querySelector('#shopping-cart');
const placeOrderButton = document.querySelector('#place-order-button');
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

placeOrderButton.addEventListener('click', () => {
    const activeOrder = getCart();

    if (!activeOrder.length) {
        alert('Your cart is empty, add items before placing your order.');
    } else {
        let receipt = [];
        let total = 0;

        for (let orderItem of activeOrder) {
            const lineItem = {};
            const itemInfo = findById(orderItem.id, books);
            lineItem.TITLE = itemInfo.title;
            lineItem.QUANTITY = orderItem.quantity;
            lineItem.COST = calcItemTotal(itemInfo, orderItem.quantity);
            total += lineItem.COST;
            receipt.push(lineItem);
        }

        receipt.push({ Total: `$${total}` });
        alert(JSON.stringify(receipt, true, 2));
        clearCart();
        location = '../';
    }
});