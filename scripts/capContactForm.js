function capContacForm(){
    let name=document.getElementById('name')
    let email=document.getElementById('email')
    let message=document.getElementById('message')
    let objForm={
        [name.name]:name.value,
        [email.email]:email.value,
        [message.message]:message.value
    }
    console.log(objForm)
}

const handleForm=(event)=>{
    event.preventDefault()
    capContacForm()
}

let btnSubmitForm=document.getElementById('btnSubmit')
btnSubmitForm.addEventListener('click',handleForm)