var Encrypt = require('ciphervgnr');

module.exports = (msg) => {
    let message = msg.content.split('-');
    let key = message[1];

    message = message[0].split(' ');
    let mode = message[0];

    text = message.filter((el) => {
        return !el.includes('!')
    }).join(' ');

    if (mode.includes('!e')) {
        msg.channel.send(Encrypt(text, key)); //Encrypt
    } else {
        msg.channel.send(Encrypt(text, key, true)); //Decrypt
    }
}