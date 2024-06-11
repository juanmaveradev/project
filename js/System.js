class System {
  constructor() {
    this.products = [];
    this.users = [];
    this.buys = [];
    this.userLogged = null;
    this.preloadProducts();
    this.preloadUsers();
    this.preloadBuys();
  }

  preloadBuys() {
    let buy1 = new Buys(1, this.users[6], this.products[4], 2, "Aprobada", 542)
    let buy2 = new Buys(2, this.users[8], this.products[6], 5, "Pendiente", 235)
    let buy3 = new Buys(3, this.users[7], this.products[2], 3, "Pendiente", 168)
    let buy4 = new Buys(4, this.users[6], this.products[1], 1, "Rechazada", 65)
    let buy5 = new Buys(5, this.users[9], this.products[8], 6, "Pendiente", 325)
    this.buys.push(buy1,buy2,buy3,buy4,buy5)
  }

  preloadProducts() {
    let cletoGloves14oz = new Product(1, "Guantes de boxeo - Cleto Reyes 14oz", "Guantes de boxeo con diseño anatómico: Los guantes de boxeo de alta resistencia CLETO REYES están hechos a mano en México con piel de vaca, diseñados anatómicamente para un ajuste perfecto.", "https://m.media-amazon.com/images/I/81K2UPztsdL._AC_SX679_.jpg", 257, 13, true, true);
    let RDXGloves16oz = new Product(2, "Guantes de Boxeo 16oz - RDX ", "Piel ConvEX maya para guantes de boxeo de alta tecnología. Fabricados con borde de primera calidad para entrenamientos y combates. Diseño anatómico contorneado para una posición de la mano más natural y cómoda.", "https://m.media-amazon.com/images/I/81E4XxN3S1L._AC_SX679_.jpg", 30, 4, false, true);
    let venumWraps = new Product(3, "Vendas 1,5M - Venum", "El acolchado de gel amortiguador de Shell difunde la fuerza recibida durante el entrenamiento o la competición en MMA, boxeo, Muay Thai y kickboxing, entre otros deportes, a través de la estructura de los guantes interiores de boxeo. ", "https://m.media-amazon.com/images/I/71pzS6gYhNL.__AC_SX300_SY300_QL70_FMwebp_.jpg", 12, 60, true, true);
    let venumShinguards = new Product(4, "Tibiales Venum Challenger", "100% Piel sintética para una gran durabilidad y rendimiento | Espuma de alta densidad con acolchado adicional a lo largo de la espinilla y el empeine para una mayor absorción de impactos", "https://m.media-amazon.com/images/I/91fxHepdDWL._AC_SX679_.jpg", 76, 43, false, true)
    let mmaDummie = new Product(5, "Muñeco de MMA - UM", " ¡Entrena como un profesional con UM Wrestling Dummies! Perfecto para dominar movimientos de Jiu-Jitsu brasileño, MMA, Judo, Karate, Boxeo y muchos más", "https://m.media-amazon.com/images/I/31dck+Wu7kL._AC_.jpg", 49, 43, true, true)
    let venumShort = new Product(6, "Short Muay Thai - Venum", "Los pantalones cortos Venum Classic Muay Thai son imprescindibles para todos los practicantes de boxeo tailandés que buscan pantalones cortos de gran valor.", "https://m.media-amazon.com/images/I/41RvqZDqXeL._AC_.jpg", 37, 24, false, true)
    let fairtexPads = new Product(7, "Pads - Fairtex", "La almohadilla curva de Muay Thai de Fairtex es la herramienta de entrenamiento perfecta para cualquiera que quiera mejorar sus habilidades de golpeo. Fabricada con materiales de primera calidad y diseñada con una forma curva", "https://m.media-amazon.com/images/I/31I3y-UHA4L._AC_.jpg", 101, 6, true, true)
    let everlastBoxBag = new Product(8, "Bolsa de boxeo, Juofip", "Construcción sólida para resistencia: este saco de boxeo de 80 libras está construido con precisión para durar y equipa a los luchadores de manera integral, fomentando la habilidad y la mejora de la resistencia.", "https://m.media-amazon.com/images/I/41xlz8Rg8rL._AC_.jpg", 160, 54, false, true)
    let RDXMouthGuard = new Product(9, "Bucal - RDX", "Los protectores bucales RDX para adultos están fabricados con un gel absorbente de impactos que proporciona una amortiguación entre las mandíbulas y protege los segmentos internos y externos de los dientes.", "https://m.media-amazon.com/images/I/71as1VnYY6L._AC_SX679_.jpg", 19, 65, true, true)
    let doubleEndBag = new Product(10, "Cielo Tierra - Ringside", "La habilidad de lanzar un puñetazo y lanzar un contragolpe efectivo es una habilidad esencial que debe poseer un boxeador. La bolsa de doble extremo te ayudará a concentrarte en estas técnicas y a agudizar tus reflejos para convertirte en un boxeador más sólido desde el punto de vista fundamental.", "https://m.media-amazon.com/images/I/31pmbz9wkYL._AC_.jpg", 60, 72, false, true)
    this.products.push(cletoGloves14oz, RDXGloves16oz, venumWraps, venumShinguards, mmaDummie, venumShort, fairtexPads, everlastBoxBag, RDXMouthGuard, doubleEndBag)
  }

  preloadUsers() {
    let admin1 = new User(1, 1, "root", "root", '', '', '', '', 3000)
    let admin2 = new User(2, 1, "JuanmaVera", "Juanma123", '', '', '', '', 3000)
    let admin3 = new User(3, 1, "x", "x", '', '', '', '', 3000)
    let admin4 = new User(4, 1, "MariaMar", "papaymama", '', '', '', '', 3000)
    let admin5 = new User(5, 1, "ValenIda", "Ida43", '', '', '', '', 3000)
    let user1 = new User(6, 2, "MahiaJaz", "milocopitoluna", 'Mahia', 'Casaravilla', '4322-4354-4532-7313', 226, 3000)
    let user2 = new User(7, 2, 'Pablito', 'elmejor123', 'Pablo', 'Casas', '5417-4321-7543-9625', 953, 3000)
    let user3 = new User(8, 2, 'Alfredito', 'alfred34', 'Alfredo', 'Perez', '5432-8764-5435-2135', 548, 3000)
    let user4 = new User(9, 2, 'Batman', 'fckJoker', 'Bruce', 'Wayne', '6809-1324-4352-7656', 437, 3000)
    let user5 = new User(10, 2, 'ej', '123', 'Pepe', 'Ramirez', '4322-5434-4531-7658', 953, 3000)
    this.users.push(admin1, admin2, admin3, admin4, admin5, user1, user2, user3, user4, user5)
  }

  addProduct(id, title, description, imgUrl, price, stock, offer, state) {
    let newProduct = new Product(id, title, description, imgUrl, price, stock, offer, state)
    this.products.push(newProduct)
  }

  login(user, password) {
    let i = 0;
    let userFinded = false;
    while (i < this.users.length && !userFinded) {
      let userLogin = this.users[i];
      if (userLogin.username.toLowerCase() === user && userLogin.password === password) {
        userFinded = true;
        this.userLogged = userLogin;
      }
      i++
    }
    return userFinded;
  }



  buyProd(id, amount, buyer) {
    let product;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === Number(id)) {
        product = this.products[i];
        break;
      }
    }
    if (product.state) {
      product.stock -= amount;
      buyer = this.userLogged;
      this.addBuy(product, amount);
      return true;
    }
      
    return false;
  }

  addBuy(product, amount) {
    if (this.userLogged) {
      let totalCost = product.price * amount;
      let newBuy = new Buys(this.buys.length + 1, this.userLogged.username, product, amount, "Pendiente", totalCost);
      this.buys.push(newBuy);
      console.log(newBuy)
    }
  }

  acceptBuy(idBuys) {
    


    for (let i = 0; i < this.buys.length; i++) {
      
      if(this.buys[i].idBuys == idBuys) {

        if(this.buys[i].buyer.balance >= this.buys[i].totalCost &&
          this.buys[i].amount <= this.buys[i].product.stock) {
  
            this.buys[i].buyer.balance -= this.buys[i].totalCost;
            this.buys[i].product.stock -= this.buys[i].amount;
            this.buys[i].stateBuys = "Aceptada";
            return true;
            
        }else {
          this.buys[i].stateBuys = "Rechazada";
          alert("NO SE PUDO COMPRAR")
          return false;
        }

      }

    }
    return false;
   
  }

  getBuys() {
    return this.buys;
  }

  availableProds() {
    let availableProds = [];
    for (let p of this.products) {
      if (p.state) {
        availableProds.push(p);
      }
    }
    return availableProds;
  }



}

