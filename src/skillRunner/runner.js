var skillList = [
    [['!h', '!help'], require('./skills/help.js')],
    [['!g', '!ghost'], require('./skills/ghostMessage.js')],
    [['!k', '!korvo'], require('./skills/hi.js')],
    [['!c', '!calc'], require('./skills/calculate.js')],
    [['!e', '!d', '!encrypt', '!decrypt'], require('./skills/cipher.js')],
];

module.exports = (msg) => {
    let command = msg.content.split(' ')[0].toLowerCase();
    skillList.forEach(el => {
        el[0].forEach(alias => {
            if (alias == command) {
                try {
                    el[1](msg);
                } catch (error) {
                    msg.reply(`Comando Incorreto\n${error}\n!h para ajuda`).then((msg) => {
                        msg.delete(3000);
                    });
                    msg.delete(3000);
                }
                return 0;
            }
        })
    })
}
