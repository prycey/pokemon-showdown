var Au = Object.create;
var At = Object.defineProperty;
var vu = Object.getOwnPropertyDescriptor;
var Bu = Object.getOwnPropertyNames;
var wu = Object.getPrototypeOf,
  _u = Object.prototype.hasOwnProperty;
var dr = e => {
  throw TypeError(e);
};
var pr = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  vt = (e, t) => {
    for (var r in t) At(e, r, { get: t[r], enumerable: !0 });
  },
  xu = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let u of Bu(t))
        !_u.call(e, u) &&
          u !== r &&
          At(e, u, { get: () => t[u], enumerable: !(n = vu(t, u)) || n.enumerable });
    return e;
  };
var Me = (e, t, r) => (
  (r = e != null ? Au(wu(e)) : {}),
  xu(t || !e || !e.__esModule ? At(r, 'default', { value: e, enumerable: !0 }) : r, e)
);
var bu = (e, t, r) => t.has(e) || dr('Cannot ' + r);
var Fr = (e, t, r) =>
  t.has(e)
    ? dr('Cannot add the same private member more than once')
    : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, r);
var pe = (e, t, r) => (bu(e, t, 'access private method'), r);
var ot = pr((Da, mn) => {
  'use strict';
  var Fn = new Proxy(String, { get: () => Fn });
  mn.exports = Fn;
});
var $n = pr(ur => {
  'use strict';
  Object.defineProperty(ur, '__esModule', { value: !0 });
  function wi() {
    return new Proxy({}, { get: () => e => e });
  }
  var Wn = /\r\n|[\n\r\u2028\u2029]/;
  function _i(e, t, r) {
    let n = Object.assign({ column: 0, line: -1 }, e.start),
      u = Object.assign({}, n, e.end),
      { linesAbove: i = 2, linesBelow: o = 3 } = r || {},
      s = n.line,
      a = n.column,
      D = u.line,
      l = u.column,
      p = Math.max(s - (i + 1), 0),
      f = Math.min(t.length, D + o);
    s === -1 && (p = 0), D === -1 && (f = t.length);
    let d = D - s,
      c = {};
    if (d)
      for (let F = 0; F <= d; F++) {
        let m = F + s;
        if (!a) c[m] = !0;
        else if (F === 0) {
          let h = t[m - 1].length;
          c[m] = [a, h - a + 1];
        } else if (F === d) c[m] = [0, l];
        else {
          let h = t[m - F].length;
          c[m] = [0, h];
        }
      }
    else a === l ? (a ? (c[s] = [a, 0]) : (c[s] = !0)) : (c[s] = [a, l - a]);
    return { start: p, end: f, markerLines: c };
  }
  function xi(e, t, r = {}) {
    let u = wi(!1),
      i = e.split(Wn),
      { start: o, end: s, markerLines: a } = _i(t, i, r),
      D = t.start && typeof t.start.column == 'number',
      l = String(s).length,
      f = e
        .split(Wn, s)
        .slice(o, s)
        .map((d, c) => {
          let F = o + 1 + c,
            h = ` ${` ${F}`.slice(-l)} |`,
            C = a[F],
            v = !a[F + 1];
          if (C) {
            let E = '';
            if (Array.isArray(C)) {
              let g = d.slice(0, Math.max(C[0] - 1, 0)).replace(/[^\t]/g, ' '),
                j = C[1] || 1;
              (E = [
                `
 `,
                u.gutter(h.replace(/\d/g, ' ')),
                ' ',
                g,
                u.marker('^').repeat(j),
              ].join('')),
                v && r.message && (E += ' ' + u.message(r.message));
            }
            return [u.marker('>'), u.gutter(h), d.length > 0 ? ` ${d}` : '', E].join('');
          } else return ` ${u.gutter(h)}${d.length > 0 ? ` ${d}` : ''}`;
        }).join(`
`);
    return (
      r.message &&
        !D &&
        (f = `${' '.repeat(l + 1)}${r.message}
${f}`),
      f
    );
  }
  ur.codeFrameColumns = xi;
});
var fr = {};
vt(fr, {
  __debug: () => lo,
  check: () => ao,
  doc: () => Dr,
  format: () => yu,
  formatWithCursor: () => gu,
  getSupportInfo: () => Do,
  util: () => cr,
  version: () => cu,
});
var Nu = (e, t, r, n) => {
    if (!(e && t == null))
      return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
  },
  ne = Nu;
function U() {}
U.prototype = {
  diff: function (t, r) {
    var n,
      u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = u.callback;
    typeof u == 'function' && ((i = u), (u = {}));
    var o = this;
    function s(E) {
      return (
        (E = o.postProcess(E, u)),
        i
          ? (setTimeout(function () {
              i(E);
            }, 0),
            !0)
          : E
      );
    }
    (t = this.castInput(t, u)),
      (r = this.castInput(r, u)),
      (t = this.removeEmpty(this.tokenize(t, u))),
      (r = this.removeEmpty(this.tokenize(r, u)));
    var a = r.length,
      D = t.length,
      l = 1,
      p = a + D;
    u.maxEditLength != null && (p = Math.min(p, u.maxEditLength));
    var f = (n = u.timeout) !== null && n !== void 0 ? n : 1 / 0,
      d = Date.now() + f,
      c = [{ oldPos: -1, lastComponent: void 0 }],
      F = this.extractCommon(c[0], r, t, 0, u);
    if (c[0].oldPos + 1 >= D && F + 1 >= a)
      return s(mr(o, c[0].lastComponent, r, t, o.useLongestToken));
    var m = -1 / 0,
      h = 1 / 0;
    function C() {
      for (var E = Math.max(m, -l); E <= Math.min(h, l); E += 2) {
        var g = void 0,
          j = c[E - 1],
          b = c[E + 1];
        j && (c[E - 1] = void 0);
        var X = !1;
        if (b) {
          var ae = b.oldPos - E;
          X = b && 0 <= ae && ae < a;
        }
        var $e = j && j.oldPos + 1 < D;
        if (!X && !$e) {
          c[E] = void 0;
          continue;
        }
        if (
          (!$e || (X && j.oldPos < b.oldPos)
            ? (g = o.addToPath(b, !0, !1, 0, u))
            : (g = o.addToPath(j, !1, !0, 1, u)),
          (F = o.extractCommon(g, r, t, E, u)),
          g.oldPos + 1 >= D && F + 1 >= a)
        )
          return s(mr(o, g.lastComponent, r, t, o.useLongestToken));
        (c[E] = g),
          g.oldPos + 1 >= D && (h = Math.min(h, E - 1)),
          F + 1 >= a && (m = Math.max(m, E + 1));
      }
      l++;
    }
    if (i)
      (function E() {
        setTimeout(function () {
          if (l > p || Date.now() > d) return i();
          C() || E();
        }, 0);
      })();
    else
      for (; l <= p && Date.now() <= d; ) {
        var v = C();
        if (v) return v;
      }
  },
  addToPath: function (t, r, n, u, i) {
    var o = t.lastComponent;
    return o && !i.oneChangePerToken && o.added === r && o.removed === n
      ? {
          oldPos: t.oldPos + u,
          lastComponent: {
            count: o.count + 1,
            added: r,
            removed: n,
            previousComponent: o.previousComponent,
          },
        }
      : {
          oldPos: t.oldPos + u,
          lastComponent: { count: 1, added: r, removed: n, previousComponent: o },
        };
  },
  extractCommon: function (t, r, n, u, i) {
    for (
      var o = r.length, s = n.length, a = t.oldPos, D = a - u, l = 0;
      D + 1 < o && a + 1 < s && this.equals(n[a + 1], r[D + 1], i);

    )
      D++,
        a++,
        l++,
        i.oneChangePerToken &&
          (t.lastComponent = {
            count: 1,
            previousComponent: t.lastComponent,
            added: !1,
            removed: !1,
          });
    return (
      l &&
        !i.oneChangePerToken &&
        (t.lastComponent = {
          count: l,
          previousComponent: t.lastComponent,
          added: !1,
          removed: !1,
        }),
      (t.oldPos = a),
      D
    );
  },
  equals: function (t, r, n) {
    return n.comparator
      ? n.comparator(t, r)
      : t === r || (n.ignoreCase && t.toLowerCase() === r.toLowerCase());
  },
  removeEmpty: function (t) {
    for (var r = [], n = 0; n < t.length; n++) t[n] && r.push(t[n]);
    return r;
  },
  castInput: function (t) {
    return t;
  },
  tokenize: function (t) {
    return Array.from(t);
  },
  join: function (t) {
    return t.join('');
  },
  postProcess: function (t) {
    return t;
  },
};
function mr(e, t, r, n, u) {
  for (var i = [], o; t; )
    i.push(t), (o = t.previousComponent), delete t.previousComponent, (t = o);
  i.reverse();
  for (var s = 0, a = i.length, D = 0, l = 0; s < a; s++) {
    var p = i[s];
    if (p.removed) (p.value = e.join(n.slice(l, l + p.count))), (l += p.count);
    else {
      if (!p.added && u) {
        var f = r.slice(D, D + p.count);
        (f = f.map(function (d, c) {
          var F = n[l + c];
          return F.length > d.length ? F : d;
        })),
          (p.value = e.join(f));
      } else p.value = e.join(r.slice(D, D + p.count));
      (D += p.count), p.added || (l += p.count);
    }
  }
  return i;
}
var mo = new U();
function hr(e, t) {
  var r;
  for (r = 0; r < e.length && r < t.length; r++) if (e[r] != t[r]) return e.slice(0, r);
  return e.slice(0, r);
}
function Er(e, t) {
  var r;
  if (!e || !t || e[e.length - 1] != t[t.length - 1]) return '';
  for (r = 0; r < e.length && r < t.length; r++)
    if (e[e.length - (r + 1)] != t[t.length - (r + 1)]) return e.slice(-r);
  return e.slice(-r);
}
function Bt(e, t, r) {
  if (e.slice(0, t.length) != t)
    throw Error(
      'string '
        .concat(JSON.stringify(e), " doesn't start with prefix ")
        .concat(JSON.stringify(t), '; this is a bug')
    );
  return r + e.slice(t.length);
}
function wt(e, t, r) {
  if (!t) return e + r;
  if (e.slice(-t.length) != t)
    throw Error(
      'string '
        .concat(JSON.stringify(e), " doesn't end with suffix ")
        .concat(JSON.stringify(t), '; this is a bug')
    );
  return e.slice(0, -t.length) + r;
}
function _e(e, t) {
  return Bt(e, t, '');
}
function Ve(e, t) {
  return wt(e, t, '');
}
function Cr(e, t) {
  return t.slice(0, Ou(e, t));
}
function Ou(e, t) {
  var r = 0;
  e.length > t.length && (r = e.length - t.length);
  var n = t.length;
  e.length < t.length && (n = e.length);
  var u = Array(n),
    i = 0;
  u[0] = 0;
  for (var o = 1; o < n; o++) {
    for (t[o] == t[i] ? (u[o] = u[i]) : (u[o] = i); i > 0 && t[o] != t[i]; ) i = u[i];
    t[o] == t[i] && i++;
  }
  i = 0;
  for (var s = r; s < e.length; s++) {
    for (; i > 0 && e[s] != t[i]; ) i = u[i];
    e[s] == t[i] && i++;
  }
  return i;
}
var Ue =
    'a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}',
  Su = new RegExp('['.concat(Ue, ']+|\\s+|[^').concat(Ue, ']'), 'ug'),
  Ge = new U();
Ge.equals = function (e, t, r) {
  return r.ignoreCase && ((e = e.toLowerCase()), (t = t.toLowerCase())), e.trim() === t.trim();
};
Ge.tokenize = function (e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r;
  if (t.intlSegmenter) {
    if (t.intlSegmenter.resolvedOptions().granularity != 'word')
      throw new Error('The segmenter passed must have a granularity of "word"');
    r = Array.from(t.intlSegmenter.segment(e), function (i) {
      return i.segment;
    });
  } else r = e.match(Su) || [];
  var n = [],
    u = null;
  return (
    r.forEach(function (i) {
      /\s/.test(i)
        ? u == null
          ? n.push(i)
          : n.push(n.pop() + i)
        : /\s/.test(u)
          ? n[n.length - 1] == u
            ? n.push(n.pop() + i)
            : n.push(u + i)
          : n.push(i),
        (u = i);
    }),
    n
  );
};
Ge.join = function (e) {
  return e
    .map(function (t, r) {
      return r == 0 ? t : t.replace(/^\s+/, '');
    })
    .join('');
};
Ge.postProcess = function (e, t) {
  if (!e || t.oneChangePerToken) return e;
  var r = null,
    n = null,
    u = null;
  return (
    e.forEach(function (i) {
      i.added
        ? (n = i)
        : i.removed
          ? (u = i)
          : ((n || u) && gr(r, u, n, i), (r = i), (n = null), (u = null));
    }),
    (n || u) && gr(r, u, n, null),
    e
  );
};
function gr(e, t, r, n) {
  if (t && r) {
    var u = t.value.match(/^\s*/)[0],
      i = t.value.match(/\s*$/)[0],
      o = r.value.match(/^\s*/)[0],
      s = r.value.match(/\s*$/)[0];
    if (e) {
      var a = hr(u, o);
      (e.value = wt(e.value, o, a)), (t.value = _e(t.value, a)), (r.value = _e(r.value, a));
    }
    if (n) {
      var D = Er(i, s);
      (n.value = Bt(n.value, s, D)), (t.value = Ve(t.value, D)), (r.value = Ve(r.value, D));
    }
  } else if (r)
    e && (r.value = r.value.replace(/^\s*/, '')), n && (n.value = n.value.replace(/^\s*/, ''));
  else if (e && n) {
    var l = n.value.match(/^\s*/)[0],
      p = t.value.match(/^\s*/)[0],
      f = t.value.match(/\s*$/)[0],
      d = hr(l, p);
    t.value = _e(t.value, d);
    var c = Er(_e(l, d), f);
    (t.value = Ve(t.value, c)),
      (n.value = Bt(n.value, l, c)),
      (e.value = wt(e.value, l, l.slice(0, l.length - c.length)));
  } else if (n) {
    var F = n.value.match(/^\s*/)[0],
      m = t.value.match(/\s*$/)[0],
      h = Cr(m, F);
    t.value = Ve(t.value, h);
  } else if (e) {
    var C = e.value.match(/\s*$/)[0],
      v = t.value.match(/^\s*/)[0],
      E = Cr(C, v);
    t.value = _e(t.value, E);
  }
}
var Tu = new U();
Tu.tokenize = function (e) {
  var t = new RegExp('(\\r?\\n)|['.concat(Ue, ']+|[^\\S\\n\\r]+|[^').concat(Ue, ']'), 'ug');
  return e.match(t) || [];
};
var bt = new U();
bt.tokenize = function (e, t) {
  t.stripTrailingCr &&
    (e = e.replace(
      /\r\n/g,
      `
`
    ));
  var r = [],
    n = e.split(/(\n|\r\n)/);
  n[n.length - 1] || n.pop();
  for (var u = 0; u < n.length; u++) {
    var i = n[u];
    u % 2 && !t.newlineIsToken ? (r[r.length - 1] += i) : r.push(i);
  }
  return r;
};
bt.equals = function (e, t, r) {
  return (
    r.ignoreWhitespace
      ? ((!r.newlineIsToken ||
          !e.includes(`
`)) &&
          (e = e.trim()),
        (!r.newlineIsToken ||
          !t.includes(`
`)) &&
          (t = t.trim()))
      : r.ignoreNewlineAtEof &&
        !r.newlineIsToken &&
        (e.endsWith(`
`) && (e = e.slice(0, -1)),
        t.endsWith(`
`) && (t = t.slice(0, -1))),
    U.prototype.equals.call(this, e, t, r)
  );
};
var ku = new U();
ku.tokenize = function (e) {
  return e.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var Lu = new U();
Lu.tokenize = function (e) {
  return e.split(/([{}:;,]|\s+)/);
};
function _t(e) {
  '@babel/helpers - typeof';
  return (
    (_t =
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
          }),
    _t(e)
  );
}
var xe = new U();
xe.useLongestToken = !0;
xe.tokenize = bt.tokenize;
xe.castInput = function (e, t) {
  var r = t.undefinedReplacement,
    n = t.stringifyReplacer,
    u =
      n === void 0
        ? function (i, o) {
            return typeof o > 'u' ? r : o;
          }
        : n;
  return typeof e == 'string' ? e : JSON.stringify(xt(e, null, null, u), u, '  ');
};
xe.equals = function (e, t, r) {
  return U.prototype.equals.call(
    xe,
    e.replace(/,([\r\n])/g, '$1'),
    t.replace(/,([\r\n])/g, '$1'),
    r
  );
};
function xt(e, t, r, n, u) {
  (t = t || []), (r = r || []), n && (e = n(u, e));
  var i;
  for (i = 0; i < t.length; i += 1) if (t[i] === e) return r[i];
  var o;
  if (Object.prototype.toString.call(e) === '[object Array]') {
    for (t.push(e), o = new Array(e.length), r.push(o), i = 0; i < e.length; i += 1)
      o[i] = xt(e[i], t, r, n, u);
    return t.pop(), r.pop(), o;
  }
  if ((e && e.toJSON && (e = e.toJSON()), _t(e) === 'object' && e !== null)) {
    t.push(e), (o = {}), r.push(o);
    var s = [],
      a;
    for (a in e) Object.prototype.hasOwnProperty.call(e, a) && s.push(a);
    for (s.sort(), i = 0; i < s.length; i += 1) (a = s[i]), (o[a] = xt(e[a], t, r, n, a));
    t.pop(), r.pop();
  } else o = e;
  return o;
}
var ze = new U();
ze.tokenize = function (e) {
  return e.slice();
};
ze.join = ze.removeEmpty = function (e) {
  return e;
};
function yr(e, t, r) {
  return ze.diff(e, t, r);
}
function Ar(e) {
  let t = e.indexOf('\r');
  return t !== -1
    ? e.charAt(t + 1) ===
      `
`
      ? 'crlf'
      : 'cr'
    : 'lf';
}
function be(e) {
  switch (e) {
    case 'cr':
      return '\r';
    case 'crlf':
      return `\r
`;
    default:
      return `
`;
  }
}
function Nt(e, t) {
  let r;
  switch (t) {
    case `
`:
      r = /\n/gu;
      break;
    case '\r':
      r = /\r/gu;
      break;
    case `\r
`:
      r = /\r\n/gu;
      break;
    default:
      throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
  }
  let n = e.match(r);
  return n ? n.length : 0;
}
function vr(e) {
  return ne(
    !1,
    e,
    /\r\n?/gu,
    `
`
  );
}
var $ = 'string',
  H = 'array',
  z = 'cursor',
  T = 'indent',
  k = 'align',
  L = 'trim',
  B = 'group',
  N = 'fill',
  w = 'if-break',
  P = 'indent-if-break',
  I = 'line-suffix',
  R = 'line-suffix-boundary',
  y = 'line',
  O = 'label',
  _ = 'break-parent',
  Ke = new Set([z, T, k, L, B, N, w, P, I, R, y, O, _]);
var Pu = (e, t, r) => {
    if (!(e && t == null))
      return Array.isArray(t) || typeof t == 'string' ? t[r < 0 ? t.length + r : r] : t.at(r);
  },
  A = Pu;
function Iu(e) {
  if (typeof e == 'string') return $;
  if (Array.isArray(e)) return H;
  if (!e) return;
  let { type: t } = e;
  if (Ke.has(t)) return t;
}
var M = Iu;
var Ru = e => new Intl.ListFormat('en-US', { type: 'disjunction' }).format(e);
function Yu(e) {
  let t = e === null ? 'null' : typeof e;
  if (t !== 'string' && t !== 'object')
    return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (M(e)) throw new Error('doc is valid.');
  let r = Object.prototype.toString.call(e);
  if (r !== '[object Object]') return `Unexpected doc '${r}'.`;
  let n = Ru([...Ke].map(u => `'${u}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var Ot = class extends Error {
    name = 'InvalidDocError';
    constructor(t) {
      super(Yu(t)), (this.doc = t);
    }
  },
  Q = Ot;
var Br = {};
function ju(e, t, r, n) {
  let u = [e];
  for (; u.length > 0; ) {
    let i = u.pop();
    if (i === Br) {
      r(u.pop());
      continue;
    }
    r && u.push(i, Br);
    let o = M(i);
    if (!o) throw new Q(i);
    if ((t == null ? void 0 : t(i)) !== !1)
      switch (o) {
        case H:
        case N: {
          let s = o === H ? i : i.parts;
          for (let a = s.length, D = a - 1; D >= 0; --D) u.push(s[D]);
          break;
        }
        case w:
          u.push(i.flatContents, i.breakContents);
          break;
        case B:
          if (n && i.expandedStates)
            for (let s = i.expandedStates.length, a = s - 1; a >= 0; --a)
              u.push(i.expandedStates[a]);
          else u.push(i.contents);
          break;
        case k:
        case T:
        case P:
        case O:
        case I:
          u.push(i.contents);
          break;
        case $:
        case z:
        case L:
        case R:
        case y:
        case _:
          break;
        default:
          throw new Q(i);
      }
  }
}
var Fe = ju;
function Oe(e, t) {
  if (typeof e == 'string') return t(e);
  let r = new Map();
  return n(e);
  function n(i) {
    if (r.has(i)) return r.get(i);
    let o = u(i);
    return r.set(i, o), o;
  }
  function u(i) {
    switch (M(i)) {
      case H:
        return t(i.map(n));
      case N:
        return t({ ...i, parts: i.parts.map(n) });
      case w:
        return t({ ...i, breakContents: n(i.breakContents), flatContents: n(i.flatContents) });
      case B: {
        let { expandedStates: o, contents: s } = i;
        return (
          o ? ((o = o.map(n)), (s = o[0])) : (s = n(s)), t({ ...i, contents: s, expandedStates: o })
        );
      }
      case k:
      case T:
      case P:
      case O:
      case I:
        return t({ ...i, contents: n(i.contents) });
      case $:
      case z:
      case L:
      case R:
      case y:
      case _:
        return t(i);
      default:
        throw new Q(i);
    }
  }
}
function Je(e, t, r) {
  let n = r,
    u = !1;
  function i(o) {
    if (u) return !1;
    let s = t(o);
    s !== void 0 && ((u = !0), (n = s));
  }
  return Fe(e, i), n;
}
function Hu(e) {
  if ((e.type === B && e.break) || (e.type === y && e.hard) || e.type === _) return !0;
}
function xr(e) {
  return Je(e, Hu, !1);
}
function wr(e) {
  if (e.length > 0) {
    let t = A(!1, e, -1);
    !t.expandedStates && !t.break && (t.break = 'propagated');
  }
  return null;
}
function br(e) {
  let t = new Set(),
    r = [];
  function n(i) {
    if ((i.type === _ && wr(r), i.type === B)) {
      if ((r.push(i), t.has(i))) return !1;
      t.add(i);
    }
  }
  function u(i) {
    i.type === B && r.pop().break && wr(r);
  }
  Fe(e, n, u, !0);
}
function Wu(e) {
  return e.type === y && !e.hard ? (e.soft ? '' : ' ') : e.type === w ? e.flatContents : e;
}
function Nr(e) {
  return Oe(e, Wu);
}
function _r(e) {
  for (e = [...e]; e.length >= 2 && A(!1, e, -2).type === y && A(!1, e, -1).type === _; )
    e.length -= 2;
  if (e.length > 0) {
    let t = Ne(A(!1, e, -1));
    e[e.length - 1] = t;
  }
  return e;
}
function Ne(e) {
  switch (M(e)) {
    case T:
    case P:
    case B:
    case I:
    case O: {
      let t = Ne(e.contents);
      return { ...e, contents: t };
    }
    case w:
      return { ...e, breakContents: Ne(e.breakContents), flatContents: Ne(e.flatContents) };
    case N:
      return { ...e, parts: _r(e.parts) };
    case H:
      return _r(e);
    case $:
      return e.replace(/[\n\r]*$/u, '');
    case k:
    case z:
    case L:
    case R:
    case y:
    case _:
      break;
    default:
      throw new Q(e);
  }
  return e;
}
function qe(e) {
  return Ne(Mu(e));
}
function $u(e) {
  switch (M(e)) {
    case N:
      if (e.parts.every(t => t === '')) return '';
      break;
    case B:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return '';
      if (
        e.contents.type === B &&
        e.contents.id === e.id &&
        e.contents.break === e.break &&
        e.contents.expandedStates === e.expandedStates
      )
        return e.contents;
      break;
    case k:
    case T:
    case P:
    case I:
      if (!e.contents) return '';
      break;
    case w:
      if (!e.flatContents && !e.breakContents) return '';
      break;
    case H: {
      let t = [];
      for (let r of e) {
        if (!r) continue;
        let [n, ...u] = Array.isArray(r) ? r : [r];
        typeof n == 'string' && typeof A(!1, t, -1) == 'string'
          ? (t[t.length - 1] += n)
          : t.push(n),
          t.push(...u);
      }
      return t.length === 0 ? '' : t.length === 1 ? t[0] : t;
    }
    case $:
    case z:
    case L:
    case R:
    case y:
    case O:
    case _:
      break;
    default:
      throw new Q(e);
  }
  return e;
}
function Mu(e) {
  return Oe(e, t => $u(t));
}
function Or(e, t = Xe) {
  return Oe(e, r =>
    typeof r == 'string'
      ? Se(
          t,
          r.split(`
`)
        )
      : r
  );
}
function Vu(e) {
  if (e.type === y) return !0;
}
function Sr(e) {
  return Je(e, Vu, !1);
}
function me(e, t) {
  return e.type === O ? { ...e, contents: t(e.contents) } : t(e);
}
var St = () => {},
  G = St,
  Tt = St,
  Tr = St;
function le(e) {
  return G(e), { type: T, contents: e };
}
function De(e, t) {
  return G(t), { type: k, contents: t, n: e };
}
function kt(e, t = {}) {
  return (
    G(e),
    Tt(t.expandedStates, !0),
    { type: B, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates }
  );
}
function kr(e) {
  return De(Number.NEGATIVE_INFINITY, e);
}
function Lr(e) {
  return De({ type: 'root' }, e);
}
function Pr(e) {
  return De(-1, e);
}
function Ir(e, t) {
  return kt(e[0], { ...t, expandedStates: e });
}
function Rr(e) {
  return Tr(e), { type: N, parts: e };
}
function Yr(e, t = '', r = {}) {
  return G(e), t !== '' && G(t), { type: w, breakContents: e, flatContents: t, groupId: r.groupId };
}
function jr(e, t) {
  return G(e), { type: P, contents: e, groupId: t.groupId, negate: t.negate };
}
function Te(e) {
  return G(e), { type: I, contents: e };
}
var Hr = { type: R },
  he = { type: _ },
  Wr = { type: L },
  ke = { type: y, hard: !0 },
  Lt = { type: y, hard: !0, literal: !0 },
  Qe = { type: y },
  $r = { type: y, soft: !0 },
  K = [ke, he],
  Xe = [Lt, he],
  Z = { type: z };
function Se(e, t) {
  G(e), Tt(t);
  let r = [];
  for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
  return r;
}
function Ze(e, t, r) {
  G(e);
  let n = e;
  if (t > 0) {
    for (let u = 0; u < Math.floor(t / r); ++u) n = le(n);
    (n = De(t % r, n)), (n = De(Number.NEGATIVE_INFINITY, n));
  }
  return n;
}
function Mr(e, t) {
  return G(t), e ? { type: O, label: e, contents: t } : t;
}
function ee(e) {
  var t;
  if (!e) return '';
  if (Array.isArray(e)) {
    let r = [];
    for (let n of e)
      if (Array.isArray(n)) r.push(...ee(n));
      else {
        let u = ee(n);
        u !== '' && r.push(u);
      }
    return r;
  }
  return e.type === w
    ? { ...e, breakContents: ee(e.breakContents), flatContents: ee(e.flatContents) }
    : e.type === B
      ? {
          ...e,
          contents: ee(e.contents),
          expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(ee),
        }
      : e.type === N
        ? { type: 'fill', parts: e.parts.map(ee) }
        : e.contents
          ? { ...e, contents: ee(e.contents) }
          : e;
}
function Vr(e) {
  let t = Object.create(null),
    r = new Set();
  return n(ee(e));
  function n(i, o, s) {
    var a, D;
    if (typeof i == 'string') return JSON.stringify(i);
    if (Array.isArray(i)) {
      let l = i.map(n).filter(Boolean);
      return l.length === 1 ? l[0] : `[${l.join(', ')}]`;
    }
    if (i.type === y) {
      let l = ((a = s == null ? void 0 : s[o + 1]) == null ? void 0 : a.type) === _;
      return i.literal
        ? l
          ? 'literalline'
          : 'literallineWithoutBreakParent'
        : i.hard
          ? l
            ? 'hardline'
            : 'hardlineWithoutBreakParent'
          : i.soft
            ? 'softline'
            : 'line';
    }
    if (i.type === _)
      return ((D = s == null ? void 0 : s[o - 1]) == null ? void 0 : D.type) === y && s[o - 1].hard
        ? void 0
        : 'breakParent';
    if (i.type === L) return 'trim';
    if (i.type === T) return 'indent(' + n(i.contents) + ')';
    if (i.type === k)
      return i.n === Number.NEGATIVE_INFINITY
        ? 'dedentToRoot(' + n(i.contents) + ')'
        : i.n < 0
          ? 'dedent(' + n(i.contents) + ')'
          : i.n.type === 'root'
            ? 'markAsRoot(' + n(i.contents) + ')'
            : 'align(' + JSON.stringify(i.n) + ', ' + n(i.contents) + ')';
    if (i.type === w)
      return (
        'ifBreak(' +
        n(i.breakContents) +
        (i.flatContents ? ', ' + n(i.flatContents) : '') +
        (i.groupId ? (i.flatContents ? '' : ', ""') + `, { groupId: ${u(i.groupId)} }` : '') +
        ')'
      );
    if (i.type === P) {
      let l = [];
      i.negate && l.push('negate: true'), i.groupId && l.push(`groupId: ${u(i.groupId)}`);
      let p = l.length > 0 ? `, { ${l.join(', ')} }` : '';
      return `indentIfBreak(${n(i.contents)}${p})`;
    }
    if (i.type === B) {
      let l = [];
      i.break && i.break !== 'propagated' && l.push('shouldBreak: true'),
        i.id && l.push(`id: ${u(i.id)}`);
      let p = l.length > 0 ? `, { ${l.join(', ')} }` : '';
      return i.expandedStates
        ? `conditionalGroup([${i.expandedStates.map(f => n(f)).join(',')}]${p})`
        : `group(${n(i.contents)}${p})`;
    }
    if (i.type === N) return `fill([${i.parts.map(l => n(l)).join(', ')}])`;
    if (i.type === I) return 'lineSuffix(' + n(i.contents) + ')';
    if (i.type === R) return 'lineSuffixBoundary';
    if (i.type === O) return `label(${JSON.stringify(i.label)}, ${n(i.contents)})`;
    throw new Error('Unknown doc type ' + i.type);
  }
  function u(i) {
    if (typeof i != 'symbol') return JSON.stringify(String(i));
    if (i in t) return t[i];
    let o = i.description || 'symbol';
    for (let s = 0; ; s++) {
      let a = o + (s > 0 ? ` #${s}` : '');
      if (!r.has(a)) return r.add(a), (t[i] = `Symbol.for(${JSON.stringify(a)})`);
    }
  }
}
var Ur = () =>
  /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function zr(e) {
  return e === 12288 || (e >= 65281 && e <= 65376) || (e >= 65504 && e <= 65510);
}
function Gr(e) {
  return (
    (e >= 4352 && e <= 4447) ||
    e === 8986 ||
    e === 8987 ||
    e === 9001 ||
    e === 9002 ||
    (e >= 9193 && e <= 9196) ||
    e === 9200 ||
    e === 9203 ||
    e === 9725 ||
    e === 9726 ||
    e === 9748 ||
    e === 9749 ||
    (e >= 9776 && e <= 9783) ||
    (e >= 9800 && e <= 9811) ||
    e === 9855 ||
    (e >= 9866 && e <= 9871) ||
    e === 9875 ||
    e === 9889 ||
    e === 9898 ||
    e === 9899 ||
    e === 9917 ||
    e === 9918 ||
    e === 9924 ||
    e === 9925 ||
    e === 9934 ||
    e === 9940 ||
    e === 9962 ||
    e === 9970 ||
    e === 9971 ||
    e === 9973 ||
    e === 9978 ||
    e === 9981 ||
    e === 9989 ||
    e === 9994 ||
    e === 9995 ||
    e === 10024 ||
    e === 10060 ||
    e === 10062 ||
    (e >= 10067 && e <= 10069) ||
    e === 10071 ||
    (e >= 10133 && e <= 10135) ||
    e === 10160 ||
    e === 10175 ||
    e === 11035 ||
    e === 11036 ||
    e === 11088 ||
    e === 11093 ||
    (e >= 11904 && e <= 11929) ||
    (e >= 11931 && e <= 12019) ||
    (e >= 12032 && e <= 12245) ||
    (e >= 12272 && e <= 12287) ||
    (e >= 12289 && e <= 12350) ||
    (e >= 12353 && e <= 12438) ||
    (e >= 12441 && e <= 12543) ||
    (e >= 12549 && e <= 12591) ||
    (e >= 12593 && e <= 12686) ||
    (e >= 12688 && e <= 12773) ||
    (e >= 12783 && e <= 12830) ||
    (e >= 12832 && e <= 12871) ||
    (e >= 12880 && e <= 42124) ||
    (e >= 42128 && e <= 42182) ||
    (e >= 43360 && e <= 43388) ||
    (e >= 44032 && e <= 55203) ||
    (e >= 63744 && e <= 64255) ||
    (e >= 65040 && e <= 65049) ||
    (e >= 65072 && e <= 65106) ||
    (e >= 65108 && e <= 65126) ||
    (e >= 65128 && e <= 65131) ||
    (e >= 94176 && e <= 94180) ||
    e === 94192 ||
    e === 94193 ||
    (e >= 94208 && e <= 100343) ||
    (e >= 100352 && e <= 101589) ||
    (e >= 101631 && e <= 101640) ||
    (e >= 110576 && e <= 110579) ||
    (e >= 110581 && e <= 110587) ||
    e === 110589 ||
    e === 110590 ||
    (e >= 110592 && e <= 110882) ||
    e === 110898 ||
    (e >= 110928 && e <= 110930) ||
    e === 110933 ||
    (e >= 110948 && e <= 110951) ||
    (e >= 110960 && e <= 111355) ||
    (e >= 119552 && e <= 119638) ||
    (e >= 119648 && e <= 119670) ||
    e === 126980 ||
    e === 127183 ||
    e === 127374 ||
    (e >= 127377 && e <= 127386) ||
    (e >= 127488 && e <= 127490) ||
    (e >= 127504 && e <= 127547) ||
    (e >= 127552 && e <= 127560) ||
    e === 127568 ||
    e === 127569 ||
    (e >= 127584 && e <= 127589) ||
    (e >= 127744 && e <= 127776) ||
    (e >= 127789 && e <= 127797) ||
    (e >= 127799 && e <= 127868) ||
    (e >= 127870 && e <= 127891) ||
    (e >= 127904 && e <= 127946) ||
    (e >= 127951 && e <= 127955) ||
    (e >= 127968 && e <= 127984) ||
    e === 127988 ||
    (e >= 127992 && e <= 128062) ||
    e === 128064 ||
    (e >= 128066 && e <= 128252) ||
    (e >= 128255 && e <= 128317) ||
    (e >= 128331 && e <= 128334) ||
    (e >= 128336 && e <= 128359) ||
    e === 128378 ||
    e === 128405 ||
    e === 128406 ||
    e === 128420 ||
    (e >= 128507 && e <= 128591) ||
    (e >= 128640 && e <= 128709) ||
    e === 128716 ||
    (e >= 128720 && e <= 128722) ||
    (e >= 128725 && e <= 128727) ||
    (e >= 128732 && e <= 128735) ||
    e === 128747 ||
    e === 128748 ||
    (e >= 128756 && e <= 128764) ||
    (e >= 128992 && e <= 129003) ||
    e === 129008 ||
    (e >= 129292 && e <= 129338) ||
    (e >= 129340 && e <= 129349) ||
    (e >= 129351 && e <= 129535) ||
    (e >= 129648 && e <= 129660) ||
    (e >= 129664 && e <= 129673) ||
    (e >= 129679 && e <= 129734) ||
    (e >= 129742 && e <= 129756) ||
    (e >= 129759 && e <= 129769) ||
    (e >= 129776 && e <= 129784) ||
    (e >= 131072 && e <= 196605) ||
    (e >= 196608 && e <= 262141)
  );
}
var Kr = e => !(zr(e) || Gr(e));
var Uu = /[^\x20-\x7F]/u;
function zu(e) {
  if (!e) return 0;
  if (!Uu.test(e)) return e.length;
  e = e.replace(Ur(), '  ');
  let t = 0;
  for (let r of e) {
    let n = r.codePointAt(0);
    n <= 31 || (n >= 127 && n <= 159) || (n >= 768 && n <= 879) || (t += Kr(n) ? 1 : 2);
  }
  return t;
}
var Le = zu;
var Y = Symbol('MODE_BREAK'),
  J = Symbol('MODE_FLAT'),
  Ee = Symbol('cursor'),
  Pt = Symbol('DOC_FILL_PRINTED_LENGTH');
function Jr() {
  return { value: '', length: 0, queue: [] };
}
function Gu(e, t) {
  return It(e, { type: 'indent' }, t);
}
function Ku(e, t, r) {
  return t === Number.NEGATIVE_INFINITY
    ? e.root || Jr()
    : t < 0
      ? It(e, { type: 'dedent' }, r)
      : t
        ? t.type === 'root'
          ? { ...e, root: e }
          : It(e, { type: typeof t == 'string' ? 'stringAlign' : 'numberAlign', n: t }, r)
        : e;
}
function It(e, t, r) {
  let n = t.type === 'dedent' ? e.queue.slice(0, -1) : [...e.queue, t],
    u = '',
    i = 0,
    o = 0,
    s = 0;
  for (let c of n)
    switch (c.type) {
      case 'indent':
        l(), r.useTabs ? a(1) : D(r.tabWidth);
        break;
      case 'stringAlign':
        l(), (u += c.n), (i += c.n.length);
        break;
      case 'numberAlign':
        (o += 1), (s += c.n);
        break;
      default:
        throw new Error(`Unexpected type '${c.type}'`);
    }
  return f(), { ...e, value: u, length: i, queue: n };
  function a(c) {
    (u += '	'.repeat(c)), (i += r.tabWidth * c);
  }
  function D(c) {
    (u += ' '.repeat(c)), (i += c);
  }
  function l() {
    r.useTabs ? p() : f();
  }
  function p() {
    o > 0 && a(o), d();
  }
  function f() {
    s > 0 && D(s), d();
  }
  function d() {
    (o = 0), (s = 0);
  }
}
function Rt(e) {
  let t = 0,
    r = 0,
    n = e.length;
  e: for (; n--; ) {
    let u = e[n];
    if (u === Ee) {
      r++;
      continue;
    }
    for (let i = u.length - 1; i >= 0; i--) {
      let o = u[i];
      if (o === ' ' || o === '	') t++;
      else {
        e[n] = u.slice(0, i + 1);
        break e;
      }
    }
  }
  if (t > 0 || r > 0) for (e.length = n + 1; r-- > 0; ) e.push(Ee);
  return t;
}
function et(e, t, r, n, u, i) {
  if (r === Number.POSITIVE_INFINITY) return !0;
  let o = t.length,
    s = [e],
    a = [];
  for (; r >= 0; ) {
    if (s.length === 0) {
      if (o === 0) return !0;
      s.push(t[--o]);
      continue;
    }
    let { mode: D, doc: l } = s.pop(),
      p = M(l);
    switch (p) {
      case $:
        a.push(l), (r -= Le(l));
        break;
      case H:
      case N: {
        let f = p === H ? l : l.parts,
          d = l[Pt] ?? 0;
        for (let c = f.length - 1; c >= d; c--) s.push({ mode: D, doc: f[c] });
        break;
      }
      case T:
      case k:
      case P:
      case O:
        s.push({ mode: D, doc: l.contents });
        break;
      case L:
        r += Rt(a);
        break;
      case B: {
        if (i && l.break) return !1;
        let f = l.break ? Y : D,
          d = l.expandedStates && f === Y ? A(!1, l.expandedStates, -1) : l.contents;
        s.push({ mode: f, doc: d });
        break;
      }
      case w: {
        let d = (l.groupId ? u[l.groupId] || J : D) === Y ? l.breakContents : l.flatContents;
        d && s.push({ mode: D, doc: d });
        break;
      }
      case y:
        if (D === Y || l.hard) return !0;
        l.soft || (a.push(' '), r--);
        break;
      case I:
        n = !0;
        break;
      case R:
        if (n) return !1;
        break;
    }
  }
  return !1;
}
function Ce(e, t) {
  let r = {},
    n = t.printWidth,
    u = be(t.endOfLine),
    i = 0,
    o = [{ ind: Jr(), mode: Y, doc: e }],
    s = [],
    a = !1,
    D = [],
    l = 0;
  for (br(e); o.length > 0; ) {
    let { ind: f, mode: d, doc: c } = o.pop();
    switch (M(c)) {
      case $: {
        let F =
          u !==
          `
`
            ? ne(
                !1,
                c,
                `
`,
                u
              )
            : c;
        s.push(F), o.length > 0 && (i += Le(F));
        break;
      }
      case H:
        for (let F = c.length - 1; F >= 0; F--) o.push({ ind: f, mode: d, doc: c[F] });
        break;
      case z:
        if (l >= 2) throw new Error("There are too many 'cursor' in doc.");
        s.push(Ee), l++;
        break;
      case T:
        o.push({ ind: Gu(f, t), mode: d, doc: c.contents });
        break;
      case k:
        o.push({ ind: Ku(f, c.n, t), mode: d, doc: c.contents });
        break;
      case L:
        i -= Rt(s);
        break;
      case B:
        switch (d) {
          case J:
            if (!a) {
              o.push({ ind: f, mode: c.break ? Y : J, doc: c.contents });
              break;
            }
          case Y: {
            a = !1;
            let F = { ind: f, mode: J, doc: c.contents },
              m = n - i,
              h = D.length > 0;
            if (!c.break && et(F, o, m, h, r)) o.push(F);
            else if (c.expandedStates) {
              let C = A(!1, c.expandedStates, -1);
              if (c.break) {
                o.push({ ind: f, mode: Y, doc: C });
                break;
              } else
                for (let v = 1; v < c.expandedStates.length + 1; v++)
                  if (v >= c.expandedStates.length) {
                    o.push({ ind: f, mode: Y, doc: C });
                    break;
                  } else {
                    let E = c.expandedStates[v],
                      g = { ind: f, mode: J, doc: E };
                    if (et(g, o, m, h, r)) {
                      o.push(g);
                      break;
                    }
                  }
            } else o.push({ ind: f, mode: Y, doc: c.contents });
            break;
          }
        }
        c.id && (r[c.id] = A(!1, o, -1).mode);
        break;
      case N: {
        let F = n - i,
          m = c[Pt] ?? 0,
          { parts: h } = c,
          C = h.length - m;
        if (C === 0) break;
        let v = h[m + 0],
          E = h[m + 1],
          g = { ind: f, mode: J, doc: v },
          j = { ind: f, mode: Y, doc: v },
          b = et(g, [], F, D.length > 0, r, !0);
        if (C === 1) {
          b ? o.push(g) : o.push(j);
          break;
        }
        let X = { ind: f, mode: J, doc: E },
          ae = { ind: f, mode: Y, doc: E };
        if (C === 2) {
          b ? o.push(X, g) : o.push(ae, j);
          break;
        }
        let $e = h[m + 2],
          yt = { ind: f, mode: d, doc: { ...c, [Pt]: m + 2 } };
        et({ ind: f, mode: J, doc: [v, E, $e] }, [], F, D.length > 0, r, !0)
          ? o.push(yt, X, g)
          : b
            ? o.push(yt, ae, g)
            : o.push(yt, ae, j);
        break;
      }
      case w:
      case P: {
        let F = c.groupId ? r[c.groupId] : d;
        if (F === Y) {
          let m = c.type === w ? c.breakContents : c.negate ? c.contents : le(c.contents);
          m && o.push({ ind: f, mode: d, doc: m });
        }
        if (F === J) {
          let m = c.type === w ? c.flatContents : c.negate ? le(c.contents) : c.contents;
          m && o.push({ ind: f, mode: d, doc: m });
        }
        break;
      }
      case I:
        D.push({ ind: f, mode: d, doc: c.contents });
        break;
      case R:
        D.length > 0 && o.push({ ind: f, mode: d, doc: ke });
        break;
      case y:
        switch (d) {
          case J:
            if (c.hard) a = !0;
            else {
              c.soft || (s.push(' '), (i += 1));
              break;
            }
          case Y:
            if (D.length > 0) {
              o.push({ ind: f, mode: d, doc: c }, ...D.reverse()), (D.length = 0);
              break;
            }
            c.literal
              ? f.root
                ? (s.push(u, f.root.value), (i = f.root.length))
                : (s.push(u), (i = 0))
              : ((i -= Rt(s)), s.push(u + f.value), (i = f.length));
            break;
        }
        break;
      case O:
        o.push({ ind: f, mode: d, doc: c.contents });
        break;
      case _:
        break;
      default:
        throw new Q(c);
    }
    o.length === 0 && D.length > 0 && (o.push(...D.reverse()), (D.length = 0));
  }
  let p = s.indexOf(Ee);
  if (p !== -1) {
    let f = s.indexOf(Ee, p + 1);
    if (f === -1) return { formatted: s.filter(m => m !== Ee).join('') };
    let d = s.slice(0, p).join(''),
      c = s.slice(p + 1, f).join(''),
      F = s.slice(f + 1).join('');
    return { formatted: d + c + F, cursorNodeStart: d.length, cursorNodeText: c };
  }
  return { formatted: s.join('') };
}
function Ju(e, t, r = 0) {
  let n = 0;
  for (let u = r; u < e.length; ++u) e[u] === '	' ? (n = n + t - (n % t)) : n++;
  return n;
}
var ge = Ju;
var te,
  jt,
  tt,
  Yt = class {
    constructor(t) {
      Fr(this, te);
      this.stack = [t];
    }
    get key() {
      let { stack: t, siblings: r } = this;
      return A(!1, t, r === null ? -2 : -4) ?? null;
    }
    get index() {
      return this.siblings === null ? null : A(!1, this.stack, -2);
    }
    get node() {
      return A(!1, this.stack, -1);
    }
    get parent() {
      return this.getNode(1);
    }
    get grandparent() {
      return this.getNode(2);
    }
    get isInArray() {
      return this.siblings !== null;
    }
    get siblings() {
      let { stack: t } = this,
        r = A(!1, t, -3);
      return Array.isArray(r) ? r : null;
    }
    get next() {
      let { siblings: t } = this;
      return t === null ? null : t[this.index + 1];
    }
    get previous() {
      let { siblings: t } = this;
      return t === null ? null : t[this.index - 1];
    }
    get isFirst() {
      return this.index === 0;
    }
    get isLast() {
      let { siblings: t, index: r } = this;
      return t !== null && r === t.length - 1;
    }
    get isRoot() {
      return this.stack.length === 1;
    }
    get root() {
      return this.stack[0];
    }
    get ancestors() {
      return [...pe(this, te, tt).call(this)];
    }
    getName() {
      let { stack: t } = this,
        { length: r } = t;
      return r > 1 ? A(!1, t, -2) : null;
    }
    getValue() {
      return A(!1, this.stack, -1);
    }
    getNode(t = 0) {
      let r = pe(this, te, jt).call(this, t);
      return r === -1 ? null : this.stack[r];
    }
    getParentNode(t = 0) {
      return this.getNode(t + 1);
    }
    call(t, ...r) {
      let { stack: n } = this,
        { length: u } = n,
        i = A(!1, n, -1);
      for (let o of r) (i = i[o]), n.push(o, i);
      try {
        return t(this);
      } finally {
        n.length = u;
      }
    }
    callParent(t, r = 0) {
      let n = pe(this, te, jt).call(this, r + 1),
        u = this.stack.splice(n + 1);
      try {
        return t(this);
      } finally {
        this.stack.push(...u);
      }
    }
    each(t, ...r) {
      let { stack: n } = this,
        { length: u } = n,
        i = A(!1, n, -1);
      for (let o of r) (i = i[o]), n.push(o, i);
      try {
        for (let o = 0; o < i.length; ++o) n.push(o, i[o]), t(this, o, i), (n.length -= 2);
      } finally {
        n.length = u;
      }
    }
    map(t, ...r) {
      let n = [];
      return (
        this.each(
          (u, i, o) => {
            n[i] = t(u, i, o);
          },
          ...r
        ),
        n
      );
    }
    match(...t) {
      let r = this.stack.length - 1,
        n = null,
        u = this.stack[r--];
      for (let i of t) {
        if (u === void 0) return !1;
        let o = null;
        if (
          (typeof n == 'number' && ((o = n), (n = this.stack[r--]), (u = this.stack[r--])),
          i && !i(u, n, o))
        )
          return !1;
        (n = this.stack[r--]), (u = this.stack[r--]);
      }
      return !0;
    }
    findAncestor(t) {
      for (let r of pe(this, te, tt).call(this)) if (t(r)) return r;
    }
    hasAncestor(t) {
      for (let r of pe(this, te, tt).call(this)) if (t(r)) return !0;
      return !1;
    }
  };
(te = new WeakSet()),
  (jt = function (t) {
    let { stack: r } = this;
    for (let n = r.length - 1; n >= 0; n -= 2) if (!Array.isArray(r[n]) && --t < 0) return n;
    return -1;
  }),
  (tt = function* () {
    let { stack: t } = this;
    for (let r = t.length - 3; r >= 0; r -= 2) {
      let n = t[r];
      Array.isArray(n) || (yield n);
    }
  });
var qr = Yt;
var Xr = new Proxy(() => {}, { get: () => Xr }),
  Pe = Xr;
function qu(e) {
  return e !== null && typeof e == 'object';
}
var Qr = qu;
function* ye(e, t) {
  let { getVisitorKeys: r, filter: n = () => !0 } = t,
    u = i => Qr(i) && n(i);
  for (let i of r(e)) {
    let o = e[i];
    if (Array.isArray(o)) for (let s of o) u(s) && (yield s);
    else u(o) && (yield o);
  }
}
function* Zr(e, t) {
  let r = [e];
  for (let n = 0; n < r.length; n++) {
    let u = r[n];
    for (let i of ye(u, t)) yield i, r.push(i);
  }
}
function en(e, t) {
  return ye(e, t).next().done;
}
function Ae(e) {
  return (t, r, n) => {
    let u = !!(n != null && n.backwards);
    if (r === !1) return !1;
    let { length: i } = t,
      o = r;
    for (; o >= 0 && o < i; ) {
      let s = t.charAt(o);
      if (e instanceof RegExp) {
        if (!e.test(s)) return o;
      } else if (!e.includes(s)) return o;
      u ? o-- : o++;
    }
    return o === -1 || o === i ? o : !1;
  };
}
var tn = Ae(/\s/u),
  S = Ae(' 	'),
  rt = Ae(',; 	'),
  nt = Ae(/[^\n\r]/u);
function Xu(e, t, r) {
  let n = !!(r != null && r.backwards);
  if (t === !1) return !1;
  let u = e.charAt(t);
  if (n) {
    if (
      e.charAt(t - 1) === '\r' &&
      u ===
        `
`
    )
      return t - 2;
    if (
      u ===
        `
` ||
      u === '\r' ||
      u === '\u2028' ||
      u === '\u2029'
    )
      return t - 1;
  } else {
    if (
      u === '\r' &&
      e.charAt(t + 1) ===
        `
`
    )
      return t + 2;
    if (
      u ===
        `
` ||
      u === '\r' ||
      u === '\u2028' ||
      u === '\u2029'
    )
      return t + 1;
  }
  return t;
}
var W = Xu;
function Qu(e, t, r = {}) {
  let n = S(e, r.backwards ? t - 1 : t, r),
    u = W(e, n, r);
  return n !== u;
}
var V = Qu;
function Zu(e) {
  return Array.isArray(e) && e.length > 0;
}
var Ht = Zu;
var rn = new Set([
    'tokens',
    'comments',
    'parent',
    'enclosingNode',
    'precedingNode',
    'followingNode',
  ]),
  ei = e => Object.keys(e).filter(t => !rn.has(t));
function ti(e) {
  return e ? t => e(t, rn) : ei;
}
var q = ti;
function ri(e) {
  let t = e.type || e.kind || '(unknown type)',
    r = String(
      e.name ||
        (e.id && (typeof e.id == 'object' ? e.id.name : e.id)) ||
        (e.key && (typeof e.key == 'object' ? e.key.name : e.key)) ||
        (e.value && (typeof e.value == 'object' ? '' : String(e.value))) ||
        e.operator ||
        ''
    );
  return r.length > 20 && (r = r.slice(0, 19) + '\u2026'), t + (r ? ' ' + r : '');
}
function Wt(e, t) {
  (e.comments ?? (e.comments = [])).push(t), (t.printed = !1), (t.nodeDescription = ri(e));
}
function ue(e, t) {
  (t.leading = !0), (t.trailing = !1), Wt(e, t);
}
function re(e, t, r) {
  (t.leading = !1), (t.trailing = !1), r && (t.marker = r), Wt(e, t);
}
function ie(e, t) {
  (t.leading = !1), (t.trailing = !0), Wt(e, t);
}
var $t = new WeakMap();
function ut(e, t) {
  if ($t.has(e)) return $t.get(e);
  let {
    printer: { getCommentChildNodes: r, canAttachComment: n, getVisitorKeys: u },
    locStart: i,
    locEnd: o,
  } = t;
  if (!n) return [];
  let s = ((r == null ? void 0 : r(e, t)) ?? [...ye(e, { getVisitorKeys: q(u) })]).flatMap(a =>
    n(a) ? [a] : ut(a, t)
  );
  return s.sort((a, D) => i(a) - i(D) || o(a) - o(D)), $t.set(e, s), s;
}
function un(e, t, r, n) {
  let { locStart: u, locEnd: i } = r,
    o = u(t),
    s = i(t),
    a = ut(e, r),
    D,
    l,
    p = 0,
    f = a.length;
  for (; p < f; ) {
    let d = (p + f) >> 1,
      c = a[d],
      F = u(c),
      m = i(c);
    if (F <= o && s <= m) return un(c, t, r, c);
    if (m <= o) {
      (D = c), (p = d + 1);
      continue;
    }
    if (s <= F) {
      (l = c), (f = d);
      continue;
    }
    throw new Error('Comment location overlaps with node location');
  }
  if ((n == null ? void 0 : n.type) === 'TemplateLiteral') {
    let { quasis: d } = n,
      c = Vt(d, t, r);
    D && Vt(d, D, r) !== c && (D = null), l && Vt(d, l, r) !== c && (l = null);
  }
  return { enclosingNode: n, precedingNode: D, followingNode: l };
}
var Mt = () => !1;
function on(e, t) {
  let { comments: r } = e;
  if ((delete e.comments, !Ht(r) || !t.printer.canAttachComment)) return;
  let n = [],
    {
      locStart: u,
      locEnd: i,
      printer: { experimentalFeatures: { avoidAstMutation: o = !1 } = {}, handleComments: s = {} },
      originalText: a,
    } = t,
    { ownLine: D = Mt, endOfLine: l = Mt, remaining: p = Mt } = s,
    f = r.map((d, c) => ({
      ...un(e, d, t),
      comment: d,
      text: a,
      options: t,
      ast: e,
      isLastComment: r.length - 1 === c,
    }));
  for (let [d, c] of f.entries()) {
    let {
      comment: F,
      precedingNode: m,
      enclosingNode: h,
      followingNode: C,
      text: v,
      options: E,
      ast: g,
      isLastComment: j,
    } = c;
    if (
      E.parser === 'json' ||
      E.parser === 'json5' ||
      E.parser === 'jsonc' ||
      E.parser === '__js_expression' ||
      E.parser === '__ts_expression' ||
      E.parser === '__vue_expression' ||
      E.parser === '__vue_ts_expression'
    ) {
      if (u(F) - u(g) <= 0) {
        ue(g, F);
        continue;
      }
      if (i(F) - i(g) >= 0) {
        ie(g, F);
        continue;
      }
    }
    let b;
    if (
      (o
        ? (b = [c])
        : ((F.enclosingNode = h),
          (F.precedingNode = m),
          (F.followingNode = C),
          (b = [F, v, E, g, j])),
      ni(v, E, f, d))
    )
      (F.placement = 'ownLine'), D(...b) || (C ? ue(C, F) : m ? ie(m, F) : h ? re(h, F) : re(g, F));
    else if (ui(v, E, f, d))
      (F.placement = 'endOfLine'),
        l(...b) || (m ? ie(m, F) : C ? ue(C, F) : h ? re(h, F) : re(g, F));
    else if (((F.placement = 'remaining'), !p(...b)))
      if (m && C) {
        let X = n.length;
        X > 0 && n[X - 1].followingNode !== C && nn(n, E), n.push(c);
      } else m ? ie(m, F) : C ? ue(C, F) : h ? re(h, F) : re(g, F);
  }
  if ((nn(n, t), !o))
    for (let d of r) delete d.precedingNode, delete d.enclosingNode, delete d.followingNode;
}
var sn = e => !/[\S\n\u2028\u2029]/u.test(e);
function ni(e, t, r, n) {
  let { comment: u, precedingNode: i } = r[n],
    { locStart: o, locEnd: s } = t,
    a = o(u);
  if (i)
    for (let D = n - 1; D >= 0; D--) {
      let { comment: l, precedingNode: p } = r[D];
      if (p !== i || !sn(e.slice(s(l), a))) break;
      a = o(l);
    }
  return V(e, a, { backwards: !0 });
}
function ui(e, t, r, n) {
  let { comment: u, followingNode: i } = r[n],
    { locStart: o, locEnd: s } = t,
    a = s(u);
  if (i)
    for (let D = n + 1; D < r.length; D++) {
      let { comment: l, followingNode: p } = r[D];
      if (p !== i || !sn(e.slice(a, o(l)))) break;
      a = s(l);
    }
  return V(e, a);
}
function nn(e, t) {
  var s, a;
  let r = e.length;
  if (r === 0) return;
  let { precedingNode: n, followingNode: u } = e[0],
    i = t.locStart(u),
    o;
  for (o = r; o > 0; --o) {
    let { comment: D, precedingNode: l, followingNode: p } = e[o - 1];
    Pe.strictEqual(l, n), Pe.strictEqual(p, u);
    let f = t.originalText.slice(t.locEnd(D), i);
    if (((a = (s = t.printer).isGap) == null ? void 0 : a.call(s, f, t)) ?? /^[\s(]*$/u.test(f))
      i = t.locStart(D);
    else break;
  }
  for (let [D, { comment: l }] of e.entries()) D < o ? ie(n, l) : ue(u, l);
  for (let D of [n, u])
    D.comments && D.comments.length > 1 && D.comments.sort((l, p) => t.locStart(l) - t.locStart(p));
  e.length = 0;
}
function Vt(e, t, r) {
  let n = r.locStart(t) - 1;
  for (let u = 1; u < e.length; ++u) if (n < r.locStart(e[u])) return u - 1;
  return 0;
}
function ii(e, t) {
  let r = t - 1;
  (r = S(e, r, { backwards: !0 })),
    (r = W(e, r, { backwards: !0 })),
    (r = S(e, r, { backwards: !0 }));
  let n = W(e, r, { backwards: !0 });
  return r !== n;
}
var Ie = ii;
function an(e, t) {
  let r = e.node;
  return (r.printed = !0), t.printer.printComment(e, t);
}
function oi(e, t) {
  var l;
  let r = e.node,
    n = [an(e, t)],
    { printer: u, originalText: i, locStart: o, locEnd: s } = t;
  if ((l = u.isBlockComment) == null ? void 0 : l.call(u, r)) {
    let p = V(i, s(r)) ? (V(i, o(r), { backwards: !0 }) ? K : Qe) : ' ';
    n.push(p);
  } else n.push(K);
  let D = W(i, S(i, s(r)));
  return D !== !1 && V(i, D) && n.push(K), n;
}
function si(e, t, r) {
  var D;
  let n = e.node,
    u = an(e, t),
    { printer: i, originalText: o, locStart: s } = t,
    a = (D = i.isBlockComment) == null ? void 0 : D.call(i, n);
  if (
    (r != null && r.hasLineSuffix && !(r != null && r.isBlock)) ||
    V(o, s(n), { backwards: !0 })
  ) {
    let l = Ie(o, s(n));
    return { doc: Te([K, l ? K : '', u]), isBlock: a, hasLineSuffix: !0 };
  }
  return !a || (r != null && r.hasLineSuffix)
    ? { doc: [Te([' ', u]), he], isBlock: a, hasLineSuffix: !0 }
    : { doc: [' ', u], isBlock: a, hasLineSuffix: !1 };
}
function ai(e, t) {
  let r = e.node;
  if (!r) return {};
  let n = t[Symbol.for('printedComments')];
  if ((r.comments || []).filter(a => !n.has(a)).length === 0) return { leading: '', trailing: '' };
  let i = [],
    o = [],
    s;
  return (
    e.each(() => {
      let a = e.node;
      if (n != null && n.has(a)) return;
      let { leading: D, trailing: l } = a;
      D ? i.push(oi(e, t)) : l && ((s = si(e, t, s)), o.push(s.doc));
    }, 'comments'),
    { leading: i, trailing: o }
  );
}
function Dn(e, t, r) {
  let { leading: n, trailing: u } = ai(e, r);
  return !n && !u ? t : me(t, i => [n, i, u]);
}
function ln(e) {
  let { [Symbol.for('comments')]: t, [Symbol.for('printedComments')]: r } = e;
  for (let n of t) {
    if (!n.printed && !r.has(n))
      throw new Error(
        'Comment "' + n.value.trim() + '" was not printed. Please report this error!'
      );
    delete n.printed;
  }
}
function Di(e) {
  return () => {};
}
var cn = Di;
var Re = class extends Error {
    name = 'ConfigError';
  },
  Ye = class extends Error {
    name = 'UndefinedParserError';
  };
var fn = {
  cursorOffset: {
    category: 'Special',
    type: 'int',
    default: -1,
    range: { start: -1, end: 1 / 0, step: 1 },
    description:
      'Print (to stderr) where a cursor at the given position would move to after formatting.',
    cliCategory: 'Editor',
  },
  endOfLine: {
    category: 'Global',
    type: 'choice',
    default: 'lf',
    description: 'Which end of line characters to apply.',
    choices: [
      {
        value: 'lf',
        description: 'Line Feed only (\\n), common on Linux and macOS as well as inside git repos',
      },
      {
        value: 'crlf',
        description: 'Carriage Return + Line Feed characters (\\r\\n), common on Windows',
      },
      { value: 'cr', description: 'Carriage Return character only (\\r), used very rarely' },
      {
        value: 'auto',
        description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)`,
      },
    ],
  },
  filepath: {
    category: 'Special',
    type: 'path',
    description: 'Specify the input filepath. This will be used to do parser inference.',
    cliName: 'stdin-filepath',
    cliCategory: 'Other',
    cliDescription: 'Path to the file to pretend that stdin comes from.',
  },
  insertPragma: {
    category: 'Special',
    type: 'boolean',
    default: !1,
    description: "Insert @format pragma into file's first docblock comment.",
    cliCategory: 'Other',
  },
  parser: {
    category: 'Global',
    type: 'choice',
    default: void 0,
    description: 'Which parser to use.',
    exception: e => typeof e == 'string' || typeof e == 'function',
    choices: [
      { value: 'flow', description: 'Flow' },
      { value: 'babel', description: 'JavaScript' },
      { value: 'babel-flow', description: 'Flow' },
      { value: 'babel-ts', description: 'TypeScript' },
      { value: 'typescript', description: 'TypeScript' },
      { value: 'acorn', description: 'JavaScript' },
      { value: 'espree', description: 'JavaScript' },
      { value: 'meriyah', description: 'JavaScript' },
      { value: 'css', description: 'CSS' },
      { value: 'less', description: 'Less' },
      { value: 'scss', description: 'SCSS' },
      { value: 'json', description: 'JSON' },
      { value: 'json5', description: 'JSON5' },
      { value: 'jsonc', description: 'JSON with Comments' },
      { value: 'json-stringify', description: 'JSON.stringify' },
      { value: 'graphql', description: 'GraphQL' },
      { value: 'markdown', description: 'Markdown' },
      { value: 'mdx', description: 'MDX' },
      { value: 'vue', description: 'Vue' },
      { value: 'yaml', description: 'YAML' },
      { value: 'glimmer', description: 'Ember / Handlebars' },
      { value: 'html', description: 'HTML' },
      { value: 'angular', description: 'Angular' },
      { value: 'lwc', description: 'Lightning Web Components' },
    ],
  },
  plugins: {
    type: 'path',
    array: !0,
    default: [{ value: [] }],
    category: 'Global',
    description: 'Add a plugin. Multiple plugins can be passed as separate `--plugin`s.',
    exception: e => typeof e == 'string' || typeof e == 'object',
    cliName: 'plugin',
    cliCategory: 'Config',
  },
  printWidth: {
    category: 'Global',
    type: 'int',
    default: 80,
    description: 'The line length where Prettier will try wrap.',
    range: { start: 0, end: 1 / 0, step: 1 },
  },
  rangeEnd: {
    category: 'Special',
    type: 'int',
    default: 1 / 0,
    range: { start: 0, end: 1 / 0, step: 1 },
    description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`,
    cliCategory: 'Editor',
  },
  rangeStart: {
    category: 'Special',
    type: 'int',
    default: 0,
    range: { start: 0, end: 1 / 0, step: 1 },
    description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`,
    cliCategory: 'Editor',
  },
  requirePragma: {
    category: 'Special',
    type: 'boolean',
    default: !1,
    description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`,
    cliCategory: 'Other',
  },
  tabWidth: {
    type: 'int',
    category: 'Global',
    default: 2,
    description: 'Number of spaces per indentation level.',
    range: { start: 0, end: 1 / 0, step: 1 },
  },
  useTabs: {
    category: 'Global',
    type: 'boolean',
    default: !1,
    description: 'Indent with tabs instead of spaces.',
  },
  embeddedLanguageFormatting: {
    category: 'Global',
    type: 'choice',
    default: 'auto',
    description: 'Control how Prettier formats quoted code embedded in the file.',
    choices: [
      {
        value: 'auto',
        description: 'Format embedded code if Prettier can automatically identify it.',
      },
      { value: 'off', description: 'Never automatically format embedded code.' },
    ],
  },
};
function it({ plugins: e = [], showDeprecated: t = !1 } = {}) {
  let r = e.flatMap(u => u.languages ?? []),
    n = [];
  for (let u of ci(Object.assign({}, ...e.map(({ options: i }) => i), fn)))
    (!t && u.deprecated) ||
      (Array.isArray(u.choices) &&
        (t || (u.choices = u.choices.filter(i => !i.deprecated)),
        u.name === 'parser' && (u.choices = [...u.choices, ...li(u.choices, r, e)])),
      (u.pluginDefaults = Object.fromEntries(
        e
          .filter(i => {
            var o;
            return ((o = i.defaultOptions) == null ? void 0 : o[u.name]) !== void 0;
          })
          .map(i => [i.name, i.defaultOptions[u.name]])
      )),
      n.push(u));
  return { languages: r, options: n };
}
function* li(e, t, r) {
  let n = new Set(e.map(u => u.value));
  for (let u of t)
    if (u.parsers) {
      for (let i of u.parsers)
        if (!n.has(i)) {
          n.add(i);
          let o = r.find(a => a.parsers && Object.prototype.hasOwnProperty.call(a.parsers, i)),
            s = u.name;
          o != null && o.name && (s += ` (plugin: ${o.name})`), yield { value: i, description: s };
        }
    }
}
function ci(e) {
  let t = [];
  for (let [r, n] of Object.entries(e)) {
    let u = { name: r, ...n };
    Array.isArray(u.default) && (u.default = A(!1, u.default, -1).value), t.push(u);
  }
  return t;
}
var fi = e => String(e).split(/[/\\]/u).pop();
function dn(e, t) {
  if (!t) return;
  let r = fi(t).toLowerCase();
  return (
    e.find(({ filenames: n }) => (n == null ? void 0 : n.some(u => u.toLowerCase() === r))) ??
    e.find(({ extensions: n }) => (n == null ? void 0 : n.some(u => r.endsWith(u))))
  );
}
function di(e, t) {
  if (t)
    return (
      e.find(({ name: r }) => r.toLowerCase() === t) ??
      e.find(({ aliases: r }) => (r == null ? void 0 : r.includes(t))) ??
      e.find(({ extensions: r }) => (r == null ? void 0 : r.includes(`.${t}`)))
    );
}
function pi(e, t) {
  let r = e.plugins.flatMap(u => u.languages ?? []),
    n = di(r, t.language) ?? dn(r, t.physicalFile) ?? dn(r, t.file) ?? (t.physicalFile, void 0);
  return n == null ? void 0 : n.parsers[0];
}
var pn = pi;
var oe = {
  key: e => (/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e)),
  value(e) {
    if (e === null || typeof e != 'object') return JSON.stringify(e);
    if (Array.isArray(e)) return `[${e.map(r => oe.value(r)).join(', ')}]`;
    let t = Object.keys(e);
    return t.length === 0
      ? '{}'
      : `{ ${t.map(r => `${oe.key(r)}: ${oe.value(e[r])}`).join(', ')} }`;
  },
  pair: ({ key: e, value: t }) => oe.value({ [e]: t }),
};
var Ut = Me(ot(), 1),
  hn = (e, t, { descriptor: r }) => {
    let n = [`${Ut.default.yellow(typeof e == 'string' ? r.key(e) : r.pair(e))} is deprecated`];
    return (
      t &&
        n.push(
          `we now treat it as ${Ut.default.blue(typeof t == 'string' ? r.key(t) : r.pair(t))}`
        ),
      n.join('; ') + '.'
    );
  };
var ce = Me(ot(), 1);
var st = Symbol.for('vnopts.VALUE_NOT_EXIST'),
  ve = Symbol.for('vnopts.VALUE_UNCHANGED');
var En = ' '.repeat(2),
  gn = (e, t, r) => {
    let { text: n, list: u } = r.normalizeExpectedResult(r.schemas[e].expected(r)),
      i = [];
    return (
      n && i.push(Cn(e, t, n, r.descriptor)),
      u &&
        i.push(
          [Cn(e, t, u.title, r.descriptor)].concat(u.values.map(o => yn(o, r.loggerPrintWidth)))
            .join(`
`)
        ),
      An(i, r.loggerPrintWidth)
    );
  };
function Cn(e, t, r, n) {
  return [
    `Invalid ${ce.default.red(n.key(e))} value.`,
    `Expected ${ce.default.blue(r)},`,
    `but received ${t === st ? ce.default.gray('nothing') : ce.default.red(n.value(t))}.`,
  ].join(' ');
}
function yn({ text: e, list: t }, r) {
  let n = [];
  return (
    e && n.push(`- ${ce.default.blue(e)}`),
    t &&
      n.push(
        [`- ${ce.default.blue(t.title)}:`].concat(
          t.values.map(u => yn(u, r - En.length).replace(/^|\n/g, `$&${En}`))
        ).join(`
`)
      ),
    An(n, r)
  );
}
function An(e, t) {
  if (e.length === 1) return e[0];
  let [r, n] = e,
    [u, i] = e.map(
      o =>
        o.split(
          `
`,
          1
        )[0].length
    );
  return u > t && u > i ? n : r;
}
var Kt = Me(ot(), 1);
var zt = [],
  vn = [];
function Gt(e, t) {
  if (e === t) return 0;
  let r = e;
  e.length > t.length && ((e = t), (t = r));
  let n = e.length,
    u = t.length;
  for (; n > 0 && e.charCodeAt(~-n) === t.charCodeAt(~-u); ) n--, u--;
  let i = 0;
  for (; i < n && e.charCodeAt(i) === t.charCodeAt(i); ) i++;
  if (((n -= i), (u -= i), n === 0)) return u;
  let o,
    s,
    a,
    D,
    l = 0,
    p = 0;
  for (; l < n; ) (vn[l] = e.charCodeAt(i + l)), (zt[l] = ++l);
  for (; p < u; )
    for (o = t.charCodeAt(i + p), a = p++, s = p, l = 0; l < n; l++)
      (D = o === vn[l] ? a : a + 1),
        (a = zt[l]),
        (s = zt[l] = a > s ? (D > s ? s + 1 : D) : D > a ? a + 1 : D);
  return s;
}
var at = (e, t, { descriptor: r, logger: n, schemas: u }) => {
  let i = [`Ignored unknown option ${Kt.default.yellow(r.pair({ key: e, value: t }))}.`],
    o = Object.keys(u)
      .sort()
      .find(s => Gt(e, s) < 3);
  o && i.push(`Did you mean ${Kt.default.blue(r.key(o))}?`), n.warn(i.join(' '));
};
var Fi = [
  'default',
  'expected',
  'validate',
  'deprecated',
  'forward',
  'redirect',
  'overlap',
  'preprocess',
  'postprocess',
];
function mi(e, t) {
  let r = new e(t),
    n = Object.create(r);
  for (let u of Fi) u in t && (n[u] = hi(t[u], r, x.prototype[u].length));
  return n;
}
var x = class {
  static create(t) {
    return mi(this, t);
  }
  constructor(t) {
    this.name = t.name;
  }
  default(t) {}
  expected(t) {
    return 'nothing';
  }
  validate(t, r) {
    return !1;
  }
  deprecated(t, r) {
    return !1;
  }
  forward(t, r) {}
  redirect(t, r) {}
  overlap(t, r, n) {
    return t;
  }
  preprocess(t, r) {
    return t;
  }
  postprocess(t, r) {
    return ve;
  }
};
function hi(e, t, r) {
  return typeof e == 'function' ? (...n) => e(...n.slice(0, r - 1), t, ...n.slice(r - 1)) : () => e;
}
var Dt = class extends x {
  constructor(t) {
    super(t), (this._sourceName = t.sourceName);
  }
  expected(t) {
    return t.schemas[this._sourceName].expected(t);
  }
  validate(t, r) {
    return r.schemas[this._sourceName].validate(t, r);
  }
  redirect(t, r) {
    return this._sourceName;
  }
};
var lt = class extends x {
  expected() {
    return 'anything';
  }
  validate() {
    return !0;
  }
};
var ct = class extends x {
  constructor({ valueSchema: t, name: r = t.name, ...n }) {
    super({ ...n, name: r }), (this._valueSchema = t);
  }
  expected(t) {
    let { text: r, list: n } = t.normalizeExpectedResult(this._valueSchema.expected(t));
    return {
      text: r && `an array of ${r}`,
      list: n && { title: 'an array of the following values', values: [{ list: n }] },
    };
  }
  validate(t, r) {
    if (!Array.isArray(t)) return !1;
    let n = [];
    for (let u of t) {
      let i = r.normalizeValidateResult(this._valueSchema.validate(u, r), u);
      i !== !0 && n.push(i.value);
    }
    return n.length === 0 ? !0 : { value: n };
  }
  deprecated(t, r) {
    let n = [];
    for (let u of t) {
      let i = r.normalizeDeprecatedResult(this._valueSchema.deprecated(u, r), u);
      i !== !1 && n.push(...i.map(({ value: o }) => ({ value: [o] })));
    }
    return n;
  }
  forward(t, r) {
    let n = [];
    for (let u of t) {
      let i = r.normalizeForwardResult(this._valueSchema.forward(u, r), u);
      n.push(...i.map(Bn));
    }
    return n;
  }
  redirect(t, r) {
    let n = [],
      u = [];
    for (let i of t) {
      let o = r.normalizeRedirectResult(this._valueSchema.redirect(i, r), i);
      'remain' in o && n.push(o.remain), u.push(...o.redirect.map(Bn));
    }
    return n.length === 0 ? { redirect: u } : { redirect: u, remain: n };
  }
  overlap(t, r) {
    return t.concat(r);
  }
};
function Bn({ from: e, to: t }) {
  return { from: [e], to: t };
}
var ft = class extends x {
  expected() {
    return 'true or false';
  }
  validate(t) {
    return typeof t == 'boolean';
  }
};
function _n(e, t) {
  let r = Object.create(null);
  for (let n of e) {
    let u = n[t];
    if (r[u]) throw new Error(`Duplicate ${t} ${JSON.stringify(u)}`);
    r[u] = n;
  }
  return r;
}
function xn(e, t) {
  let r = new Map();
  for (let n of e) {
    let u = n[t];
    if (r.has(u)) throw new Error(`Duplicate ${t} ${JSON.stringify(u)}`);
    r.set(u, n);
  }
  return r;
}
function bn() {
  let e = Object.create(null);
  return t => {
    let r = JSON.stringify(t);
    return e[r] ? !0 : ((e[r] = !0), !1);
  };
}
function Nn(e, t) {
  let r = [],
    n = [];
  for (let u of e) t(u) ? r.push(u) : n.push(u);
  return [r, n];
}
function On(e) {
  return e === Math.floor(e);
}
function Sn(e, t) {
  if (e === t) return 0;
  let r = typeof e,
    n = typeof t,
    u = ['undefined', 'object', 'boolean', 'number', 'string'];
  return r !== n
    ? u.indexOf(r) - u.indexOf(n)
    : r !== 'string'
      ? Number(e) - Number(t)
      : e.localeCompare(t);
}
function Tn(e) {
  return (...t) => {
    let r = e(...t);
    return typeof r == 'string' ? new Error(r) : r;
  };
}
function Jt(e) {
  return e === void 0 ? {} : e;
}
function qt(e) {
  if (typeof e == 'string') return { text: e };
  let { text: t, list: r } = e;
  return (
    Ei((t || r) !== void 0, 'Unexpected `expected` result, there should be at least one field.'),
    r ? { text: t, list: { title: r.title, values: r.values.map(qt) } } : { text: t }
  );
}
function Xt(e, t) {
  return e === !0 ? !0 : e === !1 ? { value: t } : e;
}
function Qt(e, t, r = !1) {
  return e === !1
    ? !1
    : e === !0
      ? r
        ? !0
        : [{ value: t }]
      : 'value' in e
        ? [e]
        : e.length === 0
          ? !1
          : e;
}
function wn(e, t) {
  return typeof e == 'string' || 'key' in e
    ? { from: t, to: e }
    : 'from' in e
      ? { from: e.from, to: e.to }
      : { from: t, to: e.to };
}
function dt(e, t) {
  return e === void 0 ? [] : Array.isArray(e) ? e.map(r => wn(r, t)) : [wn(e, t)];
}
function Zt(e, t) {
  let r = dt(typeof e == 'object' && 'redirect' in e ? e.redirect : e, t);
  return r.length === 0
    ? { remain: t, redirect: r }
    : typeof e == 'object' && 'remain' in e
      ? { remain: e.remain, redirect: r }
      : { redirect: r };
}
function Ei(e, t) {
  if (!e) throw new Error(t);
}
var pt = class extends x {
  constructor(t) {
    super(t),
      (this._choices = xn(
        t.choices.map(r => (r && typeof r == 'object' ? r : { value: r })),
        'value'
      ));
  }
  expected({ descriptor: t }) {
    let r = Array.from(this._choices.keys())
        .map(o => this._choices.get(o))
        .filter(({ hidden: o }) => !o)
        .map(o => o.value)
        .sort(Sn)
        .map(t.value),
      n = r.slice(0, -2),
      u = r.slice(-2);
    return {
      text: n.concat(u.join(' or ')).join(', '),
      list: { title: 'one of the following values', values: r },
    };
  }
  validate(t) {
    return this._choices.has(t);
  }
  deprecated(t) {
    let r = this._choices.get(t);
    return r && r.deprecated ? { value: t } : !1;
  }
  forward(t) {
    let r = this._choices.get(t);
    return r ? r.forward : void 0;
  }
  redirect(t) {
    let r = this._choices.get(t);
    return r ? r.redirect : void 0;
  }
};
var Ft = class extends x {
  expected() {
    return 'a number';
  }
  validate(t, r) {
    return typeof t == 'number';
  }
};
var mt = class extends Ft {
  expected() {
    return 'an integer';
  }
  validate(t, r) {
    return r.normalizeValidateResult(super.validate(t, r), t) === !0 && On(t);
  }
};
var je = class extends x {
  expected() {
    return 'a string';
  }
  validate(t) {
    return typeof t == 'string';
  }
};
var kn = oe,
  Ln = at,
  Pn = gn,
  In = hn;
var ht = class {
  constructor(t, r) {
    let {
      logger: n = console,
      loggerPrintWidth: u = 80,
      descriptor: i = kn,
      unknown: o = Ln,
      invalid: s = Pn,
      deprecated: a = In,
      missing: D = () => !1,
      required: l = () => !1,
      preprocess: p = d => d,
      postprocess: f = () => ve,
    } = r || {};
    (this._utils = {
      descriptor: i,
      logger: n || { warn: () => {} },
      loggerPrintWidth: u,
      schemas: _n(t, 'name'),
      normalizeDefaultResult: Jt,
      normalizeExpectedResult: qt,
      normalizeDeprecatedResult: Qt,
      normalizeForwardResult: dt,
      normalizeRedirectResult: Zt,
      normalizeValidateResult: Xt,
    }),
      (this._unknownHandler = o),
      (this._invalidHandler = Tn(s)),
      (this._deprecatedHandler = a),
      (this._identifyMissing = (d, c) => !(d in c) || D(d, c)),
      (this._identifyRequired = l),
      (this._preprocess = p),
      (this._postprocess = f),
      this.cleanHistory();
  }
  cleanHistory() {
    this._hasDeprecationWarned = bn();
  }
  normalize(t) {
    let r = {},
      u = [this._preprocess(t, this._utils)],
      i = () => {
        for (; u.length !== 0; ) {
          let o = u.shift(),
            s = this._applyNormalization(o, r);
          u.push(...s);
        }
      };
    i();
    for (let o of Object.keys(this._utils.schemas)) {
      let s = this._utils.schemas[o];
      if (!(o in r)) {
        let a = Jt(s.default(this._utils));
        'value' in a && u.push({ [o]: a.value });
      }
    }
    i();
    for (let o of Object.keys(this._utils.schemas)) {
      if (!(o in r)) continue;
      let s = this._utils.schemas[o],
        a = r[o],
        D = s.postprocess(a, this._utils);
      D !== ve && (this._applyValidation(D, o, s), (r[o] = D));
    }
    return this._applyPostprocess(r), this._applyRequiredCheck(r), r;
  }
  _applyNormalization(t, r) {
    let n = [],
      { knownKeys: u, unknownKeys: i } = this._partitionOptionKeys(t);
    for (let o of u) {
      let s = this._utils.schemas[o],
        a = s.preprocess(t[o], this._utils);
      this._applyValidation(a, o, s);
      let D = ({ from: d, to: c }) => {
          n.push(typeof c == 'string' ? { [c]: d } : { [c.key]: c.value });
        },
        l = ({ value: d, redirectTo: c }) => {
          let F = Qt(s.deprecated(d, this._utils), a, !0);
          if (F !== !1)
            if (F === !0)
              this._hasDeprecationWarned(o) ||
                this._utils.logger.warn(this._deprecatedHandler(o, c, this._utils));
            else
              for (let { value: m } of F) {
                let h = { key: o, value: m };
                if (!this._hasDeprecationWarned(h)) {
                  let C = typeof c == 'string' ? { key: c, value: m } : c;
                  this._utils.logger.warn(this._deprecatedHandler(h, C, this._utils));
                }
              }
        };
      dt(s.forward(a, this._utils), a).forEach(D);
      let f = Zt(s.redirect(a, this._utils), a);
      if ((f.redirect.forEach(D), 'remain' in f)) {
        let d = f.remain;
        (r[o] = o in r ? s.overlap(r[o], d, this._utils) : d), l({ value: d });
      }
      for (let { from: d, to: c } of f.redirect) l({ value: d, redirectTo: c });
    }
    for (let o of i) {
      let s = t[o];
      this._applyUnknownHandler(o, s, r, (a, D) => {
        n.push({ [a]: D });
      });
    }
    return n;
  }
  _applyRequiredCheck(t) {
    for (let r of Object.keys(this._utils.schemas))
      if (this._identifyMissing(r, t) && this._identifyRequired(r))
        throw this._invalidHandler(r, st, this._utils);
  }
  _partitionOptionKeys(t) {
    let [r, n] = Nn(
      Object.keys(t).filter(u => !this._identifyMissing(u, t)),
      u => u in this._utils.schemas
    );
    return { knownKeys: r, unknownKeys: n };
  }
  _applyValidation(t, r, n) {
    let u = Xt(n.validate(t, this._utils), t);
    if (u !== !0) throw this._invalidHandler(r, u.value, this._utils);
  }
  _applyUnknownHandler(t, r, n, u) {
    let i = this._unknownHandler(t, r, this._utils);
    if (i)
      for (let o of Object.keys(i)) {
        if (this._identifyMissing(o, i)) continue;
        let s = i[o];
        o in this._utils.schemas ? u(o, s) : (n[o] = s);
      }
  }
  _applyPostprocess(t) {
    let r = this._postprocess(t, this._utils);
    if (r !== ve) {
      if (r.delete) for (let n of r.delete) delete t[n];
      if (r.override) {
        let { knownKeys: n, unknownKeys: u } = this._partitionOptionKeys(r.override);
        for (let i of n) {
          let o = r.override[i];
          this._applyValidation(o, i, this._utils.schemas[i]), (t[i] = o);
        }
        for (let i of u) {
          let o = r.override[i];
          this._applyUnknownHandler(i, o, t, (s, a) => {
            let D = this._utils.schemas[s];
            this._applyValidation(a, s, D), (t[s] = a);
          });
        }
      }
    }
  }
};
var er;
function gi(
  e,
  t,
  { logger: r = !1, isCLI: n = !1, passThrough: u = !1, FlagSchema: i, descriptor: o } = {}
) {
  if (n) {
    if (!i) throw new Error("'FlagSchema' option is required.");
    if (!o) throw new Error("'descriptor' option is required.");
  } else o = oe;
  let s = u
      ? Array.isArray(u)
        ? (f, d) => (u.includes(f) ? { [f]: d } : void 0)
        : (f, d) => ({ [f]: d })
      : (f, d, c) => {
          let { _: F, ...m } = c.schemas;
          return at(f, d, { ...c, schemas: m });
        },
    a = yi(t, { isCLI: n, FlagSchema: i }),
    D = new ht(a, { logger: r, unknown: s, descriptor: o }),
    l = r !== !1;
  l && er && (D._hasDeprecationWarned = er);
  let p = D.normalize(e);
  return l && (er = D._hasDeprecationWarned), p;
}
function yi(e, { isCLI: t, FlagSchema: r }) {
  let n = [];
  t && n.push(lt.create({ name: '_' }));
  for (let u of e)
    n.push(Ai(u, { isCLI: t, optionInfos: e, FlagSchema: r })),
      u.alias && t && n.push(Dt.create({ name: u.alias, sourceName: u.name }));
  return n;
}
function Ai(e, { isCLI: t, optionInfos: r, FlagSchema: n }) {
  let { name: u } = e,
    i = { name: u },
    o,
    s = {};
  switch (e.type) {
    case 'int':
      (o = mt), t && (i.preprocess = Number);
      break;
    case 'string':
      o = je;
      break;
    case 'choice':
      (o = pt),
        (i.choices = e.choices.map(a =>
          a != null && a.redirect
            ? { ...a, redirect: { to: { key: e.name, value: a.redirect } } }
            : a
        ));
      break;
    case 'boolean':
      o = ft;
      break;
    case 'flag':
      (o = n),
        (i.flags = r.flatMap(a =>
          [a.alias, a.description && a.name, a.oppositeDescription && `no-${a.name}`].filter(
            Boolean
          )
        ));
      break;
    case 'path':
      o = je;
      break;
    default:
      throw new Error(`Unexpected type ${e.type}`);
  }
  if (
    (e.exception
      ? (i.validate = (a, D, l) => e.exception(a) || D.validate(a, l))
      : (i.validate = (a, D, l) => a === void 0 || D.validate(a, l)),
    e.redirect &&
      (s.redirect = a =>
        a
          ? {
              to:
                typeof e.redirect == 'string'
                  ? e.redirect
                  : { key: e.redirect.option, value: e.redirect.value },
            }
          : void 0),
    e.deprecated && (s.deprecated = !0),
    t && !e.array)
  ) {
    let a = i.preprocess || (D => D);
    i.preprocess = (D, l, p) => l.preprocess(a(Array.isArray(D) ? A(!1, D, -1) : D), p);
  }
  return e.array
    ? ct.create({
        ...(t ? { preprocess: a => (Array.isArray(a) ? a : [a]) } : {}),
        ...s,
        valueSchema: o.create(i),
      })
    : o.create({ ...i, ...s });
}
var Rn = gi;
var vi = (e, t, r) => {
    if (!(e && t == null)) {
      if (t.findLast) return t.findLast(r);
      for (let n = t.length - 1; n >= 0; n--) {
        let u = t[n];
        if (r(u, n, t)) return u;
      }
    }
  },
  tr = vi;
function rr(e, t) {
  if (!t) throw new Error('parserName is required.');
  let r = tr(!1, e, u => u.parsers && Object.prototype.hasOwnProperty.call(u.parsers, t));
  if (r) return r;
  let n = `Couldn't resolve parser "${t}".`;
  throw ((n += ' Plugins must be explicitly added to the standalone bundle.'), new Re(n));
}
function Yn(e, t) {
  if (!t) throw new Error('astFormat is required.');
  let r = tr(!1, e, u => u.printers && Object.prototype.hasOwnProperty.call(u.printers, t));
  if (r) return r;
  let n = `Couldn't find plugin for AST format "${t}".`;
  throw ((n += ' Plugins must be explicitly added to the standalone bundle.'), new Re(n));
}
function Et({ plugins: e, parser: t }) {
  let r = rr(e, t);
  return nr(r, t);
}
function nr(e, t) {
  let r = e.parsers[t];
  return typeof r == 'function' ? r() : r;
}
function jn(e, t) {
  let r = e.printers[t];
  return typeof r == 'function' ? r() : r;
}
var Hn = { astFormat: 'estree', printer: {}, originalText: void 0, locStart: null, locEnd: null };
async function Bi(e, t = {}) {
  var p;
  let r = { ...e };
  if (!r.parser)
    if (r.filepath) {
      if (((r.parser = pn(r, { physicalFile: r.filepath })), !r.parser))
        throw new Ye(`No parser could be inferred for file "${r.filepath}".`);
    } else throw new Ye("No parser and no file path given, couldn't infer a parser.");
  let n = it({ plugins: e.plugins, showDeprecated: !0 }).options,
    u = {
      ...Hn,
      ...Object.fromEntries(n.filter(f => f.default !== void 0).map(f => [f.name, f.default])),
    },
    i = rr(r.plugins, r.parser),
    o = await nr(i, r.parser);
  (r.astFormat = o.astFormat), (r.locEnd = o.locEnd), (r.locStart = o.locStart);
  let s = (p = i.printers) != null && p[o.astFormat] ? i : Yn(r.plugins, o.astFormat),
    a = await jn(s, o.astFormat);
  r.printer = a;
  let D = s.defaultOptions
      ? Object.fromEntries(Object.entries(s.defaultOptions).filter(([, f]) => f !== void 0))
      : {},
    l = { ...u, ...D };
  for (let [f, d] of Object.entries(l)) (r[f] === null || r[f] === void 0) && (r[f] = d);
  return (
    r.parser === 'json' && (r.trailingComma = 'none'),
    Rn(r, n, { passThrough: Object.keys(Hn), ...t })
  );
}
var se = Bi;
var Mn = Me($n(), 1);
async function bi(e, t) {
  let r = await Et(t),
    n = r.preprocess ? r.preprocess(e, t) : e;
  t.originalText = n;
  let u;
  try {
    u = await r.parse(n, t, t);
  } catch (i) {
    Ni(i, e);
  }
  return { text: n, ast: u };
}
function Ni(e, t) {
  let { loc: r } = e;
  if (r) {
    let n = (0, Mn.codeFrameColumns)(t, r, { highlightCode: !0 });
    throw (
      ((e.message +=
        `
` + n),
      (e.codeFrame = n),
      e)
    );
  }
  throw e;
}
var fe = bi;
async function Vn(e, t, r, n, u) {
  let {
    embeddedLanguageFormatting: i,
    printer: { embed: o, hasPrettierIgnore: s = () => !1, getVisitorKeys: a },
  } = r;
  if (!o || i !== 'auto') return;
  if (o.length > 2)
    throw new Error(
      'printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/plugins#optional-embed'
    );
  let D = q(o.getVisitorKeys ?? a),
    l = [];
  d();
  let p = e.stack;
  for (let { print: c, node: F, pathStack: m } of l)
    try {
      e.stack = m;
      let h = await c(f, t, e, r);
      h && u.set(F, h);
    } catch (h) {
      if (globalThis.PRETTIER_DEBUG) throw h;
    }
  e.stack = p;
  function f(c, F) {
    return Oi(c, F, r, n);
  }
  function d() {
    let { node: c } = e;
    if (c === null || typeof c != 'object' || s(e)) return;
    for (let m of D(c)) Array.isArray(c[m]) ? e.each(d, m) : e.call(d, m);
    let F = o(e, r);
    if (F) {
      if (typeof F == 'function') {
        l.push({ print: F, node: c, pathStack: [...e.stack] });
        return;
      }
      u.set(c, F);
    }
  }
}
async function Oi(e, t, r, n) {
  let u = await se({ ...r, ...t, parentParser: r.parser, originalText: e }, { passThrough: !0 }),
    { ast: i } = await fe(e, u),
    o = await n(i, u);
  return qe(o);
}
function Si(e, t) {
  let {
      originalText: r,
      [Symbol.for('comments')]: n,
      locStart: u,
      locEnd: i,
      [Symbol.for('printedComments')]: o,
    } = t,
    { node: s } = e,
    a = u(s),
    D = i(s);
  for (let l of n) u(l) >= a && i(l) <= D && o.add(l);
  return r.slice(a, D);
}
var Un = Si;
async function He(e, t) {
  ({ ast: e } = await ir(e, t));
  let r = new Map(),
    n = new qr(e),
    u = cn(t),
    i = new Map();
  await Vn(n, s, t, He, i);
  let o = await zn(n, t, s, void 0, i);
  if ((ln(t), t.nodeAfterCursor && !t.nodeBeforeCursor)) return [Z, o];
  if (t.nodeBeforeCursor && !t.nodeAfterCursor) return [o, Z];
  return o;
  function s(D, l) {
    return D === void 0 || D === n
      ? a(l)
      : Array.isArray(D)
        ? n.call(() => a(l), ...D)
        : n.call(() => a(l), D);
  }
  function a(D) {
    u(n);
    let l = n.node;
    if (l == null) return '';
    let p = l && typeof l == 'object' && D === void 0;
    if (p && r.has(l)) return r.get(l);
    let f = zn(n, t, s, D, i);
    return p && r.set(l, f), f;
  }
}
function zn(e, t, r, n, u) {
  var a;
  let { node: i } = e,
    { printer: o } = t,
    s;
  switch (
    ((a = o.hasPrettierIgnore) != null && a.call(o, e)
      ? (s = Un(e, t))
      : u.has(i)
        ? (s = u.get(i))
        : (s = o.print(e, t, r, n)),
    i)
  ) {
    case t.cursorNode:
      s = me(s, D => [Z, D, Z]);
      break;
    case t.nodeBeforeCursor:
      s = me(s, D => [D, Z]);
      break;
    case t.nodeAfterCursor:
      s = me(s, D => [Z, D]);
      break;
  }
  return (
    o.printComment &&
      (!o.willPrintOwnComments || !o.willPrintOwnComments(e, t)) &&
      (s = Dn(e, s, t)),
    s
  );
}
async function ir(e, t) {
  let r = e.comments ?? [];
  (t[Symbol.for('comments')] = r),
    (t[Symbol.for('tokens')] = e.tokens ?? []),
    (t[Symbol.for('printedComments')] = new Set()),
    on(e, t);
  let {
    printer: { preprocess: n },
  } = t;
  return (e = n ? await n(e, t) : e), { ast: e, comments: r };
}
function Ti(e, t) {
  let { cursorOffset: r, locStart: n, locEnd: u } = t,
    i = q(t.printer.getVisitorKeys),
    o = d => n(d) <= r && u(d) >= r,
    s = e,
    a = [e];
  for (let d of Zr(e, { getVisitorKeys: i, filter: o })) a.push(d), (s = d);
  if (en(s, { getVisitorKeys: i })) return { cursorNode: s };
  let D,
    l,
    p = -1,
    f = Number.POSITIVE_INFINITY;
  for (; a.length > 0 && (D === void 0 || l === void 0); ) {
    s = a.pop();
    let d = D !== void 0,
      c = l !== void 0;
    for (let F of ye(s, { getVisitorKeys: i })) {
      if (!d) {
        let m = u(F);
        m <= r && m > p && ((D = F), (p = m));
      }
      if (!c) {
        let m = n(F);
        m >= r && m < f && ((l = F), (f = m));
      }
    }
  }
  return { nodeBeforeCursor: D, nodeAfterCursor: l };
}
var Gn = Ti;
function ki(e, t) {
  let {
    printer: { massageAstNode: r, getVisitorKeys: n },
  } = t;
  if (!r) return e;
  let u = q(n),
    i = r.ignoredProperties ?? new Set();
  return o(e);
  function o(s, a) {
    if (!(s !== null && typeof s == 'object')) return s;
    if (Array.isArray(s)) return s.map(f => o(f, a)).filter(Boolean);
    let D = {},
      l = new Set(u(s));
    for (let f in s)
      !Object.prototype.hasOwnProperty.call(s, f) ||
        i.has(f) ||
        (l.has(f) ? (D[f] = o(s[f], s)) : (D[f] = s[f]));
    let p = r(s, D, a);
    if (p !== null) return p ?? D;
  }
}
var Kn = ki;
var Li = (e, t, r) => {
    if (!(e && t == null)) {
      if (t.findLastIndex) return t.findLastIndex(r);
      for (let n = t.length - 1; n >= 0; n--) {
        let u = t[n];
        if (r(u, n, t)) return n;
      }
      return -1;
    }
  },
  Jn = Li;
var Pi = ({ parser: e }) =>
  e === 'json' || e === 'json5' || e === 'jsonc' || e === 'json-stringify';
function Ii(e, t) {
  let r = [e.node, ...e.parentNodes],
    n = new Set([t.node, ...t.parentNodes]);
  return r.find(u => Qn.has(u.type) && n.has(u));
}
function qn(e) {
  let t = Jn(!1, e, r => r.type !== 'Program' && r.type !== 'File');
  return t === -1 ? e : e.slice(0, t + 1);
}
function Ri(e, t, { locStart: r, locEnd: n }) {
  let u = e.node,
    i = t.node;
  if (u === i) return { startNode: u, endNode: i };
  let o = r(e.node);
  for (let a of qn(t.parentNodes))
    if (r(a) >= o) i = a;
    else break;
  let s = n(t.node);
  for (let a of qn(e.parentNodes)) {
    if (n(a) <= s) u = a;
    else break;
    if (u === i) break;
  }
  return { startNode: u, endNode: i };
}
function or(e, t, r, n, u = [], i) {
  let { locStart: o, locEnd: s } = r,
    a = o(e),
    D = s(e);
  if (!(t > D || t < a || (i === 'rangeEnd' && t === a) || (i === 'rangeStart' && t === D))) {
    for (let l of ut(e, r)) {
      let p = or(l, t, r, n, [e, ...u], i);
      if (p) return p;
    }
    if (!n || n(e, u[0])) return { node: e, parentNodes: u };
  }
}
function Yi(e, t) {
  return (
    t !== 'DeclareExportDeclaration' &&
    e !== 'TypeParameterDeclaration' &&
    (e === 'Directive' ||
      e === 'TypeAlias' ||
      e === 'TSExportAssignment' ||
      e.startsWith('Declare') ||
      e.startsWith('TSDeclare') ||
      e.endsWith('Statement') ||
      e.endsWith('Declaration'))
  );
}
var Qn = new Set([
    'JsonRoot',
    'ObjectExpression',
    'ArrayExpression',
    'StringLiteral',
    'NumericLiteral',
    'BooleanLiteral',
    'NullLiteral',
    'UnaryExpression',
    'TemplateLiteral',
  ]),
  ji = new Set([
    'OperationDefinition',
    'FragmentDefinition',
    'VariableDefinition',
    'TypeExtensionDefinition',
    'ObjectTypeDefinition',
    'FieldDefinition',
    'DirectiveDefinition',
    'EnumTypeDefinition',
    'EnumValueDefinition',
    'InputValueDefinition',
    'InputObjectTypeDefinition',
    'SchemaDefinition',
    'OperationTypeDefinition',
    'InterfaceTypeDefinition',
    'UnionTypeDefinition',
    'ScalarTypeDefinition',
  ]);
function Xn(e, t, r) {
  if (!t) return !1;
  switch (e.parser) {
    case 'flow':
    case 'babel':
    case 'babel-flow':
    case 'babel-ts':
    case 'typescript':
    case 'acorn':
    case 'espree':
    case 'meriyah':
    case '__babel_estree':
      return Yi(t.type, r == null ? void 0 : r.type);
    case 'json':
    case 'json5':
    case 'jsonc':
    case 'json-stringify':
      return Qn.has(t.type);
    case 'graphql':
      return ji.has(t.kind);
    case 'vue':
      return t.tag !== 'root';
  }
  return !1;
}
function Zn(e, t, r) {
  let { rangeStart: n, rangeEnd: u, locStart: i, locEnd: o } = t;
  Pe.ok(u > n);
  let s = e.slice(n, u).search(/\S/u),
    a = s === -1;
  if (!a) for (n += s; u > n && !/\S/u.test(e[u - 1]); --u);
  let D = or(r, n, t, (d, c) => Xn(t, d, c), [], 'rangeStart'),
    l = a ? D : or(r, u, t, d => Xn(t, d), [], 'rangeEnd');
  if (!D || !l) return { rangeStart: 0, rangeEnd: 0 };
  let p, f;
  if (Pi(t)) {
    let d = Ii(D, l);
    (p = d), (f = d);
  } else ({ startNode: p, endNode: f } = Ri(D, l, t));
  return { rangeStart: Math.min(i(p), i(f)), rangeEnd: Math.max(o(p), o(f)) };
}
var nu = '\uFEFF',
  eu = Symbol('cursor');
async function uu(e, t, r = 0) {
  if (!e || e.trim().length === 0) return { formatted: '', cursorOffset: -1, comments: [] };
  let { ast: n, text: u } = await fe(e, t);
  t.cursorOffset >= 0 && (t = { ...t, ...Gn(n, t) });
  let i = await He(n, t, r);
  r > 0 && (i = Ze([K, i], r, t.tabWidth));
  let o = Ce(i, t);
  if (r > 0) {
    let a = o.formatted.trim();
    o.cursorNodeStart !== void 0 &&
      ((o.cursorNodeStart -= o.formatted.indexOf(a)),
      o.cursorNodeStart < 0 &&
        ((o.cursorNodeStart = 0), (o.cursorNodeText = o.cursorNodeText.trimStart())),
      o.cursorNodeStart + o.cursorNodeText.length > a.length &&
        (o.cursorNodeText = o.cursorNodeText.trimEnd())),
      (o.formatted = a + be(t.endOfLine));
  }
  let s = t[Symbol.for('comments')];
  if (t.cursorOffset >= 0) {
    let a, D, l, p;
    if ((t.cursorNode || t.nodeBeforeCursor || t.nodeAfterCursor) && o.cursorNodeText)
      if (((l = o.cursorNodeStart), (p = o.cursorNodeText), t.cursorNode))
        (a = t.locStart(t.cursorNode)), (D = u.slice(a, t.locEnd(t.cursorNode)));
      else {
        if (!t.nodeBeforeCursor && !t.nodeAfterCursor)
          throw new Error(
            'Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor'
          );
        a = t.nodeBeforeCursor ? t.locEnd(t.nodeBeforeCursor) : 0;
        let h = t.nodeAfterCursor ? t.locStart(t.nodeAfterCursor) : u.length;
        D = u.slice(a, h);
      }
    else (a = 0), (D = u), (l = 0), (p = o.formatted);
    let f = t.cursorOffset - a;
    if (D === p) return { formatted: o.formatted, cursorOffset: l + f, comments: s };
    let d = D.split('');
    d.splice(f, 0, eu);
    let c = p.split(''),
      F = yr(d, c),
      m = l;
    for (let h of F)
      if (h.removed) {
        if (h.value.includes(eu)) break;
      } else m += h.count;
    return { formatted: o.formatted, cursorOffset: m, comments: s };
  }
  return { formatted: o.formatted, cursorOffset: -1, comments: s };
}
async function Hi(e, t) {
  let { ast: r, text: n } = await fe(e, t),
    { rangeStart: u, rangeEnd: i } = Zn(n, t, r),
    o = n.slice(u, i),
    s = Math.min(
      u,
      n.lastIndexOf(
        `
`,
        u
      ) + 1
    ),
    a = n.slice(s, u).match(/^\s*/u)[0],
    D = ge(a, t.tabWidth),
    l = await uu(
      o,
      {
        ...t,
        rangeStart: 0,
        rangeEnd: Number.POSITIVE_INFINITY,
        cursorOffset: t.cursorOffset > u && t.cursorOffset <= i ? t.cursorOffset - u : -1,
        endOfLine: 'lf',
      },
      D
    ),
    p = l.formatted.trimEnd(),
    { cursorOffset: f } = t;
  f > i ? (f += p.length - o.length) : l.cursorOffset >= 0 && (f = l.cursorOffset + u);
  let d = n.slice(0, u) + p + n.slice(i);
  if (t.endOfLine !== 'lf') {
    let c = be(t.endOfLine);
    f >= 0 &&
      c ===
        `\r
` &&
      (f += Nt(
        d.slice(0, f),
        `
`
      )),
      (d = ne(
        !1,
        d,
        `
`,
        c
      ));
  }
  return { formatted: d, cursorOffset: f, comments: l.comments };
}
function sr(e, t, r) {
  return typeof t != 'number' || Number.isNaN(t) || t < 0 || t > e.length ? r : t;
}
function tu(e, t) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: u } = t;
  return (
    (r = sr(e, r, -1)),
    (n = sr(e, n, 0)),
    (u = sr(e, u, e.length)),
    { ...t, cursorOffset: r, rangeStart: n, rangeEnd: u }
  );
}
function iu(e, t) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: u, endOfLine: i } = tu(e, t),
    o = e.charAt(0) === nu;
  if ((o && ((e = e.slice(1)), r--, n--, u--), i === 'auto' && (i = Ar(e)), e.includes('\r'))) {
    let s = a =>
      Nt(
        e.slice(0, Math.max(a, 0)),
        `\r
`
      );
    (r -= s(r)), (n -= s(n)), (u -= s(u)), (e = vr(e));
  }
  return {
    hasBOM: o,
    text: e,
    options: tu(e, { ...t, cursorOffset: r, rangeStart: n, rangeEnd: u, endOfLine: i }),
  };
}
async function ru(e, t) {
  let r = await Et(t);
  return !r.hasPragma || r.hasPragma(e);
}
async function ar(e, t) {
  let { hasBOM: r, text: n, options: u } = iu(e, await se(t));
  if ((u.rangeStart >= u.rangeEnd && n !== '') || (u.requirePragma && !(await ru(n, u))))
    return { formatted: e, cursorOffset: t.cursorOffset, comments: [] };
  let i;
  return (
    u.rangeStart > 0 || u.rangeEnd < n.length
      ? (i = await Hi(n, u))
      : (!u.requirePragma &&
          u.insertPragma &&
          u.printer.insertPragma &&
          !(await ru(n, u)) &&
          (n = u.printer.insertPragma(n)),
        (i = await uu(n, u))),
    r && ((i.formatted = nu + i.formatted), i.cursorOffset >= 0 && i.cursorOffset++),
    i
  );
}
async function ou(e, t, r) {
  let { text: n, options: u } = iu(e, await se(t)),
    i = await fe(n, u);
  return (
    r &&
      (r.preprocessForPrint && (i.ast = await ir(i.ast, u)), r.massage && (i.ast = Kn(i.ast, u))),
    i
  );
}
async function su(e, t) {
  t = await se(t);
  let r = await He(e, t);
  return Ce(r, t);
}
async function au(e, t) {
  let r = Vr(e),
    { formatted: n } = await ar(r, { ...t, parser: '__js_expression' });
  return n;
}
async function Du(e, t) {
  t = await se(t);
  let { ast: r } = await fe(e, t);
  return He(r, t);
}
async function lu(e, t) {
  return Ce(e, await se(t));
}
var Dr = {};
vt(Dr, { builders: () => $i, printer: () => Mi, utils: () => Vi });
var $i = {
    join: Se,
    line: Qe,
    softline: $r,
    hardline: K,
    literalline: Xe,
    group: kt,
    conditionalGroup: Ir,
    fill: Rr,
    lineSuffix: Te,
    lineSuffixBoundary: Hr,
    cursor: Z,
    breakParent: he,
    ifBreak: Yr,
    trim: Wr,
    indent: le,
    indentIfBreak: jr,
    align: De,
    addAlignmentToDoc: Ze,
    markAsRoot: Lr,
    dedentToRoot: kr,
    dedent: Pr,
    hardlineWithoutBreakParent: ke,
    literallineWithoutBreakParent: Lt,
    label: Mr,
    concat: e => e,
  },
  Mi = { printDocToString: Ce },
  Vi = {
    willBreak: xr,
    traverseDoc: Fe,
    findInDoc: Je,
    mapDoc: Oe,
    removeLines: Nr,
    stripTrailingHardline: qe,
    replaceEndOfLine: Or,
    canBreak: Sr,
  };
var cu = '3.5.3';
var cr = {};
vt(cr, {
  addDanglingComment: () => re,
  addLeadingComment: () => ue,
  addTrailingComment: () => ie,
  getAlignmentSize: () => ge,
  getIndentSize: () => fu,
  getMaxContinuousCount: () => du,
  getNextNonSpaceNonCommentCharacter: () => pu,
  getNextNonSpaceNonCommentCharacterIndex: () => no,
  getPreferredQuote: () => mu,
  getStringWidth: () => Le,
  hasNewline: () => V,
  hasNewlineInRange: () => hu,
  hasSpaces: () => Eu,
  isNextLineEmpty: () => so,
  isNextLineEmptyAfterIndex: () => Ct,
  isPreviousLineEmpty: () => io,
  makeString: () => Cu,
  skip: () => Ae,
  skipEverythingButNewLine: () => nt,
  skipInlineComment: () => Be,
  skipNewline: () => W,
  skipSpaces: () => S,
  skipToLineEnd: () => rt,
  skipTrailingComment: () => we,
  skipWhitespace: () => tn,
});
function Ui(e, t) {
  if (t === !1) return !1;
  if (e.charAt(t) === '/' && e.charAt(t + 1) === '*') {
    for (let r = t + 2; r < e.length; ++r)
      if (e.charAt(r) === '*' && e.charAt(r + 1) === '/') return r + 2;
  }
  return t;
}
var Be = Ui;
function zi(e, t) {
  return t === !1 ? !1 : e.charAt(t) === '/' && e.charAt(t + 1) === '/' ? nt(e, t) : t;
}
var we = zi;
function Gi(e, t) {
  let r = null,
    n = t;
  for (; n !== r; ) (r = n), (n = S(e, n)), (n = Be(e, n)), (n = we(e, n)), (n = W(e, n));
  return n;
}
var We = Gi;
function Ki(e, t) {
  let r = null,
    n = t;
  for (; n !== r; ) (r = n), (n = rt(e, n)), (n = Be(e, n)), (n = S(e, n));
  return (n = we(e, n)), (n = W(e, n)), n !== !1 && V(e, n);
}
var Ct = Ki;
function Ji(e, t) {
  let r = e.lastIndexOf(`
`);
  return r === -1 ? 0 : ge(e.slice(r + 1).match(/^[\t ]*/u)[0], t);
}
var fu = Ji;
function lr(e) {
  if (typeof e != 'string') throw new TypeError('Expected a string');
  return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
function qi(e, t) {
  let r = e.match(new RegExp(`(${lr(t)})+`, 'gu'));
  return r === null ? 0 : r.reduce((n, u) => Math.max(n, u.length / t.length), 0);
}
var du = qi;
function Xi(e, t) {
  let r = We(e, t);
  return r === !1 ? '' : e.charAt(r);
}
var pu = Xi;
var gt = "'",
  Fu = '"';
function Qi(e, t) {
  let r = t === !0 || t === gt ? gt : Fu,
    n = r === gt ? Fu : gt,
    u = 0,
    i = 0;
  for (let o of e) o === r ? u++ : o === n && i++;
  return u > i ? n : r;
}
var mu = Qi;
function Zi(e, t, r) {
  for (let n = t; n < r; ++n)
    if (
      e.charAt(n) ===
      `
`
    )
      return !0;
  return !1;
}
var hu = Zi;
function eo(e, t, r = {}) {
  return S(e, r.backwards ? t - 1 : t, r) !== t;
}
var Eu = eo;
function to(e, t, r) {
  let n = t === '"' ? "'" : '"',
    i = ne(!1, e, /\\(.)|(["'])/gsu, (o, s, a) =>
      s === n
        ? s
        : a === t
          ? '\\' + a
          : a || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s) ? s : '\\' + s)
    );
  return t + i + t;
}
var Cu = to;
function ro(e, t, r) {
  return We(e, r(t));
}
function no(e, t) {
  return arguments.length === 2 || typeof t == 'number' ? We(e, t) : ro(...arguments);
}
function uo(e, t, r) {
  return Ie(e, r(t));
}
function io(e, t) {
  return arguments.length === 2 || typeof t == 'number' ? Ie(e, t) : uo(...arguments);
}
function oo(e, t, r) {
  return Ct(e, r(t));
}
function so(e, t) {
  return arguments.length === 2 || typeof t == 'number' ? Ct(e, t) : oo(...arguments);
}
function de(e, t = 1) {
  return async (...r) => {
    let n = r[t] ?? {},
      u = n.plugins ?? [];
    return (r[t] = { ...n, plugins: Array.isArray(u) ? u : Object.values(u) }), e(...r);
  };
}
var gu = de(ar);
async function yu(e, t) {
  let { formatted: r } = await gu(e, { ...t, cursorOffset: -1 });
  return r;
}
async function ao(e, t) {
  return (await yu(e, t)) === e;
}
var Do = de(it, 0),
  lo = {
    parse: de(ou),
    formatAST: de(su),
    formatDoc: de(au),
    printToDoc: de(Du),
    printDocToString: de(lu),
  };
var mc = fr;
export {
  lo as __debug,
  ao as check,
  mc as default,
  Dr as doc,
  yu as format,
  gu as formatWithCursor,
  Do as getSupportInfo,
  cr as util,
  cu as version,
};
