import { Reservar, MostrarMenu,MostrarListaReservas, CrearProducto} from "./cafeteria.js";

const div2 = document.querySelector("#menu-div");
const div3 = document.querySelector("#reservas-div")
const reservas=MostrarListaReservas(["cafe","te"])
const productos= MostrarMenu(["cafe","mocca","te"]);
const formAgregarProducto = document.querySelector("#agregarProducto-form");
const divAgregarProducto = document.querySelector("#agregarProducto-div")
console.log(productos);

// div2.innerHTML = "<div>" + productos[0] + " <br> " + productos[1]+ " <br> " + productos[2]+"</div>" ;
// div3.innerHTML="<div>" + reservas[0] + " <br> " + reservas[1]+ " <br> " +"</div>" ;
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const Producto = nombreProducto.value;
//   div2.innerHTML = "<div>" + Producto + "</div>";
// });

formAgregarProducto.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.querySelector("#nombre");
    const descripcion = document.querySelector("#descripcion");
    const precio =  document.querySelector("#precio");
    const cantidad = document.querySelector("#cantidad");
    console.log(nombre);
    console.log(cantidad);
    const producto = CrearProducto(nombre.value, descripcion.value, parseFloat(precio.value), cantidad.value);
    
    divAgregarProducto.innerHTML = "<div>" +"Nombre: "+ producto.nombre + "<br>" + "descripcion: " +producto.descripcion + "<br>" + "precio: "+ producto.precio + "<br>" + "cantidad: "+producto.cantidad + "</div>";
});
