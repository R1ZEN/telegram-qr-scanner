# Telegram QR Scanner

Сканирует изображение, находит на картинке QR код и возвращает зашифрованный текст.

## Установка

Необходимо устновить:
- [Node.js](https://nodejs.org/en/) - версия не ниже 14.0.0;
- [npm](https://nodejs.org/en/) - версия не ниже 6.14.12;
- [Docker](https://www.docker.com/products/docker-desktop) - версия не ниже 20.10.13.

После успешной установки всего вышеперечисленного, открываем консоль в текушей дирректории и пишем:
```sh
$ npm install
```

## Запуск

Для запуска в development режиме, выполняем:
```sh
$ npm run dev
```

Для запуска в production режиме, выполняем:
```sh
$ npm run start
```

## Docker

Чтобы собрать к докер образ выполните:

```sh
$ docker build -t tg-qr-scanner .
```
