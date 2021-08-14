const Discord = require('discord.js');
const Client = Discord.Client();

client.on('ready', () => {
console.log('UwU Bot is now online!');
})

bot.on('message', msg=>{
   if(msg.content === "Test"){
     msg.reply('Test Command Worked!');
    }
})

client.login(process.env.token);
