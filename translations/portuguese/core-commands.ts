import type { Translations } from '../../server/chat';

export const translations: Translations = {
  strings: {
    'Server version: <b>${version}</b>': 'Versão do servidor: <b>${version}</b>',
    '/mee - must not start with a letter or number':
      '/mee - não deve iniciar com uma letra ou número',
    "What?! How are you not more excited to battle?! Try /battle! to show me you're ready.":
      'O quê?! Como assim você não está mais animado para batalhar?! Tente fazer /battle! para me mostrar que está preparado.',
    "Access denied for custom avatar - make sure you're on the right account?":
      'Acesso negado para avatar personalizado - certifique-se de que você está na conta certa.',
    'Invalid avatar.': 'Avatar inválido.',
    'Avatar changed to:': 'Avatar trocado para:',
    'Artist: ': 'Artista:',
    'No one has PMed you yet.': 'Ninguém te enviou uma mensagem privada ainda.',
    'You forgot the comma.': 'Você esqueceu da vírgula',
    'User ${targetUsername} not found. Did you misspell their name?':
      'Usuário ${targetUsername} não encontrado. Você digitou o nome corretamente?',
    'User ${targetUsername} is offline.': 'Usuário ${targetUsername} está offline.',
    'The user "${targetUsername}" was not found.':
      'O usuário "${targetUsername}" não foi encontrado.',
    'The room "${target}" was not found.': 'A sala "${target}" não foi encontrada.',
    'You do not have permission to invite people into this room.':
      'Você não tem permissão para convidar pessoas para esta sala.',
    'This user is already in "${targetRoom.title}".': 'O usuário já está em "${targetRoom.title}"',
    'Setting status messages in /busy is no longer supported. Set a status using /status.':
      'Não é mais possível utilizar uma mensagem de status com /busy. Para utilizar um status, utilize /status.',
    'Setting status messages in /away is no longer supported. Set a status using /status.':
      'Não é mais possível utilizar uma mensagem de status com /away. Para utilizar um status, utilize /status.',
    "User '${target}' not found.": "Usuário '${target}' não encontrado.",
    '${targetUser.name} does not have a status set.':
      '${targetUser.name} não tem uma mensagem de status.',
    '${targetUser.name}\'s status "${targetUser.userMessage}" was cleared by ${user.name}${displayReason}':
      'O status "${targetUser.userMessage}" de ${targetUser.name} foi removido por ${user.name}${displayReason}',
    "You don't have a status message set.": 'Você não tem uma mensagem de status.',
    'You have cleared your status message.': 'Você removeu a sua mensagem de status.',
    'This user has not played any ladder games yet.':
      'Este usuário ainda não jogou nenhuma partida na ladder.',
    'W[TN: initial for Wins]': 'V',
    'L[TN: initial for Losses]': 'D',
    "You already have the temporary symbol '${group}'.":
      "Você já tem o símbolo temporário '${group}'.",
    'You must specify a valid group symbol.':
      'Você precisa especificar um símbolo de grupo válido.',
    'You may only set a temporary symbol below your current rank.':
      'Você só pode utilizar um símbolo temporário que esteja abaixo do seu rank atual.',
    'Your temporary group symbol is now': 'Agora o seu símbolo de grupo temporário é',
    "Currently, you're viewing Pokémon Showdown in ${language}.":
      'Atualmelmente, você está vendo o Pokémon Showdown em ${language}.',
    'Valid languages are: ${languages}': 'Idiomas válidos são: ${language}',
    'Pokémon Showdown will now be displayed in ${language} (except in language rooms).':
      'Agora o Pokémon Showdown sera exibido em ${language} (exceto em salas de idioma).',
    'Note that rooms can set their own language, which will override this setting.':
      ' Observação as salas podem escolher sua própria língua, o que sobrepõe essa configuração. ',
    '/updatesettings expects JSON encoded object.':
      '/updatesettings espera um objeto codificado em JSON.',
    'Unable to parse settings in /updatesettings!':
      'Não foi possível analisar as configurações em /updatesettings!',
    'Must be in a battle.': 'Deve estar em uma batalha.',
    'User ${target} not found.': 'Usuário ${target} não encontrado.',
    'Must be a player in this battle.': 'Deve ser um jogador nesta batalha.',
    '${targetUser.name} has not requested extraction.':
      '${targetUser.name} não requisitou uma extração.',
    'You have already consented to extraction with ${targetUser.name}.':
      'Você já consentiu para a extração com ${targetUser.name}.',
    '${user.name} consents to sharing battle team and choices with ${targetUser.name}.':
      '${user.name} consentiu em compartilhar a equipe da batalha e escolhas com ${targetUser.name}.',
    'No input log found.': 'Nenhum log foi encontrado.',
    '${targetUser.name} has extracted the battle input log.':
      '${targetUser.name} extraiu os logs da batalha.',
    'This command only works in battle rooms.': 'Este comando só funciona em salas de batalha.',
    'This command only works when the battle has ended - if the battle has stalled, use /offertie.':
      'Este comando só funciona quando a batalha tiver acabado - se a batalha estiver estancada, use /offertie.',
    'Alternatively, you can end the battle with /forcetie.':
      'Alternativamente, você pode encerrar a batalha com /forcetie.',
    '${user.name} has extracted the battle input log.': '${user.name} extraiu os logs da batalha.',
    'You already extracted the battle input log.': 'Você já extraiu os logs da batalha.',
    'Battle input log re-requested.': 'Logs da batalha foram requisitados outra vez.',
    'Invalid input log.': 'Logs inválidos.',
    'Your input log contains untrusted code - you must have console access to use it.':
      'Seu comando contem código não confiável - você deve ter acesso ao console para usá-lo.',
    'This command can only be used in a battle.': 'Este comando só pode ser usado em uma batalha.',
    'Only players can extract their team.': 'Apenas jogadores podem extrair suas equipes.',
    'Use a number between 1-6 to view a specific set.':
      'Use um número entre 1 e 6 para ver um set específico.',
    'The Pokemon "${target}" is not in your team.': 'O Pokémon "${target}" não está na sua equipe.',
    'That Pokemon is not in your team.': 'Este Pokémon não está na sua equipe.',
    'View team': 'Ver equipe.',
    'Must be in a battle room.': 'Deve estar em uma sala de batalha',
    'This server does not allow offering ties.': 'Este servidor não permite oferecer empates.',
    "You can't offer ties in tournaments.": 'Você não pode oferecer empates em torneios.',
    "It's too early to tie, please play until turn 100.":
      'É cedo demais para empatar, por favor jogue até o turno 100.',
    'No other player is requesting a tie right now. It was probably canceled.':
      'Nenhum outro jogador está pedindo por um empate no momento. Provavelmente o pedido foi cancelado.',
    '${user.name} is offering a tie.': '${user.name} está oferecendo um empate.',
    'Accept tie': 'Aceitar empate',
    Reject: 'Rejeitar',
    'Must be a player to accept ties.': 'É necessário ser um jogador para aceitar empates.',
    'You have already agreed to a tie.': 'Você já concordou com um empate.',
    '${user.name} accepted the tie.': '${user.name} aceitou o empate.',
    'All players have accepted the tie.': 'Todos os jogadores aceitaram o empate.',
    'Must be a player to reject ties.': 'É necessário ser um jogador para rejeitar empates.',
    '${user.name} rejected the tie.': '${user.name} rejeitou o empate.',
    "This room doesn't have an active game.": 'Esta sala não tem um jogo ativo.',
    "This kind of game can't be forfeited.": 'Você não pode se render neste tipo de jogo.',
    "This game doesn't support /choose": '/choose não funciona neste jogo',
    "This game doesn't support /undo": '/uno não funciona neste jogo',
    'You can only save replays for battles.': 'Você só pode salvar replays para batalhas.',
    "This battle can't have hidden replays, because the tournament is set to be forced public.":
      'Esta batalha não pode ter replays ocultos, visto que o torneio está configurado para ser público.',
    'The replay for this battle is already set to hidden.':
      'O replay desta batalha já está configurado como oculto.',
    '${user.name} hid the replay of this battle.': '${user.name} ocultou o replay desta batalha.',
    'You can only do this in battle rooms.': 'Você só pode fazer isso em sala de batalhas.',
    'You can only add a Player to unrated battles.':
      'Você só pode adicionar um jogador em batalhas que não valham pontos.',
    'Player must be set to "p1" or "p2", not "${target}".':
      'Jogadores devem estar classificados como "p1" ou "p2", não "${target}".',
    'User ${name} not found.': 'Usuário ${name} não encontrado.',
    'This room already has a player in slot ${target}.':
      'Esta sala já tem um jogador na posição ${target}.',
    '${targetUser.name} is already a player in this battle.':
      '${targetUser.name} já é um jogador nesta batalha.',
    'Player 2': 'Jogador 2',
    'Players could not be restored (maybe this battle already has two players?).':
      'Os jogadores não puderam ser restaurados (talvez esta batalha já tenha dois jogadores?).',
    "This game doesn't support /joingame": '/joingame não funciona neste jogo',
    "This game doesn't support /leavegame": '/leavegame não funciona neste jogo',
    'You can only do this in unrated non-tour battles.':
      'Você só pode fazer isso em batalhas que não valham pontos e nem sejam de torneios.',
    'User ${targetUsername} not found.': 'Usuário ${targetUsername} não encontrado.',
    '${targetUser.name} was kicked from a battle by ${user.name} ${displayReason}':
      '${targetUser.name} foi expulso de uma batalha por ${user.name} ${displayReason}',
    'You can only set the timer from inside a battle room.':
      'Você só pode acionar o temporizador dentro de uma batalha.',
    "This game's timer is managed by a different command.":
      'O temporizador deste jogo é administrado por um comando diferente.',
    'The game timer is OFF.': 'O temporazidor do jogo está DESLIGADO.',
    'The game timer is ON (requested by ${requester})':
      'O temporizador do jogo está LIGADO (requisitado por ${requester})',
    'Access denied.': 'Acesso negado.',
    "Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.":
      'O temporizador foi desligado pela staff. Por favor, não o ligue de volta até que nossa staff diga o contrário.',
    'The timer is already off.': 'O temporizador já está desligado.',
    '"${target}" is not a recognized timer state.':
      '"${target}" não é uma unidade de tempo reconhecida pelo temporizador.',
    'Forcetimer is now OFF: The timer is now opt-in. (set by ${user.name})':
      'Forcetimer agora está DESLIGADO. O temporizador agora é opcional. (estabelecido por ${user.name})',
    'Forcetimer is now ON: All battles will be timed. (set by ${user.name})':
      'Forcetimer agora está LIGADO. Todas as batalhas terão tempo. (estabelecido por ${user.name})',
    "'${target}' is not a recognized forcetimer setting.":
      "${target}' não é uma configuração reconhecida de forcetimer.",
    'This server requires you to be rank ${groupName} or higher to search for a battle.':
      'Este servidor requer que você tenha o rank ${groupName} ou maior para procurar por uma batalha.',
    'Since you have reached ${Config.forceregisterelo} ELO in ${target}, you must register your account to continue playing that format on ladder.':
      'Visto que você atingiu ${Config.forceregisterelo} de ELO em ${target}, você deve registrar a sua conta para continuar jogando esse formato na ladder.',
    Register: 'Registrar-se',
    "The user '${targetUsername}' was not found.":
      "O usuário '${targetUsername}' não foi encontrado.",
    'You are locked and cannot challenge unlocked users. If this user is your friend, ask them to challenge you instead.':
      'Você está locked e não pode desafiar usuários unlocked.',
    'You are banned from battling and cannot challenge users.':
      'Você está banido de batalhas e não pode desafiar outros usuários.',
    'You must choose a username before you challenge someone.':
      'Você deve escolher um nome de usuário antes de desafiar alguém.',
    'This server requires you to be rank ${groupName} or higher to challenge users.':
      'Este servidor requer que você tenha o rank ${groupName} ou maior para desafiar alguém.',
    'This command does not support specifying multiple users':
      'Este comando não permite especificar múltiplos usuários.',
    'User "${targetUsername}" not found.': 'Usuário "${targetUsername}" não encontrado.',
    'Provide a valid format.': 'Providencie um formato válido.',
    'Please provide a valid format.': 'Por favor, providencie um formato válido.',
    "The format '${originalFormat.name}' was not found.":
      "O formato '${originalFormat.name}' não foi encontrado.",
    'Your team is valid for ${format.name}.': 'Sua equipe é válida para ${format.name}.',
    'Your team was rejected for the following reasons:':
      'Sua equipe foi rejeitada pelos seguintes motivos:',
    'Battles are now hidden (except to staff) in your trainer card.':
      'Suas batalhas agora estão ocultas no seu trainer card (exceto para staff).',
    'Battles are now visible in your trainer card.':
      'Suas batalhas agora estão visíveis no seu trainer card.',
    "'${command}' is a help command.": "${command}' é um comando de ajuda.",
    "The command '/${target}' does not exist.": "O comando '/${target}' não existe.",
    "Could not find help for '/${target}'. Try /help for general help.":
      "Não foi possível encontrar ajuda para '/${target}'. Tente /help para receber ajuda em geral.",
    "Could not find help for '/${target}' - displaying help for '/${closestHelp}' instead":
      "Não foi possível encontrar ajuda para '/${target}' - exibindo ajuda para '/${closestHelp}' em vez disso.",
  },
};
