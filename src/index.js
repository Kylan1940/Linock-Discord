require('dotenv').config();
const { Client, GatewayIntentBits, Partials, ActivityType } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);

  client.user.setActivity('/help | web.kylan1940.site', {
    type: 'WATCHING'
  });
});

eventHandler(client);

client.login(process.env.TOKEN);