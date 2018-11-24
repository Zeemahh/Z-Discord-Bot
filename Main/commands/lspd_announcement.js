const Discord = require('discord.js')
const config = require('../botconfig.json')

module.exports.run = async(bot, message, args) => {
    let announcement = args.join(" ")
    if(!(message.member.roles.has('481541340337930269') || message.member.roles.has('362368086290071564') || message.guild.name === 'JusticeCommunityRP - Development'))
    {
        message.author.send("**You need the `LSPD - High Command` role to be able to use the **`" + config.prefix + module.exports.help.name + "` **command.**")
    }
    else
    {
        if(!(message.channel.name === 'jcrp-lspd_announcements' || message.guild.name === 'JusticeCommunityRP - Development'))
        {
            message.author.send("You need to use this command in channel `jcrp-lspd_announcements`")
            message.author.send("Here's the message incase you forgot to save it: \n`" + announcement + "`")
        }
        else
        {
            if (!args[0]) // checking if no args are provided
            {
                message.author.send("Invalid amount of arguments used in command `" + config.prefix + module.exports.help.name + "`.")
            }
            else
            {
                let embed = new Discord.RichEmbed()
                .setAuthor("Los Santos Police Department Announcement from " + message.author.username, message.author.avatarURL)
                .setDescription("\n" + announcement)
                .setFooter("Los Santos Police Department - Administration", 'https://i.imgur.com/TRW0Nu0.png')
                .setTimestamp()
                .setColor("#94d2ff")

                message.channel.send(embed)
            }
        }
            
    }
    message.delete().catch(O_o => {});
}

module.exports.help = {
    name: "lspd-announce"
}