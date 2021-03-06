/**
 * Created by Julian/Wolke on 07.11.2016.
 */
let Command = require('../../structures/command');
class Bug extends Command {
    constructor({t}) {
        super();
        this.cmd = 'bug';
        this.cat = 'generic';
        this.needGuild = false;
        this.t = t;
        this.accessLevel = 0;
        this.aliases = ['support'];
    }

    run(msg) {
        if (msg.channel.type !== 1) {
            msg.author.getDMChannel().then(channel => {
                channel.createMessage('https://discord.gg/rem');
            }).catch(e => console.error);
            msg.channel.createMessage(':ok_hand: ');
        } else {
            msg.channel.createMessage('https://discord.gg/rem');
        }

    }
}
module.exports = Bug;