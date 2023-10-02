function back(str){
    let copyStr = str;
    return copyStr.substr(0, copyStr.length - 1)
}

function subtraction(a, b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function sum(a,b){
    return a + b;
}

function mod(a,b){
    return a % b;
}

const parseMethod = (operator, a, b) => ({
    "+": sum(a,b),
    "-": subtraction(a,b),
    "/": divide(a,b),
    "*": multiply(a,b),
    "%": mod(a,b),
}[operator])