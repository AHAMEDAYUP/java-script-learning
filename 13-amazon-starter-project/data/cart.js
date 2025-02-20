export let cart=[]


export function AddToCart(productId) {

  let QuantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  
  QuantitySelector = Number(QuantitySelector.value);


  let quantity=0 ; // this var is to store the particular product quantity
  quantity+= QuantitySelector;


  let matching;
  cart.forEach((item) => {
    if (item.productId === productId) {
      matching = item;
    }
  });
  if (matching) {
    matching.quantity +=quantity;
  } else {
    cart.push({ productId, quantity }); //short hand syntax for productId:productId, quantity:quantity
  }
  console.log(cart);
  



  
}