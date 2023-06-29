require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });

client.on('ready', () => {
    console.log('Siap Lah Masa Gak Siap!');
    client.user.setActivity('l/help | youtube.com/c/Kylan1940', {
        type: 'WATCHING'
    });
});

client.login(process.env.DISCORD_TOKEN);