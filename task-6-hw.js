"use strict";


let total = 0;
let input;

do {
  input = prompt("Введите любое число");
  
  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
  }
  total += +input;
} while (input !== null);``

alert(`Общая сумма чисел равна ${total}`);