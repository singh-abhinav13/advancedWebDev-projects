const displayValue = document.getElementById("value")
const increBtn = document.getElementById("increment")
const decreBtn = document.getElementById("decrement")
const resetBtn = document.getElementById("reset")






let value = 0;
function addNum() {
    if (value < 20) {
        value = value + 1
        displayValue.innerHTML = value
        removeEventListener(increBtn)
    }
}

function resetValue(){
    value = 0
    displayValue.innerHTML = value
}

function removeNum() {
    if (value > 0) {
        value = value - 1
        displayValue.innerHTML = value
        removeEventListener(decreBtn)
    }
}

increBtn.addEventListener("click", addNum)
decreBtn.addEventListener("click", removeNum)
resetBtn.addEventListener("click", resetValue)