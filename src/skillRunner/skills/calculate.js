var calc = require('in2pos');

module.exports = (msg) => {
    let expr = msg.content.split(' ');
    msg.reply(calc.CalcPosfix(calc.In2Pos(expr[1])));
}