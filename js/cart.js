/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  var tbEl = document.getElementById('cart');
  for (var i = 0; i < localStorage.length; i++) {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    var tdEl1 = document.createElement('td');
    var tdEl2 = document.createElement('td');
    tdEl.textContent = 'X';
    tdEl1.textContent = localStorage.getItem(localStorage.key(i));
    tdEl2.textContent = localStorage.key(i);

    trEl.appendChild(tdEl);
    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    tbEl.appendChild(trEl);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
