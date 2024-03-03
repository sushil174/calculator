function add(a,b){
    return a+b
}

function substract(a,b){
    return a-b
}

function multipy(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

var firstNumber = ""
var secondNumber = ""
var operator = ""

function operate(f,s,o){
    switch(o) {
        case '+':
            return add(f,s)
            break;
        case  '-':
            return substract(f,s)
            break;
        case  '*':
            return multipy(f,s)
            break;
        case  '/':
            return divide(f,s)
            break;
    }

}
const equal = document.querySelector(".equal")
const first = document.querySelector(".f")
const op = document.querySelector(".o")
const second = document.querySelector(".s")

const buttons = Array.from(document.querySelectorAll(".button"))
const operations = Array.from(document.querySelectorAll(".op"))
var display = document.querySelector(".display")
var temp = 0

buttons.forEach((btn)=>{
    btn.addEventListener('click', () => {
        if(temp==0){
            firstNumber = firstNumber.concat(btn.value)
            first.textContent = firstNumber
        }
        else{
            secondNumber = secondNumber.concat(btn.value)
            second.textContent = secondNumber
        }
    })
})

operations.forEach((operate)=>{
    operate.addEventListener('click',()=>{
        operator = operate.value
        op.textContent = operator
        temp = 1
    })
})

equal.addEventListener('click', ()=>{
    temp = 0
    result = operate(parseInt(firstNumber),parseInt(secondNumber),operator)
    display.textContent = result
    firstNumber = ""
    secondNumber = ""
    operator = ""
})
