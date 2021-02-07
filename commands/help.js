const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor("Commands")
        .setTitle("Mayip")
        .setDescription(`Total Commands: ${client.commands.size}`)
        .setColor("BLURPLE")
        .addField("Mayip Documentation", "[Click Here](https://docs.google.com/document/d/1vhEXx1jhUbygFzoXrucmMR1nrgMqthLCM_pQ_y9VzDU/edit?usp=sharing)")
        .addField("Mayip Support Server", "[Click Here](https://discord.gg/UkRXaJFndd)")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${client.prefix}${cmd.help.usage}\``, true);
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "help",
    aliases: ["h"],
    usage: `help`
}
