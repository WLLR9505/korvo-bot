var fs = require('fs');

var helps = JSON.parse(fs.readFileSync('./src/skillRunner/skills/help.json'));

module.exports = (msg) => {
    var helpMessage = '';

    for (let i = 0; i < helps.length; i++) {
        helpMessage += `**${helps[i].command}**\n`;
        helpMessage += `${helps[i].description}\n\n`;
    }
    msg.channel.send(helpMessage).then((msg) => {
        msg.delete(10000);
    });
    msg.delete(100);
}