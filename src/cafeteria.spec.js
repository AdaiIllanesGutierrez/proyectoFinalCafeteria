import { Reservar, MostrarMenu,MostrarListaReservas, CrearNombreDeProducto, CrearDescripcionProducto} from "./cafeteria.js";

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
    expect(Reservar(["cafe","mocca","te"],["cafe"])).toEqual(["cafe"]);
  });
  it("Agregar los dos primeros productos de la lista a la lista de reservas", () => {
    expect(Reservar(["cafe","mocca"],["cafe","mocca"])).toEqual(["cafe","mocca"]);
  });
  it("deberia buscar el producto de la lista de reservas en la lista de productos ", () => {
    expect(Reservar(["cafe","mocca"],["mocca"])).toEqual(["mocca"]);
  });
  it("deberia buscar los productos de la lista de reservas en la lista de productos y devolver la lista de reservas", () => {
    expect(Reservar(["cafe","mocca","te","sandwich"],["mocca","sandwich"])).toEqual(["mocca","sandwich"]);
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
    expect(CrearNombreDeProducto("cafe")).toEqual("cafe");
  });
  it("deberia devolver la descripcion de un producto", () => {
    expect(CrearDescripcionProducto("250ml. en un vaso, azucar a gusto del cliente")).toEqual("250ml. en un vaso, azucar a gusto del cliente");
  });
  /*it("deberia devolver la descripcion de un producto", () => {
    expect(CrearPrecioProducto(3.00)).toEqual(3.00);
  });*/
});