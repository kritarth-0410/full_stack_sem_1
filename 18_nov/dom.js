const products=[
    {
    title: 'Mobile',
    price: '$1100',
    rating: 4.5,
    image: 'https://www.samsungmobilepress.com/media-assets/galaxy-s26-ultra'
},
    {
    title: 'Laptop',
    price: '$500',
    rating: 4.3,
    image: 'https://www.google.com/imgres?q=image%20for%20lenovo%20yoga&imgurl=https%3A%2F%2Fp1-ofp.static.pub%2FShareResource%2Foptimized%2Fpdp%2Fyoga%2Fyoga-2-in-1-series%2Flen101y0071%2Flenovo-yoga-1-in-2-gen-11-aura-edition-14-intel-hero.png%3Fwidth%3D328%26height%3D328&imgrefurl=https%3A%2F%2Fwww.lenovo.com%2Fin%2Fen%2Fp%2Flaptops%2Fyoga%2Fyoga-2-in-1-series%2Fyoga-7i-2-in-1-gen-11-aura-edition-14-inch-intel%2Flen101y0071%3Fsrsltid%3DAYCX9vJBZFQkegWPskG1xeZHtWyI1I_gbXFeb9gd9D1A_OaIlVI2dBTw&docid=tEeHoCb6h3uTZM&tbnid=7Dpy6Y31aQx7KM&vet=12ahUKEwirvILioJGYAxXSaGwGHeVxAqEQnPAOegQIRRAA..i&w=328&h=328&hcb=2&ved=2ahUKEwirvILioJGYAxXSaGwGHeVxAqEQnPAOegQIRRAA'
},
    {
    title: 'Keyboard',
    price: '$100',
    rating: 4.7,
    image: 'https://www.google.com/imgres?q=image%20for%20logitech%20mx%20keys&imgurl=https%3A%2F%2Fwww.logitech.com%2Fcontent%2Fdam%2Flogitech%2Fen%2Fproducts%2Fkeyboards%2Fmx-keys-mini-for-business%2Fgallery%2Fmx-keys-mini-business-keyboard-gallery-us-graphite-1.png&imgrefurl=https%3A%2F%2Fwww.logitech.com%2Fen-us%2Fbusiness%2Fshop%2Fp%2Fmx-keys-mini-for-business&docid=BvtUapvvGdrRpM&tbnid=hQIAB5IhhGuSTM&vet=12ahUKEwiapaf8oJGYAxXXUGwGHd4PMDYQnPAOegUI3QEQAA..i&w=1600&h=1374&hcb=2&ved=2ahUKEwiapaf8oJGYAxXXUGwGHd4PMDYQnPAOegUI3QEQAA'
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