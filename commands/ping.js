export default {
	name: "ping",
	type: "basicCommand",
	code: `
    $sendMessage[Pong! $ping ms]
    `,
};
