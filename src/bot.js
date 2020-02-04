var Discord = require('discord.js');
var version = require('../package.json').version;
var skillRunner = require('./skillRunner/runner.js');
var deleteAllMessages = require('./skillRunner/skills/deleteMessages.js');

module.exports = class BOT {
    constructor(token) {
        this.version = version;
        this.token = token;
        this.client = new Discord.Client();
    }

    login() {
        this.client.login(this.token);
        this.client.once('ready', function () {
            console.log(`Bot online :  ${this.user.tag}`);
        });
        console.log(this.version);
    }

    run(msg) {
        if (msg.content.startsWith('!')) {
            skillRunner(msg);
        }
    }

    deleteMessages(msg) {
        deleteAllMessages(msg);
    }
}
