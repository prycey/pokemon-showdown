import type { Translations } from '../../server/chat';

export const translations: Translations = {
  name: 'Japanese',
  strings: {
    namelocked: 'ユーザー名ロック',
    locked: 'ロック',

    autoconfirmed: '自動登録認証済み',
    trusted: '信頼あり',

    'Please follow the rules:': 'ルールを守ってください:',
    '[TN: Link to the PS rules for your language (path after pokemonshowdown.com]/rules':
      '/pages/rules-ja',
    'Global Rules': '全部屋共通ルール',
    '${room} room rules': '${room}のルール',

    '<strong>Global ranks</strong>': '<strong>グローバルユーザーランク</strong>',
    '+ <strong>Global Voice</strong> - They can use ! commands like !groups':
      '<strong>グローバルボイス</strong>(+): プレフィックスとして"/"の代わりに"!"を使ってコマンドの結果を部屋に表示することができる。',
    '% <strong>Global Driver</strong> - Like Voice, and they can also lock users and check for alts':
      '<strong>グローバルドライバー</strong>(%): ボイスに似ているが上記に加えてユーザーをロックしたり、他に使っているアカウントを確認することができる。',
    '@ <strong>Global Moderator</strong> - The above, and they can globally ban users':
      '<strong>グローバルモデレータ</strong>(@): 上記に加えてユーザーをサイト全体からBANできる。',
    '* <strong>Global Bot</strong> - An automated account that can use HTML anywhere':
      '<strong>グローバルボット</strong>(*): どこでもmuteやBANをしたり、HTMLを扱うことができる自動化されたアカウント。',
    '~ <strong>Global Administrator</strong> - They can do anything, like change what this message says and promote users globally':
      '<strong>グローバルアドミニストレーター</strong>(~): 何でもできる。この文章を編集したり、ユーザーをグローバルに昇格させたりできる。',

    '<strong>Room ranks</strong>': '<strong>日本語部屋のユーザーランク</strong>',
    "^ <strong>Prize Winner</strong> - They don't have any powers beyond a symbol.":
      '<strong>プライズウィナー</strong>(^): 部屋のシンボルや象徴であり、何も権限を持ちません。',
    '+ <strong>Voice</strong> - They can use ! commands like !groups':
      '<strong>ボイス</strong>(+): プレフィックスとして/の代わりに!を使ってコマンドの結果を部屋に表示することができる。',
    '% <strong>Driver</strong> - The above, and they can mute and warn':
      '<strong>ドライバー</strong>(%): 上記に加えて警告メッセージを出したりユーザーを短時間喋れなく(ミュート)することができる。',
    '@ <strong>Moderator</strong> - The above, and they can room ban users':
      '<strong>モデレータ</strong>(@): 上記に加えてユーザーを部屋からBANすることができる。',
    '* <strong>Bot</strong> - An automated account that can mute, warn, and use HTML':
      '<strong>ボット</strong>(*): muteやBANをしたり、HTMLを扱うことができる自動化されたアカウント。',
    '# <strong>Room Owner</strong> - They are leaders of the room and can almost totally control it':
      '<strong>ルームオーナー</strong>(#): この部屋のリーダーでほとんどのことができる。',

    '/help OR /h OR /? - Gives you help.': '/help 又は /h または /? - ヘルプを表示する',
    'For an overview of room commands, use /roomhelp':
      'チャット部屋専用のコマンドは、/roomhelpで参照できます',
    'For details of a specific command, use something like: /help data':
      '特定のコマンドのヘルプは /help [コマンド] で表示されます。例: /help data',

    COMMANDS: 'コマンド一覧',
    'BATTLE ROOM COMMANDS': '対戦チャット用コマンド',
    'OPTION COMMANDS': '設定コマンド',
    'INFORMATIONAL/RESOURCE COMMANDS': '情報コマンド',
    'DATA COMMANDS': 'ポケモンデータコマンド',
    'DRIVER COMMANDS': 'ドライバー(%)コマンド',
    'MODERATOR COMMANDS': 'モデレーター(@)コマンド',
    'ADMIN COMMANDS': 'アドミニストレーター(~)コマンド',

    '(replace / with ! to broadcast. Broadcasting requires: + % @ # ~)':
      '(/の代わりに!を使うとコマンドの結果を全員に表示することができます。全員に表示するには、+ % @ # ~ の権限が必要です。)',

    '<strong>Room punishments</strong>:': '<strong>チャット罰則一覧</strong>:',
    '<strong>warn</strong> - Displays a popup with the rules.':
      '<strong>warn</strong> - ユーザーにチャットルールのポップアップが表示されます。',
    '<strong>mute</strong> - Mutes a user (makes them unable to talk) for 7 minutes.':
      '<strong>mute</strong> - ユーザーを7分間ミュート(書き込み禁止)状態にします。',
    '<strong>hourmute</strong> - Mutes a user for 60 minutes.':
      '<strong>hourmute</strong> - ユーザーを60分間ミュートします。',
    '<strong>ban</strong> - Bans a user (makes them unable to join the room) for 2 days.':
      '<strong>ban</strong> - ユーザーを部屋から2日間BAN(追放)します。',
    '<strong>blacklist</strong> - Bans a user for a year.':
      '<strong>blacklist</strong> - ユーザーを部屋から一年間BANします。',

    '<strong>Global punishments</strong>:': '<strong>グローバル罰則一覧</strong>:',
    '<strong>lock</strong> - Locks a user (makes them unable to talk in any rooms or PM non-staff) for 2 days.':
      '<strong>lock</strong> - 2日間ロックされ、全てのチャット部屋とプライベートメッセージで発言できなくなります。(グローバルスタッフとのPM除く)',
    '<strong>weeklock</strong> - Locks a user for a week.':
      '<strong>weeklock</strong> - 1週間ロックされます',
    '<strong>namelock</strong> - Locks a user and prevents them from having a username for 2 days.':
      '<strong>namelock</strong> - 2日間ロックせれ、ユーザー名も使えなくなります。',
    '<strong>weekban</strong> - Bans a user from the room for a week.':
      '<strong>weekban</strong> - 1週間その部屋からBANされます。',
    '<strong>globalban</strong> - Globally bans (makes them unable to connect and play games) for a week.':
      '<strong>globalban</strong> - 1週間全てのチャット部屋とバトルからバンされます。',

    '<strong>Indefinite global punishments</strong>:': '<strong>無期限の懲罰</strong>:',
    '<strong>permalock</strong> - Issued for repeated instances of bad behavior and is rarely the result of a single action. ':
      '<strong>permalock</strong> - 基本的に複数回にわたる違反行為に対して取られる処置であり、一度の違反行為でこの処置が取られることは稀です。3ヶ月以上問題がなければ、',
    'These can be appealed in the <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeal</a>':
      '<a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeal</a>',
    ' forum after at least 3 months without incident.': 'にて控訴することが可能になります。',
    '<strong>permaban</strong> - Unappealable global ban typically issued for the most severe cases of offensive/inappropriate behavior.':
      '<strong>permaban</strong> - 最も深刻な違反行為に対して取られる処置であり、控訴することは不可能です。',

    '<strong>Room drivers (%)</strong> can use:': '<strong>ドライバー（%）</strong> コマンド:',
    '- /warn OR /k <em>username</em>: warn a user and show the Pok&eacute;mon Showdown rules':
      '- /warn または /k <em>ユーザー名</em>: ユーザーが警告され、当サイトのルールのウィンドウが表示されます。',
    '- /mute OR /m <em>username</em>: 7 minute mute':
      '- /mute 又は /m <em>ユーザー名</em>: 7分間ミュート状態にします。',
    '- /hourmute OR /hm <em>username</em>: 60 minute mute':
      '- /hourmute 又は /hm <em>ユーザー名</em>: 1時間ミュート状態にします。',
    '- /unmute <em>username</em>: unmute':
      '- /unmute <em>ユーザー名</em>: ユーザーのミュート状態を解除します。',
    "- /hidetext <em>username</em>: hide a user's messages from the room":
      '- /hidetext <em>ユーザー名</em>: ユーザーのメッセージをチャット部屋から取り除きます。',
    '- /announce OR /wall <em>message</em>: make an announcement':
      '- /announce 又は /wall <em>メッセージ</em>: メッセージをチャットで目立つようにアナウンスします。',
    '- /modlog <em>username</em>: search the moderator log of the room':
      '- /modlog <em>action=ユーザーID(アルファベットのみ)</em>: ユーザーに関するチャット部屋の管理ログを表示します。',
    '- /modnote <em>note</em>: add a moderator note that can be read through modlog':
      '- /modnote <em>メッセージ</em>: メッセージをチャット部屋の管理ログに追加します。',

    '<strong>Room moderators (@)</strong> can also use:':
      '<strong>モデレーター(@)</strong> コマンド:',
    '- /roomban OR /rb <em>username</em>: ban user from the room':
      '- /roomban 又は /rb <em>ユーザー名</em>: ユーザーをチャット部屋からBAN(入室禁止)します。',
    '- /roomunban <em>username</em>: unban user from the room':
      '- /roomunban <em>ユーザー名</em>: ユーザーのBAN状態を解除します。',
    '- /roomvoice <em>username</em>: appoint a room voice':
      '- /roomvoice <em>ユーザー名</em>: ユーザーにボイス(+)権限を与えます。',
    '- /roomdevoice <em>username</em>: remove a room voice':
      '- /roomdevoice <em>ユーザー名</em>: ユーザーからボイス(+)権限を外します。',
    '- /staffintro <em>intro</em>: set the staff introduction that will be displayed for all staff joining the room':
      '- /staffintro <em>イントロ</em>: スタッフがチャット部屋に入る際表示されるイントロを設定します。',
    '- /roomsettings: change a variety of room settings, namely modchat':
      '- /roomsettings: チャット部屋の設定が表示されます。modchatなどを変更することができます。',

    '<strong>Room owners (#)</strong> can also use:':
      '<strong>ルームオーナー(#)</strong> コマンド:',
    '- /roomintro <em>intro</em>: set the room introduction that will be displayed for all users joining the room':
      '- /roomintro <em>イントロ</em>: ユーザーがチャット部屋に入る際表示されるイントロを設定します。',
    '- /rules <em>rules link</em>: set the room rules link seen when using /rules':
      '- /rules <em>リンク</em>: /rules使用時に表示するチャット部屋のルールが記載されているリンクを設定します。',
    '- /roommod, /roomdriver <em>username</em>: appoint a room moderator/driver':
      '- /roommod, /roomdriver <em>ユーザー名</em>: ユーザーにモデレーターやドライバー権限を与えます。',
    '- /roomdemod, /roomdedriver <em>username</em>: remove a room moderator/driver':
      '- /roomdemod, /roomdedriver <em>ユーザー名</em>: ユーザーからモデレーターやドライバー権限を外します。',
    '- /roomdeauth <em>username</em>: remove all room auth from a user':
      '- /roomdeauth <em>ユーザー名</em>: ユーザーから全ての権限を外します。',
    '- /declare <em>message</em>: make a large blue declaration to the room':
      '- /declare <em>メッセージ</em>: メッセージを宣言して、部屋にいる全員に通知を送ります。',
    '- !htmlbox <em>HTML code</em>: broadcast a box of HTML code to the room':
      '- !htmlbox <em>HTML</em>: HTMLコード入りのboxを部屋に表示します。',
    '- !showimage <em>, [width], [height]</em>: show an image to the room':
      '- !showimage <em>[url], [width], [height]</em>: チャット部屋に画像を表示します。',
    '- /roomsettings: change a variety of room settings, including modchat, capsfilter, etc':
      '- /roomsettings: チャット部屋の設定が表示されます。modchat, capsfilterなど様々な設定を行えます。',

    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6774654/">roomauth guide</a>':
      '詳しくは<a href="https://www.smogon.com/forums/posts/6774654/">スタッフガイド(英語)</a>をご覧ください。',

    'Tournament Help:': '大会ヘルプ:',
    '- /tour create <em>format</em>, elimination: create a new single elimination tournament in the current room.':
      '- /tour create <em>対戦ルール</em>, elimination: チャット部屋にトーナメント方式の大会を開催します。',
    '- /tour create <em>format</em>, roundrobin: create a new round robin tournament in the current room.':
      '- /tour create <em>対戦ルール</em>, roundrobin: チャット部屋に総当たり方式の大会を開催します。',
    '- /tour end: forcibly end the tournament in the current room':
      '- /tour end: 開催中の大会を中止します。',
    '- /tour start: start the tournament in the current room': '- /tour start: 大会を開始します。',
    '- /tour banlist [pokemon], [talent], [...]: ban moves, abilities, Pokémon or items from being used in a tournament (it must be created first)':
      '- /tour banlist [ポケモン], [特性], [...]: 開催中の大会に指定するポケモンや特性などを使用禁止にします。',

    'More detailed help can be found in the <a href="https://www.smogon.com/forums/posts/6777489/">tournaments guide</a>':
      '詳しくは、<a href="https://www.smogon.com/forums/posts/6777489/">大会ガイド(英語)</a>をご参照ください。',

    'Your status cannot be updated while you are locked or semilocked.':
      'ロック・セミロック状態のため、ステータスを変更することはできません。',
    'Your status is too long; it must be under ${maxLength} characters.':
      'ステータスが長すぎます。 ${maxLength} 文字以内のステータスを設定してください。',
    'Your status contains a banned word.': 'ステータスに禁止ワードが入っています。',
    'Your status has been set to: ${target}.': '新しいステータスが設定されました: ${target}.',
    'You are now marked as busy.': 'ステータスが「取り込み中」になりました。',
    'You are now marked as away. Send a message or use /back to indicate you are back.':
      'ステータスが「離席中」になりました。メッセージを送信するか、/backを入力すると、ステータスが元に戻ります。',
    'You are already marked as back.': '現在「取り込み中」ではありません。',
    'You are no longer marked as busy.': '「取り込み中」状態が解除されました。',

    'You must choose a name before you can talk.':
      'チャットするには、ユーザー名を設定する必要があります。',
    "You are ${lockType} and can't talk in chat. ${lockExpiration}":
      '${lockType} されているため、チャットすることはできません。ロック期限: ${lockExpiration}',
    'Get help with [TN: your lock]this': 'ヘルプ',
    'You are muted and cannot talk in this room.':
      'ミュートされているため、チャットすることはできません。',
    'Because moderated chat is set, your account must be at least one week old and you must have won at least one ladder game to speak in this room.':
      'このチャット部屋はモデレートチャットが設定されているため、登録してから1週間以上経ってレートで1勝以上しているユーザーしかチャットすることができません。',
    'Because moderated chat is set, your account must be staff in a public room or have a global rank to speak in this room.':
      'このチャット部屋はモデレートチャットが設定されているため、公式部屋のスタッフかグローバルボイス以上のユーザーしかチャットすることができません。',
    'Because moderated chat is set, you must be of rank ${groupName} or higher to speak in this room.':
      'このチャット部屋はモデレートチャットが設定されているため、${groupName} 以上のユーザーしかチャットすることができません。',
    "Your message can't be blank.": '空白のメッセージは送ることができません。',
    'Your message is too long: ': 'メッセージが長すぎます：',
    'Your message contains banned characters.': 'メッセージに使用不可の文字が入っています。',
    'This room has slow-chat enabled. You can only talk once every ${time} seconds.':
      'このチャット部屋はスローチャットが設定されているため、 ${time} 秒以内に複数のメッセージを送ることができません。',
    'Your username contains a phrase banned by this room.':
      'ユーザー名にこの部屋の禁止ワードが入っています。',
    'Your status message contains a phrase banned by this room.':
      'ステータスにこの部屋の禁止ワードが入っています。',
    'You are ${lockType} and can only private message members of the global moderation team. ${lockExpiration}':
      '${lockType}状態のためプライベートメッセージを送信できるのはグローバルスタッフのみに制限されています。${lockExpiration}',
    'Get help with this': 'ヘルプ',
    'The user "${targetUser.name}" is locked and cannot be PMed.':
      '"${targetUser.name}"はロックされているためプライベートメッセージを送信することができません。',
    'On this server, you must be of rank ${groupName} or higher to PM users.':
      'このサーバーでは、プライベートメッセージを送信するには${groupName}以上である必要があります。',
    'This user is blocking private messages right now.':
      'このユーザーは現在プライベートメッセージをブロックしています。',
    'This ${Config.groups[targetUser.group].name} is too busy to answer private messages right now. Please contact a different staff member.':
      '${Config.groups[targetUser.group].name} は現在多忙のためプライベートメッセージに反応することができません。他のスタッフに話してみてください。',
    'If you need help, try opening a <a href="view-help-request" class="button">help ticket</a>':
      'ヘルプを求めている場合は、<a href="view-help-request" class="button">help ticket</a>にてリクエストを送信してください。',
    'You are blocking private messages right now.': 'プライベートメッセージをブロックしました。',
    'You are blocking challenges right now.': '対戦の申し込みをブロックしました。',

    'Your message contained banned words in this room.':
      'メッセージにこの部屋の禁止ワードが入っています。',
    "You can't send the same message again so soon.":
      '高頻度で同じメッセージを送ることはできません。',
    'Due to this room being a high traffic room, your message must contain at least two letters.':
      'このチャット部屋のメッセージ頻度が高いため、2文字以内のメッセージを送ることはできません。',

    'You are already blocking private messages! To unblock, use /unblockpms':
      'すでにプライベートメッセージをブロックしています。ブロックを解除するには /unblockpms を使ってください。',
    'You are now blocking private messages, except from staff and ${rank}.':
      'プライベートメッセージをブロックしました。グローバルスタッフと${rank}を持つユーザーからはブロックされません。',
    'You are now blocking private messages, except from staff and ${status} users.':
      'プライベートメッセージをブロックしました。グローバルスタッフと ${status} 状態のユーザーからはブロックされません。',
    'You are now blocking private messages, except from staff.':
      'プライベートメッセージをブロックしました。グローバルスタッフからはブロックされません。',
    'You are not blocking private messages! To block, use /blockpms':
      'プライベートメッセージをブロックしていません。ブロックしたい場合は、/blockpms を使ってください。',
    'You are no longer blocking private messages.':
      'プライベートメッセージのブロックを解除しました。',
    'You are now blocking all incoming challenge requests.': '対戦の申し込みをブロックしました。',
    'You are already blocking challenges!': 'すでに対戦の申し込みをブロックしています。',
    'You are already available for challenges!': '現在対戦の申し込みをブロックしていません。',
    'You are available for challenges from now on.': '対戦の申し込みのブロックを解除しました。',
    'You are now blocking challenges, except from staff and ${rank}.':
      '対戦の申し込みをブロックしました。グローバルスタッフと${rank}を持つユーザーからはブロックされません。',
    'You are now blocking challenges, except from staff and ${status} users.':
      '対戦の申し込みをブロックしました。グローバルスタッフと${status}状態のユーザーからはブロックされません。',
    'Staff FAQ': 'スタッフに関するよくある質問',
    'You cannot broadcast all FAQs at once.': '1回でFAQを全て表示させることはできません。',
    'A user is autoconfirmed when they have won at least one rated battle and have been registered for one week or longer. In order to prevent spamming and trolling, most chatrooms only allow autoconfirmed users to chat. If you are not autoconfirmed, you can politely PM a staff member (staff have %, @, or # in front of their username) in the room you would like to chat and ask them to disable modchat. However, staff are not obligated to disable modchat.':
      'レートが有効なバトルで1回以上勝利し、アカウントを登録してから1週間が経過するアカウントが自動承認されます(autoconfirmed)。承認されていないユーザーはグローバルスタッフ(いかなる場所でも名前の前に %、 @、 ~ がついています)以外にPMを送信することができません。また、チャットルームでは荒らしを防止するためにmodchatで承認済みのユーザーのみが発言できるようにすることができます。もしあなたが承認されていない場合はルームスタッフ(名前の前に %、@、# がついているユーザーです)にPMを送信し、modchatを無効にするように依頼することができますが、スタッフは無効化する義務はありません。',
    'How the ladder works': 'Ladderの仕組み',
    'Tiering FAQ': '',
    'Badge FAQ': '',
    'Common misconceptions about our RNG': 'RNGに関するよくある誤解',
    "To join a room tournament, click the <strong>Join!</strong> button or type the command <code>/tour join</code> in the room's chat. You can check if your team is legal for the tournament by clicking the <strong>Validate</strong> button once you've joined and selected a team. To battle your opponent in the tournament, click the <strong>Ready!</strong> button when it appears. There are two different types of room tournaments: elimination (if a user loses more than a certain number of times, they are eliminated) and round robin (all users play against each other, and the user with the most wins is the winner).":
      'チャットルームのトーナメントに参加するには、<strong>Join!</strong>のボタンをクリックするか<code>/tour join</code>を部屋のチャットで送信します。<strong>Validate</strong>をクリックすることによって選択したチームがトーナメントのルールに適合しているか確認することができます。<strong>Ready!</strong>ボタンが表示されたときにそれをクリックすると、トーナメントの対戦相手とバトルを開始します。また、2つの形式のトーナメントが存在します。Elimination(トーナメント形式。規定された回数を負け越すと強制的にトーナメントから敗退になります。)とRound Robin(総当たり。トーナメントの参加者全員とバトルをします。勝った回数が1番多いユーザーが優勝になります。)',
    'Frequently Asked Questions': 'よくある質問',

    'pages/faq': 'pages/faq-ja',
    'pages/ladderhelp': 'pages/ladderhelp-ja',
    'pages/rng': 'pages/rng-ja',
    'pages/staff': 'pages/staff-ja',
    "- We log PMs so you can report them - staff can't look at them without permission unless there's a law enforcement reason.":
      'PMはユーザーからの報告などに備えて記録されていますが、罰の執行など正当な理由がない限り閲覧することはできません。',
    '- We log IPs to enforce bans and mutes.':
      'IPアドレスはBANやミュートのために記録されています。',
    '- We use cookies to save your login info and teams, and for Google Analytics and AdSense.':
      'ログイン情報やチームの保存、Googleアナリティクスやアドセンスのためにクッキーが使用されています。',
    '- For more information, you can read our <a href="https://${Config.routes.root}/privacy">full privacy policy.</a>':
      '詳しくは、<a href="https://${Config.routes.root}/privacy-ja">プライバシーポリシー</a>をご覧ください。',
  },
};
