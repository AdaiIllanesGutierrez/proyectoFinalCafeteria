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

function MostrarMenu(productos){
    return productos;
}
module.exports = { Reservar, MostrarMenu };