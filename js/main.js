window.addEventListener('DOMContentLoaded', () => {
    cargarVista();
    itemStorage();
})

const carritoContainer = document.getElementById("carrito");
const prodCarrito = document.getElementById("prodCarrito");
const footCarrito = document.getElementById("footCarrito");

class Comida {
    constructor (id, producto, precio, img) {
        this.id = id;
        this.producto = producto;
        this.precio = parseFloat(precio)
        this.img = img;
    }
}

const comida1 = new Comida (1, "Hamburguesa", 350, "https://www.hola.com/imagenes/cocina/noticiaslibros/20220527210494/como-hacer-hamburguesa-casera-perfecta-consejos-experto/1-92-523/hamburguesa-nyb-m.jpg");
const comida2 = new Comida (2, "Gaseosa", 150, "https://cdni.russiatoday.com/actualidad/public_images/2016.02/article/56afe82bc46188be6a8b4606.jpg");
const comida3 = new Comida (3, "Papas Fritas", 100, "https://www.paulinacocina.net/wp-content/uploads/2017/10/frenchfries.jpg");
const comida4 = new Comida (4, "Nuggets", 200, "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/9D900DB3-435D-4AE4-9375-B152D2813750/Derivates/199C60FC-C264-43A3-B822-88AA5E50E954.jpg");
const comida5 = new Comida (5, "Ensalada", 250, "https://mui.kitchen/__export/1630416534041/sites/muikitchen/img/2021/08/31/shutterstock_1564648540-e1593687715925.jpg_78316239.jpg");
const comida6 = new Comida (6, "Menu Infantil", 300, "https://www.consumer.es/app/uploads/2021/08/menus-saludables-ninos.jpg");

const comidas = [comida1, comida2, comida3, comida4, comida5, comida6];

const IVA = 1.21

function multiplicar (a, b) {
    return a * b
}


const seccion = document.getElementById("comidasContenedor")


function cargarVista () {
    let panelVista = ""
    comidas.forEach(element => {
        console.log(element.precio);
        {
        panelVista += `<div>
        <div class="card">
        <div class="card-body">
        <img id="fotoProducto" src="${element.img}" class="card-img-top">
        <h5 id="tituloProducto">${element.producto}</h5>
        <p id="precioProducto">$${element.precio}</p>
        <button data-id="${element.id}" id="mybtn" name="btnComprar" class="btn btn-danger">Comprar</button>
        </div>
        </div>
        </div>`}
    });
    seccion.innerHTML = panelVista
}

let carrito = []

seccion.addEventListener ("click", e => {
    
    if (e.target.id === "mybtn") {
        Swal.fire({
            title: '¡Producto añadido al carrito!',
            background: '#ebbd70',
        })
        prodStorage (parseInt(e.target.dataset.id));
    }

})

function prodStorage (id) {
    let comidaBuscada = comidas.find (comida => comida.id === id);
    let existeComida = JSON.parse(localStorage.getItem(id));

    if (existeComida === null) {
        localStorage.setItem(`${id}`, JSON.stringify({...comidaBuscada,cantidad:1}))
        itemStorage ();
    } else {
        existeComida.precio = existeComida.precio + comidaBuscada.precio
        existeComida.cantidad = existeComida.cantidad + 1
        localStorage.setItem(`${id}`, JSON.stringify(existeComida))
        itemStorage();
    }
    
}

function itemStorage () {

    carrito.length = 0

    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i)
        typeof JSON.parse(localStorage.getItem(clave)) == "object" && carrito.push(JSON.parse(localStorage.getItem(clave)))
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

