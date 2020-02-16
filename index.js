require('dotenv').config();
var BOT = require('./src/bot');

var Korvo = new BOT(process.env.BOT_TOKEN);
Korvo.login();

Korvo.client.on('message', (msg) => {
    if (msg.content.startsWith('!')) {
        Korvo.run(msg);
    }
})
