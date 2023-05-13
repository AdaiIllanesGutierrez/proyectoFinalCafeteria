function Reservar(productos,reservas)
{
    let listaReservas= [];
    listaReservas.push(productos[0]);
    return listaReservas;
}

function MostrarMenu(productos){
    return productos;
}
module.exports = { Reservar, MostrarMenu };