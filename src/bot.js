var Discord = require('discord.js');
var version = require('../package.json').version;
var skillRunner = require('./skillRunner/runner.js');

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
        skillRunner(msg);
    }
}
