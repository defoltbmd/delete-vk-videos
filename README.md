Простой скрипт для удаления всех видео с Вашей страницы в ВК

Для выполнения нужно:

1) В Google Chrome войти в свой профиль (если ещё не вошли)
2) Перейти на страницу с видеозаписями, выбрать "Мои Видеозаписи"
3) Нажать клавишу F12 или правой кнопкой мыши в любом месте страницы -> "Исследовать элемент" (либо "Просмотреть код" либо "Просмотреть код элемента" в зависимости от версии браузера)
4) Перейти на вкладку "Console". В результате будет примерно так:

![image](http://puu.sh/zZLsd/87ffadd281.png "Выглядит примерно так")

5) Скопировать и вставить сам скрипт из файла [script.js](https://raw.githubusercontent.com/defoltbmd/delete-vk-videos/master/script.js) в консоль, нажать Enter, подтвердить удаление.

Подсказка: вк грузит обычно по 100 видеозаписей. Чтобы не запускать каждый раз скрипт, можно проскроллить страницу до конца, удерживая клавишу PageDown.
2000 видеозаписей будут удаляться около 10-30 секунд, ждите сообщения с подтверждением.

Скрипт предоставляется "как есть". Скрипт не требует ввода логина и пароля. Удалённые видеозаписи вернуть можно только вручную, не обновляя страницу. Используйте с умом.
