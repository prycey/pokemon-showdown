import type { Translations } from '../../server/chat';

export const translations: Translations = {
  name: 'German',
  strings: {
    namelocked: 'namensgesperrt',
    locked: 'gesperrt',

    autoconfirmed: 'autoconfirmed',
    trusted: 'vertrauenswürdig',

    'Please follow the rules:': 'Bitte befolgt die Regeln:',
    '[TN: Link to the PS rules for your language (path after pokemonshowdown.com]/rules':
      '/pages/rules-de',
    'Global Rules': 'Globale Regeln',
    '${room} room rules': 'Regeln des ${room} Raumes',

    '<strong>Global ranks</strong>': '<strong>Globale Ränge</strong>',
    '+ <strong>Global Voice</strong> - They can use ! commands like !groups':
      '+ <strong>Global Voice</strong> - Sie können !-Befehle wie !groups benutzen.',
    '% <strong>Global Driver</strong> - The above, and they can also lock users and check for alts':
      '% <strong>Global Driver</strong> - Oben genanntes, und sie können Nutzer sperren sowie alternative Accounts einsehen.',
    '@ <strong>Global Moderator</strong> - The above, and they can globally ban users':
      '@ <strong>Global Moderator</strong> - Oben genanntes, und sie können Nutzer vom Server verbannen.',
    '* <strong>Global Bot</strong> - Like Moderator, but makes it clear that this user is a bot':
      '* <strong>Global Bot</strong> - Wie Moderatoren, nur wird verdeutlicht, dass der Nutzer ein Bot ist.',
    '~ <strong>Global Administrator</strong> - They can do anything, like change what this message says and promote users globally':
      '~ <strong>Global Administrator</strong> - Sie können alles tun, zum Beispiel den Text dieser Nachricht ändern.',

    '<strong>Room ranks</strong>': '<strong>Raum-Ränge</strong>',
    "^ <strong>Prize Winner</strong> - They don't have any powers beyond a symbol.":
      '^ <strong>Prize Winner</strong> - Sie verfügen über keine besonderen Privilegien, außer das Zeichen vor dem Namen.',
    '+ <strong>Voice</strong> - They can use ! commands like !groups':
      '+ <strong>Voice</strong> - Sie können !-Befehle wie !groups benutzen.',
    '% <strong>Driver</strong> - The above, and they can mute and warn':
      '% <strong>Driver</strong> - Oben genanntes, und sie können Nutzer verwarnen und stummschalten.',
    '@ <strong>Moderator</strong> - The above, and they can room ban users':
      '@ <strong>Moderator</strong> - Oben genanntes, und sie können Nutzer aus dem Raum verbannen.',
    '* <strong>Bot</strong> - Like Moderator, but makes it clear that this user is a bot':
      '* <strong>Bot</strong> - Wie Moderatoren, nur wird verdeutlicht, dass der Nutzer ein Bot ist.',
    '# <strong>Room Owner</strong> - They are leaders of the room and can almost totally control it':
      '# <strong>Room Owner</strong> - Sie sind die Leiter des Raumes und können beinahe vollständig über ihn bestimmen.',

    '/help OR /h OR /? - Gives you help.': '/help O /h O /? - Gibt dir eine Hilfestellung.',
    'For an overview of room commands, use /roomhelp':
      'Für einen Überblick über raumspezifische Befehle, nutze /roomhelp',
    'For details of a specific command, use something like: /help data':
      'Für Details zu einem spezifischen Befehl, nutze so etwas wie /help data',

    COMMANDS: 'BEFEHLE',
    'BATTLE ROOM COMMANDS': 'BEFEHLE FÜR DEN KAMPFRAUM',
    'OPTION COMMANDS': 'BEFEHLE FÜR EINSTELLUNGEN',
    'INFORMATIONAL/RESOURCE COMMANDS': 'INFORMATIVE BEFEHLE',
    'DATA COMMANDS': 'DATENBEFEHLE',
    'DRIVER COMMANDS': 'BEFEHLE FÜR DRIVER',
    'MODERATOR COMMANDS': 'BEFEHLE FÜR MODERATOREN',
    'ADMIN COMMANDS': 'BEFEHLE FÜR ADMINISTRATOREN',

    '(replace / with ! to broadcast. Broadcasting requires: + % @ # ~)':
      '(ersetze / mit ! , um einen Befehl für alle Nutzer im Chat sichtbar zu machen. Dies setzt + % @ # oder ~ voraus)',

    '<strong>Room punishments</strong>:': '<strong>Raumstrafen</strong>:',
    '<strong>warn</strong> - Displays a popup with the rules.':
      '<strong>warn</strong> - Öffnet ein Fenster mit den Regeln.',
    '<strong>mute</strong> - Mutes a user (makes them unable to talk) for 7 minutes.':
      '<strong>mute</strong> - Schaltet einen Nutzer für 7 Minuten stumm.',
    '<strong>hourmute</strong> - Mutes a user for 60 minutes.':
      '<strong>hourmute</strong> - Schaltet einen Nutzer für 60 Minuten stumm.',
    '<strong>ban</strong> - Bans a user (makes them unable to join the room) for 2 days.':
      '<strong>ban</strong> - Verbannt einen Nutzer für 2 Tage aus dem Raum (er kann ihn während dieser Zeit nicht betreten).',
    '<strong>weekban</strong> - Bans a user from the room for a week.':
      '<strong>weekban</strong> - Bannt einen User vom Raum für genau eine Woche.',
    '<strong>blacklist</strong> - Bans a user for a year.':
      '<strong>blacklist</strong> - Verbannt einen Nutzer für 1 Jahr aus dem Raum.',

    '<strong>Global punishments</strong>:': '<strong>Globale Strafen</strong>:',
    '<strong>lock</strong> - Locks a user (makes them unable to talk in any rooms or PM non-staff) for 2 days.':
      '<strong>lock</strong> - Sperrt einen Nutzer für 2 Tage (er kann während dieser Zeit in keinem Raum und an keinen Nutzer Nachrichten versenden, welcher nicht zum globalen Staff gehört).',
    '<strong>weeklock</strong> - Locks a user for a week.':
      '<strong>weeklock</strong> - Sperrt einen Nutzer für 1 Woche.',
    '<strong>namelock</strong> - Locks a user and prevents them from having a username for 2 days.':
      '<strong>namelock</strong> - Sperrt einen Nutzer für 2 Tage und hindert ihn daran, einen Nutzernamen zu haben.',
    '<strong>globalban</strong> - Globally bans (makes them unable to connect and play games) for a week.':
      '<strong>globalban</strong> - Verbannt einen Nutzer für 1 Woche vom Server (verbietet es ihm, sich zu verbinden und zu kämpfen).',

    '<strong>Indefinite global punishments</strong>:':
      '<strong>Zeitlich unbestimmtes globales Strafenkatalog</strong>:',
    '<strong>permalock</strong> - Issued for repeated instances of bad behavior and is rarely the result of a single action. ':
      '<strong>permalock</strong> - Wird meistens erst dann verwendet wenn ein User mehrfach schlechtes Verhalten an den Tag legt. Meistens ist das was zu einem Permalock führt, dann die eine Aktion die das Fass zum Überlaufen gebracht hat.',
    'These can be appealed in the <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeal</a>':
      'Für diese Permalocks hat man dann 3 Monate nach auffallfreier Zeit die Möglichkeit',
    ' forum after at least 3 months without incident.':
      ', im <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Forum auf Smogon für den Entfall des Bannes</a> zu bitten.',
    '<strong>permaban</strong> - Unappealable global ban typically issued for the most severe cases of offensive/inappropriate behavior.':
      '<strong>permaban</strong> - Ein globaler Bann bei dem auch keine Bitte des Entbannens aushilft. Grundsätzlich werden diese Arten von Bestrafungen aber nur in den härtesten Fällen verwendet, wenn beispielsweise die Angelegenheiten sehr stark beleidigend oder oftmals unangemessenes Verhalten an den Tag gelegt wird.',

    '<strong>Room drivers (%)</strong> can use:': '<strong>Raum-Driver (%)</strong> können nutzen:',
    '- /warn OR /k <em>username</em>: warn a user and show the Pok&eacute;mon Showdown rules':
      '- /warn oder /k <em>Nutzernamen</em>: Verwarnt einen Nutzer und zeigt ihm die Regeln von Pok&eacute;mon Showdown',
    '- /mute OR /m <em>username</em>: 7 minute mute':
      '- /mute oder /m <em>Nutzername</em>: Schaltet einen Nutzer für 7 Minuten stumm',
    '- /hourmute OR /hm <em>username</em>: 60 minute mute':
      '- /hourmute oder /hm <em>Nutzername</em>: Schaltet einen Nutzer für 60 Minuten stumm',
    '- /unmute <em>username</em>: unmute':
      '- /unmute <em>Nutzername</em>: Hebt die Stummschaltung eines Nutzers auf',
    "- /hidetext <em>username</em>: hide a user's messages from the room":
      '- /hidetext <em>Nutzername</em>: Blendet die Nachrichten des Nutzers aus',
    '- /announce OR /wall <em>message</em>: make an announcement':
      '- /announce oder /wall <em>Nachricht</em>: Macht eine Ankündigung',
    '- /modlog <em>username</em>: search the moderator log of the room':
      '- /modlog <em>Nutzername</em>: Ruft den Modlog des Nutzers für den Raum auf',
    '- /modnote <em>note</em>: add a moderator note that can be read through modlog':
      '- /modnote <em>Notiz</em>: Fügt eine Notiz hinzu, die über den Modlog gelesen werden kann',
    '- !show [image or youtube link]: display given media in chat.':
      '- !show [Bild oder Youtube-Link]: Zeigt den jeweiligen Medien-Link im Raum an',
    '- /whitelist [user]: whitelist a non-staff user to use !show.':
      '- /whitelist [Nutzer]: Erlaubt es einem Nutzer, welcher über keinen Rang im Raum verfügt, !show zu benutzen',
    '- /unwhitelist [user]: removes the user from !show whitelist.':
      '- /unwhitelist [Nutzer]: Entfernt einem Nutzer die Berechtigung, !show zu benutzen',

    '<strong>Room moderators (@)</strong> can also use:':
      '<strong>Raum-Moderatoren (@)</strong> können au&szlig;erdem nutzen:',
    '- /roomban OR /rb <em>username</em>: ban user from the room':
      '- /roomban oder /rb <em>Nutzername</em>: Verbannt einen Nutzer vom Raum',
    '- /roomunban <em>username</em>: unban user from the room':
      '- /roomunban <em>Nutzername</em>: Erlaubt es einem verbannten Nutzer, wieder den Raum zu betreten',
    '- /roomvoice <em>username</em>: appoint a room voice':
      '- /roomvoice <em>Nutzername</em>: Befördert einen Nutzer auf Raum-Voice',
    '- /roomdevoice <em>username</em>: remove a room voice':
      '- /roomdevoice <em>Nutzername</em>: Degradiert einen Nutzer von Raum-Voice',
    '- /staffintro <em>intro</em>: set the staff introduction that will be displayed for all staff joining the room':
      '- /staffintro <em>Intro</em>: Erstellt eine Einführung, die allen Staff-Mitgliedern beim Betreten des Raumes angezeigt wird',
    '- /roomsettings: change a variety of room settings, namely modchat':
      '- /roomsettings: Verändert eine Reihe von Raumeinstellungen; besonders hervorzuheben ist hier der moderierte Chat',

    '<strong>Room owners (#)</strong> can also use:':
      '<strong>Raum-Owner (#)</strong> können au&szlig;erdem nutzen:',
    '- /roomintro <em>intro</em>: set the room introduction that will be displayed for all users joining the room':
      '- /roomintro <em>Intro</em>: Erstellt eine Einführung, die allen Nutzern beim Betreten des Raumes angezeigt wird.',
    '- /rules <em>rules link</em>: set the room rules link seen when using /rules':
      '- /rules <em>Verknüpfung zu Regeln</em>: Erstellt eine Verknüpfung zu den Regeln, wenn /rules benutzt wird',
    '- /roommod, /roomdriver <em>username</em>: appoint a room moderator/driver':
      '- /roommod, /roomdriver <em>Nutzername</em>: Ernennt einen Raum-Moderator/Driver',
    '- /roomdemod, /roomdedriver <em>username</em>: remove a room moderator/driver':
      '- /roomdemod, /roomdedriver <em>Nutzernamen</em>: Degradiert einen einen Raum-Moderator/Driver',
    '- /roomdeauth <em>username</em>: remove all room auth from a user':
      '- /roomdeauth <em>Nutzername</em>: Entzieht einem Nutzer jegliche Raum-Authorität',
    '- /declare <em>message</em>: make a large blue declaration to the room':
      '- /declare <em>Nachricht</em>: Erstellt eine gro&szlig;e blaue Mitteilung für den Raum',
    '- !htmlbox <em>HTML code</em>: broadcast a box of HTML code to the room':
      '- !htmlbox <em>c&oacute;digo HTML</em>: Stellt im Raum ein Feld mit HTML-Code dar',
    '- !showimage <em>, [width], [height]</em>: show an image to the room':
      '- !showimage <em>[url], [Breite], [Höhe]</em>: Zeigt ein Bild im Raum',
    '- /roomsettings: change a variety of room settings, including modchat, capsfilter, etc':
      '- /roomsettings: Verändert eine Reihe von Raumeinstellungen, wie etwa den moderierten Chat, Caps-Filter, usw',

    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6774654/">roomauth guide</a>':
      'Eine detailliertere Hilfestellung findet sich im <a href="https://www.smogon.com/forums/posts/6774654/">Leitfaden für Raum-Auths</a>',

    'Tournament Help:': 'Turnier-Hilfe:',
    '- /tour create <em>format</em>, elimination: create a new single elimination tournament in the current room.':
      '- /tour create <em>Format</em>, elimination: Erstellt ein neues Turnier im KO-Format im aktuellen Raum.',
    '- /tour create <em>format</em>, roundrobin: create a new round robin tournament in the current room.':
      '- /tour create <em>Format</em>, roundrobin: Erstellt ein neues Turnier im Round-Robin-Format im aktuellen Raum.',
    '- /tour end: forcibly end the tournament in the current room':
      '- /tour end: Beendet das aktuelle Turnier im Raum.',
    '- /tour start: start the tournament in the current room':
      '- /tour start: Startet das aktuelle Turnier im Raum.',
    '- /tour banlist [pokemon], [talent], [...]: ban moves, abilities, Pokémon or items from being used in a tournament (it must be created first)':
      '- /tour banlist [Pokemon], [Fähigkeit], [...] : Verbietet die Benutzung von Fähigkeiten, Pokemon oder Items in einem Turnier (dieses muss zuvor erstellt worden sein)',
    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6777489/">tournaments guide</a>':
      'Eine detailliertere Hilfestellung findet sich im <a href="https://www.smogon.com/forums/posts/6777489/">Leitfaden für Turniere</a>',

    'Your status cannot be updated while you are locked or semilocked.':
      'Dein Status kann nicht geändert werden, solange du "locked" (gesperrt) oder semilocked (semi-gesperrt) bist.',
    'Your status is too long; it must be under ${maxLength} characters.':
      'Dein Status ist zu lang; er muss kürzer als ${maxLength} Zeichen sein.',
    'Your status contains a banned word.': 'Dein Status beinhaltet ein verbotenes Wort.',
    'Your status has been set to: ${target}.': 'Dein Status wurde zu ${target} geändert.',
    'You are now marked as busy.': 'Du bist jetzt als beschäftigt markiert.',
    'You are now marked as away. Send a message or use /back to indicate you are back.':
      'Du bist jetzt als abwesend markiert. Versende eine Nachricht oder nutze /back um zu signalisieren, dass du zurück bist.',
    'You are already marked as back.': 'Du bist bereits als anwesend markiert.',
    'You are no longer marked as busy.': 'Du bist nicht länger als beschäftigt markiert.',

    'You must choose a name before you can talk.':
      'Du musst einen Namen auswählen, bevor du schreiben kannst.',
    "You are ${lockType} and can't talk in chat. ${lockExpiration}":
      'Du bist ${lockType} und kannst im Chat nicht schreiben. ${lockExpiration}',
    'Get help with [TN: your lock]this': 'Erhalte diesbezüglich Hilfe',
    'You are muted and cannot talk in this room.':
      'Du bist stummgeschaltet und kannst in diesem Raum nicht schreiben.',
    'Because moderated chat is set, your account must be at least one week old and you must have won at least one ladder game to speak in this room.':
      'Da der moderierte Chat aktiviert ist, muss dein Account mindestens eine Woche alt sein und du musst mindestens ein Ladder-Spiel gewonnen haben, um in diesem Raum zu sprechen.',
    'Because moderated chat is set, your account must be staff in a public room or have a global rank to speak in this room.':
      'Da der moderierte Chat aktiviert ist, muss dein Account über einen Staff-Rang in einem öffentlichen Raum oder einen globalen Rang verfügen, um in diesem Raum zu sprechen.',
    'Because moderated chat is set, you must be of rank ${groupName} or higher to speak in this room.':
      'Da der moderierte Chat aktiviert ist, muss dein Account über den Rang ${groupName} oder höher verfügen, um in diesem Raum zu sprechen.',
    "Your message can't be blank.": 'Deine Nachricht kann nicht leer sein.',
    'Your message is too long: ': 'Deine Nachricht ist zu lang.',
    'Your message contains banned characters.': 'Deine Nachricht enthält verbotene Zeichen.',
    'This room has slow-chat enabled. You can only talk once every ${time} seconds.':
      'In diesem Raum ist der Slowchat aktiviert. Du kannst nur einmal jede ${time} Sekunden eine Nachricht abschicken.',
    'Your username contains a phrase banned by this room.':
      'Dein Nutzername enthält einen Ausdruck, welcher in diesem Raum verboten ist.',
    'Your status message contains a phrase banned by this room.':
      'Deine Statusmeldung enthält einen Ausdruck, welcher in diesem Raum verboten ist.',

    'You are ${lockType} and can only private message members of the global moderation team. ${lockExpiration}':
      'Du bist ${lockType} und kannst nur noch private Nachrichten an globale Staffmitglieder versenden. ${lockExpiration}',
    'Get help with this': 'Erhalte diesbezüglich Hilfe',
    'The user "${targetUser.name}" is locked and cannot be PMed.':
      'Der User "${targetUser.name}" ist gesperrt und kann nicht privat angeschrieben werden.',
    'On this server, you must be of rank ${groupName} or higher to PM users.':
      'Auf diesem Server musst du über den Rang ${groupName} oder höher verfügen, um private Nachrichten an User zu versenden.',
    'This user is blocking private messages right now.':
      'Dieser User blockiert gerade private Nachrichten.',
    'This ${Config.groups[targetUser.group].name} is too busy to answer private messages right now. Please contact a different staff member.':
      'Dieser ${Config.groups[targetUser.group].name} ist gerade zu beschäftigt, um auf private Nachrichten zu antworten. Bitte wende dich an ein anderes Staff-Mitglied.',
    'If you need help, try opening a <a href="view-help-request" class="button">help ticket</a>':
      'Falls du Hilfe benötigst, versuche ein <a href="view-help-request" class="button">Help-Ticket</a> zu beantragen.',
    'You are blocking private messages right now.': 'Du blockierst gerade private Nachrichten.',
    'You are blocking challenges right now.': '',

    'Your message contained banned words in this room.':
      'Deine Nachricht enthielt Wörter, welche in diesem Raum verboten sind.',
    "You can't send the same message again so soon.":
      'Du kannst die selbe Nachricht nicht so oft hintereinander abschicken.',
    'Due to this room being a high traffic room, your message must contain at least two letters.':
      'Da in diesem Raum gerade besonders viel los ist, muss deine Nachricht mindestens zwei Buchstaben enthalten.',

    'You are already blocking private messages! To unblock, use /unblockpms':
      'Du blockierst bereits private Nachrichten! Um dies zu deaktivieren, benutze /unblockpms',
    'You are now blocking private messages, except from staff and ${rank}.':
      'Du blockierst jetzt private Nachrichten, außer vom Staff und ${rank}. ',
    'You are now blocking private messages, except from staff and ${status} users.':
      'Du blockierst jetzt private Nachrichten, außer von Staff und ${status} Nutzern. ',
    'You are now blocking private messages, except from staff.':
      'Du blockierst jetzt private Nachrichten, außer vom Staff.',
    'You are not blocking private messages! To block, use /blockpms':
      'Du blockierst keine privaten Nachrichten! Um diese zu blockieren, benutze /blockpms',
    'You are no longer blocking private messages.':
      'Du blockierst keine privaten Nachrichten mehr.',
    'You are now blocking all incoming challenge requests.':
      'Du blockierst jetzt alle eingehenden Herausforderungen.',
    'You are already blocking challenges!': 'Du blockierst bereits Herausforderungen!',
    'You are already available for challenges!': 'Du bist bereits für Herausforderungen verfügbar!',
    'You are available for challenges from now on.':
      'Du bist ab jetzt für Herausforderungen verfügbar.',
    'You are now blocking challenges, except from staff and ${rank}.':
      'Du blockierst nun Herausforderungen mit Ausnahme derjenigen vom Staff-Team und ${rank}.',
    'You are now blocking challenges, except from staff and ${status} users.':
      'Du blockierst nun Herausforderungen mit Ausnahme derjenigen vom Staff-Team und ${status}-Nutzern.',

    'Staff FAQ': 'Staff-FAQ',
    'You cannot broadcast all FAQs at once.':
      'Du kannst nicht sämtliche FAQs auf einmal anzeigen lassen.',
    'A user is autoconfirmed when they have won at least one rated battle and have been registered for one week or longer. In order to prevent spamming and trolling, most chatrooms only allow autoconfirmed users to chat. If you are not autoconfirmed, you can politely PM a staff member (staff have %, @, or # in front of their username) in the room you would like to chat and ask them to disable modchat. However, staff are not obligated to disable modchat.':
      'Ein Nutzer ist autoconfirmed, wenn dieser mindestens einen Rated-Kampf gewonnen hat und seit einer Woche oder länger registriert ist. Um Spamming und Trolling zu unterbinden, erlauben die meisten Räume nur Nutzern zu schreiben, welche autoconfirmed sind. Falls du nicht autoconfirmed bist, kannst du ein Staff-Mitglied (Nutzer mit %, @, oder # vor ihren Namen) freundlich darum bitten, den moderierten Chat zu deaktivieren. Jedoch ist der Staff nicht dazu verpflichtet, dies zu tun.',
    'How the ladder works': 'Wie die Ladder funktioniert',
    'Tiering FAQ': 'Tiering-FAQ',
    'Badge FAQ': 'Badge-FAQ',
    'Common misconceptions about our RNG': 'Häufige Missverständnisse über unser RNG-System',
    "To join a room tournament, click the <strong>Join!</strong> button or type the command <code>/tour join</code> in the room's chat. You can check if your team is legal for the tournament by clicking the <strong>Validate</strong> button once you've joined and selected a team. To battle your opponent in the tournament, click the <strong>Ready!</strong> button when it appears. There are two different types of room tournaments: elimination (if a user loses more than a certain number of times, they are eliminated) and round robin (all users play against each other, and the user with the most wins is the winner).":
      'Um einem Raum-Turnier beizutreten, klicke auf <strong>Join!</strong> oder gebe den Befehl <code>/tour join</code> in den Chat ein. Du kannst überprüfen, ob dein Team für das Turnier legal ist, indem du auf <strong>Validate</strong> klickst, nachdem du dem Turnier beigetreten bist und ein Team ausgewählt hast. Um deinen Gegner im Turnier herauszufordern, klicke auf <strong>Ready!</strong>, sobald es erscheint. Es gibt zwei verschiedene Arten von Raum-Turnieren: Elimination (falls ein Nutzer mehr als eine bestimmte Anzahl an Spielen verliert, ist er draußen) und Round Robin (jeder spielt gegen jeden und der Nutzer mit den meisten Siegen am Ende gewinnt das Turnier).',
    'Frequently Asked Questions': 'Häufig gestellte Fragen',

    'Invalid room.': 'Ungültiger Raum.',

    'pages/faq': 'pages/faq',
    'pages/ladderhelp': 'pages/ladderhelp-de',
    'pages/rng': 'pages/rng',
    'pages/staff': 'pages/staff-de',

    "- We log PMs so you can report them - staff can't look at them without permission unless there's a law enforcement reason.":
      'Wir speichern die Inhalte privater Nachrichten, damit du diese nötigenfalls melden kannst - das Staff-Team kann diese ohne Erlaubnis nicht einsehen, es sei denn, es gilt, ein Gesetz zu vollstrecken.',
    '- We log IPs to enforce bans and mutes.':
      'Wir registrieren IP-Adressen, um Verbannungen und Stummschaltungen zu vollstrecken.',
    '- We use cookies to save your login info and teams, and for Google Analytics and AdSense.':
      'Wir nutzen Cookies, um sowohl deine Login-Daten und Teams zu sichern als auch für Google Analytics and AdSense.',
    '- For more information, you can read our <a href="https://${Config.routes.root}/privacy">full privacy policy.</a>':
      '',
  },
};
