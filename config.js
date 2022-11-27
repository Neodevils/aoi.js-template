export default {
    // You decide for using .env or not
    token: process.env.TOKEN || "DISCORD_BOT_TOKEN",
    prefix: process.env.PREFIX || "DISCORD_BOT_PREFIX", 
    intents: ["Guilds", "GuildMessages", "MessageContent"],
};
