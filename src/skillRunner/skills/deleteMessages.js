module.exports = async (message) => {
    let i = 0
    let fetched;
    fetched = await message.channel.fetchMessages({ limit: 100 });
    while (fetched.size >= 2) {
        await message.channel.bulkDelete(fetched.size)
        i += fetched.size
        fetched = await message.channel.fetchMessages({ limit: 100 });
    }
    message.channel.send(`Foram deletadas **${i} mensagens**`)
    console.log(`Foram deletadas ${i} mensagens do canal: ${message.channel.name}`);
}