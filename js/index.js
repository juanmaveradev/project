let system = new System();

listProducts();
listProductsTable();
hideToAdmin();
hideToUser();
showByClass("privateAdmin","none")


document.querySelector("#btnAddProd").addEventListener("click", addProduct);
document.querySelector("#btnLogin").addEventListener("click", login);
document.querySelector("#btnLogOut").addEventListener("click", logout);

let buttons = document.querySelectorAll(".btnSection");
for(let btn of buttons){
  btn.addEventListener("click", showSection); 
}

function hideToUser() {
  document.querySelector(".containerHeaderProducts").style.display = "none"
  document.querySelector(".sectionRegister").style.display = "none"
}

function hideToAdmin() {
  document.querySelector(".containerProducts").style.display = "none"
}


function showSection(){    
  let classSec = this.getAttribute("data-secRef"); 
  console.log(classSec)
  hideToAdmin();
  hideToUser();
  document.querySelector(`.${classSec}`).style.display = "block"
}



function showByClass(sctClass,display){
  let sections = document.querySelectorAll(`.${sctClass}`)
  for(let sect of sections){
    sect.style.display = display;
  }
}






function addProduct() {
  let id = system.products.length + 1;
  let title = document.querySelector("#prodName").value;
  let description = document.querySelector("#prodDescription").value;
  let imgUrl = document.querySelector("#prodURL").value;
  let price = Number(document.querySelector("#prodPrice").value);
  let stock = Number(document.querySelector("#prodStock").value);
  let offer = false;
  let state = true;
  let validation = true;

  let msgError = document.querySelector(".errorMsg");
  msgError.innerHTML = "";

  if (title === "") {
    msgError.innerHTML += "<p>El título no debe estar vacío<br></p>";
    validation = false;
  }
  if (description === "") {
    msgError.innerHTML += "<p>La descripción no debe estar vacía<br></p>";
    validation = false;
  }
  if (imgUrl === "") {
    msgError.innerHTML += "<p>La URL no debe estar vacía<br></p>";
    validation = false;
  }
  if (price === "") {
    msgError.innerHTML += "<p>El precio no debe estar vacío<br></p>";
    validation = false;
  } else if (isNaN(price)) {
    msgError.innerHTML += "<p>El precio debe ser un número<br></p>";
    validation = false;
  } else if (Number(price) < 1) {
    msgError.innerHTML += "<p>El precio debe ser mayor a 0<br></p>";
    validation = false;
  }
  if (stock === "") {
    msgError.innerHTML += "<p>El stock no debe estar vacío<br></p>";
    validation = false;
  } else if (isNaN(stock)) {
    msgError.innerHTML += "<p>El stock debe ser un número<br></p>";
    validation = false;
  } else if (Number(stock) < 1) {
    msgError.innerHTML += "<p>El stock debe ser mayor a 0<br></p>";
    validation = false;
  }

  if (validation) {
    system.addProduct(
      id,
      title,
      description,
      imgUrl,
      price,
      stock,
      offer,
      state
    );
  }

  console.log(system.products);
  console.log(validation);

  listProducts();
  listProductsTable();
}

function listProducts() {
  let containerProd = document.querySelector(".containerProducts");
  containerProd.innerHTML = "";

  for (let i = 0; i < system.products.length; i++) {
    if (system.products[i].state == true) {
      containerProd.innerHTML += `

      <div class="cardProduct">
      <h2>${system.products[i].name}</h2>
            <div>
              <div class="containerImgProd">
                <div> 
                  <img src="${system.products[i].imgUrl}"
                  alt"${system.products[i].name}">            
                </div>
              </div>
            </div>
            <div>
              <p>${system.products[i].description}</p>
              <div id="containerPrice">
                <span>${system.products[i].price} USD</span>
                <div>
                  <button>-</button>
                  <span><b>0</b></span>
                  <button>+</button>
                </div>
                ${system.products[i].offerStateMsg()}
              </div>
              <input type="button" value="Comprar" class="btnBuy inputBtnStyle" />
            </div>
          </div>
     
      `;
    }
  }
}

function listProductsTable() {
  let listProductsTableEdit = document.querySelector(
    "#containerProductsTableEdit"
  );
  listProductsTableEdit.innerHTML = "";

  for (let i = 0; i < system.products.length; i++) {
    listProductsTableEdit.innerHTML += `
      <tr>
                <td>${system.products[i].id}</td>
                <td>${system.products[i].name}</td>
                <td>${system.products[i].stock}</td>
                <td><input type="checkbox" ${system.products[
                  i
                ].offerState()}/></td>
                <td><b>${system.products[i].prodState()}</td></b>
                <td><input type="button"value="${system.products[
                  i
                ].prodStateBtn()}" class="btnState"  data-index="${i}"></td>
      </tr>
      `;

    document.querySelectorAll(".btnState").forEach(function (button) {
      button.addEventListener("click", function () {
        changeProdState(button.dataset.index);
      });
    });
  }
}

function changeProdState(i) {
  system.products[i].state = !system.products[i].state;

  let btnState = document.querySelectorAll(".btnState")[i];
  if (system.products[i].state) {
    btnState.value = "Pausar";
  } else {
    btnState.value = "Activar";
  }

  listProductsTable();
  listProducts();
  console.log(system.products[i]);
}

function login() {
  let user = document.querySelector("#userNameLogin").value.toLowerCase();
  let password = document.querySelector("#passwordLogin").value;

  let userExist = system.login(user,password)

    if (userExist && system.userLogged != null){
      document.querySelector(".sectionLogin").style.display = "none";

      if(system.userLogged.type === 1){
        showByClass("privateAdmin", "flex")
        document.querySelector("#userName").innerHTML = system.userLogged.username;
      }
      if(system.userLogged.type === 2){
        
        document.querySelector("#userName").innerHTML = system.userLogged.name;
      }
      
      
    }

  
}

function logout() {
  showByClass("privateAdmin","none");
  showByClass("sectionLogin","block");
}


