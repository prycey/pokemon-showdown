import type { Translations } from '../../server/chat';

export const translations: Translations = {
  strings: {
    "Hello! The global staff team would be happy to help you, but you need to explain what's going on first.":
      'こんにちは。グローバルスタッフが喜んでお手伝いさせていただきますが、まずは何が起こっているのかを説明してください。',
    'Please post the information I requested above so a global staff member can come to help.':
      'グローバルスタッフが対応にしますので、上記でお願いした情報を投稿してください。',
    'Thank you for the information, global staff will be here shortly. Please stay in the room.':
      '情報をありがとうございます。グローバルスタッフがすぐに駆けつけます。そのままお待ちください。',
    'You are banned from creating tickets': 'チケットを作成するのは禁止されています。',
    ', because you have the same IP as ${ticket.banned}.':
      '${ticket.banned}と同じIPであるためです。',
    'Request help from global staff': 'グローバルスタッフにヘルプを要請する',
    'Please <button name="login" class="button">Log In</button> to request help.':
      'Please <button name="login" class="button">ログイン</button>してヘルプを要請する',
    'Request Help': 'ヘルプを要請する',
    'You already have a Help ticket.': 'すでにチケットを作成しています。',
    Back: '戻る',
    "What's going on?": '何が起きていますか?',
    'Global staff cannot make Help requests. This form is only for reference.':
      'グローバルスタッフはチケットを作成できません。このフォームはあくまで参考です。',
    'Abuse of Help requests can result in punishments.':
      'チケットを悪用した場合、処罰の対象となることがあります。',
    'What do you want to report someone for?': '誰を報告しますか?',
    "If someone is harassing you in private messages (PMs), click the button below and a global staff member will take a look. If you are being harassed in a chatroom, please ask a room staff member to handle it. If it's a minor issue, consider using <code>/ignore [username]</code> instead.":
      'プライベートメッセージ(PM)で嫌がらせをしている人がいたら、下のボタンをクリックすると、グローバルスタッフが対応します。チャットルームで嫌がらせを受けた場合は、ルームスタッフに対処を依頼してください。問題が小さい場合は代わりに<code>/ignire [username]</code>を使用してください。',
    "If someone is harassing you in a battle, click the button below and a global staff member will take a look. If you are being harassed in a chatroom, please ask a room staff member to handle it. If it's a minor issue, consider using <code>/ignore [username]</code> instead.":
      'バトル内のチャットで嫌がらせをしている人がいたら、下のボタンをクリックすると、グローバルスタッフが対応します。チャットルームで嫌がらせを受けた場合は、ルームスタッフに対処を依頼してください。問題が小さい場合は代わりに<code>/ignire [username]</code>を使用してください。',
    'Please save a replay of the battle if it has ended, or provide a link to the battle if it is still ongoing.':
      'バトルが終了した場合はリプレイを保存し、バトルが継続中の場合はリンクを送信してください。',
    'If a user has an inappropriate name, click the button below and a global staff member will take a look.':
      'ユーザー名が不適切な場合は、下のボタンをクリックすると、グローバルスタッフが対応します。',
    'If a user has inappropriate Pokemon nicknames, click the button below and a global staff member will take a look.':
      'ポケモンのニックネームが不適切な場合は、下のボタンをクリックすると、グローバルスタッフが対応します。',
    'What would you like to appeal?': '何を控訴したいですか?',
    'Permalocks are usually for repeated incidents of poor behavior over an extended period of time, and rarely for a single severe infraction. Please keep this in mind when appealing a permalock.':
      'Permalockは通常、長期間にわたって繰り返し行われる不良行為に対して行われるもので、1回の重大な違反行為に対して行われることは稀です。Permalockを不服する場合は、このことを念頭に置いてください。',
    'Please visit the <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeals</a> page to appeal your permalock.':
      'Permalockの異議申し立てについては、<a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeals</a> のページで行ってください。',
    'If you want to appeal your lock or namelock, click the button below and a global staff member will be with you shortly.':
      'lockやnamelockを不服とする場合は、下のボタンをクリックすると、グローバルスタッフがすぐに対応します。',
    "If you are locked or namelocked under a name you don't recognize, click the button below to call a global staff member so we can check.":
      '見覚えのない名前でlockまたはnamelockされている場合は、下のボタンをクリックして、グローバルスタッフまでご連絡ください。',
    'We automatically lock proxies and VPNs to prevent evasion of punishments and other attacks on our server. To get unlocked, you need to disable your proxy or VPN.':
      '罰則逃れやサーバーへの攻撃を防ぐため、プロキシやVPNを自動的にロックしています。ロックを解除するためには、プロキシやVPNを無効化する必要があります。',
    'Do you have an autoconfirmed account? An account is autoconfirmed when it has won at least one rated battle and has been registered for one week or longer.':
      'autoconfirmed(ac、自動承認)されたアカウントを持っていますか？レーティングバトルに1勝以上し、登録から1週間以上経過したアカウントは、自動承認されます。',
    'Login to your autoconfirmed account by using the <code>/nick</code> command in any chatroom, and the semilock will automatically be removed. Afterwards, you can use the <code>/nick</code> command to switch back to your current username without being semilocked again.':
      'チャットルームで<code>/nick</code>コマンドを使用してautoconfirmedのアカウントにログインすると、セミロックが自動的に解除されます。その後<code>/nick</code>コマンドを使用して、再度セミロックされることなく現在のユーザー名に戻すことができます。',
    'If the semilock does not go away, you can try asking a global staff member for help. Click the button below to call a global staff member.':
      'セミロックが解除されない場合は、グローバルスタッフに相談してみてください。下のボタンをクリックして、グローバルスタッフに連絡してみてください。',
    "If you don't have an autoconfirmed account, you will need to contact a global staff member to appeal your semilock. Click the button below to call a global staff member.":
      '自動承認されたアカウントをお持ちでない場合、セミロックを解除するためには、グローバルスタッフに連絡する必要があります。以下のボタンをクリックして、グローバルスタッフまでご連絡ください。',
    "Please PM the staff member who punished you. If you don't know who punished you, ask another room staff member; they will redirect you to the correct user. If you are banned or blacklisted from the room, use <code>/roomauth [name of room]</code> to get a list of room staff members. Bold names are online.":
      'あなたに罰を執行したスタッフにPMしてください。誰があなたを罰したかわからない場合は、部屋の別のスタッフに聞いてください。彼らはあなたに該当のスタッフを教えてくれます。部屋からBANまたはブラックリストに登録されている場合は、<code>/roomauth[部屋の名前]</code>を使用して部屋のスタッフのリストを表示します。太字になっている名前がオンラインです。',
    'Do not PM staff if you are locked (signified by the symbol <code>‽</code> in front of your username). Locks are a different type of punishment; to appeal a lock, make a help ticket by clicking the Back button and then selecting the most relevant option.':
      'ロックされている場合(ユーザー名の前に<code>‽</code>の記号がある場合)は、スタッフにPMを送らないでください。ロックは別の種類の罰です。ロックを控訴するには、戻るボタンをクリックし、最も適切なオプションを選択して、ヘルプチケットを作成してください。',
    'Maybe one of these options will be helpful?':
      'これらのオプションのどれかが役に立つかもしれません。',
    'If you lost your password, click the button below to request a password reset. We will need to clarify a few pieces of information before resetting the account. Please note that password resets are low priority and may take a while; we recommend using a new account while waiting.':
      'パスワードを紛失した場合は、下のボタンをクリックしてパスワードのリセットをリクエストしてください。アカウントをリセットする前に、いくつかの情報を明確に伝えてください。パスワードのリセットは優先度が低く、時間がかかる場合があることに注意してください。待機中は他のアカウントを使用することを推奨します。',
    'Request a password reset': 'パスワードのリセットをリクエストする',
    'If you are a room driver or up in a public room, and you need help watching the chat, one or more global staff members would be happy to assist you!':
      'パブリックルームでルームドライバーもしくはそれ以上の方で、チャットの監視の助けが必要な場合は、グローバルスタッフが喜んでサポートしますよ。',
    'If your issue is not handled above, click the button below to talk to a global staff member. Please be ready to explain the situation.':
      '上記で対応できない場合は、以下のボタンをクリックして、グローバルスタッフにご相談ください。その際、状況を説明できるようにお願いします。',
    'Malformed help request.': '内容が不正確です。',
    'PM Harassment': 'PMでの嫌がらせ',
    'Battle Harassment': 'バトルでの嫌がらせ',
    'Inappropriate Username': '不適切なユーザー名',
    'Inappropriate Pokemon Nicknames': 'ポケモンの不適切なニックネーム',
    Appeal: '控訴',
    'IP-Appeal': 'IPアドレスに関する控訴',
    'ISP-Appeal': 'インターネットプロパイダーに関する控訴',
    'Public Room Assistance Request': 'パブリックルームのアシストリクエスト',
    Other: 'その他',
    'I want to report someone': '誰かを通報する',
    'Someone is harassing me in PMs': '誰かが自分をPMで嫌がらせしている',
    'Someone is harassing me in a battle': '誰かが自分をバトルで嫌がらせしている',
    'Someone is using an offensive username': '不快なユーザー名のユーザーがいる',
    'Someone is using offensive Pokemon nicknames':
      'ポケモンに不快なニックネームを設定している人がいる',
    'I want to appeal a punishment': '罰則を控訴したい',
    'I want to appeal my permalock': 'Permalockを控訴したい',
    'I want to appeal my lock': 'lockを控訴したい',
    "I'm locked because I have the same IP as someone I don't recognize":
      '他の知らないユーザーと同じIPのためロックされている',
    "I can't talk in chat because of my ISP": 'プロパイダーの影響でチャットで発言できない',
    "I'm locked because of a proxy or VPN": 'VPNを使用しているためロックされています',
    'Yes, I have an autoconfirmed account': 'はい。自動承認されたアカウントを持っています',
    "No, I don't have an autoconfirmed account":
      'いいえ。自動承認されたアカウントを持っていません。',
    'I want to appeal a mute/roomban/blacklist': 'muteやroomban、blacklistについて控訴したいです',
    'Something else': 'その他',
    'I lost my password': 'パスワードを忘れた',
    'I need global staff to help watch a public room':
      'グローバルスタッフにパブリックルームの監視をお願いしたい',
    'Report harassment in a private message (PM)':
      'プライベートメッセージ(PM)での嫌がらせを通報する',
    'Report harassment in a battle': 'バトルでの嫌がらせを通報する',
    'Report an inappropriate username': '不適切なユーザー名を通報する',
    'Report inappropriate Pokemon nicknames': 'ポケモンの不適切なニックネームを通報する',
    'Appeal your lock': 'lockについて控訴する',
    'Appeal IP lock': 'IPロックを控訴する',
    'Appeal ISP lock': 'プロパイダーロックを控訴する',
    'Call a Global Staff member to help': 'グローバルスタッフに連絡し助けを求める',
    'Call a Global Staff member': 'グローバルスタッフに連絡する',
    'Are you sure you want to submit a ticket for ${type}?':
      '${type}についてチケットを発行しますか?',
    'Yes, contact global staff': 'はい、グローバルスタッフに連絡します。',
    'No, cancel': 'いいえ、取り消します',
    'Help Ticket Stats': '',
    'Help tickets': 'チケット',
    Status: '状態',
    Creator: '作成者',
    'Ticket Type': 'チケットの種類',
    Language: '言語',
    'Claimed by': '対象',
    Action: '',
    'And ${keys.length - count} more tickets.': 'その他 ${keys.length - count}のチケット',
    'View all tickets': '全てのチケットを見る',
    Closed: '終了',
    Inactive: '動向なし',
    Claimed: '',
    Unclaimed: '',
    Claim: '',
    View: '見る',
    Log: '記録',
    'Banned by': '禁止したユーザー:',
    Username: 'ユーザー名',
    Expires: '期限切れ',
    Logs: '記録',
    'And ${banKeys.length - count} more ticket bans.':
      'その他 ${banKeys.length - count}のチケット作成の禁止',
    'Ticket List': 'チケット一覧',
    Banned: '',
    'Ticket Stats': '',
    'No ticket stats found.': '',
    'Previous Month': '前の月',
    'Staff Stats': '',
    'Next Month': '次の月',
    Resolved: '',
    Unresolved: '',
    Dead: '',
    Type: '種類',
    'Total Tickets': '',
    'Average Total Time': '',
    'Average Initial Wait': '',
    'Average Total Wait': '',
    Resolutions: '',
    'Positive Result': '',
    'Staff ID': 'スタッフのID',
    'Number of Tickets': 'チケット番号',
    'Average Time Per Ticket': '',
    'This command cannot be broadcast in battles.':
      'このコマンドはバトルの中で全員に表示することはできません。',
    'Report someone': '誰かを通報する',
    'Appeal a punishment': '罰を上告する',
    'Request help': '助けを求める',
    "You need to choose a username before doing this. [TN: 'this' refers to opening a help ticket]":
      "この操作を行う前に、ユーザー名を選択する必要があります。[注意: 'この操作'はヘルプチケットを開くことを指します].",
    "Global staff can't make tickets. They can only use the form for reference.":
      'グローバルスタッフはチケットを作成することができません。このフォームはあくまで参考です。',
    'You already have an open ticket; please wait for global staff to respond.':
      'すでにチケットを作成しています。グローバルスタッフからの返信をお待ちください。',
    'Due to high load, you are limited to creating ${maxTickets} tickets every hour.':
      '負荷が高いため、1時間ごとに作成できるチケット数は${maxTickets}までに制限されています。',
    'Hi! Who was harassing you in private messages?':
      'こんにちは。あなたはPMで嫌がらせを受けていますか?',
    'Hi! Who was harassing you, and in which battle did it happen? Please post a link to the battle or a replay of the battle.':
      'こんにちは。誰が、どのバトルで嫌がらせをしたのでしょうか?バトルへのリンクやバトルのリプレイを貼ってください。',
    'Hi! Tell us the username that is inappropriate.':
      'こんにちは。誰のユーザーネームが不適切なのか教えてください。',
    'Hi! Which user has Pokemon with inappropriate nicknames, and in which battle? Please post a link to the battle or a replay of the battle.':
      'こんにちは。どのユーザーが、どのバトルで、ポケモンに不適切なニックネームを設定しているのでしょうか?バトルへのリンク、またはバトルのリプレイを投稿してください。',
    'Hi! Can you please explain why you feel your punishment is undeserved?':
      'こんにちは!あなたの罰が不相応だと思う理由を説明してもらえますか?',
    'Hi! How are you connecting to Showdown right now? At home, at school, on a phone using mobile data, or some other way?':
      'こんにちは。あなたは今、どのようにPS!に接続していますか?自宅、学校、携帯電話のモバイルデータ通信、またはその他の方法ですか?',
    'Hi! Which room(s) do you need us to help you watch?':
      'こんにちは。どのチャットルームの監視をご希望ですか?',
    'Hi! What seems to be the problem? Tell us about any people involved,\n and if this happened in a specific place on the site.':
      'こんにちは。何が問題なのでしょうか?\nまた、関係している人やサイト内のどの場所で発生したのかなどを教えてください。',
    'Hi! Please click the button below to give global staff permission to check PMs.':
      'こんにちは。下のボタンをクリックして、グローバルスタッフにPMを閲覧する許可を与えてください。',
    ' Or if ${reportTarget} is not the user you want to report, please tell us the name of the user who you want to report.':
      'また、${reportTarget}が報告したいユーザーでない場合、報告したいユーザーの名前を教えてください。',
    'Help Ticket': 'ヘルプチケット',
    Issue: '問題',
    'A Global Staff member will be with you shortly.': 'グローバルスタッフがすぐに対応します。',
    '${inputUsername} does not have an open ticket.':
      '${inputUsername}はチケットを作成していません。',
    "You closed ${ticket.creator}'s ticket.": '${ticket.creator}のチケットを終了しました。',
    'The reason is too long. It cannot exceed 300 characters.':
      '理由が長すぎます。300文字以内でまとめてください。',
    "User '${targetUsername}' not found.": "ユーザー名'${targetUsername}'が見つかりませんでした。",
    '${targetUser ? targetUser.name : target} is not ticket banned.':
      '${targetUser ? targetUser.name : target}はチケットの作成を禁止されていません。',
    "${targetUser ? targetUser.name : target}'s ticket ban is already expired.":
      '${targetUser ? targetUser.name : target}のチケット作成禁止期間は既に終了しています。',
    'You are already ignoring help ticket notifications. Use /helpticket unignore to receive notifications again.':
      'すでにヘルプチケットの通知が無効化されています。再び通知を受け取るには、/helpticket unignoreを使用してください。',
    'You are now ignoring help ticket notifications.':
      '現在ヘルプチケットの通知を無効化しています。',
    'You are not ignoring help ticket notifications. Use /helpticket ignore to stop receiving notifications.':
      'ヘルプチケットの通知を無効化していません。通知を受け取らないようにするには、/helpticket ignoreを使用してください。',
    'You will now receive help ticket notifications.': 'ヘルプチケットの通知を有効にしました。',
    '${target} does not have a ticket.': '${target}はチケットを作成していません。',
    "You deleted ${target}'s ticket.": '${target}のチケットを削除しました。',

    'Hi! All global staff members are busy right now and we apologize for the delay. ':
      'こんにちは。グローバルスタッフ一同、ただいま多忙のため、対応が遅れることをお詫び申し上げます。',
    "Please make sure you have given us the permission to check the PMs between you and the user you reported. You can also provide any relevant context; for example, a replay of a battle with the person you're reporting.":
      '報告したユーザーとあなたとの間のPMを確認する許可をスタッフに与えていることを確認してください。また、報告する相手との戦闘のリプレイなど、関連するものを提供することもできます。',
    'Please save the replay of the battle and provide a link to it in this chat, so we can see the harassment even if the battle expires. You can save the replay by clicking on the "Upload and share replay" button once the battle has ended.':
      'バトルのリプレイを保存して、この欄にリンクを貼っていただければ、バトルが終了しても嫌がらせを見ることができますので、ご協力のほどよろしくお願いします。バトル終了後に"Upload and share replay"と書かれたボタンをクリックすると、リプレイを保存することができます。',
    'Make sure you have provided the correct username, and if its meaning or why it is offensive is not obvious, please explain why it should not be allowed.':
      '正しいユーザー名を入力したことを確認し、その意味や不快な理由が明確でない場合は、許可すべきでない理由を説明してください。',
    'Please save the replay of the battle and provide a link to it in this chat, so we can see the nicknames even if the battle expires. You can save the replay by clicking on the "Upload and share replay" button once the battle has ended.':
      'バトルのリプレイを保存して、この欄にリンクを貼っていただければ、バトルが終了してもニックネームを見ることができますので、ご協力のほどよろしくお願いします。バトル終了後に"Upload and share replay"と書かれたボタンをクリックすると、リプレイを保存することができます。',
    'Please clearly explain why you should be unlocked and we will review it as soon as possible.':
      'ロック解除の理由を明確にご説明いただければ、早急に検討させていただきます。',
    'Please give us all relevant information on how you are connecting to Pokémon Showdown (if it is through mobile data, at home, a school or work network, etc), and we will review your case as soon as possible.':
      'あなたがどのようにPokémon Showdownに接続しているか(モバイルデータ経由か、自宅か、学校や職場のネットワークかなど)、関連するすべての情報をお知らせいただければ、早急に検討させていただきます。',
    'Please tell us which room you need assistance with and a global staff member will join your room as soon as possible.':
      'お手伝いが必要なお部屋をお伝えいただければ、グローバルスタッフがすぐにお部屋にお伺いします。',
    'If your issue pertains to battle mechanics or is a question about Pokémon Showdown, you can ask in the <<help>> chatroom.':
      'バトルの仕組みやPokémon Showdownに関する質問は、チャットルーム<<help>>で受け付けています。',
  },
};
