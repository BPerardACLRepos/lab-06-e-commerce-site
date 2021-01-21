export function findById(id, array) {
    for (let item of array) {
        if (id === item.id) {
            return item;
        }
    }
    return null;
}

export function calcItemTotal(item, quantity) {

}