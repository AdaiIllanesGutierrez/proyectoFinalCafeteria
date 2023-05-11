import MostrarMenu from "./cafeteria.js";

describe("Sumar", () => {
  it("deberia mostrar un producto", () => {
    expect(MostrarMenu("cafe")).toEqual("cafe");
  });
  it("deberia mostrar  una lista  de productos", () => {
    expect(MostrarMenu(["cafe","mocca","te"])).toEqual(["cafe","mocca","te"]);
  });
});