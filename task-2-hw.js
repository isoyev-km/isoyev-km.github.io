'use strict'

const total = 100;
let ordered = prompt('Введите необходимое кол-во товаров')

if (ordered > total) {
    console.log(`На складе недостаточно товаров! На даный момент в наличии имеется ${total} товаров`)
} else {
    console.log(`Заказ оформлен! С вами свяжется манагер`);
}
