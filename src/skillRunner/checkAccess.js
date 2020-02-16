module.exports = (msg) => {
    try {
        if (!msg.member.roles.some(r => ['ADM'].includes(r.name))) {
            msg.reply('*Você não tem permissão para usar este comando*');
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}