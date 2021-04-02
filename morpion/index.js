let allButton = document.querySelectorAll("button")

allButton.forEach(element=>{
   element.addEventListener('click',affiche)
})


let i= 0;
function turn(){
i++;
return i%2===0 ? 'O': "X";
}


function affiche(){
    if(!this.innerHTML) this.innerHTML= turn();
}