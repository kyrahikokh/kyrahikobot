const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hey bot') {
    	message.reply('henlo o/');
  	}
});

client.on('message', message => {
    if (message.content === 'do you ever sleep?') {
    	message.reply('no');
  	}
});

client.on('message', message => {
    if (message.content === 'who is crispy?') {
    	message.reply('@crispy_eggroll is a Bastard :LUL:');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
