const p = new Promise(function(resolve, reject) {
setTimeout(() => {
    resolve('it is time');
}, 15000)
})


p.then(
    (data) => {
        console.log(data)
    },
    (err) => {
        console.log(err)
    }
);