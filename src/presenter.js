import { Reservar, MostrarMenu,MostrarListaReservas, CrearProducto, InsertarProducto, getListaProductos, getListaProductosReservas,editarProducto,eliminarProducto, ActualizarMenuCantidadProductoXReserva,ActualizarMenuCantidadProductoXReservaEliminado,MostrarPorCategoria} from "./cafeteria.js";
import { Producto } from "./classProducto.js";

const div2 = document.querySelector("#menu-div");
const div3 = document.querySelector("#reservas-div");

const divCateg = document.querySelector("#div-categorias");
const selectCategoria = document.querySelector("#select-categoria");

const formAgregarProducto = document.querySelector("#agregarProducto-form");
const adminButton = document.getElementById("adminButton");
const adminDiv = document.getElementById("admin");
const cliButton = document.getElementById("clienteButton");
const clienteDiv = document.getElementById("cliente");

let lista=[];
let ListaReservas=[];

adminDiv.style.display = "none";


adminButton.addEventListener("click", function() {
  adminDiv.style.display = "block";
  clienteDiv.style.display = "none";
});
cliButton.addEventListener("click", function() {
  adminDiv.style.display = "none";
  clienteDiv.style.display ="block";
});


formAgregarProducto.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.querySelector("#nombre");
    const descripcion = document.querySelector("#descripcion");
    const precio = document.querySelector("#precio");
    const cantidad = document.querySelector("#cantidad");
    const categoria = document.querySelector("#categoria");

    const producto = CrearProducto(nombre.value, descripcion.value, parseFloat(precio.value), cantidad.value,categoria.value);
    if (nombre.value === '' || descripcion.value === '' || precio.value === '' || cantidad.value === '') {
      alert('Todos los campos deben estar llenos');
      return; 
    }
    // localStorage.setItem("myCat", "Tom");
    
    InsertarProducto(producto);
    // lista = getListaProductos();
    renderizarProductos();
});

selectCategoria.addEventListener("change", function() {
  let categoriaSeleccionada = selectCategoria.value;
  let listaFiltrada = MostrarPorCategoria(categoriaSeleccionada, lista);
  MostrarPorCategoriaProductos(listaFiltrada);
});
function MostrarPorCategoriaProductos(listafiltrada){
let html='<h2>categorias</h2>';

listafiltrada.forEach(producto=>{
  html += `
          <div>
            <h3>Nombre: ${producto.nombre}</h3>
            <p>Descripción: ${producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <p>Categoria: ${producto.categoria}</p>
            <button class="btn_reservar">Reservar</button>
            </div>
            `;
    });
    divCateg.innerHTML=html;
}

function renderizarProductos() {
    let html = '<h1>MENÚ CAFETERIA CATO</h1>';

    let htmlReservas = '<h1>Mis RESERVAS</h1>';
    lista=getListaProductos();
    localStorage.setItem('productos',JSON.stringify(lista));
    //JSON.parse(localStorage.getItem('productos'));
    lista.forEach(producto => {
        html += `
          <div>
            <h3>Nombre: ${producto.nombre}</h3>
            <p>Descripción: ${producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <p>Categoria: ${producto.categoria}</p>
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
            <p>Categoria: ${producto.categoria}</p>
            <button class="btn_eliminarReserva">Eliminar</button>
            <button class="btn_confirmarReserva">Confirmar</button>
          </div>
        `;
    });


      div2.innerHTML = html;
      div3.innerHTML = htmlReservas;
      const btnsReservar = document.getElementsByClassName("btn_reservar");
      const btnsEliminar = document.getElementsByClassName("btn_eliminar");
      const btnsEliminarReserva = document.getElementsByClassName("btn_eliminarReserva");
      for (let i = 0; i < btnsEliminar.length; i++) {
      btnsEliminar[i].addEventListener("click", function () {
        //eliminarProductoEspecifico(lista[i].nombre);
        eliminarProducto(lista[i].nombre,lista);
        renderizarProductos();
        alert('se elimino correctamente');
        });
      }
      for (let i = 0; i < btnsReservar.length; i++) {
        btnsReservar[i].addEventListener("click", function () {
        ListaReservas = getListaProductosReservas();
        ListaReservas = Reservar(lista, [lista[i]], ListaReservas);
        ListaReservas[ListaReservas.length - 1].cantidad = 1; 
        lista = ActualizarMenuCantidadProductoXReserva(lista, i, 1);
        alert('se reservo correctamente');
        // lista=getListaProductos();
        renderizarProductos();
        });
      }
      for (let i = 0; i <  btnsEliminarReserva.length; i++) {
        btnsEliminarReserva[i].addEventListener("click", function () {
        let pos = lista.indexOf(ListaReservas[i].nombre);
        ListaReservas = eliminarProducto(ListaReservas[i].nombre,ListaReservas);
        //lista = ActualizarMenuCantidadProductoXReservaEliminado(lista, pos, 1);
        alert('se elimino la reserva reservo correctamente');
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
          const productoeditado = new Producto(nuevoNombre,nuevaDescripcion,nuevoPrecio,nuevaCantidad);
          lista[i]=productoeditado;  
          renderizarProductos();
    });
  }
}
  