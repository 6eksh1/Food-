function openMenu(name) {
  window.location.href = "menu.html?name=" + encodeURIComponent(name);
}

const restaurantMenus = {
  "Aswins Veg Restaurant": [
    { name: "Idli", price: 30, image:"https://th.bing.com/th/id/OIP.ia3E9RgSk5nV00Gy7woiPQHaFN?w=285&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Dosa", price: 40, image:"https://th.bing.com/th/id/OIP.QCVhgNHm78EfNo6-kNPMFwHaE7?w=285&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Poori", price: 35, image:"https://th.bing.com/th/id/OIP.Lah2-QLAcTcCljcb4Ux5ygHaHa?w=187&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Pongal", price: 20, image:"https://th.bing.com/th/id/OIP.DdCE2rPUK4s69S5Dm5uTLQHaFE?w=210&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Vada", price: 10, image:"https://th.bing.com/th/id/OIP.6ZNwXqoQ2tMWZuaHCTfKswHaE8?w=241&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Mini Tiffen", price: 200, image:"https://th.bing.com/th/id/OIP.6ly2WSt-Wy7uE4X7RUCqugHaFA?w=279&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
  ],
  "Shri Sangeethas": [
    { name: "Ghee Roast", price: 120, image:"https://th.bing.com/th?q=Ghee+Roast+Dosa+Making&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" },
    { name: "Onion Dosa", price: 140, image:"https://th.bing.com/th/id/OIP.QE3nzISAXrwF2r84Z620uQHaFj?w=250&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Masal Dosa", price: 160, image:"https://th.bing.com/th/id/OIP.bepcXnRrP_W5dTQEaCl00AHaE8?w=291&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Ghee Podi Dosa", price: 150, image:"https://th.bing.com/th/id/OIP.b-QsXthsUy2jy2kn1I7qFQHaE7?w=279&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Uthapam", price: 100, image:"https://th.bing.com/th/id/OIP.rMCt3XiWGe5MfoVj-lEKkAHaJo?w=150&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Mini Tiffin", price: 150, image:"https://th.bing.com/th/id/OIP.OBp42aXmaezC7tNSf4z6WgHaF7?w=239&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
  ],
  "Hotel Sai Karthik": [
    { name: "Chicken Biryani", price: 220, image:"https://th.bing.com/th/id/OIP.r6T2zRnyrrP8LdtOEaGVowHaGl?w=210&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Chicken Gravy", price: 240, image:"https://th.bing.com/th/id/OIP.GTpC9P4Dm6su2yqMtAzfEAHaE8?w=233&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Chicken Manchurian", price: 200, image:"https://th.bing.com/th/id/OIP.4plk0NVAGyA3SVUynuSifwHaLH?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Chicken Fried Rice", price: 180, image:"https://th.bing.com/th/id/OIP.mgPBbu3rI4NO4OoR0XLUhAHaLH?w=186&h=341&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Mutton Biryani", price: 290, image:"https://th.bing.com/th/id/OIP.yu1c0La2doVvnEAth-9jZQHaEK?w=274&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Mutton Gravy", price: 220, image:"https://th.bing.com/th/id/OIP.xivvSDrDs6BqzP85zZ7LxQHaHa?w=174&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Parotta", price: 50, image:"https://th.bing.com/th/id/OIP.hXCdf_1LlnHth58YKtbgPAHaE8?w=256&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
  ],
  "The Arabian Restaurant": [
    { name: "Mandi", price: 350, image:"https://th.bing.com/th/id/OIP.LmZ-CqqjRJeXJ5HNjpVgdAHaEK?w=333&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Chicken Mandi", price: 450, image:"https://th.bing.com/th/id/OIP.I-wqpA040dY2qcm063iRgAHaEi?w=308&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Mutton Mandi", price: 550, image:"https://th.bing.com/th/id/OIP.QxqBPiZIy3DU7LvYR4MWtQHaFj?w=238&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Beef Mandi", price: 600, image:"https://th.bing.com/th/id/OIP.-dzv3NQJJZeN4RFQHhSk6gHaD2?w=328&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Mutton Chops", price: 190, image:"https://th.bing.com/th/id/OIP.IB-Luo7-J-V3O8Dg_SES2QHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Shawarma", price: 120, image:"https://th.bing.com/th/id/OIP.54H7cFwCZ16yDWwWuOAz1wHaEK?w=284&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
  ],
  "Roshan": [
    { name: "Veg Meals", price: 130, image:"https://th.bing.com/th/id/OIP.12nWkhJ1Eoed_DedR6LqjgHaHN?w=186&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Non Veg Meals", price: 150, image:"https://th.bing.com/th/id/OIP.y9hHIhT-QBAx69P80YmssAHaHQ?w=207&h=203&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Chicken Fried Rice", price: 120, image:"https://th.bing.com/th/id/OIP.X9YFZcrBnmUpUsMm1UXbCgHaLH?w=186&h=341&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Grill Chicken", price: 180, image:"https://th.bing.com/th/id/OIP.jcLLZ8uIP1q9TjtUhmPFVwHaFj?w=208&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Barbeque", price: 190, image:"https://th.bing.com/th/id/OIP.nXzdCj1dRZcDu_s9Mdy8OAAAAA?w=278&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
  ],
  "Green Leaf": [
    { name: "Paneer Butter Masala", price: 150, image:"https://th.bing.com/th/id/OIP.Nb54wct_8wHAjVmFOPuchQHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Chicken Butter Masala", price: 180, image:"https://th.bing.com/th/id/OIP.mnig6CvcUq5pRoZ_aOURJQHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Mutton Rogan josh", price: 350, image:"https://th.bing.com/th/id/OIP.c_7BpR7mnRwm41uY1tgKEQHaLH?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Mirchi ka salan", price: 290, image:"https://th.bing.com/th/id/OIP.JfhN6hTNNxzaYIzRgXqJ1gHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Kulcha", price: 60, image:"https://th.bing.com/th/id/OIP.KIojuFXBEfT2KI0_p8mFuwHaFK?w=230&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Butter Garlic Naan", price: 50, image:"https://th.bing.com/th/id/OIP.NVVXifAAuWo1W_6mP7WE_wHaJQ?w=186&h=233&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
  ],
  "That Mallu Joint": [
    { name: "Kerala Meals", price: 220, image:"https://th.bing.com/th/id/OIP.8FkeGrnbB8wywTTU6TPT3QHaFj?w=258&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Appam", price: 100, image:"https://th.bing.com/th/id/OIP.bNIv-EsIaPpoxm5F8UAIqgHaE7?w=298&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Veg Mango Curry", price: 280, image:"https://tse2.mm.bing.net/th/id/OIP.WNHSe85RRi3ahizW5dMgcgHaHN?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Veg Meals", price: 200, image:"https://th.bing.com/th/id/OIP.M4dbGsGi6b1Fb8PuzJYXsgHaEr?w=186&h=117&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Tender Coconut Icecream", price: 340, image:"https://th.bing.com/th/id/OIP.x8A6ZbfVu7aP1FDS36m_ggHaHa?w=173&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
  ],
  "Geetham": [
    { name: "Rava Dosa", price: 110, image:"https://th.bing.com/th/id/OIP.UertHD3ncVlACKNtdCuKuQHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Onion Dosa", price: 100, image:"https://th.bing.com/th/id/OIP.nZ5LRDDMd0AHGn4h-43qMAHaLG?w=116&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Masal Dosa", price: 120, image:"https://th.bing.com/th/id/OIP.WIogq24ENzZKSCP1sn7PWwHaHa?w=118&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Ghee Podi Dosa", price: 140, image:"https://th.bing.com/th/id/OIP.b-QsXthsUy2jy2kn1I7qFQHaE7?w=279&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Onion Rava Dosa", price: 150, image:"https://th.bing.com/th/id/OIP.pNhLfBQydbL9GvHuyk0qxwHaJS?w=186&h=233&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
  ],
  "The Copper Kitchen": [
    { name: "Grill Chicken", price: 300, image:"https://th.bing.com/th/id/OIP.sCn3t_mhQB412hyECOLmLQHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Starters Platter", price: 600, image:"https://th.bing.com/th/id/OIP._DJn11HP3N-AcnCV3tbRCAHaFc?w=233&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Chicken Biryani Full", price: 390, image:"https://th.bing.com/th/id/OIP.Y5bgP3Mu0qrINkK5lXbWOAHaEK?w=333&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Mutton Biryani Full", price: 500, image:"https://th.bing.com/th?q=Mutton+Biryani+Chicken+Fry+HD&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" },
    { name: "Kili Parotta", price: 380, image:"https://th.bing.com/th/id/OIP.gMQMExx7FhBhtDfOMAVuuAHaEK?w=316&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
  ],
  "Tambura Pure Veg": [
    { name: "Special Veg Meals", price: 250, image:"https://th.bing.com/th/id/OIP.TdAZmVih3Nq1WYFlP2Rh4wHaE8?w=297&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Special Soth IndianThali", price: 290, image:"https://th.bing.com/th?q=South+Indian+Thali+Melbourne+City&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" },
    { name: "Special North Indian Thali", price: 320, image:"https://th.bing.com/th/id/OIP.YMiTQ6YtfoPXZU_y_nppEwHaE8?w=280&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Veg Thali", price: 200, image:"https://th.bing.com/th/id/OIP.OM5I_cWOsvBMIKJrFYoDDgHaFp?w=243&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Anthra Special Meals", price: 350, image:"https://th.bing.com/th/id/OIP.sh5ulhPQgQcnu7GTWfG5cwHaJq?w=144&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Special Kerala sadhya", price: 450, image:"https://th.bing.com/th/id/OIP.AtMtuc7ZBBQITyOxVeTrbQHaJ4?w=136&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
  ]
};
 


const allRestaurants = [
  {
    name: "Aswins Veg Restaurant",
    category: ["Idli", "Dosa"],
    image: "https://th.bing.com/th?q=Restaurant+Veg+Food+Images+HD"
  },
  {
    name: "Shri Sangeethas",
    category: ["Idli", "Dosa"],
    image: "https://th.bing.com/th?q=Restaurant+Veg+Food+Plate+Image"
  },
  {
    name: "Hotel Sai Karthik",
    category: ["Biryani", "Parotta"],
    image: "https://th.bing.com/th?q=Restaurant+Veg+Food+Items"
  }
];

function filterByCategory(category) {
  const container = document.getElementById("restaurantList");
  if (!container) return;

  container.innerHTML = "";

  const filtered = allRestaurants.filter(r =>
    r.category.includes(category)
  );

  filtered.forEach(r => {
    container.innerHTML += `
      <div class="card" onclick="openMenu('${r.name}')">
        <img src="${r.image}" class="card-img" />
        <div class="card-content">
          <h3>${r.name}</h3>
          <p>⭐ 4.2 • 20-30 mins</p>
        </div>
      </div>
    `;
  });
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const cartCount = document.getElementById("cartCount");
  if (cartCount) cartCount.innerText = count;
}

function loadCartPage() {
  const container = document.getElementById("cartItems");
  const totalElement = document.getElementById("totalPrice");
  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    container.innerHTML += `
      <div class="card-content">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="changeQty(${index}, -1)">-</button>
        ${item.quantity}
        <button onclick="changeQty(${index}, 1)">+</button>
      </div>
      <hr/>
    `;
  });

  totalElement.innerText = "₹" + total;
}

function changeQty(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCartPage();
  updateCartCount();
}

updateCartCount();