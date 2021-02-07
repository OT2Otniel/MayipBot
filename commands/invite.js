const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
    let gatewayLatency = Math.floor(client.ws.ping);
    message.channel.send("Invite?").then(m => {
        const trip = Math.floor(m.createdTimestamp - message.createdTimestamp);
        const embed = new MessageEmbed()
            .setTitle("Invite Mayip!")
            .addField("Invite Me", `[Click Here](https://discord.com/api/oauth2/authorize?client_id=805034490611236885&permissions=388288&scope=bot)`, true)
            .addField("Support Server", `[Click Here](https://discord.gg/UkRXaJFndd)`, true)
            .setColor("#7289DA")
            .setTimestamp();
        m.edit(embed);
    });
}

exports.help = {
    name: "invite",
    aliases: [],
    usage: `invite`
}
