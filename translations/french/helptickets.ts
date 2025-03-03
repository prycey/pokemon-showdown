import type { Translations } from '../../server/chat';

export const translations: Translations = {
  strings: {
    "Hello! The global staff team would be happy to help you, but you need to explain what's going on first.":
      "Bonjour ! Le global staff aimerait t'aider, mais nous aurions besoin que tu nous expliques ton problème dans un premier lieu.",
    'Please post the information I requested above so a global staff member can come to help.':
      "Envoie-nous les informations demandées ci-dessus pour qu'un membre du global staff vienne t'aider.",
    'Thank you for the information, global staff will be here shortly. Please stay in the room.':
      'Merci pour ces informations, un membre du global staff arrivera sous peu. Merci de rester dans la room.',
    'You are banned from creating tickets': 'Tu es interdit de créer tickets',
    ', because you have the same IP as ${ticket.banned}.':
      ', parce que tu as une IP en commun avec ${ticket.banned}.',
    'Request help from global staff': "Demande de l'aide au global staff",
    'Please <button name="login" class="button">Log In</button> to request help.':
      '<button name="login" class="button">Connecte-toi</button> pour demander de l\'aide',
    'Request Help': "Demande de l'aide",
    'You already have a Help ticket.': 'Tu as déjà un Help ticket en course.',
    Back: 'Retour',
    "What's going on?": 'Que se passe-t-il ?',
    'Global staff cannot make Help requests. This form is only for reference.':
      'Le global staff ne peut pas créer de tickets. Ce formulaire est là en tant que référence.',
    'Abuse of Help requests can result in punishments.':
      'Abuser du système de ticket entraînera des sanctions.',
    'What do you want to report someone for?': 'Pourquoi veux-tu signaler un autre utilisateur ?',
    "If someone is harassing you in private messages (PMs), click the button below and a global staff member will take a look. If you are being harassed in a chatroom, please ask a room staff member to handle it. If it's a minor issue, consider using <code>/ignore [username]</code> instead.":
      "Si un utilisateur te harcèle en messages privés (MPs), clique sur le bouton ci-dessous et un membre du global staff pourra s'en occuper. Si un utilisateur te harcèle dans une room, tourne-toi vers un membre du staff de la room. S'il s'agit d'un cas mineur, envisage d'utiliser la commande <code>/ignore [username]</code>.",
    "If someone is harassing you in a battle, click the button below and a global staff member will take a look. If you are being harassed in a chatroom, please ask a room staff member to handle it. If it's a minor issue, consider using <code>/ignore [username]</code> instead.":
      "Si un utilisateur te harcèle en combat, clique sur le bouton ci-dessous et un membre du global staff pourra s'en occuper. Si un utilisateur te harcèle dans une room, tourne-toi vers un membre du staff de la room. S'il s'agit d'un cas mineur, envisage d'utiliser la commande <code>/ignore [username]</code>.",
    'Please save a replay of the battle if it has ended, or provide a link to the battle if it is still ongoing.':
      "Merci d'enregistrer le replay du combat s'il a pris fin, ou d'indiquer le lien du combat s'il est encore en cours.",
    'If a user has an inappropriate name, click the button below and a global staff member will take a look.':
      "Si un utilisateur a un pseudo inapproprié, clique sur le bouton ci-dessous et un membre du global staff s'en occupera.",
    'If a user has inappropriate Pokemon nicknames, click the button below and a global staff member will take a look.':
      "Si un utilisateur utilise un surnom inapproprié sur un Pokémon, clique sur le bouton ci-dessous et un membre du global staff s'en occupera.",
    'What would you like to appeal?': 'Quelle sanction souhaterais-tu contester ?',
    'Permalocks are usually for repeated incidents of poor behavior over an extended period of time, and rarely for a single severe infraction. Please keep this in mind when appealing a permalock.':
      "Les permalocks sont mis en places pour des incidents répétés ou un mauvais comportement sur le long terme, et n'arrivent que rarement pour une seule infraction, même sévère. Merci de prendre cette information en compte lors de ton appel.",
    'Please visit the <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeals</a> page to appeal your permalock.':
      'Merci de te rendre sur la page des <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeals</a> pour faire appel.',
    'If you want to appeal your lock or namelock, click the button below and a global staff member will be with you shortly.':
      'Si tu souhaites contester un lock ou un namelock, cliquer sur le bouton ci-dessous et un membre du global staff arrivera sous peu.',
    "If you are locked or namelocked under a name you don't recognize, click the button below to call a global staff member so we can check.":
      "Si tu es lock ou namelock sous un nom que tu ne reconnais pas, cliquer sur le bouton ci-dessous pour appeler un membre du global staff qui s'occupera de vérifier.",
    'We automatically lock proxies and VPNs to prevent evasion of punishments and other attacks on our server. To get unlocked, you need to disable your proxy or VPN.':
      'Les proxy et VPNs entraînent un lock automatiquement pour éviter les contournements de sanctions et les attaques sur nos serveurs. Pour être unlock, tu dois désactiver ton proxy ou VPN.',
    'Do you have an autoconfirmed account? An account is autoconfirmed when it has won at least one rated battle and has been registered for one week or longer.':
      'As-tu un compte autoconfirmed ? Un compte est autoconfirmed quand il a gagné au moins un match sur le ladder et a été enregistré depuis au moins une semaine.',
    'Login to your autoconfirmed account by using the <code>/nick</code> command in any chatroom, and the semilock will automatically be removed. Afterwards, you can use the <code>/nick</code> command to switch back to your current username without being semilocked again.':
      "Connecte-toi sur ton compte autoconfirmed en utilisant la commande <code>/nick</code> dans n'importe quel chat, et le semilock sera levé automatiquement. Ensuite, tu peux utiliser la commande <code>/nick</code> pour retourner sur le pseudo que tu utilises en ce moment sans être semilock.",
    'If the semilock does not go away, you can try asking a global staff member for help. Click the button below to call a global staff member.':
      "Si le semilock ne se lève pas, tu peux essayer de demander de l'aide à un membre du global staff. Clique sur le bouton ci-dessous pour appeler un membre du global staff.",
    "If you don't have an autoconfirmed account, you will need to contact a global staff member to appeal your semilock. Click the button below to call a global staff member.":
      "Si tu n'as pas de compte autoconfirmed, tu dois contacter un membre du global staff pour contester ton semilock. Clique sur le bouton ci-dessous pour appeler un membre du global staff.",
    "Please PM the staff member who punished you. If you don't know who punished you, ask another room staff member; they will redirect you to the correct user. If you are banned or blacklisted from the room, use <code>/roomauth [name of room]</code> to get a list of room staff members. Bold names are online.":
      "Merci d'envoyer un message privé au membre du staff qui t'a sanctionné. Si tu ne sais pas qui t'a sanctionné, demande à un autre membre du staff de la room ; il pourra te rediriger vers le bon utilisateur. Si tu es banni ou blacklist de la room, tu peux utiliser la commande <code>/roomauth [nom de la room]</code> pour voir la liste des membres du staff. Les pseudos en gras sont ceux des membres du staff en ligne.",
    'Do not PM staff if you are locked (signified by the symbol <code>‽</code> in front of your username). Locks are a different type of punishment; to appeal a lock, make a help ticket by clicking the Back button and then selecting the most relevant option.':
      "N'envoie pas de messages privés au membres du staff d'une room si tu es lock (indiqué par le symbole <code>‽</code> devant ton pseudo). Les lock sont des sanctions différentes ; pour contester un lock, ouvre un help ticket en cliquant sur le bouton Retour, et en selectionnant l'option appropriée.",
    'Maybe one of these options will be helpful?': "Un de ces boutons pourra peut-être t'aider ?",
    'If you lost your password, click the button below to request a password reset. We will need to clarify a few pieces of information before resetting the account. Please note that password resets are low priority and may take a while; we recommend using a new account while waiting.':
      "Si tu as oublié ton mot de passe, clique sur le bouton ci-dessous pour demander à ce qu'il soit réinitialisé. Avant de réinitialiser ton mot de passe, sache que les réinitialisations de mot de passe sont ne sont pas prioritaires et peuvent prendre un moment ; nous recommendons à ce que tu utilises un nouveau pseudo en attendant.",
    'Request a password reset': 'Demande une réinitialisation de mot de passe',
    'If you are a room driver or up in a public room, and you need help watching the chat, one or more global staff members would be happy to assist you!':
      "Si tu es room driver ou plus haut dans une room publique et que tu as besoin d'aide pour surveiller la room, un ou plusieurs membres du global staff seraient heureux de t'aider !",
    'If your issue is not handled above, click the button below to talk to a global staff member. Please be ready to explain the situation.':
      "Si le problème rencontré n'est pas pris en compte par un des cas ci-dessus, clique sur le bouton ci-dessous pour discuter avec un membre du global staff. Merci de bien expliquer la situation.",
    'Malformed help request.': 'Requête mal formulée.',
    'PM Harassment': 'Harcèlement en messages privés',
    'Battle Harassment': 'Harcèlement en match',
    'Inappropriate Username': 'Pseudo inapproprié',
    'Inappropriate Pokemon Nicknames': 'Surnom de Pokémon inapproprié',
    Appeal: 'Appel',
    'IP-Appeal': 'Appel IP',
    'ISP-Appeal': 'Appel ISP',
    'Public Room Assistance Request': "Demande d'assistance pour une room publique",
    Other: 'Autre',
    'I want to report someone': "J'aimerais signaler quelqu'un",
    'Someone is harassing me in PMs': "Quelqu'un me harcèle en messages privés",
    'Someone is harassing me in a battle': "Quelqu'un me harcèle dans un match",
    'Someone is using an offensive username': "Quelqu'un utilise un pseudo inapproprié",
    'Someone is using offensive Pokemon nicknames':
      "Quelqu'un utilise des surnoms de Pokémon inappropriés",
    'I want to appeal a punishment': "J'aimerais contester ma sanction",
    'I want to appeal my permalock': "J'aimerais contester mon permalock",
    'I want to appeal my lock': "J'aimerais contester mon lock",
    "I'm locked because I have the same IP as someone I don't recognize":
      "Je suis lock parce que j'ai la même IP que quelqu'un d'autre",
    "I can't talk in chat because of my ISP":
      "Je ne peux pas parler dans le chat à cause de mon fournisseur d'accès à Internet",
    "I'm locked because of a proxy or VPN": 'Je suis lock à cause de mon proxy ou mon VPN',
    'Yes, I have an autoconfirmed account': "Oui, j'ai un compte autoconfirmed",
    "No, I don't have an autoconfirmed account": "Non, je n'ai pas de compte autoconfirmed",
    'I want to appeal a mute/roomban/blacklist':
      "J'aimerais contester un mute/un roomban/un blacklist",
    'Something else': 'Autre chose',
    'I lost my password': "J'ai oublié mon mot de passe",
    'I need global staff to help watch a public room':
      "J'ai besoin qu'un membre du global staff m'aide à surveiller une room publique",
    'Report harassment in a private message (PM)':
      'Signale un harcèlement en messages privés (MPs)',
    'Report harassment in a battle': 'Signale un harcèlement en match',
    'Report an inappropriate username': 'Signale un pseudo inapproprié',
    'Report inappropriate Pokemon nicknames': 'Signale un surnom de Pokémon inapproprié',
    'Appeal your lock': 'Conteste ton lock',
    'Appeal IP lock': 'Conteste ton IP lock',
    'Appeal ISP lock': "Conteste ton lock du à ton fournisseur d'accès à internet",
    'Call a Global Staff member to help': "Demande de l'aide à un membre du global staff",
    'Call a Global Staff member': 'Appelle un membre du global staff',
    'Are you sure you want to submit a ticket for ${type}?':
      'Es-tu sûr de vouloir ouvrir un ticket pour ${type}',
    'Yes, contact global staff': 'Oui, contacte le global staff',
    'No, cancel': 'Non, retour',
    'Help Ticket Stats': 'Statistiques des tickets',
    'Help tickets': 'Tickets',
    Status: 'Statut',
    Creator: 'Créateur',
    'Ticket Type': 'Type de ticket',
    Language: 'Langue',
    'Claimed by': 'Pris par',
    Action: 'Action',
    'And ${keys.length - count} more tickets.': 'Et ${keys.length - count} autres tickets.',
    'View all tickets': 'Voir tous les tickets',
    Closed: 'Fermé',
    Inactive: 'Inactif',
    Claimed: 'Pris',
    Unclaimed: 'Non pris',
    Claim: 'Prendre',
    View: 'Voir',
    Log: 'Log',
    'Banned by': 'Banni par',
    Username: 'Pseudo',
    Expires: 'Expire',
    Logs: 'Logs',
    'And ${banKeys.length - count} more ticket bans.':
      'Et ${banKeys.length - count} autres ticket bans.',
    'Ticket List': 'Liste des tickets',
    Banned: 'Banni',
    'Ticket Stats': 'Statistiques des tickets',
    'No ticket stats found.': 'Aucune statistique des tickets trouvée',
    'Previous Month': 'Mois précédent',
    'Staff Stats': 'Statistiques par staff',
    'Next Month': 'Mois suivant',
    Resolved: 'Résolu',
    Unresolved: 'Non résolu',
    Dead: 'KO',
    Type: 'Type',
    'Total Tickets': 'Total de tickets',
    'Average Total Time': 'Temps total moyen',
    'Average Initial Wait': "Temps d'attente initial moyen",
    'Average Total Wait': "Temps d'attente total moyen",
    Resolutions: 'Résolutions',
    'Positive Result': 'Résultats positifs',
    'Staff ID': 'ID du staff',
    'Number of Tickets': 'Nombre de tickets',
    'Average Time Per Ticket': 'Temps moyen par ticket',
    'This command cannot be broadcast in battles.':
      'Cette commande ne peut pas être diffusée en matchs',
    'Report someone': "Signale quelqu'un",
    'Appeal a punishment': 'Conteste une sanction',
    'Request help': "Demande de l'aide",
    "You need to choose a username before doing this. [TN: 'this' refers to opening a help ticket]":
      "Tu dois choisir un pseudo avant d'ouvrir un ticket.",
    "Global staff can't make tickets. They can only use the form for reference.":
      "Les membres du global staff ne peuvent pas ouvrir de ticket. Ils ne peuvent utiliser le formulaire qu'en guise de référence.",
    'You already have an open ticket; please wait for global staff to respond.':
      "Tu as déjà un ticket d'ouvert ; merci d'attendre que le global staff y réponde.",
    'Due to high load, you are limited to creating ${maxTickets} tickets every hour.':
      "En raison d'une forte activité, tu es limité à ${maxTickets} créations de tickets par heure.",
    'Hi! Who was harassing you in private messages?':
      'Bonjour ! Qui te harcèle en messages privés ?',
    'Hi! Who was harassing you, and in which battle did it happen? Please post a link to the battle or a replay of the battle.':
      'Bonjour ! Qui te harcèle, et dans quel match cela a-t-il eu lieu ? Merci de poster un lien vers le match ou vers le replay.',
    'Hi! Tell us the username that is inappropriate.': 'Bonjour ! Quel pseudo est inapproprié ?',
    'Hi! Which user has Pokemon with inappropriate nicknames, and in which battle? Please post a link to the battle or a replay of the battle.':
      'Bonjour ! Quel utilisateur utilise des surnoms de Pokémon inappropriés, et dans quel match ? Merci de poster un lien vers le match ou vers le replay.',
    'Hi! Can you please explain why you feel your punishment is undeserved?':
      "Bonjour ! Peux-tu expliquer pourquoi tu penses que ta sanction n'est pas méritée ?",
    'Hi! How are you connecting to Showdown right now? At home, at school, on a phone using mobile data, or some other way?':
      "Bonjour ! Comment te connectes-tu à Showdown en ce moment ? Depuis chez toi, ton école, sur téléphone en utilisant des données mobiles, ou d'une autre manière ?",
    'Hi! Which room(s) do you need us to help you watch?':
      'Bonjour ! Quelle(s) room(s) aurais-tu besoin que nous surveillions ?',
    'Hi! What seems to be the problem? Tell us about any people involved,\n and if this happened in a specific place on the site.':
      'Bonjour ! Quel semble être le problème ? Dis nous quels utilisateurs sont impliqués,\n et si cela se passe dans un chat en particulier.',
    'Hi! Please click the button below to give global staff permission to check PMs.':
      "Bonjour ! Merci de cliquer sur le bouton ci-dessous pour donner l'autorisation au global staff de lire les messages privés.",
    ' Or if ${reportTarget} is not the user you want to report, please tell us the name of the user who you want to report.':
      "Ou si ${reportTarget} n'est pas l'utilisateur que tu veux signaler, merci de nous donner le pseudo de l'utilisateur que tu veux signaler.",
    'Help Ticket': 'Ticket help',
    Issue: 'Problème',
    'A Global Staff member will be with you shortly.': 'Un membre du global staff arrive sous peu.',
    '${inputUsername} does not have an open ticket.': "${inputUsername} n'a pas de ticket actif.",
    "You closed ${ticket.creator}'s ticket.": 'Tu as fermé le ticket de ${ticket.creator}',
    'The reason is too long. It cannot exceed 300 characters.':
      'La raison est trop longue. La limite est de 300 caractères.',
    "User '${targetUsername}' not found.": "L'utilisateur '${targetUsername}' n'a pas été trouvé.",
    '${targetUser ? targetUser.name : target} is not ticket banned.':
      "${targetUser ? targetUser.name : target} n'est pas ticket ban.",
    "${targetUser ? targetUser.name : target}'s ticket ban is already expired.":
      'Le ticket ban de ${targetUser ? targetUser.name : target} a déjà expiré.',
    'You are already ignoring help ticket notifications. Use /helpticket unignore to receive notifications again.':
      'Tu ignores déjà les notifications des tickets. Utilise /helpticket unignore pour recevoir les notifications à nouveau.',
    'You are now ignoring help ticket notifications.':
      'Tu ignores désormais les notifications des tickets.',
    'You are not ignoring help ticket notifications. Use /helpticket ignore to stop receiving notifications.':
      "Tu n'ignores plus les notifications des tickets. Utilise /helpticket ignore pour ne plus recevoir de notifications.",
    'You will now receive help ticket notifications.':
      'Tu recevras désormais les notifications des tickets',
    '${target} does not have a ticket.': "${target} n'a pas de ticket actif.",
    "You deleted ${target}'s ticket.": 'Tu as supprimé le ticket de ${target}.',

    'Hi! All global staff members are busy right now and we apologize for the delay. ':
      'Bonjour ! Tous les membres du global staff sont actuellement occupés, merci de bien vouloir attendre.',
    "Please make sure you have given us the permission to check the PMs between you and the user you reported. You can also provide any relevant context; for example, a replay of a battle with the person you're reporting.":
      "Merci de vérifier que tu as bien donné l'autorisation au staff de lire les messages privés avec l'utilisateur que tu as signalé. Tu peux aussi nous donner des informations additionnelles ; par exemple, un replay d'un match avec l'utilisateur que tu signales.",
    'Please save the replay of the battle and provide a link to it in this chat, so we can see the harassment even if the battle expires. You can save the replay by clicking on the "Upload and share replay" button once the battle has ended.':
      "Merci d'enregistrer le replay du combat et d'indiquer le lien afin que nous puissions prendre connaissance de la situation même si le match expire. Tu peux enregistrer le replay en cliquant sur le bouton 'Upload and share replay' une fois le combat terminé.",
    'Make sure you have provided the correct username, and if its meaning or why it is offensive is not obvious, please explain why it should not be allowed.':
      "Vérifie que tu nous communiques le bon pseudo, et si sa signification ou pourquoi tu le juges inapproprié n'est pas évident, explique-nous pourquoi il ne devrait pas être autorisé.",
    'Please save the replay of the battle and provide a link to it in this chat, so we can see the nicknames even if the battle expires. You can save the replay by clicking on the "Upload and share replay" button once the battle has ended.':
      "Merci d'enregistrer le replay du combat et d'indiquer le lien afin que nous puissions prendre voir les surnoms même si le match expire. Tu peux enregistrer le replay en cliquant sur le bouton 'Upload and share replay' une fois le combat terminé.",
    'Please clearly explain why you should be unlocked and we will review it as soon as possible.':
      "Merci d'expliquer clairement pourquoi ton lock devrait être levé et nous en prendrons connaissance dès que possible.",
    'Please give us all relevant information on how you are connecting to Pokémon Showdown (if it is through mobile data, at home, a school or work network, etc), and we will review your case as soon as possible.':
      'Merci de nous indiquer comment tu te connectes à Pokémon Showdown (si tu utilises des données mobiles, si tu es chez toi, ou sur le réseau de ton école ou de ton travail, etc), et nous en prendrons connaissance dès que possible.',
    'Please tell us which room you need assistance with and a global staff member will join your room as soon as possible.':
      "Merci de nous indiquer dans quelle(s) room(s) tu as besoin d'aide et un membre du global staff viendra dès que possible.",
    'If your issue pertains to battle mechanics or is a question about Pokémon Showdown, you can ask in the <<help>> chatroom.':
      'Si le problème rencontré concerne les mécaniques en combat ou est une question sur Pokémon Showdown, tu peux te tourner vers la room <<help>>',
  },
};
