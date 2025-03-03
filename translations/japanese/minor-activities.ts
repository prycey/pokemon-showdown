import type { Translations } from '../../server/chat';

export const translations: Translations = {
  strings: {
    'The announcement has ended.': 'アナウンスが終了しました。',
    'Battles do not support announcements.': 'バトルではアナウンスが使用できません。',
    'You are not allowed to use filtered words in announcements.':
      'アナウンスでフィルタリングされた単語を使用することはできません。',
    'There is already a poll or announcement in progress in this room.':
      'すでにこの部屋で投票かアナウンスが設定されています。',
    'An announcement was started by ${user.name}.': '${user.name}がアナウンスを開始しました。',
    'There is no announcement running in this room.':
      'この部屋ではアナウンスが設定されていません。',
    'There is no timer to clear.': '消去するタイマーが見つかりません。',
    'The announcement timer was turned off.': 'アナウンスのタイマーがオフになりました。',
    'Invalid time given.': '不正な時間の引数です。',
    'The announcement timer is off.': 'アナウンスのタイマーはオフになっています。',
    'The announcement was ended by ${user.name}.': '${user.name}がアナウンスを終了しました',
    'Accepts the following commands:': 'コマンド一覧',

    'That option is not selected.': 'その選択肢は選択されていません。',
    'You have already voted for this poll.': 'すでに投票しているため、投票できません。',
    'No options selected.': '選択肢が選ばれていません。',
    'you will not be able to vote after viewing results': '投票結果を見た後は投票できません。',
    'View results': '結果を見る',
    "You can't vote after viewing results": '投票結果を見た後は投票できません。',
    'The poll has ended &ndash; scroll down to see the results':
      '投票が終了しました &ndash; 下にスクロールすると結果が見られます。',
    'Vote for ${num}': '${num}に投票する',
    'Submit your vote': '投票を確定する',
    Quiz: 'クイズ',
    Poll: '投票',
    Submit: '提出',
    ended: '終了',
    votes: '票',
    delete: '削除',
    'Poll too long.': '投票が長すぎます。',
    'Battles do not support polls.': 'バトルでは投票を使用できません。',
    'You are not allowed to use filtered words in polls.':
      'アナウンスでフィルタリングされた単語を使用することはできません。',
    'Not enough arguments for /poll new.': '/poll newで指定すべき引数が指定されていません。',
    'Too many options for poll (maximum is 8).': '選択肢が多すぎます。(上限は8です)',
    'There are duplicate options in the poll.': '投票の選択肢が重複しています。',
    '${user.name} queued a poll.': '${user.name}投票のキューを設定しました。',
    'A poll was started by ${user.name}.': '${user.name}が投票を開始しました。',
    'The queue is already empty.': 'キューはすでに空になっています。',
    'Cleared poll queue.': '投票のキューを削除しました。',
    'Room "${roomid}" not found.': 'チャットルーム"${roomid}"は見つかりませんでした。',
    'Can\'t delete poll at slot ${slotString} - "${slotString}" is not a number.':
      '${slotString}の選択肢は削除できません。"${slotString}"が数字ではありません。',
    'There is no poll in queue at slot ${slot}.': '${slot}に投票のキューは設定されていません。',
    '(${user.name} deleted the queued poll in slot ${slot}.)':
      '${user.name}が${slot}の選択肢を削除しました。',
    'There is no poll running in this room.': 'この部屋で開催中の投票はありません。',
    'To vote, specify the number of the option.':
      '投票をするには選択肢のスロット番号を指定する必要があります。',
    'Option not in poll.': '投票に選択肢がありません。',
    'The poll timer was turned off.': '投票のタイマーがオフになりました。',
    'The queued poll was started.': 'キューの投票がスタートしました。',
    'The poll timer was turned on: the poll will end in ${timeout} minute(s).':
      '投票のタイマーがオンになりました。${timeout}分後に締め切られます。',
    'The poll timer was set to ${timeout} minute(s) by ${user.name}.':
      '${user.name}が投票のタイマーを${timeout}分に設定しました。',
    'The poll timer is on and will end in ${poll.timeoutMins} minute(s).':
      '投票のタイマーはオンになっています。${poll.timeoutMins}分後に締め切られます。',
    'The poll timer is off.': '投票のタイマーはオフになっています。',
    'The poll was ended by ${user.name}.': '${user.name}が投票を終了しました。',
    'Queued polls:': 'キューに追加された投票',
    Refresh: '再読み込み',
    'No polls queued.': 'キューに投票はありません。',
    '#${number} in queue': '{number}番目',
  },
};
