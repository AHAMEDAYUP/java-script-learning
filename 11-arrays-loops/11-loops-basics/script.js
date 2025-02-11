// for loop (standard loop)
// // syntax for for-loop => for(initialization,condition,increment (or) decrement){  }

for(let i=1;i<=5;i++){
 console.log(i)
}

//while loop(non-standard loop)
//syntax for  while is => while(condition){ increment/decrement }
let i=1
while(i<=5){
  console.log(i)
  i++
}
// an example for non-standard loop and why it's called an non-standard loop
// lets create generate random number less than 0.5
let randomNumber=''
while(randomNumber<0.5){
  randomNumber=Math.random()
 
}

// example for looping through an array by using accumulator pattern 
// (it means step-1:create a variable to store a XPathResult,step-2:looping through an array )

let array1=[1,2,3,5]
let total=0
for(let i=0;i<array1.length;i++){
let value=array1[i]
  total+=value
}
console.log(total)

// example2-let double the values of above array
let array2=[]
for(let i=0;i<array1.length;i++){
let value=array1[i]
array2.push(value*2)
}
console.log(array2)