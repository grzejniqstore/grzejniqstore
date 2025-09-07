then(data => {
    const shopItems = data.shop;
    const shopContainer = document.getElementById('shop-items');
    shopItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('shop-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price} V-Bucks</p>
        `;
        shopContainer.appendChild(itemElement);
    });
})
