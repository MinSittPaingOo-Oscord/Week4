
function isPrime(num) {
    if (typeof num !== 'number' || num < 2) return false; 
    for (let i = 2; i <= num-1; i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

function findPrimesInRange(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number' || start > end) {
        return messageFormatter('InvalidInput');
    }

    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) primes.push(i);
    }

    return messageFormatter({ start, end, primes });
}

function messageFormatter(input) {
    if (typeof input === 'number') {
        return isPrime(input)
            ? `${input} is a prime number.`
            : `${input} is NOT a prime number.`;
    }

    if (input === 'InvalidInput') {
        return 'Invalid input. Please provide a number or a valid range (array of two numbers).';
    }

    if (typeof input === 'object' && input.primes) {
        return `Primes between ${input.start} and ${input.end}: [${input.primes.join(', ')}]`;
    }
}

console.log(messageFormatter(2));

console.log(messageFormatter(1));

console.log(messageFormatter(13));

console.log(messageFormatter(25));

console.log(findPrimesInRange(10, 20));

console.log(findPrimesInRange(30, 50));

console.log(findPrimesInRange('test'));