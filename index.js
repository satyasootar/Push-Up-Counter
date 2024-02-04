let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let resetEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    resetEl.textContent = 0
    count = 0 
}

function reset() {
    saveEl.textContent = 'Previous entries:'
}


