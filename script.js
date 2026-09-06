// Input-name  
var nameInput = document.getElementById("name")
var nameError = document.getElementById("nameError")

nameInput.addEventListener("input", function(){
    if(nameInput.value == ""){
        nameError.style.display = "block"
    }
    else{
        nameError.style.display = "none"
    }
    checkform()
})

// input-email
var emailInput = document.getElementById("email")
var emailError = document.getElementById("emailError")
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
emailInput.addEventListener("input", function(){
    if(emailInput.value == ""){
        emailError.style.display = "block"
    }
    else{
        emailError.style.display= "none"
    }

    if(!emailPattern.test(emailInput.value)){
        emailError.style.display = "block"
    }

    else{
        emailError.style.display = "none"
    }

    if(emailInput.value == ""){
        emailError.style.display = "none"
    }
    checkform()
})

// input-password 
var passwordInput = document.getElementById("password")
var passwordError = document.getElementById("passwordError")

passwordInput.addEventListener("input",function(){
    if(passwordInput.value.length < 6){
        passwordError.style.display = "block"
    }
    else{
        passwordError.style.display = "none"
    }

    if(passwordInput.value == ""){
        passwordError.style.display = "none"
    }
    checkform()
})

// Bio-input 
var bioInput = document.getElementById("bio")
var charcount = document.getElementById("charCount")

bioInput.addEventListener("input", function(){
    charcount.textContent = bioInput.value.length
})

// submit button 
var submitButton = document.getElementById("submitbtn")
function checkform(){
    if(nameInput.value != "" && emailPattern.test(emailInput.value) && passwordInput.value.length >=6){
        submitButton.disabled = false;
    }
    else{
        submitButton.disabled = true;
        submitButton.style.cursor = "pointer"
    }

}
submitButton.addEventListener("click",function(){
    alert("Submitted!")
})
