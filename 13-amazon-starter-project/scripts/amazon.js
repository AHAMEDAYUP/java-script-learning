import { cart, AddToCart, calculateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatMoney } from "./utils/money.js";
let totalHTML = "";
products.forEach((value) => {
  totalHTML += `
  <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${value.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${value.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${value.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${value.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatMoney(value.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${value.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${value.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart-button"
          data-product-id=${value.id}>
            Add to Cart
          </button>
        </div>`;
});
document.querySelector(".js-products-grid").innerHTML = totalHTML;

let theInterval = null;

let AddToCartBtn = document.querySelectorAll(".js-add-to-cart-button");

function showCartQuantity() {
 
  const cartQuantity = calculateCartQuantity();
  document.querySelector(".js-cart-quantity").textContent = cartQuantity;
}
showCartQuantity();
AddToCartBtn.forEach((value) => {
  value.addEventListener("click", function () {
    let { productId } = value.dataset; //destructuring
    AddToCart(productId)
    showCartQuantity()
    console.log(cart);
    const addedToCart = document.querySelector(
      `.js-added-to-cart-${productId}`
    ); 
    addedToCart.style.opacity = "1";
    addedToCart.style.transition = "0.5s";
    if (theInterval) {
      clearTimeout(theInterval);
    }
    theInterval = setTimeout(() => {
      addedToCart.style.opacity = "0";
    }, 1000);
  
  });
});
