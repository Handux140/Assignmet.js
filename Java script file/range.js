function sumPrimesInRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

// Test case
console.log(sumPrimesInRange(1, 12));
