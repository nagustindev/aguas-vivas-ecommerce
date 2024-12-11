document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.includes('cart')) {
        mostrarCarrito();
    }
});

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    console.log('Contenido del carrito en localStorage:', carrito);

    const carritoContainer = document.getElementById('carrito-container');
    const carritoVacio = document.getElementById('carrito-vacio');
    const resumenProductos = document.getElementById('resumen-productos');
    const totalCompra = document.getElementById('total-compra');
    const resumenContainer = document.getElementById('resumen-compra');

    carritoContainer.innerHTML = '';
    resumenProductos.innerHTML = '';
    if (resumenContainer) totalCompra.textContent = '$0';

    if (carrito.length === 0) {
        carritoVacio.innerHTML = '<p>Ups, parece que todavía no agregaste nada al carrito.</p>';
        carritoVacio.style.display = 'flex';
        resumenContainer.style.display = 'none';
        actualizarBotonComprar([]);
        return;
    } else {
        carritoVacio.style.display = 'none';
        resumenContainer.style.display = 'block';
    }

    carrito.forEach(producto => {
        const price = producto.price || 0;
    
        const productoHTML = `
            <div class="boards-showcase-products-container">
                <div class="boards-showcase-products-item">
                    <div class="boards-text-products-item">
                        <p>${producto.name}</p>
                        <span class="boards-product-price">$${price.toLocaleString('es-AR')}</span>
                        <div class="boards-product-badges">
                            <span class="boards-badge">Cantidad: 
                                <input type="number" value="${producto.cantidad}" min="1" 
                                    id="cantidad-${producto.id}" 
                                    onchange="actualizarCantidad(${producto.id})" 
                                    class="cantidad-input" />
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

    let totalGeneral = 0;

    carrito.forEach(producto => {
        const totalProducto = producto.price * producto.cantidad;
        totalGeneral += totalProducto;

        const resumenProductoHTML = `
            <p>${producto.name} (x${producto.cantidad}): $${totalProducto.toLocaleString('es-AR')}</p>
        `;
        resumenProductos.innerHTML += resumenProductoHTML;
    });

    if (resumenContainer) {
        totalCompra.textContent = `$${totalGeneral.toLocaleString('es-AR')}`;
    }

    const btnVaciar = document.getElementById('btn-vaciar');
    if (btnVaciar) {
        btnVaciar.addEventListener('click', vaciarCarrito);
    }

    actualizarBotonComprar(carrito);
}

function vaciarCarrito() {
    localStorage.removeItem('carrito');  
    mostrarCarrito(); 
    actualizarContadorCarrito(); 
}

function eliminarProductoDelCarrito(productId) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(producto => producto.id !== productId);  
    localStorage.setItem('carrito', JSON.stringify(carrito));  
    mostrarCarrito();
    actualizarBotonComprar(carrito);
}

function actualizarCantidad(productId) {
    const cantidadInput = document.getElementById(`cantidad-${productId}`);
    if (!cantidadInput) {
        console.error(`Input de cantidad con id 'cantidad-${productId}' no encontrado.`);
        return;
    }

    let cantidad = parseInt(cantidadInput.value);
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa una cantidad válida.");
        return;  
    }

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = carrito.find(producto => producto.id === productId);

    if (producto) {
        producto.cantidad = cantidad; 
        localStorage.setItem('carrito', JSON.stringify(carrito));

        mostrarCarrito();  
    } else {
        console.error(`Producto con ID ${productId} no encontrado en el carrito.`);
    }
}

function actualizarBotonComprar(carrito) {
    const btnComprar = document.getElementById('btn-comprar');
    if (btnComprar) {
        btnComprar.disabled = carrito.length === 0;
    }
}

function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contadorCarrito = document.getElementById('contador-carrito');
    if (contadorCarrito) {
        contadorCarrito.textContent = carrito.length;
    }
}

window.mostrarCarrito = mostrarCarrito;