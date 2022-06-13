class Comida {
    constructor (id, producto, precio) {
        this.id = id;
        this.producto = producto;
        this.precio = parseFloat(precio);
    }
}

const comida1 = new Comida (1, "Hamburguesa", 350);
const comida2 = new Comida (2, "Gaseosa", 150);
const comida3 = new Comida (3, "Papas Fritas", 100);
const comida4 = new Comida (4, "Nuggets", 200);
const comida5 = new Comida (5, "Ensalada", 250);
const comida6 = new Comida (6, "Menu Infantil", 300);

const comidas = [comida1, comida2, comida3, comida4, comida5, comida6];

const IVA = 1.21

function multiplicar (a, b) {
    return a * b
}


let pedido = prompt ("Introduzca el número  del producto a elegir: \n 1) Hamburguesa 350$ \n 2) Gaseosa 150$ \n 3) Papas Fritas 100$ \n 4) Nuggets 200$ \n 5) Ensalada 250$ \n 6) Menu Infantil $300 \n \n Escriba 'Salir' para salir");

    if (pedido == "Salir") alert ("Gracias, vuelva pronto");

while (pedido != "Salir") {
    switch (pedido) {
        case "1":
            alert ("Elegiste: " + comida1.producto + "\n El precio es " + comida1.precio + "$ más impuestos es = " + multiplicar(comida1.precio, IVA))
            break;
        case "2":
            alert ("Elegiste: " + comida2.producto + "\n El precio es " + comida2.precio + "$ más impuestos es = " + multiplicar(comida2.precio, IVA))
            break;
        case "3":
            alert ("Elegiste: " + comida3.producto + "\n El precio es " + comida3.precio + "$ más impuestos es = " + multiplicar(comida3.precio, IVA))
            break;
        case "4":
            alert ("Elegiste: " + comida4.producto + "\n El precio es " + comida4.precio + "$ más impuestos es = " + multiplicar(comida4.precio, IVA))
            break;
        case "5":
            alert ("Elegiste: " + comida5.producto + "\n El precio es " + comida5.precio + "$ más impuestos es = " + multiplicar(comida5.precio, IVA))
            break;
        case "6":
            alert ("Elegiste: " + comida6.producto + "\n El precio es " + comida6.precio + "$ más impuestos es = " + multiplicar(comida6.precio, IVA))
            break;
        default:
            alert ("Opción no válida")
            break; 
    }

    pedido = prompt ("Elija otro producto: \n 1) Hamburguesa 350$ \n 2) Gaseosa 150$ \n 3) Papas Fritas 100$ \n 4) Nuggets 200$ \n 5) Ensalada 250$ \n 6) Menu Infantil $300 \n \n Escriba 'Salir' para salir");

    if (pedido == "Salir") alert ("Gracias, vuelva pronto");
}

let recomendar = prompt ("¿Querés recomendar alguna comida para agregar a nuestro menú? \n Agregá el nombre")
let recomendarPrecio = parseFloat(prompt ("Ahora un precio"))

comidas.push(new Comida (comidas.length + 1, recomendar, recomendarPrecio))
alert ("¡Gracias por tu recomendación! \n Sugeriste: " + recomendar + " Precio: " + recomendarPrecio)

alert ("¡Imprimimos nuestro menú con tu comida sugerida para que la veas en la consola!")
console.log(comidas);





