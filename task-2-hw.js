'use strict'

const total = 100;
let ordered = prompt('Введите необходимое кол-во товаров')

if (ordered > total) {
    console.log(`На складе недостаточно товаров!`)
} else {
    console.log(`Заказ оформлен! С вами свяжется менеджер`);
}