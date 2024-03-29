/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optionEl = document.createElement('option');
    optionEl.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionEl);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // DONE: Prevent the page from reloading

  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// DONE: Add the selected item and quantity to the cart
function addSelectedItemToCart() {   
  var itemsEl = document.getElementById('items').value;
  var quantityEl = document.getElementById('quantity').value;
  cart.addItem(itemsEl, parseInt(quantityEl));
  // console.log(cart.items[0].product);
  // console.log(cart.items[0].quantity); 
}

// DONE: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var itemCountEl = document.getElementById('itemCount');
  var add = 0;

  for (var i =0; i < cart.items.length; i++) {
    add += cart.items[i].quantity;
  }
 itemCountEl.textContent = add;
}

// DONE: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // DONE: Get the item and quantity from the form
  // DONE: Add a new element to the cartContents div with that information

  var itemAddedDisplayEl = document.getElementById('cartContents');
  var itemsEl = document.getElementById('items').value;
  var quantityEl = document.getElementById('quantity').value;
  itemAddedDisplayEl.textContent ='Item:  ' + itemsEl + '  Quantity: ' + quantityEl;
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process

var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
