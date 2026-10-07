// ==========================================
// 1. MANEJO DEL MENÚ MÓVIL
// ==========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      navToggle.classList.remove('open');
      navMenu.classList.remove('open');
    }
  });
});

// ==========================================
// 2. ESTADO Y ELEMENTOS DOM
// ==========================================
let allProducts = [];
let currentCategory = 'Todas';

const productsGrid = document.getElementById('productsGrid');
const categoriesFilter = document.getElementById('categoriesFilter');
const searchInput = document.getElementById('searchInput');

// ==========================================
// 3. CARGA Y FILTRADO COMBINADO
// ==========================================
function showLoading() {
  if (productsGrid) {
    productsGrid.innerHTML = `
      <div class="spinner-container">
        <div class="spinner"></div>
        <p style="margin-top: 1rem; color: var(--color-text-muted);">Cargando catálogo...</p>
      </div>
    `;
  }
}

function getCategories(products) {
  const categories = ['Todas'];
  products.forEach(product => {
    if (!categories.includes(product.categoria)) {
      categories.push(product.categoria);
    }
  });
  return categories;
}

function renderCategoryButtons(products) {
  if (!categoriesFilter) return;
  
  const categories = getCategories(products);
  categoriesFilter.innerHTML = categories.map((cat, index) => `
    <button class="category-btn ${index === 0 ? 'active' : ''}" data-category="${cat}">
      ${cat}
    </button>
  `).join('');

  const buttons = categoriesFilter.querySelectorAll('.category-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-category');
      filterProducts(); // Aplica categoría y búsqueda juntas
    });
  });
}

function renderProducts(productsToRender) {
  if (!productsGrid) return;

  if (productsToRender.length === 0) {
    productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted);">No se encontraron invitaciones que coincidan con tu búsqueda.</p>`;
    return;
  }

  productsGrid.innerHTML = productsToRender.map(product => {
    const hasImage = Boolean(product.imagen);
    const mockupStyle = hasImage 
      ? `background-image: url('${product.imagen}'); background-size: cover; background-position: center;`
      : '';

    return `
      <article class="product-card">
        <div class="product-card-header">
          ${product.etiqueta ? `<span class="product-badge">${product.etiqueta}</span>` : ''}
          <div class="product-preview-mockup" style="${mockupStyle}">
            ${!hasImage ? `<span>${product.categoria}</span><h4>${product.nombre}</h4>` : ''}
          </div>
        </div>
        <div class="product-card-body">
          <span class="product-category-tag">${product.categoria}</span>
          <h3 class="product-title">${product.nombre}</h3>
          <p class="product-description">${product.descripcion}</p>
          <div class="product-card-footer">
            <span class="product-price">Q${product.precio}.00</span>
            <button class="btn btn-primary btn-card" onclick="verDetalle('${product.id}')">Ver Detalle</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Función que combina la categoría seleccionada + el texto del buscador
function filterProducts() {
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filtered = allProducts.filter(product => {
    const matchesCategory = (currentCategory === 'Todas') || (product.categoria === currentCategory);
    const matchesQuery = product.nombre.toLowerCase().includes(query) ||
                         product.descripcion.toLowerCase().includes(query) ||
                         product.categoria.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  renderProducts(filtered);
}

// Evento al escribir en el buscador
if (searchInput) {
  searchInput.addEventListener('input', filterProducts);
}

// ==========================================
// 4. MODAL DETALLE & WHATSAPP
// ==========================================
const modal = document.getElementById('productModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

async function verDetalle(id) {
  try {
    const producto = await ApiService.getProductById(id);
    if (!producto) return;

    const mensajeWhatsApp = encodeURIComponent(
      `¡Hola Boche's! Me interesa cotizar la invitación "${producto.nombre}" de la categoría ${producto.categoria} (Q${producto.precio}.00).`
    );
    // Número limpio formateado para la API de WhatsApp (sin espacios ni el +)
    const numeroWhatsApp = "50247725339"; 

    modalBody.innerHTML = `
      ${producto.imagen ? `
        <div style="text-align: center; margin-bottom: 1.2rem;">
          <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100%; max-width: 280px; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.12); display: block; margin: 0 auto;">
        </div>
      ` : ''}
      <span class="product-category-tag">${producto.categoria}</span>
      <h2 class="modal-detail-title" style="margin-top: 0.5rem;">${producto.nombre}</h2>
      <div class="modal-detail-price">Q${producto.precio}.00</div>
      <p style="margin-top: 0.8rem;">${producto.descripcion}</p>
      
      <h4 style="margin-top: 1.5rem; color: var(--color-primary);">¿Qué incluye este diseño?</h4>
      <ul class="modal-features-list">
        ${producto.caracteristicas.map(f => `<li>${f}</li>`).join('')}
      </ul>
      
      <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 0.8rem;">
        ⏱️ <strong>Tiempo de entrega:</strong> ${producto.tiempoEntrega}
      </p>

      <a href="https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}" 
         target="_blank" 
         class="btn btn-whatsapp">
         Pedir por WhatsApp 💬
      </a>
    `;

    if (modal) {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');

      // Asegura que al abrir se haga scroll hacia arriba
      const modalContent = modal.querySelector('.modal-content');
      if (modalContent) {
        modalContent.scrollTop = 0;
      }
    }
  } catch (error) {
    console.error("Error al obtener detalle:", error);
  }
}

function cerrarModal() {
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
}

if (modalOverlay) modalOverlay.addEventListener('click', cerrarModal);
if (modalClose) modalClose.addEventListener('click', cerrarModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
    cerrarModal();
  }
});

// ==========================================
// 5. INICIALIZACIÓN ASÍNCRONA
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
  showLoading();
  try {
    allProducts = await ApiService.getProducts();
    renderCategoryButtons(allProducts);
    renderProducts(allProducts);
  } catch (error) {
    console.error("Error al cargar productos:", error);
    if (productsGrid) {
      productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: red;">Error al conectar con el servidor.</p>`;
    }
  }
});

// ==========================================
// LÓGICA DEL ACORDEÓN DE PREGUNTAS FRECUENTES
// ==========================================
function initFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      
      // Cierra otros elementos abiertos para mantener solo uno activo
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });

      // Alterna la clase activa en la pregunta seleccionada
      faqItem.classList.toggle('active');
    });
  });
}

// Ejecuta la función cuando el documento esté cargado
document.addEventListener('DOMContentLoaded', () => {
  initFAQ();
});