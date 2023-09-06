const downBtn  = document.getElementById("down-arrow")
const leftEl = document.getElementById("left")
const upBtn = document.getElementById("up-arrow")
const rightEl = document.getElementById("right")

let leftY = 100
downBtn.addEventListener("click", function() {
    if (leftY === 0) {
        leftY = 75
    } else {
        leftY -= 25
    }
    console.log(leftY)
    leftEl.style.transform = `translate(0, ${leftY}%)`
    rightEl.style.transform = `translate(0, -${leftY}%)`
})

let rightY = 0
upBtn.addEventListener("click", function() {
    if (rightY === 75) {
        rightY = 0
    } else {
        rightY += 25
    }
    console.log(rightY)
    leftEl.style.transform = `translate(0, ${rightY}%)`
    rightEl.style.transform = `translate(0, -${rightY}%)`
})