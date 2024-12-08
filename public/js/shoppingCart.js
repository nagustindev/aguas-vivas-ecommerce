document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorCarrito(); 
});

function agregarAlCarrito(idProducto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoExistente = carrito.find(producto => producto.id === idProducto);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        const producto = productosJSON.find(p => p.id === idProducto);

        if (!producto) {
            console.error(`Producto con ID ${idProducto} no encontrado en productosJSON.`);
            return;
        }

        // Agregar el nuevo producto al carrito
        carrito.push({
            id: producto.id,
            name: producto.name,
            price: producto.price,
            cantidad: 1
        });
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el contador del carrito
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById('contador-carrito');
    if (contadorCarrito) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const totalProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        contadorCarrito.textContent = totalProductos;  
    } else {
        console.error('Elemento contador-carrito no encontrado.');
    }
}

function eliminarProductoDelCarrito(idProducto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Encontrar el producto en el carrito
    const productoIndex = carrito.findIndex(producto => producto.id === idProducto);

    if (productoIndex !== -1) {
        const producto = carrito[productoIndex];

        // Reducir la cantidad del producto
        producto.cantidad -= 1;

        // Si la cantidad es 0, eliminar el producto del carrito
        if (producto.cantidad <= 0) {
            carrito.splice(productoIndex, 1);
        }
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el contador del carrito
    actualizarContadorCarrito();

    // Llamar a la función para actualizar la vista del carrito
    if (typeof mostrarCarrito === 'function') {
        mostrarCarrito();
    } else {
        console.warn('mostrarCarrito no está disponible en este contexto.');
    }
}

function actualizarCantidad(idProducto) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cantidadInput = document.getElementById(`cantidad-${idProducto}`);
    const nuevaCantidad = parseInt(cantidadInput.value);

    if (isNaN(nuevaCantidad) || nuevaCantidad <= 0) {
        console.error('Cantidad inválida');
        return;
    }

    // Buscar el producto en el carrito
    const producto = carrito.find(producto => producto.id === idProducto);

    if (producto) {
        producto.cantidad = nuevaCantidad;  // Actualizar la cantidad
    } else {
        console.error('Producto no encontrado en el carrito');
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el contador del carrito
    actualizarContadorCarrito();

    // Llamar a la función para actualizar la vista del carrito
    mostrarCarrito();
}

// Exponer las funciones globalmente
window.agregarAlCarrito = agregarAlCarrito;
window.eliminarProductoDelCarrito = eliminarProductoDelCarrito;
window.actualizarContadorCarrito = actualizarContadorCarrito;
