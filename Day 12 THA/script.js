let contain= document.querySelector(".container");
let addtask= document.querySelector(".plus");
let input_text=document.querySelector('.input_text')
addtask.addEventListener('click',function(){
    let newP=document.createElement('p');
    newP.classList.add('p_style');
    newP.innerHTML=input_text.value;
    contain.appendChild(newP);
    input_text.value="";
    newP.addEventListener('click',()=>{
        newP.style.textDecoration="line-through";
    })
    newP.addEventListener('dblclick',()=>{
        contain.removeChild(newP);
    })
})