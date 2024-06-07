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
      return "SI" 
    }return "NO"
  }

  offerStateBtn() {
    if (this.offer) {
      return "Cambiar"
    } return "Cambiar"
  }

  offerStateMsg() {
    if (this.offer) {
      return `<span class="offerTrue"> EN OFERTA </span>`
    } return ''

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

