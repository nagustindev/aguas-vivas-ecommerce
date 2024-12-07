document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('cart.html')) {
        mostrarCarrito();  // Se ejecuta al cargar la página
    }
});

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContainer = document.getElementById('carrito-container');

    if (!carritoContainer) {
        console.warn('Elemento carrito-container no encontrado. Esta función no debe ejecutarse aquí.');
        return;
    }

    // Limpiar contenido actual
    carritoContainer.innerHTML = '';

    // Mostrar mensaje si el carrito está vacío
    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
        return;
    }

    // Recorrer los productos y generar el HTML
    carrito.forEach(producto => {
        const price = producto.price || 0;
        const productoHTML = `
            <div class="boards-showcase-products-container">
                <div class="boards-showcase-products-item">
                    <div class="boards-text-products-item">
                        <p>${producto.name}</p>
                        <span class="boards-product-price">$${price.toLocaleString()}</span>
                        <div class="boards-product-badges">
                            <span class="boards-badge">Cantidad: ${producto.cantidad}</span>
                        </div>
                    </div>
                    <div class="boards-showcase-product-item-image">
                        <img src="/assets/img/${producto.id}.png" alt="${producto.name}" class="">
                    </div>
                    <button onclick="eliminarProductoDelCarrito(${producto.id})">Eliminar</button>
                </div>
            </div>
        `;
        carritoContainer.innerHTML += productoHTML;
    });

    // Mensaje si el carrito está vacío
    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
    }
}
