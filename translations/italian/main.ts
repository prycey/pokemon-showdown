import type { Translations } from '../../server/chat';

export const translations: Translations = {
  name: 'Italian',
  strings: {
    namelocked: 'namelockato',
    locked: 'lockato',

    autoconfirmed: 'autoconfermato',
    trusted: 'fidato',

    'Please follow the rules:': 'Per favore, rispetta le seguenti regole:',
    '[TN: Link to the PS rules for your language (path after pokemonshowdown.com]/rules':
      '/pages/rules-it',
    'Global Rules': 'Regole Globali',
    '${room} room rules': 'Regole della room ${room}',

    '<strong>Global ranks</strong>': '<strong>Ruoli Globali</strong>',
    '+ <strong>Global Voice</strong> - They can use ! commands like !groups':
      '+ <strong>Global Voice</strong> - Possono utilizzare i comandi con !, come !groups',
    '% <strong>Global Driver</strong> - The above, and they can also lock users and check for alts':
      '% <strong>Global Driver</strong> - Come i Global Voice, e possono lockare gli utenti e controllare i loro alts',
    '@ <strong>Global Moderator</strong> - The above, and they can globally ban users':
      '@ <strong>Global Moderator</strong> - Come i Global Driver, e possono bannare globalmente gli utenti',
    '* <strong>Global Bot</strong> - Like Moderator, but makes it clear that this user is a bot':
      "* <strong>Global Bot</strong> - Come i Global Moderator, ma il simbolo specifica che l'utente è un bot",
    '~ <strong>Global Administrator</strong> - They can do anything, like change what this message says and promote users globally':
      '~ <strong>Global Administrator</strong> - Possono fare di tutto, anche cambiare il contenuto di questo messaggio e promuovere globalmente gli utenti',

    '<strong>Room ranks</strong>': '<strong>Ruoli della Room</strong>',
    "^ <strong>Prize Winner</strong> - They don't have any powers beyond a symbol.":
      '^ <strong>Prize Winner</strong> - Non hanno alcun potere, eccezion fatta per un segno distintivo',
    '+ <strong>Voice</strong> - They can use ! commands like !groups':
      '+ <strong>Voice</strong> - Possono utilizzare i comandi con !, come !groups',
    '% <strong>Driver</strong> - The above, and they can mute and warn':
      '% <strong>Driver</strong> - Come i Voice, e possono mutare gli utenti',
    '@ <strong>Moderator</strong> - The above, and they can room ban users':
      '@ <strong>Moderator</strong> - Come i Driver, e possono bannare gli utenti dalla room',
    '* <strong>Bot</strong> - Like Moderator, but makes it clear that this user is a bot':
      "* <strong>Bot</strong> - Come i Moderator, ma il simbolo specifica che l'utente è un bot",
    '# <strong>Room Owner</strong> - They are leaders of the room and can almost totally control it':
      '# <strong>Room Owner</strong> - Sono i leader della room e possono controllarla quasi del tutto',

    '/help OR /h OR /? - Gives you help.': '/help O /h O /? - Offre una lista di comandi utili.',
    'For an overview of room commands, use /roomhelp':
      'Per una visione generale dei comandi della room, usa /roomhelp',
    'For details of a specific command, use something like: /help data':
      'Per i dettagli di un comando specifico, usa ad esempio /help data',

    COMMANDS: 'COMANDI',
    'BATTLE ROOM COMMANDS': 'COMANDI PER LA CHAT IN BATTLE',
    'OPTION COMMANDS': 'COMANDI PER LE OPZIONI',
    'INFORMATIONAL/RESOURCE COMMANDS': 'COMANDI INFORMATIVI E/O PER LE RISORSE',
    'DATA COMMANDS': 'COMANDI PER I DATI',
    'DRIVER COMMANDS': 'COMANDI PER I DRIVER',
    'MODERATOR COMMANDS': 'COMANDI PER I MODERATORI',
    'ADMIN COMMANDS': 'COMANDI PER GLI AMMINISTRATORI',

    '(replace / with ! to broadcast. Broadcasting requires: + % @ # ~)':
      "(sostituisci / con ! per mostrare in room un comando. L'operazione richiede i seguenti rank: + % @ # ~)",

    '<strong>Room punishments</strong>:': '<strong>Punizioni della room</strong>:',
    '<strong>warn</strong> - Displays a popup with the rules.':
      '<strong>warn</strong> - Mostra un popup con le regole.',
    '<strong>mute</strong> - Mutes a user (makes them unable to talk) for 7 minutes.':
      '<strong>mute</strong> - Muta un utente (gli impedisce di parlare) per 7 minuti.',
    '<strong>hourmute</strong> - Mutes a user for 60 minutes.':
      '<strong>hourmute</strong> - Muta un utente per 60 minuti.',
    '<strong>ban</strong> - Bans a user (makes them unable to join the room) for 2 days.':
      '<strong>ban</strong> - Banna un utente (gli impedisce di entrare in room) per 2 giorni.',
    '<strong>weekban</strong> - Bans a user from the room for a week.':
      '<strong>weekban</strong> - Banna un utente per una settimana dalla room.',
    '<strong>blacklist</strong> - Bans a user for a year.':
      '<strong>blacklist</strong> - Banna un utente dalla room per un anno.',

    '<strong>Global punishments</strong>:': '<strong>Punizioni globali</strong>:',
    '<strong>lock</strong> - Locks a user (makes them unable to talk in any rooms or PM non-staff) for 2 days.':
      '<strong>lock</strong> - Locka un utente (gli impedisce di parlare in qualsiasi room o di mandare messaggi privati a chi non è staff) per 2 giorni.',
    '<strong>weeklock</strong> - Locks a user for a week.':
      '<strong>weeklock</strong> - Locka un utente per una settimana.',
    '<strong>namelock</strong> - Locks a user and prevents them from having a username for 2 days.':
      '<strong>namelock</strong> - Locka un utente e gli impedisce di avere un nome utente per 2 giorni.',
    '<strong>globalban</strong> - Globally bans (makes them unable to connect and play games) for a week.':
      '<strong>globalban</strong> - Banna globalmente un utente (gli impedisce di connettersi al server e di giocare) per una settimana.',

    '<strong>Indefinite global punishments</strong>:':
      '<strong>Punizioni globali indeterminate</strong>:',
    '<strong>permalock</strong> - Issued for repeated instances of bad behavior and is rarely the result of a single action. ':
      '<strong>permalock</strong> - Punizione data per casi ripetuti di comportamenti inadeguati e raramente è il risultato di una singola azione. ',
    'These can be appealed in the <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeal</a>':
      'È possibile fare ricorso a questa punizione nel forum <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeal</a>',
    ' forum after at least 3 months without incident.':
      " dopo un minimo di 3 mesi dall'ultimo incidente.",
    '<strong>permaban</strong> - Unappealable global ban typically issued for the most severe cases of offensive/inappropriate behavior.':
      '<strong>permaban</strong> - Ban globale inappellabile dato per i casi più severi di comportamento offensivo e/o inappropriato.',

    '<strong>Room drivers (%)</strong> can use:':
      '<strong>I driver della room (%)</strong> possono usare:',
    '- /warn OR /k <em>username</em>: warn a user and show the Pok&eacute;mon Showdown rules':
      "- /warn O /k <em>nome utente</em>: d&agrave; un avviso all'utente in questione e gli mostra le regole di Pok&eacute;mon Showdown",
    '- /mute OR /m <em>username</em>: 7 minute mute':
      '- /mute O /m <em>nome utente</em>: muta per 7 minuti',
    '- /hourmute OR /hm <em>username</em>: 60 minute mute':
      '- /hourmute O /hm <em>nome utente</em>: muta per 60 minuti',
    '- /unmute <em>username</em>: unmute': '- /unmute <em>nome utente</em>: rimuove il mute',
    "- /hidetext <em>username</em>: hide a user's messages from the room":
      '- /hidetext <em>nome utente</em>: nasconde i messaggi di un utente dalla room',
    '- /announce OR /wall <em>message</em>: make an announcement':
      '- /announce O /wall <em>messaggio</em>: permette di fare un annuncio',
    '- /modlog <em>username</em>: search the moderator log of the room':
      '- /modlog <em>nome utente</em>: permette di consultare la storia moderativa di un utente della room',
    '- /modnote <em>note</em>: add a moderator note that can be read through modlog':
      '- /modnote <em>nota</em>: aggiunge una nota scritta da un moderatore che pu&ograve; essere letta attraverso il modlog',

    '<strong>Room moderators (@)</strong> can also use:':
      '<strong>I moderatori della room (@)</strong> possono inoltre usare:',
    '- /roomban OR /rb <em>username</em>: ban user from the room':
      "- /roomban O /rb <em>nome utente</em>: banna l'utente in questione dalla room",
    '- /roomunban <em>username</em>: unban user from the room':
      "- /roomunban <em>nome utente</em>: permette all'utente bannato di rientrare in room",
    '- /roomvoice <em>username</em>: appoint a room voice':
      "- /roomvoice <em>nome utente</em>: promuove l'utente a room voice",
    '- /roomdevoice <em>username</em>: remove a room voice':
      "- /roomdevoice <em>nome utente</em>: rimuove il room voice dall'utente",
    '- /staffintro <em>intro</em>: set the staff introduction that will be displayed for all staff joining the room':
      "- /staffintro <em>intro</em>: imposta l'introduzione dello staff, che verr&agrave; mostrata a tutti i componenti dello staff una volta che entrano in room",
    '- /roomsettings: change a variety of room settings, namely modchat':
      '- /roomsettings: cambia una variet&agrave; di impostazioni della room, pi&ugrave; comunemente la modchat',

    '<strong>Room owners (#)</strong> can also use:':
      '<strong>Gli owner della room (#)</strong> possono inoltre usare:',
    '- /roomintro <em>intro</em>: set the room introduction that will be displayed for all users joining the room':
      "- /roomintro <em>intro</em>: imposta l'introduzione della room che verr&agrave; mostrata a tutti gli utenti quando entrano in room",
    '- /rules <em>rules link</em>: set the room rules link seen when using /rules':
      '- /rules <em>link delle regole</em>: imposta il link delle regole della room che si visualizza quando si usa /rules',
    '- /roommod, /roomdriver <em>username</em>: appoint a room moderator/driver':
      "- /roommod, /roomdriver <em>nome utente</em>: promuove l'utente a moderatore/driver della room",
    '- /roomdemod, /roomdedriver <em>username</em>: remove a room moderator/driver':
      "- /roomdemod, /roomdedriver <em>nome utente</em>: rimuove il room moderator/driver dall'utente",
    '- /roomdeauth <em>username</em>: remove all room auth from a user':
      '- /roomdeauth <em>nome utente</em>: rimuove tutti i ruoli della room da un utente',
    '- /declare <em>message</em>: make a large blue declaration to the room':
      '- /declare <em>messaggio</em>: dichiara un messaggio in room in colore blu, visibile a tutti gli utenti',
    '- !htmlbox <em>HTML code</em>: broadcast a box of HTML code to the room':
      '- !htmlbox <em>codice HTML</em>: pubblica in room una casella contenente il codice HTML',
    '- !showimage <em>, [width], [height]</em>: show an image to the room':
      "- !showimage <em>[url], [larghezza], [lunghezza]</em>: mostra un'immagine in room",
    '- /roomsettings: change a variety of room settings, including modchat, capsfilter, etc':
      '- /roomsettings: modifica una variet&agrave; di impostazioni, incluse modchat, capsfilter, etc',

    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6774654/">roomauth guide</a>':
      'Maggiori informazioni possono essere trovate nella <a href="https://www.smogon.com/forums/posts/6774654/">guida per roomauth</a>',

    'Tournament Help:': 'Assistenza per i Tornei:',
    '- /tour create <em>format</em>, elimination: create a new single elimination tournament in the current room.':
      '- /tour create <em>formato</em>, elimination: crea un nuovo torneo ad eliminazione diretta nella room',
    '- /tour create <em>format</em>, roundrobin: create a new round robin tournament in the current room.':
      '- /tour create <em>formato</em>, roundrobin: crea un nuovo torneo round robin nella room',
    '- /tour end: forcibly end the tournament in the current room':
      '- /tour end: fa terminare in modo forzato il torneo',
    '- /tour start: start the tournament in the current room':
      '- /tour start: fa cominciare il torneo',
    '- /tour banlist [pokemon], [talent], [...]: ban moves, abilities, Pokémon or items from being used in a tournament (it must be created first)':
      '- /tour banlist [pokemon], [talent], [...]: banna mosse, abilit&agrave;, Pok&eacute;mon o strumenti dal torneo (prima &egrave; necessario creare il torneo)',

    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6777489/">tournaments guide</a>':
      'Maggiori informazioni possono essere trovate nella <a href="https://www.smogon.com/forums/posts/6777489/">guida per tornei</a>',

    'Your status cannot be updated while you are locked or semilocked.':
      'Il tuo stato non può essere aggiornato mentre sei lockato o semilockato.',
    'Your status is too long; it must be under ${maxLength} characters.':
      'Il tuo stato è troppo lungo; deve avere una lunghezza inferiore a ${maxLength} caratteri.',
    'Your status contains a banned word.': 'Il tuo stato contiene una parola proibita.',
    'Your status has been set to: ${target}.': 'Il tuo stato è stato cambiato in: ${target}.',
    'You are now marked as busy.': 'Sei ora indicato come busy (occupato).',
    'You are now marked as away. Send a message or use /back to indicate you are back.':
      'Sei ora indicato come away (assente). Invia un messaggio o usa il comando /back per indicare che sei nuovamente presente.',
    'You are already marked as back.': 'Sei già indicato come back (attivo).',
    'You are no longer marked as busy.': 'Non sei più indicato come busy (occupato).',

    'You must choose a name before you can talk.':
      'Devi scegliere un nome prima che di poter parlare.',
    "You are ${lockType} and can't talk in chat. ${lockExpiration}":
      'Sei ${lockType} e non puoi parlare in chat. ${lockExpiration}',
    'Get help with [TN: your lock]this': 'Richiedi aiuto con questo',
    'You are muted and cannot talk in this room.': 'Sei mutato e non puoi parlare in questa room.',
    'Because moderated chat is set, your account must be at least one week old and you must have won at least one ladder game to speak in this room.':
      'Poiché la chat moderata è attiva, devi essere registrato da almeno una settimana e aver vinto una lotta in ladder.',
    'Because moderated chat is set, your account must be staff in a public room or have a global rank to speak in this room.':
      'Poiché la chat moderata è attiva, il tuo account deve essere staff in una room pubblica o avere un rank globale per parlare in questa room.',
    'Because moderated chat is set, you must be of rank ${groupName} or higher to speak in this room.':
      'Poiché la chat moderata è attiva, devi avere il rank di ${groupName} o superiore per parlare in questa room.',
    "Your message can't be blank.": 'Il tuo messaggio non può essere vuoto.',
    'Your message is too long.': 'Il tuo messaggio è troppo lungo:',
    'Your message contains banned characters.':
      'Il tuo messaggio contiene parole o caratteri non permessi.',
    'This room has slow-chat enabled. You can only talk once every ${time} seconds.':
      'Questa room ha la slow-chat attivata. Puoi inviare un nuovo messaggio ogni ${time} secondi.',
    'Your username contains a phrase banned by this room.':
      'Il tuo username contiene una frase non permessa in questa room.',
    'Your status message contains a phrase banned by this room.':
      'Il tuo status contiene una frase non permessa in questa room.',

    'You are ${lockType} and can only private message members of the global moderation team. ${lockExpiration}':
      'Sei ${lockType} e puoi mandare messaggi privati solo ai membri del team di moderazione globale.',
    'Get help with this': 'Richiedi aiuto per questo',
    'The user "${targetUser.name}" is locked and cannot be PMed.':
      'Questo utente "${targetUser.name}" è lockato e non è possibile mandargli un messaggio privato.',
    'On this server, you must be of rank ${groupName} or higher to PM users.':
      'In questo server, devi avere il rank ${groupName} o superiore per mandare un messaggio privato agli utenti',
    'This user is blocking private messages right now.':
      'Al momento, questo utente sta bloccando i messaggi privati.',
    'This ${Config.groups[targetUser.group].name} is too busy to answer private messages right now. Please contact a different staff member.':
      'Al momento, questo ${Config.groups[targetUser.group].name} è troppo impegnato per rispondere ai messaggi privati. Per favore, contatta un altro membro dello staff.',
    'If you need help, try opening a <a href="view-help-request" class="button">help ticket</a>':
      'Se hai bisogno di aiuto, prova ad aprire un <a href="view-help-request" class="button">ticket help</a>',
    'You are blocking private messages right now.':
      'In questo momento stai bloccando i messaggi privati.',
    'You are blocking challenges right now.': 'In questo momento stai bloccando le sfide.',

    'Your message contained banned words in this room.':
      'Il tuo messaggio conteneva una o più parole non permesse in questa room.',
    "You can't send the same message again so soon.":
      'Non puoi inviare lo stesso messaggio di nuovo dopo così poco tempo',
    'Due to this room being a high traffic room, your message must contain at least two letters.':
      'Poiché questa è una room molto affollata, il tuo messaggio deve contenere almeno due lettere.',

    'You are already blocking private messages! To unblock, use /unblockpms':
      'Stai già bloccando i messaggi privati! Per sbloccarli, usa /unblockpms',
    'You are now blocking private messages, except from staff and ${rank}.':
      'Ora stai bloccando i messaggi privati, tranne da parte dello staff e ${rank}.',
    'You are now blocking private messages, except from staff and ${status} users.':
      'Ora stai bloccando i messaggi privati, tranne da parte dello staff e gli utenti ${status}.',
    'You are now blocking private messages, except from staff.':
      'Ora stai bloccando i messaggi privati, tranne da parte dello staff',
    'You are not blocking private messages! To block, use /blockpms':
      'Non stai bloccando i messaggi privati! Per bloccarli, usa /blockpms',
    'You are no longer blocking private messages.': 'Non stai più bloccando i messaggi privati.',
    'You are now blocking all incoming challenge requests.':
      'Stai ora bloccando ogni richiesta di sfida in arrivo.',
    'You are already blocking challenges!': 'Stai già bloccando le sfide!',
    'You are already available for challenges!': 'Sei già disponibile per le sfide!',
    'You are available for challenges from now on.':
      'Da questo momento in poi, sei disponibile per le sfide.',
    'You are now blocking challenges, except from staff and ${rank}.':
      'Ora stai bloccando le sfide, tranne da parte dello staff e ${rank}.',
    'You are now blocking challenges, except from staff and ${status} users.':
      'Ora stai bloccando le sfide, tranne da parte dello staff e gli utenti ${status}.',

    'Staff FAQ': 'FAQ relative allo Staff',
    'You cannot broadcast all FAQs at once.': 'Non puoi mostrare tutte le FAQ in una volta.',
    'A user is autoconfirmed when they have won at least one rated battle and have been registered for one week or longer. In order to prevent spamming and trolling, most chatrooms only allow autoconfirmed users to chat. If you are not autoconfirmed, you can politely PM a staff member (staff have %, @, or # in front of their username) in the room you would like to chat and ask them to disable modchat. However, staff are not obligated to disable modchat.':
      'Un utente è "autoconfirmed" quando ha vinto almeno una lotta a punti ed è registrato da una o più settimane. In modo da prevenire episodi di spam e trolling, la maggior parte delle chatroom permette unicamente agli utenti autoconfirmed di parlare. Nel caso in cui tu non sia autoconfirmed, chiedi educatamente ad un membro dello staff (lo staff è contrassegnato dai simboli %, @ o # vicino al loro nome utente) della room nella quale vuoi parlare e chiedi loro di disattivare la modchat. Tuttavia, lo staff non è in alcun modo obbligato a disattivare la modchat.',
    'How the ladder works': 'Come funziona la ladder',
    'Tiering FAQ': 'FAQ relative al Tiering',
    'Badge FAQ': 'FAQ relative alle Badge',
    'Common misconceptions about our RNG': 'Errori comuni sul nostro RNG',
    "To join a room tournament, click the <strong>Join!</strong> button or type the command <code>/tour join</code> in the room's chat. You can check if your team is legal for the tournament by clicking the <strong>Validate</strong> button once you've joined and selected a team. To battle your opponent in the tournament, click the <strong>Ready!</strong> button when it appears. There are two different types of room tournaments: elimination (if a user loses more than a certain number of times, they are eliminated) and round robin (all users play against each other, and the user with the most wins is the winner).":
      "Per partecipare ad un torneo della room, clicca sul tasto <strong>Join!</strong> o scrivi il comando <code>/tour join</code> nella room del torneo. Puoi controllare se il tuo team è valido per il torneo cliccando sul tasto <strong>Validate</strong> una volta che sei entrato nel torneo e hai selezionato un team. Per lottare contro il tuo avversario, clicca sul tasto <strong>Ready!</strong> non appena questo appare. Ci sono due tipi di tornei della room: ad eliminazione (se un utente perde più di un certo numero di volte, egli è eliminato) e round robin (tutti gli utenti lottano tra di loro, e l'utente con il maggior numero di vittorie vince.",
    'Frequently Asked Questions': 'Domande Frequenti (FAQ)',

    'pages/faq': 'pages/faq',
    'pages/ladderhelp': 'pages/ladderhelp',
    'pages/rng': 'pages/rng',
    'pages/staff': 'pages/staff',

    "- We log PMs so you can report them - staff can't look at them without permission unless there's a law enforcement reason.":
      '- Controlliamo i messaggi privati che ci vengono segnalati - lo staff non può vederli senza permesso tranne che per motivi legali.',
    '- We log IPs to enforce bans and mutes.':
      '- Controlliamo gli IP in modo tale che i ban e i mute vengano rispettati.',
    '- We use cookies to save your login info and teams, and for Google Analytics and AdSense.':
      '- Utilizziamo i cookie per salvare credenziali di accesso e team, e per sfruttare Google Analytics e AdSense.',
    '- For more information, you can read our <a href="https://${Config.routes.root}/privacy">full privacy policy.</a>':
      '- Per maggiori informazioni, puoi leggere la nostra <a href="https://${Config.routes.root}/privacy">policy completa sulla privacy.</a>',
  },
};
