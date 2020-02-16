var checkAccess = require('./checkAccess');

module.exports = (msg) => {
    if (!checkAccess(msg))
        return false;

    var role = msg.guild.roles.find((r) => {
        return r.name === msg.content.split(' ')[2];
    });

    let member = msg.mentions.members.first();
    member.removeRole(role).catch(console.error);
    msg.reply(`o cargo **${role.name}** foi removido do **${member.displayName}**`);
}