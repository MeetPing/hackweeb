const Eris = require("eris")
var bot = new Eris("BOT_TOKEN");
bot.on("ready", () => {
    console.log("Ready!");
});
bot.on("messageCreate", (msg) => {

  var banCommand = "!ban"
  var kickCommand = "!kick"
  var warnCommand = "!warn"
if(msg.content.startsWith(banCommand)) {
  if (!msg.member.permission.has("banMembers")) {
      bot.createMessage(msg.channel.id, {
            embed: {
                title: "Error",
                description: "You need the permission `Ban Members` in order to use that command.",
                author: {
                    name: "",
                    icon_url: ""
                },
                fields: [ 
                   
                ],
                color: 0xFF0000,
            }
        
        });
          bot.deleteMessage(msg.channel.id, msg.id);
          return;
    }
        if(msg.content.length <= banCommand.length + 1) {
             bot.createMessage(msg.channel.id, {
            embed: {
                title: "Error", 
                description: "Please specify a user to ban.",
                author: { 
                    name: "",
                    icon_url: ""
                },
                fields: [ 
                   
                ],
                color: 0xFF0000,
            }
        
        });
          bot.deleteMessage(msg.channel.id, msg.id);
          return;
      };
    var almostBanMemberPing = msg.content.substring(banCommand.length + 1);
    var banMemberPing = almostBanMemberPing.split(" ")[0];
    var almostBanMemberID = msg.content.substring(banCommand.length + 3);
    var banMemberID = almostBanMemberID.split(">")[0];
    var banReason = msg.content.split("> ")[1];
    if (msg.channel.guild.ownerID == banMemberID) {
      bot.createMessage(msg.channel.id, {
        embed: {
          title: "Error",
          description: "You cannot ban " + banMemberPing + ".",
          author: {
            name: "",
            icon_url: ""
          },
          fields: [],
          color: 0xFF0000,
        }
      });
      bot.deleteMessage(msg.channel.id, msg.id);
      return;
    }
    bot.banGuildMember(msg.channel.guild.id, banMemberID, 0, banReason)
    bot.createMessage(msg.channel.id, {
            embed: {
                title: "Success", 
                description: "Successfully banned " + banMemberPing + " for `" + banReason + "`.",
                author: { 
                    name: "",
                    icon_url: ""
                },
                fields: [ 
                   
                ],
                color: 0x00FF00,
            }
        
        });
  bot.getDMChannel(banMemberID).then(DM => {
    bot.createMessage(DM.id, {
            embed: {
                title: "Banned", 
                description: "You have been banned from `" + msg.channel.guild.name +  "`.",
                author: { 
                    name: "",
                    icon_url: ""
                },
                fields: [
                  {
                        name: "Moderator",
                        value: msg.author.mention,
                        inline: false,
                    },
                  {
                        name: "Reason",
                        value: banReason,
                        inline: false,
                    },
                   
                ],
                color: 0xFF0000,
            }
        
        });
  });
  
          bot.deleteMessage(msg.channel.id, msg.id);
  }
  if(msg.content.startsWith(kickCommand)) {
    if (!msg.member.permission.has("kickMembers")) {
      bot.createMessage(msg.channel.id, {
            embed: {
                title: "Error",
                description: "You need the permission `Kick Members` in order to use that command.",
                author: {
                    name: "",
                    icon_url: ""
                },
                fields: [ 
                   
                ],
                color: 0xFF0000,
            }
        
        });
          bot.deleteMessage(msg.channel.id, msg.id);
          return;
    }
        if(msg.content.length <= kickCommand.length + 1) {
             bot.createMessage(msg.channel.id, {
            embed: {
                title: "Error", 
                description: "Please specify a user to kick.",
                author: { 
                    name: "",
                    icon_url: ""
                },
                fields: [ 
                   
                ],
                color: 0xFF0000,
            }
        
        });
          bot.deleteMessage(msg.channel.id, msg.id);
          return;
      };
    var almostKickMemberPing = msg.content.substring(kickCommand.length + 1);
    var kickMemberPing = almostKickMemberPing.split(" ")[0];
    var almostKickMemberID = msg.content.substring(kickCommand.length + 3);
    var kickMemberID = almostKickMemberID.split(">")[0];
    var kickReason = msg.content.split("> ")[1];
    bot.kickGuildMember(msg.channel.guild.id, kickMemberID, kickReason);
    bot.createMessage(msg.channel.id, {
            embed: {
                title: "Success", 
                description: "Successfully kicked " + kickMemberPing + " for `" + kickReason + "`.",
                author: { 
                    name: "",
                    icon_url: ""
                },
                fields: [ 
                   
                ],
                color: 0x00FF00,
            }
        
        });
    bot.getDMChannel(kickMemberID).then(DM => {
    bot.createMessage(DM.id, {
            embed: {
                title: "Kicked", 
                description: "You have been kicked from `" + msg.channel.guild.name +  ".",
                author: { 
                    name: "",
                    icon_url: ""
                },
                fields: [
                  {
                        name: "Moderator",
                        value: msg.author.mention,
                        inline: false,
                    },
                  {
                        name: "Reason",
                        value: kickReason,
                        inline: false,
                    },
                   
                ],
                color: 0xFF0000,
            }
        
        });
    });
          bot.deleteMessage(msg.channel.id, msg.id);
  }
  if(msg.content.startsWith(warnCommand)) {
    if (!msg.member.permission.has("kickMembers")) {
      bot.createMessage(msg.channel.id, {
            embed: {
                title: "Error",
                description: "You need the permission `Kick Members` in order to use that command.",
                author: {
                    name: "",
                    icon_url: ""
                },
                fields: [ 
                   
                ],
                color: 0xFF0000,
            }
        
        });
          bot.deleteMessage(msg.channel.id, msg.id);
          return;
    }
        if(msg.content.length <= warnCommand.length + 1) {
             bot.createMessage(msg.channel.id, {
            embed: {
                title: "Error", 
                description: "Please specify a user to warn.",
                author: { 
                    name: "",
                    icon_url: ""
                },
                fields: [ 
                   
                ],
                color: 0xFF0000,
            }
        
        });
          bot.deleteMessage(msg.channel.id, msg.id);
          return;
      };
    var almostWarnMemberPing = msg.content.substring(warnCommand.length + 1);
    var warnMemberPing = almostWarnMemberPing.split(" ")[0];
    var almostWarnMemberID = msg.content.substring(warnCommand.length + 3);
    var warnMemberID = almostWarnMemberID.split(">")[0];
    var warnReason = msg.content.split("> ")[1];
    bot.createMessage(msg.channel.id, {
            embed: {
                title: "Success", 
                description: "Successfully warned " + warnMemberPing + " for `" + warnReason + "`.",
                author: { 
                    name: "",
                    icon_url: ""
                },
                fields: [ 
                   
                ],
                color: 0x00FF00,
            }
        
        });
    bot.getDMChannel(warnMemberID).then(DM => {
    bot.createMessage(DM.id, {
            embed: {
                title: "Warned", 
                description: "You have been warned in `" + msg.channel.guild.name +  "`.",
                author: { 
                    name: "",
                    icon_url: ""
                },
                fields: [
                  {
                        name: "Moderator",
                        value: msg.author.mention,
                        inline: false,
                    },
                  {
                        name: "Reason",
                        value: warnReason,
                        inline: false,
                    },
                   
                ],
                color: 0xFF0000,
            }
        
        });
    });
          bot.deleteMessage(msg.channel.id, msg.id);
  }
  
  
  
  var vidSuggest = "-suggest";
  if(msg.content.startsWith(vidSuggest)) {
          if(msg.content.length <= vidSuggest.length + 1) {
             bot.createMessage(msg.channel.id, {
            embed: {
                title: "Error", 
                description: "Please specify a user to ban.",
                author: { 
                    name: "",
                    icon_url: ""
                },
                fields: [ 
                   
                ],
                color: 0xFF0000,
            }
        
        });
          bot.deleteMessage(msg.channel.id, msg.id);
          return;
      };
    
        var vidSuggesta = msg.content.substring(vidSuggest.length + 1);
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Success", 
                description: "Successfully suggested "+vidSuggesta+".",
                author: { 
                    name: "",
                    icon_url: ""
                },
                fields: [ 
                   
                ],
                color: 0x00FF00,
            }
        
        });
            bot.createMessage("593352877104168970", {
            embed: {
                description: "**"+vidSuggesta+"**",
                author: { 
                   name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                fields: [ 
                   
                ],
                color: 0x00FF00,
            }
        
        });
  }
  
    
});
bot.connect();
