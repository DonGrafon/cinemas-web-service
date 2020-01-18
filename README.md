# Cinemas Service
Веб-сервис позволяет хранить, записывать, изменять, удалять информацию о кинотеатрах и их сеансах.

## Cinema (кинотеатр)
- Получение по ID: `GET /cinemas/:id`
   - Доп. параметры не нужны
   - Пример ответа: 
   ```json 
  {
  "id": 2,
  "cinema_name": "Пять звезд",
  "amount_of_halls": 3,
  "amount_of_places": 250,
  "threeD": true,
  "adress": "Пролетарский проспект, д. 10",
  "city_name": "Сочsи"
  }
   ```
- Поиск по различным параметрам: `GET /cinemas/`
    - Доступные URL(query) параметры:
        - sort: тип сортировки (`ASC` или `DESC`, по умолчанию `ASC`)
        - limit: максимум результатов (по умолчанию 10)
        - offset: "отступ" от начала списка результатов, полезно для пагинации (по умолчанию 0)
        - cinema_name: название или часть названия кинотеатра
        - maxAmount_of_halls: максимальное количество залов
        - maxAmount_of_places: максимальное количество мест
        - threeD: наличие 3Д в кинотеатре
        - adress: полный или частичный адрес кинотеатра
        - city_name: полный или частичный город кинотеатра
    - Пример ответа: 
    ```json 
    [
      {
      "id": 5,
      "cinema_name": "Пять звезд",
      "amount_of_halls": 3,
      "amount_of_places": 250,
      "threeD": true,
      "adress": "Пролетарский проспект, д. 10",
      "city_name": "Сочи"
      },
    ]
    ```
- Добавление кинотеатра: `POST /race`
    - Необходимые поля в теле: 
        - cinema_name: название кинотеатра
        - amount_of_halls: количество залов в кинотеатре
        - amount_of_places: общее количество мест в кинотеатре
        - threeD: наличие 3Д оборудования
        - adress: адрес местонахождения кинотеатра
        - city_name: город, в котором находится кинотеатр
    - Пример ответа: 
    ```json
    {
      "cinema_name": "Шесть звезд",
      "amount_of_halls": 3,
      "amount_of_places": 250,
      "threeD": true,
      "adress": "Пролетарский проспект, д. 10",
      "city_name": "Москва",
      "id": 9
    }
    ```   
- Редактирование кинотеатра: `PUT /cinemas/:id`
    - Доступные поля в теле:
        - amount_of_halls: количество залов в кинотеатре
        - amount_of_places: общее количество мест в кинотеатре
        - threeD: наличие 3Д оборудования
    - Пример ответа: 
    ```json
    {
      "id": 2,
      "cinema_name": "Пять звезд",
      "amount_of_halls": 3,
      "amount_of_places": 250,
      "threeD": true,
      "adress": "Пролетарский проспект, д. 10",
      "city_name": "Сочsи"
    }
    ```
- Удаление кинотеатра: `DELETE /cinemas/:id`
    - Дополнительные параметры не нужны
    - Пример ответа: 
    ```json
    {
      "raw": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
      },
      "affected": 1
    }
    ```

### MovieFormat (формат просматриваемого фильма)
Доступные форматы: '2D', '3D' 
## Session (сеанс)
- Получение по ID: `/sessions/:id`
    - Доп. параметры не нужны
    - Пример ответа:
    ```json
    {
      "id": 1,
      "time": "2019-11-09T07:00:00.000Z",
      "price": 200,
      "places": 50,
      "movie_format": "3D",
      "cinema_name": "Пять звезд",
      "movie_name": "Доктор Сон"
    }
    ```
- Добавление кинотеатра: `POST /race`
    - Необходимые поля в теле: 
        - time: время проведения сеанса
        - price: цена за билет на данный сеанс
        - places: общее количество мест на сеанс
        - movie_format: формат просматриваемого фильма
        - cinema_name: кинотеатр, в котором проводится сеанс показа
        - movie_name: название фильма, показываемого на сеансе
    - Пример ответа: 
    ```json
    {
      "time": "2019-11-09T07:00:00.000Z",
      "price": 200,
      "places": 50,
      "movie_format": "2D",
      "cinema_name": "Пять звезд",
      "movie_name": "Доктор Сон",
      "id": 3
    }
    ```   
- Изменение сеанса: `PUT /sessions/:id`
    - Доступные поля в теле:
        - price: цена за билет
        - places: общее количество мест на сеанс
        - cinema_name: кинотеатр сеанса
        - movie_name: название фильма
    - Пример ответа: 
    ```json
    {
      "id": 1,
      "time": "2019-11-09T07:00:00.000Z",
      "price": 250,
      "places": 250,
      "movie_format": "3D",
      "cinema_name": "Шесть звезд",
      "movie_name": "Доктор Сон"
    }
    ```   
- Удаление сеанса: `DELETE /sessions/:id`
    - Дополнительные параметры не нужны
    - Пример ответа: 
    ```json
    {
      "raw": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
      },
      "affected": 1
    }
    ```