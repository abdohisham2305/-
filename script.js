const products = [
    {
        id: 1,
        name: "كنبة ركنة مودرن فاخرة",
        category: "living",
        categoryName: "غرف المعيشة",
        price: 29800,
        oldPrice: 38200,
        discount: 22,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
        description: "كنبة ركنة بتصميم عصري وألوان هادئة، مناسبة لغرف المعيشة والمساحات الواسعة."
    },
    {
        id: 2,
        name: "سرير مودرن فاخر",
        category: "bedroom",
        categoryName: "غرف النوم",
        price: 12500,
        oldPrice: 15800,
        discount: 21,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
        description: "سرير أنيق بخطوط بسيطة وتصميم راقٍ يمنح غرفة النوم مظهراً مميزاً."
    },
    {
        id: 3,
        name: "طقم غرفة سفرة 7 قطع",
        category: "dining",
        categoryName: "غرف السفرة",
        price: 32900,
        oldPrice: 41900,
        discount: 21,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
        description: "طقم سفرة أنيق مكون من طاولة و6 كراسي، مثالي للمنازل العصرية."
    },
    {
        id: 4,
        name: "مكتب خشبي عصري",
        category: "office",
        categoryName: "المكاتب",
        price: 6800,
        oldPrice: 8500,
        discount: 20,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
        description: "مكتب عملي وأنيق للعمل والدراسة مع تصميم بسيط يناسب المساحات المختلفة."
    },
    {
        id: 5,
        name: "طاولة قهوة راقية",
        category: "living",
        categoryName: "غرف المعيشة",
        price: 4900,
        oldPrice: 6200,
        discount: 21,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
        description: "طاولة قهوة بتصميم راقٍ تجمع بين الخشب والتفاصيل العصرية."
    },
    {
        id: 6,
        name: "دولاب ملابس كبير",
        category: "bedroom",
        categoryName: "غرف النوم",
        price: 17900,
        oldPrice: 22500,
        discount: 20,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
        description: "دولاب واسع بتصميم أنيق ومساحات تخزين متعددة."
    },
    {
        id: 7,
        name: "كرسي سفرة فاخر",
        category: "dining",
        categoryName: "غرف السفرة",
        price: 2300,
        oldPrice: 3000,
        discount: 23,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
        description: "كرسي مريح بتنجيد فاخر وهيكل متين مناسب لغرف السفرة."
    },
    {
        id: 8,
        name: "مرآة ديكور ذهبية",
        category: "decor",
        categoryName: "الديكور",
        price: 2800,
        oldPrice: 3500,
        discount: 20,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
        description: "مرآة أنيقة تضيف لمسة فخامة وأناقة إلى المكان."
    },
    {
        id: 9,
        name: "كرسي مكتب مريح",
        category: "office",
        categoryName: "المكاتب",
        price: 4200,
        oldPrice: 5200,
        discount: 19,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=800&q=80",
        description: "كرسي مكتب مريح للاستخدام الطويل مع تصميم عصري."
    },
    {
        id: 10,
        name: "جلسة خارجية أنيقة",
        category: "outdoor",
        categoryName: "أثاث خارجي",
        price: 18500,
        oldPrice: 23000,
        discount: 20,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        description: "جلسة خارجية أنيقة مناسبة للحدائق والبلكونات والتراسات."
    },
    {
        id: 11,
        name: "وحدة تلفزيون مودرن",
        category: "living",
        categoryName: "غرف المعيشة",
        price: 7200,
        oldPrice: 8900,
        discount: 19,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
        description: "وحدة تلفزيون بتصميم عصري ومساحات تخزين عملية."
    },
    {
        id: 12,
        name: "أباجورة ديكور فاخرة",
        category: "decor",
        categoryName: "الديكور",
        price: 1200,
        oldPrice: 1600,
        discount: 25,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
        description: "أباجورة أنيقة لإضاءة هادئة ولمسة ديكور مميزة."
    },
    {
        id: 13,
        name: "كنبة مودرن 3 مقاعد",
        category: "living",
        categoryName: "غرف المعيشة",
        price: 21500,
        oldPrice: 27000,
        discount: 20,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=80",
        description: "كنبة مريحة بثلاثة مقاعد وتنجيد ناعم."
    },
    {
        id: 14,
        name: "فوتيه مفرد أنيق",
        category: "living",
        categoryName: "غرف المعيشة",
        price: 5400,
        oldPrice: 6800,
        discount: 21,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
        description: "فوتيه مفرد بتصميم عصري يناسب الأركان."
    },
    {
        id: 15,
        name: "ترابيزة جانبية خشب",
        category: "living",
        categoryName: "غرف المعيشة",
        price: 1800,
        oldPrice: 2300,
        discount: 22,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
        description: "ترابيزة جانبية صغيرة وعملية بلمسة خشبية."
    },
    {
        id: 16,
        name: "غرفة نوم كاملة مودرن",
        category: "bedroom",
        categoryName: "غرف النوم",
        price: 58000,
        oldPrice: 72000,
        discount: 19,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
        description: "غرفة نوم متكاملة بتصميم راقٍ وخامات متينة."
    },
    {
        id: 17,
        name: "تسريحة بمرآة",
        category: "bedroom",
        categoryName: "غرف النوم",
        price: 6900,
        oldPrice: 8700,
        discount: 21,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        description: "تسريحة أنيقة بمرآة ومساحات تخزين."
    },
    {
        id: 18,
        name: "كومودينو خشبي",
        category: "bedroom",
        categoryName: "غرف النوم",
        price: 2100,
        oldPrice: 2700,
        discount: 22,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
        description: "كومودينو عملي بأدراج واسعة."
    },
    {
        id: 19,
        name: "ترابيزة سفرة 8 كراسي",
        category: "dining",
        categoryName: "غرف السفرة",
        price: 44500,
        oldPrice: 55000,
        discount: 19,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
        description: "سفرة واسعة تناسب العائلات والمناسبات."
    },
    {
        id: 20,
        name: "نيش وبوفيه سفرة",
        category: "dining",
        categoryName: "غرف السفرة",
        price: 15800,
        oldPrice: 19500,
        discount: 19,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        description: "بوفيه أنيق لعرض الأطباق والتخزين."
    },
    {
        id: 21,
        name: "مكتبة خشبية عصرية",
        category: "office",
        categoryName: "المكاتب",
        price: 5600,
        oldPrice: 7000,
        discount: 20,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
        description: "مكتبة بأرفف متعددة للكتب والديكور."
    },
    {
        id: 22,
        name: "مكتب إداري كبير",
        category: "office",
        categoryName: "المكاتب",
        price: 13900,
        oldPrice: 17500,
        discount: 21,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
        description: "مكتب إداري واسع بتصميم احترافي."
    },
    {
        id: 23,
        name: "لوحة جدارية مودرن",
        category: "decor",
        categoryName: "الديكور",
        price: 950,
        oldPrice: 1300,
        discount: 27,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
        description: "لوحة جدارية تضيف حيوية للمكان."
    },
    {
        id: 24,
        name: "مزهرية سيراميك",
        category: "decor",
        categoryName: "الديكور",
        price: 650,
        oldPrice: 900,
        discount: 28,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=800&q=80",
        description: "مزهرية سيراميك بتصميم بسيط وأنيق."
    },
    {
        id: 25,
        name: "ساعة حائط ديكور",
        category: "decor",
        categoryName: "الديكور",
        price: 780,
        oldPrice: 1050,
        discount: 26,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80",
        description: "ساعة حائط عصرية لمسة جمال للجدار."
    },
    {
        id: 26,
        name: "طقم جلسة حديقة 4 قطع",
        category: "outdoor",
        categoryName: "أثاث خارجي",
        price: 14500,
        oldPrice: 18000,
        discount: 19,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        description: "طقم جلسة مقاوم للعوامل الجوية للحدائق."
    },
    {
        id: 27,
        name: "أرجوحة بلكونة",
        category: "outdoor",
        categoryName: "أثاث خارجي",
        price: 6200,
        oldPrice: 7800,
        discount: 21,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
        description: "أرجوحة مريحة للبلكونات والتراسات."
    }
];

/* ===== إعدادات ===== */
const WHATSAPP_NUMBER = "201094058019"; // 01094058019 بصيغة دولية

const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="#f4eff9"/><text x="50%" y="50%" font-size="40" text-anchor="middle" fill="#a78bfa" font-family="sans-serif">تامر للأثاث</text></svg>'
);

function load(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; }
    catch (e) { return fallback; }
}
function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}

let cart = load("tamerCart", []);
let favorites = load("tamerFavorites", []);
let currentCategory = "all";

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");

function formatPrice(price) {
    return Number(price).toLocaleString("ar-EG") + " ج.م";
}
function saveData() {
    save("tamerCart", cart);
    save("tamerFavorites", favorites);
}

function showMessage(message) {
    const old = document.querySelector(".site-message");
    if (old) old.remove();
    const box = document.createElement("div");
    box.className = "site-message";
    box.innerHTML = `<span>✓</span><strong>${message}</strong>`;
    Object.assign(box.style, {
        position: "fixed", top: "25px", right: "25px", zIndex: "99999",
        background: "#7c3aed", color: "#fff", padding: "15px 20px",
        borderRadius: "14px", boxShadow: "0 10px 30px rgba(0,0,0,.18)",
        display: "flex", gap: "10px", alignItems: "center", fontSize: "14px"
    });
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 2200);
}

/* ===== عرض المنتجات (صورة + الاسم + السعر + زر السلة) ===== */
function displayProducts(list = products) {
    if (!productsGrid) return;
    productsGrid.innerHTML = "";

    if (!list.length) {
        productsGrid.innerHTML = `
            <div class="empty-cart" style="grid-column:1/-1">
                <div style="font-size:50px">🔎</div>
                <h3>لم يتم العثور على منتجات</h3>
                <p>جرب البحث بكلمة مختلفة.</p>
            </div>`;
        return;
    }

    list.forEach(product => {
        const isFav = favorites.includes(product.id);
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy"
                     style="cursor:zoom-in"
                     onclick="openImageModal(${product.id})"
                     onerror="this.onerror=null;this.src=PLACEHOLDER">
                <span class="discount">-${product.discount}%</span>
                <button class="favorite" onclick="toggleFavorite(${product.id})"
                        aria-label="إضافة للمفضلة"
                        style="color:${isFav ? "#ec4899" : ""};">${isFav ? "♥" : "♡"}</button>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="price">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    <span class="old-price">${formatPrice(product.oldPrice)}</span>
                </div>
                <button class="add-cart" onclick="addToCart(${product.id})">🛒 إضافة إلى السلة</button>
            </div>`;
        productsGrid.appendChild(card);
    });
}

function applyFilters() {
    let result = products;
    if (currentCategory !== "all") {
        result = result.filter(p => p.category === currentCategory);
    }
    const q = searchInput ? searchInput.value.trim().toLowerCase() : "";
    if (q) {
        result = result.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.categoryName.toLowerCase().includes(q));
    }
    displayProducts(result);
}

function filterCategory(category) {
    currentCategory = category;
    document.querySelectorAll(".filter-buttons button").forEach(btn => {
        const match = btn.getAttribute("onclick") === `filterCategory('${category}')`;
        btn.classList.toggle("active", match);
    });
    applyFilters();
    scrollToProducts();
}

function searchProducts() { applyFilters(); }

if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
    searchInput.addEventListener("keydown", e => {
        if (e.key === "Enter") { applyFilters(); scrollToProducts(); }
    });
}

/* ===== تكبير الصورة ===== */
function openImageModal(id) {
    const p = products.find(x => x.id === id);
    const modal = document.getElementById("imageModal");
    const img = document.getElementById("popupImage");
    if (!p || !modal || !img) return;
    img.src = p.image;
    img.alt = p.name;
    modal.classList.add("show");
}
function closeImageModal() {
    const modal = document.getElementById("imageModal");
    if (modal) modal.classList.remove("show");
}

/* ===== السلة ===== */
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const existing = cart.find(i => i.id === id);
    if (existing) existing.quantity += 1;
    else cart.push({ ...product, quantity: 1 });
    saveData();
    updateCart();
    showMessage("تمت إضافة المنتج إلى السلة");
}
function increaseQuantity(id) {
    const item = cart.find(p => p.id === id);
    if (!item) return;
    item.quantity += 1;
    saveData(); updateCart();
}
function decreaseQuantity(id) {
    const item = cart.find(p => p.id === id);
    if (!item) return;
    if (item.quantity > 1) item.quantity -= 1;
    else cart = cart.filter(p => p.id !== id);
    saveData(); updateCart();
}
function removeFromCart(id) {
    cart = cart.filter(p => p.id !== id);
    saveData(); updateCart();
    showMessage("تم حذف المنتج من السلة");
}

function cartTotalValue() {
    return cart.reduce((s, i) => s + i.price * i.quantity, 0);
}

function updateCart() {
    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    if (!cartCount || !cartItems || !cartTotal) return;

    cartCount.textContent = cart.reduce((s, i) => s + i.quantity, 0);

    if (!cart.length) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div style="font-size:50px">🛒</div>
                <h3>السلة فارغة</h3>
                <p>أضف بعض المنتجات لتبدأ التسوق.</p>
            </div>`;
        cartTotal.textContent = "0 ج.م";
        return;
    }

    cartItems.innerHTML = "";
    cart.forEach(item => {
        const el = document.createElement("div");
        el.className = "cart-item";
        const btn = "width:30px;height:30px;border:0;border-radius:8px;cursor:pointer;";
        el.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src=PLACEHOLDER">
            <div style="flex:1">
                <h4>${item.name}</h4>
                <p>${formatPrice(item.price)}</p>
                <div style="display:flex;align-items:center;gap:8px;margin-top:8px;">
                    <button onclick="decreaseQuantity(${item.id})" style="${btn}">−</button>
                    <strong>${item.quantity}</strong>
                    <button onclick="increaseQuantity(${item.id})" style="${btn}">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">حذف</button>
            </div>`;
        cartItems.appendChild(el);
    });
    cartTotal.textContent = formatPrice(cartTotalValue());
}

function openCart() {
    document.getElementById("cartSidebar")?.classList.add("show");
    document.getElementById("cartOverlay")?.classList.add("show");
}
function closeCart() {
    document.getElementById("cartSidebar")?.classList.remove("show");
    document.getElementById("cartOverlay")?.classList.remove("show");
}

/* ===== إتمام الطلب → واتساب (بدون تسجيل دخول) ===== */
function checkout() {
    if (!cart.length) {
        showMessage("السلة فارغة");
        return;
    }
    closeCart();
    renderCheckout();
    document.getElementById("checkoutModal")?.classList.add("show");
}
function closeCheckout() {
    document.getElementById("checkoutModal")?.classList.remove("show");
}

function renderCheckout() {
    const content = document.getElementById("checkoutContent");
    if (!content) return;
    content.innerHTML = `
        <h2 class="auth-title">إتمام الطلب 🛍️</h2>
        <div class="checkout-total">
            <strong>إجمالي الطلب:</strong>
            <h2 style="color:#7c3aed">${formatPrice(cartTotalValue())}</h2>
        </div>
        <form class="checkout-form" onsubmit="sendOrderToWhatsApp(event)">
            <input id="customerName" type="text" placeholder="الاسم بالكامل" required>
            <input id="customerPhone" type="tel" placeholder="رقم التليفون" required>
            <input id="customerAddress" type="text" placeholder="العنوان بالتفصيل (المحافظة - المدينة - الشارع)" required>
            <button type="submit" class="checkout-button">✅ تأكيد وإرسال الطلب على واتساب</button>
        </form>`;
}

function sendOrderToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const address = document.getElementById("customerAddress").value.trim();
    if (!name || !phone || !address || !cart.length) return;

    const lines = cart.map((item, i) =>
        `${i + 1}. ${item.name}\n   الكمية: ${item.quantity} × ${formatPrice(item.price)} = ${formatPrice(item.price * item.quantity)}`
    );

    const message =
`🛍️ *طلب جديد - تامر للأثاث الراقي*

👤 *الاسم:* ${name}
📞 *التليفون:* ${phone}
📍 *العنوان:* ${address}

📦 *المنتجات:*
${lines.join("\n")}

💰 *الإجمالي:* ${formatPrice(cartTotalValue())}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const win = window.open(url, "_blank");
    if (!win) window.location.href = url;

    cart = [];
    saveData();
    updateCart();
    closeCheckout();
    showMessage("تم تجهيز طلبك، اضغط إرسال في واتساب");
}

/* ===== المفضلة والتنقل والاشتراك ===== */
function toggleFavorite(id) {
    const i = favorites.indexOf(id);
    if (i === -1) { favorites.push(id); showMessage("تمت الإضافة للمفضلة ❤️"); }
    else { favorites.splice(i, 1); showMessage("تم الحذف من المفضلة"); }
    saveData();
    applyFilters();
}

function scrollToProducts() {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
}
function scrollToCategories() {
    document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
}
function showCategories() {
    scrollToCategories();
}

function subscribe(event) {
    event.preventDefault();
    const input = document.getElementById("emailInput");
    if (!input) return;
    showMessage("تم الاشتراك بنجاح ❤️");
    input.value = "";
}

document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeCart(); closeCheckout(); closeImageModal(); }
});
document.getElementById("checkoutModal")?.addEventListener("click", e => {
    if (e.target.id === "checkoutModal") closeCheckout();
});

displayProducts();
updateCart();

