import { Reservar, MostrarMenu,MostrarListaReservas, CrearProducto,  CompararNombresProductos,eliminarProducto,editarProducto,getListaProductos,getListaProductosReservas,  ActualizarMenuCantidadProducto} from "./cafeteria.js";
import { Producto } from "./classProducto.js";


describe("Mostrar Lista de Productos Estatica", () => {
  it("deberia mostrar un producto", () => {
    expect(MostrarMenu("cafe")).toEqual("cafe");
  });
  it("deberia mostrar  una lista  de productos", () => {
    expect(MostrarMenu(["cafe","mocca","te"])).toEqual(["cafe","mocca","te"]);
  });
});

describe("Reservar un producto de una lista Estatica", () => {
  it("Agregar el primer producto de la lista a la lista de reservas", () => {
    expect(Reservar(["cafe","mocca","te"],["cafe"],[])).toEqual(["cafe"]);
  });
  it("Agregar los dos primeros productos de la lista a la lista de reservas", () => {
    expect(Reservar(["cafe","mocca"],["cafe","mocca"],[])).toEqual(["cafe","mocca"]);
  });
  it("deberia buscar el producto de la lista de reservas en la lista de productos ", () => {
    expect(Reservar(["cafe","mocca"],["mocca"],[])).toEqual(["mocca"]);
  });
  it("deberia buscar los productos de la lista de reservas en la lista de productos y devolver la lista de reservas", () => {
    expect(Reservar(["cafe","mocca","te","sandwich"],["mocca","sandwich"], [])).toEqual(["mocca","sandwich"]);
  });
});

describe("Mostrar Lista de Reservas Estatica", () => {
  it("deberia mostrar un producto", () => {
    expect(MostrarListaReservas("cafe")).toEqual("cafe");
  });
  it("deberia mostrar un producto", () => {
    expect(MostrarListaReservas(["cafe,mocca,te,sandwich"])).toEqual(["cafe,mocca,te,sandwich"]);
  });
});

describe("Crear un Producto", () => {
  it("deberia devolver el nombre de un producto", () => {
    expect(CrearProducto("cafe", "250ml. en un vaso, azucar a gusto del cliente", 3.00, 50).nombre).toEqual("cafe");
  });
  it("deberia devolver la descripcion de un producto", () => {
    expect(CrearProducto("cafe", "250ml. en un vaso, azucar a gusto del cliente", 3.00, 50).descripcion).toEqual("250ml. en un vaso, azucar a gusto del cliente");
  });
  it("deberia devolver el precio de un producto", () => {
    expect(CrearProducto("cafe", "250ml. en un vaso, azucar a gusto del cliente", 3.00, 50).precio).toEqual(3.00);
  });
  it("deberia devolver la cantidad de un producto", () => {
    expect(CrearProducto("cafe", "250ml. en un vaso, azucar a gusto del cliente", 3.00, 50).cantidad).toEqual(50);
  });
  it("deberia devolver verdadero si es igual al nombre entre dos productos", () => {
    expect(CompararNombresProductos(new Producto("cafe","",1.00, 2), new Producto("cafe","",2.00, 4))).toEqual(true);
  });
  it("deberia devolver verdadero si es igual al nombre entre dos productos", () => {
    expect(CompararNombresProductos("cafe", "cafe")).toEqual(true);
  });
});
describe("eliminar Un producto", () => {
  it("elimina un producto por el nombre", () => {
    const listaProductos = [
      { nombre: 'caffe' },
      { nombre: 'te' },
      { nombre: 'almuerzo' },
    ];
    expect(eliminarProducto('te',listaProductos)).toEqual([{ nombre: 'caffe' },{ nombre: 'almuerzo' },
    ]);
  });
});
describe("Editar Producto", () => {
  it("deberia editar el nombre de un producto", () => {
    expect(editarProducto(new Producto("","", 0,0), new Producto("caffe", "", 0,0).nombre)).toEqual("caffe");
  });
});
describe("Listas globales", () => {
  it("Deberia almacenar en la lista de menu global", () => {
    expect(getListaProductos()).toEqual([]);
  });
  it("Deberia almacenar en la lista de menu global", () => {
    expect(getListaProductosReservas()).toEqual([]);
  });
});

describe("Actualizar el inventario", () => {
  let producto;
  beforeEach(() => {
    producto = new Producto("cafe", "250ml. en un vaso, azucar a gusto del cliente", 3.00, 50);
  });
  it("Deberia cambiar la cantidad de un solo producto", () => {
    producto.cantidad = 49;
    expect(producto.cantidad).toEqual(49);
  });
  it("Deberia cambiar la cantidad de un solo producto", () => {
    expect(ActualizarMenuCantidadProducto([new Producto("caffe","cafe en vaso",5,10)], 0, 1)).toEqual([new Producto("caffe","cafe en vaso",5,9)]);
  });
});

