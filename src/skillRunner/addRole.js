var checkAccess = require('./checkAccess');

module.exports = (msg) => {
    if (!checkAccess(msg))
        return false;

    var role = msg.guild.roles.find((r) => {
        return r.name === msg.content.split(' ')[2];
    });

    let member = msg.mentions.members.first();
    if (msg.member.roles.has(role.id)) {
        console.log('já tem o cargo');
    } else {
        member.addRole(role).catch(console.error);
        msg.reply(`o cargo **${role.name}** foi adicionado ao **${member.displayName}**`);
    }
}