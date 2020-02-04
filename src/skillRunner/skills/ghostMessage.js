module.exports = (msg) => {
    console.log(msg.content);
    let t = msg.content.split(' ');
    msg.delete(t[1] * 1000 || 5000);
}
