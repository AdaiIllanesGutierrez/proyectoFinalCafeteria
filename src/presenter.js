import { Reservar, MostrarMenu,MostrarListaReservas, CrearProducto, InsertarProducto, getListaProductos, getListaProductosReservas,eliminarProducto} from "./cafeteria.js";

const div2 = document.querySelector("#menu-div");
const div3 = document.querySelector("#reservas-div");


const formAgregarProducto = document.querySelector("#agregarProducto-form");
const divAgregarProducto = document.querySelector("#agregarProducto-div");

let lista=[];
let ListaReservas=[];

  function editarProductoEspecifico(producto,nuevoValor){
    producto.textContent=nuevoValor;
  }
  
  function eliminarProductoEspecifico(nombreProducto) {
    eliminarProducto(nombreProducto,lista);
    
    renderizarProductos();
  }
  function editarProducto(nombreProducto) {
    
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].nombre === nombreProducto) {
        renderizarProductos();
        return;
      }
    }
  }
  
  function renderizarProductos() {
    let html = '';
    let htmlReservas = '';
    lista.forEach(producto => {
      html += `
        <div>
          <h3>Nombre: ${producto.nombre}</h3>
          <p>Descripción: ${producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <p>Cantidad: ${producto.cantidad}</p>
          <button class="btn_reservar">Reservar</button>
          <button class="btn_editar">Editar</button>
          <button class="btn_eliminar">Eliminar</button>
        </div>
      `;
    });
    ListaReservas.forEach(producto => {
      htmlReservas += `
        <div>
          <h3>Nombre: ${producto.nombre}</h3>
          <p>Descripción: ${producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <p>Cantidad: ${producto.cantidad}</p>
          <button class="btn_eliminar">Eliminar</button>
        </div>
      `;
    });
    div2.innerHTML = html;
    div3.innerHTML = htmlReservas;
    const btnsReservar = document.getElementsByClassName("btn_reservar");
    const btnsEliminar = document.getElementsByClassName("btn_eliminar");
    for (let i = 0; i < btnsEliminar.length; i++) {
    btnsEliminar[i].addEventListener("click", function () {
      eliminarProductoEspecifico(lista[i].nombre);
      alert('se elimino correctamente');
      });
    }
    for (let i = 0; i < btnsReservar.length; i++) {
      btnsReservar[i].addEventListener("click", function () {
      ListaReservas = getListaProductosReservas();
      ListaReservas = Reservar(lista, [lista[i]], ListaReservas);
      alert('se reservo correctamente');
      renderizarProductos();
      });
    }
    const btnsEditar = document.getElementsByClassName("btn_editar");
    for (let i = 0; i < btnsEditar.length; i++) {
        btnsEditar[i].addEventListener("click", function () {
          const nuevoNombre = prompt('Ingrese el nuevo nombre del producto');
        const nuevaDescripcion = prompt('Ingrese la nueva descripción del producto');
        const nuevoPrecio = parseFloat(prompt('Ingrese el nuevo precio del producto'));
        const nuevaCantidad = parseInt(prompt('Ingrese la nueva cantidad del producto'));
        lista[i].nombre = nuevoNombre;
        lista[i].descripcion = nuevaDescripcion;
        lista[i].precio = nuevoPrecio;
        lista[i].cantidad = nuevaCantidad;

        renderizarProductos();
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
    renderizarProductos();
  });
 