var calc = require('in2pos');

module.exports = (msg) => {
    let expr = msg.content.split(' ');
    msg.channel.send(`**> ${expr[1]}**`)
    msg.channel.send(calc.CalcPosfix(calc.In2Pos(expr[1])));
}