let users = [
    ["A", "B", "admin@", "admin"],
    ["Anthony", "Bonis", "anthony.bonis@gmail.com", "anthony.bonis"],
    ["Romain", "Cardot", "romain.cardot@gmail.com", "romain.cardot"],
    ["Quentin", "Colombier", "quentin.colombier@gmail.com", "quentin.colombier"],
    ["Julien", "Combeau", "julien.combier@gmail.com", "julien.combier"],
    ["Jérome", "Geoffroy", "jerome.geoffroy@gmail.com", "jerome.geoffroy"],
    ["Reda", "Ladib", "reda.ladib@gmail.com", "reda.ladib"]
]

// Bouton "montrer les utilisateurs" déclenche showUsers() et un-hide le bouton #js-btnShowForm
const btnUsers = document.querySelector(".btnUsers");
btnUsers.addEventListener("click", showUsers)


// Bouton btnShowForm
const js_btnShowForm = document.querySelector("#js-btnShowForm")

// Le form pour ajouter un utilisateur et le bouton
const js_formNewUser = document.querySelector("#formNewUser")

// Bouton btnAddUser 
const js_addUser = document.querySelector("#js-addUser")

const js_btnAddUser = document.querySelector("#js-btnAddUser")

js_btnShowForm.addEventListener("click", () => { js_formNewUser.classList.remove("hide") })

const newFirstName = document.querySelector("#newFirstName")
const newLastName = document.querySelector("#newLastName")
const newMail = document.querySelector("#newMail")


function showUsers() {

    for (let i = 0; i < users.length; i++) {
        let userFirstName = users[i][0]
        let userLastName = users[i][1]
        let userMail = users[i][2]

        // creation des balises <p> dans lesquels s'ajouteront {userFirstName [i]}
        let showFirstName = document.createElement("p")
        showFirstName.textContent = userFirstName

        // . . . et ajout dans la div html préexistante #js-userFirstName
        const js_userFirstName = document.querySelector("#js-userFirstName")
        js_userFirstName.appendChild(showFirstName)

        // creation des balises <p> dans lesquels s'ajouteront {userLastName [i]}
        let showLastName = document.createElement("p")
        showLastName.textContent = userLastName

        // . . . et ajout dans la div html préexistante #js-userLastName
        const js_userLastName = document.querySelector("#js-userLastName")
        js_userLastName.appendChild(showLastName)

        // creation des balises <p> dans lesquels s'ajouteront {userMail [i]}
        let showMail = document.createElement("p")
        showMail.textContent = userMail

        // . . . et ajout dans la div html préexistante #js-userMail
        const js_userMail = document.querySelector("#js-userMail")
        js_userMail.appendChild(showMail)
    }

    // Retrait de hide sur le bouton "ajouter un utilisateur" en fin de boucle
    js_addUser.classList.remove("hide")
}

js_addUser.addEventListener("click", addAUser)

function addAUser() {
    
    let inputs = document.querySelectorAll("input")

    console.log(inputs)

    let newUser = []
    let newValue = []

    for (let i = 0; i < inputs.length; i++) {

        if (i === 0) {
            newValue = prompt("First name :")
            newUser.push(newValue)
        } else if (i === 1) {
            newValue = prompt("Last name :")
            newUser.push(newValue)
        } else {
            newValue = prompt("Email :")
            newUser.push(newValue)
        }
    }

    users.push(newUser)

    console.log(users)
}