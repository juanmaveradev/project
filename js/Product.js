class Product {
  constructor(id, name, description, imgUrl, price, stock, offer, state) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imgUrl = imgUrl;
    this.price = price;
    this.stock = stock;
    this.offer = offer;
    this.state = state;
  }
  
  offerState() {
    if (this.offer) {
      return "checked"
    }
  }

  prodState() {
    if (this.state) {
      return "Activo"
    } return "Pausado"
  }

  prodStateBtn() {
    if (this.state) {
      return "Pausar"
    } return "Activar"
  }
}

