const { ActivityType } = require('discord.js');

const defaultPresenceModel = {
    status: 'online',
    afk: false,
    activities: [{
        type: ActivityType.Custom,
        state: "🐱 Beggin for curly fries",
        name: "defaultStatus"
    }]
}

exports.defaultPresenceModel = defaultPresenceModel;