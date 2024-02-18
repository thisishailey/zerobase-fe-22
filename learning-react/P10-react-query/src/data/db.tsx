import { factory, primaryKey } from '@mswjs/data';

export const db = factory({
    user: {
        id: primaryKey(Number),
        nickname: String,
        email: String,
    },
});

db.user.create({
    id: 1,
    nickname: 'user',
    email: 'user@gmail.com',
});
