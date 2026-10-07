// ==========================================
// SERVICIO SIMULADO DE API REST (FUTURE SPRING BOOT)
// ==========================================
const API_URL = "http://localhost:8080/api/v1/products"; // Ruta futura para Backend Java

const ApiService = {
  // Simula GET /api/v1/products
  async getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...PRODUCTS_DATA]);
      }, 500); // Simula 500ms de latencia de red
    });
  },

  // Simula GET /api/v1/products/:id
  async getProductById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = PRODUCTS_DATA.find(p => p.id === id);
        if (product) {
          resolve(product);
        } else {
          reject(new Error("Producto no encontrado"));
        }
      }, 300);
    });
  }
};