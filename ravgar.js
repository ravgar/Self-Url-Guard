const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
    ws: {
        properties: {
            browser: "Discord Android",
        }
    },
 intents: [Guilds, GuildMembers, GuildMessages],
 Partials: [User, Message, GuildMember, ThreadMember]

});

const { loadEvents } = require("./Handlers/eventHandler");

client.config = require("./system.json");
client.events = new Collection();

loadEvents(client);

client.login(client.config.token)

