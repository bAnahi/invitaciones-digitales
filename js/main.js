// ==========================================
// 1. MANEJO DEL MENÚ MÓVIL Y NAVEGACIÓN
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

// Navegación del menú superior
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('open')) {
      navToggle.classList.remove('open');
      navMenu.classList.remove('open');
    }
    
    const href = link.getAttribute('href');
    if (href === '#inicio' || href === '#') {
      e.preventDefault();
      switchView('inicio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href === '#invitaciones') {
      e.preventDefault();
      switchView('estatica');
    } else if (href === '#sobre-nosotros' || href === '#contacto' || href === '#como-funciona' || href === '#faq') {
      if (currentFormat !== 'inicio') {
        switchView('inicio');
      }
    }
  });
});

// Clic en el logo "Boche's" para regresar a la pantalla de Inicio
const logoBtn = document.querySelector('.logo');
if (logoBtn) {
  logoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchView('inicio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==========================================
// 2. ESTADO GENERAL Y CONTROL DE VISIBILIDAD
// ==========================================
let allProducts = [];
let currentFormat = 'inicio'; // 'inicio', 'estatica', 'web', 'video'
let currentCategory = 'Todas';

const productsGrid = document.getElementById('productsGrid');
const categoriesFilter = document.getElementById('categoriesFilter');
const searchInput = document.getElementById('searchInput');

// Secciones que pertenecen únicamente a la pantalla de INICIO
const heroSection = document.getElementById('inicio');
const categoriesSection = document.getElementById('categorias');
const catalogTitleSection = document.querySelector('#invitaciones .section-title');
const searchContainer = document.querySelector('.search-container');
const howItWorksSection = document.getElementById('como-funciona');
const faqSection = document.getElementById('faq');
const aboutSection = document.getElementById('sobre-nosotros');
const contactSection = document.getElementById('contacto');

/**
 * Controla qué secciones se muestran según la vista actual
 */
function setLandingVisibility(isHome) {
  const displayVal = isHome ? 'block' : 'none';

  if (heroSection) heroSection.style.display = displayVal;
  if (howItWorksSection) howItWorksSection.style.display = displayVal;
  if (faqSection) faqSection.style.display = displayVal;
  if (aboutSection) aboutSection.style.display = displayVal;
  if (contactSection) contactSection.style.display = displayVal;

  if (categoriesSection) categoriesSection.style.display = 'none';
  if (searchContainer) searchContainer.style.display = isHome ? 'none' : 'block';

  // Título "Nuestras Invitaciones" de la Landing
  if (catalogTitleSection) {
    catalogTitleSection.style.display = isHome ? 'block' : 'none';
  }

  // SI ES INICIO: Ocultar de inmediato el bloque de categorías de los catálogos
  if (isHome && categoriesFilter) {
    categoriesFilter.style.display = 'none';
    categoriesFilter.innerHTML = '';
  }
}

// ==========================================
// 3. CONTROL DE HISTORIAL Y BOTÓN ATRÁS MÓVIL
// ==========================================

// Asegurar que el estado base del navegador sea la pantalla de inicio
if (window.history && window.history.replaceState) {
  window.history.replaceState({ format: 'inicio' }, '', '#inicio');
}

window.switchView = function(format, pushToHistory = true) {
  currentFormat = format;
  currentCategory = 'Todas';
  if (searchInput) searchInput.value = '';

  filterProducts();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (pushToHistory && window.history && window.history.pushState) {
    if (format !== 'inicio') {
      window.history.pushState({ format: format }, '', `#${format}`);
    } else {
      window.history.pushState({ format: 'inicio' }, '', '#inicio');
    }
  }
};

// Escuchador para la flecha/gesto de navegación 'Atrás' del teléfono o navegador
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.format) {
    switchView(e.state.format, false);
  } else {
    switchView('inicio', false);
  }
});

// ==========================================
// 4. PANTALLA 1: INICIO (HOME)
// ==========================================
function renderHomeSections() {
  if (!productsGrid) return;

  setLandingVisibility(true);

  productsGrid.innerHTML = `
    <div style="grid-column: 1/-1; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; padding: 1rem 0;">
      
      <!-- 1. Invitaciones en Imagen HD -->
      <article class="product-card">
        <div class="product-card-header">
          <span class="product-badge">Imagen / PDF</span>
          <div class="product-preview-mockup" style="background-image: url('assets/images/boda-carlos-rachel.png');"></div>
        </div>
        <div class="product-card-body" style="text-align: center;">
          <h3 class="product-title" style="margin-top: 0.5rem;">Invitaciones en Imagen HD</h3>
          <p class="product-description">Diseños elegantes en imagen digital de alta resolución, ideales para enviar directo por WhatsApp.</p>
          <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="switchView('estatica')">
            Explorar Catálogo 
          </button>
        </div>
      </article>

      <!-- 2. Invitaciones Web Interactivas -->
      <article class="product-card">
        <div class="product-card-header is-web-header">
          <span class="product-badge" style="background-color: #2b5e54;">Interactivas</span>
          <div class="phone-mockup-frame">
            <div class="phone-mockup-frame-screen" style="background-image: url('assets/images/boda-mateo-sofia-web.png');"></div>
          </div>
        </div>
        <div class="product-card-body" style="text-align: center;">
          <h3 class="product-title" style="margin-top: 0.5rem;">Invitaciones Web Interactivas</h3>
          <p class="product-description">Experiencias interactivas tipo sitio web con sobre animado, música, confirmación RSVP y mapas GPS.</p>
          <button class="btn" style="width: 100%; margin-top: 1rem; background-color: #2b5e54; color: white;" onclick="switchView('web')">
            Explorar Catálogo 
          </button>
        </div>
      </article>

      <!-- 3. Video Invitaciones -->
      <article class="product-card">
        <div class="product-card-header">
          <span class="product-badge" style="background-color: #e76f51;">Próximamente 🎥</span>
          <div class="product-preview-mockup" style="background-color: #eaeaea; display: flex; align-items: center; justify-content: center; font-size: 3rem;">
            🎬
          </div>
        </div>
        <div class="product-card-body" style="text-align: center;">
          <h3 class="product-title" style="margin-top: 0.5rem;">Video Invitaciones</h3>
          <p class="product-description">Videos animados totalmente personalizados con música de fondo e increíbles efectos visuales.</p>
          <button class="btn" style="width: 100%; margin-top: 1rem; background-color: #6c757d; color: white;" onclick="switchView('video')">
            Explorar Videos 🎥
          </button>
        </div>
      </article>

    </div>
  `;
}

// ==========================================
// 5. PANTALLA 2: VISTA LIMPIA DE CATÁLOGO
// ==========================================
function renderCategoryButtons(productsOfFormat) {
  if (!categoriesFilter) return;

  setLandingVisibility(false);

  const categories = ['Todas'];
  productsOfFormat.forEach(product => {
    if (product.categoria && !categories.includes(product.categoria)) {
      categories.push(product.categoria);
    }
  });

  const tituloFormato = currentFormat === 'estatica' ? 'Catálogo: Invitaciones Estáticas' : 
                        currentFormat === 'web' ? 'Catálogo: Invitaciones Tipo Web' : 'Catálogo: Video Invitaciones';

  categoriesFilter.style.display = 'flex';
  categoriesFilter.style.flexDirection = 'column';
  categoriesFilter.style.alignItems = 'center';

  categoriesFilter.innerHTML = `
    <div style="width: 100%; text-align: center; margin-bottom: 1rem;">
      <h2 style="font-size: 2.2rem; color: var(--color-primary); margin-bottom: 0.5rem;">${tituloFormato}</h2>
    </div>

    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; width: 100%; margin-bottom: 1.5rem;">
      ${categories.map(cat => `
        <button class="category-btn ${cat === currentCategory ? 'active' : ''}" data-category="${cat}">
          ${cat}
        </button>
      `).join('')}
    </div>
  `;

  const buttons = categoriesFilter.querySelectorAll('.category-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-category');
      filterProducts();
    });
  });
}

function renderProducts(productsToRender) {
  if (!productsGrid) return;

  if (productsToRender.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
        <p style="color: var(--color-text-muted); font-size: 1.1rem;">No hay invitaciones disponibles en esta categoría por el momento.</p>
        <button class="btn btn-primary" style="margin-top: 1.5rem;" onclick="switchView('inicio')">Volver al Inicio</button>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = productsToRender.map(product => {
    const isWeb = (product.formato === 'web' || product.esWeb);
    const hasImage = Boolean(product.imagen);

    const headerHTML = isWeb ? `
      <div class="phone-mockup-frame">
        <div class="phone-mockup-frame-screen" style="background-image: url('${product.imagen}');"></div>
      </div>
    ` : `
      <div class="product-preview-mockup" style="background-image: url('${product.imagen}');">
        ${!hasImage ? `<span>${product.categoria}</span><h4>${product.nombre}</h4>` : ''}
      </div>
    `;

    return `
      <article class="product-card">
        <div class="product-card-header ${isWeb ? 'is-web-header' : ''}">
          ${product.etiqueta ? `<span class="product-badge">${product.etiqueta}</span>` : ''}
          ${headerHTML}
        </div>
        <div class="product-card-body">
          <span class="product-category-tag">${product.categoria}</span>
          <h3 class="product-title">${product.nombre}</h3>
          <p class="product-description">${product.descripcion || ''}</p>
          
          <div class="product-card-footer" style="display: flex; gap: 0.5rem; align-items: center; justify-content: space-between; flex-wrap: wrap; margin-top: 1rem;">
            <span class="product-price">Q${product.precio}.00</span>
            <div style="display: flex; gap: 0.4rem;">
              ${product.demoUrl ? `
                <a href="${product.demoUrl}" target="_blank" class="btn" style="background-color: #2b5e54; color: white; padding: 0.5rem 0.8rem; font-size: 0.85rem; text-decoration: none; border-radius: 8px;">
                  Ver Demo 
                </a>
              ` : ''}
              <button class="btn btn-primary btn-card" style="padding: 0.5rem 0.8rem; font-size: 0.85rem;" onclick="verDetalle('${product.id}')">
                Detalles
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function filterProducts() {
  if (currentFormat === 'inicio') {
    renderHomeSections();
    return;
  }

  let filteredByFormat = allProducts.filter(p => (p.formato || 'estatica') === currentFormat);
  renderCategoryButtons(filteredByFormat);

  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const finalFiltered = filteredByFormat.filter(product => {
    const matchesCategory = (currentCategory === 'Todas') || (product.categoria === currentCategory);
    if (!matchesCategory) return false;
    if (!query) return true;

    const nombre = (product.nombre || '').toLowerCase();
    const descripcion = (product.descripcion || '').toLowerCase();
    const caracteristicas = (product.caracteristicas || []).join(' ').toLowerCase();

    return nombre.includes(query) || descripcion.includes(query) || caracteristicas.includes(query);
  });

  renderProducts(finalFiltered);
}

if (searchInput) {
  searchInput.addEventListener('input', filterProducts);
  searchInput.addEventListener('keyup', filterProducts);
}

// ==========================================
// 6. MODAL DETALLE & WHATSAPP
// ==========================================
const modal = document.getElementById('productModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

let currentImageIndex = 0;

function renderModalImageContainer(product) {
  const images = (product.imagenes && product.imagenes.length > 0) ? product.imagenes : [product.imagen];
  currentImageIndex = 0;

  if (images.length <= 1) {
    return `<img src="${images[0]}" alt="${product.nombre}" id="modal-product-img" style="width: 100%; max-width: 260px; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.12); display: block; margin: 0 auto;">`;
  }

  return `
    <div class="modal-carousel" style="position: relative; display: flex; justify-content: center; align-items: center; max-width: 260px; margin: 0 auto;">
      <button class="carousel-btn prev-btn" onclick="changeModalImage(-1)" style="position: absolute; left: 8px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; border-radius: 50%; width: 36px; height: 36px; cursor: pointer; z-index: 10; font-size: 18px; display: flex; align-items: center; justify-content: center;">&#10094;</button>
      <img src="${images[0]}" alt="${product.nombre}" id="modal-product-img" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.12); display: block;">
      <button class="carousel-btn next-btn" onclick="changeModalImage(1)" style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; border-radius: 50%; width: 36px; height: 36px; cursor: pointer; z-index: 10; font-size: 18px; display: flex; align-items: center; justify-content: center;">&#10095;</button>
    </div>
  `;
}

window.changeModalImage = function(direction) {
  const product = window.currentModalProduct;
  if (!product) return;
  const images = (product.imagenes && product.imagenes.length > 0) ? product.imagenes : [product.imagen];
  if (images.length <= 1) return;

  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  const imgElement = document.getElementById('modal-product-img');
  if (imgElement) {
    imgElement.src = images[currentImageIndex];
  }
};

async function verDetalle(id) {
  try {
    const producto = await ApiService.getProductById(id);
    if (!producto) return;

    window.currentModalProduct = producto;

    const mensajeWhatsApp = encodeURIComponent(
      `¡Hola Boche's! Me interesa cotizar la invitación "${producto.nombre}" de la categoría ${producto.categoria} (Q${producto.precio}.00).`
    );
    const numeroWhatsApp = "50247725339"; 

    const imageHeaderHTML = producto.demoUrl ? '' : `
      <div style="text-align: center; margin-bottom: 1.2rem;">
        ${renderModalImageContainer(producto)}
      </div>
    `;

    modalBody.innerHTML = `
      ${imageHeaderHTML}
      <span class="product-category-tag">${producto.categoria}</span>
      <h2 class="modal-detail-title" style="margin-top: 0.5rem;">${producto.nombre}</h2>
      
      <div class="modal-detail-price" style="display: flex; align-items: center; gap: 0.8rem; flex-wrap: wrap; margin-top: 0.5rem;">
        <span style="font-size: 1.6rem; font-weight: bold; color: var(--color-primary);">Q${producto.precio}.00</span>
        <span style="background-color: #2b5e54; color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.3px;">
          Oferta de Lanzamiento
        </span>
      </div>
      
      <p style="margin-top: 0.8rem;">${producto.descripcion || ''}</p>
      
      <h4 style="margin-top: 1.5rem; color: var(--color-primary);">¿Qué incluye este diseño?</h4>
      <ul class="modal-features-list">
        ${(producto.caracteristicas || []).map(f => `<li>${f}</li>`).join('')}
      </ul>
      
      <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 0.8rem; margin-bottom: 1.5rem;">
        ⏱️ <strong>Tiempo de entrega:</strong> ${producto.tiempoEntrega}
      </p>

      ${producto.demoUrl ? `
        <a href="${producto.demoUrl}" 
           target="_blank" 
           class="btn" 
           style="background-color: #2b5e54; color: white; margin-bottom: 0.8rem; text-align: center; display: block; text-decoration: none;">
           Probar Demo Interactiva en Vivo 
        </a>
      ` : ''}

      <a href="https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}" 
         target="_blank" 
         class="btn btn-whatsapp">
         Pedir por WhatsApp 💬
      </a>

      <p style="text-align: center; font-size: 0.8rem; color: var(--color-text-muted); margin-top: 1rem;">
        💳 <strong>Métodos de pago:</strong> Transferencia bancaria o depósito local.
      </p>
    `;

    if (modal) {
      modal.classList.add('open');
      const modalContent = modal.querySelector('.modal-content');
      if (modalContent) modalContent.scrollTop = 0;
    }
  } catch (error) {
    console.error("Error al obtener detalle:", error);
  }
}

function cerrarModal() {
  if (modal) modal.classList.remove('open');
}

if (modalOverlay) modalOverlay.addEventListener('click', cerrarModal);
if (modalClose) modalClose.addEventListener('click', cerrarModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.classList.contains('open')) cerrarModal();
});

// ==========================================
// 7. INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
  if (productsGrid) {
    productsGrid.innerHTML = `
      <div class="spinner-container">
        <div class="spinner"></div>
        <p style="margin-top: 1rem; color: var(--color-text-muted);">Cargando catálogo...</p>
      </div>
    `;
  }

  try {
    allProducts = await ApiService.getProducts();
    renderHomeSections();
  } catch (error) {
    console.error("Error al cargar productos:", error);
    if (productsGrid) {
      productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: red;">Error al conectar con el servidor.</p>`;
    }
  }

  // Inicialización de acordeón FAQ
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) item.classList.remove('active');
      });
      faqItem.classList.toggle('active');
    });
  });
});