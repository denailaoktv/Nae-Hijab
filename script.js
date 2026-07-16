/* ---------- 1. DATA PRODUK ---------- */
const PRODUCTS = [
    {
        id: "p01",
        name: "Bergo Instan Daily",
        category: "Instan",
        price: 42900,
        color: "Nude",
        desc: "Hijab bergo praktis dipakai dalam hitungan detik, dengan bahan tencel premium dan lembut, adem, dan jatuh natural diwajah.",
        size: "s",
        img: "image/bergo instan tencel.jpeg"
    },
    {
        id: "p02",
        name: "Inner Ciput Arab",
        category: "aksesoris",
        price: 24900,
        color: "Ivory",
        desc: "Inner karet dengan bahan kaos rayon yang lembut, adem dan elastis mengikuti bentuk kepala. solusi praktis unutk dalaman hijab sehari hari. ",
        material: "Kaos Rayon",
        img: "image/inner hijab arab.jpeg"
    },
    {
        id: "p03",
        name: "Airy Pashmina",
        category: "pashmina",
        price: 54800,
        color: "hitam",
        desc: "Bahan kaos lembut dan ringan, adem dipakai seharian tanpa bikin gerah.",
        size: "180 x 65 cm",
        img: "image/pashmina kaos.jpg"
    },
    {
        id: "p04",
        name: "viscose cerula print",
        category: "pashmina",
        price: 74900,
        color: "Ocean Mist",
        desc: "Motif biru elegan dengan jatuh kain yang halus, cocok untuk gaya casual maupun formal.",
        material: "viscose Print",
        size: "180 x 65 cm",
        img: "image/pashmina print biru.jpg"
    },
    {
        id: "p05",
        name: "Rose Shawl",
        category: "Pashmina",
        price: 62990,
        color: "Coral Rose",
        desc: "Warna pink lembut dengan tekstur shawl yang jatuh natural, tampil peminim dan anggun.",
        material: "Shawl premium",
        size: "190 x 70 cm",
        img: "image/pashmina shawl arabian.jpg"
    },
    {
        id: "p06",
        name: "Shine Pin Magnet",
        category: "Aksesoris",
        price: 12800,
        color: "silver",
        desc: "Aksesoris hijab berkilau tanpa perlu peniti, praktis dan aman dipakai.",
        size: "diameter 1,5 cm",
        img: "image/pin glossy.jpeg"
    },
    {
        id: "p07",
        name: "Velvet Pin Magnet",
        category: "Aksesoris",
        price: 12800,
        color: "coklat muda",
        desc: "Tampilan Doff legan, magnet kuat menahan hijab tetap rapi sepanjang hari.",
        size: "Diameter 1,5 cm",
        img: "image/pin mate classic.jpeg"
    },
    {
        id: "p08",
        name: "Segiempat Basic",
        category: "Segiempat",
        price: 34900,
        color: "Nude Blush",
        desc: "Hijab segiempat polos serbaguna, mudah dipadupadankan untuk aktivitas sehari hari",
        size: "110 x 110 cm",
        img: "image/segiempat basic.jpg"
    },
    {
        id: "p09",
        name: "Segiempat Motif",
        category: "segiempat",
        price: 34900,
        color: "Pastel bloom",
        desc: "Motif cantik dengan cerita disetiap corak, menambah karakter pada penampilan",
        size: "110 x 110 cm",
        img: "image/segiempat print.jpg"
    },
    {
        id: "p10",
        name: "Pure viscose series",
        category: "pashmina",
        price: 49900,
        color: "basic",
        desc: "Bahan viscose Lembut dan jatuh sempurna, nyaman dipakai dalam berbagai suasana",
        size: "180 x 65 cm",
        img: "image/viscose basic.jpg"
    }
];

const SHIPPING_FEE = 12000;
const CART_KEY = "nirmala_cart";

/* ---------- 2. UTILITAS ---------- */
const rupiah = (n) => "Rp " + n.toLocaleString("id-ID");

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

/* Dummy Google Analytics event tracker.
   Metrik yang dipantau di produksi:
   - view_item          : produk dilihat di katalog / modal detail
   - add_to_cart        : penambahan item ke keranjang (menuju conversion rate)
   - begin_checkout     : membuka form checkout (funnel drop-off)
   - purchase           : checkout berhasil (conversion, revenue per order)
   - search             : kata kunci pencarian (produk populer, kata kunci nihil hasil)
   Semua event ini akan dipakai untuk memantau bounce rate, conversion rate,
   average order value, dan produk dengan performa terbaik/terburuk. */
function trackEvent(eventName, params = {}) {
    if (typeof gtag === "function") {
        gtag("event", eventName, params);
    }
    console.log("[GA dummy]", eventName, params);
}

/* ---------- STATE ---------- */
let state = {
    category: "all",
    search: "",
    sort: "default",
    cart: JSON.parse(localStorage.getItem(CART_KEY) || "[]")
};

/* ---------- 3. RENDER KATALOG ---------- */
const grid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");

function getFilteredProducts() {
    let list = PRODUCTS.filter(p => {
        const matchCategory = state.category === "all" || p.category === state.category;
        const matchSearch = (p.name + " " + p.color + " " + p.category)
            .toLowerCase()
            .includes(state.search.toLowerCase());
        return matchCategory && matchSearch;
    });

    if (state.sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (state.sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (state.sort === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
}

function renderGrid() {
    const list = getFilteredProducts();
    grid.innerHTML = "";
    emptyState.hidden = list.length !== 0;

    list.forEach(p => {
        const card = document.createElement("article");
        card.className = "product-card";
        card.innerHTML = `
      <div class="card-media" data-id="${p.id}">
        <span class="card-tag">${p.category}</span>
        <img src="${p.img}" alt="${p.name} warna ${p.color}" loading="lazy">
      </div>
      <div class="card-body">
        <span class="card-cat">${p.color}</span>
        <h3 class="card-name" data-id="${p.id}">${p.name}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-bottom">
          <span class="card-price">${rupiah(p.price)}</span>
          <button class="card-add" data-id="${p.id}" aria-label="Tambah ke keranjang">+</button>
        </div>
      </div>
    `;
        grid.appendChild(card);
    });

    observeCards();

    grid.querySelectorAll(".card-media, .card-name").forEach(el => {
        el.addEventListener("click", () => openProductModal(el.dataset.id));
    });
    grid.querySelectorAll(".card-add").forEach(btn => {
        btn.addEventListener("click", () => addToCart(btn.dataset.id, 1));
    });
}

/* Filter chips */
document.getElementById("categoryFilters").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    state.category = chip.dataset.category;
    renderGrid();
});

/* Search */
const searchInput = document.getElementById("searchInput");
let searchTimer;
searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    renderGrid();
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
        if (state.search.trim()) trackEvent("search", { search_term: state.search });
    }, 500);
});

/* Sort */
document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderGrid();
});

/* ---------- 4. MODAL DETAIL PRODUK ---------- */
const productModal = document.getElementById("productModal");
const productModalBox = document.getElementById("productModalBox");

function openProductModal(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    trackEvent("view_item", { item_id: p.id, item_name: p.name });

    productModalBox.innerHTML = `
    <button class="close-btn modal-close" id="closeProductModal" aria-label="Tutup">&times;</button>
    <div class="detail-layout">
      <div class="detail-media"><img src="${p.img}" alt="${p.name}"></div>
      <div class="detail-info">
        <span class="card-cat">${p.category} · ${p.color}</span>
        <h2>${p.name}</h2>
        <span class="detail-price">${rupiah(p.price)}</span>
        <p class="detail-desc">${p.desc}</p>
        <div class="detail-meta">
          <span><strong>Bahan:</strong> ${p.material}</span>
          <span><strong>Ukuran:</strong> ${p.size}</span>
        </div>
        <div class="detail-qty">
          <div class="qty-control">
            <button type="button" id="modalMinus">−</button>
            <span id="modalQty">1</span>
            <button type="button" id="modalPlus">+</button>
          </div>
          <button class="btn btn-primary" id="modalAddToCart">Tambah ke Keranjang</button>
        </div>
      </div>
    </div>
  `;

    let qty = 1;
    const qtySpan = productModalBox.querySelector("#modalQty");
    productModalBox.querySelector("#modalMinus").addEventListener("click", () => {
        qty = Math.max(1, qty - 1);
        qtySpan.textContent = qty;
    });
    productModalBox.querySelector("#modalPlus").addEventListener("click", () => {
        qty += 1;
        qtySpan.textContent = qty;
    });
    productModalBox.querySelector("#modalAddToCart").addEventListener("click", () => {
        addToCart(p.id, qty);
        closeModal(productModal);
    });
    productModalBox.querySelector("#closeProductModal").addEventListener("click", () => closeModal(productModal));

    openModal(productModal);
}

function openModal(modal) { modal.classList.add("open"); document.body.style.overflow = "hidden"; }
function closeModal(modal) { modal.classList.remove("open"); document.body.style.overflow = ""; }

productModal.addEventListener("click", (e) => { if (e.target === productModal) closeModal(productModal); });

/* ---------- 5. KERANJANG BELANJA ---------- */
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const cartItemsEl = document.getElementById("cartItems");
const cartCountEl = document.getElementById("cartCount");

function saveCart() { localStorage.setItem(CART_KEY, JSON.stringify(state.cart)); }

function addToCart(id, qty) {
    const existing = state.cart.find(item => item.id === id);
    if (existing) {
        existing.qty += qty;
    } else {
        state.cart.push({ id, qty });
    }
    saveCart();
    renderCart();
    openCart();
    const p = PRODUCTS.find(x => x.id === id);
    trackEvent("add_to_cart", { item_id: id, item_name: p?.name, quantity: qty });
    showToast(`${p ? p.name : "Produk"} ditambahkan ke keranjang`);
}

function updateQty(id, delta) {
    const item = state.cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) state.cart = state.cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
}

function removeFromCart(id) {
    state.cart = state.cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
}

function getCartDetails() {
    return state.cart
        .map(item => {
            const p = PRODUCTS.find(x => x.id === item.id);
            if (!p) return null;
            return { ...p, qty: item.qty, lineTotal: p.price * item.qty };
        })
        .filter(Boolean);
}

function renderCart() {
    const details = getCartDetails();
    const totalQty = details.reduce((sum, d) => sum + d.qty, 0);
    cartCountEl.textContent = totalQty;

    if (details.length === 0) {
        cartItemsEl.innerHTML = `<p class="cart-empty">Keranjangmu masih kosong.<br>Yuk mulai pilih hijab favoritmu.</p>`;
    } else {
        cartItemsEl.innerHTML = details.map(d => `
      <div class="cart-item" data-id="${d.id}">
        <img src="${d.img}" alt="${d.name}">
        <div class="cart-item-info">
          <span class="cart-item-name">${d.name}</span>
          <span class="cart-item-cat">${d.color}</span>
          <div class="cart-item-bottom">
            <div class="qty-control">
              <button type="button" class="qty-minus" data-id="${d.id}">−</button>
              <span>${d.qty}</span>
              <button type="button" class="qty-plus" data-id="${d.id}">+</button>
            </div>
            <span class="cart-item-price">${rupiah(d.lineTotal)}</span>
          </div>
          <button type="button" class="remove-item" data-id="${d.id}">Hapus</button>
        </div>
      </div>
    `).join("");
    }

    const subtotal = details.reduce((sum, d) => sum + d.lineTotal, 0);
    const shipping = details.length ? SHIPPING_FEE : 0;
    document.getElementById("cartSubtotal").textContent = rupiah(subtotal);
    document.getElementById("cartShipping").textContent = rupiah(shipping);
    document.getElementById("cartTotal").textContent = rupiah(subtotal + shipping);
    document.getElementById("checkoutBtn").disabled = details.length === 0;

    cartItemsEl.querySelectorAll(".qty-minus").forEach(b => b.addEventListener("click", () => updateQty(b.dataset.id, -1)));
    cartItemsEl.querySelectorAll(".qty-plus").forEach(b => b.addEventListener("click", () => updateQty(b.dataset.id, 1)));
    cartItemsEl.querySelectorAll(".remove-item").forEach(b => b.addEventListener("click", () => removeFromCart(b.dataset.id)));
}

function openCart() { cartDrawer.classList.add("open"); overlay.classList.add("show"); }
function closeCart() { cartDrawer.classList.remove("open"); overlay.classList.remove("show"); }

document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", () => { closeCart(); closeModal(checkoutModal); closeModal(productModal); });

/* ---------- 6. CHECKOUT ---------- */
const checkoutModal = document.getElementById("checkoutModal");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutLayout = document.getElementById("checkoutLayout");
const checkoutSuccess = document.getElementById("checkoutSuccess");

document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (state.cart.length === 0) return;
    renderCheckoutSummary();
    checkoutLayout.hidden = false;
    checkoutSuccess.hidden = true;
    closeCart();
    openModal(checkoutModal);
    trackEvent("begin_checkout", { value: getCartDetails().reduce((s, d) => s + d.lineTotal, 0) });
});

document.getElementById("closeCheckout").addEventListener("click", () => closeModal(checkoutModal));
checkoutModal.addEventListener("click", (e) => { if (e.target === checkoutModal) closeModal(checkoutModal); });

function renderCheckoutSummary() {
    const details = getCartDetails();
    const subtotal = details.reduce((sum, d) => sum + d.lineTotal, 0);
    const shipping = details.length ? SHIPPING_FEE : 0;

    document.getElementById("summaryItems").innerHTML = details.map(d => `
    <div class="summary-item"><span>${d.name} × ${d.qty}</span><span>${rupiah(d.lineTotal)}</span></div>
  `).join("");
    document.getElementById("summarySubtotal").textContent = rupiah(subtotal);
    document.getElementById("summaryShipping").textContent = rupiah(shipping);
    document.getElementById("summaryTotal").textContent = rupiah(subtotal + shipping);
}

/* Validasi form sederhana */
const validators = {
    fullName: (v) => v.trim().length >= 3 || "Nama minimal 3 karakter",
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Format email tidak valid",
    phone: (v) => /^0[0-9]{9,13}$/.test(v.trim()) || "Nomor HP harus diawali 0, 10–14 digit",
    address: (v) => v.trim().length >= 10 || "Alamat terlalu singkat, lengkapi detailnya",
    city: (v) => v.trim().length >= 2 || "Kota wajib diisi",
    postal: (v) => /^[0-9]{5}$/.test(v.trim()) || "Kode pos harus 5 digit angka"
};

function validateField(name, value) {
    const rule = validators[name];
    if (!rule) return true;
    const result = rule(value);
    const errorEl = checkoutForm.querySelector(`.form-error[data-for="${name}"]`);
    const row = errorEl ? errorEl.closest(".form-row") : null;
    if (result === true) {
        if (errorEl) errorEl.textContent = "";
        if (row) row.classList.remove("invalid");
        return true;
    } else {
        if (errorEl) errorEl.textContent = result;
        if (row) row.classList.add("invalid");
        return false;
    }
}

Object.keys(validators).forEach(name => {
    const field = checkoutForm.querySelector(`[name="${name}"]`);
    if (field) field.addEventListener("blur", () => validateField(name, field.value));
});

checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    Object.keys(validators).forEach(name => {
        const field = checkoutForm.querySelector(`[name="${name}"]`);
        if (!validateField(name, field.value)) valid = false;
    });
    if (!valid) {
        showToast("Periksa kembali data yang belum sesuai");
        return;
    }

    const details = getCartDetails();
    const total = details.reduce((s, d) => s + d.lineTotal, 0) + SHIPPING_FEE;
    const orderCode = "NH" + Date.now().toString().slice(-8);
    const payment = checkoutForm.querySelector('input[name="payment"]:checked').value;

    trackEvent("purchase", { transaction_id: orderCode, value: total, payment_method: payment });

    document.getElementById("orderCode").textContent = orderCode;
    checkoutLayout.hidden = true;
    checkoutSuccess.hidden = false;

    state.cart = [];
    saveCart();
    renderCart();
    checkoutForm.reset();
});

document.getElementById("backToShopping").addEventListener("click", () => closeModal(checkoutModal));

/* ---------- 7. UI UMUM ---------- */
/* Mobile menu */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

/* Scroll reveal untuk kartu produk */
function observeCards() {
    const cards = document.querySelectorAll(".product-card:not(.in-view)");
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    cards.forEach(c => io.observe(c));
}

/* Init */
renderGrid();
renderCart();