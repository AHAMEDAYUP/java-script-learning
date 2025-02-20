export let cart=[]
let cartQuantity = 0;

export function AddToCart(productId) {
  let QuantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  QuantitySelector = Number(QuantitySelector.value);
  let quantity=0 ; // this var is to store the particular product quantity
  quantity+= QuantitySelector;

  cartQuantity += QuantitySelector;
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  let matching;
  cart.forEach((item) => {
    if (item.productId === productId) {
      matching = item;
    }
  });
  if (matching) {
    matching.quantity +=`${quantity}`;
  } else {
    cart.push({ productId, quantity }); //short hand syntax for productId:productId, quantity:quantity
  }
  console.log(cart);
  


  cartQuantity += QuantitySelector;
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}