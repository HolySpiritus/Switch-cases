// "use strict"
 
let num = 5;
 
// function random (){
//    const random = Math.floor(Math.random() * num);
//    const random2 = Math.floor(Math.random() * num);
//    console.log(`number 1 = ${random} number 2 = ${random2}`)
//    average (random, random2)
// };
 
// function average(a,b){
//  const average = (a+b)/2
//  console.log(average)
// };
 
// random();
 
const arr = []
 
function array (){
 
  for(let i = 0; i < 5; i++){
    let random = Math.floor(Math.random() * num);
    arr.push(random)
    console.log(arr)
  };
}
 
 
function bblSort(arr) {
 
    for (let i = 0; i < arr.length; i++) {
 
 
        for (let j = 0; j < (arr.length - i - 1); j++) {
 
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
 
    console.log(arr);
}
 
 
 
 
array();
bblSort(arr);