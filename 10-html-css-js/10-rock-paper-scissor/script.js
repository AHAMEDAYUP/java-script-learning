
function subscribe(){
  let a=document.querySelector('.btn-1');
  console.log(a);
a.innerHTML==='subscribe'?a.innerHTML='subscribed':a.innerHTML='subscribe'
}

function compMove(){
  const rN=Math.random();
  let computerChoice='';

if(rN>=0 && rN<1/3){
 computerChoice='rock';
}else if(rN>=1/3 && rN<2/3){
 computerChoice='paper';
}
else if(rN>=2/3 && rN<1){
 computerChoice='scissors';
}

return computerChoice;

}

let res=JSON.parse(localStorage.getItem('result'))|| {
  win:0,
  lose:0,
  tie:0  
};


function playerMove(myMove){
  const computerChoice=compMove();
  let result=''
  if(myMove==='rock'){
     
if(computerChoice==='rock'){
  result='tie';
}else if(computerChoice==='paper'){
  result='lose';
}else if(computerChoice==='scissors'){
  result='win';

}

}    else if(myMove==='paper'){
 
if(computerChoice==='rock'){
 result='win';
}else if(computerChoice==='paper'){
 result='tie';
}else if(computerChoice==='scissors'){
 result='lose';

}

} else if(myMove==='scissors'){
  
if(computerChoice==='rock'){
 result='lose';
}else if(computerChoice==='paper'){
 result='win';
}else if(computerChoice==='scissors'){
 result='tie';

}}
if(result==='win'){
res.win+=1;
}else if(result==='lose'){
res.lose+=1;
}else if(result==='tie'){
res.tie+=1;
}
localStorage.setItem('result',JSON.stringify(res));

updateScore()
//    alert(`your move is ${myMove},the computer move is ${computerChoice} , the result gonna be ${result}
// win:${res.win} , lose:${res.lose} , tie:${res.tie}
//    `);
let moves=document.querySelector('.moves').innerHTML=`you-<img src="./${myMove}-emoji.png" alt="" class="emoji">  <---> <img src="./${computerChoice}-emoji.png" alt="" class="emoji"> - computer`
let results=document.querySelector('.results').innerHTML=` you-${result}`
}   
function updateScore()
{
 
let us=document.querySelector('.updatescore').innerHTML=`win:${res.win} , lose:${res.lose} , tie:${res.tie}`

}
updateScore()
