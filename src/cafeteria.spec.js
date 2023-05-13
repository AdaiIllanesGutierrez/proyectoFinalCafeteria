import { Reservar, MostrarMenu } from "./cafeteria.js";

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
    expect(Reservar(["cafe","mocca","te"],[""])).toEqual(["cafe"]);
  });
  // it("Agregar dos productos de la lista a la lista de reservas", () => {
  //   expect(Reservar(["cafe","mocca"]).toEqual("cafe");
  // });
});