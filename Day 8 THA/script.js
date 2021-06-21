const unchecked = ["130", "131", "149", "150", "151", "152", 
    "168", "169", "170", "171", "172", "173", "187", 
    "188", "190", "191", "193", "194", "207", "208", 
    "209", "210", "211", "212", "213", "214", "229", 
    "232", "248", "250", "251", "253", "267", "269", 
    "272", "274"]

const frame = document.querySelector(".frame")

for( i = 1; i<=400;u=i++){
    let box = document.createElement('div')
    box.setAttribute('class', 'box')
    box.setAttribute('id', i)
    box.addEventListener('click', () =>{
        box.classList.toggle('clicked')
    })
    frame.appendChild(box)
}

for(i in unchecked){
    document.getElementById(unchecked[i]).classList.toggle('clicked')
}