const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if(!message.member.roles.has('481541340337930269')) return console.log("User tried executing command [ " + module.exports.help.name + " ].")
    if(!args[0]) return;
    try {
        eval(args.join(" "))
    } catch(err) {
        const errembed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription(`\`\`${err.toString()}\`\``)
        .setColor('#F46E3F')

        message.channel.send(errembed)
    }

}

module.exports.help = {
    name: 'exec'
}