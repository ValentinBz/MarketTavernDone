const nameV = document.querySelector("#nameC").value;
const emailV = document.querySelector("#emailC").value;
const dropV = document.querySelector("#dropC").value;
const phoneV = document.querySelector("#phoneC").value;
const messageV = document.querySelector("#messageC").value;
const button = document.querySelector("#submit");


function user(nom, mail, raison, numero, message) {
    this.nom = nom;
    this.mail = mail;
    this.raison = raison;
    this.numero = numero;
    this.message = message;
}

button.addEventListener("click", function() {
     if (phoneV.length != 10) {
          console.log("error");
    }
     else {
     const user1 = new user(nameV, emailV, dropV, phoneV, messageV);
     console.log(user1);
 }
})
