const { EmbedBuilder } = require('discord.js'); //depending on your discord.js version (this example is for v14)

module.exports = {
  name: 'donate',
  description: 'Support for Linock Bot',
  callback: async (client, interaction) => {
    
    const embed = new EmbedBuilder()
      .setTitle('DONATE')
      .setDescription('Donate to Support Linock Bot')
      .setColor('Random')
      .addFields(
        {
          name: 'Trakteer [IDR/Rupiah]',
          value: '[Click Here](https://trakteer.id/Kylan1940)',
          inline: true,
        },
        {
          name: 'Buy Me a Coffee',
          value: '[Click Here](https://ko-fi.com/Kylan1940)',
          inline: true,
        },
        {
          name: 'Become a Patron',
          value: '[Click Here](https://patreon.com/Kylan1940)',
          inline: true,
        }
      );

    interaction.reply({ embeds: [embed] });
    
  }
}