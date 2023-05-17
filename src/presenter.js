import { Reservar, MostrarMenu,MostrarListaReservas, CrearProducto, InsertarProducto, getListaProductos} from "./cafeteria.js";
// import { ListaDeProductos } from "./listaDeProductos.js";
const div2 = document.querySelector("#menu-div");
const div3 = document.querySelector("#reservas-div")
// const reservas=MostrarListaReservas(["cafe","te"])
// const productos= MostrarMenu(["cafe","mocca","te"]);

const formAgregarProducto = document.querySelector("#agregarProducto-form");
const divAgregarProducto = document.querySelector("#agregarProducto-div");

// let ListaProductos=new ListaDeProductos();
 //div2.innerHTML = "<div>" + productos[0] + " <br> " + productos[1]+ " <br> " + productos[2]+"</div>" ;
 //div3.innerHTML="<div>" + reservas[0] + " <br> " + reservas[1]+ " <br> " +"</div>" ;

let lista=[];

formAgregarProducto.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.querySelector("#nombre");
    const descripcion = document.querySelector("#descripcion");
    const precio =  document.querySelector("#precio");
    const cantidad = document.querySelector("#cantidad");
   
    const producto = CrearProducto(nombre.value, descripcion.value, parseFloat(precio.value), cantidad.value);
    InsertarProducto(producto);
    lista=getListaProductos();
    console.log(lista);
    let html = '';
    lista.forEach(producto => {
    html += `
        <div>
        <h3>Nombre: ${producto.nombre}</h3>
        <p>Descripción: ${producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <button class="btn_reservar" onclick="Reservar('${producto.nombre}')">Reservar</button>
        <button class="btn_editar" onclick="Editarr('${producto.nombre}')">Editar</button>
        </div>
    `;
    });

div2.innerHTML = html;

    // div2.innerHTML="<div>"+MostrarMenu(lista)+"</div>";

    // divAgregarProducto.innerHTML = "<div>" +"Nombre: "+ producto.nombre + "<br>" + "descripcion: " +producto.descripcion + "<br>" + "precio: "+ producto.precio + "<br>" + "cantidad: "+producto.cantidad + "</div>";
});