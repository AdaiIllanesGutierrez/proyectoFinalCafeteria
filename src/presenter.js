import MostrarMenu from "./cafeteria";

const div2 = document.querySelector("#menu-div");
const productos= MostrarMenu(["cafe","mocca","te"]);
console.log(productos);

div2.innerHTML = "<div>" + productos[0] + " <br> " + productos[1]+ " <br> " + productos[2]+"</div>" ;

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const Producto = nombreProducto.value;
//   div2.innerHTML = "<div>" + Producto + "</div>";
// });
