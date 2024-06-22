const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meow')
		.setDescription('Replies with normal cat noises'),
	async execute(interaction) {
		await interaction.reply('MEOW');
	},
};
