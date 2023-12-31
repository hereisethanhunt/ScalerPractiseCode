const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 2000, 'one');
});
const secondPromise = new Promise((res, rej) => {
    // setTimeout(res, 100, 'two');
    setTimeout((arg) => {
        res(arg)
    }, 3000, "two")
});


// from wherever you get the answer
Promise.race([firstPromise, secondPromise])
.then(res => console.log(res))
.catch((err)=> console.log(err,"error"));