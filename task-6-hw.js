"use strict";


let total = 0;
let input;

do {
  input = prompt("Введите любое число");
  total += +input;
  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
  }
  Number.total += input;
} while (input !== null);``

alert(`Общая сумма чисел равна ${total}`);