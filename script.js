

let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment(){
   
        count = count + 1
        countEl.textContent = count
    
    
    
}

function restar(){
    if (count > 0) {
        count = count - 1
        countEl.textContent = count
    }
    else{
        alert('No puede haber puntuacion en negativo')
    }
}




let countEl1 = document.getElementById("count-el1")

console.log(countEl1)

let count1 = 0

function increment1(){
    
    count1 = count1 + 1
    countEl1.textContent = count1
 
}

function restar1(){
    if (count1 > 0) {
        count1 = count1 - 1
        countEl1.textContent = count1
    }
    else{
        alert('No puede haber puntuacion en negativo')
    }
}
