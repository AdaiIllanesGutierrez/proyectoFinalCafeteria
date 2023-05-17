/*describe("Mostrar Menu", () => {
    it("Shows the menu", () => {
      cy.visit("/");
    //   cy.get("#primer-numero").type(4);
    //   cy.get("#segundo-numero").type(5);
    //   cy.get("#sumar-button").click();
      cy.get("#menu-div").should("contain", "cafe","mocca","te");
    });
  });
  describe("Mostrar Reservas", () => {
    it("Mostrar Reservas", () => {
      cy.visit("/");
      cy.get("#reservas-div").should("contain", "cafe","te");
    });
  });*/
  describe("Prueba de visualización de productos", () => {
    it("Verifica que los productos se muestren correctamente", () => {
      // Ingresa a la página que muestra los productos
      cy.visit("/");
  
      // Simula una lista de productos
      const listaProductos = [
        {
          nombre: "Producto 1",
          descripcion: "Descripción del producto 1",
          precio: 10.99,
          cantidad: 5,
        },
        {
          nombre: "Producto 2",
          descripcion: "Descripción del producto 2",
          precio: 19.99,
          cantidad: 10,
        },
        // Agrega más productos según sea necesario
      ];
  
      // Renderiza los productos en el HTML
      let html = "";
      listaProductos.forEach(producto => {
        html += `
          <div>
            <h3>Nombre: ${producto.nombre}</h3>
            <p>Descripción: ${producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <button class="btn_reservar" onclick="Reservar('${producto.nombre}')">Reservar</button>
            <button class="btn_editar" onclick="Editar('${producto.nombre}')">Editar</button>
            <button class="btn_eliminar">Eliminar</button>
          </div>
        `;
      });
  
      // Inserta los productos renderizados en el HTML de la página
      cy.get("#menu-div").then(div => {
        div.html(html);
      });
  
      // Verifica que los productos se muestren correctamente en la página
      listaProductos.forEach(producto => {
        cy.contains("Nombre: " + producto.nombre);
        cy.contains("Descripción: " + producto.descripcion);
        cy.contains("Precio: " + producto.precio);
        cy.contains("Cantidad: " + producto.cantidad);
      });
    });
  });
  