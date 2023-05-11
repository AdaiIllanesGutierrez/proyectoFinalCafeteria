import cafeteria from "./cafeteria.js";

describe("Sumar", () => {
  it("deberia mostrar un producto", () => {
    expect(cafeteria()).toEqual("cafe");
  });
});