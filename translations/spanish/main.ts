import type { Translations } from '../../server/chat';

export const translations: Translations = {
  name: 'Spanish',
  strings: {
    namelocked: 'namelocked',
    locked: 'locked',

    autoconfirmed: 'autoconfirmado',
    trusted: 'de confianza',

    'Please follow the rules:': 'Por favor sigue las reglas:',
    '[TN: Link to the PS rules for your language (path after pokemonshowdown.com]/rules':
      '/pages/rules-es',
    'Global Rules': 'Reglas Globales',
    '${room} room rules': 'Reglas de la sala ${room}',

    '<strong>Global ranks</strong>': '<strong>Rangos Globales</strong>',
    '+ <strong>Global Voice</strong> - They can use ! commands like !groups':
      '+ <strong>Global Voice</strong> - Pueden utilizar comandos con ! como !groups',
    '% <strong>Global Driver</strong> - Like Voice, and they can lock users and check for alts':
      '% <strong>Global Driver</strong> - Como los Voice, y también pueden dar locks y revisar las alts',
    '@ <strong>Global Moderator</strong> - The above, and they can globally ban users':
      '@ <strong>Global Moderator</strong> - Lo mismo que arriba y además pueden expulsar globalmente del servidor',
    '* <strong>Global Bot</strong> - Like Moderator, but makes it clear that this user is a bot':
      '* <strong>Global Bot</strong> - Igual que un moderador, pero el símbolo identifica que es un Bot',
    '~ <strong>Global Administrator</strong> - They can do anything, like change what this message says and promote users globally':
      '~ <strong>Global Administrator</strong> - Pueden hacer cualquier cosa, como cambiar lo que dice este mensaje',

    '<strong>Room ranks</strong>': '<strong>Rangos de Sala</strong>',
    "^ <strong>Prize Winner</strong> - They don't have any powers beyond a symbol.":
      '^ <strong>Prize Winner</strong> - No tienen ningún poder más allá del símbolo.',
    '+ <strong>Voice</strong> - They can use ! commands like !groups':
      '+ <strong>Voice</strong> - Pueden utilizar comandos con ! como !groups',
    '% <strong>Driver</strong> - The above, and they can mute and warn':
      '% <strong>Driver</strong> - Lo mismo que arriba y además pueden sancionar dando advertencias o silenciando',
    '@ <strong>Moderator</strong> - The above, and they can room ban users':
      '@ <strong>Moderator</strong> - Lo mismo que arriba y además pueden expulsar a usuarios de la sala',
    '* <strong>Bot</strong> - Like Moderator, but makes it clear that this user is a bot':
      '* <strong>Bot</strong> - Igual que un moderador, pero el símbolo identifica que es un Bot',
    '# <strong>Room Owner</strong> - They are leaders of the room and can almost totally control it':
      '# <strong>Room Owner</strong> - Líderes de la sala y tienen casi todo el control de lo que sucede en esta',

    '/help OR /h OR /? - Gives you help.': '/help O /h O /? - Te ofrece ayuda.',
    'For an overview of room commands, use /roomhelp':
      'Para un resumen de los comandos de la sala, usa /roomhelp',
    'For details of a specific command, use something like: /help data':
      'Para detalles de un comando específico, usa algo como: /help data',

    COMMANDS: 'COMANDOS',
    'BATTLE ROOM COMMANDS': 'COMANDOS PARA CHATS DE BATALLA',
    'OPTION COMMANDS': 'COMANDOS DE OPCIÓN',
    'INFORMATIONAL/RESOURCE COMMANDS': 'COMANDOS INFORMATIVOS Y/O DE RECURSOS',
    'DATA COMMANDS': 'COMANDOS DE DATOS',
    'DRIVER COMMANDS': 'COMANDOS DE DRIVER',
    'MODERATOR COMMANDS': 'COMANDOS DE MODERATOR',
    'ADMIN COMMANDS': 'COMANDOS DE ADMINISTRATOR',

    '(replace / with ! to broadcast. Broadcasting requires: + % @ # ~)':
      '(sustituye / con ! para hacer público un comando. Esto requiere: + % @ # ~)',

    '<strong>Room punishments</strong>:': '<strong>Sanciones de la sala</strong>:',
    '<strong>warn</strong> - Displays a popup with the rules.':
      '<strong>warn</strong> - Muestra una ventana de di&aacute;logo con las reglas.',
    '<strong>mute</strong> - Mutes a user (makes them unable to talk) for 7 minutes.':
      '<strong>mute</strong> - Silencia a un usuario (les impide hablar) por 7 minutos.',
    '<strong>hourmute</strong> - Mutes a user for 60 minutes.':
      '<strong>hourmute</strong> - Silencia a un usuario por 60 minutos.',
    '<strong>ban</strong> - Bans a user (makes them unable to join the room) for 2 days.':
      '<strong>ban</strong> - Expulsa a un usuario (les impide entrar a la sala) por 2 d&iacute;as.',
    '<strong>weekban</strong> - Bans a user from the room for a week.':
      '<strong>weekban</strong> - Expulsa a un usuario por una semana.',
    '<strong>blacklist</strong> - Bans a user for a year.':
      '<strong>blacklist</strong> - Expulsa a un usuario de la sala por un a&ntilde;o.',

    '<strong>Global punishments</strong>:': '<strong>Sanciones globales</strong>:',
    '<strong>lock</strong> - Locks a user (makes them unable to talk in any rooms or PM non-staff) for 2 days.':
      '<strong>lock</strong> - Bloquea a un usuario (impide que hable en cualquier sala o env&iacute;e mensajes privados a quienes no sean staff) por 2 d&iacute;as.',
    '<strong>weeklock</strong> - Locks a user for a week.':
      '<strong>weeklock</strong> - Bloquea a un usuario por una semana.',
    '<strong>namelock</strong> - Locks a user and prevents them from having a username for 2 days.':
      '<strong>namelock</strong> - Bloquea a un usuario y le impide tener un nombre de usuario por 2 d&iacute;as.',
    '<strong>globalban</strong> - Globally bans (makes them unable to connect and play games) for a week.':
      '<strong>globalban</strong> - Expulsa globalmente a un usuario (le impide conectarse al servidor y poder jugar) por una semana.',

    '<strong>Indefinite global punishments</strong>:':
      '<strong>Sanciones globales de duración indeterminada</strong>:',
    '<strong>permalock</strong> - Issued for repeated instances of bad behavior and is rarely the result of a single action. ':
      '<strong>permalock</strong> - Aplicado ante múltiples instancias de mal comportamiento, rara vez por una sola acción. ',
    'These can be appealed in the <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeal</a>':
      'Puede apelarse en el <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">foro de apelaciones disciplinarias</a>',
    ' forum after at least 3 months without incident.':
      ' después de mínimo 3 meses sin incidentes.',
    '<strong>permaban</strong> - Unappealable global ban typically issued for the most severe cases of offensive/inappropriate behavior.':
      '<strong>permaban</strong> - Expulsión global inapelable, generalmente aplicada por ofensas extremadamente graves o inapropiadas.',

    '<strong>Room drivers (%)</strong> can use:':
      '<strong>Los drivers de la sala (%)</strong> pueden usar:',
    '- /warn OR /k <em>username</em>: warn a user and show the Pok&eacute;mon Showdown rules':
      '- /warn O /k <em>nombre de usuario</em>: advierte a un usuario y les muestra las reglas de Pok&eacute;mon Showdown',
    '- /mute OR /m <em>username</em>: 7 minute mute':
      '- /mute O /m <em>nombre de usuario</em>: silencia por 7 minutos',
    '- /hourmute OR /hm <em>username</em>: 60 minute mute':
      '- /hourmute O /hm <em>nombre de usuario</em>: silencia por 60 minutos',
    '- /unmute <em>username</em>: unmute':
      '- /unmute <em>nombre de usuario</em>: deshabilita el mute',
    "- /hidetext <em>username</em>: hide a user's messages from the room":
      '- /hidetext <em>nombre de usuario</em>: oculta los mensajes de un usuario en la sala',
    '- /announce OR /wall <em>message</em>: make an announcement':
      '- /announce O /wall <em>mensaje</em>: hace un anuncio',
    '- /modlog <em>username</em>: search the moderator log of the room':
      '- /modlog <em>nombre de usuario</em>: consulta el historial de moderaci&oacute;n del usuario en la sala',
    '- /modnote <em>note</em>: add a moderator note that can be read through modlog':
      '- /modnote <em>nota</em>: a&ntilde;ade una nota de moderaci&oacute;n que puede ser le&iacute;da a trav&eacute;s del modlog',

    '<strong>Room moderators (@)</strong> can also use:':
      '<strong>Los moderadores de sala (@)</strong> tambi&eacute;n pueden usar:',
    '- /roomban OR /rb <em>username</em>: ban user from the room':
      '- /roomban O /rb <em>nombre de usuario</em>: expulsa al usuario de la sala',
    '- /roomunban <em>username</em>: unban user from the room':
      '- /roomunban <em>nombre de usuario</em>: admite nuevamente al usuario expulsado de la sala',
    '- /roomvoice <em>username</em>: appoint a room voice':
      '- /roomvoice <em>nombre de usuario</em>: designa a un room voice',
    '- /roomdevoice <em>username</em>: remove a room voice':
      '- /roomdevoice <em>nombre de usuario</em>: retira a un room voice',
    '- /staffintro <em>intro</em>: set the staff introduction that will be displayed for all staff joining the room':
      '- /staffintro <em>intro</em>: establece la introducci&oacute;n del staff que se mostrar&aacute; a todo el staff que entre a la sala.',
    '- /roomsettings: change a variety of room settings, namely modchat':
      '- /roomsettings: realiza una variedad de ajustes en la sala, com&uacute;nmente modchat.',

    '<strong>Room owners (#)</strong> can also use:':
      '<strong>Room owners (#)</strong> tambi&eacute;n pueden usar:',
    '- /roomintro <em>intro</em>: set the room introduction that will be displayed for all users joining the room':
      '- /roomintro <em>intro</em>: establece la introducci&oacute;n a la sala que ser&aacute; mostrada para todos los usuarios que ingresen a esta',
    '- /rules <em>rules link</em>: set the room rules link seen when using /rules':
      '- /rules <em>enlace de las reglas</em>: establece el enlace de las reglas de la sala que se muestran al usar /rules',
    '- /roommod, /roomdriver <em>username</em>: appoint a room moderator/driver':
      '- /roommod, /roomdriver <em>nombre de usuario</em>: designa a un moderador/driver de sala',
    '- /roomdemod, /roomdedriver <em>username</em>: remove a room moderator/driver':
      '- /roomdemod, /roomdedriver <em>nombre de usuario</em>: retira a un moderador/driver de sala',
    '- /roomdeauth <em>username</em>: remove all room auth from a user':
      '- /roomdeauth <em>nombre de usuario</em>: retira todo el auth de sala de un usuario',
    '- /declare <em>message</em>: make a large blue declaration to the room':
      '- /declare <em>mensaje</em>: crea una declaraci&oacute;n grande en azul en la sala',
    '- !htmlbox <em>HTML code</em>: broadcast a box of HTML code to the room':
      '- !htmlbox <em>c&oacute;digo HTML</em>: publica una caja de c&oacute;digo HTML en la sala',
    '- !showimage <em>[url], [width], [height]</em>: show an image to the room':
      '- !showimage <em>[url], [anchura], [altura]</em>: muestra una imagen en la sala',
    '- /roomsettings: change a variety of room settings, including modchat, capsfilter, etc':
      '- /roomsettings: realiza una variedad de ajustes de la sala, incluyendo modchat, filtro de may&uacute;sculas, etc',

    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6774654/">roomauth guide</a>':
      'Una ayuda m&aacute;s detallada puede encontrarse en la <a href="https://www.smogon.com/forums/posts/6774654/">gu&iacute;a de roomauth</a>',

    'Tournament Help:': 'Asistencia de Torneos:',
    '- /tour create <em>format</em>, elimination: create a new single elimination tournament in the current room.':
      '- /tour create <em>formato</em>, elimination: crea un nuevo torneo de eliminaci&oacute;n directa en la sala actual.',
    '- /tour create <em>format</em>, roundrobin: create a new round robin tournament in the current room.':
      '- /tour create <em>formato</em>, roundrobin: crea un nuevo torneo de round robin en la sala actual.',
    '- /tour end: forcibly end the tournament in the current room':
      '- /tour end: termina el torneo forzosamente en la sala actual',
    '- /tour start: start the tournament in the current room':
      '- /tour start: comienza el torneo en la sala actual',
    '- /tour banlist [pokemon], [talent], [...]: ban moves, abilities, Pokémon or items from being used in a tournament (it must be created first)':
      '- /tour banlist [pokemon], [talent], [...]: prohibe movimientos, habilidades, Pok&eacute;mon o el uso de objetos en un torneo (debe ser creado primero)',

    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6777489/">tournaments guide</a>':
      'Una ayuda m&aacute;s detallada puede encontrarse en la <a href="https://www.smogon.com/forums/posts/6777489/">gu&iacute;a de torneos</a>',

    'Your status cannot be updated while you are locked or semilocked.':
      'Tu estado no puede ser actualizado mientras estás locked (bloqueado) o semilocked (semibloqueado).',
    'Your status is too long; it must be under ${maxLength} characters.':
      'Tu estado es muy largo; debe ser menor de ${maxLength} caracteres.',
    'Your status contains a banned word.': 'Tu estado contiene una palabra prohibida.',
    'Your status has been set to: ${target}.': 'Tu estado ha sido cambiado a: ${target}.',
    'You are now marked as busy.': 'Ahora estás marcado como busy (ocupado).',
    'You are now marked as away. Send a message or use /back to indicate you are back.':
      'Ahora estás marcado como away (ausente). Envía un mensaje o usa /back para indicar que has vuelto.',
    'You are already marked as back.': 'Ya estás marcado como de vuelta (back).',
    'You are no longer marked as busy.': 'Ya no estás marcado como busy (ocupado).',

    'You must choose a name before you can talk.':
      'Tienes que escoger un nombre antes de poder hablar.',
    "You are ${lockType} and can't talk in chat. ${lockExpiration}":
      'Has sido ${lockType} y no podrás hablar en el chat. ${lockExpiration}',
    'Get help with [TN: your lock]this': 'Consigue ayuda con aquí.',
    'You are muted and cannot talk in this room.':
      'Has sido silenciado y no puedes hablar en esta sala.',
    'Because moderated chat is set, your account must be at least one week old and you must have won at least one ladder game to speak in this room.':
      'Como el chat moderado está activado, tu cuenta debe estar registrada por una semana y tienes que haber ganado un mínimo de una partida',
    'Because moderated chat is set, your account must be staff in a public room or have a global rank to speak in this room.':
      'Como el chat moderado está activado, tu cuenta debe ser staff en una sala pública o debe tener rango global para hablar en esta sala.',
    'Because moderated chat is set, you must be of rank ${groupName} or higher to speak in this room.':
      'Como el chat moderado está activado, tienes que ser del rango ${groupName} o superior para hablar en esta sala.',
    "Your message can't be blank.": 'Tu mensaje no puede estar en blanco.',
    'Your message is too long: ': 'Tu mensaje es demasiado largo.',
    'Your message contains banned characters.': 'Tu mensaje contiene carácteres prohíbidos.',
    'This room has slow-chat enabled. You can only talk once every ${time} seconds.':
      'Esta sala tiene el slow-chat activado. Solo puedes hablar cada ${time} segundos.',
    'Your username contains a phrase banned by this room.':
      'Tu nombre de usuario contiene una frase prohíbida en esta sala.',
    'Your status message contains a phrase banned by this room.':
      'Tu status contiene una frase prohíbida en esta sala.',

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
      'Tu mensaje contiene palabras prohíbidas en esta sala.',
    "You can't send the same message again so soon.":
      'No puedes mandar el mismo mensaje tan pronto.',
    'Due to this room being a high traffic room, your message must contain at least two letters.':
      'Debido a que esta sala es de mucho tráfico de mensajes, tu mensaje tiene que contener al menos dos letras.',

    'You are already blocking private messages! To unblock, use /unblockpms':
      '¡Ya estás bloqueando mensajes privados! Para desbloquearlos usa /unblockpms',
    'You are now blocking private messages, except from staff and ${rank}.':
      'Ahora estás bloqueando mensajes privados, con excepción del staff y ${rank}.',
    'You are now blocking private messages, except from staff and ${status} users.':
      'Ahora estás bloqueando mensajes privados, con excepción del staff y usuarios ${status}.',
    'You are now blocking private messages, except from staff.':
      'Ahora estás bloqueando mensajes privados, con excepción del staff.',
    'You are not blocking private messages! To block, use /blockpms':
      '¡No estás bloqueando mensajes privados! Para bloquearlos usa /blockpms',
    'You are no longer blocking private messages.': 'Ya no estás bloqueando mensajes privados.',
    'You are now blocking all incoming challenge requests.':
      'Ahora estás bloqueando todas las solicitudes de batalla entrantes',
    'You are already blocking challenges!': '¡Ya estás bloqueando solicitudes de batalla!',
    'You are already available for challenges!':
      '¡Ya estás disponible para recibir solicitudes de batalla!',
    'You are available for challenges from now on.':
      'Estás disponible para recibir solicitudes de batalla de ahora en adelante.',
    'You are now blocking challenges, except from staff and ${rank}.': '',
    'You are now blocking challenges, except from staff and ${status} users.': '',

    'Staff FAQ': 'FAQ del Staff',
    'You cannot broadcast all FAQs at once.': 'No puedes mostrar todos los FAQs a la vez.',
    'A user is autoconfirmed when they have won at least one rated battle and have been registered for one week or longer. In order to prevent spamming and trolling, most chatrooms only allow autoconfirmed users to chat. If you are not autoconfirmed, you can politely PM a staff member (staff have %, @, or # in front of their username) in the room you would like to chat and ask them to disable modchat. However, staff are not obligated to disable modchat.':
      'Un usuario es autoconfirmed cuando ha ganado al menos una batalla puntuada y ha estado registrado durante una semana o más. Con la finalidad de evitar spam o trolls, la mayoría de las salas de chat únicamente admiten usuarios autoconfirmed para conversar. Si tú no eres un usuario autoconfirmed, puedes solicitar amablemente por MP a un miembro del staff (los miembros del staff tienen %, @, o # al inicio de su nombre de usuario) de la sala en la que quieres conversar que deshabilite el modchat. Sin embargo, el staff no está obligado a deshabilitar el modchat.',
    'How the ladder works': 'Como funciona la ladder',
    'Tiering FAQ': 'FAQ de Tiers',
    'Badge FAQ': 'FAQ de Badges',
    'Common misconceptions about our RNG': 'Conceptos erróneos comunes sobre nuestra RNG',
    "To join a room tournament, click the <strong>Join!</strong> button or type the command <code>/tour join</code> in the room's chat. You can check if your team is legal for the tournament by clicking the <strong>Validate</strong> button once you've joined and selected a team. To battle your opponent in the tournament, click the <strong>Ready!</strong> button when it appears. There are two different types of room tournaments: elimination (if a user loses more than a certain number of times, they are eliminated) and round robin (all users play against each other, and the user with the most wins is the winner).":
      'Para unirte a un torneo, haz click en el botón <strong>Join!</strong> o escribe el comando <code>/tour join</code> en el chat de la sala. Puedes revisar si tu equipo es legal para el torneo al hacer click en el botón <strong>Validate</strong> una vez te hayas unido y seleccionado un equipo. Para jugar contra tu oponente en el torneo, haz click en el botón <strong>Ready!</strong> cuando aparezca. Hay dos tipos diferentes de torneos de sala: elimination (si un usuario pierde más de cierto número de veces, es eliminado) y round robin (todos los usuarios juegan contra todos, y el usuario con más victorias es el ganador).',
    'Frequently Asked Questions': 'Preguntas Frecuentes',

    'pages/faq': 'pages/faq-es',
    'pages/ladderhelp': 'pages/ladderhelp',
    'pages/rng': 'pages/rng',
    'pages/staff': 'pages/staff-es',

    "- We log PMs so you can report them - staff can't look at them without permission unless there's a law enforcement reason.":
      '',
    '- We log IPs to enforce bans and mutes.': '',
    '- We use cookies to save your login info and teams, and for Google Analytics and AdSense.': '',
    '- For more information, you can read our <a href="https://${Config.routes.root}/privacy">full privacy policy.</a>':
      '- For more information, you can read our <a href="https://${Config.routes.root}/pages/privacy-es">full privacy policy.</a>',
  },
};
