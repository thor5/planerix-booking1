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
                body: 'Contenu',
                comments: 'Commentaires',
                commentable: 'Commentable',
                commentable_short: 'Com.',
                created_at: 'Créé le',
                notifications: 'Destinataires de notifications',
                nb_view: 'Nb de vues',
                password: 'Mot de passe (si protégé)',
                pictures: 'Photos associées',
                published_at: 'Publié le',
                teaser: 'Description',
                tags: 'Catégories',
                title: 'Titre',
                views: 'Vues',
                authors: 'Auteurs',
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
            name: 'Категория |||| Категории',
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
            title: 'Utilisateur "%{title}"',
        },
    },
};
