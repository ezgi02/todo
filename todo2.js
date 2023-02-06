const inputDiv=document.querySelector('.inputDiv');
const input=document.getElementById('input');
const button=document.getElementById('button');
const contentDiv=document.querySelector('.contentDiv')

button.addEventListener('click',go)
var calculate=0;
function go(){
    if(input.value!=""){
        calculate++;
        var liste=document.createElement('p');
        var deleteButton=document.createElement('div')
        deleteButton.classList.add('deleteButton')
        deleteButton.innerText='sil'
        liste.innerText=calculate +')'+ input.value;
        contentDiv.appendChild(liste)
        liste.appendChild(deleteButton)
        input.value="";

        deleteButton.addEventListener('click',function(){
            calculate--;
            contentDiv.remove(liste);
        })
    }
    
}