var Discord = require('discord.js');

module.exports = (msg) => {

    let role = msg.content.split(' ')[1];

    let members = msg.guild.members.filter((member) => {
        return member.roles.find('name', role);
    }).map((member) => {
        return member.user.username;
    });

    let list = new Discord.RichEmbed({
            "title": `Membros do cargo: ${role}`,
            "description": members.join('\n'),
            "color": 0xFFFF
    });

    msg.channel.send(list);
}