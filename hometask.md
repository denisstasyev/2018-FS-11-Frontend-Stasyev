## Домашнее задание 3

- Ознакомиться с документацией по ссылкам
  - [EventLoop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
  - Интерфейсы [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) и [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
  - Объекты [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
  - [Geolocation API](https://developer.mozilla.org/ru/docs/Web/API/Geolocation/Using_geolocation)
  - [File API](https://developer.mozilla.org/ru/docs/web/api/file)
- Добавить на страницу список сообщений, отображающий сообщения пользователя и его собеседника
  - Сообщения пользователя выделены цветом и выравниваются по правому крую
  - Стилизовать сообщения в соответствии с макетом
- При отправке непустой формы создания сообщения добавлять в список новое сообщение
  - Для связи между формой и списком сообщений использовать `CustomEvent`
- Создать и добавить в форму веб-компонент для выбора файла
  - При выборе файла создавать новое сообщение с информацией о нем
  - Если выбран файл изображения – отображать в списке сообщений его миниатюру
- Bonus
  - Добавить в форму компонент запрашивающий местоположение пользователя и сохраняющее координаты в поле формы
  - Реализовать возможность выбора файла с помощью Drag&Drop

## Домашнее задание 4

- Ознакомиться с документацией по ссылкам
	 - [Анализ процесса визуализации](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp?hl=ru)
	 - [Same origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) и [CORS](https://developer.mozilla.org/ru/docs/Web/HTTP/CORS)
	 - [XHR](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest) и [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
	 - [jsonp](https://learn.javascript.ru/ajax-jsonp)
- Изменить обработчик отправки формы таким образом, чтобы данные формы передавались на сервер
	 - В качестве сервера можно временно использовать [пример](https://gist.github.com/zipp3r/100f542baa2aad65b1f10b69a0082017), установив для него зависимости `express` и `express-fileupload`
	 - Для отправки запроса использовать `Fetch`
	 - Значения полей объекта сообщения (автор/дата отправки/текст/файл) собирать в объекте `FormData`
- Бонус
	- Отображать для сообщений в списке статус отправки (загружается/загружено), изменяя значок с "галочками"
	- Настроить публикацию и установку пакета со статикой ([Scoped packages](https://docs.npmjs.com/getting-started/scoped-packages))
		 - Зарегистрировать пользователя на npmjs.org
			 - Изменить имя пакета таким образом, чтобы оно использовала имя вашего пользователя как namespace (`@user/package`)
			 - Определить секцию [files](https://docs.npmjs.com/files/package.json#files) в `package.json`, чтобы публиковать только результаты сборки
			 - Опубликовать пакет, как публичный: `npm publish --access=public`
			 - Инициализировать npm в репозитории backend-приложения
			 - Установить пакет с результатами сборки как зависимость