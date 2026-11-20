const products=[
    {
    title: 'Mobile',
    price: '$1100',
    rating: 4.5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXaH1Vn-XH4GOMb-MLwvV5pjz8SK9ONJVUKFGIdScCw&s=10'
},
    {
    title: 'Laptop',
    price: '$500',
    rating: 4.3,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTnGxAgUKYVU-S2zwZJNXhgPZJQP88yELW3EgyxL-kP1XhMhBm9Ss0EGNv2FNuf2jwe3kVNtgG7KRowrRQqGCHmQF0znX2yvitRQfFiGkFOD9y1f3vareHkH_yVN320PA&usqp=CAc'
},
    {
    title: 'Keyboard',
    price: '$100',
    rating: 4.7,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTm2uCN0-mCyASi3Ibf4KS5DqfgUUHtcJeHpue9CKyc9hwdYpid-vDcFfndlaydgfVhGPXVpUHxUwZz2Rep6-Z0DIMK_15rKKYfCkzE-dw6A65v0T45YnuZBJ2gDPOlrlY9QSPKDfFHUg&usqp=CAc'
}
]

for (let i = 0; i < products.length; i++){
    const newCard = document.createElement('div')
    newCard.className = 'card'
    newCard.innerHTML = `<img
            src="${products[i].image}">
            <div class="product-info">
            <h4>${products[i].title}</h4>
            <p>Price: ${products[i].price}</p>
            <p>Rating: ${products[i].rating}⭐️</p> 
            </div>`

    const parent = document.getElementById('root')
    parent.appendChild(newCard)
}