document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.includes('cart')) {
        mostrarCarrito();
    }
});
function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContainer = document.getElementById('carrito-container');
    const carritoVacio = document.getElementById('carrito-vacio');

    if (!carritoContainer) {
        console.warn('Elemento carrito-container no encontrado. Esta función no debe ejecutarse aquí.');
        return;
    }

    // Limpiar el contenedor antes de renderizar
    carritoContainer.innerHTML = '';

    if (carrito.length === 0) {
        carritoVacio.innerHTML = '<p>Ups, Parece que todavía no agregaste nada al carrito.</p>';
        return;
    }

    // Renderizar los productos en el carrito
    carrito.forEach(producto => {
        const price = producto.price || 0;
        const productoHTML = `
            <div class="boards-showcase-products-container">
                <div class="boards-showcase-products-item">
                    <div class="boards-text-products-item">
                        <p>${producto.name}</p>
                        <span class="boards-product-price">$${price.toLocaleString()}</span>
                        <div class="boards-product-badges">
                            <span class="boards-badge"><input type="number" value="${producto.cantidad}" min="1" id="cantidad-${producto.id}" onchange="actualizarCantidad(${producto.id})" />
                            </span>
                        </div>
                    </div>
                    <div class="boards-showcase-product-item-image">
                        <img src="/assets/img/${producto.id}.png" alt="${producto.name}" class="">
                    </div>
                    <button onclick="eliminarProductoDelCarrito(${producto.id})" class="delete-button">Eliminar Artículo</button>
                </div>
            </div>
        `;
        carritoContainer.innerHTML += productoHTML;
    });
}

// Exponer las funciones globalmente
window.mostrarCarrito = mostrarCarrito;
