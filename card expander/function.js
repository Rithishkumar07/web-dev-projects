const pan=document.querySelectorAll('.panel')

pan.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeAciveClasses()
        panel.classList.add('active')
    })
})

function removeAciveClasses(){
    pan.forEach((panel)=>{
        panel.classList.remove('active')
    })
}
