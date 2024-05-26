let system = new System();



listProducts();
listProductsTable()

document.querySelector("#btnAddProd").addEventListener("click", addProduct);


function addProduct() {
  
  let id = system.products.length + 1;
  let title = document.querySelector("#prodName").value;
  let description = document.querySelector("#prodDescription").value;
  let imgUrl = document.querySelector("#prodURL").value;
  let price = Number(document.querySelector("#prodPrice").value);
  let stock = Number(document.querySelector("#prodStock").value);
  let offer = false;
  let state = true;

  system.addProduct(id,title,description,imgUrl,price,stock,offer,state);
  console.log(system.products)

  listProducts();
  listProductsTable()
}

function listProducts() {
  let containerProd = document.querySelector("#containerProducts");
  containerProd.innerHTML = '';

  for(let i = 0; i < system.products.length; i++) {

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
                <span>${system.products[i].offer}</span>
              </div>
              <input type="button" value="Comprar" class="btnBuy inputBtnStyle" />
            </div>
          </div>
     
      `
    }

  }
 
}

function listProductsTable() {
  let listProductsTableEdit = document.querySelector("#containerProductsTableEdit");
  listProductsTableEdit.innerHTML = '';

  


  for (let i = 0; i < system.products.length; i++){
   
      listProductsTableEdit.innerHTML += `
      <tr>
                <td>${system.products[i].id}</td>
                <td>${system.products[i].name}</td>
                <td>${system.products[i].stock}</td>
                <td><input type="checkbox" ${system.products[i].offerState()}/></td>
                <td><b>${system.products[i].prodState()}</td></b>
                <td><input type="button"value="${system.products[i].prodStateBtn()}" class="btnState"  data-index="${i}"></td>
      </tr>
      `
  
        // Agregar event listener a cada botón de estado
          document.querySelectorAll(".btnState").forEach(function(button){
          button.addEventListener("click", function() {
          changeProdState(button.dataset.index);
      });
    });
    

  }



}

function changeProdState(index) {
  // Cambiar el estado del producto
  system.products[index].state = !system.products[index].state;

  // Actualizar el texto del botón y el estado visual
  let btnState = document.querySelectorAll(".btnState")[index];
  if (system.products[index].state) {
      btnState.value = "Pausar";
  } else {
      btnState.value = "Activar";
  }

  // Actualizar la visualización de la tabla de productos
  listProductsTable();
  listProducts();
  console.log(system.products[index])
}


