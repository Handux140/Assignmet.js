function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function nextPrime(start) {
    let num = start + 1;
    while (!isPrime(num)) {
        num++;
    }
    return num;
}

// Test cases
console.log(nextPrime(13));  // 17
console.log(nextPrime(8));   // 11
