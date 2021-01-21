import { findById, calcItemTotal } from '../utils.js';

export function addCartItem(cartItem, array) {
    const item = findById(cartItem.id, array);
    const total = calcItemTotal(item, cartItem.quantity);
    const tr = document.createElement('tr');

    const tdProduct = document.createElement('td');
    tdProduct.textContent = `${item.title} by ${item.author}`;

    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = cartItem.quantity;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = total;

    tr.append(tdProduct, tdQuantity, tdPrice);

    return tr;
}