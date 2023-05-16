import { Producto } from "./classProducto";

function Reservar(productos,reservas)
{
    let listaReservas= [];
    for(var i=0;i<productos.length;i++)
    {
        for(var j=0;j<reservas.length;j++)
        {
            if(productos[i]===reservas[j])
            {
                listaReservas.push(productos[i])
            }
        }
    }
    return listaReservas;
}
function MostrarListaReservas(reservas){
    return reservas;
}
function MostrarMenu(productos){
    return productos;
}

function CrearProducto(nombre, descripcion, precio, cantidad){
    return new Producto(nombre, descripcion, precio, cantidad);
}

function cafeteria(){
    let ListadeReservas=[];
    let ListadeProductos=[];
    ListadeProductos=MostrarMenu(["cafe","mocca","te","sandwich"]);
    listaReservas=Reservar(ListadeProductos,["cafe","te"])
    var res=MostrarListaReservas(listaReservas);
}
module.exports = { Reservar, MostrarMenu,MostrarListaReservas, CrearProducto};