import { HttpResponse, http } from 'msw';
import { db } from './db';

export const handlers = [
    http.get('/user', () => {
        const data = db.user.getAll()[0];
        return HttpResponse.json(data);
    }),

    http.put('/update-nickname', ({ request }) => {
        const nickname = new URL(request.url).searchParams.get(
            'nickname'
        ) as string;
        const updated = db.user.update({
            where: { id: { equals: 1 } },
            data: { nickname: nickname },
        });

        return HttpResponse.json(updated);
    }),
];
