var showPassword = true
var showPasswordConf = true
    
var iconShow = document.getElementById("showPassword")

var iconHide = document.getElementById("hidePassword")

// confirmation password

var iconShowConf = document.getElementById("showPasswordConf")

var iconHideConf = document.getElementById("hidePasswordConf")

// password input 

var passwordInput = document.getElementById("password")

// Password confirmation input

var passwordInputConf = document.getElementById("password_confirmation")


// password function...

iconShow.addEventListener("click", function () {
    showPassword = !showPassword;
    if (!showPassword) {
        iconShow.style.display = "none" 
        iconHide.style.display = "block" 
        passwordInput.type = "text"
        // alert(passwordInput.type)
    } 
})

iconHide.addEventListener("click", function () {
    showPassword = !showPassword;
    if (showPassword) {
        iconHide.style.display = "none" 
        iconShow.style.display = "block"
        passwordInput.type = "password"
    } 
})










// password confirmation function...

iconShowConf.addEventListener("click", function () {
    showPasswordConf = !showPasswordConf;
    if (!showPasswordConf) {
        iconShowConf.style.display = "none" 
        iconHideConf.style.display = "block" 
        passwordInputConf.type = "text"
    } 
})

iconHideConf.addEventListener("click", function () {
    showPasswordConf = !showPasswordConf;
    if (showPasswordConf) {
        iconHideConf.style.display = "none" 
        iconShowConf.style.display = "block"
        passwordInputConf.type = "password"
    } 
})