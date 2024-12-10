
document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorCarrito(); 
});

function actualizarResumenCompra() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const totalCompra = carrito.reduce((total, producto) => total + (producto.price * producto.cantidad), 0);
    
    const totalCompraElement = document.getElementById('total-compra');
    if (totalCompraElement) {
        totalCompraElement.textContent = `$${totalCompra.toLocaleString()}`;
    }
}

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
        carrito.push({ id: producto.id, name: producto.name, price: producto.price, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    actualizarResumenCompra(); 
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
    const productoIndex = carrito.findIndex(producto => producto.id === idProducto);

    if (productoIndex !== -1) {
        const producto = carrito[productoIndex];
        producto.cantidad -= 1;
        if (producto.cantidad <= 0) {
            carrito.splice(productoIndex, 1);
        }
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    mostrarCarrito();
    actualizarResumenCompra();
}

function actualizarCantidad(idProducto) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cantidadInput = document.getElementById(`cantidad-${idProducto}`);

    if (!cantidadInput) {
        console.error(`Input de cantidad con id 'cantidad-${idProducto}' no encontrado.`);
        return;
    }

    const nuevaCantidad = parseInt(cantidadInput.value);

    if (isNaN(nuevaCantidad) || nuevaCantidad <= 0) {
        console.error('Cantidad inválida');
        return;
    }

    const producto = carrito.find(producto => producto.id === idProducto);

    if (producto) {
        producto.cantidad = nuevaCantidad;  
        localStorage.setItem('carrito', JSON.stringify(carrito));

        actualizarContadorCarrito();

        mostrarCarrito();
    } else {
        console.error('Producto no encontrado en el carrito');
    }
}

window.agregarAlCarrito = agregarAlCarrito;
window.eliminarProductoDelCarrito = eliminarProductoDelCarrito;
window.actualizarContadorCarrito = actualizarContadorCarrito;
