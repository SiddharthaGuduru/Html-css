const form =document.getElementById("form")
const uname =document.getElementById("uname")
const mail =document.getElementById("mail")
const pwd =document.getElementById("pwd")
const cpwd =document.getElementById("cpwd")
const tc=document.getElementById("tc")
var isValidName= false;
var isValidEmail=false;
var isValidPassword=false;
var isValidCpassword=false;
var isTCChecked=false;
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validate()
})
function validate(){
    let nameValue=uname.value.trim()
    let emailValue=mail.value.trim()
    let passwordValue=pwd.value.trim()
    let cpasswordValue=cpwd.value.trim()
    isValidName= false;
    isValidEmail=false;
    isValidPassword=false;
    isValidCpassword=false;
    isTCChecked=false;
    if(nameValue===''){
        setError(uname,'user name cannot be empty')
    }
    else if(nameValue.length<3){
        setError(uname,'user name should be minimum 3 character')
    }
    else{
        setSuccess(uname)
         isValidName= true;
    }


    if(emailValue===''){
        setError(mail,'Email cannot be empty')
    }
    else if(!emailcheck(emailValue)){
        setError(mail,'Emter valid Email Id')
    }
    else{
        setSuccess(mail)
        isValidEmail=true;
    }


    if(passwordValue===''){
        setError(pwd,'password cannot be empty')
    }
    else if(passwordValue.length<8){
        setError(pwd,'password should be minimum 8 character')
    }
    else{
        setSuccess(pwd)
        isValidPassword=true;
    }
    
    if(cpasswordValue===''){
        setError(cpwd,'pasword cannot be empty')
    }
    else if(cpasswordValue!== passwordValue){
        setError(cpwd,'passwords not matched')
    }
    else{
        setSuccess(cpwd)
        isValidCpassword=true;
    }


    if(!tc.checked){
        setError(tc,'click on agree')
    }
    else{
        setSuccess(tc)
        isTCChecked=true;
    }

    if( isValidName&& isValidEmail && isValidPassword
        && isValidCpassword &&isTCChecked){
            form.submit()
        }

function setError(input,message){
    let parent =input.parentElement;
    let small= parent.querySelector('small')
    small.innerText= message
    parent.classList.add('error')
    parent.classList.remove('success')
}
function setSuccess(input){
    let parent =input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')
}
function emailcheck(input){
    let emailReg=/^[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$/;
    let valid= emailReg.test(input)
    return valid
}

}