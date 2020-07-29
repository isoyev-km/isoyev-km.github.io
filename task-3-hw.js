'use strict'

const ADMIN_PASSWORD = 'jqueryismyjam';

const userInput = prompt('Введите пароль');
let message;

if (userInput == null) {
    message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD == userInput) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}
    
alert(message);