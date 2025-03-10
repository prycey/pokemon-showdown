import type { Translations } from '../../server/chat';

export const translations: Translations = {
  strings: {
    "Hello! The global staff team would be happy to help you, but you need to explain what's going on first.":
      'Ciao! Il team dello staff globale è felice di assisterti, ma prima devi spiegare che cosa sta succedendo.',
    'Please post the information I requested above so a global staff member can come to help.':
      'Per favore, inserisci tutte le informazioni che ti ho richiesto così che un membro dello staff globale possa venire ad assisterti.',
    'Thank you for the information, global staff will be here shortly. Please stay in the room.':
      "Grazie per le informazioni, lo staff globale sarà qui tra poco. Per favore, resta all'interno della room.",
    'You are banned from creating tickets': 'Sei bannato dal creare ticket',
    ', because you have the same IP as ${ticket.banned}.':
      ', perché hai lo stesso indirizzo IP di ${ticket.banned}.',
    'Request help from global staff': 'Richiedi assistenza allo staff globale',
    'Please <button name="login" class="button">Log In</button> to request help.':
      'Per favore, <button name="login" class="button">effettua il log in</button> per richiedere assistenza.',
    'Request Help': 'Richiedi Assistenza',
    'You already have a Help ticket.': 'Hai già aperto un ticket Help.',
    Back: 'Indietro',
    "What's going on?": 'Che cosa succede?',
    'Global staff cannot make Help requests. This form is only for reference.':
      'Lo staff globale non può creare ticket Help. Questo modulo è solo di riferimento.',
    'Abuse of Help requests can result in punishments.':
      'Un abuso di richieste di assistenza può essere punito.',
    'What do you want to report someone for?': 'Per quale motivo vuoi segnalare un utente?',
    "If someone is harassing you in private messages (PMs), click the button below and a global staff member will take a look. If you are being harassed in a chatroom, please ask a room staff member to handle it. If it's a minor issue, consider using <code>/ignore [username]</code> instead.":
      "Se qualcuno ti importuna nei messaggi privati (PM), clicca il tasto sottostante e un membro dello staff globale darà un'occhiata. Se vieni importunato in una chatroom, per favore chiedi a un membro dello staff della room di occuparsene. Se invece si tratta di una piccolezza, puoi scegliere di usare il comando <code>/ignore [username]</code>.",
    "If someone is harassing you in a battle, click the button below and a global staff member will take a look. If you are being harassed in a chatroom, please ask a room staff member to handle it. If it's a minor issue, consider using <code>/ignore [username]</code> instead.":
      "Se qualcuno ti importuna durante una lotta, clicca il tasto sottostante e un membro dello staff globale darà un'occhiata. Se vieni importunato in una chatroom, per favore chiedi a un membro dello staff della room di occuparsene. Se invece si tratta di una piccolezza, puoi scegliere di usare il comando <code>/ignore [username]</code>.",
    'Please save a replay of the battle if it has ended, or provide a link to the battle if it is still ongoing.':
      'Se la lotta è terminata, per favore salva il replay. Se invece la lotta è ancora attiva, fornisci il link.',
    'If a user has an inappropriate name, click the button below and a global staff member will take a look.':
      "Se un utente utilizza un nome inappropriato, clicca il tasto sottostante e un membro dello staff globale darà un'occhiata.",
    'If a user has inappropriate Pokemon nicknames, click the button below and a global staff member will take a look.':
      "Se un utente utilizza soprannomi inappropriati per i suoi Pokémon, clicca il tasto sottostante e un membro dello staff globale darà un'occhiata.",
    'What would you like to appeal?': 'A che cosa vorresti fare ricorso?',
    'Permalocks are usually for repeated incidents of poor behavior over an extended period of time, and rarely for a single severe infraction. Please keep this in mind when appealing a permalock.':
      'Il permalock viene utilizzato per ripetute violazioni delle regole o pessimo comportamento per un periodo di tempo prolungato. Tienilo bene a mente quando fai ricorso a un permalock.',
    'Please visit the <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeals</a> page to appeal your permalock.':
      'Per favore, visita perfavore la pagina dedicata agli <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Appelli Disciplinari</a> per fare ricorso al tuo permalock.',
    'If you want to appeal your lock or namelock, click the button below and a global staff member will be with you shortly.':
      'Se vuoi fare ricorso al tuo lock o namelock, clicca il tasto sottostante e un membro dello staff globale ti raggiungerà a breve.',
    "If you are locked or namelocked under a name you don't recognize, click the button below to call a global staff member so we can check.":
      'Se sei lockato o namelockato sotto il nome di un utente che non riconosci, clicca il tasto sottostante per contattare un membro dello staff globale, così che possiamo controllare.',
    'We automatically lock proxies and VPNs to prevent evasion of punishments and other attacks on our server. To get unlocked, you need to disable your proxy or VPN.':
      'I server proxy e i VPN sono automaticamente bloccati per evitare evasioni di punizioni e altri attacchi al nostro server. Per rimuovere il lock, devi disabilitare il tuo proxy o VPN.',
    'Do you have an autoconfirmed account? An account is autoconfirmed when it has won at least one rated battle and has been registered for one week or longer.':
      'Possiedi un account autoconfirmed? Un account è autoconfirmed quando ha vinto almeno una lotta a punti in ladder ed è stato registrato da almeno una settimana.',
    'Login to your autoconfirmed account by using the <code>/nick</code> command in any chatroom, and the semilock will automatically be removed. Afterwards, you can use the <code>/nick</code> command to switch back to your current username without being semilocked again.':
      'Effettua il login sul tuo account autoconfirmed utilizzando il comando <code>/nick</code> in qualsiasi chatroom per rimuovere il semilock. Dopodiché, puoi utilizzare nuovamente il comando <code>/nick</code> per ritornare sul tuo attuale username senza essere semilockato.',
    'If the semilock does not go away, you can try asking a global staff member for help. Click the button below to call a global staff member.':
      'Se il semilock non viene rimosso, puoi provare a chiedere aiuto a un membro dello staff globale. Clicca il tasto sottostante per chiamare un membro dello staff globale.',
    "If you don't have an autoconfirmed account, you will need to contact a global staff member to appeal your semilock. Click the button below to call a global staff member.":
      'Se non possiedi un account autoconfirmed, dovrai contattare un membro dello staff globale per fare ricorso al tuo semilock. Clicca il bottone sottostante per chiamare un membro dello staff globale.',
    "Please PM the staff member who punished you. If you don't know who punished you, ask another room staff member; they will redirect you to the correct user. If you are banned or blacklisted from the room, use <code>/roomauth [name of room]</code> to get a list of room staff members. Bold names are online.":
      "Per favore, manda un PM al membro dello staff che ti ha punito. Se non sai chi ti ha punito, chiedi a un altro membro dello staff nella room; ti indicherà l'utente corretto. Se sei bannato o nella blacklist di una room, utilizza il comando <code>/roomauth [nome della room]</code> per consultare la lista dei membri dello staff della room. I nomi in grassetto sono online.",
    'Do not PM staff if you are locked (signified by the symbol <code>‽</code> in front of your username). Locks are a different type of punishment; to appeal a lock, make a help ticket by clicking the Back button and then selecting the most relevant option.':
      'Non mandare messaggi privati allo staff se sei lockato (ossia se possiedi il simbolo <code>‽</code> di fronte al tuo nickname). I lock sono tipi di punizioni diversi; per fare ricorso al lock, apri un ticket Help cliccando il tasto "Back" e selezionando l\'opzione più opportuna.',
    'Maybe one of these options will be helpful?': 'Forse può aiutarti una di queste opzioni?',
    'If you lost your password, click the button below to request a password reset. We will need to clarify a few pieces of information before resetting the account. Please note that password resets are low priority and may take a while; we recommend using a new account while waiting.':
      "Se hai dimenticato la tua password, clicca il tasto sottostante per richiederne un ripristino. Avremo bisogno di alcune informazioni prima di ripristinarla. Ricorda che il ripristino delle password è un processo a bassa priorità e potrà richiedere più del dovuto; vi invitiamo a utilizzare un altro account durante l'attesa.",
    'Request a password reset': 'Richiedi un ripristino della password.',
    'If you are a room driver or up in a public room, and you need help watching the chat, one or more global staff members would be happy to assist you!':
      "Se possiedi il rank driver o superiore in una room pubblica e hai bisogno di aiuto per tenere d'occhio la chat, uno o più membri dello staff saranno lieti di aiutarti!",
    'If your issue is not handled above, click the button below to talk to a global staff member. Please be ready to explain the situation.':
      'Se il tuo problema non è stato risolto, clicca il tasto sottostante per parlare con un membro dello staff globale e spiegare la situazione.',
    'Malformed help request.': 'Richiesta di assistenza non valida.',
    'PM Harassment': 'Utente offensivo/molesto in PM',
    'Battle Harassment': 'Utente offensivo/molesto durante una lotta',
    'Inappropriate Username': 'Nome Utente Inappropriato',
    'Inappropriate Pokemon Nicknames': 'Soprannomi Pokémon Inappropriati',
    Appeal: 'Ricorso a Provvedimenti Disciplinari',
    'IP-Appeal': "Ricorso per l'IP",
    'ISP-Appeal': "Ricorso per l'ISP",
    'Public Room Assistance Request': 'Richiesta di Assistenza per una Room Pubblica',
    Other: 'Altro',
    'I want to report someone': 'Voglio segnalare un utente',
    'Someone is harassing me in PMs': 'Qualcuno mi sta offendendo/importunando in PM',
    'Someone is harassing me in a battle':
      'Qualcuno mi sta offendendo/importunando durante una lotta',
    'Someone is using an offensive username': 'Qualcuno sta usando un nome offensivo',
    'Someone is using offensive Pokemon nicknames':
      'Qualcuno sta usando soprannomi Pokémon offensivi',
    'I want to appeal a punishment': 'Voglio fare ricorso al mio provvedimento disciplinare',
    'I want to appeal my permalock': 'Voglio fare ricorso al mio permalock',
    'I want to appeal my lock': 'Voglio fare ricorso al mio lock',
    "I'm locked because I have the same IP as someone I don't recognize":
      'Sono lockato perché ho lo stesso IP di un utente che non riconosco',
    "I can't talk in chat because of my ISP": 'Non posso parlare in chat a causa del mio ISP',
    "I'm locked because of a proxy or VPN": 'Sono lockato a causa di un proxy o un VPN',
    'Yes, I have an autoconfirmed account': 'Sì, ho un account autoconfirmed',
    "No, I don't have an autoconfirmed account": 'No, non ho un account autoconfirmed',
    'I want to appeal a mute/roomban/blacklist': 'Voglio fare ricorso ad un mute/roomban/blacklist',
    'Something else': 'Altro',
    'I lost my password': 'Ho dimenticato la mia password',
    'I need global staff to help watch a public room':
      'Ho bisogno che un membro dello staff globale controlli una room pubblica',
    'Report harassment in a private message (PM)':
      'Segnala un utente offensivo/molesto nei messaggi privati (PM)',
    'Report harassment in a battle': 'Segnala un utente offensivo/molesto durante una lotta',
    'Report an inappropriate username': 'Segnala un nome utente inappropriato',
    'Report inappropriate Pokemon nicknames': 'Segnala soprannomi Pokémon inappropriati',
    'Appeal your lock': 'Fai ricorso al tuo lock',
    'Appeal IP lock': 'Fai ricorso al tuo lock per IP',
    'Appeal ISP lock': 'Fai ricorso al tuo lock per ISP',
    'Call a Global Staff member to help':
      'Chiama un membro dello Staff Globale per richiedere assistenza',
    'Call a Global Staff member': 'Chiama un membro dello Staff Globale',
    'Are you sure you want to submit a ticket for ${type}?':
      'Sei sicuro di voler aprire un ticket per ${type}?',
    'Yes, contact global staff': 'Sì, contatta lo staff globale',
    'No, cancel': 'No, cancella',
    'Help Ticket Stats': 'Statistische dei Ticket Help',
    'Help tickets': 'Ticket Help',
    Status: 'Stato',
    Creator: 'Creatore',
    'Ticket Type': 'Tipo di Ticket',
    Language: 'Lingua',
    'Claimed by': 'Preso in carico da',
    Action: 'Azione',
    'And ${keys.length - count} more tickets.': 'E ${keys.length - count} ulteriori ticket',
    'View all tickets': 'Visualizza tutti i ticket',
    Closed: 'Chiuso',
    Inactive: 'Inattivo',
    Claimed: 'Preso in carico',
    Unclaimed: 'Da prendere in carico',
    Claim: 'Prendi in carico',
    View: 'Visualizza',
    Log: 'Log',
    'Banned by': 'Bannato da',
    Username: 'Nome Utente',
    Expires: 'Termina',
    Logs: 'Log',
    'And ${banKeys.length - count} more ticket bans.':
      'E ${banKeys.length - count} ulteriori ticket ban',
    'Ticket List': 'Lista dei Ticket',
    Banned: 'Bannato',
    'Ticket Stats': 'Statistiche dei Ticket',
    'No ticket stats found.': 'Statistiche dei Ticket non trovate.',
    'Previous Month': 'Mese Precedente',
    'Staff Stats': 'Statistiche dello Staff',
    'Next Month': 'Mese Successivo',
    Resolved: 'Risolti',
    Unresolved: 'Non Risolti',
    Dead: 'Non Assistiti',
    Type: 'Tipo',
    'Total Tickets': 'Ticket Totali',
    'Average Total Time': 'Tempo Medio Totale',
    'Average Initial Wait': 'Tempo di Attesa Iniziale',
    'Average Total Wait': 'Tempo Totale di Attesa',
    Resolutions: 'Risoluzioni',
    'Positive Result': 'Risultati Positivi',
    'Staff ID': 'ID dello Staff',
    'Number of Tickets': 'Numero dei Ticket',
    'Average Time Per Ticket': 'Tempo Medio Per Ticket',
    'This command cannot be broadcast in battles.':
      'Questo comando non può essere mostrato durante una lotta.',
    'Report someone': 'Segnala qualcuno',
    'Appeal a punishment': 'Fai ricorso ad un provvedimento disciplinare',
    'Request help': 'Richiedi assistenza',
    "You need to choose a username before doing this. [TN: 'this' refers to opening a help ticket]":
      'Devi scegliere un nome utente prima di aprire un ticket',
    "Global staff can't make tickets. They can only use the form for reference.":
      'I membri dello staff globale non possono aprire un ticket. Possono utilizzare questo modulo solo per riferimento.',
    'You already have an open ticket; please wait for global staff to respond.':
      'Hai già un ticket aperto; per favore, aspetta che uno staff globale risponda.',
    'Due to high load, you are limited to creating ${maxTickets} tickets every hour.':
      "A causa dell'elevato traffico, ti è permesso creare soltanto ${maxTickets} ogni ora.",
    'Hi! Who was harassing you in private messages?':
      'Ciao! Chi sta insultando/importunando nei messaggi privati?',
    'Hi! Who was harassing you, and in which battle did it happen? Please post a link to the battle or a replay of the battle.':
      'Ciao! Chi ti sta insultando/importunando e in quale lotta è successo? Per favore, inserisci il link o il replay della lotta.',
    'Hi! Tell us the username that is inappropriate.':
      "Ciao! Qual è l'utente che ha un nome inappropriato?",
    'Hi! Which user has Pokemon with inappropriate nicknames, and in which battle? Please post a link to the battle or a replay of the battle.':
      'Ciao! Quale utente utilizza Pokémon con soprannomi inappropriati? E in quale lotta? Per favore, inserisci il link o il replay della lotta.',
    'Hi! Can you please explain why you feel your punishment is undeserved?':
      'Ciao! Puoi per favore spiegare per quale motivo ritieni che la tua punizione non sia giusta?',
    'Hi! How are you connecting to Showdown right now? At home, at school, on a phone using mobile data, or some other way?':
      'Ciao! In che modo sei connesso a Showdown in questo momento? Sei a casa, scuola, stai usando i dati mobili del tuo cellulare, o in qualche altro modo?',
    'Hi! Which room(s) do you need us to help you watch?':
      'Ciao! Quale room hai bisogno che guardiamo?',
    'Hi! What seems to be the problem? Tell us about any people involved,\n and if this happened in a specific place on the site.':
      'Ciao! Qual è il problema? Spiegaci chi riguarda e dove è successo.',
    'Hi! Please click the button below to give global staff permission to check PMs.':
      'Ciao! Per favore, clicca sul tasto sottostante per dare allo staff globale il permesso di controllare i PM.',
    ' Or if ${reportTarget} is not the user you want to report, please tell us the name of the user who you want to report.':
      "Oppure, se ${reportTarget} non è l'utente che vuoi segnalare, per favore dicci il nome dell'utente che vuoi segnalare.",
    'Help Ticket': 'Ticket Help',
    Issue: 'Problema',
    'A Global Staff member will be with you shortly.':
      'Un membro dello Staff Globale ti assisterà a breve.',
    '${inputUsername} does not have an open ticket.': '${inputUsername} non ha un ticket aperto.',
    "You closed ${ticket.creator}'s ticket.": 'Hai chiuso il ticket di ${ticket.creator}',
    'The reason is too long. It cannot exceed 300 characters.':
      'La ragione è troppo lunga. Non può superare i 300 caratteri.',
    "User '${targetUsername}' not found.": "Utente '${targetUsername}' non trovato.",
    '${targetUser ? targetUser.name : target} is not ticket banned.':
      "${targetUser ? targetUser.name : target} non è bannato dall'aprire ticket.",
    "${targetUser ? targetUser.name : target}'s ticket ban is already expired.":
      'Il ticketban di ${targetUser ? targetUser.name : target} è già terminato.',
    'You are already ignoring help ticket notifications. Use /helpticket unignore to receive notifications again.':
      'Stai già ignorando le notifiche dei ticket help. Usa /helpticket unignore per ricevere nuovamente le notifiche.',
    'You are now ignoring help ticket notifications.':
      'Stai ora ignorando le notifiche dei ticket help.',
    'You are not ignoring help ticket notifications. Use /helpticket ignore to stop receiving notifications.':
      'Non stai ignorando le notifiche dei ticket help. Usa /helpticket ignore per non ricevere più le notifiche.',
    'You will now receive help ticket notifications.':
      'Non riceverai più alcuna notifica dei ticket help.',
    '${target} does not have a ticket.': '${target} non ha un ticket.',
    "You deleted ${target}'s ticket.": 'Hai eliminato il ticket di ${target}.',

    'Hi! All global staff members are busy right now and we apologize for the delay. ':
      'Ciao! Tutti i membri dello staff globale sono occupati al momento e ci scusiamo per il ritardo. ',
    "Please make sure you have given us the permission to check the PMs between you and the user you reported. You can also provide any relevant context; for example, a replay of a battle with the person you're reporting.":
      "Per favore assicurati di averci dato il permesso di controllare i PM tra te e l'utente che hai segnalato. Puoi anche fornire informazioni aggiuntive rilevanti; ad esempio, il replay di una lotta con la persona segnalata.",
    'Please save the replay of the battle and provide a link to it in this chat, so we can see the harassment even if the battle expires. You can save the replay by clicking on the "Upload and share replay" button once the battle has ended.':
      'Per favore salva il replay della lotta e fornisci il link in questa chat per permetterci di vedere il comportamento inappropriato, anche se la lotta è terminata. Puoi salvare il replay cliccando il tasto "Upload and share replay" una volta terminata la lotta.',
    'Make sure you have provided the correct username, and if its meaning or why it is offensive is not obvious, please explain why it should not be allowed.':
      'Assicurati di aver fornito il nome utente corretto, e se il suo significato o il motivo per cui risulta offensivo non sono evidenti, per favore spiega perché non dovrebbe essere permesso.',
    'Please save the replay of the battle and provide a link to it in this chat, so we can see the nicknames even if the battle expires. You can save the replay by clicking on the "Upload and share replay" button once the battle has ended.':
      'Per favore salva il replay della lotta e fornisci il link in questa chat, per permetterci di vedere i nickname anche se la lotta si conclude. Puoi salvare il replay cliccando il tasto "Upload and share replay" una volta terminata la lotta.',
    'Please clearly explain why you should be unlocked and we will review it as soon as possible.':
      'Per favore spiega in modo chiaro perché dovresti essere unlockato e lo esamineremo il prima possibile.',
    'Please give us all relevant information on how you are connecting to Pokémon Showdown (if it is through mobile data, at home, a school or work network, etc), and we will review your case as soon as possible.':
      'Per favore fornisci tutte le informazioni inerenti a come ti connetti a Pokémon Showdown (se è tramite dati mobili, da casa, scuola o rete di lavoro, etc), ed esamineremo il tuo caso il prima possibile.',
    'Please tell us which room you need assistance with and a global staff member will join your room as soon as possible.':
      "Per favore comunicaci per quale room hai bisogno d'aiuto e un membro dello staff globale entrerà nella tua room il prima possibile.",
    'If your issue pertains to battle mechanics or is a question about Pokémon Showdown, you can ask in the <<help>> chatroom.':
      'Se il tuo problema riguarda meccaniche di lotta oppure è una domanda su Pokémon Showdown, puoi chiedere nella room <<help>>.',
  },
};
