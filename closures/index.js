// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// (function (x) {
//     console.log(x);
    
// })(3)

Promise.race([
    new Promise(res => setTimeout(() => res("Fast"), 10)),
    new Promise(res => setTimeout(() => res("Slow"), 50))
]).then(res => console.log(res));

Promise.any([
    Promise.reject("X"),
    Promise.resolve("Y"),
    Promise.resolve("Z")
]).then(res => console.log(res));

async function test() {
    return 42;
}

console.log(test());
async function run() {
    console.log(1);
    await Promise.resolve();
    console.log(2);
}

console.log(0);
run();
console.log(3);

