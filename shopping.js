class Product {
  name = "";
  price = 100;
  // private verhindert, dass ein User vat einfach random setzen kann. soll aber CONTROLLED sein, also soll aus PREIS kommen!
  #vatRate = 0.16;
  #nettoPreis = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  toText() {
    return `${this.name} ${
      this.price
    } € insgesamt. ${this.containedVAT()} € inkl. MwSt (16%)`;
  }

  containedVAT() {
    this.#nettoPreis = this.price / (1 + this.#vatRate);
    const vatAmount = this.price - this.#nettoPreis;
    return vatAmount.toFixed(2).replace(".", ",");
  }
}

class Cart {
  // JsDoc => gebe an, was man in dieser Variable speichern kann
  // VOrteil => wir kriegen Autocompletion im Code
  /** @type {Array<Product>} */
  products = [];

  constructor() {}

  addProduct(shoppedProduct) {
    if (shoppedProduct instanceof Product) {
      this.products.push(shoppedProduct);
      // ternary benutzen für den conditional output (mal e am Ende, mal nicht)
      return (
        `Dein Warenkorb enthält jetzt ${this.products.length} Produkt` +
        (this.products.length > 1 ? "e" : "")
      );
    }
    // nicht gültiges Produkt
    else {
      return "Diese ist in unserem Shop nicht erhältlich!";
    }
  }

  getProductInfoCart() {
      // - die Methode sollte über das Array der Produkte iterieren
      // - für jedes in der Liste enthaltene Produkt die Methode `toText()` 
      // aufrufen und auf der Konsole ausgeben.
      this.products.forEach(prod => {
        console.log(prod.toText())
      })
  }

  getTotalItemsPrice() {

    let sum = this.products.reduce((sum, product) => {
      return sum + product.price
    }, 0)

    // format sum to nice german thing
    sum = sum.toFixed(2).replace(".", ",")

    console.log(`Die Gesamtsumme für ${this.products.length} Artikel in deinem Warenkorb beträgt ${sum} €`)
  }
}

const adidasShoes = new Product("Adidas Laufschuhe", 150.0);
const tracksuit = new Product("Puma tracksuit", 99.99);
const socks = new Product("Socks set", 4.99);

console.log(adidasShoes.toText()); // Adidas Laufschuhe 150,00 € insgesamt. 20,69 € inkl. MwSt. (16%).
console.log(adidasShoes.containedVAT()); // 20,69 € inkl. MwSt.

const cart = new Cart();
console.log(cart.addProduct("potato")); // Diese ist in unserem Shop nicht erhältlich!
console.log(cart.addProduct(tracksuit)); // Dein Warenkorb enthält jetzt 1 Produkt
console.log(cart.addProduct(adidasShoes)); // Dein Warenkorb enthält jetzt 2 Produkte
console.log(cart.addProduct(socks)); // Dein Einkaufswagen enthält jetzt 3 Produkte

cart.getProductInfoCart();
// Adidas Laufschuhe 150,00 € insgesamt. 20,69 € inkl. MwSt. (16%).
// Puma Trainingsanzug 99,99 € insgesamt. 13,79 € inkl. MwSt. (16%).
// Socken Set 4,99 € insgesamt. 0,69 € inkl. MwSt. (16%).
cart.getTotalItemsPrice();
// Die Gesamtsumme für 3 Artikel in deinem Warenkorb beträgt 254,98 €.
