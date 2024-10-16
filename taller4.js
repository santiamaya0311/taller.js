
const menu = [
    { nombre: 'Hamburguesa', precio: 15000 },
    { nombre: 'Papas Fritas', precio: 8000 },
    { nombre: 'Gaseosa', precio: 5000 },
    { nombre: 'Pizza', precio: 18000 },
    { nombre: 'Ensalada', precio: 12000 }
];

// Función para mostrar el menú
function mostrarMenu() {
    console.log("Menú:");
    menu.forEach((producto, index) => {
        console.log(${index + 1}. ${producto.nombre} - $${producto.precio});
    });
}

// Función para realizar el pedido
function realizarPedido() {
    let total = 0;
    let seleccion;

    mostrarMenu();
    console.log("Escribe el nombre del producto para agregarlo al pedido o escribe 'pagar' para finalizar.");

    // Bucle para recibir las selecciones del usuario
    do {
        seleccion = prompt("Selecciona un producto:").trim().toLowerCase();

        // Buscar el producto en el menú
        const productoSeleccionado = menu.find(producto => producto.nombre.toLowerCase() === seleccion);

        if (productoSeleccionado) {
            total += productoSeleccionado.precio;
            console.log(${productoSeleccionado.nombre} agregado. Total parcial: $${total});
        } else if (seleccion !== "pagar") {
            console.log("Producto no encontrado, intenta de nuevo.");
        }
    } while (seleccion !== "pagar");

    // Mostrar el total a pagar
    console.log(Total a pagar: $${total});
}

// Ejecutar el programa
realizarPedido();