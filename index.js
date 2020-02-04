require('dotenv').config();
var BOT = require('./src/bot.js');

var Korvo = new BOT(process.env.BOT_TOKEN);
Korvo.login();

Korvo.client.on('message', (msg) => {
    if (msg.content == '!d') {
        Korvo.deleteMessages(msg);
    } else {
        Korvo.run(msg);
    }
})
