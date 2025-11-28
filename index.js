const catalogBtn = document.querySelector(".header .center button");
const mobileMenu = document.querySelector(".mobile-menu");
const container = document.getElementById("cardContainer");
const container2 = document.getElementById("cardContainer2");
const container3 = document.getElementById("cardContainer3");

catalogBtn.addEventListener("click", (e) => {
  e.preventDefault()
  mobileMenu.classList.toggle("active");
});

fetch("https://fakestoreapi.com/products?limit=4")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const discount = Math.floor(Math.random() * 50) + 10;
      const oldPrice = (item.price + (item.price * discount / 100)).toFixed(2);

      const card = `
        <div class="card">
          <img src="${item.image}" alt="">
          <span class="discount">-${discount}%</span>

          <div class="prices">
            <span>${item.price} $</span>
            <span class="old-price">${oldPrice} $</span>
          </div>

          <div class="title">${item.title}</div>

          <div class="stars">⭐⭐⭐⭐⭐</div>

          <button class="btn">Add To Cart</button>
        </div>
      `;

      container.innerHTML += card;
    });
  });

fetch("https://fakestoreapi.com/products?limit=4")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const discount = Math.floor(Math.random() * 50) + 10;
      const oldPrice = (item.price + (item.price * discount / 100)).toFixed(2);

      const card = `
        <div class="card">
          <img src="${item.image}" alt="">
          <span class="discount">-${discount}%</span>

          <div class="prices">
            <span>${item.price} $</span>
            <span class="old-price">${oldPrice} $</span>
          </div>

          <div class="title">${item.title}</div>

          <div class="stars">⭐⭐⭐⭐⭐</div>

          <button class="btn">Add To Cart</button>
        </div>
      `;

      container2.innerHTML += card;
    });
  });

fetch("https://fakestoreapi.com/products?limit=4")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const discount = Math.floor(Math.random() * 50) + 10;
      const oldPrice = (item.price + (item.price * discount / 100)).toFixed(2);

      const card = `
        <div class="card">
          <img src="${item.image}" alt="">
          <span class="discount">-${discount}%</span>

          <div class="prices">
            <span>${item.price} $</span>
            <span class="old-price">${oldPrice} $</span>
          </div>

          <div class="title">${item.title}</div>

          <div class="stars">⭐⭐⭐⭐⭐</div>

          <button class="btn">Add To Cart</button>
        </div>
      `;

      container3.innerHTML += card;
    });
  });