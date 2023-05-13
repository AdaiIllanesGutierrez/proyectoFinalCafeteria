function Reservar(productos,reservas)
{
    let listaReservas= [];
    if(reservas.length==1)
    {
        listaReservas.push(productos[0]);
    }
    if(reservas.length==2)
    {
        listaReservas.push(productos[0]);
        listaReservas.push(productos[1]);
    }
    return listaReservas;
}

function MostrarMenu(productos){
    return productos;
}
module.exports = { Reservar, MostrarMenu };