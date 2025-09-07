fetch('https://fortniteapi.io/v2/shop?lang=pl', {
    headers: {
        'Authorization': ' 39e8e32b-ed524c28-6bf06356-4515617b'
    }
})
.then(response => response.json())
.then(data => {
    const shopItems = data.shop;
    // Przetwórz dane i wyświetl przedmioty na stronie
})
.catch(error => console.error('Błąd:', error));
