import type { Translations } from '../../server/chat';

export const translations: Translations = {
  strings: {
    "Hello! The global staff team would be happy to help you, but you need to explain what's going on first.":
      '你好！我们全服管理都很高兴能来帮你，但是你得先解释一下发生了什么事。',
    'Please post the information I requested above so a global staff member can come to help.':
      '请先把上述信息贴出，这样全服管理才会来帮助你。',
    'Thank you for the information, global staff will be here shortly. Please stay in the room.':
      '谢谢你提供的信息，全服管理很快就会来的。请在这个房间里等待片刻。',
    'You are banned from creating tickets': '你被禁止发布请求',
    ', because you have the same IP as ${ticket.banned}.':
      '，因为你和${ticket.banned}用了相同的IP。',
    'Request help from global staff': '向全服管理请求帮助',
    'Please <button name="login" class="button">Log In</button> to request help.':
      '请<button name="login" class="button">登录</button>来请求帮助。',
    'Request Help': '请求帮助',
    'You already have a Help ticket.': '你已经发过一个帮助请求了。',
    Back: '返回',
    "What's going on?": '发生了什么事？',
    'Global staff cannot make Help requests. This form is only for reference.':
      '全服管理不能请求帮助。以下表格可以给你参考。',
    'Abuse of Help requests can result in punishments.': '滥用请求帮助功能会导致你被惩罚。',
    'What do you want to report someone for?': '你为什么要举报他？',
    "If someone is harassing you in private messages (PMs), click the button below and a global staff member will take a look. If you are being harassed in a chatroom, please ask a room staff member to handle it. If it's a minor issue, consider using <code>/ignore [username]</code> instead.":
      '如果你在私聊中被骚扰，那么点这个按钮就能叫全服管理来查看情况。如果你是在聊天室中被骚扰的，请叫房间管理来处理。如果这并没有那么严重，那你可以考虑一下使用<code>/ignore [username]</code>。',
    "If someone is harassing you in a battle, click the button below and a global staff member will take a look. If you are being harassed in a chatroom, please ask a room staff member to handle it. If it's a minor issue, consider using <code>/ignore [username]</code> instead.":
      '如果你在对战中被骚扰，那么点这个按钮就能叫全服管理来查看情况。如果你是在聊天室中被骚扰的，请叫房间管理来处理。如果这并没有那么严重，那你可以考虑一下使用<code>/ignore [username]</code>。',
    'Please save a replay of the battle if it has ended, or provide a link to the battle if it is still ongoing.':
      '如果是已经结束的比赛，请把回放保存下来。如果是还在进行的比赛，请把链接提供给我们。',
    'If a user has an inappropriate name, click the button below and a global staff member will take a look.':
      '如果有个玩家有违规的用户名，点击这个按钮就可以叫全服管理来查看。',
    'If a user has inappropriate Pokemon nicknames, click the button below and a global staff member will take a look.':
      '如果有个玩家给他的宝可梦取了违禁的昵称，点击这个按钮就可以叫全服管理来查看。',
    'What would you like to appeal?': '你想申诉什么？',
    'Permalocks are usually for repeated incidents of poor behavior over an extended period of time, and rarely for a single severe infraction. Please keep this in mind when appealing a permalock.':
      '永久锁定通常是因为在一段时间内有多次不良行为而很少是因为一次严重违规，请记住。',
    'Please visit the <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeals</a> page to appeal your permalock.':
      '请前往<a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeals</a>来申诉你的永久锁定。',
    'If you want to appeal your lock or namelock, click the button below and a global staff member will be with you shortly.':
      '如果你想申请解除对你账号的锁定或者用户名锁定，按这个按钮，然后全服管理很快就会来了。',
    "If you are locked or namelocked under a name you don't recognize, click the button below to call a global staff member so we can check.":
      '如果你在一个不认识的名下被锁定或者用户名锁定，按下这个按钮来叫全服管理，这样我们就可以来检查一下。',
    'We automatically lock proxies and VPNs to prevent evasion of punishments and other attacks on our server. To get unlocked, you need to disable your proxy or VPN.':
      '为了防止有人逃避惩罚或者攻击我们的服务器，我们会自动锁定使用代理或者VPN的账号，关掉你的代理或者VPN就可以不被锁定。',
    'Do you have an autoconfirmed account? An account is autoconfirmed when it has won at least one rated battle and has been registered for one week or longer.':
      '你有被确认的账号吗？一个账号在注册一个星期后且至少打赢过一场计分比赛就会被视为受信任的账号。',
    'Login to your autoconfirmed account by using the <code>/nick</code> command in any chatroom, and the semilock will automatically be removed. Afterwords, you can use the <code>/nick</code> command to switch back to your current username without being semilocked again.':
      '通过<code>/nick</code>来登录一个在任何房间都受信任的账号，你的半锁定状态就会消失。此后，你可以使用<code>/nick</code>来更改你的用户名而不陷入半锁定状态。',
    'If the semilock does not go away, you can try asking a global staff member for help. Click the button below to call a global staff member.':
      '如果半锁定状态没有消失，点这个按钮来叫全服管理来帮忙。',
    "If you don't have an autoconfirmed account, you will need to contact a global staff member to appeal your semilock. Click the button below to call a global staff member.":
      '如果你没有受信任的账号，你得联系全服管理来申请解除你的锁定，点这个按钮来叫全服管理。',
    "Please PM the staff member who punished you. If you don't know who punished you, ask another room staff member; they will redirect you to the correct user. If you are banned or blacklisted from the room, use <code>/roomauth [name of room]</code> to get a list of room staff members. Bold names are online.":
      '请私信那个惩罚你的管理，如果你不知道是谁惩罚了你，那就问该房间的另一个管理员；他们会帮你找到该找的人。如果你被列入了房间的黑名单或者被ban了，使用<code>/roomauth [房间的名字]</code>来得到房间管理员的名单。那些粗体字的是在线的。',
    'Do not PM staff if you are locked (signified by the symbol <code>‽</code> in front of your username). Locks are a different type of punishment; to appeal a lock, make a help ticket by clicking the Back button and then selecting the most relevant option.':
      '如果你被锁定了，不要私信管理（你的用户名会被标记上<code>‽</code>）。锁定是一种不同类型的惩罚；想要申诉解除锁定就点击返回按钮并选择一个和你的情况最贴切的选项，来发一个帮助请求。',
    'Maybe one of these options will be helpful?': '也许这些选项能帮到你？',
    'If you lost your password, click the button below to request a password reset. We will need to clarify a few pieces of information before resetting the account. Please note that password resets are low priority and may take a while; we recommend using a new account while waiting.':
      '如果你丢了你的密码，请点击这个按钮来申请重置密码。我们会先需要查清一些信息才能帮你重置密码。请注意，密码重置是低优先级的工作，所以我们不会很快来处理；建议你先开个新的账号用用。',
    'Request a password reset': '请求重置密码',
    'If you are a room driver or up in a public room, and you need help watching the chat, one or more global staff members would be happy to assist you!':
      '如果你是一个公共房间的司机或者更高的权限，并且你需要帮助来看管这个房间，全服管理会很乐意来帮你。',
    'If your issue is not handled above, click the button below to talk to a global staff member. Please be ready to explain the situation.':
      '如果以上的选项不能解决你的问题，点击这个按钮就可以跟全服管理说话。请准备好解释相关情况。',
    'Malformed help request.': '格式错误的帮助请求。',
    'PM Harassment': '私聊中的骚扰',
    'Battle Harassment': '对战中骚扰',
    'Inappropriate Username': '不合适的用户名',
    'Inappropriate Pokemon Nicknames': '不合适的宝可梦昵称',
    Appeal: '申诉',
    'IP-Appeal': 'IP申诉',
    'ISP-Appeal': 'ISP申诉',
    'Public Room Assistance Request': '公共房间助理的请求',
    Other: '其他',
    'I want to report someone': '我想要举报某人。',
    'Someone is harassing me in PMs': '有人在私聊中骚扰我',
    'Someone is harassing me in a battle': '有人在对战中骚扰我',
    'Someone is using an offensive username': '有人使用了不合适的用户名',
    'Someone is using offensive Pokemon nicknames': '有人给他的宝可梦取了不合适的昵称',
    'I want to appeal a punishment': '我想要申请解除惩罚',
    'I want to appeal my permalock': '我想要申请解除永久锁定',
    'I want to appeal my lock': '我想要申请解除锁定',
    "I'm locked because I have the same IP as someone I don't recognize":
      '我因为用了和别人一样的IP被锁定了，但我并不认识那个人。',
    "I can't talk in chat because of my ISP": '我不能在房间里说话，因为我有网络代理',
    "I'm locked because of a proxy or VPN": '因为我开了代理或是VPN，我被锁定了',
    'Yes, I have an autoconfirmed account': '是的，我有被确认的账号',
    "No, I don't have an autoconfirmed account": '不，我没有被确认的账号',
    'Something else': '其他',
    'I lost my password': '我忘了我的密码',
    'I need global staff to help watch a public room': '我需要全服管理来帮我看管一个公共房间',
    'Report harassment in a private message (PM)': '举报私聊中的骚扰行为',
    'Report harassment in a battle': '举报对战中的骚扰行为',
    'Report an inappropriate username': '举报不合适的用户名',
    'Report inappropriate Pokemon nicknames': '举报不合适的宝可梦昵称',
    'Appeal your lock': '申请解除锁定',
    'Appeal IP lock': '申请解除IP锁定',
    'Appeal ISP lock': '申请解除代理锁定',
    'Call a Global Staff member to help': '叫全服管理来帮助你',
    'Call a Global Staff member': '叫来一个全服管理',
    'Are you sure you want to submit a ticket for ${type}?': '你确定你想要为了${type}发出请求？',
    'Yes, contact global staff': '是的，联系全服管理',
    'No, cancel': '算了，取消',
    'Help Ticket Stats': '帮助请求统计数据',
    'Help tickets': '帮助请求',
    Status: '状态',
    Creator: '创建者',
    'Ticket Type': '请求类别',
    'Claimed by': '处理者',
    Action: '处理方法',
    'And ${keys.length - count} more tickets.': '还有其他${keys.length - count}条请求',
    'View all tickets': '展示所有的请求',
    Closed: '已关闭',
    Inactive: '不活跃',
    Claimed: '已被接手',
    Unclaimed: '未被接手',
    Claim: '接手',
    View: '显示',
    Log: '记录',
    'Banned by': '封禁者',
    Username: '用户名',
    Expires: '到期时间',
    Logs: '记录',
    'And ${banKeys.length - count} more ticket bans.':
      '还有其它${banKeys.length - count}个ticket ban',
    'Ticket List': '请求的列表',
    Banned: '被封禁',
    'Ticket Stats': '帮助请求统计数据',
    'No ticket stats found.': '没有找到帮助请求数据',
    'Previous Month': '前一个月',
    'Staff Stats': '管理员统计数据',
    'Next Month': '下一个月',
    Resolved: '已解决',
    Unresolved: '未解决',
    Dead: '不活跃',
    Type: '种类',
    'Total Tickets': '所有请求',
    'Average Total Time': '平均时间',
    'Average Initial Wait': '平均最初的等待',
    'Average Total Wait': '平均总的等待时间',
    Resolutions: '决议',
    'Positive Result': '好的结果',
    'Staff ID': '管理员账号',
    'Number of Tickets': '请求数量',
    'Average Time Per Ticket': '平均每次请求所需时间',
    'This command cannot be broadcast in battles.': '这个指令在对战中不能被广播出来',
    'Report someone': '举报某人',
    'Appeal a punishment': '请求解除惩罚',
    'Request help': '请求帮助',
    "You need to choose a username before doing this. [TN: 'this' refers to opening a help ticket]":
      '你需要先取个用户名才能请求帮助。',
    "Global staff can't make tickets. They can only use the form for reference.":
      '全服管理不能发帮助请求。他们只能使用表格以供参考',
    'You already have an open ticket; please wait for global staff to respond.':
      '你已经有一个待处理的请求了；请等全服管理来处理',
    'Due to high load, you are limited to creating ${maxTickets} tickets every hour.':
      '如果频繁发出请求的话会造成我们的工作量过大，所以你每小时只能发${maxTickets}个请求',
    'Hi! Who was harassing you in private messages?': '你好！是谁在私聊中骚扰你呢？',
    'Hi! Who was harassing you, and in which battle did it happen? Please post a link to the battle or a replay of the battle.':
      '你好！是谁在对战中骚扰你？请把那场比赛的链接或者回放提供给我们',
    'Hi! Tell us the username that is inappropriate.': '你好！告诉我们是哪个用户名不合适？',
    'Hi! Which user has Pokemon with inappropriate nicknames, and in which battle? Please post a link to the battle or a replay of the battle.':
      '你好！请告诉我们是哪场对战有人的宝可梦用了不合适的昵称？把链接或者回放发给我们。',
    'Hi! Can you please explain why you feel your punishment is undeserved?':
      '你好！请你解释一下为什么你觉得你不该被惩罚。',
    'Hi! How are you connecting to Showdown right now? At home, at school, on a phone using mobile data, or some other way?':
      '你好！你现在是在用什么方法登录呢？在家里？在学校？用手机流量？还是其他方法？',
    'Hi! Which room(s) do you need us to help you watch?': '你好？你需要我们帮你看管哪个聊天室？',
    'Hi! What seems to be the problem? Tell us about any people involved,\n and if this happened in a specific place on the site.':
      '你好！你遇到了什么样的问题？请告诉我们这个问题发生的地点和有关人员。',
    'Hi! Please click the button below to give global staff permission to check PMs.':
      '你好！请点这个按钮来许可全服管理来查看你的私聊记录。',
    ' Or if ${reportTarget} is not the user you want to report, please tell us the name of the user who you want to report.':
      '如果${reportTarget}不是你想举报的人，请告诉我们你其实想举报谁。',
    'Help Ticket': '帮助请求',
    Issue: '问题',
    'A Global Staff member will be with you shortly.': '全服管理很快就来了。',
    '${this.inputUsername} does not have an open ticket.':
      '${this.inputUsername}没有待处理的请求。',
    "You closed ${ticket.creator}'s ticket.": '你关闭了${ticket.creator}的请求。',
    'The reason is too long. It cannot exceed 300 characters.':
      '这个理由太长了，字符数不能超过300。',
    "User '${this.targetUsername}' not found.": "找不到用户'${this.targetUsername}'。",
    '${targetUser ? targetUser.name : target} is not ticket banned.':
      '${targetUser ? targetUser.name : target}没有被禁止发布帮助请求。',
    "${targetUser ? targetUser.name : target}'s ticket ban is already expired.":
      '禁止 ${targetUser ? targetUser.name : target}发布请求的状态已经过期了。',
    'You are already ignoring help ticket notifications. Use /helpticket unignore to receive notifications again.':
      '你已忽略了帮助请求的通知，使用/helpticket unignore来重新接收通知。',
    'You are now ignoring help ticket notifications.': '你现在忽略了帮助请求的通知。',
    'You are not ignoring help ticket notifications. Use /helpticket ignore to stop receiving notifications.':
      '你没有忽略帮助请求的通知，用/helpticket ignore来停止接收通知。',
    'You will now receive help ticket notifications.': '你已开启接收帮助请求的通知。',
    '${target} does not have a ticket.': '${target}没有请求。',
    "You deleted ${target}'s ticket.": '你删掉了${target}的请求。',

    'Hi! All global staff members are busy right now and we apologize for the delay. ': '',
    "Please make sure you have given us the permission to check the PMs between you and the user you reported. You can also provide any relevant context; for example, a replay of a battle with the person you're reporting.":
      '',
    'Please save the replay of the battle and provide a link to it in this chat, so we can see the harassment even if the battle expires. You can save the replay by clicking on the "Upload and share replay" button once the battle has ended.':
      '',
    'Make sure you have provided the correct username, and if its meaning or why it is offensive is not obvious, please explain why it should not be allowed.':
      '',
    'Please save the replay of the battle and provide a link to it in this chat, so we can see the nicknames even if the battle expires. You can save the replay by clicking on the "Upload and share replay" button once the battle has ended.':
      '',
    'Please clearly explain why you should be unlocked and we will review it as soon as possible.':
      '',
    'Please give us all relevant information on how you are connecting to Pokémon Showdown (if it is through mobile data, at home, a school or work network, etc), and we will review your case as soon as possible.':
      '',
    'Please tell us which room you need assistance with and a global staff member will join your room as soon as possible.':
      '',
    'If your issue pertains to battle mechanics or is a question about Pokémon Showdown, you can ask in the <<help>> chatroom.':
      '',
  },
};
