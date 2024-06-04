class System {
  constructor() {
    this.products = [];
    this.users = [];
    this.userLogged = null;
    this.preloadProducts();
    this.preloadUsers();
  }

  preloadProducts() {
    let cletoGloves14oz = new Product(1, "Guantes de boxeo, Cleto Reyes 14oz", "Guantes de boxeo con diseño anatómico: Los guantes de boxeo de alta resistencia CLETO REYES están hechos a mano en México con piel de vaca, diseñados anatómicamente para un ajuste perfecto.", "https://m.media-amazon.com/images/I/81K2UPztsdL._AC_SX679_.jpg", 257, 13, true, true);
    let RDXGloves16oz = new Product(2,"Guantes de Boxeo, RDX 16oz", "Piel ConvEX maya para guantes de boxeo de alta tecnología. Fabricados con borde de primera calidad para entrenamientos y combates. Diseño anatómico contorneado para una posición de la mano más natural y cómoda.","https://m.media-amazon.com/images/I/81E4XxN3S1L._AC_SX679_.jpg", 30, 4, false, true);
    let venumWraps = new Product(3, "Vendas Venum", "El acolchado de gel amortiguador de Shell difunde la fuerza recibida durante el entrenamiento o la competición en MMA, boxeo, Muay Thai y kickboxing, entre otros deportes, a través de la estructura de los guantes interiores de boxeo. ", "https://m.media-amazon.com/images/I/71pzS6gYhNL.__AC_SX300_SY300_QL70_FMwebp_.jpg", 12, 60, true, false);
    let venumShinguards = new Product(4, "Tibiales Venum Challenger", "100% Piel sintética para una gran durabilidad y rendimiento | Espuma de alta densidad con acolchado adicional a lo largo de la espinilla y el empeine para una mayor absorción de impactos", "https://m.media-amazon.com/images/I/91fxHepdDWL._AC_SX679_.jpg", 76, 43, false, true)
    let RDXMouthGuard = new Product (5, "Bucal RDX", "Los protectores bucales RDX para adultos están fabricados con un gel absorbente de impactos que proporciona una amortiguación entre las mandíbulas y protege los segmentos internos y externos de los dientes.", "https://m.media-amazon.com/images/I/71as1VnYY6L._AC_SX679_.jpg", 19, 65, true, true)
    this.products.push(cletoGloves14oz, RDXGloves16oz, venumWraps, venumShinguards, RDXMouthGuard)
  }

  preloadUsers(){
    let admin1 = new User(1, 1, "root", "root", '', '', '', '')
    let admin2 = new User(2, 1, "JuanmaVera", "Juanma123", '', '', '', '')
    let admin3 = new User(3, 1, "PedroPep", "alfajor", '', '', '', '')
    let admin4 = new User(4, 1, "MariaMar", "papaymama", '', '', '', '')
    let admin5 = new User(5, 1, "ValenIda", "Ida43", '', '', '', '')
    let user1 = new User(6, 2, "MahiaJaz", "milocopitoluna", 'Mahia', 'Casaravilla', '4322-4354-4532-7313', 226)
    let user2 = new User(7, 2, 'Pablito', 'elmejor123', 'Pablo', 'Casas', '5417-4321-7543-9625', 953)
    let user3 = new User(8, 2, 'Alfredito', 'alfred34', 'Alfredo', 'Perez', '5432-8764-5435-2135', 548)
    let user4 = new User(9, 2, 'Batman', 'fckJoker', 'Bruce', 'Wayne', '6809-1324-4352-7656', 437)
    let user5 = new User(10, 2, 'ej', '123', 'Pepe', 'Ramirez', '4322-5434-4531-7658',953)
    this.users.push(admin1,admin2,admin3,admin4,admin5, user1,user2,user3,user4,user5)
}

  addProduct(id,title,description,imgUrl,price,stock,offer,state) {
    let newProduct = new Product(id,title,description,imgUrl,price,stock,offer,state)
    this.products.push(newProduct)
  }

  login(user,password) {

    let i = 0;
    let userFinded = false;
    
    while (i < this.users.length && !userFinded) {

        let userLogin = this.users[i];

        if ( userLogin.username.toLowerCase() === user && userLogin.password === password){
          userFinded = true;
          this.userLogged = userLogin;
      }

      i++
    }

    return userFinded;
  }
  
  

}

