let totalHTML='';
products.forEach((value)=>{
  totalHTML+=`
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
            $${(value.priceCents /100).toFixed(2)}
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

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart-button"
          data-product-id=${value.id}>
            Add to Cart
          </button>
        </div>`
})
document.querySelector('.js-products-grid').innerHTML=totalHTML;
let cartQuantity=0;
let AddToCartBtn=document.querySelectorAll('.js-add-to-cart-button');
AddToCartBtn.forEach((value)=>{
  value.addEventListener('click',function(){
    let productId=value.dataset.productId;
    let matching;
    cart.forEach((item)=>{
      if(item.productId===productId){
        matching=item;
    }
  })
  if(matching){
    matching.quantity+=1;
  }else{
    cart.push({
      productId: productId,
      quantity:1
    })
  }
  console.log(cart)
  cartQuantity+=1;
  document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
  })

})

