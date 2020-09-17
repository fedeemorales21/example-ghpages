window.addEventListener('DOMContentLoaded', () =>{
    checkMode()
    changeMode()
})

const changeMode = () =>{
    const btn = document.querySelector('#btn')
    btn.addEventListener('click', e =>{
        e.stopImmediatePropagation()
        const b = document.body
        b.classList.toggle("darktheme")
        if (b.classList.contains("darktheme")) {
            localStorage.setItem('enableDT',true)
        }else{
            localStorage.setItem('enableDT',false)
        }
            
    })
}

const checkMode = () =>{
    if (localStorage.getItem('enableDT') == 'true') {
        const b = document.body
        b.classList.add("darktheme")
    }
}