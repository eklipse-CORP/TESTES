const products = [
    {
        id: 1,
        title: "Placa-Mãe ASUS ROG Strix Z590-E",
        category: "placa-mae",
        price: 1850.00,
        image: "https://dlcdnwebimgs.asus.com/files/media/B7CBA71A-2549-4C30-843E-15189BB8E78D/V1/img/z590/kv/hero.png",
        description: "Placa-mãe ASUS com suporte para processadores Intel de 11ª geração, Wi-Fi embutido e componentes premium."
    },
    {
        id: 2,
        title: "Processador Intel Core i7-11700K",
        category: "processador",
        price: 1420.00,
        image: "https://images.kabum.com.br/produtos/fotos/217637/processador-intel-core-i7-11700k-11a-geracao-3-6ghz-lga-1200-bx8070811700k_1645567330_gg.jpg",
        description: "Processador Intel de 11ª geração com alto desempenho para games e produtividade."
    },
    // ... Adicione os demais produtos com a propriedade "description"
];

function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get("id"));
}

function renderProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) {
    document.querySelector(".product-detail-container").innerHTML = "<p>Produto não encontrado.</p>";
    return;
  }

  document.getElementById("productTitle").textContent = product.title;
  document.getElementById("productCategory").textContent = product.category.toUpperCase();
  document.getElementById("productPrice").textContent = `R$ ${product.price.toFixed(2).replace(".", ",")}`;
  document.getElementById("productDescription").textContent = product.description;
  document.getElementById("mainImage").src = product.image;

  const thumbnails = document.getElementById("thumbnails");
  thumbnails.innerHTML = "";

  // Criando miniaturas (usando a imagem principal repetida como exemplo)
  for (let i = 0; i < 4; i++) {
    const thumb = document.createElement("img");
    thumb.src = product.image;
    thumb.alt = `Miniatura ${i + 1}`;
    thumb.addEventListener("click", () => {
      document.getElementById("mainImage").src = thumb.src;
    });
    thumbnails.appendChild(thumb);
  }
}


const productId = getProductIdFromURL();
renderProductDetail(productId);

document.querySelector(".buy-button").addEventListener("click", () => {
    addToCart(productId);
    // Redirecionar direto pro carrinho, se quiser:
    // window.location.href = "carrinho.html";
});

document.querySelector(".cart-button").addEventListener("click", () => {
    addToCart(productId);
});
