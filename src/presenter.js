import { Reservar, MostrarMenu,MostrarListaReservas } from "./cafeteria.js";

const div2 = document.querySelector("#menu-div");
const div3 = document.querySelector("#reservas-div")
const reservas=MostrarListaReservas(["cafe","te"])
const productos= MostrarMenu(["cafe","mocca","te"]);
console.log(productos);

div2.innerHTML = "<div>" + productos[0] + " <br> " + productos[1]+ " <br> " + productos[2]+"</div>" ;
div3.innerHTML="<div>" + reservas[0] + " <br> " + reservas[1]+ " <br> " +"</div>" ;
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const Producto = nombreProducto.value;
//   div2.innerHTML = "<div>" + Producto + "</div>";
// });
