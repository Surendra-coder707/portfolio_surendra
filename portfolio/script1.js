document.addEventListener("DOMContentLoaded", function(){

// 👉 PRODUCTS DATA
const products = [
  {id:1, name:"iPhone 14", price:800, category:"electronics", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"},
  {id:2, name:"Laptop", price:1200, category:"electronics", img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"},
  {id:3, name:"T-Shirt", price:25, category:"clothing", img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"},
  {id:4, name:"Jeans", price:50, category:"clothing", img:"https://images.unsplash.com/photo-1542272604-787c3835535d"},
  {id:5, name:"Nike Shoes", price:120, category:"shoes", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"},
  {id:6, name:"Sneakers", price:90, category:"shoes", img:"https://images.unsplash.com/photo-1528701800489-20be9cfe1b4b"}
];

let cart = [];

// 👉 SHOW PRODUCTS
function displayProducts(data){
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  data.forEach(p=>{
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.img}" class="product-image">
        <div class="product-info">
          <h3>${p.name}</h3>
          <p>$${p.price}</p>
          <button class="add-to-cart" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

// 👉 ADD TO CART
window.addToCart = function(id){
  const product = products.find(p=>p.id===id);
  cart.push(product);
  updateCart();
}

// 👉 REMOVE ITEM
window.removeItem = function(index){
  cart.splice(index,1);
  updateCart();
}

// 👉 UPDATE CART UI
function updateCart(){
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item,index)=>{
    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <div>
          <h4>${item.name}</h4>
          <p>$${item.price}</p>
          <button class="remove-btn" onclick="removeItem(${index})">❌ Remove</button>
        </div>
      </div>
    `;
  });

  cartCount.innerText = cart.length;
  cartTotal.innerText = "$" + total;
}

// 👉 TOGGLE CART
window.toggleCart = function(){
  document.getElementById("cartSidebar").classList.toggle("active");
  document.getElementById("cartOverlay").classList.toggle("active");
}

// 👉 CATEGORY FILTER
document.querySelectorAll(".category-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".category-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    const cat = btn.dataset.category;

    if(cat==="all"){
      displayProducts(products);
    } else {
      const filtered = products.filter(p=>p.category===cat);
      displayProducts(filtered);
    }
  });
});

// 👉 SEARCH FUNCTION
const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", (e)=>{
  const value = e.target.value.toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  if(filtered.length === 0){
    displayProducts(products);
  } else {
    displayProducts(filtered);
  }
});

// 👉 SHOW CHECKOUT FORM (FIXED ✅)
window.showCheckout = function(){
  document.getElementById("checkoutForm").style.display = "block";
}

// 👉 SEND ORDER TO WHATSAPP
window.sendOrderWhatsApp = function(){

  let name = document.getElementById("userName").value;
  let phone = document.getElementById("userPhone").value;
  let address = document.getElementById("userAddress").value;

  if(!name || !phone || !address){
    alert("Please fill all details");
    return;
  }

  if(cart.length === 0){
    alert("Cart is empty!");
    return;
  }

  let message = `🛒 *New Order*%0A%0A`;
  message += `👤 Name: ${name}%0A`;
  message += `📞 Phone: ${phone}%0A`;
  message += `🏠 Address: ${address}%0A%0A`;

  message += `📦 *Products:*%0A`;

  cart.forEach(item=>{
    message += `- ${item.name} ($${item.price})%0A`;
  });

  let total = cart.reduce((sum, item)=> sum + item.price, 0);

  message += `%0A💰 Total: $${total}`;

  let whatsappNumber = "916375854693";

  let url = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(url, "_blank");

  // 👉 CLEAR CART AFTER ORDER
  cart = [];
  updateCart();

  alert("Order sent on WhatsApp ✅");
}

// 👉 INITIAL LOAD
displayProducts(products);

});