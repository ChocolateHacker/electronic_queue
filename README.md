# Отчет electronic_queue_by_seva_artsofte
Проверяющий: Кирилл Садовенко

## Что сделал ученик:
1 часть (22.02 - 1.03):
- Создал репозиторий
- Написал ТЗ
- Выложил ТЗ на Гитхаб  

2 часть (1.03 - 8.03):
- Подправил readme
- выбрал условности, которые планируется ввести в проект
- Создал проект
- Создал страничку "табло"

3 часть (8.03 - 15.03):
- Убрал страничку "табло"
- Сделал простой стиль
- Создал страницу логина (с возможностью ввода логина и пароля с правилами, но пока без отправок запроса на сервер)
- Создал сервис авторизации
- Создал поле регистрации
- Сделал заготовку backend (моки) c несколькими пользователями каждогой должности  

4 часть (15.03 - 29.03):
- Добавил esLint и отредачил код по его правилам (не полностью)
- Сделал обязательные поля в регистрации
- Сделал компонент личного кабинета, в котором отображается инфа о пользователе(пока без инфы)
 
## Оценка проверяющего:
1 часть: 0/10  
2 часть: 0/10  
3 часть: 0/10  
4 часть: 0/10
(стабильная стабильность)

Оценка всего проекта другим проверяющим (ссылка на другого проверяющего): 0/10

#ТЗ
# 1. Цель проекта

Цель проекта — разработать систему электронной очереди для больницы/банка/поликлиники
и в прочем любого места, где есть очередь.  
Система работает таким образом, мы регистрируемся заранее в очереди и в 
дальнейшем подходим к своему времени или берем талон и занимаем живую очередь.  
Автор создает функционал, в котором мы можем указать промежутки времени (время одного сеанса),
управлять этими промежутками, создать поле администратора, который
может пропускать какую-либо запись(например, человек не явился в назначенное время),
назначить какого-то человека на выбранное время, добавлять или удалять эти поля.
Помимо этого планируется ввести Telegram-бота, который будет напоминать человеку о его записи в системе(по желанию).

# 2. Описание системы

Система состоит из следующих основных функциональных блоков:

1. Регистрация и авторизация.
2. Функционал для администратора
3. Функционал для регистрации в системе
4. Функционал для обычного пользователя
5. Интеграция с Telegram

## 2.1. Типы пользователей

Система предусматривает четыре типа пользователей в системе:  
* Автор - условный бог в этой программе, имеет все возможности главного администратора, может удалять администраторов и редактировать систему.
* Главный администратор - главный в системе (в рамках определенной компании), подразумевается, что он может добавлять и удалять запись на определенное время, редактировать учетную запись пользователя и управлять администраторами.
* Администратор - Работник в системе, может пропускать пользователей, заранее просматривать их причину приема.
* Пользователь - обычный человек, который может записаться в очередь или наоборот отменить запись на определенное время и также получать уведомления о их действиях в Telegram-боте.

## 2.2. Регистрация
Система регистрации предоставляется:  

Для администраторов:  
Регистрационные поля:
* ФИО
* Дата рождения
* Номер телефона
* Номер кабинета (или номер окна, если таковое имеется)
* Рабочие дни
* Телеграмм (по желанию)
 
Для потребителей.
Регистрационные поля:
* ФИО
* Дата рождения
* Номер телефона
* Электронная почта
* Телеграмм (по желанию)

Стоит отметить, что администраторы могут зарегистрироваться с разрешения высшего администратора или автора.

## 2.3. Аутентификация администраторов и пользователей

Аутентификация пользователей осуществляется по номеру телефона или почте и одноразовому паролю (который приходит на почту или смс'кой).  
  
Администраторы получают специальные логины с паролем.

## 2.4. Функционал для автора

Автор после аутентификации (ввода логина и пароля) получает доступ к
своему авторскому функционалу в Системе. Этот функционал состоит из
следующих блоков:

1. Редактирование данных профиля (как у администраторов, так и пользователей)
2. Заведение и редактирование расписания
3. Настройка рассылок в телеграмм
4. Редактирование системы

### 2.4.1. Редактирование данных профиля

В этом разделе у автора есть возможность редактирования данных профиля каждого пользователя и админстратора — ФИО, даты рождения, номер телефона, номер кабинета и описания о себе.  
Должна быть возможность сменить пароль, подтвердив свой старый пароль.  
И так с каждым пользователем системы.

### 2.4.2. Заведение и редактирование расписания

Возможность редактирования расписания (изменение времени, даты или пользователя в системе), перенос или удаление записи.

## 2.5. Функционал окна записей и очереди приема

Главная страница Системы - пустой экран на котором снизу показывается дата, время и с наступлением определенного времени показывается прямоугольник с человеком, которого вызывают к определенному окну/столу.

В прямоугольнике:
* Фамилия и Имя
* Номер талона
* Время записи

У администратора другое поле. Он видит следующих посетителей и имеет возможность пропускать (если человек не явился на прием).  
Главный администратор видит поле, в котором отображается плашки с работниками, выбирая их можно просмотреть их график.

## 2.6. Функционал для пользователя

Пользователь имеет возможность редактировать свой профиль.
Изменить пароль, фотографию, номер телефона и информацию о себе.

Также есть поле выбора даты и времени на прием.
После выбора появляется возможность просмотра записи (дата, время, кто принимает) и возможность отказаться от записи.

## 2.7. Функционал для администратора

Администратор имеет расширенный спектр возможностей.  
Администратор имеет возможность редактировать свой профиль.  
Изменить пароль, фотографию, номер телефона и информацию о себе.

Поля предпросмотра расписания (кто придет на прием с возможностью просмотра на пару дней вперед).  
Если поступила информация, что человек не сможет явиться на прием, то имеется возможность удалить пользователя из расписания.

## 2.8. Функционал интеграции с Telegram

Система должна взаимодействовать с подписчиками в чатах. Подразумевается, что чат будет называться Фамилия + номер приема.  
У каждого пользователя свой чат с ботом.  
Возможность предупреждать пользователей, записавшихся заранее, что врач не сможет принимать посетителей по той или иной причине, путем информированная в чате телеграмма.  
Поступление сообщений о записи на определенное время или наоборот, освобождения определенного времени.
Все информирование происходит в одном чате (бот-пользователь).

# 3. Предлагаемый стек технологий

Для реализации системы предлагается следующий стек технологий:

* Бэкенд:
    - Python
    - БД PostgreSQL (или sqlite3)
    - telebot для интеграции с Telegram
* Фронтенд:
    - Angular
    - TypeScript

Хранение информации осуществляется путем ведение одной базы, записи приемов осуществляются в другой базе (ну или как то так, я не придумал).  
Какие условности планируется ввести:
- Примитивная верстка
- Реактивные формы
- Lazy - загрузки
- Функциональная цель проекта работает
- Input и Output
- Реюзбл компоненты
- Передача параметров в роутах
- использование @ViewChild и @ViewChildren
- Отсутствие any
- Запросы на сервер (моки)
- Style
- хлебные крошки
- Глобальные ошибки
- Использование @HostListner
- Динамический рендер компоненты
- Скелетон (в качетсве экрана загрузки страницы)
- Адаптивность
- Анимация
