module.exports = (msg) => {
    msg.reply('https://media.giphy.com/media/gEG1j8eBvHVYs/giphy.gif').then((msg) => {
        msg.reply('```AQUI!```').then((msg) => {
            msg.delete(2000);
        });
        msg.delete(2000);
    });
    msg.delete(3000);
}