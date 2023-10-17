function resolveAfterNSeconds(delay, x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, delay);
    });
}

(function () {

    let a = resolveAfterNSeconds(1000, 1) // 1 sec
    a.then(async function (x) {
        let y = await resolveAfterNSeconds(2000, 2) // 3 sec
        
        let z = await resolveAfterNSeconds(1000, 3) // 4 sec

      
        let p = resolveAfterNSeconds(2000, 4);
        let q = resolveAfterNSeconds(1000, 5);

        // 2 secs
        
        // p = await p;
        // q = await q;
        // output, total time
        console.log(x + y + z + await p + await q);
        // 1 + 2 + 3 + 4 + 5 = 15 , 6 secs
    })
})()

// async function getData() {
//     return 10
// }
// let a = await getData();
// console.log(a)





