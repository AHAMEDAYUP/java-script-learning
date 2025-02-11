function toggled(btn){
  const jsButton=document.querySelector(btn)
  removeIstoggled()
  if(!jsButton.classList.contains('is-toggled')){
    jsButton.classList.add('is-toggled')
  }else if(jsButton.classList.contains('is-toggled')){
    jsButton.classList.remove('is-toggled')
  }
}
function removeIstoggled(){
  const toggledBTN=document.querySelector('.is-toggled')
  if(toggledBTN){
    toggledBTN.classList.remove('is-toggled')
  }
}
const gamingBtn=document.querySelector('.btn-gaming')
const ludoBtn=document.querySelector('.btn-ludo')
const chessBtn=document.querySelector('.btn-chess')
gamingBtn.addEventListener('click',()=>{
  toggled('.btn-gaming')
})
ludoBtn.addEventListener('click',()=>{
  toggled('.btn-ludo')
})
chessBtn.addEventListener('click',()=>{
  toggled('.btn-chess')
})