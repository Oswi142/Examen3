import restar from "./calculador";

const first = document.querySelector("#monto-venta");
const second = document.querySelector("#monto-efectivo");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + restar(secondNumber, firstNumber) + "</p>";
});
