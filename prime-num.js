function primeNum(number) {
    if (number < 2) {
        return "number is not prime";
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return "number is not prime"
        }
    }
    return "number is prime";
};

const number = primeNum(7);
console.log(number);