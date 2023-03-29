const form =document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const passeword = document.querySelector('#passeword');
const password2 = document.querySelector('#password2 ');
//evenement
form.addEventListener('click', e=>{
     e.preventDefault();

     form_verify();

})
//funstions
function form_verify(){
    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const pwdValue = password.value.trim();
    const pwd2Value = password2.value.trim();


    if(userValue ===""){
        let message= 'username ne peut pas etre vide';
        setError(username,message);
    }else if(!userValue.match(/^[a-z]/)){
        let message="Username doit commencer par une lettre";
        setError(username,message)
    } else{
        let letterNum = userValue.lenggth;
        if(letterNum < 3){
            let message="Username doit avoir au moins 3caractères";
            setError(username,message)
        }else{
            setSuccess(username)
        }
    }
}
function setError(elem,message){
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message
    formControl.className = "form-control error";

}