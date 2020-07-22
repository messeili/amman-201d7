/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
      var option = document.createElement("option");
      option.innerHTML = Product.allProducts[i].name;
      selectElement.append(option);  
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {


  // Do all the things ...
  event.preventDefault()
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  parent.style.display = "block";

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
 var quantity = document.getElementById('catalog').quantity.value;
 var name = document.getElementById('catalog').items.value;
 cart.addItem(name, quantity);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var itemCount = document.getElementById('itemCount');
  itemCount.innerHTML = cart.items.length;
  
}


// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var list = document.createElement('ul');
   var listItem = document.createElement('li');
   listItem.innerHTML = 'New Product : '+ cart.items[cart.items.length-1].product + ' and the quantity is: '+ cart.items[cart.items.length-1].quantity;
  list.append(listItem);
  secondDiv.append(list);
   
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
span.onclick = function () {
  parent.style.display = 'none';
}
window.onclick = function (event) {
  if (event.target == parent) {
    parent.style.display = 'none';
  };
};