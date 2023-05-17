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

function eliminarProducto(nombreProducto) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].nombre === nombreProducto) {
        lista.splice(i, 1);
        console.log("Producto eliminado: " + nombreProducto);
        return;
      }
    }
    console.log("El producto no existe.");
  }
  
  // Llama a esta función cuando desees eliminar un producto específico
  function eliminarProductoEspecifico(nombreProducto) {
    eliminarProducto(nombreProducto);
    // Vuelve a renderizar la lista actualizada de productos
    renderizarProductos();
  }
  
  // Renderiza la lista de productos en el div correspondiente
  function renderizarProductos() {
    let html = '';
    lista.forEach(producto => {
      html += `
        <div>
          <h3>Nombre: ${producto.nombre}</h3>
          <p>Descripción: ${producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <p>Cantidad: ${producto.cantidad}</p>
          <button class="btn_reservar" onclick="Reservar('${producto.nombre}')">Reservar</button>
          <button class="btn_editar" onclick="Editar('${producto.nombre}')">Editar</button>
          <button class="btn_eliminar">Eliminar</button>
        </div>
      `;
    });
    div2.innerHTML = html;
    const btnsReservar = document.getElementsByClassName("btn_reservar");
    const btnsEliminar = document.getElementsByClassName("btn_eliminar");
    for (let i = 0; i < btnsEliminar.length; i++) {
    btnsEliminar[i].addEventListener("click", function () {
      
      alert('se elimino correctamente');
      });
    }
    for (let i = 0; i < btnsReservar.length; i++) {
    btnsEliminar[i].addEventListener("click", function () {
      elimin(lista[i].nombre);
      alert('se elimino correctamente');
      });
    }
  }

  formAgregarProducto.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.querySelector("#nombre");
    const descripcion = document.querySelector("#descripcion");
    const precio = document.querySelector("#precio");
    const cantidad = document.querySelector("#cantidad");
  
    const producto = CrearProducto(nombre.value, descripcion.value, parseFloat(precio.value), cantidad.value);
    InsertarProducto(producto);
    lista = getListaProductos();
    console.log(lista);
    renderizarProductos();
  });
 