const form = document.querySelector('form')


let allValue = []

form.addEventListener("submit", function(e){
    e.preventDefault()

    const userVal = document.querySelector('#input')
    const parseVal = parseInt(userVal.value)

    if (parseVal === "" || isNaN(parseVal) || parseVal <= 0) {
        alert("message are not valid or empty")
    }else{
        allValue.push(parseVal)
        userVal.value = ""
        showPrice()
    }
    console.log(allValue);
    
})

const calcbtn = document.querySelector('#calc-btn')

calcbtn.addEventListener("click", (e)=>{
    e.stopPropagation()
    let alladdval = allValue.reduce((acc, crrVal) => {
        return acc + crrVal
        
    }, 0)

    let resultMsg = document.querySelector('#showResult')
    resultMsg.innerHTML = `Result: ${alladdval}`

    // console.log(alladdval);
})

function showPrice(){
    let priceMsg = document.querySelector('#showPrice')
    priceMsg.innerHTML = `price: ${allValue}`
}