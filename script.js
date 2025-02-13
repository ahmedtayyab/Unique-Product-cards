document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            name: "Cup",
            price: "$10.99",
            image: "mug.jpg",
            description: "A high-quality ceramic cup, perfect for your coffee."
        },
        {
            name: "Game Controller",
            price: "$49.99",
            image: "ps.jpg",
            description: "A wireless controller for a seamless gaming experience."
        },
        {
            name: "Nike Shoes",
            price: "$99.99",
            image: "nike.jpg",
            description: "Modern Nike Shoes"
        }
    ];

    const container = document.getElementById("productContainer");

    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
                <div class="card-back">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                </div>
            </div>
            <button class="buy-btn">Buy Now</button>
        `;

        container.appendChild(card);
    });

   
    document.querySelectorAll(".buy-btn").forEach((button, index) => {
        button.addEventListener("click", function () {
            console.log(`Product Selected: ${products[index].name}`);
        });
    });

    const darkModeToggle = document.getElementById("darkModeToggle");

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.querySelectorAll(".product-card").forEach((card) => {
            card.classList.toggle("dark-mode-card");
        });
    });
});
