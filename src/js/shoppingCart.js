document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorCarrito(); // Inicializa el contador al cargar la página
});

function agregarAlCarrito(idProducto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const productoExistente = carrito.find(producto => producto.id === idProducto);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        const producto = productosJSON.find(p => p.id === idProducto);
        carrito.push({
            id: producto.id,
            name: producto.name,
            price: producto.price,
            cantidad: 1
        });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById('contador-carrito');
    if (contadorCarrito) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const totalProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        contadorCarrito.textContent = totalProductos;  // Actualiza el contador en el navbar
    } else {
        console.error('Elemento contador-carrito no encontrado.');
    }
}

function eliminarProductoDelCarrito(idProducto) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoActualizado = carrito.filter(producto => producto.id !== idProducto);

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));

    // Actualizar el contador del carrito
    actualizarContadorCarrito();  // Se asegura de que el contador en el navbar se actualice

    // Llamar a la función para actualizar la vista del carrito (en la página del carrito)
    mostrarCarrito();  // Asegúrate de que esta función esté implementada correctamente en el archivo correspondiente
}

// Exponer las funciones
window.agregarAlCarrito = agregarAlCarrito;
window.eliminarProductoDelCarrito = eliminarProductoDelCarrito;
window.actualizarContadorCarrito = actualizarContadorCarrito;
