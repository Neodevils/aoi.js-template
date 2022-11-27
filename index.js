import { AoiClient } from "aoi.js";
import config from "./config.js";

const bot = new AoiClient({
	token: config.token,
	prefix: config.prefix,
	intents: config.intents,
});

bot.addEvent(["onMessage", "onInteractionCreate"]);

bot.status.add({
	name: "hello world",
	presence: "online",
	type: "WATCHING",
	duration: 12000,
});

bot.commands.load("./commands/");

bot.start();
