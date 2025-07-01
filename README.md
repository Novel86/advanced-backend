<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

[Видео на youtube](https://youtu.be/dDeWWQWMM-Y?si=ZCE8oD8ln8XBenGt)

# 📦 Продвинутый BACKEND На Node.js (NestJS & Docker) — Полный Курс

## 📌 План Курса

- Работа с REST API и архитектура серверного приложения
- Регистрация и авторизация с ролями
- PostgreSQL + SQLAlchemy
- Документация Swagger
- Конфигурации dev/prod
- Валидация данных
- Упаковка в Docker и Docker Compose

---

## ⏱️ Таймкод И Темы

### 00:03 — Введение

- Обзор целей и структуры проекта

---

### 02:02 — Начало Разработки

- Установка Node.js и Nest CLI
- Инициализация проекта
- `main.ts` и функция `start()`
- Порт по умолчанию: `5000`

---

### 03:59 — Создание Модуля

- `AppModule` через `app.module.ts`
- Использование декораторов
- `create(AppModule)`

---

### 05:59 — Создание Контроллера

- `AppController` + декораторы
- Регистрация контроллера
- `getUsers()` — возврат массива объектов

---

### 07:56 — Создание Провайдера

- `AppService` и `@Injectable()`
- Инъекция сервиса в контроллер

---

### 09:51 — Подключение К БД

- PostgreSQL + SQLAlchemy
- Конфигурация: порт `5432`, логин `postgres`, пароль `root`
- БД: `nest_course`
- `autoCreateModels: true`

---

### 10:50 — Проверка Подключения

- Проверка через pgAdmin
- Запуск приложения: БД должна существовать

---

### 11:48 — Визуализация БД

- Создание БД вручную
- Удаление лишних сервисов/контроллеров

---

### 12:48 — Модуль Пользователей

- `nest g module users`
- Генерация контроллера и сервиса

---

### 13:40 — Конфигурация БД

- Вынесение конфигурации в отдельный файл
- Использование `nest-js-config`

---

### 16:15 — Конфигурация dev/prod

- `development.json` и `production.json`
- Переменная окружения определяет режим

---

### 18:15 — Модель Пользователя

- ID, email, password, isBanned, banReason
- Ограничения: уникальность, PK
- Регистрация модели

---

### 21:48 — Работа С Моделью

- Репозиторий: создание и получение пользователей
- Инъекция через `injectRepository`

---

### 22:48 — DTO И CRUD

- DTO для пользователя
- Создание и получение пользователей

---

### 24:40 — Эндпойнты Пользователей

- `create()` через POST, `getAll()` через GET
- Инъекция сервиса

---

### 25:39 — Тестирование Пользователей

- Postman: создание и получение
- Проверка таблицы PostgreSQL

---

### 26:38 — Документация API

- Установка: `nestjs-swagger`, `swagger-ui-express`
- Настройка в `main.ts`

---

### 27:03 — Swagger-документация

- Название, описание, версия
- `@ApiOperation()`, `@ApiResponse()`

---

### 29:20 — Документация Модели

- `@ApiProperty()` с примерами

---

### 31:27 — Группировка Эндпойнтов

- `@ApiTags()` и описание контроллеров

---

### 32:23 — Роли Пользователей

- Модуль, контроллер и сервис ролей
- Связь "многие ко многим"

---

### 35:37 — Промежуточная Таблица `user_roles`

- Внешние ключи
- Декораторы `@ForeignKey`

---

### 37:54 — Добавление Ролей

- `createRole`, `getRoleByValue`
- JSON-формат и репозиторий

---

### 41:52 — Присвоение Ролей

- Получение роли по умолчанию
- Обновление связи user-role

---

### 43:47 — Пользователи С Ролями

- `getUsers()` + `include`

---

### 44:44 — Авторизация

- Модуль `auth`
- JWT и шифрование паролей

---

### 49:18 — Регистрация

- Проверка email
- Хеширование пароля
- Возврат токена

---

### 52:19 — Декодирование Токена

- Добавление поля `roles` в payload

---

### 53:16 — Функция Авторизации

- `compare()` пароля
- Ошибка при несовпадении

---

### 56:03 — Auth Guard

- `CanActivate`, `@UseGuards()`
- Проверка заголовка авторизации

---

### 59:03 — Кольцевая Зависимость

- `forwardRef()` для импорта модулей

---

### 1:00:52 — Проверка Ролей

- `RoleGuard` и декоратор `@Roles()`

---

### 1:03:46 — Тестирование Ролей

- Доступ к эндпойнтам по ролям

---

### 1:04:44 — Статус Доступа

- Forbidden при отсутствии ролей

---

### 1:05:29 — Создание Пользователя С Ролью

- Роль: `admin`
- Проверка доступа

---

### 1:06:29 — Эндпойнт Выдачи Ролей

- JSON-запрос
- Доступ только для админов

---

### 1:07:38 — Бан Пользователей

- `banUser()` с ID и причиной
- Обновление модели

---

### 1:09:31 — Тестирование Ролей И Бана

- Postman: запросы, ошибки, подтверждение

---

### 1:13:05 — Пайпы И Валидация

- Валидация email, пароля
- `class-validator`, `ValidationPipe`

---

### 1:15:58 — Обработка Ошибок Валидации

- Кастомная ошибка, JSON-ответ

---

### 1:18:15 — Декоратор US Pipe

- Валидация через `@UsePipes()`

---

### 1:19:15 — Преобразование Ошибок

- `.join()` и формат сообщений

---

### 1:20:13 — Глобальные Пайпы

- Установка `ValidationPipe` глобально

---

### 1:21:29 — Модуль Постов

- `title`, `content`, `image`
- Связь с пользователями

---

### 1:23:48 — Контроллер Постов

- Внешний ключ на пользователя
- Эндпойнт `createPost`

---

### 1:26:15 — Работа С Файлами

- `@UploadedFile()`, `interceptors`
- Перезапись поля `image`

---

### 1:30:13 — Уникальные Имена Файлов

- `uuid`, проверка папки
- Запись на диск

---

### 1:32:08 — Interceptor Для Файлов

- Возврат результата `create`

---

### 1:33:02 — Статика

- `ServeStaticModule`
- Папка `static`, доступ через браузер

---

### 1:33:56 — Итоги

- Пользователи, роли, посты, валидация, файлы

---

## 🐳 Docker И Деплой

### 1:34:55 — Dockerfile

- Образ, рабочая директория
- `npm install`, `npm run start`

---

### 1:35:54 — Docker Compose

- Сервисы: `main`, `postgres`
- Порты, зависимости

---

### 1:37:45 — PostgreSQL

- Образ: `postgres:12`
- Переменные окружения, том

---

### 1:38:30 — Запуск

- `docker-compose build`
- `docker-compose up`
- Заменить `localhost` на `postgres`

---

### 1:40:26 — Финал

- Всё работает 🎉
- Создание ролей/пользователей через Postman
- Обратная связь
