import type { Translations } from '../../server/chat';

export const translations: Translations = {
  strings: {
    'Server version: <b>${version}</b>': 'Versione del server: <b>${version}</b>',
    '/mee - must not start with a letter or number':
      '/mee - non deve iniziare con una lettera o un numero',
    "What?! How are you not more excited to battle?! Try /battle! to show me you're ready.":
      'Cosa?! Non sei più emozionato di lottare? Usa /battle! e dimostrami che sei pronto.',
    "Access denied for custom avatar - make sure you're on the right account?":
      'Accesso negato per il custom avatar - sei sicuro di essere sul giusto account?',
    'Invalid avatar.': 'Avatar non valido.',
    'Avatar changed to:': 'Avatar cambiato in:',
    'Artist: ': 'Artista: ',
    'No one has PMed you yet.': 'Nessuno ti ha mandato un PM per ora.',
    'You forgot the comma.': 'Hai dimenticato la virgola.',
    'User ${targetUsername} not found. Did you misspell their name?':
      'Utente ${targetUsername} non trovato. Forse hai scritto male il nome?',
    'User ${targetUsername} is offline.': "L'utente ${targetUsername} è offline.",
    'The user "${targetUsername}" was not found.':
      'L\'utente "${targetUsername}" non è stato trovato.',
    'The room "${target}" was not found.': 'La room "${target}" non è stata trovata.',
    'You do not have permission to invite people into this room.':
      'Non hai i permessi per invitare utenti in questa room.',
    'This user is already in "${targetRoom.title}".':
      'L\'utente è già all\'interno di "${targetRoom.title}".',
    'Setting status messages in /busy is no longer supported. Set a status using /status.':
      'Non è possibile impostare uno status in modalità /busy. Imposta uno status usando /status.',
    'Setting status messages in /away is no longer supported. Set a status using /status.':
      'Non è possibile impostare uno status in modalità /away. Imposta uno status usando /status.',
    "User '${target}' not found.": "Utente '${target}' non trovato.",
    '${targetUser.name} does not have a status set.': '${targetUser.name} non ha uno status.',
    '${targetUser.name}\'s status "${targetUser.userMessage}" was cleared by ${user.name}${displayReason}':
      'Lo status "${targetUser.userMessage}" di ${targetUser.name} è stato rimosso da ${user.name}${displayReason}',
    "You don't have a status message set.": 'Non hai nessuno status.',
    'You have cleared your status message.': 'Hai rimosso il tuo status.',
    'This user has not played any ladder games yet.':
      'Questo utente non ha giocato nessuna partita in ladder per ora.',
    'W[TN: initial for Wins]': 'V',
    'L[TN: initial for Losses]': 'P',
    "You already have the temporary symbol '${group}'.":
      "Possiedi già il simbolo temporaneo '${group}'.",
    'You must specify a valid group symbol.': 'Devi specificare un simbolo di gruppo valido.',
    'You may only set a temporary symbol below your current rank.':
      'Puoi impostare un simbolo temporaneo solo sotto al tuo attuale rank.',
    'Your temporary group symbol is now': 'Il tuo attuale simbolo temporaneo è',
    "Currently, you're viewing Pokémon Showdown in ${language}.":
      'In questo momento, la lingua impostata su Pokémon Showdown è ${language}.',
    'Valid languages are: ${languages}': 'Le lingue disponibili sono: ${language}',
    'Pokémon Showdown will now be displayed in ${language} (except in language rooms).':
      'Pokémon Showdown verrà ora mostrato in ${language} (tranne che nelle room linguistiche).',
    'Note that rooms can set their own language, which will override this setting.':
      'Ricorda che le room possono impostare la propria lingua, il che sovrascriverà queste impostazioni.',
    '/updatesettings expects JSON encoded object.':
      '/updatesettings richiede un oggetto codificato JSON.',
    'Unable to parse settings in /updatesettings!':
      'Impossibile analizzare le impostazioni in /updatesettings!',
    'Must be in a battle.': 'Deve essere in una lotta.',
    'User ${target} not found.': 'Utente ${target} non trovato.',
    'Must be a player in this battle.': 'Deve essere un giocatore in questa lotta.',
    '${targetUser.name} has not requested extraction.':
      "${targetUser.name} non ha richiesto l'estrazione.",
    'You have already consented to extraction with ${targetUser.name}.':
      'Hai già consentito di estrarre con ${targetUser.name}.',
    '${user.name} consents to sharing battle team and choices with ${targetUser.name}.':
      '${user.name} consente di condividere il team e le scelte della lotta con ${targetUser.name}.',
    'No input log found.': 'Nessun log input trovato.',
    '${targetUser.name} has extracted the battle input log.':
      '${targetUser.name} ha estratto i log della lotta.',
    'This command only works in battle rooms.': 'Questo comando funziona solo nelle room di lotta.',
    'This command only works when the battle has ended - if the battle has stalled, use /offertie.':
      'Questo comando funziona solo quando la lotta è finita - se la lotta è in stallo, usa /offertie.',
    'Alternatively, you can end the battle with /forcetie.':
      'In alternativa, puoi terminare la lotta con /forcetie.',
    '${user.name} has extracted the battle input log.':
      '${user.name} ha estratto i log della lotta.',
    'You already extracted the battle input log.': 'Hai già estratto i log della lotta.',
    'Battle input log re-requested.': 'Log input della lotta richiesti nuovamente.',
    'Invalid input log.': 'Log input non valido.',
    'Your input log contains untrusted code - you must have console access to use it.':
      'Il tuo log input contiene un codice non sicuro - devi avere accesso alla console per usarlo.',
    'This command can only be used in a battle.': 'Questo comando può essere usato solo in lotta.',
    'Only players can extract their team.': 'Solo i giocatori possono estrarre il proprio team.',
    'Use a number between 1-6 to view a specific set.':
      'Utilizza un numero fra 1 e 6 per visualizzare un set specifico.',
    'The Pokemon "${target}" is not in your team.': 'Il Pokémon "${target}" non è nel tuo team.',
    'That Pokemon is not in your team.': 'Quel Pokémon non è nel tuo team.',
    'View team': 'Visualizza team.',
    'Must be in a battle room.': 'Deve essere in una room di lotta.',
    'This server does not allow offering ties.':
      'In questo server non è possibile proporre un pareggio.',
    "You can't offer ties in tournaments.": 'Non puoi proporre un pareggio durante i tornei.',
    "It's too early to tie, please play until turn 100.":
      'È troppo presto per proporre un pareggio, per favore continua a giocare fino al turno 100.',
    'No other player is requesting a tie right now. It was probably canceled.':
      'Nessun altro giocatore sta proponendo un pareggio al momento. È stato probabilmente cancellato.',
    '${user.name} is offering a tie.': '${user.name} sta proponendo un pareggio.',
    'Accept tie': 'Accetta il pareggio.',
    Reject: 'Rifiuta.',
    'Must be a player to accept ties.': 'Devi essere un giocatore per accettare un pareggio.',
    'You have already agreed to a tie.': 'Hai già accettato di voler pareggiare.',
    '${user.name} accepted the tie.': '${user.name} ha accettato il pareggio.',
    'All players have accepted the tie.': 'Tutti i giocatori hanno accettato il pareggio.',
    'Must be a player to reject ties.': 'Devi essere un giocatore per rifiutare un pareggio.',
    '${user.name} rejected the tie.': '${user.name} ha rifiutato il pareggio.',
    "This room doesn't have an active game.": 'In questa room non è attivo alcun minigioco.',
    "This kind of game can't be forfeited.": 'Non puoi abbandonare questo tipo di minigioco.',
    "This game doesn't support /choose": 'Questo minigioco non supporta /choose.',
    "This game doesn't support /undo": 'Questo minigioco non supporta /undo',
    'You can only save replays for battles.': 'Puoi solamente salvare i replay delle lotte.',
    "This battle can't have hidden replays, because the tournament is set to be forced public.":
      'Questa lotta non può avere replay nascosti perché il torneo è stato impostato come pubblico.',
    'The replay for this battle is already set to hidden.':
      'Il replay di questa lotta è stato impostato come nascosto.',
    '${user.name} hid the replay of this battle.':
      '${user.name} ha nascosto il replay di questa lotta.',
    'You can only do this in battle rooms.': 'Puoi farlo solamente nelle room di lotta.',
    'You can only add a Player to unrated battles.':
      'Puoi aggiungere un giocatore solamente nelle lotte senza punteggio.',
    'Player must be set to "p1" or "p2", not "${target}".':
      'I giocatori devono essere impostati come "p1" o "p2", non "${target}".',
    'User ${name} not found.': 'Utente ${name} non trovato.',
    'This room already has a player in slot ${target}.':
      'Questa room ha già un giocatore nello slot ${target}.',
    '${targetUser.name} is already a player in this battle.':
      "L'utente ${targetUser.name} è già un giocatore in questa lotta.",
    'Player 2': 'Giocatore 2',
    'Players could not be restored (maybe this battle already has two players?).':
      'Non è stato possibile ripristinare i giocatori (forse questa lotta ha già due giocatori?).',
    "This game doesn't support /joingame": 'Questo minigioco non supporta /joingame.',
    "This game doesn't support /leavegame": 'Questo minigioco non supporta /leavegame.',
    'You can only do this in unrated non-tour battles.':
      'Puoi farlo solamente in lotte senza punteggio al di fuori dei tornei.',
    'User ${targetUsername} not found.': 'Utente ${targetUsername} non trovato.',
    '${targetUser.name} was kicked from a battle by ${user.name} ${displayReason}':
      '${targetUser.name} è stato cacciato via dalla lotta da ${user.name} ${displayReason}',
    'You can only set the timer from inside a battle room.':
      ' Puoi impostare il timer solamente all’interno di una room di lotta.',
    "This game's timer is managed by a different command.":
      ' Il timer di questo minigioco deve essere impostato da un comando diverso.',
    'The game timer is OFF.': 'Il timer è OFF.',
    'The game timer is ON (requested by ${requester})': 'Il timer è ON (richiesto da ${requester})',
    'Access denied.': 'Accesso negato.',
    "Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.":
      'Il timer è stato disattivato dallo staff. Per favore, non riattivarlo fino a quando il nostro staff non è d’accordo.',
    'The timer is already off.': 'Il timer è già disattivato.',
    '"${target}" is not a recognized timer state.':
      '"${target}" non è un\'unità di tempo riconosciuta.',
    'Forcetimer is now OFF: The timer is now opt-in. (set by ${user.name})':
      'Il forcetimer è ora OFF: È possibile scegliere se attivarlo o meno. (impostato da ${user.name})',
    'Forcetimer is now ON: All battles will be timed. (set by ${user.name})':
      'Il forcetimer è ora ON: tutte le lotto saranno a tempo. (impostato da ${user.name})',
    "'${target}' is not a recognized forcetimer setting.":
      "'${target}' non è un’impostazione di forcetimer riconosciuta.",
    'This server requires you to be rank ${groupName} or higher to search for a battle.':
      'In questo server è necessario possedere il rank ${groupName} o superiore per cercare una lotta.',
    'Since you have reached ${Config.forceregisterelo} ELO in ${target}, you must register your account to continue playing that format on ladder.':
      'Poiché hai già raggiunto ${Config.forceregisterelo} ELO in ${target}, devi registrare il tuo account per continuare a giocare questo formato in ladder.',
    Register: 'Registrazione',
    "The user '${targetUsername}' was not found.": "Utente '${targetUsername}' non trovato.",
    'You are locked and cannot challenge unlocked users. If this user is your friend, ask them to challenge you instead.':
      'Sei lockato e non puoi sfidare utenti non lockati. Se questo utente è tuo amico, chiedigli di sfidarti.',
    'You are banned from battling and cannot challenge users.':
      'Sei stato bannato dal lottare e non puoi sfidare gli altri utenti.',
    'You must choose a username before you challenge someone.':
      'Devi scegliere un nome utente prima di sfidare qualcuno.',
    'This server requires you to be rank ${groupName} or higher to challenge users.':
      'In questo server è necessario possedere il rank ${groupName} o superiore per sfidare gli utenti.',
    'This command does not support specifying multiple users':
      'Questo comando non supporta un elenco di più utenti.',
    'User "${targetUsername}" not found.': 'Utente "${targetUsername}" non trovato.',
    'Provide a valid format.': 'Specifica un format valido.',
    'Please provide a valid format.': 'Per favore, specifica un format valido.',
    "The format '${originalFormat.name}' was not found.":
      "Il format '${originalFormat.name}' non è stato trovato.",
    'Your team is valid for ${format.name}.': 'Il tuo team è valido per il format ${format.name}.',
    'Your team was rejected for the following reasons:':
      'Il tuo team non è stato accettato per le seguenti ragioni:',
    'Battles are now hidden (except to staff) in your trainer card.':
      'Le lotte sono ora nascoste (tranne che per lo staff) sulla tua scheda allenatore.',
    'Battles are now visible in your trainer card.':
      'Le lotte sono ora visibili sulla tua scheda allenatore.',
    "'${command}' is a help command.": "'${command}' è un comando di aiuto.",
    "The command '/${target}' does not exist.": "Il comando '/${target}' non esiste.",
    "Could not find help for '/${target}'. Try /help for general help.":
      "Non è possibile ottenere informazioni sul comando '/${target}'; prova /help per informazioni generali.",
    "Could not find help for '/${target}' - displaying help for '/${closestHelp}' instead":
      "Non è possibile ottenere informazioni sul comando '/${target}' - ecco invece le informazioni per il comando '/${closestHelp}'.",
  },
};
