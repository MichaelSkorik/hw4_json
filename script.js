document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('items-container');

    const products = [{
            "id": 1,
            "name": "ELLERY X MO CAPSULE",
            "description": "Known for her sculptural takes on traditional tailoring.",
            "price": "$52.00",
            "image": "img/item1.png"
        },
        {
            "id": 2,
            "name": "ELLERY X MO CAPSULE",
            "description": "Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52.00",
            "image": "img/item2.png"
        },
        {
            "id": 3,
            "name": "ELLERY X MO CAPSULE",
            "description": "Known for her sculptural takes on traditional tailoring.",
            "price": "$52.00",
            "image": "img/item3.png"
        },
        {
            "id": 4,
            "name": "ELLERY X MO CAPSULE",
            "description": "Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52.00",
            "image": "img/item4.png"
        },
        {
            "id": 5,
            "name": "ELLERY X MO CAPSULE",
            "description": "Known for her sculptural takes on traditional tailoring.",
            "price": "$52.00",
            "image": "img/item5.png"
        },
        {
            "id": 6,
            "name": "ELLERY X MO CAPSULE",
            "description": "Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52.00",
            "image": "img/item6.png"
        }
    ];

    function createItemCard(item) {
        return `
            <div class="item">
                <div class="item-img-container">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="overlay">
                        <div class="overlay-content">
                            <img src="img/basket.png" alt="basket" class="basket-icon">
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

    function renderItems(items) {
        items.forEach(item => {
            itemsContainer.innerHTML += createItemCard(item);
        });
    }

    renderItems(products);
});