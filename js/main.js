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
      // Si el usuario hace clic en estas secciones, nos aseguramos de volver al Inicio para que sean visibles
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

  // Mostrar u Ocultar componentes de la Landing Page
  if (heroSection) heroSection.style.display = displayVal;
  if (howItWorksSection) howItWorksSection.style.display = displayVal;
  if (faqSection) faqSection.style.display = displayVal;
  if (aboutSection) aboutSection.style.display = displayVal;
  if (contactSection) contactSection.style.display = displayVal;

  // En Inicio ocultamos filtros de categorías y barra de búsqueda
  if (categoriesSection) categoriesSection.style.display = 'none';
  if (searchContainer) searchContainer.style.display = isHome ? 'none' : 'block';

  // Título "Nuestras Invitaciones"
  if (catalogTitleSection) {
    catalogTitleSection.style.display = isHome ? 'block' : 'none';
  }
}

// ==========================================
// 3. PANTALLA 1: INICIO (HOME)
// ==========================================
function renderHomeSections() {
  if (!productsGrid) return;

  // Activar visibilidad de todo el contenido de Inicio
  setLandingVisibility(true);

  productsGrid.innerHTML = `
    <div style="grid-column: 1/-1; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; padding: 1rem 0;">
      
      <!-- 1. Invitaciones Estáticas -->
      <article class="product-card">
        <div class="product-card-header">
          <span class="product-badge">Imagen HD</span>
          <div class="product-preview-mockup" style="background-image: url('assets/images/boda-carlos-rachel.png');"></div>
        </div>
        <div class="product-card-body" style="text-align: center;">
          <h3 class="product-title" style="margin-top: 0.5rem;">Invitaciones Estáticas</h3>
          <p class="product-description">Diseños elegantes en imagen digital de alta resolución, ideales para enviar directo por WhatsApp.</p>
          <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="switchView('estatica')">
            Explorar Catálogo 📄
          </button>
        </div>
      </article>

      <!-- 2. Invitaciones Web Interactivas -->
      <article class="product-card">
        <div class="product-card-header is-web-header">
          <span class="product-badge" style="background-color: #2b5e54;">Interactivas ✨</span>
          <div class="phone-mockup-frame">
            <div class="phone-mockup-frame-screen" style="background-image: url('assets/images/boda-mateo-sofia-web.png');"></div>
          </div>
        </div>
        <div class="product-card-body" style="text-align: center;">
          <h3 class="product-title" style="margin-top: 0.5rem;">Invitaciones Tipo Web</h3>
          <p class="product-description">Experiencias interactivas tipo sitio web con sobre animado, música, confirmación RSVP y mapas GPS.</p>
          <button class="btn" style="width: 100%; margin-top: 1rem; background-color: #2b5e54; color: white;" onclick="switchView('web')">
            Explorar Web Interactivas 🌐
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

// Función global para cambiar entre Inicio y Catálogos con soporte para botón 'Atrás' del móvil
window.switchView = function(format, pushToHistory = true) {
  currentFormat = format;
  currentCategory = 'Todas';
  if (searchInput) searchInput.value = '';
  
  filterProducts();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Guardar el estado en el historial del navegador para capturar el botón "Atrás" del teléfono
  if (pushToHistory) {
    const stateObj = { format: format };
    const hash = format === 'inicio' ? '#inicio' : `#${format}`;
    history.pushState(stateObj, '', hash);
  }
};

// Capturar cuando el usuario presiona el botón "Atrás" de su teléfono o navegador
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.format) {
    // Regresar a la vista guardada en el historial
    switchView(e.state.format, false);
  } else {
    // Si no hay estado guardado o regresó al origen, mostrar la pantalla de inicio
    switchView('inicio', false);
  }
});

// Guardar el estado inicial al cargar la página por primera vez
document.addEventListener('DOMContentLoaded', () => {
  if (!history.state) {
    history.replaceState({ format: 'inicio' }, '', '#inicio');
  }
});

// ==========================================
// 4. PANTALLA 2: VISTA LIMPIA DE CATÁLOGO
// ==========================================
function renderCategoryButtons(productsOfFormat) {
  if (!categoriesFilter) return;

  // Ocultar TODO el contenido del Inicio para dejar la pantalla limpia
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
  categoriesFilter.innerHTML = `
    <div style="width: 100%; text-align: center; margin-bottom: 1.5rem;">
      <button class="btn btn-outline" onclick="switchView('inicio')" style="border-radius: 20px; padding: 0.5rem 1.4rem; font-size: 0.9rem; margin-bottom: 1rem;">
        ⬅️ Volver a Inicio
      </button>
      <h2 style="font-size: 2.2rem; color: var(--color-primary);">${tituloFormato}</h2>
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
                  Ver Demo 🌐
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
// 5. MODAL DETALLE & WHATSAPP
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
      <div class="modal-detail-price">Q${producto.precio}.00</div>
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
           Probar Demo Interactiva en Vivo 🌐
        </a>
      ` : ''}

      <a href="https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}" 
         target="_blank" 
         class="btn btn-whatsapp">
         Pedir por WhatsApp 💬
      </a>
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
// 6. INICIALIZACIÓN
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