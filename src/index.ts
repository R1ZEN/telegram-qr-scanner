import { Telegraf } from 'telegraf';
import { ImageService } from './image-service';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

void async function main() {
  const bot = new Telegraf(process.env.BOT_TOKEN as string);

  bot.start((ctx) => ctx.reply('Welcome'));

  bot.on('photo', async (ctx) => {
    const { photo } = ctx.update.message;
    const photoFileMaxDimension = photo.slice().sort((a, b) => b.width - a.width || b.height - a.height)[0];

    const imgLink = await ctx.telegram.getFileLink(photoFileMaxDimension);
    const { message } = await ImageService.extractQrData(imgLink.href, photoFileMaxDimension.width, photoFileMaxDimension.height);
    ctx.reply(message);
  });

  await bot.launch();

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
}();