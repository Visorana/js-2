function prime(n) {
    let result = []
    for (let i = 2; n != 0; i++) {
        let flag = 1;
        for (let j = 2; j * j <= i; j++) {
            if (i % j == 0) {
                flag = 0;
            }
        }
        if (flag == 1) {
            result.push(i);
            n -= 1;
        }
    }
    return result
}

console.time('prime')
console.log(prime(process.argv[2]))
console.timeEnd('prime')