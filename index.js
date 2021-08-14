const Discord = require('discord.js');
const Client = Discord.Client();

client.on('ready', () => {
console.log('UwU Bot is now online!');
})

client.login(process.env.token);
