'use strict'

const ADMIN_PASSWORD = 'jqueryismyjam';

let message = prompt('Введите пароль');

if (message == null) {
    message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD == message) {
    message = 'Добро пожаловать!';
} else if (ADMIN_PASSWORD != message) {
    message = 'Доступ запрещен, неверный пароль!';
}
    
alert(message);