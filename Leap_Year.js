function isLeapYear_LogicChain(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return 'a leap year';
    } else {
        return 'not a leap year';
    }
}

function isLeapYear_NestedIfConditional(year) {
    if (year % 4 === 0) { 
        if (year % 100 === 0) { 
            if (year % 400 === 0) { 
                return 'a leap year';
            } else {
                return 'not a leap year';
            }
        } else {
            return 'a leap year'; 
        }
    } else {
        return 'not a leap year'; 
    }
}

console.log(isLeapYear_LogicChain(2100)); 
console.log(isLeapYear_NestedIfConditional(2100)); 

console.log(isLeapYear_LogicChain(2000)); 
console.log(isLeapYear_NestedIfConditional(2000)); 

console.log(isLeapYear_LogicChain(2024)); 
console.log(isLeapYear_NestedIfConditional(2024)); 
