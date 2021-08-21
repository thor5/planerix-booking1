# REST API для виджета плана этажей

## Объекты

### Данные по помещению

Название: `Space`
Описание: Данные по одному помещению

```json5
{
  "id": "string",
  "title": "string",
  "description": "string",
  "usage": "string",
  "pricePerMetr": "number|null",
  "rent": "shor|long",
  "perHour": "number | null",
  "fullName": "string | null",
  "email": "string | null",
  "booked": "boolean"
}
```
- `id` - уникальный идентификатор, получаем из archilogic, выставляет фронт;
- `title` - название помещения;
- `description` - описание помещения (В дальнейшем это будет читать машина, в виде персонажа);
- `usage` - назначение помещения, берется из archilogic;
- `pricePerMetr` - плата за квадратный метр;
- `rent` - сдается на длительный или короткий срок;
- `perHour` - плата за час, если выбран короткий срок сдачи;
- `fullName` - имя арендатора;
- `email` - почта арендатора;
- `booked` - забронирован или нет;

