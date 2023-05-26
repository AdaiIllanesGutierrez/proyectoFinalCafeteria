import { Producto } from "./classProducto";
let listaProductos=[];
let Reservas = [];

function ActualizarMenuCantidadProductoXReservaEliminado(listaMenu, posicion, cantidad){
    listaMenu[posicion].cantidad = listaMenu[posicion].cantidad + cantidad;
    return listaMenu;
}

function ActualizarMenuCantidadProductoXReserva(listaMenu, posicion, cantidad){
    listaMenu[posicion].cantidad = listaMenu[posicion].cantidad - cantidad;
    return listaMenu;
}

function Reservar(productos,reservas,listaReservas)
{
    for(var i=0;i<productos.length;i++)
    {
        for(var j=0;j<reservas.length;j++)
        {
            if(CompararNombresProductos(productos[i],reservas[j]))
            {
                if(typeof(productos[i]) == "object"){
                    let nuevo = new Producto(productos[i].nombre, productos[i].descripcion,productos[i].precio,productos[i].cantidad);
                    listaReservas.push(nuevo);
                }
                else{
                    listaReservas.push(productos[i]);
                }
                
            }
        }
    }
    return listaReservas;
}

function MostrarListaReservas(reservas){
    return reservas;
}
function MostrarMenu(lista)
{
    for(var i=0;i<lista.length;i++)
    {
        lista[i].ActualizarDisponibilidad();
        if(lista[i].disponible===false)
        {
            lista.splice(i,1);
        }
    }
    return lista;
}

function CrearProducto(nombre, descripcion, precio, cantidad){
    return new Producto(nombre, descripcion, precio, cantidad);
}
function InsertarProducto(producto)
{
    listaProductos.push(producto);
}

function getListaProductos(){
    return listaProductos;
}

function getListaProductosReservas(){
    return Reservas;
}

function CompararNombresProductos(producto1, producto2){
    if(typeof(producto1) == "string" && typeof(producto2) == "string"){
        return producto1 == producto2;    
    }
    else if(typeof(producto1) == "object" && typeof(producto2) == "object"){
        return producto1.nombre == producto2.nombre;
    }
    
}
function eliminarProducto(nombreProducto,listaProductos) {
    for (let i = 0; i < listaProductos.length; i++) {
      if (listaProductos[i].nombre === nombreProducto) {
        listaProductos.splice(i, 1);
        return listaProductos;
      }
    }
}


function editarProducto(producto1, producto2){
    return producto2;
}

module.exports = { Reservar, MostrarMenu,MostrarListaReservas, CrearProducto, InsertarProducto, getListaProductos, getListaProductosReservas,  CompararNombresProductos,editarProducto,eliminarProducto,ActualizarMenuCantidadProductoXReserva,ActualizarMenuCantidadProductoXReservaEliminado};
