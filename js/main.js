window.addEventListener('DOMContentLoaded', () => {
    renderDOM();
    itemStorage();
})

const carritoContainer = document.getElementById("carrito");
const prodCarrito = document.getElementById("prodCarrito");
const footCarrito = document.getElementById("footCarrito");
const seccion = document.getElementById("comidasContenedor")
const fCompra = document.getElementById("fCompra")


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

        Toastify({
            text: "¡Producto agregado al carrito!",
            duration: 1000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #FF8442, #FFB363)",
            },
            onClick: function(){}
          }).showToast();

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
        <td><button id="eliminar" data-id="${producto.id}" type="button" class="btn btn-danger">Eliminar</button></td>
        `
    })  

    calcularTotal ();
}

prodCarrito.addEventListener('click', borrarProducto)

function borrarProducto(e) {
	if (e.target.id === "eliminar"){
		let idProducto = e.target.dataset.id
        let comidaBuscada = carrito.find(producto => producto.id === parseInt(idProducto))
		let comidaStorage = JSON.parse(localStorage.getItem(idProducto))
		if(comidaStorage.cantidad === 1){
			comidaStorage.cantidad = comidaStorage.cantidad - 1
			comidaStorage.precio = comidaStorage.precio - comidaBuscada.precio
			localStorage.setItem(idProducto, JSON.stringify(comidaStorage))
			itemStorage()
		}else{
			localStorage.removeItem(idProducto)
			itemStorage()
		}
	}
}

itemStorage()

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



fCompra.addEventListener('click',(e) => {
	Swal.fire({
		title: 'Gracias por tu compra!',
		icon: 'success',
		showClass: {
		  popup: 'animate__animated animate__fadeInDown'
		},
		hideClass: {
		  popup: 'animate__animated animate__fadeOutUp'
		}
	  })
})