
function generateFibonacci(number) {
    let fibSequance = [0, 1];
    for (let index = 2; index < number; index++) {
        let nextNumber = fibSequance[index - 1] + fibSequance[index - 2];
        fibSequance.push(nextNumber) 
    }
    return fibSequance;
}
const numberOfTerms = 10;
const fibonacciResult = generateFibonacci(numberOfTerms);
console.log(`Fibonacci sequence up to ${numberOfTerms} terms: ${fibonacciResult.join(', ')}`);