import {cart,removeFromCart,saveToLocalStorage,calculateCartQuantity,updateItemQuantity} from "../data/cart.js";
import {products} from "../data/products.js";
import { formatMoney } from "./utils/money.js"; 
let totalHTML = "";
cart.forEach((cartItem) => {
  let productId = cartItem.productId;
 let matchingProduct;
 products.forEach((product) => {
   if (product.id === productId) {
     matchingProduct = product;
   }
 });
 totalHTML += `
<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                $${formatMoney(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update-link"
                  data-product-id="${matchingProduct.id}">
                    Update
                  </span>
                  <input type="number" class="quantity-input js-quantity-input-${matchingProduct.id}">
                  <span class="save-quantity-link link-primary "
                   data-product-id="${matchingProduct.id}"> save</span>
                  <span class="delete-quantity-link link-primary js-delete-quantity"
                    data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>       
`
})
console.log(totalHTML);
document.querySelector(".js-order-summary").innerHTML = totalHTML;
document.querySelectorAll(".js-delete-quantity")
  .forEach((deleteQuantity) => {
   
    deleteQuantity.addEventListener("click", function () {
      let {productId}=deleteQuantity.dataset
     removeFromCart(productId)
  let remove= document.querySelector(`.js-cart-item-container-${productId}`)
    remove.remove()
   updateCheckoutItems()

    })
 
})
function updateCheckoutItems(){
  let quantity=0;
    cart.forEach((item)=>{
      quantity+=item.quantity
    })
    document.querySelector(".js-return-to-home-link").innerHTML=`${quantity} items`  
}
updateCheckoutItems()

document.querySelectorAll(".js-update-link")
.forEach((updateLink)=>{
 
       let {productId}=updateLink.dataset
 
  updateLink.addEventListener("click",function(){
    let {productId}=updateLink.dataset
    console.log(productId)
 document.querySelector(`.js-cart-item-container-${productId}`).classList.add("js-update-input-save")
  })
})
document.querySelectorAll(".save-quantity-link")
.forEach((saveLink)=>{
 

    
  saveLink.addEventListener("click",function(){
    let {productId}=saveLink.dataset
    console.log(productId)
    document.querySelector(`.js-cart-item-container-${productId}`).classList.remove("js-update-input-save")
    document.querySelectorAll(".quantity-input")
    const quantityInput=document.querySelector(`.js-quantity-input-${productId}`)
    const newQuantity=Number(quantityInput.value)
    console.log(newQuantity)
    quantityInput.value=""
    updateItemQuantity(productId,newQuantity)
    document.querySelector(`.js-quantity-label-${productId}`).innerHTML=newQuantity
    calculateCartQuantity()
    updateCheckoutItems()                     
  })
})

