const products = [
    {
        id: 1,
        title: "Placa-Mãe ASUS ROG Strix Z590-E",
        category: "placa-mae",
        price: 1850.00,
        image: "https://images.kabum.com.br/produtos/fotos/211973/placa-mae-asus-rog-strix-z590-e-gaming-wifi-intel-lga-1200-ddr4_1592536977_gg.jpg",
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
    const container = document.getElementById("productDetail");

    if (!product) {
        container.innerHTML = "<p>Produto não encontrado.</p>";
        return;
    }

    container.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h1>${product.title}</h1>
        <div class="category">${product.category.toUpperCase()}</div>
        <div class="price">R$ ${product.price.toFixed(2).replace(".", ",")}</div>
        <p>${product.description}</p>
    `;
}

const productId = getProductIdFromURL();
renderProductDetail(productId);
