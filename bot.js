require('dotenv').config()
var Discord = require('discord.js');
var calc = require('in2pos');
var deleteAll = require('./deleteAll.js');
var bot = new Discord.Client();

bot.login(process.env.BOT_TOKEN);

bot.once('ready', () => {
    console.log('Bot online : ' + bot.user.tag);
});

bot.on('message', msg => {
    if (msg.content === 'ping') {
        msg.delete(700).then((msg) => {
                msg.reply('pong').then((msg) => {
                        msg.delete(700);
                    });
            });
    }

    if (msg.content.startsWith('!stealth')) {
        console.log(msg.content);
        let t = msg.content.split(' ');
        msg.delete(t[1] * 1000 || 5000);
    }

    if (msg.content.startsWith('!calc')) {
        let expr = msg.content.split(' ');
        msg.reply(calc.CalcPosfix(calc.In2Pos(expr[1])));
    }

    if (msg.content === '!korvo') {
        msg.reply('https://media.giphy.com/media/gEG1j8eBvHVYs/giphy.gif').then((msg) => {
            msg.reply('AQUI!').then((msg) => {
                msg.delete(2000);
            });
            msg.delete(2000);
        });
        msg.delete(3000);
    }

    if (msg.content === '!del') {
        deleteAll(bot, msg);
    }
});
