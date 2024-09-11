// criando elementos com js :D
// pega a lista



function addGuest(){
    
    const guests = document.querySelector("ul")

    // variavel para criar a new element
    const newGuest = document.createElement("li")
    newGuest.classList.add('guest');
    const newName = document.createElement("span")
    newName.textContent = "Diego" // add the name

    const guestName = document.createElement("span")
    guestName.textContent = "Oliveira"

    // newGuest.append(newName, guestName) // add após o último filho
    //newGuest.prepend(guestName) // add antes do primeiro filho

    // é mais simples 
    newGuest.appendChild(guestName);


    // console.log(newGuest);

    guests.append(newGuest)
}
