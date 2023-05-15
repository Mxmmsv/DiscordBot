const { Client, Intents, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require("./data.json")
const client = new Client({intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_PRESENCES
]});

client.on('ready', () => {
    console.log("Bot is ready!");
});

client.login(TOKEN);