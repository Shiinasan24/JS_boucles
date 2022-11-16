const inputMail = document.getElementById("inputMail")
const inputPassword = document.getElementById("inputPassword")

const button = document.getElementById("btn")

const regexMail =  new RegExp(/^([a-z\d.-]+)@([a-z\d-]+).([a-z]{2,8})(.[a-z]{2,8})?$/)
const regexPsd = new RegExp(/^[#\w@_-]{8,20}$/)


button.addEventListener("click", auth)

// function auth() {
//     if (inputMail.value.match(regexMail) && inputPassword.value.match(regexPsd)) {
//         if (!inputMail.value.match(regexMail)) {
//             alert("email not ok")
//         } else if (!inputPassword.value.match(regexPsd)) {
//             alert("password not ok")
//         } else if (inputMail.value.match(regexMail)) {
//             alert("email ok")
//         } else {
//             alert ("password ok")
//         }
//     }    
// }
