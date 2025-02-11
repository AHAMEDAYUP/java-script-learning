let calculation = localStorage.getItem('calculation')||'';
function calc(value){
    calculation+=value;
     console.log(calculation);
     localStorage.setItem('calculation',calculation);
     showRes()
}
let show=document.querySelector('.show')
function showRes(){
  show.value=`${calculation}`
  
}
let calc1=document.querySelector('.calc');

calc1.addEventListener('click',function(){
 calculation=eval(calculation);
  console.log(calculation)
  showRes()
  localStorage.setItem('calculation',calculation);

             
})
showRes()
