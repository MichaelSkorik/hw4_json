document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('items-container');
    const cartContainer = document.getElementById('cart-container');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountContainer = document.getElementById('total-amount');
    let cart = [];

    const products = [{
            "id": 1,
            "name": "abibas",
            "description": "Known for her sculptural takes on traditional tailoring.",
            "price": "$52.00",
            "image": "img/item1.png"
        },
        {
            "id": 2,
            "name": "pumba",
            "description": "Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52.00",
            "image": "img/item2.png"
        },
        {
            "id": 3,
            "name": "crocodile",
            "description": "Known for her sculptural takes on traditional tailoring.",
            "price": "$50.00",
            "image": "img/item3.png"
        },
        {
            "id": 4,
            "name": "nikel",
            "description": "Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$60.00",
            "image": "img/item4.png"
        },
        {
            "id": 5,
            "name": "gussi",
            "description": "Known for her sculptural takes on traditional tailoring.",
            "price": "$40.00",
            "image": "img/item5.png"
        },
        {
            "id": 6,
            "name": "HandM",
            "description": "Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$55.00",
            "image": "img/item6.png"
        }
    ];

    function parsePrice(priceString) {
        return parseFloat(priceString.replace('$', ''));
    }

    function calculateTotal() {
        return cart.reduce((total, item) => total + (parsePrice(item.price) * item.quantity), 0).toFixed(2);
    }

    function createItemCard(item) {
        return `
            <div class="item">
                <div class="item-img-container">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="overlay">
                        <div class="overlay-content">
                            <img src="img/basket.png" alt="basket" class="basket-icon" data-id="${item.id}">
                            <p class="overlay-text">Add to Cart</p>
                        </div>
                    </div>
                </div>
                <div class="item-info">
                    <p>${item.name}</p>
                    <p>${item.description}</p>
                    <p><span class="price">${item.price}</span></p>
                </div>
            </div>
        `;
    }

    function createCartItem(item) {
        const itemTotal = (parsePrice(item.price) * item.quantity).toFixed(2);
        return `
            <div class="cart-item">
                <p>${item.name} - ${item.price} (Quantity: ${item.quantity}, Total: $${itemTotal})</p>
                <button class="remove-button" data-id="${item.id}">Remove</button>
            </div>
        `;
    }

    function renderItems(items) {
        itemsContainer.innerHTML = '';
        items.forEach(item => {
            itemsContainer.innerHTML += createItemCard(item);
        });
    }

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartContainer.style.display = 'none';
            totalAmountContainer.innerHTML = '';
        } else {
            cart.forEach(item => {
                cartItemsContainer.innerHTML += createCartItem(item);
            });
            cartContainer.style.display = 'block';
            totalAmountContainer.innerHTML = `Total Amount: $${calculateTotal()}`;
        }
    }

    function addToCart(itemId) {
        const item = products.find(product => product.id === parseInt(itemId));
        if (item) {
            const cartItem = cart.find(cartItem => cartItem.id === item.id);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                cart.push({...item, quantity: 1 });
            }
            renderCart();
        }
    }

    function removeFromCart(itemId) {
        const itemIndex = cart.findIndex(item => item.id === parseInt(itemId));
        if (itemIndex !== -1) {
            const cartItem = cart[itemIndex];
            if (cartItem.quantity > 1) {
                cartItem.quantity -= 1;
            } else {
                cart.splice(itemIndex, 1);
            }
            renderCart();
        }
    }

    itemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('basket-icon')) {
            const itemId = event.target.getAttribute('data-id');
            addToCart(itemId);
        }
    });

    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-button')) {
            const itemId = event.target.getAttribute('data-id');
            removeFromCart(itemId);
        }
    });

    renderItems(products);
});