import russianMessages from 'ra-language-russian';

export default {
    simple: {
        action: {
            close: 'Закрыть',
            resetViews: 'Сбросить фильтры',
        },
        'create-post': 'Создать пост',
    },
    ...russianMessages,
    resources: {
        posts: {
            name: 'Новость |||| Новости',
            fields: {
                average_note: 'Note moyenne',
                body: 'Контент',
                comments: 'Комментарии',
                commentable: 'Комментируемый',
                commentable_short: 'Ком.',
                created_at: 'Источник публикации',
                notifications: 'Получатели уведомлений',
                nb_view: 'Nb обзор',
                password: 'Пароль (если публикация защищщена)',
                pictures: 'Фотографии',
                published_at: 'Опубликовано в',
                teaser: 'Описание',
                tags: 'Категории',
                title: 'Заголовок',
                views: 'Обзоры',
                authors: 'Авторы',
            },
        },
        comments: {
            name: 'Заявка |||| Заявки',
            fields: {
                body: 'Заявка',
                created_at: 'Время создания',
                post_id: 'Содержимое заявки',
                author: {
                    name: 'Автор заявки',
                },
            },
        },
        users: {
            name: 'Арендатор |||| Арендаторы',
            fields: {
                name: 'Имя',
                role: 'Права',
            },
        },
        tags: {
            name: 'Категория |||| Категории новостей',
        }
    },
    post: {
        list: {
            search: 'Заявки',
        },
        form: {
            summary: 'Поиск',
            body: 'Содержимое заявки',
            miscellaneous: 'Дополнительно',
            comments: 'Комментарии',
        },
        edit: {
            title: 'Статья "%{title}"',
        },
    },
    comment: {
        list: {
            about: 'Подробнее',
        },
    },
    user: {
        list: {
            search: 'Поиск',
        },
        form: {
            summary: 'Резюме',
            security: 'Рекомендации',
        },
        edit: {
            title: 'Пользователь "%{title}"',
        },
    },
};
