var Ws = Object.defineProperty;
var Or = e => {
  throw TypeError(e);
};
var Fe = (e, t) => {
  for (var r in t) Ws(e, r, { get: t[r], enumerable: !0 });
};
var Br = (e, t, r) => t.has(e) || Or('Cannot ' + r);
var I = (e, t, r) => (Br(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
  Lt = (e, t, r) =>
    t.has(e)
      ? Or('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  Y = (e, t, r, s) => (Br(e, t, 'write to private field'), s ? s.call(e, r) : t.set(e, r), r);
var Pr = {};
Fe(Pr, { languages: () => ps, parsers: () => xr, printers: () => wi });
var js = (e, t, r, s) => {
    if (!(e && t == null))
      return t.replaceAll ? t.replaceAll(r, s) : r.global ? t.replace(r, s) : t.split(r).join(s);
  },
  He = js;
var Dt = 'string',
  Gt = 'array',
  Kt = 'cursor',
  _t = 'indent',
  Ot = 'align',
  Wt = 'trim',
  Bt = 'group',
  It = 'fill',
  bt = 'if-break',
  jt = 'indent-if-break',
  Qt = 'line-suffix',
  Jt = 'line-suffix-boundary',
  j = 'line',
  $t = 'label',
  Rt = 'break-parent',
  fe = new Set([Kt, _t, Ot, Wt, Bt, It, bt, jt, Qt, Jt, j, $t, Rt]);
var Qs = (e, t, r) => {
    if (!(e && t == null))
      return Array.isArray(t) || typeof t == 'string' ? t[r < 0 ? t.length + r : r] : t.at(r);
  },
  G = Qs;
function Js(e) {
  if (typeof e == 'string') return Dt;
  if (Array.isArray(e)) return Gt;
  if (!e) return;
  let { type: t } = e;
  if (fe.has(t)) return t;
}
var qt = Js;
var $s = e => new Intl.ListFormat('en-US', { type: 'disjunction' }).format(e);
function Xs(e) {
  let t = e === null ? 'null' : typeof e;
  if (t !== 'string' && t !== 'object')
    return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (qt(e)) throw new Error('doc is valid.');
  let r = Object.prototype.toString.call(e);
  if (r !== '[object Object]') return `Unexpected doc '${r}'.`;
  let s = $s([...fe].map(n => `'${n}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${s}.`;
}
var Ue = class extends Error {
    name = 'InvalidDocError';
    constructor(t) {
      super(Xs(t)), (this.doc = t);
    }
  },
  Me = Ue;
function tn(e, t) {
  if (typeof e == 'string') return t(e);
  let r = new Map();
  return s(e);
  function s(i) {
    if (r.has(i)) return r.get(i);
    let a = n(i);
    return r.set(i, a), a;
  }
  function n(i) {
    switch (qt(i)) {
      case Gt:
        return t(i.map(s));
      case It:
        return t({ ...i, parts: i.parts.map(s) });
      case bt:
        return t({ ...i, breakContents: s(i.breakContents), flatContents: s(i.flatContents) });
      case Bt: {
        let { expandedStates: a, contents: o } = i;
        return (
          a ? ((a = a.map(s)), (o = a[0])) : (o = s(o)), t({ ...i, contents: o, expandedStates: a })
        );
      }
      case Ot:
      case _t:
      case jt:
      case $t:
      case Qt:
        return t({ ...i, contents: s(i.contents) });
      case Dt:
      case Kt:
      case Wt:
      case Jt:
      case j:
      case Rt:
        return t(i);
      default:
        throw new Me(i);
    }
  }
}
function Ir(e, t = Rr) {
  return tn(e, r =>
    typeof r == 'string'
      ? yt(
          t,
          r.split(`
`)
        )
      : r
  );
}
var ze = () => {},
  kt = ze,
  Ye = ze,
  qr = ze;
function B(e) {
  return kt(e), { type: _t, contents: e };
}
function en(e, t) {
  return kt(t), { type: Ot, contents: t, n: e };
}
function R(e, t = {}) {
  return (
    kt(e),
    Ye(t.expandedStates, !0),
    { type: Bt, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates }
  );
}
function Xt(e) {
  return en(-1, e);
}
function Ge(e) {
  return qr(e), { type: It, parts: e };
}
function Ke(e, t = '', r = {}) {
  return (
    kt(e), t !== '' && kt(t), { type: bt, breakContents: e, flatContents: t, groupId: r.groupId }
  );
}
var Vr = { type: Rt };
var rn = { type: j, hard: !0 },
  sn = { type: j, hard: !0, literal: !0 },
  L = { type: j },
  H = { type: j, soft: !0 },
  tt = [rn, Vr],
  Rr = [sn, Vr];
function yt(e, t) {
  kt(e), Ye(t);
  let r = [];
  for (let s = 0; s < t.length; s++) s !== 0 && r.push(e), r.push(t[s]);
  return r;
}
var me = "'",
  Fr = '"';
function nn(e, t) {
  let r = t === !0 || t === me ? me : Fr,
    s = r === me ? Fr : me,
    n = 0,
    i = 0;
  for (let a of e) a === r ? n++ : a === s && i++;
  return n > i ? s : r;
}
var de = nn;
function We(e) {
  if (typeof e != 'string') throw new TypeError('Expected a string');
  return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
var z,
  je = class {
    constructor(t) {
      Lt(this, z);
      Y(this, z, new Set(t));
    }
    getLeadingWhitespaceCount(t) {
      let r = I(this, z),
        s = 0;
      for (let n = 0; n < t.length && r.has(t.charAt(n)); n++) s++;
      return s;
    }
    getTrailingWhitespaceCount(t) {
      let r = I(this, z),
        s = 0;
      for (let n = t.length - 1; n >= 0 && r.has(t.charAt(n)); n--) s++;
      return s;
    }
    getLeadingWhitespace(t) {
      let r = this.getLeadingWhitespaceCount(t);
      return t.slice(0, r);
    }
    getTrailingWhitespace(t) {
      let r = this.getTrailingWhitespaceCount(t);
      return t.slice(t.length - r);
    }
    hasLeadingWhitespace(t) {
      return I(this, z).has(t.charAt(0));
    }
    hasTrailingWhitespace(t) {
      return I(this, z).has(G(!1, t, -1));
    }
    trimStart(t) {
      let r = this.getLeadingWhitespaceCount(t);
      return t.slice(r);
    }
    trimEnd(t) {
      let r = this.getTrailingWhitespaceCount(t);
      return t.slice(0, t.length - r);
    }
    trim(t) {
      return this.trimEnd(this.trimStart(t));
    }
    split(t, r = !1) {
      let s = `[${We([...I(this, z)].join(''))}]+`,
        n = new RegExp(r ? `(${s})` : s, 'u');
      return t.split(n);
    }
    hasWhitespaceCharacter(t) {
      let r = I(this, z);
      return Array.prototype.some.call(t, s => r.has(s));
    }
    hasNonWhitespaceCharacter(t) {
      let r = I(this, z);
      return Array.prototype.some.call(t, s => !r.has(s));
    }
    isWhitespaceOnly(t) {
      let r = I(this, z);
      return Array.prototype.every.call(t, s => r.has(s));
    }
  };
z = new WeakMap();
var Hr = je;
var an = [
    '	',
    `
`,
    '\f',
    '\r',
    ' ',
  ],
  on = new Hr(an),
  K = on;
function ln(e) {
  return Array.isArray(e) && e.length > 0;
}
var Zt = ln;
var Qe = class extends Error {
    name = 'UnexpectedNodeError';
    constructor(t, r, s = 'type') {
      super(`Unexpected ${r} node ${s}: ${JSON.stringify(t[s])}.`), (this.node = t);
    }
  },
  Ur = Qe;
function Mr(e, t, r) {
  if (e.type === 'TextNode') {
    let s = e.chars.trim();
    if (!s) return null;
    r.tag === 'style' && r.children.length === 1 && r.children[0] === e
      ? (t.chars = '')
      : (t.chars = K.split(s).join(' '));
  }
  e.type === 'ElementNode' &&
    (delete t.startTag,
    delete t.openTag,
    delete t.parts,
    delete t.endTag,
    delete t.closeTag,
    delete t.nameNode,
    delete t.body,
    delete t.blockParamNodes,
    delete t.params,
    delete t.path),
    e.type === 'Block' && (delete t.blockParamNodes, delete t.params),
    e.type === 'AttrNode' && e.name.toLowerCase() === 'class' && delete t.value,
    e.type === 'PathExpression' && (t.head = e.head.original);
}
Mr.ignoredProperties = new Set(['loc', 'selfClosing']);
var zr = Mr;
function cn(e) {
  let { node: t } = e;
  if (t.type !== 'TextNode') return;
  let { parent: r } = e;
  if (
    !(
      r.type === 'ElementNode' &&
      r.tag === 'style' &&
      r.children.length === 1 &&
      r.children[0] === t
    )
  )
    return;
  let s = r.attributes.find(n => n.type === 'AttrNode' && n.name === 'lang');
  if (!(s && !(s.value.type === 'TextNode' && (s.value.chars === '' || s.value.chars === 'css'))))
    return async n => {
      let i = await n(t.chars, { parser: 'css' });
      return i ? [tt, i, Xt(H)] : [];
    };
}
var Yr = cn;
var te = null;
function ee(e) {
  if (te !== null && typeof te.property) {
    let t = te;
    return (te = ee.prototype = null), t;
  }
  return (te = ee.prototype = e ?? Object.create(null)), new ee();
}
var un = 10;
for (let e = 0; e <= un; e++) ee();
function Je(e) {
  return ee(e);
}
function hn(e, t = 'type') {
  Je(e);
  function r(s) {
    let n = s[t],
      i = e[n];
    if (!Array.isArray(i))
      throw Object.assign(new Error(`Missing visitor keys for '${n}'.`), { node: s });
    return i;
  }
  return r;
}
var Gr = hn;
var Kr = {
  Template: ['body'],
  Block: ['body'],
  MustacheStatement: ['path', 'params', 'hash'],
  BlockStatement: ['path', 'params', 'hash', 'program', 'inverse'],
  ElementModifierStatement: ['path', 'params', 'hash'],
  CommentStatement: [],
  MustacheCommentStatement: [],
  ElementNode: ['attributes', 'modifiers', 'children', 'comments'],
  AttrNode: ['value'],
  TextNode: [],
  ConcatStatement: ['parts'],
  SubExpression: ['path', 'params', 'hash'],
  PathExpression: [],
  StringLiteral: [],
  BooleanLiteral: [],
  NumberLiteral: [],
  NullLiteral: [],
  UndefinedLiteral: [],
  Hash: ['pairs'],
  HashPair: ['value'],
};
var pn = Gr(Kr),
  Wr = pn;
function St(e) {
  return e.loc.start.offset;
}
function re(e) {
  return e.loc.end.offset;
}
var jr = new Set([
  'area',
  'base',
  'br',
  'col',
  'command',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);
function Jr(e) {
  return e.toUpperCase() === e;
}
function fn(e) {
  return (
    e.type === 'ElementNode' &&
    typeof e.tag == 'string' &&
    !e.tag.startsWith(':') &&
    (Jr(e.tag[0]) || e.tag.includes('.'))
  );
}
function mn(e) {
  return jr.has(e.toLowerCase()) && !Jr(e[0]);
}
function $e(e) {
  return e.selfClosing === !0 || mn(e.tag) || (fn(e) && e.children.every(t => ge(t)));
}
function ge(e) {
  return e.type === 'TextNode' && !/\S/u.test(e.chars);
}
function Qr(e) {
  return (
    (e == null ? void 0 : e.type) === 'MustacheCommentStatement' &&
    typeof e.value == 'string' &&
    e.value.trim() === 'prettier-ignore'
  );
}
function $r(e) {
  return (
    Qr(e.node) ||
    (e.isInArray &&
      (e.key === 'children' || e.key === 'body' || e.key === 'parts') &&
      Qr(e.siblings[e.index - 2]))
  );
}
var is = 2;
function dn(e, t, r) {
  var n, i, a, o, c, h, p, m, S;
  let { node: s } = e;
  switch (s.type) {
    case 'Block':
    case 'Program':
    case 'Template':
      return R(e.map(r, 'body'));
    case 'ElementNode': {
      let y = R(bn(e, r)),
        E =
          t.htmlWhitespaceSensitivity === 'ignore' &&
          ((n = e.next) == null ? void 0 : n.type) === 'ElementNode'
            ? H
            : '';
      if ($e(s)) return [y, E];
      let C = ['</', s.tag, '>'];
      return s.children.length === 0
        ? [y, B(C), E]
        : t.htmlWhitespaceSensitivity === 'ignore'
          ? [y, B(Xr(e, t, r)), tt, B(C), E]
          : [y, B(R(Xr(e, t, r))), B(C), E];
    }
    case 'BlockStatement':
      return wn(e)
        ? [Tn(e, r), es(e, r, t), rs(e, r, t)]
        : [vn(e, r), R([es(e, r, t), rs(e, r, t), Nn(e, r, t)])];
    case 'ElementModifierStatement':
      return R(['{{', ns(e, r), '}}']);
    case 'MustacheStatement':
      return R([be(s), ns(e, r), ye(s)]);
    case 'SubExpression':
      return R(['(', _n(e, r), H, ')']);
    case 'AttrNode': {
      let { name: y, value: E } = s,
        C = E.type === 'TextNode';
      if (C && E.chars === '' && St(E) === re(E)) return y;
      let w = C
          ? de(E.chars, t.singleQuote)
          : E.type === 'ConcatStatement'
            ? de(E.parts.map(q => (q.type === 'TextNode' ? q.chars : '')).join(''), t.singleQuote)
            : '',
        U = r('value');
      return [y, '=', w, y === 'class' && w ? R(B(U)) : U, w];
    }
    case 'ConcatStatement':
      return e.map(r, 'parts');
    case 'Hash':
      return yt(L, e.map(r, 'pairs'));
    case 'HashPair':
      return [s.key, '=', r('value')];
    case 'TextNode': {
      if (e.parent.tag === 'pre' || e.parent.tag === 'style') return s.chars;
      let y = He(!1, s.chars, '{{', String.raw`\{{`),
        E = xn(e);
      if (E) {
        if (E === 'class') {
          let X = y.trim().split(/\s+/u).join(' '),
            rt = !1,
            V = !1;
          return (
            e.parent.type === 'ConcatStatement' &&
              (((i = e.previous) == null ? void 0 : i.type) === 'MustacheStatement' &&
                /^\s/u.test(y) &&
                (rt = !0),
              ((a = e.next) == null ? void 0 : a.type) === 'MustacheStatement' &&
                /\s$/u.test(y) &&
                X !== '' &&
                (V = !0)),
            [rt ? L : '', X, V ? L : '']
          );
        }
        return Ir(y);
      }
      let C = K.isWhitespaceOnly(y),
        { isFirst: x, isLast: w } = e;
      if (t.htmlWhitespaceSensitivity !== 'ignore') {
        let X = w && e.parent.type === 'Template',
          rt = x && e.parent.type === 'Template';
        if (C) {
          if (rt || X) return '';
          let A = [L],
            nt = Vt(y);
          return nt && (A = se(nt)), w && (A = A.map(ue => Xt(ue))), A;
        }
        let V = K.getLeadingWhitespace(y),
          xt = [];
        if (V) {
          xt = [L];
          let A = Vt(V);
          A && (xt = se(A)), (y = y.slice(V.length));
        }
        let F = K.getTrailingWhitespace(y),
          st = [];
        if (F) {
          if (!X) {
            st = [L];
            let A = Vt(F);
            A && (st = se(A)), w && (st = st.map(nt => Xt(nt)));
          }
          y = y.slice(0, -F.length);
        }
        return [...xt, Ge(ss(y)), ...st];
      }
      let U = Vt(y),
        q = Pn(y),
        $ = An(y);
      if (
        (x || w) &&
        C &&
        (e.parent.type === 'Block' ||
          e.parent.type === 'ElementNode' ||
          e.parent.type === 'Template')
      )
        return '';
      C && U
        ? ((q = Math.min(U, is)), ($ = 0))
        : ((((o = e.next) == null ? void 0 : o.type) === 'BlockStatement' ||
            ((c = e.next) == null ? void 0 : c.type) === 'ElementNode') &&
            ($ = Math.max($, 1)),
          (((h = e.previous) == null ? void 0 : h.type) === 'BlockStatement' ||
            ((p = e.previous) == null ? void 0 : p.type) === 'ElementNode') &&
            (q = Math.max(q, 1)));
      let Nt = '',
        Ct = '';
      return (
        $ === 0 && ((m = e.next) == null ? void 0 : m.type) === 'MustacheStatement' && (Ct = ' '),
        q === 0 &&
          ((S = e.previous) == null ? void 0 : S.type) === 'MustacheStatement' &&
          (Nt = ' '),
        x && ((q = 0), (Nt = '')),
        w && (($ = 0), (Ct = '')),
        K.hasLeadingWhitespace(y) && (y = Nt + K.trimStart(y)),
        K.hasTrailingWhitespace(y) && (y = K.trimEnd(y) + Ct),
        [...se(q), Ge(ss(y)), ...se($)]
      );
    }
    case 'MustacheCommentStatement': {
      let y = St(s),
        E = re(s),
        C = t.originalText.charAt(y + 2) === '~',
        x = t.originalText.charAt(E - 3) === '~',
        w = s.value.includes('}}') ? '--' : '';
      return ['{{', C ? '~' : '', '!', w, s.value, w, x ? '~' : '', '}}'];
    }
    case 'PathExpression':
      return Rn(s);
    case 'BooleanLiteral':
      return String(s.value);
    case 'CommentStatement':
      return ['<!--', s.value, '-->'];
    case 'StringLiteral':
      return Ln(e, t);
    case 'NumberLiteral':
      return String(s.value);
    case 'UndefinedLiteral':
      return 'undefined';
    case 'NullLiteral':
      return 'null';
    case 'AtHead':
    case 'VarHead':
    case 'ThisHead':
    default:
      throw new Ur(s, 'Handlebars');
  }
}
function gn(e, t) {
  return St(e) - St(t);
}
function bn(e, t) {
  let { node: r } = e,
    s = ['attributes', 'modifiers', 'comments'].filter(i => Zt(r[i])),
    n = s.flatMap(i => r[i]).sort(gn);
  for (let i of s)
    e.each(({ node: a }) => {
      let o = n.indexOf(a);
      n.splice(o, 1, [L, t()]);
    }, i);
  return Zt(r.blockParams) && n.push(L, Ze(r)), ['<', r.tag, B(n), yn(r)];
}
function Xr(e, t, r) {
  let { node: s } = e,
    n = s.children.every(i => ge(i));
  return t.htmlWhitespaceSensitivity === 'ignore' && n
    ? ''
    : e.map(({ isFirst: i }) => {
        let a = r();
        return i && t.htmlWhitespaceSensitivity === 'ignore' ? [H, a] : a;
      }, 'children');
}
function yn(e) {
  return $e(e) ? Ke([H, '/>'], [' />', H]) : Ke([H, '>'], '>');
}
function be(e) {
  var s;
  let t = e.trusting ? '{{{' : '{{',
    r = (s = e.strip) != null && s.open ? '~' : '';
  return [t, r];
}
function ye(e) {
  var s;
  let t = e.trusting ? '}}}' : '}}';
  return [(s = e.strip) != null && s.close ? '~' : '', t];
}
function kn(e) {
  let t = be(e),
    r = e.openStrip.open ? '~' : '';
  return [t, r, '#'];
}
function Sn(e) {
  let t = ye(e);
  return [e.openStrip.close ? '~' : '', t];
}
function Zr(e) {
  let t = be(e),
    r = e.closeStrip.open ? '~' : '';
  return [t, r, '/'];
}
function ts(e) {
  let t = ye(e);
  return [e.closeStrip.close ? '~' : '', t];
}
function as(e) {
  let t = be(e),
    r = e.inverseStrip.open ? '~' : '';
  return [t, r];
}
function os(e) {
  let t = ye(e);
  return [e.inverseStrip.close ? '~' : '', t];
}
function vn(e, t) {
  let { node: r } = e,
    s = [],
    n = ke(e, t);
  return (
    n && s.push(R(n)),
    Zt(r.program.blockParams) && s.push(Ze(r.program)),
    R([kn(r), Xe(e, t), s.length > 0 ? B([L, yt(L, s)]) : '', H, Sn(r)])
  );
}
function En(e, t) {
  return [t.htmlWhitespaceSensitivity === 'ignore' ? tt : '', as(e), 'else', os(e)];
}
var ls = (e, t) =>
  e.head.type === 'VarHead' && t.head.type === 'VarHead' && e.head.name === t.head.name;
function wn(e) {
  var s;
  let { grandparent: t, node: r } = e;
  return (
    ((s = t == null ? void 0 : t.inverse) == null ? void 0 : s.body.length) === 1 &&
    t.inverse.body[0] === r &&
    ls(t.inverse.body[0].path, t.path)
  );
}
function Tn(e, t) {
  let { node: r, grandparent: s } = e;
  return R([
    as(s),
    ['else', ' ', s.inverse.body[0].path.head.name],
    B([L, R(ke(e, t)), ...(Zt(r.program.blockParams) ? [L, Ze(r.program)] : [])]),
    H,
    os(s),
  ]);
}
function Nn(e, t, r) {
  let { node: s } = e;
  return r.htmlWhitespaceSensitivity === 'ignore'
    ? [cs(s) ? H : tt, Zr(s), t('path'), ts(s)]
    : [Zr(s), t('path'), ts(s)];
}
function cs(e) {
  return e.type === 'BlockStatement' && e.program.body.every(t => ge(t));
}
function Cn(e) {
  return (
    us(e) &&
    e.inverse.body.length === 1 &&
    e.inverse.body[0].type === 'BlockStatement' &&
    ls(e.inverse.body[0].path, e.path)
  );
}
function us(e) {
  return e.type === 'BlockStatement' && e.inverse;
}
function es(e, t, r) {
  let { node: s } = e;
  if (cs(s)) return '';
  let n = t('program');
  return r.htmlWhitespaceSensitivity === 'ignore' ? B([tt, n]) : B(n);
}
function rs(e, t, r) {
  let { node: s } = e,
    n = t('inverse'),
    i = r.htmlWhitespaceSensitivity === 'ignore' ? [tt, n] : n;
  return Cn(s) ? i : us(s) ? [En(s, r), B(i)] : '';
}
function ss(e) {
  return yt(L, K.split(e));
}
function xn(e) {
  for (let t = 0; t < 2; t++) {
    let r = e.getParentNode(t);
    if ((r == null ? void 0 : r.type) === 'AttrNode') return r.name.toLowerCase();
  }
}
function Vt(e) {
  return (
    (e = typeof e == 'string' ? e : ''),
    e.split(`
`).length - 1
  );
}
function Pn(e) {
  e = typeof e == 'string' ? e : '';
  let t = (e.match(/^([^\S\n\r]*[\n\r])+/gu) || [])[0] || '';
  return Vt(t);
}
function An(e) {
  e = typeof e == 'string' ? e : '';
  let t = (e.match(/([\n\r][^\S\n\r]*)+$/gu) || [])[0] || '';
  return Vt(t);
}
function se(e = 0) {
  return Array.from({ length: Math.min(e, is) }).fill(tt);
}
function Ln(e, t) {
  let {
      node: { value: r },
    } = e,
    s = de(r, Dn(e) ? !t.singleQuote : t.singleQuote);
  return [s, He(!1, r, s, `\\${s}`), s];
}
function Dn(e) {
  let { ancestors: t } = e,
    r = t.findIndex(s => s.type !== 'SubExpression');
  return r !== -1 && t[r + 1].type === 'ConcatStatement' && t[r + 2].type === 'AttrNode';
}
function _n(e, t) {
  let r = Xe(e, t),
    s = ke(e, t);
  return s ? B([r, L, R(s)]) : r;
}
function ns(e, t) {
  let r = Xe(e, t),
    s = ke(e, t);
  return s ? [B([r, L, s]), H] : r;
}
function Xe(e, t) {
  return t('path');
}
function ke(e, t) {
  var n;
  let { node: r } = e,
    s = [];
  return (
    r.params.length > 0 && s.push(...e.map(t, 'params')),
    ((n = r.hash) == null ? void 0 : n.pairs.length) > 0 && s.push(t('hash')),
    s.length === 0 ? '' : yt(L, s)
  );
}
function Ze(e) {
  return ['as |', e.blockParams.join(' '), '|'];
}
var On = new Set('!"#%&\'()*+,./;<=>@[\\]^`{|}~'),
  Bn = new Set(['true', 'false', 'null', 'undefined']),
  In = (e, t) =>
    t === 0 && e.startsWith('@')
      ? !1
      : (t !== 0 && Bn.has(e)) ||
        /\s/u.test(e) ||
        /^\d/u.test(e) ||
        Array.prototype.some.call(e, r => On.has(r));
function Rn(e) {
  return e.tail.length === 0 && e.original.includes('/')
    ? e.original
    : [e.head.original, ...e.tail].map((r, s) => (In(r, s) ? `[${r}]` : r)).join('.');
}
var qn = { print: dn, massageAstNode: zr, hasPrettierIgnore: $r, getVisitorKeys: Wr, embed: Yr },
  hs = qn;
var ps = [
  {
    linguistLanguageId: 155,
    name: 'Handlebars',
    type: 'markup',
    color: '#f7931e',
    aliases: ['hbs', 'htmlbars'],
    extensions: ['.handlebars', '.hbs'],
    tmScope: 'text.html.handlebars',
    aceMode: 'handlebars',
    parsers: ['glimmer'],
    vscodeLanguageIds: ['handlebars'],
  },
];
var xr = {};
Fe(xr, { glimmer: () => Ei });
var Vn = Object.freeze([]);
function ms() {
  return Vn;
}
var Ma = ms(),
  za = ms();
var tr = Object.assign;
var fs = console;
function ds(e, t = 'unexpected unreachable branch') {
  throw (
    (fs.log('unreachable', e),
    fs.log(`${t} :: ${JSON.stringify(e)} (${e})`),
    new Error('code reached unreachable'))
  );
}
var Fn = (function () {
    var e = function (it, d, k, g) {
        for (k = k || {}, g = it.length; g--; k[it[g]] = d);
        return k;
      },
      t = [2, 44],
      r = [1, 20],
      s = [5, 14, 15, 19, 29, 34, 39, 44, 47, 48, 52, 56, 60],
      n = [1, 35],
      i = [1, 38],
      a = [1, 30],
      o = [1, 31],
      c = [1, 32],
      h = [1, 33],
      p = [1, 34],
      m = [1, 37],
      S = [14, 15, 19, 29, 34, 39, 44, 47, 48, 52, 56, 60],
      y = [14, 15, 19, 29, 34, 44, 47, 48, 52, 56, 60],
      E = [15, 18],
      C = [14, 15, 19, 29, 34, 47, 48, 52, 56, 60],
      x = [33, 64, 71, 79, 80, 81, 82, 83, 84],
      w = [23, 33, 55, 64, 67, 71, 74, 79, 80, 81, 82, 83, 84],
      U = [1, 51],
      q = [23, 33, 55, 64, 67, 71, 74, 79, 80, 81, 82, 83, 84, 86],
      $ = [2, 43],
      Nt = [55, 64, 71, 79, 80, 81, 82, 83, 84],
      Ct = [1, 58],
      X = [1, 59],
      rt = [1, 66],
      V = [33, 64, 71, 74, 79, 80, 81, 82, 83, 84],
      xt = [23, 64, 71, 79, 80, 81, 82, 83, 84],
      F = [1, 76],
      st = [64, 67, 71, 79, 80, 81, 82, 83, 84],
      A = [33, 74],
      nt = [23, 33, 55, 67, 71, 74],
      ue = [1, 106],
      De = [1, 118],
      Ar = [71, 76],
      _e = {
        trace: function () {},
        yy: {},
        symbols_: {
          error: 2,
          root: 3,
          program: 4,
          EOF: 5,
          program_repetition0: 6,
          statement: 7,
          mustache: 8,
          block: 9,
          rawBlock: 10,
          partial: 11,
          partialBlock: 12,
          content: 13,
          COMMENT: 14,
          CONTENT: 15,
          openRawBlock: 16,
          rawBlock_repetition0: 17,
          END_RAW_BLOCK: 18,
          OPEN_RAW_BLOCK: 19,
          helperName: 20,
          openRawBlock_repetition0: 21,
          openRawBlock_option0: 22,
          CLOSE_RAW_BLOCK: 23,
          openBlock: 24,
          block_option0: 25,
          closeBlock: 26,
          openInverse: 27,
          block_option1: 28,
          OPEN_BLOCK: 29,
          openBlock_repetition0: 30,
          openBlock_option0: 31,
          openBlock_option1: 32,
          CLOSE: 33,
          OPEN_INVERSE: 34,
          openInverse_repetition0: 35,
          openInverse_option0: 36,
          openInverse_option1: 37,
          openInverseChain: 38,
          OPEN_INVERSE_CHAIN: 39,
          openInverseChain_repetition0: 40,
          openInverseChain_option0: 41,
          openInverseChain_option1: 42,
          inverseAndProgram: 43,
          INVERSE: 44,
          inverseChain: 45,
          inverseChain_option0: 46,
          OPEN_ENDBLOCK: 47,
          OPEN: 48,
          expr: 49,
          mustache_repetition0: 50,
          mustache_option0: 51,
          OPEN_UNESCAPED: 52,
          mustache_repetition1: 53,
          mustache_option1: 54,
          CLOSE_UNESCAPED: 55,
          OPEN_PARTIAL: 56,
          partial_repetition0: 57,
          partial_option0: 58,
          openPartialBlock: 59,
          OPEN_PARTIAL_BLOCK: 60,
          openPartialBlock_repetition0: 61,
          openPartialBlock_option0: 62,
          sexpr: 63,
          OPEN_SEXPR: 64,
          sexpr_repetition0: 65,
          sexpr_option0: 66,
          CLOSE_SEXPR: 67,
          hash: 68,
          hash_repetition_plus0: 69,
          hashSegment: 70,
          ID: 71,
          EQUALS: 72,
          blockParams: 73,
          OPEN_BLOCK_PARAMS: 74,
          blockParams_repetition_plus0: 75,
          CLOSE_BLOCK_PARAMS: 76,
          path: 77,
          dataName: 78,
          STRING: 79,
          NUMBER: 80,
          BOOLEAN: 81,
          UNDEFINED: 82,
          NULL: 83,
          DATA: 84,
          pathSegments: 85,
          SEP: 86,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: 'error',
          5: 'EOF',
          14: 'COMMENT',
          15: 'CONTENT',
          18: 'END_RAW_BLOCK',
          19: 'OPEN_RAW_BLOCK',
          23: 'CLOSE_RAW_BLOCK',
          29: 'OPEN_BLOCK',
          33: 'CLOSE',
          34: 'OPEN_INVERSE',
          39: 'OPEN_INVERSE_CHAIN',
          44: 'INVERSE',
          47: 'OPEN_ENDBLOCK',
          48: 'OPEN',
          52: 'OPEN_UNESCAPED',
          55: 'CLOSE_UNESCAPED',
          56: 'OPEN_PARTIAL',
          60: 'OPEN_PARTIAL_BLOCK',
          64: 'OPEN_SEXPR',
          67: 'CLOSE_SEXPR',
          71: 'ID',
          72: 'EQUALS',
          74: 'OPEN_BLOCK_PARAMS',
          76: 'CLOSE_BLOCK_PARAMS',
          79: 'STRING',
          80: 'NUMBER',
          81: 'BOOLEAN',
          82: 'UNDEFINED',
          83: 'NULL',
          84: 'DATA',
          86: 'SEP',
        },
        productions_: [
          0,
          [3, 2],
          [4, 1],
          [7, 1],
          [7, 1],
          [7, 1],
          [7, 1],
          [7, 1],
          [7, 1],
          [7, 1],
          [13, 1],
          [10, 3],
          [16, 5],
          [9, 4],
          [9, 4],
          [24, 6],
          [27, 6],
          [38, 6],
          [43, 2],
          [45, 3],
          [45, 1],
          [26, 3],
          [8, 5],
          [8, 5],
          [11, 5],
          [12, 3],
          [59, 5],
          [49, 1],
          [49, 1],
          [63, 5],
          [68, 1],
          [70, 3],
          [73, 3],
          [20, 1],
          [20, 1],
          [20, 1],
          [20, 1],
          [20, 1],
          [20, 1],
          [20, 1],
          [78, 2],
          [77, 1],
          [85, 3],
          [85, 1],
          [6, 0],
          [6, 2],
          [17, 0],
          [17, 2],
          [21, 0],
          [21, 2],
          [22, 0],
          [22, 1],
          [25, 0],
          [25, 1],
          [28, 0],
          [28, 1],
          [30, 0],
          [30, 2],
          [31, 0],
          [31, 1],
          [32, 0],
          [32, 1],
          [35, 0],
          [35, 2],
          [36, 0],
          [36, 1],
          [37, 0],
          [37, 1],
          [40, 0],
          [40, 2],
          [41, 0],
          [41, 1],
          [42, 0],
          [42, 1],
          [46, 0],
          [46, 1],
          [50, 0],
          [50, 2],
          [51, 0],
          [51, 1],
          [53, 0],
          [53, 2],
          [54, 0],
          [54, 1],
          [57, 0],
          [57, 2],
          [58, 0],
          [58, 1],
          [61, 0],
          [61, 2],
          [62, 0],
          [62, 1],
          [65, 0],
          [65, 2],
          [66, 0],
          [66, 1],
          [69, 1],
          [69, 2],
          [75, 1],
          [75, 2],
        ],
        performAction: function (d, k, g, b, N, l, Pt) {
          var u = l.length - 1;
          switch (N) {
            case 1:
              return l[u - 1];
            case 2:
              this.$ = b.prepareProgram(l[u]);
              break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 20:
            case 27:
            case 28:
            case 33:
            case 34:
              this.$ = l[u];
              break;
            case 9:
              this.$ = {
                type: 'CommentStatement',
                value: b.stripComment(l[u]),
                strip: b.stripFlags(l[u], l[u]),
                loc: b.locInfo(this._$),
              };
              break;
            case 10:
              this.$ = {
                type: 'ContentStatement',
                original: l[u],
                value: l[u],
                loc: b.locInfo(this._$),
              };
              break;
            case 11:
              this.$ = b.prepareRawBlock(l[u - 2], l[u - 1], l[u], this._$);
              break;
            case 12:
              this.$ = { path: l[u - 3], params: l[u - 2], hash: l[u - 1] };
              break;
            case 13:
              this.$ = b.prepareBlock(l[u - 3], l[u - 2], l[u - 1], l[u], !1, this._$);
              break;
            case 14:
              this.$ = b.prepareBlock(l[u - 3], l[u - 2], l[u - 1], l[u], !0, this._$);
              break;
            case 15:
              this.$ = {
                open: l[u - 5],
                path: l[u - 4],
                params: l[u - 3],
                hash: l[u - 2],
                blockParams: l[u - 1],
                strip: b.stripFlags(l[u - 5], l[u]),
              };
              break;
            case 16:
            case 17:
              this.$ = {
                path: l[u - 4],
                params: l[u - 3],
                hash: l[u - 2],
                blockParams: l[u - 1],
                strip: b.stripFlags(l[u - 5], l[u]),
              };
              break;
            case 18:
              this.$ = { strip: b.stripFlags(l[u - 1], l[u - 1]), program: l[u] };
              break;
            case 19:
              var at = b.prepareBlock(l[u - 2], l[u - 1], l[u], l[u], !1, this._$),
                Yt = b.prepareProgram([at], l[u - 1].loc);
              (Yt.chained = !0), (this.$ = { strip: l[u - 2].strip, program: Yt, chain: !0 });
              break;
            case 21:
              this.$ = { path: l[u - 1], strip: b.stripFlags(l[u - 2], l[u]) };
              break;
            case 22:
            case 23:
              this.$ = b.prepareMustache(
                l[u - 3],
                l[u - 2],
                l[u - 1],
                l[u - 4],
                b.stripFlags(l[u - 4], l[u]),
                this._$
              );
              break;
            case 24:
              this.$ = {
                type: 'PartialStatement',
                name: l[u - 3],
                params: l[u - 2],
                hash: l[u - 1],
                indent: '',
                strip: b.stripFlags(l[u - 4], l[u]),
                loc: b.locInfo(this._$),
              };
              break;
            case 25:
              this.$ = b.preparePartialBlock(l[u - 2], l[u - 1], l[u], this._$);
              break;
            case 26:
              this.$ = {
                path: l[u - 3],
                params: l[u - 2],
                hash: l[u - 1],
                strip: b.stripFlags(l[u - 4], l[u]),
              };
              break;
            case 29:
              this.$ = {
                type: 'SubExpression',
                path: l[u - 3],
                params: l[u - 2],
                hash: l[u - 1],
                loc: b.locInfo(this._$),
              };
              break;
            case 30:
              this.$ = { type: 'Hash', pairs: l[u], loc: b.locInfo(this._$) };
              break;
            case 31:
              this.$ = {
                type: 'HashPair',
                key: b.id(l[u - 2]),
                value: l[u],
                loc: b.locInfo(this._$),
              };
              break;
            case 32:
              this.$ = b.id(l[u - 1]);
              break;
            case 35:
              this.$ = {
                type: 'StringLiteral',
                value: l[u],
                original: l[u],
                loc: b.locInfo(this._$),
              };
              break;
            case 36:
              this.$ = {
                type: 'NumberLiteral',
                value: Number(l[u]),
                original: Number(l[u]),
                loc: b.locInfo(this._$),
              };
              break;
            case 37:
              this.$ = {
                type: 'BooleanLiteral',
                value: l[u] === 'true',
                original: l[u] === 'true',
                loc: b.locInfo(this._$),
              };
              break;
            case 38:
              this.$ = {
                type: 'UndefinedLiteral',
                original: void 0,
                value: void 0,
                loc: b.locInfo(this._$),
              };
              break;
            case 39:
              this.$ = {
                type: 'NullLiteral',
                original: null,
                value: null,
                loc: b.locInfo(this._$),
              };
              break;
            case 40:
              this.$ = b.preparePath(!0, l[u], this._$);
              break;
            case 41:
              this.$ = b.preparePath(!1, l[u], this._$);
              break;
            case 42:
              l[u - 2].push({ part: b.id(l[u]), original: l[u], separator: l[u - 1] }),
                (this.$ = l[u - 2]);
              break;
            case 43:
              this.$ = [{ part: b.id(l[u]), original: l[u] }];
              break;
            case 44:
            case 46:
            case 48:
            case 56:
            case 62:
            case 68:
            case 76:
            case 80:
            case 84:
            case 88:
            case 92:
              this.$ = [];
              break;
            case 45:
            case 47:
            case 49:
            case 57:
            case 63:
            case 69:
            case 77:
            case 81:
            case 85:
            case 89:
            case 93:
            case 97:
            case 99:
              l[u - 1].push(l[u]);
              break;
            case 96:
            case 98:
              this.$ = [l[u]];
              break;
          }
        },
        table: [
          e([5, 14, 15, 19, 29, 34, 48, 52, 56, 60], t, { 3: 1, 4: 2, 6: 3 }),
          { 1: [3] },
          { 5: [1, 4] },
          e([5, 39, 44, 47], [2, 2], {
            7: 5,
            8: 6,
            9: 7,
            10: 8,
            11: 9,
            12: 10,
            13: 11,
            24: 15,
            27: 16,
            16: 17,
            59: 19,
            14: [1, 12],
            15: r,
            19: [1, 23],
            29: [1, 21],
            34: [1, 22],
            48: [1, 13],
            52: [1, 14],
            56: [1, 18],
            60: [1, 24],
          }),
          { 1: [2, 1] },
          e(s, [2, 45]),
          e(s, [2, 3]),
          e(s, [2, 4]),
          e(s, [2, 5]),
          e(s, [2, 6]),
          e(s, [2, 7]),
          e(s, [2, 8]),
          e(s, [2, 9]),
          {
            20: 26,
            49: 25,
            63: 27,
            64: n,
            71: i,
            77: 28,
            78: 29,
            79: a,
            80: o,
            81: c,
            82: h,
            83: p,
            84: m,
            85: 36,
          },
          {
            20: 26,
            49: 39,
            63: 27,
            64: n,
            71: i,
            77: 28,
            78: 29,
            79: a,
            80: o,
            81: c,
            82: h,
            83: p,
            84: m,
            85: 36,
          },
          e(S, t, { 6: 3, 4: 40 }),
          e(y, t, { 6: 3, 4: 41 }),
          e(E, [2, 46], { 17: 42 }),
          {
            20: 26,
            49: 43,
            63: 27,
            64: n,
            71: i,
            77: 28,
            78: 29,
            79: a,
            80: o,
            81: c,
            82: h,
            83: p,
            84: m,
            85: 36,
          },
          e(C, t, { 6: 3, 4: 44 }),
          e([5, 14, 15, 18, 19, 29, 34, 39, 44, 47, 48, 52, 56, 60], [2, 10]),
          { 20: 45, 71: i, 77: 28, 78: 29, 79: a, 80: o, 81: c, 82: h, 83: p, 84: m, 85: 36 },
          { 20: 46, 71: i, 77: 28, 78: 29, 79: a, 80: o, 81: c, 82: h, 83: p, 84: m, 85: 36 },
          { 20: 47, 71: i, 77: 28, 78: 29, 79: a, 80: o, 81: c, 82: h, 83: p, 84: m, 85: 36 },
          {
            20: 26,
            49: 48,
            63: 27,
            64: n,
            71: i,
            77: 28,
            78: 29,
            79: a,
            80: o,
            81: c,
            82: h,
            83: p,
            84: m,
            85: 36,
          },
          e(x, [2, 76], { 50: 49 }),
          e(w, [2, 27]),
          e(w, [2, 28]),
          e(w, [2, 33]),
          e(w, [2, 34]),
          e(w, [2, 35]),
          e(w, [2, 36]),
          e(w, [2, 37]),
          e(w, [2, 38]),
          e(w, [2, 39]),
          {
            20: 26,
            49: 50,
            63: 27,
            64: n,
            71: i,
            77: 28,
            78: 29,
            79: a,
            80: o,
            81: c,
            82: h,
            83: p,
            84: m,
            85: 36,
          },
          e(w, [2, 41], { 86: U }),
          { 71: i, 85: 52 },
          e(q, $),
          e(Nt, [2, 80], { 53: 53 }),
          { 25: 54, 38: 56, 39: Ct, 43: 57, 44: X, 45: 55, 47: [2, 52] },
          { 28: 60, 43: 61, 44: X, 47: [2, 54] },
          { 13: 63, 15: r, 18: [1, 62] },
          e(x, [2, 84], { 57: 64 }),
          { 26: 65, 47: rt },
          e(V, [2, 56], { 30: 67 }),
          e(V, [2, 62], { 35: 68 }),
          e(xt, [2, 48], { 21: 69 }),
          e(x, [2, 88], { 61: 70 }),
          {
            20: 26,
            33: [2, 78],
            49: 72,
            51: 71,
            63: 27,
            64: n,
            68: 73,
            69: 74,
            70: 75,
            71: F,
            77: 28,
            78: 29,
            79: a,
            80: o,
            81: c,
            82: h,
            83: p,
            84: m,
            85: 36,
          },
          e(st, [2, 92], { 65: 77 }),
          { 71: [1, 78] },
          e(w, [2, 40], { 86: U }),
          {
            20: 26,
            49: 80,
            54: 79,
            55: [2, 82],
            63: 27,
            64: n,
            68: 81,
            69: 74,
            70: 75,
            71: F,
            77: 28,
            78: 29,
            79: a,
            80: o,
            81: c,
            82: h,
            83: p,
            84: m,
            85: 36,
          },
          { 26: 82, 47: rt },
          { 47: [2, 53] },
          e(S, t, { 6: 3, 4: 83 }),
          { 47: [2, 20] },
          { 20: 84, 71: i, 77: 28, 78: 29, 79: a, 80: o, 81: c, 82: h, 83: p, 84: m, 85: 36 },
          e(C, t, { 6: 3, 4: 85 }),
          { 26: 86, 47: rt },
          { 47: [2, 55] },
          e(s, [2, 11]),
          e(E, [2, 47]),
          {
            20: 26,
            33: [2, 86],
            49: 88,
            58: 87,
            63: 27,
            64: n,
            68: 89,
            69: 74,
            70: 75,
            71: F,
            77: 28,
            78: 29,
            79: a,
            80: o,
            81: c,
            82: h,
            83: p,
            84: m,
            85: 36,
          },
          e(s, [2, 25]),
          { 20: 90, 71: i, 77: 28, 78: 29, 79: a, 80: o, 81: c, 82: h, 83: p, 84: m, 85: 36 },
          e(A, [2, 58], {
            20: 26,
            63: 27,
            77: 28,
            78: 29,
            85: 36,
            69: 74,
            70: 75,
            31: 91,
            49: 92,
            68: 93,
            64: n,
            71: F,
            79: a,
            80: o,
            81: c,
            82: h,
            83: p,
            84: m,
          }),
          e(A, [2, 64], {
            20: 26,
            63: 27,
            77: 28,
            78: 29,
            85: 36,
            69: 74,
            70: 75,
            36: 94,
            49: 95,
            68: 96,
            64: n,
            71: F,
            79: a,
            80: o,
            81: c,
            82: h,
            83: p,
            84: m,
          }),
          {
            20: 26,
            22: 97,
            23: [2, 50],
            49: 98,
            63: 27,
            64: n,
            68: 99,
            69: 74,
            70: 75,
            71: F,
            77: 28,
            78: 29,
            79: a,
            80: o,
            81: c,
            82: h,
            83: p,
            84: m,
            85: 36,
          },
          {
            20: 26,
            33: [2, 90],
            49: 101,
            62: 100,
            63: 27,
            64: n,
            68: 102,
            69: 74,
            70: 75,
            71: F,
            77: 28,
            78: 29,
            79: a,
            80: o,
            81: c,
            82: h,
            83: p,
            84: m,
            85: 36,
          },
          { 33: [1, 103] },
          e(x, [2, 77]),
          { 33: [2, 79] },
          e([23, 33, 55, 67, 74], [2, 30], { 70: 104, 71: [1, 105] }),
          e(nt, [2, 96]),
          e(q, $, { 72: ue }),
          {
            20: 26,
            49: 108,
            63: 27,
            64: n,
            66: 107,
            67: [2, 94],
            68: 109,
            69: 74,
            70: 75,
            71: F,
            77: 28,
            78: 29,
            79: a,
            80: o,
            81: c,
            82: h,
            83: p,
            84: m,
            85: 36,
          },
          e(q, [2, 42]),
          { 55: [1, 110] },
          e(Nt, [2, 81]),
          { 55: [2, 83] },
          e(s, [2, 13]),
          { 38: 56, 39: Ct, 43: 57, 44: X, 45: 112, 46: 111, 47: [2, 74] },
          e(V, [2, 68], { 40: 113 }),
          { 47: [2, 18] },
          e(s, [2, 14]),
          { 33: [1, 114] },
          e(x, [2, 85]),
          { 33: [2, 87] },
          { 33: [1, 115] },
          { 32: 116, 33: [2, 60], 73: 117, 74: De },
          e(V, [2, 57]),
          e(A, [2, 59]),
          { 33: [2, 66], 37: 119, 73: 120, 74: De },
          e(V, [2, 63]),
          e(A, [2, 65]),
          { 23: [1, 121] },
          e(xt, [2, 49]),
          { 23: [2, 51] },
          { 33: [1, 122] },
          e(x, [2, 89]),
          { 33: [2, 91] },
          e(s, [2, 22]),
          e(nt, [2, 97]),
          { 72: ue },
          {
            20: 26,
            49: 123,
            63: 27,
            64: n,
            71: i,
            77: 28,
            78: 29,
            79: a,
            80: o,
            81: c,
            82: h,
            83: p,
            84: m,
            85: 36,
          },
          { 67: [1, 124] },
          e(st, [2, 93]),
          { 67: [2, 95] },
          e(s, [2, 23]),
          { 47: [2, 19] },
          { 47: [2, 75] },
          e(A, [2, 70], {
            20: 26,
            63: 27,
            77: 28,
            78: 29,
            85: 36,
            69: 74,
            70: 75,
            41: 125,
            49: 126,
            68: 127,
            64: n,
            71: F,
            79: a,
            80: o,
            81: c,
            82: h,
            83: p,
            84: m,
          }),
          e(s, [2, 24]),
          e(s, [2, 21]),
          { 33: [1, 128] },
          { 33: [2, 61] },
          { 71: [1, 130], 75: 129 },
          { 33: [1, 131] },
          { 33: [2, 67] },
          e(E, [2, 12]),
          e(C, [2, 26]),
          e(nt, [2, 31]),
          e(w, [2, 29]),
          { 33: [2, 72], 42: 132, 73: 133, 74: De },
          e(V, [2, 69]),
          e(A, [2, 71]),
          e(S, [2, 15]),
          { 71: [1, 135], 76: [1, 134] },
          e(Ar, [2, 98]),
          e(y, [2, 16]),
          { 33: [1, 136] },
          { 33: [2, 73] },
          { 33: [2, 32] },
          e(Ar, [2, 99]),
          e(S, [2, 17]),
        ],
        defaultActions: {
          4: [2, 1],
          55: [2, 53],
          57: [2, 20],
          61: [2, 55],
          73: [2, 79],
          81: [2, 83],
          85: [2, 18],
          89: [2, 87],
          99: [2, 51],
          102: [2, 91],
          109: [2, 95],
          111: [2, 19],
          112: [2, 75],
          117: [2, 61],
          120: [2, 67],
          133: [2, 73],
          134: [2, 32],
        },
        parseError: function (d, k) {
          if (k.recoverable) this.trace(d);
          else {
            var g = new Error(d);
            throw ((g.hash = k), g);
          }
        },
        parse: function (d) {
          var k = this,
            g = [0],
            b = [],
            N = [null],
            l = [],
            Pt = this.table,
            u = '',
            at = 0,
            Yt = 0,
            Lr = 0,
            zs = 2,
            Dr = 1,
            Ys = l.slice.call(arguments, 1),
            P = Object.create(this.lexer),
            dt = { yy: {} };
          for (var Be in this.yy)
            Object.prototype.hasOwnProperty.call(this.yy, Be) && (dt.yy[Be] = this.yy[Be]);
          P.setInput(d, dt.yy),
            (dt.yy.lexer = P),
            (dt.yy.parser = this),
            typeof P.yylloc > 'u' && (P.yylloc = {});
          var Ie = P.yylloc;
          l.push(Ie);
          var Gs = P.options && P.options.ranges;
          typeof dt.yy.parseError == 'function'
            ? (this.parseError = dt.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function Ti(W) {
            (g.length = g.length - 2 * W), (N.length = N.length - W), (l.length = l.length - W);
          }
          for (
            var Ks = function () {
                var W;
                return (W = P.lex() || Dr), typeof W != 'number' && (W = k.symbols_[W] || W), W;
              },
              O,
              Re,
              gt,
              M,
              Ni,
              qe,
              At = {},
              he,
              Z,
              _r,
              pe;
            ;

          ) {
            if (
              ((gt = g[g.length - 1]),
              this.defaultActions[gt]
                ? (M = this.defaultActions[gt])
                : ((O === null || typeof O > 'u') && (O = Ks()), (M = Pt[gt] && Pt[gt][O])),
              typeof M > 'u' || !M.length || !M[0])
            ) {
              var Ve = '';
              pe = [];
              for (he in Pt[gt])
                this.terminals_[he] && he > zs && pe.push("'" + this.terminals_[he] + "'");
              P.showPosition
                ? (Ve =
                    'Parse error on line ' +
                    (at + 1) +
                    `:
` +
                    P.showPosition() +
                    `
Expecting ` +
                    pe.join(', ') +
                    ", got '" +
                    (this.terminals_[O] || O) +
                    "'")
                : (Ve =
                    'Parse error on line ' +
                    (at + 1) +
                    ': Unexpected ' +
                    (O == Dr ? 'end of input' : "'" + (this.terminals_[O] || O) + "'")),
                this.parseError(Ve, {
                  text: P.match,
                  token: this.terminals_[O] || O,
                  line: P.yylineno,
                  loc: Ie,
                  expected: pe,
                });
            }
            if (M[0] instanceof Array && M.length > 1)
              throw new Error(
                'Parse Error: multiple actions possible at state: ' + gt + ', token: ' + O
              );
            switch (M[0]) {
              case 1:
                g.push(O),
                  N.push(P.yytext),
                  l.push(P.yylloc),
                  g.push(M[1]),
                  (O = null),
                  Re
                    ? ((O = Re), (Re = null))
                    : ((Yt = P.yyleng),
                      (u = P.yytext),
                      (at = P.yylineno),
                      (Ie = P.yylloc),
                      Lr > 0 && Lr--);
                break;
              case 2:
                if (
                  ((Z = this.productions_[M[1]][1]),
                  (At.$ = N[N.length - Z]),
                  (At._$ = {
                    first_line: l[l.length - (Z || 1)].first_line,
                    last_line: l[l.length - 1].last_line,
                    first_column: l[l.length - (Z || 1)].first_column,
                    last_column: l[l.length - 1].last_column,
                  }),
                  Gs && (At._$.range = [l[l.length - (Z || 1)].range[0], l[l.length - 1].range[1]]),
                  (qe = this.performAction.apply(At, [u, Yt, at, dt.yy, M[1], N, l].concat(Ys))),
                  typeof qe < 'u')
                )
                  return qe;
                Z &&
                  ((g = g.slice(0, -1 * Z * 2)),
                  (N = N.slice(0, -1 * Z)),
                  (l = l.slice(0, -1 * Z))),
                  g.push(this.productions_[M[1]][0]),
                  N.push(At.$),
                  l.push(At._$),
                  (_r = Pt[g[g.length - 2]][g[g.length - 1]]),
                  g.push(_r);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        },
      },
      Ms = (function () {
        var it = {
          EOF: 1,
          parseError: function (k, g) {
            if (this.yy.parser) this.yy.parser.parseError(k, g);
            else throw new Error(k);
          },
          setInput: function (d, k) {
            return (
              (this.yy = k || this.yy || {}),
              (this._input = d),
              (this._more = this._backtrack = this.done = !1),
              (this.yylineno = this.yyleng = 0),
              (this.yytext = this.matched = this.match = ''),
              (this.conditionStack = ['INITIAL']),
              (this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }),
              this.options.ranges && (this.yylloc.range = [0, 0]),
              (this.offset = 0),
              this
            );
          },
          input: function () {
            var d = this._input[0];
            (this.yytext += d),
              this.yyleng++,
              this.offset++,
              (this.match += d),
              (this.matched += d);
            var k = d.match(/(?:\r\n?|\n).*/g);
            return (
              k ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++,
              this.options.ranges && this.yylloc.range[1]++,
              (this._input = this._input.slice(1)),
              d
            );
          },
          unput: function (d) {
            var k = d.length,
              g = d.split(/(?:\r\n?|\n)/g);
            (this._input = d + this._input),
              (this.yytext = this.yytext.substr(0, this.yytext.length - k)),
              (this.offset -= k);
            var b = this.match.split(/(?:\r\n?|\n)/g);
            (this.match = this.match.substr(0, this.match.length - 1)),
              (this.matched = this.matched.substr(0, this.matched.length - 1)),
              g.length - 1 && (this.yylineno -= g.length - 1);
            var N = this.yylloc.range;
            return (
              (this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: g
                  ? (g.length === b.length ? this.yylloc.first_column : 0) +
                    b[b.length - g.length].length -
                    g[0].length
                  : this.yylloc.first_column - k,
              }),
              this.options.ranges && (this.yylloc.range = [N[0], N[0] + this.yyleng - k]),
              (this.yyleng = this.yytext.length),
              this
            );
          },
          more: function () {
            return (this._more = !0), this;
          },
          reject: function () {
            if (this.options.backtrack_lexer) this._backtrack = !0;
            else
              return this.parseError(
                'Lexical error on line ' +
                  (this.yylineno + 1) +
                  `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` +
                  this.showPosition(),
                { text: '', token: null, line: this.yylineno }
              );
            return this;
          },
          less: function (d) {
            this.unput(this.match.slice(d));
          },
          pastInput: function () {
            var d = this.matched.substr(0, this.matched.length - this.match.length);
            return (d.length > 20 ? '...' : '') + d.substr(-20).replace(/\n/g, '');
          },
          upcomingInput: function () {
            var d = this.match;
            return (
              d.length < 20 && (d += this._input.substr(0, 20 - d.length)),
              (d.substr(0, 20) + (d.length > 20 ? '...' : '')).replace(/\n/g, '')
            );
          },
          showPosition: function () {
            var d = this.pastInput(),
              k = new Array(d.length + 1).join('-');
            return (
              d +
              this.upcomingInput() +
              `
` +
              k +
              '^'
            );
          },
          test_match: function (d, k) {
            var g, b, N;
            if (
              (this.options.backtrack_lexer &&
                ((N = {
                  yylineno: this.yylineno,
                  yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column,
                  },
                  yytext: this.yytext,
                  match: this.match,
                  matches: this.matches,
                  matched: this.matched,
                  yyleng: this.yyleng,
                  offset: this.offset,
                  _more: this._more,
                  _input: this._input,
                  yy: this.yy,
                  conditionStack: this.conditionStack.slice(0),
                  done: this.done,
                }),
                this.options.ranges && (N.yylloc.range = this.yylloc.range.slice(0))),
              (b = d[0].match(/(?:\r\n?|\n).*/g)),
              b && (this.yylineno += b.length),
              (this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: b
                  ? b[b.length - 1].length - b[b.length - 1].match(/\r?\n?/)[0].length
                  : this.yylloc.last_column + d[0].length,
              }),
              (this.yytext += d[0]),
              (this.match += d[0]),
              (this.matches = d),
              (this.yyleng = this.yytext.length),
              this.options.ranges &&
                (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
              (this._more = !1),
              (this._backtrack = !1),
              (this._input = this._input.slice(d[0].length)),
              (this.matched += d[0]),
              (g = this.performAction.call(
                this,
                this.yy,
                this,
                k,
                this.conditionStack[this.conditionStack.length - 1]
              )),
              this.done && this._input && (this.done = !1),
              g)
            )
              return g;
            if (this._backtrack) {
              for (var l in N) this[l] = N[l];
              return !1;
            }
            return !1;
          },
          next: function () {
            if (this.done) return this.EOF;
            this._input || (this.done = !0);
            var d, k, g, b;
            this._more || ((this.yytext = ''), (this.match = ''));
            for (var N = this._currentRules(), l = 0; l < N.length; l++)
              if (
                ((g = this._input.match(this.rules[N[l]])), g && (!k || g[0].length > k[0].length))
              ) {
                if (((k = g), (b = l), this.options.backtrack_lexer)) {
                  if (((d = this.test_match(g, N[l])), d !== !1)) return d;
                  if (this._backtrack) {
                    k = !1;
                    continue;
                  } else return !1;
                } else if (!this.options.flex) break;
              }
            return k
              ? ((d = this.test_match(k, N[b])), d !== !1 ? d : !1)
              : this._input === ''
                ? this.EOF
                : this.parseError(
                    'Lexical error on line ' +
                      (this.yylineno + 1) +
                      `. Unrecognized text.
` +
                      this.showPosition(),
                    { text: '', token: null, line: this.yylineno }
                  );
          },
          lex: function () {
            var k = this.next();
            return k || this.lex();
          },
          begin: function (k) {
            this.conditionStack.push(k);
          },
          popState: function () {
            var k = this.conditionStack.length - 1;
            return k > 0 ? this.conditionStack.pop() : this.conditionStack[0];
          },
          _currentRules: function () {
            return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]
              ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
              : this.conditions.INITIAL.rules;
          },
          topState: function (k) {
            return (
              (k = this.conditionStack.length - 1 - Math.abs(k || 0)),
              k >= 0 ? this.conditionStack[k] : 'INITIAL'
            );
          },
          pushState: function (k) {
            this.begin(k);
          },
          stateStackSize: function () {
            return this.conditionStack.length;
          },
          options: {},
          performAction: function (k, g, b, N) {
            function l(u, at) {
              return (g.yytext = g.yytext.substring(u, g.yyleng - at + u));
            }
            var Pt = N;
            switch (b) {
              case 0:
                if (
                  (g.yytext.slice(-2) === '\\\\'
                    ? (l(0, 1), this.begin('mu'))
                    : g.yytext.slice(-1) === '\\'
                      ? (l(0, 1), this.begin('emu'))
                      : this.begin('mu'),
                  g.yytext)
                )
                  return 15;
                break;
              case 1:
                return 15;
              case 2:
                return this.popState(), 15;
                break;
              case 3:
                return this.begin('raw'), 15;
                break;
              case 4:
                return (
                  this.popState(),
                  this.conditionStack[this.conditionStack.length - 1] === 'raw' ? 15 : (l(5, 9), 18)
                );
              case 5:
                return 15;
              case 6:
                return this.popState(), 14;
                break;
              case 7:
                return 64;
              case 8:
                return 67;
              case 9:
                return 19;
              case 10:
                return this.popState(), this.begin('raw'), 23;
                break;
              case 11:
                return 56;
              case 12:
                return 60;
              case 13:
                return 29;
              case 14:
                return 47;
              case 15:
                return this.popState(), 44;
                break;
              case 16:
                return this.popState(), 44;
                break;
              case 17:
                return 34;
              case 18:
                return 39;
              case 19:
                return 52;
              case 20:
                return 48;
              case 21:
                this.unput(g.yytext), this.popState(), this.begin('com');
                break;
              case 22:
                return this.popState(), 14;
                break;
              case 23:
                return 48;
              case 24:
                return 72;
              case 25:
                return 71;
              case 26:
                return 71;
              case 27:
                return 86;
              case 28:
                break;
              case 29:
                return this.popState(), 55;
                break;
              case 30:
                return this.popState(), 33;
                break;
              case 31:
                return (g.yytext = l(1, 2).replace(/\\"/g, '"')), 79;
                break;
              case 32:
                return (g.yytext = l(1, 2).replace(/\\'/g, "'")), 79;
                break;
              case 33:
                return 84;
              case 34:
                return 81;
              case 35:
                return 81;
              case 36:
                return 82;
              case 37:
                return 83;
              case 38:
                return 80;
              case 39:
                return 74;
              case 40:
                return 76;
              case 41:
                return 71;
              case 42:
                return (g.yytext = g.yytext.replace(/\\([\\\]])/g, '$1')), 71;
                break;
              case 43:
                return 'INVALID';
              case 44:
                return 5;
            }
          },
          rules: [
            /^(?:[^\x00]*?(?=(\{\{)))/,
            /^(?:[^\x00]+)/,
            /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
            /^(?:\{\{\{\{(?=[^/]))/,
            /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
            /^(?:[^\x00]+?(?=(\{\{\{\{)))/,
            /^(?:[\s\S]*?--(~)?\}\})/,
            /^(?:\()/,
            /^(?:\))/,
            /^(?:\{\{\{\{)/,
            /^(?:\}\}\}\})/,
            /^(?:\{\{(~)?>)/,
            /^(?:\{\{(~)?#>)/,
            /^(?:\{\{(~)?#\*?)/,
            /^(?:\{\{(~)?\/)/,
            /^(?:\{\{(~)?\^\s*(~)?\}\})/,
            /^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
            /^(?:\{\{(~)?\^)/,
            /^(?:\{\{(~)?\s*else\b)/,
            /^(?:\{\{(~)?\{)/,
            /^(?:\{\{(~)?&)/,
            /^(?:\{\{(~)?!--)/,
            /^(?:\{\{(~)?![\s\S]*?\}\})/,
            /^(?:\{\{(~)?\*?)/,
            /^(?:=)/,
            /^(?:\.\.)/,
            /^(?:\.(?=([=~}\s\/.)|])))/,
            /^(?:[\/.])/,
            /^(?:\s+)/,
            /^(?:\}(~)?\}\})/,
            /^(?:(~)?\}\})/,
            /^(?:"(\\["]|[^"])*")/,
            /^(?:'(\\[']|[^'])*')/,
            /^(?:@)/,
            /^(?:true(?=([~}\s)])))/,
            /^(?:false(?=([~}\s)])))/,
            /^(?:undefined(?=([~}\s)])))/,
            /^(?:null(?=([~}\s)])))/,
            /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
            /^(?:as\s+\|)/,
            /^(?:\|)/,
            /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
            /^(?:\[(\\\]|[^\]])*\])/,
            /^(?:.)/,
            /^(?:$)/,
          ],
          conditions: {
            mu: {
              rules: [
                7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
                29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              ],
              inclusive: !1,
            },
            emu: { rules: [2], inclusive: !1 },
            com: { rules: [6], inclusive: !1 },
            raw: { rules: [3, 4, 5], inclusive: !1 },
            INITIAL: { rules: [0, 1, 44], inclusive: !0 },
          },
        };
        return it;
      })();
    _e.lexer = Ms;
    function Oe() {
      this.yy = {};
    }
    return (Oe.prototype = _e), (_e.Parser = Oe), new Oe();
  })(),
  Se = Fn;
var er = [
  'description',
  'fileName',
  'lineNumber',
  'endLineNumber',
  'message',
  'name',
  'number',
  'stack',
];
function rr(e, t) {
  var r = t && t.loc,
    s,
    n,
    i,
    a;
  r &&
    ((s = r.start.line),
    (n = r.end.line),
    (i = r.start.column),
    (a = r.end.column),
    (e += ' - ' + s + ':' + i));
  for (var o = Error.prototype.constructor.call(this, e), c = 0; c < er.length; c++)
    this[er[c]] = o[er[c]];
  Error.captureStackTrace && Error.captureStackTrace(this, rr);
  try {
    r &&
      ((this.lineNumber = s),
      (this.endLineNumber = n),
      Object.defineProperty
        ? (Object.defineProperty(this, 'column', { value: i, enumerable: !0 }),
          Object.defineProperty(this, 'endColumn', { value: a, enumerable: !0 }))
        : ((this.column = i), (this.endColumn = a)));
  } catch {}
}
rr.prototype = new Error();
var ot = rr;
function ve() {
  this.parents = [];
}
ve.prototype = {
  constructor: ve,
  mutating: !1,
  acceptKey: function (e, t) {
    var r = this.accept(e[t]);
    if (this.mutating) {
      if (r && !ve.prototype[r.type])
        throw new ot(
          'Unexpected node type "' + r.type + '" found when accepting ' + t + ' on ' + e.type
        );
      e[t] = r;
    }
  },
  acceptRequired: function (e, t) {
    if ((this.acceptKey(e, t), !e[t])) throw new ot(e.type + ' requires ' + t);
  },
  acceptArray: function (e) {
    for (var t = 0, r = e.length; t < r; t++)
      this.acceptKey(e, t), e[t] || (e.splice(t, 1), t--, r--);
  },
  accept: function (e) {
    if (e) {
      if (!this[e.type]) throw new ot('Unknown type: ' + e.type, e);
      this.current && this.parents.unshift(this.current), (this.current = e);
      var t = this[e.type](e);
      if (((this.current = this.parents.shift()), !this.mutating || t)) return t;
      if (t !== !1) return e;
    }
  },
  Program: function (e) {
    this.acceptArray(e.body);
  },
  MustacheStatement: Ee,
  Decorator: Ee,
  BlockStatement: gs,
  DecoratorBlock: gs,
  PartialStatement: bs,
  PartialBlockStatement: function (e) {
    bs.call(this, e), this.acceptKey(e, 'program');
  },
  ContentStatement: function () {},
  CommentStatement: function () {},
  SubExpression: Ee,
  PathExpression: function () {},
  StringLiteral: function () {},
  NumberLiteral: function () {},
  BooleanLiteral: function () {},
  UndefinedLiteral: function () {},
  NullLiteral: function () {},
  Hash: function (e) {
    this.acceptArray(e.pairs);
  },
  HashPair: function (e) {
    this.acceptRequired(e, 'value');
  },
};
function Ee(e) {
  this.acceptRequired(e, 'path'), this.acceptArray(e.params), this.acceptKey(e, 'hash');
}
function gs(e) {
  Ee.call(this, e), this.acceptKey(e, 'program'), this.acceptKey(e, 'inverse');
}
function bs(e) {
  this.acceptRequired(e, 'name'), this.acceptArray(e.params), this.acceptKey(e, 'hash');
}
var ys = ve;
function Q(e) {
  e === void 0 && (e = {}), (this.options = e);
}
Q.prototype = new ys();
Q.prototype.Program = function (e) {
  var t = !this.options.ignoreStandalone,
    r = !this.isRootSeen;
  this.isRootSeen = !0;
  for (var s = e.body, n = 0, i = s.length; n < i; n++) {
    var a = s[n],
      o = this.accept(a);
    if (o) {
      var c = sr(s, n, r),
        h = nr(s, n, r),
        p = o.openStandalone && c,
        m = o.closeStandalone && h,
        S = o.inlineStandalone && c && h;
      o.close && vt(s, n, !0),
        o.open && lt(s, n, !0),
        t &&
          S &&
          (vt(s, n),
          lt(s, n) &&
            a.type === 'PartialStatement' &&
            (a.indent = /([ \t]+$)/.exec(s[n - 1].original)[1])),
        t && p && (vt((a.program || a.inverse).body), lt(s, n)),
        t && m && (vt(s, n), lt((a.inverse || a.program).body));
    }
  }
  return e;
};
Q.prototype.BlockStatement =
  Q.prototype.DecoratorBlock =
  Q.prototype.PartialBlockStatement =
    function (e) {
      this.accept(e.program), this.accept(e.inverse);
      var t = e.program || e.inverse,
        r = e.program && e.inverse,
        s = r,
        n = r;
      if (r && r.chained)
        for (s = r.body[0].program; n.chained; ) n = n.body[n.body.length - 1].program;
      var i = {
        open: e.openStrip.open,
        close: e.closeStrip.close,
        openStandalone: nr(t.body),
        closeStandalone: sr((s || t).body),
      };
      if ((e.openStrip.close && vt(t.body, null, !0), r)) {
        var a = e.inverseStrip;
        a.open && lt(t.body, null, !0),
          a.close && vt(s.body, null, !0),
          e.closeStrip.open && lt(n.body, null, !0),
          !this.options.ignoreStandalone && sr(t.body) && nr(s.body) && (lt(t.body), vt(s.body));
      } else e.closeStrip.open && lt(t.body, null, !0);
      return i;
    };
Q.prototype.Decorator = Q.prototype.MustacheStatement = function (e) {
  return e.strip;
};
Q.prototype.PartialStatement = Q.prototype.CommentStatement = function (e) {
  var t = e.strip || {};
  return { inlineStandalone: !0, open: t.open, close: t.close };
};
function sr(e, t, r) {
  t === void 0 && (t = e.length);
  var s = e[t - 1],
    n = e[t - 2];
  if (!s) return r;
  if (s.type === 'ContentStatement')
    return (n || !r ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(s.original);
}
function nr(e, t, r) {
  t === void 0 && (t = -1);
  var s = e[t + 1],
    n = e[t + 2];
  if (!s) return r;
  if (s.type === 'ContentStatement')
    return (n || !r ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(s.original);
}
function vt(e, t, r) {
  var s = e[t == null ? 0 : t + 1];
  if (!(!s || s.type !== 'ContentStatement' || (!r && s.rightStripped))) {
    var n = s.value;
    (s.value = s.value.replace(r ? /^\s+/ : /^[ \t]*\r?\n?/, '')),
      (s.rightStripped = s.value !== n);
  }
}
function lt(e, t, r) {
  var s = e[t == null ? e.length - 1 : t - 1];
  if (!(!s || s.type !== 'ContentStatement' || (!r && s.leftStripped))) {
    var n = s.value;
    return (
      (s.value = s.value.replace(r ? /\s+$/ : /[ \t]+$/, '')),
      (s.leftStripped = s.value !== n),
      s.leftStripped
    );
  }
}
var ks = Q;
var ne = {};
Fe(ne, {
  SourceLocation: () => ar,
  id: () => Hn,
  prepareBlock: () => Kn,
  prepareMustache: () => Yn,
  preparePartialBlock: () => jn,
  preparePath: () => zn,
  prepareProgram: () => Wn,
  prepareRawBlock: () => Gn,
  stripComment: () => Mn,
  stripFlags: () => Un,
});
function ir(e, t) {
  if (((t = t.path ? t.path.original : t), e.path.original !== t)) {
    var r = { loc: e.path.loc };
    throw new ot(e.path.original + " doesn't match " + t, r);
  }
}
function ar(e, t) {
  (this.source = e),
    (this.start = { line: t.first_line, column: t.first_column }),
    (this.end = { line: t.last_line, column: t.last_column });
}
function Hn(e) {
  return /^\[.*\]$/.test(e) ? e.substring(1, e.length - 1) : e;
}
function Un(e, t) {
  return { open: e.charAt(2) === '~', close: t.charAt(t.length - 3) === '~' };
}
function Mn(e) {
  return e.replace(/^\{\{~?!-?-?/, '').replace(/-?-?~?\}\}$/, '');
}
function zn(e, t, r) {
  r = this.locInfo(r);
  for (var s = e ? '@' : '', n = [], i = 0, a = 0, o = t.length; a < o; a++) {
    var c = t[a].part,
      h = t[a].original !== c;
    if (((s += (t[a].separator || '') + c), !h && (c === '..' || c === '.' || c === 'this'))) {
      if (n.length > 0) throw new ot('Invalid path: ' + s, { loc: r });
      c === '..' && i++;
    } else n.push(c);
  }
  return { type: 'PathExpression', data: e, depth: i, parts: n, original: s, loc: r };
}
function Yn(e, t, r, s, n, i) {
  var a = s.charAt(3) || s.charAt(2),
    o = a !== '{' && a !== '&',
    c = /\*/.test(s);
  return {
    type: c ? 'Decorator' : 'MustacheStatement',
    path: e,
    params: t,
    hash: r,
    escaped: o,
    strip: n,
    loc: this.locInfo(i),
  };
}
function Gn(e, t, r, s) {
  ir(e, r), (s = this.locInfo(s));
  var n = { type: 'Program', body: t, strip: {}, loc: s };
  return {
    type: 'BlockStatement',
    path: e.path,
    params: e.params,
    hash: e.hash,
    program: n,
    openStrip: {},
    inverseStrip: {},
    closeStrip: {},
    loc: s,
  };
}
function Kn(e, t, r, s, n, i) {
  s && s.path && ir(e, s);
  var a = /\*/.test(e.open);
  t.blockParams = e.blockParams;
  var o, c;
  if (r) {
    if (a) throw new ot('Unexpected inverse block on decorator', r);
    r.chain && (r.program.body[0].closeStrip = s.strip), (c = r.strip), (o = r.program);
  }
  return (
    n && ((n = o), (o = t), (t = n)),
    {
      type: a ? 'DecoratorBlock' : 'BlockStatement',
      path: e.path,
      params: e.params,
      hash: e.hash,
      program: t,
      inverse: o,
      openStrip: e.strip,
      inverseStrip: c,
      closeStrip: s && s.strip,
      loc: this.locInfo(i),
    }
  );
}
function Wn(e, t) {
  if (!t && e.length) {
    var r = e[0].loc,
      s = e[e.length - 1].loc;
    r &&
      s &&
      (t = {
        source: r.source,
        start: { line: r.start.line, column: r.start.column },
        end: { line: s.end.line, column: s.end.column },
      });
  }
  return { type: 'Program', body: e, strip: {}, loc: t };
}
function jn(e, t, r, s) {
  return (
    ir(e, r),
    {
      type: 'PartialBlockStatement',
      name: e.path,
      params: e.params,
      hash: e.hash,
      program: t,
      openStrip: e.strip,
      closeStrip: r && r.strip,
      loc: this.locInfo(s),
    }
  );
}
var Ss = {};
for (we in ne) Object.prototype.hasOwnProperty.call(ne, we) && (Ss[we] = ne[we]);
var we;
function Te(e, t) {
  if (e.type === 'Program') return e;
  (Se.yy = Ss),
    (Se.yy.locInfo = function (s) {
      return new ar(t && t.srcName, s);
    });
  var r = Se.parse(e);
  return r;
}
function or(e, t) {
  var r = Te(e, t),
    s = new ks(t);
  return s.accept(r);
}
var Es = {
    Aacute: '\xC1',
    aacute: '\xE1',
    Abreve: '\u0102',
    abreve: '\u0103',
    ac: '\u223E',
    acd: '\u223F',
    acE: '\u223E\u0333',
    Acirc: '\xC2',
    acirc: '\xE2',
    acute: '\xB4',
    Acy: '\u0410',
    acy: '\u0430',
    AElig: '\xC6',
    aelig: '\xE6',
    af: '\u2061',
    Afr: '\u{1D504}',
    afr: '\u{1D51E}',
    Agrave: '\xC0',
    agrave: '\xE0',
    alefsym: '\u2135',
    aleph: '\u2135',
    Alpha: '\u0391',
    alpha: '\u03B1',
    Amacr: '\u0100',
    amacr: '\u0101',
    amalg: '\u2A3F',
    amp: '&',
    AMP: '&',
    andand: '\u2A55',
    And: '\u2A53',
    and: '\u2227',
    andd: '\u2A5C',
    andslope: '\u2A58',
    andv: '\u2A5A',
    ang: '\u2220',
    ange: '\u29A4',
    angle: '\u2220',
    angmsdaa: '\u29A8',
    angmsdab: '\u29A9',
    angmsdac: '\u29AA',
    angmsdad: '\u29AB',
    angmsdae: '\u29AC',
    angmsdaf: '\u29AD',
    angmsdag: '\u29AE',
    angmsdah: '\u29AF',
    angmsd: '\u2221',
    angrt: '\u221F',
    angrtvb: '\u22BE',
    angrtvbd: '\u299D',
    angsph: '\u2222',
    angst: '\xC5',
    angzarr: '\u237C',
    Aogon: '\u0104',
    aogon: '\u0105',
    Aopf: '\u{1D538}',
    aopf: '\u{1D552}',
    apacir: '\u2A6F',
    ap: '\u2248',
    apE: '\u2A70',
    ape: '\u224A',
    apid: '\u224B',
    apos: "'",
    ApplyFunction: '\u2061',
    approx: '\u2248',
    approxeq: '\u224A',
    Aring: '\xC5',
    aring: '\xE5',
    Ascr: '\u{1D49C}',
    ascr: '\u{1D4B6}',
    Assign: '\u2254',
    ast: '*',
    asymp: '\u2248',
    asympeq: '\u224D',
    Atilde: '\xC3',
    atilde: '\xE3',
    Auml: '\xC4',
    auml: '\xE4',
    awconint: '\u2233',
    awint: '\u2A11',
    backcong: '\u224C',
    backepsilon: '\u03F6',
    backprime: '\u2035',
    backsim: '\u223D',
    backsimeq: '\u22CD',
    Backslash: '\u2216',
    Barv: '\u2AE7',
    barvee: '\u22BD',
    barwed: '\u2305',
    Barwed: '\u2306',
    barwedge: '\u2305',
    bbrk: '\u23B5',
    bbrktbrk: '\u23B6',
    bcong: '\u224C',
    Bcy: '\u0411',
    bcy: '\u0431',
    bdquo: '\u201E',
    becaus: '\u2235',
    because: '\u2235',
    Because: '\u2235',
    bemptyv: '\u29B0',
    bepsi: '\u03F6',
    bernou: '\u212C',
    Bernoullis: '\u212C',
    Beta: '\u0392',
    beta: '\u03B2',
    beth: '\u2136',
    between: '\u226C',
    Bfr: '\u{1D505}',
    bfr: '\u{1D51F}',
    bigcap: '\u22C2',
    bigcirc: '\u25EF',
    bigcup: '\u22C3',
    bigodot: '\u2A00',
    bigoplus: '\u2A01',
    bigotimes: '\u2A02',
    bigsqcup: '\u2A06',
    bigstar: '\u2605',
    bigtriangledown: '\u25BD',
    bigtriangleup: '\u25B3',
    biguplus: '\u2A04',
    bigvee: '\u22C1',
    bigwedge: '\u22C0',
    bkarow: '\u290D',
    blacklozenge: '\u29EB',
    blacksquare: '\u25AA',
    blacktriangle: '\u25B4',
    blacktriangledown: '\u25BE',
    blacktriangleleft: '\u25C2',
    blacktriangleright: '\u25B8',
    blank: '\u2423',
    blk12: '\u2592',
    blk14: '\u2591',
    blk34: '\u2593',
    block: '\u2588',
    bne: '=\u20E5',
    bnequiv: '\u2261\u20E5',
    bNot: '\u2AED',
    bnot: '\u2310',
    Bopf: '\u{1D539}',
    bopf: '\u{1D553}',
    bot: '\u22A5',
    bottom: '\u22A5',
    bowtie: '\u22C8',
    boxbox: '\u29C9',
    boxdl: '\u2510',
    boxdL: '\u2555',
    boxDl: '\u2556',
    boxDL: '\u2557',
    boxdr: '\u250C',
    boxdR: '\u2552',
    boxDr: '\u2553',
    boxDR: '\u2554',
    boxh: '\u2500',
    boxH: '\u2550',
    boxhd: '\u252C',
    boxHd: '\u2564',
    boxhD: '\u2565',
    boxHD: '\u2566',
    boxhu: '\u2534',
    boxHu: '\u2567',
    boxhU: '\u2568',
    boxHU: '\u2569',
    boxminus: '\u229F',
    boxplus: '\u229E',
    boxtimes: '\u22A0',
    boxul: '\u2518',
    boxuL: '\u255B',
    boxUl: '\u255C',
    boxUL: '\u255D',
    boxur: '\u2514',
    boxuR: '\u2558',
    boxUr: '\u2559',
    boxUR: '\u255A',
    boxv: '\u2502',
    boxV: '\u2551',
    boxvh: '\u253C',
    boxvH: '\u256A',
    boxVh: '\u256B',
    boxVH: '\u256C',
    boxvl: '\u2524',
    boxvL: '\u2561',
    boxVl: '\u2562',
    boxVL: '\u2563',
    boxvr: '\u251C',
    boxvR: '\u255E',
    boxVr: '\u255F',
    boxVR: '\u2560',
    bprime: '\u2035',
    breve: '\u02D8',
    Breve: '\u02D8',
    brvbar: '\xA6',
    bscr: '\u{1D4B7}',
    Bscr: '\u212C',
    bsemi: '\u204F',
    bsim: '\u223D',
    bsime: '\u22CD',
    bsolb: '\u29C5',
    bsol: '\\',
    bsolhsub: '\u27C8',
    bull: '\u2022',
    bullet: '\u2022',
    bump: '\u224E',
    bumpE: '\u2AAE',
    bumpe: '\u224F',
    Bumpeq: '\u224E',
    bumpeq: '\u224F',
    Cacute: '\u0106',
    cacute: '\u0107',
    capand: '\u2A44',
    capbrcup: '\u2A49',
    capcap: '\u2A4B',
    cap: '\u2229',
    Cap: '\u22D2',
    capcup: '\u2A47',
    capdot: '\u2A40',
    CapitalDifferentialD: '\u2145',
    caps: '\u2229\uFE00',
    caret: '\u2041',
    caron: '\u02C7',
    Cayleys: '\u212D',
    ccaps: '\u2A4D',
    Ccaron: '\u010C',
    ccaron: '\u010D',
    Ccedil: '\xC7',
    ccedil: '\xE7',
    Ccirc: '\u0108',
    ccirc: '\u0109',
    Cconint: '\u2230',
    ccups: '\u2A4C',
    ccupssm: '\u2A50',
    Cdot: '\u010A',
    cdot: '\u010B',
    cedil: '\xB8',
    Cedilla: '\xB8',
    cemptyv: '\u29B2',
    cent: '\xA2',
    centerdot: '\xB7',
    CenterDot: '\xB7',
    cfr: '\u{1D520}',
    Cfr: '\u212D',
    CHcy: '\u0427',
    chcy: '\u0447',
    check: '\u2713',
    checkmark: '\u2713',
    Chi: '\u03A7',
    chi: '\u03C7',
    circ: '\u02C6',
    circeq: '\u2257',
    circlearrowleft: '\u21BA',
    circlearrowright: '\u21BB',
    circledast: '\u229B',
    circledcirc: '\u229A',
    circleddash: '\u229D',
    CircleDot: '\u2299',
    circledR: '\xAE',
    circledS: '\u24C8',
    CircleMinus: '\u2296',
    CirclePlus: '\u2295',
    CircleTimes: '\u2297',
    cir: '\u25CB',
    cirE: '\u29C3',
    cire: '\u2257',
    cirfnint: '\u2A10',
    cirmid: '\u2AEF',
    cirscir: '\u29C2',
    ClockwiseContourIntegral: '\u2232',
    CloseCurlyDoubleQuote: '\u201D',
    CloseCurlyQuote: '\u2019',
    clubs: '\u2663',
    clubsuit: '\u2663',
    colon: ':',
    Colon: '\u2237',
    Colone: '\u2A74',
    colone: '\u2254',
    coloneq: '\u2254',
    comma: ',',
    commat: '@',
    comp: '\u2201',
    compfn: '\u2218',
    complement: '\u2201',
    complexes: '\u2102',
    cong: '\u2245',
    congdot: '\u2A6D',
    Congruent: '\u2261',
    conint: '\u222E',
    Conint: '\u222F',
    ContourIntegral: '\u222E',
    copf: '\u{1D554}',
    Copf: '\u2102',
    coprod: '\u2210',
    Coproduct: '\u2210',
    copy: '\xA9',
    COPY: '\xA9',
    copysr: '\u2117',
    CounterClockwiseContourIntegral: '\u2233',
    crarr: '\u21B5',
    cross: '\u2717',
    Cross: '\u2A2F',
    Cscr: '\u{1D49E}',
    cscr: '\u{1D4B8}',
    csub: '\u2ACF',
    csube: '\u2AD1',
    csup: '\u2AD0',
    csupe: '\u2AD2',
    ctdot: '\u22EF',
    cudarrl: '\u2938',
    cudarrr: '\u2935',
    cuepr: '\u22DE',
    cuesc: '\u22DF',
    cularr: '\u21B6',
    cularrp: '\u293D',
    cupbrcap: '\u2A48',
    cupcap: '\u2A46',
    CupCap: '\u224D',
    cup: '\u222A',
    Cup: '\u22D3',
    cupcup: '\u2A4A',
    cupdot: '\u228D',
    cupor: '\u2A45',
    cups: '\u222A\uFE00',
    curarr: '\u21B7',
    curarrm: '\u293C',
    curlyeqprec: '\u22DE',
    curlyeqsucc: '\u22DF',
    curlyvee: '\u22CE',
    curlywedge: '\u22CF',
    curren: '\xA4',
    curvearrowleft: '\u21B6',
    curvearrowright: '\u21B7',
    cuvee: '\u22CE',
    cuwed: '\u22CF',
    cwconint: '\u2232',
    cwint: '\u2231',
    cylcty: '\u232D',
    dagger: '\u2020',
    Dagger: '\u2021',
    daleth: '\u2138',
    darr: '\u2193',
    Darr: '\u21A1',
    dArr: '\u21D3',
    dash: '\u2010',
    Dashv: '\u2AE4',
    dashv: '\u22A3',
    dbkarow: '\u290F',
    dblac: '\u02DD',
    Dcaron: '\u010E',
    dcaron: '\u010F',
    Dcy: '\u0414',
    dcy: '\u0434',
    ddagger: '\u2021',
    ddarr: '\u21CA',
    DD: '\u2145',
    dd: '\u2146',
    DDotrahd: '\u2911',
    ddotseq: '\u2A77',
    deg: '\xB0',
    Del: '\u2207',
    Delta: '\u0394',
    delta: '\u03B4',
    demptyv: '\u29B1',
    dfisht: '\u297F',
    Dfr: '\u{1D507}',
    dfr: '\u{1D521}',
    dHar: '\u2965',
    dharl: '\u21C3',
    dharr: '\u21C2',
    DiacriticalAcute: '\xB4',
    DiacriticalDot: '\u02D9',
    DiacriticalDoubleAcute: '\u02DD',
    DiacriticalGrave: '`',
    DiacriticalTilde: '\u02DC',
    diam: '\u22C4',
    diamond: '\u22C4',
    Diamond: '\u22C4',
    diamondsuit: '\u2666',
    diams: '\u2666',
    die: '\xA8',
    DifferentialD: '\u2146',
    digamma: '\u03DD',
    disin: '\u22F2',
    div: '\xF7',
    divide: '\xF7',
    divideontimes: '\u22C7',
    divonx: '\u22C7',
    DJcy: '\u0402',
    djcy: '\u0452',
    dlcorn: '\u231E',
    dlcrop: '\u230D',
    dollar: '$',
    Dopf: '\u{1D53B}',
    dopf: '\u{1D555}',
    Dot: '\xA8',
    dot: '\u02D9',
    DotDot: '\u20DC',
    doteq: '\u2250',
    doteqdot: '\u2251',
    DotEqual: '\u2250',
    dotminus: '\u2238',
    dotplus: '\u2214',
    dotsquare: '\u22A1',
    doublebarwedge: '\u2306',
    DoubleContourIntegral: '\u222F',
    DoubleDot: '\xA8',
    DoubleDownArrow: '\u21D3',
    DoubleLeftArrow: '\u21D0',
    DoubleLeftRightArrow: '\u21D4',
    DoubleLeftTee: '\u2AE4',
    DoubleLongLeftArrow: '\u27F8',
    DoubleLongLeftRightArrow: '\u27FA',
    DoubleLongRightArrow: '\u27F9',
    DoubleRightArrow: '\u21D2',
    DoubleRightTee: '\u22A8',
    DoubleUpArrow: '\u21D1',
    DoubleUpDownArrow: '\u21D5',
    DoubleVerticalBar: '\u2225',
    DownArrowBar: '\u2913',
    downarrow: '\u2193',
    DownArrow: '\u2193',
    Downarrow: '\u21D3',
    DownArrowUpArrow: '\u21F5',
    DownBreve: '\u0311',
    downdownarrows: '\u21CA',
    downharpoonleft: '\u21C3',
    downharpoonright: '\u21C2',
    DownLeftRightVector: '\u2950',
    DownLeftTeeVector: '\u295E',
    DownLeftVectorBar: '\u2956',
    DownLeftVector: '\u21BD',
    DownRightTeeVector: '\u295F',
    DownRightVectorBar: '\u2957',
    DownRightVector: '\u21C1',
    DownTeeArrow: '\u21A7',
    DownTee: '\u22A4',
    drbkarow: '\u2910',
    drcorn: '\u231F',
    drcrop: '\u230C',
    Dscr: '\u{1D49F}',
    dscr: '\u{1D4B9}',
    DScy: '\u0405',
    dscy: '\u0455',
    dsol: '\u29F6',
    Dstrok: '\u0110',
    dstrok: '\u0111',
    dtdot: '\u22F1',
    dtri: '\u25BF',
    dtrif: '\u25BE',
    duarr: '\u21F5',
    duhar: '\u296F',
    dwangle: '\u29A6',
    DZcy: '\u040F',
    dzcy: '\u045F',
    dzigrarr: '\u27FF',
    Eacute: '\xC9',
    eacute: '\xE9',
    easter: '\u2A6E',
    Ecaron: '\u011A',
    ecaron: '\u011B',
    Ecirc: '\xCA',
    ecirc: '\xEA',
    ecir: '\u2256',
    ecolon: '\u2255',
    Ecy: '\u042D',
    ecy: '\u044D',
    eDDot: '\u2A77',
    Edot: '\u0116',
    edot: '\u0117',
    eDot: '\u2251',
    ee: '\u2147',
    efDot: '\u2252',
    Efr: '\u{1D508}',
    efr: '\u{1D522}',
    eg: '\u2A9A',
    Egrave: '\xC8',
    egrave: '\xE8',
    egs: '\u2A96',
    egsdot: '\u2A98',
    el: '\u2A99',
    Element: '\u2208',
    elinters: '\u23E7',
    ell: '\u2113',
    els: '\u2A95',
    elsdot: '\u2A97',
    Emacr: '\u0112',
    emacr: '\u0113',
    empty: '\u2205',
    emptyset: '\u2205',
    EmptySmallSquare: '\u25FB',
    emptyv: '\u2205',
    EmptyVerySmallSquare: '\u25AB',
    emsp13: '\u2004',
    emsp14: '\u2005',
    emsp: '\u2003',
    ENG: '\u014A',
    eng: '\u014B',
    ensp: '\u2002',
    Eogon: '\u0118',
    eogon: '\u0119',
    Eopf: '\u{1D53C}',
    eopf: '\u{1D556}',
    epar: '\u22D5',
    eparsl: '\u29E3',
    eplus: '\u2A71',
    epsi: '\u03B5',
    Epsilon: '\u0395',
    epsilon: '\u03B5',
    epsiv: '\u03F5',
    eqcirc: '\u2256',
    eqcolon: '\u2255',
    eqsim: '\u2242',
    eqslantgtr: '\u2A96',
    eqslantless: '\u2A95',
    Equal: '\u2A75',
    equals: '=',
    EqualTilde: '\u2242',
    equest: '\u225F',
    Equilibrium: '\u21CC',
    equiv: '\u2261',
    equivDD: '\u2A78',
    eqvparsl: '\u29E5',
    erarr: '\u2971',
    erDot: '\u2253',
    escr: '\u212F',
    Escr: '\u2130',
    esdot: '\u2250',
    Esim: '\u2A73',
    esim: '\u2242',
    Eta: '\u0397',
    eta: '\u03B7',
    ETH: '\xD0',
    eth: '\xF0',
    Euml: '\xCB',
    euml: '\xEB',
    euro: '\u20AC',
    excl: '!',
    exist: '\u2203',
    Exists: '\u2203',
    expectation: '\u2130',
    exponentiale: '\u2147',
    ExponentialE: '\u2147',
    fallingdotseq: '\u2252',
    Fcy: '\u0424',
    fcy: '\u0444',
    female: '\u2640',
    ffilig: '\uFB03',
    fflig: '\uFB00',
    ffllig: '\uFB04',
    Ffr: '\u{1D509}',
    ffr: '\u{1D523}',
    filig: '\uFB01',
    FilledSmallSquare: '\u25FC',
    FilledVerySmallSquare: '\u25AA',
    fjlig: 'fj',
    flat: '\u266D',
    fllig: '\uFB02',
    fltns: '\u25B1',
    fnof: '\u0192',
    Fopf: '\u{1D53D}',
    fopf: '\u{1D557}',
    forall: '\u2200',
    ForAll: '\u2200',
    fork: '\u22D4',
    forkv: '\u2AD9',
    Fouriertrf: '\u2131',
    fpartint: '\u2A0D',
    frac12: '\xBD',
    frac13: '\u2153',
    frac14: '\xBC',
    frac15: '\u2155',
    frac16: '\u2159',
    frac18: '\u215B',
    frac23: '\u2154',
    frac25: '\u2156',
    frac34: '\xBE',
    frac35: '\u2157',
    frac38: '\u215C',
    frac45: '\u2158',
    frac56: '\u215A',
    frac58: '\u215D',
    frac78: '\u215E',
    frasl: '\u2044',
    frown: '\u2322',
    fscr: '\u{1D4BB}',
    Fscr: '\u2131',
    gacute: '\u01F5',
    Gamma: '\u0393',
    gamma: '\u03B3',
    Gammad: '\u03DC',
    gammad: '\u03DD',
    gap: '\u2A86',
    Gbreve: '\u011E',
    gbreve: '\u011F',
    Gcedil: '\u0122',
    Gcirc: '\u011C',
    gcirc: '\u011D',
    Gcy: '\u0413',
    gcy: '\u0433',
    Gdot: '\u0120',
    gdot: '\u0121',
    ge: '\u2265',
    gE: '\u2267',
    gEl: '\u2A8C',
    gel: '\u22DB',
    geq: '\u2265',
    geqq: '\u2267',
    geqslant: '\u2A7E',
    gescc: '\u2AA9',
    ges: '\u2A7E',
    gesdot: '\u2A80',
    gesdoto: '\u2A82',
    gesdotol: '\u2A84',
    gesl: '\u22DB\uFE00',
    gesles: '\u2A94',
    Gfr: '\u{1D50A}',
    gfr: '\u{1D524}',
    gg: '\u226B',
    Gg: '\u22D9',
    ggg: '\u22D9',
    gimel: '\u2137',
    GJcy: '\u0403',
    gjcy: '\u0453',
    gla: '\u2AA5',
    gl: '\u2277',
    glE: '\u2A92',
    glj: '\u2AA4',
    gnap: '\u2A8A',
    gnapprox: '\u2A8A',
    gne: '\u2A88',
    gnE: '\u2269',
    gneq: '\u2A88',
    gneqq: '\u2269',
    gnsim: '\u22E7',
    Gopf: '\u{1D53E}',
    gopf: '\u{1D558}',
    grave: '`',
    GreaterEqual: '\u2265',
    GreaterEqualLess: '\u22DB',
    GreaterFullEqual: '\u2267',
    GreaterGreater: '\u2AA2',
    GreaterLess: '\u2277',
    GreaterSlantEqual: '\u2A7E',
    GreaterTilde: '\u2273',
    Gscr: '\u{1D4A2}',
    gscr: '\u210A',
    gsim: '\u2273',
    gsime: '\u2A8E',
    gsiml: '\u2A90',
    gtcc: '\u2AA7',
    gtcir: '\u2A7A',
    gt: '>',
    GT: '>',
    Gt: '\u226B',
    gtdot: '\u22D7',
    gtlPar: '\u2995',
    gtquest: '\u2A7C',
    gtrapprox: '\u2A86',
    gtrarr: '\u2978',
    gtrdot: '\u22D7',
    gtreqless: '\u22DB',
    gtreqqless: '\u2A8C',
    gtrless: '\u2277',
    gtrsim: '\u2273',
    gvertneqq: '\u2269\uFE00',
    gvnE: '\u2269\uFE00',
    Hacek: '\u02C7',
    hairsp: '\u200A',
    half: '\xBD',
    hamilt: '\u210B',
    HARDcy: '\u042A',
    hardcy: '\u044A',
    harrcir: '\u2948',
    harr: '\u2194',
    hArr: '\u21D4',
    harrw: '\u21AD',
    Hat: '^',
    hbar: '\u210F',
    Hcirc: '\u0124',
    hcirc: '\u0125',
    hearts: '\u2665',
    heartsuit: '\u2665',
    hellip: '\u2026',
    hercon: '\u22B9',
    hfr: '\u{1D525}',
    Hfr: '\u210C',
    HilbertSpace: '\u210B',
    hksearow: '\u2925',
    hkswarow: '\u2926',
    hoarr: '\u21FF',
    homtht: '\u223B',
    hookleftarrow: '\u21A9',
    hookrightarrow: '\u21AA',
    hopf: '\u{1D559}',
    Hopf: '\u210D',
    horbar: '\u2015',
    HorizontalLine: '\u2500',
    hscr: '\u{1D4BD}',
    Hscr: '\u210B',
    hslash: '\u210F',
    Hstrok: '\u0126',
    hstrok: '\u0127',
    HumpDownHump: '\u224E',
    HumpEqual: '\u224F',
    hybull: '\u2043',
    hyphen: '\u2010',
    Iacute: '\xCD',
    iacute: '\xED',
    ic: '\u2063',
    Icirc: '\xCE',
    icirc: '\xEE',
    Icy: '\u0418',
    icy: '\u0438',
    Idot: '\u0130',
    IEcy: '\u0415',
    iecy: '\u0435',
    iexcl: '\xA1',
    iff: '\u21D4',
    ifr: '\u{1D526}',
    Ifr: '\u2111',
    Igrave: '\xCC',
    igrave: '\xEC',
    ii: '\u2148',
    iiiint: '\u2A0C',
    iiint: '\u222D',
    iinfin: '\u29DC',
    iiota: '\u2129',
    IJlig: '\u0132',
    ijlig: '\u0133',
    Imacr: '\u012A',
    imacr: '\u012B',
    image: '\u2111',
    ImaginaryI: '\u2148',
    imagline: '\u2110',
    imagpart: '\u2111',
    imath: '\u0131',
    Im: '\u2111',
    imof: '\u22B7',
    imped: '\u01B5',
    Implies: '\u21D2',
    incare: '\u2105',
    in: '\u2208',
    infin: '\u221E',
    infintie: '\u29DD',
    inodot: '\u0131',
    intcal: '\u22BA',
    int: '\u222B',
    Int: '\u222C',
    integers: '\u2124',
    Integral: '\u222B',
    intercal: '\u22BA',
    Intersection: '\u22C2',
    intlarhk: '\u2A17',
    intprod: '\u2A3C',
    InvisibleComma: '\u2063',
    InvisibleTimes: '\u2062',
    IOcy: '\u0401',
    iocy: '\u0451',
    Iogon: '\u012E',
    iogon: '\u012F',
    Iopf: '\u{1D540}',
    iopf: '\u{1D55A}',
    Iota: '\u0399',
    iota: '\u03B9',
    iprod: '\u2A3C',
    iquest: '\xBF',
    iscr: '\u{1D4BE}',
    Iscr: '\u2110',
    isin: '\u2208',
    isindot: '\u22F5',
    isinE: '\u22F9',
    isins: '\u22F4',
    isinsv: '\u22F3',
    isinv: '\u2208',
    it: '\u2062',
    Itilde: '\u0128',
    itilde: '\u0129',
    Iukcy: '\u0406',
    iukcy: '\u0456',
    Iuml: '\xCF',
    iuml: '\xEF',
    Jcirc: '\u0134',
    jcirc: '\u0135',
    Jcy: '\u0419',
    jcy: '\u0439',
    Jfr: '\u{1D50D}',
    jfr: '\u{1D527}',
    jmath: '\u0237',
    Jopf: '\u{1D541}',
    jopf: '\u{1D55B}',
    Jscr: '\u{1D4A5}',
    jscr: '\u{1D4BF}',
    Jsercy: '\u0408',
    jsercy: '\u0458',
    Jukcy: '\u0404',
    jukcy: '\u0454',
    Kappa: '\u039A',
    kappa: '\u03BA',
    kappav: '\u03F0',
    Kcedil: '\u0136',
    kcedil: '\u0137',
    Kcy: '\u041A',
    kcy: '\u043A',
    Kfr: '\u{1D50E}',
    kfr: '\u{1D528}',
    kgreen: '\u0138',
    KHcy: '\u0425',
    khcy: '\u0445',
    KJcy: '\u040C',
    kjcy: '\u045C',
    Kopf: '\u{1D542}',
    kopf: '\u{1D55C}',
    Kscr: '\u{1D4A6}',
    kscr: '\u{1D4C0}',
    lAarr: '\u21DA',
    Lacute: '\u0139',
    lacute: '\u013A',
    laemptyv: '\u29B4',
    lagran: '\u2112',
    Lambda: '\u039B',
    lambda: '\u03BB',
    lang: '\u27E8',
    Lang: '\u27EA',
    langd: '\u2991',
    langle: '\u27E8',
    lap: '\u2A85',
    Laplacetrf: '\u2112',
    laquo: '\xAB',
    larrb: '\u21E4',
    larrbfs: '\u291F',
    larr: '\u2190',
    Larr: '\u219E',
    lArr: '\u21D0',
    larrfs: '\u291D',
    larrhk: '\u21A9',
    larrlp: '\u21AB',
    larrpl: '\u2939',
    larrsim: '\u2973',
    larrtl: '\u21A2',
    latail: '\u2919',
    lAtail: '\u291B',
    lat: '\u2AAB',
    late: '\u2AAD',
    lates: '\u2AAD\uFE00',
    lbarr: '\u290C',
    lBarr: '\u290E',
    lbbrk: '\u2772',
    lbrace: '{',
    lbrack: '[',
    lbrke: '\u298B',
    lbrksld: '\u298F',
    lbrkslu: '\u298D',
    Lcaron: '\u013D',
    lcaron: '\u013E',
    Lcedil: '\u013B',
    lcedil: '\u013C',
    lceil: '\u2308',
    lcub: '{',
    Lcy: '\u041B',
    lcy: '\u043B',
    ldca: '\u2936',
    ldquo: '\u201C',
    ldquor: '\u201E',
    ldrdhar: '\u2967',
    ldrushar: '\u294B',
    ldsh: '\u21B2',
    le: '\u2264',
    lE: '\u2266',
    LeftAngleBracket: '\u27E8',
    LeftArrowBar: '\u21E4',
    leftarrow: '\u2190',
    LeftArrow: '\u2190',
    Leftarrow: '\u21D0',
    LeftArrowRightArrow: '\u21C6',
    leftarrowtail: '\u21A2',
    LeftCeiling: '\u2308',
    LeftDoubleBracket: '\u27E6',
    LeftDownTeeVector: '\u2961',
    LeftDownVectorBar: '\u2959',
    LeftDownVector: '\u21C3',
    LeftFloor: '\u230A',
    leftharpoondown: '\u21BD',
    leftharpoonup: '\u21BC',
    leftleftarrows: '\u21C7',
    leftrightarrow: '\u2194',
    LeftRightArrow: '\u2194',
    Leftrightarrow: '\u21D4',
    leftrightarrows: '\u21C6',
    leftrightharpoons: '\u21CB',
    leftrightsquigarrow: '\u21AD',
    LeftRightVector: '\u294E',
    LeftTeeArrow: '\u21A4',
    LeftTee: '\u22A3',
    LeftTeeVector: '\u295A',
    leftthreetimes: '\u22CB',
    LeftTriangleBar: '\u29CF',
    LeftTriangle: '\u22B2',
    LeftTriangleEqual: '\u22B4',
    LeftUpDownVector: '\u2951',
    LeftUpTeeVector: '\u2960',
    LeftUpVectorBar: '\u2958',
    LeftUpVector: '\u21BF',
    LeftVectorBar: '\u2952',
    LeftVector: '\u21BC',
    lEg: '\u2A8B',
    leg: '\u22DA',
    leq: '\u2264',
    leqq: '\u2266',
    leqslant: '\u2A7D',
    lescc: '\u2AA8',
    les: '\u2A7D',
    lesdot: '\u2A7F',
    lesdoto: '\u2A81',
    lesdotor: '\u2A83',
    lesg: '\u22DA\uFE00',
    lesges: '\u2A93',
    lessapprox: '\u2A85',
    lessdot: '\u22D6',
    lesseqgtr: '\u22DA',
    lesseqqgtr: '\u2A8B',
    LessEqualGreater: '\u22DA',
    LessFullEqual: '\u2266',
    LessGreater: '\u2276',
    lessgtr: '\u2276',
    LessLess: '\u2AA1',
    lesssim: '\u2272',
    LessSlantEqual: '\u2A7D',
    LessTilde: '\u2272',
    lfisht: '\u297C',
    lfloor: '\u230A',
    Lfr: '\u{1D50F}',
    lfr: '\u{1D529}',
    lg: '\u2276',
    lgE: '\u2A91',
    lHar: '\u2962',
    lhard: '\u21BD',
    lharu: '\u21BC',
    lharul: '\u296A',
    lhblk: '\u2584',
    LJcy: '\u0409',
    ljcy: '\u0459',
    llarr: '\u21C7',
    ll: '\u226A',
    Ll: '\u22D8',
    llcorner: '\u231E',
    Lleftarrow: '\u21DA',
    llhard: '\u296B',
    lltri: '\u25FA',
    Lmidot: '\u013F',
    lmidot: '\u0140',
    lmoustache: '\u23B0',
    lmoust: '\u23B0',
    lnap: '\u2A89',
    lnapprox: '\u2A89',
    lne: '\u2A87',
    lnE: '\u2268',
    lneq: '\u2A87',
    lneqq: '\u2268',
    lnsim: '\u22E6',
    loang: '\u27EC',
    loarr: '\u21FD',
    lobrk: '\u27E6',
    longleftarrow: '\u27F5',
    LongLeftArrow: '\u27F5',
    Longleftarrow: '\u27F8',
    longleftrightarrow: '\u27F7',
    LongLeftRightArrow: '\u27F7',
    Longleftrightarrow: '\u27FA',
    longmapsto: '\u27FC',
    longrightarrow: '\u27F6',
    LongRightArrow: '\u27F6',
    Longrightarrow: '\u27F9',
    looparrowleft: '\u21AB',
    looparrowright: '\u21AC',
    lopar: '\u2985',
    Lopf: '\u{1D543}',
    lopf: '\u{1D55D}',
    loplus: '\u2A2D',
    lotimes: '\u2A34',
    lowast: '\u2217',
    lowbar: '_',
    LowerLeftArrow: '\u2199',
    LowerRightArrow: '\u2198',
    loz: '\u25CA',
    lozenge: '\u25CA',
    lozf: '\u29EB',
    lpar: '(',
    lparlt: '\u2993',
    lrarr: '\u21C6',
    lrcorner: '\u231F',
    lrhar: '\u21CB',
    lrhard: '\u296D',
    lrm: '\u200E',
    lrtri: '\u22BF',
    lsaquo: '\u2039',
    lscr: '\u{1D4C1}',
    Lscr: '\u2112',
    lsh: '\u21B0',
    Lsh: '\u21B0',
    lsim: '\u2272',
    lsime: '\u2A8D',
    lsimg: '\u2A8F',
    lsqb: '[',
    lsquo: '\u2018',
    lsquor: '\u201A',
    Lstrok: '\u0141',
    lstrok: '\u0142',
    ltcc: '\u2AA6',
    ltcir: '\u2A79',
    lt: '<',
    LT: '<',
    Lt: '\u226A',
    ltdot: '\u22D6',
    lthree: '\u22CB',
    ltimes: '\u22C9',
    ltlarr: '\u2976',
    ltquest: '\u2A7B',
    ltri: '\u25C3',
    ltrie: '\u22B4',
    ltrif: '\u25C2',
    ltrPar: '\u2996',
    lurdshar: '\u294A',
    luruhar: '\u2966',
    lvertneqq: '\u2268\uFE00',
    lvnE: '\u2268\uFE00',
    macr: '\xAF',
    male: '\u2642',
    malt: '\u2720',
    maltese: '\u2720',
    Map: '\u2905',
    map: '\u21A6',
    mapsto: '\u21A6',
    mapstodown: '\u21A7',
    mapstoleft: '\u21A4',
    mapstoup: '\u21A5',
    marker: '\u25AE',
    mcomma: '\u2A29',
    Mcy: '\u041C',
    mcy: '\u043C',
    mdash: '\u2014',
    mDDot: '\u223A',
    measuredangle: '\u2221',
    MediumSpace: '\u205F',
    Mellintrf: '\u2133',
    Mfr: '\u{1D510}',
    mfr: '\u{1D52A}',
    mho: '\u2127',
    micro: '\xB5',
    midast: '*',
    midcir: '\u2AF0',
    mid: '\u2223',
    middot: '\xB7',
    minusb: '\u229F',
    minus: '\u2212',
    minusd: '\u2238',
    minusdu: '\u2A2A',
    MinusPlus: '\u2213',
    mlcp: '\u2ADB',
    mldr: '\u2026',
    mnplus: '\u2213',
    models: '\u22A7',
    Mopf: '\u{1D544}',
    mopf: '\u{1D55E}',
    mp: '\u2213',
    mscr: '\u{1D4C2}',
    Mscr: '\u2133',
    mstpos: '\u223E',
    Mu: '\u039C',
    mu: '\u03BC',
    multimap: '\u22B8',
    mumap: '\u22B8',
    nabla: '\u2207',
    Nacute: '\u0143',
    nacute: '\u0144',
    nang: '\u2220\u20D2',
    nap: '\u2249',
    napE: '\u2A70\u0338',
    napid: '\u224B\u0338',
    napos: '\u0149',
    napprox: '\u2249',
    natural: '\u266E',
    naturals: '\u2115',
    natur: '\u266E',
    nbsp: '\xA0',
    nbump: '\u224E\u0338',
    nbumpe: '\u224F\u0338',
    ncap: '\u2A43',
    Ncaron: '\u0147',
    ncaron: '\u0148',
    Ncedil: '\u0145',
    ncedil: '\u0146',
    ncong: '\u2247',
    ncongdot: '\u2A6D\u0338',
    ncup: '\u2A42',
    Ncy: '\u041D',
    ncy: '\u043D',
    ndash: '\u2013',
    nearhk: '\u2924',
    nearr: '\u2197',
    neArr: '\u21D7',
    nearrow: '\u2197',
    ne: '\u2260',
    nedot: '\u2250\u0338',
    NegativeMediumSpace: '\u200B',
    NegativeThickSpace: '\u200B',
    NegativeThinSpace: '\u200B',
    NegativeVeryThinSpace: '\u200B',
    nequiv: '\u2262',
    nesear: '\u2928',
    nesim: '\u2242\u0338',
    NestedGreaterGreater: '\u226B',
    NestedLessLess: '\u226A',
    NewLine: `
`,
    nexist: '\u2204',
    nexists: '\u2204',
    Nfr: '\u{1D511}',
    nfr: '\u{1D52B}',
    ngE: '\u2267\u0338',
    nge: '\u2271',
    ngeq: '\u2271',
    ngeqq: '\u2267\u0338',
    ngeqslant: '\u2A7E\u0338',
    nges: '\u2A7E\u0338',
    nGg: '\u22D9\u0338',
    ngsim: '\u2275',
    nGt: '\u226B\u20D2',
    ngt: '\u226F',
    ngtr: '\u226F',
    nGtv: '\u226B\u0338',
    nharr: '\u21AE',
    nhArr: '\u21CE',
    nhpar: '\u2AF2',
    ni: '\u220B',
    nis: '\u22FC',
    nisd: '\u22FA',
    niv: '\u220B',
    NJcy: '\u040A',
    njcy: '\u045A',
    nlarr: '\u219A',
    nlArr: '\u21CD',
    nldr: '\u2025',
    nlE: '\u2266\u0338',
    nle: '\u2270',
    nleftarrow: '\u219A',
    nLeftarrow: '\u21CD',
    nleftrightarrow: '\u21AE',
    nLeftrightarrow: '\u21CE',
    nleq: '\u2270',
    nleqq: '\u2266\u0338',
    nleqslant: '\u2A7D\u0338',
    nles: '\u2A7D\u0338',
    nless: '\u226E',
    nLl: '\u22D8\u0338',
    nlsim: '\u2274',
    nLt: '\u226A\u20D2',
    nlt: '\u226E',
    nltri: '\u22EA',
    nltrie: '\u22EC',
    nLtv: '\u226A\u0338',
    nmid: '\u2224',
    NoBreak: '\u2060',
    NonBreakingSpace: '\xA0',
    nopf: '\u{1D55F}',
    Nopf: '\u2115',
    Not: '\u2AEC',
    not: '\xAC',
    NotCongruent: '\u2262',
    NotCupCap: '\u226D',
    NotDoubleVerticalBar: '\u2226',
    NotElement: '\u2209',
    NotEqual: '\u2260',
    NotEqualTilde: '\u2242\u0338',
    NotExists: '\u2204',
    NotGreater: '\u226F',
    NotGreaterEqual: '\u2271',
    NotGreaterFullEqual: '\u2267\u0338',
    NotGreaterGreater: '\u226B\u0338',
    NotGreaterLess: '\u2279',
    NotGreaterSlantEqual: '\u2A7E\u0338',
    NotGreaterTilde: '\u2275',
    NotHumpDownHump: '\u224E\u0338',
    NotHumpEqual: '\u224F\u0338',
    notin: '\u2209',
    notindot: '\u22F5\u0338',
    notinE: '\u22F9\u0338',
    notinva: '\u2209',
    notinvb: '\u22F7',
    notinvc: '\u22F6',
    NotLeftTriangleBar: '\u29CF\u0338',
    NotLeftTriangle: '\u22EA',
    NotLeftTriangleEqual: '\u22EC',
    NotLess: '\u226E',
    NotLessEqual: '\u2270',
    NotLessGreater: '\u2278',
    NotLessLess: '\u226A\u0338',
    NotLessSlantEqual: '\u2A7D\u0338',
    NotLessTilde: '\u2274',
    NotNestedGreaterGreater: '\u2AA2\u0338',
    NotNestedLessLess: '\u2AA1\u0338',
    notni: '\u220C',
    notniva: '\u220C',
    notnivb: '\u22FE',
    notnivc: '\u22FD',
    NotPrecedes: '\u2280',
    NotPrecedesEqual: '\u2AAF\u0338',
    NotPrecedesSlantEqual: '\u22E0',
    NotReverseElement: '\u220C',
    NotRightTriangleBar: '\u29D0\u0338',
    NotRightTriangle: '\u22EB',
    NotRightTriangleEqual: '\u22ED',
    NotSquareSubset: '\u228F\u0338',
    NotSquareSubsetEqual: '\u22E2',
    NotSquareSuperset: '\u2290\u0338',
    NotSquareSupersetEqual: '\u22E3',
    NotSubset: '\u2282\u20D2',
    NotSubsetEqual: '\u2288',
    NotSucceeds: '\u2281',
    NotSucceedsEqual: '\u2AB0\u0338',
    NotSucceedsSlantEqual: '\u22E1',
    NotSucceedsTilde: '\u227F\u0338',
    NotSuperset: '\u2283\u20D2',
    NotSupersetEqual: '\u2289',
    NotTilde: '\u2241',
    NotTildeEqual: '\u2244',
    NotTildeFullEqual: '\u2247',
    NotTildeTilde: '\u2249',
    NotVerticalBar: '\u2224',
    nparallel: '\u2226',
    npar: '\u2226',
    nparsl: '\u2AFD\u20E5',
    npart: '\u2202\u0338',
    npolint: '\u2A14',
    npr: '\u2280',
    nprcue: '\u22E0',
    nprec: '\u2280',
    npreceq: '\u2AAF\u0338',
    npre: '\u2AAF\u0338',
    nrarrc: '\u2933\u0338',
    nrarr: '\u219B',
    nrArr: '\u21CF',
    nrarrw: '\u219D\u0338',
    nrightarrow: '\u219B',
    nRightarrow: '\u21CF',
    nrtri: '\u22EB',
    nrtrie: '\u22ED',
    nsc: '\u2281',
    nsccue: '\u22E1',
    nsce: '\u2AB0\u0338',
    Nscr: '\u{1D4A9}',
    nscr: '\u{1D4C3}',
    nshortmid: '\u2224',
    nshortparallel: '\u2226',
    nsim: '\u2241',
    nsime: '\u2244',
    nsimeq: '\u2244',
    nsmid: '\u2224',
    nspar: '\u2226',
    nsqsube: '\u22E2',
    nsqsupe: '\u22E3',
    nsub: '\u2284',
    nsubE: '\u2AC5\u0338',
    nsube: '\u2288',
    nsubset: '\u2282\u20D2',
    nsubseteq: '\u2288',
    nsubseteqq: '\u2AC5\u0338',
    nsucc: '\u2281',
    nsucceq: '\u2AB0\u0338',
    nsup: '\u2285',
    nsupE: '\u2AC6\u0338',
    nsupe: '\u2289',
    nsupset: '\u2283\u20D2',
    nsupseteq: '\u2289',
    nsupseteqq: '\u2AC6\u0338',
    ntgl: '\u2279',
    Ntilde: '\xD1',
    ntilde: '\xF1',
    ntlg: '\u2278',
    ntriangleleft: '\u22EA',
    ntrianglelefteq: '\u22EC',
    ntriangleright: '\u22EB',
    ntrianglerighteq: '\u22ED',
    Nu: '\u039D',
    nu: '\u03BD',
    num: '#',
    numero: '\u2116',
    numsp: '\u2007',
    nvap: '\u224D\u20D2',
    nvdash: '\u22AC',
    nvDash: '\u22AD',
    nVdash: '\u22AE',
    nVDash: '\u22AF',
    nvge: '\u2265\u20D2',
    nvgt: '>\u20D2',
    nvHarr: '\u2904',
    nvinfin: '\u29DE',
    nvlArr: '\u2902',
    nvle: '\u2264\u20D2',
    nvlt: '<\u20D2',
    nvltrie: '\u22B4\u20D2',
    nvrArr: '\u2903',
    nvrtrie: '\u22B5\u20D2',
    nvsim: '\u223C\u20D2',
    nwarhk: '\u2923',
    nwarr: '\u2196',
    nwArr: '\u21D6',
    nwarrow: '\u2196',
    nwnear: '\u2927',
    Oacute: '\xD3',
    oacute: '\xF3',
    oast: '\u229B',
    Ocirc: '\xD4',
    ocirc: '\xF4',
    ocir: '\u229A',
    Ocy: '\u041E',
    ocy: '\u043E',
    odash: '\u229D',
    Odblac: '\u0150',
    odblac: '\u0151',
    odiv: '\u2A38',
    odot: '\u2299',
    odsold: '\u29BC',
    OElig: '\u0152',
    oelig: '\u0153',
    ofcir: '\u29BF',
    Ofr: '\u{1D512}',
    ofr: '\u{1D52C}',
    ogon: '\u02DB',
    Ograve: '\xD2',
    ograve: '\xF2',
    ogt: '\u29C1',
    ohbar: '\u29B5',
    ohm: '\u03A9',
    oint: '\u222E',
    olarr: '\u21BA',
    olcir: '\u29BE',
    olcross: '\u29BB',
    oline: '\u203E',
    olt: '\u29C0',
    Omacr: '\u014C',
    omacr: '\u014D',
    Omega: '\u03A9',
    omega: '\u03C9',
    Omicron: '\u039F',
    omicron: '\u03BF',
    omid: '\u29B6',
    ominus: '\u2296',
    Oopf: '\u{1D546}',
    oopf: '\u{1D560}',
    opar: '\u29B7',
    OpenCurlyDoubleQuote: '\u201C',
    OpenCurlyQuote: '\u2018',
    operp: '\u29B9',
    oplus: '\u2295',
    orarr: '\u21BB',
    Or: '\u2A54',
    or: '\u2228',
    ord: '\u2A5D',
    order: '\u2134',
    orderof: '\u2134',
    ordf: '\xAA',
    ordm: '\xBA',
    origof: '\u22B6',
    oror: '\u2A56',
    orslope: '\u2A57',
    orv: '\u2A5B',
    oS: '\u24C8',
    Oscr: '\u{1D4AA}',
    oscr: '\u2134',
    Oslash: '\xD8',
    oslash: '\xF8',
    osol: '\u2298',
    Otilde: '\xD5',
    otilde: '\xF5',
    otimesas: '\u2A36',
    Otimes: '\u2A37',
    otimes: '\u2297',
    Ouml: '\xD6',
    ouml: '\xF6',
    ovbar: '\u233D',
    OverBar: '\u203E',
    OverBrace: '\u23DE',
    OverBracket: '\u23B4',
    OverParenthesis: '\u23DC',
    para: '\xB6',
    parallel: '\u2225',
    par: '\u2225',
    parsim: '\u2AF3',
    parsl: '\u2AFD',
    part: '\u2202',
    PartialD: '\u2202',
    Pcy: '\u041F',
    pcy: '\u043F',
    percnt: '%',
    period: '.',
    permil: '\u2030',
    perp: '\u22A5',
    pertenk: '\u2031',
    Pfr: '\u{1D513}',
    pfr: '\u{1D52D}',
    Phi: '\u03A6',
    phi: '\u03C6',
    phiv: '\u03D5',
    phmmat: '\u2133',
    phone: '\u260E',
    Pi: '\u03A0',
    pi: '\u03C0',
    pitchfork: '\u22D4',
    piv: '\u03D6',
    planck: '\u210F',
    planckh: '\u210E',
    plankv: '\u210F',
    plusacir: '\u2A23',
    plusb: '\u229E',
    pluscir: '\u2A22',
    plus: '+',
    plusdo: '\u2214',
    plusdu: '\u2A25',
    pluse: '\u2A72',
    PlusMinus: '\xB1',
    plusmn: '\xB1',
    plussim: '\u2A26',
    plustwo: '\u2A27',
    pm: '\xB1',
    Poincareplane: '\u210C',
    pointint: '\u2A15',
    popf: '\u{1D561}',
    Popf: '\u2119',
    pound: '\xA3',
    prap: '\u2AB7',
    Pr: '\u2ABB',
    pr: '\u227A',
    prcue: '\u227C',
    precapprox: '\u2AB7',
    prec: '\u227A',
    preccurlyeq: '\u227C',
    Precedes: '\u227A',
    PrecedesEqual: '\u2AAF',
    PrecedesSlantEqual: '\u227C',
    PrecedesTilde: '\u227E',
    preceq: '\u2AAF',
    precnapprox: '\u2AB9',
    precneqq: '\u2AB5',
    precnsim: '\u22E8',
    pre: '\u2AAF',
    prE: '\u2AB3',
    precsim: '\u227E',
    prime: '\u2032',
    Prime: '\u2033',
    primes: '\u2119',
    prnap: '\u2AB9',
    prnE: '\u2AB5',
    prnsim: '\u22E8',
    prod: '\u220F',
    Product: '\u220F',
    profalar: '\u232E',
    profline: '\u2312',
    profsurf: '\u2313',
    prop: '\u221D',
    Proportional: '\u221D',
    Proportion: '\u2237',
    propto: '\u221D',
    prsim: '\u227E',
    prurel: '\u22B0',
    Pscr: '\u{1D4AB}',
    pscr: '\u{1D4C5}',
    Psi: '\u03A8',
    psi: '\u03C8',
    puncsp: '\u2008',
    Qfr: '\u{1D514}',
    qfr: '\u{1D52E}',
    qint: '\u2A0C',
    qopf: '\u{1D562}',
    Qopf: '\u211A',
    qprime: '\u2057',
    Qscr: '\u{1D4AC}',
    qscr: '\u{1D4C6}',
    quaternions: '\u210D',
    quatint: '\u2A16',
    quest: '?',
    questeq: '\u225F',
    quot: '"',
    QUOT: '"',
    rAarr: '\u21DB',
    race: '\u223D\u0331',
    Racute: '\u0154',
    racute: '\u0155',
    radic: '\u221A',
    raemptyv: '\u29B3',
    rang: '\u27E9',
    Rang: '\u27EB',
    rangd: '\u2992',
    range: '\u29A5',
    rangle: '\u27E9',
    raquo: '\xBB',
    rarrap: '\u2975',
    rarrb: '\u21E5',
    rarrbfs: '\u2920',
    rarrc: '\u2933',
    rarr: '\u2192',
    Rarr: '\u21A0',
    rArr: '\u21D2',
    rarrfs: '\u291E',
    rarrhk: '\u21AA',
    rarrlp: '\u21AC',
    rarrpl: '\u2945',
    rarrsim: '\u2974',
    Rarrtl: '\u2916',
    rarrtl: '\u21A3',
    rarrw: '\u219D',
    ratail: '\u291A',
    rAtail: '\u291C',
    ratio: '\u2236',
    rationals: '\u211A',
    rbarr: '\u290D',
    rBarr: '\u290F',
    RBarr: '\u2910',
    rbbrk: '\u2773',
    rbrace: '}',
    rbrack: ']',
    rbrke: '\u298C',
    rbrksld: '\u298E',
    rbrkslu: '\u2990',
    Rcaron: '\u0158',
    rcaron: '\u0159',
    Rcedil: '\u0156',
    rcedil: '\u0157',
    rceil: '\u2309',
    rcub: '}',
    Rcy: '\u0420',
    rcy: '\u0440',
    rdca: '\u2937',
    rdldhar: '\u2969',
    rdquo: '\u201D',
    rdquor: '\u201D',
    rdsh: '\u21B3',
    real: '\u211C',
    realine: '\u211B',
    realpart: '\u211C',
    reals: '\u211D',
    Re: '\u211C',
    rect: '\u25AD',
    reg: '\xAE',
    REG: '\xAE',
    ReverseElement: '\u220B',
    ReverseEquilibrium: '\u21CB',
    ReverseUpEquilibrium: '\u296F',
    rfisht: '\u297D',
    rfloor: '\u230B',
    rfr: '\u{1D52F}',
    Rfr: '\u211C',
    rHar: '\u2964',
    rhard: '\u21C1',
    rharu: '\u21C0',
    rharul: '\u296C',
    Rho: '\u03A1',
    rho: '\u03C1',
    rhov: '\u03F1',
    RightAngleBracket: '\u27E9',
    RightArrowBar: '\u21E5',
    rightarrow: '\u2192',
    RightArrow: '\u2192',
    Rightarrow: '\u21D2',
    RightArrowLeftArrow: '\u21C4',
    rightarrowtail: '\u21A3',
    RightCeiling: '\u2309',
    RightDoubleBracket: '\u27E7',
    RightDownTeeVector: '\u295D',
    RightDownVectorBar: '\u2955',
    RightDownVector: '\u21C2',
    RightFloor: '\u230B',
    rightharpoondown: '\u21C1',
    rightharpoonup: '\u21C0',
    rightleftarrows: '\u21C4',
    rightleftharpoons: '\u21CC',
    rightrightarrows: '\u21C9',
    rightsquigarrow: '\u219D',
    RightTeeArrow: '\u21A6',
    RightTee: '\u22A2',
    RightTeeVector: '\u295B',
    rightthreetimes: '\u22CC',
    RightTriangleBar: '\u29D0',
    RightTriangle: '\u22B3',
    RightTriangleEqual: '\u22B5',
    RightUpDownVector: '\u294F',
    RightUpTeeVector: '\u295C',
    RightUpVectorBar: '\u2954',
    RightUpVector: '\u21BE',
    RightVectorBar: '\u2953',
    RightVector: '\u21C0',
    ring: '\u02DA',
    risingdotseq: '\u2253',
    rlarr: '\u21C4',
    rlhar: '\u21CC',
    rlm: '\u200F',
    rmoustache: '\u23B1',
    rmoust: '\u23B1',
    rnmid: '\u2AEE',
    roang: '\u27ED',
    roarr: '\u21FE',
    robrk: '\u27E7',
    ropar: '\u2986',
    ropf: '\u{1D563}',
    Ropf: '\u211D',
    roplus: '\u2A2E',
    rotimes: '\u2A35',
    RoundImplies: '\u2970',
    rpar: ')',
    rpargt: '\u2994',
    rppolint: '\u2A12',
    rrarr: '\u21C9',
    Rrightarrow: '\u21DB',
    rsaquo: '\u203A',
    rscr: '\u{1D4C7}',
    Rscr: '\u211B',
    rsh: '\u21B1',
    Rsh: '\u21B1',
    rsqb: ']',
    rsquo: '\u2019',
    rsquor: '\u2019',
    rthree: '\u22CC',
    rtimes: '\u22CA',
    rtri: '\u25B9',
    rtrie: '\u22B5',
    rtrif: '\u25B8',
    rtriltri: '\u29CE',
    RuleDelayed: '\u29F4',
    ruluhar: '\u2968',
    rx: '\u211E',
    Sacute: '\u015A',
    sacute: '\u015B',
    sbquo: '\u201A',
    scap: '\u2AB8',
    Scaron: '\u0160',
    scaron: '\u0161',
    Sc: '\u2ABC',
    sc: '\u227B',
    sccue: '\u227D',
    sce: '\u2AB0',
    scE: '\u2AB4',
    Scedil: '\u015E',
    scedil: '\u015F',
    Scirc: '\u015C',
    scirc: '\u015D',
    scnap: '\u2ABA',
    scnE: '\u2AB6',
    scnsim: '\u22E9',
    scpolint: '\u2A13',
    scsim: '\u227F',
    Scy: '\u0421',
    scy: '\u0441',
    sdotb: '\u22A1',
    sdot: '\u22C5',
    sdote: '\u2A66',
    searhk: '\u2925',
    searr: '\u2198',
    seArr: '\u21D8',
    searrow: '\u2198',
    sect: '\xA7',
    semi: ';',
    seswar: '\u2929',
    setminus: '\u2216',
    setmn: '\u2216',
    sext: '\u2736',
    Sfr: '\u{1D516}',
    sfr: '\u{1D530}',
    sfrown: '\u2322',
    sharp: '\u266F',
    SHCHcy: '\u0429',
    shchcy: '\u0449',
    SHcy: '\u0428',
    shcy: '\u0448',
    ShortDownArrow: '\u2193',
    ShortLeftArrow: '\u2190',
    shortmid: '\u2223',
    shortparallel: '\u2225',
    ShortRightArrow: '\u2192',
    ShortUpArrow: '\u2191',
    shy: '\xAD',
    Sigma: '\u03A3',
    sigma: '\u03C3',
    sigmaf: '\u03C2',
    sigmav: '\u03C2',
    sim: '\u223C',
    simdot: '\u2A6A',
    sime: '\u2243',
    simeq: '\u2243',
    simg: '\u2A9E',
    simgE: '\u2AA0',
    siml: '\u2A9D',
    simlE: '\u2A9F',
    simne: '\u2246',
    simplus: '\u2A24',
    simrarr: '\u2972',
    slarr: '\u2190',
    SmallCircle: '\u2218',
    smallsetminus: '\u2216',
    smashp: '\u2A33',
    smeparsl: '\u29E4',
    smid: '\u2223',
    smile: '\u2323',
    smt: '\u2AAA',
    smte: '\u2AAC',
    smtes: '\u2AAC\uFE00',
    SOFTcy: '\u042C',
    softcy: '\u044C',
    solbar: '\u233F',
    solb: '\u29C4',
    sol: '/',
    Sopf: '\u{1D54A}',
    sopf: '\u{1D564}',
    spades: '\u2660',
    spadesuit: '\u2660',
    spar: '\u2225',
    sqcap: '\u2293',
    sqcaps: '\u2293\uFE00',
    sqcup: '\u2294',
    sqcups: '\u2294\uFE00',
    Sqrt: '\u221A',
    sqsub: '\u228F',
    sqsube: '\u2291',
    sqsubset: '\u228F',
    sqsubseteq: '\u2291',
    sqsup: '\u2290',
    sqsupe: '\u2292',
    sqsupset: '\u2290',
    sqsupseteq: '\u2292',
    square: '\u25A1',
    Square: '\u25A1',
    SquareIntersection: '\u2293',
    SquareSubset: '\u228F',
    SquareSubsetEqual: '\u2291',
    SquareSuperset: '\u2290',
    SquareSupersetEqual: '\u2292',
    SquareUnion: '\u2294',
    squarf: '\u25AA',
    squ: '\u25A1',
    squf: '\u25AA',
    srarr: '\u2192',
    Sscr: '\u{1D4AE}',
    sscr: '\u{1D4C8}',
    ssetmn: '\u2216',
    ssmile: '\u2323',
    sstarf: '\u22C6',
    Star: '\u22C6',
    star: '\u2606',
    starf: '\u2605',
    straightepsilon: '\u03F5',
    straightphi: '\u03D5',
    strns: '\xAF',
    sub: '\u2282',
    Sub: '\u22D0',
    subdot: '\u2ABD',
    subE: '\u2AC5',
    sube: '\u2286',
    subedot: '\u2AC3',
    submult: '\u2AC1',
    subnE: '\u2ACB',
    subne: '\u228A',
    subplus: '\u2ABF',
    subrarr: '\u2979',
    subset: '\u2282',
    Subset: '\u22D0',
    subseteq: '\u2286',
    subseteqq: '\u2AC5',
    SubsetEqual: '\u2286',
    subsetneq: '\u228A',
    subsetneqq: '\u2ACB',
    subsim: '\u2AC7',
    subsub: '\u2AD5',
    subsup: '\u2AD3',
    succapprox: '\u2AB8',
    succ: '\u227B',
    succcurlyeq: '\u227D',
    Succeeds: '\u227B',
    SucceedsEqual: '\u2AB0',
    SucceedsSlantEqual: '\u227D',
    SucceedsTilde: '\u227F',
    succeq: '\u2AB0',
    succnapprox: '\u2ABA',
    succneqq: '\u2AB6',
    succnsim: '\u22E9',
    succsim: '\u227F',
    SuchThat: '\u220B',
    sum: '\u2211',
    Sum: '\u2211',
    sung: '\u266A',
    sup1: '\xB9',
    sup2: '\xB2',
    sup3: '\xB3',
    sup: '\u2283',
    Sup: '\u22D1',
    supdot: '\u2ABE',
    supdsub: '\u2AD8',
    supE: '\u2AC6',
    supe: '\u2287',
    supedot: '\u2AC4',
    Superset: '\u2283',
    SupersetEqual: '\u2287',
    suphsol: '\u27C9',
    suphsub: '\u2AD7',
    suplarr: '\u297B',
    supmult: '\u2AC2',
    supnE: '\u2ACC',
    supne: '\u228B',
    supplus: '\u2AC0',
    supset: '\u2283',
    Supset: '\u22D1',
    supseteq: '\u2287',
    supseteqq: '\u2AC6',
    supsetneq: '\u228B',
    supsetneqq: '\u2ACC',
    supsim: '\u2AC8',
    supsub: '\u2AD4',
    supsup: '\u2AD6',
    swarhk: '\u2926',
    swarr: '\u2199',
    swArr: '\u21D9',
    swarrow: '\u2199',
    swnwar: '\u292A',
    szlig: '\xDF',
    Tab: '	',
    target: '\u2316',
    Tau: '\u03A4',
    tau: '\u03C4',
    tbrk: '\u23B4',
    Tcaron: '\u0164',
    tcaron: '\u0165',
    Tcedil: '\u0162',
    tcedil: '\u0163',
    Tcy: '\u0422',
    tcy: '\u0442',
    tdot: '\u20DB',
    telrec: '\u2315',
    Tfr: '\u{1D517}',
    tfr: '\u{1D531}',
    there4: '\u2234',
    therefore: '\u2234',
    Therefore: '\u2234',
    Theta: '\u0398',
    theta: '\u03B8',
    thetasym: '\u03D1',
    thetav: '\u03D1',
    thickapprox: '\u2248',
    thicksim: '\u223C',
    ThickSpace: '\u205F\u200A',
    ThinSpace: '\u2009',
    thinsp: '\u2009',
    thkap: '\u2248',
    thksim: '\u223C',
    THORN: '\xDE',
    thorn: '\xFE',
    tilde: '\u02DC',
    Tilde: '\u223C',
    TildeEqual: '\u2243',
    TildeFullEqual: '\u2245',
    TildeTilde: '\u2248',
    timesbar: '\u2A31',
    timesb: '\u22A0',
    times: '\xD7',
    timesd: '\u2A30',
    tint: '\u222D',
    toea: '\u2928',
    topbot: '\u2336',
    topcir: '\u2AF1',
    top: '\u22A4',
    Topf: '\u{1D54B}',
    topf: '\u{1D565}',
    topfork: '\u2ADA',
    tosa: '\u2929',
    tprime: '\u2034',
    trade: '\u2122',
    TRADE: '\u2122',
    triangle: '\u25B5',
    triangledown: '\u25BF',
    triangleleft: '\u25C3',
    trianglelefteq: '\u22B4',
    triangleq: '\u225C',
    triangleright: '\u25B9',
    trianglerighteq: '\u22B5',
    tridot: '\u25EC',
    trie: '\u225C',
    triminus: '\u2A3A',
    TripleDot: '\u20DB',
    triplus: '\u2A39',
    trisb: '\u29CD',
    tritime: '\u2A3B',
    trpezium: '\u23E2',
    Tscr: '\u{1D4AF}',
    tscr: '\u{1D4C9}',
    TScy: '\u0426',
    tscy: '\u0446',
    TSHcy: '\u040B',
    tshcy: '\u045B',
    Tstrok: '\u0166',
    tstrok: '\u0167',
    twixt: '\u226C',
    twoheadleftarrow: '\u219E',
    twoheadrightarrow: '\u21A0',
    Uacute: '\xDA',
    uacute: '\xFA',
    uarr: '\u2191',
    Uarr: '\u219F',
    uArr: '\u21D1',
    Uarrocir: '\u2949',
    Ubrcy: '\u040E',
    ubrcy: '\u045E',
    Ubreve: '\u016C',
    ubreve: '\u016D',
    Ucirc: '\xDB',
    ucirc: '\xFB',
    Ucy: '\u0423',
    ucy: '\u0443',
    udarr: '\u21C5',
    Udblac: '\u0170',
    udblac: '\u0171',
    udhar: '\u296E',
    ufisht: '\u297E',
    Ufr: '\u{1D518}',
    ufr: '\u{1D532}',
    Ugrave: '\xD9',
    ugrave: '\xF9',
    uHar: '\u2963',
    uharl: '\u21BF',
    uharr: '\u21BE',
    uhblk: '\u2580',
    ulcorn: '\u231C',
    ulcorner: '\u231C',
    ulcrop: '\u230F',
    ultri: '\u25F8',
    Umacr: '\u016A',
    umacr: '\u016B',
    uml: '\xA8',
    UnderBar: '_',
    UnderBrace: '\u23DF',
    UnderBracket: '\u23B5',
    UnderParenthesis: '\u23DD',
    Union: '\u22C3',
    UnionPlus: '\u228E',
    Uogon: '\u0172',
    uogon: '\u0173',
    Uopf: '\u{1D54C}',
    uopf: '\u{1D566}',
    UpArrowBar: '\u2912',
    uparrow: '\u2191',
    UpArrow: '\u2191',
    Uparrow: '\u21D1',
    UpArrowDownArrow: '\u21C5',
    updownarrow: '\u2195',
    UpDownArrow: '\u2195',
    Updownarrow: '\u21D5',
    UpEquilibrium: '\u296E',
    upharpoonleft: '\u21BF',
    upharpoonright: '\u21BE',
    uplus: '\u228E',
    UpperLeftArrow: '\u2196',
    UpperRightArrow: '\u2197',
    upsi: '\u03C5',
    Upsi: '\u03D2',
    upsih: '\u03D2',
    Upsilon: '\u03A5',
    upsilon: '\u03C5',
    UpTeeArrow: '\u21A5',
    UpTee: '\u22A5',
    upuparrows: '\u21C8',
    urcorn: '\u231D',
    urcorner: '\u231D',
    urcrop: '\u230E',
    Uring: '\u016E',
    uring: '\u016F',
    urtri: '\u25F9',
    Uscr: '\u{1D4B0}',
    uscr: '\u{1D4CA}',
    utdot: '\u22F0',
    Utilde: '\u0168',
    utilde: '\u0169',
    utri: '\u25B5',
    utrif: '\u25B4',
    uuarr: '\u21C8',
    Uuml: '\xDC',
    uuml: '\xFC',
    uwangle: '\u29A7',
    vangrt: '\u299C',
    varepsilon: '\u03F5',
    varkappa: '\u03F0',
    varnothing: '\u2205',
    varphi: '\u03D5',
    varpi: '\u03D6',
    varpropto: '\u221D',
    varr: '\u2195',
    vArr: '\u21D5',
    varrho: '\u03F1',
    varsigma: '\u03C2',
    varsubsetneq: '\u228A\uFE00',
    varsubsetneqq: '\u2ACB\uFE00',
    varsupsetneq: '\u228B\uFE00',
    varsupsetneqq: '\u2ACC\uFE00',
    vartheta: '\u03D1',
    vartriangleleft: '\u22B2',
    vartriangleright: '\u22B3',
    vBar: '\u2AE8',
    Vbar: '\u2AEB',
    vBarv: '\u2AE9',
    Vcy: '\u0412',
    vcy: '\u0432',
    vdash: '\u22A2',
    vDash: '\u22A8',
    Vdash: '\u22A9',
    VDash: '\u22AB',
    Vdashl: '\u2AE6',
    veebar: '\u22BB',
    vee: '\u2228',
    Vee: '\u22C1',
    veeeq: '\u225A',
    vellip: '\u22EE',
    verbar: '|',
    Verbar: '\u2016',
    vert: '|',
    Vert: '\u2016',
    VerticalBar: '\u2223',
    VerticalLine: '|',
    VerticalSeparator: '\u2758',
    VerticalTilde: '\u2240',
    VeryThinSpace: '\u200A',
    Vfr: '\u{1D519}',
    vfr: '\u{1D533}',
    vltri: '\u22B2',
    vnsub: '\u2282\u20D2',
    vnsup: '\u2283\u20D2',
    Vopf: '\u{1D54D}',
    vopf: '\u{1D567}',
    vprop: '\u221D',
    vrtri: '\u22B3',
    Vscr: '\u{1D4B1}',
    vscr: '\u{1D4CB}',
    vsubnE: '\u2ACB\uFE00',
    vsubne: '\u228A\uFE00',
    vsupnE: '\u2ACC\uFE00',
    vsupne: '\u228B\uFE00',
    Vvdash: '\u22AA',
    vzigzag: '\u299A',
    Wcirc: '\u0174',
    wcirc: '\u0175',
    wedbar: '\u2A5F',
    wedge: '\u2227',
    Wedge: '\u22C0',
    wedgeq: '\u2259',
    weierp: '\u2118',
    Wfr: '\u{1D51A}',
    wfr: '\u{1D534}',
    Wopf: '\u{1D54E}',
    wopf: '\u{1D568}',
    wp: '\u2118',
    wr: '\u2240',
    wreath: '\u2240',
    Wscr: '\u{1D4B2}',
    wscr: '\u{1D4CC}',
    xcap: '\u22C2',
    xcirc: '\u25EF',
    xcup: '\u22C3',
    xdtri: '\u25BD',
    Xfr: '\u{1D51B}',
    xfr: '\u{1D535}',
    xharr: '\u27F7',
    xhArr: '\u27FA',
    Xi: '\u039E',
    xi: '\u03BE',
    xlarr: '\u27F5',
    xlArr: '\u27F8',
    xmap: '\u27FC',
    xnis: '\u22FB',
    xodot: '\u2A00',
    Xopf: '\u{1D54F}',
    xopf: '\u{1D569}',
    xoplus: '\u2A01',
    xotime: '\u2A02',
    xrarr: '\u27F6',
    xrArr: '\u27F9',
    Xscr: '\u{1D4B3}',
    xscr: '\u{1D4CD}',
    xsqcup: '\u2A06',
    xuplus: '\u2A04',
    xutri: '\u25B3',
    xvee: '\u22C1',
    xwedge: '\u22C0',
    Yacute: '\xDD',
    yacute: '\xFD',
    YAcy: '\u042F',
    yacy: '\u044F',
    Ycirc: '\u0176',
    ycirc: '\u0177',
    Ycy: '\u042B',
    ycy: '\u044B',
    yen: '\xA5',
    Yfr: '\u{1D51C}',
    yfr: '\u{1D536}',
    YIcy: '\u0407',
    yicy: '\u0457',
    Yopf: '\u{1D550}',
    yopf: '\u{1D56A}',
    Yscr: '\u{1D4B4}',
    yscr: '\u{1D4CE}',
    YUcy: '\u042E',
    yucy: '\u044E',
    yuml: '\xFF',
    Yuml: '\u0178',
    Zacute: '\u0179',
    zacute: '\u017A',
    Zcaron: '\u017D',
    zcaron: '\u017E',
    Zcy: '\u0417',
    zcy: '\u0437',
    Zdot: '\u017B',
    zdot: '\u017C',
    zeetrf: '\u2128',
    ZeroWidthSpace: '\u200B',
    Zeta: '\u0396',
    zeta: '\u03B6',
    zfr: '\u{1D537}',
    Zfr: '\u2128',
    ZHcy: '\u0416',
    zhcy: '\u0436',
    zigrarr: '\u21DD',
    zopf: '\u{1D56B}',
    Zopf: '\u2124',
    Zscr: '\u{1D4B5}',
    zscr: '\u{1D4CF}',
    zwj: '\u200D',
    zwnj: '\u200C',
  },
  Qn = /^#[xX]([A-Fa-f0-9]+)$/,
  Jn = /^#([0-9]+)$/,
  $n = /^([A-Za-z0-9]+)$/,
  lr = (function () {
    function e(t) {
      this.named = t;
    }
    return (
      (e.prototype.parse = function (t) {
        if (t) {
          var r = t.match(Qn);
          if (r) return String.fromCharCode(parseInt(r[1], 16));
          if (((r = t.match(Jn)), r)) return String.fromCharCode(parseInt(r[1], 10));
          if (((r = t.match($n)), r)) return this.named[r[1]];
        }
      }),
      e
    );
  })(),
  Xn = /[\t\n\f ]/,
  Zn = /[A-Za-z]/,
  ti = /\r\n?/g;
function _(e) {
  return Xn.test(e);
}
function vs(e) {
  return Zn.test(e);
}
function ei(e) {
  return e.replace(
    ti,
    `
`
  );
}
var cr = (function () {
    function e(t, r, s) {
      s === void 0 && (s = 'precompile'),
        (this.delegate = t),
        (this.entityParser = r),
        (this.mode = s),
        (this.state = 'beforeData'),
        (this.line = -1),
        (this.column = -1),
        (this.input = ''),
        (this.index = -1),
        (this.tagNameBuffer = ''),
        (this.states = {
          beforeData: function () {
            var n = this.peek();
            if (n === '<' && !this.isIgnoredEndTag())
              this.transitionTo('tagOpen'), this.markTagStart(), this.consume();
            else {
              if (
                this.mode === 'precompile' &&
                n ===
                  `
`
              ) {
                var i = this.tagNameBuffer.toLowerCase();
                (i === 'pre' || i === 'textarea') && this.consume();
              }
              this.transitionTo('data'), this.delegate.beginData();
            }
          },
          data: function () {
            var n = this.peek(),
              i = this.tagNameBuffer;
            n === '<' && !this.isIgnoredEndTag()
              ? (this.delegate.finishData(),
                this.transitionTo('tagOpen'),
                this.markTagStart(),
                this.consume())
              : n === '&' && i !== 'script' && i !== 'style'
                ? (this.consume(), this.delegate.appendToData(this.consumeCharRef() || '&'))
                : (this.consume(), this.delegate.appendToData(n));
          },
          tagOpen: function () {
            var n = this.consume();
            n === '!'
              ? this.transitionTo('markupDeclarationOpen')
              : n === '/'
                ? this.transitionTo('endTagOpen')
                : (n === '@' || n === ':' || vs(n)) &&
                  (this.transitionTo('tagName'),
                  (this.tagNameBuffer = ''),
                  this.delegate.beginStartTag(),
                  this.appendToTagName(n));
          },
          markupDeclarationOpen: function () {
            var n = this.consume();
            if (n === '-' && this.peek() === '-')
              this.consume(), this.transitionTo('commentStart'), this.delegate.beginComment();
            else {
              var i =
                n.toUpperCase() + this.input.substring(this.index, this.index + 6).toUpperCase();
              i === 'DOCTYPE' &&
                (this.consume(),
                this.consume(),
                this.consume(),
                this.consume(),
                this.consume(),
                this.consume(),
                this.transitionTo('doctype'),
                this.delegate.beginDoctype && this.delegate.beginDoctype());
            }
          },
          doctype: function () {
            var n = this.consume();
            _(n) && this.transitionTo('beforeDoctypeName');
          },
          beforeDoctypeName: function () {
            var n = this.consume();
            _(n) ||
              (this.transitionTo('doctypeName'),
              this.delegate.appendToDoctypeName &&
                this.delegate.appendToDoctypeName(n.toLowerCase()));
          },
          doctypeName: function () {
            var n = this.consume();
            _(n)
              ? this.transitionTo('afterDoctypeName')
              : n === '>'
                ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                  this.transitionTo('beforeData'))
                : this.delegate.appendToDoctypeName &&
                  this.delegate.appendToDoctypeName(n.toLowerCase());
          },
          afterDoctypeName: function () {
            var n = this.consume();
            if (!_(n))
              if (n === '>')
                this.delegate.endDoctype && this.delegate.endDoctype(),
                  this.transitionTo('beforeData');
              else {
                var i =
                    n.toUpperCase() +
                    this.input.substring(this.index, this.index + 5).toUpperCase(),
                  a = i.toUpperCase() === 'PUBLIC',
                  o = i.toUpperCase() === 'SYSTEM';
                (a || o) &&
                  (this.consume(),
                  this.consume(),
                  this.consume(),
                  this.consume(),
                  this.consume(),
                  this.consume()),
                  a
                    ? this.transitionTo('afterDoctypePublicKeyword')
                    : o && this.transitionTo('afterDoctypeSystemKeyword');
              }
          },
          afterDoctypePublicKeyword: function () {
            var n = this.peek();
            _(n)
              ? (this.transitionTo('beforeDoctypePublicIdentifier'), this.consume())
              : n === '"'
                ? (this.transitionTo('doctypePublicIdentifierDoubleQuoted'), this.consume())
                : n === "'"
                  ? (this.transitionTo('doctypePublicIdentifierSingleQuoted'), this.consume())
                  : n === '>' &&
                    (this.consume(),
                    this.delegate.endDoctype && this.delegate.endDoctype(),
                    this.transitionTo('beforeData'));
          },
          doctypePublicIdentifierDoubleQuoted: function () {
            var n = this.consume();
            n === '"'
              ? this.transitionTo('afterDoctypePublicIdentifier')
              : n === '>'
                ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                  this.transitionTo('beforeData'))
                : this.delegate.appendToDoctypePublicIdentifier &&
                  this.delegate.appendToDoctypePublicIdentifier(n);
          },
          doctypePublicIdentifierSingleQuoted: function () {
            var n = this.consume();
            n === "'"
              ? this.transitionTo('afterDoctypePublicIdentifier')
              : n === '>'
                ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                  this.transitionTo('beforeData'))
                : this.delegate.appendToDoctypePublicIdentifier &&
                  this.delegate.appendToDoctypePublicIdentifier(n);
          },
          afterDoctypePublicIdentifier: function () {
            var n = this.consume();
            _(n)
              ? this.transitionTo('betweenDoctypePublicAndSystemIdentifiers')
              : n === '>'
                ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                  this.transitionTo('beforeData'))
                : n === '"'
                  ? this.transitionTo('doctypeSystemIdentifierDoubleQuoted')
                  : n === "'" && this.transitionTo('doctypeSystemIdentifierSingleQuoted');
          },
          betweenDoctypePublicAndSystemIdentifiers: function () {
            var n = this.consume();
            _(n) ||
              (n === '>'
                ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                  this.transitionTo('beforeData'))
                : n === '"'
                  ? this.transitionTo('doctypeSystemIdentifierDoubleQuoted')
                  : n === "'" && this.transitionTo('doctypeSystemIdentifierSingleQuoted'));
          },
          doctypeSystemIdentifierDoubleQuoted: function () {
            var n = this.consume();
            n === '"'
              ? this.transitionTo('afterDoctypeSystemIdentifier')
              : n === '>'
                ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                  this.transitionTo('beforeData'))
                : this.delegate.appendToDoctypeSystemIdentifier &&
                  this.delegate.appendToDoctypeSystemIdentifier(n);
          },
          doctypeSystemIdentifierSingleQuoted: function () {
            var n = this.consume();
            n === "'"
              ? this.transitionTo('afterDoctypeSystemIdentifier')
              : n === '>'
                ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                  this.transitionTo('beforeData'))
                : this.delegate.appendToDoctypeSystemIdentifier &&
                  this.delegate.appendToDoctypeSystemIdentifier(n);
          },
          afterDoctypeSystemIdentifier: function () {
            var n = this.consume();
            _(n) ||
              (n === '>' &&
                (this.delegate.endDoctype && this.delegate.endDoctype(),
                this.transitionTo('beforeData')));
          },
          commentStart: function () {
            var n = this.consume();
            n === '-'
              ? this.transitionTo('commentStartDash')
              : n === '>'
                ? (this.delegate.finishComment(), this.transitionTo('beforeData'))
                : (this.delegate.appendToCommentData(n), this.transitionTo('comment'));
          },
          commentStartDash: function () {
            var n = this.consume();
            n === '-'
              ? this.transitionTo('commentEnd')
              : n === '>'
                ? (this.delegate.finishComment(), this.transitionTo('beforeData'))
                : (this.delegate.appendToCommentData('-'), this.transitionTo('comment'));
          },
          comment: function () {
            var n = this.consume();
            n === '-' ? this.transitionTo('commentEndDash') : this.delegate.appendToCommentData(n);
          },
          commentEndDash: function () {
            var n = this.consume();
            n === '-'
              ? this.transitionTo('commentEnd')
              : (this.delegate.appendToCommentData('-' + n), this.transitionTo('comment'));
          },
          commentEnd: function () {
            var n = this.consume();
            n === '>'
              ? (this.delegate.finishComment(), this.transitionTo('beforeData'))
              : (this.delegate.appendToCommentData('--' + n), this.transitionTo('comment'));
          },
          tagName: function () {
            var n = this.consume();
            _(n)
              ? this.transitionTo('beforeAttributeName')
              : n === '/'
                ? this.transitionTo('selfClosingStartTag')
                : n === '>'
                  ? (this.delegate.finishTag(), this.transitionTo('beforeData'))
                  : this.appendToTagName(n);
          },
          endTagName: function () {
            var n = this.consume();
            _(n)
              ? (this.transitionTo('beforeAttributeName'), (this.tagNameBuffer = ''))
              : n === '/'
                ? (this.transitionTo('selfClosingStartTag'), (this.tagNameBuffer = ''))
                : n === '>'
                  ? (this.delegate.finishTag(),
                    this.transitionTo('beforeData'),
                    (this.tagNameBuffer = ''))
                  : this.appendToTagName(n);
          },
          beforeAttributeName: function () {
            var n = this.peek();
            if (_(n)) {
              this.consume();
              return;
            } else
              n === '/'
                ? (this.transitionTo('selfClosingStartTag'), this.consume())
                : n === '>'
                  ? (this.consume(), this.delegate.finishTag(), this.transitionTo('beforeData'))
                  : n === '='
                    ? (this.delegate.reportSyntaxError(
                        'attribute name cannot start with equals sign'
                      ),
                      this.transitionTo('attributeName'),
                      this.delegate.beginAttribute(),
                      this.consume(),
                      this.delegate.appendToAttributeName(n))
                    : (this.transitionTo('attributeName'), this.delegate.beginAttribute());
          },
          attributeName: function () {
            var n = this.peek();
            _(n)
              ? (this.transitionTo('afterAttributeName'), this.consume())
              : n === '/'
                ? (this.delegate.beginAttributeValue(!1),
                  this.delegate.finishAttributeValue(),
                  this.consume(),
                  this.transitionTo('selfClosingStartTag'))
                : n === '='
                  ? (this.transitionTo('beforeAttributeValue'), this.consume())
                  : n === '>'
                    ? (this.delegate.beginAttributeValue(!1),
                      this.delegate.finishAttributeValue(),
                      this.consume(),
                      this.delegate.finishTag(),
                      this.transitionTo('beforeData'))
                    : n === '"' || n === "'" || n === '<'
                      ? (this.delegate.reportSyntaxError(
                          n + ' is not a valid character within attribute names'
                        ),
                        this.consume(),
                        this.delegate.appendToAttributeName(n))
                      : (this.consume(), this.delegate.appendToAttributeName(n));
          },
          afterAttributeName: function () {
            var n = this.peek();
            if (_(n)) {
              this.consume();
              return;
            } else
              n === '/'
                ? (this.delegate.beginAttributeValue(!1),
                  this.delegate.finishAttributeValue(),
                  this.consume(),
                  this.transitionTo('selfClosingStartTag'))
                : n === '='
                  ? (this.consume(), this.transitionTo('beforeAttributeValue'))
                  : n === '>'
                    ? (this.delegate.beginAttributeValue(!1),
                      this.delegate.finishAttributeValue(),
                      this.consume(),
                      this.delegate.finishTag(),
                      this.transitionTo('beforeData'))
                    : (this.delegate.beginAttributeValue(!1),
                      this.delegate.finishAttributeValue(),
                      this.transitionTo('attributeName'),
                      this.delegate.beginAttribute(),
                      this.consume(),
                      this.delegate.appendToAttributeName(n));
          },
          beforeAttributeValue: function () {
            var n = this.peek();
            _(n)
              ? this.consume()
              : n === '"'
                ? (this.transitionTo('attributeValueDoubleQuoted'),
                  this.delegate.beginAttributeValue(!0),
                  this.consume())
                : n === "'"
                  ? (this.transitionTo('attributeValueSingleQuoted'),
                    this.delegate.beginAttributeValue(!0),
                    this.consume())
                  : n === '>'
                    ? (this.delegate.beginAttributeValue(!1),
                      this.delegate.finishAttributeValue(),
                      this.consume(),
                      this.delegate.finishTag(),
                      this.transitionTo('beforeData'))
                    : (this.transitionTo('attributeValueUnquoted'),
                      this.delegate.beginAttributeValue(!1),
                      this.consume(),
                      this.delegate.appendToAttributeValue(n));
          },
          attributeValueDoubleQuoted: function () {
            var n = this.consume();
            n === '"'
              ? (this.delegate.finishAttributeValue(),
                this.transitionTo('afterAttributeValueQuoted'))
              : n === '&'
                ? this.delegate.appendToAttributeValue(this.consumeCharRef() || '&')
                : this.delegate.appendToAttributeValue(n);
          },
          attributeValueSingleQuoted: function () {
            var n = this.consume();
            n === "'"
              ? (this.delegate.finishAttributeValue(),
                this.transitionTo('afterAttributeValueQuoted'))
              : n === '&'
                ? this.delegate.appendToAttributeValue(this.consumeCharRef() || '&')
                : this.delegate.appendToAttributeValue(n);
          },
          attributeValueUnquoted: function () {
            var n = this.peek();
            _(n)
              ? (this.delegate.finishAttributeValue(),
                this.consume(),
                this.transitionTo('beforeAttributeName'))
              : n === '/'
                ? (this.delegate.finishAttributeValue(),
                  this.consume(),
                  this.transitionTo('selfClosingStartTag'))
                : n === '&'
                  ? (this.consume(),
                    this.delegate.appendToAttributeValue(this.consumeCharRef() || '&'))
                  : n === '>'
                    ? (this.delegate.finishAttributeValue(),
                      this.consume(),
                      this.delegate.finishTag(),
                      this.transitionTo('beforeData'))
                    : (this.consume(), this.delegate.appendToAttributeValue(n));
          },
          afterAttributeValueQuoted: function () {
            var n = this.peek();
            _(n)
              ? (this.consume(), this.transitionTo('beforeAttributeName'))
              : n === '/'
                ? (this.consume(), this.transitionTo('selfClosingStartTag'))
                : n === '>'
                  ? (this.consume(), this.delegate.finishTag(), this.transitionTo('beforeData'))
                  : this.transitionTo('beforeAttributeName');
          },
          selfClosingStartTag: function () {
            var n = this.peek();
            n === '>'
              ? (this.consume(),
                this.delegate.markTagAsSelfClosing(),
                this.delegate.finishTag(),
                this.transitionTo('beforeData'))
              : this.transitionTo('beforeAttributeName');
          },
          endTagOpen: function () {
            var n = this.consume();
            (n === '@' || n === ':' || vs(n)) &&
              (this.transitionTo('endTagName'),
              (this.tagNameBuffer = ''),
              this.delegate.beginEndTag(),
              this.appendToTagName(n));
          },
        }),
        this.reset();
    }
    return (
      (e.prototype.reset = function () {
        this.transitionTo('beforeData'),
          (this.input = ''),
          (this.tagNameBuffer = ''),
          (this.index = 0),
          (this.line = 1),
          (this.column = 0),
          this.delegate.reset();
      }),
      (e.prototype.transitionTo = function (t) {
        this.state = t;
      }),
      (e.prototype.tokenize = function (t) {
        this.reset(), this.tokenizePart(t), this.tokenizeEOF();
      }),
      (e.prototype.tokenizePart = function (t) {
        for (this.input += ei(t); this.index < this.input.length; ) {
          var r = this.states[this.state];
          if (r !== void 0) r.call(this);
          else throw new Error('unhandled state ' + this.state);
        }
      }),
      (e.prototype.tokenizeEOF = function () {
        this.flushData();
      }),
      (e.prototype.flushData = function () {
        this.state === 'data' && (this.delegate.finishData(), this.transitionTo('beforeData'));
      }),
      (e.prototype.peek = function () {
        return this.input.charAt(this.index);
      }),
      (e.prototype.consume = function () {
        var t = this.peek();
        return (
          this.index++,
          t ===
          `
`
            ? (this.line++, (this.column = 0))
            : this.column++,
          t
        );
      }),
      (e.prototype.consumeCharRef = function () {
        var t = this.input.indexOf(';', this.index);
        if (t !== -1) {
          var r = this.input.slice(this.index, t),
            s = this.entityParser.parse(r);
          if (s) {
            for (var n = r.length; n; ) this.consume(), n--;
            return this.consume(), s;
          }
        }
      }),
      (e.prototype.markTagStart = function () {
        this.delegate.tagOpen();
      }),
      (e.prototype.appendToTagName = function (t) {
        (this.tagNameBuffer += t), this.delegate.appendToTagName(t);
      }),
      (e.prototype.isIgnoredEndTag = function () {
        var t = this.tagNameBuffer;
        return (
          (t === 'title' && this.input.substring(this.index, this.index + 8) !== '</title>') ||
          (t === 'style' && this.input.substring(this.index, this.index + 8) !== '</style>') ||
          (t === 'script' && this.input.substring(this.index, this.index + 9) !== '<\/script>')
        );
      }),
      e
    );
  })(),
  eo = (function () {
    function e(t, r) {
      r === void 0 && (r = {}),
        (this.options = r),
        (this.token = null),
        (this.startLine = 1),
        (this.startColumn = 0),
        (this.tokens = []),
        (this.tokenizer = new cr(this, t, r.mode)),
        (this._currentAttribute = void 0);
    }
    return (
      (e.prototype.tokenize = function (t) {
        return (this.tokens = []), this.tokenizer.tokenize(t), this.tokens;
      }),
      (e.prototype.tokenizePart = function (t) {
        return (this.tokens = []), this.tokenizer.tokenizePart(t), this.tokens;
      }),
      (e.prototype.tokenizeEOF = function () {
        return (this.tokens = []), this.tokenizer.tokenizeEOF(), this.tokens[0];
      }),
      (e.prototype.reset = function () {
        (this.token = null), (this.startLine = 1), (this.startColumn = 0);
      }),
      (e.prototype.current = function () {
        var t = this.token;
        if (t === null) throw new Error('token was unexpectedly null');
        if (arguments.length === 0) return t;
        for (var r = 0; r < arguments.length; r++) if (t.type === arguments[r]) return t;
        throw new Error('token type was unexpectedly ' + t.type);
      }),
      (e.prototype.push = function (t) {
        (this.token = t), this.tokens.push(t);
      }),
      (e.prototype.currentAttribute = function () {
        return this._currentAttribute;
      }),
      (e.prototype.addLocInfo = function () {
        this.options.loc &&
          (this.current().loc = {
            start: { line: this.startLine, column: this.startColumn },
            end: { line: this.tokenizer.line, column: this.tokenizer.column },
          }),
          (this.startLine = this.tokenizer.line),
          (this.startColumn = this.tokenizer.column);
      }),
      (e.prototype.beginDoctype = function () {
        this.push({ type: 'Doctype', name: '' });
      }),
      (e.prototype.appendToDoctypeName = function (t) {
        this.current('Doctype').name += t;
      }),
      (e.prototype.appendToDoctypePublicIdentifier = function (t) {
        var r = this.current('Doctype');
        r.publicIdentifier === void 0 ? (r.publicIdentifier = t) : (r.publicIdentifier += t);
      }),
      (e.prototype.appendToDoctypeSystemIdentifier = function (t) {
        var r = this.current('Doctype');
        r.systemIdentifier === void 0 ? (r.systemIdentifier = t) : (r.systemIdentifier += t);
      }),
      (e.prototype.endDoctype = function () {
        this.addLocInfo();
      }),
      (e.prototype.beginData = function () {
        this.push({ type: 'Chars', chars: '' });
      }),
      (e.prototype.appendToData = function (t) {
        this.current('Chars').chars += t;
      }),
      (e.prototype.finishData = function () {
        this.addLocInfo();
      }),
      (e.prototype.beginComment = function () {
        this.push({ type: 'Comment', chars: '' });
      }),
      (e.prototype.appendToCommentData = function (t) {
        this.current('Comment').chars += t;
      }),
      (e.prototype.finishComment = function () {
        this.addLocInfo();
      }),
      (e.prototype.tagOpen = function () {}),
      (e.prototype.beginStartTag = function () {
        this.push({ type: 'StartTag', tagName: '', attributes: [], selfClosing: !1 });
      }),
      (e.prototype.beginEndTag = function () {
        this.push({ type: 'EndTag', tagName: '' });
      }),
      (e.prototype.finishTag = function () {
        this.addLocInfo();
      }),
      (e.prototype.markTagAsSelfClosing = function () {
        this.current('StartTag').selfClosing = !0;
      }),
      (e.prototype.appendToTagName = function (t) {
        this.current('StartTag', 'EndTag').tagName += t;
      }),
      (e.prototype.beginAttribute = function () {
        this._currentAttribute = ['', '', !1];
      }),
      (e.prototype.appendToAttributeName = function (t) {
        this.currentAttribute()[0] += t;
      }),
      (e.prototype.beginAttributeValue = function (t) {
        this.currentAttribute()[2] = t;
      }),
      (e.prototype.appendToAttributeValue = function (t) {
        this.currentAttribute()[1] += t;
      }),
      (e.prototype.finishAttributeValue = function () {
        this.current('StartTag').attributes.push(this._currentAttribute);
      }),
      (e.prototype.reportSyntaxError = function (t) {
        this.current().syntaxError = t;
      }),
      e
    );
  })();
var Ne = {
  Append: 1,
  TrustingAppend: 2,
  Comment: 3,
  Modifier: 4,
  StrictModifier: 5,
  Block: 6,
  StrictBlock: 7,
  Component: 8,
  OpenElement: 10,
  OpenElementWithSplat: 11,
  FlushElement: 12,
  CloseElement: 13,
  StaticAttr: 14,
  DynamicAttr: 15,
  ComponentAttr: 16,
  AttrSplat: 17,
  Yield: 18,
  DynamicArg: 20,
  StaticArg: 21,
  TrustingDynamicAttr: 22,
  TrustingComponentAttr: 23,
  StaticComponentAttr: 24,
  Debugger: 26,
  Undefined: 27,
  Call: 28,
  Concat: 29,
  GetSymbol: 30,
  GetLexicalSymbol: 32,
  GetStrictKeyword: 31,
  GetFreeAsComponentOrHelperHead: 35,
  GetFreeAsHelperHead: 37,
  GetFreeAsModifierHead: 38,
  GetFreeAsComponentHead: 39,
  InElement: 40,
  If: 41,
  Each: 42,
  Let: 44,
  WithDynamicVars: 45,
  InvokeComponent: 46,
  HasBlock: 48,
  HasBlockParams: 49,
  Curry: 50,
  Not: 51,
  IfInline: 52,
  GetDynamicVar: 53,
  Log: 54,
};
function ws(e) {
  return function (t) {
    return Array.isArray(t) && t[0] === e;
  };
}
var so = ws(Ne.FlushElement);
var no = ws(Ne.GetSymbol);
var Ds = !1,
  ri = /["\x26\xa0]/u,
  fo = new RegExp(ri.source, 'gu'),
  si = /[&<>\xa0]/u,
  mo = new RegExp(si.source, 'gu');
var dr = new Set([
  'area',
  'base',
  'br',
  'col',
  'command',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);
function ni(e) {
  var t;
  return dr.has(e.toLowerCase()) && ((t = e[0]) == null ? void 0 : t.toLowerCase()) === e[0];
}
function ce(e) {
  return !!e && e.length > 0;
}
function Nr(e) {
  return e.length === 0 ? void 0 : e[e.length - 1];
}
function ii(e) {
  return e.length === 0 ? void 0 : e[0];
}
var pt = Object.freeze({ line: 1, column: 0 }),
  ai = Object.freeze({ source: '(synthetic)', start: pt, end: pt }),
  gr = Object.freeze({ source: '(nonexistent)', start: pt, end: pt }),
  ht = Object.freeze({ source: '(broken)', start: pt, end: pt }),
  br = class {
    constructor(t) {
      this._whens = t;
    }
    first(t) {
      for (let r of this._whens) {
        let s = r.match(t);
        if (ce(s)) return s[0];
      }
      return null;
    }
  },
  Pe = class {
    get(t, r) {
      let s = this._map.get(t);
      return s || ((s = r()), this._map.set(t, s), s);
    }
    add(t, r) {
      this._map.set(t, r);
    }
    match(t) {
      let r = (function (a) {
          switch (a) {
            case 'Broken':
            case 'InternalsSynthetic':
            case 'NonExistent':
              return 'IS_INVISIBLE';
            default:
              return a;
          }
        })(t),
        s = [],
        n = this._map.get(r),
        i = this._map.get('MATCH_ANY');
      return n && s.push(n), i && s.push(i), s;
    }
    constructor() {
      this._map = new Map();
    }
  };
function _s(e) {
  return e(new yr()).validate();
}
var yr = class {
    validate() {
      return (t, r) => this.matchFor(t.kind, r.kind)(t, r);
    }
    matchFor(t, r) {
      let s = this._whens.match(t);
      return ce(), new br(s).first(r);
    }
    when(t, r, s) {
      return this._whens.get(t, () => new Pe()).add(r, s), this;
    }
    constructor() {
      this._whens = new Pe();
    }
  },
  kr = class e {
    static synthetic(t) {
      let r = D.synthetic(t);
      return new e({ loc: r, chars: t });
    }
    static load(t, r) {
      return new e({ loc: D.load(t, r[1]), chars: r[0] });
    }
    constructor(t) {
      (this.loc = t.loc), (this.chars = t.chars);
    }
    getString() {
      return this.chars;
    }
    serialize() {
      return [this.chars, this.loc.serialize()];
    }
  },
  D = class e {
    static get NON_EXISTENT() {
      return new et('NonExistent', gr).wrap();
    }
    static load(t, r) {
      return typeof r == 'number'
        ? e.forCharPositions(t, r, r)
        : typeof r == 'string'
          ? e.synthetic(r)
          : Array.isArray(r)
            ? e.forCharPositions(t, r[0], r[1])
            : r === 'NonExistent'
              ? e.NON_EXISTENT
              : r === 'Broken'
                ? e.broken(ht)
                : void ds(r);
    }
    static forHbsLoc(t, r) {
      let s = new mt(t, r.start),
        n = new mt(t, r.end);
      return new oe(t, { start: s, end: n }, r).wrap();
    }
    static forCharPositions(t, r, s) {
      let n = new Tt(t, r),
        i = new Tt(t, s);
      return new ae(t, { start: n, end: i }).wrap();
    }
    static synthetic(t) {
      return new et('InternalsSynthetic', gr, t).wrap();
    }
    static broken(t = ht) {
      return new et('Broken', t).wrap();
    }
    constructor(t) {
      var r;
      (this.data = t), (this.isInvisible = (r = t.kind) !== 'CharPosition' && r !== 'HbsPosition');
    }
    getStart() {
      return this.data.getStart().wrap();
    }
    getEnd() {
      return this.data.getEnd().wrap();
    }
    get loc() {
      let t = this.data.toHbsSpan();
      return t === null ? ht : t.toHbsLoc();
    }
    get module() {
      return this.data.getModule();
    }
    get startPosition() {
      return this.loc.start;
    }
    get endPosition() {
      return this.loc.end;
    }
    toJSON() {
      return this.loc;
    }
    withStart(t) {
      return J(t.data, this.data.getEnd());
    }
    withEnd(t) {
      return J(this.data.getStart(), t.data);
    }
    asString() {
      return this.data.asString();
    }
    toSlice(t) {
      let r = this.data.asString();
      return (
        Ds &&
          t !== void 0 &&
          r !== t &&
          console.warn(
            `unexpectedly found ${JSON.stringify(r)} when slicing source, but expected ${JSON.stringify(t)}`
          ),
        new kr({ loc: this, chars: t || r })
      );
    }
    get start() {
      return this.loc.start;
    }
    set start(t) {
      this.data.locDidUpdate({ start: t });
    }
    get end() {
      return this.loc.end;
    }
    set end(t) {
      this.data.locDidUpdate({ end: t });
    }
    get source() {
      return this.module;
    }
    collapse(t) {
      switch (t) {
        case 'start':
          return this.getStart().collapsed();
        case 'end':
          return this.getEnd().collapsed();
      }
    }
    extend(t) {
      return J(this.data.getStart(), t.data.getEnd());
    }
    serialize() {
      return this.data.serialize();
    }
    slice({ skipStart: t = 0, skipEnd: r = 0 }) {
      return J(this.getStart().move(t).data, this.getEnd().move(-r).data);
    }
    sliceStartChars({ skipStart: t = 0, chars: r }) {
      return J(this.getStart().move(t).data, this.getStart().move(t + r).data);
    }
    sliceEndChars({ skipEnd: t = 0, chars: r }) {
      return J(this.getEnd().move(t - r).data, this.getStart().move(-t).data);
    }
  },
  Ut,
  ae = class {
    constructor(t, r) {
      Lt(this, Ut);
      (this.source = t), (this.charPositions = r), (this.kind = 'CharPosition'), Y(this, Ut, null);
    }
    wrap() {
      return new D(this);
    }
    asString() {
      return this.source.slice(this.charPositions.start.charPos, this.charPositions.end.charPos);
    }
    getModule() {
      return this.source.module;
    }
    getStart() {
      return this.charPositions.start;
    }
    getEnd() {
      return this.charPositions.end;
    }
    locDidUpdate() {}
    toHbsSpan() {
      let t = I(this, Ut);
      if (t === null) {
        let r = this.charPositions.start.toHbsPos(),
          s = this.charPositions.end.toHbsPos();
        t = Y(this, Ut, r === null || s === null ? ft : new oe(this.source, { start: r, end: s }));
      }
      return t === ft ? null : t;
    }
    serialize() {
      let {
        start: { charPos: t },
        end: { charPos: r },
      } = this.charPositions;
      return t === r ? t : [t, r];
    }
    toCharPosSpan() {
      return this;
    }
  };
Ut = new WeakMap();
var ut,
  Et,
  oe = class {
    constructor(t, r, s = null) {
      Lt(this, ut);
      Lt(this, Et);
      (this.source = t),
        (this.hbsPositions = r),
        (this.kind = 'HbsPosition'),
        Y(this, ut, null),
        Y(this, Et, s);
    }
    serialize() {
      let t = this.toCharPosSpan();
      return t === null ? 'Broken' : t.wrap().serialize();
    }
    wrap() {
      return new D(this);
    }
    updateProvided(t, r) {
      I(this, Et) && (I(this, Et)[r] = t), Y(this, ut, null), Y(this, Et, { start: t, end: t });
    }
    locDidUpdate({ start: t, end: r }) {
      t !== void 0 &&
        (this.updateProvided(t, 'start'), (this.hbsPositions.start = new mt(this.source, t, null))),
        r !== void 0 &&
          (this.updateProvided(r, 'end'), (this.hbsPositions.end = new mt(this.source, r, null)));
    }
    asString() {
      let t = this.toCharPosSpan();
      return t === null ? '' : t.asString();
    }
    getModule() {
      return this.source.module;
    }
    getStart() {
      return this.hbsPositions.start;
    }
    getEnd() {
      return this.hbsPositions.end;
    }
    toHbsLoc() {
      return { start: this.hbsPositions.start.hbsPos, end: this.hbsPositions.end.hbsPos };
    }
    toHbsSpan() {
      return this;
    }
    toCharPosSpan() {
      let t = I(this, ut);
      if (t === null) {
        let r = this.hbsPositions.start.toCharPos(),
          s = this.hbsPositions.end.toCharPos();
        if (!r || !s) return (t = Y(this, ut, ft)), null;
        t = Y(this, ut, new ae(this.source, { start: r, end: s }));
      }
      return t === ft ? null : t;
    }
  };
(ut = new WeakMap()), (Et = new WeakMap());
var et = class {
    constructor(t, r, s = null) {
      (this.kind = t), (this.loc = r), (this.string = s);
    }
    serialize() {
      switch (this.kind) {
        case 'Broken':
        case 'NonExistent':
          return this.kind;
        case 'InternalsSynthetic':
          return this.string || '';
      }
    }
    wrap() {
      return new D(this);
    }
    asString() {
      return this.string || '';
    }
    locDidUpdate({ start: t, end: r }) {
      t !== void 0 && (this.loc.start = t), r !== void 0 && (this.loc.end = r);
    }
    getModule() {
      return 'an unknown module';
    }
    getStart() {
      return new le(this.kind, this.loc.start);
    }
    getEnd() {
      return new le(this.kind, this.loc.end);
    }
    toCharPosSpan() {
      return this;
    }
    toHbsSpan() {
      return null;
    }
    toHbsLoc() {
      return ht;
    }
  },
  J = _s(e =>
    e
      .when('HbsPosition', 'HbsPosition', (t, r) => new oe(t.source, { start: t, end: r }).wrap())
      .when('CharPosition', 'CharPosition', (t, r) => new ae(t.source, { start: t, end: r }).wrap())
      .when('CharPosition', 'HbsPosition', (t, r) => {
        let s = r.toCharPos();
        return s === null ? new et('Broken', ht).wrap() : J(t, s);
      })
      .when('HbsPosition', 'CharPosition', (t, r) => {
        let s = t.toCharPos();
        return s === null ? new et('Broken', ht).wrap() : J(s, r);
      })
      .when('IS_INVISIBLE', 'MATCH_ANY', t => new et(t.kind, ht).wrap())
      .when('MATCH_ANY', 'IS_INVISIBLE', (t, r) => new et(r.kind, ht).wrap())
  ),
  ft = 'BROKEN',
  Mt = class e {
    static forHbsPos(t, r) {
      return new mt(t, r, null).wrap();
    }
    static broken(t = pt) {
      return new le('Broken', t).wrap();
    }
    constructor(t) {
      this.data = t;
    }
    get offset() {
      let t = this.data.toCharPos();
      return t === null ? null : t.offset;
    }
    eql(t) {
      return oi(this.data, t.data);
    }
    until(t) {
      return J(this.data, t.data);
    }
    move(t) {
      let r = this.data.toCharPos();
      if (r === null) return e.broken();
      {
        let s = r.offset + t;
        return r.source.validate(s) ? new Tt(r.source, s).wrap() : e.broken();
      }
    }
    collapsed() {
      return J(this.data, this.data);
    }
    toJSON() {
      return this.data.toJSON();
    }
  },
  Tt = class {
    constructor(t, r) {
      (this.source = t), (this.charPos = r), (this.kind = 'CharPosition'), (this._locPos = null);
    }
    toCharPos() {
      return this;
    }
    toJSON() {
      let t = this.toHbsPos();
      return t === null ? pt : t.toJSON();
    }
    wrap() {
      return new Mt(this);
    }
    get offset() {
      return this.charPos;
    }
    toHbsPos() {
      let t = this._locPos;
      if (t === null) {
        let r = this.source.hbsPosFor(this.charPos);
        this._locPos = t = r === null ? ft : new mt(this.source, r, this.charPos);
      }
      return t === ft ? null : t;
    }
  },
  mt = class {
    constructor(t, r, s = null) {
      (this.source = t),
        (this.hbsPos = r),
        (this.kind = 'HbsPosition'),
        (this._charPos = s === null ? null : new Tt(t, s));
    }
    toCharPos() {
      let t = this._charPos;
      if (t === null) {
        let r = this.source.charPosFor(this.hbsPos);
        this._charPos = t = r === null ? ft : new Tt(this.source, r);
      }
      return t === ft ? null : t;
    }
    toJSON() {
      return this.hbsPos;
    }
    wrap() {
      return new Mt(this);
    }
    toHbsPos() {
      return this;
    }
  },
  le = class {
    constructor(t, r) {
      (this.kind = t), (this.pos = r);
    }
    toCharPos() {
      return null;
    }
    toJSON() {
      return this.pos;
    }
    wrap() {
      return new Mt(this);
    }
    get offset() {
      return null;
    }
  },
  oi = _s(e =>
    e
      .when(
        'HbsPosition',
        'HbsPosition',
        ({ hbsPos: t }, { hbsPos: r }) => t.column === r.column && t.line === r.line
      )
      .when('CharPosition', 'CharPosition', ({ charPos: t }, { charPos: r }) => t === r)
      .when('CharPosition', 'HbsPosition', ({ offset: t }, r) => {
        var s;
        return t === ((s = r.toCharPos()) == null ? void 0 : s.offset);
      })
      .when('HbsPosition', 'CharPosition', (t, { offset: r }) => {
        var s;
        return ((s = t.toCharPos()) == null ? void 0 : s.offset) === r;
      })
      .when('MATCH_ANY', 'MATCH_ANY', () => !1)
  ),
  wt = class e {
    static from(t, r = {}) {
      var s;
      return new e(t, (s = r.meta) == null ? void 0 : s.moduleName);
    }
    constructor(t, r = 'an unknown module') {
      (this.source = t), (this.module = r);
    }
    validate(t) {
      return t >= 0 && t <= this.source.length;
    }
    slice(t, r) {
      return this.source.slice(t, r);
    }
    offsetFor(t, r) {
      return Mt.forHbsPos(this, { line: t, column: r });
    }
    spanFor({ start: t, end: r }) {
      return D.forHbsLoc(this, {
        start: { line: t.line, column: t.column },
        end: { line: r.line, column: r.column },
      });
    }
    hbsPosFor(t) {
      let r = 0,
        s = 0;
      if (t > this.source.length) return null;
      for (;;) {
        let n = this.source.indexOf(
          `
`,
          s
        );
        if (t <= n || n === -1) return { line: r + 1, column: t - s };
        (r += 1), (s = n + 1);
      }
    }
    charPosFor(t) {
      let { line: r, column: s } = t,
        n = this.source.length,
        i = 0,
        a = 0;
      for (; a < n; ) {
        let o = this.source.indexOf(
          `
`,
          a
        );
        if ((o === -1 && (o = this.source.length), i === r - 1)) {
          if (a + s > o) return o;
          if (Ds) {
            let c = this.hbsPosFor(a + s);
            c.line, c.column;
          }
          return a + s;
        }
        if (o === -1) return 0;
        (i += 1), (a = o + 1);
      }
      return n;
    }
  };
function v(e, t) {
  let { module: r, loc: s } = t,
    { line: n, column: i } = s.start,
    a = t.asString(),
    o = a
      ? `

|
|  ${a.split(`
`).join(`
|  `)}
|

`
      : '',
    c = new Error(`${e}: ${o}(error occurred in '${r}' @ line ${n} : column ${i})`);
  return (c.name = 'SyntaxError'), (c.location = t), (c.code = a), c;
}
var li = {
    Template: ['body'],
    Block: ['body'],
    MustacheStatement: ['path', 'params', 'hash'],
    BlockStatement: ['path', 'params', 'hash', 'program', 'inverse'],
    ElementModifierStatement: ['path', 'params', 'hash'],
    CommentStatement: [],
    MustacheCommentStatement: [],
    ElementNode: ['attributes', 'modifiers', 'children', 'comments'],
    AttrNode: ['value'],
    TextNode: [],
    ConcatStatement: ['parts'],
    SubExpression: ['path', 'params', 'hash'],
    PathExpression: [],
    StringLiteral: [],
    BooleanLiteral: [],
    NumberLiteral: [],
    NullLiteral: [],
    UndefinedLiteral: [],
    Hash: ['pairs'],
    HashPair: ['value'],
  },
  Cr = (function () {
    function e(t, r, s, n) {
      let i = Error.call(this, t);
      (this.key = n),
        (this.message = t),
        (this.node = r),
        (this.parent = s),
        i.stack && (this.stack = i.stack);
    }
    return (e.prototype = Object.create(Error.prototype)), (e.prototype.constructor = e), e;
  })();
function Ts(e, t, r) {
  return new Cr('Cannot remove a node unless it is part of an array', e, t, r);
}
function ci(e, t, r) {
  return new Cr('Cannot replace a node with multiple nodes unless it is part of an array', e, t, r);
}
function Ns(e, t) {
  return new Cr('Replacing and removing in key handlers is not yet supported.', e, null, t);
}
var zt = class {
    constructor(t, r = null, s = null) {
      (this.node = t), (this.parent = r), (this.parentKey = s);
    }
    get parentNode() {
      return this.parent ? this.parent.node : null;
    }
    parents() {
      return { [Symbol.iterator]: () => new Sr(this) };
    }
  },
  Sr = class {
    constructor(t) {
      this.path = t;
    }
    next() {
      return this.path.parent
        ? ((this.path = this.path.parent), { done: !1, value: this.path })
        : { done: !0, value: null };
    }
  };
function Os(e) {
  return typeof e == 'function' ? e : e.enter;
}
function Bs(e) {
  return typeof e == 'function' ? void 0 : e.exit;
}
function Ae(e, t) {
  let r,
    s,
    n,
    { node: i, parent: a, parentKey: o } = t,
    c = (function (h, p) {
      if (h.Program && ((p === 'Template' && !h.Template) || (p === 'Block' && !h.Block)))
        return h.Program;
      let m = h[p];
      return m !== void 0 ? m : h.All;
    })(e, i.type);
  if ((c !== void 0 && ((r = Os(c)), (s = Bs(c))), r !== void 0 && (n = r(i, t)), n != null)) {
    if (JSON.stringify(i) !== JSON.stringify(n))
      return Array.isArray(n) ? (Is(e, n, a, o), n) : Ae(e, new zt(n, a, o)) || n;
    n = void 0;
  }
  if (n === void 0) {
    let h = li[i.type];
    for (let p = 0; p < h.length; p++) ui(e, c, t, h[p]);
    s !== void 0 && (n = s(i, t));
  }
  return n;
}
function Cs(e, t, r) {
  e[t] = r;
}
function ui(e, t, r, s) {
  let n,
    i,
    { node: a } = r,
    o = (function (c, h) {
      return c[h];
    })(a, s);
  if (o) {
    if (t !== void 0) {
      let c = (function (h, p) {
        let m = typeof h != 'function' ? h.keys : void 0;
        if (m === void 0) return;
        let S = m[p];
        return S !== void 0 ? S : m.All;
      })(t, s);
      c !== void 0 && ((n = Os(c)), (i = Bs(c)));
    }
    if (n !== void 0 && n(a, s) !== void 0) throw Ns(a, s);
    if (Array.isArray(o)) Is(e, o, r, s);
    else {
      let c = Ae(e, new zt(o, r, s));
      c !== void 0 &&
        (function (h, p, m, S) {
          if (S === null) throw Ts(m, h, p);
          if (Array.isArray(S)) {
            if (S.length !== 1) throw S.length === 0 ? Ts(m, h, p) : ci(m, h, p);
            Cs(h, p, S[0]);
          } else Cs(h, p, S);
        })(a, s, o, c);
    }
    if (i !== void 0 && i(a, s) !== void 0) throw Ns(a, s);
  }
}
function Is(e, t, r, s) {
  for (let n = 0; n < t.length; n++) {
    let i = t[n],
      a = Ae(e, new zt(i, r, s));
    a !== void 0 && (n += hi(t, n, a) - 1);
  }
}
function hi(e, t, r) {
  return r === null
    ? (e.splice(t, 1), 0)
    : Array.isArray(r)
      ? (e.splice(t, 1, ...r), r.length)
      : (e.splice(t, 1, r), 1);
}
function pi(e, t) {
  Ae(t, new zt(e));
}
function Ht(e, t) {
  (function (r) {
    switch (r.type) {
      case 'Block':
      case 'Template':
        return r.body;
      case 'ElementNode':
        return r.children;
    }
  })(e).push(t);
}
function Rs(e) {
  return (
    e.type === 'StringLiteral' ||
    e.type === 'BooleanLiteral' ||
    e.type === 'NumberLiteral' ||
    e.type === 'NullLiteral' ||
    e.type === 'UndefinedLiteral'
  );
}
var ur;
function hr() {
  return ur || (ur = new wt('', '(synthetic)')), ur;
}
function xs(e, t) {
  return f.var({ name: e, loc: T(t || null) });
}
function ct(e, t) {
  let r = T(t || null);
  if (typeof e != 'string') {
    if ('type' in e) return e;
    {
      e.head.indexOf('.');
      let { head: i, tail: a } = e;
      return f.path({
        head: f.head({ original: i, loc: r.sliceStartChars({ chars: i.length }) }),
        tail: a,
        loc: T(t || null),
      });
    }
  }
  let { head: s, tail: n } = (function (i, a) {
    let [o, ...c] = i.split('.'),
      h = f.head({ original: o, loc: T(a || null) });
    return f.path({ head: h, tail: c, loc: T(a || null) });
  })(e, r);
  return f.path({ head: s, tail: n, loc: r });
}
function xe(e, t, r) {
  return f.literal({ type: e, value: t, loc: T(r || null) });
}
function ie(e = [], t) {
  return f.hash({ pairs: e, loc: T(t || null) });
}
function qs(e) {
  return e.map(t => (typeof t == 'string' ? f.var({ name: t, loc: D.synthetic(t) }) : t));
}
function Ps(e = [], t = [], r = !1, s) {
  return f.blockItself({ body: e, params: qs(t), chained: r, loc: T(s || null) });
}
function As(e = [], t = [], r) {
  return f.template({ body: e, blockParams: t, loc: T(r || null) });
}
function T(...e) {
  if (e.length === 1) {
    let t = e[0];
    return t && typeof t == 'object' ? D.forHbsLoc(hr(), t) : D.forHbsLoc(hr(), ai);
  }
  {
    let [t, r, s, n, i] = e,
      a = i ? new wt('', i) : hr();
    return D.forHbsLoc(a, { start: { line: t, column: r }, end: { line: s || t, column: n || r } });
  }
}
var fi = {
  mustache: function (e, t = [], r = ie([]), s = !1, n, i) {
    return f.mustache({
      path: ct(e),
      params: t,
      hash: r,
      trusting: s,
      strip: i,
      loc: T(n || null),
    });
  },
  block: function (e, t, r, s, n = null, i, a, o, c) {
    let h,
      p = null;
    return (
      (h =
        s.type === 'Template'
          ? f.blockItself({ params: qs(s.blockParams), body: s.body, loc: s.loc })
          : s),
      (n == null ? void 0 : n.type) === 'Template'
        ? (n.blockParams.length, (p = f.blockItself({ params: [], body: n.body, loc: n.loc })))
        : (p = n),
      f.block({
        path: ct(e),
        params: t || [],
        hash: r || ie([]),
        defaultBlock: h,
        elseBlock: p,
        loc: T(i || null),
        openStrip: a,
        inverseStrip: o,
        closeStrip: c,
      })
    );
  },
  comment: function (e, t) {
    return f.comment({ value: e, loc: T(t || null) });
  },
  mustacheComment: function (e, t) {
    return f.mustacheComment({ value: e, loc: T(t || null) });
  },
  element: function (e, t = {}) {
    let r,
      s,
      {
        attrs: n,
        blockParams: i,
        modifiers: a,
        comments: o,
        children: c,
        openTag: h,
        closeTag: p,
        loc: m,
      } = t;
    typeof e == 'string'
      ? e.endsWith('/')
        ? ((r = ct(e.slice(0, -1))), (s = !0))
        : (r = ct(e))
      : 'type' in e
        ? (e.type, e.type, (r = e))
        : 'path' in e
          ? (e.path.type, e.path.type, (r = e.path), (s = e.selfClosing))
          : ((r = ct(e.name)), (s = e.selfClosing));
    let S = i == null ? void 0 : i.map(E => (typeof E == 'string' ? xs(E) : E)),
      y = null;
    return (
      p ? (y = T(p)) : p === void 0 && (y = s || ni(r.original) ? null : T(null)),
      f.element({
        path: r,
        selfClosing: s || !1,
        attributes: n || [],
        params: S || [],
        modifiers: a || [],
        comments: o || [],
        children: c || [],
        openTag: T(h || null),
        closeTag: y,
        loc: T(m || null),
      })
    );
  },
  elementModifier: function (e, t, r, s) {
    return f.elementModifier({
      path: ct(e),
      params: t || [],
      hash: r || ie([]),
      loc: T(s || null),
    });
  },
  attr: function (e, t, r) {
    return f.attr({ name: e, value: t, loc: T(r || null) });
  },
  text: function (e = '', t) {
    return f.text({ chars: e, loc: T(t || null) });
  },
  sexpr: function (e, t = [], r = ie([]), s) {
    return f.sexpr({ path: ct(e), params: t, hash: r, loc: T(s || null) });
  },
  concat: function (e, t) {
    if (!ce(e)) throw new Error('b.concat requires at least one part');
    return f.concat({ parts: e, loc: T(t || null) });
  },
  hash: ie,
  pair: function (e, t, r) {
    return f.pair({ key: e, value: t, loc: T(r || null) });
  },
  literal: xe,
  program: function (e, t, r) {
    return t && t.length ? Ps(e, t, !1, r) : As(e, [], r);
  },
  blockItself: Ps,
  template: As,
  loc: T,
  pos: function (e, t) {
    return f.pos({ line: e, column: t });
  },
  path: ct,
  fullPath: function (e, t = [], r) {
    return f.path({ head: e, tail: t, loc: T(r || null) });
  },
  head: function (e, t) {
    return f.head({ original: e, loc: T(t || null) });
  },
  at: function (e, t) {
    return f.atName({ name: e, loc: T(t || null) });
  },
  var: xs,
  this: function (e) {
    return f.this({ loc: T(e || null) });
  },
  string: pr('StringLiteral'),
  boolean: pr('BooleanLiteral'),
  number: pr('NumberLiteral'),
  undefined: () => xe('UndefinedLiteral', void 0),
  null: () => xe('NullLiteral', null),
};
function pr(e) {
  return function (t, r) {
    return xe(e, t, r);
  };
}
var Ce = { close: !1, open: !1 },
  f = new (class {
    pos({ line: e, column: t }) {
      return { line: e, column: t };
    }
    blockItself({ body: e, params: t, chained: r = !1, loc: s }) {
      return {
        type: 'Block',
        body: e,
        params: t,
        get blockParams() {
          return this.params.map(n => n.name);
        },
        set blockParams(n) {
          this.params = n.map(i => f.var({ name: i, loc: D.synthetic(i) }));
        },
        chained: r,
        loc: s,
      };
    }
    template({ body: e, blockParams: t, loc: r }) {
      return { type: 'Template', body: e, blockParams: t, loc: r };
    }
    mustache({ path: e, params: t, hash: r, trusting: s, loc: n, strip: i = Ce }) {
      return (function ({ path: a, params: o, hash: c, trusting: h, strip: p, loc: m }) {
        let S = {
          type: 'MustacheStatement',
          path: a,
          params: o,
          hash: c,
          trusting: h,
          strip: p,
          loc: m,
        };
        return (
          Object.defineProperty(S, 'escaped', {
            enumerable: !1,
            get() {
              return !this.trusting;
            },
            set(y) {
              this.trusting = !y;
            },
          }),
          S
        );
      })({ path: e, params: t, hash: r, trusting: s, strip: i, loc: n });
    }
    block({
      path: e,
      params: t,
      hash: r,
      defaultBlock: s,
      elseBlock: n = null,
      loc: i,
      openStrip: a = Ce,
      inverseStrip: o = Ce,
      closeStrip: c = Ce,
    }) {
      return {
        type: 'BlockStatement',
        path: e,
        params: t,
        hash: r,
        program: s,
        inverse: n,
        loc: i,
        openStrip: a,
        inverseStrip: o,
        closeStrip: c,
      };
    }
    comment({ value: e, loc: t }) {
      return { type: 'CommentStatement', value: e, loc: t };
    }
    mustacheComment({ value: e, loc: t }) {
      return { type: 'MustacheCommentStatement', value: e, loc: t };
    }
    concat({ parts: e, loc: t }) {
      return { type: 'ConcatStatement', parts: e, loc: t };
    }
    element({
      path: e,
      selfClosing: t,
      attributes: r,
      modifiers: s,
      params: n,
      comments: i,
      children: a,
      openTag: o,
      closeTag: c,
      loc: h,
    }) {
      let p = t;
      return {
        type: 'ElementNode',
        path: e,
        attributes: r,
        modifiers: s,
        params: n,
        comments: i,
        children: a,
        openTag: o,
        closeTag: c,
        loc: h,
        get tag() {
          return this.path.original;
        },
        set tag(m) {
          this.path.original = m;
        },
        get blockParams() {
          return this.params.map(m => m.name);
        },
        set blockParams(m) {
          this.params = m.map(S => f.var({ name: S, loc: D.synthetic(S) }));
        },
        get selfClosing() {
          return p;
        },
        set selfClosing(m) {
          (p = m), (this.closeTag = m ? null : D.synthetic(`</${this.tag}>`));
        },
      };
    }
    elementModifier({ path: e, params: t, hash: r, loc: s }) {
      return { type: 'ElementModifierStatement', path: e, params: t, hash: r, loc: s };
    }
    attr({ name: e, value: t, loc: r }) {
      return { type: 'AttrNode', name: e, value: t, loc: r };
    }
    text({ chars: e, loc: t }) {
      return { type: 'TextNode', chars: e, loc: t };
    }
    sexpr({ path: e, params: t, hash: r, loc: s }) {
      return { type: 'SubExpression', path: e, params: t, hash: r, loc: s };
    }
    path({ head: e, tail: t, loc: r }) {
      return (function ({ head: s, tail: n, loc: i }) {
        let a = {
          type: 'PathExpression',
          head: s,
          tail: n,
          get original() {
            return [this.head.original, ...this.tail].join('.');
          },
          set original(o) {
            let [c, ...h] = o.split('.');
            (this.head = fi.head(c, this.head.loc)), (this.tail = h);
          },
          loc: i,
        };
        return (
          Object.defineProperty(a, 'parts', {
            enumerable: !1,
            get() {
              let o = this.original.split('.');
              return (
                o[0] === 'this' ? o.shift() : o[0].startsWith('@') && (o[0] = o[0].slice(1)),
                Object.freeze(o)
              );
            },
            set(o) {
              var h;
              let c = [...o];
              c[0] === 'this' ||
                ((h = c[0]) != null && h.startsWith('@')) ||
                (this.head.type === 'ThisHead'
                  ? c.unshift('this')
                  : this.head.type === 'AtHead' && (c[0] = `@${c[0]}`)),
                (this.original = c.join('.'));
            },
          }),
          Object.defineProperty(a, 'this', {
            enumerable: !1,
            get() {
              return this.head.type === 'ThisHead';
            },
          }),
          Object.defineProperty(a, 'data', {
            enumerable: !1,
            get() {
              return this.head.type === 'AtHead';
            },
          }),
          a
        );
      })({ head: e, tail: t, loc: r });
    }
    head({ original: e, loc: t }) {
      return e === 'this'
        ? this.this({ loc: t })
        : e[0] === '@'
          ? this.atName({ name: e, loc: t })
          : this.var({ name: e, loc: t });
    }
    this({ loc: e }) {
      return {
        type: 'ThisHead',
        get original() {
          return 'this';
        },
        loc: e,
      };
    }
    atName({ name: e, loc: t }) {
      let r = '',
        s = {
          type: 'AtHead',
          get name() {
            return r;
          },
          set name(n) {
            n[0], n.indexOf('.'), (r = n);
          },
          get original() {
            return this.name;
          },
          set original(n) {
            this.name = n;
          },
          loc: t,
        };
      return (s.name = e), s;
    }
    var({ name: e, loc: t }) {
      let r = '',
        s = {
          type: 'VarHead',
          get name() {
            return r;
          },
          set name(n) {
            n[0], n.indexOf('.'), (r = n);
          },
          get original() {
            return this.name;
          },
          set original(n) {
            this.name = n;
          },
          loc: t,
        };
      return (s.name = e), s;
    }
    hash({ pairs: e, loc: t }) {
      return { type: 'Hash', pairs: e, loc: t };
    }
    pair({ key: e, value: t, loc: r }) {
      return { type: 'HashPair', key: e, value: t, loc: r };
    }
    literal({ type: e, value: t, loc: r }) {
      return (function ({ type: s, value: n, loc: i }) {
        let a = { type: s, value: n, loc: i };
        return (
          Object.defineProperty(a, 'original', {
            enumerable: !1,
            get() {
              return this.value;
            },
            set(o) {
              this.value = o;
            },
          }),
          a
        );
      })({ type: e, value: t, loc: r });
    }
  })(),
  vr = class {
    constructor(t, r = new lr(Es), s = 'precompile') {
      (this.elementStack = []),
        (this.currentAttribute = null),
        (this.currentNode = null),
        (this.source = t),
        (this.lines = t.source.split(/\r\n?|\n/u)),
        (this.tokenizer = new cr(this, r, s));
    }
    offset() {
      let { line: t, column: r } = this.tokenizer;
      return this.source.offsetFor(t, r);
    }
    pos({ line: t, column: r }) {
      return this.source.offsetFor(t, r);
    }
    finish(t) {
      return tr({}, t, { loc: t.start.until(this.offset()) });
    }
    get currentAttr() {
      return this.currentAttribute;
    }
    get currentTag() {
      let t = this.currentNode;
      return t && (t.type === 'StartTag' || t.type), t;
    }
    get currentStartTag() {
      let t = this.currentNode;
      return t && t.type, t;
    }
    get currentEndTag() {
      let t = this.currentNode;
      return t && t.type, t;
    }
    get currentComment() {
      let t = this.currentNode;
      return t && t.type, t;
    }
    get currentData() {
      let t = this.currentNode;
      return t && t.type, t;
    }
    acceptNode(t) {
      return this[t.type](t);
    }
    currentElement() {
      return Nr(this.elementStack);
    }
    sourceForNode(t, r) {
      let s,
        n,
        i,
        a = t.loc.start.line - 1,
        o = a - 1,
        c = t.loc.start.column,
        h = [];
      for (
        r
          ? ((n = r.loc.end.line - 1), (i = r.loc.end.column))
          : ((n = t.loc.end.line - 1), (i = t.loc.end.column));
        o < n;

      )
        o++,
          (s = this.lines[o]),
          o === a
            ? a === n
              ? h.push(s.slice(c, i))
              : h.push(s.slice(c))
            : o === n
              ? h.push(s.slice(0, i))
              : h.push(s);
      return h.join(`
`);
    }
  },
  Er = class extends vr {
    parse(t, r) {
      var i;
      t.loc;
      let s = f.template({ body: [], blockParams: r, loc: this.source.spanFor(t.loc) }),
        n = this.parseProgram(s, t);
      return (i = this.pendingError) == null || i.eof(n.loc.getEnd()), n;
    }
    Program(t, r) {
      t.loc;
      let s = f.blockItself({
        body: [],
        params: r,
        chained: t.chained,
        loc: this.source.spanFor(t.loc),
      });
      return this.parseProgram(s, t);
    }
    parseProgram(t, r) {
      if (r.body.length === 0) return t;
      let s;
      try {
        this.elementStack.push(t);
        for (let n of r.body) this.acceptNode(n);
      } finally {
        s = this.elementStack.pop();
      }
      if (t !== s) {
        if ((s == null ? void 0 : s.type) === 'ElementNode')
          throw v(`Unclosed element \`${s.tag}\``, s.loc);
        t.type;
      }
      return t;
    }
    BlockStatement(t) {
      var m;
      if (this.tokenizer.state === 'comment')
        return t.loc, void this.appendToCommentData(this.sourceForNode(t));
      if (this.tokenizer.state !== 'data' && this.tokenizer.state !== 'beforeData')
        throw v(
          'A block may only be used inside an HTML element or another block.',
          this.source.spanFor(t.loc)
        );
      let { path: r, params: s, hash: n } = fr(this, t),
        i = this.source.spanFor(t.loc),
        a,
        o = [];
      if ((m = t.program.blockParams) != null && m.length) {
        let S = n.loc.collapse('end');
        (S = t.program.loc
          ? S.withEnd(this.source.spanFor(t.program.loc).getStart())
          : t.program.body[0]
            ? S.withEnd(this.source.spanFor(t.program.body[0].loc).getStart())
            : S.withEnd(i.getEnd())),
          (a = Ls(this.source, t, S));
        let y = S.asString(),
          E = y.indexOf('|') + 1,
          C = y.indexOf('|', E);
        for (let x of t.program.blockParams) {
          let w, U;
          (w = E >= C ? -1 : y.indexOf(x, E)),
            w === -1 || w + x.length > C
              ? ((E = C), (U = this.source.spanFor(gr)))
              : ((E = w),
                (U = S.sliceStartChars({ skipStart: E, chars: x.length })),
                (E += x.length)),
            o.push(f.var({ name: x, loc: U }));
        }
      } else a = Ls(this.source, t, i);
      let c = this.Program(a.program, o),
        h = a.inverse ? this.Program(a.inverse, []) : null,
        p = f.block({
          path: r,
          params: s,
          hash: n,
          defaultBlock: c,
          elseBlock: h,
          loc: this.source.spanFor(t.loc),
          openStrip: t.openStrip,
          inverseStrip: t.inverseStrip,
          closeStrip: t.closeStrip,
        });
      Ht(this.currentElement(), p);
    }
    MustacheStatement(t) {
      var o;
      (o = this.pendingError) == null || o.mustache(this.source.spanFor(t.loc));
      let { tokenizer: r } = this;
      if (r.state === 'comment') return void this.appendToCommentData(this.sourceForNode(t));
      let s,
        { escaped: n, loc: i, strip: a } = t;
      if ('original' in t.path && t.path.original === '...attributes')
        throw v('Illegal use of ...attributes', this.source.spanFor(t.loc));
      if (Rs(t.path))
        s = f.mustache({
          path: this.acceptNode(t.path),
          params: [],
          hash: f.hash({ pairs: [], loc: this.source.spanFor(t.path.loc).collapse('end') }),
          trusting: !n,
          loc: this.source.spanFor(i),
          strip: a,
        });
      else {
        let { path: c, params: h, hash: p } = fr(this, t);
        s = f.mustache({
          path: c,
          params: h,
          hash: p,
          trusting: !n,
          loc: this.source.spanFor(i),
          strip: a,
        });
      }
      switch (r.state) {
        case 'tagOpen':
        case 'tagName':
          throw v('Cannot use mustaches in an elements tagname', s.loc);
        case 'beforeAttributeName':
          mr(this.currentStartTag, s);
          break;
        case 'attributeName':
        case 'afterAttributeName':
          this.beginAttributeValue(!1),
            this.finishAttributeValue(),
            mr(this.currentStartTag, s),
            r.transitionTo('beforeAttributeName');
          break;
        case 'afterAttributeValueQuoted':
          mr(this.currentStartTag, s), r.transitionTo('beforeAttributeName');
          break;
        case 'beforeAttributeValue':
          this.beginAttributeValue(!1),
            this.appendDynamicAttributeValuePart(s),
            r.transitionTo('attributeValueUnquoted');
          break;
        case 'attributeValueDoubleQuoted':
        case 'attributeValueSingleQuoted':
        case 'attributeValueUnquoted':
          this.appendDynamicAttributeValuePart(s);
          break;
        default:
          Ht(this.currentElement(), s);
      }
      return s;
    }
    appendDynamicAttributeValuePart(t) {
      this.finalizeTextPart();
      let r = this.currentAttr;
      (r.isDynamic = !0), r.parts.push(t);
    }
    finalizeTextPart() {
      let t = this.currentAttr.currentPart;
      t !== null && (this.currentAttr.parts.push(t), this.startTextPart());
    }
    startTextPart() {
      this.currentAttr.currentPart = null;
    }
    ContentStatement(t) {
      (function (r, s) {
        let n = s.loc.start.line,
          i = s.loc.start.column,
          a = (function (o, c) {
            if (c === '')
              return {
                lines:
                  o.split(`
`).length - 1,
                columns: 0,
              };
            let [h] = o.split(c),
              p = h.split(/\n/u),
              m = p.length - 1;
            return { lines: m, columns: p[m].length };
          })(s.original, s.value);
        (n += a.lines), a.lines ? (i = a.columns) : (i += a.columns), (r.line = n), (r.column = i);
      })(this.tokenizer, t),
        this.tokenizer.tokenizePart(t.value),
        this.tokenizer.flushData();
    }
    CommentStatement(t) {
      let { tokenizer: r } = this;
      if (r.state === 'comment') return this.appendToCommentData(this.sourceForNode(t)), null;
      let { value: s, loc: n } = t,
        i = f.mustacheComment({ value: s, loc: this.source.spanFor(n) });
      switch (r.state) {
        case 'beforeAttributeName':
        case 'afterAttributeName':
          this.currentStartTag.comments.push(i);
          break;
        case 'beforeData':
        case 'data':
          Ht(this.currentElement(), i);
          break;
        default:
          throw v(
            `Using a Handlebars comment when in the \`${r.state}\` state is not supported`,
            this.source.spanFor(t.loc)
          );
      }
      return i;
    }
    PartialStatement(t) {
      throw v('Handlebars partials are not supported', this.source.spanFor(t.loc));
    }
    PartialBlockStatement(t) {
      throw v('Handlebars partial blocks are not supported', this.source.spanFor(t.loc));
    }
    Decorator(t) {
      throw v('Handlebars decorators are not supported', this.source.spanFor(t.loc));
    }
    DecoratorBlock(t) {
      throw v('Handlebars decorator blocks are not supported', this.source.spanFor(t.loc));
    }
    SubExpression(t) {
      let { path: r, params: s, hash: n } = fr(this, t);
      return f.sexpr({ path: r, params: s, hash: n, loc: this.source.spanFor(t.loc) });
    }
    PathExpression(t) {
      let { original: r } = t,
        s;
      if (r.indexOf('/') !== -1) {
        if (r.slice(0, 2) === './')
          throw v(
            'Using "./" is not supported in Glimmer and unnecessary',
            this.source.spanFor(t.loc)
          );
        if (r.slice(0, 3) === '../')
          throw v(
            'Changing context using "../" is not supported in Glimmer',
            this.source.spanFor(t.loc)
          );
        if (r.indexOf('.') !== -1)
          throw v(
            "Mixing '.' and '/' in paths is not supported in Glimmer; use only '.' to separate property paths",
            this.source.spanFor(t.loc)
          );
        s = [t.parts.join('/')];
      } else {
        if (r === '.')
          throw v(
            "'.' is not a supported path in Glimmer; check for a path with a trailing '.'",
            this.source.spanFor(t.loc)
          );
        s = t.parts;
      }
      let n,
        i = !1;
      if ((/^this(?:\..+)?$/u.test(r) && (i = !0), i))
        n = f.this({
          loc: this.source.spanFor({
            start: t.loc.start,
            end: { line: t.loc.start.line, column: t.loc.start.column + 4 },
          }),
        });
      else if (t.data) {
        let a = s.shift();
        if (a === void 0)
          throw v(
            'Attempted to parse a path expression, but it was not valid. Paths beginning with @ must start with a-z.',
            this.source.spanFor(t.loc)
          );
        n = f.atName({
          name: `@${a}`,
          loc: this.source.spanFor({
            start: t.loc.start,
            end: { line: t.loc.start.line, column: t.loc.start.column + a.length + 1 },
          }),
        });
      } else {
        let a = s.shift();
        if (a === void 0)
          throw v(
            'Attempted to parse a path expression, but it was not valid. Paths must start with a-z or A-Z.',
            this.source.spanFor(t.loc)
          );
        n = f.var({
          name: a,
          loc: this.source.spanFor({
            start: t.loc.start,
            end: { line: t.loc.start.line, column: t.loc.start.column + a.length },
          }),
        });
      }
      return f.path({ head: n, tail: s, loc: this.source.spanFor(t.loc) });
    }
    Hash(t) {
      let r = t.pairs.map(s =>
        f.pair({ key: s.key, value: this.acceptNode(s.value), loc: this.source.spanFor(s.loc) })
      );
      return f.hash({ pairs: r, loc: this.source.spanFor(t.loc) });
    }
    StringLiteral(t) {
      return f.literal({ type: 'StringLiteral', value: t.value, loc: this.source.spanFor(t.loc) });
    }
    BooleanLiteral(t) {
      return f.literal({ type: 'BooleanLiteral', value: t.value, loc: this.source.spanFor(t.loc) });
    }
    NumberLiteral(t) {
      return f.literal({ type: 'NumberLiteral', value: t.value, loc: this.source.spanFor(t.loc) });
    }
    UndefinedLiteral(t) {
      return f.literal({
        type: 'UndefinedLiteral',
        value: void 0,
        loc: this.source.spanFor(t.loc),
      });
    }
    NullLiteral(t) {
      return f.literal({ type: 'NullLiteral', value: null, loc: this.source.spanFor(t.loc) });
    }
    constructor(...t) {
      super(...t), (this.pendingError = null);
    }
  };
function fr(e, t) {
  let r;
  switch (t.path.type) {
    case 'PathExpression':
      r = e.PathExpression(t.path);
      break;
    case 'SubExpression':
      r = e.SubExpression(t.path);
      break;
    case 'StringLiteral':
    case 'UndefinedLiteral':
    case 'NullLiteral':
    case 'NumberLiteral':
    case 'BooleanLiteral': {
      let i;
      throw (
        ((i =
          t.path.type === 'BooleanLiteral'
            ? t.path.original.toString()
            : t.path.type === 'StringLiteral'
              ? `"${t.path.original}"`
              : t.path.type === 'NullLiteral'
                ? 'null'
                : t.path.type === 'NumberLiteral'
                  ? t.path.value.toString()
                  : 'undefined'),
        v(
          `${t.path.type} "${t.path.type === 'StringLiteral' ? t.path.original : i}" cannot be called as a sub-expression, replace (${i}) with ${i}`,
          e.source.spanFor(t.path.loc)
        ))
      );
    }
  }
  let s = t.params.map(i => e.acceptNode(i)),
    n = ce(s) ? Nr(s).loc : r.loc;
  return {
    path: r,
    params: s,
    hash: t.hash ? e.Hash(t.hash) : f.hash({ pairs: [], loc: e.source.spanFor(n).collapse('end') }),
  };
}
function mr(e, t) {
  let { path: r, params: s, hash: n, loc: i } = t;
  if (Rs(r)) {
    let o = `{{${(function (c) {
      return c.type === 'UndefinedLiteral' ? 'undefined' : JSON.stringify(c.value);
    })(r)}}}`;
    throw v(`In <${e.name} ... ${o} ..., ${o} is not a valid modifier`, t.loc);
  }
  let a = f.elementModifier({ path: r, params: s, hash: n, loc: i });
  e.modifiers.push(a);
}
function Ls(e, t, r) {
  if (!t.program.loc) {
    let n = G(!1, t.program.body, 0),
      i = G(!1, t.program.body, -1);
    if (n && i) t.program.loc = { ...n.loc, end: i.loc.end };
    else {
      let a = e.spanFor(t.loc);
      t.program.loc = r.withEnd(a.getEnd());
    }
  }
  let s = e.spanFor(t.program.loc).getEnd();
  return t.inverse && !t.inverse.loc && (t.inverse.loc = s.collapsed()), t;
}
function Ft(e) {
  return /[\t\n\f ]/u.test(e);
}
var wr = class extends Er {
    reset() {
      this.currentNode = null;
    }
    beginComment() {
      this.currentNode = {
        type: 'CommentStatement',
        value: '',
        start: this.source.offsetFor(this.tagOpenLine, this.tagOpenColumn),
      };
    }
    appendToCommentData(t) {
      this.currentComment.value += t;
    }
    finishComment() {
      Ht(this.currentElement(), f.comment(this.finish(this.currentComment)));
    }
    beginData() {
      this.currentNode = { type: 'TextNode', chars: '', start: this.offset() };
    }
    appendToData(t) {
      this.currentData.chars += t;
    }
    finishData() {
      Ht(this.currentElement(), f.text(this.finish(this.currentData)));
    }
    tagOpen() {
      (this.tagOpenLine = this.tokenizer.line), (this.tagOpenColumn = this.tokenizer.column);
    }
    beginStartTag() {
      this.currentNode = {
        type: 'StartTag',
        name: '',
        nameStart: null,
        nameEnd: null,
        attributes: [],
        modifiers: [],
        comments: [],
        params: [],
        selfClosing: !1,
        start: this.source.offsetFor(this.tagOpenLine, this.tagOpenColumn),
      };
    }
    beginEndTag() {
      this.currentNode = {
        type: 'EndTag',
        name: '',
        start: this.source.offsetFor(this.tagOpenLine, this.tagOpenColumn),
      };
    }
    finishTag() {
      let t = this.finish(this.currentTag);
      if (t.type === 'StartTag') {
        if ((this.finishStartTag(), t.name === ':'))
          throw v(
            'Invalid named block named detected, you may have created a named block without a name, or you may have began your name with a number. Named blocks must have names that are at least one character long, and begin with a lower case letter',
            this.source.spanFor({
              start: this.currentTag.start.toJSON(),
              end: this.offset().toJSON(),
            })
          );
        (dr.has(t.name) || t.selfClosing) && this.finishEndTag(!0);
      } else t.type, t.type, this.finishEndTag(!1);
    }
    finishStartTag() {
      let { name: t, nameStart: r, nameEnd: s } = this.currentStartTag,
        n = r.until(s),
        [i, ...a] = t.split('.'),
        o = f.path({
          head: f.head({ original: i, loc: n.sliceStartChars({ chars: i.length }) }),
          tail: a,
          loc: n,
        }),
        {
          attributes: c,
          modifiers: h,
          comments: p,
          params: m,
          selfClosing: S,
          loc: y,
        } = this.finish(this.currentStartTag),
        E = f.element({
          path: o,
          selfClosing: S,
          attributes: c,
          modifiers: h,
          comments: p,
          params: m,
          children: [],
          openTag: y,
          closeTag: S ? null : D.broken(),
          loc: y,
        });
      this.elementStack.push(E);
    }
    finishEndTag(t) {
      let { start: r } = this.currentTag,
        s = this.finish(this.currentTag),
        n = this.elementStack.pop();
      this.validateEndTag(s, n, t);
      let i = this.currentElement();
      t ? (n.closeTag = null) : n.selfClosing ? n.closeTag : (n.closeTag = r.until(this.offset())),
        (n.loc = n.loc.withEnd(this.offset())),
        Ht(i, f.element(n));
    }
    markTagAsSelfClosing() {
      let t = this.currentTag;
      if (t.type !== 'StartTag')
        throw v(
          'Invalid end tag: closing tag must not be self-closing',
          this.source.spanFor({ start: t.start.toJSON(), end: this.offset().toJSON() })
        );
      t.selfClosing = !0;
    }
    appendToTagName(t) {
      let r = this.currentTag;
      if (((r.name += t), r.type === 'StartTag')) {
        let s = this.offset();
        r.nameStart === null && (r.nameEnd, (r.nameStart = s.move(-1))), (r.nameEnd = s);
      }
    }
    beginAttribute() {
      let t = this.offset();
      this.currentAttribute = {
        name: '',
        parts: [],
        currentPart: null,
        isQuoted: !1,
        isDynamic: !1,
        start: t,
        valueSpan: t.collapsed(),
      };
    }
    appendToAttributeName(t) {
      (this.currentAttr.name += t),
        this.currentAttr.name === 'as' && this.parsePossibleBlockParams();
    }
    beginAttributeValue(t) {
      (this.currentAttr.isQuoted = t),
        this.startTextPart(),
        (this.currentAttr.valueSpan = this.offset().collapsed());
    }
    appendToAttributeValue(t) {
      let r = this.currentAttr.parts,
        s = r[r.length - 1],
        n = this.currentAttr.currentPart;
      if (n) (n.chars += t), (n.loc = n.loc.withEnd(this.offset()));
      else {
        let i = this.offset();
        (i =
          t ===
          `
`
            ? s
              ? s.loc.getEnd()
              : this.currentAttr.valueSpan.getStart()
            : i.move(-1)),
          (this.currentAttr.currentPart = f.text({ chars: t, loc: i.collapsed() }));
      }
    }
    finishAttributeValue() {
      this.finalizeTextPart();
      let t = this.currentTag,
        r = this.offset();
      if (t.type === 'EndTag')
        throw v(
          'Invalid end tag: closing tag must not have attributes',
          this.source.spanFor({ start: t.start.toJSON(), end: r.toJSON() })
        );
      let {
        name: s,
        parts: n,
        start: i,
        isQuoted: a,
        isDynamic: o,
        valueSpan: c,
      } = this.currentAttr;
      if (s.startsWith('|') && n.length === 0 && !a && !o)
        throw v(
          'Invalid block parameters syntax: block parameters must be preceded by the `as` keyword',
          i.until(i.move(s.length))
        );
      let h = this.assembleAttributeValue(n, a, o, i.until(r));
      h.loc = c.withEnd(r);
      let p = f.attr({ name: s, value: h, loc: i.until(r) });
      this.currentStartTag.attributes.push(p);
    }
    parsePossibleBlockParams() {
      let t = /[!"#%&'()*+./;<=>@[\\\]^`{|}~]/u;
      this.tokenizer.state;
      let r = this.currentStartTag,
        s = this.currentAttr,
        n = { state: 'PossibleAs' },
        i = {
          PossibleAs: o => {
            if ((n.state, Ft(o)))
              (n = { state: 'BeforeStartPipe' }),
                this.tokenizer.transitionTo('afterAttributeName'),
                this.tokenizer.consume();
            else {
              if (o === '|')
                throw v(
                  'Invalid block parameters syntax: expecting at least one space character between "as" and "|"',
                  s.start.until(this.offset().move(1))
                );
              n = { state: 'Done' };
            }
          },
          BeforeStartPipe: o => {
            n.state,
              Ft(o)
                ? this.tokenizer.consume()
                : o === '|'
                  ? ((n = { state: 'BeforeBlockParamName' }),
                    this.tokenizer.transitionTo('beforeAttributeName'),
                    this.tokenizer.consume())
                  : (n = { state: 'Done' });
          },
          BeforeBlockParamName: o => {
            if ((n.state, Ft(o))) this.tokenizer.consume();
            else if (o === '')
              (n = { state: 'Done' }),
                (this.pendingError = {
                  mustache(c) {
                    throw v(
                      'Invalid block parameters syntax: mustaches cannot be used inside parameters list',
                      c
                    );
                  },
                  eof(c) {
                    throw v(
                      'Invalid block parameters syntax: expecting the tag to be closed with ">" or "/>" after parameters list',
                      s.start.until(c)
                    );
                  },
                });
            else if (o === '|') {
              if (r.params.length === 0)
                throw v(
                  'Invalid block parameters syntax: empty parameters list, expecting at least one identifier',
                  s.start.until(this.offset().move(1))
                );
              (n = { state: 'AfterEndPipe' }), this.tokenizer.consume();
            } else {
              if (o === '>' || o === '/')
                throw v(
                  'Invalid block parameters syntax: incomplete parameters list, expecting "|" but the tag was closed prematurely',
                  s.start.until(this.offset().move(1))
                );
              (n = { state: 'BlockParamName', name: o, start: this.offset() }),
                this.tokenizer.consume();
            }
          },
          BlockParamName: o => {
            if ((n.state, o === ''))
              (n = { state: 'Done' }),
                (this.pendingError = {
                  mustache(c) {
                    throw v(
                      'Invalid block parameters syntax: mustaches cannot be used inside parameters list',
                      c
                    );
                  },
                  eof(c) {
                    throw v(
                      'Invalid block parameters syntax: expecting the tag to be closed with ">" or "/>" after parameters list',
                      s.start.until(c)
                    );
                  },
                });
            else if (o === '|' || Ft(o)) {
              let c = n.start.until(this.offset());
              if (n.name === 'this' || t.test(n.name))
                throw v(
                  `Invalid block parameters syntax: invalid identifier name \`${n.name}\``,
                  c
                );
              r.params.push(f.var({ name: n.name, loc: c })),
                (n = o === '|' ? { state: 'AfterEndPipe' } : { state: 'BeforeBlockParamName' }),
                this.tokenizer.consume();
            } else {
              if (o === '>' || o === '/')
                throw v(
                  'Invalid block parameters syntax: expecting "|" but the tag was closed prematurely',
                  s.start.until(this.offset().move(1))
                );
              (n.name += o), this.tokenizer.consume();
            }
          },
          AfterEndPipe: o => {
            n.state,
              Ft(o)
                ? this.tokenizer.consume()
                : o === ''
                  ? ((n = { state: 'Done' }),
                    (this.pendingError = {
                      mustache(c) {
                        throw v(
                          'Invalid block parameters syntax: modifiers cannot follow parameters list',
                          c
                        );
                      },
                      eof(c) {
                        throw v(
                          'Invalid block parameters syntax: expecting the tag to be closed with ">" or "/>" after parameters list',
                          s.start.until(c)
                        );
                      },
                    }))
                  : o === '>' || o === '/'
                    ? (n = { state: 'Done' })
                    : ((n = {
                        state: 'Error',
                        message:
                          'Invalid block parameters syntax: expecting the tag to be closed with ">" or "/>" after parameters list',
                        start: this.offset(),
                      }),
                      this.tokenizer.consume());
          },
          Error: o => {
            if ((n.state, o === '' || o === '/' || o === '>' || Ft(o)))
              throw v(n.message, n.start.until(this.offset()));
            this.tokenizer.consume();
          },
          Done: () => {},
        },
        a;
      do (a = this.tokenizer.peek()), i[n.state](a);
      while (n.state !== 'Done' && a !== '');
      n.state;
    }
    reportSyntaxError(t) {
      throw v(t, this.offset().collapsed());
    }
    assembleConcatenatedValue(t) {
      let r = ii(t),
        s = Nr(t);
      return f.concat({
        parts: t,
        loc: this.source.spanFor(r.loc).extend(this.source.spanFor(s.loc)),
      });
    }
    validateEndTag(t, r, s) {
      if (dr.has(t.name) && !s)
        throw v(`<${t.name}> elements do not need end tags. You should remove it`, t.loc);
      if (r.type !== 'ElementNode') throw v(`Closing tag </${t.name}> without an open tag`, t.loc);
      if (r.tag !== t.name)
        throw v(
          `Closing tag </${t.name}> did not match last open tag <${r.tag}> (on line ${r.loc.startPosition.line})`,
          t.loc
        );
    }
    assembleAttributeValue(t, r, s, n) {
      if (s) {
        if (r) return this.assembleConcatenatedValue(t);
        {
          let [i, a] = t;
          if (a === void 0 || (a.type === 'TextNode' && a.chars === '/')) return i;
          throw v(
            "An unquoted attribute value must be a string or a mustache, preceded by whitespace or a '=' character, and followed by whitespace, a '>' character, or '/>'",
            n
          );
        }
      }
      return ce(t) ? t[0] : f.text({ chars: '', loc: n });
    }
    constructor(...t) {
      super(...t), (this.tagOpenLine = 0), (this.tagOpenColumn = 0);
    }
  },
  mi = {},
  Tr = class extends lr {
    constructor() {
      super({});
    }
    parse() {}
  };
function Vs(e, t = {}) {
  var c, h, p;
  let r,
    s,
    n,
    i = t.mode || 'precompile';
  typeof e == 'string'
    ? ((r = new wt(e, (c = t.meta) == null ? void 0 : c.moduleName)),
      (s = i === 'codemod' ? Te(e, t.parseOptions) : or(e, t.parseOptions)))
    : e instanceof wt
      ? ((r = e),
        (s = i === 'codemod' ? Te(e.source, t.parseOptions) : or(e.source, t.parseOptions)))
      : ((r = new wt('', (h = t.meta) == null ? void 0 : h.moduleName)), (s = e)),
    i === 'codemod' && (n = new Tr());
  let a = D.forCharPositions(r, 0, r.source.length);
  s.loc = { source: '(program)', start: a.startPosition, end: a.endPosition };
  let o = new wr(r, n, i).parse(s, t.locals ?? []);
  if ((p = t.plugins) != null && p.ast)
    for (let m of t.plugins.ast) pi(o, m(tr({}, t, { syntax: mi }, { plugins: void 0 })).visitor);
  return o;
}
var di = { resolution: () => Ne.GetStrictKeyword, serialize: () => 'Strict', isAngleBracket: !1 },
  go = { ...di, isAngleBracket: !0 };
var Le = `
`,
  Fs = '\r',
  Hs = (function () {
    function e(t) {
      this.length = t.length;
      for (var r = [0], s = 0; s < t.length; )
        switch (t[s]) {
          case Le:
            (s += Le.length), r.push(s);
            break;
          case Fs:
            (s += Fs.length), t[s] === Le && (s += Le.length), r.push(s);
            break;
          default:
            s++;
            break;
        }
      this.offsets = r;
    }
    return (
      (e.prototype.locationForIndex = function (t) {
        if (t < 0 || t > this.length) return null;
        for (var r = 0, s = this.offsets; s[r + 1] <= t; ) r++;
        var n = t - s[r];
        return { line: r, column: n };
      }),
      (e.prototype.indexForLocation = function (t) {
        var r = t.line,
          s = t.column;
        return r < 0 || r >= this.offsets.length || s < 0 || s > this.lengthOfLine(r)
          ? null
          : this.offsets[r] + s;
      }),
      (e.prototype.lengthOfLine = function (t) {
        var r = this.offsets[t],
          s = t === this.offsets.length - 1 ? this.length : this.offsets[t + 1];
        return s - r;
      }),
      e
    );
  })();
function gi(e, t) {
  let r = new SyntaxError(e + ' (' + t.loc.start.line + ':' + t.loc.start.column + ')');
  return Object.assign(r, t);
}
var Us = gi;
function bi(e) {
  let t = e.children ?? e.body;
  if (t)
    for (let r = 0; r < t.length - 1; r++)
      t[r].type === 'TextNode' &&
        t[r + 1].type === 'MustacheStatement' &&
        (t[r].chars = t[r].chars.replace(/\\$/u, '\\\\'));
}
function yi(e) {
  let t = new Hs(e),
    r = ({ line: n, column: i }) => t.indexForLocation({ line: n - 1, column: i }),
    s = n => {
      let { start: i, end: a } = n.loc;
      (i.offset = r(i)), (a.offset = r(a));
    };
  return () => ({
    name: 'prettierParsePlugin',
    visitor: {
      All(n) {
        s(n), bi(n);
      },
    },
  });
}
function ki(e) {
  let t;
  try {
    t = Vs(e, { mode: 'codemod', plugins: { ast: [yi(e)] } });
  } catch (r) {
    let s = vi(r);
    if (s) {
      let n = Si(r);
      throw Us(n, { loc: s, cause: r });
    }
    throw r;
  }
  return t;
}
function Si(e) {
  let { message: t } = e,
    r = t.split(`
`);
  return r.length >= 4 && /^Parse error on line \d+:$/u.test(r[0]) && /^-*\^$/u.test(G(!1, r, -2))
    ? G(!1, r, -1)
    : r.length >= 4 &&
        /:\s?$/u.test(r[0]) &&
        /^\(error occurred in '.*?' @ line \d+ : column \d+\)$/u.test(G(!1, r, -1)) &&
        r[1] === '' &&
        G(!1, r, -2) === '' &&
        r.slice(2, -2).every(s => s.startsWith('|'))
      ? r[0].trim().slice(0, -1)
      : t;
}
function vi(e) {
  let { location: t, hash: r } = e;
  if (t) {
    let { start: s, end: n } = t;
    return typeof n.line != 'number' ? { start: s } : t;
  }
  if (r) {
    let {
      loc: { last_line: s, last_column: n },
    } = r;
    return { start: { line: s, column: n + 1 } };
  }
}
var Ei = { parse: ki, astFormat: 'glimmer', locStart: St, locEnd: re };
var wi = { glimmer: hs };
var Do = Pr;
export { Do as default, ps as languages, xr as parsers, wi as printers };
