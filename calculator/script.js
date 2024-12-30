let currentInput = ''
let previousInput = ''
let operation = ''

function updateScreen() {
    document.getElementById("display").value = currentInput || previousInput || "0"
}

function appendNumber(number) {
    currentInput += number;
    updateScreen()
}


function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '')
        calculate();
    operation = op;
    previousInput = currentInput;
    currentInput = ''
    updateScreen()
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput)
    const curr = parseFloat(currentInput)
    
    if (isNaN(prev) || isNaN(curr)) return;
    
    switch (operation) {
        case '+':
            result = prev + curr
            break;
            case '-':
                result = prev - curr
            break;
            case '*':
            result = prev * curr
            break;
            case '/':
                result = curr !== 0 ? prev / curr : "Error"
                break;
                
                default:
                    break;
                }
                
                currentInput = result.toString()
                operation = ''
                previousInput = ''
                updateScreen()
            }
            
function clearDisplay() {
    currentInput = ''
    previousInput = ''
    operation = ''
    updateScreen()
}