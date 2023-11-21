const { EmbedBuilder } = require('discord.js'); //depending on your discord.js version (this example is for v14)

module.exports = {
  name: 'help',
  description: 'Linock Bot All Commands',
  callback: async (client, interaction) => {
    
    const embed = new EmbedBuilder()
      .setTitle('LINOCK BOT')
      .setDescription('All Commands:')
      .setColor('Random')
      .addFields(
        {
          name: '❕ INFORMATION',
          value: 'help, creator, stats, invitebot',
          inline: true,
        },
        {
          name: '💻 MODERATOR',
          value: 'kick, ban, timeout',
          inline: true,
        },
        {
          name: '❔ SUPPORT',
          value: 'donate',
          inline: true,
        }
      );

    interaction.reply({ embeds: [embed] });
    
  }
}