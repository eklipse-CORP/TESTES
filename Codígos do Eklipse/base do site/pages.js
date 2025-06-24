const products = [
    {
        id: 1,
        title: "Placa-Mãe ASUS ROG Strix Z590-E",
        category: "placa-mae",
        price: 1850.00,
        image: "https://images.kabum.com.br/produtos/fotos/211973/placa-mae-asus-rog-strix-z590-e-gaming-wifi-intel-lga-1200-ddr4_1592536977_gg.jpg",
    },
    {
        id: 2,
        title: "Processador Intel Core i7-11700K",
        category: "processador",
        price: 1420.00,
        image: "https://images.kabum.com.br/produtos/fotos/217637/processador-intel-core-i7-11700k-11a-geracao-3-6ghz-lga-1200-bx8070811700k_1645567330_gg.jpg",
    },
    {
        id: 3,
        title: "Placa de Vídeo NVIDIA RTX 3070 Ti",
        category: "gpu",
        price: 5300.00,
        image: "https://images.kabum.com.br/produtos/fotos/220511/placa-de-video-asus-nvidia-geforce-rtx-3070-ti-8gb-gddr6x-dual-rtx3070ti-o8g_1651813388_gg.jpg",
    },
    {
        id: 4,
        title: "Memória RAM Corsair Vengeance 16GB DDR4",
        category: "memoria",
        price: 480.00,
        image: "https://images.kabum.com.br/produtos/fotos/177553/memoria-corsair-vengeance-lpx-16gb-2x8gb-3200mhz-ddr4-cmk16gx4m2b3200c16_1560294987_gg.jpg",
    },
    {
        id: 5,
        title: "Fonte EVGA 600W 80 Plus Bronze",
        category: "fonte",
        price: 370.00,
        image: "https://images.kabum.com.br/produtos/fotos/152762/fonte-evga-600w-80-plus-bronze-100-b1-0600-k1_1572313225_gg.jpg",
    },
    {
        id: 6,
        title: "Gabinete Cooler Master MasterBox NR600",
        category: "gabinete",
        price: 500.00,
        image: "https://images.kabum.com.br/produtos/fotos/223225/gabinete-cooler-master-masterbox-nr600_1655304810_gg.jpg",
    },
];

const productsGrid = document.getElementById("productsGrid");
const categoryLinks = document.querySelectorAll("nav ul li a");
const searchInput = document.getElementById("searchInput");

function displayProducts(filteredProducts) {
    productsGrid.innerHTML = "";
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `<p style="color:#aaa; grid-column: 1/-1; text-align:center;">Nenhum produto encontrado.</p>`;
        return;
    }
    filteredProducts.forEach(prod => {
        const productHTML = `
            <article class="product-card" onclick="window.location.href='produto.html?id=${prod.id}'">
                <img src="${prod.image}" alt="${prod.title}" class="product-image" />
                <div class="product-title">${prod.title}</div>
                <div class="product-category">${prod.category.replace("-", " ").toUpperCase()}</div>
                <div class="product-price">R$ ${prod.price.toFixed(2).replace('.', ',')}</div>
            </article>
`;

        productsGrid.insertAdjacentHTML("beforeend", productHTML);
    });
}

function filterProducts(category, searchTerm = "") {
    let filtered = products;
    if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }
    if (searchTerm.trim() !== "") {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    return filtered;
}

categoryLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        categoryLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        const category = link.dataset.category;
        const searchTerm = searchInput.value;
        displayProducts(filterProducts(category, searchTerm));
    });
});

searchInput.addEventListener("input", () => {
    const activeCategoryLink = document.querySelector("nav ul li a.active");
    const category = activeCategoryLink ? activeCategoryLink.dataset.category : "all";
    const searchTerm = searchInput.value;
    displayProducts(filterProducts(category, searchTerm));
});

// Inicializa exibindo todos os produtos
displayProducts(products);