class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log("Ini memilih product");
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
    <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" />
        <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>Rp. ${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Tambah ke keranjang</button>
        </div>
    </div>`;

    const addToCartButton = prodEl.querySelector("button");
    addToCartButton.addEventListener("click", this.addToCart.bind(this));

    return prodEl;
  }
}

class ShoppingCart {
  items = [];

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total : Rp. ${0}</h2>
      <button>Pesan Sekarang</button>`;
    cartEl.className = "cart";
    return cartEl;
  }
}

class ProductList {
  products = [
    new Product(
      "bantal",
      "https://contents.mediadecathlon.com/p1749048/k$f0b275c3207e208e12771a5c385d3ff8/camping-pillow-comfort.jpg?format=auto&quality=70&f=768x768",
      "Bantal ini lembut",
      10000
    ),
    new Product(
      "karpet",
      "https://cdn2.tstatic.net/travel/foto/bank/images/ilustrasi-karpet-terbang-aladdin.jpg",
      "Karpet ini bisa terbang",
      80000
    ),
  ];

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class FSW2Shop {
  render() {
    const renderHook = document.getElementById("app");

    const cart = new ShoppingCart();
    const cartEl = cart.render();

    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl, prodListEl);
  }
}

const shop = new FSW2Shop();
shop.render();
