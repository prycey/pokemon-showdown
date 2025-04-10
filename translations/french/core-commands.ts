import type { Translations } from '../../server/chat';

export const translations: Translations = {
  strings: {
    'Server version: <b>${version}</b>': 'Version du serveur : <b>${version}</b>',
    '/mee - must not start with a letter or number':
      '/mee - ne doit pas commencer avec une lettre ou un nombre',
    "What?! How are you not more excited to battle?! Try /battle! to show me you're ready.":
      'Quoi ? Comment ça se fait que tu ne sois pas plus content que ça de combattre ? Essaie /battle! pour me montrer que tu es prêt !',
    "Access denied for custom avatar - make sure you're on the right account?":
      "Accès refusé pour l'avatar personnalisé - es-tu sûr d'être sur le bon compte ?",
    'Invalid avatar.': 'Avatar invalide.',
    'Avatar changed to:': 'Avatar changé pour :',
    'Artist: ': 'Artiste : ',
    'No one has PMed you yet.': "Personne ne t'a encore envoyé de MP.",
    'You forgot the comma.': 'Tu as oublié la virgule.',
    'User ${targetUsername} not found. Did you misspell their name?':
      "Aucun ${targetUsername} n'a été trouvé. As-tu bien écrit son pseudo ?",
    'User ${targetUsername} is offline.': '${targetUsername} est hors-ligne.',
    'The user "${targetUsername}" was not found.':
      'L\'utilisateur "${targetUsername}" n\'a pas été trouvé.',
    'The room "${target}" was not found.': 'La room "${target}" n\'a pas été trouvée.',
    'You do not have permission to invite people into this room.':
      "Tu n'as pas la permission d'inviter des gens dans cette room.",
    'This user is already in "${targetRoom.title}".':
      'Cet utilisateur est déjà sur "${targetRoom.title}"',
    'Setting status messages in /busy is no longer supported. Set a status using /status.':
      "Écrire un statut avec /busy n'est plus possible. Pour le faire, utilise /status.",
    'Setting status messages in /away is no longer supported. Set a status using /status.':
      "Écrire un statut avec /away n'est plus possible. Pour le faire, utilise /status.",
    "User '${target}' not found.": "L'utilisateur ${target}' n'a pas été trouvé.",
    '${targetUser.name} does not have a status set.':
      "${targetUser.name} n'a pas de statut actuellement",
    '${targetUser.name}\'s status "${targetUser.userMessage}" was cleared by ${user.name}${displayReason}':
      'Le statut de ${targetUser.name}, "${targetUser.userMessage}", a été effacé par ${user.name}${displayReason}',
    "You don't have a status message set.": "Tu n'as pas encore de message de statut.",
    'You have cleared your status message.': 'Tu as effacé ton message de statut.',
    'This user has not played any ladder games yet.':
      "Cet utilisateur n'a pas encore fait de combat de ladder.",
    'W[TN: initial for Wins]': 'V',
    'L[TN: initial for Losses]': 'D',
    "You already have the temporary symbol '${group}'.":
      "Tu as déjà temporairement le symbole '${group}'.",
    'You must specify a valid group symbol.': 'Tu dois préciser un symbole de groupe valide.',
    'You may only set a temporary symbol below your current rank.':
      "Tu ne peux t'attribuer un symbole temporaire que en-dessous de ton rang actuel.",
    'Your temporary group symbol is now': 'Ton symbole de groupe temporaire est maintenant',
    "Currently, you're viewing Pokémon Showdown in ${language}.":
      'Actuellement, tu vois Pokémon Showdown en ${language}.',
    'Valid languages are: ${languages}': 'Les langues disponibles sont : ${languages}',
    'Pokémon Showdown will now be displayed in ${language} (except in language rooms).':
      'Pokémon Showdown sera maintenant affiché en ${language} (hors chatrooms dédiées à une langue en particulier).',
    'Note that rooms can set their own language, which will override this setting.':
      "Note que les rooms peuvent choisir la langue dans laquelle elles s'affichent, ce qui aura priorité sur ce changement.",
    '/updatesettings expects JSON encoded object.':
      '/updatesettings demande un objet codé en JSON.',
    'Unable to parse settings in /updatesettings!':
      "Incapable d'analyser les paramètres dans /updatesettings!",
    'Must be in a battle.': 'Doit être utilisé dans un combat.',
    'User ${target} not found.': "L'utilisateur ${target} n'a pas été trouvé.",
    'Must be a player in this battle.': 'Doit être un joueur dans ce match',
    '${targetUser.name} has not requested extraction.':
      "${targetUser.name} n'a pas demandé l'extraction des logs.",
    'You have already consented to extraction with ${targetUser.name}.':
      "Tu as déjà approuvé l'extraction des logs avec ${targetUser.name}.",
    '${user.name} consents to sharing battle team and choices with ${targetUser.name}.':
      "${user.name} est d'accord pour partager son équipe dans le match et ses choix en jeu avec ${targetUser.name}.",
    'No input log found.': 'Aucun log de trouvé.',
    '${targetUser.name} has extracted the battle input log.':
      '${targetUser.name} a extrait le log du combat.',
    'This command only works in battle rooms.': 'Cette commande marche seulement en combat.',
    'This command only works when the battle has ended - if the battle has stalled, use /offertie.':
      'Cette commande marche seulement quand le combat est fini.',
    'Alternatively, you can end the battle with /forcetie.':
      'Alternativement, tu peux finir le combat avec /forcetie.',
    '${user.name} has extracted the battle input log.': '${user.name} a extrait le log du combat.',
    'You already extracted the battle input log.': 'Tu as déjà extrait le log du combat.',
    'Battle input log re-requested.': 'Le log du combat a été demandé de nouveau.',
    'Invalid input log.': 'Log invalide.',
    'Your input log contains untrusted code - you must have console access to use it.':
      "Ton log contient du code non sécurisé - tu dois avoir accès à la console du système pour l'utiliser.",
    'This command can only be used in a battle.':
      'Cette commande peut seulement être utilisée en match.',
    'Only players can extract their team.': 'Seuls les jouerus peuvent extraire leurs équipes.',
    'Use a number between 1-6 to view a specific set.':
      'Utilise un chiffre entre 1 et 6 pour voir un set spécifique.',
    'The Pokemon "${target}" is not in your team.':
      'Le Pokémon "${target}" n\'est pas dans ton équipe.',
    'That Pokemon is not in your team.': "Ce Pokémon n'est pas dans ton équipe.",
    'View team': "Voir l'équipe.",
    'Must be in a battle room.': 'Doit être en combat.',
    'This server does not allow offering ties.':
      'Ce serveur ne permet pas les propositions de matchs nuls.',
    "You can't offer ties in tournaments.": 'Tu ne peux pas proposer un match nul en tournoi.',
    "It's too early to tie, please play until turn 100.":
      "C'est trop tôt pour proposer un match nul, merci de jouer jusqu'au tour 100.",
    'No other player is requesting a tie right now. It was probably canceled.':
      'Aucun joueur ne demande un match nul. La demande a probablement été annulée.',
    '${user.name} is offering a tie.': '${user.name} propose un match nul.',
    'Accept tie': 'Accepter le match nul.',
    Reject: 'Rejeter.',
    'Must be a player to accept ties.': 'Tu dois être un des joueurs pour accepter le match nul.',
    'You have already agreed to a tie.': 'Tu as déjà accepté le match nul.',
    '${user.name} accepted the tie.': '${user.name} a accepté le match nul.',
    'All players have accepted the tie.': 'Tous les joueurs ont accepté le match nul.',
    'Must be a player to reject ties.': 'Tu dois être un des joueurs pour refuser le match nul.',
    '${user.name} rejected the tie.': '${user.name} a refusé le match nul.',
    "This room doesn't have an active game.": "La room n'a pas de jeu actif.",
    "This kind of game can't be forfeited.":
      "Il n'est pas possible d'abandonner dans ce genre de jeu.",
    "This game doesn't support /choose": "Ce jeu n'accepte pas /choose.",
    "This game doesn't support /undo": "Ce jeu n'accepte pas /undo.",
    'You can only save replays for battles.':
      'Tu peux seulement sauvegarder les replays des combats.',
    "This battle can't have hidden replays, because the tournament is set to be forced public.":
      'Ce combat ne peut pas sauvegarder de replay caché, car le tournoi est paramétré pour être public.',
    'The replay for this battle is already set to hidden.':
      'Le replay de ce combat est déjà paramétré comme caché.',
    '${user.name} hid the replay of this battle.': '${user.name} a caché le replay de ce combat.',
    'You can only do this in battle rooms.': 'Tu peux seulement faire ça dans les combats.',
    'You can only add a Player to unrated battles.':
      'Tu ne peux ajouter un autre Joueur que dans les combats non classés.',
    'Player must be set to "p1" or "p2", not "${target}".':
      'Un Joueur doit être désigné comme "p1" ou "p2", pas "${target}".',
    'User ${name} not found.': '${name} non trouvé.',
    'This room already has a player in slot ${target}.':
      'Ce combat a déjà un joueur en tant que ${target}.',
    '${targetUser.name} is already a player in this battle.':
      '${targetUser.name} est déjà un joueur dans ce match.',
    'Player 2': 'Joueur 2',
    'Players could not be restored (maybe this battle already has two players?).':
      "Les Joueurs n'ont pas pu être remis en place (peut-être que ce combat a déjà deux joueurs ?).",
    "This game doesn't support /joingame": "Ce jeu n'accepte pas /joingame",
    "This game doesn't support /leavegame": "Ce jeu n'accepte pas /leavegame",
    'You can only do this in unrated non-tour battles.':
      'Tu peux seulement faire ça dans les combats non-classés hors tournois;',
    'User ${targetUsername} not found.': "L'utilisateur ${targetUsername} n'a pas été trouvé.",
    '${targetUser.name} was kicked from a battle by ${user.name} ${displayReason}':
      "${targetUser.name} a été exclu d'un combat par ${user.name} ${displayReason}",
    'You can only set the timer from inside a battle room.':
      'Tu ne peux paramétrer le timer que dans un combat.',
    "This game's timer is managed by a different command.":
      'Le timer du jeu est géré par une commande différente.',
    'The game timer is OFF.': 'Le timer du jeu est OFF.',
    'The game timer is ON (requested by ${requester})':
      'Le timer du jeu est ON (demandé par ${requester})',
    'Access denied.': 'Accès refusé.',
    "Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.":
      "Le timer a été désactivé par le staff. Merci de ne pas le réactiver jusqu'à ce que notre staff dise que c'est bon.",
    'The timer is already off.': 'Le timer est déjà désactivé.',
    '"${target}" is not a recognized timer state.':
      '"${target}" n\'est pas un état possible pour le timer.',
    'Forcetimer is now OFF: The timer is now opt-in. (set by ${user.name})':
      'Le timer automatique est maintenant désactivé. Le timer est maintenant activable au cas par cas.',
    'Forcetimer is now ON: All battles will be timed. (set by ${user.name})':
      'Le timer automatique est maintenant activé. Il démarrera automatiquement au début de tous les combats (activé par ${user.name}).',
    "'${target}' is not a recognized forcetimer setting.":
      "${target}' n'est pas un paramètre reconnu pour le timer automatique.",
    'This server requires you to be rank ${groupName} or higher to search for a battle.':
      'Le serveur demande un rang de ${groupName} ou plus haut pour chercher un match.',
    'Since you have reached ${Config.forceregisterelo} ELO in ${target}, you must register your account to continue playing that format on ladder.':
      'Maintenant que tu as atteint un ELO de ${Config.forceregisterelo} en ${target}, tu dois enregistrer ton compte pour continuer de jouer ce format en classé.',
    Register: 'Enregistrer son compte',
    "The user '${targetUsername}' was not found.":
      "L'utilisateur '${targetUsername}' n'a pas été trouvé.",
    'You are locked and cannot challenge unlocked users. If this user is your friend, ask them to challenge you instead.':
      'Tu es locked et ne peux pas envoyer de challenge aux utilisateurs qui ne le sont pas.',
    'You are banned from battling and cannot challenge users.':
      'Tu es banni des combats et ne peux pas envoyer de challenge aux autres utilisateurs',
    'You must choose a username before you challenge someone.':
      "Tu dois choisir un pseudo avant d'envoyer des challenges aux autres utilisateurs",
    'This server requires you to be rank ${groupName} or higher to challenge users.':
      "Ce serveur demande d'être au moins ${groupName} ou plus pour envoyer des challenges aux autres utilisateurs.",
    'This command does not support specifying multiple users':
      'Cette commande ne permet pas de spécifier plusieurs utilisateurs.',
    'User "${targetUsername}" not found.':
      'L\'utilisateur "${targetUsername}" n\'a pas été trouvé.',
    'Provide a valid format.': 'Précise un format valide.',
    'Please provide a valid format.': "Précise un format valide s'il te plaît.",
    "The format '${originalFormat.name}' was not found.":
      "Le format '${originalFormat.name}' n'a pas été trouvé.",
    'Your team is valid for ${format.name}.': 'Ton équipe est valide pour du ${format.name}',
    'Your team was rejected for the following reasons:':
      'Ton équipe a été rejetée pour les raisons suivantes :',
    'Battles are now hidden (except to staff) in your trainer card.':
      'Les combats sont maintenant invisibles (excepté au staff) dans ta carte de Dresseur.',
    'Battles are now visible in your trainer card.':
      'Les combats sont maintenant visibles dans ta carte de Dresseur.',
    "'${command}' is a help command.": "${command}' est une commande d'aide.",
    "The command '/${target}' does not exist.": "La commande '/${target}' n'existe pas.",
    "Could not find help for '/${target}'. Try /help for general help.":
      "Aucune aide trouvée pour '/${target}'. Essaie /help pour une aide plus générale.",
    "Could not find help for '/${target}' - displaying help for '/${closestHelp}' instead":
      "Impossible de trouver de l'aide pour '/${target}' - voici celle pour '/${closestHelp}' à la place",
  },
};
