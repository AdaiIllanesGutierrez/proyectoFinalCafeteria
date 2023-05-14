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

function CrearNombreDeProducto(nombre){
    return nombre;
}

function CrearDescripcionProducto(descripcion){
    return descripcion;
}

function CrearPrecioProducto(precio){
    return precio;
}

function CrearCantidadProducto(cantidad){
    return cantidad;
}

function cafeteria(){
    let ListadeReservas=[];
    let ListadeProductos=[];
    ListadeProductos=MostrarMenu(["cafe","mocca","te","sandwich"]);
    listaReservas=Reservar(ListadeProductos,["cafe","te"])
    var res=MostrarListaReservas(listaReservas);
}
module.exports = { Reservar, MostrarMenu,MostrarListaReservas, CrearNombreDeProducto, CrearDescripcionProducto, CrearPrecioProducto, CrearCantidadProducto};