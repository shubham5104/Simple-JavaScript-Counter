// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// 
let a=10
const b=20

a=20
console.log("a  "+a)
console.log("b  "+b)

let countEl = document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let count=0

function increment(){
    count=count+1
    countEl.textContent=count
    console.log("button clicked "+count)
}
function decrese(){
    if(count>0){
    count=count-1
    countEl.textContent=count
    }
}
function save(){
    let savestr= count+" - "
    saveEl.textContent += savestr
    console.log(count)
    countEl.textContent=0
    count=0
}



