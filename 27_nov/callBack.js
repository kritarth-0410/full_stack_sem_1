function add(a, b){
   const sum = a + b
   return sum
}

function mul(a, b){
    const multiply = a * b
    return multiply
}

function calculate(x, y, z){
    const ans = z(x, y)
    return ans
}

// Task: Function that checks if any of the given number is even. 
// If it is then return Even, else Odd.

function checkEven(a,b){
    if (a % 2 == 0 || b % 2 == 0){
        return 'Even'
    }
    else{
        return 'Odd'
    }
}



// Testing the function 

const m = 10
const n = 23

console.log(calculate(m, n, add))
console.log(calculate(m, n, mul))
console.log(calculate(m, n, checkEven))

