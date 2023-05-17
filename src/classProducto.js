export class Producto{
    constructor(nombre, descripcion, precio, cantidad){
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._precio = precio;
        this._cantidad = cantidad;
    }

    get nombre(){
        return this._nombre;
    }

    get descripcion(){
        return this._descripcion;
    }

    get precio(){
        return this._precio;
    }

    get cantidad(){
        return this._cantidad;
    }
    
}