import type { Translations } from '../../server/chat';

export const translations: Translations = {
  strings: {
    'Repeated phrases in ${room.title}': '',
    'There are no repeated phrases in ${room.title}.': '',
    Action: '',
    Phrase: '',
    Identifier: '',
    Interval: '',
    'every ${minutes} minute(s)': '',
    'every ${messages} chat message(s)': '',
    'Raw text': '',
    Remove: '',
    'Remove all repeats': '',
    'Repeat names must include at least one alphanumeric character.': '',
    'You must specify an interval as a number of minutes or chat messages between 1 and 1440.': '',
    'The phrase labeled with "${id}" is already being repeated in this room.': '',
    '${user.name} set the phrase labeled with "${id}" to be repeated every ${interval} minute(s).':
      '',
    '${user.name} set the phrase labeled with "${id}" to be repeated every ${interval} chat message(s).':
      '',
    '${user.name} set the Room FAQ "${topic}" to be repeated every ${interval} minute(s).': '',
    '${user.name} set the Room FAQ "${topic}" to be repeated every ${interval} chat message(s).':
      '',
    'The phrase labeled with "${id}" is not being repeated in this room.': '',
    'The text for the Room FAQ "${topic}" is already being repeated.': '',
    '${user.name} removed the repeated phrase labeled with "${id}".': '',
    'There are no repeated phrases in this room.': '',
    '${user.name} removed all repeated phrases.': '',
    'You must specify a room when using this command in PMs.': '',
  },
};
