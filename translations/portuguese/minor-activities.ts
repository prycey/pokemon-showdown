import type { Translations } from '../../server/chat';

export const translations: Translations = {
  strings: {
    'The announcement has ended.': 'O anúncio terminou.',
    'Battles do not support announcements.': 'Anúncios não funcionam em batalhas.',
    'You are not allowed to use filtered words in announcements.':
      'Não é permitido usar palavras filtradas em anúncios.',
    'There is already a poll or announcement in progress in this room.':
      'Já existe uma enquete ou anúncio em progresso nesta sala.',
    'An announcement was started by ${user.name}.': 'Um anúncio foi iniciado por ${user.name}.',
    'There is no announcement running in this room.': 'Não existe um anúncio ativo nesta sala.',
    'There is no timer to clear.': 'Não existe nenhum temporizador para ser removido.',
    'The announcement timer was turned off.': 'O temporizador do anúncio foi desligado.',
    'Invalid time given.': 'Tempo especificado inválido.',
    'The announcement timer is off.': 'O temporizador do anúncio está desligado.',
    'The announcement was ended by ${user.name}.': 'O anúncio foi encerrado por ${user.name}.',
    'Accepts the following commands:': 'Aceita os seguintes comandos:',

    'That option is not selected.': 'Esta opção não está selecionada.',
    'You have already voted for this poll.': 'Você já votou nesta enquete.',
    'No options selected.': 'Nenhuma opção selecionada.',
    'you will not be able to vote after viewing results':
      'você não poderá votar após ver os resultados',
    'View results': 'Ver resultados',
    "You can't vote after viewing results": 'Você não pode votar após ver os resultados',
    'The poll has ended &ndash; scroll down to see the results':
      'A enquete foi encerrada &ndash; role para baixo para ver os resultados',
    'Vote for ${num}': 'Voto para ${num}',
    'Submit your vote': 'Envie seu voto',
    Quiz: 'Quiz',
    Poll: 'Enquete',
    Submit: 'Enviar',
    ended: 'terminou',
    votes: 'votos',
    delete: 'deletar',
    'Poll too long.': 'Enquete longa demais.',
    'Battles do not support polls.': 'Enquetes não funcionam em batalhas.',
    'You are not allowed to use filtered words in polls.':
      'Não é permitido usar palavras filtradas em enquetes.',
    'Not enough arguments for /poll new.': 'Argumentos insuficientes para /poll new.',
    'Too many options for poll (maximum is 8).': 'Opções demais para uma enquete (o máximo é 8).',
    'There are duplicate options in the poll.': 'Existem opções duplicadas na enquete.',
    '${user.name} queued a poll.': '${user.name} colocou uma enquete na fila.',
    'A poll was started by ${user.name}.': 'Uma enquete foi iniciada por ${user.name}.',
    'The queue is already empty.': 'A fila já está vazia.',
    'Cleared poll queue.': 'A fila de enquetes foi limpa.',
    'Room "${roomid}" not found.': 'Sala "${roomid}" não encontrada.',
    'Can\'t delete poll at slot ${slotString} - "${slotString}" is not a number.':
      'Não é possível deletar a enquete na posição ${slotString} - "${slotString}" não é um número',
    'There is no poll in queue at slot ${slot}.':
      'Não existe uma enquete na posição ${slot} da fila.',
    '(${user.name} deleted the queued poll in slot ${slot}.)':
      '(${user.name} deletou a enquete na posição ${slot} da fila).',
    'There is no poll running in this room.': 'Não existe uma enquete ativa nesta sala.',
    'To vote, specify the number of the option.': 'Para votar, especifique o número da opção.',
    'Option not in poll.': 'A opção não está na enquete.',
    'The poll timer was turned off.': 'O temporizador da enquete foi desligado.',
    'The queued poll was started.': 'A enquete que estava na fila foi iniciada.',
    'The poll timer was turned on: the poll will end in ${timeout} minute(s).':
      'O temporizador da enquete foi ligado: a enquete encerrará em ${timeout} minuto(s).',
    'The poll timer was set to ${timeout} minute(s) by ${user.name}.':
      'O temporizador da enquete foi configurado para ${timeout} minuto(s) por ${user.name}.',
    'The poll timer is on and will end in ${poll.timeoutMins} minute(s).':
      'O temporizador da enquete está ligado e encerrará em ${poll.timeoutMins} minuto(s).',
    'The poll timer is off.': 'O temporizador da enquete está desligado.',
    'The poll was ended by ${user.name}.': 'A enquete foi encerrada por ${user.name}.',
    'Queued polls:': 'Enquetes na fila:',
    Refresh: 'Atualizar',
    'No polls queued.': 'Nenhuma enquete na fila.',
    '#${number} in queue': '#${number} na fila',
  },
};
