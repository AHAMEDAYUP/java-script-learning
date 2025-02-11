//empty array
const a=[]
//array with value
const a1=[1, 2, 3, 4]
console.log(a1)
//access the array element by its index
console.log(a1[0]) // accessing the element at 0 index
//add a new value at the end of the array
a1.push('100') // 100 as string
console.log(a1)
a1.push(100) // 100 as number
console.log(a1)
console.log(typeof(a1[4]))
console.log(typeof(a1[5]))
//remove a number
//spile(index,number of element remove at the particular index) 
a1.splice(1,1) // removing one element at the index 1
console.log(a1)
a1.splice(1,2) // removing two element at the index 1
console.log(a1)
