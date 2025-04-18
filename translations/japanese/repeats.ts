import type { Translations } from '../../server/chat';

export const translations: Translations = {
  strings: {
    'Repeated phrases in ${room.title}': '${room.title}でリピートされているメッセージ',
    'There are no repeated phrases in ${room.title}.':
      '現在 ${room.title}でリピートされているメッセージはありません。',
    Action: '操作',
    Phrase: 'メッセージ',
    Identifier: 'タイトル',
    Interval: '間隔',
    'every ${minutes} minute(s)': '${minutes}分おき',
    'every ${messages} chat message(s)': 'メッセージ数: ${messages}おき',
    'Raw text': 'コード',
    Remove: '削除',
    'Remove all repeats': '全てのリピートを削除する',
    'Repeat names must include at least one alphanumeric character.':
      'IDには少なくとも1文字以上の半角英数字が必要です。',
    'You must specify an interval as a number of minutes or chat messages between 1 and 1440.':
      'リピート間隔は1440分以内の数字で指定する必要があります。',
    'The phrase labeled with "${id}" is already being repeated in this room.':
      'この部屋ではすでにタイトルが "${id}"のリピートが存在します。',
    '${user.name} set the phrase labeled with "${id}" to be repeated every ${interval} minute(s).':
      '${user.name}が "${id}"でリピートを${interval}分間隔で設定しました。',
    '${user.name} set the phrase labeled with "${id}" to be repeated every ${interval} chat message(s).':
      '${user.name}が "${id}"でリピートをメッセージ数: ${interval}の間隔で設定しました。',
    '${user.name} set the Room FAQ "${topic}" to be repeated every ${interval} minute(s).':
      '${user.name}がRoom FAQの "${topic}"のリピートを${interval}分間隔で設定しました。',
    '${user.name} set the Room FAQ "${topic}" to be repeated every ${interval} chat message(s).':
      '${user.name}がRoom FAQの "${topic}"のリピートをメッセージ数: ${interval}間隔で設定しました。',
    'The phrase labeled with "${id}" is not being repeated in this room.':
      'タイトルが "${id}"のメッセージは現在この部屋でリピートされていません。',
    'The text for the Room FAQ "${topic}" is already being repeated.':
      'Room FAQの "${topic}"はすでにリピートされています。',
    '${user.name} removed the repeated phrase labeled with "${id}".':
      '${user.name}がID: "${id}"のリピートを削除しました。',
    'There are no repeated phrases in this room.':
      '現在この部屋でリピートされているメッセージはありません。',
    '${user.name} removed all repeated phrases.': '${user.name}が全てのリピートを削除しました。',
    'You must specify a room when using this command in PMs.':
      'このコマンドをPMで使う場合は部屋を指定する必要があります。',
  },
};
