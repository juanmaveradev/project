let system = new System();




listProducts();
listOfferProducts();
listProductsTable();
showByClass("privateAdmin", "none")
showByClass("privateUser", "none")
hideToAdmin();
hideToUser();



document.querySelector("#btnAddProd").addEventListener("click", addProduct);
document.querySelector("#btnLogin").addEventListener("click", login);
document.querySelector("#btnLogOut").addEventListener("click", logout);

let buttons = document.querySelectorAll(".btnSection");
for (let btn of buttons) {
  btn.addEventListener("click", showSection);
}

function hideToUser() {
  document.querySelector(".sectionCreateProduct").style.display = "none"
  document.querySelector(".sectionRegister").style.display = "none"
  document.querySelector(".sectionProductsTableEdit").style.display = "none"
  document.querySelector(".sectionGains").style.display = "none"

}

function hideToAdmin() {
  document.querySelector(".containerProducts").style.display = "none"

}




function showSection() {
  let classSec = this.getAttribute("data-secRef");

  hideToAdmin();
  hideToUser();

  let sectionToShow = document.querySelector(`.${classSec}`);

  sectionToShow.style.display = "block";


}


function showByClass(sctClass, display) {
  let sections = document.querySelectorAll(`.${sctClass}`)
  for (let sect of sections) {
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
    Swal.fire({
      icon: 'success',
      showConfirmButton: false,
      timer: 1500 
    });
  }

  listProducts();
  listProductsTable();
}



function listProducts() {
  let containerProd = document.querySelector(".containerProducts");
  containerProd.innerHTML = "";

  for (let i = 0; i < system.products.length; i++) {
    if (system.products[i].state == true) {
      containerProd.innerHTML += `
        <div class="cardProduct" data-product-id="${system.products[i].id}">
          <h2>${system.products[i].name}</h2>
          <div>
            <div class="containerImgProd">
              <div> 
                <img src="${system.products[i].imgUrl}" alt="${system.products[i].name}">            
              </div>
            </div>
          </div>
          <div>
            <p>${system.products[i].description}</p>
            <div id="containerPrice">
              <span>${system.products[i].price} USD</span>
              <div>
                <button class="decrement">-</button>
                <span class="counter"><b>0</b></span>
                <button class="increment">+</button>
              </div>
              ${system.products[i].offerStateMsg()}
            </div>
            <input type="button" value="Comprar" class="btnBuy inputBtnStyle" />
          </div>
        </div>
      `;
    }
  }
  buyCounter();

  document.querySelectorAll(".btnBuy").forEach(button => {
    button.addEventListener("click", function() {
      const productCard = button.closest(".cardProduct");
      const productId = productCard.dataset.productId;
      const amount = parseInt(productCard.querySelector(".counter b").textContent);
      console.log("ID del producto a comprar:", productId);

      system.buyProduct(productId, amount);
      listProducts(); 
    });
  });
}


function listOfferProducts() {
  let containerProd = document.querySelector(".containerOfferProducts");
  containerProd.innerHTML = "";

  for (let i = 0; i < system.products.length; i++) {
    if (system.products[i].state == true && system.products[i].offer == true) {
      containerProd.innerHTML += `
        <div class="cardProduct">
          <h2>${system.products[i].name}</h2>
          <div>
            <div class="containerImgProd">
              <div> 
                <img src="${system.products[i].imgUrl}" alt="${system.products[i].name}">            
              </div>
            </div>
          </div>
          <div>
            <p>${system.products[i].description}</p>
            <div id="containerPrice">
              <span>${system.products[i].price} USD</span>
              <div>
                <button class="decrement">-</button>
                <span class="counter"><b>0</b></span>
                <button class="increment">+</button>
              </div>
              ${system.products[i].offerStateMsg()}
            </div>
            <input type="button" value="Comprar" class="btnBuy inputBtnStyle" data-idProd =${system.products[i].id}/>
          </div>
        </div>
      `;
    }
  }
  buyCounter();
}

function buyCounter() {
  let decrementButtons = document.querySelectorAll('.decrement');
  let incrementButtons = document.querySelectorAll('.increment');
  let counters = document.querySelectorAll('.counter b');

  decrementButtons.forEach((button, i) => {
    button.onclick = () => {
      let counterProds = parseInt(counters[i].textContent);
      if (counterProds > 0) {
        counterProds--;
        counters[i].textContent = counterProds;
      }
    };
  });

  incrementButtons.forEach((button, i) => {
    button.onclick = () => {
      let counterProds = parseInt(counters[i].textContent);
      counterProds++;
      counters[i].textContent = counterProds;
    };
  });
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
                <td><b class="${system.products[i].offerState()}">${system.products[i].offerState()}</td></b>
                <td><input type="button" value="${system.products[i].offerStateBtn()}"  class="btnOffer inputBtnStyle"  data-index="${i}"/></td>
                <td><b class="${system.products[i].prodState()}">${system.products[i].prodState()}</td></b>
                <td><input type="button"value="${system.products[i].prodStateBtn()}" class="btnState inputBtnStyle"  data-index="${i}"></td>
      </tr>
      `;

      document.querySelectorAll(".btnOffer").forEach(function (button) {
        button.addEventListener("click", function () {
          changeProdOffer(button.dataset.index);
        });
      });

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

  listProducts();
  listProductsTable();
  listOfferProducts();

  console.log(system.products[i]);
}

function changeProdOffer(i) {
  system.products[i].offer = !system.products[i].offer;

  let btnOffer = document.querySelectorAll(".btnOffer")[i];
  if (system.products[i].offer) {
    btnOffer.value = "Cambiar";
  } else {
    btnOffer.value = "Cambiar";
  }

  listProducts();
  listProductsTable();
  listOfferProducts();

  console.log(system.products[i]);
}



function sellProd(id) {
  let prodIndex = system.products.findIndex(prod => prod.id == id);
  let prod = system.products[prodIndex];
  if (prod) {
    let quantity = document.querySelector(`#counter${id}`).textContent;
    quantity = parseInt(quantity);
    if (quantity > 0 && quantity <= prod.stock) {
      system.sellProduct(id, quantity);
      listProducts();
      listOfferProducts();
      listProductsTable();
      alert("COMPRA")
    } else {
      alert("Cantidad inválida o insuficiente en stock.");
    }
  }
}

document.querySelectorAll(".btnBuy").forEach(function (button) {
  button.addEventListener("click", function () {
    let prodId = parseInt(button.dataset.idProd);
    sellProd(prodId);
  });
});




function login() {

  let user = document.querySelector("#userNameLogin").value.toLowerCase();
  let password = document.querySelector("#passwordLogin").value;

  let userExist = system.login(user, password)

  if (userExist && system.userLogged != null) {
    document.querySelector(".sectionLogin").style.display = "none";
    document.querySelector("#userNameLogin").value = "";

    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Sesion iniciada correctamente",
      width: 400
    });

    if (system.userLogged.type === 1) {
      showByClass("privateAdmin", "block")
      document.querySelector("#userName").innerHTML = system.userLogged.username;
    }
    if (system.userLogged.type === 2) {
      showByClass("privateUser", "flex")
      document.querySelector("#userName").innerHTML = system.userLogged.name;
    }


  }
  document.querySelector("#passwordLogin").value = "";
  listProducts();
  listProductsTable();
  listOfferProducts();
}







function logout() {
  showByClass("privateAdmin", "none");
  showByClass("privateUser", "none");
  showByClass("sectionLogin", "block");



}


