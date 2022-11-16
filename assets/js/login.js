let users = [
    ["A", "B", "admin@", "admin"],
    ["Anthony", "Bonis", "anthony.bonis@gmail.com", "anthony.bonis"],
    ["Romain", "Cardot", "romain.cardot@gmail.com", "romain.cardot"],
    ["Quentin", "Colombier", "quentin.colombier@gmail.com", "quentin.colombier"],
    ["Julien", "Combeau", "julien.combier@gmail.com", "julien.combier"],
    ["Jérome", "Geoffroy", "jerome.geoffroy@gmail.com", "jerome.geoffroy"],
    ["Reda", "Ladib", "reda.ladib@gmail.com", "reda.ladib"]
]

const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const btnLogin = document.getElementById("btnLogIn")

btnLogin.addEventListener("click", checkLogs)

// Regex : 
const regexMail =  new RegExp(/^([a-z\d.-]+)@([a-z\d-]+).([a-z]{2,8})(.[a-z]{2,8})?$/)
const regexPsd = new RegExp(/^[#\w@_-]{8,20}$/)


function checkLogs() {

    for (let i = 0; i < users.length; i++) {
        // let userFirstName = users[i][0]
        // let userLastName = users[i][1]
        let userMail = users[i][2]
        let userPassword = users[i][3]
        
        console.log(userMail)
    
        if (inputEmail.value == userMail && inputPassword.value == userPassword) {
            document.location.href="index.html"
            return

        } else if (inputEmail.value !== userMail) {
            console.log("Email incorrect")
            return

        } else {
            console.log("Mot de passe incorrect")
            return

        }
    }
}

// const formLogs = document.getElementById("formLogs")

// formLogs.onsubmit = (e) => {
//     checkLogs()
//     e.preventDefault();
// }


