import MostrarMenu from "./cafeteria";

const div2 = document.querySelector("#menu-div");
const productos= MostrarMenu(["cafe","mocca","te"]);
console.log(productos);

div2.innerHTML = "<div>" + productos[0] + productos[1]+productos[2]+"</div>" ;

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   // const firstNumber = Number.parseInt(first.value);
//   // const secondNumber = Number.parseInt(second.value);
//   const productos= Cafeteria();
//   console.log(productos);
//   //div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
//   div2.innerHTML = "<div>" + Cafeteria() + "</div>";
// });
