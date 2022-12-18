const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve,100,'nitesh')
}) 

Promise.all([promise1,promise2,promise3]).then((values) => {
    console.log(values);
})


const pro1 = new Promise((resolve,reject) => {
    setTimeout(() => resolve('one'),400)
})
const pro2 = new Promise((resolve,reject) => {
    setTimeout(() => resolve('two'),500)
})
const pro3 = new Promise((resolve,reject) => {
    setTimeout(() => resolve('three'),600)
})
Promise.all([pro1,pro2,pro3])
.then((values) => {
    console.log(values)
})
.catch((error) => {
    console.log(error)
})

const pr1 = new Promise((resolve,reject) => {
    setTimeout(resolve,500,'one')
});
const pr2 = new Promise((resolve,reject) => {
    setTimeout(reject,400,'two')
});
Promise.all([pr1,pr2]).then((values) => console.log(values))