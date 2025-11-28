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

  
const sampleArticles = [
  {
    id: 1,
    date: '05.03.2021',
    title: 'Режим использования масок и перчаток на территории магазинов',
    description: 'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.',
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400&h=200&fit=crop'
  },
  {
    id: 2,
    date: '05.03.2021',
    title: 'Весеннее настроение для каждой!',
    description: '8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и правильных тёплых пожеланий.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=200&fit=crop'
  },
  {
    id: 3,
    date: '22.02.2020',
    title: 'ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!',
    description: 'Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=200&fit=crop'
  }
];

async function fetchArticles() {
  const container = document.getElementById('articlesContainer');

  try {

    await new Promise(resolve => setTimeout(resolve, 1000));
    const articles = sampleArticles;

    displayArticles(articles);
  } catch (error) {
    container.innerHTML = '<div class="error">Ошибка загрузки статей. Пожалуйста, попробуйте позже.</div>';
  }
}

function displayArticles(articles) {
  const container = document.getElementById('articlesContainer');

  if (articles.length === 0) {
    container.innerHTML = '<div class="error">Статьи не найдены.</div>';
    return;
  }

  container.innerHTML = articles.map(article => `
                <article class="article-card">
                    <img src="${article.image}" alt="${article.title}" class="article-image">
                    <div class="article-content">
                        <div class="article-date">${article.date}</div>
                        <h2 class="article-title">${article.title}</h2>
                        <p class="article-description">${article.description}</p>
                        <a href="#article-${article.id}" class="read-more">Подробнее</a>
                    </div>
                </article>
            `).join('');
}

fetchArticles();