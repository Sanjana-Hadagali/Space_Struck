let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
    cart.classList.add("active");
};

cartIcon.onclick = () => {
    cart.classList.remove("active");
};

if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();

}
//making function

function ready() {
    //remove items
    var removeCartButtons = document.getElementByClassName('cart-remove')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem)
    }
}

//remove items
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
}

//update total
function updatetotal() {
    var cartContent = document.getElementByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementByClassName('cart-box')
    for (var i = 0; i < cartCartButtons.length; i++) {
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementByClassName('cart-quantity')[0]
        var quantity = quantityElement
    }
}