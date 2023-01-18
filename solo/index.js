const rollBtn = document.getElementById('rollBtn')
const restartBtn = document.getElementById('restartBtn')

// colors
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const yellow = document.getElementById('yellow')
const red = document.getElementById('red')
const white = document.getElementById('white')
const pink = document.getElementById('pink')

// 3 random color
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const color3 = document.querySelector('.color3')
const moneyCount = document.querySelector('.moneyCount')

// input bets
const betAmount = document.querySelector('.betAmount')
const inputBet = document.getElementById('inputBet')
const submitBet = document.getElementById('submitBet')

// prize and randomizer
let money = 500 
let cashWon = 0 
let totalBet = 0
let colors = ['Green', 'Yellow', 'Blue', 'Red', 'White', 'Pink']
let randomColors = []

submitBet.addEventListener('click', () => {
    betAmount.textContent = totalBet

    rollBtn.disabled = false
    submitBet.disabled = true
    disableChoices()
})


rollBtn.addEventListener('click', () => {
    let randomColor1 = colors[Math.floor(Math.random() * colors.length)]
    let randomColor2 = colors[Math.floor(Math.random() * colors.length)]
    let randomColor3 = colors[Math.floor(Math.random() * colors.length)]

    color1.style.backgroundColor = randomColor1
    color2.style.backgroundColor = randomColor2
    color3.style.backgroundColor = randomColor3
    
    rollBtn.disabled = true
    restartBtn.disabled = false
    addWinner(randomColor1)
    addWinner(randomColor2)
    addWinner(randomColor3)

    
    winnerColors()
    console.log(randomColors)
})

restartBtn.addEventListener('click', () => {
    randomColors = []
    cashWon = 0
    totalBet = 0
    inputBet.disabled = false
    submitBet.disabled = true
    rollBtn.disabled = true
    disableChoices()

    green.checked = false
    yellow.checked = false
    blue.checked = false
    red.checked = false
    white.checked = false
    pink.checked = false

    color1.style.backgroundColor = 'whitesmoke'
    color2.style.backgroundColor = 'whitesmoke'
    color3.style.backgroundColor = 'whitesmoke'

    betAmount.textContent = ''
    inputBet.value = ''
})

// push 3 rondom color on array
function addWinner(e) {
    randomColors.push(e)
}
 
// winning condition
function winnerColors() {
    if (green.checked) {
        randomColors.filter((x) => {
            if (x.includes('Green')) {
                cashWon = inputBet.value * 2
                money += cashWon
                moneyCount.textContent = `MONEY: ${money}`
            }
        })
    }
    if (yellow.checked) {       
        randomColors.filter((x) => {
            if (x.includes('Yellow')) {
                cashWon = inputBet.value * 2
                money += cashWon
                moneyCount.textContent = `MONEY: ${money}`
            }
        })
    }
    if (blue.checked) {       
        randomColors.filter((x) => {
            if (x.includes('Blue')) {
                cashWon = inputBet.value * 2
                money += cashWon
                moneyCount.textContent = `MONEY: ${money}`
            }
        })
    }
    if (red.checked) {       
        randomColors.filter((x) => {
            if (x.includes('Red')) {
                cashWon = inputBet.value * 2
                money += cashWon
                moneyCount.textContent = `MONEY: ${money}`
            }
        })
    }
    if (white.checked) {       
        randomColors.filter((x) => {
            if (x.includes('White')) {
                cashWon = inputBet.value * 2
                money += cashWon
                moneyCount.textContent = `MONEY: ${money}`
            }
        })
    }
    if (pink.checked) {       
        randomColors.filter((x) => {
            if (x.includes('Pink')) {
                cashWon = inputBet.value * 2
                money += cashWon
                moneyCount.textContent = `MONEY: ${money}`
            }
        })
    }
}


// Color choices condition
function chooseColor() {
    submitBet.disabled = false
    if (money <= 0 || inputBet.value > money) {
        moneyCount.textContent = `MONEY: ${money}`
        submitBet.disabled = true
        
    } else if (green.checked) {
        money -= parseInt(inputBet.value)
        totalBet += parseInt(inputBet.value)
        moneyCount.textContent = `MONEY: ${money}`
        betAmount.textContent = totalBet
    } else if (yellow.checked) {
        money -= parseInt(inputBet.value)
        totalBet += parseInt(inputBet.value)
        moneyCount.textContent = `MONEY: ${money}`
        betAmount.textContent = totalBet
    } else if (blue.checked) {
        money -= parseInt(inputBet.value)
        totalBet += parseInt(inputBet.value)
        moneyCount.textContent = `MONEY: ${money}`
        betAmount.textContent = totalBet
    } else if (red.checked) {
        money -= parseInt(inputBet.value)
        totalBet += parseInt(inputBet.value)
        moneyCount.textContent = `MONEY: ${money}`
        betAmount.textContent = totalBet
    } else if (white.checked) {
        money -= parseInt(inputBet.value)
        totalBet += parseInt(inputBet.value)
        moneyCount.textContent = `MONEY: ${money}`
        betAmount.textContent = totalBet
    } else if (pink.checked) {
        money -= parseInt(inputBet.value)
        totalBet += parseInt(inputBet.value)
        moneyCount.textContent = `MONEY: ${money}`
        betAmount.textContent = totalBet
    }

    if (green.checked) {
        green.disabled = true
        inputBet.disabled = true
    }
    if (yellow.checked) {
        yellow.disabled = true
        inputBet.disabled = true
    }
    if (blue.checked) {
        blue.disabled = true
        inputBet.disabled = true
    }
    if (red.checked) {
        red.disabled = true
        inputBet.disabled = true
    }
    if (white.checked) {
        white.disabled = true
        inputBet.disabled = true
    }
    if (pink.checked) {
        pink.disabled = true
        inputBet.disabled = true
    }
}

// Disable choices after choosing
function enableChoices() {
    green.disabled = false
    yellow.disabled = false
    blue.disabled = false
    red.disabled = false
    white.disabled = false
    pink.disabled = false
}

// Disable choices if the game is over
function disableChoices() {
    green.disabled = true
    yellow.disabled = true
    blue.disabled = true
    red.disabled = true
    white.disabled = true
    pink.disabled = true
}