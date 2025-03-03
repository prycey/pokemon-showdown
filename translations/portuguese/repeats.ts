import type { Translations } from '../../server/chat';

export const translations: Translations = {
  strings: {
    'Repeated phrases in ${room.title}': 'Frases repetidas em ${room.title}',
    'There are no repeated phrases in ${room.title}.': 'Não há frases repetidas em ${room.title}.',
    Action: 'Ação',
    Phrase: 'Frase',
    Identifier: 'Identificador',
    Interval: 'Intervalo',
    'every ${minutes} minute(s)': 'a cada ${minutes} minuto(s)',
    'every ${messages} chat message(s)': 'a cada ${messages} mensagen(s) no chat',
    'Raw text': 'Texto Puro',
    Remove: 'Remover',
    'Remove all repeats': 'Remover todos os repeats',
    'Repeat names must include at least one alphanumeric character.':
      'Repeats devem incluir pelo menos um caractere alfanumérico.',
    'You must specify an interval as a number of minutes or chat messages between 1 and 1440.':
      'Você deve especificar um intervalo como um número de minutos ou mensagens no chat entre 1 e 1440.',
    'The phrase labeled with "${id}" is already being repeated in this room.':
      'A frase nomeada como "${id}" já está sendo repetida nesta sala.',
    '${user.name} set the phrase labeled with "${id}" to be repeated every ${interval} minute(s).':
      '${user.name} a frase nomeada como "${id}" foi colocada para ser repetida a cada ${interval} minuto(s).',
    '${user.name} set the phrase labeled with "${id}" to be repeated every ${interval} chat message(s).':
      '${user.name} a frase nomeada como "${id}" foi colocada para ser repetida a cada ${interval} mensagen(s) no chat.',
    '${user.name} set the Room FAQ "${topic}" to be repeated every ${interval} minute(s).':
      '${user.name} o Room FAQ "${topic}" foi colocado para ser repetido a cada ${interval} minuto(s).',
    '${user.name} set the Room FAQ "${topic}" to be repeated every ${interval} chat message(s).':
      '${user.name} o Room FAQ "${topic}" foi colocado para ser repetido a cada ${interval} mensagen(s) no chat.',
    'The phrase labeled with "${id}" is not being repeated in this room.':
      'A frase nomeada como "${id}" não está sendo repetida nesta sala.',
    'The text for the Room FAQ "${topic}" is already being repeated.':
      'O texto para o Room FAQ "${topic}" já está sendo repetido.',
    '${user.name} removed the repeated phrase labeled with "${id}".':
      '${user.name} removeu a frase repetida nomeada como "${id}".',
    'There are no repeated phrases in this room.': 'Não há frases repetidas nesta sala.',
    '${user.name} removed all repeated phrases.': '${user.name} removeu todas as frases repetidas.',
    'You must specify a room when using this command in PMs.':
      'Você deve especificar uma sala quando estiver usando este comando em PMs.',
  },
};
