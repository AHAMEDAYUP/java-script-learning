export let cart=JSON.parse(localStorage.getItem('cart'))||
[{
  productId:  "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 2
},{
  productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 5
}]
export function saveToLocalStorage(){
  localStorage.setItem("cart",JSON.stringify(cart))
}

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
 saveToLocalStorage()
                                                
}
  // REMOVE FROM CART FUNCTION
    
 export function removeFromCart(productId){
  let newCart=[]
    cart.forEach((item)=>{
      if(item.productId!==productId){
        newCart.push(item)
      }
    })
    cart=newCart   
  console.log(cart)
  saveToLocalStorage()
  }
 
 export function calculateCartQuantity(){
  let quantity=0;
  cart.forEach((item)=>{
    quantity+=item.quantity
  })
  return quantity
 }