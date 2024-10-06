// 1) make a promise that rejects or resolves 50/50

// function myPromise(){
//   return new Promise((res,rej)=>{
//     const success = Math.random() > 0.5;
//     if (success) {
//       res('promise success');
//     } else {
//       rej('promise failed');
//     }
//   })
// }

// myPromise()
//   .then(res => console.log(res))
//   .catch(err=>console.log(err))



// 2) write a function that get data from: https://jsonplaceholder.typicode.com/users and return result

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json()) 
//   .then(data => console.log(data))  



// 3) write a function that try to get data from: https://jsonplaceholde.typicode.com
//  (link is invalid for this task)
//  if request will failed try to retrieve it 5 times 




// 4) write a function that try to get data from this two sources:  
// https://dummyjson.com/users and https://jsonplaceholder.typicode.com/users
//  and return the only response which has faster response, use fetch or axios method

// const promise1 = fetch('https://dummyjson.com/users');
// const promise2 = fetch('https://jsonplaceholder.typicode.com/users');

// Promise.race([promise1,promise2])
//   .then(response => response.json()) 
//   .then(data => console.log(data)) 



// 5) create a three promise that returns any kind of arrays with difference time.
//  one of one of them should be reject other two should be fulfilled. merged the only fulfilled arrays.

// const myPromise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res([1,2,3])
//   }, 1000)
// })

// const myPromise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej([4,5,6])
//   }, 1000)
// })

// const myPromise3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res([7,8,9])
//   }, 1000)
// })
// Promise.allSettled([myPromise1,myPromise2,myPromise3])
//   .then((res)=>{
//     const mergedArray = []
//     res.forEach(promise=>{
//       if(promise.status === 'fulfilled'){
//         mergedArray.push(...promise.value)
//       }
//     })
//     console.log(mergedArray)
//   })
