'use strict'

const chinaCost = 100;
const chileCost = 250;
const australiaCost = 170;
const indiaCost = 80;
const jamaicaCost = 120;

const countryToDeliver = prompt("В какую страну требуется доставка?");

if (countryToDeliver !== null) {
    switch (countryToDeliver.toLowerCase()) {
    case "china":
        console.log(`Доставка в ${countryToDeliver} будет стоить ${chinaCost} кредитов`);
        break;

    case "chile":
        console.log(`Доставка в ${countryToDeliver} будет стоить ${chileCost} кредитов`);
        break;

    case "australia":
        console.log(`Доставка в ${countryToDeliver} будет стоить ${australiaCost} кредитов`);
        break;

    case "india":
        console.log(`Доставка в ${countryToDeliver} будет стоить ${indiaCost} кредитов`);
        break;

    case "jamaica":
        console.log(`Доставка в ${countryToDeliver} будет стоить ${jamaicaCost} кредитов`);
        break;

    default: alert("В вашей стране доставка не доступна");
    }
} else {
    alert("Отменено пользователем.")

}