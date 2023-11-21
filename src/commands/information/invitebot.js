const { EmbedBuilder } = require('discord.js'); //depending on your discord.js version (this example is for v14)

module.exports = {
  name: 'invitebot',
  description: 'Generate Link for Invite Bot',
  callback: async (client, interaction) => {
    
    const embed = new EmbedBuilder()
      .setTitle("INVITE BOT")
      .setDescription('[Click Here for Invite Bot](https://discord.com/api/oauth2/authorize?client_id=837950319072903219&permissions=8&scope=bot)')
      .setColor('Random')

    interaction.reply({ embeds: [embed] });
    
  }
}