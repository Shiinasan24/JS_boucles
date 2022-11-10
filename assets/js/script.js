let btnShow = document.querySelectorAll(".btnShow")

let modals = document.querySelectorAll(".modal")

const modalInOut = document.querySelector(".modalInOut")


for (let i = 0; i < btnShow.length ; i++) { 
    btnShow[i].addEventListener('click', () => { 
        //si il ne contiens pas alors ajoute display et stop 
        if(!modals[i].classList.contains('displayNone')){ 
            modals[i].classList.add('displayNone') 
            return 
        } 
        //ferme tout 
        for (let j = 0; j < btnShow.length ; j++) { 
            modals[j].classList.add('displayNone') 
        } 
        //toggle celui sur lequel j'ai cliqué 
        modals[i].classList.toggle('displayNone'); 
    }); 
}