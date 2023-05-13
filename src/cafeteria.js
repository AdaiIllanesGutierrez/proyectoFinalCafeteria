function Reservar(productos,reservas)
{
    let listaReservas= [];
    for(var i=0;i<productos.length;i++)
    {
        if(productos[i]===reservas[0])
        {
            listaReservas.push(productos[i]);
        }
    }
    return listaReservas;
}

function MostrarMenu(productos){
    return productos;
}
module.exports = { Reservar, MostrarMenu };