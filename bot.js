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
    	message.reply('crispy_eggroll is a Bastard.');
  	}
});

client.on('message', message => {
    if (message.content === 'almost done?') {
    	message.reply('Yeaah.. thats what Jim always says. Come back in a few hours and ask again.');
  	}
});

client.on('message', message => {
    if (message.content === 'character suggestion') {
    	message.reply('Please keep in mind that we let Bit-Donators have the chance to suggest a character for the poll.');
  	}
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('henlo o/');
  	}
});

client.on('message', message => {
    if (message.content === 'someone around?') {
    	message.reply('nein :)');
  	}
});

client.on('message', message => {
    if (message.content === 'who is renelephant?') {
    	message.reply('His true name is Ravren and is Jims target in PUBG.');
  	}
});

client.on('message', message => {
    if (message.content === 'who is kyrahiko?') {
    	message.reply('Why are you asking for me?');
  	}
});

client.on('message', message => {
    if (message.content === 'hey, kyrahiko.') {
    	message.reply('henlo o/');
  	}
});

client.on('message', message => {
    if (message.content === 'how are you?') {
    	message.reply('fine, hbu?');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
