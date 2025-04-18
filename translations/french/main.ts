import type { Translations } from '../../server/chat';

export const translations: Translations = {
  name: 'French',
  strings: {
    namelocked: 'namelocked',
    locked: 'locked',

    'Please follow the rules:': 'Veuillez suivre ces règles:',
    '[TN: Link to the PS rules for your language (path after pokemonshowdown.com]/rules':
      '/pages/rules-fr',
    'Global Rules': 'Règles Générales',
    '${room} room rules': 'Règles de la room ${room}',

    '<strong>Global ranks</strong>': '<strong>Rangs globaux</strong>',
    '+ <strong>Global Voice</strong> - They can use ! commands like !groups':
      '+ <strong>Global Voice</strong> - Ils peuvent utiliser les commandes commençant par ! telles que !groups',
    '% <strong>Global Driver</strong> - Like Voice, and they can lock users and check for alts':
      '% <strong>Global Driver</strong> - Comme ci-dessus, en plus de pouvoir lock certains utilisateurs et vérifier leurs éventuels autres comptes',
    '@ <strong>Global Moderator</strong> - The above, and they can globally ban users':
      '@ <strong>Global Moderator</strong> - Comme ci-dessus, en plus de pouvoir bannir des utilisateurs du site',
    '* <strong>Global Bot</strong> - An automated account that can use HTML anywhere':
      "* <strong>Global Bot</strong> - Un compte automatisé qui peut utiliser le HTML n'importe où",
    '~ <strong>Global Administrator</strong> - They can do anything, like change what this message says and promote users globally':
      '~ <strong>Global Administrator</strong> - Ils peuvent tout faire, comme changer ce que ce message affiche',

    '<strong>Room ranks</strong>': '<strong>Rangs des rooms</strong>',
    "^ <strong>Prize Winner</strong> - They don't have any powers beyond a symbol.":
      "^ <strong>Prize Winner</strong> - Ils n'ont aucun pouvoir, seulement un symbole honorifique",
    '+ <strong>Voice</strong> - They can use ! commands like !groups':
      '+ <strong>Voice</strong> - Ils peuvent utiliser les commandes commençant par ! telles que !groups',
    '% <strong>Driver</strong> - The above, and they can mute and warn':
      '% <strong>Driver</strong> - Comme ci-dessus, en plus de pouvoir mute et warn',
    '@ <strong>Moderator</strong> - The above, and they can room ban users':
      '@ <strong>Moderator</strong> - Comme ci-dessus, en plus de pouvoir bannir un utilisateur de la room',
    '* <strong>Bot</strong> - An automated account that can mute, warn, and use HTML':
      '* <strong>Bot</strong> - Un compte automatisé qui peut mute, warn et utiliser le HTML',
    '# <strong>Room Owner</strong> - They are leaders of the room and can almost totally control it':
      '# <strong>Room Owner</strong> - Ce sont les chefs de la room et ils peuvent la contrôler quasiment en totalité',

    '/help OR /h OR /? - Gives you help.': "Te donne de l'aide.",
    'For an overview of room commands, use /roomhelp':
      'Pour un aperçu des commandes des chatrooms, utilise /roomhelp',
    'For details of a specific command, use something like: /help data':
      "Pour les détails d'une commande spécifique, utilise quelque chose comme : /help data",

    COMMANDS: 'COMMANDES',
    'BATTLE ROOM COMMANDS': 'COMMANDES DES COMBATS',
    'OPTION COMMANDS': 'COMMANDES DES OPTIONS',
    'INFORMATIONAL/RESOURCE COMMANDS': 'COMMANDES DES INFORMATIONS/RESSOURCES',
    'DATA COMMANDS': 'COMMANDES DES DONNÉES',
    'DRIVER COMMANDS': 'COMMANDES DES DRIVERS',
    'MODERATOR COMMANDS': 'COMMANDES DES MODERATEURS',
    'ADMIN COMMANDS': 'COMMANDES DES ADMINISTRATEURS',

    '(replace / with ! to broadcast. Broadcasting requires: + % @ # ~)':
      '(Remplace / par ! pour afficher publiquement les commandes. Les afficher publiquement requiert : + % @ ~)',

    '<strong>Room punishments</strong>:': '<strong>Punitions des rooms</strong>',
    '<strong>warn</strong> - Displays a popup with the rules.':
      '<strong>warn</strong> - Affiche une fen&ecirc;tre avec les r&egrave;gles.',
    '<strong>mute</strong> - Mutes a user (makes them unable to talk) for 7 minutes.':
      "<strong>mute</strong> - Mute un utilisateur (l'emp&ecirc;che de parler) pendant 7 minutes.",
    '<strong>hourmute</strong> - Mutes a user for 60 minutes.':
      '<strong>hourmute</strong> - Mute un utilisateur pendant 60 minutes.',
    '<strong>ban</strong> - Bans a user (makes them unable to join the room) for 2 days.':
      "<strong>ban</strong> - Bannit un utilisateur (l'emp&ecirc;che de rejoindre la room) pendant 2 jours.",
    '<strong>weekban</strong> - Bans a user from the room for a week.':
      '<strong>weekban</strong> - Bannit un utilisateur d’une room pour une semaine.',
    '<strong>blacklist</strong> - Bans a user for a year.':
      '<strong>blacklist</strong> - Bannit un utilisateur pour un an.',

    '<strong>Global punishments</strong>:': '<strong>Punitions générales</strong>',
    '<strong>lock</strong> - Locks a user (makes them unable to talk in any rooms or PM non-staff) for 2 days.':
      "<strong>lock</strong> - Lock un utilisateur (l'emp&ecirc;che de parler sur n'importe quelle room ou d'envoyer des messages priv&eacute;s à des utilisateurs hors staff) pendant 2 jours.",
    '<strong>weeklock</strong> - Locks a user for a week.':
      '<strong>weeklock</strong> - Lock un utilisateur pendant une semaine.',
    '<strong>namelock</strong> - Locks a user and prevents them from having a username for 2 days.':
      "<strong>namelock</strong> - Lock un utilisateur et l'emp&ecirc;che d'avoir un pseudo pendant 2 jours.",
    '<strong>globalban</strong> - Globally bans (makes them unable to connect and play games) for a week.':
      '<strong>globalban</strong> - Bannit complètement (emp&ecirc;che de se connecter et de jouer) pendant une semaine.',

    '<strong>Indefinite global punishments</strong>:':
      '<strong>Punitions globales à durée indéterminée</strong> :',
    '<strong>permalock</strong> - Issued for repeated instances of bad behavior and is rarely the result of a single action. ':
      '<strong>permalock</strong> - Infligé pour des cas répétés de mauvais comportement, c’est rarement le résultat d’une seule action. ',
    'These can be appealed in the <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeal</a>':
      'Il est possible de faire appel dans le <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">forum des Appels Disciplinaires</a>',
    ' forum after at least 3 months without incident.': ' après au moins 3 mois sans incident.',
    '<strong>permaban</strong> - Unappealable global ban typically issued for the most severe cases of offensive/inappropriate behavior.':
      '<strong>permaban</strong> - Bannissement global sans possibilité d’appel, infligé généralement pour les cas les plus graves de comportement offensant/inapproprié.',

    '<strong>Room drivers (%)</strong> can use:':
      "<strong>Les Drivers d'une room (%)</strong> peuvent utiliser :",
    '- /warn OR /k <em>username</em>: warn a user and show the Pok&eacute;mon Showdown rules':
      '- /warn OU /k <em>pseudo</em> : Avertit un utilisateur et affiche les r&egrave;gles de Pok&eacute;mon Showdown',
    '- /mute OR /m <em>username</em>: 7 minute mute':
      '- /mute OU /m <em>pseudo</em> : Mute pendant 7 minutes',
    '- /hourmute OR /hm <em>username</em>: 60 minute mute':
      '- /hourmute OU /hm <em>pseudo</em> : Mute pendant 60 minutes',
    '- /unmute <em>username</em>: unmute': '- /unmute <em>pseudo</em> : Enl&egrave;ve un mute',
    "- /hidetext <em>username</em>: hide a user's messages from the room":
      "- /hidetext <em>pseudo</em>: Cache les messages de l'utilisateur",
    '- /announce OR /wall <em>message</em>: make an announcement':
      '- /announce OU /wall <em>message</em> : Fait une annonce',
    '- /modlog <em>username</em>: search the moderator log of the room':
      "- /modlog <em>pseudo</em> : Affiche l'historique de mod&eacute;ration d'un utilisateur dans la room ",
    '- /modnote <em>note</em>: add a moderator note that can be read through modlog':
      '- /modnote <em>note</em> : Ajoute une note de mod&eacute;ration qui peut &ecirc;tre lue dans le modlog',
    '- !show [image or youtube link]: display given media in chat.':
      '- !show [image ou lien youtube]: Affiche le m&eacute;dia donn&eacute; dans le chat.',
    '- /whitelist [user]: whitelist a non-staff user to use !show.':
      '- /whitelist [pseudo]: Ajoute un utilisateur hors staff &agrave; la liste blanche pour utiliser !show',
    '- /unwhitelist [user]: removes the user from !show whitelist.':
      "- /unwhitelist [pseudo]: Retire l'acc&egrave;s &agrave; un utilisateur au !show et de la whitelist",

    '<strong>Room moderators (@)</strong> can also use:':
      "<strong>Les Moderators d'une room (@)</strong> peuvent &eacute;galement utiliser :",
    '- /roomban OR /rb <em>username</em>: ban user from the room':
      "- /roomban OU /rb <em>pseudo</em>: Bannit l'utilisateur de la room",
    '- /roomunban <em>username</em>: unban user from the room':
      "- /roomunban <em>pseudo</em> : Retire le bannissement d'un utilisateur de la room",
    '- /roomvoice <em>username</em>: appoint a room voice':
      '- /roomvoice <em>pseudo</em> : Promeut un Voice de la room',
    '- /roomdevoice <em>username</em>: remove a room voice':
      '- /roomdevoice <em>pseudo</em> : Retire un Voice de la room',
    '- /staffintro <em>intro</em>: set the staff introduction that will be displayed for all staff joining the room':
      "- /staffintro <em>introduction</em> : Param&egrave;tre l'introduction du staff qui sera affich&eacute;e &agrave; tous les membres du staff rejoignant la room",
    '- /roomsettings: change a variety of room settings, namely modchat':
      '- /roomsettings : Permet de changer plusieurs param&egrave;tres de la room, notamment le modchat',

    '<strong>Room owners (#)</strong> can also use:':
      '<strong>Les propri&eacute;taires de la room (Room Owners) (#)</strong> peuvent &eacute;galement utiliser :',
    '- /roomintro <em>intro</em>: set the room introduction that will be displayed for all users joining the room':
      "- /roomintro <em>introduction</em> : Param&egrave;tre l'introduction &agrave; la room qui sera affich&eacute;e à tous les utilisateurs la rejoignant",
    '- /rules <em>rules link</em>: set the room rules link seen when using /rules':
      '- /rules <em>lien des r&egrave;gles</em> : Param&egrave;tre le lien des r&egrave;gles affich&eacute;es dans la room quand /rules est utilis&eacute;e',
    '- /roommod, /roomdriver <em>username</em>: appoint a room moderator/driver':
      '- /roommod, /roomdriver <em>pseudo</em> : Promeut un utilisateur Moderator/Driver dans la room',
    '- /roomdemod, /roomdedriver <em>username</em>: remove a room moderator/driver':
      "- /roomdemod, /roomdedriver <em>pseudo</em> : Retire le rang d'un Moderator/Driver de la room",
    '- /roomdeauth <em>username</em>: remove all room auth from a user':
      "- /roomdeauth <em>pseudo</em> : Retire tous les rangs d'un utilisateur dans la room",
    '- /declare <em>message</em>: make a large blue declaration to the room':
      '- /declare <em>message</em> : Affiche une grande d&eacute;claration en bleu dans la room',
    '- !htmlbox <em>HTML code</em>: broadcast a box of HTML code to the room':
      '- !htmlbox <em>code HTML</em> : Affiche une boîte cod&eacute;e en HTML sur la room',
    '- !showimage <em>[url], [width], [height]</em>: show an image to the room':
      '- !showimage <em>[url], [largeur], [hauteur]</em> : Affiche une image dans la room',
    '- /roomsettings: change a variety of room settings, including modchat, capsfilter, etc':
      '- /roomsettings : Permet de changer plusieurs param&egrave;tres de la room y compris le modchat, le filtre à majuscules, etc',

    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6774654/">roomauth guide</a>':
      'Plus de d&eacute;tails peuvent &ecirc;tre trouv&eacute;s dans le <a href="https://www.smogon.com/forums/posts/6774654/">guide de roomauth</a>',

    'Tournament Help:': 'Aide pour les tournois',
    '- /tour create <em>format</em>, elimination: create a new single elimination tournament in the current room.':
      '- /tour create <em>format</em>, elimination : cr&eacute;e un nouveau tournoi simple en &eacute;limination directe dans la room actuelle',
    '- /tour create <em>format</em>, roundrobin: create a new round robin tournament in the current room.':
      '- /tour create <em>format</em>, roundrobin : cr&eacute;e un nouveau tournoi en roundrobin dans la room actuelle',
    '- /tour end: forcibly end the tournament in the current room':
      "- /tour end : Force la fin d'un tournoi dans la room actuelle",
    '- /tour start: start the tournament in the current room':
      '- /tour start : D&eacute;marre le tournoi dans la room actuelle',
    '- /tour banlist [pokemon], [talent], [...]: ban moves, abilities, Pokémon or items from being used in a tournament (it must be created first)':
      "- /tour banlist [pokemon], [talent], [...] : Bannit des attaques, talents, Pok&eacute;mon ou objets d'un tournoi (cette liste doit &ecirc;tre cr&eacute;&eacute;e au pr&eacute;alable)",

    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6777489/">tournaments guide</a>':
      'Plus de d&eacute;tails peuvent &ecirc;tre trouv&eacute;s dans le <a href="https://www.smogon.com/forums/posts/6777489/">guide des tournois</a>',

    'Your status cannot be updated while you are locked or semilocked.':
      'Ton statut ne peut être mis à jour quand tu es lock ou semi-lock.',
    'Your status is too long; it must be under ${maxLength} characters.':
      'Ton statut est trop long ; il doit être en dessous de ${maxLength} caractères.',
    'Your status contains a banned word.': 'Ton statut contient un mot banni.',
    'Your status has been set to: ${target}.': 'Ton statut est désormais le suivant: ${target}.',
    'You are now marked as busy.': 'Tu es maintenant marqué comme occupé.',
    'You are now marked as away. Send a message or use /back to indicate you are back.':
      'Tu es maintenant marqué comme absent. Envoie un message ou utilise /back pour indiquer que tu es de retour.',
    'You are already marked as back.': 'Tu es déjà marqué comme étant revenu.',
    'You are no longer marked as busy.': "Tu n'es plus marqué comme étant occupé.",

    'You must choose a name before you can talk.':
      'Tu dois choisir un pseudo avant de pouvoir parler.',
    "You are ${lockType} and can't talk in chat. ${lockExpiration}":
      'Tu es ${lockType} et ne peux pas parler dans le chat. ${lockExpiration}',
    'Get help with [TN: your lock]this': "Reçois de l'aide avec ceci",
    'You are muted and cannot talk in this room.':
      'Tu es mute et ne peux pas parler dans cette room.',
    'Because moderated chat is set, your account must be at least one week old and you must have won at least one ladder game to speak in this room.':
      'À cause du modchat, ton compte doit avoir été enregistré depuis une semaine et gagné un match de ladder (classé) pour pouvoir parler dans cette room.',
    'Because moderated chat is set, your account must be staff in a public room or have a global rank to speak in this room.':
      'À cause du modchat, ton compte doit être staff dans une room publique ou avoir un rang global pour parler dans cette room.',
    'Because moderated chat is set, you must be of rank ${groupName} or higher to speak in this room.':
      'À cause du modchat, tu dois être ${groupName} ou plus pour parler dans cette room.',
    "Your message can't be blank.": 'Ton message ne peut pas être vide.',
    'Your message is too long: ': 'Ton message est trop long: ',
    'Your message contains banned characters.': 'Ton message contient des caractères bannis.',
    'This room has slow-chat enabled. You can only talk once every ${time} seconds.':
      'Cette room a le slowchat activé. Tu ne peux envoyer un message que toutes les ${time} secondes.',
    'Your username contains a phrase banned by this room.':
      'Ton pseudo contient un terme banni dans cette room.',
    'Your status message contains a phrase banned by this room.':
      'Ton statut contient un terme banni dans cette room.',

    'You are ${lockType} and can only private message members of the global moderation team. ${lockExpiration}':
      '',
    'Get help with this': '',
    'The user "${targetUser.name}" is locked and cannot be PMed.': '',
    'On this server, you must be of rank ${groupName} or higher to PM users.': '',
    'This user is blocking private messages right now.': '',
    'This ${Config.groups[targetUser.group].name} is too busy to answer private messages right now. Please contact a different staff member.':
      '',
    'If you need help, try opening a <a href="view-help-request" class="button">help ticket</a>':
      '',
    'You are blocking private messages right now.': '',
    'You are blocking challenges right now.': '',

    'Your message contained banned words in this room.':
      'Ton message contient des mots bannis dans cette room.',
    "You can't send the same message again so soon.":
      'Tu ne peux pas renvoyer le même message si tôt.',
    'Due to this room being a high traffic room, your message must contain at least two letters.':
      'Dû au fait que cette room a un trafic important, ton message doit contenir au moins deux lettres.',

    'You are already blocking private messages! To unblock, use /unblockpms':
      'Tu bloques déjà les messages privés ! Pour les débloquer, utilise /unblockpms',
    'You are now blocking private messages, except from staff and ${rank}.':
      'Tu bloques maintenant les messages privés, sauf ceux du staff et des ${rank}.',
    'You are now blocking private messages, except from staff and ${status} users.':
      'Tu bloques maintenant les messages privés, sauf ceux du staff et des utilisateurs ${status}.',
    'You are now blocking private messages, except from staff.':
      'Tu bloques maintenant les messages privés, sauf ceux du staff.',
    'You are not blocking private messages! To block, use /blockpms':
      'Tu ne bloques actuellement pas les messages privés ! Pour les bloquer, utilise /blockpms',
    'You are no longer blocking private messages.': 'Tu ne bloques plus les messages privés.',
    'You are now blocking all incoming challenge requests.':
      'Tu bloques maintenant toutes les demandes de challenge à venir.',
    'You are already blocking challenges!': 'Tu bloques déjà les challenges !',
    'You are already available for challenges!': 'Tu es déjà disponible pour les challenges !',
    'You are available for challenges from now on.':
      'Tu es maintenant disponible pour les challenges.',
    'You are now blocking challenges, except from staff and ${rank}.':
      'Tu bloques maintenant les challenges, sauf ceux du staff et des ${rank}.',
    'You are now blocking challenges, except from staff and ${status} users.':
      'Tu bloques maintenant les challenges, sauf ceux du staff et des utilisateurs ${status}.',

    'Staff FAQ': '',
    'You cannot broadcast all FAQs at once.':
      "Tu ne peux pas afficher toutes les FAQ d'un seul coup.",
    'A user is autoconfirmed when they have won at least one rated battle and have been registered for one week or longer. In order to prevent spamming and trolling, most chatrooms only allow autoconfirmed users to chat. If you are not autoconfirmed, you can politely PM a staff member (staff have %, @, or # in front of their username) in the room you would like to chat and ask them to disable modchat. However, staff are not obligated to disable modchat.':
      "Un utilisateur est autoconfirmed quand il a gagné au moins un combat classé et qu'il a enregistré son compte une semaine ou plus auparavant. Afin d'empêcher le spam et le troll, la plupart des chatrooms demandent aux utilisateurs d'être autoconfirmed pour parler. Si ce n'est pas ton cas, tu peux demander poliment à un membre du staff (avec un %, @ ou # devant son pseudo) de retirer ce filtre. Néanmoins, il n'est pas obligé de le faire.",
    'How the ladder works': 'Comment le ladder fonctionne',
    'Tiering FAQ': 'FAQ sur le tiering',
    'Badge FAQ': 'FAQ sur les badges',
    'Common misconceptions about our RNG': 'Erreurs communes quant à la RNG de Showdown',
    "To join a room tournament, click the <strong>Join!</strong> button or type the command <code>/tour join</code> in the room's chat. You can check if your team is legal for the tournament by clicking the <strong>Validate</strong> button once you've joined and selected a team. To battle your opponent in the tournament, click the <strong>Ready!</strong> button when it appears. There are two different types of room tournaments: elimination (if a user loses more than a certain number of times, they are eliminated) and round robin (all users play against each other, and the user with the most wins is the winner).":
      "Pour rejoindre un tournoi de room, clique sur le bouton <strong>Join!</strong> ou tape la commande <code>/tour join</code> dans le chat. Tu peux vérifier si ton équipe est valide pour ce tournoi en cliquant le bouton <strong>Validate</strong> une fois le tournoi rejoint et une équipe sélectionnée. Pour combattre ton adversaire dans le tournoi, clique sur le bouton <strong>Ready!</strong> quand il apparaît. Il y a deux types différents de tournois de room : élimination (si un participant perd plus qu'un certain nombre de fois, il est éliminé) et round robin (tous les participants jouent les uns contre les autres et celui avec le plus de victoires à la fin est déclaré vainqueur).",
    'Frequently Asked Questions': 'Questions fréquentes',

    'pages/faq': 'pages/faq',
    'pages/ladderhelp': 'pages/ladderhelp',
    'pages/rng': 'pages/rng',
    'pages/staff': 'pages/staff',

    "- We log PMs so you can report them - staff can't look at them without permission unless there's a law enforcement reason.":
      '',
    '- We log IPs to enforce bans and mutes.': '',
    '- We use cookies to save your login info and teams, and for Google Analytics and AdSense.': '',
    '- For more information, you can read our <a href="https://${Config.routes.root}/privacy">full privacy policy.</a>':
      '',
  },
};
