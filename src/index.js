require('dotenv').config();
const { Client, GatewayIntentBits, Partials, ActivityType } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });

let status = [
  {
    name: 'web.kylan1940.site',
    type: ActivityType.Watching,
  },
];

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);
});

eventHandler(client);

client.login(process.env.TOKEN);