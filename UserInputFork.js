function mathematicOperations() {
    num1 = parseInt(prompt("Escribe un número: "),10);
    num2 = parseInt(prompt("Escribe otro número: "),10);
    console.log("The sum is x = " + (num1+num2))
    console.log("The subtraction is y = " + (num1-num2))
    console.log("The multiplication is z = " + (num1*num2))
    console.log("The division is w = " + (num1/num2))
    console.log("The remainder is q = " + (num1%num2))
    }
    mathematicOperations();

    
    tasks=prompt('Write the number of tasks that you completed: ')
function resultado(){
    if (tasks <= 6 && tasks >= 0)
console.log("**Failed**")
    else if (tasks > 6 && tasks <= 9)
console.log("**Insufficient")
    else if (tasks > 9 && tasks <= 14)
console.log("**Good**")
    else if (tasks == 15)
console.log("**Excellent**")
    else if (tasks > 15 || tasks < 0)
console.log("**Error**")
}
resultado();