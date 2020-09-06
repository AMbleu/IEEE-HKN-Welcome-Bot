require('dotenv').config();
const { Client } = require('discord.js');

const bot = new Client;
const CMD_PREFIX = '$';
const channelGeneral = '751131553614004327';

//bot.channels.cache.get(channelGeneral).send('Welcome new Member');

bot.on('ready', () => {
    console.log('IEEE HKN Bot has Logged in');
});

bot.on('guildMemberAdd', (member) =>{
    bot.channels.cache.get(channelGeneral).send('Welcome new Member');
});

bot.on('message', (message) => {
    if(message.author.bot) return;
    //message.channel.send('Test Response');
    if(message.content.startsWith(CMD_PREFIX)){
        const [CMD_Name, ...args] = message.content.trim().substring(CMD_PREFIX.length).split(/\+s/);
        if(CMD_Name === 'president'){
            message.channel.send('Your President is:');
            console.log(`${message.author.tag}`);
        }
    }
});

bot.login(process.env.IEEEHKN_BOT);