class Comida {
    constructor (id, producto, precio, img) {
        this.id = id;
        this.producto = producto;
        this.precio = parseFloat(precio)
        this.img = img;
    }
}

const comida1 = new Comida (1, "Hamburguesa", 350, "<img src='https://www.hola.com/imagenes/cocina/noticiaslibros/20220527210494/como-hacer-hamburguesa-casera-perfecta-consejos-experto/1-92-523/hamburguesa-nyb-m.jpg'>");
const comida2 = new Comida (2, "Gaseosa", 150, "<img src='https://cdni.russiatoday.com/actualidad/public_images/2016.02/article/56afe82bc46188be6a8b4606.jpg'>");
const comida3 = new Comida (3, "Papas Fritas", 100, "<img src='https://www.paulinacocina.net/wp-content/uploads/2017/10/frenchfries.jpg'>");
const comida4 = new Comida (4, "Nuggets", 200, "<img src='https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/9D900DB3-435D-4AE4-9375-B152D2813750/Derivates/199C60FC-C264-43A3-B822-88AA5E50E954.jpg'>");
const comida5 = new Comida (5, "Ensalada", 250, "<img src='https://mui.kitchen/__export/1630416534041/sites/muikitchen/img/2021/08/31/shutterstock_1564648540-e1593687715925.jpg_78316239.jpg'>");
const comida6 = new Comida (6, "Menu Infantil", 300, "<img src='https://www.consumer.es/app/uploads/2021/08/menus-saludables-ninos.jpg'>");

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



const menu__comidas = document.getElementById("menu__comidas"),
seccion = document.getElementsByTagName("section")
comidas.pop();

for (const el of comidas) {
    let carta = document.createElement("div");
    carta.innerHTML = `<div"><h2>${el.producto}</h2>
    ${el.img}
    <p>Precio: ${el.precio} + IVA</p>
    <button class="btn btn-danger">Comprar</button>
    </div>`;
    seccion[0].appendChild(carta);
}




