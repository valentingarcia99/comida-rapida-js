window.addEventListener('DOMContentLoaded', () => {
    renderDOM();
    itemStorage();
})

const carritoContainer = document.getElementById("carrito");
const prodCarrito = document.getElementById("prodCarrito");
const footCarrito = document.getElementById("footCarrito");
const seccion = document.getElementById("comidasContenedor")


const menuDatos = async() => {
    let respuesta = await fetch("./js/menu.json")
    return respuesta.json()
}

let carrito = []

const renderDOM = async() => {
    let productos = await menuDatos()
    let panelVista = ""
    productos.forEach(prod => {
        const {img, producto, precio, id} = prod
        {
        panelVista += `<div>
        <div class="card">
        <div class="card-body">
        <img id="fotoProducto" src="${img}" class="card-img-top">
        <h5 id="tituloProducto">${producto}</h5>
        <p id="precioProducto">$${precio}</p>
        <button data-id="${id}" id="mybtn" name="btnComprar" class="btn btn-danger">Comprar</button>
        </div>
        </div>
        </div>`}
    });
    seccion.innerHTML = panelVista
    }

seccion.addEventListener ("click", e => {
    
    if (e.target.id === "mybtn") {
        Swal.fire({
            title: '¡Producto añadido al carrito!',
            background: '#ebbd70',
        })
        prodStorage (e.target.dataset.id);
    }

})

const prodStorage = async (id) => {
    let productos = await menuDatos();
    let comidaBuscada = productos.find (producto => producto.id === parseInt(id));
    let comidaStorage = JSON.parse(localStorage.getItem(id));
    
    if (comidaStorage === null) {
        localStorage.setItem(id, JSON.stringify({...comidaBuscada,cantidad:1}))
        itemStorage ();
    } else {
        let existeComida = JSON.parse(localStorage.getItem(id));
        existeComida.precio = existeComida.precio + comidaBuscada.precio
        existeComida.cantidad = existeComida.cantidad + 1
        localStorage.setItem(id, JSON.stringify(existeComida))
        itemStorage();
    }
    
}

const itemStorage = () => {
    carrito.length = 0
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i)
        carrito.push(JSON.parse(localStorage.getItem(clave)))
    }
    cartelCarrito();
}


function cartelCarrito () {

    prodCarrito.innerHTML = ""

    carrito.forEach (producto => {
        prodCarrito.innerHTML += `
        <td>${producto.producto}</td>
        <td><img id="fotoCarrito" src="${producto.img}"></td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        `
    })

    calcularTotal ();
}

function calcularTotal () {
    let totalPrecio = carrito.reduce((precioTotal, {precio}) => precioTotal + precio, 0)
    let totalCantidad = carrito.reduce((cantidadTotal, {cantidad}) => cantidadTotal + cantidad, 0)

    footCarrito.innerHTML = ""

    footCarrito.innerHTML += `
        <td>Cantidad total: </td>
        <td>${totalCantidad}</td>
        <td>Precio total: </td>
        <td> $${totalPrecio}</td>
        `
}