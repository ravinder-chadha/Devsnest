// const seat=91;
// const unchecked = []
// for(j=0;j<=3;j++){
//     unchecked.push(seat.toString());
//     seat
// }
// const seat =85;
// for(j=10;j<20;j++){
//     unchecked[j]=seat;
//     if(seat%5==0){
//         seat++;
//     }
//     else{    
//         seat=seat-10;
//     }
// }
Array.from(Array(10).keys())
function range(start, end) {
      return Array(end-start + 1).fill().map((_,idx) => start + idx)
    }
var partialunchecked = range(91, 100);
// console.log(unchecked);
var op=range(41,50);
var unchecked=partialunchecked.concat(op);
for(var x=85;x>=15;x=x-10){
    if(x!=45){
    op=range(x,x+1);
    unchecked=unchecked.concat(op);
    }
    console.log(unchecked);
}
// var op=range(41,50);
// unchecked=unchecked.concat(op);
// console.log(unchecked);

const exitdoor = ['92','99']

const frame = document.querySelector(".frame")
var count =0;
for( i = 1; i<=100;u=i++){
    let box = document.createElement('div')
    box.setAttribute('class', 'box')
    box.setAttribute('id', i)
    box.addEventListener('click', () =>{
        box.classList.toggle('clicked')
        if (box.className=='box clicked'){
            count++;
        }
        else{
            count--;
        }
        document.getElementById("output").innerHTML = 66-count;
    })
    frame.appendChild(box)
}
for(i in unchecked){
    document.getElementById(unchecked[i]).classList.toggle('nonClickable')
}

for(i in exitdoor){
    document.getElementById(exitdoor[i]).classList.toggle('exitdoor')
}