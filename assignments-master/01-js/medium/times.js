function calculateTime(n) {
    let sum = 0;
    let start = Date.now();

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    let end = Date.now();

    return end - start;
}

console.log(calculateTime(100));
console.log(calculateTime(100000));
console.log(calculateTime(100000000000));
