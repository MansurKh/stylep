import { Telegraf, Markup } from 'telegraf';
import { env } from '$env/dynamic/private';

export const bot = new Telegraf(env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => {
	ctx.reply(
		'Добро пожаловать!',
		// Normal Keyboard Buttons do not support initData, so we have to use inlineKeyboard
		// More info: https://core.telegram.org/bots/webapps#webappinitdata
		Markup.inlineKeyboard([
			Markup.button.webApp('Открыть приложение', `https://styleapp-kappa.vercel.app`),
		]),
	);
});
