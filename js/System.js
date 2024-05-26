class System {
  constructor() {
    this.products = [];
    this.preloadProducts();
  }

  preloadProducts() {
    let cletoGloves14oz = new Product(1, "Guantes de boxeo, Cleto Reyes 14oz", "Guantes de boxeo con diseño anatómico: Los guantes de boxeo de alta resistencia CLETO REYES están hechos a mano en México con piel de vaca, diseñados anatómicamente para un ajuste perfecto.", "https://m.media-amazon.com/images/I/81K2UPztsdL._AC_SX679_.jpg", 257, 13, true, true);
    let RDXGloves16oz = new Product(2,"Guantes de Boxeo, RDX 16oz", "Piel ConvEX maya para guantes de boxeo de alta tecnología. Fabricados con borde de primera calidad para entrenamientos y combates. Diseño anatómico contorneado para una posición de la mano más natural y cómoda.","https://m.media-amazon.com/images/I/81E4XxN3S1L._AC_SX679_.jpg", 30, 4, false, true);
    let venumWraps = new Product(3, "Vendas Venum", "El acolchado de gel amortiguador de Shell difunde la fuerza recibida durante el entrenamiento o la competición en MMA, boxeo, Muay Thai y kickboxing, entre otros deportes, a través de la estructura de los guantes interiores de boxeo. ", "https://m.media-amazon.com/images/I/71pzS6gYhNL.__AC_SX300_SY300_QL70_FMwebp_.jpg", 12, 60, true, false);
    let venumShinguards = new Product(4, "Tibiales Venum Challenger", "100% Piel sintética para una gran durabilidad y rendimiento | Espuma de alta densidad con acolchado adicional a lo largo de la espinilla y el empeine para una mayor absorción de impactos", "https://m.media-amazon.com/images/I/91fxHepdDWL._AC_SX679_.jpg", 76, 43, false, true)
    let RDXMouthGuard = new Product (5, "Bucal RDX", "Los protectores bucales RDX para adultos están fabricados con un gel absorbente de impactos que proporciona una amortiguación entre las mandíbulas y protege los segmentos internos y externos de los dientes.", "https://m.media-amazon.com/images/I/71as1VnYY6L._AC_SX679_.jpg", 19, 65, true, true)
    this.products.push(cletoGloves14oz, RDXGloves16oz, venumWraps, venumShinguards, RDXMouthGuard)
  }

  addProduct(id,title,description,imgUrl,price,stock,offer,state) {
    let newProduct = new Product(id,title,description,imgUrl,price,stock,offer,state)
    this.products.push(newProduct)
  }

  

}

