const startBtn = document.getElementById('startBtn')
const resetBtn = document.getElementById('resetBtn')

// 3 Random Color for winner
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const color3 = document.querySelector('.color3')

let colors = ['Green', 'Yellow', 'Blue', 'Red', 'White', 'Pink']

startBtn.addEventListener('click', () => {
    color1.style.backgroundColor = "#141728"
    color2.style.backgroundColor = "#141728"
    color3.style.backgroundColor = "#141728"
    setTimeout(function() {
        let randomColor1 = colors[Math.floor(Math.random() * colors.length)]
        let randomColor2 = colors[Math.floor(Math.random() * colors.length)]
        let randomColor3 = colors[Math.floor(Math.random() * colors.length)]

        color1.style.backgroundColor = randomColor1
        color2.style.backgroundColor = randomColor2
        color3.style.backgroundColor = randomColor3
    }, 1000);
    
})


