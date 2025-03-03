var Ti = Object.create;
var tn = Object.defineProperty;
var Ci = Object.getOwnPropertyDescriptor;
var Mi = Object.getOwnPropertyNames;
var ki = Object.getPrototypeOf,
  vi = Object.prototype.hasOwnProperty;
var te = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
  rr = (t, e) => {
    for (var n in e) tn(t, n, { get: e[n], enumerable: !0 });
  },
  Ii = (t, e, n, r) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let s of Mi(e))
        !vi.call(t, s) &&
          s !== n &&
          tn(t, s, { get: () => e[s], enumerable: !(r = Ci(e, s)) || r.enumerable });
    return t;
  };
var sr = (t, e, n) => (
  (n = t != null ? Ti(ki(t)) : {}),
  Ii(e || !t || !t.__esModule ? tn(n, 'default', { value: t, enumerable: !0 }) : n, t)
);
var le = te(U => {
  'use strict';
  var re = { ANCHOR: '&', COMMENT: '#', TAG: '!', DIRECTIVES_END: '-', DOCUMENT_END: '.' },
    lt = {
      ALIAS: 'ALIAS',
      BLANK_LINE: 'BLANK_LINE',
      BLOCK_FOLDED: 'BLOCK_FOLDED',
      BLOCK_LITERAL: 'BLOCK_LITERAL',
      COMMENT: 'COMMENT',
      DIRECTIVE: 'DIRECTIVE',
      DOCUMENT: 'DOCUMENT',
      FLOW_MAP: 'FLOW_MAP',
      FLOW_SEQ: 'FLOW_SEQ',
      MAP: 'MAP',
      MAP_KEY: 'MAP_KEY',
      MAP_VALUE: 'MAP_VALUE',
      PLAIN: 'PLAIN',
      QUOTE_DOUBLE: 'QUOTE_DOUBLE',
      QUOTE_SINGLE: 'QUOTE_SINGLE',
      SEQ: 'SEQ',
      SEQ_ITEM: 'SEQ_ITEM',
    },
    Ao = 'tag:yaml.org,2002:',
    To = {
      MAP: 'tag:yaml.org,2002:map',
      SEQ: 'tag:yaml.org,2002:seq',
      STR: 'tag:yaml.org,2002:str',
    };
  function Ps(t) {
    let e = [0],
      n = t.indexOf(`
`);
    for (; n !== -1; )
      (n += 1),
        e.push(n),
        (n = t.indexOf(
          `
`,
          n
        ));
    return e;
  }
  function _s(t) {
    let e, n;
    return (
      typeof t == 'string'
        ? ((e = Ps(t)), (n = t))
        : (Array.isArray(t) && (t = t[0]),
          t &&
            t.context &&
            (t.lineStarts || (t.lineStarts = Ps(t.context.src)),
            (e = t.lineStarts),
            (n = t.context.src))),
      { lineStarts: e, src: n }
    );
  }
  function Tn(t, e) {
    if (typeof t != 'number' || t < 0) return null;
    let { lineStarts: n, src: r } = _s(e);
    if (!n || !r || t > r.length) return null;
    for (let i = 0; i < n.length; ++i) {
      let o = n[i];
      if (t < o) return { line: i, col: t - n[i - 1] + 1 };
      if (t === o) return { line: i + 1, col: 1 };
    }
    let s = n.length;
    return { line: s, col: t - n[s - 1] + 1 };
  }
  function Co(t, e) {
    let { lineStarts: n, src: r } = _s(e);
    if (!n || !(t >= 1) || t > n.length) return null;
    let s = n[t - 1],
      i = n[t];
    for (
      ;
      i &&
      i > s &&
      r[i - 1] ===
        `
`;

    )
      --i;
    return r.slice(s, i);
  }
  function Mo({ start: t, end: e }, n, r = 80) {
    let s = Co(t.line, n);
    if (!s) return null;
    let { col: i } = t;
    if (s.length > r)
      if (i <= r - 10) s = s.substr(0, r - 1) + '\u2026';
      else {
        let f = Math.round(r / 2);
        s.length > i + f && (s = s.substr(0, i + f - 1) + '\u2026'),
          (i -= s.length - r),
          (s = '\u2026' + s.substr(1 - r));
      }
    let o = 1,
      a = '';
    e &&
      (e.line === t.line && i + (e.col - t.col) <= r + 1
        ? (o = e.col - t.col)
        : ((o = Math.min(s.length + 1, r) - i), (a = '\u2026')));
    let c = i > 1 ? ' '.repeat(i - 1) : '',
      l = '^'.repeat(o);
    return `${s}
${c}${l}${a}`;
  }
  var Be = class t {
      static copy(e) {
        return new t(e.start, e.end);
      }
      constructor(e, n) {
        (this.start = e), (this.end = n || e);
      }
      isEmpty() {
        return typeof this.start != 'number' || !this.end || this.end <= this.start;
      }
      setOrigRange(e, n) {
        let { start: r, end: s } = this;
        if (e.length === 0 || s <= e[0]) return (this.origStart = r), (this.origEnd = s), n;
        let i = n;
        for (; i < e.length && !(e[i] > r); ) ++i;
        this.origStart = r + i;
        let o = i;
        for (; i < e.length && !(e[i] >= s); ) ++i;
        return (this.origEnd = s + i), o;
      }
    },
    se = class t {
      static addStringTerminator(e, n, r) {
        if (
          r[r.length - 1] ===
          `
`
        )
          return r;
        let s = t.endOfWhiteSpace(e, n);
        return s >= e.length ||
          e[s] ===
            `
`
          ? r +
              `
`
          : r;
      }
      static atDocumentBoundary(e, n, r) {
        let s = e[n];
        if (!s) return !0;
        let i = e[n - 1];
        if (
          i &&
          i !==
            `
`
        )
          return !1;
        if (r) {
          if (s !== r) return !1;
        } else if (s !== re.DIRECTIVES_END && s !== re.DOCUMENT_END) return !1;
        let o = e[n + 1],
          a = e[n + 2];
        if (o !== s || a !== s) return !1;
        let c = e[n + 3];
        return (
          !c ||
          c ===
            `
` ||
          c === '	' ||
          c === ' '
        );
      }
      static endOfIdentifier(e, n) {
        let r = e[n],
          s = r === '<',
          i = s
            ? [
                `
`,
                '	',
                ' ',
                '>',
              ]
            : [
                `
`,
                '	',
                ' ',
                '[',
                ']',
                '{',
                '}',
                ',',
              ];
        for (; r && i.indexOf(r) === -1; ) r = e[(n += 1)];
        return s && r === '>' && (n += 1), n;
      }
      static endOfIndent(e, n) {
        let r = e[n];
        for (; r === ' '; ) r = e[(n += 1)];
        return n;
      }
      static endOfLine(e, n) {
        let r = e[n];
        for (
          ;
          r &&
          r !==
            `
`;

        )
          r = e[(n += 1)];
        return n;
      }
      static endOfWhiteSpace(e, n) {
        let r = e[n];
        for (; r === '	' || r === ' '; ) r = e[(n += 1)];
        return n;
      }
      static startOfLine(e, n) {
        let r = e[n - 1];
        if (
          r ===
          `
`
        )
          return n;
        for (
          ;
          r &&
          r !==
            `
`;

        )
          r = e[(n -= 1)];
        return n + 1;
      }
      static endOfBlockIndent(e, n, r) {
        let s = t.endOfIndent(e, r);
        if (s > r + n) return s;
        {
          let i = t.endOfWhiteSpace(e, s),
            o = e[i];
          if (
            !o ||
            o ===
              `
`
          )
            return i;
        }
        return null;
      }
      static atBlank(e, n, r) {
        let s = e[n];
        return (
          s ===
            `
` ||
          s === '	' ||
          s === ' ' ||
          (r && !s)
        );
      }
      static nextNodeIsIndented(e, n, r) {
        return !e || n < 0 ? !1 : n > 0 ? !0 : r && e === '-';
      }
      static normalizeOffset(e, n) {
        let r = e[n];
        return r
          ? r !==
              `
` &&
            e[n - 1] ===
              `
`
            ? n - 1
            : t.endOfWhiteSpace(e, n)
          : n;
      }
      static foldNewline(e, n, r) {
        let s = 0,
          i = !1,
          o = '',
          a = e[n + 1];
        for (
          ;
          a === ' ' ||
          a === '	' ||
          a ===
            `
`;

        ) {
          switch (a) {
            case `
`:
              (s = 0),
                (n += 1),
                (o += `
`);
              break;
            case '	':
              s <= r && (i = !0), (n = t.endOfWhiteSpace(e, n + 2) - 1);
              break;
            case ' ':
              (s += 1), (n += 1);
              break;
          }
          a = e[n + 1];
        }
        return o || (o = ' '), a && s <= r && (i = !0), { fold: o, offset: n, error: i };
      }
      constructor(e, n, r) {
        Object.defineProperty(this, 'context', { value: r || null, writable: !0 }),
          (this.error = null),
          (this.range = null),
          (this.valueRange = null),
          (this.props = n || []),
          (this.type = e),
          (this.value = null);
      }
      getPropValue(e, n, r) {
        if (!this.context) return null;
        let { src: s } = this.context,
          i = this.props[e];
        return i && s[i.start] === n ? s.slice(i.start + (r ? 1 : 0), i.end) : null;
      }
      get anchor() {
        for (let e = 0; e < this.props.length; ++e) {
          let n = this.getPropValue(e, re.ANCHOR, !0);
          if (n != null) return n;
        }
        return null;
      }
      get comment() {
        let e = [];
        for (let n = 0; n < this.props.length; ++n) {
          let r = this.getPropValue(n, re.COMMENT, !0);
          r != null && e.push(r);
        }
        return e.length > 0
          ? e.join(`
`)
          : null;
      }
      commentHasRequiredWhitespace(e) {
        let { src: n } = this.context;
        if ((this.header && e === this.header.end) || !this.valueRange) return !1;
        let { end: r } = this.valueRange;
        return e !== r || t.atBlank(n, r - 1);
      }
      get hasComment() {
        if (this.context) {
          let { src: e } = this.context;
          for (let n = 0; n < this.props.length; ++n)
            if (e[this.props[n].start] === re.COMMENT) return !0;
        }
        return !1;
      }
      get hasProps() {
        if (this.context) {
          let { src: e } = this.context;
          for (let n = 0; n < this.props.length; ++n)
            if (e[this.props[n].start] !== re.COMMENT) return !0;
        }
        return !1;
      }
      get includesTrailingLines() {
        return !1;
      }
      get jsonLike() {
        return (
          [lt.FLOW_MAP, lt.FLOW_SEQ, lt.QUOTE_DOUBLE, lt.QUOTE_SINGLE].indexOf(this.type) !== -1
        );
      }
      get rangeAsLinePos() {
        if (!this.range || !this.context) return;
        let e = Tn(this.range.start, this.context.root);
        if (!e) return;
        let n = Tn(this.range.end, this.context.root);
        return { start: e, end: n };
      }
      get rawValue() {
        if (!this.valueRange || !this.context) return null;
        let { start: e, end: n } = this.valueRange;
        return this.context.src.slice(e, n);
      }
      get tag() {
        for (let e = 0; e < this.props.length; ++e) {
          let n = this.getPropValue(e, re.TAG, !1);
          if (n != null) {
            if (n[1] === '<') return { verbatim: n.slice(2, -1) };
            {
              let [r, s, i] = n.match(/^(.*!)([^!]*)$/);
              return { handle: s, suffix: i };
            }
          }
        }
        return null;
      }
      get valueRangeContainsNewline() {
        if (!this.valueRange || !this.context) return !1;
        let { start: e, end: n } = this.valueRange,
          { src: r } = this.context;
        for (let s = e; s < n; ++s)
          if (
            r[s] ===
            `
`
          )
            return !0;
        return !1;
      }
      parseComment(e) {
        let { src: n } = this.context;
        if (n[e] === re.COMMENT) {
          let r = t.endOfLine(n, e + 1),
            s = new Be(e, r);
          return this.props.push(s), r;
        }
        return e;
      }
      setOrigRanges(e, n) {
        return (
          this.range && (n = this.range.setOrigRange(e, n)),
          this.valueRange && this.valueRange.setOrigRange(e, n),
          this.props.forEach(r => r.setOrigRange(e, n)),
          n
        );
      }
      toString() {
        let {
          context: { src: e },
          range: n,
          value: r,
        } = this;
        if (r != null) return r;
        let s = e.slice(n.start, n.end);
        return t.addStringTerminator(e, n.end, s);
      }
    },
    ye = class extends Error {
      constructor(e, n, r) {
        if (!r || !(n instanceof se)) throw new Error(`Invalid arguments for new ${e}`);
        super(), (this.name = e), (this.message = r), (this.source = n);
      }
      makePretty() {
        if (!this.source) return;
        this.nodeType = this.source.type;
        let e = this.source.context && this.source.context.root;
        if (typeof this.offset == 'number') {
          this.range = new Be(this.offset, this.offset + 1);
          let n = e && Tn(this.offset, e);
          if (n) {
            let r = { line: n.line, col: n.col + 1 };
            this.linePos = { start: n, end: r };
          }
          delete this.offset;
        } else (this.range = this.source.range), (this.linePos = this.source.rangeAsLinePos);
        if (this.linePos) {
          let { line: n, col: r } = this.linePos.start;
          this.message += ` at line ${n}, column ${r}`;
          let s = e && Mo(this.linePos, e);
          s &&
            (this.message += `:

${s}
`);
        }
        delete this.source;
      }
    },
    Cn = class extends ye {
      constructor(e, n) {
        super('YAMLReferenceError', e, n);
      }
    },
    ft = class extends ye {
      constructor(e, n) {
        super('YAMLSemanticError', e, n);
      }
    },
    Mn = class extends ye {
      constructor(e, n) {
        super('YAMLSyntaxError', e, n);
      }
    },
    kn = class extends ye {
      constructor(e, n) {
        super('YAMLWarning', e, n);
      }
    };
  function ko(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (t[e] = n),
      t
    );
  }
  var vn = class t extends se {
    static endOfLine(e, n, r) {
      let s = e[n],
        i = n;
      for (
        ;
        s &&
        s !==
          `
` &&
        !(r && (s === '[' || s === ']' || s === '{' || s === '}' || s === ','));

      ) {
        let o = e[i + 1];
        if (
          (s === ':' &&
            (!o ||
              o ===
                `
` ||
              o === '	' ||
              o === ' ' ||
              (r && o === ','))) ||
          ((s === ' ' || s === '	') && o === '#')
        )
          break;
        (i += 1), (s = o);
      }
      return i;
    }
    get strValue() {
      if (!this.valueRange || !this.context) return null;
      let { start: e, end: n } = this.valueRange,
        { src: r } = this.context,
        s = r[n - 1];
      for (
        ;
        e < n &&
        (s ===
          `
` ||
          s === '	' ||
          s === ' ');

      )
        s = r[--n - 1];
      let i = '';
      for (let a = e; a < n; ++a) {
        let c = r[a];
        if (
          c ===
          `
`
        ) {
          let { fold: l, offset: f } = se.foldNewline(r, a, -1);
          (i += l), (a = f);
        } else if (c === ' ' || c === '	') {
          let l = a,
            f = r[a + 1];
          for (; a < n && (f === ' ' || f === '	'); ) (a += 1), (f = r[a + 1]);
          f !==
            `
` && (i += a > l ? r.slice(l, a + 1) : c);
        } else i += c;
      }
      let o = r[e];
      switch (o) {
        case '	': {
          let a = 'Plain value cannot start with a tab character';
          return { errors: [new ft(this, a)], str: i };
        }
        case '@':
        case '`': {
          let a = `Plain value cannot start with reserved character ${o}`;
          return { errors: [new ft(this, a)], str: i };
        }
        default:
          return i;
      }
    }
    parseBlockValue(e) {
      let { indent: n, inFlow: r, src: s } = this.context,
        i = e,
        o = e;
      for (
        let a = s[i];
        a ===
          `
` && !se.atDocumentBoundary(s, i + 1);
        a = s[i]
      ) {
        let c = se.endOfBlockIndent(s, n, i + 1);
        if (c === null || s[c] === '#') break;
        s[c] ===
        `
`
          ? (i = c)
          : ((o = t.endOfLine(s, c, r)), (i = o));
      }
      return this.valueRange.isEmpty() && (this.valueRange.start = e), (this.valueRange.end = o), o;
    }
    parse(e, n) {
      this.context = e;
      let { inFlow: r, src: s } = e,
        i = n,
        o = s[i];
      return (
        o &&
          o !== '#' &&
          o !==
            `
` &&
          (i = t.endOfLine(s, n, r)),
        (this.valueRange = new Be(n, i)),
        (i = se.endOfWhiteSpace(s, i)),
        (i = this.parseComment(i)),
        (!this.hasComment || this.valueRange.isEmpty()) && (i = this.parseBlockValue(i)),
        i
      );
    }
  };
  U.Char = re;
  U.Node = se;
  U.PlainValue = vn;
  U.Range = Be;
  U.Type = lt;
  U.YAMLError = ye;
  U.YAMLReferenceError = Cn;
  U.YAMLSemanticError = ft;
  U.YAMLSyntaxError = Mn;
  U.YAMLWarning = kn;
  U._defineProperty = ko;
  U.defaultTagPrefix = Ao;
  U.defaultTags = To;
});
var Rs = te(xs => {
  'use strict';
  var u = le(),
    Se = class extends u.Node {
      constructor() {
        super(u.Type.BLANK_LINE);
      }
      get includesTrailingLines() {
        return !0;
      }
      parse(e, n) {
        return (this.context = e), (this.range = new u.Range(n, n + 1)), n + 1;
      }
    },
    ut = class extends u.Node {
      constructor(e, n) {
        super(e, n), (this.node = null);
      }
      get includesTrailingLines() {
        return !!this.node && this.node.includesTrailingLines;
      }
      parse(e, n) {
        this.context = e;
        let { parseNode: r, src: s } = e,
          { atLineStart: i, lineStart: o } = e;
        !i &&
          this.type === u.Type.SEQ_ITEM &&
          (this.error = new u.YAMLSemanticError(
            this,
            'Sequence items must not have preceding content on the same line'
          ));
        let a = i ? n - o : e.indent,
          c = u.Node.endOfWhiteSpace(s, n + 1),
          l = s[c],
          f = l === '#',
          m = [],
          d = null;
        for (
          ;
          l ===
            `
` || l === '#';

        ) {
          if (l === '#') {
            let h = u.Node.endOfLine(s, c + 1);
            m.push(new u.Range(c, h)), (c = h);
          } else {
            (i = !0), (o = c + 1);
            let h = u.Node.endOfWhiteSpace(s, o);
            s[h] ===
              `
` &&
              m.length === 0 &&
              ((d = new Se()), (o = d.parse({ src: s }, o))),
              (c = u.Node.endOfIndent(s, o));
          }
          l = s[c];
        }
        if (
          (u.Node.nextNodeIsIndented(l, c - (o + a), this.type !== u.Type.SEQ_ITEM)
            ? (this.node = r(
                { atLineStart: i, inCollection: !1, indent: a, lineStart: o, parent: this },
                c
              ))
            : l && o > n + 1 && (c = o - 1),
          this.node)
        ) {
          if (d) {
            let h = e.parent.items || e.parent.contents;
            h && h.push(d);
          }
          m.length && Array.prototype.push.apply(this.props, m), (c = this.node.range.end);
        } else if (f) {
          let h = m[0];
          this.props.push(h), (c = h.end);
        } else c = u.Node.endOfLine(s, n + 1);
        let y = this.node ? this.node.valueRange.end : c;
        return (this.valueRange = new u.Range(n, y)), c;
      }
      setOrigRanges(e, n) {
        return (n = super.setOrigRanges(e, n)), this.node ? this.node.setOrigRanges(e, n) : n;
      }
      toString() {
        let {
          context: { src: e },
          node: n,
          range: r,
          value: s,
        } = this;
        if (s != null) return s;
        let i = n ? e.slice(r.start, n.range.start) + String(n) : e.slice(r.start, r.end);
        return u.Node.addStringTerminator(e, r.end, i);
      }
    },
    Ee = class extends u.Node {
      constructor() {
        super(u.Type.COMMENT);
      }
      parse(e, n) {
        this.context = e;
        let r = this.parseComment(n);
        return (this.range = new u.Range(n, r)), r;
      }
    };
  function In(t) {
    let e = t;
    for (; e instanceof ut; ) e = e.node;
    if (!(e instanceof $t)) return null;
    let n = e.items.length,
      r = -1;
    for (let o = n - 1; o >= 0; --o) {
      let a = e.items[o];
      if (a.type === u.Type.COMMENT) {
        let { indent: c, lineStart: l } = a.context;
        if (c > 0 && a.range.start >= l + c) break;
        r = o;
      } else if (a.type === u.Type.BLANK_LINE) r = o;
      else break;
    }
    if (r === -1) return null;
    let s = e.items.splice(r, n - r),
      i = s[0].range.start;
    for (
      ;
      (e.range.end = i), e.valueRange && e.valueRange.end > i && (e.valueRange.end = i), e !== t;

    )
      e = e.context.parent;
    return s;
  }
  var $t = class t extends u.Node {
      static nextContentHasIndent(e, n, r) {
        let s = u.Node.endOfLine(e, n) + 1;
        n = u.Node.endOfWhiteSpace(e, s);
        let i = e[n];
        return i
          ? n >= s + r
            ? !0
            : i !== '#' &&
                i !==
                  `
`
              ? !1
              : t.nextContentHasIndent(e, n, r)
          : !1;
      }
      constructor(e) {
        super(e.type === u.Type.SEQ_ITEM ? u.Type.SEQ : u.Type.MAP);
        for (let r = e.props.length - 1; r >= 0; --r)
          if (e.props[r].start < e.context.lineStart) {
            (this.props = e.props.slice(0, r + 1)), (e.props = e.props.slice(r + 1));
            let s = e.props[0] || e.valueRange;
            e.range.start = s.start;
            break;
          }
        this.items = [e];
        let n = In(e);
        n && Array.prototype.push.apply(this.items, n);
      }
      get includesTrailingLines() {
        return this.items.length > 0;
      }
      parse(e, n) {
        this.context = e;
        let { parseNode: r, src: s } = e,
          i = u.Node.startOfLine(s, n),
          o = this.items[0];
        (o.context.parent = this), (this.valueRange = u.Range.copy(o.valueRange));
        let a = o.range.start - o.context.lineStart,
          c = n;
        c = u.Node.normalizeOffset(s, c);
        let l = s[c],
          f = u.Node.endOfWhiteSpace(s, i) === c,
          m = !1;
        for (; l; ) {
          for (
            ;
            l ===
              `
` || l === '#';

          ) {
            if (
              f &&
              l ===
                `
` &&
              !m
            ) {
              let h = new Se();
              if (((c = h.parse({ src: s }, c)), (this.valueRange.end = c), c >= s.length)) {
                l = null;
                break;
              }
              this.items.push(h), (c -= 1);
            } else if (l === '#') {
              if (c < i + a && !t.nextContentHasIndent(s, c, a)) return c;
              let h = new Ee();
              if (
                ((c = h.parse({ indent: a, lineStart: i, src: s }, c)),
                this.items.push(h),
                (this.valueRange.end = c),
                c >= s.length)
              ) {
                l = null;
                break;
              }
            }
            if (((i = c + 1), (c = u.Node.endOfIndent(s, i)), u.Node.atBlank(s, c))) {
              let h = u.Node.endOfWhiteSpace(s, c),
                g = s[h];
              (!g ||
                g ===
                  `
` ||
                g === '#') &&
                (c = h);
            }
            (l = s[c]), (f = !0);
          }
          if (!l) break;
          if (c !== i + a && (f || l !== ':')) {
            if (c < i + a) {
              i > n && (c = i);
              break;
            } else if (!this.error) {
              let h = 'All collection items must start at the same column';
              this.error = new u.YAMLSyntaxError(this, h);
            }
          }
          if (o.type === u.Type.SEQ_ITEM) {
            if (l !== '-') {
              i > n && (c = i);
              break;
            }
          } else if (l === '-' && !this.error) {
            let h = s[c + 1];
            if (
              !h ||
              h ===
                `
` ||
              h === '	' ||
              h === ' '
            ) {
              let g = 'A collection cannot be both a mapping and a sequence';
              this.error = new u.YAMLSyntaxError(this, g);
            }
          }
          let d = r({ atLineStart: f, inCollection: !0, indent: a, lineStart: i, parent: this }, c);
          if (!d) return c;
          if (
            (this.items.push(d),
            (this.valueRange.end = d.valueRange.end),
            (c = u.Node.normalizeOffset(s, d.range.end)),
            (l = s[c]),
            (f = !1),
            (m = d.includesTrailingLines),
            l)
          ) {
            let h = c - 1,
              g = s[h];
            for (; g === ' ' || g === '	'; ) g = s[--h];
            g ===
              `
` && ((i = h + 1), (f = !0));
          }
          let y = In(d);
          y && Array.prototype.push.apply(this.items, y);
        }
        return c;
      }
      setOrigRanges(e, n) {
        return (
          (n = super.setOrigRanges(e, n)),
          this.items.forEach(r => {
            n = r.setOrigRanges(e, n);
          }),
          n
        );
      }
      toString() {
        let {
          context: { src: e },
          items: n,
          range: r,
          value: s,
        } = this;
        if (s != null) return s;
        let i = e.slice(r.start, n[0].range.start) + String(n[0]);
        for (let o = 1; o < n.length; ++o) {
          let a = n[o],
            { atLineStart: c, indent: l } = a.context;
          if (c) for (let f = 0; f < l; ++f) i += ' ';
          i += String(a);
        }
        return u.Node.addStringTerminator(e, r.end, i);
      }
    },
    Pn = class extends u.Node {
      constructor() {
        super(u.Type.DIRECTIVE), (this.name = null);
      }
      get parameters() {
        let e = this.rawValue;
        return e ? e.trim().split(/[ \t]+/) : [];
      }
      parseName(e) {
        let { src: n } = this.context,
          r = e,
          s = n[r];
        for (
          ;
          s &&
          s !==
            `
` &&
          s !== '	' &&
          s !== ' ';

        )
          s = n[(r += 1)];
        return (this.name = n.slice(e, r)), r;
      }
      parseParameters(e) {
        let { src: n } = this.context,
          r = e,
          s = n[r];
        for (
          ;
          s &&
          s !==
            `
` &&
          s !== '#';

        )
          s = n[(r += 1)];
        return (this.valueRange = new u.Range(e, r)), r;
      }
      parse(e, n) {
        this.context = e;
        let r = this.parseName(n + 1);
        return (
          (r = this.parseParameters(r)),
          (r = this.parseComment(r)),
          (this.range = new u.Range(n, r)),
          r
        );
      }
    },
    _n = class t extends u.Node {
      static startCommentOrEndBlankLine(e, n) {
        let r = u.Node.endOfWhiteSpace(e, n),
          s = e[r];
        return s === '#' ||
          s ===
            `
`
          ? r
          : n;
      }
      constructor() {
        super(u.Type.DOCUMENT),
          (this.directives = null),
          (this.contents = null),
          (this.directivesEndMarker = null),
          (this.documentEndMarker = null);
      }
      parseDirectives(e) {
        let { src: n } = this.context;
        this.directives = [];
        let r = !0,
          s = !1,
          i = e;
        for (; !u.Node.atDocumentBoundary(n, i, u.Char.DIRECTIVES_END); )
          switch (((i = t.startCommentOrEndBlankLine(n, i)), n[i])) {
            case `
`:
              if (r) {
                let o = new Se();
                (i = o.parse({ src: n }, i)), i < n.length && this.directives.push(o);
              } else (i += 1), (r = !0);
              break;
            case '#':
              {
                let o = new Ee();
                (i = o.parse({ src: n }, i)), this.directives.push(o), (r = !1);
              }
              break;
            case '%':
              {
                let o = new Pn();
                (i = o.parse({ parent: this, src: n }, i)),
                  this.directives.push(o),
                  (s = !0),
                  (r = !1);
              }
              break;
            default:
              return (
                s
                  ? (this.error = new u.YAMLSemanticError(
                      this,
                      'Missing directives-end indicator line'
                    ))
                  : this.directives.length > 0 &&
                    ((this.contents = this.directives), (this.directives = [])),
                i
              );
          }
        return n[i]
          ? ((this.directivesEndMarker = new u.Range(i, i + 3)), i + 3)
          : (s
              ? (this.error = new u.YAMLSemanticError(
                  this,
                  'Missing directives-end indicator line'
                ))
              : this.directives.length > 0 &&
                ((this.contents = this.directives), (this.directives = [])),
            i);
      }
      parseContents(e) {
        let { parseNode: n, src: r } = this.context;
        this.contents || (this.contents = []);
        let s = e;
        for (; r[s - 1] === '-'; ) s -= 1;
        let i = u.Node.endOfWhiteSpace(r, e),
          o = s === e;
        for (
          this.valueRange = new u.Range(i);
          !u.Node.atDocumentBoundary(r, i, u.Char.DOCUMENT_END);

        ) {
          switch (r[i]) {
            case `
`:
              if (o) {
                let a = new Se();
                (i = a.parse({ src: r }, i)), i < r.length && this.contents.push(a);
              } else (i += 1), (o = !0);
              s = i;
              break;
            case '#':
              {
                let a = new Ee();
                (i = a.parse({ src: r }, i)), this.contents.push(a), (o = !1);
              }
              break;
            default: {
              let a = u.Node.endOfIndent(r, i),
                l = n(
                  {
                    atLineStart: o,
                    indent: -1,
                    inFlow: !1,
                    inCollection: !1,
                    lineStart: s,
                    parent: this,
                  },
                  a
                );
              if (!l) return (this.valueRange.end = a);
              this.contents.push(l), (i = l.range.end), (o = !1);
              let f = In(l);
              f && Array.prototype.push.apply(this.contents, f);
            }
          }
          i = t.startCommentOrEndBlankLine(r, i);
        }
        if (
          ((this.valueRange.end = i),
          r[i] && ((this.documentEndMarker = new u.Range(i, i + 3)), (i += 3), r[i]))
        ) {
          if (((i = u.Node.endOfWhiteSpace(r, i)), r[i] === '#')) {
            let a = new Ee();
            (i = a.parse({ src: r }, i)), this.contents.push(a);
          }
          switch (r[i]) {
            case `
`:
              i += 1;
              break;
            case void 0:
              break;
            default:
              this.error = new u.YAMLSyntaxError(
                this,
                'Document end marker line cannot have a non-comment suffix'
              );
          }
        }
        return i;
      }
      parse(e, n) {
        (e.root = this), (this.context = e);
        let { src: r } = e,
          s = r.charCodeAt(n) === 65279 ? n + 1 : n;
        return (s = this.parseDirectives(s)), (s = this.parseContents(s)), s;
      }
      setOrigRanges(e, n) {
        return (
          (n = super.setOrigRanges(e, n)),
          this.directives.forEach(r => {
            n = r.setOrigRanges(e, n);
          }),
          this.directivesEndMarker && (n = this.directivesEndMarker.setOrigRange(e, n)),
          this.contents.forEach(r => {
            n = r.setOrigRanges(e, n);
          }),
          this.documentEndMarker && (n = this.documentEndMarker.setOrigRange(e, n)),
          n
        );
      }
      toString() {
        let { contents: e, directives: n, value: r } = this;
        if (r != null) return r;
        let s = n.join('');
        return (
          e.length > 0 &&
            ((n.length > 0 || e[0].type === u.Type.COMMENT) &&
              (s += `---
`),
            (s += e.join(''))),
          s[s.length - 1] !==
            `
` &&
            (s += `
`),
          s
        );
      }
    },
    xn = class extends u.Node {
      parse(e, n) {
        this.context = e;
        let { src: r } = e,
          s = u.Node.endOfIdentifier(r, n + 1);
        return (
          (this.valueRange = new u.Range(n + 1, s)),
          (s = u.Node.endOfWhiteSpace(r, s)),
          (s = this.parseComment(s)),
          s
        );
      }
    },
    fe = { CLIP: 'CLIP', KEEP: 'KEEP', STRIP: 'STRIP' },
    Rn = class extends u.Node {
      constructor(e, n) {
        super(e, n), (this.blockIndent = null), (this.chomping = fe.CLIP), (this.header = null);
      }
      get includesTrailingLines() {
        return this.chomping === fe.KEEP;
      }
      get strValue() {
        if (!this.valueRange || !this.context) return null;
        let { start: e, end: n } = this.valueRange,
          { indent: r, src: s } = this.context;
        if (this.valueRange.isEmpty()) return '';
        let i = null,
          o = s[n - 1];
        for (
          ;
          o ===
            `
` ||
          o === '	' ||
          o === ' ';

        ) {
          if (((n -= 1), n <= e)) {
            if (this.chomping === fe.KEEP) break;
            return '';
          }
          o ===
            `
` && (i = n),
            (o = s[n - 1]);
        }
        let a = n + 1;
        i && (this.chomping === fe.KEEP ? ((a = i), (n = this.valueRange.end)) : (n = i));
        let c = r + this.blockIndent,
          l = this.type === u.Type.BLOCK_FOLDED,
          f = !0,
          m = '',
          d = '',
          y = !1;
        for (let h = e; h < n; ++h) {
          for (let w = 0; w < c && s[h] === ' '; ++w) h += 1;
          let g = s[h];
          if (
            g ===
            `
`
          )
            d ===
            `
`
              ? (m += `
`)
              : (d = `
`);
          else {
            let w = u.Node.endOfLine(s, h),
              C = s.slice(h, w);
            (h = w),
              l && (g === ' ' || g === '	') && h < a
                ? (d === ' '
                    ? (d = `
`)
                    : !y &&
                      !f &&
                      d ===
                        `
` &&
                      (d = `

`),
                  (m += d + C),
                  (d = (w < n && s[w]) || ''),
                  (y = !0))
                : ((m += d + C),
                  (d =
                    l && h < a
                      ? ' '
                      : `
`),
                  (y = !1)),
              f && C !== '' && (f = !1);
          }
        }
        return this.chomping === fe.STRIP
          ? m
          : m +
              `
`;
      }
      parseBlockHeader(e) {
        let { src: n } = this.context,
          r = e + 1,
          s = '';
        for (;;) {
          let i = n[r];
          switch (i) {
            case '-':
              this.chomping = fe.STRIP;
              break;
            case '+':
              this.chomping = fe.KEEP;
              break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
              s += i;
              break;
            default:
              return (this.blockIndent = Number(s) || null), (this.header = new u.Range(e, r)), r;
          }
          r += 1;
        }
      }
      parseBlockValue(e) {
        let { indent: n, src: r } = this.context,
          s = !!this.blockIndent,
          i = e,
          o = e,
          a = 1;
        for (
          let c = r[i];
          c ===
            `
` && ((i += 1), !u.Node.atDocumentBoundary(r, i));
          c = r[i]
        ) {
          let l = u.Node.endOfBlockIndent(r, n, i);
          if (l === null) break;
          let f = r[l],
            m = l - (i + n);
          if (this.blockIndent) {
            if (
              f &&
              f !==
                `
` &&
              m < this.blockIndent
            ) {
              if (r[l] === '#') break;
              if (!this.error) {
                let y = `Block scalars must not be less indented than their ${s ? 'explicit indentation indicator' : 'first line'}`;
                this.error = new u.YAMLSemanticError(this, y);
              }
            }
          } else if (
            r[l] !==
            `
`
          ) {
            if (m < a) {
              let d =
                'Block scalars with more-indented leading empty lines must use an explicit indentation indicator';
              this.error = new u.YAMLSemanticError(this, d);
            }
            this.blockIndent = m;
          } else m > a && (a = m);
          r[l] ===
          `
`
            ? (i = l)
            : (i = o = u.Node.endOfLine(r, l));
        }
        return (
          this.chomping !== fe.KEEP && (i = r[o] ? o + 1 : o),
          (this.valueRange = new u.Range(e + 1, i)),
          i
        );
      }
      parse(e, n) {
        this.context = e;
        let { src: r } = e,
          s = this.parseBlockHeader(n);
        return (
          (s = u.Node.endOfWhiteSpace(r, s)),
          (s = this.parseComment(s)),
          (s = this.parseBlockValue(s)),
          s
        );
      }
      setOrigRanges(e, n) {
        return (n = super.setOrigRanges(e, n)), this.header ? this.header.setOrigRange(e, n) : n;
      }
    },
    Dn = class extends u.Node {
      constructor(e, n) {
        super(e, n), (this.items = null);
      }
      prevNodeIsJsonLike(e = this.items.length) {
        let n = this.items[e - 1];
        return !!n && (n.jsonLike || (n.type === u.Type.COMMENT && this.prevNodeIsJsonLike(e - 1)));
      }
      parse(e, n) {
        this.context = e;
        let { parseNode: r, src: s } = e,
          { indent: i, lineStart: o } = e,
          a = s[n];
        this.items = [{ char: a, offset: n }];
        let c = u.Node.endOfWhiteSpace(s, n + 1);
        for (a = s[c]; a && a !== ']' && a !== '}'; ) {
          switch (a) {
            case `
`:
              {
                o = c + 1;
                let l = u.Node.endOfWhiteSpace(s, o);
                if (
                  s[l] ===
                  `
`
                ) {
                  let f = new Se();
                  (o = f.parse({ src: s }, o)), this.items.push(f);
                }
                if (
                  ((c = u.Node.endOfIndent(s, o)),
                  c <= o + i && ((a = s[c]), c < o + i || (a !== ']' && a !== '}')))
                ) {
                  let f = 'Insufficient indentation in flow collection';
                  this.error = new u.YAMLSemanticError(this, f);
                }
              }
              break;
            case ',':
              this.items.push({ char: a, offset: c }), (c += 1);
              break;
            case '#':
              {
                let l = new Ee();
                (c = l.parse({ src: s }, c)), this.items.push(l);
              }
              break;
            case '?':
            case ':': {
              let l = s[c + 1];
              if (
                l ===
                  `
` ||
                l === '	' ||
                l === ' ' ||
                l === ',' ||
                (a === ':' && this.prevNodeIsJsonLike())
              ) {
                this.items.push({ char: a, offset: c }), (c += 1);
                break;
              }
            }
            default: {
              let l = r(
                {
                  atLineStart: !1,
                  inCollection: !1,
                  inFlow: !0,
                  indent: -1,
                  lineStart: o,
                  parent: this,
                },
                c
              );
              if (!l) return (this.valueRange = new u.Range(n, c)), c;
              this.items.push(l), (c = u.Node.normalizeOffset(s, l.range.end));
            }
          }
          (c = u.Node.endOfWhiteSpace(s, c)), (a = s[c]);
        }
        return (
          (this.valueRange = new u.Range(n, c + 1)),
          a &&
            (this.items.push({ char: a, offset: c }),
            (c = u.Node.endOfWhiteSpace(s, c + 1)),
            (c = this.parseComment(c))),
          c
        );
      }
      setOrigRanges(e, n) {
        return (
          (n = super.setOrigRanges(e, n)),
          this.items.forEach(r => {
            if (r instanceof u.Node) n = r.setOrigRanges(e, n);
            else if (e.length === 0) r.origOffset = r.offset;
            else {
              let s = n;
              for (; s < e.length && !(e[s] > r.offset); ) ++s;
              (r.origOffset = r.offset + s), (n = s);
            }
          }),
          n
        );
      }
      toString() {
        let {
          context: { src: e },
          items: n,
          range: r,
          value: s,
        } = this;
        if (s != null) return s;
        let i = n.filter(c => c instanceof u.Node),
          o = '',
          a = r.start;
        return (
          i.forEach(c => {
            let l = e.slice(a, c.range.start);
            (a = c.range.end),
              (o += l + String(c)),
              o[o.length - 1] ===
                `
` &&
                e[a - 1] !==
                  `
` &&
                e[a] ===
                  `
` &&
                (a += 1);
          }),
          (o += e.slice(a, r.end)),
          u.Node.addStringTerminator(e, r.end, o)
        );
      }
    },
    Yn = class t extends u.Node {
      static endOfQuote(e, n) {
        let r = e[n];
        for (; r && r !== '"'; ) (n += r === '\\' ? 2 : 1), (r = e[n]);
        return n + 1;
      }
      get strValue() {
        if (!this.valueRange || !this.context) return null;
        let e = [],
          { start: n, end: r } = this.valueRange,
          { indent: s, src: i } = this.context;
        i[r - 1] !== '"' && e.push(new u.YAMLSyntaxError(this, 'Missing closing "quote'));
        let o = '';
        for (let a = n + 1; a < r - 1; ++a) {
          let c = i[a];
          if (
            c ===
            `
`
          ) {
            u.Node.atDocumentBoundary(i, a + 1) &&
              e.push(
                new u.YAMLSemanticError(
                  this,
                  'Document boundary indicators are not allowed within string values'
                )
              );
            let { fold: l, offset: f, error: m } = u.Node.foldNewline(i, a, s);
            (o += l),
              (a = f),
              m &&
                e.push(
                  new u.YAMLSemanticError(
                    this,
                    'Multi-line double-quoted string needs to be sufficiently indented'
                  )
                );
          } else if (c === '\\')
            switch (((a += 1), i[a])) {
              case '0':
                o += '\0';
                break;
              case 'a':
                o += '\x07';
                break;
              case 'b':
                o += '\b';
                break;
              case 'e':
                o += '\x1B';
                break;
              case 'f':
                o += '\f';
                break;
              case 'n':
                o += `
`;
                break;
              case 'r':
                o += '\r';
                break;
              case 't':
                o += '	';
                break;
              case 'v':
                o += '\v';
                break;
              case 'N':
                o += '\x85';
                break;
              case '_':
                o += '\xA0';
                break;
              case 'L':
                o += '\u2028';
                break;
              case 'P':
                o += '\u2029';
                break;
              case ' ':
                o += ' ';
                break;
              case '"':
                o += '"';
                break;
              case '/':
                o += '/';
                break;
              case '\\':
                o += '\\';
                break;
              case '	':
                o += '	';
                break;
              case 'x':
                (o += this.parseCharCode(a + 1, 2, e)), (a += 2);
                break;
              case 'u':
                (o += this.parseCharCode(a + 1, 4, e)), (a += 4);
                break;
              case 'U':
                (o += this.parseCharCode(a + 1, 8, e)), (a += 8);
                break;
              case `
`:
                for (; i[a + 1] === ' ' || i[a + 1] === '	'; ) a += 1;
                break;
              default:
                e.push(
                  new u.YAMLSyntaxError(this, `Invalid escape sequence ${i.substr(a - 1, 2)}`)
                ),
                  (o += '\\' + i[a]);
            }
          else if (c === ' ' || c === '	') {
            let l = a,
              f = i[a + 1];
            for (; f === ' ' || f === '	'; ) (a += 1), (f = i[a + 1]);
            f !==
              `
` && (o += a > l ? i.slice(l, a + 1) : c);
          } else o += c;
        }
        return e.length > 0 ? { errors: e, str: o } : o;
      }
      parseCharCode(e, n, r) {
        let { src: s } = this.context,
          i = s.substr(e, n),
          a = i.length === n && /^[0-9a-fA-F]+$/.test(i) ? parseInt(i, 16) : NaN;
        return isNaN(a)
          ? (r.push(
              new u.YAMLSyntaxError(this, `Invalid escape sequence ${s.substr(e - 2, n + 2)}`)
            ),
            s.substr(e - 2, n + 2))
          : String.fromCodePoint(a);
      }
      parse(e, n) {
        this.context = e;
        let { src: r } = e,
          s = t.endOfQuote(r, n + 1);
        return (
          (this.valueRange = new u.Range(n, s)),
          (s = u.Node.endOfWhiteSpace(r, s)),
          (s = this.parseComment(s)),
          s
        );
      }
    },
    $n = class t extends u.Node {
      static endOfQuote(e, n) {
        let r = e[n];
        for (; r; )
          if (r === "'") {
            if (e[n + 1] !== "'") break;
            r = e[(n += 2)];
          } else r = e[(n += 1)];
        return n + 1;
      }
      get strValue() {
        if (!this.valueRange || !this.context) return null;
        let e = [],
          { start: n, end: r } = this.valueRange,
          { indent: s, src: i } = this.context;
        i[r - 1] !== "'" && e.push(new u.YAMLSyntaxError(this, "Missing closing 'quote"));
        let o = '';
        for (let a = n + 1; a < r - 1; ++a) {
          let c = i[a];
          if (
            c ===
            `
`
          ) {
            u.Node.atDocumentBoundary(i, a + 1) &&
              e.push(
                new u.YAMLSemanticError(
                  this,
                  'Document boundary indicators are not allowed within string values'
                )
              );
            let { fold: l, offset: f, error: m } = u.Node.foldNewline(i, a, s);
            (o += l),
              (a = f),
              m &&
                e.push(
                  new u.YAMLSemanticError(
                    this,
                    'Multi-line single-quoted string needs to be sufficiently indented'
                  )
                );
          } else if (c === "'")
            (o += c),
              (a += 1),
              i[a] !== "'" &&
                e.push(
                  new u.YAMLSyntaxError(this, 'Unescaped single quote? This should not happen.')
                );
          else if (c === ' ' || c === '	') {
            let l = a,
              f = i[a + 1];
            for (; f === ' ' || f === '	'; ) (a += 1), (f = i[a + 1]);
            f !==
              `
` && (o += a > l ? i.slice(l, a + 1) : c);
          } else o += c;
        }
        return e.length > 0 ? { errors: e, str: o } : o;
      }
      parse(e, n) {
        this.context = e;
        let { src: r } = e,
          s = t.endOfQuote(r, n + 1);
        return (
          (this.valueRange = new u.Range(n, s)),
          (s = u.Node.endOfWhiteSpace(r, s)),
          (s = this.parseComment(s)),
          s
        );
      }
    };
  function vo(t, e) {
    switch (t) {
      case u.Type.ALIAS:
        return new xn(t, e);
      case u.Type.BLOCK_FOLDED:
      case u.Type.BLOCK_LITERAL:
        return new Rn(t, e);
      case u.Type.FLOW_MAP:
      case u.Type.FLOW_SEQ:
        return new Dn(t, e);
      case u.Type.MAP_KEY:
      case u.Type.MAP_VALUE:
      case u.Type.SEQ_ITEM:
        return new ut(t, e);
      case u.Type.COMMENT:
      case u.Type.PLAIN:
        return new u.PlainValue(t, e);
      case u.Type.QUOTE_DOUBLE:
        return new Yn(t, e);
      case u.Type.QUOTE_SINGLE:
        return new $n(t, e);
      default:
        return null;
    }
  }
  var Bn = class t {
    static parseType(e, n, r) {
      switch (e[n]) {
        case '*':
          return u.Type.ALIAS;
        case '>':
          return u.Type.BLOCK_FOLDED;
        case '|':
          return u.Type.BLOCK_LITERAL;
        case '{':
          return u.Type.FLOW_MAP;
        case '[':
          return u.Type.FLOW_SEQ;
        case '?':
          return !r && u.Node.atBlank(e, n + 1, !0) ? u.Type.MAP_KEY : u.Type.PLAIN;
        case ':':
          return !r && u.Node.atBlank(e, n + 1, !0) ? u.Type.MAP_VALUE : u.Type.PLAIN;
        case '-':
          return !r && u.Node.atBlank(e, n + 1, !0) ? u.Type.SEQ_ITEM : u.Type.PLAIN;
        case '"':
          return u.Type.QUOTE_DOUBLE;
        case "'":
          return u.Type.QUOTE_SINGLE;
        default:
          return u.Type.PLAIN;
      }
    }
    constructor(
      e = {},
      { atLineStart: n, inCollection: r, inFlow: s, indent: i, lineStart: o, parent: a } = {}
    ) {
      u._defineProperty(this, 'parseNode', (c, l) => {
        if (u.Node.atDocumentBoundary(this.src, l)) return null;
        let f = new t(this, c),
          { props: m, type: d, valueStart: y } = f.parseProps(l),
          h = vo(d, m),
          g = h.parse(f, y);
        if (
          ((h.range = new u.Range(l, g)),
          g <= l &&
            ((h.error = new Error('Node#parse consumed no characters')),
            (h.error.parseEnd = g),
            (h.error.source = h),
            (h.range.end = l + 1)),
          f.nodeStartsCollection(h))
        ) {
          !h.error &&
            !f.atLineStart &&
            f.parent.type === u.Type.DOCUMENT &&
            (h.error = new u.YAMLSyntaxError(
              h,
              'Block collection must not have preceding content here (e.g. directives-end indicator)'
            ));
          let w = new $t(h);
          return (g = w.parse(new t(f), g)), (w.range = new u.Range(l, g)), w;
        }
        return h;
      }),
        (this.atLineStart = n ?? (e.atLineStart || !1)),
        (this.inCollection = r ?? (e.inCollection || !1)),
        (this.inFlow = s ?? (e.inFlow || !1)),
        (this.indent = i ?? e.indent),
        (this.lineStart = o ?? e.lineStart),
        (this.parent = a ?? (e.parent || {})),
        (this.root = e.root),
        (this.src = e.src);
    }
    nodeStartsCollection(e) {
      let { inCollection: n, inFlow: r, src: s } = this;
      if (n || r) return !1;
      if (e instanceof ut) return !0;
      let i = e.range.end;
      return s[i] ===
        `
` ||
        s[i - 1] ===
          `
`
        ? !1
        : ((i = u.Node.endOfWhiteSpace(s, i)), s[i] === ':');
    }
    parseProps(e) {
      let { inFlow: n, parent: r, src: s } = this,
        i = [],
        o = !1;
      e = this.atLineStart ? u.Node.endOfIndent(s, e) : u.Node.endOfWhiteSpace(s, e);
      let a = s[e];
      for (
        ;
        a === u.Char.ANCHOR ||
        a === u.Char.COMMENT ||
        a === u.Char.TAG ||
        a ===
          `
`;

      ) {
        if (
          a ===
          `
`
        ) {
          let l = e,
            f;
          do (f = l + 1), (l = u.Node.endOfIndent(s, f));
          while (
            s[l] ===
            `
`
          );
          let m = l - (f + this.indent),
            d = r.type === u.Type.SEQ_ITEM && r.context.atLineStart;
          if (s[l] !== '#' && !u.Node.nextNodeIsIndented(s[l], m, !d)) break;
          (this.atLineStart = !0), (this.lineStart = f), (o = !1), (e = l);
        } else if (a === u.Char.COMMENT) {
          let l = u.Node.endOfLine(s, e + 1);
          i.push(new u.Range(e, l)), (e = l);
        } else {
          let l = u.Node.endOfIdentifier(s, e + 1);
          a === u.Char.TAG &&
            s[l] === ',' &&
            /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+,\d\d\d\d(-\d\d){0,2}\/\S/.test(s.slice(e + 1, l + 13)) &&
            (l = u.Node.endOfIdentifier(s, l + 5)),
            i.push(new u.Range(e, l)),
            (o = !0),
            (e = u.Node.endOfWhiteSpace(s, l));
        }
        a = s[e];
      }
      o && a === ':' && u.Node.atBlank(s, e + 1, !0) && (e -= 1);
      let c = t.parseType(s, e, n);
      return { props: i, type: c, valueStart: e };
    }
  };
  function Io(t) {
    let e = [];
    t.indexOf('\r') !== -1 &&
      (t = t.replace(
        /\r\n?/g,
        (s, i) => (
          s.length > 1 && e.push(i),
          `
`
        )
      ));
    let n = [],
      r = 0;
    do {
      let s = new _n(),
        i = new Bn({ src: t });
      (r = s.parse(i, r)), n.push(s);
    } while (r < t.length);
    return (
      (n.setOrigRanges = () => {
        if (e.length === 0) return !1;
        for (let i = 1; i < e.length; ++i) e[i] -= i;
        let s = 0;
        for (let i = 0; i < n.length; ++i) s = n[i].setOrigRanges(e, s);
        return e.splice(0, e.length), !0;
      }),
      (n.toString = () =>
        n.join(`...
`)),
      n
    );
  }
  xs.parse = Io;
});
var qe = te(k => {
  'use strict';
  var p = le();
  function Po(t, e, n) {
    return n
      ? `#${n.replace(/[\s\S]^/gm, `$&${e}#`)}
${e}${t}`
      : t;
  }
  function Fe(t, e, n) {
    return n
      ? n.indexOf(`
`) === -1
        ? `${t} #${n}`
        : `${t}
` + n.replace(/^/gm, `${e || ''}#`)
      : t;
  }
  var W = class {};
  function ue(t, e, n) {
    if (Array.isArray(t)) return t.map((r, s) => ue(r, String(s), n));
    if (t && typeof t.toJSON == 'function') {
      let r = n && n.anchors && n.anchors.get(t);
      r &&
        (n.onCreate = i => {
          (r.res = i), delete n.onCreate;
        });
      let s = t.toJSON(e, n);
      return r && n.onCreate && n.onCreate(s), s;
    }
    return (!n || !n.keep) && typeof t == 'bigint' ? Number(t) : t;
  }
  var P = class extends W {
    constructor(e) {
      super(), (this.value = e);
    }
    toJSON(e, n) {
      return n && n.keep ? this.value : ue(this.value, e, n);
    }
    toString() {
      return String(this.value);
    }
  };
  function Ds(t, e, n) {
    let r = n;
    for (let s = e.length - 1; s >= 0; --s) {
      let i = e[s];
      if (Number.isInteger(i) && i >= 0) {
        let o = [];
        (o[i] = r), (r = o);
      } else {
        let o = {};
        Object.defineProperty(o, i, { value: r, writable: !0, enumerable: !0, configurable: !0 }),
          (r = o);
      }
    }
    return t.createNode(r, !1);
  }
  var Bs = t => t == null || (typeof t == 'object' && t[Symbol.iterator]().next().done),
    j = class t extends W {
      constructor(e) {
        super(), p._defineProperty(this, 'items', []), (this.schema = e);
      }
      addIn(e, n) {
        if (Bs(e)) this.add(n);
        else {
          let [r, ...s] = e,
            i = this.get(r, !0);
          if (i instanceof t) i.addIn(s, n);
          else if (i === void 0 && this.schema) this.set(r, Ds(this.schema, s, n));
          else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${s}`);
        }
      }
      deleteIn([e, ...n]) {
        if (n.length === 0) return this.delete(e);
        let r = this.get(e, !0);
        if (r instanceof t) return r.deleteIn(n);
        throw new Error(`Expected YAML collection at ${e}. Remaining path: ${n}`);
      }
      getIn([e, ...n], r) {
        let s = this.get(e, !0);
        return n.length === 0
          ? !r && s instanceof P
            ? s.value
            : s
          : s instanceof t
            ? s.getIn(n, r)
            : void 0;
      }
      hasAllNullValues() {
        return this.items.every(e => {
          if (!e || e.type !== 'PAIR') return !1;
          let n = e.value;
          return (
            n == null ||
            (n instanceof P && n.value == null && !n.commentBefore && !n.comment && !n.tag)
          );
        });
      }
      hasIn([e, ...n]) {
        if (n.length === 0) return this.has(e);
        let r = this.get(e, !0);
        return r instanceof t ? r.hasIn(n) : !1;
      }
      setIn([e, ...n], r) {
        if (n.length === 0) this.set(e, r);
        else {
          let s = this.get(e, !0);
          if (s instanceof t) s.setIn(n, r);
          else if (s === void 0 && this.schema) this.set(e, Ds(this.schema, n, r));
          else throw new Error(`Expected YAML collection at ${e}. Remaining path: ${n}`);
        }
      }
      toJSON() {
        return null;
      }
      toString(e, { blockItem: n, flowChars: r, isMap: s, itemIndent: i }, o, a) {
        let { indent: c, indentStep: l, stringify: f } = e,
          m = this.type === p.Type.FLOW_MAP || this.type === p.Type.FLOW_SEQ || e.inFlow;
        m && (i += l);
        let d = s && this.hasAllNullValues();
        e = Object.assign({}, e, { allNullValues: d, indent: i, inFlow: m, type: null });
        let y = !1,
          h = !1,
          g = this.items.reduce((C, L, M) => {
            let A;
            L &&
              (!y && L.spaceBefore && C.push({ type: 'comment', str: '' }),
              L.commentBefore &&
                L.commentBefore.match(/^.*$/gm).forEach(Ai => {
                  C.push({ type: 'comment', str: `#${Ai}` });
                }),
              L.comment && (A = L.comment),
              m &&
                ((!y && L.spaceBefore) ||
                  L.commentBefore ||
                  L.comment ||
                  (L.key && (L.key.commentBefore || L.key.comment)) ||
                  (L.value && (L.value.commentBefore || L.value.comment))) &&
                (h = !0)),
              (y = !1);
            let _ = f(
              L,
              e,
              () => (A = null),
              () => (y = !0)
            );
            return (
              m &&
                !h &&
                _.includes(`
`) &&
                (h = !0),
              m && M < this.items.length - 1 && (_ += ','),
              (_ = Fe(_, i, A)),
              y && (A || m) && (y = !1),
              C.push({ type: 'item', str: _ }),
              C
            );
          }, []),
          w;
        if (g.length === 0) w = r.start + r.end;
        else if (m) {
          let { start: C, end: L } = r,
            M = g.map(A => A.str);
          if (h || M.reduce((A, _) => A + _.length + 2, 2) > t.maxFlowStringSingleLineLength) {
            w = C;
            for (let A of M)
              w += A
                ? `
${l}${c}${A}`
                : `
`;
            w += `
${c}${L}`;
          } else w = `${C} ${M.join(' ')} ${L}`;
        } else {
          let C = g.map(n);
          w = C.shift();
          for (let L of C)
            w += L
              ? `
${c}${L}`
              : `
`;
        }
        return (
          this.comment
            ? ((w +=
                `
` + this.comment.replace(/^/gm, `${c}#`)),
              o && o())
            : y && a && a(),
          w
        );
      }
    };
  p._defineProperty(j, 'maxFlowStringSingleLineLength', 60);
  function Bt(t) {
    let e = t instanceof P ? t.value : t;
    return e && typeof e == 'string' && (e = Number(e)), Number.isInteger(e) && e >= 0 ? e : null;
  }
  var pe = class extends j {
      add(e) {
        this.items.push(e);
      }
      delete(e) {
        let n = Bt(e);
        return typeof n != 'number' ? !1 : this.items.splice(n, 1).length > 0;
      }
      get(e, n) {
        let r = Bt(e);
        if (typeof r != 'number') return;
        let s = this.items[r];
        return !n && s instanceof P ? s.value : s;
      }
      has(e) {
        let n = Bt(e);
        return typeof n == 'number' && n < this.items.length;
      }
      set(e, n) {
        let r = Bt(e);
        if (typeof r != 'number') throw new Error(`Expected a valid index, not ${e}.`);
        this.items[r] = n;
      }
      toJSON(e, n) {
        let r = [];
        n && n.onCreate && n.onCreate(r);
        let s = 0;
        for (let i of this.items) r.push(ue(i, String(s++), n));
        return r;
      }
      toString(e, n, r) {
        return e
          ? super.toString(
              e,
              {
                blockItem: s => (s.type === 'comment' ? s.str : `- ${s.str}`),
                flowChars: { start: '[', end: ']' },
                isMap: !1,
                itemIndent: (e.indent || '') + '  ',
              },
              n,
              r
            )
          : JSON.stringify(this);
      }
    },
    _o = (t, e, n) =>
      e === null
        ? ''
        : typeof e != 'object'
          ? String(e)
          : t instanceof W && n && n.doc
            ? t.toString({
                anchors: Object.create(null),
                doc: n.doc,
                indent: '',
                indentStep: n.indentStep,
                inFlow: !0,
                inStringifyKey: !0,
                stringify: n.stringify,
              })
            : JSON.stringify(e),
    T = class t extends W {
      constructor(e, n = null) {
        super(), (this.key = e), (this.value = n), (this.type = t.Type.PAIR);
      }
      get commentBefore() {
        return this.key instanceof W ? this.key.commentBefore : void 0;
      }
      set commentBefore(e) {
        if ((this.key == null && (this.key = new P(null)), this.key instanceof W))
          this.key.commentBefore = e;
        else {
          let n =
            'Pair.commentBefore is an alias for Pair.key.commentBefore. To set it, the key must be a Node.';
          throw new Error(n);
        }
      }
      addToJSMap(e, n) {
        let r = ue(this.key, '', e);
        if (n instanceof Map) {
          let s = ue(this.value, r, e);
          n.set(r, s);
        } else if (n instanceof Set) n.add(r);
        else {
          let s = _o(this.key, r, e),
            i = ue(this.value, s, e);
          s in n
            ? Object.defineProperty(n, s, {
                value: i,
                writable: !0,
                enumerable: !0,
                configurable: !0,
              })
            : (n[s] = i);
        }
        return n;
      }
      toJSON(e, n) {
        let r = n && n.mapAsMap ? new Map() : {};
        return this.addToJSMap(n, r);
      }
      toString(e, n, r) {
        if (!e || !e.doc) return JSON.stringify(this);
        let { indent: s, indentSeq: i, simpleKeys: o } = e.doc.options,
          { key: a, value: c } = this,
          l = a instanceof W && a.comment;
        if (o) {
          if (l) throw new Error('With simple keys, key nodes cannot have comments');
          if (a instanceof j) {
            let _ = 'With simple keys, collection cannot be used as a key value';
            throw new Error(_);
          }
        }
        let f =
            !o &&
            (!a ||
              l ||
              (a instanceof W
                ? a instanceof j ||
                  a.type === p.Type.BLOCK_FOLDED ||
                  a.type === p.Type.BLOCK_LITERAL
                : typeof a == 'object')),
          { doc: m, indent: d, indentStep: y, stringify: h } = e;
        e = Object.assign({}, e, { implicitKey: !f, indent: d + y });
        let g = !1,
          w = h(
            a,
            e,
            () => (l = null),
            () => (g = !0)
          );
        if (((w = Fe(w, e.indent, l)), !f && w.length > 1024)) {
          if (o)
            throw new Error(
              'With simple keys, single line scalar must not span more than 1024 characters'
            );
          f = !0;
        }
        if (e.allNullValues && !o)
          return (
            this.comment ? ((w = Fe(w, e.indent, this.comment)), n && n()) : g && !l && r && r(),
            e.inFlow && !f ? w : `? ${w}`
          );
        (w = f
          ? `? ${w}
${d}:`
          : `${w}:`),
          this.comment && ((w = Fe(w, e.indent, this.comment)), n && n());
        let C = '',
          L = null;
        if (c instanceof W) {
          if (
            (c.spaceBefore &&
              (C = `
`),
            c.commentBefore)
          ) {
            let _ = c.commentBefore.replace(/^/gm, `${e.indent}#`);
            C += `
${_}`;
          }
          L = c.comment;
        } else c && typeof c == 'object' && (c = m.schema.createNode(c, !0));
        (e.implicitKey = !1),
          !f && !this.comment && c instanceof P && (e.indentAtStart = w.length + 1),
          (g = !1),
          !i &&
            s >= 2 &&
            !e.inFlow &&
            !f &&
            c instanceof pe &&
            c.type !== p.Type.FLOW_SEQ &&
            !c.tag &&
            !m.anchors.getName(c) &&
            (e.indent = e.indent.substr(2));
        let M = h(
            c,
            e,
            () => (L = null),
            () => (g = !0)
          ),
          A = ' ';
        return (
          C || this.comment
            ? (A = `${C}
${e.indent}`)
            : !f && c instanceof j
              ? (!(M[0] === '[' || M[0] === '{') ||
                  M.includes(`
`)) &&
                (A = `
${e.indent}`)
              : M[0] ===
                  `
` && (A = ''),
          g && !L && r && r(),
          Fe(w + A + M, e.indent, L)
        );
      }
    };
  p._defineProperty(T, 'Type', { PAIR: 'PAIR', MERGE_PAIR: 'MERGE_PAIR' });
  var Ft = (t, e) => {
      if (t instanceof be) {
        let n = e.get(t.source);
        return n.count * n.aliasCount;
      } else if (t instanceof j) {
        let n = 0;
        for (let r of t.items) {
          let s = Ft(r, e);
          s > n && (n = s);
        }
        return n;
      } else if (t instanceof T) {
        let n = Ft(t.key, e),
          r = Ft(t.value, e);
        return Math.max(n, r);
      }
      return 1;
    },
    be = class t extends W {
      static stringify(
        { range: e, source: n },
        { anchors: r, doc: s, implicitKey: i, inStringifyKey: o }
      ) {
        let a = Object.keys(r).find(l => r[l] === n);
        if ((!a && o && (a = s.anchors.getName(n) || s.anchors.newName()), a))
          return `*${a}${i ? ' ' : ''}`;
        let c = s.anchors.getName(n)
          ? 'Alias node must be after source node'
          : 'Source node not found for alias node';
        throw new Error(`${c} [${e}]`);
      }
      constructor(e) {
        super(), (this.source = e), (this.type = p.Type.ALIAS);
      }
      set tag(e) {
        throw new Error('Alias nodes cannot have tags');
      }
      toJSON(e, n) {
        if (!n) return ue(this.source, e, n);
        let { anchors: r, maxAliasCount: s } = n,
          i = r.get(this.source);
        if (!i || i.res === void 0) {
          let o = 'This should not happen: Alias anchor was not resolved?';
          throw this.cstNode ? new p.YAMLReferenceError(this.cstNode, o) : new ReferenceError(o);
        }
        if (
          s >= 0 &&
          ((i.count += 1),
          i.aliasCount === 0 && (i.aliasCount = Ft(this.source, r)),
          i.count * i.aliasCount > s)
        ) {
          let o = 'Excessive alias count indicates a resource exhaustion attack';
          throw this.cstNode ? new p.YAMLReferenceError(this.cstNode, o) : new ReferenceError(o);
        }
        return i.res;
      }
      toString(e) {
        return t.stringify(this, e);
      }
    };
  p._defineProperty(be, 'default', !0);
  function pt(t, e) {
    let n = e instanceof P ? e.value : e;
    for (let r of t)
      if (r instanceof T && (r.key === e || r.key === n || (r.key && r.key.value === n))) return r;
  }
  var mt = class extends j {
      add(e, n) {
        e ? e instanceof T || (e = new T(e.key || e, e.value)) : (e = new T(e));
        let r = pt(this.items, e.key),
          s = this.schema && this.schema.sortMapEntries;
        if (r)
          if (n) r.value = e.value;
          else throw new Error(`Key ${e.key} already set`);
        else if (s) {
          let i = this.items.findIndex(o => s(e, o) < 0);
          i === -1 ? this.items.push(e) : this.items.splice(i, 0, e);
        } else this.items.push(e);
      }
      delete(e) {
        let n = pt(this.items, e);
        return n ? this.items.splice(this.items.indexOf(n), 1).length > 0 : !1;
      }
      get(e, n) {
        let r = pt(this.items, e),
          s = r && r.value;
        return !n && s instanceof P ? s.value : s;
      }
      has(e) {
        return !!pt(this.items, e);
      }
      set(e, n) {
        this.add(new T(e, n), !0);
      }
      toJSON(e, n, r) {
        let s = r ? new r() : n && n.mapAsMap ? new Map() : {};
        n && n.onCreate && n.onCreate(s);
        for (let i of this.items) i.addToJSMap(n, s);
        return s;
      }
      toString(e, n, r) {
        if (!e) return JSON.stringify(this);
        for (let s of this.items)
          if (!(s instanceof T))
            throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);
        return super.toString(
          e,
          {
            blockItem: s => s.str,
            flowChars: { start: '{', end: '}' },
            isMap: !0,
            itemIndent: e.indent || '',
          },
          n,
          r
        );
      }
    },
    Fs = '<<',
    Kt = class extends T {
      constructor(e) {
        if (e instanceof T) {
          let n = e.value;
          n instanceof pe || ((n = new pe()), n.items.push(e.value), (n.range = e.value.range)),
            super(e.key, n),
            (this.range = e.range);
        } else super(new P(Fs), new pe());
        this.type = T.Type.MERGE_PAIR;
      }
      addToJSMap(e, n) {
        for (let { source: r } of this.value.items) {
          if (!(r instanceof mt)) throw new Error('Merge sources must be maps');
          let s = r.toJSON(null, e, Map);
          for (let [i, o] of s)
            n instanceof Map
              ? n.has(i) || n.set(i, o)
              : n instanceof Set
                ? n.add(i)
                : Object.prototype.hasOwnProperty.call(n, i) ||
                  Object.defineProperty(n, i, {
                    value: o,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                  });
        }
        return n;
      }
      toString(e, n) {
        let r = this.value;
        if (r.items.length > 1) return super.toString(e, n);
        this.value = r.items[0];
        let s = super.toString(e, n);
        return (this.value = r), s;
      }
    },
    xo = { defaultType: p.Type.BLOCK_LITERAL, lineWidth: 76 },
    Ro = { trueStr: 'true', falseStr: 'false' },
    Do = { asBigInt: !1 },
    Yo = { nullStr: 'null' },
    Ne = {
      defaultType: p.Type.PLAIN,
      doubleQuoted: { jsonEncoding: !1, minMultiLineLength: 40 },
      fold: { lineWidth: 80, minContentWidth: 20 },
    };
  function qn(t, e, n) {
    for (let { format: r, test: s, resolve: i } of e)
      if (s) {
        let o = t.match(s);
        if (o) {
          let a = i.apply(null, o);
          return a instanceof P || (a = new P(a)), r && (a.format = r), a;
        }
      }
    return n && (t = n(t)), new P(t);
  }
  var qs = 'flow',
    Fn = 'block',
    qt = 'quoted',
    Ys = (t, e) => {
      let n = t[e + 1];
      for (; n === ' ' || n === '	'; ) {
        do n = t[(e += 1)];
        while (
          n &&
          n !==
            `
`
        );
        n = t[e + 1];
      }
      return e;
    };
  function Vt(
    t,
    e,
    n,
    { indentAtStart: r, lineWidth: s = 80, minContentWidth: i = 20, onFold: o, onOverflow: a }
  ) {
    if (!s || s < 0) return t;
    let c = Math.max(1 + i, 1 + s - e.length);
    if (t.length <= c) return t;
    let l = [],
      f = {},
      m = s - e.length;
    typeof r == 'number' && (r > s - Math.max(2, i) ? l.push(0) : (m = s - r));
    let d,
      y,
      h = !1,
      g = -1,
      w = -1,
      C = -1;
    n === Fn && ((g = Ys(t, g)), g !== -1 && (m = g + c));
    for (let M; (M = t[(g += 1)]); ) {
      if (n === qt && M === '\\') {
        switch (((w = g), t[g + 1])) {
          case 'x':
            g += 3;
            break;
          case 'u':
            g += 5;
            break;
          case 'U':
            g += 9;
            break;
          default:
            g += 1;
        }
        C = g;
      }
      if (
        M ===
        `
`
      )
        n === Fn && (g = Ys(t, g)), (m = g + c), (d = void 0);
      else {
        if (
          M === ' ' &&
          y &&
          y !== ' ' &&
          y !==
            `
` &&
          y !== '	'
        ) {
          let A = t[g + 1];
          A &&
            A !== ' ' &&
            A !==
              `
` &&
            A !== '	' &&
            (d = g);
        }
        if (g >= m)
          if (d) l.push(d), (m = d + c), (d = void 0);
          else if (n === qt) {
            for (; y === ' ' || y === '	'; ) (y = M), (M = t[(g += 1)]), (h = !0);
            let A = g > C + 1 ? g - 2 : w - 1;
            if (f[A]) return t;
            l.push(A), (f[A] = !0), (m = A + c), (d = void 0);
          } else h = !0;
      }
      y = M;
    }
    if ((h && a && a(), l.length === 0)) return t;
    o && o();
    let L = t.slice(0, l[0]);
    for (let M = 0; M < l.length; ++M) {
      let A = l[M],
        _ = l[M + 1] || t.length;
      A === 0
        ? (L = `
${e}${t.slice(0, _)}`)
        : (n === qt && f[A] && (L += `${t[A]}\\`),
          (L += `
${e}${t.slice(A + 1, _)}`));
    }
    return L;
  }
  var Un = ({ indentAtStart: t }) => (t ? Object.assign({ indentAtStart: t }, Ne.fold) : Ne.fold),
    Wt = t => /^(%|---|\.\.\.)/m.test(t);
  function $o(t, e, n) {
    if (!e || e < 0) return !1;
    let r = e - n,
      s = t.length;
    if (s <= r) return !1;
    for (let i = 0, o = 0; i < s; ++i)
      if (
        t[i] ===
        `
`
      ) {
        if (i - o > r) return !0;
        if (((o = i + 1), s - o <= r)) return !1;
      }
    return !0;
  }
  function we(t, e) {
    let { implicitKey: n } = e,
      { jsonEncoding: r, minMultiLineLength: s } = Ne.doubleQuoted,
      i = JSON.stringify(t);
    if (r) return i;
    let o = e.indent || (Wt(t) ? '  ' : ''),
      a = '',
      c = 0;
    for (let l = 0, f = i[l]; f; f = i[++l])
      if (
        (f === ' ' &&
          i[l + 1] === '\\' &&
          i[l + 2] === 'n' &&
          ((a += i.slice(c, l) + '\\ '), (l += 1), (c = l), (f = '\\')),
        f === '\\')
      )
        switch (i[l + 1]) {
          case 'u':
            {
              a += i.slice(c, l);
              let m = i.substr(l + 2, 4);
              switch (m) {
                case '0000':
                  a += '\\0';
                  break;
                case '0007':
                  a += '\\a';
                  break;
                case '000b':
                  a += '\\v';
                  break;
                case '001b':
                  a += '\\e';
                  break;
                case '0085':
                  a += '\\N';
                  break;
                case '00a0':
                  a += '\\_';
                  break;
                case '2028':
                  a += '\\L';
                  break;
                case '2029':
                  a += '\\P';
                  break;
                default:
                  m.substr(0, 2) === '00' ? (a += '\\x' + m.substr(2)) : (a += i.substr(l, 6));
              }
              (l += 5), (c = l + 1);
            }
            break;
          case 'n':
            if (n || i[l + 2] === '"' || i.length < s) l += 1;
            else {
              for (
                a +=
                  i.slice(c, l) +
                  `

`;
                i[l + 2] === '\\' && i[l + 3] === 'n' && i[l + 4] !== '"';

              )
                (a += `
`),
                  (l += 2);
              (a += o), i[l + 2] === ' ' && (a += '\\'), (l += 1), (c = l + 1);
            }
            break;
          default:
            l += 1;
        }
    return (a = c ? a + i.slice(c) : i), n ? a : Vt(a, o, qt, Un(e));
  }
  function Us(t, e) {
    if (e.implicitKey) {
      if (/\n/.test(t)) return we(t, e);
    } else if (/[ \t]\n|\n[ \t]/.test(t)) return we(t, e);
    let n = e.indent || (Wt(t) ? '  ' : ''),
      r =
        "'" +
        t.replace(/'/g, "''").replace(
          /\n+/g,
          `$&
${n}`
        ) +
        "'";
    return e.implicitKey ? r : Vt(r, n, qs, Un(e));
  }
  function Ut({ comment: t, type: e, value: n }, r, s, i) {
    if (/\n[\t ]+$/.test(n) || /^\s*$/.test(n)) return we(n, r);
    let o = r.indent || (r.forceBlockIndent || Wt(n) ? '  ' : ''),
      a = o ? '2' : '1',
      c =
        e === p.Type.BLOCK_FOLDED
          ? !1
          : e === p.Type.BLOCK_LITERAL
            ? !0
            : !$o(n, Ne.fold.lineWidth, o.length),
      l = c ? '|' : '>';
    if (!n)
      return (
        l +
        `
`
      );
    let f = '',
      m = '';
    if (
      ((n = n
        .replace(/[\n\t ]*$/, y => {
          let h = y.indexOf(`
`);
          return (
            h === -1 ? (l += '-') : (n === y || h !== y.length - 1) && ((l += '+'), i && i()),
            (m = y.replace(/\n$/, '')),
            ''
          );
        })
        .replace(/^[\n ]*/, y => {
          y.indexOf(' ') !== -1 && (l += a);
          let h = y.match(/ +$/);
          return h ? ((f = y.slice(0, -h[0].length)), h[0]) : ((f = y), '');
        })),
      m && (m = m.replace(/\n+(?!\n|$)/g, `$&${o}`)),
      f && (f = f.replace(/\n+/g, `$&${o}`)),
      t && ((l += ' #' + t.replace(/ ?[\r\n]+/g, ' ')), s && s()),
      !n)
    )
      return `${l}${a}
${o}${m}`;
    if (c)
      return (
        (n = n.replace(/\n+/g, `$&${o}`)),
        `${l}
${o}${f}${n}${m}`
      );
    n = n
      .replace(
        /\n+/g,
        `
$&`
      )
      .replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, '$1$2')
      .replace(/\n+/g, `$&${o}`);
    let d = Vt(`${f}${n}${m}`, o, Fn, Ne.fold);
    return `${l}
${o}${d}`;
  }
  function Bo(t, e, n, r) {
    let { comment: s, type: i, value: o } = t,
      { actualString: a, implicitKey: c, indent: l, inFlow: f } = e;
    if ((c && /[\n[\]{},]/.test(o)) || (f && /[[\]{},]/.test(o))) return we(o, e);
    if (
      !o ||
      /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(o)
    )
      return c ||
        f ||
        o.indexOf(`
`) === -1
        ? o.indexOf('"') !== -1 && o.indexOf("'") === -1
          ? Us(o, e)
          : we(o, e)
        : Ut(t, e, n, r);
    if (
      !c &&
      !f &&
      i !== p.Type.PLAIN &&
      o.indexOf(`
`) !== -1
    )
      return Ut(t, e, n, r);
    if (l === '' && Wt(o)) return (e.forceBlockIndent = !0), Ut(t, e, n, r);
    let m = o.replace(
      /\n+/g,
      `$&
${l}`
    );
    if (a) {
      let { tags: y } = e.doc.schema;
      if (typeof qn(m, y, y.scalarFallback).value != 'string') return we(o, e);
    }
    let d = c ? m : Vt(m, l, qs, Un(e));
    return s &&
      !f &&
      (d.indexOf(`
`) !== -1 ||
        s.indexOf(`
`) !== -1)
      ? (n && n(), Po(d, l, s))
      : d;
  }
  function Fo(t, e, n, r) {
    let { defaultType: s } = Ne,
      { implicitKey: i, inFlow: o } = e,
      { type: a, value: c } = t;
    typeof c != 'string' && ((c = String(c)), (t = Object.assign({}, t, { value: c })));
    let l = m => {
      switch (m) {
        case p.Type.BLOCK_FOLDED:
        case p.Type.BLOCK_LITERAL:
          return Ut(t, e, n, r);
        case p.Type.QUOTE_DOUBLE:
          return we(c, e);
        case p.Type.QUOTE_SINGLE:
          return Us(c, e);
        case p.Type.PLAIN:
          return Bo(t, e, n, r);
        default:
          return null;
      }
    };
    ((a !== p.Type.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f]/.test(c)) ||
      ((i || o) && (a === p.Type.BLOCK_FOLDED || a === p.Type.BLOCK_LITERAL))) &&
      (a = p.Type.QUOTE_DOUBLE);
    let f = l(a);
    if (f === null && ((f = l(s)), f === null))
      throw new Error(`Unsupported default string type ${s}`);
    return f;
  }
  function qo({ format: t, minFractionDigits: e, tag: n, value: r }) {
    if (typeof r == 'bigint') return String(r);
    if (!isFinite(r)) return isNaN(r) ? '.nan' : r < 0 ? '-.inf' : '.inf';
    let s = JSON.stringify(r);
    if (!t && e && (!n || n === 'tag:yaml.org,2002:float') && /^\d/.test(s)) {
      let i = s.indexOf('.');
      i < 0 && ((i = s.length), (s += '.'));
      let o = e - (s.length - i - 1);
      for (; o-- > 0; ) s += '0';
    }
    return s;
  }
  function Ks(t, e) {
    let n, r;
    switch (e.type) {
      case p.Type.FLOW_MAP:
        (n = '}'), (r = 'flow map');
        break;
      case p.Type.FLOW_SEQ:
        (n = ']'), (r = 'flow sequence');
        break;
      default:
        t.push(new p.YAMLSemanticError(e, 'Not a flow collection!?'));
        return;
    }
    let s;
    for (let i = e.items.length - 1; i >= 0; --i) {
      let o = e.items[i];
      if (!o || o.type !== p.Type.COMMENT) {
        s = o;
        break;
      }
    }
    if (s && s.char !== n) {
      let i = `Expected ${r} to end with ${n}`,
        o;
      typeof s.offset == 'number'
        ? ((o = new p.YAMLSemanticError(e, i)), (o.offset = s.offset + 1))
        : ((o = new p.YAMLSemanticError(s, i)),
          s.range && s.range.end && (o.offset = s.range.end - s.range.start)),
        t.push(o);
    }
  }
  function Vs(t, e) {
    let n = e.context.src[e.range.start - 1];
    if (
      n !==
        `
` &&
      n !== '	' &&
      n !== ' '
    ) {
      let r = 'Comments must be separated from other tokens by white space characters';
      t.push(new p.YAMLSemanticError(e, r));
    }
  }
  function Ws(t, e) {
    let n = String(e),
      r = n.substr(0, 8) + '...' + n.substr(-8);
    return new p.YAMLSemanticError(t, `The "${r}" key is too long`);
  }
  function js(t, e) {
    for (let { afterKey: n, before: r, comment: s } of e) {
      let i = t.items[r];
      i
        ? (n && i.value && (i = i.value),
          s === void 0
            ? (n || !i.commentBefore) && (i.spaceBefore = !0)
            : i.commentBefore
              ? (i.commentBefore +=
                  `
` + s)
              : (i.commentBefore = s))
        : s !== void 0 &&
          (t.comment
            ? (t.comment +=
                `
` + s)
            : (t.comment = s));
    }
  }
  function Kn(t, e) {
    let n = e.strValue;
    return n
      ? typeof n == 'string'
        ? n
        : (n.errors.forEach(r => {
            r.source || (r.source = e), t.errors.push(r);
          }),
          n.str)
      : '';
  }
  function Uo(t, e) {
    let { handle: n, suffix: r } = e.tag,
      s = t.tagPrefixes.find(i => i.handle === n);
    if (!s) {
      let i = t.getDefaults().tagPrefixes;
      if ((i && (s = i.find(o => o.handle === n)), !s))
        throw new p.YAMLSemanticError(
          e,
          `The ${n} tag handle is non-default and was not declared.`
        );
    }
    if (!r) throw new p.YAMLSemanticError(e, `The ${n} tag has no suffix.`);
    if (n === '!' && (t.version || t.options.version) === '1.0') {
      if (r[0] === '^')
        return (
          t.warnings.push(new p.YAMLWarning(e, 'YAML 1.0 ^ tag expansion is not supported')), r
        );
      if (/[:/]/.test(r)) {
        let i = r.match(/^([a-z0-9-]+)\/(.*)/i);
        return i ? `tag:${i[1]}.yaml.org,2002:${i[2]}` : `tag:${r}`;
      }
    }
    return s.prefix + decodeURIComponent(r);
  }
  function Ko(t, e) {
    let { tag: n, type: r } = e,
      s = !1;
    if (n) {
      let { handle: i, suffix: o, verbatim: a } = n;
      if (a) {
        if (a !== '!' && a !== '!!') return a;
        let c = `Verbatim tags aren't resolved, so ${a} is invalid.`;
        t.errors.push(new p.YAMLSemanticError(e, c));
      } else if (i === '!' && !o) s = !0;
      else
        try {
          return Uo(t, e);
        } catch (c) {
          t.errors.push(c);
        }
    }
    switch (r) {
      case p.Type.BLOCK_FOLDED:
      case p.Type.BLOCK_LITERAL:
      case p.Type.QUOTE_DOUBLE:
      case p.Type.QUOTE_SINGLE:
        return p.defaultTags.STR;
      case p.Type.FLOW_MAP:
      case p.Type.MAP:
        return p.defaultTags.MAP;
      case p.Type.FLOW_SEQ:
      case p.Type.SEQ:
        return p.defaultTags.SEQ;
      case p.Type.PLAIN:
        return s ? p.defaultTags.STR : null;
      default:
        return null;
    }
  }
  function $s(t, e, n) {
    let { tags: r } = t.schema,
      s = [];
    for (let o of r)
      if (o.tag === n)
        if (o.test) s.push(o);
        else {
          let a = o.resolve(t, e);
          return a instanceof j ? a : new P(a);
        }
    let i = Kn(t, e);
    return typeof i == 'string' && s.length > 0 ? qn(i, s, r.scalarFallback) : null;
  }
  function Vo({ type: t }) {
    switch (t) {
      case p.Type.FLOW_MAP:
      case p.Type.MAP:
        return p.defaultTags.MAP;
      case p.Type.FLOW_SEQ:
      case p.Type.SEQ:
        return p.defaultTags.SEQ;
      default:
        return p.defaultTags.STR;
    }
  }
  function Wo(t, e, n) {
    try {
      let r = $s(t, e, n);
      if (r) return n && e.tag && (r.tag = n), r;
    } catch (r) {
      return r.source || (r.source = e), t.errors.push(r), null;
    }
    try {
      let r = Vo(e);
      if (!r) throw new Error(`The tag ${n} is unavailable`);
      let s = `The tag ${n} is unavailable, falling back to ${r}`;
      t.warnings.push(new p.YAMLWarning(e, s));
      let i = $s(t, e, r);
      return (i.tag = n), i;
    } catch (r) {
      let s = new p.YAMLReferenceError(e, r.message);
      return (s.stack = r.stack), t.errors.push(s), null;
    }
  }
  var jo = t => {
    if (!t) return !1;
    let { type: e } = t;
    return e === p.Type.MAP_KEY || e === p.Type.MAP_VALUE || e === p.Type.SEQ_ITEM;
  };
  function Qo(t, e) {
    let n = { before: [], after: [] },
      r = !1,
      s = !1,
      i = jo(e.context.parent) ? e.context.parent.props.concat(e.props) : e.props;
    for (let { start: o, end: a } of i)
      switch (e.context.src[o]) {
        case p.Char.COMMENT: {
          if (!e.commentHasRequiredWhitespace(o)) {
            let m = 'Comments must be separated from other tokens by white space characters';
            t.push(new p.YAMLSemanticError(e, m));
          }
          let { header: c, valueRange: l } = e;
          (l && (o > l.start || (c && o > c.start)) ? n.after : n.before).push(
            e.context.src.slice(o + 1, a)
          );
          break;
        }
        case p.Char.ANCHOR:
          if (r) {
            let c = 'A node can have at most one anchor';
            t.push(new p.YAMLSemanticError(e, c));
          }
          r = !0;
          break;
        case p.Char.TAG:
          if (s) {
            let c = 'A node can have at most one tag';
            t.push(new p.YAMLSemanticError(e, c));
          }
          s = !0;
          break;
      }
    return { comments: n, hasAnchor: r, hasTag: s };
  }
  function Jo(t, e) {
    let { anchors: n, errors: r, schema: s } = t;
    if (e.type === p.Type.ALIAS) {
      let o = e.rawValue,
        a = n.getNode(o);
      if (!a) {
        let l = `Aliased anchor not found: ${o}`;
        return r.push(new p.YAMLReferenceError(e, l)), null;
      }
      let c = new be(a);
      return n._cstAliases.push(c), c;
    }
    let i = Ko(t, e);
    if (i) return Wo(t, e, i);
    if (e.type !== p.Type.PLAIN) {
      let o = `Failed to resolve ${e.type} node here`;
      return r.push(new p.YAMLSyntaxError(e, o)), null;
    }
    try {
      let o = Kn(t, e);
      return qn(o, s.tags, s.tags.scalarFallback);
    } catch (o) {
      return o.source || (o.source = e), r.push(o), null;
    }
  }
  function me(t, e) {
    if (!e) return null;
    e.error && t.errors.push(e.error);
    let { comments: n, hasAnchor: r, hasTag: s } = Qo(t.errors, e);
    if (r) {
      let { anchors: o } = t,
        a = e.anchor,
        c = o.getNode(a);
      c && (o.map[o.newName(a)] = c), (o.map[a] = e);
    }
    if (e.type === p.Type.ALIAS && (r || s)) {
      let o = 'An alias node must not specify any properties';
      t.errors.push(new p.YAMLSemanticError(e, o));
    }
    let i = Jo(t, e);
    if (i) {
      (i.range = [e.range.start, e.range.end]),
        t.options.keepCstNodes && (i.cstNode = e),
        t.options.keepNodeTypes && (i.type = e.type);
      let o = n.before.join(`
`);
      o &&
        (i.commentBefore = i.commentBefore
          ? `${i.commentBefore}
${o}`
          : o);
      let a = n.after.join(`
`);
      a &&
        (i.comment = i.comment
          ? `${i.comment}
${a}`
          : a);
    }
    return (e.resolved = i);
  }
  function Go(t, e) {
    if (e.type !== p.Type.MAP && e.type !== p.Type.FLOW_MAP) {
      let o = `A ${e.type} node cannot be resolved as a mapping`;
      return t.errors.push(new p.YAMLSyntaxError(e, o)), null;
    }
    let { comments: n, items: r } = e.type === p.Type.FLOW_MAP ? Zo(t, e) : zo(t, e),
      s = new mt();
    (s.items = r), js(s, n);
    let i = !1;
    for (let o = 0; o < r.length; ++o) {
      let { key: a } = r[o];
      if ((a instanceof j && (i = !0), t.schema.merge && a && a.value === Fs)) {
        r[o] = new Kt(r[o]);
        let c = r[o].value.items,
          l = null;
        c.some(f => {
          if (f instanceof be) {
            let { type: m } = f.source;
            return m === p.Type.MAP || m === p.Type.FLOW_MAP
              ? !1
              : (l = 'Merge nodes aliases can only point to maps');
          }
          return (l = 'Merge nodes can only have Alias nodes as values');
        }),
          l && t.errors.push(new p.YAMLSemanticError(e, l));
      } else
        for (let c = o + 1; c < r.length; ++c) {
          let { key: l } = r[c];
          if (
            a === l ||
            (a && l && Object.prototype.hasOwnProperty.call(a, 'value') && a.value === l.value)
          ) {
            let f = `Map keys must be unique; "${a}" is repeated`;
            t.errors.push(new p.YAMLSemanticError(e, f));
            break;
          }
        }
    }
    if (i && !t.options.mapAsMap) {
      let o =
        'Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.';
      t.warnings.push(new p.YAMLWarning(e, o));
    }
    return (e.resolved = s), s;
  }
  var Ho = ({ context: { lineStart: t, node: e, src: n }, props: r }) => {
    if (r.length === 0) return !1;
    let { start: s } = r[0];
    if ((e && s > e.valueRange.start) || n[s] !== p.Char.COMMENT) return !1;
    for (let i = t; i < s; ++i)
      if (
        n[i] ===
        `
`
      )
        return !1;
    return !0;
  };
  function Xo(t, e) {
    if (!Ho(t)) return;
    let n = t.getPropValue(0, p.Char.COMMENT, !0),
      r = !1,
      s = e.value.commentBefore;
    if (s && s.startsWith(n)) (e.value.commentBefore = s.substr(n.length + 1)), (r = !0);
    else {
      let i = e.value.comment;
      !t.node && i && i.startsWith(n) && ((e.value.comment = i.substr(n.length + 1)), (r = !0));
    }
    r && (e.comment = n);
  }
  function zo(t, e) {
    let n = [],
      r = [],
      s,
      i = null;
    for (let o = 0; o < e.items.length; ++o) {
      let a = e.items[o];
      switch (a.type) {
        case p.Type.BLANK_LINE:
          n.push({ afterKey: !!s, before: r.length });
          break;
        case p.Type.COMMENT:
          n.push({ afterKey: !!s, before: r.length, comment: a.comment });
          break;
        case p.Type.MAP_KEY:
          s !== void 0 && r.push(new T(s)),
            a.error && t.errors.push(a.error),
            (s = me(t, a.node)),
            (i = null);
          break;
        case p.Type.MAP_VALUE:
          {
            if (
              (s === void 0 && (s = null),
              a.error && t.errors.push(a.error),
              !a.context.atLineStart &&
                a.node &&
                a.node.type === p.Type.MAP &&
                !a.node.context.atLineStart)
            ) {
              let f = 'Nested mappings are not allowed in compact mappings';
              t.errors.push(new p.YAMLSemanticError(a.node, f));
            }
            let c = a.node;
            if (!c && a.props.length > 0) {
              (c = new p.PlainValue(p.Type.PLAIN, [])),
                (c.context = { parent: a, src: a.context.src });
              let f = a.range.start + 1;
              if (
                ((c.range = { start: f, end: f }),
                (c.valueRange = { start: f, end: f }),
                typeof a.range.origStart == 'number')
              ) {
                let m = a.range.origStart + 1;
                (c.range.origStart = c.range.origEnd = m),
                  (c.valueRange.origStart = c.valueRange.origEnd = m);
              }
            }
            let l = new T(s, me(t, c));
            Xo(a, l),
              r.push(l),
              s && typeof i == 'number' && a.range.start > i + 1024 && t.errors.push(Ws(e, s)),
              (s = void 0),
              (i = null);
          }
          break;
        default:
          s !== void 0 && r.push(new T(s)),
            (s = me(t, a)),
            (i = a.range.start),
            a.error && t.errors.push(a.error);
          e: for (let c = o + 1; ; ++c) {
            let l = e.items[c];
            switch (l && l.type) {
              case p.Type.BLANK_LINE:
              case p.Type.COMMENT:
                continue e;
              case p.Type.MAP_VALUE:
                break e;
              default: {
                let f = 'Implicit map keys need to be followed by map values';
                t.errors.push(new p.YAMLSemanticError(a, f));
                break e;
              }
            }
          }
          if (a.valueRangeContainsNewline) {
            let c = 'Implicit map keys need to be on a single line';
            t.errors.push(new p.YAMLSemanticError(a, c));
          }
      }
    }
    return s !== void 0 && r.push(new T(s)), { comments: n, items: r };
  }
  function Zo(t, e) {
    let n = [],
      r = [],
      s,
      i = !1,
      o = '{';
    for (let a = 0; a < e.items.length; ++a) {
      let c = e.items[a];
      if (typeof c.char == 'string') {
        let { char: l, offset: f } = c;
        if (l === '?' && s === void 0 && !i) {
          (i = !0), (o = ':');
          continue;
        }
        if (l === ':') {
          if ((s === void 0 && (s = null), o === ':')) {
            o = ',';
            continue;
          }
        } else if (
          (i && (s === void 0 && l !== ',' && (s = null), (i = !1)),
          s !== void 0 && (r.push(new T(s)), (s = void 0), l === ','))
        ) {
          o = ':';
          continue;
        }
        if (l === '}') {
          if (a === e.items.length - 1) continue;
        } else if (l === o) {
          o = ':';
          continue;
        }
        let m = `Flow map contains an unexpected ${l}`,
          d = new p.YAMLSyntaxError(e, m);
        (d.offset = f), t.errors.push(d);
      } else
        c.type === p.Type.BLANK_LINE
          ? n.push({ afterKey: !!s, before: r.length })
          : c.type === p.Type.COMMENT
            ? (Vs(t.errors, c), n.push({ afterKey: !!s, before: r.length, comment: c.comment }))
            : s === void 0
              ? (o === ',' &&
                  t.errors.push(new p.YAMLSemanticError(c, 'Separator , missing in flow map')),
                (s = me(t, c)))
              : (o !== ',' &&
                  t.errors.push(
                    new p.YAMLSemanticError(c, 'Indicator : missing in flow map entry')
                  ),
                r.push(new T(s, me(t, c))),
                (s = void 0),
                (i = !1));
    }
    return Ks(t.errors, e), s !== void 0 && r.push(new T(s)), { comments: n, items: r };
  }
  function ea(t, e) {
    if (e.type !== p.Type.SEQ && e.type !== p.Type.FLOW_SEQ) {
      let i = `A ${e.type} node cannot be resolved as a sequence`;
      return t.errors.push(new p.YAMLSyntaxError(e, i)), null;
    }
    let { comments: n, items: r } = e.type === p.Type.FLOW_SEQ ? na(t, e) : ta(t, e),
      s = new pe();
    if (
      ((s.items = r),
      js(s, n),
      !t.options.mapAsMap && r.some(i => i instanceof T && i.key instanceof j))
    ) {
      let i =
        'Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.';
      t.warnings.push(new p.YAMLWarning(e, i));
    }
    return (e.resolved = s), s;
  }
  function ta(t, e) {
    let n = [],
      r = [];
    for (let s = 0; s < e.items.length; ++s) {
      let i = e.items[s];
      switch (i.type) {
        case p.Type.BLANK_LINE:
          n.push({ before: r.length });
          break;
        case p.Type.COMMENT:
          n.push({ comment: i.comment, before: r.length });
          break;
        case p.Type.SEQ_ITEM:
          if ((i.error && t.errors.push(i.error), r.push(me(t, i.node)), i.hasProps)) {
            let o = 'Sequence items cannot have tags or anchors before the - indicator';
            t.errors.push(new p.YAMLSemanticError(i, o));
          }
          break;
        default:
          i.error && t.errors.push(i.error),
            t.errors.push(new p.YAMLSyntaxError(i, `Unexpected ${i.type} node in sequence`));
      }
    }
    return { comments: n, items: r };
  }
  function na(t, e) {
    let n = [],
      r = [],
      s = !1,
      i,
      o = null,
      a = '[',
      c = null;
    for (let l = 0; l < e.items.length; ++l) {
      let f = e.items[l];
      if (typeof f.char == 'string') {
        let { char: m, offset: d } = f;
        if (
          (m !== ':' &&
            (s || i !== void 0) &&
            (s && i === void 0 && (i = a ? r.pop() : null),
            r.push(new T(i)),
            (s = !1),
            (i = void 0),
            (o = null)),
          m === a)
        )
          a = null;
        else if (!a && m === '?') s = !0;
        else if (a !== '[' && m === ':' && i === void 0) {
          if (a === ',') {
            if (((i = r.pop()), i instanceof T)) {
              let y = 'Chaining flow sequence pairs is invalid',
                h = new p.YAMLSemanticError(e, y);
              (h.offset = d), t.errors.push(h);
            }
            if (!s && typeof o == 'number') {
              let y = f.range ? f.range.start : f.offset;
              y > o + 1024 && t.errors.push(Ws(e, i));
              let { src: h } = c.context;
              for (let g = o; g < y; ++g)
                if (
                  h[g] ===
                  `
`
                ) {
                  let w = 'Implicit keys of flow sequence pairs need to be on a single line';
                  t.errors.push(new p.YAMLSemanticError(c, w));
                  break;
                }
            }
          } else i = null;
          (o = null), (s = !1), (a = null);
        } else if (a === '[' || m !== ']' || l < e.items.length - 1) {
          let y = `Flow sequence contains an unexpected ${m}`,
            h = new p.YAMLSyntaxError(e, y);
          (h.offset = d), t.errors.push(h);
        }
      } else if (f.type === p.Type.BLANK_LINE) n.push({ before: r.length });
      else if (f.type === p.Type.COMMENT)
        Vs(t.errors, f), n.push({ comment: f.comment, before: r.length });
      else {
        if (a) {
          let d = `Expected a ${a} in flow sequence`;
          t.errors.push(new p.YAMLSemanticError(f, d));
        }
        let m = me(t, f);
        i === void 0 ? (r.push(m), (c = f)) : (r.push(new T(i, m)), (i = void 0)),
          (o = f.range.start),
          (a = ',');
      }
    }
    return Ks(t.errors, e), i !== void 0 && r.push(new T(i)), { comments: n, items: r };
  }
  k.Alias = be;
  k.Collection = j;
  k.Merge = Kt;
  k.Node = W;
  k.Pair = T;
  k.Scalar = P;
  k.YAMLMap = mt;
  k.YAMLSeq = pe;
  k.addComment = Fe;
  k.binaryOptions = xo;
  k.boolOptions = Ro;
  k.findPair = pt;
  k.intOptions = Do;
  k.isEmptyPath = Bs;
  k.nullOptions = Yo;
  k.resolveMap = Go;
  k.resolveNode = me;
  k.resolveSeq = ea;
  k.resolveString = Kn;
  k.strOptions = Ne;
  k.stringifyNumber = qo;
  k.stringifyString = Fo;
  k.toJSON = ue;
});
var Qn = te(z => {
  'use strict';
  var Q = le(),
    O = qe(),
    ra = {
      identify: t => t instanceof Uint8Array,
      default: !1,
      tag: 'tag:yaml.org,2002:binary',
      resolve: (t, e) => {
        let n = O.resolveString(t, e);
        if (typeof Buffer == 'function') return Buffer.from(n, 'base64');
        if (typeof atob == 'function') {
          let r = atob(n.replace(/[\n\r]/g, '')),
            s = new Uint8Array(r.length);
          for (let i = 0; i < r.length; ++i) s[i] = r.charCodeAt(i);
          return s;
        } else {
          let r =
            'This environment does not support reading binary tags; either Buffer or atob is required';
          return t.errors.push(new Q.YAMLReferenceError(e, r)), null;
        }
      },
      options: O.binaryOptions,
      stringify: ({ comment: t, type: e, value: n }, r, s, i) => {
        let o;
        if (typeof Buffer == 'function')
          o = n instanceof Buffer ? n.toString('base64') : Buffer.from(n.buffer).toString('base64');
        else if (typeof btoa == 'function') {
          let a = '';
          for (let c = 0; c < n.length; ++c) a += String.fromCharCode(n[c]);
          o = btoa(a);
        } else
          throw new Error(
            'This environment does not support writing binary tags; either Buffer or btoa is required'
          );
        if ((e || (e = O.binaryOptions.defaultType), e === Q.Type.QUOTE_DOUBLE)) n = o;
        else {
          let { lineWidth: a } = O.binaryOptions,
            c = Math.ceil(o.length / a),
            l = new Array(c);
          for (let f = 0, m = 0; f < c; ++f, m += a) l[f] = o.substr(m, a);
          n = l.join(
            e === Q.Type.BLOCK_LITERAL
              ? `
`
              : ' '
          );
        }
        return O.stringifyString({ comment: t, type: e, value: n }, r, s, i);
      },
    };
  function Js(t, e) {
    let n = O.resolveSeq(t, e);
    for (let r = 0; r < n.items.length; ++r) {
      let s = n.items[r];
      if (!(s instanceof O.Pair)) {
        if (s instanceof O.YAMLMap) {
          if (s.items.length > 1) {
            let o = 'Each pair must have its own sequence indicator';
            throw new Q.YAMLSemanticError(e, o);
          }
          let i = s.items[0] || new O.Pair();
          s.commentBefore &&
            (i.commentBefore = i.commentBefore
              ? `${s.commentBefore}
${i.commentBefore}`
              : s.commentBefore),
            s.comment &&
              (i.comment = i.comment
                ? `${s.comment}
${i.comment}`
                : s.comment),
            (s = i);
        }
        n.items[r] = s instanceof O.Pair ? s : new O.Pair(s);
      }
    }
    return n;
  }
  function Gs(t, e, n) {
    let r = new O.YAMLSeq(t);
    r.tag = 'tag:yaml.org,2002:pairs';
    for (let s of e) {
      let i, o;
      if (Array.isArray(s))
        if (s.length === 2) (i = s[0]), (o = s[1]);
        else throw new TypeError(`Expected [key, value] tuple: ${s}`);
      else if (s && s instanceof Object) {
        let c = Object.keys(s);
        if (c.length === 1) (i = c[0]), (o = s[i]);
        else throw new TypeError(`Expected { key: value } tuple: ${s}`);
      } else i = s;
      let a = t.createPair(i, o, n);
      r.items.push(a);
    }
    return r;
  }
  var sa = { default: !1, tag: 'tag:yaml.org,2002:pairs', resolve: Js, createNode: Gs },
    Ue = class t extends O.YAMLSeq {
      constructor() {
        super(),
          Q._defineProperty(this, 'add', O.YAMLMap.prototype.add.bind(this)),
          Q._defineProperty(this, 'delete', O.YAMLMap.prototype.delete.bind(this)),
          Q._defineProperty(this, 'get', O.YAMLMap.prototype.get.bind(this)),
          Q._defineProperty(this, 'has', O.YAMLMap.prototype.has.bind(this)),
          Q._defineProperty(this, 'set', O.YAMLMap.prototype.set.bind(this)),
          (this.tag = t.tag);
      }
      toJSON(e, n) {
        let r = new Map();
        n && n.onCreate && n.onCreate(r);
        for (let s of this.items) {
          let i, o;
          if (
            (s instanceof O.Pair
              ? ((i = O.toJSON(s.key, '', n)), (o = O.toJSON(s.value, i, n)))
              : (i = O.toJSON(s, '', n)),
            r.has(i))
          )
            throw new Error('Ordered maps must not include duplicate keys');
          r.set(i, o);
        }
        return r;
      }
    };
  Q._defineProperty(Ue, 'tag', 'tag:yaml.org,2002:omap');
  function ia(t, e) {
    let n = Js(t, e),
      r = [];
    for (let { key: s } of n.items)
      if (s instanceof O.Scalar)
        if (r.includes(s.value)) {
          let i = 'Ordered maps must not include duplicate keys';
          throw new Q.YAMLSemanticError(e, i);
        } else r.push(s.value);
    return Object.assign(new Ue(), n);
  }
  function oa(t, e, n) {
    let r = Gs(t, e, n),
      s = new Ue();
    return (s.items = r.items), s;
  }
  var aa = {
      identify: t => t instanceof Map,
      nodeClass: Ue,
      default: !1,
      tag: 'tag:yaml.org,2002:omap',
      resolve: ia,
      createNode: oa,
    },
    Ke = class t extends O.YAMLMap {
      constructor() {
        super(), (this.tag = t.tag);
      }
      add(e) {
        let n = e instanceof O.Pair ? e : new O.Pair(e);
        O.findPair(this.items, n.key) || this.items.push(n);
      }
      get(e, n) {
        let r = O.findPair(this.items, e);
        return !n && r instanceof O.Pair ? (r.key instanceof O.Scalar ? r.key.value : r.key) : r;
      }
      set(e, n) {
        if (typeof n != 'boolean')
          throw new Error(
            `Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`
          );
        let r = O.findPair(this.items, e);
        r && !n
          ? this.items.splice(this.items.indexOf(r), 1)
          : !r && n && this.items.push(new O.Pair(e));
      }
      toJSON(e, n) {
        return super.toJSON(e, n, Set);
      }
      toString(e, n, r) {
        if (!e) return JSON.stringify(this);
        if (this.hasAllNullValues()) return super.toString(e, n, r);
        throw new Error('Set items must all have null values');
      }
    };
  Q._defineProperty(Ke, 'tag', 'tag:yaml.org,2002:set');
  function ca(t, e) {
    let n = O.resolveMap(t, e);
    if (!n.hasAllNullValues())
      throw new Q.YAMLSemanticError(e, 'Set items must all have null values');
    return Object.assign(new Ke(), n);
  }
  function la(t, e, n) {
    let r = new Ke();
    for (let s of e) r.items.push(t.createPair(s, null, n));
    return r;
  }
  var fa = {
      identify: t => t instanceof Set,
      nodeClass: Ke,
      default: !1,
      tag: 'tag:yaml.org,2002:set',
      resolve: ca,
      createNode: la,
    },
    Vn = (t, e) => {
      let n = e.split(':').reduce((r, s) => r * 60 + Number(s), 0);
      return t === '-' ? -n : n;
    },
    Hs = ({ value: t }) => {
      if (isNaN(t) || !isFinite(t)) return O.stringifyNumber(t);
      let e = '';
      t < 0 && ((e = '-'), (t = Math.abs(t)));
      let n = [t % 60];
      return (
        t < 60
          ? n.unshift(0)
          : ((t = Math.round((t - n[0]) / 60)),
            n.unshift(t % 60),
            t >= 60 && ((t = Math.round((t - n[0]) / 60)), n.unshift(t))),
        e +
          n
            .map(r => (r < 10 ? '0' + String(r) : String(r)))
            .join(':')
            .replace(/000000\d*$/, '')
      );
    },
    ua = {
      identify: t => typeof t == 'number',
      default: !0,
      tag: 'tag:yaml.org,2002:int',
      format: 'TIME',
      test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+)$/,
      resolve: (t, e, n) => Vn(e, n.replace(/_/g, '')),
      stringify: Hs,
    },
    pa = {
      identify: t => typeof t == 'number',
      default: !0,
      tag: 'tag:yaml.org,2002:float',
      format: 'TIME',
      test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*)$/,
      resolve: (t, e, n) => Vn(e, n.replace(/_/g, '')),
      stringify: Hs,
    },
    ma = {
      identify: t => t instanceof Date,
      default: !0,
      tag: 'tag:yaml.org,2002:timestamp',
      test: RegExp(
        '^(?:([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?)$'
      ),
      resolve: (t, e, n, r, s, i, o, a, c) => {
        a && (a = (a + '00').substr(1, 3));
        let l = Date.UTC(e, n - 1, r, s || 0, i || 0, o || 0, a || 0);
        if (c && c !== 'Z') {
          let f = Vn(c[0], c.slice(1));
          Math.abs(f) < 30 && (f *= 60), (l -= 6e4 * f);
        }
        return new Date(l);
      },
      stringify: ({ value: t }) => t.toISOString().replace(/((T00:00)?:00)?\.000Z$/, ''),
    };
  function Wn(t) {
    let e = {};
    return t
      ? typeof YAML_SILENCE_DEPRECATION_WARNINGS < 'u'
        ? !YAML_SILENCE_DEPRECATION_WARNINGS
        : !e.YAML_SILENCE_DEPRECATION_WARNINGS
      : typeof YAML_SILENCE_WARNINGS < 'u'
        ? !YAML_SILENCE_WARNINGS
        : !e.YAML_SILENCE_WARNINGS;
  }
  function jn(t, e) {
    Wn(!1) && console.warn(e ? `${e}: ${t}` : t);
  }
  function ha(t) {
    if (Wn(!0)) {
      let e = t
        .replace(/.*yaml[/\\]/i, '')
        .replace(/\.js$/, '')
        .replace(/\\/g, '/');
      jn(`The endpoint 'yaml/${e}' will be removed in a future release.`, 'DeprecationWarning');
    }
  }
  var Qs = {};
  function ga(t, e) {
    if (!Qs[t] && Wn(!0)) {
      Qs[t] = !0;
      let n = `The option '${t}' will be removed in a future release`;
      (n += e ? `, use '${e}' instead.` : '.'), jn(n, 'DeprecationWarning');
    }
  }
  z.binary = ra;
  z.floatTime = pa;
  z.intTime = ua;
  z.omap = aa;
  z.pairs = sa;
  z.set = fa;
  z.timestamp = ma;
  z.warn = jn;
  z.warnFileDeprecation = ha;
  z.warnOptionDeprecation = ga;
});
var Xn = te(li => {
  'use strict';
  var Jt = le(),
    E = qe(),
    D = Qn();
  function da(t, e, n) {
    let r = new E.YAMLMap(t);
    if (e instanceof Map) for (let [s, i] of e) r.items.push(t.createPair(s, i, n));
    else if (e && typeof e == 'object')
      for (let s of Object.keys(e)) r.items.push(t.createPair(s, e[s], n));
    return typeof t.sortMapEntries == 'function' && r.items.sort(t.sortMapEntries), r;
  }
  var gt = {
    createNode: da,
    default: !0,
    nodeClass: E.YAMLMap,
    tag: 'tag:yaml.org,2002:map',
    resolve: E.resolveMap,
  };
  function ya(t, e, n) {
    let r = new E.YAMLSeq(t);
    if (e && e[Symbol.iterator])
      for (let s of e) {
        let i = t.createNode(s, n.wrapScalars, null, n);
        r.items.push(i);
      }
    return r;
  }
  var Gt = {
      createNode: ya,
      default: !0,
      nodeClass: E.YAMLSeq,
      tag: 'tag:yaml.org,2002:seq',
      resolve: E.resolveSeq,
    },
    Ea = {
      identify: t => typeof t == 'string',
      default: !0,
      tag: 'tag:yaml.org,2002:str',
      resolve: E.resolveString,
      stringify(t, e, n, r) {
        return (e = Object.assign({ actualString: !0 }, e)), E.stringifyString(t, e, n, r);
      },
      options: E.strOptions,
    },
    Gn = [gt, Gt, Ea],
    Ht = t => typeof t == 'bigint' || Number.isInteger(t),
    Hn = (t, e, n) => (E.intOptions.asBigInt ? BigInt(t) : parseInt(e, n));
  function Zs(t, e, n) {
    let { value: r } = t;
    return Ht(r) && r >= 0 ? n + r.toString(e) : E.stringifyNumber(t);
  }
  var ei = {
      identify: t => t == null,
      createNode: (t, e, n) => (n.wrapScalars ? new E.Scalar(null) : null),
      default: !0,
      tag: 'tag:yaml.org,2002:null',
      test: /^(?:~|[Nn]ull|NULL)?$/,
      resolve: () => null,
      options: E.nullOptions,
      stringify: () => E.nullOptions.nullStr,
    },
    ti = {
      identify: t => typeof t == 'boolean',
      default: !0,
      tag: 'tag:yaml.org,2002:bool',
      test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
      resolve: t => t[0] === 't' || t[0] === 'T',
      options: E.boolOptions,
      stringify: ({ value: t }) => (t ? E.boolOptions.trueStr : E.boolOptions.falseStr),
    },
    ni = {
      identify: t => Ht(t) && t >= 0,
      default: !0,
      tag: 'tag:yaml.org,2002:int',
      format: 'OCT',
      test: /^0o([0-7]+)$/,
      resolve: (t, e) => Hn(t, e, 8),
      options: E.intOptions,
      stringify: t => Zs(t, 8, '0o'),
    },
    ri = {
      identify: Ht,
      default: !0,
      tag: 'tag:yaml.org,2002:int',
      test: /^[-+]?[0-9]+$/,
      resolve: t => Hn(t, t, 10),
      options: E.intOptions,
      stringify: E.stringifyNumber,
    },
    si = {
      identify: t => Ht(t) && t >= 0,
      default: !0,
      tag: 'tag:yaml.org,2002:int',
      format: 'HEX',
      test: /^0x([0-9a-fA-F]+)$/,
      resolve: (t, e) => Hn(t, e, 16),
      options: E.intOptions,
      stringify: t => Zs(t, 16, '0x'),
    },
    ii = {
      identify: t => typeof t == 'number',
      default: !0,
      tag: 'tag:yaml.org,2002:float',
      test: /^(?:[-+]?\.inf|(\.nan))$/i,
      resolve: (t, e) =>
        e ? NaN : t[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
      stringify: E.stringifyNumber,
    },
    oi = {
      identify: t => typeof t == 'number',
      default: !0,
      tag: 'tag:yaml.org,2002:float',
      format: 'EXP',
      test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
      resolve: t => parseFloat(t),
      stringify: ({ value: t }) => Number(t).toExponential(),
    },
    ai = {
      identify: t => typeof t == 'number',
      default: !0,
      tag: 'tag:yaml.org,2002:float',
      test: /^[-+]?(?:\.([0-9]+)|[0-9]+\.([0-9]*))$/,
      resolve(t, e, n) {
        let r = e || n,
          s = new E.Scalar(parseFloat(t));
        return r && r[r.length - 1] === '0' && (s.minFractionDigits = r.length), s;
      },
      stringify: E.stringifyNumber,
    },
    Sa = Gn.concat([ei, ti, ni, ri, si, ii, oi, ai]),
    Xs = t => typeof t == 'bigint' || Number.isInteger(t),
    jt = ({ value: t }) => JSON.stringify(t),
    ci = [
      gt,
      Gt,
      {
        identify: t => typeof t == 'string',
        default: !0,
        tag: 'tag:yaml.org,2002:str',
        resolve: E.resolveString,
        stringify: jt,
      },
      {
        identify: t => t == null,
        createNode: (t, e, n) => (n.wrapScalars ? new E.Scalar(null) : null),
        default: !0,
        tag: 'tag:yaml.org,2002:null',
        test: /^null$/,
        resolve: () => null,
        stringify: jt,
      },
      {
        identify: t => typeof t == 'boolean',
        default: !0,
        tag: 'tag:yaml.org,2002:bool',
        test: /^true|false$/,
        resolve: t => t === 'true',
        stringify: jt,
      },
      {
        identify: Xs,
        default: !0,
        tag: 'tag:yaml.org,2002:int',
        test: /^-?(?:0|[1-9][0-9]*)$/,
        resolve: t => (E.intOptions.asBigInt ? BigInt(t) : parseInt(t, 10)),
        stringify: ({ value: t }) => (Xs(t) ? t.toString() : JSON.stringify(t)),
      },
      {
        identify: t => typeof t == 'number',
        default: !0,
        tag: 'tag:yaml.org,2002:float',
        test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
        resolve: t => parseFloat(t),
        stringify: jt,
      },
    ];
  ci.scalarFallback = t => {
    throw new SyntaxError(`Unresolved plain scalar ${JSON.stringify(t)}`);
  };
  var zs = ({ value: t }) => (t ? E.boolOptions.trueStr : E.boolOptions.falseStr),
    ht = t => typeof t == 'bigint' || Number.isInteger(t);
  function Qt(t, e, n) {
    let r = e.replace(/_/g, '');
    if (E.intOptions.asBigInt) {
      switch (n) {
        case 2:
          r = `0b${r}`;
          break;
        case 8:
          r = `0o${r}`;
          break;
        case 16:
          r = `0x${r}`;
          break;
      }
      let i = BigInt(r);
      return t === '-' ? BigInt(-1) * i : i;
    }
    let s = parseInt(r, n);
    return t === '-' ? -1 * s : s;
  }
  function Jn(t, e, n) {
    let { value: r } = t;
    if (ht(r)) {
      let s = r.toString(e);
      return r < 0 ? '-' + n + s.substr(1) : n + s;
    }
    return E.stringifyNumber(t);
  }
  var wa = Gn.concat(
      [
        {
          identify: t => t == null,
          createNode: (t, e, n) => (n.wrapScalars ? new E.Scalar(null) : null),
          default: !0,
          tag: 'tag:yaml.org,2002:null',
          test: /^(?:~|[Nn]ull|NULL)?$/,
          resolve: () => null,
          options: E.nullOptions,
          stringify: () => E.nullOptions.nullStr,
        },
        {
          identify: t => typeof t == 'boolean',
          default: !0,
          tag: 'tag:yaml.org,2002:bool',
          test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
          resolve: () => !0,
          options: E.boolOptions,
          stringify: zs,
        },
        {
          identify: t => typeof t == 'boolean',
          default: !0,
          tag: 'tag:yaml.org,2002:bool',
          test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
          resolve: () => !1,
          options: E.boolOptions,
          stringify: zs,
        },
        {
          identify: ht,
          default: !0,
          tag: 'tag:yaml.org,2002:int',
          format: 'BIN',
          test: /^([-+]?)0b([0-1_]+)$/,
          resolve: (t, e, n) => Qt(e, n, 2),
          stringify: t => Jn(t, 2, '0b'),
        },
        {
          identify: ht,
          default: !0,
          tag: 'tag:yaml.org,2002:int',
          format: 'OCT',
          test: /^([-+]?)0([0-7_]+)$/,
          resolve: (t, e, n) => Qt(e, n, 8),
          stringify: t => Jn(t, 8, '0'),
        },
        {
          identify: ht,
          default: !0,
          tag: 'tag:yaml.org,2002:int',
          test: /^([-+]?)([0-9][0-9_]*)$/,
          resolve: (t, e, n) => Qt(e, n, 10),
          stringify: E.stringifyNumber,
        },
        {
          identify: ht,
          default: !0,
          tag: 'tag:yaml.org,2002:int',
          format: 'HEX',
          test: /^([-+]?)0x([0-9a-fA-F_]+)$/,
          resolve: (t, e, n) => Qt(e, n, 16),
          stringify: t => Jn(t, 16, '0x'),
        },
        {
          identify: t => typeof t == 'number',
          default: !0,
          tag: 'tag:yaml.org,2002:float',
          test: /^(?:[-+]?\.inf|(\.nan))$/i,
          resolve: (t, e) =>
            e ? NaN : t[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
          stringify: E.stringifyNumber,
        },
        {
          identify: t => typeof t == 'number',
          default: !0,
          tag: 'tag:yaml.org,2002:float',
          format: 'EXP',
          test: /^[-+]?([0-9][0-9_]*)?(\.[0-9_]*)?[eE][-+]?[0-9]+$/,
          resolve: t => parseFloat(t.replace(/_/g, '')),
          stringify: ({ value: t }) => Number(t).toExponential(),
        },
        {
          identify: t => typeof t == 'number',
          default: !0,
          tag: 'tag:yaml.org,2002:float',
          test: /^[-+]?(?:[0-9][0-9_]*)?\.([0-9_]*)$/,
          resolve(t, e) {
            let n = new E.Scalar(parseFloat(t.replace(/_/g, '')));
            if (e) {
              let r = e.replace(/_/g, '');
              r[r.length - 1] === '0' && (n.minFractionDigits = r.length);
            }
            return n;
          },
          stringify: E.stringifyNumber,
        },
      ],
      D.binary,
      D.omap,
      D.pairs,
      D.set,
      D.intTime,
      D.floatTime,
      D.timestamp
    ),
    ba = { core: Sa, failsafe: Gn, json: ci, yaml11: wa },
    Na = {
      binary: D.binary,
      bool: ti,
      float: ai,
      floatExp: oi,
      floatNaN: ii,
      floatTime: D.floatTime,
      int: ri,
      intHex: si,
      intOct: ni,
      intTime: D.intTime,
      map: gt,
      null: ei,
      omap: D.omap,
      pairs: D.pairs,
      seq: Gt,
      set: D.set,
      timestamp: D.timestamp,
    };
  function Oa(t, e, n) {
    if (e) {
      let r = n.filter(i => i.tag === e),
        s = r.find(i => !i.format) || r[0];
      if (!s) throw new Error(`Tag ${e} not found`);
      return s;
    }
    return n.find(
      r => ((r.identify && r.identify(t)) || (r.class && t instanceof r.class)) && !r.format
    );
  }
  function La(t, e, n) {
    if (t instanceof E.Node) return t;
    let { defaultPrefix: r, onTagObj: s, prevObjects: i, schema: o, wrapScalars: a } = n;
    e && e.startsWith('!!') && (e = r + e.slice(2));
    let c = Oa(t, e, o.tags);
    if (!c) {
      if ((typeof t.toJSON == 'function' && (t = t.toJSON()), !t || typeof t != 'object'))
        return a ? new E.Scalar(t) : t;
      c = t instanceof Map ? gt : t[Symbol.iterator] ? Gt : gt;
    }
    s && (s(c), delete n.onTagObj);
    let l = { value: void 0, node: void 0 };
    if (t && typeof t == 'object' && i) {
      let f = i.get(t);
      if (f) {
        let m = new E.Alias(f);
        return n.aliasNodes.push(m), m;
      }
      (l.value = t), i.set(t, l);
    }
    return (
      (l.node = c.createNode ? c.createNode(n.schema, t, n) : a ? new E.Scalar(t) : t),
      e && l.node instanceof E.Node && (l.node.tag = e),
      l.node
    );
  }
  function Aa(t, e, n, r) {
    let s = t[r.replace(/\W/g, '')];
    if (!s) {
      let i = Object.keys(t)
        .map(o => JSON.stringify(o))
        .join(', ');
      throw new Error(`Unknown schema "${r}"; use one of ${i}`);
    }
    if (Array.isArray(n)) for (let i of n) s = s.concat(i);
    else typeof n == 'function' && (s = n(s.slice()));
    for (let i = 0; i < s.length; ++i) {
      let o = s[i];
      if (typeof o == 'string') {
        let a = e[o];
        if (!a) {
          let c = Object.keys(e)
            .map(l => JSON.stringify(l))
            .join(', ');
          throw new Error(`Unknown custom tag "${o}"; use one of ${c}`);
        }
        s[i] = a;
      }
    }
    return s;
  }
  var Ta = (t, e) => (t.key < e.key ? -1 : t.key > e.key ? 1 : 0),
    dt = class t {
      constructor({ customTags: e, merge: n, schema: r, sortMapEntries: s, tags: i }) {
        (this.merge = !!n),
          (this.name = r),
          (this.sortMapEntries = s === !0 ? Ta : s || null),
          !e && i && D.warnOptionDeprecation('tags', 'customTags'),
          (this.tags = Aa(ba, Na, e || i, r));
      }
      createNode(e, n, r, s) {
        let i = { defaultPrefix: t.defaultPrefix, schema: this, wrapScalars: n },
          o = s ? Object.assign(s, i) : i;
        return La(e, r, o);
      }
      createPair(e, n, r) {
        r || (r = { wrapScalars: !0 });
        let s = this.createNode(e, r.wrapScalars, null, r),
          i = this.createNode(n, r.wrapScalars, null, r);
        return new E.Pair(s, i);
      }
    };
  Jt._defineProperty(dt, 'defaultPrefix', Jt.defaultTagPrefix);
  Jt._defineProperty(dt, 'defaultTags', Jt.defaultTags);
  li.Schema = dt;
});
var mi = te(en => {
  'use strict';
  var Y = le(),
    S = qe(),
    fi = Xn(),
    Ca = {
      anchorPrefix: 'a',
      customTags: null,
      indent: 2,
      indentSeq: !0,
      keepCstNodes: !1,
      keepNodeTypes: !0,
      keepBlobsInJSON: !0,
      mapAsMap: !1,
      maxAliasCount: 100,
      prettyErrors: !1,
      simpleKeys: !1,
      version: '1.2',
    },
    Ma = {
      get binary() {
        return S.binaryOptions;
      },
      set binary(t) {
        Object.assign(S.binaryOptions, t);
      },
      get bool() {
        return S.boolOptions;
      },
      set bool(t) {
        Object.assign(S.boolOptions, t);
      },
      get int() {
        return S.intOptions;
      },
      set int(t) {
        Object.assign(S.intOptions, t);
      },
      get null() {
        return S.nullOptions;
      },
      set null(t) {
        Object.assign(S.nullOptions, t);
      },
      get str() {
        return S.strOptions;
      },
      set str(t) {
        Object.assign(S.strOptions, t);
      },
    },
    pi = {
      '1.0': {
        schema: 'yaml-1.1',
        merge: !0,
        tagPrefixes: [
          { handle: '!', prefix: Y.defaultTagPrefix },
          { handle: '!!', prefix: 'tag:private.yaml.org,2002:' },
        ],
      },
      1.1: {
        schema: 'yaml-1.1',
        merge: !0,
        tagPrefixes: [
          { handle: '!', prefix: '!' },
          { handle: '!!', prefix: Y.defaultTagPrefix },
        ],
      },
      1.2: {
        schema: 'core',
        merge: !1,
        tagPrefixes: [
          { handle: '!', prefix: '!' },
          { handle: '!!', prefix: Y.defaultTagPrefix },
        ],
      },
    };
  function ui(t, e) {
    if ((t.version || t.options.version) === '1.0') {
      let s = e.match(/^tag:private\.yaml\.org,2002:([^:/]+)$/);
      if (s) return '!' + s[1];
      let i = e.match(/^tag:([a-zA-Z0-9-]+)\.yaml\.org,2002:(.*)/);
      return i ? `!${i[1]}/${i[2]}` : `!${e.replace(/^tag:/, '')}`;
    }
    let n = t.tagPrefixes.find(s => e.indexOf(s.prefix) === 0);
    if (!n) {
      let s = t.getDefaults().tagPrefixes;
      n = s && s.find(i => e.indexOf(i.prefix) === 0);
    }
    if (!n) return e[0] === '!' ? e : `!<${e}>`;
    let r = e
      .substr(n.prefix.length)
      .replace(
        /[!,[\]{}]/g,
        s => ({ '!': '%21', ',': '%2C', '[': '%5B', ']': '%5D', '{': '%7B', '}': '%7D' })[s]
      );
    return n.handle + r;
  }
  function ka(t, e) {
    if (e instanceof S.Alias) return S.Alias;
    if (e.tag) {
      let s = t.filter(i => i.tag === e.tag);
      if (s.length > 0) return s.find(i => i.format === e.format) || s[0];
    }
    let n, r;
    if (e instanceof S.Scalar) {
      r = e.value;
      let s = t.filter(i => (i.identify && i.identify(r)) || (i.class && r instanceof i.class));
      n = s.find(i => i.format === e.format) || s.find(i => !i.format);
    } else (r = e), (n = t.find(s => s.nodeClass && r instanceof s.nodeClass));
    if (!n) {
      let s = r && r.constructor ? r.constructor.name : typeof r;
      throw new Error(`Tag not resolved for ${s} value`);
    }
    return n;
  }
  function va(t, e, { anchors: n, doc: r }) {
    let s = [],
      i = r.anchors.getName(t);
    return (
      i && ((n[i] = t), s.push(`&${i}`)),
      t.tag ? s.push(ui(r, t.tag)) : e.default || s.push(ui(r, e.tag)),
      s.join(' ')
    );
  }
  function Xt(t, e, n, r) {
    let { anchors: s, schema: i } = e.doc,
      o;
    if (!(t instanceof S.Node)) {
      let l = { aliasNodes: [], onTagObj: f => (o = f), prevObjects: new Map() };
      t = i.createNode(t, !0, null, l);
      for (let f of l.aliasNodes) {
        f.source = f.source.node;
        let m = s.getName(f.source);
        m || ((m = s.newName()), (s.map[m] = f.source));
      }
    }
    if (t instanceof S.Pair) return t.toString(e, n, r);
    o || (o = ka(i.tags, t));
    let a = va(t, o, e);
    a.length > 0 && (e.indentAtStart = (e.indentAtStart || 0) + a.length + 1);
    let c =
      typeof o.stringify == 'function'
        ? o.stringify(t, e, n, r)
        : t instanceof S.Scalar
          ? S.stringifyString(t, e, n, r)
          : t.toString(e, n, r);
    return a
      ? t instanceof S.Scalar || c[0] === '{' || c[0] === '['
        ? `${a} ${c}`
        : `${a}
${e.indent}${c}`
      : c;
  }
  var zn = class t {
      static validAnchorNode(e) {
        return e instanceof S.Scalar || e instanceof S.YAMLSeq || e instanceof S.YAMLMap;
      }
      constructor(e) {
        Y._defineProperty(this, 'map', Object.create(null)), (this.prefix = e);
      }
      createAlias(e, n) {
        return this.setAnchor(e, n), new S.Alias(e);
      }
      createMergePair(...e) {
        let n = new S.Merge();
        return (
          (n.value.items = e.map(r => {
            if (r instanceof S.Alias) {
              if (r.source instanceof S.YAMLMap) return r;
            } else if (r instanceof S.YAMLMap) return this.createAlias(r);
            throw new Error('Merge sources must be Map nodes or their Aliases');
          })),
          n
        );
      }
      getName(e) {
        let { map: n } = this;
        return Object.keys(n).find(r => n[r] === e);
      }
      getNames() {
        return Object.keys(this.map);
      }
      getNode(e) {
        return this.map[e];
      }
      newName(e) {
        e || (e = this.prefix);
        let n = Object.keys(this.map);
        for (let r = 1; ; ++r) {
          let s = `${e}${r}`;
          if (!n.includes(s)) return s;
        }
      }
      resolveNodes() {
        let { map: e, _cstAliases: n } = this;
        Object.keys(e).forEach(r => {
          e[r] = e[r].resolved;
        }),
          n.forEach(r => {
            r.source = r.source.resolved;
          }),
          delete this._cstAliases;
      }
      setAnchor(e, n) {
        if (e != null && !t.validAnchorNode(e))
          throw new Error('Anchors may only be set for Scalar, Seq and Map nodes');
        if (n && /[\x00-\x19\s,[\]{}]/.test(n))
          throw new Error('Anchor names must not contain whitespace or control characters');
        let { map: r } = this,
          s = e && Object.keys(r).find(i => r[i] === e);
        if (s)
          if (n) s !== n && (delete r[s], (r[n] = e));
          else return s;
        else {
          if (!n) {
            if (!e) return null;
            n = this.newName();
          }
          r[n] = e;
        }
        return n;
      }
    },
    zt = (t, e) => {
      if (t && typeof t == 'object') {
        let { tag: n } = t;
        t instanceof S.Collection
          ? (n && (e[n] = !0), t.items.forEach(r => zt(r, e)))
          : t instanceof S.Pair
            ? (zt(t.key, e), zt(t.value, e))
            : t instanceof S.Scalar && n && (e[n] = !0);
      }
      return e;
    },
    Ia = t => Object.keys(zt(t, {}));
  function Pa(t, e) {
    let n = { before: [], after: [] },
      r,
      s = !1;
    for (let i of e)
      if (i.valueRange) {
        if (r !== void 0) {
          let a = 'Document contains trailing content not separated by a ... or --- line';
          t.errors.push(new Y.YAMLSyntaxError(i, a));
          break;
        }
        let o = S.resolveNode(t, i);
        s && ((o.spaceBefore = !0), (s = !1)), (r = o);
      } else
        i.comment !== null
          ? (r === void 0 ? n.before : n.after).push(i.comment)
          : i.type === Y.Type.BLANK_LINE &&
            ((s = !0),
            r === void 0 &&
              n.before.length > 0 &&
              !t.commentBefore &&
              ((t.commentBefore = n.before.join(`
`)),
              (n.before = [])));
    if (((t.contents = r || null), !r))
      t.comment =
        n.before.concat(n.after).join(`
`) || null;
    else {
      let i = n.before.join(`
`);
      if (i) {
        let o = r instanceof S.Collection && r.items[0] ? r.items[0] : r;
        o.commentBefore = o.commentBefore
          ? `${i}
${o.commentBefore}`
          : i;
      }
      t.comment =
        n.after.join(`
`) || null;
    }
  }
  function _a({ tagPrefixes: t }, e) {
    let [n, r] = e.parameters;
    if (!n || !r) {
      let s = 'Insufficient parameters given for %TAG directive';
      throw new Y.YAMLSemanticError(e, s);
    }
    if (t.some(s => s.handle === n)) {
      let s = 'The %TAG directive must only be given at most once per handle in the same document.';
      throw new Y.YAMLSemanticError(e, s);
    }
    return { handle: n, prefix: r };
  }
  function xa(t, e) {
    let [n] = e.parameters;
    if ((e.name === 'YAML:1.0' && (n = '1.0'), !n)) {
      let r = 'Insufficient parameters given for %YAML directive';
      throw new Y.YAMLSemanticError(e, r);
    }
    if (!pi[n]) {
      let s = `Document will be parsed as YAML ${t.version || t.options.version} rather than YAML ${n}`;
      t.warnings.push(new Y.YAMLWarning(e, s));
    }
    return n;
  }
  function Ra(t, e, n) {
    let r = [],
      s = !1;
    for (let i of e) {
      let { comment: o, name: a } = i;
      switch (a) {
        case 'TAG':
          try {
            t.tagPrefixes.push(_a(t, i));
          } catch (c) {
            t.errors.push(c);
          }
          s = !0;
          break;
        case 'YAML':
        case 'YAML:1.0':
          if (t.version) {
            let c = 'The %YAML directive must only be given at most once per document.';
            t.errors.push(new Y.YAMLSemanticError(i, c));
          }
          try {
            t.version = xa(t, i);
          } catch (c) {
            t.errors.push(c);
          }
          s = !0;
          break;
        default:
          if (a) {
            let c = `YAML only supports %TAG and %YAML directives, and not %${a}`;
            t.warnings.push(new Y.YAMLWarning(i, c));
          }
      }
      o && r.push(o);
    }
    if (n && !s && (t.version || n.version || t.options.version) === '1.1') {
      let i = ({ handle: o, prefix: a }) => ({ handle: o, prefix: a });
      (t.tagPrefixes = n.tagPrefixes.map(i)), (t.version = n.version);
    }
    t.commentBefore =
      r.join(`
`) || null;
  }
  function Ve(t) {
    if (t instanceof S.Collection) return !0;
    throw new Error('Expected a YAML collection as document contents');
  }
  var Zt = class t {
    constructor(e) {
      (this.anchors = new zn(e.anchorPrefix)),
        (this.commentBefore = null),
        (this.comment = null),
        (this.contents = null),
        (this.directivesEndMarker = null),
        (this.errors = []),
        (this.options = e),
        (this.schema = null),
        (this.tagPrefixes = []),
        (this.version = null),
        (this.warnings = []);
    }
    add(e) {
      return Ve(this.contents), this.contents.add(e);
    }
    addIn(e, n) {
      Ve(this.contents), this.contents.addIn(e, n);
    }
    delete(e) {
      return Ve(this.contents), this.contents.delete(e);
    }
    deleteIn(e) {
      return S.isEmptyPath(e)
        ? this.contents == null
          ? !1
          : ((this.contents = null), !0)
        : (Ve(this.contents), this.contents.deleteIn(e));
    }
    getDefaults() {
      return t.defaults[this.version] || t.defaults[this.options.version] || {};
    }
    get(e, n) {
      return this.contents instanceof S.Collection ? this.contents.get(e, n) : void 0;
    }
    getIn(e, n) {
      return S.isEmptyPath(e)
        ? !n && this.contents instanceof S.Scalar
          ? this.contents.value
          : this.contents
        : this.contents instanceof S.Collection
          ? this.contents.getIn(e, n)
          : void 0;
    }
    has(e) {
      return this.contents instanceof S.Collection ? this.contents.has(e) : !1;
    }
    hasIn(e) {
      return S.isEmptyPath(e)
        ? this.contents !== void 0
        : this.contents instanceof S.Collection
          ? this.contents.hasIn(e)
          : !1;
    }
    set(e, n) {
      Ve(this.contents), this.contents.set(e, n);
    }
    setIn(e, n) {
      S.isEmptyPath(e) ? (this.contents = n) : (Ve(this.contents), this.contents.setIn(e, n));
    }
    setSchema(e, n) {
      if (!e && !n && this.schema) return;
      typeof e == 'number' && (e = e.toFixed(1)),
        e === '1.0' || e === '1.1' || e === '1.2'
          ? (this.version ? (this.version = e) : (this.options.version = e),
            delete this.options.schema)
          : e && typeof e == 'string' && (this.options.schema = e),
        Array.isArray(n) && (this.options.customTags = n);
      let r = Object.assign({}, this.getDefaults(), this.options);
      this.schema = new fi.Schema(r);
    }
    parse(e, n) {
      this.options.keepCstNodes && (this.cstNode = e),
        this.options.keepNodeTypes && (this.type = 'DOCUMENT');
      let {
        directives: r = [],
        contents: s = [],
        directivesEndMarker: i,
        error: o,
        valueRange: a,
      } = e;
      if (
        (o && (o.source || (o.source = this), this.errors.push(o)),
        Ra(this, r, n),
        i && (this.directivesEndMarker = !0),
        (this.range = a ? [a.start, a.end] : null),
        this.setSchema(),
        (this.anchors._cstAliases = []),
        Pa(this, s),
        this.anchors.resolveNodes(),
        this.options.prettyErrors)
      ) {
        for (let c of this.errors) c instanceof Y.YAMLError && c.makePretty();
        for (let c of this.warnings) c instanceof Y.YAMLError && c.makePretty();
      }
      return this;
    }
    listNonDefaultTags() {
      return Ia(this.contents).filter(e => e.indexOf(fi.Schema.defaultPrefix) !== 0);
    }
    setTagPrefix(e, n) {
      if (e[0] !== '!' || e[e.length - 1] !== '!')
        throw new Error('Handle must start and end with !');
      if (n) {
        let r = this.tagPrefixes.find(s => s.handle === e);
        r ? (r.prefix = n) : this.tagPrefixes.push({ handle: e, prefix: n });
      } else this.tagPrefixes = this.tagPrefixes.filter(r => r.handle !== e);
    }
    toJSON(e, n) {
      let { keepBlobsInJSON: r, mapAsMap: s, maxAliasCount: i } = this.options,
        o = r && (typeof e != 'string' || !(this.contents instanceof S.Scalar)),
        a = {
          doc: this,
          indentStep: '  ',
          keep: o,
          mapAsMap: o && !!s,
          maxAliasCount: i,
          stringify: Xt,
        },
        c = Object.keys(this.anchors.map);
      c.length > 0 &&
        (a.anchors = new Map(
          c.map(f => [this.anchors.map[f], { alias: [], aliasCount: 0, count: 1 }])
        ));
      let l = S.toJSON(this.contents, e, a);
      if (typeof n == 'function' && a.anchors)
        for (let { count: f, res: m } of a.anchors.values()) n(m, f);
      return l;
    }
    toString() {
      if (this.errors.length > 0) throw new Error('Document with errors cannot be stringified');
      let e = this.options.indent;
      if (!Number.isInteger(e) || e <= 0) {
        let c = JSON.stringify(e);
        throw new Error(`"indent" option must be a positive integer, not ${c}`);
      }
      this.setSchema();
      let n = [],
        r = !1;
      if (this.version) {
        let c = '%YAML 1.2';
        this.schema.name === 'yaml-1.1' &&
          (this.version === '1.0'
            ? (c = '%YAML:1.0')
            : this.version === '1.1' && (c = '%YAML 1.1')),
          n.push(c),
          (r = !0);
      }
      let s = this.listNonDefaultTags();
      this.tagPrefixes.forEach(({ handle: c, prefix: l }) => {
        s.some(f => f.indexOf(l) === 0) && (n.push(`%TAG ${c} ${l}`), (r = !0));
      }),
        (r || this.directivesEndMarker) && n.push('---'),
        this.commentBefore &&
          ((r || !this.directivesEndMarker) && n.unshift(''),
          n.unshift(this.commentBefore.replace(/^/gm, '#')));
      let i = {
          anchors: Object.create(null),
          doc: this,
          indent: '',
          indentStep: ' '.repeat(e),
          stringify: Xt,
        },
        o = !1,
        a = null;
      if (this.contents) {
        this.contents instanceof S.Node &&
          (this.contents.spaceBefore && (r || this.directivesEndMarker) && n.push(''),
          this.contents.commentBefore && n.push(this.contents.commentBefore.replace(/^/gm, '#')),
          (i.forceBlockIndent = !!this.comment),
          (a = this.contents.comment));
        let c = a ? null : () => (o = !0),
          l = Xt(this.contents, i, () => (a = null), c);
        n.push(S.addComment(l, '', a));
      } else this.contents !== void 0 && n.push(Xt(this.contents, i));
      return (
        this.comment &&
          ((!o || a) && n[n.length - 1] !== '' && n.push(''),
          n.push(this.comment.replace(/^/gm, '#'))),
        n.join(`
`) +
          `
`
      );
    }
  };
  Y._defineProperty(Zt, 'defaults', pi);
  en.Document = Zt;
  en.defaultOptions = Ca;
  en.scalarOptions = Ma;
});
var di = te(gi => {
  'use strict';
  var Zn = Rs(),
    Oe = mi(),
    Da = Xn(),
    Ya = le(),
    $a = Qn();
  qe();
  function Ba(t, e = !0, n) {
    n === void 0 && typeof e == 'string' && ((n = e), (e = !0));
    let r = Object.assign({}, Oe.Document.defaults[Oe.defaultOptions.version], Oe.defaultOptions);
    return new Da.Schema(r).createNode(t, e, n);
  }
  var We = class extends Oe.Document {
    constructor(e) {
      super(Object.assign({}, Oe.defaultOptions, e));
    }
  };
  function Fa(t, e) {
    let n = [],
      r;
    for (let s of Zn.parse(t)) {
      let i = new We(e);
      i.parse(s, r), n.push(i), (r = i);
    }
    return n;
  }
  function hi(t, e) {
    let n = Zn.parse(t),
      r = new We(e).parse(n[0]);
    if (n.length > 1) {
      let s = 'Source contains multiple documents; please use YAML.parseAllDocuments()';
      r.errors.unshift(new Ya.YAMLSemanticError(n[1], s));
    }
    return r;
  }
  function qa(t, e) {
    let n = hi(t, e);
    if ((n.warnings.forEach(r => $a.warn(r)), n.errors.length > 0)) throw n.errors[0];
    return n.toJSON();
  }
  function Ua(t, e) {
    let n = new We(e);
    return (n.contents = t), String(n);
  }
  var Ka = {
    createNode: Ba,
    defaultOptions: Oe.defaultOptions,
    Document: We,
    parse: qa,
    parseAllDocuments: Fa,
    parseCST: Zn.parse,
    parseDocument: hi,
    scalarOptions: Oe.scalarOptions,
    stringify: Ua,
  };
  gi.YAML = Ka;
});
var Ei = te((qm, yi) => {
  yi.exports = di().YAML;
});
var Si = te(J => {
  'use strict';
  var je = qe(),
    Qe = le();
  J.findPair = je.findPair;
  J.parseMap = je.resolveMap;
  J.parseSeq = je.resolveSeq;
  J.stringifyNumber = je.stringifyNumber;
  J.stringifyString = je.stringifyString;
  J.toJSON = je.toJSON;
  J.Type = Qe.Type;
  J.YAMLError = Qe.YAMLError;
  J.YAMLReferenceError = Qe.YAMLReferenceError;
  J.YAMLSemanticError = Qe.YAMLSemanticError;
  J.YAMLSyntaxError = Qe.YAMLSyntaxError;
  J.YAMLWarning = Qe.YAMLWarning;
});
var nr = {};
rr(nr, { languages: () => _r, options: () => xr, parsers: () => tr, printers: () => Ha });
var Pi = (t, e, n, r) => {
    if (!(t && e == null))
      return e.replaceAll ? e.replaceAll(n, r) : n.global ? e.replace(n, r) : e.split(n).join(r);
  },
  yt = Pi;
var Le = 'string',
  Je = 'array',
  Ge = 'cursor',
  He = 'indent',
  Ae = 'align',
  Xe = 'trim',
  Te = 'group',
  Ce = 'fill',
  he = 'if-break',
  ze = 'indent-if-break',
  Me = 'line-suffix',
  Ze = 'line-suffix-boundary',
  Z = 'line',
  et = 'label',
  ke = 'break-parent',
  Et = new Set([Ge, He, Ae, Xe, Te, Ce, he, ze, Me, Ze, Z, et, ke]);
var _i = (t, e, n) => {
    if (!(t && e == null))
      return Array.isArray(e) || typeof e == 'string' ? e[n < 0 ? e.length + n : n] : e.at(n);
  },
  x = _i;
function xi(t) {
  if (typeof t == 'string') return Le;
  if (Array.isArray(t)) return Je;
  if (!t) return;
  let { type: e } = t;
  if (Et.has(e)) return e;
}
var ve = xi;
var Ri = t => new Intl.ListFormat('en-US', { type: 'disjunction' }).format(t);
function Di(t) {
  let e = t === null ? 'null' : typeof t;
  if (e !== 'string' && e !== 'object')
    return `Unexpected doc '${e}', 
Expected it to be 'string' or 'object'.`;
  if (ve(t)) throw new Error('doc is valid.');
  let n = Object.prototype.toString.call(t);
  if (n !== '[object Object]') return `Unexpected doc '${n}'.`;
  let r = Ri([...Et].map(s => `'${s}'`));
  return `Unexpected doc.type '${t.type}'.
Expected it to be ${r}.`;
}
var nn = class extends Error {
    name = 'InvalidDocError';
    constructor(e) {
      super(Di(e)), (this.doc = e);
    }
  },
  rn = nn;
function $i(t, e) {
  if (typeof t == 'string') return e(t);
  let n = new Map();
  return r(t);
  function r(i) {
    if (n.has(i)) return n.get(i);
    let o = s(i);
    return n.set(i, o), o;
  }
  function s(i) {
    switch (ve(i)) {
      case Je:
        return e(i.map(r));
      case Ce:
        return e({ ...i, parts: i.parts.map(r) });
      case he:
        return e({ ...i, breakContents: r(i.breakContents), flatContents: r(i.flatContents) });
      case Te: {
        let { expandedStates: o, contents: a } = i;
        return (
          o ? ((o = o.map(r)), (a = o[0])) : (a = r(a)), e({ ...i, contents: a, expandedStates: o })
        );
      }
      case Ae:
      case He:
      case ze:
      case et:
      case Me:
        return e({ ...i, contents: r(i.contents) });
      case Le:
      case Ge:
      case Xe:
      case Ze:
      case Z:
      case ke:
        return e(i);
      default:
        throw new rn(i);
    }
  }
}
function ir(t, e = tt) {
  return $i(t, n =>
    typeof n == 'string'
      ? v(
          e,
          n.split(`
`)
        )
      : n
  );
}
var sn = () => {},
  ge = sn,
  on = sn,
  or = sn;
function nt(t, e) {
  return ge(e), { type: Ae, contents: e, n: t };
}
function Ie(t, e = {}) {
  return (
    ge(t),
    on(e.expandedStates, !0),
    { type: Te, id: e.id, contents: t, break: !!e.shouldBreak, expandedStates: e.expandedStates }
  );
}
function an(t) {
  return nt(Number.NEGATIVE_INFINITY, t);
}
function ar(t) {
  return nt({ type: 'root' }, t);
}
function cr(t) {
  return nt(-1, t);
}
function cn(t, e) {
  return Ie(t[0], { ...e, expandedStates: t });
}
function St(t) {
  return or(t), { type: Ce, parts: t };
}
function rt(t, e = '', n = {}) {
  return (
    ge(t), e !== '' && ge(e), { type: he, breakContents: t, flatContents: e, groupId: n.groupId }
  );
}
function lr(t) {
  return ge(t), { type: Me, contents: t };
}
var wt = { type: ke };
var Bi = { type: Z, hard: !0 },
  Fi = { type: Z, hard: !0, literal: !0 },
  ne = { type: Z },
  bt = { type: Z, soft: !0 },
  N = [Bi, wt],
  tt = [Fi, wt];
function v(t, e) {
  ge(t), on(e);
  let n = [];
  for (let r = 0; r < e.length; r++) r !== 0 && n.push(t), n.push(e[r]);
  return n;
}
function Nt(t) {
  return (e, n, r) => {
    let s = !!(r != null && r.backwards);
    if (n === !1) return !1;
    let { length: i } = e,
      o = n;
    for (; o >= 0 && o < i; ) {
      let a = e.charAt(o);
      if (t instanceof RegExp) {
        if (!t.test(a)) return o;
      } else if (!t.includes(a)) return o;
      s ? o-- : o++;
    }
    return o === -1 || o === i ? o : !1;
  };
}
var Mc = Nt(/\s/u),
  ln = Nt(' 	'),
  kc = Nt(',; 	'),
  vc = Nt(/[^\n\r]/u);
function qi(t, e, n) {
  let r = !!(n != null && n.backwards);
  if (e === !1) return !1;
  let s = t.charAt(e);
  if (r) {
    if (
      t.charAt(e - 1) === '\r' &&
      s ===
        `
`
    )
      return e - 2;
    if (
      s ===
        `
` ||
      s === '\r' ||
      s === '\u2028' ||
      s === '\u2029'
    )
      return e - 1;
  } else {
    if (
      s === '\r' &&
      t.charAt(e + 1) ===
        `
`
    )
      return e + 2;
    if (
      s ===
        `
` ||
      s === '\r' ||
      s === '\u2028' ||
      s === '\u2029'
    )
      return e + 1;
  }
  return e;
}
var fn = qi;
function Ui(t, e) {
  let n = e - 1;
  (n = ln(t, n, { backwards: !0 })),
    (n = fn(t, n, { backwards: !0 })),
    (n = ln(t, n, { backwards: !0 }));
  let r = fn(t, n, { backwards: !0 });
  return n !== r;
}
var fr = Ui;
var un = class extends Error {
    name = 'UnexpectedNodeError';
    constructor(e, n, r = 'type') {
      super(`Unexpected ${n} node ${r}: ${JSON.stringify(e[r])}.`), (this.node = e);
    }
  },
  ur = un;
function pr(t, e) {
  let { node: n } = t;
  if (
    n.type === 'root' &&
    e.filepath &&
    /(?:[/\\]|^)\.(?:prettier|stylelint|lintstaged)rc$/u.test(e.filepath)
  )
    return async r => {
      let s = await r(e.originalText, { parser: 'json' });
      return s ? [s, N] : void 0;
    };
}
pr.getVisitorKeys = () => [];
var mr = pr;
var st = null;
function it(t) {
  if (st !== null && typeof st.property) {
    let e = st;
    return (st = it.prototype = null), e;
  }
  return (st = it.prototype = t ?? Object.create(null)), new it();
}
var Ki = 10;
for (let t = 0; t <= Ki; t++) it();
function pn(t) {
  return it(t);
}
function Vi(t, e = 'type') {
  pn(t);
  function n(r) {
    let s = r[e],
      i = t[s];
    if (!Array.isArray(i))
      throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), { node: r });
    return i;
  }
  return n;
}
var hr = Vi;
var Wi = Object.fromEntries(
    Object.entries({
      root: ['children'],
      document: ['head', 'body', 'children'],
      documentHead: ['children'],
      documentBody: ['children'],
      directive: [],
      alias: [],
      blockLiteral: [],
      blockFolded: ['children'],
      plain: ['children'],
      quoteSingle: [],
      quoteDouble: [],
      mapping: ['children'],
      mappingItem: ['key', 'value', 'children'],
      mappingKey: ['content', 'children'],
      mappingValue: ['content', 'children'],
      sequence: ['children'],
      sequenceItem: ['content', 'children'],
      flowMapping: ['children'],
      flowMappingItem: ['key', 'value', 'children'],
      flowSequence: ['children'],
      flowSequenceItem: ['content', 'children'],
      comment: [],
      tag: [],
      anchor: [],
    }).map(([t, e]) => [
      t,
      [
        ...e,
        'anchor',
        'tag',
        'indicatorComment',
        'leadingComments',
        'middleComments',
        'trailingComment',
        'endComments',
      ],
    ])
  ),
  gr = Wi;
var ji = hr(gr),
  dr = ji;
function Pe(t) {
  return t.position.start.offset;
}
function yr(t) {
  return t.position.end.offset;
}
function Er(t) {
  return /^\s*@(?:prettier|format)\s*$/u.test(t);
}
function Sr(t) {
  return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/u.test(t);
}
function wr(t) {
  return `# @format

${t}`;
}
function Qi(t) {
  return Array.isArray(t) && t.length > 0;
}
var _e = Qi;
function H(t, e) {
  return typeof (t == null ? void 0 : t.type) == 'string' && (!e || e.includes(t.type));
}
function mn(t, e, n) {
  return e('children' in t ? { ...t, children: t.children.map(r => mn(r, e, t)) } : t, n);
}
function xe(t, e, n) {
  Object.defineProperty(t, e, { get: n, enumerable: !1 });
}
function Nr(t, e) {
  let n = 0,
    r = e.length;
  for (let s = t.position.end.offset - 1; s < r; s++) {
    let i = e[s];
    if (
      (i ===
        `
` && n++,
      n === 1 && /\S/u.test(i))
    )
      return !1;
    if (n === 2) return !0;
  }
  return !1;
}
function Ot(t) {
  let { node: e } = t;
  switch (e.type) {
    case 'tag':
    case 'anchor':
    case 'comment':
      return !1;
  }
  let n = t.stack.length;
  for (let r = 1; r < n; r++) {
    let s = t.stack[r],
      i = t.stack[r - 1];
    if (Array.isArray(i) && typeof s == 'number' && s !== i.length - 1) return !1;
  }
  return !0;
}
function Lt(t) {
  return _e(t.children) ? Lt(x(!1, t.children, -1)) : t;
}
function br(t) {
  return t.value.trim() === 'prettier-ignore';
}
function Or(t) {
  let { node: e } = t;
  if (e.type === 'documentBody') {
    let n = t.parent.head;
    return R(n) && br(x(!1, n.endComments, -1));
  }
  return ee(e) && br(x(!1, e.leadingComments, -1));
}
function Re(t) {
  return !_e(t.children) && !Ji(t);
}
function Ji(t) {
  return ee(t) || ie(t) || hn(t) || K(t) || R(t);
}
function ee(t) {
  return _e(t == null ? void 0 : t.leadingComments);
}
function ie(t) {
  return _e(t == null ? void 0 : t.middleComments);
}
function hn(t) {
  return t == null ? void 0 : t.indicatorComment;
}
function K(t) {
  return t == null ? void 0 : t.trailingComment;
}
function R(t) {
  return _e(t == null ? void 0 : t.endComments);
}
function Lr(t) {
  let e = [],
    n;
  for (let r of t.split(/( +)/u))
    r !== ' '
      ? n === ' '
        ? e.push(r)
        : e.push((e.pop() || '') + r)
      : n === void 0 && e.unshift(''),
      (n = r);
  return (
    n === ' ' && e.push((e.pop() || '') + ' '),
    e[0] === '' && (e.shift(), e.unshift(' ' + (e.shift() || ''))),
    e
  );
}
function Ar(t, e, n) {
  let r = e
    .split(
      `
`
    )
    .map((s, i, o) =>
      i === 0 && i === o.length - 1
        ? s
        : i !== 0 && i !== o.length - 1
          ? s.trim()
          : i === 0
            ? s.trimEnd()
            : s.trimStart()
    );
  return n.proseWrap === 'preserve'
    ? r.map(s => (s.length === 0 ? [] : [s]))
    : r
        .map(s => (s.length === 0 ? [] : Lr(s)))
        .reduce(
          (s, i, o) =>
            o !== 0 &&
            r[o - 1].length > 0 &&
            i.length > 0 &&
            !(t === 'quoteDouble' && x(!1, x(!1, s, -1), -1).endsWith('\\'))
              ? [...s.slice(0, -1), [...x(!1, s, -1), ...i]]
              : [...s, i],
          []
        )
        .map(s => (n.proseWrap === 'never' ? [s.join(' ')] : s));
}
function Tr(t, { parentIndent: e, isLastDescendant: n, options: r }) {
  let s =
      t.position.start.line === t.position.end.line
        ? ''
        : r.originalText
            .slice(t.position.start.offset, t.position.end.offset)
            .match(/^[^\n]*\n(.*)$/su)[1],
    i;
  if (t.indent === null) {
    let c = s.match(/^(?<leadingSpace> *)[^\n\r ]/mu);
    i = c ? c.groups.leadingSpace.length : Number.POSITIVE_INFINITY;
  } else i = t.indent - 1 + e;
  let o = s
    .split(
      `
`
    )
    .map(c => c.slice(i));
  if (r.proseWrap === 'preserve' || t.type === 'blockLiteral')
    return a(o.map(c => (c.length === 0 ? [] : [c])));
  return a(
    o
      .map(c => (c.length === 0 ? [] : Lr(c)))
      .reduce(
        (c, l, f) =>
          f !== 0 &&
          o[f - 1].length > 0 &&
          l.length > 0 &&
          !/^\s/u.test(l[0]) &&
          !/^\s|\s$/u.test(x(!1, c, -1))
            ? [...c.slice(0, -1), [...x(!1, c, -1), ...l]]
            : [...c, l],
        []
      )
      .map(c =>
        c.reduce(
          (l, f) =>
            l.length > 0 && /\s$/u.test(x(!1, l, -1))
              ? [...l.slice(0, -1), x(!1, l, -1) + ' ' + f]
              : [...l, f],
          []
        )
      )
      .map(c => (r.proseWrap === 'never' ? [c.join(' ')] : c))
  );
  function a(c) {
    if (t.chomping === 'keep') return x(!1, c, -1).length === 0 ? c.slice(0, -1) : c;
    let l = 0;
    for (let f = c.length - 1; f >= 0 && c[f].length === 0; f--) l++;
    return l === 0 ? c : l >= 2 && !n ? c.slice(0, -(l - 1)) : c.slice(0, -l);
  }
}
function ot(t) {
  if (!t) return !0;
  switch (t.type) {
    case 'plain':
    case 'quoteDouble':
    case 'quoteSingle':
    case 'alias':
    case 'flowMapping':
    case 'flowSequence':
      return !0;
    default:
      return !1;
  }
}
var gn = new WeakMap();
function At(t, e) {
  let { node: n, root: r } = t,
    s;
  return (
    gn.has(r) ? (s = gn.get(r)) : ((s = new Set()), gn.set(r, s)),
    !s.has(n.position.end.line) && (s.add(n.position.end.line), Nr(n, e) && !dn(t.parent)) ? bt : ''
  );
}
function dn(t) {
  return R(t) && !H(t, ['documentHead', 'documentBody', 'flowMapping', 'flowSequence']);
}
function I(t, e) {
  return nt(' '.repeat(t), e);
}
function Gi(t, e, n) {
  let { node: r } = t,
    s = t.ancestors.filter(l => l.type === 'sequence' || l.type === 'mapping').length,
    i = Ot(t),
    o = [r.type === 'blockFolded' ? '>' : '|'];
  r.indent !== null && o.push(r.indent.toString()),
    r.chomping !== 'clip' && o.push(r.chomping === 'keep' ? '+' : '-'),
    hn(r) && o.push(' ', e('indicatorComment'));
  let a = Tr(r, { parentIndent: s, isLastDescendant: i, options: n }),
    c = [];
  for (let [l, f] of a.entries())
    l === 0 && c.push(N),
      c.push(St(v(ne, f))),
      l !== a.length - 1
        ? c.push(f.length === 0 ? N : ar(tt))
        : r.chomping === 'keep' && i && c.push(an(f.length === 0 ? N : tt));
  return r.indent === null ? o.push(cr(I(n.tabWidth, c))) : o.push(an(I(r.indent - 1 + s, c))), o;
}
var Cr = Gi;
function Tt(t, e, n) {
  let { node: r } = t,
    s = r.type === 'flowMapping',
    i = s ? '{' : '[',
    o = s ? '}' : ']',
    a = bt;
  s && r.children.length > 0 && n.bracketSpacing && (a = ne);
  let c = x(!1, r.children, -1),
    l = (c == null ? void 0 : c.type) === 'flowMappingItem' && Re(c.key) && Re(c.value);
  return [
    i,
    I(n.tabWidth, [
      a,
      Hi(t, e, n),
      n.trailingComma === 'none' ? '' : rt(','),
      R(r) ? [N, v(N, t.map(e, 'endComments'))] : '',
    ]),
    l ? '' : a,
    o,
  ];
}
function Hi(t, e, n) {
  return t.map(
    ({ isLast: r, node: s, next: i }) => [
      e(),
      r
        ? ''
        : [',', ne, s.position.start.line !== i.position.start.line ? At(t, n.originalText) : ''],
    ],
    'children'
  );
}
function Xi(t, e, n) {
  var C;
  let { node: r, parent: s } = t,
    { key: i, value: o } = r,
    a = Re(i),
    c = Re(o);
  if (a && c) return ': ';
  let l = e('key'),
    f = zi(r) ? ' ' : '';
  if (c)
    return r.type === 'flowMappingItem' && s.type === 'flowMapping'
      ? l
      : r.type === 'mappingItem' &&
          yn(i.content, n) &&
          !K(i.content) &&
          ((C = s.tag) == null ? void 0 : C.value) !== 'tag:yaml.org,2002:set'
        ? [l, f, ':']
        : ['? ', I(2, l)];
  let m = e('value');
  if (a) return [': ', I(2, m)];
  if (ee(o) || !ot(i.content))
    return ['? ', I(2, l), N, ...t.map(() => [e(), N], 'value', 'leadingComments'), ': ', I(2, m)];
  if (
    Zi(i.content) &&
    !ee(i.content) &&
    !ie(i.content) &&
    !K(i.content) &&
    !R(i) &&
    !ee(o.content) &&
    !ie(o.content) &&
    !R(o) &&
    yn(o.content, n)
  )
    return [l, f, ': ', m];
  let d = Symbol('mappingKey'),
    y = Ie([rt('? '), Ie(I(2, l), { id: d })]),
    h = [N, ': ', I(2, m)],
    g = [f, ':'];
  ee(o.content) ||
  (R(o) && o.content && !H(o.content, ['mapping', 'sequence'])) ||
  (s.type === 'mapping' && K(i.content) && ot(o.content)) ||
  (H(o.content, ['mapping', 'sequence']) && o.content.tag === null && o.content.anchor === null)
    ? g.push(N)
    : o.content
      ? g.push(ne)
      : K(o) && g.push(' '),
    g.push(m);
  let w = I(n.tabWidth, g);
  return yn(i.content, n) && !ee(i.content) && !ie(i.content) && !R(i)
    ? cn([[l, w]])
    : cn([[y, rt(h, w, { groupId: d })]]);
}
function yn(t, e) {
  if (!t) return !0;
  switch (t.type) {
    case 'plain':
    case 'quoteSingle':
    case 'quoteDouble':
      break;
    case 'alias':
      return !0;
    default:
      return !1;
  }
  if (e.proseWrap === 'preserve') return t.position.start.line === t.position.end.line;
  if (/\\$/mu.test(e.originalText.slice(t.position.start.offset, t.position.end.offset))) return !1;
  switch (e.proseWrap) {
    case 'never':
      return !t.value.includes(`
`);
    case 'always':
      return !/[\n ]/u.test(t.value);
    default:
      return !1;
  }
}
function zi(t) {
  var e;
  return ((e = t.key.content) == null ? void 0 : e.type) === 'alias';
}
function Zi(t) {
  if (!t) return !0;
  switch (t.type) {
    case 'plain':
    case 'quoteDouble':
    case 'quoteSingle':
      return t.position.start.line === t.position.end.line;
    case 'alias':
      return !0;
    default:
      return !1;
  }
}
var Mr = Xi;
function eo(t) {
  return mn(t, to);
}
function to(t) {
  switch (t.type) {
    case 'document':
      xe(t, 'head', () => t.children[0]), xe(t, 'body', () => t.children[1]);
      break;
    case 'documentBody':
    case 'sequenceItem':
    case 'flowSequenceItem':
    case 'mappingKey':
    case 'mappingValue':
      xe(t, 'content', () => t.children[0]);
      break;
    case 'mappingItem':
    case 'flowMappingItem':
      xe(t, 'key', () => t.children[0]), xe(t, 'value', () => t.children[1]);
      break;
  }
  return t;
}
var kr = eo;
function no(t, e, n) {
  let { node: r } = t,
    s = [];
  r.type !== 'mappingValue' && ee(r) && s.push([v(N, t.map(n, 'leadingComments')), N]);
  let { tag: i, anchor: o } = r;
  i && s.push(n('tag')), i && o && s.push(' '), o && s.push(n('anchor'));
  let a = '';
  return (
    H(r, ['mapping', 'sequence', 'comment', 'directive', 'mappingItem', 'sequenceItem']) &&
      !Ot(t) &&
      (a = At(t, e.originalText)),
    (i || o) && (H(r, ['sequence', 'mapping']) && !ie(r) ? s.push(N) : s.push(' ')),
    ie(r) && s.push([r.middleComments.length === 1 ? '' : N, v(N, t.map(n, 'middleComments')), N]),
    Or(t)
      ? s.push(ir(e.originalText.slice(r.position.start.offset, r.position.end.offset).trimEnd()))
      : s.push(Ie(ro(t, e, n))),
    K(r) &&
      !H(r, ['document', 'documentHead']) &&
      s.push(
        lr([
          r.type === 'mappingValue' && !r.content ? '' : ' ',
          t.parent.type === 'mappingKey' && t.getParentNode(2).type === 'mapping' && ot(r)
            ? ''
            : wt,
          n('trailingComment'),
        ])
      ),
    dn(r) &&
      s.push(
        I(r.type === 'sequenceItem' ? 2 : 0, [
          N,
          v(
            N,
            t.map(({ node: c }) => [fr(e.originalText, Pe(c)) ? N : '', n()], 'endComments')
          ),
        ])
      ),
    s.push(a),
    s
  );
}
function ro(t, e, n) {
  let { node: r } = t;
  switch (r.type) {
    case 'root': {
      let s = [];
      t.each(({ node: o, next: a, isFirst: c }) => {
        c || s.push(N),
          s.push(n()),
          vr(o, a)
            ? (s.push(N, '...'), K(o) && s.push(' ', n('trailingComment')))
            : a && !K(a.head) && s.push(N, '---');
      }, 'children');
      let i = Lt(r);
      return (!H(i, ['blockLiteral', 'blockFolded']) || i.chomping !== 'keep') && s.push(N), s;
    }
    case 'document': {
      let s = [];
      return (
        io(t, e) === 'head' &&
          ((r.head.children.length > 0 || r.head.endComments.length > 0) && s.push(n('head')),
          K(r.head) ? s.push(['---', ' ', n(['head', 'trailingComment'])]) : s.push('---')),
        so(r) && s.push(n('body')),
        v(N, s)
      );
    }
    case 'documentHead':
      return v(N, [...t.map(n, 'children'), ...t.map(n, 'endComments')]);
    case 'documentBody': {
      let { children: s, endComments: i } = r,
        o = '';
      if (s.length > 0 && i.length > 0) {
        let a = Lt(r);
        H(a, ['blockFolded', 'blockLiteral']) ? a.chomping !== 'keep' && (o = [N, N]) : (o = N);
      }
      return [v(N, t.map(n, 'children')), o, v(N, t.map(n, 'endComments'))];
    }
    case 'directive':
      return ['%', v(' ', [r.name, ...r.parameters])];
    case 'comment':
      return ['#', r.value];
    case 'alias':
      return ['*', r.value];
    case 'tag':
      return e.originalText.slice(r.position.start.offset, r.position.end.offset);
    case 'anchor':
      return ['&', r.value];
    case 'plain':
      return at(r.type, e.originalText.slice(r.position.start.offset, r.position.end.offset), e);
    case 'quoteDouble':
    case 'quoteSingle': {
      let s = "'",
        i = '"',
        o = e.originalText.slice(r.position.start.offset + 1, r.position.end.offset - 1);
      if (
        (r.type === 'quoteSingle' && o.includes('\\')) ||
        (r.type === 'quoteDouble' && /\\[^"]/u.test(o))
      ) {
        let c = r.type === 'quoteDouble' ? i : s;
        return [c, at(r.type, o, e), c];
      }
      if (o.includes(i))
        return [
          s,
          at(
            r.type,
            r.type === 'quoteDouble' ? yt(!1, yt(!1, o, String.raw`\"`, i), "'", s.repeat(2)) : o,
            e
          ),
          s,
        ];
      if (o.includes(s))
        return [i, at(r.type, r.type === 'quoteSingle' ? yt(!1, o, "''", s) : o, e), i];
      let a = e.singleQuote ? s : i;
      return [a, at(r.type, o, e), a];
    }
    case 'blockFolded':
    case 'blockLiteral':
      return Cr(t, n, e);
    case 'mapping':
    case 'sequence':
      return v(N, t.map(n, 'children'));
    case 'sequenceItem':
      return ['- ', I(2, r.content ? n('content') : '')];
    case 'mappingKey':
    case 'mappingValue':
      return r.content ? n('content') : '';
    case 'mappingItem':
    case 'flowMappingItem':
      return Mr(t, n, e);
    case 'flowMapping':
      return Tt(t, n, e);
    case 'flowSequence':
      return Tt(t, n, e);
    case 'flowSequenceItem':
      return n('content');
    default:
      throw new ur(r, 'YAML');
  }
}
function so(t) {
  return t.body.children.length > 0 || R(t.body);
}
function vr(t, e) {
  return K(t) || (e && (e.head.children.length > 0 || R(e.head)));
}
function io(t, e) {
  let n = t.node;
  if (
    (t.isFirst && /---(?:\s|$)/u.test(e.originalText.slice(Pe(n), Pe(n) + 4))) ||
    n.head.children.length > 0 ||
    R(n.head) ||
    K(n.head)
  )
    return 'head';
  let r = t.next;
  return vr(n, r) ? !1 : r ? 'root' : !1;
}
function at(t, e, n) {
  let r = Ar(t, e, n);
  return v(
    N,
    r.map(s => St(v(ne, s)))
  );
}
function Ir(t, e) {
  if (H(t))
    switch (t.type) {
      case 'comment':
        if (Er(t.value)) return null;
        break;
      case 'quoteDouble':
      case 'quoteSingle':
        e.type = 'quote';
        break;
    }
}
Ir.ignoredProperties = new Set(['position']);
var oo = {
    preprocess: kr,
    embed: mr,
    print: no,
    massageAstNode: Ir,
    insertPragma: wr,
    getVisitorKeys: dr,
  },
  Pr = oo;
var _r = [
  {
    linguistLanguageId: 407,
    name: 'YAML',
    type: 'data',
    color: '#cb171e',
    tmScope: 'source.yaml',
    aliases: ['yml'],
    extensions: [
      '.yml',
      '.mir',
      '.reek',
      '.rviz',
      '.sublime-syntax',
      '.syntax',
      '.yaml',
      '.yaml-tmlanguage',
      '.yaml.sed',
      '.yml.mysql',
    ],
    filenames: [
      '.clang-format',
      '.clang-tidy',
      '.gemrc',
      'CITATION.cff',
      'glide.lock',
      '.prettierrc',
      '.stylelintrc',
      '.lintstagedrc',
    ],
    aceMode: 'yaml',
    codemirrorMode: 'yaml',
    codemirrorMimeType: 'text/x-yaml',
    parsers: ['yaml'],
    vscodeLanguageIds: [
      'yaml',
      'ansible',
      'dockercompose',
      'github-actions-workflow',
      'home-assistant',
    ],
  },
];
var Ct = {
  bracketSpacing: {
    category: 'Common',
    type: 'boolean',
    default: !0,
    description: 'Print spaces between brackets.',
    oppositeDescription: 'Do not print spaces between brackets.',
  },
  objectWrap: {
    category: 'Common',
    type: 'choice',
    default: 'preserve',
    description: 'How to wrap object literals.',
    choices: [
      {
        value: 'preserve',
        description:
          'Keep as multi-line, if there is a newline between the opening brace and first property.',
      },
      { value: 'collapse', description: 'Fit to a single line when possible.' },
    ],
  },
  singleQuote: {
    category: 'Common',
    type: 'boolean',
    default: !1,
    description: 'Use single quotes instead of double quotes.',
  },
  proseWrap: {
    category: 'Common',
    type: 'choice',
    default: 'preserve',
    description: 'How to wrap prose.',
    choices: [
      { value: 'always', description: 'Wrap prose if it exceeds the print width.' },
      { value: 'never', description: 'Do not wrap prose.' },
      { value: 'preserve', description: 'Wrap prose as-is.' },
    ],
  },
  bracketSameLine: {
    category: 'Common',
    type: 'boolean',
    default: !1,
    description: 'Put > of opening tags on the last line instead of on a new line.',
  },
  singleAttributePerLine: {
    category: 'Common',
    type: 'boolean',
    default: !1,
    description: 'Enforce single attribute per line in HTML, Vue and JSX.',
  },
};
var ao = {
    bracketSpacing: Ct.bracketSpacing,
    singleQuote: Ct.singleQuote,
    proseWrap: Ct.proseWrap,
  },
  xr = ao;
var tr = {};
rr(tr, { yaml: () => Ga });
var Mt = `
`,
  Rr = '\r',
  Dr = (function () {
    function t(e) {
      this.length = e.length;
      for (var n = [0], r = 0; r < e.length; )
        switch (e[r]) {
          case Mt:
            (r += Mt.length), n.push(r);
            break;
          case Rr:
            (r += Rr.length), e[r] === Mt && (r += Mt.length), n.push(r);
            break;
          default:
            r++;
            break;
        }
      this.offsets = n;
    }
    return (
      (t.prototype.locationForIndex = function (e) {
        if (e < 0 || e > this.length) return null;
        for (var n = 0, r = this.offsets; r[n + 1] <= e; ) n++;
        var s = e - r[n];
        return { line: n, column: s };
      }),
      (t.prototype.indexForLocation = function (e) {
        var n = e.line,
          r = e.column;
        return n < 0 || n >= this.offsets.length || r < 0 || r > this.lengthOfLine(n)
          ? null
          : this.offsets[n] + r;
      }),
      (t.prototype.lengthOfLine = function (e) {
        var n = this.offsets[e],
          r = e === this.offsets.length - 1 ? this.length : this.offsets[e + 1];
        return r - n;
      }),
      t
    );
  })();
function $(t, e = null) {
  'children' in t && t.children.forEach(n => $(n, t)),
    'anchor' in t && t.anchor && $(t.anchor, t),
    'tag' in t && t.tag && $(t.tag, t),
    'leadingComments' in t && t.leadingComments.forEach(n => $(n, t)),
    'middleComments' in t && t.middleComments.forEach(n => $(n, t)),
    'indicatorComment' in t && t.indicatorComment && $(t.indicatorComment, t),
    'trailingComment' in t && t.trailingComment && $(t.trailingComment, t),
    'endComments' in t && t.endComments.forEach(n => $(n, t)),
    Object.defineProperty(t, '_parent', { value: e, enumerable: !1 });
}
function de(t) {
  return `${t.line}:${t.column}`;
}
function Yr(t) {
  $(t);
  let e = co(t),
    n = t.children.slice();
  t.comments
    .sort((r, s) => r.position.start.offset - s.position.end.offset)
    .filter(r => !r._parent)
    .forEach(r => {
      for (; n.length > 1 && r.position.start.line > n[0].position.end.line; ) n.shift();
      lo(r, e, n[0]);
    });
}
function co(t) {
  let e = Array.from(new Array(t.position.end.line), () => ({}));
  for (let n of t.comments) e[n.position.start.line - 1].comment = n;
  return $r(e, t), e;
}
function $r(t, e) {
  if (e.position.start.offset !== e.position.end.offset) {
    if ('leadingComments' in e) {
      let { start: n } = e.position,
        { leadingAttachableNode: r } = t[n.line - 1];
      (!r || n.column < r.position.start.column) && (t[n.line - 1].leadingAttachableNode = e);
    }
    if (
      'trailingComment' in e &&
      e.position.end.column > 1 &&
      e.type !== 'document' &&
      e.type !== 'documentHead'
    ) {
      let { end: n } = e.position,
        { trailingAttachableNode: r } = t[n.line - 1];
      (!r || n.column >= r.position.end.column) && (t[n.line - 1].trailingAttachableNode = e);
    }
    if (
      e.type !== 'root' &&
      e.type !== 'document' &&
      e.type !== 'documentHead' &&
      e.type !== 'documentBody'
    ) {
      let { start: n, end: r } = e.position,
        s = [r.line].concat(n.line === r.line ? [] : n.line);
      for (let i of s) {
        let o = t[i - 1].trailingNode;
        (!o || r.column >= o.position.end.column) && (t[i - 1].trailingNode = e);
      }
    }
    'children' in e &&
      e.children.forEach(n => {
        $r(t, n);
      });
  }
}
function lo(t, e, n) {
  let r = t.position.start.line,
    { trailingAttachableNode: s } = e[r - 1];
  if (s) {
    if (s.trailingComment)
      throw new Error(`Unexpected multiple trailing comment at ${de(t.position.start)}`);
    $(t, s), (s.trailingComment = t);
    return;
  }
  for (let o = r; o >= n.position.start.line; o--) {
    let { trailingNode: a } = e[o - 1],
      c;
    if (a) c = a;
    else if (o !== r && e[o - 1].comment) c = e[o - 1].comment._parent;
    else continue;
    if (
      ((c.type === 'sequence' || c.type === 'mapping') && (c = c.children[0]),
      c.type === 'mappingItem')
    ) {
      let [l, f] = c.children;
      c = Br(l) ? l : f;
    }
    for (;;) {
      if (fo(c, t)) {
        $(t, c), c.endComments.push(t);
        return;
      }
      if (!c._parent) break;
      c = c._parent;
    }
    break;
  }
  for (let o = r + 1; o <= n.position.end.line; o++) {
    let { leadingAttachableNode: a } = e[o - 1];
    if (a) {
      $(t, a), a.leadingComments.push(t);
      return;
    }
  }
  let i = n.children[1];
  $(t, i), i.endComments.push(t);
}
function fo(t, e) {
  if (
    t.position.start.offset < e.position.start.offset &&
    t.position.end.offset > e.position.end.offset
  )
    switch (t.type) {
      case 'flowMapping':
      case 'flowSequence':
        return (
          t.children.length === 0 ||
          e.position.start.line > t.children[t.children.length - 1].position.end.line
        );
    }
  if (e.position.end.offset < t.position.end.offset) return !1;
  switch (t.type) {
    case 'sequenceItem':
      return e.position.start.column > t.position.start.column;
    case 'mappingKey':
    case 'mappingValue':
      return (
        e.position.start.column > t._parent.position.start.column &&
        (t.children.length === 0 ||
          (t.children.length === 1 &&
            t.children[0].type !== 'blockFolded' &&
            t.children[0].type !== 'blockLiteral')) &&
        (t.type === 'mappingValue' || Br(t))
      );
    default:
      return !1;
  }
}
function Br(t) {
  return (
    t.position.start !== t.position.end &&
    (t.children.length === 0 || t.position.start.offset !== t.children[0].position.start.offset)
  );
}
function b(t, e) {
  return { type: t, position: e };
}
function Fr(t, e, n) {
  return { ...b('root', t), children: e, comments: n };
}
function ct(t) {
  switch (t.type) {
    case 'DOCUMENT':
      for (let e = t.contents.length - 1; e >= 0; e--)
        t.contents[e].type === 'BLANK_LINE' ? t.contents.splice(e, 1) : ct(t.contents[e]);
      for (let e = t.directives.length - 1; e >= 0; e--)
        t.directives[e].type === 'BLANK_LINE' && t.directives.splice(e, 1);
      break;
    case 'FLOW_MAP':
    case 'FLOW_SEQ':
    case 'MAP':
    case 'SEQ':
      for (let e = t.items.length - 1; e >= 0; e--) {
        let n = t.items[e];
        'char' in n || (n.type === 'BLANK_LINE' ? t.items.splice(e, 1) : ct(n));
      }
      break;
    case 'MAP_KEY':
    case 'MAP_VALUE':
    case 'SEQ_ITEM':
      t.node && ct(t.node);
      break;
    case 'ALIAS':
    case 'BLANK_LINE':
    case 'BLOCK_FOLDED':
    case 'BLOCK_LITERAL':
    case 'COMMENT':
    case 'DIRECTIVE':
    case 'PLAIN':
    case 'QUOTE_DOUBLE':
    case 'QUOTE_SINGLE':
      break;
    default:
      throw new Error(`Unexpected node type ${JSON.stringify(t.type)}`);
  }
}
function X() {
  return { leadingComments: [] };
}
function oe(t = null) {
  return { trailingComment: t };
}
function B() {
  return { ...X(), ...oe() };
}
function qr(t, e, n) {
  return { ...b('alias', t), ...B(), ...e, value: n };
}
function Ur(t, e) {
  let n = t.cstNode;
  return qr(
    e.transformRange({ origStart: n.valueRange.origStart - 1, origEnd: n.valueRange.origEnd }),
    e.transformContent(t),
    n.rawValue
  );
}
function Kr(t) {
  return { ...t, type: 'blockFolded' };
}
function Vr(t, e, n, r, s, i) {
  return {
    ...b('blockValue', t),
    ...X(),
    ...e,
    chomping: n,
    indent: r,
    value: s,
    indicatorComment: i,
  };
}
var ae;
(function (t) {
  (t.Tag = '!'), (t.Anchor = '&'), (t.Comment = '#');
})(ae || (ae = {}));
function Wr(t, e) {
  return { ...b('anchor', t), value: e };
}
function De(t, e) {
  return { ...b('comment', t), value: e };
}
function jr(t, e, n) {
  return { anchor: e, tag: t, middleComments: n };
}
function Qr(t, e) {
  return { ...b('tag', t), value: e };
}
function kt(t, e, n = () => !1) {
  let r = t.cstNode,
    s = [],
    i = null,
    o = null,
    a = null;
  for (let c of r.props) {
    let l = e.text[c.origStart];
    switch (l) {
      case ae.Tag:
        (i = i || c), (o = Qr(e.transformRange(c), t.tag));
        break;
      case ae.Anchor:
        (i = i || c), (a = Wr(e.transformRange(c), r.anchor));
        break;
      case ae.Comment: {
        let f = De(e.transformRange(c), e.text.slice(c.origStart + 1, c.origEnd));
        e.comments.push(f),
          !n(f) &&
            i &&
            i.origEnd <= c.origStart &&
            c.origEnd <= r.valueRange.origStart &&
            s.push(f);
        break;
      }
      default:
        throw new Error(`Unexpected leading character ${JSON.stringify(l)}`);
    }
  }
  return jr(o, a, s);
}
var En;
(function (t) {
  (t.CLIP = 'clip'), (t.STRIP = 'strip'), (t.KEEP = 'keep');
})(En || (En = {}));
function vt(t, e) {
  let n = t.cstNode,
    r = 1,
    s = n.chomping === 'CLIP' ? 0 : 1,
    o = n.header.origEnd - n.header.origStart - r - s !== 0,
    a = e.transformRange({ origStart: n.header.origStart, origEnd: n.valueRange.origEnd }),
    c = null,
    l = kt(t, e, f => {
      if (!(a.start.offset < f.position.start.offset && f.position.end.offset < a.end.offset))
        return !1;
      if (c) throw new Error(`Unexpected multiple indicator comments at ${de(f.position.start)}`);
      return (c = f), !0;
    });
  return Vr(a, l, En[n.chomping], o ? n.blockIndent : null, n.strValue, c);
}
function Jr(t, e) {
  return Kr(vt(t, e));
}
function Gr(t) {
  return { ...t, type: 'blockLiteral' };
}
function Hr(t, e) {
  return Gr(vt(t, e));
}
function Xr(t, e) {
  return De(e.transformRange(t.range), t.comment);
}
function zr(t, e, n) {
  return { ...b('directive', t), ...B(), name: e, parameters: n };
}
function Ye(t, e) {
  for (let n of t.props) {
    let r = e.text[n.origStart];
    switch (r) {
      case ae.Comment:
        e.comments.push(De(e.transformRange(n), e.text.slice(n.origStart + 1, n.origEnd)));
        break;
      default:
        throw new Error(`Unexpected leading character ${JSON.stringify(r)}`);
    }
  }
}
function Zr(t, e) {
  return Ye(t, e), zr(e.transformRange(t.range), t.name, t.parameters);
}
function es(t, e, n, r) {
  return { ...b('document', t), ...oe(r), children: [e, n] };
}
function V(t, e) {
  return { start: t, end: e };
}
function Sn(t) {
  return { start: t, end: t };
}
function F(t = []) {
  return { endComments: t };
}
function ts(t, e, n) {
  return { ...b('documentBody', t), ...F(n), children: e ? [e] : [] };
}
function q(t) {
  return t[t.length - 1];
}
function It(t, e) {
  let n = t.match(e);
  return n ? n.index : -1;
}
function ns(t, e, n) {
  let r = t.cstNode,
    {
      comments: s,
      endComments: i,
      documentTrailingComment: o,
      documentHeadTrailingComment: a,
    } = uo(r, e, n),
    c = e.transformNode(t.contents),
    { position: l, documentEndPoint: f } = po(r, c, e);
  return (
    e.comments.push(...s, ...i),
    {
      documentBody: ts(l, c, i),
      documentEndPoint: f,
      documentTrailingComment: o,
      documentHeadTrailingComment: a,
    }
  );
}
function uo(t, e, n) {
  let r = [],
    s = [],
    i = [],
    o = [],
    a = !1;
  for (let c = t.contents.length - 1; c >= 0; c--) {
    let l = t.contents[c];
    if (l.type === 'COMMENT') {
      let f = e.transformNode(l);
      n && n.line === f.position.start.line
        ? o.unshift(f)
        : a
          ? r.unshift(f)
          : f.position.start.offset >= t.valueRange.origEnd
            ? i.unshift(f)
            : r.unshift(f);
    } else a = !0;
  }
  if (i.length > 1)
    throw new Error(`Unexpected multiple document trailing comments at ${de(i[1].position.start)}`);
  if (o.length > 1)
    throw new Error(
      `Unexpected multiple documentHead trailing comments at ${de(o[1].position.start)}`
    );
  return {
    comments: r,
    endComments: s,
    documentTrailingComment: q(i) || null,
    documentHeadTrailingComment: q(o) || null,
  };
}
function po(t, e, n) {
  let r = It(n.text.slice(t.valueRange.origEnd), /^\.\.\./),
    s = r === -1 ? t.valueRange.origEnd : Math.max(0, t.valueRange.origEnd - 1);
  n.text[s - 1] === '\r' && s--;
  let i = n.transformRange({ origStart: e !== null ? e.position.start.offset : s, origEnd: s }),
    o = r === -1 ? i.end : n.transformOffset(t.valueRange.origEnd + 3);
  return { position: i, documentEndPoint: o };
}
function rs(t, e, n, r) {
  return { ...b('documentHead', t), ...F(n), ...oe(r), children: e };
}
function ss(t, e) {
  let n = t.cstNode,
    { directives: r, comments: s, endComments: i } = mo(n, e),
    { position: o, endMarkerPoint: a } = ho(n, r, e);
  return (
    e.comments.push(...s, ...i),
    {
      createDocumentHeadWithTrailingComment: l => (l && e.comments.push(l), rs(o, r, i, l)),
      documentHeadEndMarkerPoint: a,
    }
  );
}
function mo(t, e) {
  let n = [],
    r = [],
    s = [],
    i = !1;
  for (let o = t.directives.length - 1; o >= 0; o--) {
    let a = e.transformNode(t.directives[o]);
    a.type === 'comment' ? (i ? r.unshift(a) : s.unshift(a)) : ((i = !0), n.unshift(a));
  }
  return { directives: n, comments: r, endComments: s };
}
function ho(t, e, n) {
  let r = It(n.text.slice(0, t.valueRange.origStart), /---\s*$/);
  r > 0 && !/[\r\n]/.test(n.text[r - 1]) && (r = -1);
  let s =
    r === -1
      ? { origStart: t.valueRange.origStart, origEnd: t.valueRange.origStart }
      : { origStart: r, origEnd: r + 3 };
  return (
    e.length !== 0 && (s.origStart = e[0].position.start.offset),
    { position: n.transformRange(s), endMarkerPoint: r === -1 ? null : n.transformOffset(r) }
  );
}
function is(t, e) {
  let { createDocumentHeadWithTrailingComment: n, documentHeadEndMarkerPoint: r } = ss(t, e),
    {
      documentBody: s,
      documentEndPoint: i,
      documentTrailingComment: o,
      documentHeadTrailingComment: a,
    } = ns(t, e, r),
    c = n(a);
  return o && e.comments.push(o), es(V(c.position.start, i), c, s, o);
}
function Pt(t, e, n) {
  return { ...b('flowCollection', t), ...B(), ...F(), ...e, children: n };
}
function os(t, e, n) {
  return { ...Pt(t, e, n), type: 'flowMapping' };
}
function _t(t, e, n) {
  return { ...b('flowMappingItem', t), ...X(), children: [e, n] };
}
function ce(t, e) {
  let n = [];
  for (let r of t)
    r && 'type' in r && r.type === 'COMMENT' ? e.comments.push(e.transformNode(r)) : n.push(r);
  return n;
}
function xt(t) {
  let [e, n] = ['?', ':'].map(r => {
    let s = t.find(i => 'char' in i && i.char === r);
    return s ? { origStart: s.origOffset, origEnd: s.origOffset + 1 } : null;
  });
  return { additionalKeyRange: e, additionalValueRange: n };
}
function Rt(t, e) {
  let n = e;
  return r => t.slice(n, (n = r));
}
function Dt(t) {
  let e = [],
    n = Rt(t, 1),
    r = !1;
  for (let s = 1; s < t.length - 1; s++) {
    let i = t[s];
    if ('char' in i && i.char === ',') {
      e.push(n(s)), n(s + 1), (r = !1);
      continue;
    }
    r = !0;
  }
  return r && e.push(n(t.length - 1)), e;
}
function wn(t, e) {
  return { ...b('mappingKey', t), ...oe(), ...F(), children: e ? [e] : [] };
}
function bn(t, e) {
  return { ...b('mappingValue', t), ...B(), ...F(), children: e ? [e] : [] };
}
function $e(t, e, n, r, s) {
  let i = e.transformNode(t.key),
    o = e.transformNode(t.value),
    a =
      i || r
        ? wn(
            e.transformRange({
              origStart: r ? r.origStart : i.position.start.offset,
              origEnd: i ? i.position.end.offset : r.origStart + 1,
            }),
            i
          )
        : null,
    c =
      o || s
        ? bn(
            e.transformRange({
              origStart: s ? s.origStart : o.position.start.offset,
              origEnd: o ? o.position.end.offset : s.origStart + 1,
            }),
            o
          )
        : null;
  return n(
    V(a ? a.position.start : c.position.start, c ? c.position.end : a.position.end),
    a || wn(Sn(c.position.start), null),
    c || bn(Sn(a.position.end), null)
  );
}
function as(t, e) {
  let n = ce(t.cstNode.items, e),
    r = Dt(n),
    s = t.items.map((a, c) => {
      let l = r[c],
        { additionalKeyRange: f, additionalValueRange: m } = xt(l);
      return $e(a, e, _t, f, m);
    }),
    i = n[0],
    o = q(n);
  return os(
    e.transformRange({ origStart: i.origOffset, origEnd: o.origOffset + 1 }),
    e.transformContent(t),
    s
  );
}
function cs(t, e, n) {
  return { ...Pt(t, e, n), type: 'flowSequence' };
}
function ls(t, e) {
  return { ...b('flowSequenceItem', t), children: [e] };
}
function fs(t, e) {
  let n = ce(t.cstNode.items, e),
    r = Dt(n),
    s = t.items.map((a, c) => {
      if (a.type !== 'PAIR') {
        let l = e.transformNode(a);
        return ls(V(l.position.start, l.position.end), l);
      } else {
        let l = r[c],
          { additionalKeyRange: f, additionalValueRange: m } = xt(l);
        return $e(a, e, _t, f, m);
      }
    }),
    i = n[0],
    o = q(n);
  return cs(
    e.transformRange({ origStart: i.origOffset, origEnd: o.origOffset + 1 }),
    e.transformContent(t),
    s
  );
}
function us(t, e, n) {
  return { ...b('mapping', t), ...X(), ...e, children: n };
}
function ps(t, e, n) {
  return { ...b('mappingItem', t), ...X(), children: [e, n] };
}
function ms(t, e) {
  let n = t.cstNode;
  n.items.filter(o => o.type === 'MAP_KEY' || o.type === 'MAP_VALUE').forEach(o => Ye(o, e));
  let r = ce(n.items, e),
    s = go(r),
    i = t.items.map((o, a) => {
      let c = s[a],
        [l, f] =
          c[0].type === 'MAP_VALUE'
            ? [null, c[0].range]
            : [c[0].range, c.length === 1 ? null : c[1].range];
      return $e(o, e, ps, l, f);
    });
  return us(V(i[0].position.start, q(i).position.end), e.transformContent(t), i);
}
function go(t) {
  let e = [],
    n = Rt(t, 0),
    r = !1;
  for (let s = 0; s < t.length; s++) {
    if (t[s].type === 'MAP_VALUE') {
      e.push(n(s + 1)), (r = !1);
      continue;
    }
    r && e.push(n(s)), (r = !0);
  }
  return r && e.push(n(1 / 0)), e;
}
function hs(t, e, n) {
  return { ...b('plain', t), ...B(), ...e, value: n };
}
function gs(t, e, n) {
  for (let r = e; r >= 0; r--) if (n.test(t[r])) return r;
  return -1;
}
function ds(t, e) {
  let n = t.cstNode;
  return hs(
    e.transformRange({
      origStart: n.valueRange.origStart,
      origEnd: gs(e.text, n.valueRange.origEnd - 1, /\S/) + 1,
    }),
    e.transformContent(t),
    n.strValue
  );
}
function ys(t) {
  return { ...t, type: 'quoteDouble' };
}
function Es(t, e, n) {
  return { ...b('quoteValue', t), ...e, ...B(), value: n };
}
function Yt(t, e) {
  let n = t.cstNode;
  return Es(e.transformRange(n.valueRange), e.transformContent(t), n.strValue);
}
function Ss(t, e) {
  return ys(Yt(t, e));
}
function ws(t) {
  return { ...t, type: 'quoteSingle' };
}
function bs(t, e) {
  return ws(Yt(t, e));
}
function Ns(t, e, n) {
  return { ...b('sequence', t), ...X(), ...F(), ...e, children: n };
}
function Os(t, e) {
  return { ...b('sequenceItem', t), ...B(), ...F(), children: e ? [e] : [] };
}
function Ls(t, e) {
  let r = ce(t.cstNode.items, e).map((s, i) => {
    Ye(s, e);
    let o = e.transformNode(t.items[i]);
    return Os(
      V(
        e.transformOffset(s.valueRange.origStart),
        o === null ? e.transformOffset(s.valueRange.origStart + 1) : o.position.end
      ),
      o
    );
  });
  return Ns(V(r[0].position.start, q(r).position.end), e.transformContent(t), r);
}
function As(t, e) {
  if (t === null || (t.type === void 0 && t.value === null)) return null;
  switch (t.type) {
    case 'ALIAS':
      return Ur(t, e);
    case 'BLOCK_FOLDED':
      return Jr(t, e);
    case 'BLOCK_LITERAL':
      return Hr(t, e);
    case 'COMMENT':
      return Xr(t, e);
    case 'DIRECTIVE':
      return Zr(t, e);
    case 'DOCUMENT':
      return is(t, e);
    case 'FLOW_MAP':
      return as(t, e);
    case 'FLOW_SEQ':
      return fs(t, e);
    case 'MAP':
      return ms(t, e);
    case 'PLAIN':
      return ds(t, e);
    case 'QUOTE_DOUBLE':
      return Ss(t, e);
    case 'QUOTE_SINGLE':
      return bs(t, e);
    case 'SEQ':
      return Ls(t, e);
    default:
      throw new Error(`Unexpected node type ${t.type}`);
  }
}
function Ts(t, e, n) {
  let r = new SyntaxError(t);
  return (r.name = 'YAMLSyntaxError'), (r.source = e), (r.position = n), r;
}
function Cs(t, e) {
  let n = t.source.range || t.source.valueRange;
  return Ts(t.message, e.text, e.transformRange(n));
}
function Ms(t, e, n) {
  return { offset: t, line: e, column: n };
}
function ks(t, e) {
  t < 0 ? (t = 0) : t > e.text.length && (t = e.text.length);
  let n = e.locator.locationForIndex(t);
  return Ms(t, n.line + 1, n.column + 1);
}
function vs(t, e) {
  return V(e.transformOffset(t.origStart), e.transformOffset(t.origEnd));
}
function Is(t) {
  if (!t.setOrigRanges()) {
    let e = n => {
      if (yo(n)) return (n.origStart = n.start), (n.origEnd = n.end), !0;
      if (Eo(n)) return (n.origOffset = n.offset), !0;
    };
    t.forEach(n => Nn(n, e));
  }
}
function Nn(t, e) {
  if (!(!t || typeof t != 'object') && e(t) !== !0)
    for (let n of Object.keys(t)) {
      if (n === 'context' || n === 'error') continue;
      let r = t[n];
      Array.isArray(r) ? r.forEach(s => Nn(s, e)) : Nn(r, e);
    }
}
function yo(t) {
  return typeof t.start == 'number';
}
function Eo(t) {
  return typeof t.offset == 'number';
}
function On(t) {
  if ('children' in t) {
    if (t.children.length === 1) {
      let e = t.children[0];
      if (e.type === 'plain' && e.tag === null && e.anchor === null && e.value === '')
        return t.children.splice(0, 1), t;
    }
    t.children.forEach(On);
  }
  return t;
}
function Ln(t, e, n, r) {
  let s = e(t);
  return i => {
    r(s, i) && n(t, (s = i));
  };
}
function An(t) {
  if (t === null || !('children' in t)) return;
  let e = t.children;
  if ((e.forEach(An), t.type === 'document')) {
    let [i, o] = t.children;
    i.position.start.offset === i.position.end.offset
      ? (i.position.start = i.position.end = o.position.start)
      : o.position.start.offset === o.position.end.offset &&
        (o.position.start = o.position.end = i.position.end);
  }
  let n = Ln(t.position, So, wo, Oo),
    r = Ln(t.position, bo, No, Lo);
  'endComments' in t &&
    t.endComments.length !== 0 &&
    (n(t.endComments[0].position.start), r(q(t.endComments).position.end));
  let s = e.filter(i => i !== null);
  if (s.length !== 0) {
    let i = s[0],
      o = q(s);
    n(i.position.start),
      r(o.position.end),
      'leadingComments' in i &&
        i.leadingComments.length !== 0 &&
        n(i.leadingComments[0].position.start),
      'tag' in i && i.tag && n(i.tag.position.start),
      'anchor' in i && i.anchor && n(i.anchor.position.start),
      'trailingComment' in o && o.trailingComment && r(o.trailingComment.position.end);
  }
}
function So(t) {
  return t.start;
}
function wo(t, e) {
  t.start = e;
}
function bo(t) {
  return t.end;
}
function No(t, e) {
  t.end = e;
}
function Oo(t, e) {
  return e.offset < t.offset;
}
function Lo(t, e) {
  return e.offset > t.offset;
}
var wi = sr(Ei(), 1);
var G = sr(Si(), 1),
  Km = G.default.findPair,
  Vm = G.default.toJSON,
  Wm = G.default.parseMap,
  jm = G.default.parseSeq,
  Qm = G.default.stringifyNumber,
  Jm = G.default.stringifyString,
  Gm = G.default.Type,
  Va = G.default.YAMLError,
  Hm = G.default.YAMLReferenceError,
  er = G.default.YAMLSemanticError,
  Wa = G.default.YAMLSyntaxError,
  Xm = G.default.YAMLWarning;
var { Document: bi, parseCST: Ni } = wi.default;
function Oi(t) {
  let e = Ni(t);
  Is(e);
  let n = e.map(a => new bi({ merge: !1, keepCstNodes: !0 }).parse(a)),
    r = new Dr(t),
    s = [],
    i = {
      text: t,
      locator: r,
      comments: s,
      transformOffset: a => ks(a, i),
      transformRange: a => vs(a, i),
      transformNode: a => As(a, i),
      transformContent: a => kt(a, i),
    };
  for (let a of n)
    for (let c of a.errors)
      if (!(c instanceof er && c.message === 'Map keys must be unique; "<<" is repeated'))
        throw Cs(c, i);
  n.forEach(a => ct(a.cstNode));
  let o = Fr(i.transformRange({ origStart: 0, origEnd: i.text.length }), n.map(i.transformNode), s);
  return Yr(o), An(o), On(o), o;
}
function Qa(t, e) {
  let n = new SyntaxError(t + ' (' + e.loc.start.line + ':' + e.loc.start.column + ')');
  return Object.assign(n, e);
}
var Li = Qa;
function Ja(t) {
  try {
    let e = Oi(t);
    return delete e.comments, e;
  } catch (e) {
    throw e != null && e.position ? Li(e.message, { loc: e.position, cause: e }) : e;
  }
}
var Ga = { astFormat: 'yaml', parse: Ja, hasPragma: Sr, locStart: Pe, locEnd: yr };
var Ha = { yaml: Pr };
var Oh = nr;
export { Oh as default, _r as languages, xr as options, tr as parsers, Ha as printers };
