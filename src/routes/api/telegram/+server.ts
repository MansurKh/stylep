import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { bot } from '$lib/server/telegram';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const data = await request.json();
        await bot.handleUpdate(data);
    } catch (err) {
        throw error(500, { message: err as string });
    }
    return new Response();
};
