const productEntryForm = document.querySelector('#product-entry');

productEntryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newProduct = [];

    const formData = new FormData(productEntryForm);
    const entries = formData.entries();
    for (let field of entries) {
        newProduct.push(`{${field[0]}: field[1]}`);
    }
    console.log(newProduct);
});