// Cafe Do'rame COMPLETE JavaScript - Category Filter Added

let currentCategory = 'Semua';
let cart = JSON.parse(localStorage.getItem('dorameCart')) || [];

const menuItems = [
  // Kopi (8 items)
  { id: 1, name: 'Kopi Tubruk', category: 'Kopi', price: 20000, img: 'https://images.unsplash.com/photo-1494314671902-399b18174975?w=500&q=80', desc: 'Kopi hitam tradisional jawa' },
  { id: 2, name: 'Kopi Jawa', category: 'Kopi', price: 25000, img: 'https://images.unsplash.com/photo-1572444653929-255e524db6e5?w=500&q=80', desc: 'Robusta asli Jawa Tengah' },
  { id: 3, name: 'Es Kopi Susu', category: 'Kopi', price: 22000, img: 'https://images.unsplash.com/photo-1572444652848-f6f2a1ab116e?w=500&q=80', desc: 'Kopi susu dingin creamy' },
  { id: 4, name: 'Kopi Susu Gula Aren', category: 'Kopi', price: 28000, img: 'https://images.unsplash.com/photo-1488737972082-2e6e8551a287?w=500&q=80', desc: 'Premium gula aren organik' },
  { id: 5, name: 'Cappuccino', category: 'Kopi', price: 32000, img: 'https://images.unsplash.com/photo-1512568400610-42fe60363160?w=500&q=80', desc: 'Espresso dengan busa susu' },
  { id: 6, name: 'Latte', category: 'Kopi', price: 35000, img: 'https://images.unsplash.com/photo-1572444652848-f6f2a1ab116e?w=500&q=80', desc: 'Silky steamed milk coffee' },
  { id: 7, name: 'Americano', category: 'Kopi', price: 26000, img: 'https://images.unsplash.com/photo-1488790996132-33c0d77c35e8?w=500&q=80', desc: 'Espresso dengan air panas' },
  { id: 8, name: 'Vietnam Drip', category: 'Kopi', price: 30000, img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55f?w=500&q=80', desc: 'Kopi phin authentic' },
  
  // Makanan (8 items)
  { id: 9, name: 'Nasi Goreng Spesial', category: 'Makanan', price: 35000, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80', desc: 'Telur mata sapi + ayam suwir' },
  { id: 10, name: 'Soto Ayam Lamongan', category: 'Makanan', price: 30000, img: 'https://images.unsplash.com/photo-1627298617189-9c38a8b4cb43?w=500&q=80', desc: 'Soto madura autentik' },
  { id: 11, name: 'Mie Goreng Jawa', category: 'Makanan', price: 32000, img: 'https://images.unsplash.com/photo-1592887815474-b614e89d38e5?w=500&q=80', desc: 'Mie bumbu kecap manis' },
  { id: 12, name: 'Gado-gado Betawi', category: 'Makanan', price: 28000, img: 'https://images.unsplash.com/photo-1615484473812-690470ee57c1?w=500&q=80', desc: 'Lontong sayur kacang' },
  { id: 13, name: 'Ayam Penyet', category: 'Makanan', price: 42000, img: 'https://images.unsplash.com/photo-1579373590356-6a413501d532?w=500&q=80', desc: 'Ayam goreng + sambal bawang' },
  { id: 14, name: 'Rendang Padang', category: 'Makanan', price: 45000, img: 'https://images.unsplash.com/photo-1582613562992-7de0e80cd7cd?w=500&q=80', desc: 'Daging sapi kuah santan pedas' },
  { id: 15, name: 'Ikan Bakar', category: 'Makanan', price: 38000, img: 'https://images.unsplash.com/photo-1625864446178-3620f872d6cc?w=500&q=80', desc: 'Ikan gurame bumbu rica' },
  { id: 16, name: 'Pepes Tahu', category: 'Makanan', price: 25000, img: 'https://images.unsplash.com/photo-1615484473812-690470ee57c1?w=500&q=80', desc: 'Tahu bumbu kemangi daun pisang' },
  
  // Minuman (6 items)
  { id: 17, name: 'Es Teh Manis', category: 'Minuman', price: 15000, img: 'https://images.unsplash.com/photo-1621399241083-7df6b398ae47?w=500&q=80', desc: 'Teh celup premium manis' },
  { id: 18, name: 'Es Jeruk Nipis', category: 'Minuman', price: 18000, img: 'https://images.unsplash.com/photo-1628306540004-7954d6a9c6a0?w=500&q=80', desc: 'Jeruk nipis segar madu' },
  { id: 19, name: 'Jus Alpukat', category: 'Minuman', price: 25000, img: 'https://images.unsplash.com/photo-1604456398649-785499337441?w=500&q=80', desc: 'Alpukat susu gula aren' },
  { id: 20, name: 'Es Cincau', category: 'Minuman', price: 20000, img: 'https://images.unsplash.com/photo-1621996346565-e3adc5a5d5d5?w=500&q=80', desc: 'Cincau hijau santan kelapa' },
  { id: 21, name: 'Es Dawet', category: 'Minuman', price: 22000, img: 'https://images.unsplash.com/photo-1615484473812-690470ee57c1?w=500&q=80', desc: 'Cendol gula merah santan' },
  { id: 22, name: 'Jus Markisa', category: 'Minuman', price: 24000, img: 'https://images.unsplash.com/photo-1571896349840-f0663c13e688?w=500&q=80', desc: 'Markisa segar madu' },
  
  // Cemilan (6 items)
  { id: 23, name: 'Klepon Pandan', category: 'Cemilan', price: 20000, img: 'https://images.unsplash.com/photo-1541636415281-96b3f53b965d?w=500&q=80', desc: 'Klepon gula merah kelapa' },
  { id: 24, name: 'Kue Cubit Coklat', category: 'Cemilan', price: 18000, img: 'https://images.unsplash.com/photo-1544435432-7e88aecf2ce9?w=500&q=80', desc: 'Mini waffle topping keju' },
  { id: 25, name: 'Pisang Goreng', category: 'Cemilan', price: 15000, img: 'https://images.unsplash.com/photo-1534624283978-f8f092f284b5?w=500&q=80', desc: 'Pisang raja premium' },
  { id: 26, name: 'Cireng Pedas', category: 'Cemilan', price: 16000, img: 'https://images.unsplash.com/photo-1621996346565-e3adc5a5d5d5?w=500&q=80', desc: 'Tepung kanji bumbu rujak' },
  { id: 27, name: 'Martabak Manis', category: 'Cemilan', price: 35000, img: 'https://images.unsplash.com/photo-1573761543616-9b1cb1e6fe43?w=500&q=80', desc: 'Martabak coklat keju kental' },
  { id: 28, name: 'Getuk Lindri', category: 'Cemilan', price: 22000, img: 'https://images.unsplash.com/photo-1615484473812-690470ee57c1?w=500&q=80', desc: 'Getuk singkong gula merah' }
];

function saveCart() {
  localStorage.setItem('dorameCart', JSON.stringify(cart));
}

function addToCart(id) {
  const item = menuItems.find(item => item.id === id);
  const existing = cart.find(cartItem => cartItem.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({...item, quantity: 1});
  }
  saveCart();
  updateCartDisplay();
  alert(`${item.name} ditambahkan!`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartDisplay();
}

function updateQuantity(id, change) {
  const item = cart.find(item => item.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) removeFromCart(id);
    else saveCart();
    updateCartDisplay();
  }
}

function getTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartDisplay() {
  const cartContainer = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  const emptyMsg = document.getElementById('cart-empty');
  const checkoutBtn = document.getElementById('checkout-btn');
  if (cartContainer) {
    if (cart.length === 0) {
      cartContainer.innerHTML = '';
      if (emptyMsg) emptyMsg.style.display = 'block';
      if (checkoutBtn) checkoutBtn.style.display = 'none';
    } else {
      cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
          <span>${item.name}</span>
          <div>
            <button onclick="updateQuantity(${item.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity(${item.id}, 1)">+</button>
            <button onclick="removeFromCart(${item.id})" style="background:#e74c3c;color:white;border:none;border-radius:50%;width:30px;height:30px;margin-left:10px;">×</button>
          </div>
          <small>Rp${(item.price * item.quantity).toLocaleString()}</small>
        </div>
      `).join('');
      if (emptyMsg) emptyMsg.style.display = 'none';
      if (checkoutBtn) checkoutBtn.style.display = 'block';
    }
    if (totalEl) totalEl.textContent = `Total: Rp${getTotal().toLocaleString()}`;
  }
  document.querySelectorAll('#cart-count').forEach(el => {
    el.textContent = `(${cart.reduce((sum, item) => sum + item.quantity, 0)})`;
  });
}

function renderMenu(containerId, category = currentCategory) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let items = category === 'Semua' ? menuItems : menuItems.filter(item => item.category === category);
  container.innerHTML = items.map(item => `
    <div class="card">
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      <div class="card-content">
        <h3>${item.name}</h3>
        <p>${item.category} | ${item.desc}</p>
        <div class="price">Rp${item.price.toLocaleString()}</div>
        <button class="add-to-cart" onclick="addToCart(${item.id})">Tambah</button>
      </div>
    </div>
  `).join('');
}

function setCategory(cat) {
  currentCategory = cat;
  renderMenu('menu-grid', cat);
  // Update button styles
  document.querySelectorAll('[onclick^="setCategory"]').forEach(btn => btn.style.background = '');
  event.target.style.background = '#D2691E';
  event.target.style.color = 'white';
}

function toggleMobileMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

function processOrder() {
  const name = document.getElementById('customer-name')?.value || '';
  const address = document.getElementById('address')?.value || '';
  const payment = document.getElementById('payment')?.value || '';
  if (!name || !address || cart.length === 0) return alert('Lengkapi data!');
  const details = cart.map(item => `${item.name} x${item.quantity}`).join('\\n');
  const msg = `Pesanan Cafe Do'rame:\\n${details}\\nTotal: Rp${getTotal().toLocaleString()}\\n${name}\\n${address}\\n${payment}`;
  window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`);
  cart = [];
  saveCart();
  updateCartDisplay();
  alert('Pesanan dikirim!');
}

function validateForm(formId) {
  document.getElementById(formId)?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Pesan terkirim!');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartDisplay();
  document.querySelector('.hamburger')?.addEventListener('click', toggleMobileMenu);
  if (document.getElementById('featured-menu')) renderMenu('featured-menu', 'Kopi');
  if (document.getElementById('menu-grid')) renderMenu('menu-grid');
  
  document.getElementById('checkout-form')?.addEventListener('submit', e => {
    e.preventDefault();
    processOrder();
  });
});

