let listINPUT=document.querySelector('.list-input')
const btn=document.querySelector('.btn')
// let todoARRAY=['today','hi']
let todoARRAY=[]
function storeARRAY(){
  let value=listINPUT.value
  todoARRAY.push(value)
  console.log(todoARRAY)
  listINPUT.value=''
}
btn.addEventListener('click',function(){
  storeARRAY()
  showARRAY()
})
// showARRAY()
function showARRAY(){
  let htmlARRAY=``
  
  for(i=0;i<todoARRAY.length;i++){
    let getARRAY=todoARRAY[i]
    htmlARRAY+=`<p>${getARRAY}</p>`
    // console.log(htmlARRAY)
        let todoLIST=document.querySelector('.todo-list').innerHTML=`${htmlARRAY}`
        
  }


}