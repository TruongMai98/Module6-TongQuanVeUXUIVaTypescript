function fibonacciSum(n) {
    let a = 0, b = 1, c = 0, sum = 0, d = 1;
    for (let i = 0; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
        sum += a;
        console.log("n" + (d++) + " = " + (a));
    }
    return sum;
}
console.log("fibonacciSum = " + fibonacciSum(10));
//# sourceMappingURL=main.js.map