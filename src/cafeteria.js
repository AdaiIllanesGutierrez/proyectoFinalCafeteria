import { Producto } from "./classProducto";
let listaProductos=[];
let Reservas = [];

function Reservar(productos,reservas,listaReservas)
{
    console.log(reservas);
    for(var i=0;i<productos.length;i++)
    {
        for(var j=0;j<reservas.length;j++)
        {
            if(CompararNombresProductos(productos[i],reservas[j]))
            {
                listaReservas.push(productos[i])
                return listaReservas;
            }
        }
    }
    return listaReservas;
}
function MostrarListaReservas(reservas){
    return reservas;
}
function MostrarMenu(lista){
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
    return producto1.nombre == producto2.nombre;
}
// function cafeteria(){
//     let ListadeReservas=[];
//     let ListadeProductos=[];
//     ListadeProductos=MostrarMenu(["cafe","mocca","te","sandwich"]);
//     listaReservas=Reservar(ListadeProductos,["cafe","te"])
//     var res=MostrarListaReservas(listaReservas);
    
// }

module.exports = { Reservar, MostrarMenu,MostrarListaReservas, CrearProducto, InsertarProducto, getListaProductos, getListaProductosReservas,  CompararNombresProductos};