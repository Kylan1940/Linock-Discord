require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });

eventHandler(client);

client.login(process.env.TOKEN);
