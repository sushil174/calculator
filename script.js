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

const buttons = Array.from(document.querySelectorAll(".button"))
const operations = Array.from(document.querySelectorAll(".op"))
const clear = document.querySelector(".clear")
var display = document.querySelector(".display")
var temp = 0
var count = 0
var query = ""

buttons.forEach((btn)=>{
    btn.addEventListener('click', () => {
        if(temp==0){
            firstNumber = firstNumber.concat(btn.value)
            query = query.concat(btn.value)
        }
        else{
            secondNumber = secondNumber.concat(btn.value)
            query = query.concat(btn.value)
            temp = 0
        }
        display.textContent = query
    })
})

operations.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(count == 0){
            operator = btn.value
            query = query.concat(btn.value)
            display.textContent = query
            temp = 1
            count = 1

        }
        else {
            result = operate(parseInt(firstNumber),parseInt(secondNumber),operator)
            firstNumber = result
            query = firstNumber.toString()
            display.textContent = firstNumber
            secondNumber = ""
            operator = btn.value
            query = query.concat(operator)
            display.textContent = query
            temp = 1
        }
    })
})

equal.addEventListener('click', ()=>{
    temp = 0
    result = operate(parseInt(firstNumber),parseInt(secondNumber),operator)
    firstNumber = result
    query = firstNumber.toString()
    display.textContent = firstNumber
    secondNumber = ""
    operator = ""
})

clear.addEventListener('click', ()=>{
    display.textContent = 0
    firstNumber = ""
    secondNumber = ""
    operator = ""
    query = ""
    temp = 0
    count = 0
})