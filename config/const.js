export const API = process.env.NEXT_PUBLIC_API_LOCAL;


import { notification } from 'antd';

export const handleNotification = (type, title, message) => {
    const { api, contextHolder } = notification.useNotification();

    const openNotificationWithIcon = (type) => {
        api[type]({
            message: title,
            description: message // Fixing typo in 'description'
        });
    };

    return { contextHolder };
};

export const burguers = [
    {
        name: 'Crispy Chicken', value: '01'
    },
    {
        name: 'The GOAT', value: '02'
    },
    {
        name: 'Onion', value: '03'
    },
    {
        name: 'Cheese La Básica', value: '04'
    },
    {
        name: 'Cheese La Bichota', value: '05'
    },
]