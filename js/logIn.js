let system = new System;


document.querySelector("#btnLogin").addEventListener("click", logIn);

function logIn() {

    let userName = document.querySelector("#userNameLogin").value;
    let password = document.querySelector("#passwordLogin").value;
  
    for (let i = 0; i < system.users.length; i++) {
  
      if (
        userName === system.users[i].username &&
        password === system.users[i].password
      ) {
        if (system.users[i].type === 1) {
            window.location.href = "adminPanel.html";
        } else if(system.users[i].type === 2){
            window.location.href = "productsMain.html";
        } else if (userName === '') {

        }
        else if (password === '') {
            
        } else {
            
        }
      } 
    }
  

  
  }