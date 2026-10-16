const products = [
  { id: 1, name: "Wireless Headphones", category: "electronics", price: "$99" },
  { id: 2, name: "Smart Watch", category: "electronics", price: "$149" },
  { id: 3, name: "Cotton T-Shirt", category: "clothing", price: "$25" },
  { id: 4, name: "Denim Jacket", category: "clothing", price: "$75" },
  { id: 5, name: "Leather Wallet", category: "accessories", price: "$40" },
  { id: 6, name: "Sunglasses", category: "accessories", price: "$50" }
];

function displayProducts(items) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
    grid.appendChild(card);
  });
}

function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name.length < 3) {
    alert("Name must be at least 3 characters long.");
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }
  if (message.length < 10) {
    alert("Message must be at least 10 characters long.");
    return;
  }

  alert("Thank you! Your message has been sent successfully.");
  this.reset();
});

displayProducts(products);