class SimpleCalculator {
    constructor() { }

    calculate(operation, num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return 'Invalid input: num1 and num2 must be numbers';
        }

        switch (operation) {
            case 'add':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
            case 'multiply':
                return num1 * num2;
            case 'divide':
                if (num2 === 0) return 'Cannot divide by zero';
                return Math.floor(num1 / num2);
            case 'modulus':
                return num1 % num2;
            default:
                return 'Invalid operation. Supported operations: add, subtract, multiply, divide, modulus';
        }
    }
}

const calculator = new SimpleCalculator();

console.log(calculator.calculate('add', 5, 3));       

console.log(calculator.calculate('subtract', 10, 4)); 

console.log(calculator.calculate('multiply', 6, 7));  

console.log(calculator.calculate('divide', 8, 2));    

console.log(calculator.calculate('divide', 9, 2));    

console.log(calculator.calculate('divide', 8, 0));    

console.log(calculator.calculate('modulus', 8, 3));       

console.log(calculator.calculate('add', 5, 'three')); 

