let users = [
    ["A", "B", "admin@", "admin"],
    ["Anthony", "Bonis", "anthony.bonis@gmail.com", "anthony.bonis"],
    ["Romain", "Cardot", "romain.cardot@gmail.com", "romain.cardot"],
    ["Quentin", "Colombier", "quentin.colombier@gmail.com", "quentin.colombier"],
    ["Julien", "Combeau", "julien.combier@gmail.com", "julien.combier"],
    ["Jérome", "Geoffroy", "jerome.geoffroy@gmail.com", "jerome.geoffroy"],
    ["Reda", "Ladib", "reda.ladib@gmail.com", "reda.ladib"]
]

let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
const btnLogin = document.getElementById("btnLogIn")


function checkLogs() {

    for (let i = 0; i < users.length; i++) {
        userFirstName = users[i][0]
        userLastName = users[i][1]
        userMail = users[i][2]
        userPassword = users[i][3]
    
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

const formLogs = document.getElementById("formLogs")

formLogs.onsubmit = (e) => {
    checkLogs()
    e.preventDefault();
}
