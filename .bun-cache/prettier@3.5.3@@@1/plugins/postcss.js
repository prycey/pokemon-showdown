(function (f) {
  function e() {
    var i = f();
    return i.default || i;
  }
  if (typeof exports == 'object' && typeof module == 'object') module.exports = e();
  else if (typeof define == 'function' && define.amd) define(e);
  else {
    var t =
      typeof globalThis < 'u'
        ? globalThis
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : this || {};
    (t.prettierPlugins = t.prettierPlugins || {}), (t.prettierPlugins.postcss = e());
  }
})(function () {
  'use strict';
  var hl = Object.create;
  var Tt = Object.defineProperty;
  var dl = Object.getOwnPropertyDescriptor;
  var ml = Object.getOwnPropertyNames;
  var yl = Object.getPrototypeOf,
    gl = Object.prototype.hasOwnProperty;
  var g = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
    Zs = (t, e) => {
      for (var s in e) Tt(t, s, { get: e[s], enumerable: !0 });
    },
    en = (t, e, s, r) => {
      if ((e && typeof e == 'object') || typeof e == 'function')
        for (let n of ml(e))
          !gl.call(t, n) &&
            n !== s &&
            Tt(t, n, { get: () => e[n], enumerable: !(r = dl(e, n)) || r.enumerable });
      return t;
    };
  var xe = (t, e, s) => (
      (s = t != null ? hl(yl(t)) : {}),
      en(e || !t || !t.__esModule ? Tt(s, 'default', { value: t, enumerable: !0 }) : s, t)
    ),
    wl = t => en(Tt({}, '__esModule', { value: !0 }), t);
  var bi = g((bv, ss) => {
    var _ = String,
      xi = function () {
        return {
          isColorSupported: !1,
          reset: _,
          bold: _,
          dim: _,
          italic: _,
          underline: _,
          inverse: _,
          hidden: _,
          strikethrough: _,
          black: _,
          red: _,
          green: _,
          yellow: _,
          blue: _,
          magenta: _,
          cyan: _,
          white: _,
          gray: _,
          bgBlack: _,
          bgRed: _,
          bgGreen: _,
          bgYellow: _,
          bgBlue: _,
          bgMagenta: _,
          bgCyan: _,
          bgWhite: _,
          blackBright: _,
          redBright: _,
          greenBright: _,
          yellowBright: _,
          blueBright: _,
          magentaBright: _,
          cyanBright: _,
          whiteBright: _,
          bgBlackBright: _,
          bgRedBright: _,
          bgGreenBright: _,
          bgYellowBright: _,
          bgBlueBright: _,
          bgMagentaBright: _,
          bgCyanBright: _,
          bgWhiteBright: _,
        };
      };
    ss.exports = xi();
    ss.exports.createColors = xi;
  });
  var ns = g(() => {});
  var Yt = g((kv, ki) => {
    'use strict';
    var _i = bi(),
      Ei = ns(),
      ot = class t extends Error {
        constructor(e, s, r, n, i, o) {
          super(e),
            (this.name = 'CssSyntaxError'),
            (this.reason = e),
            i && (this.file = i),
            n && (this.source = n),
            o && (this.plugin = o),
            typeof s < 'u' &&
              typeof r < 'u' &&
              (typeof s == 'number'
                ? ((this.line = s), (this.column = r))
                : ((this.line = s.line),
                  (this.column = s.column),
                  (this.endLine = r.line),
                  (this.endColumn = r.column))),
            this.setMessage(),
            Error.captureStackTrace && Error.captureStackTrace(this, t);
        }
        setMessage() {
          (this.message = this.plugin ? this.plugin + ': ' : ''),
            (this.message += this.file ? this.file : '<css input>'),
            typeof this.line < 'u' && (this.message += ':' + this.line + ':' + this.column),
            (this.message += ': ' + this.reason);
        }
        showSourceCode(e) {
          if (!this.source) return '';
          let s = this.source;
          e == null && (e = _i.isColorSupported);
          let r = f => f,
            n = f => f,
            i = f => f;
          if (e) {
            let { bold: f, gray: p, red: l } = _i.createColors(!0);
            (n = y => f(l(y))), (r = y => p(y)), Ei && (i = y => Ei(y));
          }
          let o = s.split(/\r?\n/),
            u = Math.max(this.line - 3, 0),
            a = Math.min(this.line + 2, o.length),
            c = String(a).length;
          return o.slice(u, a).map((f, p) => {
            let l = u + 1 + p,
              y = ' ' + (' ' + l).slice(-c) + ' | ';
            if (l === this.line) {
              if (f.length > 160) {
                let h = 20,
                  d = Math.max(0, this.column - h),
                  m = Math.max(this.column + h, this.endColumn + h),
                  b = f.slice(d, m),
                  w =
                    r(y.replace(/\d/g, ' ')) +
                    f.slice(0, Math.min(this.column - 1, h - 1)).replace(/[^\t]/g, ' ');
                return (
                  n('>') +
                  r(y) +
                  i(b) +
                  `
 ` +
                  w +
                  n('^')
                );
              }
              let x = r(y.replace(/\d/g, ' ')) + f.slice(0, this.column - 1).replace(/[^\t]/g, ' ');
              return (
                n('>') +
                r(y) +
                i(f) +
                `
 ` +
                x +
                n('^')
              );
            }
            return ' ' + r(y) + i(f);
          }).join(`
`);
        }
        toString() {
          let e = this.showSourceCode();
          return (
            e &&
              (e =
                `

` +
                e +
                `
`),
            this.name + ': ' + this.message + e
          );
        }
      };
    ki.exports = ot;
    ot.default = ot;
  });
  var Vt = g((Sv, Ti) => {
    'use strict';
    var Si = {
      after: `
`,
      beforeClose: `
`,
      beforeComment: `
`,
      beforeDecl: `
`,
      beforeOpen: ' ',
      beforeRule: `
`,
      colon: ': ',
      commentLeft: ' ',
      commentRight: ' ',
      emptyBody: '',
      indent: '    ',
      semicolon: !1,
    };
    function wc(t) {
      return t[0].toUpperCase() + t.slice(1);
    }
    var at = class {
      constructor(e) {
        this.builder = e;
      }
      atrule(e, s) {
        let r = '@' + e.name,
          n = e.params ? this.rawValue(e, 'params') : '';
        if ((typeof e.raws.afterName < 'u' ? (r += e.raws.afterName) : n && (r += ' '), e.nodes))
          this.block(e, r + n);
        else {
          let i = (e.raws.between || '') + (s ? ';' : '');
          this.builder(r + n + i, e);
        }
      }
      beforeAfter(e, s) {
        let r;
        e.type === 'decl'
          ? (r = this.raw(e, null, 'beforeDecl'))
          : e.type === 'comment'
            ? (r = this.raw(e, null, 'beforeComment'))
            : s === 'before'
              ? (r = this.raw(e, null, 'beforeRule'))
              : (r = this.raw(e, null, 'beforeClose'));
        let n = e.parent,
          i = 0;
        for (; n && n.type !== 'root'; ) (i += 1), (n = n.parent);
        if (
          r.includes(`
`)
        ) {
          let o = this.raw(e, null, 'indent');
          if (o.length) for (let u = 0; u < i; u++) r += o;
        }
        return r;
      }
      block(e, s) {
        let r = this.raw(e, 'between', 'beforeOpen');
        this.builder(s + r + '{', e, 'start');
        let n;
        e.nodes && e.nodes.length
          ? (this.body(e), (n = this.raw(e, 'after')))
          : (n = this.raw(e, 'after', 'emptyBody')),
          n && this.builder(n),
          this.builder('}', e, 'end');
      }
      body(e) {
        let s = e.nodes.length - 1;
        for (; s > 0 && e.nodes[s].type === 'comment'; ) s -= 1;
        let r = this.raw(e, 'semicolon');
        for (let n = 0; n < e.nodes.length; n++) {
          let i = e.nodes[n],
            o = this.raw(i, 'before');
          o && this.builder(o), this.stringify(i, s !== n || r);
        }
      }
      comment(e) {
        let s = this.raw(e, 'left', 'commentLeft'),
          r = this.raw(e, 'right', 'commentRight');
        this.builder('/*' + s + e.text + r + '*/', e);
      }
      decl(e, s) {
        let r = this.raw(e, 'between', 'colon'),
          n = e.prop + r + this.rawValue(e, 'value');
        e.important && (n += e.raws.important || ' !important'),
          s && (n += ';'),
          this.builder(n, e);
      }
      document(e) {
        this.body(e);
      }
      raw(e, s, r) {
        let n;
        if ((r || (r = s), s && ((n = e.raws[s]), typeof n < 'u'))) return n;
        let i = e.parent;
        if (
          r === 'before' &&
          (!i || (i.type === 'root' && i.first === e) || (i && i.type === 'document'))
        )
          return '';
        if (!i) return Si[r];
        let o = e.root();
        if ((o.rawCache || (o.rawCache = {}), typeof o.rawCache[r] < 'u')) return o.rawCache[r];
        if (r === 'before' || r === 'after') return this.beforeAfter(e, r);
        {
          let u = 'raw' + wc(r);
          this[u]
            ? (n = this[u](o, e))
            : o.walk(a => {
                if (((n = a.raws[s]), typeof n < 'u')) return !1;
              });
        }
        return typeof n > 'u' && (n = Si[r]), (o.rawCache[r] = n), n;
      }
      rawBeforeClose(e) {
        let s;
        return (
          e.walk(r => {
            if (r.nodes && r.nodes.length > 0 && typeof r.raws.after < 'u')
              return (
                (s = r.raws.after),
                s.includes(`
`) && (s = s.replace(/[^\n]+$/, '')),
                !1
              );
          }),
          s && (s = s.replace(/\S/g, '')),
          s
        );
      }
      rawBeforeComment(e, s) {
        let r;
        return (
          e.walkComments(n => {
            if (typeof n.raws.before < 'u')
              return (
                (r = n.raws.before),
                r.includes(`
`) && (r = r.replace(/[^\n]+$/, '')),
                !1
              );
          }),
          typeof r > 'u' ? (r = this.raw(s, null, 'beforeDecl')) : r && (r = r.replace(/\S/g, '')),
          r
        );
      }
      rawBeforeDecl(e, s) {
        let r;
        return (
          e.walkDecls(n => {
            if (typeof n.raws.before < 'u')
              return (
                (r = n.raws.before),
                r.includes(`
`) && (r = r.replace(/[^\n]+$/, '')),
                !1
              );
          }),
          typeof r > 'u' ? (r = this.raw(s, null, 'beforeRule')) : r && (r = r.replace(/\S/g, '')),
          r
        );
      }
      rawBeforeOpen(e) {
        let s;
        return (
          e.walk(r => {
            if (r.type !== 'decl' && ((s = r.raws.between), typeof s < 'u')) return !1;
          }),
          s
        );
      }
      rawBeforeRule(e) {
        let s;
        return (
          e.walk(r => {
            if (r.nodes && (r.parent !== e || e.first !== r) && typeof r.raws.before < 'u')
              return (
                (s = r.raws.before),
                s.includes(`
`) && (s = s.replace(/[^\n]+$/, '')),
                !1
              );
          }),
          s && (s = s.replace(/\S/g, '')),
          s
        );
      }
      rawColon(e) {
        let s;
        return (
          e.walkDecls(r => {
            if (typeof r.raws.between < 'u') return (s = r.raws.between.replace(/[^\s:]/g, '')), !1;
          }),
          s
        );
      }
      rawEmptyBody(e) {
        let s;
        return (
          e.walk(r => {
            if (r.nodes && r.nodes.length === 0 && ((s = r.raws.after), typeof s < 'u')) return !1;
          }),
          s
        );
      }
      rawIndent(e) {
        if (e.raws.indent) return e.raws.indent;
        let s;
        return (
          e.walk(r => {
            let n = r.parent;
            if (n && n !== e && n.parent && n.parent === e && typeof r.raws.before < 'u') {
              let i = r.raws.before.split(`
`);
              return (s = i[i.length - 1]), (s = s.replace(/\S/g, '')), !1;
            }
          }),
          s
        );
      }
      rawSemicolon(e) {
        let s;
        return (
          e.walk(r => {
            if (
              r.nodes &&
              r.nodes.length &&
              r.last.type === 'decl' &&
              ((s = r.raws.semicolon), typeof s < 'u')
            )
              return !1;
          }),
          s
        );
      }
      rawValue(e, s) {
        let r = e[s],
          n = e.raws[s];
        return n && n.value === r ? n.raw : r;
      }
      root(e) {
        this.body(e), e.raws.after && this.builder(e.raws.after);
      }
      rule(e) {
        this.block(e, this.rawValue(e, 'selector')),
          e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, 'end');
      }
      stringify(e, s) {
        if (!this[e.type])
          throw new Error(
            'Unknown AST node type ' + e.type + '. Maybe you need to change PostCSS stringifier.'
          );
        this[e.type](e, s);
      }
    };
    Ti.exports = at;
    at.default = at;
  });
  var ut = g((Tv, Ci) => {
    'use strict';
    var vc = Vt();
    function is(t, e) {
      new vc(e).stringify(t);
    }
    Ci.exports = is;
    is.default = is;
  });
  var zt = g((Cv, os) => {
    'use strict';
    os.exports.isClean = Symbol('isClean');
    os.exports.my = Symbol('my');
  });
  var pt = g((Ov, Oi) => {
    'use strict';
    var xc = Yt(),
      bc = Vt(),
      _c = ut(),
      { isClean: lt, my: Ec } = zt();
    function as(t, e) {
      let s = new t.constructor();
      for (let r in t) {
        if (!Object.prototype.hasOwnProperty.call(t, r) || r === 'proxyCache') continue;
        let n = t[r],
          i = typeof n;
        r === 'parent' && i === 'object'
          ? e && (s[r] = e)
          : r === 'source'
            ? (s[r] = n)
            : Array.isArray(n)
              ? (s[r] = n.map(o => as(o, s)))
              : (i === 'object' && n !== null && (n = as(n)), (s[r] = n));
      }
      return s;
    }
    function ct(t, e) {
      if (e && typeof e.offset < 'u') return e.offset;
      let s = 1,
        r = 1,
        n = 0;
      for (let i = 0; i < t.length; i++) {
        if (r === e.line && s === e.column) {
          n = i;
          break;
        }
        t[i] ===
        `
`
          ? ((s = 1), (r += 1))
          : (s += 1);
      }
      return n;
    }
    var ft = class {
      get proxyOf() {
        return this;
      }
      constructor(e = {}) {
        (this.raws = {}), (this[lt] = !1), (this[Ec] = !0);
        for (let s in e)
          if (s === 'nodes') {
            this.nodes = [];
            for (let r of e[s])
              typeof r.clone == 'function' ? this.append(r.clone()) : this.append(r);
          } else this[s] = e[s];
      }
      addToError(e) {
        if (((e.postcssNode = this), e.stack && this.source && /\n\s{4}at /.test(e.stack))) {
          let s = this.source;
          e.stack = e.stack.replace(
            /\n\s{4}at /,
            `$&${s.input.from}:${s.start.line}:${s.start.column}$&`
          );
        }
        return e;
      }
      after(e) {
        return this.parent.insertAfter(this, e), this;
      }
      assign(e = {}) {
        for (let s in e) this[s] = e[s];
        return this;
      }
      before(e) {
        return this.parent.insertBefore(this, e), this;
      }
      cleanRaws(e) {
        delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
      }
      clone(e = {}) {
        let s = as(this);
        for (let r in e) s[r] = e[r];
        return s;
      }
      cloneAfter(e = {}) {
        let s = this.clone(e);
        return this.parent.insertAfter(this, s), s;
      }
      cloneBefore(e = {}) {
        let s = this.clone(e);
        return this.parent.insertBefore(this, s), s;
      }
      error(e, s = {}) {
        if (this.source) {
          let { end: r, start: n } = this.rangeBy(s);
          return this.source.input.error(
            e,
            { column: n.column, line: n.line },
            { column: r.column, line: r.line },
            s
          );
        }
        return new xc(e);
      }
      getProxyProcessor() {
        return {
          get(e, s) {
            return s === 'proxyOf' ? e : s === 'root' ? () => e.root().toProxy() : e[s];
          },
          set(e, s, r) {
            return (
              e[s] === r ||
                ((e[s] = r),
                (s === 'prop' ||
                  s === 'value' ||
                  s === 'name' ||
                  s === 'params' ||
                  s === 'important' ||
                  s === 'text') &&
                  e.markDirty()),
              !0
            );
          },
        };
      }
      markClean() {
        this[lt] = !0;
      }
      markDirty() {
        if (this[lt]) {
          this[lt] = !1;
          let e = this;
          for (; (e = e.parent); ) e[lt] = !1;
        }
      }
      next() {
        if (!this.parent) return;
        let e = this.parent.index(this);
        return this.parent.nodes[e + 1];
      }
      positionBy(e) {
        let s = this.source.start;
        if (e.index) s = this.positionInside(e.index);
        else if (e.word) {
          let r =
              'document' in this.source.input ? this.source.input.document : this.source.input.css,
            i = r.slice(ct(r, this.source.start), ct(r, this.source.end)).indexOf(e.word);
          i !== -1 && (s = this.positionInside(i));
        }
        return s;
      }
      positionInside(e) {
        let s = this.source.start.column,
          r = this.source.start.line,
          n = 'document' in this.source.input ? this.source.input.document : this.source.input.css,
          i = ct(n, this.source.start),
          o = i + e;
        for (let u = i; u < o; u++)
          n[u] ===
          `
`
            ? ((s = 1), (r += 1))
            : (s += 1);
        return { column: s, line: r };
      }
      prev() {
        if (!this.parent) return;
        let e = this.parent.index(this);
        return this.parent.nodes[e - 1];
      }
      rangeBy(e) {
        let s = { column: this.source.start.column, line: this.source.start.line },
          r = this.source.end
            ? { column: this.source.end.column + 1, line: this.source.end.line }
            : { column: s.column + 1, line: s.line };
        if (e.word) {
          let n =
              'document' in this.source.input ? this.source.input.document : this.source.input.css,
            o = n.slice(ct(n, this.source.start), ct(n, this.source.end)).indexOf(e.word);
          o !== -1 && ((s = this.positionInside(o)), (r = this.positionInside(o + e.word.length)));
        } else
          e.start
            ? (s = { column: e.start.column, line: e.start.line })
            : e.index && (s = this.positionInside(e.index)),
            e.end
              ? (r = { column: e.end.column, line: e.end.line })
              : typeof e.endIndex == 'number'
                ? (r = this.positionInside(e.endIndex))
                : e.index && (r = this.positionInside(e.index + 1));
        return (
          (r.line < s.line || (r.line === s.line && r.column <= s.column)) &&
            (r = { column: s.column + 1, line: s.line }),
          { end: r, start: s }
        );
      }
      raw(e, s) {
        return new bc().raw(this, e, s);
      }
      remove() {
        return this.parent && this.parent.removeChild(this), (this.parent = void 0), this;
      }
      replaceWith(...e) {
        if (this.parent) {
          let s = this,
            r = !1;
          for (let n of e)
            n === this
              ? (r = !0)
              : r
                ? (this.parent.insertAfter(s, n), (s = n))
                : this.parent.insertBefore(s, n);
          r || this.remove();
        }
        return this;
      }
      root() {
        let e = this;
        for (; e.parent && e.parent.type !== 'document'; ) e = e.parent;
        return e;
      }
      toJSON(e, s) {
        let r = {},
          n = s == null;
        s = s || new Map();
        let i = 0;
        for (let o in this) {
          if (
            !Object.prototype.hasOwnProperty.call(this, o) ||
            o === 'parent' ||
            o === 'proxyCache'
          )
            continue;
          let u = this[o];
          if (Array.isArray(u))
            r[o] = u.map(a => (typeof a == 'object' && a.toJSON ? a.toJSON(null, s) : a));
          else if (typeof u == 'object' && u.toJSON) r[o] = u.toJSON(null, s);
          else if (o === 'source') {
            let a = s.get(u.input);
            a == null && ((a = i), s.set(u.input, i), i++),
              (r[o] = { end: u.end, inputId: a, start: u.start });
          } else r[o] = u;
        }
        return n && (r.inputs = [...s.keys()].map(o => o.toJSON())), r;
      }
      toProxy() {
        return (
          this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())),
          this.proxyCache
        );
      }
      toString(e = _c) {
        e.stringify && (e = e.stringify);
        let s = '';
        return (
          e(this, r => {
            s += r;
          }),
          s
        );
      }
      warn(e, s, r) {
        let n = { node: this };
        for (let i in r) n[i] = r[i];
        return e.warn(s, n);
      }
    };
    Oi.exports = ft;
    ft.default = ft;
  });
  var Re = g((Av, Ai) => {
    'use strict';
    var kc = pt(),
      ht = class extends kc {
        constructor(e) {
          super(e), (this.type = 'comment');
        }
      };
    Ai.exports = ht;
    ht.default = ht;
  });
  var mt = g((Nv, Ni) => {
    'use strict';
    var Sc = pt(),
      dt = class extends Sc {
        get variable() {
          return this.prop.startsWith('--') || this.prop[0] === '$';
        }
        constructor(e) {
          e &&
            typeof e.value < 'u' &&
            typeof e.value != 'string' &&
            (e = { ...e, value: String(e.value) }),
            super(e),
            (this.type = 'decl');
        }
      };
    Ni.exports = dt;
    dt.default = dt;
  });
  var le = g((Pv, Ui) => {
    'use strict';
    var Pi = Re(),
      Ri = mt(),
      Tc = pt(),
      { isClean: Ii, my: qi } = zt(),
      us,
      Li,
      Di,
      ls;
    function Bi(t) {
      return t.map(e => (e.nodes && (e.nodes = Bi(e.nodes)), delete e.source, e));
    }
    function Mi(t) {
      if (((t[Ii] = !1), t.proxyOf.nodes)) for (let e of t.proxyOf.nodes) Mi(e);
    }
    var z = class t extends Tc {
      get first() {
        if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
      }
      get last() {
        if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
      }
      append(...e) {
        for (let s of e) {
          let r = this.normalize(s, this.last);
          for (let n of r) this.proxyOf.nodes.push(n);
        }
        return this.markDirty(), this;
      }
      cleanRaws(e) {
        if ((super.cleanRaws(e), this.nodes)) for (let s of this.nodes) s.cleanRaws(e);
      }
      each(e) {
        if (!this.proxyOf.nodes) return;
        let s = this.getIterator(),
          r,
          n;
        for (
          ;
          this.indexes[s] < this.proxyOf.nodes.length &&
          ((r = this.indexes[s]), (n = e(this.proxyOf.nodes[r], r)), n !== !1);

        )
          this.indexes[s] += 1;
        return delete this.indexes[s], n;
      }
      every(e) {
        return this.nodes.every(e);
      }
      getIterator() {
        this.lastEach || (this.lastEach = 0),
          this.indexes || (this.indexes = {}),
          (this.lastEach += 1);
        let e = this.lastEach;
        return (this.indexes[e] = 0), e;
      }
      getProxyProcessor() {
        return {
          get(e, s) {
            return s === 'proxyOf'
              ? e
              : e[s]
                ? s === 'each' || (typeof s == 'string' && s.startsWith('walk'))
                  ? (...r) =>
                      e[s](
                        ...r.map(n => (typeof n == 'function' ? (i, o) => n(i.toProxy(), o) : n))
                      )
                  : s === 'every' || s === 'some'
                    ? r => e[s]((n, ...i) => r(n.toProxy(), ...i))
                    : s === 'root'
                      ? () => e.root().toProxy()
                      : s === 'nodes'
                        ? e.nodes.map(r => r.toProxy())
                        : s === 'first' || s === 'last'
                          ? e[s].toProxy()
                          : e[s]
                : e[s];
          },
          set(e, s, r) {
            return (
              e[s] === r ||
                ((e[s] = r), (s === 'name' || s === 'params' || s === 'selector') && e.markDirty()),
              !0
            );
          },
        };
      }
      index(e) {
        return typeof e == 'number'
          ? e
          : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
      }
      insertAfter(e, s) {
        let r = this.index(e),
          n = this.normalize(s, this.proxyOf.nodes[r]).reverse();
        r = this.index(e);
        for (let o of n) this.proxyOf.nodes.splice(r + 1, 0, o);
        let i;
        for (let o in this.indexes)
          (i = this.indexes[o]), r < i && (this.indexes[o] = i + n.length);
        return this.markDirty(), this;
      }
      insertBefore(e, s) {
        let r = this.index(e),
          n = r === 0 ? 'prepend' : !1,
          i = this.normalize(s, this.proxyOf.nodes[r], n).reverse();
        r = this.index(e);
        for (let u of i) this.proxyOf.nodes.splice(r, 0, u);
        let o;
        for (let u in this.indexes)
          (o = this.indexes[u]), r <= o && (this.indexes[u] = o + i.length);
        return this.markDirty(), this;
      }
      normalize(e, s) {
        if (typeof e == 'string') e = Bi(Li(e).nodes);
        else if (typeof e > 'u') e = [];
        else if (Array.isArray(e)) {
          e = e.slice(0);
          for (let n of e) n.parent && n.parent.removeChild(n, 'ignore');
        } else if (e.type === 'root' && this.type !== 'document') {
          e = e.nodes.slice(0);
          for (let n of e) n.parent && n.parent.removeChild(n, 'ignore');
        } else if (e.type) e = [e];
        else if (e.prop) {
          if (typeof e.value > 'u') throw new Error('Value field is missed in node creation');
          typeof e.value != 'string' && (e.value = String(e.value)), (e = [new Ri(e)]);
        } else if (e.selector || e.selectors) e = [new ls(e)];
        else if (e.name) e = [new us(e)];
        else if (e.text) e = [new Pi(e)];
        else throw new Error('Unknown node type in node creation');
        return e.map(
          n => (
            n[qi] || t.rebuild(n),
            (n = n.proxyOf),
            n.parent && n.parent.removeChild(n),
            n[Ii] && Mi(n),
            n.raws || (n.raws = {}),
            typeof n.raws.before > 'u' &&
              s &&
              typeof s.raws.before < 'u' &&
              (n.raws.before = s.raws.before.replace(/\S/g, '')),
            (n.parent = this.proxyOf),
            n
          )
        );
      }
      prepend(...e) {
        e = e.reverse();
        for (let s of e) {
          let r = this.normalize(s, this.first, 'prepend').reverse();
          for (let n of r) this.proxyOf.nodes.unshift(n);
          for (let n in this.indexes) this.indexes[n] = this.indexes[n] + r.length;
        }
        return this.markDirty(), this;
      }
      push(e) {
        return (e.parent = this), this.proxyOf.nodes.push(e), this;
      }
      removeAll() {
        for (let e of this.proxyOf.nodes) e.parent = void 0;
        return (this.proxyOf.nodes = []), this.markDirty(), this;
      }
      removeChild(e) {
        (e = this.index(e)),
          (this.proxyOf.nodes[e].parent = void 0),
          this.proxyOf.nodes.splice(e, 1);
        let s;
        for (let r in this.indexes) (s = this.indexes[r]), s >= e && (this.indexes[r] = s - 1);
        return this.markDirty(), this;
      }
      replaceValues(e, s, r) {
        return (
          r || ((r = s), (s = {})),
          this.walkDecls(n => {
            (s.props && !s.props.includes(n.prop)) ||
              (s.fast && !n.value.includes(s.fast)) ||
              (n.value = n.value.replace(e, r));
          }),
          this.markDirty(),
          this
        );
      }
      some(e) {
        return this.nodes.some(e);
      }
      walk(e) {
        return this.each((s, r) => {
          let n;
          try {
            n = e(s, r);
          } catch (i) {
            throw s.addToError(i);
          }
          return n !== !1 && s.walk && (n = s.walk(e)), n;
        });
      }
      walkAtRules(e, s) {
        return s
          ? e instanceof RegExp
            ? this.walk((r, n) => {
                if (r.type === 'atrule' && e.test(r.name)) return s(r, n);
              })
            : this.walk((r, n) => {
                if (r.type === 'atrule' && r.name === e) return s(r, n);
              })
          : ((s = e),
            this.walk((r, n) => {
              if (r.type === 'atrule') return s(r, n);
            }));
      }
      walkComments(e) {
        return this.walk((s, r) => {
          if (s.type === 'comment') return e(s, r);
        });
      }
      walkDecls(e, s) {
        return s
          ? e instanceof RegExp
            ? this.walk((r, n) => {
                if (r.type === 'decl' && e.test(r.prop)) return s(r, n);
              })
            : this.walk((r, n) => {
                if (r.type === 'decl' && r.prop === e) return s(r, n);
              })
          : ((s = e),
            this.walk((r, n) => {
              if (r.type === 'decl') return s(r, n);
            }));
      }
      walkRules(e, s) {
        return s
          ? e instanceof RegExp
            ? this.walk((r, n) => {
                if (r.type === 'rule' && e.test(r.selector)) return s(r, n);
              })
            : this.walk((r, n) => {
                if (r.type === 'rule' && r.selector === e) return s(r, n);
              })
          : ((s = e),
            this.walk((r, n) => {
              if (r.type === 'rule') return s(r, n);
            }));
      }
    };
    z.registerParse = t => {
      Li = t;
    };
    z.registerRule = t => {
      ls = t;
    };
    z.registerAtRule = t => {
      us = t;
    };
    z.registerRoot = t => {
      Di = t;
    };
    Ui.exports = z;
    z.default = z;
    z.rebuild = t => {
      t.type === 'atrule'
        ? Object.setPrototypeOf(t, us.prototype)
        : t.type === 'rule'
          ? Object.setPrototypeOf(t, ls.prototype)
          : t.type === 'decl'
            ? Object.setPrototypeOf(t, Ri.prototype)
            : t.type === 'comment'
              ? Object.setPrototypeOf(t, Pi.prototype)
              : t.type === 'root' && Object.setPrototypeOf(t, Di.prototype),
        (t[qi] = !0),
        t.nodes &&
          t.nodes.forEach(e => {
            z.rebuild(e);
          });
    };
  });
  var $i = g((Rv, Fi) => {
    var Cc = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict',
      Oc =
        (t, e = 21) =>
        (s = e) => {
          let r = '',
            n = s | 0;
          for (; n--; ) r += t[(Math.random() * t.length) | 0];
          return r;
        },
      Ac = (t = 21) => {
        let e = '',
          s = t | 0;
        for (; s--; ) e += Cc[(Math.random() * 64) | 0];
        return e;
      };
    Fi.exports = { nanoid: Ac, customAlphabet: Oc };
  });
  var Wi = g(() => {});
  var cs = g((Lv, Yi) => {
    Yi.exports = class {};
  });
  var qe = g((Bv, ji) => {
    'use strict';
    var { nanoid: Nc } = $i(),
      { isAbsolute: hs, resolve: ds } = {},
      { SourceMapConsumer: Pc, SourceMapGenerator: Rc } = Wi(),
      { fileURLToPath: Vi, pathToFileURL: Gt } = {},
      zi = Yt(),
      Ic = cs(),
      fs = ns(),
      ps = Symbol('fromOffsetCache'),
      qc = !!(Pc && Rc),
      Gi = !!(ds && hs),
      Ie = class {
        get from() {
          return this.file || this.id;
        }
        constructor(e, s = {}) {
          if (e === null || typeof e > 'u' || (typeof e == 'object' && !e.toString))
            throw new Error(`PostCSS received ${e} instead of CSS string`);
          if (
            ((this.css = e.toString()),
            this.css[0] === '\uFEFF' || this.css[0] === '\uFFFE'
              ? ((this.hasBOM = !0), (this.css = this.css.slice(1)))
              : (this.hasBOM = !1),
            (this.document = this.css),
            s.document && (this.document = s.document.toString()),
            s.from &&
              (!Gi || /^\w+:\/\//.test(s.from) || hs(s.from)
                ? (this.file = s.from)
                : (this.file = ds(s.from))),
            Gi && qc)
          ) {
            let r = new Ic(this.css, s);
            if (r.text) {
              this.map = r;
              let n = r.consumer().file;
              !this.file && n && (this.file = this.mapResolve(n));
            }
          }
          this.file || (this.id = '<input css ' + Nc(6) + '>'),
            this.map && (this.map.file = this.from);
        }
        error(e, s, r, n = {}) {
          let i, o, u;
          if (s && typeof s == 'object') {
            let c = s,
              f = r;
            if (typeof c.offset == 'number') {
              let p = this.fromOffset(c.offset);
              (s = p.line), (r = p.col);
            } else (s = c.line), (r = c.column);
            if (typeof f.offset == 'number') {
              let p = this.fromOffset(f.offset);
              (o = p.line), (i = p.col);
            } else (o = f.line), (i = f.column);
          } else if (!r) {
            let c = this.fromOffset(s);
            (s = c.line), (r = c.col);
          }
          let a = this.origin(s, r, o, i);
          return (
            a
              ? (u = new zi(
                  e,
                  a.endLine === void 0 ? a.line : { column: a.column, line: a.line },
                  a.endLine === void 0 ? a.column : { column: a.endColumn, line: a.endLine },
                  a.source,
                  a.file,
                  n.plugin
                ))
              : (u = new zi(
                  e,
                  o === void 0 ? s : { column: r, line: s },
                  o === void 0 ? r : { column: i, line: o },
                  this.css,
                  this.file,
                  n.plugin
                )),
            (u.input = { column: r, endColumn: i, endLine: o, line: s, source: this.css }),
            this.file &&
              (Gt && (u.input.url = Gt(this.file).toString()), (u.input.file = this.file)),
            u
          );
        }
        fromOffset(e) {
          let s, r;
          if (this[ps]) r = this[ps];
          else {
            let i = this.css.split(`
`);
            r = new Array(i.length);
            let o = 0;
            for (let u = 0, a = i.length; u < a; u++) (r[u] = o), (o += i[u].length + 1);
            this[ps] = r;
          }
          s = r[r.length - 1];
          let n = 0;
          if (e >= s) n = r.length - 1;
          else {
            let i = r.length - 2,
              o;
            for (; n < i; )
              if (((o = n + ((i - n) >> 1)), e < r[o])) i = o - 1;
              else if (e >= r[o + 1]) n = o + 1;
              else {
                n = o;
                break;
              }
          }
          return { col: e - r[n] + 1, line: n + 1 };
        }
        mapResolve(e) {
          return /^\w+:\/\//.test(e)
            ? e
            : ds(this.map.consumer().sourceRoot || this.map.root || '.', e);
        }
        origin(e, s, r, n) {
          if (!this.map) return !1;
          let i = this.map.consumer(),
            o = i.originalPositionFor({ column: s, line: e });
          if (!o.source) return !1;
          let u;
          typeof r == 'number' && (u = i.originalPositionFor({ column: n, line: r }));
          let a;
          hs(o.source)
            ? (a = Gt(o.source))
            : (a = new URL(o.source, this.map.consumer().sourceRoot || Gt(this.map.mapFile)));
          let c = {
            column: o.column,
            endColumn: u && u.column,
            endLine: u && u.line,
            line: o.line,
            url: a.toString(),
          };
          if (a.protocol === 'file:')
            if (Vi) c.file = Vi(a);
            else throw new Error('file: protocol is not available in this PostCSS build');
          let f = i.sourceContentFor(o.source);
          return f && (c.source = f), c;
        }
        toJSON() {
          let e = {};
          for (let s of ['hasBOM', 'css', 'file', 'id']) this[s] != null && (e[s] = this[s]);
          return (
            this.map &&
              ((e.map = { ...this.map }), e.map.consumerCache && (e.map.consumerCache = void 0)),
            e
          );
        }
      };
    ji.exports = Ie;
    Ie.default = Ie;
    fs && fs.registerInput && fs.registerInput(Ie);
  });
  var jt = g((Mv, Ki) => {
    'use strict';
    var Hi = le(),
      Le = class extends Hi {
        constructor(e) {
          super(e), (this.type = 'atrule');
        }
        append(...e) {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
        }
        prepend(...e) {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
        }
      };
    Ki.exports = Le;
    Le.default = Le;
    Hi.registerAtRule(Le);
  });
  var De = g((Uv, Zi) => {
    'use strict';
    var Qi = le(),
      Ji,
      Xi,
      ce = class extends Qi {
        constructor(e) {
          super(e), (this.type = 'root'), this.nodes || (this.nodes = []);
        }
        normalize(e, s, r) {
          let n = super.normalize(e);
          if (s) {
            if (r === 'prepend')
              this.nodes.length > 1
                ? (s.raws.before = this.nodes[1].raws.before)
                : delete s.raws.before;
            else if (this.first !== s) for (let i of n) i.raws.before = s.raws.before;
          }
          return n;
        }
        removeChild(e, s) {
          let r = this.index(e);
          return (
            !s &&
              r === 0 &&
              this.nodes.length > 1 &&
              (this.nodes[1].raws.before = this.nodes[r].raws.before),
            super.removeChild(e)
          );
        }
        toResult(e = {}) {
          return new Ji(new Xi(), this, e).stringify();
        }
      };
    ce.registerLazyResult = t => {
      Ji = t;
    };
    ce.registerProcessor = t => {
      Xi = t;
    };
    Zi.exports = ce;
    ce.default = ce;
    Qi.registerRoot(ce);
  });
  var ms = g((Fv, eo) => {
    'use strict';
    var yt = {
      comma(t) {
        return yt.split(t, [','], !0);
      },
      space(t) {
        let e = [
          ' ',
          `
`,
          '	',
        ];
        return yt.split(t, e);
      },
      split(t, e, s) {
        let r = [],
          n = '',
          i = !1,
          o = 0,
          u = !1,
          a = '',
          c = !1;
        for (let f of t)
          c
            ? (c = !1)
            : f === '\\'
              ? (c = !0)
              : u
                ? f === a && (u = !1)
                : f === '"' || f === "'"
                  ? ((u = !0), (a = f))
                  : f === '('
                    ? (o += 1)
                    : f === ')'
                      ? o > 0 && (o -= 1)
                      : o === 0 && e.includes(f) && (i = !0),
            i ? (n !== '' && r.push(n.trim()), (n = ''), (i = !1)) : (n += f);
        return (s || n !== '') && r.push(n.trim()), r;
      },
    };
    eo.exports = yt;
    yt.default = yt;
  });
  var Ht = g(($v, ro) => {
    'use strict';
    var to = le(),
      Lc = ms(),
      Be = class extends to {
        get selectors() {
          return Lc.comma(this.selector);
        }
        set selectors(e) {
          let s = this.selector ? this.selector.match(/,\s*/) : null,
            r = s ? s[0] : ',' + this.raw('between', 'beforeOpen');
          this.selector = e.join(r);
        }
        constructor(e) {
          super(e), (this.type = 'rule'), this.nodes || (this.nodes = []);
        }
      };
    ro.exports = Be;
    Be.default = Be;
    to.registerRule(Be);
  });
  var Jt = g((Wv, no) => {
    'use strict';
    var Kt = /[\t\n\f\r "#'()/;[\\\]{}]/g,
      Qt = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
      Dc = /.[\r\n"'(/\\]/,
      so = /[\da-f]/i;
    no.exports = function (e, s = {}) {
      let r = e.css.valueOf(),
        n = s.ignoreErrors,
        i,
        o,
        u,
        a,
        c,
        f,
        p,
        l,
        y,
        x,
        h = r.length,
        d = 0,
        m = [],
        b = [];
      function w() {
        return d;
      }
      function v(W) {
        throw e.error('Unclosed ' + W, d);
      }
      function N() {
        return b.length === 0 && d >= h;
      }
      function F(W) {
        if (b.length) return b.pop();
        if (d >= h) return;
        let T = W ? W.ignoreUnclosed : !1;
        switch (((i = r.charCodeAt(d)), i)) {
          case 10:
          case 32:
          case 9:
          case 13:
          case 12: {
            a = d;
            do (a += 1), (i = r.charCodeAt(a));
            while (i === 32 || i === 10 || i === 9 || i === 13 || i === 12);
            (f = ['space', r.slice(d, a)]), (d = a - 1);
            break;
          }
          case 91:
          case 93:
          case 123:
          case 125:
          case 58:
          case 59:
          case 41: {
            let C = String.fromCharCode(i);
            f = [C, C, d];
            break;
          }
          case 40: {
            if (
              ((x = m.length ? m.pop()[1] : ''),
              (y = r.charCodeAt(d + 1)),
              x === 'url' &&
                y !== 39 &&
                y !== 34 &&
                y !== 32 &&
                y !== 10 &&
                y !== 9 &&
                y !== 12 &&
                y !== 13)
            ) {
              a = d;
              do {
                if (((p = !1), (a = r.indexOf(')', a + 1)), a === -1))
                  if (n || T) {
                    a = d;
                    break;
                  } else v('bracket');
                for (l = a; r.charCodeAt(l - 1) === 92; ) (l -= 1), (p = !p);
              } while (p);
              (f = ['brackets', r.slice(d, a + 1), d, a]), (d = a);
            } else
              (a = r.indexOf(')', d + 1)),
                (o = r.slice(d, a + 1)),
                a === -1 || Dc.test(o)
                  ? (f = ['(', '(', d])
                  : ((f = ['brackets', o, d, a]), (d = a));
            break;
          }
          case 39:
          case 34: {
            (c = i === 39 ? "'" : '"'), (a = d);
            do {
              if (((p = !1), (a = r.indexOf(c, a + 1)), a === -1))
                if (n || T) {
                  a = d + 1;
                  break;
                } else v('string');
              for (l = a; r.charCodeAt(l - 1) === 92; ) (l -= 1), (p = !p);
            } while (p);
            (f = ['string', r.slice(d, a + 1), d, a]), (d = a);
            break;
          }
          case 64: {
            (Kt.lastIndex = d + 1),
              Kt.test(r),
              Kt.lastIndex === 0 ? (a = r.length - 1) : (a = Kt.lastIndex - 2),
              (f = ['at-word', r.slice(d, a + 1), d, a]),
              (d = a);
            break;
          }
          case 92: {
            for (a = d, u = !0; r.charCodeAt(a + 1) === 92; ) (a += 1), (u = !u);
            if (
              ((i = r.charCodeAt(a + 1)),
              u &&
                i !== 47 &&
                i !== 32 &&
                i !== 10 &&
                i !== 9 &&
                i !== 13 &&
                i !== 12 &&
                ((a += 1), so.test(r.charAt(a))))
            ) {
              for (; so.test(r.charAt(a + 1)); ) a += 1;
              r.charCodeAt(a + 1) === 32 && (a += 1);
            }
            (f = ['word', r.slice(d, a + 1), d, a]), (d = a);
            break;
          }
          default: {
            i === 47 && r.charCodeAt(d + 1) === 42
              ? ((a = r.indexOf('*/', d + 2) + 1),
                a === 0 && (n || T ? (a = r.length) : v('comment')),
                (f = ['comment', r.slice(d, a + 1), d, a]),
                (d = a))
              : ((Qt.lastIndex = d + 1),
                Qt.test(r),
                Qt.lastIndex === 0 ? (a = r.length - 1) : (a = Qt.lastIndex - 2),
                (f = ['word', r.slice(d, a + 1), d, a]),
                m.push(f),
                (d = a));
            break;
          }
        }
        return d++, f;
      }
      function Q(W) {
        b.push(W);
      }
      return { back: Q, endOfFile: N, nextToken: F, position: w };
    };
  });
  var Xt = g((Yv, ao) => {
    'use strict';
    var Bc = jt(),
      Mc = Re(),
      Uc = mt(),
      Fc = De(),
      io = Ht(),
      $c = Jt(),
      oo = { empty: !0, space: !0 };
    function Wc(t) {
      for (let e = t.length - 1; e >= 0; e--) {
        let s = t[e],
          r = s[3] || s[2];
        if (r) return r;
      }
    }
    var ys = class {
      constructor(e) {
        (this.input = e),
          (this.root = new Fc()),
          (this.current = this.root),
          (this.spaces = ''),
          (this.semicolon = !1),
          this.createTokenizer(),
          (this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } });
      }
      atrule(e) {
        let s = new Bc();
        (s.name = e[1].slice(1)), s.name === '' && this.unnamedAtrule(s, e), this.init(s, e[2]);
        let r,
          n,
          i,
          o = !1,
          u = !1,
          a = [],
          c = [];
        for (; !this.tokenizer.endOfFile(); ) {
          if (
            ((e = this.tokenizer.nextToken()),
            (r = e[0]),
            r === '(' || r === '['
              ? c.push(r === '(' ? ')' : ']')
              : r === '{' && c.length > 0
                ? c.push('}')
                : r === c[c.length - 1] && c.pop(),
            c.length === 0)
          )
            if (r === ';') {
              (s.source.end = this.getPosition(e[2])), s.source.end.offset++, (this.semicolon = !0);
              break;
            } else if (r === '{') {
              u = !0;
              break;
            } else if (r === '}') {
              if (a.length > 0) {
                for (i = a.length - 1, n = a[i]; n && n[0] === 'space'; ) n = a[--i];
                n && ((s.source.end = this.getPosition(n[3] || n[2])), s.source.end.offset++);
              }
              this.end(e);
              break;
            } else a.push(e);
          else a.push(e);
          if (this.tokenizer.endOfFile()) {
            o = !0;
            break;
          }
        }
        (s.raws.between = this.spacesAndCommentsFromEnd(a)),
          a.length
            ? ((s.raws.afterName = this.spacesAndCommentsFromStart(a)),
              this.raw(s, 'params', a),
              o &&
                ((e = a[a.length - 1]),
                (s.source.end = this.getPosition(e[3] || e[2])),
                s.source.end.offset++,
                (this.spaces = s.raws.between),
                (s.raws.between = '')))
            : ((s.raws.afterName = ''), (s.params = '')),
          u && ((s.nodes = []), (this.current = s));
      }
      checkMissedSemicolon(e) {
        let s = this.colon(e);
        if (s === !1) return;
        let r = 0,
          n;
        for (
          let i = s - 1;
          i >= 0 && ((n = e[i]), !(n[0] !== 'space' && ((r += 1), r === 2)));
          i--
        );
        throw this.input.error('Missed semicolon', n[0] === 'word' ? n[3] + 1 : n[2]);
      }
      colon(e) {
        let s = 0,
          r,
          n,
          i;
        for (let [o, u] of e.entries()) {
          if (
            ((n = u),
            (i = n[0]),
            i === '(' && (s += 1),
            i === ')' && (s -= 1),
            s === 0 && i === ':')
          )
            if (!r) this.doubleColon(n);
            else {
              if (r[0] === 'word' && r[1] === 'progid') continue;
              return o;
            }
          r = n;
        }
        return !1;
      }
      comment(e) {
        let s = new Mc();
        this.init(s, e[2]), (s.source.end = this.getPosition(e[3] || e[2])), s.source.end.offset++;
        let r = e[1].slice(2, -2);
        if (/^\s*$/.test(r)) (s.text = ''), (s.raws.left = r), (s.raws.right = '');
        else {
          let n = r.match(/^(\s*)([^]*\S)(\s*)$/);
          (s.text = n[2]), (s.raws.left = n[1]), (s.raws.right = n[3]);
        }
      }
      createTokenizer() {
        this.tokenizer = $c(this.input);
      }
      decl(e, s) {
        let r = new Uc();
        this.init(r, e[0][2]);
        let n = e[e.length - 1];
        for (
          n[0] === ';' && ((this.semicolon = !0), e.pop()),
            r.source.end = this.getPosition(n[3] || n[2] || Wc(e)),
            r.source.end.offset++;
          e[0][0] !== 'word';

        )
          e.length === 1 && this.unknownWord(e), (r.raws.before += e.shift()[1]);
        for (r.source.start = this.getPosition(e[0][2]), r.prop = ''; e.length; ) {
          let c = e[0][0];
          if (c === ':' || c === 'space' || c === 'comment') break;
          r.prop += e.shift()[1];
        }
        r.raws.between = '';
        let i;
        for (; e.length; )
          if (((i = e.shift()), i[0] === ':')) {
            r.raws.between += i[1];
            break;
          } else
            i[0] === 'word' && /\w/.test(i[1]) && this.unknownWord([i]), (r.raws.between += i[1]);
        (r.prop[0] === '_' || r.prop[0] === '*') &&
          ((r.raws.before += r.prop[0]), (r.prop = r.prop.slice(1)));
        let o = [],
          u;
        for (; e.length && ((u = e[0][0]), !(u !== 'space' && u !== 'comment')); )
          o.push(e.shift());
        this.precheckMissedSemicolon(e);
        for (let c = e.length - 1; c >= 0; c--) {
          if (((i = e[c]), i[1].toLowerCase() === '!important')) {
            r.important = !0;
            let f = this.stringFrom(e, c);
            (f = this.spacesFromEnd(e) + f), f !== ' !important' && (r.raws.important = f);
            break;
          } else if (i[1].toLowerCase() === 'important') {
            let f = e.slice(0),
              p = '';
            for (let l = c; l > 0; l--) {
              let y = f[l][0];
              if (p.trim().startsWith('!') && y !== 'space') break;
              p = f.pop()[1] + p;
            }
            p.trim().startsWith('!') && ((r.important = !0), (r.raws.important = p), (e = f));
          }
          if (i[0] !== 'space' && i[0] !== 'comment') break;
        }
        e.some(c => c[0] !== 'space' && c[0] !== 'comment') &&
          ((r.raws.between += o.map(c => c[1]).join('')), (o = [])),
          this.raw(r, 'value', o.concat(e), s),
          r.value.includes(':') && !s && this.checkMissedSemicolon(e);
      }
      doubleColon(e) {
        throw this.input.error('Double colon', { offset: e[2] }, { offset: e[2] + e[1].length });
      }
      emptyRule(e) {
        let s = new io();
        this.init(s, e[2]), (s.selector = ''), (s.raws.between = ''), (this.current = s);
      }
      end(e) {
        this.current.nodes &&
          this.current.nodes.length &&
          (this.current.raws.semicolon = this.semicolon),
          (this.semicolon = !1),
          (this.current.raws.after = (this.current.raws.after || '') + this.spaces),
          (this.spaces = ''),
          this.current.parent
            ? ((this.current.source.end = this.getPosition(e[2])),
              this.current.source.end.offset++,
              (this.current = this.current.parent))
            : this.unexpectedClose(e);
      }
      endFile() {
        this.current.parent && this.unclosedBlock(),
          this.current.nodes &&
            this.current.nodes.length &&
            (this.current.raws.semicolon = this.semicolon),
          (this.current.raws.after = (this.current.raws.after || '') + this.spaces),
          (this.root.source.end = this.getPosition(this.tokenizer.position()));
      }
      freeSemicolon(e) {
        if (((this.spaces += e[1]), this.current.nodes)) {
          let s = this.current.nodes[this.current.nodes.length - 1];
          s &&
            s.type === 'rule' &&
            !s.raws.ownSemicolon &&
            ((s.raws.ownSemicolon = this.spaces),
            (this.spaces = ''),
            (s.source.end = this.getPosition(e[2])),
            (s.source.end.offset += s.raws.ownSemicolon.length));
        }
      }
      getPosition(e) {
        let s = this.input.fromOffset(e);
        return { column: s.col, line: s.line, offset: e };
      }
      init(e, s) {
        this.current.push(e),
          (e.source = { input: this.input, start: this.getPosition(s) }),
          (e.raws.before = this.spaces),
          (this.spaces = ''),
          e.type !== 'comment' && (this.semicolon = !1);
      }
      other(e) {
        let s = !1,
          r = null,
          n = !1,
          i = null,
          o = [],
          u = e[1].startsWith('--'),
          a = [],
          c = e;
        for (; c; ) {
          if (((r = c[0]), a.push(c), r === '(' || r === '['))
            i || (i = c), o.push(r === '(' ? ')' : ']');
          else if (u && n && r === '{') i || (i = c), o.push('}');
          else if (o.length === 0)
            if (r === ';')
              if (n) {
                this.decl(a, u);
                return;
              } else break;
            else if (r === '{') {
              this.rule(a);
              return;
            } else if (r === '}') {
              this.tokenizer.back(a.pop()), (s = !0);
              break;
            } else r === ':' && (n = !0);
          else r === o[o.length - 1] && (o.pop(), o.length === 0 && (i = null));
          c = this.tokenizer.nextToken();
        }
        if (
          (this.tokenizer.endOfFile() && (s = !0), o.length > 0 && this.unclosedBracket(i), s && n)
        ) {
          if (!u)
            for (; a.length && ((c = a[a.length - 1][0]), !(c !== 'space' && c !== 'comment')); )
              this.tokenizer.back(a.pop());
          this.decl(a, u);
        } else this.unknownWord(a);
      }
      parse() {
        let e;
        for (; !this.tokenizer.endOfFile(); )
          switch (((e = this.tokenizer.nextToken()), e[0])) {
            case 'space':
              this.spaces += e[1];
              break;
            case ';':
              this.freeSemicolon(e);
              break;
            case '}':
              this.end(e);
              break;
            case 'comment':
              this.comment(e);
              break;
            case 'at-word':
              this.atrule(e);
              break;
            case '{':
              this.emptyRule(e);
              break;
            default:
              this.other(e);
              break;
          }
        this.endFile();
      }
      precheckMissedSemicolon() {}
      raw(e, s, r, n) {
        let i,
          o,
          u = r.length,
          a = '',
          c = !0,
          f,
          p;
        for (let l = 0; l < u; l += 1)
          (i = r[l]),
            (o = i[0]),
            o === 'space' && l === u - 1 && !n
              ? (c = !1)
              : o === 'comment'
                ? ((p = r[l - 1] ? r[l - 1][0] : 'empty'),
                  (f = r[l + 1] ? r[l + 1][0] : 'empty'),
                  !oo[p] && !oo[f] ? (a.slice(-1) === ',' ? (c = !1) : (a += i[1])) : (c = !1))
                : (a += i[1]);
        if (!c) {
          let l = r.reduce((y, x) => y + x[1], '');
          e.raws[s] = { raw: l, value: a };
        }
        e[s] = a;
      }
      rule(e) {
        e.pop();
        let s = new io();
        this.init(s, e[0][2]),
          (s.raws.between = this.spacesAndCommentsFromEnd(e)),
          this.raw(s, 'selector', e),
          (this.current = s);
      }
      spacesAndCommentsFromEnd(e) {
        let s,
          r = '';
        for (; e.length && ((s = e[e.length - 1][0]), !(s !== 'space' && s !== 'comment')); )
          r = e.pop()[1] + r;
        return r;
      }
      spacesAndCommentsFromStart(e) {
        let s,
          r = '';
        for (; e.length && ((s = e[0][0]), !(s !== 'space' && s !== 'comment')); )
          r += e.shift()[1];
        return r;
      }
      spacesFromEnd(e) {
        let s,
          r = '';
        for (; e.length && ((s = e[e.length - 1][0]), s === 'space'); ) r = e.pop()[1] + r;
        return r;
      }
      stringFrom(e, s) {
        let r = '';
        for (let n = s; n < e.length; n++) r += e[n][1];
        return e.splice(s, e.length - s), r;
      }
      unclosedBlock() {
        let e = this.current.source.start;
        throw this.input.error('Unclosed block', e.line, e.column);
      }
      unclosedBracket(e) {
        throw this.input.error('Unclosed bracket', { offset: e[2] }, { offset: e[2] + 1 });
      }
      unexpectedClose(e) {
        throw this.input.error('Unexpected }', { offset: e[2] }, { offset: e[2] + 1 });
      }
      unknownWord(e) {
        throw this.input.error(
          'Unknown word ' + e[0][1],
          { offset: e[0][2] },
          { offset: e[0][2] + e[0][1].length }
        );
      }
      unnamedAtrule(e, s) {
        throw this.input.error(
          'At-rule without name',
          { offset: s[2] },
          { offset: s[2] + s[1].length }
        );
      }
    };
    ao.exports = ys;
  });
  var gt = g((Vv, uo) => {
    'use strict';
    var Yc = le(),
      Vc = qe(),
      zc = Xt();
    function Zt(t, e) {
      let s = new Vc(t, e),
        r = new zc(s);
      try {
        r.parse();
      } catch (n) {
        throw n;
      }
      return r.root;
    }
    uo.exports = Zt;
    Zt.default = Zt;
    Yc.registerParse(Zt);
  });
  var lo = g((zv, gs) => {
    var Gc = Jt(),
      jc = qe();
    gs.exports = {
      isInlineComment(t) {
        if (t[0] === 'word' && t[1].slice(0, 2) === '//') {
          let e = t,
            s = [],
            r,
            n;
          for (; t; ) {
            if (/\r?\n/.test(t[1])) {
              if (/['"].*\r?\n/.test(t[1])) {
                s.push(
                  t[1].substring(
                    0,
                    t[1].indexOf(`
`)
                  )
                ),
                  (n = t[1].substring(
                    t[1].indexOf(`
`)
                  ));
                let o = this.input.css.valueOf().substring(this.tokenizer.position());
                (n += o), (r = t[3] + o.length - n.length);
              } else this.tokenizer.back(t);
              break;
            }
            s.push(t[1]), (r = t[2]), (t = this.tokenizer.nextToken({ ignoreUnclosed: !0 }));
          }
          let i = ['comment', s.join(''), e[2], r];
          return (
            this.inlineComment(i),
            n && ((this.input = new jc(n)), (this.tokenizer = Gc(this.input))),
            !0
          );
        } else if (t[1] === '/') {
          let e = this.tokenizer.nextToken({ ignoreUnclosed: !0 });
          if (e[0] === 'comment' && /^\/\*/.test(e[1]))
            return (
              (e[0] = 'word'),
              (e[1] = e[1].slice(1)),
              (t[1] = '//'),
              this.tokenizer.back(e),
              gs.exports.isInlineComment.bind(this)(t)
            );
        }
        return !1;
      },
    };
  });
  var fo = g((Gv, co) => {
    co.exports = {
      interpolation(t) {
        let e = [t, this.tokenizer.nextToken()],
          s = ['word', '}'];
        if (e[0][1].length > 1 || e[1][0] !== '{') return this.tokenizer.back(e[1]), !1;
        for (t = this.tokenizer.nextToken(); t && s.includes(t[0]); )
          e.push(t), (t = this.tokenizer.nextToken());
        let r = e.map(u => u[1]),
          [n] = e,
          i = e.pop(),
          o = ['word', r.join(''), n[2], i[2]];
        return this.tokenizer.back(t), this.tokenizer.back(o), !0;
      },
    };
  });
  var ho = g((jv, po) => {
    var Hc = /^#[0-9a-fA-F]{6}$|^#[0-9a-fA-F]{3}$/,
      Kc = /\.[0-9]/,
      Qc = t => {
        let [, e] = t,
          [s] = e;
        return (s === '.' || s === '#') && Hc.test(e) === !1 && Kc.test(e) === !1;
      };
    po.exports = { isMixinToken: Qc };
  });
  var yo = g((Hv, mo) => {
    var Jc = Jt(),
      Xc = /^url\((.+)\)/;
    mo.exports = t => {
      let { name: e, params: s = '' } = t;
      if (e === 'import' && s.length) {
        t.import = !0;
        let r = Jc({ css: s });
        for (t.filename = s.replace(Xc, '$1'); !r.endOfFile(); ) {
          let [n, i] = r.nextToken();
          if (n === 'word' && i === 'url') return;
          if (n === 'brackets') {
            (t.options = i), (t.filename = s.replace(i, '').trim());
            break;
          }
        }
      }
    };
  });
  var xo = g((Kv, vo) => {
    var go = /:$/,
      wo = /^:(\s+)?/;
    vo.exports = t => {
      let { name: e, params: s = '' } = t;
      if (t.name.slice(-1) === ':') {
        if (go.test(e)) {
          let [r] = e.match(go);
          (t.name = e.replace(r, '')),
            (t.raws.afterName = r + (t.raws.afterName || '')),
            (t.variable = !0),
            (t.value = t.params);
        }
        if (wo.test(s)) {
          let [r] = s.match(wo);
          (t.value = s.replace(r, '')),
            (t.raws.afterName = (t.raws.afterName || '') + r),
            (t.variable = !0);
        }
      }
    };
  });
  var Eo = g((Jv, _o) => {
    var Zc = Re(),
      ef = Xt(),
      { isInlineComment: tf } = lo(),
      { interpolation: bo } = fo(),
      { isMixinToken: rf } = ho(),
      sf = yo(),
      nf = xo(),
      of = /(!\s*important)$/i;
    _o.exports = class extends ef {
      constructor(...e) {
        super(...e), (this.lastNode = null);
      }
      atrule(e) {
        bo.bind(this)(e) || (super.atrule(e), sf(this.lastNode), nf(this.lastNode));
      }
      decl(...e) {
        super.decl(...e), /extend\(.+\)/i.test(this.lastNode.value) && (this.lastNode.extend = !0);
      }
      each(e) {
        e[0][1] = ` ${e[0][1]}`;
        let s = e.findIndex(u => u[0] === '('),
          r = e.reverse().find(u => u[0] === ')'),
          n = e.reverse().indexOf(r),
          o = e
            .splice(s, n)
            .map(u => u[1])
            .join('');
        for (let u of e.reverse()) this.tokenizer.back(u);
        this.atrule(this.tokenizer.nextToken()),
          (this.lastNode.function = !0),
          (this.lastNode.params = o);
      }
      init(e, s, r) {
        super.init(e, s, r), (this.lastNode = e);
      }
      inlineComment(e) {
        let s = new Zc(),
          r = e[1].slice(2);
        if (
          (this.init(s, e[2]),
          (s.source.end = this.getPosition(e[3] || e[2])),
          (s.inline = !0),
          (s.raws.begin = '//'),
          /^\s*$/.test(r))
        )
          (s.text = ''), (s.raws.left = r), (s.raws.right = '');
        else {
          let n = r.match(/^(\s*)([^]*[^\s])(\s*)$/);
          [, s.raws.left, s.text, s.raws.right] = n;
        }
      }
      mixin(e) {
        let [s] = e,
          r = s[1].slice(0, 1),
          n = e.findIndex(c => c[0] === 'brackets'),
          i = e.findIndex(c => c[0] === '('),
          o = '';
        if ((n < 0 || n > 3) && i > 0) {
          let c = e.reduce((w, v, N) => (v[0] === ')' ? N : w)),
            p = e
              .slice(i, c + i)
              .map(w => w[1])
              .join(''),
            [l] = e.slice(i),
            y = [l[2], l[3]],
            [x] = e.slice(c, c + 1),
            h = [x[2], x[3]],
            d = ['brackets', p].concat(y, h),
            m = e.slice(0, i),
            b = e.slice(c + 1);
          (e = m), e.push(d), (e = e.concat(b));
        }
        let u = [];
        for (let c of e) if (((c[1] === '!' || u.length) && u.push(c), c[1] === 'important')) break;
        if (u.length) {
          let [c] = u,
            f = e.indexOf(c),
            p = u[u.length - 1],
            l = [c[2], c[3]],
            y = [p[4], p[5]],
            h = ['word', u.map(d => d[1]).join('')].concat(l, y);
          e.splice(f, u.length, h);
        }
        let a = e.findIndex(c => of.test(c[1]));
        a > 0 && (([, o] = e[a]), e.splice(a, 1));
        for (let c of e.reverse()) this.tokenizer.back(c);
        this.atrule(this.tokenizer.nextToken()),
          (this.lastNode.mixin = !0),
          (this.lastNode.raws.identifier = r),
          o && ((this.lastNode.important = !0), (this.lastNode.raws.important = o));
      }
      other(e) {
        tf.bind(this)(e) || super.other(e);
      }
      rule(e) {
        let s = e[e.length - 1],
          r = e[e.length - 2];
        if (r[0] === 'at-word' && s[0] === '{' && (this.tokenizer.back(s), bo.bind(this)(r))) {
          let i = this.tokenizer.nextToken();
          e = e.slice(0, e.length - 2).concat([i]);
          for (let o of e.reverse()) this.tokenizer.back(o);
          return;
        }
        super.rule(e), /:extend\(.+\)/i.test(this.lastNode.selector) && (this.lastNode.extend = !0);
      }
      unknownWord(e) {
        let [s] = e;
        if (e[0][1] === 'each' && e[1][0] === '(') {
          this.each(e);
          return;
        }
        if (rf(s)) {
          this.mixin(e);
          return;
        }
        super.unknownWord(e);
      }
    };
  });
  var So = g((Zv, ko) => {
    var af = Vt();
    ko.exports = class extends af {
      atrule(e, s) {
        if (!e.mixin && !e.variable && !e.function) {
          super.atrule(e, s);
          return;
        }
        let n = `${e.function ? '' : e.raws.identifier || '@'}${e.name}`,
          i = e.params ? this.rawValue(e, 'params') : '',
          o = e.raws.important || '';
        if (
          (e.variable && (i = e.value),
          typeof e.raws.afterName < 'u' ? (n += e.raws.afterName) : i && (n += ' '),
          e.nodes)
        )
          this.block(e, n + i + o);
        else {
          let u = (e.raws.between || '') + o + (s ? ';' : '');
          this.builder(n + i + u, e);
        }
      }
      comment(e) {
        if (e.inline) {
          let s = this.raw(e, 'left', 'commentLeft'),
            r = this.raw(e, 'right', 'commentRight');
          this.builder(`//${s}${e.text}${r}`, e);
        } else super.comment(e);
      }
    };
  });
  var To = g((ex, ws) => {
    var uf = qe(),
      lf = Eo(),
      cf = So();
    ws.exports = {
      parse(t, e) {
        let s = new uf(t, e),
          r = new lf(s);
        return (
          r.parse(),
          r.root.walk(n => {
            let i = s.css.lastIndexOf(n.source.input.css);
            if (i === 0) return;
            if (i + n.source.input.css.length !== s.css.length)
              throw new Error('Invalid state detected in postcss-less');
            let o = i + n.source.start.offset,
              u = s.fromOffset(i + n.source.start.offset);
            if (((n.source.start = { offset: o, line: u.line, column: u.col }), n.source.end)) {
              let a = i + n.source.end.offset,
                c = s.fromOffset(i + n.source.end.offset);
              n.source.end = { offset: a, line: c.line, column: c.col };
            }
          }),
          r.root
        );
      },
      stringify(t, e) {
        new cf(e).stringify(t);
      },
      nodeToString(t) {
        let e = '';
        return (
          ws.exports.stringify(t, s => {
            e += s;
          }),
          e
        );
      },
    };
  });
  var er = g((tx, Ao) => {
    'use strict';
    var ff = le(),
      Co,
      Oo,
      ye = class extends ff {
        constructor(e) {
          super({ type: 'document', ...e }), this.nodes || (this.nodes = []);
        }
        toResult(e = {}) {
          return new Co(new Oo(), this, e).stringify();
        }
      };
    ye.registerLazyResult = t => {
      Co = t;
    };
    ye.registerProcessor = t => {
      Oo = t;
    };
    Ao.exports = ye;
    ye.default = ye;
  });
  var Po = g((rx, No) => {
    'use strict';
    var pf = jt(),
      hf = Re(),
      df = mt(),
      mf = qe(),
      yf = cs(),
      gf = De(),
      wf = Ht();
    function wt(t, e) {
      if (Array.isArray(t)) return t.map(n => wt(n));
      let { inputs: s, ...r } = t;
      if (s) {
        e = [];
        for (let n of s) {
          let i = { ...n, __proto__: mf.prototype };
          i.map && (i.map = { ...i.map, __proto__: yf.prototype }), e.push(i);
        }
      }
      if ((r.nodes && (r.nodes = t.nodes.map(n => wt(n, e))), r.source)) {
        let { inputId: n, ...i } = r.source;
        (r.source = i), n != null && (r.source.input = e[n]);
      }
      if (r.type === 'root') return new gf(r);
      if (r.type === 'decl') return new df(r);
      if (r.type === 'rule') return new wf(r);
      if (r.type === 'comment') return new hf(r);
      if (r.type === 'atrule') return new pf(r);
      throw new Error('Unknown node type: ' + t.type);
    }
    No.exports = wt;
    wt.default = wt;
  });
  var vs = g((sx, Ro) => {
    Ro.exports = class {
      generate() {}
    };
  });
  var xs = g((ix, Io) => {
    'use strict';
    var vt = class {
      constructor(e, s = {}) {
        if (((this.type = 'warning'), (this.text = e), s.node && s.node.source)) {
          let r = s.node.rangeBy(s);
          (this.line = r.start.line),
            (this.column = r.start.column),
            (this.endLine = r.end.line),
            (this.endColumn = r.end.column);
        }
        for (let r in s) this[r] = s[r];
      }
      toString() {
        return this.node
          ? this.node.error(this.text, { index: this.index, plugin: this.plugin, word: this.word })
              .message
          : this.plugin
            ? this.plugin + ': ' + this.text
            : this.text;
      }
    };
    Io.exports = vt;
    vt.default = vt;
  });
  var tr = g((ox, qo) => {
    'use strict';
    var vf = xs(),
      xt = class {
        get content() {
          return this.css;
        }
        constructor(e, s, r) {
          (this.processor = e),
            (this.messages = []),
            (this.root = s),
            (this.opts = r),
            (this.css = void 0),
            (this.map = void 0);
        }
        toString() {
          return this.css;
        }
        warn(e, s = {}) {
          s.plugin ||
            (this.lastPlugin &&
              this.lastPlugin.postcssPlugin &&
              (s.plugin = this.lastPlugin.postcssPlugin));
          let r = new vf(e, s);
          return this.messages.push(r), r;
        }
        warnings() {
          return this.messages.filter(e => e.type === 'warning');
        }
      };
    qo.exports = xt;
    xt.default = xt;
  });
  var bs = g((ax, Do) => {
    'use strict';
    var Lo = {};
    Do.exports = function (e) {
      Lo[e] || ((Lo[e] = !0), typeof console < 'u' && console.warn && console.warn(e));
    };
  });
  var ks = g((lx, Fo) => {
    'use strict';
    var xf = le(),
      bf = er(),
      _f = vs(),
      Ef = gt(),
      Bo = tr(),
      kf = De(),
      Sf = ut(),
      { isClean: K, my: Tf } = zt(),
      ux = bs(),
      Cf = {
        atrule: 'AtRule',
        comment: 'Comment',
        decl: 'Declaration',
        document: 'Document',
        root: 'Root',
        rule: 'Rule',
      },
      Of = {
        AtRule: !0,
        AtRuleExit: !0,
        Comment: !0,
        CommentExit: !0,
        Declaration: !0,
        DeclarationExit: !0,
        Document: !0,
        DocumentExit: !0,
        Once: !0,
        OnceExit: !0,
        postcssPlugin: !0,
        prepare: !0,
        Root: !0,
        RootExit: !0,
        Rule: !0,
        RuleExit: !0,
      },
      Af = { Once: !0, postcssPlugin: !0, prepare: !0 },
      Me = 0;
    function bt(t) {
      return typeof t == 'object' && typeof t.then == 'function';
    }
    function Uo(t) {
      let e = !1,
        s = Cf[t.type];
      return (
        t.type === 'decl'
          ? (e = t.prop.toLowerCase())
          : t.type === 'atrule' && (e = t.name.toLowerCase()),
        e && t.append
          ? [s, s + '-' + e, Me, s + 'Exit', s + 'Exit-' + e]
          : e
            ? [s, s + '-' + e, s + 'Exit', s + 'Exit-' + e]
            : t.append
              ? [s, Me, s + 'Exit']
              : [s, s + 'Exit']
      );
    }
    function Mo(t) {
      let e;
      return (
        t.type === 'document'
          ? (e = ['Document', Me, 'DocumentExit'])
          : t.type === 'root'
            ? (e = ['Root', Me, 'RootExit'])
            : (e = Uo(t)),
        { eventIndex: 0, events: e, iterator: 0, node: t, visitorIndex: 0, visitors: [] }
      );
    }
    function _s(t) {
      return (t[K] = !1), t.nodes && t.nodes.forEach(e => _s(e)), t;
    }
    var Es = {},
      fe = class t {
        get content() {
          return this.stringify().content;
        }
        get css() {
          return this.stringify().css;
        }
        get map() {
          return this.stringify().map;
        }
        get messages() {
          return this.sync().messages;
        }
        get opts() {
          return this.result.opts;
        }
        get processor() {
          return this.result.processor;
        }
        get root() {
          return this.sync().root;
        }
        get [Symbol.toStringTag]() {
          return 'LazyResult';
        }
        constructor(e, s, r) {
          (this.stringified = !1), (this.processed = !1);
          let n;
          if (typeof s == 'object' && s !== null && (s.type === 'root' || s.type === 'document'))
            n = _s(s);
          else if (s instanceof t || s instanceof Bo)
            (n = _s(s.root)),
              s.map &&
                (typeof r.map > 'u' && (r.map = {}),
                r.map.inline || (r.map.inline = !1),
                (r.map.prev = s.map));
          else {
            let i = Ef;
            r.syntax && (i = r.syntax.parse), r.parser && (i = r.parser), i.parse && (i = i.parse);
            try {
              n = i(s, r);
            } catch (o) {
              (this.processed = !0), (this.error = o);
            }
            n && !n[Tf] && xf.rebuild(n);
          }
          (this.result = new Bo(e, n, r)),
            (this.helpers = { ...Es, postcss: Es, result: this.result }),
            (this.plugins = this.processor.plugins.map(i =>
              typeof i == 'object' && i.prepare ? { ...i, ...i.prepare(this.result) } : i
            ));
        }
        async() {
          return this.error
            ? Promise.reject(this.error)
            : this.processed
              ? Promise.resolve(this.result)
              : (this.processing || (this.processing = this.runAsync()), this.processing);
        }
        catch(e) {
          return this.async().catch(e);
        }
        finally(e) {
          return this.async().then(e, e);
        }
        getAsyncError() {
          throw new Error('Use process(css).then(cb) to work with async plugins');
        }
        handleError(e, s) {
          let r = this.result.lastPlugin;
          try {
            s && s.addToError(e),
              (this.error = e),
              e.name === 'CssSyntaxError' && !e.plugin
                ? ((e.plugin = r.postcssPlugin), e.setMessage())
                : r.postcssVersion;
          } catch (n) {
            console && console.error && console.error(n);
          }
          return e;
        }
        prepareVisitors() {
          this.listeners = {};
          let e = (s, r, n) => {
            this.listeners[r] || (this.listeners[r] = []), this.listeners[r].push([s, n]);
          };
          for (let s of this.plugins)
            if (typeof s == 'object')
              for (let r in s) {
                if (!Of[r] && /^[A-Z]/.test(r))
                  throw new Error(
                    `Unknown event ${r} in ${s.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
                  );
                if (!Af[r])
                  if (typeof s[r] == 'object')
                    for (let n in s[r])
                      n === '*' ? e(s, r, s[r][n]) : e(s, r + '-' + n.toLowerCase(), s[r][n]);
                  else typeof s[r] == 'function' && e(s, r, s[r]);
              }
          this.hasListener = Object.keys(this.listeners).length > 0;
        }
        async runAsync() {
          this.plugin = 0;
          for (let e = 0; e < this.plugins.length; e++) {
            let s = this.plugins[e],
              r = this.runOnRoot(s);
            if (bt(r))
              try {
                await r;
              } catch (n) {
                throw this.handleError(n);
              }
          }
          if ((this.prepareVisitors(), this.hasListener)) {
            let e = this.result.root;
            for (; !e[K]; ) {
              e[K] = !0;
              let s = [Mo(e)];
              for (; s.length > 0; ) {
                let r = this.visitTick(s);
                if (bt(r))
                  try {
                    await r;
                  } catch (n) {
                    let i = s[s.length - 1].node;
                    throw this.handleError(n, i);
                  }
              }
            }
            if (this.listeners.OnceExit)
              for (let [s, r] of this.listeners.OnceExit) {
                this.result.lastPlugin = s;
                try {
                  if (e.type === 'document') {
                    let n = e.nodes.map(i => r(i, this.helpers));
                    await Promise.all(n);
                  } else await r(e, this.helpers);
                } catch (n) {
                  throw this.handleError(n);
                }
              }
          }
          return (this.processed = !0), this.stringify();
        }
        runOnRoot(e) {
          this.result.lastPlugin = e;
          try {
            if (typeof e == 'object' && e.Once) {
              if (this.result.root.type === 'document') {
                let s = this.result.root.nodes.map(r => e.Once(r, this.helpers));
                return bt(s[0]) ? Promise.all(s) : s;
              }
              return e.Once(this.result.root, this.helpers);
            } else if (typeof e == 'function') return e(this.result.root, this.result);
          } catch (s) {
            throw this.handleError(s);
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          (this.stringified = !0), this.sync();
          let e = this.result.opts,
            s = Sf;
          e.syntax && (s = e.syntax.stringify),
            e.stringifier && (s = e.stringifier),
            s.stringify && (s = s.stringify);
          let n = new _f(s, this.result.root, this.result.opts).generate();
          return (this.result.css = n[0]), (this.result.map = n[1]), this.result;
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (((this.processed = !0), this.processing)) throw this.getAsyncError();
          for (let e of this.plugins) {
            let s = this.runOnRoot(e);
            if (bt(s)) throw this.getAsyncError();
          }
          if ((this.prepareVisitors(), this.hasListener)) {
            let e = this.result.root;
            for (; !e[K]; ) (e[K] = !0), this.walkSync(e);
            if (this.listeners.OnceExit)
              if (e.type === 'document')
                for (let s of e.nodes) this.visitSync(this.listeners.OnceExit, s);
              else this.visitSync(this.listeners.OnceExit, e);
          }
          return this.result;
        }
        then(e, s) {
          return this.async().then(e, s);
        }
        toString() {
          return this.css;
        }
        visitSync(e, s) {
          for (let [r, n] of e) {
            this.result.lastPlugin = r;
            let i;
            try {
              i = n(s, this.helpers);
            } catch (o) {
              throw this.handleError(o, s.proxyOf);
            }
            if (s.type !== 'root' && s.type !== 'document' && !s.parent) return !0;
            if (bt(i)) throw this.getAsyncError();
          }
        }
        visitTick(e) {
          let s = e[e.length - 1],
            { node: r, visitors: n } = s;
          if (r.type !== 'root' && r.type !== 'document' && !r.parent) {
            e.pop();
            return;
          }
          if (n.length > 0 && s.visitorIndex < n.length) {
            let [o, u] = n[s.visitorIndex];
            (s.visitorIndex += 1),
              s.visitorIndex === n.length && ((s.visitors = []), (s.visitorIndex = 0)),
              (this.result.lastPlugin = o);
            try {
              return u(r.toProxy(), this.helpers);
            } catch (a) {
              throw this.handleError(a, r);
            }
          }
          if (s.iterator !== 0) {
            let o = s.iterator,
              u;
            for (; (u = r.nodes[r.indexes[o]]); )
              if (((r.indexes[o] += 1), !u[K])) {
                (u[K] = !0), e.push(Mo(u));
                return;
              }
            (s.iterator = 0), delete r.indexes[o];
          }
          let i = s.events;
          for (; s.eventIndex < i.length; ) {
            let o = i[s.eventIndex];
            if (((s.eventIndex += 1), o === Me)) {
              r.nodes && r.nodes.length && ((r[K] = !0), (s.iterator = r.getIterator()));
              return;
            } else if (this.listeners[o]) {
              s.visitors = this.listeners[o];
              return;
            }
          }
          e.pop();
        }
        walkSync(e) {
          e[K] = !0;
          let s = Uo(e);
          for (let r of s)
            if (r === Me)
              e.nodes &&
                e.each(n => {
                  n[K] || this.walkSync(n);
                });
            else {
              let n = this.listeners[r];
              if (n && this.visitSync(n, e.toProxy())) return;
            }
        }
        warnings() {
          return this.sync().warnings();
        }
      };
    fe.registerPostcss = t => {
      Es = t;
    };
    Fo.exports = fe;
    fe.default = fe;
    kf.registerLazyResult(fe);
    bf.registerLazyResult(fe);
  });
  var Wo = g((fx, $o) => {
    'use strict';
    var Nf = vs(),
      Pf = gt(),
      Rf = tr(),
      If = ut(),
      cx = bs(),
      _t = class {
        get content() {
          return this.result.css;
        }
        get css() {
          return this.result.css;
        }
        get map() {
          return this.result.map;
        }
        get messages() {
          return [];
        }
        get opts() {
          return this.result.opts;
        }
        get processor() {
          return this.result.processor;
        }
        get root() {
          if (this._root) return this._root;
          let e,
            s = Pf;
          try {
            e = s(this._css, this._opts);
          } catch (r) {
            this.error = r;
          }
          if (this.error) throw this.error;
          return (this._root = e), e;
        }
        get [Symbol.toStringTag]() {
          return 'NoWorkResult';
        }
        constructor(e, s, r) {
          (s = s.toString()),
            (this.stringified = !1),
            (this._processor = e),
            (this._css = s),
            (this._opts = r),
            (this._map = void 0);
          let n,
            i = If;
          (this.result = new Rf(this._processor, n, this._opts)), (this.result.css = s);
          let o = this;
          Object.defineProperty(this.result, 'root', {
            get() {
              return o.root;
            },
          });
          let u = new Nf(i, n, this._opts, s);
          if (u.isMap()) {
            let [a, c] = u.generate();
            a && (this.result.css = a), c && (this.result.map = c);
          } else u.clearAnnotation(), (this.result.css = u.css);
        }
        async() {
          return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
        }
        catch(e) {
          return this.async().catch(e);
        }
        finally(e) {
          return this.async().then(e, e);
        }
        sync() {
          if (this.error) throw this.error;
          return this.result;
        }
        then(e, s) {
          return this.async().then(e, s);
        }
        toString() {
          return this._css;
        }
        warnings() {
          return [];
        }
      };
    $o.exports = _t;
    _t.default = _t;
  });
  var Vo = g((px, Yo) => {
    'use strict';
    var qf = er(),
      Lf = ks(),
      Df = Wo(),
      Bf = De(),
      ge = class {
        constructor(e = []) {
          (this.version = '8.5.3'), (this.plugins = this.normalize(e));
        }
        normalize(e) {
          let s = [];
          for (let r of e)
            if (
              (r.postcss === !0 ? (r = r()) : r.postcss && (r = r.postcss),
              typeof r == 'object' && Array.isArray(r.plugins))
            )
              s = s.concat(r.plugins);
            else if (typeof r == 'object' && r.postcssPlugin) s.push(r);
            else if (typeof r == 'function') s.push(r);
            else if (!(typeof r == 'object' && (r.parse || r.stringify)))
              throw new Error(r + ' is not a PostCSS plugin');
          return s;
        }
        process(e, s = {}) {
          return !this.plugins.length && !s.parser && !s.stringifier && !s.syntax
            ? new Df(this, e, s)
            : new Lf(this, e, s);
        }
        use(e) {
          return (this.plugins = this.plugins.concat(this.normalize([e]))), this;
        }
      };
    Yo.exports = ge;
    ge.default = ge;
    Bf.registerProcessor(ge);
    qf.registerProcessor(ge);
  });
  var rr = g((hx, Jo) => {
    'use strict';
    var zo = jt(),
      Go = Re(),
      Mf = le(),
      Uf = Yt(),
      jo = mt(),
      Ho = er(),
      Ff = Po(),
      $f = qe(),
      Wf = ks(),
      Yf = ms(),
      Vf = pt(),
      zf = gt(),
      Ss = Vo(),
      Gf = tr(),
      Ko = De(),
      Qo = Ht(),
      jf = ut(),
      Hf = xs();
    function k(...t) {
      return t.length === 1 && Array.isArray(t[0]) && (t = t[0]), new Ss(t);
    }
    k.plugin = function (e, s) {
      let r = !1;
      function n(...o) {
        console &&
          console.warn &&
          !r &&
          ((r = !0),
          console.warn(
            e +
              `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
          ));
        let u = s(...o);
        return (u.postcssPlugin = e), (u.postcssVersion = new Ss().version), u;
      }
      let i;
      return (
        Object.defineProperty(n, 'postcss', {
          get() {
            return i || (i = n()), i;
          },
        }),
        (n.process = function (o, u, a) {
          return k([n(a)]).process(o, u);
        }),
        n
      );
    };
    k.stringify = jf;
    k.parse = zf;
    k.fromJSON = Ff;
    k.list = Yf;
    k.comment = t => new Go(t);
    k.atRule = t => new zo(t);
    k.decl = t => new jo(t);
    k.rule = t => new Qo(t);
    k.root = t => new Ko(t);
    k.document = t => new Ho(t);
    k.CssSyntaxError = Uf;
    k.Declaration = jo;
    k.Container = Mf;
    k.Processor = Ss;
    k.Document = Ho;
    k.Comment = Go;
    k.Warning = Hf;
    k.AtRule = zo;
    k.Result = Gf;
    k.Input = $f;
    k.Rule = Qo;
    k.Root = Ko;
    k.Node = Vf;
    Wf.registerPostcss(k);
    Jo.exports = k;
    k.default = k;
  });
  var Zo = g((dx, Xo) => {
    var { Container: Kf } = rr(),
      Ts = class extends Kf {
        constructor(e) {
          super(e), (this.type = 'decl'), (this.isNested = !0), this.nodes || (this.nodes = []);
        }
      };
    Xo.exports = Ts;
  });
  var ra = g((mx, ta) => {
    'use strict';
    var sr = /[\t\n\f\r "#'()/;[\\\]{}]/g,
      nr = /[,\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
      Qf = /.[\r\n"'(/\\]/,
      ea = /[\da-f]/i,
      ir = /[\n\f\r]/g;
    ta.exports = function (e, s = {}) {
      let r = e.css.valueOf(),
        n = s.ignoreErrors,
        i,
        o,
        u,
        a,
        c,
        f,
        p,
        l,
        y,
        x = r.length,
        h = 0,
        d = [],
        m = [],
        b;
      function w() {
        return h;
      }
      function v(T) {
        throw e.error('Unclosed ' + T, h);
      }
      function N() {
        return m.length === 0 && h >= x;
      }
      function F() {
        let T = 1,
          C = !1,
          O = !1;
        for (; T > 0; )
          (o += 1),
            r.length <= o && v('interpolation'),
            (i = r.charCodeAt(o)),
            (l = r.charCodeAt(o + 1)),
            C
              ? !O && i === C
                ? ((C = !1), (O = !1))
                : i === 92
                  ? (O = !O)
                  : O && (O = !1)
              : i === 39 || i === 34
                ? (C = i)
                : i === 125
                  ? (T -= 1)
                  : i === 35 && l === 123 && (T += 1);
      }
      function Q(T) {
        if (m.length) return m.pop();
        if (h >= x) return;
        let C = T ? T.ignoreUnclosed : !1;
        switch (((i = r.charCodeAt(h)), i)) {
          case 10:
          case 32:
          case 9:
          case 13:
          case 12: {
            o = h;
            do (o += 1), (i = r.charCodeAt(o));
            while (i === 32 || i === 10 || i === 9 || i === 13 || i === 12);
            (y = ['space', r.slice(h, o)]), (h = o - 1);
            break;
          }
          case 91:
          case 93:
          case 123:
          case 125:
          case 58:
          case 59:
          case 41: {
            let O = String.fromCharCode(i);
            y = [O, O, h];
            break;
          }
          case 44: {
            y = ['word', ',', h, h + 1];
            break;
          }
          case 40: {
            if (
              ((p = d.length ? d.pop()[1] : ''),
              (l = r.charCodeAt(h + 1)),
              p === 'url' && l !== 39 && l !== 34)
            ) {
              for (b = 1, f = !1, o = h + 1; o <= r.length - 1; ) {
                if (((l = r.charCodeAt(o)), l === 92)) f = !f;
                else if (l === 40) b += 1;
                else if (l === 41 && ((b -= 1), b === 0)) break;
                o += 1;
              }
              (a = r.slice(h, o + 1)), (y = ['brackets', a, h, o]), (h = o);
            } else
              (o = r.indexOf(')', h + 1)),
                (a = r.slice(h, o + 1)),
                o === -1 || Qf.test(a)
                  ? (y = ['(', '(', h])
                  : ((y = ['brackets', a, h, o]), (h = o));
            break;
          }
          case 39:
          case 34: {
            for (
              u = i, o = h, f = !1;
              o < x &&
              (o++,
              o === x && v('string'),
              (i = r.charCodeAt(o)),
              (l = r.charCodeAt(o + 1)),
              !(!f && i === u));

            )
              i === 92 ? (f = !f) : f ? (f = !1) : i === 35 && l === 123 && F();
            (y = ['string', r.slice(h, o + 1), h, o]), (h = o);
            break;
          }
          case 64: {
            (sr.lastIndex = h + 1),
              sr.test(r),
              sr.lastIndex === 0 ? (o = r.length - 1) : (o = sr.lastIndex - 2),
              (y = ['at-word', r.slice(h, o + 1), h, o]),
              (h = o);
            break;
          }
          case 92: {
            for (o = h, c = !0; r.charCodeAt(o + 1) === 92; ) (o += 1), (c = !c);
            if (
              ((i = r.charCodeAt(o + 1)),
              c &&
                i !== 47 &&
                i !== 32 &&
                i !== 10 &&
                i !== 9 &&
                i !== 13 &&
                i !== 12 &&
                ((o += 1), ea.test(r.charAt(o))))
            ) {
              for (; ea.test(r.charAt(o + 1)); ) o += 1;
              r.charCodeAt(o + 1) === 32 && (o += 1);
            }
            (y = ['word', r.slice(h, o + 1), h, o]), (h = o);
            break;
          }
          default:
            (l = r.charCodeAt(h + 1)),
              i === 35 && l === 123
                ? ((o = h), F(), (a = r.slice(h, o + 1)), (y = ['word', a, h, o]), (h = o))
                : i === 47 && l === 42
                  ? ((o = r.indexOf('*/', h + 2) + 1),
                    o === 0 && (n || C ? (o = r.length) : v('comment')),
                    (y = ['comment', r.slice(h, o + 1), h, o]),
                    (h = o))
                  : i === 47 && l === 47
                    ? ((ir.lastIndex = h + 1),
                      ir.test(r),
                      ir.lastIndex === 0 ? (o = r.length - 1) : (o = ir.lastIndex - 2),
                      (a = r.slice(h, o + 1)),
                      (y = ['comment', a, h, o, 'inline']),
                      (h = o))
                    : ((nr.lastIndex = h + 1),
                      nr.test(r),
                      nr.lastIndex === 0 ? (o = r.length - 1) : (o = nr.lastIndex - 2),
                      (y = ['word', r.slice(h, o + 1), h, o]),
                      d.push(y),
                      (h = o));
            break;
        }
        return h++, y;
      }
      function W(T) {
        m.push(T);
      }
      return { back: W, endOfFile: N, nextToken: Q, position: w };
    };
  });
  var na = g((yx, sa) => {
    var { Comment: Jf } = rr(),
      Xf = Xt(),
      Zf = Zo(),
      ep = ra(),
      Cs = class extends Xf {
        atrule(e) {
          let s = e[1],
            r = e;
          for (; !this.tokenizer.endOfFile(); ) {
            let n = this.tokenizer.nextToken();
            if (n[0] === 'word' && n[2] === r[3] + 1) (s += n[1]), (r = n);
            else {
              this.tokenizer.back(n);
              break;
            }
          }
          super.atrule(['at-word', s, e[2], r[3]]);
        }
        comment(e) {
          if (e[4] === 'inline') {
            let s = new Jf();
            this.init(s, e[2]), (s.raws.inline = !0);
            let r = this.input.fromOffset(e[3]);
            s.source.end = { column: r.col, line: r.line, offset: e[3] + 1 };
            let n = e[1].slice(2);
            if (/^\s*$/.test(n)) (s.text = ''), (s.raws.left = n), (s.raws.right = '');
            else {
              let i = n.match(/^(\s*)([^]*\S)(\s*)$/),
                o = i[2].replace(/(\*\/|\/\*)/g, '*//*');
              (s.text = o), (s.raws.left = i[1]), (s.raws.right = i[3]), (s.raws.text = i[2]);
            }
          } else super.comment(e);
        }
        createTokenizer() {
          this.tokenizer = ep(this.input);
        }
        raw(e, s, r, n) {
          if ((super.raw(e, s, r, n), e.raws[s])) {
            let i = e.raws[s].raw;
            (e.raws[s].raw = r.reduce((o, u) => {
              if (u[0] === 'comment' && u[4] === 'inline') {
                let a = u[1].slice(2).replace(/(\*\/|\/\*)/g, '*//*');
                return o + '/*' + a + '*/';
              } else return o + u[1];
            }, '')),
              i !== e.raws[s].raw && (e.raws[s].scss = i);
          }
        }
        rule(e) {
          let s = !1,
            r = 0,
            n = '';
          for (let i of e)
            if (s) i[0] !== 'comment' && i[0] !== '{' && (n += i[1]);
            else {
              if (
                i[0] === 'space' &&
                i[1].includes(`
`)
              )
                break;
              i[0] === '('
                ? (r += 1)
                : i[0] === ')'
                  ? (r -= 1)
                  : r === 0 && i[0] === ':' && (s = !0);
            }
          if (!s || n.trim() === '' || /^[#:A-Za-z-]/.test(n)) super.rule(e);
          else {
            e.pop();
            let i = new Zf();
            this.init(i, e[0][2]);
            let o;
            for (let a = e.length - 1; a >= 0; a--)
              if (e[a][0] !== 'space') {
                o = e[a];
                break;
              }
            if (o[3]) {
              let a = this.input.fromOffset(o[3]);
              i.source.end = { column: a.col, line: a.line, offset: o[3] + 1 };
            } else {
              let a = this.input.fromOffset(o[2]);
              i.source.end = { column: a.col, line: a.line, offset: o[2] + 1 };
            }
            for (; e[0][0] !== 'word'; ) i.raws.before += e.shift()[1];
            if (e[0][2]) {
              let a = this.input.fromOffset(e[0][2]);
              i.source.start = { column: a.col, line: a.line, offset: e[0][2] };
            }
            for (i.prop = ''; e.length; ) {
              let a = e[0][0];
              if (a === ':' || a === 'space' || a === 'comment') break;
              i.prop += e.shift()[1];
            }
            i.raws.between = '';
            let u;
            for (; e.length; )
              if (((u = e.shift()), u[0] === ':')) {
                i.raws.between += u[1];
                break;
              } else i.raws.between += u[1];
            (i.prop[0] === '_' || i.prop[0] === '*') &&
              ((i.raws.before += i.prop[0]), (i.prop = i.prop.slice(1))),
              (i.raws.between += this.spacesAndCommentsFromStart(e)),
              this.precheckMissedSemicolon(e);
            for (let a = e.length - 1; a > 0; a--) {
              if (((u = e[a]), u[1] === '!important')) {
                i.important = !0;
                let c = this.stringFrom(e, a);
                (c = this.spacesFromEnd(e) + c), c !== ' !important' && (i.raws.important = c);
                break;
              } else if (u[1] === 'important') {
                let c = e.slice(0),
                  f = '';
                for (let p = a; p > 0; p--) {
                  let l = c[p][0];
                  if (f.trim().indexOf('!') === 0 && l !== 'space') break;
                  f = c.pop()[1] + f;
                }
                f.trim().indexOf('!') === 0 &&
                  ((i.important = !0), (i.raws.important = f), (e = c));
              }
              if (u[0] !== 'space' && u[0] !== 'comment') break;
            }
            this.raw(i, 'value', e),
              i.value.includes(':') && this.checkMissedSemicolon(e),
              (this.current = i);
          }
        }
      };
    sa.exports = Cs;
  });
  var oa = g((gx, ia) => {
    var { Input: tp } = rr(),
      rp = na();
    ia.exports = function (e, s) {
      let r = new tp(e, s),
        n = new rp(r);
      return n.parse(), n.root;
    };
  });
  var As = g(Os => {
    'use strict';
    Object.defineProperty(Os, '__esModule', { value: !0 });
    function np(t) {
      (this.after = t.after),
        (this.before = t.before),
        (this.type = t.type),
        (this.value = t.value),
        (this.sourceIndex = t.sourceIndex);
    }
    Os.default = np;
  });
  var Ps = g(Ns => {
    'use strict';
    Object.defineProperty(Ns, '__esModule', { value: !0 });
    var ip = As(),
      ua = op(ip);
    function op(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function Et(t) {
      var e = this;
      this.constructor(t),
        (this.nodes = t.nodes),
        this.after === void 0 &&
          (this.after = this.nodes.length > 0 ? this.nodes[this.nodes.length - 1].after : ''),
        this.before === void 0 && (this.before = this.nodes.length > 0 ? this.nodes[0].before : ''),
        this.sourceIndex === void 0 && (this.sourceIndex = this.before.length),
        this.nodes.forEach(function (s) {
          s.parent = e;
        });
    }
    Et.prototype = Object.create(ua.default.prototype);
    Et.constructor = ua.default;
    Et.prototype.walk = function (e, s) {
      for (
        var r = typeof e == 'string' || e instanceof RegExp,
          n = r ? s : e,
          i = typeof e == 'string' ? new RegExp(e) : e,
          o = 0;
        o < this.nodes.length;
        o++
      ) {
        var u = this.nodes[o],
          a = r ? i.test(u.type) : !0;
        if ((a && n && n(u, o, this.nodes) === !1) || (u.nodes && u.walk(e, s) === !1)) return !1;
      }
      return !0;
    };
    Et.prototype.each = function () {
      for (
        var e = arguments.length <= 0 || arguments[0] === void 0 ? function () {} : arguments[0],
          s = 0;
        s < this.nodes.length;
        s++
      ) {
        var r = this.nodes[s];
        if (e(r, s, this.nodes) === !1) return !1;
      }
      return !0;
    };
    Ns.default = Et;
  });
  var pa = g(kt => {
    'use strict';
    Object.defineProperty(kt, '__esModule', { value: !0 });
    kt.parseMediaFeature = fa;
    kt.parseMediaQuery = Is;
    kt.parseMediaList = lp;
    var ap = As(),
      la = ca(ap),
      up = Ps(),
      Rs = ca(up);
    function ca(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function fa(t) {
      var e = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1],
        s = [{ mode: 'normal', character: null }],
        r = [],
        n = 0,
        i = '',
        o = null,
        u = null,
        a = e,
        c = t;
      t[0] === '(' && t[t.length - 1] === ')' && ((c = t.substring(1, t.length - 1)), a++);
      for (var f = 0; f < c.length; f++) {
        var p = c[f];
        if (
          ((p === "'" || p === '"') &&
            (s[n].isCalculationEnabled === !0
              ? (s.push({ mode: 'string', isCalculationEnabled: !1, character: p }), n++)
              : s[n].mode === 'string' &&
                s[n].character === p &&
                c[f - 1] !== '\\' &&
                (s.pop(), n--)),
          p === '{'
            ? (s.push({ mode: 'interpolation', isCalculationEnabled: !0 }), n++)
            : p === '}' && (s.pop(), n--),
          s[n].mode === 'normal' && p === ':')
        ) {
          var l = c.substring(f + 1);
          (u = {
            type: 'value',
            before: /^(\s*)/.exec(l)[1],
            after: /(\s*)$/.exec(l)[1],
            value: l.trim(),
          }),
            (u.sourceIndex = u.before.length + f + 1 + a),
            (o = { type: 'colon', sourceIndex: f + a, after: u.before, value: ':' });
          break;
        }
        i += p;
      }
      return (
        (i = {
          type: 'media-feature',
          before: /^(\s*)/.exec(i)[1],
          after: /(\s*)$/.exec(i)[1],
          value: i.trim(),
        }),
        (i.sourceIndex = i.before.length + a),
        r.push(i),
        o !== null && ((o.before = i.after), r.push(o)),
        u !== null && r.push(u),
        r
      );
    }
    function Is(t) {
      var e = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1],
        s = [],
        r = 0,
        n = !1,
        i = void 0;
      function o() {
        return { before: '', after: '', value: '' };
      }
      i = o();
      for (var u = 0; u < t.length; u++) {
        var a = t[u];
        n
          ? ((i.value += a), (a === '{' || a === '(') && r++, (a === ')' || a === '}') && r--)
          : a.search(/\s/) !== -1
            ? (i.before += a)
            : (a === '(' && ((i.type = 'media-feature-expression'), r++),
              (i.value = a),
              (i.sourceIndex = e + u),
              (n = !0)),
          n &&
            r === 0 &&
            (a === ')' || u === t.length - 1 || t[u + 1].search(/\s/) !== -1) &&
            (['not', 'only', 'and'].indexOf(i.value) !== -1 && (i.type = 'keyword'),
            i.type === 'media-feature-expression' && (i.nodes = fa(i.value, i.sourceIndex)),
            s.push(Array.isArray(i.nodes) ? new Rs.default(i) : new la.default(i)),
            (i = o()),
            (n = !1));
      }
      for (var c = 0; c < s.length; c++)
        if (((i = s[c]), c > 0 && (s[c - 1].after = i.before), i.type === void 0)) {
          if (c > 0) {
            if (s[c - 1].type === 'media-feature-expression') {
              i.type = 'keyword';
              continue;
            }
            if (s[c - 1].value === 'not' || s[c - 1].value === 'only') {
              i.type = 'media-type';
              continue;
            }
            if (s[c - 1].value === 'and') {
              i.type = 'media-feature-expression';
              continue;
            }
            s[c - 1].type === 'media-type' &&
              (s[c + 1]
                ? (i.type =
                    s[c + 1].type === 'media-feature-expression'
                      ? 'keyword'
                      : 'media-feature-expression')
                : (i.type = 'media-feature-expression'));
          }
          if (c === 0) {
            if (!s[c + 1]) {
              i.type = 'media-type';
              continue;
            }
            if (
              s[c + 1] &&
              (s[c + 1].type === 'media-feature-expression' || s[c + 1].type === 'keyword')
            ) {
              i.type = 'media-type';
              continue;
            }
            if (s[c + 2]) {
              if (s[c + 2].type === 'media-feature-expression') {
                (i.type = 'media-type'), (s[c + 1].type = 'keyword');
                continue;
              }
              if (s[c + 2].type === 'keyword') {
                (i.type = 'keyword'), (s[c + 1].type = 'media-type');
                continue;
              }
            }
            if (s[c + 3] && s[c + 3].type === 'media-feature-expression') {
              (i.type = 'keyword'), (s[c + 1].type = 'media-type'), (s[c + 2].type = 'keyword');
              continue;
            }
          }
        }
      return s;
    }
    function lp(t) {
      var e = [],
        s = 0,
        r = 0,
        n = /^(\s*)url\s*\(/.exec(t);
      if (n !== null) {
        for (var i = n[0].length, o = 1; o > 0; ) {
          var u = t[i];
          u === '(' && o++, u === ')' && o--, i++;
        }
        e.unshift(
          new la.default({
            type: 'url',
            value: t.substring(0, i).trim(),
            sourceIndex: n[1].length,
            before: n[1],
            after: /^(\s*)/.exec(t.substring(i))[1],
          })
        ),
          (s = i);
      }
      for (var a = s; a < t.length; a++) {
        var c = t[a];
        if ((c === '(' && r++, c === ')' && r--, r === 0 && c === ',')) {
          var f = t.substring(s, a),
            p = /^(\s*)/.exec(f)[1];
          e.push(
            new Rs.default({
              type: 'media-query',
              value: f.trim(),
              sourceIndex: s + p.length,
              nodes: Is(f, s),
              before: p,
              after: /(\s*)$/.exec(f)[1],
            })
          ),
            (s = a + 1);
        }
      }
      var l = t.substring(s),
        y = /^(\s*)/.exec(l)[1];
      return (
        e.push(
          new Rs.default({
            type: 'media-query',
            value: l.trim(),
            sourceIndex: s + y.length,
            nodes: Is(l, s),
            before: y,
            after: /(\s*)$/.exec(l)[1],
          })
        ),
        e
      );
    }
  });
  var ha = g(qs => {
    'use strict';
    Object.defineProperty(qs, '__esModule', { value: !0 });
    qs.default = dp;
    var cp = Ps(),
      fp = hp(cp),
      pp = pa();
    function hp(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function dp(t) {
      return new fp.default({
        nodes: (0, pp.parseMediaList)(t),
        type: 'media-query-list',
        value: t.trim(),
      });
    }
  });
  var Ds = g((Tx, ya) => {
    ya.exports = function (e, s) {
      if (((s = typeof s == 'number' ? s : 1 / 0), !s))
        return Array.isArray(e)
          ? e.map(function (n) {
              return n;
            })
          : e;
      return r(e, 1);
      function r(n, i) {
        return n.reduce(function (o, u) {
          return Array.isArray(u) && i < s ? o.concat(r(u, i + 1)) : o.concat(u);
        }, []);
      }
    };
  });
  var Bs = g((Cx, ga) => {
    ga.exports = function (t, e) {
      for (var s = -1, r = []; (s = t.indexOf(e, s + 1)) !== -1; ) r.push(s);
      return r;
    };
  });
  var Ms = g((Ox, wa) => {
    'use strict';
    function gp(t, e) {
      for (var s = 1, r = t.length, n = t[0], i = t[0], o = 1; o < r; ++o)
        if (((i = n), (n = t[o]), e(n, i))) {
          if (o === s) {
            s++;
            continue;
          }
          t[s++] = n;
        }
      return (t.length = s), t;
    }
    function wp(t) {
      for (var e = 1, s = t.length, r = t[0], n = t[0], i = 1; i < s; ++i, n = r)
        if (((n = r), (r = t[i]), r !== n)) {
          if (i === e) {
            e++;
            continue;
          }
          t[e++] = r;
        }
      return (t.length = e), t;
    }
    function vp(t, e, s) {
      return t.length === 0 ? t : e ? (s || t.sort(e), gp(t, e)) : (s || t.sort(), wp(t));
    }
    wa.exports = vp;
  });
  var we = g((or, xa) => {
    'use strict';
    or.__esModule = !0;
    var va =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          };
    function xp(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    var bp = function t(e, s) {
        if ((typeof e > 'u' ? 'undefined' : va(e)) !== 'object') return e;
        var r = new e.constructor();
        for (var n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n],
              o = typeof i > 'u' ? 'undefined' : va(i);
            n === 'parent' && o === 'object'
              ? s && (r[n] = s)
              : i instanceof Array
                ? (r[n] = i.map(function (u) {
                    return t(u, r);
                  }))
                : (r[n] = t(i, r));
          }
        return r;
      },
      _p = (function () {
        function t() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          xp(this, t);
          for (var s in e) this[s] = e[s];
          var r = e.spaces;
          r = r === void 0 ? {} : r;
          var n = r.before,
            i = n === void 0 ? '' : n,
            o = r.after,
            u = o === void 0 ? '' : o;
          this.spaces = { before: i, after: u };
        }
        return (
          (t.prototype.remove = function () {
            return this.parent && this.parent.removeChild(this), (this.parent = void 0), this;
          }),
          (t.prototype.replaceWith = function () {
            if (this.parent) {
              for (var s in arguments) this.parent.insertBefore(this, arguments[s]);
              this.remove();
            }
            return this;
          }),
          (t.prototype.next = function () {
            return this.parent.at(this.parent.index(this) + 1);
          }),
          (t.prototype.prev = function () {
            return this.parent.at(this.parent.index(this) - 1);
          }),
          (t.prototype.clone = function () {
            var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
              r = bp(this);
            for (var n in s) r[n] = s[n];
            return r;
          }),
          (t.prototype.toString = function () {
            return [this.spaces.before, String(this.value), this.spaces.after].join('');
          }),
          t
        );
      })();
    or.default = _p;
    xa.exports = or.default;
  });
  var B = g(M => {
    'use strict';
    M.__esModule = !0;
    var Ax = (M.TAG = 'tag'),
      Nx = (M.STRING = 'string'),
      Px = (M.SELECTOR = 'selector'),
      Rx = (M.ROOT = 'root'),
      Ix = (M.PSEUDO = 'pseudo'),
      qx = (M.NESTING = 'nesting'),
      Lx = (M.ID = 'id'),
      Dx = (M.COMMENT = 'comment'),
      Bx = (M.COMBINATOR = 'combinator'),
      Mx = (M.CLASS = 'class'),
      Ux = (M.ATTRIBUTE = 'attribute'),
      Fx = (M.UNIVERSAL = 'universal');
  });
  var ur = g((ar, ba) => {
    'use strict';
    ar.__esModule = !0;
    var Ep = (function () {
        function t(e, s) {
          for (var r = 0; r < s.length; r++) {
            var n = s[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (e, s, r) {
          return s && t(e.prototype, s), r && t(e, r), e;
        };
      })(),
      kp = we(),
      Sp = Op(kp),
      Tp = B(),
      Z = Cp(Tp);
    function Cp(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null) for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
      return (e.default = t), e;
    }
    function Op(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function Ap(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function Np(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e && (typeof e == 'object' || typeof e == 'function') ? e : t;
    }
    function Pp(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
    }
    var Rp = (function (t) {
      Pp(e, t);
      function e(s) {
        Ap(this, e);
        var r = Np(this, t.call(this, s));
        return r.nodes || (r.nodes = []), r;
      }
      return (
        (e.prototype.append = function (r) {
          return (r.parent = this), this.nodes.push(r), this;
        }),
        (e.prototype.prepend = function (r) {
          return (r.parent = this), this.nodes.unshift(r), this;
        }),
        (e.prototype.at = function (r) {
          return this.nodes[r];
        }),
        (e.prototype.index = function (r) {
          return typeof r == 'number' ? r : this.nodes.indexOf(r);
        }),
        (e.prototype.removeChild = function (r) {
          (r = this.index(r)), (this.at(r).parent = void 0), this.nodes.splice(r, 1);
          var n = void 0;
          for (var i in this.indexes) (n = this.indexes[i]), n >= r && (this.indexes[i] = n - 1);
          return this;
        }),
        (e.prototype.removeAll = function () {
          for (
            var i = this.nodes, r = Array.isArray(i), n = 0, i = r ? i : i[Symbol.iterator]();
            ;

          ) {
            var o;
            if (r) {
              if (n >= i.length) break;
              o = i[n++];
            } else {
              if (((n = i.next()), n.done)) break;
              o = n.value;
            }
            var u = o;
            u.parent = void 0;
          }
          return (this.nodes = []), this;
        }),
        (e.prototype.empty = function () {
          return this.removeAll();
        }),
        (e.prototype.insertAfter = function (r, n) {
          var i = this.index(r);
          this.nodes.splice(i + 1, 0, n);
          var o = void 0;
          for (var u in this.indexes)
            (o = this.indexes[u]), i <= o && (this.indexes[u] = o + this.nodes.length);
          return this;
        }),
        (e.prototype.insertBefore = function (r, n) {
          var i = this.index(r);
          this.nodes.splice(i, 0, n);
          var o = void 0;
          for (var u in this.indexes)
            (o = this.indexes[u]), i <= o && (this.indexes[u] = o + this.nodes.length);
          return this;
        }),
        (e.prototype.each = function (r) {
          this.lastEach || (this.lastEach = 0),
            this.indexes || (this.indexes = {}),
            this.lastEach++;
          var n = this.lastEach;
          if (((this.indexes[n] = 0), !!this.length)) {
            for (
              var i = void 0, o = void 0;
              this.indexes[n] < this.length &&
              ((i = this.indexes[n]), (o = r(this.at(i), i)), o !== !1);

            )
              this.indexes[n] += 1;
            if ((delete this.indexes[n], o === !1)) return !1;
          }
        }),
        (e.prototype.walk = function (r) {
          return this.each(function (n, i) {
            var o = r(n, i);
            if ((o !== !1 && n.length && (o = n.walk(r)), o === !1)) return !1;
          });
        }),
        (e.prototype.walkAttributes = function (r) {
          var n = this;
          return this.walk(function (i) {
            if (i.type === Z.ATTRIBUTE) return r.call(n, i);
          });
        }),
        (e.prototype.walkClasses = function (r) {
          var n = this;
          return this.walk(function (i) {
            if (i.type === Z.CLASS) return r.call(n, i);
          });
        }),
        (e.prototype.walkCombinators = function (r) {
          var n = this;
          return this.walk(function (i) {
            if (i.type === Z.COMBINATOR) return r.call(n, i);
          });
        }),
        (e.prototype.walkComments = function (r) {
          var n = this;
          return this.walk(function (i) {
            if (i.type === Z.COMMENT) return r.call(n, i);
          });
        }),
        (e.prototype.walkIds = function (r) {
          var n = this;
          return this.walk(function (i) {
            if (i.type === Z.ID) return r.call(n, i);
          });
        }),
        (e.prototype.walkNesting = function (r) {
          var n = this;
          return this.walk(function (i) {
            if (i.type === Z.NESTING) return r.call(n, i);
          });
        }),
        (e.prototype.walkPseudos = function (r) {
          var n = this;
          return this.walk(function (i) {
            if (i.type === Z.PSEUDO) return r.call(n, i);
          });
        }),
        (e.prototype.walkTags = function (r) {
          var n = this;
          return this.walk(function (i) {
            if (i.type === Z.TAG) return r.call(n, i);
          });
        }),
        (e.prototype.walkUniversals = function (r) {
          var n = this;
          return this.walk(function (i) {
            if (i.type === Z.UNIVERSAL) return r.call(n, i);
          });
        }),
        (e.prototype.split = function (r) {
          var n = this,
            i = [];
          return this.reduce(function (o, u, a) {
            var c = r.call(n, u);
            return i.push(u), c ? (o.push(i), (i = [])) : a === n.length - 1 && o.push(i), o;
          }, []);
        }),
        (e.prototype.map = function (r) {
          return this.nodes.map(r);
        }),
        (e.prototype.reduce = function (r, n) {
          return this.nodes.reduce(r, n);
        }),
        (e.prototype.every = function (r) {
          return this.nodes.every(r);
        }),
        (e.prototype.some = function (r) {
          return this.nodes.some(r);
        }),
        (e.prototype.filter = function (r) {
          return this.nodes.filter(r);
        }),
        (e.prototype.sort = function (r) {
          return this.nodes.sort(r);
        }),
        (e.prototype.toString = function () {
          return this.map(String).join('');
        }),
        Ep(e, [
          {
            key: 'first',
            get: function () {
              return this.at(0);
            },
          },
          {
            key: 'last',
            get: function () {
              return this.at(this.length - 1);
            },
          },
          {
            key: 'length',
            get: function () {
              return this.nodes.length;
            },
          },
        ]),
        e
      );
    })(Sp.default);
    ar.default = Rp;
    ba.exports = ar.default;
  });
  var Ea = g((lr, _a) => {
    'use strict';
    lr.__esModule = !0;
    var Ip = ur(),
      qp = Dp(Ip),
      Lp = B();
    function Dp(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function Bp(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function Mp(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e && (typeof e == 'object' || typeof e == 'function') ? e : t;
    }
    function Up(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
    }
    var Fp = (function (t) {
      Up(e, t);
      function e(s) {
        Bp(this, e);
        var r = Mp(this, t.call(this, s));
        return (r.type = Lp.ROOT), r;
      }
      return (
        (e.prototype.toString = function () {
          var r = this.reduce(function (n, i) {
            var o = String(i);
            return o ? n + o + ',' : '';
          }, '').slice(0, -1);
          return this.trailingComma ? r + ',' : r;
        }),
        e
      );
    })(qp.default);
    lr.default = Fp;
    _a.exports = lr.default;
  });
  var Sa = g((cr, ka) => {
    'use strict';
    cr.__esModule = !0;
    var $p = ur(),
      Wp = Vp($p),
      Yp = B();
    function Vp(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function zp(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function Gp(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e && (typeof e == 'object' || typeof e == 'function') ? e : t;
    }
    function jp(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
    }
    var Hp = (function (t) {
      jp(e, t);
      function e(s) {
        zp(this, e);
        var r = Gp(this, t.call(this, s));
        return (r.type = Yp.SELECTOR), r;
      }
      return e;
    })(Wp.default);
    cr.default = Hp;
    ka.exports = cr.default;
  });
  var Ue = g((fr, Ta) => {
    'use strict';
    fr.__esModule = !0;
    var Kp = (function () {
        function t(e, s) {
          for (var r = 0; r < s.length; r++) {
            var n = s[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (e, s, r) {
          return s && t(e.prototype, s), r && t(e, r), e;
        };
      })(),
      Qp = we(),
      Jp = Xp(Qp);
    function Xp(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function Zp(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function eh(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e && (typeof e == 'object' || typeof e == 'function') ? e : t;
    }
    function th(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
    }
    var rh = (function (t) {
      th(e, t);
      function e() {
        return Zp(this, e), eh(this, t.apply(this, arguments));
      }
      return (
        (e.prototype.toString = function () {
          return [this.spaces.before, this.ns, String(this.value), this.spaces.after].join('');
        }),
        Kp(e, [
          {
            key: 'ns',
            get: function () {
              var r = this.namespace;
              return r ? (typeof r == 'string' ? r : '') + '|' : '';
            },
          },
        ]),
        e
      );
    })(Jp.default);
    fr.default = rh;
    Ta.exports = fr.default;
  });
  var Oa = g((pr, Ca) => {
    'use strict';
    pr.__esModule = !0;
    var sh = Ue(),
      nh = oh(sh),
      ih = B();
    function oh(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function ah(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function uh(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e && (typeof e == 'object' || typeof e == 'function') ? e : t;
    }
    function lh(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
    }
    var ch = (function (t) {
      lh(e, t);
      function e(s) {
        ah(this, e);
        var r = uh(this, t.call(this, s));
        return (r.type = ih.CLASS), r;
      }
      return (
        (e.prototype.toString = function () {
          return [this.spaces.before, this.ns, '.' + this.value, this.spaces.after].join('');
        }),
        e
      );
    })(nh.default);
    pr.default = ch;
    Ca.exports = pr.default;
  });
  var Na = g((hr, Aa) => {
    'use strict';
    hr.__esModule = !0;
    var fh = we(),
      ph = dh(fh),
      hh = B();
    function dh(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function mh(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function yh(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e && (typeof e == 'object' || typeof e == 'function') ? e : t;
    }
    function gh(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
    }
    var wh = (function (t) {
      gh(e, t);
      function e(s) {
        mh(this, e);
        var r = yh(this, t.call(this, s));
        return (r.type = hh.COMMENT), r;
      }
      return e;
    })(ph.default);
    hr.default = wh;
    Aa.exports = hr.default;
  });
  var Ra = g((dr, Pa) => {
    'use strict';
    dr.__esModule = !0;
    var vh = Ue(),
      xh = _h(vh),
      bh = B();
    function _h(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function Eh(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function kh(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e && (typeof e == 'object' || typeof e == 'function') ? e : t;
    }
    function Sh(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
    }
    var Th = (function (t) {
      Sh(e, t);
      function e(s) {
        Eh(this, e);
        var r = kh(this, t.call(this, s));
        return (r.type = bh.ID), r;
      }
      return (
        (e.prototype.toString = function () {
          return [this.spaces.before, this.ns, '#' + this.value, this.spaces.after].join('');
        }),
        e
      );
    })(xh.default);
    dr.default = Th;
    Pa.exports = dr.default;
  });
  var qa = g((mr, Ia) => {
    'use strict';
    mr.__esModule = !0;
    var Ch = Ue(),
      Oh = Nh(Ch),
      Ah = B();
    function Nh(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function Ph(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function Rh(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e && (typeof e == 'object' || typeof e == 'function') ? e : t;
    }
    function Ih(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
    }
    var qh = (function (t) {
      Ih(e, t);
      function e(s) {
        Ph(this, e);
        var r = Rh(this, t.call(this, s));
        return (r.type = Ah.TAG), r;
      }
      return e;
    })(Oh.default);
    mr.default = qh;
    Ia.exports = mr.default;
  });
  var Da = g((yr, La) => {
    'use strict';
    yr.__esModule = !0;
    var Lh = we(),
      Dh = Mh(Lh),
      Bh = B();
    function Mh(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function Uh(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function Fh(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e && (typeof e == 'object' || typeof e == 'function') ? e : t;
    }
    function $h(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
    }
    var Wh = (function (t) {
      $h(e, t);
      function e(s) {
        Uh(this, e);
        var r = Fh(this, t.call(this, s));
        return (r.type = Bh.STRING), r;
      }
      return e;
    })(Dh.default);
    yr.default = Wh;
    La.exports = yr.default;
  });
  var Ma = g((gr, Ba) => {
    'use strict';
    gr.__esModule = !0;
    var Yh = ur(),
      Vh = Gh(Yh),
      zh = B();
    function Gh(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function jh(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function Hh(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e && (typeof e == 'object' || typeof e == 'function') ? e : t;
    }
    function Kh(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
    }
    var Qh = (function (t) {
      Kh(e, t);
      function e(s) {
        jh(this, e);
        var r = Hh(this, t.call(this, s));
        return (r.type = zh.PSEUDO), r;
      }
      return (
        (e.prototype.toString = function () {
          var r = this.length ? '(' + this.map(String).join(',') + ')' : '';
          return [this.spaces.before, String(this.value), r, this.spaces.after].join('');
        }),
        e
      );
    })(Vh.default);
    gr.default = Qh;
    Ba.exports = gr.default;
  });
  var Fa = g((wr, Ua) => {
    'use strict';
    wr.__esModule = !0;
    var Jh = Ue(),
      Xh = ed(Jh),
      Zh = B();
    function ed(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function td(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function rd(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e && (typeof e == 'object' || typeof e == 'function') ? e : t;
    }
    function sd(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
    }
    var nd = (function (t) {
      sd(e, t);
      function e(s) {
        td(this, e);
        var r = rd(this, t.call(this, s));
        return (r.type = Zh.ATTRIBUTE), (r.raws = {}), r;
      }
      return (
        (e.prototype.toString = function () {
          var r = [this.spaces.before, '[', this.ns, this.attribute];
          return (
            this.operator && r.push(this.operator),
            this.value && r.push(this.value),
            this.raws.insensitive
              ? r.push(this.raws.insensitive)
              : this.insensitive && r.push(' i'),
            r.push(']'),
            r.concat(this.spaces.after).join('')
          );
        }),
        e
      );
    })(Xh.default);
    wr.default = nd;
    Ua.exports = wr.default;
  });
  var Wa = g((vr, $a) => {
    'use strict';
    vr.__esModule = !0;
    var id = Ue(),
      od = ud(id),
      ad = B();
    function ud(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function ld(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function cd(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e && (typeof e == 'object' || typeof e == 'function') ? e : t;
    }
    function fd(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
    }
    var pd = (function (t) {
      fd(e, t);
      function e(s) {
        ld(this, e);
        var r = cd(this, t.call(this, s));
        return (r.type = ad.UNIVERSAL), (r.value = '*'), r;
      }
      return e;
    })(od.default);
    vr.default = pd;
    $a.exports = vr.default;
  });
  var Va = g((xr, Ya) => {
    'use strict';
    xr.__esModule = !0;
    var hd = we(),
      dd = yd(hd),
      md = B();
    function yd(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function gd(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function wd(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e && (typeof e == 'object' || typeof e == 'function') ? e : t;
    }
    function vd(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
    }
    var xd = (function (t) {
      vd(e, t);
      function e(s) {
        gd(this, e);
        var r = wd(this, t.call(this, s));
        return (r.type = md.COMBINATOR), r;
      }
      return e;
    })(dd.default);
    xr.default = xd;
    Ya.exports = xr.default;
  });
  var Ga = g((br, za) => {
    'use strict';
    br.__esModule = !0;
    var bd = we(),
      _d = kd(bd),
      Ed = B();
    function kd(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function Sd(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function Td(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e && (typeof e == 'object' || typeof e == 'function') ? e : t;
    }
    function Cd(t, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
    }
    var Od = (function (t) {
      Cd(e, t);
      function e(s) {
        Sd(this, e);
        var r = Td(this, t.call(this, s));
        return (r.type = Ed.NESTING), (r.value = '&'), r;
      }
      return e;
    })(_d.default);
    br.default = Od;
    za.exports = br.default;
  });
  var Ha = g((_r, ja) => {
    'use strict';
    _r.__esModule = !0;
    _r.default = Ad;
    function Ad(t) {
      return t.sort(function (e, s) {
        return e - s;
      });
    }
    ja.exports = _r.default;
  });
  var su = g((Sr, ru) => {
    'use strict';
    Sr.__esModule = !0;
    Sr.default = Fd;
    var Ka = 39,
      Nd = 34,
      Us = 92,
      Qa = 47,
      St = 10,
      Fs = 32,
      $s = 12,
      Ws = 9,
      Ys = 13,
      Ja = 43,
      Xa = 62,
      Za = 126,
      eu = 124,
      Pd = 44,
      Rd = 40,
      Id = 41,
      qd = 91,
      Ld = 93,
      Dd = 59,
      tu = 42,
      Bd = 58,
      Md = 38,
      Ud = 64,
      Er = /[ \n\t\r\{\(\)'"\\;/]/g,
      kr = /[ \n\t\r\(\)\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g;
    function Fd(t) {
      for (
        var e = [],
          s = t.css.valueOf(),
          r = void 0,
          n = void 0,
          i = void 0,
          o = void 0,
          u = void 0,
          a = void 0,
          c = void 0,
          f = void 0,
          p = void 0,
          l = void 0,
          y = void 0,
          x = s.length,
          h = -1,
          d = 1,
          m = 0,
          b = function (v, N) {
            if (t.safe) (s += N), (n = s.length - 1);
            else throw t.error('Unclosed ' + v, d, m - h, m);
          };
        m < x;

      ) {
        switch (((r = s.charCodeAt(m)), r === St && ((h = m), (d += 1)), r)) {
          case St:
          case Fs:
          case Ws:
          case Ys:
          case $s:
            n = m;
            do (n += 1), (r = s.charCodeAt(n)), r === St && ((h = n), (d += 1));
            while (r === Fs || r === St || r === Ws || r === Ys || r === $s);
            e.push(['space', s.slice(m, n), d, m - h, m]), (m = n - 1);
            break;
          case Ja:
          case Xa:
          case Za:
          case eu:
            n = m;
            do (n += 1), (r = s.charCodeAt(n));
            while (r === Ja || r === Xa || r === Za || r === eu);
            e.push(['combinator', s.slice(m, n), d, m - h, m]), (m = n - 1);
            break;
          case tu:
            e.push(['*', '*', d, m - h, m]);
            break;
          case Md:
            e.push(['&', '&', d, m - h, m]);
            break;
          case Pd:
            e.push([',', ',', d, m - h, m]);
            break;
          case qd:
            e.push(['[', '[', d, m - h, m]);
            break;
          case Ld:
            e.push([']', ']', d, m - h, m]);
            break;
          case Bd:
            e.push([':', ':', d, m - h, m]);
            break;
          case Dd:
            e.push([';', ';', d, m - h, m]);
            break;
          case Rd:
            e.push(['(', '(', d, m - h, m]);
            break;
          case Id:
            e.push([')', ')', d, m - h, m]);
            break;
          case Ka:
          case Nd:
            (i = r === Ka ? "'" : '"'), (n = m);
            do
              for (
                l = !1, n = s.indexOf(i, n + 1), n === -1 && b('quote', i), y = n;
                s.charCodeAt(y - 1) === Us;

              )
                (y -= 1), (l = !l);
            while (l);
            e.push(['string', s.slice(m, n + 1), d, m - h, d, n - h, m]), (m = n);
            break;
          case Ud:
            (Er.lastIndex = m + 1),
              Er.test(s),
              Er.lastIndex === 0 ? (n = s.length - 1) : (n = Er.lastIndex - 2),
              e.push(['at-word', s.slice(m, n + 1), d, m - h, d, n - h, m]),
              (m = n);
            break;
          case Us:
            for (n = m, c = !0; s.charCodeAt(n + 1) === Us; ) (n += 1), (c = !c);
            (r = s.charCodeAt(n + 1)),
              c && r !== Qa && r !== Fs && r !== St && r !== Ws && r !== Ys && r !== $s && (n += 1),
              e.push(['word', s.slice(m, n + 1), d, m - h, d, n - h, m]),
              (m = n);
            break;
          default:
            r === Qa && s.charCodeAt(m + 1) === tu
              ? ((n = s.indexOf('*/', m + 2) + 1),
                n === 0 && b('comment', '*/'),
                (a = s.slice(m, n + 1)),
                (o = a.split(`
`)),
                (u = o.length - 1),
                u > 0 ? ((f = d + u), (p = n - o[u].length)) : ((f = d), (p = h)),
                e.push(['comment', a, d, m - h, f, n - p, m]),
                (h = p),
                (d = f),
                (m = n))
              : ((kr.lastIndex = m + 1),
                kr.test(s),
                kr.lastIndex === 0 ? (n = s.length - 1) : (n = kr.lastIndex - 2),
                e.push(['word', s.slice(m, n + 1), d, m - h, d, n - h, m]),
                (m = n));
            break;
        }
        m++;
      }
      return e;
    }
    ru.exports = Sr.default;
  });
  var ou = g((Tr, iu) => {
    'use strict';
    Tr.__esModule = !0;
    var $d = (function () {
        function t(e, s) {
          for (var r = 0; r < s.length; r++) {
            var n = s[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (e, s, r) {
          return s && t(e.prototype, s), r && t(e, r), e;
        };
      })(),
      Wd = Ds(),
      Yd = I(Wd),
      Vd = Bs(),
      Vs = I(Vd),
      zd = Ms(),
      Gd = I(zd),
      jd = Ea(),
      Hd = I(jd),
      Kd = Sa(),
      zs = I(Kd),
      Qd = Oa(),
      Jd = I(Qd),
      Xd = Na(),
      Zd = I(Xd),
      em = Ra(),
      tm = I(em),
      rm = qa(),
      sm = I(rm),
      nm = Da(),
      im = I(nm),
      om = Ma(),
      am = I(om),
      um = Fa(),
      lm = I(um),
      cm = Wa(),
      fm = I(cm),
      pm = Va(),
      hm = I(pm),
      dm = Ga(),
      mm = I(dm),
      ym = Ha(),
      gm = I(ym),
      wm = su(),
      nu = I(wm),
      vm = B(),
      xm = bm(vm);
    function bm(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null) for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
      return (e.default = t), e;
    }
    function I(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function _m(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    var Em = (function () {
      function t(e) {
        _m(this, t),
          (this.input = e),
          (this.lossy = e.options.lossless === !1),
          (this.position = 0),
          (this.root = new Hd.default());
        var s = new zs.default();
        return (
          this.root.append(s),
          (this.current = s),
          this.lossy
            ? (this.tokens = (0, nu.default)({ safe: e.safe, css: e.css.trim() }))
            : (this.tokens = (0, nu.default)(e)),
          this.loop()
        );
      }
      return (
        (t.prototype.attribute = function () {
          var s = '',
            r = void 0,
            n = this.currToken;
          for (this.position++; this.position < this.tokens.length && this.currToken[0] !== ']'; )
            (s += this.tokens[this.position][1]), this.position++;
          this.position === this.tokens.length &&
            !~s.indexOf(']') &&
            this.error('Expected a closing square bracket.');
          var i = s.split(/((?:[*~^$|]?=))([^]*)/),
            o = i[0].split(/(\|)/g),
            u = {
              operator: i[1],
              value: i[2],
              source: {
                start: { line: n[2], column: n[3] },
                end: { line: this.currToken[2], column: this.currToken[3] },
              },
              sourceIndex: n[4],
            };
          if (
            (o.length > 1
              ? (o[0] === '' && (o[0] = !0),
                (u.attribute = this.parseValue(o[2])),
                (u.namespace = this.parseNamespace(o[0])))
              : (u.attribute = this.parseValue(i[0])),
            (r = new lm.default(u)),
            i[2])
          ) {
            var a = i[2].split(/(\s+i\s*?)$/),
              c = a[0].trim();
            (r.value = this.lossy ? c : a[0]),
              a[1] && ((r.insensitive = !0), this.lossy || (r.raws.insensitive = a[1])),
              (r.quoted = c[0] === "'" || c[0] === '"'),
              (r.raws.unquoted = r.quoted ? c.slice(1, -1) : c);
          }
          this.newNode(r), this.position++;
        }),
        (t.prototype.combinator = function () {
          if (this.currToken[1] === '|') return this.namespace();
          for (
            var s = new hm.default({
              value: '',
              source: {
                start: { line: this.currToken[2], column: this.currToken[3] },
                end: { line: this.currToken[2], column: this.currToken[3] },
              },
              sourceIndex: this.currToken[4],
            });
            this.position < this.tokens.length &&
            this.currToken &&
            (this.currToken[0] === 'space' || this.currToken[0] === 'combinator');

          )
            this.nextToken && this.nextToken[0] === 'combinator'
              ? ((s.spaces.before = this.parseSpace(this.currToken[1])),
                (s.source.start.line = this.nextToken[2]),
                (s.source.start.column = this.nextToken[3]),
                (s.source.end.column = this.nextToken[3]),
                (s.source.end.line = this.nextToken[2]),
                (s.sourceIndex = this.nextToken[4]))
              : this.prevToken && this.prevToken[0] === 'combinator'
                ? (s.spaces.after = this.parseSpace(this.currToken[1]))
                : this.currToken[0] === 'combinator'
                  ? (s.value = this.currToken[1])
                  : this.currToken[0] === 'space' &&
                    (s.value = this.parseSpace(this.currToken[1], ' ')),
              this.position++;
          return this.newNode(s);
        }),
        (t.prototype.comma = function () {
          if (this.position === this.tokens.length - 1) {
            (this.root.trailingComma = !0), this.position++;
            return;
          }
          var s = new zs.default();
          this.current.parent.append(s), (this.current = s), this.position++;
        }),
        (t.prototype.comment = function () {
          var s = new Zd.default({
            value: this.currToken[1],
            source: {
              start: { line: this.currToken[2], column: this.currToken[3] },
              end: { line: this.currToken[4], column: this.currToken[5] },
            },
            sourceIndex: this.currToken[6],
          });
          this.newNode(s), this.position++;
        }),
        (t.prototype.error = function (s) {
          throw new this.input.error(s);
        }),
        (t.prototype.missingBackslash = function () {
          return this.error('Expected a backslash preceding the semicolon.');
        }),
        (t.prototype.missingParenthesis = function () {
          return this.error('Expected opening parenthesis.');
        }),
        (t.prototype.missingSquareBracket = function () {
          return this.error('Expected opening square bracket.');
        }),
        (t.prototype.namespace = function () {
          var s = (this.prevToken && this.prevToken[1]) || !0;
          if (this.nextToken[0] === 'word') return this.position++, this.word(s);
          if (this.nextToken[0] === '*') return this.position++, this.universal(s);
        }),
        (t.prototype.nesting = function () {
          this.newNode(
            new mm.default({
              value: this.currToken[1],
              source: {
                start: { line: this.currToken[2], column: this.currToken[3] },
                end: { line: this.currToken[2], column: this.currToken[3] },
              },
              sourceIndex: this.currToken[4],
            })
          ),
            this.position++;
        }),
        (t.prototype.parentheses = function () {
          var s = this.current.last;
          if (s && s.type === xm.PSEUDO) {
            var r = new zs.default(),
              n = this.current;
            s.append(r), (this.current = r);
            var i = 1;
            for (this.position++; this.position < this.tokens.length && i; )
              this.currToken[0] === '(' && i++,
                this.currToken[0] === ')' && i--,
                i
                  ? this.parse()
                  : ((r.parent.source.end.line = this.currToken[2]),
                    (r.parent.source.end.column = this.currToken[3]),
                    this.position++);
            i && this.error('Expected closing parenthesis.'), (this.current = n);
          } else {
            var o = 1;
            for (this.position++, s.value += '('; this.position < this.tokens.length && o; )
              this.currToken[0] === '(' && o++,
                this.currToken[0] === ')' && o--,
                (s.value += this.parseParenthesisToken(this.currToken)),
                this.position++;
            o && this.error('Expected closing parenthesis.');
          }
        }),
        (t.prototype.pseudo = function () {
          for (
            var s = this, r = '', n = this.currToken;
            this.currToken && this.currToken[0] === ':';

          )
            (r += this.currToken[1]), this.position++;
          if (!this.currToken) return this.error('Expected pseudo-class or pseudo-element');
          if (this.currToken[0] === 'word') {
            var i = void 0;
            this.splitWord(!1, function (o, u) {
              (r += o),
                (i = new am.default({
                  value: r,
                  source: {
                    start: { line: n[2], column: n[3] },
                    end: { line: s.currToken[4], column: s.currToken[5] },
                  },
                  sourceIndex: n[4],
                })),
                s.newNode(i),
                u > 1 && s.nextToken && s.nextToken[0] === '(' && s.error('Misplaced parenthesis.');
            });
          } else this.error('Unexpected "' + this.currToken[0] + '" found.');
        }),
        (t.prototype.space = function () {
          var s = this.currToken;
          this.position === 0 || this.prevToken[0] === ',' || this.prevToken[0] === '('
            ? ((this.spaces = this.parseSpace(s[1])), this.position++)
            : this.position === this.tokens.length - 1 ||
                this.nextToken[0] === ',' ||
                this.nextToken[0] === ')'
              ? ((this.current.last.spaces.after = this.parseSpace(s[1])), this.position++)
              : this.combinator();
        }),
        (t.prototype.string = function () {
          var s = this.currToken;
          this.newNode(
            new im.default({
              value: this.currToken[1],
              source: { start: { line: s[2], column: s[3] }, end: { line: s[4], column: s[5] } },
              sourceIndex: s[6],
            })
          ),
            this.position++;
        }),
        (t.prototype.universal = function (s) {
          var r = this.nextToken;
          if (r && r[1] === '|') return this.position++, this.namespace();
          this.newNode(
            new fm.default({
              value: this.currToken[1],
              source: {
                start: { line: this.currToken[2], column: this.currToken[3] },
                end: { line: this.currToken[2], column: this.currToken[3] },
              },
              sourceIndex: this.currToken[4],
            }),
            s
          ),
            this.position++;
        }),
        (t.prototype.splitWord = function (s, r) {
          for (var n = this, i = this.nextToken, o = this.currToken[1]; i && i[0] === 'word'; ) {
            this.position++;
            var u = this.currToken[1];
            if (((o += u), u.lastIndexOf('\\') === u.length - 1)) {
              var a = this.nextToken;
              a && a[0] === 'space' && ((o += this.parseSpace(a[1], ' ')), this.position++);
            }
            i = this.nextToken;
          }
          var c = (0, Vs.default)(o, '.'),
            f = (0, Vs.default)(o, '#'),
            p = (0, Vs.default)(o, '#{');
          p.length &&
            (f = f.filter(function (y) {
              return !~p.indexOf(y);
            }));
          var l = (0, gm.default)((0, Gd.default)((0, Yd.default)([[0], c, f])));
          l.forEach(function (y, x) {
            var h = l[x + 1] || o.length,
              d = o.slice(y, h);
            if (x === 0 && r) return r.call(n, d, l.length);
            var m = void 0;
            ~c.indexOf(y)
              ? (m = new Jd.default({
                  value: d.slice(1),
                  source: {
                    start: { line: n.currToken[2], column: n.currToken[3] + y },
                    end: { line: n.currToken[4], column: n.currToken[3] + (h - 1) },
                  },
                  sourceIndex: n.currToken[6] + l[x],
                }))
              : ~f.indexOf(y)
                ? (m = new tm.default({
                    value: d.slice(1),
                    source: {
                      start: { line: n.currToken[2], column: n.currToken[3] + y },
                      end: { line: n.currToken[4], column: n.currToken[3] + (h - 1) },
                    },
                    sourceIndex: n.currToken[6] + l[x],
                  }))
                : (m = new sm.default({
                    value: d,
                    source: {
                      start: { line: n.currToken[2], column: n.currToken[3] + y },
                      end: { line: n.currToken[4], column: n.currToken[3] + (h - 1) },
                    },
                    sourceIndex: n.currToken[6] + l[x],
                  })),
              n.newNode(m, s);
          }),
            this.position++;
        }),
        (t.prototype.word = function (s) {
          var r = this.nextToken;
          return r && r[1] === '|' ? (this.position++, this.namespace()) : this.splitWord(s);
        }),
        (t.prototype.loop = function () {
          for (; this.position < this.tokens.length; ) this.parse(!0);
          return this.root;
        }),
        (t.prototype.parse = function (s) {
          switch (this.currToken[0]) {
            case 'space':
              this.space();
              break;
            case 'comment':
              this.comment();
              break;
            case '(':
              this.parentheses();
              break;
            case ')':
              s && this.missingParenthesis();
              break;
            case '[':
              this.attribute();
              break;
            case ']':
              this.missingSquareBracket();
              break;
            case 'at-word':
            case 'word':
              this.word();
              break;
            case ':':
              this.pseudo();
              break;
            case ';':
              this.missingBackslash();
              break;
            case ',':
              this.comma();
              break;
            case '*':
              this.universal();
              break;
            case '&':
              this.nesting();
              break;
            case 'combinator':
              this.combinator();
              break;
            case 'string':
              this.string();
              break;
          }
        }),
        (t.prototype.parseNamespace = function (s) {
          if (this.lossy && typeof s == 'string') {
            var r = s.trim();
            return r.length ? r : !0;
          }
          return s;
        }),
        (t.prototype.parseSpace = function (s, r) {
          return this.lossy ? r || '' : s;
        }),
        (t.prototype.parseValue = function (s) {
          return this.lossy && s && typeof s == 'string' ? s.trim() : s;
        }),
        (t.prototype.parseParenthesisToken = function (s) {
          return this.lossy
            ? s[0] === 'space'
              ? this.parseSpace(s[1], ' ')
              : this.parseValue(s[1])
            : s[1];
        }),
        (t.prototype.newNode = function (s, r) {
          return (
            r && (s.namespace = this.parseNamespace(r)),
            this.spaces && ((s.spaces.before = this.spaces), (this.spaces = '')),
            this.current.append(s)
          );
        }),
        $d(t, [
          {
            key: 'currToken',
            get: function () {
              return this.tokens[this.position];
            },
          },
          {
            key: 'nextToken',
            get: function () {
              return this.tokens[this.position + 1];
            },
          },
          {
            key: 'prevToken',
            get: function () {
              return this.tokens[this.position - 1];
            },
          },
        ]),
        t
      );
    })();
    Tr.default = Em;
    iu.exports = Tr.default;
  });
  var uu = g((Cr, au) => {
    'use strict';
    Cr.__esModule = !0;
    var km = (function () {
        function t(e, s) {
          for (var r = 0; r < s.length; r++) {
            var n = s[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (e, s, r) {
          return s && t(e.prototype, s), r && t(e, r), e;
        };
      })(),
      Sm = ou(),
      Tm = Cm(Sm);
    function Cm(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function Om(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    var Am = (function () {
      function t(e) {
        return Om(this, t), (this.func = e || function () {}), this;
      }
      return (
        (t.prototype.process = function (s) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            n = new Tm.default({
              css: s,
              error: function (o) {
                throw new Error(o);
              },
              options: r,
            });
          return (this.res = n), this.func(n), this;
        }),
        km(t, [
          {
            key: 'result',
            get: function () {
              return String(this.res);
            },
          },
        ]),
        t
      );
    })();
    Cr.default = Am;
    au.exports = Cr.default;
  });
  var G = g((zx, cu) => {
    'use strict';
    var Gs = function (t, e) {
      let s = new t.constructor();
      for (let r in t) {
        if (!t.hasOwnProperty(r)) continue;
        let n = t[r],
          i = typeof n;
        r === 'parent' && i === 'object'
          ? e && (s[r] = e)
          : r === 'source'
            ? (s[r] = n)
            : n instanceof Array
              ? (s[r] = n.map(o => Gs(o, s)))
              : r !== 'before' &&
                r !== 'after' &&
                r !== 'between' &&
                r !== 'semicolon' &&
                (i === 'object' && n !== null && (n = Gs(n)), (s[r] = n));
      }
      return s;
    };
    cu.exports = class {
      constructor(e) {
        (e = e || {}), (this.raws = { before: '', after: '' });
        for (let s in e) this[s] = e[s];
      }
      remove() {
        return this.parent && this.parent.removeChild(this), (this.parent = void 0), this;
      }
      toString() {
        return [this.raws.before, String(this.value), this.raws.after].join('');
      }
      clone(e) {
        e = e || {};
        let s = Gs(this);
        for (let r in e) s[r] = e[r];
        return s;
      }
      cloneBefore(e) {
        e = e || {};
        let s = this.clone(e);
        return this.parent.insertBefore(this, s), s;
      }
      cloneAfter(e) {
        e = e || {};
        let s = this.clone(e);
        return this.parent.insertAfter(this, s), s;
      }
      replaceWith() {
        let e = Array.prototype.slice.call(arguments);
        if (this.parent) {
          for (let s of e) this.parent.insertBefore(this, s);
          this.remove();
        }
        return this;
      }
      moveTo(e) {
        return this.cleanRaws(this.root() === e.root()), this.remove(), e.append(this), this;
      }
      moveBefore(e) {
        return (
          this.cleanRaws(this.root() === e.root()),
          this.remove(),
          e.parent.insertBefore(e, this),
          this
        );
      }
      moveAfter(e) {
        return (
          this.cleanRaws(this.root() === e.root()),
          this.remove(),
          e.parent.insertAfter(e, this),
          this
        );
      }
      next() {
        let e = this.parent.index(this);
        return this.parent.nodes[e + 1];
      }
      prev() {
        let e = this.parent.index(this);
        return this.parent.nodes[e - 1];
      }
      toJSON() {
        let e = {};
        for (let s in this) {
          if (!this.hasOwnProperty(s) || s === 'parent') continue;
          let r = this[s];
          r instanceof Array
            ? (e[s] = r.map(n => (typeof n == 'object' && n.toJSON ? n.toJSON() : n)))
            : typeof r == 'object' && r.toJSON
              ? (e[s] = r.toJSON())
              : (e[s] = r);
        }
        return e;
      }
      root() {
        let e = this;
        for (; e.parent; ) e = e.parent;
        return e;
      }
      cleanRaws(e) {
        delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
      }
      positionInside(e) {
        let s = this.toString(),
          r = this.source.start.column,
          n = this.source.start.line;
        for (let i = 0; i < e; i++)
          s[i] ===
          `
`
            ? ((r = 1), (n += 1))
            : (r += 1);
        return { line: n, column: r };
      }
      positionBy(e) {
        let s = this.source.start;
        if (Object(e).index) s = this.positionInside(e.index);
        else if (Object(e).word) {
          let r = this.toString().indexOf(e.word);
          r !== -1 && (s = this.positionInside(r));
        }
        return s;
      }
    };
  });
  var U = g((Gx, fu) => {
    'use strict';
    var Pm = G(),
      Fe = class extends Pm {
        constructor(e) {
          super(e), this.nodes || (this.nodes = []);
        }
        push(e) {
          return (e.parent = this), this.nodes.push(e), this;
        }
        each(e) {
          this.lastEach || (this.lastEach = 0),
            this.indexes || (this.indexes = {}),
            (this.lastEach += 1);
          let s = this.lastEach,
            r,
            n;
          if (((this.indexes[s] = 0), !!this.nodes)) {
            for (
              ;
              this.indexes[s] < this.nodes.length &&
              ((r = this.indexes[s]), (n = e(this.nodes[r], r)), n !== !1);

            )
              this.indexes[s] += 1;
            return delete this.indexes[s], n;
          }
        }
        walk(e) {
          return this.each((s, r) => {
            let n = e(s, r);
            return n !== !1 && s.walk && (n = s.walk(e)), n;
          });
        }
        walkType(e, s) {
          if (!e || !s) throw new Error('Parameters {type} and {callback} are required.');
          let r = typeof e == 'function';
          return this.walk((n, i) => {
            if ((r && n instanceof e) || (!r && n.type === e)) return s.call(this, n, i);
          });
        }
        append(e) {
          return (e.parent = this), this.nodes.push(e), this;
        }
        prepend(e) {
          return (e.parent = this), this.nodes.unshift(e), this;
        }
        cleanRaws(e) {
          if ((super.cleanRaws(e), this.nodes)) for (let s of this.nodes) s.cleanRaws(e);
        }
        insertAfter(e, s) {
          let r = this.index(e),
            n;
          this.nodes.splice(r + 1, 0, s);
          for (let i in this.indexes)
            (n = this.indexes[i]), r <= n && (this.indexes[i] = n + this.nodes.length);
          return this;
        }
        insertBefore(e, s) {
          let r = this.index(e),
            n;
          this.nodes.splice(r, 0, s);
          for (let i in this.indexes)
            (n = this.indexes[i]), r <= n && (this.indexes[i] = n + this.nodes.length);
          return this;
        }
        removeChild(e) {
          (e = this.index(e)), (this.nodes[e].parent = void 0), this.nodes.splice(e, 1);
          let s;
          for (let r in this.indexes) (s = this.indexes[r]), s >= e && (this.indexes[r] = s - 1);
          return this;
        }
        removeAll() {
          for (let e of this.nodes) e.parent = void 0;
          return (this.nodes = []), this;
        }
        every(e) {
          return this.nodes.every(e);
        }
        some(e) {
          return this.nodes.some(e);
        }
        index(e) {
          return typeof e == 'number' ? e : this.nodes.indexOf(e);
        }
        get first() {
          if (this.nodes) return this.nodes[0];
        }
        get last() {
          if (this.nodes) return this.nodes[this.nodes.length - 1];
        }
        toString() {
          let e = this.nodes.map(String).join('');
          return (
            this.value && (e = this.value + e),
            this.raws.before && (e = this.raws.before + e),
            this.raws.after && (e += this.raws.after),
            e
          );
        }
      };
    Fe.registerWalker = t => {
      let e = 'walk' + t.name;
      e.lastIndexOf('s') !== e.length - 1 && (e += 's'),
        !Fe.prototype[e] &&
          (Fe.prototype[e] = function (s) {
            return this.walkType(t, s);
          });
    };
    fu.exports = Fe;
  });
  var hu = g((Hx, pu) => {
    'use strict';
    var Rm = U();
    pu.exports = class extends Rm {
      constructor(e) {
        super(e), (this.type = 'root');
      }
    };
  });
  var mu = g((Qx, du) => {
    'use strict';
    var Im = U();
    du.exports = class extends Im {
      constructor(e) {
        super(e), (this.type = 'value'), (this.unbalanced = 0);
      }
    };
  });
  var wu = g((Jx, gu) => {
    'use strict';
    var yu = U(),
      Or = class extends yu {
        constructor(e) {
          super(e), (this.type = 'atword');
        }
        toString() {
          let e = this.quoted ? this.raws.quote : '';
          return [
            this.raws.before,
            '@',
            String.prototype.toString.call(this.value),
            this.raws.after,
          ].join('');
        }
      };
    yu.registerWalker(Or);
    gu.exports = Or;
  });
  var xu = g((Xx, vu) => {
    'use strict';
    var qm = U(),
      Lm = G(),
      Ar = class extends Lm {
        constructor(e) {
          super(e), (this.type = 'colon');
        }
      };
    qm.registerWalker(Ar);
    vu.exports = Ar;
  });
  var _u = g((Zx, bu) => {
    'use strict';
    var Dm = U(),
      Bm = G(),
      Nr = class extends Bm {
        constructor(e) {
          super(e), (this.type = 'comma');
        }
      };
    Dm.registerWalker(Nr);
    bu.exports = Nr;
  });
  var ku = g((eb, Eu) => {
    'use strict';
    var Mm = U(),
      Um = G(),
      Pr = class extends Um {
        constructor(e) {
          super(e), (this.type = 'comment'), (this.inline = Object(e).inline || !1);
        }
        toString() {
          return [
            this.raws.before,
            this.inline ? '//' : '/*',
            String(this.value),
            this.inline ? '' : '*/',
            this.raws.after,
          ].join('');
        }
      };
    Mm.registerWalker(Pr);
    Eu.exports = Pr;
  });
  var Cu = g((tb, Tu) => {
    'use strict';
    var Su = U(),
      Rr = class extends Su {
        constructor(e) {
          super(e), (this.type = 'func'), (this.unbalanced = -1);
        }
      };
    Su.registerWalker(Rr);
    Tu.exports = Rr;
  });
  var Au = g((rb, Ou) => {
    'use strict';
    var Fm = U(),
      $m = G(),
      Ir = class extends $m {
        constructor(e) {
          super(e), (this.type = 'number'), (this.unit = Object(e).unit || '');
        }
        toString() {
          return [this.raws.before, String(this.value), this.unit, this.raws.after].join('');
        }
      };
    Fm.registerWalker(Ir);
    Ou.exports = Ir;
  });
  var Pu = g((sb, Nu) => {
    'use strict';
    var Wm = U(),
      Ym = G(),
      qr = class extends Ym {
        constructor(e) {
          super(e), (this.type = 'operator');
        }
      };
    Wm.registerWalker(qr);
    Nu.exports = qr;
  });
  var Iu = g((nb, Ru) => {
    'use strict';
    var Vm = U(),
      zm = G(),
      Lr = class extends zm {
        constructor(e) {
          super(e), (this.type = 'paren'), (this.parenType = '');
        }
      };
    Vm.registerWalker(Lr);
    Ru.exports = Lr;
  });
  var Lu = g((ib, qu) => {
    'use strict';
    var Gm = U(),
      jm = G(),
      Dr = class extends jm {
        constructor(e) {
          super(e), (this.type = 'string');
        }
        toString() {
          let e = this.quoted ? this.raws.quote : '';
          return [this.raws.before, e, this.value + '', e, this.raws.after].join('');
        }
      };
    Gm.registerWalker(Dr);
    qu.exports = Dr;
  });
  var Bu = g((ob, Du) => {
    'use strict';
    var Hm = U(),
      Km = G(),
      Br = class extends Km {
        constructor(e) {
          super(e), (this.type = 'word');
        }
      };
    Hm.registerWalker(Br);
    Du.exports = Br;
  });
  var Uu = g((ab, Mu) => {
    'use strict';
    var Qm = U(),
      Jm = G(),
      Mr = class extends Jm {
        constructor(e) {
          super(e), (this.type = 'unicode-range');
        }
      };
    Qm.registerWalker(Mr);
    Mu.exports = Mr;
  });
  var $u = g((ub, Fu) => {
    'use strict';
    var js = class extends Error {
      constructor(e) {
        super(e),
          (this.name = this.constructor.name),
          (this.message = e || 'An error ocurred while tokzenizing.'),
          typeof Error.captureStackTrace == 'function'
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error(e).stack);
      }
    };
    Fu.exports = js;
  });
  var Vu = g((lb, Yu) => {
    'use strict';
    var Ur = /[ \n\t\r\{\(\)'"\\;,/]/g,
      Xm = /[ \n\t\r\(\)\{\}\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g,
      $e = /[ \n\t\r\(\)\{\}\*:;@!&'"\-\+\|~>,\[\]\\]|\//g,
      Zm = /^[a-z0-9]/i,
      ey = /^[a-f0-9?\-]/i,
      Wu = $u();
    Yu.exports = function (e, s) {
      s = s || {};
      let r = [],
        n = e.valueOf(),
        i = n.length,
        o = -1,
        u = 1,
        a = 0,
        c = 0,
        f = null,
        p,
        l,
        y,
        x,
        h,
        d,
        m,
        b,
        w,
        v,
        N,
        F;
      function Q(T) {
        let C = `Unclosed ${T} at line: ${u}, column: ${a - o}, token: ${a}`;
        throw new Wu(C);
      }
      function W() {
        let T = `Syntax error at line: ${u}, column: ${a - o}, token: ${a}`;
        throw new Wu(T);
      }
      for (; a < i; ) {
        switch (((p = n.charCodeAt(a)), p === 10 && ((o = a), (u += 1)), p)) {
          case 10:
          case 32:
          case 9:
          case 13:
          case 12:
            l = a;
            do (l += 1), (p = n.charCodeAt(l)), p === 10 && ((o = l), (u += 1));
            while (p === 32 || p === 10 || p === 9 || p === 13 || p === 12);
            r.push(['space', n.slice(a, l), u, a - o, u, l - o, a]), (a = l - 1);
            break;
          case 58:
            (l = a + 1), r.push(['colon', n.slice(a, l), u, a - o, u, l - o, a]), (a = l - 1);
            break;
          case 44:
            (l = a + 1), r.push(['comma', n.slice(a, l), u, a - o, u, l - o, a]), (a = l - 1);
            break;
          case 123:
            r.push(['{', '{', u, a - o, u, l - o, a]);
            break;
          case 125:
            r.push(['}', '}', u, a - o, u, l - o, a]);
            break;
          case 40:
            c++,
              (f =
                !f &&
                c === 1 &&
                r.length > 0 &&
                r[r.length - 1][0] === 'word' &&
                r[r.length - 1][1] === 'url'),
              r.push(['(', '(', u, a - o, u, l - o, a]);
            break;
          case 41:
            c--, (f = f && c > 0), r.push([')', ')', u, a - o, u, l - o, a]);
            break;
          case 39:
          case 34:
            (y = p === 39 ? "'" : '"'), (l = a);
            do
              for (
                v = !1, l = n.indexOf(y, l + 1), l === -1 && Q('quote', y), N = l;
                n.charCodeAt(N - 1) === 92;

              )
                (N -= 1), (v = !v);
            while (v);
            r.push(['string', n.slice(a, l + 1), u, a - o, u, l - o, a]), (a = l);
            break;
          case 64:
            (Ur.lastIndex = a + 1),
              Ur.test(n),
              Ur.lastIndex === 0 ? (l = n.length - 1) : (l = Ur.lastIndex - 2),
              r.push(['atword', n.slice(a, l + 1), u, a - o, u, l - o, a]),
              (a = l);
            break;
          case 92:
            (l = a),
              (p = n.charCodeAt(l + 1)),
              m && p !== 47 && p !== 32 && p !== 10 && p !== 9 && p !== 13 && p !== 12 && (l += 1),
              r.push(['word', n.slice(a, l + 1), u, a - o, u, l - o, a]),
              (a = l);
            break;
          case 43:
          case 45:
          case 42:
            (l = a + 1), (F = n.slice(a + 1, l + 1));
            let T = n.slice(a - 1, a);
            if (p === 45 && F.charCodeAt(0) === 45) {
              l++, r.push(['word', n.slice(a, l), u, a - o, u, l - o, a]), (a = l - 1);
              break;
            }
            r.push(['operator', n.slice(a, l), u, a - o, u, l - o, a]), (a = l - 1);
            break;
          default:
            if (
              p === 47 &&
              (n.charCodeAt(a + 1) === 42 || (s.loose && !f && n.charCodeAt(a + 1) === 47))
            ) {
              if (n.charCodeAt(a + 1) === 42)
                (l = n.indexOf('*/', a + 2) + 1), l === 0 && Q('comment', '*/');
              else {
                let O = n.indexOf(
                  `
`,
                  a + 2
                );
                l = O !== -1 ? O - 1 : i;
              }
              (d = n.slice(a, l + 1)),
                (x = d.split(`
`)),
                (h = x.length - 1),
                h > 0 ? ((b = u + h), (w = l - x[h].length)) : ((b = u), (w = o)),
                r.push(['comment', d, u, a - o, b, l - w, a]),
                (o = w),
                (u = b),
                (a = l);
            } else if (p === 35 && !Zm.test(n.slice(a + 1, a + 2)))
              (l = a + 1), r.push(['#', n.slice(a, l), u, a - o, u, l - o, a]), (a = l - 1);
            else if ((p === 117 || p === 85) && n.charCodeAt(a + 1) === 43) {
              l = a + 2;
              do (l += 1), (p = n.charCodeAt(l));
              while (l < i && ey.test(n.slice(l, l + 1)));
              r.push(['unicoderange', n.slice(a, l), u, a - o, u, l - o, a]), (a = l - 1);
            } else if (p === 47)
              (l = a + 1), r.push(['operator', n.slice(a, l), u, a - o, u, l - o, a]), (a = l - 1);
            else {
              let C = Xm;
              if (
                (p >= 48 && p <= 57 && (C = $e),
                (C.lastIndex = a + 1),
                C.test(n),
                C.lastIndex === 0 ? (l = n.length - 1) : (l = C.lastIndex - 2),
                C === $e || p === 46)
              ) {
                let O = n.charCodeAt(l),
                  ve = n.charCodeAt(l + 1),
                  Xs = n.charCodeAt(l + 2);
                (O === 101 || O === 69) &&
                  (ve === 45 || ve === 43) &&
                  Xs >= 48 &&
                  Xs <= 57 &&
                  (($e.lastIndex = l + 2),
                  $e.test(n),
                  $e.lastIndex === 0 ? (l = n.length - 1) : (l = $e.lastIndex - 2));
              }
              r.push(['word', n.slice(a, l + 1), u, a - o, u, l - o, a]), (a = l);
            }
            break;
        }
        a++;
      }
      return r;
    };
  });
  var Gu = g((cb, zu) => {
    'use strict';
    var Hs = class extends Error {
      constructor(e) {
        super(e),
          (this.name = this.constructor.name),
          (this.message = e || 'An error ocurred while parsing.'),
          typeof Error.captureStackTrace == 'function'
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error(e).stack);
      }
    };
    zu.exports = Hs;
  });
  var Qu = g((pb, Ku) => {
    'use strict';
    var ty = hu(),
      ry = mu(),
      sy = wu(),
      ny = xu(),
      iy = _u(),
      oy = ku(),
      ay = Cu(),
      uy = Au(),
      ly = Pu(),
      ju = Iu(),
      cy = Lu(),
      Hu = Bu(),
      fy = Uu(),
      py = Vu(),
      hy = Ds(),
      dy = Bs(),
      my = Ms(),
      yy = Gu();
    function gy(t) {
      return t.sort((e, s) => e - s);
    }
    Ku.exports = class {
      constructor(e, s) {
        let r = { loose: !1 };
        (this.cache = []),
          (this.input = e),
          (this.options = Object.assign({}, r, s)),
          (this.position = 0),
          (this.unbalanced = 0),
          (this.root = new ty());
        let n = new ry();
        this.root.append(n), (this.current = n), (this.tokens = py(e, this.options));
      }
      parse() {
        return this.loop();
      }
      colon() {
        let e = this.currToken;
        this.newNode(
          new ny({
            value: e[1],
            source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } },
            sourceIndex: e[6],
          })
        ),
          this.position++;
      }
      comma() {
        let e = this.currToken;
        this.newNode(
          new iy({
            value: e[1],
            source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } },
            sourceIndex: e[6],
          })
        ),
          this.position++;
      }
      comment() {
        let e = !1,
          s = this.currToken[1].replace(/\/\*|\*\//g, ''),
          r;
        this.options.loose && s.startsWith('//') && ((s = s.substring(2)), (e = !0)),
          (r = new oy({
            value: s,
            inline: e,
            source: {
              start: { line: this.currToken[2], column: this.currToken[3] },
              end: { line: this.currToken[4], column: this.currToken[5] },
            },
            sourceIndex: this.currToken[6],
          })),
          this.newNode(r),
          this.position++;
      }
      error(e, s) {
        throw new yy(e + ` at line: ${s[2]}, column ${s[3]}`);
      }
      loop() {
        for (; this.position < this.tokens.length; ) this.parseTokens();
        return (
          !this.current.last && this.spaces
            ? (this.current.raws.before += this.spaces)
            : this.spaces && (this.current.last.raws.after += this.spaces),
          (this.spaces = ''),
          this.root
        );
      }
      operator() {
        let e = this.currToken[1],
          s;
        if (e === '+' || e === '-') {
          if (
            (this.options.loose ||
              (this.position > 0 &&
                (this.current.type === 'func' && this.current.value === 'calc'
                  ? this.prevToken[0] !== 'space' && this.prevToken[0] !== '('
                    ? this.error('Syntax Error', this.currToken)
                    : this.nextToken[0] !== 'space' && this.nextToken[0] !== 'word'
                      ? this.error('Syntax Error', this.currToken)
                      : this.nextToken[0] === 'word' &&
                        this.current.last.type !== 'operator' &&
                        this.current.last.value !== '(' &&
                        this.error('Syntax Error', this.currToken)
                  : (this.nextToken[0] === 'space' ||
                      this.nextToken[0] === 'operator' ||
                      this.prevToken[0] === 'operator') &&
                    this.error('Syntax Error', this.currToken))),
            this.options.loose)
          ) {
            if (
              (!this.current.nodes.length ||
                (this.current.last && this.current.last.type === 'operator')) &&
              this.nextToken[0] === 'word'
            )
              return this.word();
          } else if (this.nextToken[0] === 'word') return this.word();
        }
        return (
          (s = new ly({
            value: this.currToken[1],
            source: {
              start: { line: this.currToken[2], column: this.currToken[3] },
              end: { line: this.currToken[2], column: this.currToken[3] },
            },
            sourceIndex: this.currToken[4],
          })),
          this.position++,
          this.newNode(s)
        );
      }
      parseTokens() {
        switch (this.currToken[0]) {
          case 'space':
            this.space();
            break;
          case 'colon':
            this.colon();
            break;
          case 'comma':
            this.comma();
            break;
          case 'comment':
            this.comment();
            break;
          case '(':
            this.parenOpen();
            break;
          case ')':
            this.parenClose();
            break;
          case 'atword':
          case 'word':
            this.word();
            break;
          case 'operator':
            this.operator();
            break;
          case 'string':
            this.string();
            break;
          case 'unicoderange':
            this.unicodeRange();
            break;
          default:
            this.word();
            break;
        }
      }
      parenOpen() {
        let e = 1,
          s = this.position + 1,
          r = this.currToken,
          n;
        for (; s < this.tokens.length && e; ) {
          let i = this.tokens[s];
          i[0] === '(' && e++, i[0] === ')' && e--, s++;
        }
        if (
          (e && this.error('Expected closing parenthesis', r),
          (n = this.current.last),
          n && n.type === 'func' && n.unbalanced < 0 && ((n.unbalanced = 0), (this.current = n)),
          this.current.unbalanced++,
          this.newNode(
            new ju({
              value: r[1],
              source: { start: { line: r[2], column: r[3] }, end: { line: r[4], column: r[5] } },
              sourceIndex: r[6],
            })
          ),
          this.position++,
          this.current.type === 'func' &&
            this.current.unbalanced &&
            this.current.value === 'url' &&
            this.currToken[0] !== 'string' &&
            this.currToken[0] !== ')' &&
            !this.options.loose)
        ) {
          let i = this.nextToken,
            o = this.currToken[1],
            u = { line: this.currToken[2], column: this.currToken[3] };
          for (; i && i[0] !== ')' && this.current.unbalanced; )
            this.position++, (o += this.currToken[1]), (i = this.nextToken);
          this.position !== this.tokens.length - 1 &&
            (this.position++,
            this.newNode(
              new Hu({
                value: o,
                source: { start: u, end: { line: this.currToken[4], column: this.currToken[5] } },
                sourceIndex: this.currToken[6],
              })
            ));
        }
      }
      parenClose() {
        let e = this.currToken;
        this.newNode(
          new ju({
            value: e[1],
            source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } },
            sourceIndex: e[6],
          })
        ),
          this.position++,
          !(this.position >= this.tokens.length - 1 && !this.current.unbalanced) &&
            (this.current.unbalanced--,
            this.current.unbalanced < 0 && this.error('Expected opening parenthesis', e),
            !this.current.unbalanced && this.cache.length && (this.current = this.cache.pop()));
      }
      space() {
        let e = this.currToken;
        this.position === this.tokens.length - 1 ||
        this.nextToken[0] === ',' ||
        this.nextToken[0] === ')'
          ? ((this.current.last.raws.after += e[1]), this.position++)
          : ((this.spaces = e[1]), this.position++);
      }
      unicodeRange() {
        let e = this.currToken;
        this.newNode(
          new fy({
            value: e[1],
            source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } },
            sourceIndex: e[6],
          })
        ),
          this.position++;
      }
      splitWord() {
        let e = this.nextToken,
          s = this.currToken[1],
          r = /^[\+\-]?((\d+(\.\d*)?)|(\.\d+))([eE][\+\-]?\d+)?/,
          n = /^(?!\#([a-z0-9]+))[\#\{\}]/gi,
          i,
          o;
        if (!n.test(s))
          for (; e && e[0] === 'word'; ) {
            this.position++;
            let u = this.currToken[1];
            (s += u), (e = this.nextToken);
          }
        (i = dy(s, '@')),
          (o = gy(my(hy([[0], i])))),
          o.forEach((u, a) => {
            let c = o[a + 1] || s.length,
              f = s.slice(u, c),
              p;
            if (~i.indexOf(u))
              p = new sy({
                value: f.slice(1),
                source: {
                  start: { line: this.currToken[2], column: this.currToken[3] + u },
                  end: { line: this.currToken[4], column: this.currToken[3] + (c - 1) },
                },
                sourceIndex: this.currToken[6] + o[a],
              });
            else if (r.test(this.currToken[1])) {
              let l = f.replace(r, '');
              p = new uy({
                value: f.replace(l, ''),
                source: {
                  start: { line: this.currToken[2], column: this.currToken[3] + u },
                  end: { line: this.currToken[4], column: this.currToken[3] + (c - 1) },
                },
                sourceIndex: this.currToken[6] + o[a],
                unit: l,
              });
            } else
              (p = new (e && e[0] === '(' ? ay : Hu)({
                value: f,
                source: {
                  start: { line: this.currToken[2], column: this.currToken[3] + u },
                  end: { line: this.currToken[4], column: this.currToken[3] + (c - 1) },
                },
                sourceIndex: this.currToken[6] + o[a],
              })),
                p.type === 'word'
                  ? ((p.isHex = /^#(.+)/.test(f)),
                    (p.isColor = /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(f)))
                  : this.cache.push(this.current);
            this.newNode(p);
          }),
          this.position++;
      }
      string() {
        let e = this.currToken,
          s = this.currToken[1],
          r = /^(\"|\')/,
          n = r.test(s),
          i = '',
          o;
        n && ((i = s.match(r)[0]), (s = s.slice(1, s.length - 1))),
          (o = new cy({
            value: s,
            source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } },
            sourceIndex: e[6],
            quoted: n,
          })),
          (o.raws.quote = i),
          this.newNode(o),
          this.position++;
      }
      word() {
        return this.splitWord();
      }
      newNode(e) {
        return (
          this.spaces && ((e.raws.before += this.spaces), (this.spaces = '')),
          this.current.append(e)
        );
      }
      get currToken() {
        return this.tokens[this.position];
      }
      get nextToken() {
        return this.tokens[this.position + 1];
      }
      get prevToken() {
        return this.tokens[this.position - 1];
      }
    };
  });
  var qy = {};
  Zs(qy, { languages: () => gi, options: () => vi, parsers: () => Js, printers: () => Iy });
  var vl = (t, e, s, r) => {
      if (!(t && e == null))
        return e.replaceAll ? e.replaceAll(s, r) : s.global ? e.replace(s, r) : e.split(s).join(r);
    },
    E = vl;
  var be = 'string',
    We = 'array',
    Ye = 'cursor',
    te = 'indent',
    _e = 'align',
    Ve = 'trim',
    re = 'group',
    se = 'fill',
    ne = 'if-break',
    ze = 'indent-if-break',
    Ee = 'line-suffix',
    Ge = 'line-suffix-boundary',
    j = 'line',
    je = 'label',
    ke = 'break-parent',
    Ct = new Set([Ye, te, _e, Ve, re, se, ne, ze, Ee, Ge, j, je, ke]);
  var xl = (t, e, s) => {
      if (!(t && e == null))
        return Array.isArray(e) || typeof e == 'string' ? e[s < 0 ? e.length + s : s] : e.at(s);
    },
    $ = xl;
  function bl(t) {
    if (typeof t == 'string') return be;
    if (Array.isArray(t)) return We;
    if (!t) return;
    let { type: e } = t;
    if (Ct.has(e)) return e;
  }
  var H = bl;
  var _l = t => new Intl.ListFormat('en-US', { type: 'disjunction' }).format(t);
  function El(t) {
    let e = t === null ? 'null' : typeof t;
    if (e !== 'string' && e !== 'object')
      return `Unexpected doc '${e}', 
Expected it to be 'string' or 'object'.`;
    if (H(t)) throw new Error('doc is valid.');
    let s = Object.prototype.toString.call(t);
    if (s !== '[object Object]') return `Unexpected doc '${s}'.`;
    let r = _l([...Ct].map(n => `'${n}'`));
    return `Unexpected doc.type '${t.type}'.
Expected it to be ${r}.`;
  }
  var Wr = class extends Error {
      name = 'InvalidDocError';
      constructor(e) {
        super(El(e)), (this.doc = e);
      }
    },
    Yr = Wr;
  function Sl(t, e) {
    if (typeof t == 'string') return e(t);
    let s = new Map();
    return r(t);
    function r(i) {
      if (s.has(i)) return s.get(i);
      let o = n(i);
      return s.set(i, o), o;
    }
    function n(i) {
      switch (H(i)) {
        case We:
          return e(i.map(r));
        case se:
          return e({ ...i, parts: i.parts.map(r) });
        case ne:
          return e({ ...i, breakContents: r(i.breakContents), flatContents: r(i.flatContents) });
        case re: {
          let { expandedStates: o, contents: u } = i;
          return (
            o ? ((o = o.map(r)), (u = o[0])) : (u = r(u)),
            e({ ...i, contents: u, expandedStates: o })
          );
        }
        case _e:
        case te:
        case ze:
        case je:
        case Ee:
          return e({ ...i, contents: r(i.contents) });
        case be:
        case Ye:
        case Ve:
        case Ge:
        case j:
        case ke:
          return e(i);
        default:
          throw new Yr(i);
      }
    }
  }
  function Tl(t) {
    return t.type === j && !t.hard ? (t.soft ? '' : ' ') : t.type === ne ? t.flatContents : t;
  }
  function tn(t) {
    return Sl(t, Tl);
  }
  var Vr = () => {},
    ie = Vr,
    He = Vr,
    rn = Vr;
  function q(t) {
    return ie(t), { type: te, contents: t };
  }
  function sn(t, e) {
    return ie(e), { type: _e, contents: e, n: t };
  }
  function L(t, e = {}) {
    return (
      ie(t),
      He(e.expandedStates, !0),
      { type: re, id: e.id, contents: t, break: !!e.shouldBreak, expandedStates: e.expandedStates }
    );
  }
  function nn(t) {
    return sn({ type: 'root' }, t);
  }
  function oe(t) {
    return sn(-1, t);
  }
  function Se(t) {
    return rn(t), { type: se, parts: t };
  }
  function Ot(t, e = '', s = {}) {
    return (
      ie(t), e !== '' && ie(e), { type: ne, breakContents: t, flatContents: e, groupId: s.groupId }
    );
  }
  function on(t) {
    return ie(t), { type: Ee, contents: t };
  }
  var Ke = { type: ke };
  var Cl = { type: j, hard: !0 };
  var A = { type: j },
    D = { type: j, soft: !0 },
    S = [Cl, Ke];
  function Y(t, e) {
    ie(t), He(e);
    let s = [];
    for (let r = 0; r < e.length; r++) r !== 0 && s.push(t), s.push(e[r]);
    return s;
  }
  function Ol(t) {
    return Array.isArray(t) && t.length > 0;
  }
  var ae = Ol;
  var an = new Proxy(() => {}, { get: () => an }),
    un = an;
  var At = "'",
    ln = '"';
  function Al(t, e) {
    let s = e === !0 || e === At ? At : ln,
      r = s === At ? ln : At,
      n = 0,
      i = 0;
    for (let o of t) o === s ? n++ : o === r && i++;
    return n > i ? r : s;
  }
  var cn = Al;
  function Nl(t, e, s) {
    let r = e === '"' ? "'" : '"',
      i = E(!1, t, /\\(.)|(["'])/gsu, (o, u, a) =>
        u === r
          ? u
          : a === e
            ? '\\' + a
            : a || (s && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(u) ? u : '\\' + u)
      );
    return e + i + e;
  }
  var fn = Nl;
  function Pl(t, e) {
    un.ok(/^(?<quote>["']).*\k<quote>$/su.test(t));
    let s = t.slice(1, -1),
      r =
        e.parser === 'json' ||
        e.parser === 'jsonc' ||
        (e.parser === 'json5' && e.quoteProps === 'preserve' && !e.singleQuote)
          ? '"'
          : e.__isInHtmlAttribute
            ? "'"
            : cn(s, e.singleQuote);
    return t.charAt(0) === r ? t : fn(s, r, !1);
  }
  var Nt = Pl;
  var zr = class extends Error {
      name = 'UnexpectedNodeError';
      constructor(e, s, r = 'type') {
        super(`Unexpected ${s} node ${r}: ${JSON.stringify(e[r])}.`), (this.node = e);
      }
    },
    pn = zr;
  function Rl(t) {
    return (t == null ? void 0 : t.type) === 'front-matter';
  }
  var Te = Rl;
  var Il = new Set([
    'raw',
    'raws',
    'sourceIndex',
    'source',
    'before',
    'after',
    'trailingComma',
    'spaces',
  ]);
  function hn(t, e, s) {
    if (
      (Te(t) && t.language === 'yaml' && delete e.value,
      t.type === 'css-comment' &&
        s.type === 'css-root' &&
        s.nodes.length > 0 &&
        (((s.nodes[0] === t || (Te(s.nodes[0]) && s.nodes[1] === t)) &&
          (delete e.text, /^\*\s*@(?:format|prettier)\s*$/u.test(t.text))) ||
          (s.type === 'css-root' && $(!1, s.nodes, -1) === t)))
    )
      return null;
    if (
      (t.type === 'value-root' && delete e.text,
      (t.type === 'media-query' ||
        t.type === 'media-query-list' ||
        t.type === 'media-feature-expression') &&
        delete e.value,
      t.type === 'css-rule' && delete e.params,
      (t.type === 'media-feature' ||
        t.type === 'media-keyword' ||
        t.type === 'media-type' ||
        t.type === 'media-unknown' ||
        t.type === 'media-url' ||
        t.type === 'media-value' ||
        t.type === 'selector-attribute' ||
        t.type === 'selector-string' ||
        t.type === 'selector-class' ||
        t.type === 'selector-combinator' ||
        t.type === 'value-string') &&
        t.value &&
        (e.value = ql(t.value)),
      t.type === 'selector-combinator' && (e.value = E(!1, e.value, /\s+/gu, ' ')),
      t.type === 'media-feature' && (e.value = E(!1, e.value, ' ', '')),
      ((t.type === 'value-word' &&
        ((t.isColor && t.isHex) ||
          ['initial', 'inherit', 'unset', 'revert'].includes(t.value.toLowerCase()))) ||
        t.type === 'media-feature' ||
        t.type === 'selector-root-invalid' ||
        t.type === 'selector-pseudo') &&
        (e.value = e.value.toLowerCase()),
      t.type === 'css-decl' && (e.prop = t.prop.toLowerCase()),
      (t.type === 'css-atrule' || t.type === 'css-import') && (e.name = t.name.toLowerCase()),
      t.type === 'value-number' && (e.unit = t.unit.toLowerCase()),
      t.type === 'value-unknown' && (e.value = E(!1, e.value, /;$/gu, '')),
      t.type === 'selector-attribute' &&
        ((e.attribute = t.attribute.trim()),
        t.namespace && typeof t.namespace == 'string' && (e.namespace = t.namespace.trim() || !0),
        t.value && ((e.value = E(!1, e.value.trim(), /^["']|["']$/gu, '')), delete e.quoted)),
      (t.type === 'media-value' ||
        t.type === 'media-type' ||
        t.type === 'value-number' ||
        t.type === 'selector-root-invalid' ||
        t.type === 'selector-class' ||
        t.type === 'selector-combinator' ||
        t.type === 'selector-tag') &&
        t.value &&
        (e.value = E(!1, e.value, /([\d+.e-]+)([a-z]*)/giu, (r, n, i) => {
          let o = Number(n);
          return Number.isNaN(o) ? r : o + i.toLowerCase();
        })),
      t.type === 'selector-tag')
    ) {
      let r = e.value.toLowerCase();
      ['from', 'to'].includes(r) && (e.value = r);
    }
    if (
      (t.type === 'css-atrule' && t.name.toLowerCase() === 'supports' && delete e.value,
      t.type === 'selector-unknown' && delete e.value,
      t.type === 'value-comma_group')
    ) {
      let r = t.groups.findIndex(n => n.type === 'value-number' && n.unit === '...');
      r !== -1 &&
        ((e.groups[r].unit = ''),
        e.groups.splice(r + 1, 0, { type: 'value-word', value: '...', isColor: !1, isHex: !1 }));
    }
    if (
      t.type === 'value-comma_group' &&
      t.groups.some(
        r =>
          (r.type === 'value-atword' && r.value.endsWith('[')) ||
          (r.type === 'value-word' && r.value.startsWith(']'))
      )
    )
      return {
        type: 'value-atword',
        value: t.groups.map(r => r.value).join(''),
        group: { open: null, close: null, groups: [], type: 'value-paren_group' },
      };
  }
  hn.ignoredProperties = Il;
  function ql(t) {
    return E(!1, E(!1, t, "'", '"'), /\\([^\da-f])/giu, '$1');
  }
  var dn = hn;
  async function Ll(t, e) {
    if (t.language === 'yaml') {
      let s = t.value.trim(),
        r = s ? await e(s, { parser: 'yaml' }) : '';
      return nn([t.startDelimiter, t.explicitLanguage, S, r, r ? S : '', t.endDelimiter]);
    }
  }
  var mn = Ll;
  function yn(t) {
    let { node: e } = t;
    if (e.type === 'front-matter')
      return async s => {
        let r = await mn(e, s);
        return r ? [r, S] : void 0;
      };
  }
  yn.getVisitorKeys = t => (t.type === 'css-root' ? ['frontMatter'] : []);
  var gn = yn;
  var Qe = null;
  function Je(t) {
    if (Qe !== null && typeof Qe.property) {
      let e = Qe;
      return (Qe = Je.prototype = null), e;
    }
    return (Qe = Je.prototype = t ?? Object.create(null)), new Je();
  }
  var Dl = 10;
  for (let t = 0; t <= Dl; t++) Je();
  function Gr(t) {
    return Je(t);
  }
  function Bl(t, e = 'type') {
    Gr(t);
    function s(r) {
      let n = r[e],
        i = t[n];
      if (!Array.isArray(i))
        throw Object.assign(new Error(`Missing visitor keys for '${n}'.`), { node: r });
      return i;
    }
    return s;
  }
  var wn = Bl;
  var Ml = {
      'front-matter': [],
      'css-root': ['frontMatter', 'nodes'],
      'css-comment': [],
      'css-rule': ['selector', 'nodes'],
      'css-decl': ['value', 'selector', 'nodes'],
      'css-atrule': ['selector', 'params', 'value', 'nodes'],
      'media-query-list': ['nodes'],
      'media-query': ['nodes'],
      'media-type': [],
      'media-feature-expression': ['nodes'],
      'media-feature': [],
      'media-colon': [],
      'media-value': [],
      'media-keyword': [],
      'media-url': [],
      'media-unknown': [],
      'selector-root': ['nodes'],
      'selector-selector': ['nodes'],
      'selector-comment': [],
      'selector-string': [],
      'selector-tag': [],
      'selector-id': [],
      'selector-class': [],
      'selector-attribute': [],
      'selector-combinator': ['nodes'],
      'selector-universal': [],
      'selector-pseudo': ['nodes'],
      'selector-nesting': [],
      'selector-unknown': [],
      'value-value': ['group'],
      'value-root': ['group'],
      'value-comment': [],
      'value-comma_group': ['groups'],
      'value-paren_group': ['open', 'groups', 'close'],
      'value-func': ['group'],
      'value-paren': [],
      'value-number': [],
      'value-operator': [],
      'value-word': [],
      'value-colon': [],
      'value-comma': [],
      'value-string': [],
      'value-atword': [],
      'value-unicode-range': [],
      'value-unknown': [],
    },
    vn = Ml;
  var Ul = wn(vn),
    xn = Ul;
  function Fl(t, e) {
    let s = 0;
    for (let r = 0; r < t.line - 1; ++r)
      s =
        e.indexOf(
          `
`,
          s
        ) + 1;
    return s + t.column;
  }
  var jr = Fl;
  function Pt(t) {
    return (e, s, r) => {
      let n = !!(r != null && r.backwards);
      if (s === !1) return !1;
      let { length: i } = e,
        o = s;
      for (; o >= 0 && o < i; ) {
        let u = e.charAt(o);
        if (t instanceof RegExp) {
          if (!t.test(u)) return o;
        } else if (!t.includes(u)) return o;
        n ? o-- : o++;
      }
      return o === -1 || o === i ? o : !1;
    };
  }
  var $g = Pt(/\s/u),
    Rt = Pt(' 	'),
    bn = Pt(',; 	'),
    It = Pt(/[^\n\r]/u);
  function _n(t, e) {
    var s, r, n;
    if (
      typeof ((r = (s = t.source) == null ? void 0 : s.start) == null ? void 0 : r.offset) ==
      'number'
    )
      return t.source.start.offset;
    if (typeof t.sourceIndex == 'number') return t.sourceIndex;
    if ((n = t.source) != null && n.start) return jr(t.source.start, e);
    throw Object.assign(new Error('Can not locate node.'), { node: t });
  }
  function Hr(t, e) {
    var s, r;
    if (t.type === 'css-comment' && t.inline) return It(e, t.source.startOffset);
    if (
      typeof ((r = (s = t.source) == null ? void 0 : s.end) == null ? void 0 : r.offset) == 'number'
    )
      return t.source.end.offset;
    if (t.source) {
      if (t.source.end) return jr(t.source.end, e);
      if (ae(t.nodes)) return Hr($(!1, t.nodes, -1), e);
    }
    return null;
  }
  function Kr(t, e) {
    t.source && ((t.source.startOffset = _n(t, e)), (t.source.endOffset = Hr(t, e)));
    for (let s in t) {
      let r = t[s];
      s === 'source' ||
        !r ||
        typeof r != 'object' ||
        (r.type === 'value-root' || r.type === 'value-unknown'
          ? En(r, $l(t), r.text || r.value)
          : Kr(r, e));
    }
  }
  function En(t, e, s) {
    t.source && ((t.source.startOffset = _n(t, s) + e), (t.source.endOffset = Hr(t, s) + e));
    for (let r in t) {
      let n = t[r];
      r === 'source' || !n || typeof n != 'object' || En(n, e, s);
    }
  }
  function $l(t) {
    var s;
    let e = t.source.startOffset;
    return (
      typeof t.prop == 'string' && (e += t.prop.length),
      t.type === 'css-atrule' &&
        typeof t.name == 'string' &&
        (e += 1 + t.name.length + t.raws.afterName.match(/^\s*:?\s*/u)[0].length),
      t.type !== 'css-atrule' &&
        typeof ((s = t.raws) == null ? void 0 : s.between) == 'string' &&
        (e += t.raws.between.length),
      e
    );
  }
  function kn(t) {
    let e = 'initial',
      s = 'initial',
      r,
      n = !1,
      i = [];
    for (let o = 0; o < t.length; o++) {
      let u = t[o];
      switch (e) {
        case 'initial':
          if (u === "'") {
            e = 'single-quotes';
            continue;
          }
          if (u === '"') {
            e = 'double-quotes';
            continue;
          }
          if ((u === 'u' || u === 'U') && t.slice(o, o + 4).toLowerCase() === 'url(') {
            (e = 'url'), (o += 3);
            continue;
          }
          if (u === '*' && t[o - 1] === '/') {
            e = 'comment-block';
            continue;
          }
          if (u === '/' && t[o - 1] === '/') {
            (e = 'comment-inline'), (r = o - 1);
            continue;
          }
          continue;
        case 'single-quotes':
          if (
            (u === "'" && t[o - 1] !== '\\' && ((e = s), (s = 'initial')),
            u ===
              `
` || u === '\r')
          )
            return t;
          continue;
        case 'double-quotes':
          if (
            (u === '"' && t[o - 1] !== '\\' && ((e = s), (s = 'initial')),
            u ===
              `
` || u === '\r')
          )
            return t;
          continue;
        case 'url':
          if (
            (u === ')' && (e = 'initial'),
            u ===
              `
` || u === '\r')
          )
            return t;
          if (u === "'") {
            (e = 'single-quotes'), (s = 'url');
            continue;
          }
          if (u === '"') {
            (e = 'double-quotes'), (s = 'url');
            continue;
          }
          continue;
        case 'comment-block':
          u === '/' && t[o - 1] === '*' && (e = 'initial');
          continue;
        case 'comment-inline':
          (u === '"' || u === "'" || u === '*') && (n = !0),
            (u ===
              `
` ||
              u === '\r') &&
              (n && i.push([r, o]), (e = 'initial'), (n = !1));
          continue;
      }
    }
    for (let [o, u] of i) t = t.slice(0, o) + E(!1, t.slice(o, u), /["'*]/gu, ' ') + t.slice(u);
    return t;
  }
  function P(t) {
    var e;
    return (e = t.source) == null ? void 0 : e.startOffset;
  }
  function R(t) {
    var e;
    return (e = t.source) == null ? void 0 : e.endOffset;
  }
  var Wl = /\*\/$/,
    Yl = /^\/\*\*?/,
    On = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
    Vl = /(^|\s+)\/\/([^\n\r]*)/g,
    Sn = /^(\r?\n)+/,
    zl = /(?:^|\r?\n) *(@[^\n\r]*?) *\r?\n *(?![^\n\r@]*\/\/[^]*)([^\s@][^\n\r@]+?) *\r?\n/g,
    Tn = /(?:^|\r?\n) *@(\S+) *([^\n\r]*)/g,
    Gl = /(\r?\n|^) *\* ?/g,
    An = [];
  function Nn(t) {
    let e = t.match(On);
    return e ? e[0].trimStart() : '';
  }
  function Pn(t) {
    let e = t.match(On),
      s = e == null ? void 0 : e[0];
    return s == null ? t : t.slice(s.length);
  }
  function Rn(t) {
    let e = `
`;
    t = E(!1, t.replace(Yl, '').replace(Wl, ''), Gl, '$1');
    let s = '';
    for (; s !== t; ) (s = t), (t = E(!1, t, zl, `${e}$1 $2${e}`));
    t = t.replace(Sn, '').trimEnd();
    let r = Object.create(null),
      n = E(!1, t, Tn, '').replace(Sn, '').trimEnd(),
      i;
    for (; (i = Tn.exec(t)); ) {
      let o = E(!1, i[2], Vl, '');
      if (typeof r[i[1]] == 'string' || Array.isArray(r[i[1]])) {
        let u = r[i[1]];
        r[i[1]] = [...An, ...(Array.isArray(u) ? u : [u]), o];
      } else r[i[1]] = o;
    }
    return { comments: n, pragmas: r };
  }
  function In({ comments: t = '', pragmas: e = {} }) {
    let s = `
`,
      r = '/**',
      n = ' *',
      i = ' */',
      o = Object.keys(e),
      u = o
        .flatMap(c => Cn(c, e[c]))
        .map(c => `${n} ${c}${s}`)
        .join('');
    if (!t) {
      if (o.length === 0) return '';
      if (o.length === 1 && !Array.isArray(e[o[0]])) {
        let c = e[o[0]];
        return `${r} ${Cn(o[0], c)[0]}${i}`;
      }
    }
    let a =
      t
        .split(s)
        .map(c => `${n} ${c}`)
        .join(s) + s;
    return r + s + (t ? a : '') + (t && o.length > 0 ? n + s : '') + u + i;
  }
  function Cn(t, e) {
    return [...An, ...(Array.isArray(e) ? e : [e])].map(s => `@${t} ${s}`.trim());
  }
  function jl(t) {
    if (!t.startsWith('#!')) return '';
    let e = t.indexOf(`
`);
    return e === -1 ? t : t.slice(0, e);
  }
  var qn = jl;
  function Ln(t) {
    let e = qn(t);
    e && (t = t.slice(e.length + 1));
    let s = Nn(t),
      { pragmas: r, comments: n } = Rn(s);
    return { shebang: e, text: t, pragmas: r, comments: n };
  }
  function Dn(t) {
    let { pragmas: e } = Ln(t);
    return (
      Object.prototype.hasOwnProperty.call(e, 'prettier') ||
      Object.prototype.hasOwnProperty.call(e, 'format')
    );
  }
  function Bn(t) {
    let { shebang: e, text: s, pragmas: r, comments: n } = Ln(t),
      i = Pn(s),
      o = In({ pragmas: { format: '', ...r }, comments: n.trimStart() });
    return (
      (e
        ? `${e}
`
        : '') +
      o +
      (i.startsWith(`
`)
        ? `
`
        : `

`) +
      i
    );
  }
  var Xe = 3;
  function Hl(t) {
    let e = t.slice(0, Xe);
    if (e !== '---' && e !== '+++') return;
    let s = t.indexOf(
      `
`,
      Xe
    );
    if (s === -1) return;
    let r = t.slice(Xe, s).trim(),
      n = t.indexOf(
        `
${e}`,
        s
      ),
      i = r;
    if (
      (i || (i = e === '+++' ? 'toml' : 'yaml'),
      n === -1 &&
        e === '---' &&
        i === 'yaml' &&
        (n = t.indexOf(
          `
...`,
          s
        )),
      n === -1)
    )
      return;
    let o = n + 1 + Xe,
      u = t.charAt(o + 1);
    if (!/\s?/u.test(u)) return;
    let a = t.slice(0, o);
    return {
      type: 'front-matter',
      language: i,
      explicitLanguage: r,
      value: t.slice(s + 1, n),
      startDelimiter: e,
      endDelimiter: a.slice(-Xe),
      raw: a,
    };
  }
  function Kl(t) {
    let e = Hl(t);
    if (!e) return { content: t };
    let { raw: s } = e;
    return { frontMatter: e, content: E(!1, s, /[^\n]/gu, ' ') + t.slice(s.length) };
  }
  var Ze = Kl;
  function Mn(t) {
    return Dn(Ze(t).content);
  }
  function Un(t) {
    let { frontMatter: e, content: s } = Ze(t);
    return (
      (e
        ? e.raw +
          `

`
        : '') + Bn(s)
    );
  }
  var Ql = new Set([
    'red',
    'green',
    'blue',
    'alpha',
    'a',
    'rgb',
    'hue',
    'h',
    'saturation',
    's',
    'lightness',
    'l',
    'whiteness',
    'w',
    'blackness',
    'b',
    'tint',
    'shade',
    'blend',
    'blenda',
    'contrast',
    'hsl',
    'hsla',
    'hwb',
    'hwba',
  ]);
  function Fn(t) {
    var e, s;
    return (s = (e = t.findAncestor(r => r.type === 'css-decl')) == null ? void 0 : e.prop) == null
      ? void 0
      : s.toLowerCase();
  }
  var Jl = new Set(['initial', 'inherit', 'unset', 'revert']);
  function $n(t) {
    return Jl.has(t.toLowerCase());
  }
  function Wn(t, e) {
    var r;
    let s = t.findAncestor(n => n.type === 'css-atrule');
    return (
      ((r = s == null ? void 0 : s.name) == null
        ? void 0
        : r.toLowerCase().endsWith('keyframes')) && ['from', 'to'].includes(e.toLowerCase())
    );
  }
  function ue(t) {
    return t.includes('$') ||
      t.includes('@') ||
      t.includes('#') ||
      t.startsWith('%') ||
      t.startsWith('--') ||
      t.startsWith(':--') ||
      (t.includes('(') && t.includes(')'))
      ? t
      : t.toLowerCase();
  }
  function Ce(t, e) {
    var r;
    let s = t.findAncestor(n => n.type === 'value-func');
    return ((r = s == null ? void 0 : s.value) == null ? void 0 : r.toLowerCase()) === e;
  }
  function Yn(t) {
    var r;
    let e = t.findAncestor(n => n.type === 'css-rule'),
      s = (r = e == null ? void 0 : e.raws) == null ? void 0 : r.selector;
    return s && (s.startsWith(':import') || s.startsWith(':export'));
  }
  function Oe(t, e) {
    let s = Array.isArray(e) ? e : [e],
      r = t.findAncestor(n => n.type === 'css-atrule');
    return r && s.includes(r.name.toLowerCase());
  }
  function Vn(t) {
    var s;
    let { node: e } = t;
    return (
      e.groups[0].value === 'url' &&
      e.groups.length === 2 &&
      ((s = t.findAncestor(r => r.type === 'css-atrule')) == null ? void 0 : s.name) === 'import'
    );
  }
  function zn(t) {
    return t.type === 'value-func' && t.value.toLowerCase() === 'url';
  }
  function Gn(t) {
    return t.type === 'value-func' && t.value.toLowerCase() === 'var';
  }
  function jn(t) {
    let { selector: e } = t;
    return e
      ? (typeof e == 'string' && /^@.+:.*$/u.test(e)) || (e.value && /^@.+:.*$/u.test(e.value))
      : !1;
  }
  function Hn(t) {
    return t.type === 'value-word' && ['from', 'through', 'end'].includes(t.value);
  }
  function Kn(t) {
    return t.type === 'value-word' && ['and', 'or', 'not'].includes(t.value);
  }
  function Qn(t) {
    return t.type === 'value-word' && t.value === 'in';
  }
  function qt(t) {
    return t.type === 'value-operator' && t.value === '*';
  }
  function et(t) {
    return t.type === 'value-operator' && t.value === '/';
  }
  function J(t) {
    return t.type === 'value-operator' && t.value === '+';
  }
  function he(t) {
    return t.type === 'value-operator' && t.value === '-';
  }
  function Xl(t) {
    return t.type === 'value-operator' && t.value === '%';
  }
  function Lt(t) {
    return qt(t) || et(t) || J(t) || he(t) || Xl(t);
  }
  function Jn(t) {
    return t.type === 'value-word' && ['==', '!='].includes(t.value);
  }
  function Xn(t) {
    return t.type === 'value-word' && ['<', '>', '<=', '>='].includes(t.value);
  }
  function tt(t, e) {
    return (
      e.parser === 'scss' &&
      t.type === 'css-atrule' &&
      ['if', 'else', 'for', 'each', 'while'].includes(t.name)
    );
  }
  function Jr(t) {
    var e;
    return ((e = t.raws) == null ? void 0 : e.params) && /^\(\s*\)$/u.test(t.raws.params);
  }
  function Dt(t) {
    return t.name.startsWith('prettier-placeholder');
  }
  function Zn(t) {
    return t.prop.startsWith('@prettier-placeholder');
  }
  function ei(t, e) {
    return (
      t.value === '$$' &&
      t.type === 'value-func' &&
      (e == null ? void 0 : e.type) === 'value-word' &&
      !e.raws.before
    );
  }
  function ti(t) {
    var e, s;
    return (
      ((e = t.value) == null ? void 0 : e.type) === 'value-root' &&
      ((s = t.value.group) == null ? void 0 : s.type) === 'value-value' &&
      t.prop.toLowerCase() === 'composes'
    );
  }
  function ri(t) {
    var e, s, r;
    return (
      ((r = (s = (e = t.value) == null ? void 0 : e.group) == null ? void 0 : s.group) == null
        ? void 0
        : r.type) === 'value-paren_group' &&
      t.value.group.group.open !== null &&
      t.value.group.group.close !== null
    );
  }
  function de(t) {
    var e;
    return ((e = t.raws) == null ? void 0 : e.before) === '';
  }
  function Bt(t) {
    var e, s;
    return (
      t.type === 'value-comma_group' &&
      ((s = (e = t.groups) == null ? void 0 : e[1]) == null ? void 0 : s.type) === 'value-colon'
    );
  }
  function Qr(t) {
    var e;
    return (
      t.type === 'value-paren_group' && ((e = t.groups) == null ? void 0 : e[0]) && Bt(t.groups[0])
    );
  }
  function Xr(t, e) {
    var i;
    if (e.parser !== 'scss') return !1;
    let { node: s } = t;
    if (s.groups.length === 0) return !1;
    let r = t.grandparent;
    if (!Qr(s) && !(r && Qr(r))) return !1;
    let n = t.findAncestor(o => o.type === 'css-decl');
    return !!(
      ((i = n == null ? void 0 : n.prop) != null && i.startsWith('$')) ||
      Qr(r) ||
      r.type === 'value-func'
    );
  }
  function Ae(t) {
    return t.type === 'value-comment' && t.inline;
  }
  function Mt(t) {
    return t.type === 'value-word' && t.value === '#';
  }
  function Zr(t) {
    return t.type === 'value-word' && t.value === '{';
  }
  function Ut(t) {
    return t.type === 'value-word' && t.value === '}';
  }
  function rt(t) {
    return ['value-word', 'value-atword'].includes(t.type);
  }
  function st(t) {
    return (t == null ? void 0 : t.type) === 'value-colon';
  }
  function si(t, e) {
    if (!Bt(e)) return !1;
    let { groups: s } = e,
      r = s.indexOf(t);
    return r === -1 ? !1 : st(s[r + 1]);
  }
  function ni(t) {
    return t.value && ['not', 'and', 'or'].includes(t.value.toLowerCase());
  }
  function ii(t) {
    return t.type !== 'value-func' ? !1 : Ql.has(t.value.toLowerCase());
  }
  function Ne(t) {
    return /\/\//u.test(t.split(/[\n\r]/u).pop());
  }
  function nt(t) {
    return (
      (t == null ? void 0 : t.type) === 'value-atword' &&
      t.value.startsWith('prettier-placeholder-')
    );
  }
  function oi(t, e) {
    var s, r;
    if (
      ((s = t.open) == null ? void 0 : s.value) !== '(' ||
      ((r = t.close) == null ? void 0 : r.value) !== ')' ||
      t.groups.some(n => n.type !== 'value-comma_group')
    )
      return !1;
    if (e.type === 'value-comma_group') {
      let n = e.groups.indexOf(t) - 1,
        i = e.groups[n];
      if ((i == null ? void 0 : i.type) === 'value-word' && i.value === 'with') return !0;
    }
    return !1;
  }
  function it(t) {
    var e, s;
    return (
      t.type === 'value-paren_group' &&
      ((e = t.open) == null ? void 0 : e.value) === '(' &&
      ((s = t.close) == null ? void 0 : s.value) === ')'
    );
  }
  function Zl(t, e, s) {
    var d;
    let { node: r } = t,
      n = t.parent,
      i = t.grandparent,
      o = Fn(t),
      u = o && n.type === 'value-value' && (o === 'grid' || o.startsWith('grid-template')),
      a = t.findAncestor(m => m.type === 'css-atrule'),
      c = a && tt(a, e),
      f = r.groups.some(m => Ae(m)),
      p = t.map(s, 'groups'),
      l = [''],
      y = Ce(t, 'url'),
      x = !1,
      h = !1;
    for (let m = 0; m < r.groups.length; ++m) {
      let b = r.groups[m - 1],
        w = r.groups[m],
        v = r.groups[m + 1],
        N = r.groups[m + 2];
      if (Ae(w) && !v) {
        l.push([l.pop(), on([' ', p[m]])]);
        continue;
      }
      if ((l.push([l.pop(), p[m]]), y)) {
        ((v && J(v)) || J(w)) && l.push([l.pop(), ' ']);
        continue;
      }
      if (
        (st(v) &&
          w.type === 'value-word' &&
          l.length > 2 &&
          r.groups.slice(0, m).every(O => O.type === 'value-comment') &&
          !Ae(b) &&
          (l[l.length - 2] = oe($(!1, l, -2))),
        (Oe(t, 'forward') &&
          w.type === 'value-word' &&
          w.value &&
          b !== void 0 &&
          b.type === 'value-word' &&
          b.value === 'as' &&
          v.type === 'value-operator' &&
          v.value === '*') ||
          !v ||
          (w.type === 'value-word' && w.value.endsWith('-') && nt(v)))
      )
        continue;
      if (w.type === 'value-string' && w.quoted) {
        let O = w.value.lastIndexOf('#{'),
          ve = w.value.lastIndexOf('}');
        O !== -1 && ve !== -1 ? (x = O > ve) : O !== -1 ? (x = !0) : ve !== -1 && (x = !1);
      }
      if (
        x ||
        st(w) ||
        st(v) ||
        (w.type === 'value-atword' && (w.value === '' || w.value.endsWith('['))) ||
        (v.type === 'value-word' && v.value.startsWith(']')) ||
        w.value === '~' ||
        (w.type !== 'value-string' &&
          w.value &&
          w.value.includes('\\') &&
          v &&
          v.type !== 'value-comment') ||
        (b != null &&
          b.value &&
          b.value.indexOf('\\') === b.value.length - 1 &&
          w.type === 'value-operator' &&
          w.value === '/') ||
        w.value === '\\' ||
        ei(w, v) ||
        Mt(w) ||
        Zr(w) ||
        Ut(v) ||
        (Zr(v) && de(v)) ||
        (Ut(w) && de(v)) ||
        (w.value === '--' && Mt(v))
      )
        continue;
      let F = Lt(w),
        Q = Lt(v);
      if (
        (((F && Mt(v)) || (Q && Ut(w))) && de(v)) ||
        (!b && et(w)) ||
        (Ce(t, 'calc') && (J(w) || J(v) || he(w) || he(v)) && de(v))
      )
        continue;
      let W =
          (J(w) || he(w)) &&
          m === 0 &&
          (v.type === 'value-number' || v.isHex) &&
          i &&
          ii(i) &&
          !de(v),
        T =
          (N == null ? void 0 : N.type) === 'value-func' ||
          (N && rt(N)) ||
          w.type === 'value-func' ||
          rt(w),
        C =
          v.type === 'value-func' ||
          rt(v) ||
          (b == null ? void 0 : b.type) === 'value-func' ||
          (b && rt(b));
      if (e.parser === 'scss' && F && w.value === '-' && v.type === 'value-func' && R(w) !== P(v)) {
        l.push([l.pop(), ' ']);
        continue;
      }
      if (
        !(
          !(qt(v) || qt(w)) &&
          !Ce(t, 'calc') &&
          !W &&
          ((et(v) && !T) || (et(w) && !C) || (J(v) && !T) || (J(w) && !C) || he(v) || he(w)) &&
          (de(v) || (F && (!b || (b && Lt(b)))))
        ) &&
        !(
          (e.parser === 'scss' || e.parser === 'less') &&
          F &&
          w.value === '-' &&
          it(v) &&
          R(w) === P(v.open) &&
          v.open.value === '('
        )
      ) {
        if (Ae(w)) {
          if (n.type === 'value-paren_group') {
            l.push(oe(S), '');
            continue;
          }
          l.push(S, '');
          continue;
        }
        if (c && (Jn(v) || Xn(v) || Kn(v) || Qn(w) || Hn(w))) {
          l.push([l.pop(), ' ']);
          continue;
        }
        if (a && a.name.toLowerCase() === 'namespace') {
          l.push([l.pop(), ' ']);
          continue;
        }
        if (u) {
          w.source && v.source && w.source.start.line !== v.source.start.line
            ? (l.push(S, ''), (h = !0))
            : l.push([l.pop(), ' ']);
          continue;
        }
        if (Q) {
          l.push([l.pop(), ' ']);
          continue;
        }
        if ((v == null ? void 0 : v.value) !== '...' && !(nt(w) && nt(v) && R(w) === P(v))) {
          if (nt(w) && it(v) && R(w) === P(v.open)) {
            l.push(D, '');
            continue;
          }
          if (w.value === 'with' && it(v)) {
            l = [[Se(l), ' ']];
            continue;
          }
          ((d = w.value) != null && d.endsWith('#') && v.value === '{' && it(v.group)) ||
            (Ae(v) && !N) ||
            l.push(A, '');
        }
      }
    }
    return (
      f && l.push([l.pop(), Ke]),
      h && l.unshift('', S),
      c ? L(q(l)) : Vn(t) ? L(Se(l)) : L(q(Se(l)))
    );
  }
  var ai = Zl;
  function ec(t) {
    return t.length === 1
      ? t
      : t
          .toLowerCase()
          .replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(?=\d)/u, '$1$2')
          .replace(/^([+-]?[\d.]+)e[+-]?0+$/u, '$1')
          .replace(/^([+-])?\./u, '$10.')
          .replace(/(\.\d+?)0+(?=e|$)/u, '$1')
          .replace(/\.(?=e|$)/u, '');
  }
  var ui = ec;
  var es = new Map([
    ['em', 'em'],
    ['rem', 'rem'],
    ['ex', 'ex'],
    ['rex', 'rex'],
    ['cap', 'cap'],
    ['rcap', 'rcap'],
    ['ch', 'ch'],
    ['rch', 'rch'],
    ['ic', 'ic'],
    ['ric', 'ric'],
    ['lh', 'lh'],
    ['rlh', 'rlh'],
    ['vw', 'vw'],
    ['svw', 'svw'],
    ['lvw', 'lvw'],
    ['dvw', 'dvw'],
    ['vh', 'vh'],
    ['svh', 'svh'],
    ['lvh', 'lvh'],
    ['dvh', 'dvh'],
    ['vi', 'vi'],
    ['svi', 'svi'],
    ['lvi', 'lvi'],
    ['dvi', 'dvi'],
    ['vb', 'vb'],
    ['svb', 'svb'],
    ['lvb', 'lvb'],
    ['dvb', 'dvb'],
    ['vmin', 'vmin'],
    ['svmin', 'svmin'],
    ['lvmin', 'lvmin'],
    ['dvmin', 'dvmin'],
    ['vmax', 'vmax'],
    ['svmax', 'svmax'],
    ['lvmax', 'lvmax'],
    ['dvmax', 'dvmax'],
    ['cm', 'cm'],
    ['mm', 'mm'],
    ['q', 'Q'],
    ['in', 'in'],
    ['pt', 'pt'],
    ['pc', 'pc'],
    ['px', 'px'],
    ['deg', 'deg'],
    ['grad', 'grad'],
    ['rad', 'rad'],
    ['turn', 'turn'],
    ['s', 's'],
    ['ms', 'ms'],
    ['hz', 'Hz'],
    ['khz', 'kHz'],
    ['dpi', 'dpi'],
    ['dpcm', 'dpcm'],
    ['dppx', 'dppx'],
    ['x', 'x'],
    ['cqw', 'cqw'],
    ['cqh', 'cqh'],
    ['cqi', 'cqi'],
    ['cqb', 'cqb'],
    ['cqmin', 'cqmin'],
    ['cqmax', 'cqmax'],
    ['fr', 'fr'],
  ]);
  function li(t) {
    let e = t.toLowerCase();
    return es.has(e) ? es.get(e) : t;
  }
  var ci = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gsu,
    tc = /(?:\d*\.\d+|\d+\.?)(?:e[+-]?\d+)?/giu,
    rc = /[a-z]+/giu,
    sc = /[$@]?[_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/giu,
    nc = new RegExp(ci.source + `|(${sc.source})?(${tc.source})(${rc.source})?`, 'giu');
  function V(t, e) {
    return E(!1, t, ci, s => Nt(s, e));
  }
  function fi(t, e) {
    let s = e.singleQuote ? "'" : '"';
    return t.includes('"') || t.includes("'") ? t : s + t + s;
  }
  function me(t) {
    return E(!1, t, nc, (e, s, r, n, i) => (!r && n ? ts(n) + ue(i || '') : e));
  }
  function ts(t) {
    return ui(t).replace(/\.0(?=$|e)/u, '');
  }
  function pi(t) {
    return t.trailingComma === 'es5' || t.trailingComma === 'all';
  }
  function ic(t, e, s) {
    let r = !!(s != null && s.backwards);
    if (e === !1) return !1;
    let n = t.charAt(e);
    if (r) {
      if (
        t.charAt(e - 1) === '\r' &&
        n ===
          `
`
      )
        return e - 2;
      if (
        n ===
          `
` ||
        n === '\r' ||
        n === '\u2028' ||
        n === '\u2029'
      )
        return e - 1;
    } else {
      if (
        n === '\r' &&
        t.charAt(e + 1) ===
          `
`
      )
        return e + 2;
      if (
        n ===
          `
` ||
        n === '\r' ||
        n === '\u2028' ||
        n === '\u2029'
      )
        return e + 1;
    }
    return e;
  }
  var Ft = ic;
  function oc(t, e, s = {}) {
    let r = Rt(t, s.backwards ? e - 1 : e, s),
      n = Ft(t, r, s);
    return r !== n;
  }
  var $t = oc;
  function ac(t, e) {
    if (e === !1) return !1;
    if (t.charAt(e) === '/' && t.charAt(e + 1) === '*') {
      for (let s = e + 2; s < t.length; ++s)
        if (t.charAt(s) === '*' && t.charAt(s + 1) === '/') return s + 2;
    }
    return e;
  }
  var hi = ac;
  function uc(t, e) {
    return e === !1 ? !1 : t.charAt(e) === '/' && t.charAt(e + 1) === '/' ? It(t, e) : e;
  }
  var di = uc;
  function lc(t, e) {
    let s = null,
      r = e;
    for (; r !== s; ) (s = r), (r = bn(t, r)), (r = hi(t, r)), (r = Rt(t, r));
    return (r = di(t, r)), (r = Ft(t, r)), r !== !1 && $t(t, r);
  }
  var Wt = lc;
  function cc({ node: t, parent: e }, s) {
    return !!(t.source && s.originalText.slice(P(t), P(e.close)).trimEnd().endsWith(','));
  }
  function fc(t, e) {
    return Gn(t.grandparent) && cc(t, e)
      ? ','
      : t.node.type !== 'value-comment' &&
          !(
            t.node.type === 'value-comma_group' &&
            t.node.groups.every(s => s.type === 'value-comment')
          ) &&
          pi(e) &&
          t.callParent(() => Xr(t, e))
        ? Ot(',')
        : '';
  }
  function mi(t, e, s) {
    let { node: r, parent: n } = t,
      i = t.map(({ node: y }) => (typeof y == 'string' ? y : s()), 'groups');
    if (
      n &&
      zn(n) &&
      (r.groups.length === 1 ||
        (r.groups.length > 0 &&
          r.groups[0].type === 'value-comma_group' &&
          r.groups[0].groups.length > 0 &&
          r.groups[0].groups[0].type === 'value-word' &&
          r.groups[0].groups[0].value.startsWith('data:')))
    )
      return [r.open ? s('open') : '', Y(',', i), r.close ? s('close') : ''];
    if (!r.open) {
      let y = rs(t);
      He(i);
      let x = hc(Y(',', i), 2),
        h = Y(y ? S : A, x);
      return q(y ? [S, h] : L([pc(t) ? D : '', Se(h)]));
    }
    let o = t.map(({ node: y, isLast: x, index: h }) => {
        var b;
        let d = i[h];
        Bt(y) &&
          y.type === 'value-comma_group' &&
          y.groups &&
          y.groups[0].type !== 'value-paren_group' &&
          ((b = y.groups[2]) == null ? void 0 : b.type) === 'value-paren_group' &&
          H(d) === re &&
          H(d.contents) === te &&
          H(d.contents.contents) === se &&
          (d = L(oe(d)));
        let m = [d, x ? fc(t, e) : ','];
        if (!x && y.type === 'value-comma_group' && ae(y.groups)) {
          let w = $(!1, y.groups, -1);
          !w.source && w.close && (w = w.close), w.source && Wt(e.originalText, R(w)) && m.push(S);
        }
        return m;
      }, 'groups'),
      u = si(r, n),
      a = oi(r, n),
      c = Xr(t, e),
      f = a || (c && !u),
      p = a || u,
      l = L([r.open ? s('open') : '', q([D, Y(A, o)]), D, r.close ? s('close') : ''], {
        shouldBreak: f,
      });
    return p ? oe(l) : l;
  }
  function rs(t) {
    return t.match(
      e =>
        e.type === 'value-paren_group' &&
        !e.open &&
        e.groups.some(s => s.type === 'value-comma_group'),
      (e, s) => s === 'group' && e.type === 'value-value',
      (e, s) => s === 'group' && e.type === 'value-root',
      (e, s) =>
        s === 'value' &&
        ((e.type === 'css-decl' && !e.prop.startsWith('--')) ||
          (e.type === 'css-atrule' && e.variable))
    );
  }
  function pc(t) {
    return t.match(
      e => e.type === 'value-paren_group' && !e.open,
      (e, s) => s === 'group' && e.type === 'value-value',
      (e, s) => s === 'group' && e.type === 'value-root',
      (e, s) => s === 'value' && e.type === 'css-decl'
    );
  }
  function hc(t, e) {
    let s = [];
    for (let r = 0; r < t.length; r += e) s.push(t.slice(r, r + e));
    return s;
  }
  function dc(t, e, s) {
    let r = [];
    return (
      t.each(() => {
        let { node: n, previous: i } = t;
        if (
          ((i == null ? void 0 : i.type) === 'css-comment' && i.text.trim() === 'prettier-ignore'
            ? r.push(e.originalText.slice(P(n), R(n)))
            : r.push(s()),
          t.isLast)
        )
          return;
        let { next: o } = t;
        (o.type === 'css-comment' && !$t(e.originalText, P(o), { backwards: !0 }) && !Te(n)) ||
        (o.type === 'css-atrule' && o.name === 'else' && n.type !== 'css-comment')
          ? r.push(' ')
          : (r.push(e.__isHTMLStyleAttribute ? A : S),
            Wt(e.originalText, R(n)) && !Te(n) && r.push(S));
      }, 'nodes'),
      r
    );
  }
  var Pe = dc;
  function mc(t, e, s) {
    var n, i, o, u, a, c;
    let { node: r } = t;
    switch (r.type) {
      case 'front-matter':
        return [r.raw, S];
      case 'css-root': {
        let f = Pe(t, e, s),
          p = r.raws.after.trim();
        return (
          p.startsWith(';') && (p = p.slice(1).trim()),
          [
            r.frontMatter ? [s('frontMatter'), S] : '',
            f,
            p ? ` ${p}` : '',
            r.nodes.length > 0 ? S : '',
          ]
        );
      }
      case 'css-comment': {
        let f = r.inline || r.raws.inline,
          p = e.originalText.slice(P(r), R(r));
        return f ? p.trimEnd() : p;
      }
      case 'css-rule':
        return [
          s('selector'),
          r.important ? ' !important' : '',
          r.nodes
            ? [
                ((n = r.selector) == null ? void 0 : n.type) === 'selector-unknown' &&
                Ne(r.selector.value)
                  ? A
                  : r.selector
                    ? ' '
                    : '',
                '{',
                r.nodes.length > 0 ? q([S, Pe(t, e, s)]) : '',
                S,
                '}',
                jn(r) ? ';' : '',
              ]
            : ';',
        ];
      case 'css-decl': {
        let f = t.parent,
          { between: p } = r.raws,
          l = p.trim(),
          y = l === ':',
          x = typeof r.value == 'string' && /^ *$/u.test(r.value),
          h = typeof r.value == 'string' ? r.value : s('value');
        return (
          (h = ti(r) ? tn(h) : h),
          !y &&
            Ne(l) &&
            !(
              (o = (i = r.value) == null ? void 0 : i.group) != null &&
              o.group &&
              t.call(() => rs(t), 'value', 'group', 'group')
            ) &&
            (h = q([S, oe(h)])),
          [
            E(!1, r.raws.before, /[\s;]/gu, ''),
            (f.type === 'css-atrule' && f.variable) || Yn(t) ? r.prop : ue(r.prop),
            l.startsWith('//') ? ' ' : '',
            l,
            r.extend || x ? '' : ' ',
            e.parser === 'less' && r.extend && r.selector ? ['extend(', s('selector'), ')'] : '',
            h,
            r.raws.important
              ? r.raws.important.replace(/\s*!\s*important/iu, ' !important')
              : r.important
                ? ' !important'
                : '',
            r.raws.scssDefault
              ? r.raws.scssDefault.replace(/\s*!default/iu, ' !default')
              : r.scssDefault
                ? ' !default'
                : '',
            r.raws.scssGlobal
              ? r.raws.scssGlobal.replace(/\s*!global/iu, ' !global')
              : r.scssGlobal
                ? ' !global'
                : '',
            r.nodes
              ? [' {', q([D, Pe(t, e, s)]), D, '}']
              : Zn(r) && !f.raws.semicolon && e.originalText[R(r) - 1] !== ';'
                ? ''
                : e.__isHTMLStyleAttribute && t.isLast
                  ? Ot(';')
                  : ';',
          ]
        );
      }
      case 'css-atrule': {
        let f = t.parent,
          p = Dt(r) && !f.raws.semicolon && e.originalText[R(r) - 1] !== ';';
        if (e.parser === 'less') {
          if (r.mixin) return [s('selector'), r.important ? ' !important' : '', p ? '' : ';'];
          if (r.function)
            return [r.name, typeof r.params == 'string' ? r.params : s('params'), p ? '' : ';'];
          if (r.variable)
            return [
              '@',
              r.name,
              ': ',
              r.value ? s('value') : '',
              r.raws.between.trim() ? r.raws.between.trim() + ' ' : '',
              r.nodes ? ['{', q([r.nodes.length > 0 ? D : '', Pe(t, e, s)]), D, '}'] : '',
              p ? '' : ';',
            ];
        }
        let l =
          r.name === 'import' &&
          ((u = r.params) == null ? void 0 : u.type) === 'value-unknown' &&
          r.params.value.endsWith(';');
        return [
          '@',
          Jr(r) || r.name.endsWith(':') || Dt(r) ? r.name : ue(r.name),
          r.params
            ? [
                Jr(r)
                  ? ''
                  : Dt(r)
                    ? r.raws.afterName === ''
                      ? ''
                      : r.name.endsWith(':')
                        ? ' '
                        : /^\s*\n\s*\n/u.test(r.raws.afterName)
                          ? [S, S]
                          : /^\s*\n/u.test(r.raws.afterName)
                            ? S
                            : ' '
                    : ' ',
                typeof r.params == 'string' ? r.params : s('params'),
              ]
            : '',
          r.selector ? q([' ', s('selector')]) : '',
          r.value
            ? L([' ', s('value'), tt(r, e) ? (ri(r) ? ' ' : A) : ''])
            : r.name === 'else'
              ? ' '
              : '',
          r.nodes
            ? [
                tt(r, e)
                  ? ''
                  : (r.selector &&
                        !r.selector.nodes &&
                        typeof r.selector.value == 'string' &&
                        Ne(r.selector.value)) ||
                      (!r.selector && typeof r.params == 'string' && Ne(r.params))
                    ? A
                    : ' ',
                '{',
                q([r.nodes.length > 0 ? D : '', Pe(t, e, s)]),
                D,
                '}',
              ]
            : p || l
              ? ''
              : ';',
        ];
      }
      case 'media-query-list': {
        let f = [];
        return (
          t.each(({ node: p }) => {
            (p.type === 'media-query' && p.value === '') || f.push(s());
          }, 'nodes'),
          L(q(Y(A, f)))
        );
      }
      case 'media-query':
        return [Y(' ', t.map(s, 'nodes')), t.isLast ? '' : ','];
      case 'media-type':
        return me(V(r.value, e));
      case 'media-feature-expression':
        return r.nodes ? ['(', ...t.map(s, 'nodes'), ')'] : r.value;
      case 'media-feature':
        return ue(V(E(!1, r.value, / +/gu, ' '), e));
      case 'media-colon':
        return [r.value, ' '];
      case 'media-value':
        return me(V(r.value, e));
      case 'media-keyword':
        return V(r.value, e);
      case 'media-url':
        return V(E(!1, E(!1, r.value, /^url\(\s+/giu, 'url('), /\s+\)$/gu, ')'), e);
      case 'media-unknown':
        return r.value;
      case 'selector-root':
        return L([
          Oe(t, 'custom-selector')
            ? [t.findAncestor(f => f.type === 'css-atrule').customSelector, A]
            : '',
          Y([',', Oe(t, ['extend', 'custom-selector', 'nest']) ? A : S], t.map(s, 'nodes')),
        ]);
      case 'selector-selector': {
        let f = r.nodes.length > 1;
        return L((f ? q : p => p)(t.map(s, 'nodes')));
      }
      case 'selector-comment':
        return r.value;
      case 'selector-string':
        return V(r.value, e);
      case 'selector-tag':
        return [
          r.namespace ? [r.namespace === !0 ? '' : r.namespace.trim(), '|'] : '',
          ((a = t.previous) == null ? void 0 : a.type) === 'selector-nesting'
            ? r.value
            : me(Wn(t, r.value) ? r.value.toLowerCase() : r.value),
        ];
      case 'selector-id':
        return ['#', r.value];
      case 'selector-class':
        return ['.', me(V(r.value, e))];
      case 'selector-attribute':
        return [
          '[',
          r.namespace ? [r.namespace === !0 ? '' : r.namespace.trim(), '|'] : '',
          r.attribute.trim(),
          r.operator ?? '',
          r.value ? fi(V(r.value.trim(), e), e) : '',
          r.insensitive ? ' i' : '',
          ']',
        ];
      case 'selector-combinator': {
        if (r.value === '+' || r.value === '>' || r.value === '~' || r.value === '>>>') {
          let l = t.parent;
          return [
            l.type === 'selector-selector' && l.nodes[0] === r ? '' : A,
            r.value,
            t.isLast ? '' : ' ',
          ];
        }
        let f = r.value.trim().startsWith('(') ? A : '',
          p = me(V(r.value.trim(), e)) || A;
        return [f, p];
      }
      case 'selector-universal':
        return [r.namespace ? [r.namespace === !0 ? '' : r.namespace.trim(), '|'] : '', r.value];
      case 'selector-pseudo':
        return [
          ue(r.value),
          ae(r.nodes) ? L(['(', q([D, Y([',', A], t.map(s, 'nodes'))]), D, ')']) : '',
        ];
      case 'selector-nesting':
        return r.value;
      case 'selector-unknown': {
        let f = t.findAncestor(y => y.type === 'css-rule');
        if (f != null && f.isSCSSNesterProperty) return me(V(ue(r.value), e));
        let p = t.parent;
        if ((c = p.raws) != null && c.selector) {
          let y = P(p),
            x = y + p.raws.selector.length;
          return e.originalText.slice(y, x).trim();
        }
        let l = t.grandparent;
        if (
          p.type === 'value-paren_group' &&
          (l == null ? void 0 : l.type) === 'value-func' &&
          l.value === 'selector'
        ) {
          let y = R(p.open) + 1,
            x = P(p.close),
            h = e.originalText.slice(y, x).trim();
          return Ne(h) ? [Ke, h] : h;
        }
        return r.value;
      }
      case 'value-value':
      case 'value-root':
        return s('group');
      case 'value-comment':
        return e.originalText.slice(P(r), R(r));
      case 'value-comma_group':
        return ai(t, e, s);
      case 'value-paren_group':
        return mi(t, e, s);
      case 'value-func':
        return [r.value, Oe(t, 'supports') && ni(r) ? ' ' : '', s('group')];
      case 'value-paren':
        return r.value;
      case 'value-number':
        return [ts(r.value), li(r.unit)];
      case 'value-operator':
        return r.value;
      case 'value-word':
        return (r.isColor && r.isHex) || $n(r.value) ? r.value.toLowerCase() : r.value;
      case 'value-colon': {
        let { previous: f } = t;
        return L([
          r.value,
          (typeof (f == null ? void 0 : f.value) == 'string' && f.value.endsWith('\\')) ||
          Ce(t, 'url')
            ? ''
            : A,
        ]);
      }
      case 'value-string':
        return Nt(r.raws.quote + r.value + r.raws.quote, e);
      case 'value-atword':
        return ['@', r.value];
      case 'value-unicode-range':
        return r.value;
      case 'value-unknown':
        return r.value;
      case 'value-comma':
      default:
        throw new pn(r, 'PostCSS');
    }
  }
  var yc = { print: mc, embed: gn, insertPragma: Un, massageAstNode: dn, getVisitorKeys: xn },
    yi = yc;
  var gi = [
    {
      linguistLanguageId: 50,
      name: 'CSS',
      type: 'markup',
      tmScope: 'source.css',
      aceMode: 'css',
      codemirrorMode: 'css',
      codemirrorMimeType: 'text/css',
      color: '#563d7c',
      extensions: ['.css', '.wxss'],
      parsers: ['css'],
      vscodeLanguageIds: ['css'],
    },
    {
      linguistLanguageId: 262764437,
      name: 'PostCSS',
      type: 'markup',
      color: '#dc3a0c',
      tmScope: 'source.postcss',
      group: 'CSS',
      extensions: ['.pcss', '.postcss'],
      aceMode: 'text',
      parsers: ['css'],
      vscodeLanguageIds: ['postcss'],
    },
    {
      linguistLanguageId: 198,
      name: 'Less',
      type: 'markup',
      color: '#1d365d',
      aliases: ['less-css'],
      extensions: ['.less'],
      tmScope: 'source.css.less',
      aceMode: 'less',
      codemirrorMode: 'css',
      codemirrorMimeType: 'text/css',
      parsers: ['less'],
      vscodeLanguageIds: ['less'],
    },
    {
      linguistLanguageId: 329,
      name: 'SCSS',
      type: 'markup',
      color: '#c6538c',
      tmScope: 'source.css.scss',
      aceMode: 'scss',
      codemirrorMode: 'css',
      codemirrorMimeType: 'text/x-scss',
      extensions: ['.scss'],
      parsers: ['scss'],
      vscodeLanguageIds: ['scss'],
    },
  ];
  var wi = {
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
  var gc = { singleQuote: wi.singleQuote },
    vi = gc;
  var Js = {};
  Zs(Js, { css: () => Ny, less: () => Py, scss: () => Ry });
  var ol = xe(gt(), 1),
    al = xe(To(), 1),
    ul = xe(oa(), 1);
  function sp(t, e) {
    let s = new SyntaxError(t + ' (' + e.loc.start.line + ':' + e.loc.start.column + ')');
    return Object.assign(s, e);
  }
  var aa = sp;
  var da = xe(ha(), 1);
  function X(t, e, s) {
    if (t && typeof t == 'object') {
      delete t.parent;
      for (let r in t)
        X(t[r], e, s),
          r === 'type' &&
            typeof t[r] == 'string' &&
            !t[r].startsWith(e) &&
            (!s || !s.test(t[r])) &&
            (t[r] = e + t[r]);
    }
    return t;
  }
  function Ls(t) {
    if (t && typeof t == 'object') {
      delete t.parent;
      for (let e in t) Ls(t[e]);
      !Array.isArray(t) && t.value && !t.type && (t.type = 'unknown');
    }
    return t;
  }
  var mp = da.default.default;
  function yp(t) {
    let e;
    try {
      e = mp(t);
    } catch {
      return { type: 'selector-unknown', value: t };
    }
    return X(Ls(e), 'media-');
  }
  var ma = yp;
  var lu = xe(uu(), 1);
  function Nm(t) {
    if (/\/\/|\/\*/u.test(t)) return { type: 'selector-unknown', value: t.trim() };
    let e;
    try {
      new lu.default(s => {
        e = s;
      }).process(t);
    } catch {
      return { type: 'selector-unknown', value: t };
    }
    return X(e, 'selector-');
  }
  var ee = Nm;
  var rl = xe(Qu(), 1);
  var wy = t => {
      for (; t.parent; ) t = t.parent;
      return t;
    },
    Fr = wy;
  function vy(t) {
    return Fr(t)
      .text.slice(t.group.open.sourceIndex + 1, t.group.close.sourceIndex)
      .trim();
  }
  var Ju = vy;
  function xy(t) {
    if (ae(t)) {
      for (let e = t.length - 1; e > 0; e--)
        if (
          t[e].type === 'word' &&
          t[e].value === '{' &&
          t[e - 1].type === 'word' &&
          t[e - 1].value.endsWith('#')
        )
          return !0;
    }
    return !1;
  }
  var Xu = xy;
  function by(t) {
    return t.some(e => e.type === 'string' || (e.type === 'func' && !e.value.endsWith('\\')));
  }
  var Zu = by;
  function _y(t, e) {
    return !!(
      e.parser === 'scss' &&
      (t == null ? void 0 : t.type) === 'word' &&
      t.value.startsWith('$')
    );
  }
  var el = _y;
  var tl = t => t.type === 'paren' && t.value === ')';
  function Ey(t, e) {
    var a;
    let { nodes: s } = t,
      r = { open: null, close: null, groups: [], type: 'paren_group' },
      n = [r],
      i = r,
      o = { groups: [], type: 'comma_group' },
      u = [o];
    for (let c = 0; c < s.length; ++c) {
      let f = s[c];
      if (
        (e.parser === 'scss' &&
          f.type === 'number' &&
          f.unit === '..' &&
          f.value.endsWith('.') &&
          ((f.value = f.value.slice(0, -1)), (f.unit = '...')),
        f.type === 'func' &&
          f.value === 'selector' &&
          (f.group.groups = [
            ee(Fr(t).text.slice(f.group.open.sourceIndex + 1, f.group.close.sourceIndex)),
          ]),
        f.type === 'func' && f.value === 'url')
      ) {
        let p = ((a = f.group) == null ? void 0 : a.groups) ?? [],
          l = [];
        for (let y = 0; y < p.length; y++) {
          let x = p[y];
          x.type === 'comma_group' ? (l = [...l, ...x.groups]) : l.push(x);
        }
        (Xu(l) || (!Zu(l) && !el(l[0], e))) && (f.group.groups = [Ju(f)]);
      }
      if (f.type === 'paren' && f.value === '(')
        (r = { open: f, close: null, groups: [], type: 'paren_group' }),
          n.push(r),
          (o = { groups: [], type: 'comma_group' }),
          u.push(o);
      else if (tl(f)) {
        if ((o.groups.length > 0 && r.groups.push(o), (r.close = f), u.length === 1))
          throw new Error('Unbalanced parenthesis');
        u.pop(), (o = $(!1, u, -1)), o.groups.push(r), n.pop(), (r = $(!1, n, -1));
      } else if (f.type === 'comma') {
        if (c === s.length - 3 && s[c + 1].type === 'comment' && tl(s[c + 2])) continue;
        r.groups.push(o), (o = { groups: [], type: 'comma_group' }), (u[u.length - 1] = o);
      } else o.groups.push(f);
    }
    return o.groups.length > 0 && r.groups.push(o), i;
  }
  function $r(t) {
    return (t.type === 'paren_group' && !t.open && !t.close && t.groups.length === 1) ||
      (t.type === 'comma_group' && t.groups.length === 1)
      ? $r(t.groups[0])
      : t.type === 'paren_group' || t.type === 'comma_group'
        ? { ...t, groups: t.groups.map($r) }
        : t;
  }
  function sl(t, e) {
    if (t && typeof t == 'object')
      for (let s in t)
        s !== 'parent' && (sl(t[s], e), s === 'nodes' && ((t.group = $r(Ey(t, e))), delete t[s]));
    return t;
  }
  function ky(t, e) {
    if (e.parser === 'less' && t.startsWith('~`')) return { type: 'value-unknown', value: t };
    let s = null;
    try {
      s = new rl.default(t, { loose: !0 }).parse();
    } catch {
      return { type: 'value-unknown', value: t };
    }
    s.text = t;
    let r = sl(s, e);
    return X(r, 'value-', /^selector-/u);
  }
  var pe = ky;
  var Sy = new Set(['import', 'use', 'forward']);
  function Ty(t) {
    return Sy.has(t);
  }
  var nl = Ty;
  function Cy(t, e) {
    return e.parser !== 'scss' || !t.selector
      ? !1
      : t.selector
          .replace(/\/\*.*?\*\//u, '')
          .replace(/\/\/.*\n/u, '')
          .trim()
          .endsWith(':');
  }
  var il = Cy;
  var Oy = /(\s*)(!default).*$/u,
    Ay = /(\s*)(!global).*$/u;
  function ll(t, e) {
    var s, r;
    if (t && typeof t == 'object') {
      delete t.parent;
      for (let u in t) ll(t[u], e);
      if (!t.type) return t;
      if (
        (t.raws ?? (t.raws = {}),
        t.type === 'css-decl' &&
          typeof t.prop == 'string' &&
          t.prop.startsWith('--') &&
          typeof t.value == 'string' &&
          t.value.startsWith('{'))
      ) {
        let u;
        if (t.value.trimEnd().endsWith('}')) {
          let a = e.originalText.slice(0, t.source.start.offset),
            c =
              'a'.repeat(t.prop.length) +
              e.originalText.slice(t.source.start.offset + t.prop.length, t.source.end.offset),
            f = E(!1, a, /[^\n]/gu, ' ') + c,
            p;
          e.parser === 'scss' ? (p = pl) : e.parser === 'less' ? (p = fl) : (p = cl);
          let l;
          try {
            l = p(f, { ...e });
          } catch {}
          ((s = l == null ? void 0 : l.nodes) == null ? void 0 : s.length) === 1 &&
            l.nodes[0].type === 'css-rule' &&
            (u = l.nodes[0].nodes);
        }
        return (
          u
            ? (t.value = { type: 'css-rule', nodes: u })
            : (t.value = { type: 'value-unknown', value: t.raws.value.raw }),
          t
        );
      }
      let n = '';
      typeof t.selector == 'string' &&
        ((n = t.raws.selector ? (t.raws.selector.scss ?? t.raws.selector.raw) : t.selector),
        t.raws.between && t.raws.between.trim().length > 0 && (n += t.raws.between),
        (t.raws.selector = n));
      let i = '';
      typeof t.value == 'string' &&
        ((i = t.raws.value ? (t.raws.value.scss ?? t.raws.value.raw) : t.value),
        (t.raws.value = i.trim()));
      let o = '';
      if (
        (typeof t.params == 'string' &&
          ((o = t.raws.params ? (t.raws.params.scss ?? t.raws.params.raw) : t.params),
          t.raws.afterName && t.raws.afterName.trim().length > 0 && (o = t.raws.afterName + o),
          t.raws.between && t.raws.between.trim().length > 0 && (o = o + t.raws.between),
          (o = o.trim()),
          (t.raws.params = o)),
        n.trim().length > 0)
      )
        return n.startsWith('@') && n.endsWith(':')
          ? t
          : t.mixin
            ? ((t.selector = pe(n, e)), t)
            : (il(t, e) && (t.isSCSSNesterProperty = !0), (t.selector = ee(n)), t);
      if (i.trim().length > 0) {
        let u = i.match(Oy);
        u &&
          ((i = i.slice(0, u.index)),
          (t.scssDefault = !0),
          u[0].trim() !== '!default' && (t.raws.scssDefault = u[0]));
        let a = i.match(Ay);
        if (
          (a &&
            ((i = i.slice(0, a.index)),
            (t.scssGlobal = !0),
            a[0].trim() !== '!global' && (t.raws.scssGlobal = a[0])),
          i.startsWith('progid:'))
        )
          return { type: 'value-unknown', value: i };
        t.value = pe(i, e);
      }
      if (
        (e.parser === 'less' &&
          t.type === 'css-decl' &&
          i.startsWith('extend(') &&
          (t.extend || (t.extend = t.raws.between === ':'),
          t.extend && !t.selector && (delete t.value, (t.selector = ee(i.slice(7, -1))))),
        t.type === 'css-atrule')
      ) {
        if (e.parser === 'less') {
          if (t.mixin) {
            let u = t.raws.identifier + t.name + t.raws.afterName + t.raws.params;
            return (t.selector = ee(u)), delete t.params, t;
          }
          if (t.function) return t;
        }
        if (e.parser === 'css' && t.name === 'custom-selector') {
          let u = t.params.match(/:--\S+\s+/u)[0].trim();
          return (
            (t.customSelector = u),
            (t.selector = ee(t.params.slice(u.length).trim())),
            delete t.params,
            t
          );
        }
        if (e.parser === 'less') {
          if (t.name.includes(':') && !t.params) {
            t.variable = !0;
            let u = t.name.split(':');
            (t.name = u[0]), (t.value = pe(u.slice(1).join(':'), e));
          }
          if (
            !['page', 'nest', 'keyframes'].includes(t.name) &&
            ((r = t.params) == null ? void 0 : r[0]) === ':'
          ) {
            t.variable = !0;
            let u = t.params.slice(1);
            u && (t.value = pe(u, e)), (t.raws.afterName += ':');
          }
          if (t.variable) return delete t.params, t.value || delete t.value, t;
        }
      }
      if (t.type === 'css-atrule' && o.length > 0) {
        let { name: u } = t,
          a = t.name.toLowerCase();
        return u === 'warn' || u === 'error'
          ? ((t.params = { type: 'media-unknown', value: o }), t)
          : u === 'extend' || u === 'nest'
            ? ((t.selector = ee(o)), delete t.params, t)
            : u === 'at-root'
              ? (/^\(\s*(?:without|with)\s*:.+\)$/su.test(o)
                  ? (t.params = pe(o, e))
                  : ((t.selector = ee(o)), delete t.params),
                t)
              : nl(a)
                ? ((t.import = !0), delete t.filename, (t.params = pe(o, e)), t)
                : [
                      'namespace',
                      'supports',
                      'if',
                      'else',
                      'for',
                      'each',
                      'while',
                      'debug',
                      'mixin',
                      'include',
                      'function',
                      'return',
                      'define-mixin',
                      'add-mixin',
                    ].includes(u)
                  ? ((o = o.replace(/(\$\S+?)(\s+)?\.{3}/u, '$1...$2')),
                    (o = o.replace(/^(?!if)(\S+)(\s+)\(/u, '$1($2')),
                    (t.value = pe(o, e)),
                    delete t.params,
                    t)
                  : ['media', 'custom-media'].includes(a)
                    ? o.includes('#{')
                      ? { type: 'media-unknown', value: o }
                      : ((t.params = ma(o)), t)
                    : ((t.params = o), t);
      }
    }
    return t;
  }
  function Ks(t, e, s) {
    let r = Ze(e),
      { frontMatter: n } = r;
    e = r.content;
    let i;
    try {
      i = t(e, { map: !1 });
    } catch (o) {
      let { name: u, reason: a, line: c, column: f } = o;
      throw typeof c != 'number'
        ? o
        : aa(`${u}: ${a}`, { loc: { start: { line: c, column: f } }, cause: o });
    }
    return (
      (s.originalText = e),
      (i = ll(X(i, 'css-'), s)),
      Kr(i, e),
      n && ((n.source = { startOffset: 0, endOffset: n.raw.length }), (i.frontMatter = n)),
      i
    );
  }
  function cl(t, e = {}) {
    return Ks(ol.default.default, t, e);
  }
  function fl(t, e = {}) {
    return Ks(s => al.default.parse(kn(s)), t, e);
  }
  function pl(t, e = {}) {
    return Ks(ul.default, t, e);
  }
  var Qs = { astFormat: 'postcss', hasPragma: Mn, locStart: P, locEnd: R },
    Ny = { ...Qs, parse: cl },
    Py = { ...Qs, parse: fl },
    Ry = { ...Qs, parse: pl };
  var Iy = { postcss: yi };
  return wl(qy);
});
