import type { Translations } from '../../server/chat';

export const translations: Translations = {
  strings: {
    'Repeated phrases in ${room.title}': 'Frases repetidas en ${room.title}',
    'There are no repeated phrases in ${room.title}.': 'No hay frases repetidas en ${room.title}.',
    Action: 'Acción',
    Phrase: 'Frase',
    Identifier: 'Identificador',
    Interval: 'Intervalo',
    'every ${minutes} minute(s)': 'cada ${minutes} minuto(s)',
    'every ${messages} chat message(s)': 'cada ${messages} mensaje(s) en el chat',
    'Raw text': 'Texto sin formato',
    Remove: 'Eliminar',
    'Remove all repeats': 'Eliminar todas las repeticiones',
    'Repeat names must include at least one alphanumeric character.':
      'Los nombres de repeats deben incluir al menos un carácter alfanumérico.',
    'You must specify an interval as a number of minutes or chat messages between 1 and 1440.':
      'Debes especificar un intervalo como un número de minutos o mensajes en el chat entre 1 y 1440.',
    'The phrase labeled with "${id}" is already being repeated in this room.':
      'La frase registrada como "${id}" ya está siendo repetida en esta sala.',
    '${user.name} set the phrase labeled with "${id}" to be repeated every ${interval} minute(s).':
      '${user.name} estableció la frase como "${id}" para ser repetida cada ${interval} minuto(s).',
    '${user.name} set the phrase labeled with "${id}" to be repeated every ${interval} chat message(s).':
      '${user.name} estableció la frase como "${id}" para ser repetida cada ${interval} mensaje(s) en el chat.',
    '${user.name} set the Room FAQ "${topic}" to be repeated every ${interval} minute(s).':
      '${user.name} estableció el Room FAQ "${topic}" para ser repetido cada ${interval} minuto(s).',
    '${user.name} set the Room FAQ "${topic}" to be repeated every ${interval} chat message(s).':
      '${user.name} estableció el Room FAQ "${topic}" para ser repetido cada ${interval} mensaje(s) en el chat.',
    'The phrase labeled with "${id}" is not being repeated in this room.':
      'La frase registrada como "${id}" no está siendo repetida en esta sala.',
    'The text for the Room FAQ "${topic}" is already being repeated.':
      'El texto para el Room FAQ "${topic}" ya está siendo repetido.',
    '${user.name} removed the repeated phrase labeled with "${id}".':
      '${user.name} eliminó la frase que estaba siendo repetida marcada como "${id}".',
    'There are no repeated phrases in this room.': 'No hay frases repetidas en esta sala.',
    '${user.name} removed all repeated phrases.':
      '${user.name} eliminó todas las frases repetidas.',
    'You must specify a room when using this command in PMs.':
      'Debes especificar una sala cuando usas este comando en mensajes privados.',
  },
};
