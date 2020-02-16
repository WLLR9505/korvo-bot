var skillList = [
    [['!h', '!help'], require('./skills/help')],
    [['!g', '!ghost'], require('./skills/ghostMessage')],
    [['!k', '!korvo'], require('./skills/hi')],
    [['!lm', '!listmembers'], require('./skills/listRoleMembers')],
    [['!c', '!calc'], require('./skills/calculate')],
    [['!del', '!delete'], require('./skills/deleteMessages')],
    [['!rr', '!removeRole'], require('../skillRunner/removeRole')],
    [['!ar', '!addRole'], require('../skillRunner/addRole')],
    [['!e', '!d', '!encrypt', '!decrypt'], require('./skills/cipher')],
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
