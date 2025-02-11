function subscribe(){
  let a=document.querySelector('.btn-1');
  console.log(a);

if(a.innerHTML==='subscribe'){
  a.innerHTML='subscribed'
  a.classList.add('active-subscribe-btn')
}else{
  a.innerHTML='subscribe'
  a.classList.remove('active-subscribe-btn')
}
}

function shipping(){
const b=document.querySelector('.input1')
let c=document.querySelector('.total-amount')
let cost = Number(b.value)
console.log(cost)
//    if(cost <40){
//     cost+=10
//    }
//    c.innerHTML=`${cost+10}`
if(cost=== 0){
  c.innerHTML='enter some input'
}
else if(cost<0){
  c.innerHTML='cost cannot be less than 0'
}
else if(cost<40 ){
  c.innerHTML=`${cost+10}`
}else if(cost>=40){
  c.innerHTML=`${cost}`
}

}
const b=document.querySelector('.input1');
b.addEventListener('keydown',function(event){
if(event.key==='Enter'){
  shipping();
}
});