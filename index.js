const chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const charsLength = chars.length
const numsLength = nums.length
const symbolsLength = symbols.length

const pass_btns = document.querySelectorAll(".pass-btn")

pass_btns.forEach((pass_btn) => {
    pass_btn.addEventListener("click", function() {
        navigator.clipboard.writeText(this.textContent)
        pass_btn.classList.add("active");
        setTimeout(function() {
            pass_btn.classList.remove("active");
        }, 1000)
    })
})

document.getElementById("generate-pass-btn").addEventListener("click", function() {
    pass_btns.forEach((pass_btn) => {
        pass_btn.textContent = generatePass()
    })
})

function generatePass() {
    let pass = ""
    for(let i = 0; i < 3; i++) {
        pass += getLowCChar()
        pass += getNum()
        pass += getLowCChar()
        pass += getUpCChar()
        pass += getSymbol()
    }
    return pass
}

function getLowCChar() {
    return chars[Math.floor(Math.random() * charsLength)]
}

function getUpCChar() {
    return chars[Math.floor(Math.random() * charsLength)].toUpperCase()
}

function getNum() {
    return nums[Math.floor(Math.random() * numsLength)]
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbolsLength)]
}