class NumberChecker {
    constructor() { }

    checkOddEven(input) {
        if (typeof input === 'number') {
            return input % 2 === 0 ? 'Even' : 'Odd';
        }

        if (Array.isArray(input)) {
            let result = [];
            for (let i = 0; i < input.length; i++) {
                if (typeof input[i] === 'number') {
                    result[result.length] = input[i] % 2 === 0 ? 'Even' : 'Odd';
                } else {
                    result[result.length] = 'Invalid input';
                }
            }
            return result;
        }
        return 'Invalid input';
    }
}


const numberChecker = new NumberChecker();

console.log(numberChecker.checkOddEven(5));

console.log(numberChecker.checkOddEven(10));

console.log(numberChecker.checkOddEven([3, 5, 7, 10]));

console.log(numberChecker.checkOddEven('Hello'));

