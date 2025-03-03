(function (n) {
  function e() {
    var i = n();
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
    (t.prettierPlugins = t.prettierPlugins || {}), (t.prettierPlugins.markdown = e());
  }
})(function () {
  'use strict';
  var ll = Object.create;
  var kr = Object.defineProperty;
  var fl = Object.getOwnPropertyDescriptor;
  var Dl = Object.getOwnPropertyNames;
  var pl = Object.getPrototypeOf,
    hl = Object.prototype.hasOwnProperty;
  var zn = e => {
    throw TypeError(e);
  };
  var C = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports),
    Yn = (e, r) => {
      for (var t in r) kr(e, t, { get: r[t], enumerable: !0 });
    },
    Gn = (e, r, t, n) => {
      if ((r && typeof r == 'object') || typeof r == 'function')
        for (let a of Dl(r))
          !hl.call(e, a) &&
            a !== t &&
            kr(e, a, { get: () => r[a], enumerable: !(n = fl(r, a)) || n.enumerable });
      return e;
    };
  var Ue = (e, r, t) => (
      (t = e != null ? ll(pl(e)) : {}),
      Gn(r || !e || !e.__esModule ? kr(t, 'default', { value: e, enumerable: !0 }) : t, e)
    ),
    dl = e => Gn(kr({}, '__esModule', { value: !0 }), e);
  var Vn = (e, r, t) => r.has(e) || zn('Cannot ' + t);
  var ce = (e, r, t) => (Vn(e, r, 'read from private field'), t ? t.call(e) : r.get(e)),
    jn = (e, r, t) =>
      r.has(e)
        ? zn('Cannot add the same private member more than once')
        : r instanceof WeakSet
          ? r.add(e)
          : r.set(e, t),
    $n = (e, r, t, n) => (Vn(e, r, 'write to private field'), n ? n.call(e, t) : r.set(e, t), t);
  var Br = C((Vm, Wn) => {
    'use strict';
    Wn.exports = gl;
    function gl(e) {
      return String(e).replace(/\s+/g, ' ');
    }
  });
  var Vi = C((Tv, Gi) => {
    'use strict';
    Gi.exports = xf;
    var Dr = 9,
      Mr = 10,
      je = 32,
      bf = 33,
      yf = 58,
      $e = 91,
      Af = 92,
      St = 93,
      pr = 94,
      zr = 96,
      Yr = 4,
      wf = 1024;
    function xf(e) {
      var r = this.Parser,
        t = this.Compiler;
      kf(r) && Tf(r, e), Bf(t) && qf(t);
    }
    function kf(e) {
      return !!(e && e.prototype && e.prototype.blockTokenizers);
    }
    function Bf(e) {
      return !!(e && e.prototype && e.prototype.visitors);
    }
    function Tf(e, r) {
      for (
        var t = r || {},
          n = e.prototype,
          a = n.blockTokenizers,
          u = n.inlineTokenizers,
          i = n.blockMethods,
          o = n.inlineMethods,
          s = a.definition,
          l = u.reference,
          c = [],
          f = -1,
          p = i.length,
          d;
        ++f < p;

      )
        (d = i[f]),
          !(
            d === 'newline' ||
            d === 'indentedCode' ||
            d === 'paragraph' ||
            d === 'footnoteDefinition'
          ) && c.push([d]);
      c.push(['footnoteDefinition']),
        t.inlineNotes && (Ot(o, 'reference', 'inlineNote'), (u.inlineNote = m)),
        Ot(i, 'definition', 'footnoteDefinition'),
        Ot(o, 'reference', 'footnoteCall'),
        (a.definition = y),
        (a.footnoteDefinition = D),
        (u.footnoteCall = h),
        (u.reference = F),
        (n.interruptFootnoteDefinition = c),
        (F.locator = l.locator),
        (h.locator = E),
        (m.locator = B);
      function D(b, g, A) {
        for (
          var w = this,
            v = w.interruptFootnoteDefinition,
            x = w.offset,
            k = g.length + 1,
            T = 0,
            q = [],
            R,
            O,
            S,
            _,
            L,
            Be,
            W,
            I,
            ee,
            Z,
            ve,
            Ee,
            M;
          T < k && ((_ = g.charCodeAt(T)), !(_ !== Dr && _ !== je));

        )
          T++;
        if (g.charCodeAt(T++) === $e && g.charCodeAt(T++) === pr) {
          for (O = T; T < k; ) {
            if (((_ = g.charCodeAt(T)), _ !== _ || _ === Mr || _ === Dr || _ === je)) return;
            if (_ === St) {
              (S = T), T++;
              break;
            }
            T++;
          }
          if (!(S === void 0 || O === S || g.charCodeAt(T++) !== yf)) {
            if (A) return !0;
            for (R = g.slice(O, S), L = b.now(), ee = 0, Z = 0, ve = T, Ee = []; T < k; ) {
              if (((_ = g.charCodeAt(T)), _ !== _ || _ === Mr))
                (M = { start: ee, contentStart: ve || T, contentEnd: T, end: T }),
                  Ee.push(M),
                  _ === Mr && ((ee = T + 1), (Z = 0), (ve = void 0), (M.end = ee));
              else if (Z !== void 0)
                if (_ === je || _ === Dr)
                  (Z += _ === je ? 1 : Yr - (Z % Yr)), Z > Yr && ((Z = void 0), (ve = T));
                else {
                  if (
                    Z < Yr &&
                    M &&
                    (M.contentStart === M.contentEnd || _f(v, a, w, [b, g.slice(T, wf), !0]))
                  )
                    break;
                  (Z = void 0), (ve = T);
                }
              T++;
            }
            for (
              T = -1, k = Ee.length;
              k > 0 && ((M = Ee[k - 1]), M.contentStart === M.contentEnd);

            )
              k--;
            for (Be = b(g.slice(0, M.contentEnd)); ++T < k; )
              (M = Ee[T]),
                (x[L.line + T] = (x[L.line + T] || 0) + (M.contentStart - M.start)),
                q.push(g.slice(M.contentStart, M.end));
            return (
              (W = w.enterBlock()),
              (I = w.tokenizeBlock(q.join(''), L)),
              W(),
              Be({ type: 'footnoteDefinition', identifier: R.toLowerCase(), label: R, children: I })
            );
          }
        }
      }
      function h(b, g, A) {
        var w = g.length + 1,
          v = 0,
          x,
          k,
          T,
          q;
        if (g.charCodeAt(v++) === $e && g.charCodeAt(v++) === pr) {
          for (k = v; v < w; ) {
            if (((q = g.charCodeAt(v)), q !== q || q === Mr || q === Dr || q === je)) return;
            if (q === St) {
              (T = v), v++;
              break;
            }
            v++;
          }
          if (!(T === void 0 || k === T))
            return A
              ? !0
              : ((x = g.slice(k, T)),
                b(g.slice(0, v))({
                  type: 'footnoteReference',
                  identifier: x.toLowerCase(),
                  label: x,
                }));
        }
      }
      function m(b, g, A) {
        var w = this,
          v = g.length + 1,
          x = 0,
          k = 0,
          T,
          q,
          R,
          O,
          S,
          _,
          L;
        if (g.charCodeAt(x++) === pr && g.charCodeAt(x++) === $e) {
          for (R = x; x < v; ) {
            if (((q = g.charCodeAt(x)), q !== q)) return;
            if (_ === void 0)
              if (q === Af) x += 2;
              else if (q === $e) k++, x++;
              else if (q === St)
                if (k === 0) {
                  (O = x), x++;
                  break;
                } else k--, x++;
              else if (q === zr) {
                for (S = x, _ = 1; g.charCodeAt(S + _) === zr; ) _++;
                x += _;
              } else x++;
            else if (q === zr) {
              for (S = x, L = 1; g.charCodeAt(S + L) === zr; ) L++;
              (x += L), _ === L && (_ = void 0), (L = void 0);
            } else x++;
          }
          if (O !== void 0)
            return A
              ? !0
              : ((T = b.now()),
                (T.column += 2),
                (T.offset += 2),
                b(g.slice(0, x))({
                  type: 'footnote',
                  children: w.tokenizeInline(g.slice(R, O), T),
                }));
        }
      }
      function F(b, g, A) {
        var w = 0;
        if ((g.charCodeAt(w) === bf && w++, g.charCodeAt(w) === $e && g.charCodeAt(w + 1) !== pr))
          return l.call(this, b, g, A);
      }
      function y(b, g, A) {
        for (var w = 0, v = g.charCodeAt(w); v === je || v === Dr; ) v = g.charCodeAt(++w);
        if (v === $e && g.charCodeAt(w + 1) !== pr) return s.call(this, b, g, A);
      }
      function E(b, g) {
        return b.indexOf('[', g);
      }
      function B(b, g) {
        return b.indexOf('^[', g);
      }
    }
    function qf(e) {
      var r = e.prototype.visitors,
        t = '    ';
      (r.footnote = n), (r.footnoteReference = a), (r.footnoteDefinition = u);
      function n(i) {
        return '^[' + this.all(i).join('') + ']';
      }
      function a(i) {
        return '[^' + (i.label || i.identifier) + ']';
      }
      function u(i) {
        for (
          var o = this.all(i).join(`

`).split(`
`),
            s = 0,
            l = o.length,
            c;
          ++s < l;

        )
          (c = o[s]), c !== '' && (o[s] = t + c);
        return (
          '[^' +
          (i.label || i.identifier) +
          ']: ' +
          o.join(`
`)
        );
      }
    }
    function Ot(e, r, t) {
      e.splice(e.indexOf(r), 0, t);
    }
    function _f(e, r, t, n) {
      for (var a = e.length, u = -1; ++u < a; ) if (r[e[u][0]].apply(t, n)) return !0;
      return !1;
    }
  });
  var Pt = C(Lt => {
    Lt.isRemarkParser = Sf;
    Lt.isRemarkCompiler = Of;
    function Sf(e) {
      return !!(e && e.prototype && e.prototype.blockTokenizers);
    }
    function Of(e) {
      return !!(e && e.prototype && e.prototype.visitors);
    }
  });
  var Xi = C((_v, Ji) => {
    var ji = Pt();
    Ji.exports = Nf;
    var $i = 9,
      Wi = 32,
      Gr = 36,
      Lf = 48,
      Pf = 57,
      Hi = 92,
      If = ['math', 'math-inline'],
      Ki = 'math-display';
    function Nf(e) {
      let r = this.Parser,
        t = this.Compiler;
      ji.isRemarkParser(r) && Rf(r, e), ji.isRemarkCompiler(t) && Uf(t, e);
    }
    function Rf(e, r) {
      let t = e.prototype,
        n = t.inlineMethods;
      (u.locator = a), (t.inlineTokenizers.math = u), n.splice(n.indexOf('text'), 0, 'math');
      function a(i, o) {
        return i.indexOf('$', o);
      }
      function u(i, o, s) {
        let l = o.length,
          c = !1,
          f = !1,
          p = 0,
          d,
          D,
          h,
          m,
          F,
          y,
          E;
        if ((o.charCodeAt(p) === Hi && ((f = !0), p++), o.charCodeAt(p) === Gr)) {
          if ((p++, f)) return s ? !0 : i(o.slice(0, p))({ type: 'text', value: '$' });
          if (
            (o.charCodeAt(p) === Gr && ((c = !0), p++),
            (h = o.charCodeAt(p)),
            !(h === Wi || h === $i))
          ) {
            for (m = p; p < l; ) {
              if (((D = h), (h = o.charCodeAt(p + 1)), D === Gr)) {
                if (
                  ((d = o.charCodeAt(p - 1)),
                  d !== Wi && d !== $i && (h !== h || h < Lf || h > Pf) && (!c || h === Gr))
                ) {
                  (F = p - 1), p++, c && p++, (y = p);
                  break;
                }
              } else D === Hi && (p++, (h = o.charCodeAt(p + 1)));
              p++;
            }
            if (y !== void 0)
              return s
                ? !0
                : ((E = o.slice(m, F + 1)),
                  i(o.slice(0, y))({
                    type: 'inlineMath',
                    value: E,
                    data: {
                      hName: 'span',
                      hProperties: { className: If.concat(c && r.inlineMathDouble ? [Ki] : []) },
                      hChildren: [{ type: 'text', value: E }],
                    },
                  }));
          }
        }
      }
    }
    function Uf(e) {
      let r = e.prototype;
      r.visitors.inlineMath = t;
      function t(n) {
        let a = '$';
        return (
          ((n.data && n.data.hProperties && n.data.hProperties.className) || []).includes(Ki) &&
            (a = '$$'),
          a + n.value + a
        );
      }
    }
  });
  var tu = C((Sv, ru) => {
    var Qi = Pt();
    ru.exports = Gf;
    var Zi = 10,
      hr = 32,
      It = 36,
      eu = `
`,
      Mf = '$',
      zf = 2,
      Yf = ['math', 'math-display'];
    function Gf() {
      let e = this.Parser,
        r = this.Compiler;
      Qi.isRemarkParser(e) && Vf(e), Qi.isRemarkCompiler(r) && jf(r);
    }
    function Vf(e) {
      let r = e.prototype,
        t = r.blockMethods,
        n = r.interruptParagraph,
        a = r.interruptList,
        u = r.interruptBlockquote;
      (r.blockTokenizers.math = i),
        t.splice(t.indexOf('fencedCode') + 1, 0, 'math'),
        n.splice(n.indexOf('fencedCode') + 1, 0, ['math']),
        a.splice(a.indexOf('fencedCode') + 1, 0, ['math']),
        u.splice(u.indexOf('fencedCode') + 1, 0, ['math']);
      function i(o, s, l) {
        var c = s.length,
          f = 0;
        let p, d, D, h, m, F, y, E, B, b, g;
        for (; f < c && s.charCodeAt(f) === hr; ) f++;
        for (m = f; f < c && s.charCodeAt(f) === It; ) f++;
        if (((F = f - m), !(F < zf))) {
          for (; f < c && s.charCodeAt(f) === hr; ) f++;
          for (y = f; f < c; ) {
            if (((p = s.charCodeAt(f)), p === It)) return;
            if (p === Zi) break;
            f++;
          }
          if (s.charCodeAt(f) === Zi) {
            if (l) return !0;
            for (
              d = [],
                y !== f && d.push(s.slice(y, f)),
                f++,
                D = s.indexOf(eu, f + 1),
                D = D === -1 ? c : D;
              f < c;

            ) {
              for (E = !1, b = f, g = D, h = D, B = 0; h > b && s.charCodeAt(h - 1) === hr; ) h--;
              for (; h > b && s.charCodeAt(h - 1) === It; ) B++, h--;
              for (
                F <= B && s.indexOf(Mf, b) === h && ((E = !0), (g = h));
                b <= g && b - f < m && s.charCodeAt(b) === hr;

              )
                b++;
              if (E) for (; g > b && s.charCodeAt(g - 1) === hr; ) g--;
              if (((!E || b !== g) && d.push(s.slice(b, g)), E)) break;
              (f = D + 1), (D = s.indexOf(eu, f + 1)), (D = D === -1 ? c : D);
            }
            return (
              (d = d.join(`
`)),
              o(s.slice(0, D))({
                type: 'math',
                value: d,
                data: {
                  hName: 'div',
                  hProperties: { className: Yf.concat() },
                  hChildren: [{ type: 'text', value: d }],
                },
              })
            );
          }
        }
      }
    }
    function jf(e) {
      let r = e.prototype;
      r.visitors.math = t;
      function t(n) {
        return (
          `$$
` +
          n.value +
          `
$$`
        );
      }
    }
  });
  var iu = C((Ov, nu) => {
    var $f = Xi(),
      Wf = tu();
    nu.exports = Hf;
    function Hf(e) {
      var r = e || {};
      Wf.call(this, r), $f.call(this, r);
    }
  });
  var Ie = C((Lv, uu) => {
    uu.exports = Jf;
    var Kf = Object.prototype.hasOwnProperty;
    function Jf() {
      for (var e = {}, r = 0; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t) Kf.call(t, n) && (e[n] = t[n]);
      }
      return e;
    }
  });
  var au = C((Pv, Nt) => {
    typeof Object.create == 'function'
      ? (Nt.exports = function (r, t) {
          t &&
            ((r.super_ = t),
            (r.prototype = Object.create(t.prototype, {
              constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
            })));
        })
      : (Nt.exports = function (r, t) {
          if (t) {
            r.super_ = t;
            var n = function () {};
            (n.prototype = t.prototype), (r.prototype = new n()), (r.prototype.constructor = r);
          }
        });
  });
  var cu = C((Iv, su) => {
    'use strict';
    var Xf = Ie(),
      ou = au();
    su.exports = Qf;
    function Qf(e) {
      var r, t, n;
      ou(u, e), ou(a, u), (r = u.prototype);
      for (t in r)
        (n = r[t]), n && typeof n == 'object' && (r[t] = 'concat' in n ? n.concat() : Xf(n));
      return u;
      function a(i) {
        return e.apply(this, i);
      }
      function u() {
        return this instanceof u ? e.apply(this, arguments) : new a(arguments);
      }
    }
  });
  var fu = C((Nv, lu) => {
    'use strict';
    lu.exports = Zf;
    function Zf(e, r, t) {
      return n;
      function n() {
        var a = t || this,
          u = a[e];
        return (a[e] = !r), i;
        function i() {
          a[e] = u;
        }
      }
    }
  });
  var pu = C((Rv, Du) => {
    'use strict';
    Du.exports = eD;
    function eD(e) {
      for (var r = String(e), t = [], n = /\r?\n|\r/g; n.exec(r); ) t.push(n.lastIndex);
      return t.push(r.length + 1), { toPoint: a, toPosition: a, toOffset: u };
      function a(i) {
        var o = -1;
        if (i > -1 && i < t[t.length - 1]) {
          for (; ++o < t.length; )
            if (t[o] > i) return { line: o + 1, column: i - (t[o - 1] || 0) + 1, offset: i };
        }
        return {};
      }
      function u(i) {
        var o = i && i.line,
          s = i && i.column,
          l;
        return (
          !isNaN(o) && !isNaN(s) && o - 1 in t && (l = (t[o - 2] || 0) + s - 1 || 0),
          l > -1 && l < t[t.length - 1] ? l : -1
        );
      }
    }
  });
  var du = C((Uv, hu) => {
    'use strict';
    hu.exports = rD;
    var Rt = '\\';
    function rD(e, r) {
      return t;
      function t(n) {
        for (var a = 0, u = n.indexOf(Rt), i = e[r], o = [], s; u !== -1; )
          o.push(n.slice(a, u)),
            (a = u + 1),
            (s = n.charAt(a)),
            (!s || i.indexOf(s) === -1) && o.push(Rt),
            (u = n.indexOf(Rt, a + 1));
        return o.push(n.slice(a)), o.join('');
      }
    }
  });
  var mu = C((Mv, tD) => {
    tD.exports = {
      AElig: '\xC6',
      AMP: '&',
      Aacute: '\xC1',
      Acirc: '\xC2',
      Agrave: '\xC0',
      Aring: '\xC5',
      Atilde: '\xC3',
      Auml: '\xC4',
      COPY: '\xA9',
      Ccedil: '\xC7',
      ETH: '\xD0',
      Eacute: '\xC9',
      Ecirc: '\xCA',
      Egrave: '\xC8',
      Euml: '\xCB',
      GT: '>',
      Iacute: '\xCD',
      Icirc: '\xCE',
      Igrave: '\xCC',
      Iuml: '\xCF',
      LT: '<',
      Ntilde: '\xD1',
      Oacute: '\xD3',
      Ocirc: '\xD4',
      Ograve: '\xD2',
      Oslash: '\xD8',
      Otilde: '\xD5',
      Ouml: '\xD6',
      QUOT: '"',
      REG: '\xAE',
      THORN: '\xDE',
      Uacute: '\xDA',
      Ucirc: '\xDB',
      Ugrave: '\xD9',
      Uuml: '\xDC',
      Yacute: '\xDD',
      aacute: '\xE1',
      acirc: '\xE2',
      acute: '\xB4',
      aelig: '\xE6',
      agrave: '\xE0',
      amp: '&',
      aring: '\xE5',
      atilde: '\xE3',
      auml: '\xE4',
      brvbar: '\xA6',
      ccedil: '\xE7',
      cedil: '\xB8',
      cent: '\xA2',
      copy: '\xA9',
      curren: '\xA4',
      deg: '\xB0',
      divide: '\xF7',
      eacute: '\xE9',
      ecirc: '\xEA',
      egrave: '\xE8',
      eth: '\xF0',
      euml: '\xEB',
      frac12: '\xBD',
      frac14: '\xBC',
      frac34: '\xBE',
      gt: '>',
      iacute: '\xED',
      icirc: '\xEE',
      iexcl: '\xA1',
      igrave: '\xEC',
      iquest: '\xBF',
      iuml: '\xEF',
      laquo: '\xAB',
      lt: '<',
      macr: '\xAF',
      micro: '\xB5',
      middot: '\xB7',
      nbsp: '\xA0',
      not: '\xAC',
      ntilde: '\xF1',
      oacute: '\xF3',
      ocirc: '\xF4',
      ograve: '\xF2',
      ordf: '\xAA',
      ordm: '\xBA',
      oslash: '\xF8',
      otilde: '\xF5',
      ouml: '\xF6',
      para: '\xB6',
      plusmn: '\xB1',
      pound: '\xA3',
      quot: '"',
      raquo: '\xBB',
      reg: '\xAE',
      sect: '\xA7',
      shy: '\xAD',
      sup1: '\xB9',
      sup2: '\xB2',
      sup3: '\xB3',
      szlig: '\xDF',
      thorn: '\xFE',
      times: '\xD7',
      uacute: '\xFA',
      ucirc: '\xFB',
      ugrave: '\xF9',
      uml: '\xA8',
      uuml: '\xFC',
      yacute: '\xFD',
      yen: '\xA5',
      yuml: '\xFF',
    };
  });
  var Fu = C((zv, nD) => {
    nD.exports = {
      0: '\uFFFD',
      128: '\u20AC',
      130: '\u201A',
      131: '\u0192',
      132: '\u201E',
      133: '\u2026',
      134: '\u2020',
      135: '\u2021',
      136: '\u02C6',
      137: '\u2030',
      138: '\u0160',
      139: '\u2039',
      140: '\u0152',
      142: '\u017D',
      145: '\u2018',
      146: '\u2019',
      147: '\u201C',
      148: '\u201D',
      149: '\u2022',
      150: '\u2013',
      151: '\u2014',
      152: '\u02DC',
      153: '\u2122',
      154: '\u0161',
      155: '\u203A',
      156: '\u0153',
      158: '\u017E',
      159: '\u0178',
    };
  });
  var Ne = C((Yv, gu) => {
    'use strict';
    gu.exports = iD;
    function iD(e) {
      var r = typeof e == 'string' ? e.charCodeAt(0) : e;
      return r >= 48 && r <= 57;
    }
  });
  var Eu = C((Gv, vu) => {
    'use strict';
    vu.exports = uD;
    function uD(e) {
      var r = typeof e == 'string' ? e.charCodeAt(0) : e;
      return (r >= 97 && r <= 102) || (r >= 65 && r <= 70) || (r >= 48 && r <= 57);
    }
  });
  var We = C((Vv, Cu) => {
    'use strict';
    Cu.exports = aD;
    function aD(e) {
      var r = typeof e == 'string' ? e.charCodeAt(0) : e;
      return (r >= 97 && r <= 122) || (r >= 65 && r <= 90);
    }
  });
  var yu = C((jv, bu) => {
    'use strict';
    var oD = We(),
      sD = Ne();
    bu.exports = cD;
    function cD(e) {
      return oD(e) || sD(e);
    }
  });
  var Au = C(($v, lD) => {
    lD.exports = {
      AEli: '\xC6',
      AElig: '\xC6',
      AM: '&',
      AMP: '&',
      Aacut: '\xC1',
      Aacute: '\xC1',
      Abreve: '\u0102',
      Acir: '\xC2',
      Acirc: '\xC2',
      Acy: '\u0410',
      Afr: '\u{1D504}',
      Agrav: '\xC0',
      Agrave: '\xC0',
      Alpha: '\u0391',
      Amacr: '\u0100',
      And: '\u2A53',
      Aogon: '\u0104',
      Aopf: '\u{1D538}',
      ApplyFunction: '\u2061',
      Arin: '\xC5',
      Aring: '\xC5',
      Ascr: '\u{1D49C}',
      Assign: '\u2254',
      Atild: '\xC3',
      Atilde: '\xC3',
      Aum: '\xC4',
      Auml: '\xC4',
      Backslash: '\u2216',
      Barv: '\u2AE7',
      Barwed: '\u2306',
      Bcy: '\u0411',
      Because: '\u2235',
      Bernoullis: '\u212C',
      Beta: '\u0392',
      Bfr: '\u{1D505}',
      Bopf: '\u{1D539}',
      Breve: '\u02D8',
      Bscr: '\u212C',
      Bumpeq: '\u224E',
      CHcy: '\u0427',
      COP: '\xA9',
      COPY: '\xA9',
      Cacute: '\u0106',
      Cap: '\u22D2',
      CapitalDifferentialD: '\u2145',
      Cayleys: '\u212D',
      Ccaron: '\u010C',
      Ccedi: '\xC7',
      Ccedil: '\xC7',
      Ccirc: '\u0108',
      Cconint: '\u2230',
      Cdot: '\u010A',
      Cedilla: '\xB8',
      CenterDot: '\xB7',
      Cfr: '\u212D',
      Chi: '\u03A7',
      CircleDot: '\u2299',
      CircleMinus: '\u2296',
      CirclePlus: '\u2295',
      CircleTimes: '\u2297',
      ClockwiseContourIntegral: '\u2232',
      CloseCurlyDoubleQuote: '\u201D',
      CloseCurlyQuote: '\u2019',
      Colon: '\u2237',
      Colone: '\u2A74',
      Congruent: '\u2261',
      Conint: '\u222F',
      ContourIntegral: '\u222E',
      Copf: '\u2102',
      Coproduct: '\u2210',
      CounterClockwiseContourIntegral: '\u2233',
      Cross: '\u2A2F',
      Cscr: '\u{1D49E}',
      Cup: '\u22D3',
      CupCap: '\u224D',
      DD: '\u2145',
      DDotrahd: '\u2911',
      DJcy: '\u0402',
      DScy: '\u0405',
      DZcy: '\u040F',
      Dagger: '\u2021',
      Darr: '\u21A1',
      Dashv: '\u2AE4',
      Dcaron: '\u010E',
      Dcy: '\u0414',
      Del: '\u2207',
      Delta: '\u0394',
      Dfr: '\u{1D507}',
      DiacriticalAcute: '\xB4',
      DiacriticalDot: '\u02D9',
      DiacriticalDoubleAcute: '\u02DD',
      DiacriticalGrave: '`',
      DiacriticalTilde: '\u02DC',
      Diamond: '\u22C4',
      DifferentialD: '\u2146',
      Dopf: '\u{1D53B}',
      Dot: '\xA8',
      DotDot: '\u20DC',
      DotEqual: '\u2250',
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
      DownArrow: '\u2193',
      DownArrowBar: '\u2913',
      DownArrowUpArrow: '\u21F5',
      DownBreve: '\u0311',
      DownLeftRightVector: '\u2950',
      DownLeftTeeVector: '\u295E',
      DownLeftVector: '\u21BD',
      DownLeftVectorBar: '\u2956',
      DownRightTeeVector: '\u295F',
      DownRightVector: '\u21C1',
      DownRightVectorBar: '\u2957',
      DownTee: '\u22A4',
      DownTeeArrow: '\u21A7',
      Downarrow: '\u21D3',
      Dscr: '\u{1D49F}',
      Dstrok: '\u0110',
      ENG: '\u014A',
      ET: '\xD0',
      ETH: '\xD0',
      Eacut: '\xC9',
      Eacute: '\xC9',
      Ecaron: '\u011A',
      Ecir: '\xCA',
      Ecirc: '\xCA',
      Ecy: '\u042D',
      Edot: '\u0116',
      Efr: '\u{1D508}',
      Egrav: '\xC8',
      Egrave: '\xC8',
      Element: '\u2208',
      Emacr: '\u0112',
      EmptySmallSquare: '\u25FB',
      EmptyVerySmallSquare: '\u25AB',
      Eogon: '\u0118',
      Eopf: '\u{1D53C}',
      Epsilon: '\u0395',
      Equal: '\u2A75',
      EqualTilde: '\u2242',
      Equilibrium: '\u21CC',
      Escr: '\u2130',
      Esim: '\u2A73',
      Eta: '\u0397',
      Eum: '\xCB',
      Euml: '\xCB',
      Exists: '\u2203',
      ExponentialE: '\u2147',
      Fcy: '\u0424',
      Ffr: '\u{1D509}',
      FilledSmallSquare: '\u25FC',
      FilledVerySmallSquare: '\u25AA',
      Fopf: '\u{1D53D}',
      ForAll: '\u2200',
      Fouriertrf: '\u2131',
      Fscr: '\u2131',
      GJcy: '\u0403',
      G: '>',
      GT: '>',
      Gamma: '\u0393',
      Gammad: '\u03DC',
      Gbreve: '\u011E',
      Gcedil: '\u0122',
      Gcirc: '\u011C',
      Gcy: '\u0413',
      Gdot: '\u0120',
      Gfr: '\u{1D50A}',
      Gg: '\u22D9',
      Gopf: '\u{1D53E}',
      GreaterEqual: '\u2265',
      GreaterEqualLess: '\u22DB',
      GreaterFullEqual: '\u2267',
      GreaterGreater: '\u2AA2',
      GreaterLess: '\u2277',
      GreaterSlantEqual: '\u2A7E',
      GreaterTilde: '\u2273',
      Gscr: '\u{1D4A2}',
      Gt: '\u226B',
      HARDcy: '\u042A',
      Hacek: '\u02C7',
      Hat: '^',
      Hcirc: '\u0124',
      Hfr: '\u210C',
      HilbertSpace: '\u210B',
      Hopf: '\u210D',
      HorizontalLine: '\u2500',
      Hscr: '\u210B',
      Hstrok: '\u0126',
      HumpDownHump: '\u224E',
      HumpEqual: '\u224F',
      IEcy: '\u0415',
      IJlig: '\u0132',
      IOcy: '\u0401',
      Iacut: '\xCD',
      Iacute: '\xCD',
      Icir: '\xCE',
      Icirc: '\xCE',
      Icy: '\u0418',
      Idot: '\u0130',
      Ifr: '\u2111',
      Igrav: '\xCC',
      Igrave: '\xCC',
      Im: '\u2111',
      Imacr: '\u012A',
      ImaginaryI: '\u2148',
      Implies: '\u21D2',
      Int: '\u222C',
      Integral: '\u222B',
      Intersection: '\u22C2',
      InvisibleComma: '\u2063',
      InvisibleTimes: '\u2062',
      Iogon: '\u012E',
      Iopf: '\u{1D540}',
      Iota: '\u0399',
      Iscr: '\u2110',
      Itilde: '\u0128',
      Iukcy: '\u0406',
      Ium: '\xCF',
      Iuml: '\xCF',
      Jcirc: '\u0134',
      Jcy: '\u0419',
      Jfr: '\u{1D50D}',
      Jopf: '\u{1D541}',
      Jscr: '\u{1D4A5}',
      Jsercy: '\u0408',
      Jukcy: '\u0404',
      KHcy: '\u0425',
      KJcy: '\u040C',
      Kappa: '\u039A',
      Kcedil: '\u0136',
      Kcy: '\u041A',
      Kfr: '\u{1D50E}',
      Kopf: '\u{1D542}',
      Kscr: '\u{1D4A6}',
      LJcy: '\u0409',
      L: '<',
      LT: '<',
      Lacute: '\u0139',
      Lambda: '\u039B',
      Lang: '\u27EA',
      Laplacetrf: '\u2112',
      Larr: '\u219E',
      Lcaron: '\u013D',
      Lcedil: '\u013B',
      Lcy: '\u041B',
      LeftAngleBracket: '\u27E8',
      LeftArrow: '\u2190',
      LeftArrowBar: '\u21E4',
      LeftArrowRightArrow: '\u21C6',
      LeftCeiling: '\u2308',
      LeftDoubleBracket: '\u27E6',
      LeftDownTeeVector: '\u2961',
      LeftDownVector: '\u21C3',
      LeftDownVectorBar: '\u2959',
      LeftFloor: '\u230A',
      LeftRightArrow: '\u2194',
      LeftRightVector: '\u294E',
      LeftTee: '\u22A3',
      LeftTeeArrow: '\u21A4',
      LeftTeeVector: '\u295A',
      LeftTriangle: '\u22B2',
      LeftTriangleBar: '\u29CF',
      LeftTriangleEqual: '\u22B4',
      LeftUpDownVector: '\u2951',
      LeftUpTeeVector: '\u2960',
      LeftUpVector: '\u21BF',
      LeftUpVectorBar: '\u2958',
      LeftVector: '\u21BC',
      LeftVectorBar: '\u2952',
      Leftarrow: '\u21D0',
      Leftrightarrow: '\u21D4',
      LessEqualGreater: '\u22DA',
      LessFullEqual: '\u2266',
      LessGreater: '\u2276',
      LessLess: '\u2AA1',
      LessSlantEqual: '\u2A7D',
      LessTilde: '\u2272',
      Lfr: '\u{1D50F}',
      Ll: '\u22D8',
      Lleftarrow: '\u21DA',
      Lmidot: '\u013F',
      LongLeftArrow: '\u27F5',
      LongLeftRightArrow: '\u27F7',
      LongRightArrow: '\u27F6',
      Longleftarrow: '\u27F8',
      Longleftrightarrow: '\u27FA',
      Longrightarrow: '\u27F9',
      Lopf: '\u{1D543}',
      LowerLeftArrow: '\u2199',
      LowerRightArrow: '\u2198',
      Lscr: '\u2112',
      Lsh: '\u21B0',
      Lstrok: '\u0141',
      Lt: '\u226A',
      Map: '\u2905',
      Mcy: '\u041C',
      MediumSpace: '\u205F',
      Mellintrf: '\u2133',
      Mfr: '\u{1D510}',
      MinusPlus: '\u2213',
      Mopf: '\u{1D544}',
      Mscr: '\u2133',
      Mu: '\u039C',
      NJcy: '\u040A',
      Nacute: '\u0143',
      Ncaron: '\u0147',
      Ncedil: '\u0145',
      Ncy: '\u041D',
      NegativeMediumSpace: '\u200B',
      NegativeThickSpace: '\u200B',
      NegativeThinSpace: '\u200B',
      NegativeVeryThinSpace: '\u200B',
      NestedGreaterGreater: '\u226B',
      NestedLessLess: '\u226A',
      NewLine: `
`,
      Nfr: '\u{1D511}',
      NoBreak: '\u2060',
      NonBreakingSpace: '\xA0',
      Nopf: '\u2115',
      Not: '\u2AEC',
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
      NotLeftTriangle: '\u22EA',
      NotLeftTriangleBar: '\u29CF\u0338',
      NotLeftTriangleEqual: '\u22EC',
      NotLess: '\u226E',
      NotLessEqual: '\u2270',
      NotLessGreater: '\u2278',
      NotLessLess: '\u226A\u0338',
      NotLessSlantEqual: '\u2A7D\u0338',
      NotLessTilde: '\u2274',
      NotNestedGreaterGreater: '\u2AA2\u0338',
      NotNestedLessLess: '\u2AA1\u0338',
      NotPrecedes: '\u2280',
      NotPrecedesEqual: '\u2AAF\u0338',
      NotPrecedesSlantEqual: '\u22E0',
      NotReverseElement: '\u220C',
      NotRightTriangle: '\u22EB',
      NotRightTriangleBar: '\u29D0\u0338',
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
      Nscr: '\u{1D4A9}',
      Ntild: '\xD1',
      Ntilde: '\xD1',
      Nu: '\u039D',
      OElig: '\u0152',
      Oacut: '\xD3',
      Oacute: '\xD3',
      Ocir: '\xD4',
      Ocirc: '\xD4',
      Ocy: '\u041E',
      Odblac: '\u0150',
      Ofr: '\u{1D512}',
      Ograv: '\xD2',
      Ograve: '\xD2',
      Omacr: '\u014C',
      Omega: '\u03A9',
      Omicron: '\u039F',
      Oopf: '\u{1D546}',
      OpenCurlyDoubleQuote: '\u201C',
      OpenCurlyQuote: '\u2018',
      Or: '\u2A54',
      Oscr: '\u{1D4AA}',
      Oslas: '\xD8',
      Oslash: '\xD8',
      Otild: '\xD5',
      Otilde: '\xD5',
      Otimes: '\u2A37',
      Oum: '\xD6',
      Ouml: '\xD6',
      OverBar: '\u203E',
      OverBrace: '\u23DE',
      OverBracket: '\u23B4',
      OverParenthesis: '\u23DC',
      PartialD: '\u2202',
      Pcy: '\u041F',
      Pfr: '\u{1D513}',
      Phi: '\u03A6',
      Pi: '\u03A0',
      PlusMinus: '\xB1',
      Poincareplane: '\u210C',
      Popf: '\u2119',
      Pr: '\u2ABB',
      Precedes: '\u227A',
      PrecedesEqual: '\u2AAF',
      PrecedesSlantEqual: '\u227C',
      PrecedesTilde: '\u227E',
      Prime: '\u2033',
      Product: '\u220F',
      Proportion: '\u2237',
      Proportional: '\u221D',
      Pscr: '\u{1D4AB}',
      Psi: '\u03A8',
      QUO: '"',
      QUOT: '"',
      Qfr: '\u{1D514}',
      Qopf: '\u211A',
      Qscr: '\u{1D4AC}',
      RBarr: '\u2910',
      RE: '\xAE',
      REG: '\xAE',
      Racute: '\u0154',
      Rang: '\u27EB',
      Rarr: '\u21A0',
      Rarrtl: '\u2916',
      Rcaron: '\u0158',
      Rcedil: '\u0156',
      Rcy: '\u0420',
      Re: '\u211C',
      ReverseElement: '\u220B',
      ReverseEquilibrium: '\u21CB',
      ReverseUpEquilibrium: '\u296F',
      Rfr: '\u211C',
      Rho: '\u03A1',
      RightAngleBracket: '\u27E9',
      RightArrow: '\u2192',
      RightArrowBar: '\u21E5',
      RightArrowLeftArrow: '\u21C4',
      RightCeiling: '\u2309',
      RightDoubleBracket: '\u27E7',
      RightDownTeeVector: '\u295D',
      RightDownVector: '\u21C2',
      RightDownVectorBar: '\u2955',
      RightFloor: '\u230B',
      RightTee: '\u22A2',
      RightTeeArrow: '\u21A6',
      RightTeeVector: '\u295B',
      RightTriangle: '\u22B3',
      RightTriangleBar: '\u29D0',
      RightTriangleEqual: '\u22B5',
      RightUpDownVector: '\u294F',
      RightUpTeeVector: '\u295C',
      RightUpVector: '\u21BE',
      RightUpVectorBar: '\u2954',
      RightVector: '\u21C0',
      RightVectorBar: '\u2953',
      Rightarrow: '\u21D2',
      Ropf: '\u211D',
      RoundImplies: '\u2970',
      Rrightarrow: '\u21DB',
      Rscr: '\u211B',
      Rsh: '\u21B1',
      RuleDelayed: '\u29F4',
      SHCHcy: '\u0429',
      SHcy: '\u0428',
      SOFTcy: '\u042C',
      Sacute: '\u015A',
      Sc: '\u2ABC',
      Scaron: '\u0160',
      Scedil: '\u015E',
      Scirc: '\u015C',
      Scy: '\u0421',
      Sfr: '\u{1D516}',
      ShortDownArrow: '\u2193',
      ShortLeftArrow: '\u2190',
      ShortRightArrow: '\u2192',
      ShortUpArrow: '\u2191',
      Sigma: '\u03A3',
      SmallCircle: '\u2218',
      Sopf: '\u{1D54A}',
      Sqrt: '\u221A',
      Square: '\u25A1',
      SquareIntersection: '\u2293',
      SquareSubset: '\u228F',
      SquareSubsetEqual: '\u2291',
      SquareSuperset: '\u2290',
      SquareSupersetEqual: '\u2292',
      SquareUnion: '\u2294',
      Sscr: '\u{1D4AE}',
      Star: '\u22C6',
      Sub: '\u22D0',
      Subset: '\u22D0',
      SubsetEqual: '\u2286',
      Succeeds: '\u227B',
      SucceedsEqual: '\u2AB0',
      SucceedsSlantEqual: '\u227D',
      SucceedsTilde: '\u227F',
      SuchThat: '\u220B',
      Sum: '\u2211',
      Sup: '\u22D1',
      Superset: '\u2283',
      SupersetEqual: '\u2287',
      Supset: '\u22D1',
      THOR: '\xDE',
      THORN: '\xDE',
      TRADE: '\u2122',
      TSHcy: '\u040B',
      TScy: '\u0426',
      Tab: '	',
      Tau: '\u03A4',
      Tcaron: '\u0164',
      Tcedil: '\u0162',
      Tcy: '\u0422',
      Tfr: '\u{1D517}',
      Therefore: '\u2234',
      Theta: '\u0398',
      ThickSpace: '\u205F\u200A',
      ThinSpace: '\u2009',
      Tilde: '\u223C',
      TildeEqual: '\u2243',
      TildeFullEqual: '\u2245',
      TildeTilde: '\u2248',
      Topf: '\u{1D54B}',
      TripleDot: '\u20DB',
      Tscr: '\u{1D4AF}',
      Tstrok: '\u0166',
      Uacut: '\xDA',
      Uacute: '\xDA',
      Uarr: '\u219F',
      Uarrocir: '\u2949',
      Ubrcy: '\u040E',
      Ubreve: '\u016C',
      Ucir: '\xDB',
      Ucirc: '\xDB',
      Ucy: '\u0423',
      Udblac: '\u0170',
      Ufr: '\u{1D518}',
      Ugrav: '\xD9',
      Ugrave: '\xD9',
      Umacr: '\u016A',
      UnderBar: '_',
      UnderBrace: '\u23DF',
      UnderBracket: '\u23B5',
      UnderParenthesis: '\u23DD',
      Union: '\u22C3',
      UnionPlus: '\u228E',
      Uogon: '\u0172',
      Uopf: '\u{1D54C}',
      UpArrow: '\u2191',
      UpArrowBar: '\u2912',
      UpArrowDownArrow: '\u21C5',
      UpDownArrow: '\u2195',
      UpEquilibrium: '\u296E',
      UpTee: '\u22A5',
      UpTeeArrow: '\u21A5',
      Uparrow: '\u21D1',
      Updownarrow: '\u21D5',
      UpperLeftArrow: '\u2196',
      UpperRightArrow: '\u2197',
      Upsi: '\u03D2',
      Upsilon: '\u03A5',
      Uring: '\u016E',
      Uscr: '\u{1D4B0}',
      Utilde: '\u0168',
      Uum: '\xDC',
      Uuml: '\xDC',
      VDash: '\u22AB',
      Vbar: '\u2AEB',
      Vcy: '\u0412',
      Vdash: '\u22A9',
      Vdashl: '\u2AE6',
      Vee: '\u22C1',
      Verbar: '\u2016',
      Vert: '\u2016',
      VerticalBar: '\u2223',
      VerticalLine: '|',
      VerticalSeparator: '\u2758',
      VerticalTilde: '\u2240',
      VeryThinSpace: '\u200A',
      Vfr: '\u{1D519}',
      Vopf: '\u{1D54D}',
      Vscr: '\u{1D4B1}',
      Vvdash: '\u22AA',
      Wcirc: '\u0174',
      Wedge: '\u22C0',
      Wfr: '\u{1D51A}',
      Wopf: '\u{1D54E}',
      Wscr: '\u{1D4B2}',
      Xfr: '\u{1D51B}',
      Xi: '\u039E',
      Xopf: '\u{1D54F}',
      Xscr: '\u{1D4B3}',
      YAcy: '\u042F',
      YIcy: '\u0407',
      YUcy: '\u042E',
      Yacut: '\xDD',
      Yacute: '\xDD',
      Ycirc: '\u0176',
      Ycy: '\u042B',
      Yfr: '\u{1D51C}',
      Yopf: '\u{1D550}',
      Yscr: '\u{1D4B4}',
      Yuml: '\u0178',
      ZHcy: '\u0416',
      Zacute: '\u0179',
      Zcaron: '\u017D',
      Zcy: '\u0417',
      Zdot: '\u017B',
      ZeroWidthSpace: '\u200B',
      Zeta: '\u0396',
      Zfr: '\u2128',
      Zopf: '\u2124',
      Zscr: '\u{1D4B5}',
      aacut: '\xE1',
      aacute: '\xE1',
      abreve: '\u0103',
      ac: '\u223E',
      acE: '\u223E\u0333',
      acd: '\u223F',
      acir: '\xE2',
      acirc: '\xE2',
      acut: '\xB4',
      acute: '\xB4',
      acy: '\u0430',
      aeli: '\xE6',
      aelig: '\xE6',
      af: '\u2061',
      afr: '\u{1D51E}',
      agrav: '\xE0',
      agrave: '\xE0',
      alefsym: '\u2135',
      aleph: '\u2135',
      alpha: '\u03B1',
      amacr: '\u0101',
      amalg: '\u2A3F',
      am: '&',
      amp: '&',
      and: '\u2227',
      andand: '\u2A55',
      andd: '\u2A5C',
      andslope: '\u2A58',
      andv: '\u2A5A',
      ang: '\u2220',
      ange: '\u29A4',
      angle: '\u2220',
      angmsd: '\u2221',
      angmsdaa: '\u29A8',
      angmsdab: '\u29A9',
      angmsdac: '\u29AA',
      angmsdad: '\u29AB',
      angmsdae: '\u29AC',
      angmsdaf: '\u29AD',
      angmsdag: '\u29AE',
      angmsdah: '\u29AF',
      angrt: '\u221F',
      angrtvb: '\u22BE',
      angrtvbd: '\u299D',
      angsph: '\u2222',
      angst: '\xC5',
      angzarr: '\u237C',
      aogon: '\u0105',
      aopf: '\u{1D552}',
      ap: '\u2248',
      apE: '\u2A70',
      apacir: '\u2A6F',
      ape: '\u224A',
      apid: '\u224B',
      apos: "'",
      approx: '\u2248',
      approxeq: '\u224A',
      arin: '\xE5',
      aring: '\xE5',
      ascr: '\u{1D4B6}',
      ast: '*',
      asymp: '\u2248',
      asympeq: '\u224D',
      atild: '\xE3',
      atilde: '\xE3',
      aum: '\xE4',
      auml: '\xE4',
      awconint: '\u2233',
      awint: '\u2A11',
      bNot: '\u2AED',
      backcong: '\u224C',
      backepsilon: '\u03F6',
      backprime: '\u2035',
      backsim: '\u223D',
      backsimeq: '\u22CD',
      barvee: '\u22BD',
      barwed: '\u2305',
      barwedge: '\u2305',
      bbrk: '\u23B5',
      bbrktbrk: '\u23B6',
      bcong: '\u224C',
      bcy: '\u0431',
      bdquo: '\u201E',
      becaus: '\u2235',
      because: '\u2235',
      bemptyv: '\u29B0',
      bepsi: '\u03F6',
      bernou: '\u212C',
      beta: '\u03B2',
      beth: '\u2136',
      between: '\u226C',
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
      bnot: '\u2310',
      bopf: '\u{1D553}',
      bot: '\u22A5',
      bottom: '\u22A5',
      bowtie: '\u22C8',
      boxDL: '\u2557',
      boxDR: '\u2554',
      boxDl: '\u2556',
      boxDr: '\u2553',
      boxH: '\u2550',
      boxHD: '\u2566',
      boxHU: '\u2569',
      boxHd: '\u2564',
      boxHu: '\u2567',
      boxUL: '\u255D',
      boxUR: '\u255A',
      boxUl: '\u255C',
      boxUr: '\u2559',
      boxV: '\u2551',
      boxVH: '\u256C',
      boxVL: '\u2563',
      boxVR: '\u2560',
      boxVh: '\u256B',
      boxVl: '\u2562',
      boxVr: '\u255F',
      boxbox: '\u29C9',
      boxdL: '\u2555',
      boxdR: '\u2552',
      boxdl: '\u2510',
      boxdr: '\u250C',
      boxh: '\u2500',
      boxhD: '\u2565',
      boxhU: '\u2568',
      boxhd: '\u252C',
      boxhu: '\u2534',
      boxminus: '\u229F',
      boxplus: '\u229E',
      boxtimes: '\u22A0',
      boxuL: '\u255B',
      boxuR: '\u2558',
      boxul: '\u2518',
      boxur: '\u2514',
      boxv: '\u2502',
      boxvH: '\u256A',
      boxvL: '\u2561',
      boxvR: '\u255E',
      boxvh: '\u253C',
      boxvl: '\u2524',
      boxvr: '\u251C',
      bprime: '\u2035',
      breve: '\u02D8',
      brvba: '\xA6',
      brvbar: '\xA6',
      bscr: '\u{1D4B7}',
      bsemi: '\u204F',
      bsim: '\u223D',
      bsime: '\u22CD',
      bsol: '\\',
      bsolb: '\u29C5',
      bsolhsub: '\u27C8',
      bull: '\u2022',
      bullet: '\u2022',
      bump: '\u224E',
      bumpE: '\u2AAE',
      bumpe: '\u224F',
      bumpeq: '\u224F',
      cacute: '\u0107',
      cap: '\u2229',
      capand: '\u2A44',
      capbrcup: '\u2A49',
      capcap: '\u2A4B',
      capcup: '\u2A47',
      capdot: '\u2A40',
      caps: '\u2229\uFE00',
      caret: '\u2041',
      caron: '\u02C7',
      ccaps: '\u2A4D',
      ccaron: '\u010D',
      ccedi: '\xE7',
      ccedil: '\xE7',
      ccirc: '\u0109',
      ccups: '\u2A4C',
      ccupssm: '\u2A50',
      cdot: '\u010B',
      cedi: '\xB8',
      cedil: '\xB8',
      cemptyv: '\u29B2',
      cen: '\xA2',
      cent: '\xA2',
      centerdot: '\xB7',
      cfr: '\u{1D520}',
      chcy: '\u0447',
      check: '\u2713',
      checkmark: '\u2713',
      chi: '\u03C7',
      cir: '\u25CB',
      cirE: '\u29C3',
      circ: '\u02C6',
      circeq: '\u2257',
      circlearrowleft: '\u21BA',
      circlearrowright: '\u21BB',
      circledR: '\xAE',
      circledS: '\u24C8',
      circledast: '\u229B',
      circledcirc: '\u229A',
      circleddash: '\u229D',
      cire: '\u2257',
      cirfnint: '\u2A10',
      cirmid: '\u2AEF',
      cirscir: '\u29C2',
      clubs: '\u2663',
      clubsuit: '\u2663',
      colon: ':',
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
      conint: '\u222E',
      copf: '\u{1D554}',
      coprod: '\u2210',
      cop: '\xA9',
      copy: '\xA9',
      copysr: '\u2117',
      crarr: '\u21B5',
      cross: '\u2717',
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
      cup: '\u222A',
      cupbrcap: '\u2A48',
      cupcap: '\u2A46',
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
      curre: '\xA4',
      curren: '\xA4',
      curvearrowleft: '\u21B6',
      curvearrowright: '\u21B7',
      cuvee: '\u22CE',
      cuwed: '\u22CF',
      cwconint: '\u2232',
      cwint: '\u2231',
      cylcty: '\u232D',
      dArr: '\u21D3',
      dHar: '\u2965',
      dagger: '\u2020',
      daleth: '\u2138',
      darr: '\u2193',
      dash: '\u2010',
      dashv: '\u22A3',
      dbkarow: '\u290F',
      dblac: '\u02DD',
      dcaron: '\u010F',
      dcy: '\u0434',
      dd: '\u2146',
      ddagger: '\u2021',
      ddarr: '\u21CA',
      ddotseq: '\u2A77',
      de: '\xB0',
      deg: '\xB0',
      delta: '\u03B4',
      demptyv: '\u29B1',
      dfisht: '\u297F',
      dfr: '\u{1D521}',
      dharl: '\u21C3',
      dharr: '\u21C2',
      diam: '\u22C4',
      diamond: '\u22C4',
      diamondsuit: '\u2666',
      diams: '\u2666',
      die: '\xA8',
      digamma: '\u03DD',
      disin: '\u22F2',
      div: '\xF7',
      divid: '\xF7',
      divide: '\xF7',
      divideontimes: '\u22C7',
      divonx: '\u22C7',
      djcy: '\u0452',
      dlcorn: '\u231E',
      dlcrop: '\u230D',
      dollar: '$',
      dopf: '\u{1D555}',
      dot: '\u02D9',
      doteq: '\u2250',
      doteqdot: '\u2251',
      dotminus: '\u2238',
      dotplus: '\u2214',
      dotsquare: '\u22A1',
      doublebarwedge: '\u2306',
      downarrow: '\u2193',
      downdownarrows: '\u21CA',
      downharpoonleft: '\u21C3',
      downharpoonright: '\u21C2',
      drbkarow: '\u2910',
      drcorn: '\u231F',
      drcrop: '\u230C',
      dscr: '\u{1D4B9}',
      dscy: '\u0455',
      dsol: '\u29F6',
      dstrok: '\u0111',
      dtdot: '\u22F1',
      dtri: '\u25BF',
      dtrif: '\u25BE',
      duarr: '\u21F5',
      duhar: '\u296F',
      dwangle: '\u29A6',
      dzcy: '\u045F',
      dzigrarr: '\u27FF',
      eDDot: '\u2A77',
      eDot: '\u2251',
      eacut: '\xE9',
      eacute: '\xE9',
      easter: '\u2A6E',
      ecaron: '\u011B',
      ecir: '\xEA',
      ecirc: '\xEA',
      ecolon: '\u2255',
      ecy: '\u044D',
      edot: '\u0117',
      ee: '\u2147',
      efDot: '\u2252',
      efr: '\u{1D522}',
      eg: '\u2A9A',
      egrav: '\xE8',
      egrave: '\xE8',
      egs: '\u2A96',
      egsdot: '\u2A98',
      el: '\u2A99',
      elinters: '\u23E7',
      ell: '\u2113',
      els: '\u2A95',
      elsdot: '\u2A97',
      emacr: '\u0113',
      empty: '\u2205',
      emptyset: '\u2205',
      emptyv: '\u2205',
      emsp13: '\u2004',
      emsp14: '\u2005',
      emsp: '\u2003',
      eng: '\u014B',
      ensp: '\u2002',
      eogon: '\u0119',
      eopf: '\u{1D556}',
      epar: '\u22D5',
      eparsl: '\u29E3',
      eplus: '\u2A71',
      epsi: '\u03B5',
      epsilon: '\u03B5',
      epsiv: '\u03F5',
      eqcirc: '\u2256',
      eqcolon: '\u2255',
      eqsim: '\u2242',
      eqslantgtr: '\u2A96',
      eqslantless: '\u2A95',
      equals: '=',
      equest: '\u225F',
      equiv: '\u2261',
      equivDD: '\u2A78',
      eqvparsl: '\u29E5',
      erDot: '\u2253',
      erarr: '\u2971',
      escr: '\u212F',
      esdot: '\u2250',
      esim: '\u2242',
      eta: '\u03B7',
      et: '\xF0',
      eth: '\xF0',
      eum: '\xEB',
      euml: '\xEB',
      euro: '\u20AC',
      excl: '!',
      exist: '\u2203',
      expectation: '\u2130',
      exponentiale: '\u2147',
      fallingdotseq: '\u2252',
      fcy: '\u0444',
      female: '\u2640',
      ffilig: '\uFB03',
      fflig: '\uFB00',
      ffllig: '\uFB04',
      ffr: '\u{1D523}',
      filig: '\uFB01',
      fjlig: 'fj',
      flat: '\u266D',
      fllig: '\uFB02',
      fltns: '\u25B1',
      fnof: '\u0192',
      fopf: '\u{1D557}',
      forall: '\u2200',
      fork: '\u22D4',
      forkv: '\u2AD9',
      fpartint: '\u2A0D',
      frac1: '\xBC',
      frac12: '\xBD',
      frac13: '\u2153',
      frac14: '\xBC',
      frac15: '\u2155',
      frac16: '\u2159',
      frac18: '\u215B',
      frac23: '\u2154',
      frac25: '\u2156',
      frac3: '\xBE',
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
      gE: '\u2267',
      gEl: '\u2A8C',
      gacute: '\u01F5',
      gamma: '\u03B3',
      gammad: '\u03DD',
      gap: '\u2A86',
      gbreve: '\u011F',
      gcirc: '\u011D',
      gcy: '\u0433',
      gdot: '\u0121',
      ge: '\u2265',
      gel: '\u22DB',
      geq: '\u2265',
      geqq: '\u2267',
      geqslant: '\u2A7E',
      ges: '\u2A7E',
      gescc: '\u2AA9',
      gesdot: '\u2A80',
      gesdoto: '\u2A82',
      gesdotol: '\u2A84',
      gesl: '\u22DB\uFE00',
      gesles: '\u2A94',
      gfr: '\u{1D524}',
      gg: '\u226B',
      ggg: '\u22D9',
      gimel: '\u2137',
      gjcy: '\u0453',
      gl: '\u2277',
      glE: '\u2A92',
      gla: '\u2AA5',
      glj: '\u2AA4',
      gnE: '\u2269',
      gnap: '\u2A8A',
      gnapprox: '\u2A8A',
      gne: '\u2A88',
      gneq: '\u2A88',
      gneqq: '\u2269',
      gnsim: '\u22E7',
      gopf: '\u{1D558}',
      grave: '`',
      gscr: '\u210A',
      gsim: '\u2273',
      gsime: '\u2A8E',
      gsiml: '\u2A90',
      g: '>',
      gt: '>',
      gtcc: '\u2AA7',
      gtcir: '\u2A7A',
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
      hArr: '\u21D4',
      hairsp: '\u200A',
      half: '\xBD',
      hamilt: '\u210B',
      hardcy: '\u044A',
      harr: '\u2194',
      harrcir: '\u2948',
      harrw: '\u21AD',
      hbar: '\u210F',
      hcirc: '\u0125',
      hearts: '\u2665',
      heartsuit: '\u2665',
      hellip: '\u2026',
      hercon: '\u22B9',
      hfr: '\u{1D525}',
      hksearow: '\u2925',
      hkswarow: '\u2926',
      hoarr: '\u21FF',
      homtht: '\u223B',
      hookleftarrow: '\u21A9',
      hookrightarrow: '\u21AA',
      hopf: '\u{1D559}',
      horbar: '\u2015',
      hscr: '\u{1D4BD}',
      hslash: '\u210F',
      hstrok: '\u0127',
      hybull: '\u2043',
      hyphen: '\u2010',
      iacut: '\xED',
      iacute: '\xED',
      ic: '\u2063',
      icir: '\xEE',
      icirc: '\xEE',
      icy: '\u0438',
      iecy: '\u0435',
      iexc: '\xA1',
      iexcl: '\xA1',
      iff: '\u21D4',
      ifr: '\u{1D526}',
      igrav: '\xEC',
      igrave: '\xEC',
      ii: '\u2148',
      iiiint: '\u2A0C',
      iiint: '\u222D',
      iinfin: '\u29DC',
      iiota: '\u2129',
      ijlig: '\u0133',
      imacr: '\u012B',
      image: '\u2111',
      imagline: '\u2110',
      imagpart: '\u2111',
      imath: '\u0131',
      imof: '\u22B7',
      imped: '\u01B5',
      in: '\u2208',
      incare: '\u2105',
      infin: '\u221E',
      infintie: '\u29DD',
      inodot: '\u0131',
      int: '\u222B',
      intcal: '\u22BA',
      integers: '\u2124',
      intercal: '\u22BA',
      intlarhk: '\u2A17',
      intprod: '\u2A3C',
      iocy: '\u0451',
      iogon: '\u012F',
      iopf: '\u{1D55A}',
      iota: '\u03B9',
      iprod: '\u2A3C',
      iques: '\xBF',
      iquest: '\xBF',
      iscr: '\u{1D4BE}',
      isin: '\u2208',
      isinE: '\u22F9',
      isindot: '\u22F5',
      isins: '\u22F4',
      isinsv: '\u22F3',
      isinv: '\u2208',
      it: '\u2062',
      itilde: '\u0129',
      iukcy: '\u0456',
      ium: '\xEF',
      iuml: '\xEF',
      jcirc: '\u0135',
      jcy: '\u0439',
      jfr: '\u{1D527}',
      jmath: '\u0237',
      jopf: '\u{1D55B}',
      jscr: '\u{1D4BF}',
      jsercy: '\u0458',
      jukcy: '\u0454',
      kappa: '\u03BA',
      kappav: '\u03F0',
      kcedil: '\u0137',
      kcy: '\u043A',
      kfr: '\u{1D528}',
      kgreen: '\u0138',
      khcy: '\u0445',
      kjcy: '\u045C',
      kopf: '\u{1D55C}',
      kscr: '\u{1D4C0}',
      lAarr: '\u21DA',
      lArr: '\u21D0',
      lAtail: '\u291B',
      lBarr: '\u290E',
      lE: '\u2266',
      lEg: '\u2A8B',
      lHar: '\u2962',
      lacute: '\u013A',
      laemptyv: '\u29B4',
      lagran: '\u2112',
      lambda: '\u03BB',
      lang: '\u27E8',
      langd: '\u2991',
      langle: '\u27E8',
      lap: '\u2A85',
      laqu: '\xAB',
      laquo: '\xAB',
      larr: '\u2190',
      larrb: '\u21E4',
      larrbfs: '\u291F',
      larrfs: '\u291D',
      larrhk: '\u21A9',
      larrlp: '\u21AB',
      larrpl: '\u2939',
      larrsim: '\u2973',
      larrtl: '\u21A2',
      lat: '\u2AAB',
      latail: '\u2919',
      late: '\u2AAD',
      lates: '\u2AAD\uFE00',
      lbarr: '\u290C',
      lbbrk: '\u2772',
      lbrace: '{',
      lbrack: '[',
      lbrke: '\u298B',
      lbrksld: '\u298F',
      lbrkslu: '\u298D',
      lcaron: '\u013E',
      lcedil: '\u013C',
      lceil: '\u2308',
      lcub: '{',
      lcy: '\u043B',
      ldca: '\u2936',
      ldquo: '\u201C',
      ldquor: '\u201E',
      ldrdhar: '\u2967',
      ldrushar: '\u294B',
      ldsh: '\u21B2',
      le: '\u2264',
      leftarrow: '\u2190',
      leftarrowtail: '\u21A2',
      leftharpoondown: '\u21BD',
      leftharpoonup: '\u21BC',
      leftleftarrows: '\u21C7',
      leftrightarrow: '\u2194',
      leftrightarrows: '\u21C6',
      leftrightharpoons: '\u21CB',
      leftrightsquigarrow: '\u21AD',
      leftthreetimes: '\u22CB',
      leg: '\u22DA',
      leq: '\u2264',
      leqq: '\u2266',
      leqslant: '\u2A7D',
      les: '\u2A7D',
      lescc: '\u2AA8',
      lesdot: '\u2A7F',
      lesdoto: '\u2A81',
      lesdotor: '\u2A83',
      lesg: '\u22DA\uFE00',
      lesges: '\u2A93',
      lessapprox: '\u2A85',
      lessdot: '\u22D6',
      lesseqgtr: '\u22DA',
      lesseqqgtr: '\u2A8B',
      lessgtr: '\u2276',
      lesssim: '\u2272',
      lfisht: '\u297C',
      lfloor: '\u230A',
      lfr: '\u{1D529}',
      lg: '\u2276',
      lgE: '\u2A91',
      lhard: '\u21BD',
      lharu: '\u21BC',
      lharul: '\u296A',
      lhblk: '\u2584',
      ljcy: '\u0459',
      ll: '\u226A',
      llarr: '\u21C7',
      llcorner: '\u231E',
      llhard: '\u296B',
      lltri: '\u25FA',
      lmidot: '\u0140',
      lmoust: '\u23B0',
      lmoustache: '\u23B0',
      lnE: '\u2268',
      lnap: '\u2A89',
      lnapprox: '\u2A89',
      lne: '\u2A87',
      lneq: '\u2A87',
      lneqq: '\u2268',
      lnsim: '\u22E6',
      loang: '\u27EC',
      loarr: '\u21FD',
      lobrk: '\u27E6',
      longleftarrow: '\u27F5',
      longleftrightarrow: '\u27F7',
      longmapsto: '\u27FC',
      longrightarrow: '\u27F6',
      looparrowleft: '\u21AB',
      looparrowright: '\u21AC',
      lopar: '\u2985',
      lopf: '\u{1D55D}',
      loplus: '\u2A2D',
      lotimes: '\u2A34',
      lowast: '\u2217',
      lowbar: '_',
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
      lsh: '\u21B0',
      lsim: '\u2272',
      lsime: '\u2A8D',
      lsimg: '\u2A8F',
      lsqb: '[',
      lsquo: '\u2018',
      lsquor: '\u201A',
      lstrok: '\u0142',
      l: '<',
      lt: '<',
      ltcc: '\u2AA6',
      ltcir: '\u2A79',
      ltdot: '\u22D6',
      lthree: '\u22CB',
      ltimes: '\u22C9',
      ltlarr: '\u2976',
      ltquest: '\u2A7B',
      ltrPar: '\u2996',
      ltri: '\u25C3',
      ltrie: '\u22B4',
      ltrif: '\u25C2',
      lurdshar: '\u294A',
      luruhar: '\u2966',
      lvertneqq: '\u2268\uFE00',
      lvnE: '\u2268\uFE00',
      mDDot: '\u223A',
      mac: '\xAF',
      macr: '\xAF',
      male: '\u2642',
      malt: '\u2720',
      maltese: '\u2720',
      map: '\u21A6',
      mapsto: '\u21A6',
      mapstodown: '\u21A7',
      mapstoleft: '\u21A4',
      mapstoup: '\u21A5',
      marker: '\u25AE',
      mcomma: '\u2A29',
      mcy: '\u043C',
      mdash: '\u2014',
      measuredangle: '\u2221',
      mfr: '\u{1D52A}',
      mho: '\u2127',
      micr: '\xB5',
      micro: '\xB5',
      mid: '\u2223',
      midast: '*',
      midcir: '\u2AF0',
      middo: '\xB7',
      middot: '\xB7',
      minus: '\u2212',
      minusb: '\u229F',
      minusd: '\u2238',
      minusdu: '\u2A2A',
      mlcp: '\u2ADB',
      mldr: '\u2026',
      mnplus: '\u2213',
      models: '\u22A7',
      mopf: '\u{1D55E}',
      mp: '\u2213',
      mscr: '\u{1D4C2}',
      mstpos: '\u223E',
      mu: '\u03BC',
      multimap: '\u22B8',
      mumap: '\u22B8',
      nGg: '\u22D9\u0338',
      nGt: '\u226B\u20D2',
      nGtv: '\u226B\u0338',
      nLeftarrow: '\u21CD',
      nLeftrightarrow: '\u21CE',
      nLl: '\u22D8\u0338',
      nLt: '\u226A\u20D2',
      nLtv: '\u226A\u0338',
      nRightarrow: '\u21CF',
      nVDash: '\u22AF',
      nVdash: '\u22AE',
      nabla: '\u2207',
      nacute: '\u0144',
      nang: '\u2220\u20D2',
      nap: '\u2249',
      napE: '\u2A70\u0338',
      napid: '\u224B\u0338',
      napos: '\u0149',
      napprox: '\u2249',
      natur: '\u266E',
      natural: '\u266E',
      naturals: '\u2115',
      nbs: '\xA0',
      nbsp: '\xA0',
      nbump: '\u224E\u0338',
      nbumpe: '\u224F\u0338',
      ncap: '\u2A43',
      ncaron: '\u0148',
      ncedil: '\u0146',
      ncong: '\u2247',
      ncongdot: '\u2A6D\u0338',
      ncup: '\u2A42',
      ncy: '\u043D',
      ndash: '\u2013',
      ne: '\u2260',
      neArr: '\u21D7',
      nearhk: '\u2924',
      nearr: '\u2197',
      nearrow: '\u2197',
      nedot: '\u2250\u0338',
      nequiv: '\u2262',
      nesear: '\u2928',
      nesim: '\u2242\u0338',
      nexist: '\u2204',
      nexists: '\u2204',
      nfr: '\u{1D52B}',
      ngE: '\u2267\u0338',
      nge: '\u2271',
      ngeq: '\u2271',
      ngeqq: '\u2267\u0338',
      ngeqslant: '\u2A7E\u0338',
      nges: '\u2A7E\u0338',
      ngsim: '\u2275',
      ngt: '\u226F',
      ngtr: '\u226F',
      nhArr: '\u21CE',
      nharr: '\u21AE',
      nhpar: '\u2AF2',
      ni: '\u220B',
      nis: '\u22FC',
      nisd: '\u22FA',
      niv: '\u220B',
      njcy: '\u045A',
      nlArr: '\u21CD',
      nlE: '\u2266\u0338',
      nlarr: '\u219A',
      nldr: '\u2025',
      nle: '\u2270',
      nleftarrow: '\u219A',
      nleftrightarrow: '\u21AE',
      nleq: '\u2270',
      nleqq: '\u2266\u0338',
      nleqslant: '\u2A7D\u0338',
      nles: '\u2A7D\u0338',
      nless: '\u226E',
      nlsim: '\u2274',
      nlt: '\u226E',
      nltri: '\u22EA',
      nltrie: '\u22EC',
      nmid: '\u2224',
      nopf: '\u{1D55F}',
      no: '\xAC',
      not: '\xAC',
      notin: '\u2209',
      notinE: '\u22F9\u0338',
      notindot: '\u22F5\u0338',
      notinva: '\u2209',
      notinvb: '\u22F7',
      notinvc: '\u22F6',
      notni: '\u220C',
      notniva: '\u220C',
      notnivb: '\u22FE',
      notnivc: '\u22FD',
      npar: '\u2226',
      nparallel: '\u2226',
      nparsl: '\u2AFD\u20E5',
      npart: '\u2202\u0338',
      npolint: '\u2A14',
      npr: '\u2280',
      nprcue: '\u22E0',
      npre: '\u2AAF\u0338',
      nprec: '\u2280',
      npreceq: '\u2AAF\u0338',
      nrArr: '\u21CF',
      nrarr: '\u219B',
      nrarrc: '\u2933\u0338',
      nrarrw: '\u219D\u0338',
      nrightarrow: '\u219B',
      nrtri: '\u22EB',
      nrtrie: '\u22ED',
      nsc: '\u2281',
      nsccue: '\u22E1',
      nsce: '\u2AB0\u0338',
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
      ntild: '\xF1',
      ntilde: '\xF1',
      ntlg: '\u2278',
      ntriangleleft: '\u22EA',
      ntrianglelefteq: '\u22EC',
      ntriangleright: '\u22EB',
      ntrianglerighteq: '\u22ED',
      nu: '\u03BD',
      num: '#',
      numero: '\u2116',
      numsp: '\u2007',
      nvDash: '\u22AD',
      nvHarr: '\u2904',
      nvap: '\u224D\u20D2',
      nvdash: '\u22AC',
      nvge: '\u2265\u20D2',
      nvgt: '>\u20D2',
      nvinfin: '\u29DE',
      nvlArr: '\u2902',
      nvle: '\u2264\u20D2',
      nvlt: '<\u20D2',
      nvltrie: '\u22B4\u20D2',
      nvrArr: '\u2903',
      nvrtrie: '\u22B5\u20D2',
      nvsim: '\u223C\u20D2',
      nwArr: '\u21D6',
      nwarhk: '\u2923',
      nwarr: '\u2196',
      nwarrow: '\u2196',
      nwnear: '\u2927',
      oS: '\u24C8',
      oacut: '\xF3',
      oacute: '\xF3',
      oast: '\u229B',
      ocir: '\xF4',
      ocirc: '\xF4',
      ocy: '\u043E',
      odash: '\u229D',
      odblac: '\u0151',
      odiv: '\u2A38',
      odot: '\u2299',
      odsold: '\u29BC',
      oelig: '\u0153',
      ofcir: '\u29BF',
      ofr: '\u{1D52C}',
      ogon: '\u02DB',
      ograv: '\xF2',
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
      omacr: '\u014D',
      omega: '\u03C9',
      omicron: '\u03BF',
      omid: '\u29B6',
      ominus: '\u2296',
      oopf: '\u{1D560}',
      opar: '\u29B7',
      operp: '\u29B9',
      oplus: '\u2295',
      or: '\u2228',
      orarr: '\u21BB',
      ord: '\xBA',
      order: '\u2134',
      orderof: '\u2134',
      ordf: '\xAA',
      ordm: '\xBA',
      origof: '\u22B6',
      oror: '\u2A56',
      orslope: '\u2A57',
      orv: '\u2A5B',
      oscr: '\u2134',
      oslas: '\xF8',
      oslash: '\xF8',
      osol: '\u2298',
      otild: '\xF5',
      otilde: '\xF5',
      otimes: '\u2297',
      otimesas: '\u2A36',
      oum: '\xF6',
      ouml: '\xF6',
      ovbar: '\u233D',
      par: '\xB6',
      para: '\xB6',
      parallel: '\u2225',
      parsim: '\u2AF3',
      parsl: '\u2AFD',
      part: '\u2202',
      pcy: '\u043F',
      percnt: '%',
      period: '.',
      permil: '\u2030',
      perp: '\u22A5',
      pertenk: '\u2031',
      pfr: '\u{1D52D}',
      phi: '\u03C6',
      phiv: '\u03D5',
      phmmat: '\u2133',
      phone: '\u260E',
      pi: '\u03C0',
      pitchfork: '\u22D4',
      piv: '\u03D6',
      planck: '\u210F',
      planckh: '\u210E',
      plankv: '\u210F',
      plus: '+',
      plusacir: '\u2A23',
      plusb: '\u229E',
      pluscir: '\u2A22',
      plusdo: '\u2214',
      plusdu: '\u2A25',
      pluse: '\u2A72',
      plusm: '\xB1',
      plusmn: '\xB1',
      plussim: '\u2A26',
      plustwo: '\u2A27',
      pm: '\xB1',
      pointint: '\u2A15',
      popf: '\u{1D561}',
      poun: '\xA3',
      pound: '\xA3',
      pr: '\u227A',
      prE: '\u2AB3',
      prap: '\u2AB7',
      prcue: '\u227C',
      pre: '\u2AAF',
      prec: '\u227A',
      precapprox: '\u2AB7',
      preccurlyeq: '\u227C',
      preceq: '\u2AAF',
      precnapprox: '\u2AB9',
      precneqq: '\u2AB5',
      precnsim: '\u22E8',
      precsim: '\u227E',
      prime: '\u2032',
      primes: '\u2119',
      prnE: '\u2AB5',
      prnap: '\u2AB9',
      prnsim: '\u22E8',
      prod: '\u220F',
      profalar: '\u232E',
      profline: '\u2312',
      profsurf: '\u2313',
      prop: '\u221D',
      propto: '\u221D',
      prsim: '\u227E',
      prurel: '\u22B0',
      pscr: '\u{1D4C5}',
      psi: '\u03C8',
      puncsp: '\u2008',
      qfr: '\u{1D52E}',
      qint: '\u2A0C',
      qopf: '\u{1D562}',
      qprime: '\u2057',
      qscr: '\u{1D4C6}',
      quaternions: '\u210D',
      quatint: '\u2A16',
      quest: '?',
      questeq: '\u225F',
      quo: '"',
      quot: '"',
      rAarr: '\u21DB',
      rArr: '\u21D2',
      rAtail: '\u291C',
      rBarr: '\u290F',
      rHar: '\u2964',
      race: '\u223D\u0331',
      racute: '\u0155',
      radic: '\u221A',
      raemptyv: '\u29B3',
      rang: '\u27E9',
      rangd: '\u2992',
      range: '\u29A5',
      rangle: '\u27E9',
      raqu: '\xBB',
      raquo: '\xBB',
      rarr: '\u2192',
      rarrap: '\u2975',
      rarrb: '\u21E5',
      rarrbfs: '\u2920',
      rarrc: '\u2933',
      rarrfs: '\u291E',
      rarrhk: '\u21AA',
      rarrlp: '\u21AC',
      rarrpl: '\u2945',
      rarrsim: '\u2974',
      rarrtl: '\u21A3',
      rarrw: '\u219D',
      ratail: '\u291A',
      ratio: '\u2236',
      rationals: '\u211A',
      rbarr: '\u290D',
      rbbrk: '\u2773',
      rbrace: '}',
      rbrack: ']',
      rbrke: '\u298C',
      rbrksld: '\u298E',
      rbrkslu: '\u2990',
      rcaron: '\u0159',
      rcedil: '\u0157',
      rceil: '\u2309',
      rcub: '}',
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
      rect: '\u25AD',
      re: '\xAE',
      reg: '\xAE',
      rfisht: '\u297D',
      rfloor: '\u230B',
      rfr: '\u{1D52F}',
      rhard: '\u21C1',
      rharu: '\u21C0',
      rharul: '\u296C',
      rho: '\u03C1',
      rhov: '\u03F1',
      rightarrow: '\u2192',
      rightarrowtail: '\u21A3',
      rightharpoondown: '\u21C1',
      rightharpoonup: '\u21C0',
      rightleftarrows: '\u21C4',
      rightleftharpoons: '\u21CC',
      rightrightarrows: '\u21C9',
      rightsquigarrow: '\u219D',
      rightthreetimes: '\u22CC',
      ring: '\u02DA',
      risingdotseq: '\u2253',
      rlarr: '\u21C4',
      rlhar: '\u21CC',
      rlm: '\u200F',
      rmoust: '\u23B1',
      rmoustache: '\u23B1',
      rnmid: '\u2AEE',
      roang: '\u27ED',
      roarr: '\u21FE',
      robrk: '\u27E7',
      ropar: '\u2986',
      ropf: '\u{1D563}',
      roplus: '\u2A2E',
      rotimes: '\u2A35',
      rpar: ')',
      rpargt: '\u2994',
      rppolint: '\u2A12',
      rrarr: '\u21C9',
      rsaquo: '\u203A',
      rscr: '\u{1D4C7}',
      rsh: '\u21B1',
      rsqb: ']',
      rsquo: '\u2019',
      rsquor: '\u2019',
      rthree: '\u22CC',
      rtimes: '\u22CA',
      rtri: '\u25B9',
      rtrie: '\u22B5',
      rtrif: '\u25B8',
      rtriltri: '\u29CE',
      ruluhar: '\u2968',
      rx: '\u211E',
      sacute: '\u015B',
      sbquo: '\u201A',
      sc: '\u227B',
      scE: '\u2AB4',
      scap: '\u2AB8',
      scaron: '\u0161',
      sccue: '\u227D',
      sce: '\u2AB0',
      scedil: '\u015F',
      scirc: '\u015D',
      scnE: '\u2AB6',
      scnap: '\u2ABA',
      scnsim: '\u22E9',
      scpolint: '\u2A13',
      scsim: '\u227F',
      scy: '\u0441',
      sdot: '\u22C5',
      sdotb: '\u22A1',
      sdote: '\u2A66',
      seArr: '\u21D8',
      searhk: '\u2925',
      searr: '\u2198',
      searrow: '\u2198',
      sec: '\xA7',
      sect: '\xA7',
      semi: ';',
      seswar: '\u2929',
      setminus: '\u2216',
      setmn: '\u2216',
      sext: '\u2736',
      sfr: '\u{1D530}',
      sfrown: '\u2322',
      sharp: '\u266F',
      shchcy: '\u0449',
      shcy: '\u0448',
      shortmid: '\u2223',
      shortparallel: '\u2225',
      sh: '\xAD',
      shy: '\xAD',
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
      smallsetminus: '\u2216',
      smashp: '\u2A33',
      smeparsl: '\u29E4',
      smid: '\u2223',
      smile: '\u2323',
      smt: '\u2AAA',
      smte: '\u2AAC',
      smtes: '\u2AAC\uFE00',
      softcy: '\u044C',
      sol: '/',
      solb: '\u29C4',
      solbar: '\u233F',
      sopf: '\u{1D564}',
      spades: '\u2660',
      spadesuit: '\u2660',
      spar: '\u2225',
      sqcap: '\u2293',
      sqcaps: '\u2293\uFE00',
      sqcup: '\u2294',
      sqcups: '\u2294\uFE00',
      sqsub: '\u228F',
      sqsube: '\u2291',
      sqsubset: '\u228F',
      sqsubseteq: '\u2291',
      sqsup: '\u2290',
      sqsupe: '\u2292',
      sqsupset: '\u2290',
      sqsupseteq: '\u2292',
      squ: '\u25A1',
      square: '\u25A1',
      squarf: '\u25AA',
      squf: '\u25AA',
      srarr: '\u2192',
      sscr: '\u{1D4C8}',
      ssetmn: '\u2216',
      ssmile: '\u2323',
      sstarf: '\u22C6',
      star: '\u2606',
      starf: '\u2605',
      straightepsilon: '\u03F5',
      straightphi: '\u03D5',
      strns: '\xAF',
      sub: '\u2282',
      subE: '\u2AC5',
      subdot: '\u2ABD',
      sube: '\u2286',
      subedot: '\u2AC3',
      submult: '\u2AC1',
      subnE: '\u2ACB',
      subne: '\u228A',
      subplus: '\u2ABF',
      subrarr: '\u2979',
      subset: '\u2282',
      subseteq: '\u2286',
      subseteqq: '\u2AC5',
      subsetneq: '\u228A',
      subsetneqq: '\u2ACB',
      subsim: '\u2AC7',
      subsub: '\u2AD5',
      subsup: '\u2AD3',
      succ: '\u227B',
      succapprox: '\u2AB8',
      succcurlyeq: '\u227D',
      succeq: '\u2AB0',
      succnapprox: '\u2ABA',
      succneqq: '\u2AB6',
      succnsim: '\u22E9',
      succsim: '\u227F',
      sum: '\u2211',
      sung: '\u266A',
      sup: '\u2283',
      sup1: '\xB9',
      sup2: '\xB2',
      sup3: '\xB3',
      supE: '\u2AC6',
      supdot: '\u2ABE',
      supdsub: '\u2AD8',
      supe: '\u2287',
      supedot: '\u2AC4',
      suphsol: '\u27C9',
      suphsub: '\u2AD7',
      suplarr: '\u297B',
      supmult: '\u2AC2',
      supnE: '\u2ACC',
      supne: '\u228B',
      supplus: '\u2AC0',
      supset: '\u2283',
      supseteq: '\u2287',
      supseteqq: '\u2AC6',
      supsetneq: '\u228B',
      supsetneqq: '\u2ACC',
      supsim: '\u2AC8',
      supsub: '\u2AD4',
      supsup: '\u2AD6',
      swArr: '\u21D9',
      swarhk: '\u2926',
      swarr: '\u2199',
      swarrow: '\u2199',
      swnwar: '\u292A',
      szli: '\xDF',
      szlig: '\xDF',
      target: '\u2316',
      tau: '\u03C4',
      tbrk: '\u23B4',
      tcaron: '\u0165',
      tcedil: '\u0163',
      tcy: '\u0442',
      tdot: '\u20DB',
      telrec: '\u2315',
      tfr: '\u{1D531}',
      there4: '\u2234',
      therefore: '\u2234',
      theta: '\u03B8',
      thetasym: '\u03D1',
      thetav: '\u03D1',
      thickapprox: '\u2248',
      thicksim: '\u223C',
      thinsp: '\u2009',
      thkap: '\u2248',
      thksim: '\u223C',
      thor: '\xFE',
      thorn: '\xFE',
      tilde: '\u02DC',
      time: '\xD7',
      times: '\xD7',
      timesb: '\u22A0',
      timesbar: '\u2A31',
      timesd: '\u2A30',
      tint: '\u222D',
      toea: '\u2928',
      top: '\u22A4',
      topbot: '\u2336',
      topcir: '\u2AF1',
      topf: '\u{1D565}',
      topfork: '\u2ADA',
      tosa: '\u2929',
      tprime: '\u2034',
      trade: '\u2122',
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
      triplus: '\u2A39',
      trisb: '\u29CD',
      tritime: '\u2A3B',
      trpezium: '\u23E2',
      tscr: '\u{1D4C9}',
      tscy: '\u0446',
      tshcy: '\u045B',
      tstrok: '\u0167',
      twixt: '\u226C',
      twoheadleftarrow: '\u219E',
      twoheadrightarrow: '\u21A0',
      uArr: '\u21D1',
      uHar: '\u2963',
      uacut: '\xFA',
      uacute: '\xFA',
      uarr: '\u2191',
      ubrcy: '\u045E',
      ubreve: '\u016D',
      ucir: '\xFB',
      ucirc: '\xFB',
      ucy: '\u0443',
      udarr: '\u21C5',
      udblac: '\u0171',
      udhar: '\u296E',
      ufisht: '\u297E',
      ufr: '\u{1D532}',
      ugrav: '\xF9',
      ugrave: '\xF9',
      uharl: '\u21BF',
      uharr: '\u21BE',
      uhblk: '\u2580',
      ulcorn: '\u231C',
      ulcorner: '\u231C',
      ulcrop: '\u230F',
      ultri: '\u25F8',
      umacr: '\u016B',
      um: '\xA8',
      uml: '\xA8',
      uogon: '\u0173',
      uopf: '\u{1D566}',
      uparrow: '\u2191',
      updownarrow: '\u2195',
      upharpoonleft: '\u21BF',
      upharpoonright: '\u21BE',
      uplus: '\u228E',
      upsi: '\u03C5',
      upsih: '\u03D2',
      upsilon: '\u03C5',
      upuparrows: '\u21C8',
      urcorn: '\u231D',
      urcorner: '\u231D',
      urcrop: '\u230E',
      uring: '\u016F',
      urtri: '\u25F9',
      uscr: '\u{1D4CA}',
      utdot: '\u22F0',
      utilde: '\u0169',
      utri: '\u25B5',
      utrif: '\u25B4',
      uuarr: '\u21C8',
      uum: '\xFC',
      uuml: '\xFC',
      uwangle: '\u29A7',
      vArr: '\u21D5',
      vBar: '\u2AE8',
      vBarv: '\u2AE9',
      vDash: '\u22A8',
      vangrt: '\u299C',
      varepsilon: '\u03F5',
      varkappa: '\u03F0',
      varnothing: '\u2205',
      varphi: '\u03D5',
      varpi: '\u03D6',
      varpropto: '\u221D',
      varr: '\u2195',
      varrho: '\u03F1',
      varsigma: '\u03C2',
      varsubsetneq: '\u228A\uFE00',
      varsubsetneqq: '\u2ACB\uFE00',
      varsupsetneq: '\u228B\uFE00',
      varsupsetneqq: '\u2ACC\uFE00',
      vartheta: '\u03D1',
      vartriangleleft: '\u22B2',
      vartriangleright: '\u22B3',
      vcy: '\u0432',
      vdash: '\u22A2',
      vee: '\u2228',
      veebar: '\u22BB',
      veeeq: '\u225A',
      vellip: '\u22EE',
      verbar: '|',
      vert: '|',
      vfr: '\u{1D533}',
      vltri: '\u22B2',
      vnsub: '\u2282\u20D2',
      vnsup: '\u2283\u20D2',
      vopf: '\u{1D567}',
      vprop: '\u221D',
      vrtri: '\u22B3',
      vscr: '\u{1D4CB}',
      vsubnE: '\u2ACB\uFE00',
      vsubne: '\u228A\uFE00',
      vsupnE: '\u2ACC\uFE00',
      vsupne: '\u228B\uFE00',
      vzigzag: '\u299A',
      wcirc: '\u0175',
      wedbar: '\u2A5F',
      wedge: '\u2227',
      wedgeq: '\u2259',
      weierp: '\u2118',
      wfr: '\u{1D534}',
      wopf: '\u{1D568}',
      wp: '\u2118',
      wr: '\u2240',
      wreath: '\u2240',
      wscr: '\u{1D4CC}',
      xcap: '\u22C2',
      xcirc: '\u25EF',
      xcup: '\u22C3',
      xdtri: '\u25BD',
      xfr: '\u{1D535}',
      xhArr: '\u27FA',
      xharr: '\u27F7',
      xi: '\u03BE',
      xlArr: '\u27F8',
      xlarr: '\u27F5',
      xmap: '\u27FC',
      xnis: '\u22FB',
      xodot: '\u2A00',
      xopf: '\u{1D569}',
      xoplus: '\u2A01',
      xotime: '\u2A02',
      xrArr: '\u27F9',
      xrarr: '\u27F6',
      xscr: '\u{1D4CD}',
      xsqcup: '\u2A06',
      xuplus: '\u2A04',
      xutri: '\u25B3',
      xvee: '\u22C1',
      xwedge: '\u22C0',
      yacut: '\xFD',
      yacute: '\xFD',
      yacy: '\u044F',
      ycirc: '\u0177',
      ycy: '\u044B',
      ye: '\xA5',
      yen: '\xA5',
      yfr: '\u{1D536}',
      yicy: '\u0457',
      yopf: '\u{1D56A}',
      yscr: '\u{1D4CE}',
      yucy: '\u044E',
      yum: '\xFF',
      yuml: '\xFF',
      zacute: '\u017A',
      zcaron: '\u017E',
      zcy: '\u0437',
      zdot: '\u017C',
      zeetrf: '\u2128',
      zeta: '\u03B6',
      zfr: '\u{1D537}',
      zhcy: '\u0436',
      zigrarr: '\u21DD',
      zopf: '\u{1D56B}',
      zscr: '\u{1D4CF}',
      zwj: '\u200D',
      zwnj: '\u200C',
    };
  });
  var ku = C((Wv, xu) => {
    'use strict';
    var wu = Au();
    xu.exports = DD;
    var fD = {}.hasOwnProperty;
    function DD(e) {
      return fD.call(wu, e) ? wu[e] : !1;
    }
  });
  var dr = C((Hv, Mu) => {
    'use strict';
    var Bu = mu(),
      Tu = Fu(),
      pD = Ne(),
      hD = Eu(),
      Ou = yu(),
      dD = ku();
    Mu.exports = BD;
    var mD = {}.hasOwnProperty,
      He = String.fromCharCode,
      FD = Function.prototype,
      qu = {
        warning: null,
        reference: null,
        text: null,
        warningContext: null,
        referenceContext: null,
        textContext: null,
        position: {},
        additional: null,
        attribute: !1,
        nonTerminated: !0,
      },
      gD = 9,
      _u = 10,
      vD = 12,
      ED = 32,
      Su = 38,
      CD = 59,
      bD = 60,
      yD = 61,
      AD = 35,
      wD = 88,
      xD = 120,
      kD = 65533,
      Ke = 'named',
      Mt = 'hexadecimal',
      zt = 'decimal',
      Yt = {};
    Yt[Mt] = 16;
    Yt[zt] = 10;
    var Vr = {};
    Vr[Ke] = Ou;
    Vr[zt] = pD;
    Vr[Mt] = hD;
    var Lu = 1,
      Pu = 2,
      Iu = 3,
      Nu = 4,
      Ru = 5,
      Ut = 6,
      Uu = 7,
      we = {};
    we[Lu] = 'Named character references must be terminated by a semicolon';
    we[Pu] = 'Numeric character references must be terminated by a semicolon';
    we[Iu] = 'Named character references cannot be empty';
    we[Nu] = 'Numeric character references cannot be empty';
    we[Ru] = 'Named character references must be known';
    we[Ut] = 'Numeric character references cannot be disallowed';
    we[Uu] = 'Numeric character references cannot be outside the permissible Unicode range';
    function BD(e, r) {
      var t = {},
        n,
        a;
      r || (r = {});
      for (a in qu) (n = r[a]), (t[a] = n ?? qu[a]);
      return (
        (t.position.indent || t.position.start) &&
          ((t.indent = t.position.indent || []), (t.position = t.position.start)),
        TD(e, t)
      );
    }
    function TD(e, r) {
      var t = r.additional,
        n = r.nonTerminated,
        a = r.text,
        u = r.reference,
        i = r.warning,
        o = r.textContext,
        s = r.referenceContext,
        l = r.warningContext,
        c = r.position,
        f = r.indent || [],
        p = e.length,
        d = 0,
        D = -1,
        h = c.column || 1,
        m = c.line || 1,
        F = '',
        y = [],
        E,
        B,
        b,
        g,
        A,
        w,
        v,
        x,
        k,
        T,
        q,
        R,
        O,
        S,
        _,
        L,
        Be,
        W,
        I;
      for (
        typeof t == 'string' && (t = t.charCodeAt(0)), L = ee(), x = i ? Z : FD, d--, p++;
        ++d < p;

      )
        if ((A === _u && (h = f[D] || 1), (A = e.charCodeAt(d)), A === Su)) {
          if (
            ((v = e.charCodeAt(d + 1)),
            v === gD ||
              v === _u ||
              v === vD ||
              v === ED ||
              v === Su ||
              v === bD ||
              v !== v ||
              (t && v === t))
          ) {
            (F += He(A)), h++;
            continue;
          }
          for (
            O = d + 1,
              R = O,
              I = O,
              v === AD
                ? ((I = ++R),
                  (v = e.charCodeAt(I)),
                  v === wD || v === xD ? ((S = Mt), (I = ++R)) : (S = zt))
                : (S = Ke),
              E = '',
              q = '',
              g = '',
              _ = Vr[S],
              I--;
            ++I < p && ((v = e.charCodeAt(I)), !!_(v));

          )
            (g += He(v)), S === Ke && mD.call(Bu, g) && ((E = g), (q = Bu[g]));
          (b = e.charCodeAt(I) === CD),
            b && (I++, (B = S === Ke ? dD(g) : !1), B && ((E = g), (q = B))),
            (W = 1 + I - O),
            (!b && !n) ||
              (g
                ? S === Ke
                  ? (b && !q
                      ? x(Ru, 1)
                      : (E !== g && ((I = R + E.length), (W = 1 + I - R), (b = !1)),
                        b ||
                          ((k = E ? Lu : Iu),
                          r.attribute
                            ? ((v = e.charCodeAt(I)),
                              v === yD ? (x(k, W), (q = null)) : Ou(v) ? (q = null) : x(k, W))
                            : x(k, W))),
                    (w = q))
                  : (b || x(Pu, W),
                    (w = parseInt(g, Yt[S])),
                    qD(w)
                      ? (x(Uu, W), (w = He(kD)))
                      : w in Tu
                        ? (x(Ut, W), (w = Tu[w]))
                        : ((T = ''),
                          _D(w) && x(Ut, W),
                          w > 65535 &&
                            ((w -= 65536), (T += He((w >>> 10) | 55296)), (w = 56320 | (w & 1023))),
                          (w = T + He(w))))
                : S !== Ke && x(Nu, W)),
            w
              ? (ve(),
                (L = ee()),
                (d = I - 1),
                (h += I - O + 1),
                y.push(w),
                (Be = ee()),
                Be.offset++,
                u && u.call(s, w, { start: L, end: Be }, e.slice(O - 1, I)),
                (L = Be))
              : ((g = e.slice(O - 1, I)), (F += g), (h += g.length), (d = I - 1));
        } else A === 10 && (m++, D++, (h = 0)), A === A ? ((F += He(A)), h++) : ve();
      return y.join('');
      function ee() {
        return { line: m, column: h, offset: d + (c.offset || 0) };
      }
      function Z(Ee, M) {
        var Dt = ee();
        (Dt.column += M), (Dt.offset += M), i.call(l, we[Ee], Dt, Ee);
      }
      function ve() {
        F && (y.push(F), a && a.call(o, F, { start: L, end: ee() }), (F = ''));
      }
    }
    function qD(e) {
      return (e >= 55296 && e <= 57343) || e > 1114111;
    }
    function _D(e) {
      return (
        (e >= 1 && e <= 8) ||
        e === 11 ||
        (e >= 13 && e <= 31) ||
        (e >= 127 && e <= 159) ||
        (e >= 64976 && e <= 65007) ||
        (e & 65535) === 65535 ||
        (e & 65535) === 65534
      );
    }
  });
  var Gu = C((Kv, Yu) => {
    'use strict';
    var SD = Ie(),
      zu = dr();
    Yu.exports = OD;
    function OD(e) {
      return (t.raw = n), t;
      function r(u) {
        for (var i = e.offset, o = u.line, s = []; ++o && o in i; ) s.push((i[o] || 0) + 1);
        return { start: u, indent: s };
      }
      function t(u, i, o) {
        zu(u, {
          position: r(i),
          warning: a,
          text: o,
          reference: o,
          textContext: e,
          referenceContext: e,
        });
      }
      function n(u, i, o) {
        return zu(u, SD(o, { position: r(i), warning: a }));
      }
      function a(u, i, o) {
        o !== 3 && e.file.message(u, i);
      }
    }
  });
  var $u = C((Jv, ju) => {
    'use strict';
    ju.exports = LD;
    function LD(e) {
      return r;
      function r(t, n) {
        var a = this,
          u = a.offset,
          i = [],
          o = a[e + 'Methods'],
          s = a[e + 'Tokenizers'],
          l = n.line,
          c = n.column,
          f,
          p,
          d,
          D,
          h,
          m;
        if (!t) return i;
        for (w.now = E, w.file = a.file, F(''); t; ) {
          for (
            f = -1, p = o.length, h = !1;
            ++f < p &&
            ((D = o[f]),
            (d = s[D]),
            !(
              d &&
              (!d.onlyAtStart || a.atStart) &&
              (!d.notInList || !a.inList) &&
              (!d.notInBlock || !a.inBlock) &&
              (!d.notInLink || !a.inLink) &&
              ((m = t.length), d.apply(a, [w, t]), (h = m !== t.length), h)
            ));

          );
          h || a.file.fail(new Error('Infinite loop'), w.now());
        }
        return (a.eof = E()), i;
        function F(v) {
          for (
            var x = -1,
              k = v.indexOf(`
`);
            k !== -1;

          )
            l++,
              (x = k),
              (k = v.indexOf(
                `
`,
                k + 1
              ));
          x === -1 ? (c += v.length) : (c = v.length - x),
            l in u && (x !== -1 ? (c += u[l]) : c <= u[l] && (c = u[l] + 1));
        }
        function y() {
          var v = [],
            x = l + 1;
          return function () {
            for (var k = l + 1; x < k; ) v.push((u[x] || 0) + 1), x++;
            return v;
          };
        }
        function E() {
          var v = { line: l, column: c };
          return (v.offset = a.toOffset(v)), v;
        }
        function B(v) {
          (this.start = v), (this.end = E());
        }
        function b(v) {
          t.slice(0, v.length) !== v &&
            a.file.fail(
              new Error(
                'Incorrectly eaten value: please report this warning on https://git.io/vg5Ft'
              ),
              E()
            );
        }
        function g() {
          var v = E();
          return x;
          function x(k, T) {
            var q = k.position,
              R = q ? q.start : v,
              O = [],
              S = q && q.end.line,
              _ = v.line;
            if (((k.position = new B(R)), q && T && q.indent)) {
              if (((O = q.indent), S < _)) {
                for (; ++S < _; ) O.push((u[S] || 0) + 1);
                O.push(v.column);
              }
              T = O.concat(T);
            }
            return (k.position.indent = T || []), k;
          }
        }
        function A(v, x) {
          var k = x ? x.children : i,
            T = k[k.length - 1],
            q;
          return (
            T &&
              v.type === T.type &&
              (v.type === 'text' || v.type === 'blockquote') &&
              Vu(T) &&
              Vu(v) &&
              ((q = v.type === 'text' ? PD : ID), (v = q.call(a, T, v))),
            v !== T && k.push(v),
            a.atStart && i.length !== 0 && a.exitStart(),
            v
          );
        }
        function w(v) {
          var x = y(),
            k = g(),
            T = E();
          return (
            b(v),
            (q.reset = R),
            (R.test = O),
            (q.test = O),
            (t = t.slice(v.length)),
            F(v),
            (x = x()),
            q
          );
          function q(S, _) {
            return k(A(k(S), _), x);
          }
          function R() {
            var S = q.apply(null, arguments);
            return (l = T.line), (c = T.column), (t = v + t), S;
          }
          function O() {
            var S = k({});
            return (l = T.line), (c = T.column), (t = v + t), S.position;
          }
        }
      }
    }
    function Vu(e) {
      var r, t;
      return e.type !== 'text' || !e.position
        ? !0
        : ((r = e.position.start),
          (t = e.position.end),
          r.line !== t.line || t.column - r.column === e.value.length);
    }
    function PD(e, r) {
      return (e.value += r.value), e;
    }
    function ID(e, r) {
      return this.options.commonmark || this.options.gfm
        ? r
        : ((e.children = e.children.concat(r.children)), e);
    }
  });
  var Ku = C((Xv, Hu) => {
    'use strict';
    Hu.exports = jr;
    var Gt = ['\\', '`', '*', '{', '}', '[', ']', '(', ')', '#', '+', '-', '.', '!', '_', '>'],
      Vt = Gt.concat(['~', '|']),
      Wu = Vt.concat([
        `
`,
        '"',
        '$',
        '%',
        '&',
        "'",
        ',',
        '/',
        ':',
        ';',
        '<',
        '=',
        '?',
        '@',
        '^',
      ]);
    jr.default = Gt;
    jr.gfm = Vt;
    jr.commonmark = Wu;
    function jr(e) {
      var r = e || {};
      return r.commonmark ? Wu : r.gfm ? Vt : Gt;
    }
  });
  var Xu = C((Qv, Ju) => {
    'use strict';
    Ju.exports = [
      'address',
      'article',
      'aside',
      'base',
      'basefont',
      'blockquote',
      'body',
      'caption',
      'center',
      'col',
      'colgroup',
      'dd',
      'details',
      'dialog',
      'dir',
      'div',
      'dl',
      'dt',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'frame',
      'frameset',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'header',
      'hgroup',
      'hr',
      'html',
      'iframe',
      'legend',
      'li',
      'link',
      'main',
      'menu',
      'menuitem',
      'meta',
      'nav',
      'noframes',
      'ol',
      'optgroup',
      'option',
      'p',
      'param',
      'pre',
      'section',
      'source',
      'title',
      'summary',
      'table',
      'tbody',
      'td',
      'tfoot',
      'th',
      'thead',
      'title',
      'tr',
      'track',
      'ul',
    ];
  });
  var jt = C((Zv, Qu) => {
    'use strict';
    Qu.exports = { position: !0, gfm: !0, commonmark: !1, pedantic: !1, blocks: Xu() };
  });
  var ea = C((eE, Zu) => {
    'use strict';
    var ND = Ie(),
      RD = Ku(),
      UD = jt();
    Zu.exports = MD;
    function MD(e) {
      var r = this,
        t = r.options,
        n,
        a;
      if (e == null) e = {};
      else if (typeof e == 'object') e = ND(e);
      else throw new Error('Invalid value `' + e + '` for setting `options`');
      for (n in UD) {
        if (
          ((a = e[n]),
          a == null && (a = t[n]),
          (n !== 'blocks' && typeof a != 'boolean') || (n === 'blocks' && typeof a != 'object'))
        )
          throw new Error('Invalid value `' + a + '` for setting `options.' + n + '`');
        e[n] = a;
      }
      return (r.options = e), (r.escape = RD(e)), r;
    }
  });
  var na = C((rE, ta) => {
    'use strict';
    ta.exports = ra;
    function ra(e) {
      if (e == null) return VD;
      if (typeof e == 'string') return GD(e);
      if (typeof e == 'object') return 'length' in e ? YD(e) : zD(e);
      if (typeof e == 'function') return e;
      throw new Error('Expected function, string, or object as test');
    }
    function zD(e) {
      return r;
      function r(t) {
        var n;
        for (n in e) if (t[n] !== e[n]) return !1;
        return !0;
      }
    }
    function YD(e) {
      for (var r = [], t = -1; ++t < e.length; ) r[t] = ra(e[t]);
      return n;
      function n() {
        for (var a = -1; ++a < r.length; ) if (r[a].apply(this, arguments)) return !0;
        return !1;
      }
    }
    function GD(e) {
      return r;
      function r(t) {
        return !!(t && t.type === e);
      }
    }
    function VD() {
      return !0;
    }
  });
  var ua = C((tE, ia) => {
    ia.exports = jD;
    function jD(e) {
      return e;
    }
  });
  var ca = C((nE, sa) => {
    'use strict';
    sa.exports = $r;
    var $D = na(),
      WD = ua(),
      aa = !0,
      oa = 'skip',
      $t = !1;
    $r.CONTINUE = aa;
    $r.SKIP = oa;
    $r.EXIT = $t;
    function $r(e, r, t, n) {
      var a, u;
      typeof r == 'function' && typeof t != 'function' && ((n = t), (t = r), (r = null)),
        (u = $D(r)),
        (a = n ? -1 : 1),
        i(e, null, [])();
      function i(o, s, l) {
        var c = typeof o == 'object' && o !== null ? o : {},
          f;
        return (
          typeof c.type == 'string' &&
            ((f =
              typeof c.tagName == 'string'
                ? c.tagName
                : typeof c.name == 'string'
                  ? c.name
                  : void 0),
            (p.displayName = 'node (' + WD(c.type + (f ? '<' + f + '>' : '')) + ')')),
          p
        );
        function p() {
          var d = l.concat(o),
            D = [],
            h,
            m;
          if ((!r || u(o, s, l[l.length - 1] || null)) && ((D = HD(t(o, l))), D[0] === $t))
            return D;
          if (o.children && D[0] !== oa)
            for (m = (n ? o.children.length : -1) + a; m > -1 && m < o.children.length; ) {
              if (((h = i(o.children[m], m, d)()), h[0] === $t)) return h;
              m = typeof h[1] == 'number' ? h[1] : m + a;
            }
          return D;
        }
      }
    }
    function HD(e) {
      return e !== null && typeof e == 'object' && 'length' in e
        ? e
        : typeof e == 'number'
          ? [aa, e]
          : [e];
    }
  });
  var fa = C((iE, la) => {
    'use strict';
    la.exports = Hr;
    var Wr = ca(),
      KD = Wr.CONTINUE,
      JD = Wr.SKIP,
      XD = Wr.EXIT;
    Hr.CONTINUE = KD;
    Hr.SKIP = JD;
    Hr.EXIT = XD;
    function Hr(e, r, t, n) {
      typeof r == 'function' && typeof t != 'function' && ((n = t), (t = r), (r = null)),
        Wr(e, r, a, n);
      function a(u, i) {
        var o = i[i.length - 1],
          s = o ? o.children.indexOf(u) : null;
        return t(u, s, o);
      }
    }
  });
  var pa = C((uE, Da) => {
    'use strict';
    var QD = fa();
    Da.exports = ZD;
    function ZD(e, r) {
      return QD(e, r ? ep : rp), e;
    }
    function ep(e) {
      delete e.position;
    }
    function rp(e) {
      e.position = void 0;
    }
  });
  var ma = C((aE, da) => {
    'use strict';
    var ha = Ie(),
      tp = pa();
    da.exports = up;
    var np = `
`,
      ip = /\r\n|\r/g;
    function up() {
      var e = this,
        r = String(e.file),
        t = { line: 1, column: 1, offset: 0 },
        n = ha(t),
        a;
      return (
        (r = r.replace(ip, np)),
        r.charCodeAt(0) === 65279 && ((r = r.slice(1)), n.column++, n.offset++),
        (a = {
          type: 'root',
          children: e.tokenizeBlock(r, n),
          position: { start: t, end: e.eof || ha(t) },
        }),
        e.options.position || tp(a, !0),
        a
      );
    }
  });
  var ga = C((oE, Fa) => {
    'use strict';
    var ap = /^[ \t]*(\n|$)/;
    Fa.exports = op;
    function op(e, r, t) {
      for (var n, a = '', u = 0, i = r.length; u < i && ((n = ap.exec(r.slice(u))), n != null); )
        (u += n[0].length), (a += n[0]);
      if (a !== '') {
        if (t) return !0;
        e(a);
      }
    }
  });
  var Kr = C((sE, va) => {
    'use strict';
    var me = '',
      Wt;
    va.exports = sp;
    function sp(e, r) {
      if (typeof e != 'string') throw new TypeError('expected a string');
      if (r === 1) return e;
      if (r === 2) return e + e;
      var t = e.length * r;
      if (Wt !== e || typeof Wt > 'u') (Wt = e), (me = '');
      else if (me.length >= t) return me.substr(0, t);
      for (; t > me.length && r > 1; ) r & 1 && (me += e), (r >>= 1), (e += e);
      return (me += e), (me = me.substr(0, t)), me;
    }
  });
  var Ht = C((cE, Ea) => {
    'use strict';
    Ea.exports = cp;
    function cp(e) {
      return String(e).replace(/\n+$/, '');
    }
  });
  var ya = C((lE, ba) => {
    'use strict';
    var lp = Kr(),
      fp = Ht();
    ba.exports = hp;
    var Kt = `
`,
      Ca = '	',
      Jt = ' ',
      Dp = 4,
      pp = lp(Jt, Dp);
    function hp(e, r, t) {
      for (var n = -1, a = r.length, u = '', i = '', o = '', s = '', l, c, f; ++n < a; )
        if (((l = r.charAt(n)), f))
          if (((f = !1), (u += o), (i += s), (o = ''), (s = ''), l === Kt)) (o = l), (s = l);
          else
            for (u += l, i += l; ++n < a; ) {
              if (((l = r.charAt(n)), !l || l === Kt)) {
                (s = l), (o = l);
                break;
              }
              (u += l), (i += l);
            }
        else if (
          l === Jt &&
          r.charAt(n + 1) === l &&
          r.charAt(n + 2) === l &&
          r.charAt(n + 3) === l
        )
          (o += pp), (n += 3), (f = !0);
        else if (l === Ca) (o += l), (f = !0);
        else {
          for (c = ''; l === Ca || l === Jt; ) (c += l), (l = r.charAt(++n));
          if (l !== Kt) break;
          (o += c + l), (s += l);
        }
      if (i) return t ? !0 : e(u)({ type: 'code', lang: null, meta: null, value: fp(i) });
    }
  });
  var xa = C((fE, wa) => {
    'use strict';
    wa.exports = gp;
    var Jr = `
`,
      mr = '	',
      Je = ' ',
      dp = '~',
      Aa = '`',
      mp = 3,
      Fp = 4;
    function gp(e, r, t) {
      var n = this,
        a = n.options.gfm,
        u = r.length + 1,
        i = 0,
        o = '',
        s,
        l,
        c,
        f,
        p,
        d,
        D,
        h,
        m,
        F,
        y,
        E,
        B;
      if (a) {
        for (; i < u && ((c = r.charAt(i)), !(c !== Je && c !== mr)); ) (o += c), i++;
        if (((E = i), (c = r.charAt(i)), !(c !== dp && c !== Aa))) {
          for (i++, l = c, s = 1, o += c; i < u && ((c = r.charAt(i)), c === l); )
            (o += c), s++, i++;
          if (!(s < mp)) {
            for (; i < u && ((c = r.charAt(i)), !(c !== Je && c !== mr)); ) (o += c), i++;
            for (
              f = '', D = '';
              i < u && ((c = r.charAt(i)), !(c === Jr || (l === Aa && c === l)));

            )
              c === Je || c === mr ? (D += c) : ((f += D + c), (D = '')), i++;
            if (((c = r.charAt(i)), !(c && c !== Jr))) {
              if (t) return !0;
              (B = e.now()),
                (B.column += o.length),
                (B.offset += o.length),
                (o += f),
                (f = n.decode.raw(n.unescape(f), B)),
                D && (o += D),
                (D = ''),
                (F = ''),
                (y = ''),
                (h = ''),
                (m = '');
              for (var b = !0; i < u; ) {
                if (((c = r.charAt(i)), (h += F), (m += y), (F = ''), (y = ''), c !== Jr)) {
                  (h += c), (y += c), i++;
                  continue;
                }
                for (
                  b ? ((o += c), (b = !1)) : ((F += c), (y += c)), D = '', i++;
                  i < u && ((c = r.charAt(i)), c === Je);

                )
                  (D += c), i++;
                if (((F += D), (y += D.slice(E)), !(D.length >= Fp))) {
                  for (D = ''; i < u && ((c = r.charAt(i)), c === l); ) (D += c), i++;
                  if (((F += D), (y += D), !(D.length < s))) {
                    for (D = ''; i < u && ((c = r.charAt(i)), !(c !== Je && c !== mr)); )
                      (F += c), (y += c), i++;
                    if (!c || c === Jr) break;
                  }
                }
              }
              for (o += h + F, i = -1, u = f.length; ++i < u; )
                if (((c = f.charAt(i)), c === Je || c === mr)) p || (p = f.slice(0, i));
                else if (p) {
                  d = f.slice(i);
                  break;
                }
              return e(o)({ type: 'code', lang: p || f || null, meta: d || null, value: m });
            }
          }
        }
      }
    }
  });
  var Re = C((Xe, ka) => {
    Xe = ka.exports = vp;
    function vp(e) {
      return e.trim ? e.trim() : Xe.right(Xe.left(e));
    }
    Xe.left = function (e) {
      return e.trimLeft ? e.trimLeft() : e.replace(/^\s\s*/, '');
    };
    Xe.right = function (e) {
      if (e.trimRight) return e.trimRight();
      for (var r = /\s/, t = e.length; r.test(e.charAt(--t)); );
      return e.slice(0, t + 1);
    };
  });
  var Xr = C((DE, Ba) => {
    'use strict';
    Ba.exports = Ep;
    function Ep(e, r, t, n) {
      for (var a = e.length, u = -1, i, o; ++u < a; )
        if (
          ((i = e[u]),
          (o = i[1] || {}),
          !(o.pedantic !== void 0 && o.pedantic !== t.options.pedantic) &&
            !(o.commonmark !== void 0 && o.commonmark !== t.options.commonmark) &&
            r[i[0]].apply(t, n))
        )
          return !0;
      return !1;
    }
  });
  var Sa = C((pE, _a) => {
    'use strict';
    var Cp = Re(),
      bp = Xr();
    _a.exports = yp;
    var Xt = `
`,
      Ta = '	',
      Qt = ' ',
      qa = '>';
    function yp(e, r, t) {
      for (
        var n = this,
          a = n.offset,
          u = n.blockTokenizers,
          i = n.interruptBlockquote,
          o = e.now(),
          s = o.line,
          l = r.length,
          c = [],
          f = [],
          p = [],
          d,
          D = 0,
          h,
          m,
          F,
          y,
          E,
          B,
          b,
          g;
        D < l && ((h = r.charAt(D)), !(h !== Qt && h !== Ta));

      )
        D++;
      if (r.charAt(D) === qa) {
        if (t) return !0;
        for (D = 0; D < l; ) {
          for (
            F = r.indexOf(Xt, D), B = D, b = !1, F === -1 && (F = l);
            D < l && ((h = r.charAt(D)), !(h !== Qt && h !== Ta));

          )
            D++;
          if (
            (r.charAt(D) === qa ? (D++, (b = !0), r.charAt(D) === Qt && D++) : (D = B),
            (y = r.slice(D, F)),
            !b && !Cp(y))
          ) {
            D = B;
            break;
          }
          if (!b && ((m = r.slice(D)), bp(i, u, n, [e, m, !0]))) break;
          (E = B === D ? y : r.slice(B, F)), p.push(D - B), c.push(E), f.push(y), (D = F + 1);
        }
        for (D = -1, l = p.length, d = e(c.join(Xt)); ++D < l; ) (a[s] = (a[s] || 0) + p[D]), s++;
        return (
          (g = n.enterBlock()),
          (f = n.tokenizeBlock(f.join(Xt), o)),
          g(),
          d({ type: 'blockquote', children: f })
        );
      }
    }
  });
  var Pa = C((hE, La) => {
    'use strict';
    La.exports = wp;
    var Oa = `
`,
      Fr = '	',
      gr = ' ',
      vr = '#',
      Ap = 6;
    function wp(e, r, t) {
      for (
        var n = this,
          a = n.options.pedantic,
          u = r.length + 1,
          i = -1,
          o = e.now(),
          s = '',
          l = '',
          c,
          f,
          p;
        ++i < u;

      ) {
        if (((c = r.charAt(i)), c !== gr && c !== Fr)) {
          i--;
          break;
        }
        s += c;
      }
      for (p = 0; ++i <= u; ) {
        if (((c = r.charAt(i)), c !== vr)) {
          i--;
          break;
        }
        (s += c), p++;
      }
      if (!(p > Ap) && !(!p || (!a && r.charAt(i + 1) === vr))) {
        for (u = r.length + 1, f = ''; ++i < u; ) {
          if (((c = r.charAt(i)), c !== gr && c !== Fr)) {
            i--;
            break;
          }
          f += c;
        }
        if (!(!a && f.length === 0 && c && c !== Oa)) {
          if (t) return !0;
          for (s += f, f = '', l = ''; ++i < u && ((c = r.charAt(i)), !(!c || c === Oa)); ) {
            if (c !== gr && c !== Fr && c !== vr) {
              (l += f + c), (f = '');
              continue;
            }
            for (; c === gr || c === Fr; ) (f += c), (c = r.charAt(++i));
            if (!a && l && !f && c === vr) {
              l += c;
              continue;
            }
            for (; c === vr; ) (f += c), (c = r.charAt(++i));
            for (; c === gr || c === Fr; ) (f += c), (c = r.charAt(++i));
            i--;
          }
          return (
            (o.column += s.length),
            (o.offset += s.length),
            (s += l + f),
            e(s)({ type: 'heading', depth: p, children: n.tokenizeInline(l, o) })
          );
        }
      }
    }
  });
  var Ra = C((dE, Na) => {
    'use strict';
    Na.exports = Sp;
    var xp = '	',
      kp = `
`,
      Ia = ' ',
      Bp = '*',
      Tp = '-',
      qp = '_',
      _p = 3;
    function Sp(e, r, t) {
      for (
        var n = -1, a = r.length + 1, u = '', i, o, s, l;
        ++n < a && ((i = r.charAt(n)), !(i !== xp && i !== Ia));

      )
        u += i;
      if (!(i !== Bp && i !== Tp && i !== qp))
        for (o = i, u += i, s = 1, l = ''; ++n < a; )
          if (((i = r.charAt(n)), i === o)) s++, (u += l + o), (l = '');
          else if (i === Ia) l += i;
          else
            return s >= _p && (!i || i === kp)
              ? ((u += l), t ? !0 : e(u)({ type: 'thematicBreak' }))
              : void 0;
    }
  });
  var Zt = C((mE, Ma) => {
    'use strict';
    Ma.exports = Ip;
    var Ua = '	',
      Op = ' ',
      Lp = 1,
      Pp = 4;
    function Ip(e) {
      for (var r = 0, t = 0, n = e.charAt(r), a = {}, u, i = 0; n === Ua || n === Op; ) {
        for (u = n === Ua ? Pp : Lp, t += u, u > 1 && (t = Math.floor(t / u) * u); i < t; )
          a[++i] = r;
        n = e.charAt(++r);
      }
      return { indent: t, stops: a };
    }
  });
  var Ga = C((FE, Ya) => {
    'use strict';
    var Np = Re(),
      Rp = Kr(),
      Up = Zt();
    Ya.exports = Yp;
    var za = `
`,
      Mp = ' ',
      zp = '!';
    function Yp(e, r) {
      var t = e.split(za),
        n = t.length + 1,
        a = 1 / 0,
        u = [],
        i,
        o,
        s;
      for (t.unshift(Rp(Mp, r) + zp); n--; )
        if (((o = Up(t[n])), (u[n] = o.stops), Np(t[n]).length !== 0))
          if (o.indent) o.indent > 0 && o.indent < a && (a = o.indent);
          else {
            a = 1 / 0;
            break;
          }
      if (a !== 1 / 0)
        for (n = t.length; n--; ) {
          for (s = u[n], i = a; i && !(i in s); ) i--;
          t[n] = t[n].slice(s[i] + 1);
        }
      return t.shift(), t.join(za);
    }
  });
  var Ka = C((gE, Ha) => {
    'use strict';
    var Gp = Re(),
      Vp = Kr(),
      Va = Ne(),
      jp = Zt(),
      $p = Ga(),
      Wp = Xr();
    Ha.exports = rh;
    var en = '*',
      Hp = '_',
      ja = '+',
      rn = '-',
      $a = '.',
      Fe = ' ',
      ae = `
`,
      Qr = '	',
      Wa = ')',
      Kp = 'x',
      xe = 4,
      Jp = /\n\n(?!\s*$)/,
      Xp = /^\[([ X\tx])][ \t]/,
      Qp = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,
      Zp = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,
      eh = /^( {1,4}|\t)?/gm;
    function rh(e, r, t) {
      for (
        var n = this,
          a = n.options.commonmark,
          u = n.options.pedantic,
          i = n.blockTokenizers,
          o = n.interruptList,
          s = 0,
          l = r.length,
          c = null,
          f,
          p,
          d,
          D,
          h,
          m,
          F,
          y,
          E,
          B,
          b,
          g,
          A,
          w,
          v,
          x,
          k,
          T,
          q,
          R = !1,
          O,
          S,
          _,
          L;
        s < l && ((D = r.charAt(s)), !(D !== Qr && D !== Fe));

      )
        s++;
      if (((D = r.charAt(s)), D === en || D === ja || D === rn)) (h = D), (d = !1);
      else {
        for (d = !0, p = ''; s < l && ((D = r.charAt(s)), !!Va(D)); ) (p += D), s++;
        if (((D = r.charAt(s)), !p || !(D === $a || (a && D === Wa)) || (t && p !== '1'))) return;
        (c = parseInt(p, 10)), (h = D);
      }
      if (((D = r.charAt(++s)), !(D !== Fe && D !== Qr && (u || (D !== ae && D !== ''))))) {
        if (t) return !0;
        for (s = 0, w = [], v = [], x = []; s < l; ) {
          for (m = r.indexOf(ae, s), F = s, y = !1, L = !1, m === -1 && (m = l), f = 0; s < l; ) {
            if (((D = r.charAt(s)), D === Qr)) f += xe - (f % xe);
            else if (D === Fe) f++;
            else break;
            s++;
          }
          if ((k && f >= k.indent && (L = !0), (D = r.charAt(s)), (E = null), !L)) {
            if (D === en || D === ja || D === rn) (E = D), s++, f++;
            else {
              for (p = ''; s < l && ((D = r.charAt(s)), !!Va(D)); ) (p += D), s++;
              (D = r.charAt(s)),
                s++,
                p && (D === $a || (a && D === Wa)) && ((E = D), (f += p.length + 1));
            }
            if (E)
              if (((D = r.charAt(s)), D === Qr)) (f += xe - (f % xe)), s++;
              else if (D === Fe) {
                for (_ = s + xe; s < _ && r.charAt(s) === Fe; ) s++, f++;
                s === _ && r.charAt(s) === Fe && ((s -= xe - 1), (f -= xe - 1));
              } else D !== ae && D !== '' && (E = null);
          }
          if (E) {
            if (!u && h !== E) break;
            y = !0;
          } else
            !a && !L && r.charAt(F) === Fe ? (L = !0) : a && k && (L = f >= k.indent || f > xe),
              (y = !1),
              (s = F);
          if (
            ((b = r.slice(F, m)),
            (B = F === s ? b : r.slice(s, m)),
            (E === en || E === Hp || E === rn) && i.thematicBreak.call(n, e, b, !0))
          )
            break;
          if (((g = A), (A = !y && !Gp(B).length), L && k))
            (k.value = k.value.concat(x, b)), (v = v.concat(x, b)), (x = []);
          else if (y)
            x.length !== 0 && ((R = !0), k.value.push(''), (k.trail = x.concat())),
              (k = { value: [b], indent: f, trail: [] }),
              w.push(k),
              (v = v.concat(x, b)),
              (x = []);
          else if (A) {
            if (g && !a) break;
            x.push(b);
          } else {
            if (g || Wp(o, i, n, [e, b, !0])) break;
            (k.value = k.value.concat(x, b)), (v = v.concat(x, b)), (x = []);
          }
          s = m + 1;
        }
        for (
          O = e(v.join(ae)).reset({ type: 'list', ordered: d, start: c, spread: R, children: [] }),
            T = n.enterList(),
            q = n.enterBlock(),
            s = -1,
            l = w.length;
          ++s < l;

        )
          (k = w[s].value.join(ae)),
            (S = e.now()),
            e(k)(th(n, k, S), O),
            (k = w[s].trail.join(ae)),
            s !== l - 1 && (k += ae),
            e(k);
        return T(), q(), O;
      }
    }
    function th(e, r, t) {
      var n = e.offset,
        a = e.options.pedantic ? nh : ih,
        u = null,
        i,
        o;
      return (
        (r = a.apply(null, arguments)),
        e.options.gfm &&
          ((i = r.match(Xp)),
          i &&
            ((o = i[0].length),
            (u = i[1].toLowerCase() === Kp),
            (n[t.line] += o),
            (r = r.slice(o)))),
        { type: 'listItem', spread: Jp.test(r), checked: u, children: e.tokenizeBlock(r, t) }
      );
    }
    function nh(e, r, t) {
      var n = e.offset,
        a = t.line;
      return (r = r.replace(Zp, u)), (a = t.line), r.replace(eh, u);
      function u(i) {
        return (n[a] = (n[a] || 0) + i.length), a++, '';
      }
    }
    function ih(e, r, t) {
      var n = e.offset,
        a = t.line,
        u,
        i,
        o,
        s,
        l,
        c,
        f;
      for (
        r = r.replace(Qp, p),
          s = r.split(ae),
          l = $p(r, jp(u).indent).split(ae),
          l[0] = o,
          n[a] = (n[a] || 0) + i.length,
          a++,
          c = 0,
          f = s.length;
        ++c < f;

      )
        (n[a] = (n[a] || 0) + s[c].length - l[c].length), a++;
      return l.join(ae);
      function p(d, D, h, m, F) {
        return (
          (i = D + h + m),
          (o = F),
          Number(h) < 10 && i.length % 2 === 1 && (h = Fe + h),
          (u = D + Vp(Fe, h.length) + m),
          u + o
        );
      }
    }
  });
  var Za = C((vE, Qa) => {
    'use strict';
    Qa.exports = lh;
    var tn = `
`,
      uh = '	',
      Ja = ' ',
      Xa = '=',
      ah = '-',
      oh = 3,
      sh = 1,
      ch = 2;
    function lh(e, r, t) {
      for (var n = this, a = e.now(), u = r.length, i = -1, o = '', s, l, c, f, p; ++i < u; ) {
        if (((c = r.charAt(i)), c !== Ja || i >= oh)) {
          i--;
          break;
        }
        o += c;
      }
      for (s = '', l = ''; ++i < u; ) {
        if (((c = r.charAt(i)), c === tn)) {
          i--;
          break;
        }
        c === Ja || c === uh ? (l += c) : ((s += l + c), (l = ''));
      }
      if (
        ((a.column += o.length),
        (a.offset += o.length),
        (o += s + l),
        (c = r.charAt(++i)),
        (f = r.charAt(++i)),
        !(c !== tn || (f !== Xa && f !== ah)))
      ) {
        for (o += c, l = f, p = f === Xa ? sh : ch; ++i < u; ) {
          if (((c = r.charAt(i)), c !== f)) {
            if (c !== tn) return;
            i--;
            break;
          }
          l += c;
        }
        return t ? !0 : e(o + l)({ type: 'heading', depth: p, children: n.tokenizeInline(s, a) });
      }
    }
  });
  var un = C(nn => {
    'use strict';
    var fh = '[a-zA-Z_:][a-zA-Z0-9:._-]*',
      Dh = '[^"\'=<>`\\u0000-\\u0020]+',
      ph = "'[^']*'",
      hh = '"[^"]*"',
      dh = '(?:' + Dh + '|' + ph + '|' + hh + ')',
      mh = '(?:\\s+' + fh + '(?:\\s*=\\s*' + dh + ')?)',
      eo = '<[A-Za-z][A-Za-z0-9\\-]*' + mh + '*\\s*\\/?>',
      ro = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>',
      Fh = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->',
      gh = '<[?].*?[?]>',
      vh = '<![A-Za-z]+\\s+[^>]*>',
      Eh = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';
    nn.openCloseTag = new RegExp('^(?:' + eo + '|' + ro + ')');
    nn.tag = new RegExp('^(?:' + eo + '|' + ro + '|' + Fh + '|' + gh + '|' + vh + '|' + Eh + ')');
  });
  var uo = C((CE, io) => {
    'use strict';
    var Ch = un().openCloseTag;
    io.exports = Ih;
    var bh = '	',
      yh = ' ',
      to = `
`,
      Ah = '<',
      wh = /^<(script|pre|style)(?=(\s|>|$))/i,
      xh = /<\/(script|pre|style)>/i,
      kh = /^<!--/,
      Bh = /-->/,
      Th = /^<\?/,
      qh = /\?>/,
      _h = /^<![A-Za-z]/,
      Sh = />/,
      Oh = /^<!\[CDATA\[/,
      Lh = /]]>/,
      no = /^$/,
      Ph = new RegExp(Ch.source + '\\s*$');
    function Ih(e, r, t) {
      for (
        var n = this,
          a = n.options.blocks.join('|'),
          u = new RegExp('^</?(' + a + ')(?=(\\s|/?>|$))', 'i'),
          i = r.length,
          o = 0,
          s,
          l,
          c,
          f,
          p,
          d,
          D,
          h = [
            [wh, xh, !0],
            [kh, Bh, !0],
            [Th, qh, !0],
            [_h, Sh, !0],
            [Oh, Lh, !0],
            [u, no, !0],
            [Ph, no, !1],
          ];
        o < i && ((f = r.charAt(o)), !(f !== bh && f !== yh));

      )
        o++;
      if (r.charAt(o) === Ah) {
        for (
          s = r.indexOf(to, o + 1), s = s === -1 ? i : s, l = r.slice(o, s), c = -1, p = h.length;
          ++c < p;

        )
          if (h[c][0].test(l)) {
            d = h[c];
            break;
          }
        if (d) {
          if (t) return d[2];
          if (((o = s), !d[1].test(l)))
            for (; o < i; ) {
              if (
                ((s = r.indexOf(to, o + 1)),
                (s = s === -1 ? i : s),
                (l = r.slice(o + 1, s)),
                d[1].test(l))
              ) {
                l && (o = s);
                break;
              }
              o = s;
            }
          return (D = r.slice(0, o)), e(D)({ type: 'html', value: D });
        }
      }
    }
  });
  var oe = C((bE, ao) => {
    'use strict';
    ao.exports = Uh;
    var Nh = String.fromCharCode,
      Rh = /\s/;
    function Uh(e) {
      return Rh.test(typeof e == 'number' ? Nh(e) : e.charAt(0));
    }
  });
  var an = C((yE, oo) => {
    'use strict';
    var Mh = Br();
    oo.exports = zh;
    function zh(e) {
      return Mh(e).toLowerCase();
    }
  });
  var ho = C((AE, po) => {
    'use strict';
    var Yh = oe(),
      Gh = an();
    po.exports = Wh;
    var so = '"',
      co = "'",
      Vh = '\\',
      Qe = `
`,
      Zr = '	',
      et = ' ',
      sn = '[',
      Er = ']',
      jh = '(',
      $h = ')',
      lo = ':',
      fo = '<',
      Do = '>';
    function Wh(e, r, t) {
      for (
        var n = this, a = n.options.commonmark, u = 0, i = r.length, o = '', s, l, c, f, p, d, D, h;
        u < i && ((f = r.charAt(u)), !(f !== et && f !== Zr));

      )
        (o += f), u++;
      if (((f = r.charAt(u)), f === sn)) {
        for (u++, o += f, c = ''; u < i && ((f = r.charAt(u)), f !== Er); )
          f === Vh && ((c += f), u++, (f = r.charAt(u))), (c += f), u++;
        if (!(!c || r.charAt(u) !== Er || r.charAt(u + 1) !== lo)) {
          for (
            d = c, o += c + Er + lo, u = o.length, c = '';
            u < i && ((f = r.charAt(u)), !(f !== Zr && f !== et && f !== Qe));

          )
            (o += f), u++;
          if (((f = r.charAt(u)), (c = ''), (s = o), f === fo)) {
            for (u++; u < i && ((f = r.charAt(u)), !!on(f)); ) (c += f), u++;
            if (((f = r.charAt(u)), f === on.delimiter)) (o += fo + c + f), u++;
            else {
              if (a) return;
              (u -= c.length + 1), (c = '');
            }
          }
          if (!c) {
            for (; u < i && ((f = r.charAt(u)), !!Hh(f)); ) (c += f), u++;
            o += c;
          }
          if (c) {
            for (D = c, c = ''; u < i && ((f = r.charAt(u)), !(f !== Zr && f !== et && f !== Qe)); )
              (c += f), u++;
            if (
              ((f = r.charAt(u)),
              (p = null),
              f === so ? (p = so) : f === co ? (p = co) : f === jh && (p = $h),
              !p)
            )
              (c = ''), (u = o.length);
            else if (c) {
              for (o += c + f, u = o.length, c = ''; u < i && ((f = r.charAt(u)), f !== p); ) {
                if (f === Qe) {
                  if ((u++, (f = r.charAt(u)), f === Qe || f === p)) return;
                  c += Qe;
                }
                (c += f), u++;
              }
              if (((f = r.charAt(u)), f !== p)) return;
              (l = o), (o += c + f), u++, (h = c), (c = '');
            } else return;
            for (; u < i && ((f = r.charAt(u)), !(f !== Zr && f !== et)); ) (o += f), u++;
            if (((f = r.charAt(u)), !f || f === Qe))
              return t
                ? !0
                : ((s = e(s).test().end),
                  (D = n.decode.raw(n.unescape(D), s, { nonTerminated: !1 })),
                  h && ((l = e(l).test().end), (h = n.decode.raw(n.unescape(h), l))),
                  e(o)({
                    type: 'definition',
                    identifier: Gh(d),
                    label: d,
                    title: h || null,
                    url: D,
                  }));
          }
        }
      }
    }
    function on(e) {
      return e !== Do && e !== sn && e !== Er;
    }
    on.delimiter = Do;
    function Hh(e) {
      return e !== sn && e !== Er && !Yh(e);
    }
  });
  var go = C((wE, Fo) => {
    'use strict';
    var Kh = oe();
    Fo.exports = ud;
    var Jh = '	',
      rt = `
`,
      Xh = ' ',
      Qh = '-',
      Zh = ':',
      ed = '\\',
      cn = '|',
      rd = 1,
      td = 2,
      mo = 'left',
      nd = 'center',
      id = 'right';
    function ud(e, r, t) {
      var n = this,
        a,
        u,
        i,
        o,
        s,
        l,
        c,
        f,
        p,
        d,
        D,
        h,
        m,
        F,
        y,
        E,
        B,
        b,
        g,
        A,
        w,
        v;
      if (n.options.gfm) {
        for (a = 0, E = 0, l = r.length + 1, c = []; a < l; ) {
          if (
            ((A = r.indexOf(rt, a)),
            (w = r.indexOf(cn, a + 1)),
            A === -1 && (A = r.length),
            w === -1 || w > A)
          ) {
            if (E < td) return;
            break;
          }
          c.push(r.slice(a, A)), E++, (a = A + 1);
        }
        for (
          o = c.join(rt), u = c.splice(1, 1)[0] || [], a = 0, l = u.length, E--, i = !1, D = [];
          a < l;

        ) {
          if (((p = u.charAt(a)), p === cn)) {
            if (((d = null), i === !1)) {
              if (v === !1) return;
            } else D.push(i), (i = !1);
            v = !1;
          } else if (p === Qh) (d = !0), (i = i || null);
          else if (p === Zh) i === mo ? (i = nd) : d && i === null ? (i = id) : (i = mo);
          else if (!Kh(p)) return;
          a++;
        }
        if ((i !== !1 && D.push(i), !(D.length < rd))) {
          if (t) return !0;
          for (
            y = -1, b = [], g = e(o).reset({ type: 'table', align: D, children: b });
            ++y < E;

          ) {
            for (
              B = c[y],
                s = { type: 'tableRow', children: [] },
                y && e(rt),
                e(B).reset(s, g),
                l = B.length + 1,
                a = 0,
                f = '',
                h = '',
                m = !0;
              a < l;

            ) {
              if (((p = B.charAt(a)), p === Jh || p === Xh)) {
                h ? (f += p) : e(p), a++;
                continue;
              }
              p === '' || p === cn
                ? m
                  ? e(p)
                  : ((h || p) &&
                      !m &&
                      ((o = h),
                      f.length > 1 &&
                        (p
                          ? ((o += f.slice(0, -1)), (f = f.charAt(f.length - 1)))
                          : ((o += f), (f = ''))),
                      (F = e.now()),
                      e(o)({ type: 'tableCell', children: n.tokenizeInline(h, F) }, s)),
                    e(f + p),
                    (f = ''),
                    (h = ''))
                : (f && ((h += f), (f = '')),
                  (h += p),
                  p === ed && a !== l - 2 && ((h += B.charAt(a + 1)), a++)),
                (m = !1),
                a++;
            }
            y || e(rt + u);
          }
          return g;
        }
      }
    }
  });
  var Co = C((xE, Eo) => {
    'use strict';
    var ad = Re(),
      od = Ht(),
      sd = Xr();
    Eo.exports = fd;
    var cd = '	',
      Cr = `
`,
      ld = ' ',
      vo = 4;
    function fd(e, r, t) {
      for (
        var n = this,
          a = n.options,
          u = a.commonmark,
          i = n.blockTokenizers,
          o = n.interruptParagraph,
          s = r.indexOf(Cr),
          l = r.length,
          c,
          f,
          p,
          d,
          D;
        s < l;

      ) {
        if (s === -1) {
          s = l;
          break;
        }
        if (r.charAt(s + 1) === Cr) break;
        if (u) {
          for (d = 0, c = s + 1; c < l; ) {
            if (((p = r.charAt(c)), p === cd)) {
              d = vo;
              break;
            } else if (p === ld) d++;
            else break;
            c++;
          }
          if (d >= vo && p !== Cr) {
            s = r.indexOf(Cr, s + 1);
            continue;
          }
        }
        if (((f = r.slice(s + 1)), sd(o, i, n, [e, f, !0]))) break;
        if (((c = s), (s = r.indexOf(Cr, s + 1)), s !== -1 && ad(r.slice(c, s)) === '')) {
          s = c;
          break;
        }
      }
      return (
        (f = r.slice(0, s)),
        t
          ? !0
          : ((D = e.now()),
            (f = od(f)),
            e(f)({ type: 'paragraph', children: n.tokenizeInline(f, D) }))
      );
    }
  });
  var yo = C((kE, bo) => {
    'use strict';
    bo.exports = Dd;
    function Dd(e, r) {
      return e.indexOf('\\', r);
    }
  });
  var ko = C((BE, xo) => {
    'use strict';
    var pd = yo();
    xo.exports = wo;
    wo.locator = pd;
    var hd = `
`,
      Ao = '\\';
    function wo(e, r, t) {
      var n = this,
        a,
        u;
      if (r.charAt(0) === Ao && ((a = r.charAt(1)), n.escape.indexOf(a) !== -1))
        return t
          ? !0
          : (a === hd ? (u = { type: 'break' }) : (u = { type: 'text', value: a }), e(Ao + a)(u));
    }
  });
  var ln = C((TE, Bo) => {
    'use strict';
    Bo.exports = dd;
    function dd(e, r) {
      return e.indexOf('<', r);
    }
  });
  var Oo = C((qE, So) => {
    'use strict';
    var To = oe(),
      md = dr(),
      Fd = ln();
    So.exports = hn;
    hn.locator = Fd;
    hn.notInLink = !0;
    var qo = '<',
      fn = '>',
      _o = '@',
      Dn = '/',
      pn = 'mailto:',
      tt = pn.length;
    function hn(e, r, t) {
      var n = this,
        a = '',
        u = r.length,
        i = 0,
        o = '',
        s = !1,
        l = '',
        c,
        f,
        p,
        d,
        D;
      if (r.charAt(0) === qo) {
        for (
          i++, a = qo;
          i < u &&
          ((c = r.charAt(i)),
          !(To(c) || c === fn || c === _o || (c === ':' && r.charAt(i + 1) === Dn)));

        )
          (o += c), i++;
        if (o) {
          if (((l += o), (o = ''), (c = r.charAt(i)), (l += c), i++, c === _o)) s = !0;
          else {
            if (c !== ':' || r.charAt(i + 1) !== Dn) return;
            (l += Dn), i++;
          }
          for (; i < u && ((c = r.charAt(i)), !(To(c) || c === fn)); ) (o += c), i++;
          if (((c = r.charAt(i)), !(!o || c !== fn)))
            return t
              ? !0
              : ((l += o),
                (p = l),
                (a += l + c),
                (f = e.now()),
                f.column++,
                f.offset++,
                s &&
                  (l.slice(0, tt).toLowerCase() === pn
                    ? ((p = p.slice(tt)), (f.column += tt), (f.offset += tt))
                    : (l = pn + l)),
                (d = n.inlineTokenizers),
                (n.inlineTokenizers = { text: d.text }),
                (D = n.enterLink()),
                (p = n.tokenizeInline(p, f)),
                (n.inlineTokenizers = d),
                D(),
                e(a)({
                  type: 'link',
                  title: null,
                  url: md(l, { nonTerminated: !1 }),
                  children: p,
                }));
        }
      }
    }
  });
  var Po = C((_E, Lo) => {
    'use strict';
    Lo.exports = gd;
    function gd(e, r) {
      var t = String(e),
        n = 0,
        a;
      if (typeof r != 'string') throw new Error('Expected character');
      for (a = t.indexOf(r); a !== -1; ) n++, (a = t.indexOf(r, a + r.length));
      return n;
    }
  });
  var Ro = C((SE, No) => {
    'use strict';
    No.exports = vd;
    var Io = ['www.', 'http://', 'https://'];
    function vd(e, r) {
      var t = -1,
        n,
        a,
        u;
      if (!this.options.gfm) return t;
      for (a = Io.length, n = -1; ++n < a; )
        (u = e.indexOf(Io[n], r)), u !== -1 && (t === -1 || u < t) && (t = u);
      return t;
    }
  });
  var Go = C((OE, Yo) => {
    'use strict';
    var Uo = Po(),
      Ed = dr(),
      Cd = Ne(),
      dn = We(),
      bd = oe(),
      yd = Ro();
    Yo.exports = Fn;
    Fn.locator = yd;
    Fn.notInLink = !0;
    var Ad = 33,
      wd = 38,
      xd = 41,
      kd = 42,
      Bd = 44,
      Td = 45,
      mn = 46,
      qd = 58,
      _d = 59,
      Sd = 63,
      Od = 60,
      Mo = 95,
      Ld = 126,
      Pd = '(',
      zo = ')';
    function Fn(e, r, t) {
      var n = this,
        a = n.options.gfm,
        u = n.inlineTokenizers,
        i = r.length,
        o = -1,
        s = !1,
        l,
        c,
        f,
        p,
        d,
        D,
        h,
        m,
        F,
        y,
        E,
        B,
        b,
        g;
      if (a) {
        if (r.slice(0, 4) === 'www.') (s = !0), (p = 4);
        else if (r.slice(0, 7).toLowerCase() === 'http://') p = 7;
        else if (r.slice(0, 8).toLowerCase() === 'https://') p = 8;
        else return;
        for (o = p - 1, f = p, l = []; p < i; ) {
          if (((h = r.charCodeAt(p)), h === mn)) {
            if (o === p - 1) break;
            l.push(p), (o = p), p++;
            continue;
          }
          if (Cd(h) || dn(h) || h === Td || h === Mo) {
            p++;
            continue;
          }
          break;
        }
        if (
          (h === mn && (l.pop(), p--),
          l[0] !== void 0 &&
            ((c = l.length < 2 ? f : l[l.length - 2] + 1), r.slice(c, p).indexOf('_') === -1))
        ) {
          if (t) return !0;
          for (m = p, d = p; p < i && ((h = r.charCodeAt(p)), !(bd(h) || h === Od)); )
            p++,
              h === Ad ||
                h === kd ||
                h === Bd ||
                h === mn ||
                h === qd ||
                h === Sd ||
                h === Mo ||
                h === Ld ||
                (m = p);
          if (((p = m), r.charCodeAt(p - 1) === xd))
            for (D = r.slice(d, p), F = Uo(D, Pd), y = Uo(D, zo); y > F; )
              (p = d + D.lastIndexOf(zo)), (D = r.slice(d, p)), y--;
          if (r.charCodeAt(p - 1) === _d && (p--, dn(r.charCodeAt(p - 1)))) {
            for (m = p - 2; dn(r.charCodeAt(m)); ) m--;
            r.charCodeAt(m) === wd && (p = m);
          }
          return (
            (E = r.slice(0, p)),
            (b = Ed(E, { nonTerminated: !1 })),
            s && (b = 'http://' + b),
            (g = n.enterLink()),
            (n.inlineTokenizers = { text: u.text }),
            (B = n.tokenizeInline(E, e.now())),
            (n.inlineTokenizers = u),
            g(),
            e(E)({ type: 'link', title: null, url: b, children: B })
          );
        }
      }
    }
  });
  var Wo = C((LE, $o) => {
    'use strict';
    var Id = Ne(),
      Nd = We(),
      Rd = 43,
      Ud = 45,
      Md = 46,
      zd = 95;
    $o.exports = jo;
    function jo(e, r) {
      var t = this,
        n,
        a;
      if (!this.options.gfm || ((n = e.indexOf('@', r)), n === -1)) return -1;
      if (((a = n), a === r || !Vo(e.charCodeAt(a - 1)))) return jo.call(t, e, n + 1);
      for (; a > r && Vo(e.charCodeAt(a - 1)); ) a--;
      return a;
    }
    function Vo(e) {
      return Id(e) || Nd(e) || e === Rd || e === Ud || e === Md || e === zd;
    }
  });
  var Xo = C((PE, Jo) => {
    'use strict';
    var Yd = dr(),
      Ho = Ne(),
      Ko = We(),
      Gd = Wo();
    Jo.exports = En;
    En.locator = Gd;
    En.notInLink = !0;
    var Vd = 43,
      gn = 45,
      nt = 46,
      jd = 64,
      vn = 95;
    function En(e, r, t) {
      var n = this,
        a = n.options.gfm,
        u = n.inlineTokenizers,
        i = 0,
        o = r.length,
        s = -1,
        l,
        c,
        f,
        p;
      if (a) {
        for (l = r.charCodeAt(i); Ho(l) || Ko(l) || l === Vd || l === gn || l === nt || l === vn; )
          l = r.charCodeAt(++i);
        if (i !== 0 && l === jd) {
          for (i++; i < o; ) {
            if (((l = r.charCodeAt(i)), Ho(l) || Ko(l) || l === gn || l === nt || l === vn)) {
              i++, s === -1 && l === nt && (s = i);
              continue;
            }
            break;
          }
          if (!(s === -1 || s === i || l === gn || l === vn))
            return (
              l === nt && i--,
              (c = r.slice(0, i)),
              t
                ? !0
                : ((p = n.enterLink()),
                  (n.inlineTokenizers = { text: u.text }),
                  (f = n.tokenizeInline(c, e.now())),
                  (n.inlineTokenizers = u),
                  p(),
                  e(c)({
                    type: 'link',
                    title: null,
                    url: 'mailto:' + Yd(c, { nonTerminated: !1 }),
                    children: f,
                  }))
            );
        }
      }
    }
  });
  var es = C((IE, Zo) => {
    'use strict';
    var $d = We(),
      Wd = ln(),
      Hd = un().tag;
    Zo.exports = Qo;
    Qo.locator = Wd;
    var Kd = '<',
      Jd = '?',
      Xd = '!',
      Qd = '/',
      Zd = /^<a /i,
      e0 = /^<\/a>/i;
    function Qo(e, r, t) {
      var n = this,
        a = r.length,
        u,
        i;
      if (
        !(r.charAt(0) !== Kd || a < 3) &&
        ((u = r.charAt(1)),
        !(!$d(u) && u !== Jd && u !== Xd && u !== Qd) && ((i = r.match(Hd)), !!i))
      )
        return t
          ? !0
          : ((i = i[0]),
            !n.inLink && Zd.test(i) ? (n.inLink = !0) : n.inLink && e0.test(i) && (n.inLink = !1),
            e(i)({ type: 'html', value: i }));
    }
  });
  var Cn = C((NE, rs) => {
    'use strict';
    rs.exports = r0;
    function r0(e, r) {
      var t = e.indexOf('[', r),
        n = e.indexOf('![', r);
      return n === -1 || t < n ? t : n;
    }
  });
  var ss = C((RE, os) => {
    'use strict';
    var br = oe(),
      t0 = Cn();
    os.exports = as;
    as.locator = t0;
    var n0 = `
`,
      i0 = '!',
      ts = '"',
      ns = "'",
      Ze = '(',
      yr = ')',
      bn = '<',
      yn = '>',
      is = '[',
      Ar = '\\',
      u0 = ']',
      us = '`';
    function as(e, r, t) {
      var n = this,
        a = '',
        u = 0,
        i = r.charAt(0),
        o = n.options.pedantic,
        s = n.options.commonmark,
        l = n.options.gfm,
        c,
        f,
        p,
        d,
        D,
        h,
        m,
        F,
        y,
        E,
        B,
        b,
        g,
        A,
        w,
        v,
        x,
        k;
      if ((i === i0 && ((F = !0), (a = i), (i = r.charAt(++u))), i === is && !(!F && n.inLink))) {
        for (
          a += i, A = '', u++, B = r.length, v = e.now(), g = 0, v.column += u, v.offset += u;
          u < B;

        ) {
          if (((i = r.charAt(u)), (h = i), i === us)) {
            for (f = 1; r.charAt(u + 1) === us; ) (h += i), u++, f++;
            p ? f >= p && (p = 0) : (p = f);
          } else if (i === Ar) u++, (h += r.charAt(u));
          else if ((!p || l) && i === is) g++;
          else if ((!p || l) && i === u0)
            if (g) g--;
            else {
              if (r.charAt(u + 1) !== Ze) return;
              (h += Ze), (c = !0), u++;
              break;
            }
          (A += h), (h = ''), u++;
        }
        if (c) {
          for (y = A, a += A + h, u++; u < B && ((i = r.charAt(u)), !!br(i)); ) (a += i), u++;
          if (((i = r.charAt(u)), (A = ''), (d = a), i === bn)) {
            for (u++, d += bn; u < B && ((i = r.charAt(u)), i !== yn); ) {
              if (s && i === n0) return;
              (A += i), u++;
            }
            if (r.charAt(u) !== yn) return;
            (a += bn + A + yn), (w = A), u++;
          } else {
            for (
              i = null, h = '';
              u < B && ((i = r.charAt(u)), !(h && (i === ts || i === ns || (s && i === Ze))));

            ) {
              if (br(i)) {
                if (!o) break;
                h += i;
              } else {
                if (i === Ze) g++;
                else if (i === yr) {
                  if (g === 0) break;
                  g--;
                }
                (A += h), (h = ''), i === Ar && ((A += Ar), (i = r.charAt(++u))), (A += i);
              }
              u++;
            }
            (a += A), (w = A), (u = a.length);
          }
          for (A = ''; u < B && ((i = r.charAt(u)), !!br(i)); ) (A += i), u++;
          if (((i = r.charAt(u)), (a += A), A && (i === ts || i === ns || (s && i === Ze))))
            if ((u++, (a += i), (A = ''), (E = i === Ze ? yr : i), (D = a), s)) {
              for (; u < B && ((i = r.charAt(u)), i !== E); )
                i === Ar && ((A += Ar), (i = r.charAt(++u))), u++, (A += i);
              if (((i = r.charAt(u)), i !== E)) return;
              for (b = A, a += A + i, u++; u < B && ((i = r.charAt(u)), !!br(i)); ) (a += i), u++;
            } else
              for (h = ''; u < B; ) {
                if (((i = r.charAt(u)), i === E)) m && ((A += E + h), (h = '')), (m = !0);
                else if (!m) A += i;
                else if (i === yr) {
                  (a += A + E + h), (b = A);
                  break;
                } else br(i) ? (h += i) : ((A += E + h + i), (h = ''), (m = !1));
                u++;
              }
          if (r.charAt(u) === yr)
            return t
              ? !0
              : ((a += yr),
                (w = n.decode.raw(n.unescape(w), e(d).test().end, { nonTerminated: !1 })),
                b && ((D = e(D).test().end), (b = n.decode.raw(n.unescape(b), D))),
                (k = { type: F ? 'image' : 'link', title: b || null, url: w }),
                F
                  ? (k.alt = n.decode.raw(n.unescape(y), v) || null)
                  : ((x = n.enterLink()), (k.children = n.tokenizeInline(y, v)), x()),
                e(a)(k));
        }
      }
    }
  });
  var fs = C((UE, ls) => {
    'use strict';
    var a0 = oe(),
      o0 = Cn(),
      s0 = an();
    ls.exports = cs;
    cs.locator = o0;
    var An = 'link',
      c0 = 'image',
      l0 = 'shortcut',
      f0 = 'collapsed',
      wn = 'full',
      D0 = '!',
      it = '[',
      ut = '\\',
      at = ']';
    function cs(e, r, t) {
      var n = this,
        a = n.options.commonmark,
        u = r.charAt(0),
        i = 0,
        o = r.length,
        s = '',
        l = '',
        c = An,
        f = l0,
        p,
        d,
        D,
        h,
        m,
        F,
        y,
        E;
      if ((u === D0 && ((c = c0), (l = u), (u = r.charAt(++i))), u === it)) {
        for (i++, l += u, F = '', E = 0; i < o; ) {
          if (((u = r.charAt(i)), u === it)) (y = !0), E++;
          else if (u === at) {
            if (!E) break;
            E--;
          }
          u === ut && ((F += ut), (u = r.charAt(++i))), (F += u), i++;
        }
        if (((s = F), (p = F), (u = r.charAt(i)), u === at)) {
          if ((i++, (s += u), (F = ''), !a))
            for (; i < o && ((u = r.charAt(i)), !!a0(u)); ) (F += u), i++;
          if (((u = r.charAt(i)), u === it)) {
            for (d = '', F += u, i++; i < o && ((u = r.charAt(i)), !(u === it || u === at)); )
              u === ut && ((d += ut), (u = r.charAt(++i))), (d += u), i++;
            (u = r.charAt(i)),
              u === at ? ((f = d ? wn : f0), (F += d + u), i++) : (d = ''),
              (s += F),
              (F = '');
          } else {
            if (!p) return;
            d = p;
          }
          if (!(f !== wn && y))
            return (
              (s = l + s),
              c === An && n.inLink
                ? null
                : t
                  ? !0
                  : ((D = e.now()),
                    (D.column += l.length),
                    (D.offset += l.length),
                    (d = f === wn ? d : p),
                    (h = { type: c + 'Reference', identifier: s0(d), label: d, referenceType: f }),
                    c === An
                      ? ((m = n.enterLink()), (h.children = n.tokenizeInline(p, D)), m())
                      : (h.alt = n.decode.raw(n.unescape(p), D) || null),
                    e(s)(h))
            );
        }
      }
    }
  });
  var ps = C((ME, Ds) => {
    'use strict';
    Ds.exports = p0;
    function p0(e, r) {
      var t = e.indexOf('**', r),
        n = e.indexOf('__', r);
      return n === -1 ? t : t === -1 || n < t ? n : t;
    }
  });
  var Fs = C((zE, ms) => {
    'use strict';
    var h0 = Re(),
      hs = oe(),
      d0 = ps();
    ms.exports = ds;
    ds.locator = d0;
    var m0 = '\\',
      F0 = '*',
      g0 = '_';
    function ds(e, r, t) {
      var n = this,
        a = 0,
        u = r.charAt(a),
        i,
        o,
        s,
        l,
        c,
        f,
        p;
      if (
        !((u !== F0 && u !== g0) || r.charAt(++a) !== u) &&
        ((o = n.options.pedantic),
        (s = u),
        (c = s + s),
        (f = r.length),
        a++,
        (l = ''),
        (u = ''),
        !(o && hs(r.charAt(a))))
      )
        for (; a < f; ) {
          if (
            ((p = u),
            (u = r.charAt(a)),
            u === s && r.charAt(a + 1) === s && (!o || !hs(p)) && ((u = r.charAt(a + 2)), u !== s))
          )
            return h0(l)
              ? t
                ? !0
                : ((i = e.now()),
                  (i.column += 2),
                  (i.offset += 2),
                  e(c + l + c)({ type: 'strong', children: n.tokenizeInline(l, i) }))
              : void 0;
          !o && u === m0 && ((l += u), (u = r.charAt(++a))), (l += u), a++;
        }
    }
  });
  var vs = C((YE, gs) => {
    'use strict';
    gs.exports = C0;
    var v0 = String.fromCharCode,
      E0 = /\w/;
    function C0(e) {
      return E0.test(typeof e == 'number' ? v0(e) : e.charAt(0));
    }
  });
  var Cs = C((GE, Es) => {
    'use strict';
    Es.exports = b0;
    function b0(e, r) {
      var t = e.indexOf('*', r),
        n = e.indexOf('_', r);
      return n === -1 ? t : t === -1 || n < t ? n : t;
    }
  });
  var xs = C((VE, ws) => {
    'use strict';
    var y0 = Re(),
      A0 = vs(),
      bs = oe(),
      w0 = Cs();
    ws.exports = As;
    As.locator = w0;
    var x0 = '*',
      ys = '_',
      k0 = '\\';
    function As(e, r, t) {
      var n = this,
        a = 0,
        u = r.charAt(a),
        i,
        o,
        s,
        l,
        c,
        f,
        p;
      if (
        !(u !== x0 && u !== ys) &&
        ((o = n.options.pedantic),
        (c = u),
        (s = u),
        (f = r.length),
        a++,
        (l = ''),
        (u = ''),
        !(o && bs(r.charAt(a))))
      )
        for (; a < f; ) {
          if (((p = u), (u = r.charAt(a)), u === s && (!o || !bs(p)))) {
            if (((u = r.charAt(++a)), u !== s)) {
              if (!y0(l) || p === s) return;
              if (!o && s === ys && A0(u)) {
                l += s;
                continue;
              }
              return t
                ? !0
                : ((i = e.now()),
                  i.column++,
                  i.offset++,
                  e(c + l + s)({ type: 'emphasis', children: n.tokenizeInline(l, i) }));
            }
            l += s;
          }
          !o && u === k0 && ((l += u), (u = r.charAt(++a))), (l += u), a++;
        }
    }
  });
  var Bs = C((jE, ks) => {
    'use strict';
    ks.exports = B0;
    function B0(e, r) {
      return e.indexOf('~~', r);
    }
  });
  var Os = C(($E, Ss) => {
    'use strict';
    var Ts = oe(),
      T0 = Bs();
    Ss.exports = _s;
    _s.locator = T0;
    var ot = '~',
      qs = '~~';
    function _s(e, r, t) {
      var n = this,
        a = '',
        u = '',
        i = '',
        o = '',
        s,
        l,
        c;
      if (!(!n.options.gfm || r.charAt(0) !== ot || r.charAt(1) !== ot || Ts(r.charAt(2))))
        for (s = 1, l = r.length, c = e.now(), c.column += 2, c.offset += 2; ++s < l; ) {
          if (((a = r.charAt(s)), a === ot && u === ot && (!i || !Ts(i))))
            return t ? !0 : e(qs + o + qs)({ type: 'delete', children: n.tokenizeInline(o, c) });
          (o += u), (i = u), (u = a);
        }
    }
  });
  var Ps = C((WE, Ls) => {
    'use strict';
    Ls.exports = q0;
    function q0(e, r) {
      return e.indexOf('`', r);
    }
  });
  var Rs = C((HE, Ns) => {
    'use strict';
    var _0 = Ps();
    Ns.exports = Is;
    Is.locator = _0;
    var xn = 10,
      kn = 32,
      Bn = 96;
    function Is(e, r, t) {
      for (var n = r.length, a = 0, u, i, o, s, l, c; a < n && r.charCodeAt(a) === Bn; ) a++;
      if (!(a === 0 || a === n)) {
        for (u = a, l = r.charCodeAt(a); a < n; ) {
          if (((s = l), (l = r.charCodeAt(a + 1)), s === Bn)) {
            if ((i === void 0 && (i = a), (o = a + 1), l !== Bn && o - i === u)) {
              c = !0;
              break;
            }
          } else i !== void 0 && ((i = void 0), (o = void 0));
          a++;
        }
        if (c) {
          if (t) return !0;
          if (
            ((a = u),
            (n = i),
            (s = r.charCodeAt(a)),
            (l = r.charCodeAt(n - 1)),
            (c = !1),
            n - a > 2 && (s === kn || s === xn) && (l === kn || l === xn))
          ) {
            for (a++, n--; a < n; ) {
              if (((s = r.charCodeAt(a)), s !== kn && s !== xn)) {
                c = !0;
                break;
              }
              a++;
            }
            c === !0 && (u++, i--);
          }
          return e(r.slice(0, o))({ type: 'inlineCode', value: r.slice(u, i) });
        }
      }
    }
  });
  var Ms = C((KE, Us) => {
    'use strict';
    Us.exports = S0;
    function S0(e, r) {
      for (
        var t = e.indexOf(
          `
`,
          r
        );
        t > r && e.charAt(t - 1) === ' ';

      )
        t--;
      return t;
    }
  });
  var Gs = C((JE, Ys) => {
    'use strict';
    var O0 = Ms();
    Ys.exports = zs;
    zs.locator = O0;
    var L0 = ' ',
      P0 = `
`,
      I0 = 2;
    function zs(e, r, t) {
      for (var n = r.length, a = -1, u = '', i; ++a < n; ) {
        if (((i = r.charAt(a)), i === P0))
          return a < I0 ? void 0 : t ? !0 : ((u += i), e(u)({ type: 'break' }));
        if (i !== L0) return;
        u += i;
      }
    }
  });
  var js = C((XE, Vs) => {
    'use strict';
    Vs.exports = N0;
    function N0(e, r, t) {
      var n = this,
        a,
        u,
        i,
        o,
        s,
        l,
        c,
        f,
        p,
        d;
      if (t) return !0;
      for (
        a = n.inlineMethods, o = a.length, u = n.inlineTokenizers, i = -1, p = r.length;
        ++i < o;

      )
        (f = a[i]),
          !(f === 'text' || !u[f]) &&
            ((c = u[f].locator),
            c || e.file.fail('Missing locator: `' + f + '`'),
            (l = c.call(n, r, 1)),
            l !== -1 && l < p && (p = l));
      (s = r.slice(0, p)), (d = e.now()), n.decode(s, d, D);
      function D(h, m, F) {
        e(F || h)({ type: 'text', value: h });
      }
    }
  });
  var Ks = C((QE, Hs) => {
    'use strict';
    var R0 = Ie(),
      st = fu(),
      U0 = pu(),
      M0 = du(),
      z0 = Gu(),
      Tn = $u();
    Hs.exports = $s;
    function $s(e, r) {
      (this.file = r),
        (this.offset = {}),
        (this.options = R0(this.options)),
        this.setOptions({}),
        (this.inList = !1),
        (this.inBlock = !1),
        (this.inLink = !1),
        (this.atStart = !0),
        (this.toOffset = U0(r).toOffset),
        (this.unescape = M0(this, 'escape')),
        (this.decode = z0(this));
    }
    var U = $s.prototype;
    U.setOptions = ea();
    U.parse = ma();
    U.options = jt();
    U.exitStart = st('atStart', !0);
    U.enterList = st('inList', !1);
    U.enterLink = st('inLink', !1);
    U.enterBlock = st('inBlock', !1);
    U.interruptParagraph = [
      ['thematicBreak'],
      ['list'],
      ['atxHeading'],
      ['fencedCode'],
      ['blockquote'],
      ['html'],
      ['setextHeading', { commonmark: !1 }],
      ['definition', { commonmark: !1 }],
    ];
    U.interruptList = [
      ['atxHeading', { pedantic: !1 }],
      ['fencedCode', { pedantic: !1 }],
      ['thematicBreak', { pedantic: !1 }],
      ['definition', { commonmark: !1 }],
    ];
    U.interruptBlockquote = [
      ['indentedCode', { commonmark: !0 }],
      ['fencedCode', { commonmark: !0 }],
      ['atxHeading', { commonmark: !0 }],
      ['setextHeading', { commonmark: !0 }],
      ['thematicBreak', { commonmark: !0 }],
      ['html', { commonmark: !0 }],
      ['list', { commonmark: !0 }],
      ['definition', { commonmark: !1 }],
    ];
    U.blockTokenizers = {
      blankLine: ga(),
      indentedCode: ya(),
      fencedCode: xa(),
      blockquote: Sa(),
      atxHeading: Pa(),
      thematicBreak: Ra(),
      list: Ka(),
      setextHeading: Za(),
      html: uo(),
      definition: ho(),
      table: go(),
      paragraph: Co(),
    };
    U.inlineTokenizers = {
      escape: ko(),
      autoLink: Oo(),
      url: Go(),
      email: Xo(),
      html: es(),
      link: ss(),
      reference: fs(),
      strong: Fs(),
      emphasis: xs(),
      deletion: Os(),
      code: Rs(),
      break: Gs(),
      text: js(),
    };
    U.blockMethods = Ws(U.blockTokenizers);
    U.inlineMethods = Ws(U.inlineTokenizers);
    U.tokenizeBlock = Tn('block');
    U.tokenizeInline = Tn('inline');
    U.tokenizeFactory = Tn;
    function Ws(e) {
      var r = [],
        t;
      for (t in e) r.push(t);
      return r;
    }
  });
  var Zs = C((ZE, Qs) => {
    'use strict';
    var Y0 = cu(),
      G0 = Ie(),
      Js = Ks();
    Qs.exports = Xs;
    Xs.Parser = Js;
    function Xs(e) {
      var r = this.data('settings'),
        t = Y0(Js);
      (t.prototype.options = G0(t.prototype.options, r, e)), (this.Parser = t);
    }
  });
  var rc = C((eC, ec) => {
    'use strict';
    ec.exports = V0;
    function V0(e) {
      if (e) throw e;
    }
  });
  var qn = C((rC, tc) => {
    tc.exports = function (r) {
      return (
        r != null &&
        r.constructor != null &&
        typeof r.constructor.isBuffer == 'function' &&
        r.constructor.isBuffer(r)
      );
    };
  });
  var fc = C((tC, lc) => {
    'use strict';
    var ct = Object.prototype.hasOwnProperty,
      cc = Object.prototype.toString,
      nc = Object.defineProperty,
      ic = Object.getOwnPropertyDescriptor,
      uc = function (r) {
        return typeof Array.isArray == 'function'
          ? Array.isArray(r)
          : cc.call(r) === '[object Array]';
      },
      ac = function (r) {
        if (!r || cc.call(r) !== '[object Object]') return !1;
        var t = ct.call(r, 'constructor'),
          n =
            r.constructor &&
            r.constructor.prototype &&
            ct.call(r.constructor.prototype, 'isPrototypeOf');
        if (r.constructor && !t && !n) return !1;
        var a;
        for (a in r);
        return typeof a > 'u' || ct.call(r, a);
      },
      oc = function (r, t) {
        nc && t.name === '__proto__'
          ? nc(r, t.name, { enumerable: !0, configurable: !0, value: t.newValue, writable: !0 })
          : (r[t.name] = t.newValue);
      },
      sc = function (r, t) {
        if (t === '__proto__')
          if (ct.call(r, t)) {
            if (ic) return ic(r, t).value;
          } else return;
        return r[t];
      };
    lc.exports = function e() {
      var r,
        t,
        n,
        a,
        u,
        i,
        o = arguments[0],
        s = 1,
        l = arguments.length,
        c = !1;
      for (
        typeof o == 'boolean' && ((c = o), (o = arguments[1] || {}), (s = 2)),
          (o == null || (typeof o != 'object' && typeof o != 'function')) && (o = {});
        s < l;
        ++s
      )
        if (((r = arguments[s]), r != null))
          for (t in r)
            (n = sc(o, t)),
              (a = sc(r, t)),
              o !== a &&
                (c && a && (ac(a) || (u = uc(a)))
                  ? (u ? ((u = !1), (i = n && uc(n) ? n : [])) : (i = n && ac(n) ? n : {}),
                    oc(o, { name: t, newValue: e(c, i, a) }))
                  : typeof a < 'u' && oc(o, { name: t, newValue: a }));
      return o;
    };
  });
  var pc = C((nC, Dc) => {
    'use strict';
    Dc.exports = e => {
      if (Object.prototype.toString.call(e) !== '[object Object]') return !1;
      let r = Object.getPrototypeOf(e);
      return r === null || r === Object.prototype;
    };
  });
  var dc = C((iC, hc) => {
    'use strict';
    var j0 = [].slice;
    hc.exports = $0;
    function $0(e, r) {
      var t;
      return n;
      function n() {
        var i = j0.call(arguments, 0),
          o = e.length > i.length,
          s;
        o && i.push(a);
        try {
          s = e.apply(null, i);
        } catch (l) {
          if (o && t) throw l;
          return a(l);
        }
        o || (s && typeof s.then == 'function' ? s.then(u, a) : s instanceof Error ? a(s) : u(s));
      }
      function a() {
        t || ((t = !0), r.apply(null, arguments));
      }
      function u(i) {
        a(null, i);
      }
    }
  });
  var Ec = C((uC, vc) => {
    'use strict';
    var Fc = dc();
    vc.exports = gc;
    gc.wrap = Fc;
    var mc = [].slice;
    function gc() {
      var e = [],
        r = {};
      return (r.run = t), (r.use = n), r;
      function t() {
        var a = -1,
          u = mc.call(arguments, 0, -1),
          i = arguments[arguments.length - 1];
        if (typeof i != 'function') throw new Error('Expected function as last argument, not ' + i);
        o.apply(null, [null].concat(u));
        function o(s) {
          var l = e[++a],
            c = mc.call(arguments, 0),
            f = c.slice(1),
            p = u.length,
            d = -1;
          if (s) {
            i(s);
            return;
          }
          for (; ++d < p; ) (f[d] === null || f[d] === void 0) && (f[d] = u[d]);
          (u = f), l ? Fc(l, o).apply(null, u) : i.apply(null, [null].concat(u));
        }
      }
      function n(a) {
        if (typeof a != 'function') throw new Error('Expected `fn` to be a function, not ' + a);
        return e.push(a), r;
      }
    }
  });
  var Ac = C((aC, yc) => {
    'use strict';
    var er = {}.hasOwnProperty;
    yc.exports = W0;
    function W0(e) {
      return !e || typeof e != 'object'
        ? ''
        : er.call(e, 'position') || er.call(e, 'type')
          ? Cc(e.position)
          : er.call(e, 'start') || er.call(e, 'end')
            ? Cc(e)
            : er.call(e, 'line') || er.call(e, 'column')
              ? _n(e)
              : '';
    }
    function _n(e) {
      return (!e || typeof e != 'object') && (e = {}), bc(e.line) + ':' + bc(e.column);
    }
    function Cc(e) {
      return (!e || typeof e != 'object') && (e = {}), _n(e.start) + '-' + _n(e.end);
    }
    function bc(e) {
      return e && typeof e == 'number' ? e : 1;
    }
  });
  var kc = C((oC, xc) => {
    'use strict';
    var H0 = Ac();
    xc.exports = Sn;
    function wc() {}
    wc.prototype = Error.prototype;
    Sn.prototype = new wc();
    var ke = Sn.prototype;
    ke.file = '';
    ke.name = '';
    ke.reason = '';
    ke.message = '';
    ke.stack = '';
    ke.fatal = null;
    ke.column = null;
    ke.line = null;
    function Sn(e, r, t) {
      var n, a, u;
      typeof r == 'string' && ((t = r), (r = null)),
        (n = K0(t)),
        (a = H0(r) || '1:1'),
        (u = { start: { line: null, column: null }, end: { line: null, column: null } }),
        r && r.position && (r = r.position),
        r && (r.start ? ((u = r), (r = r.start)) : (u.start = r)),
        e.stack && ((this.stack = e.stack), (e = e.message)),
        (this.message = e),
        (this.name = a),
        (this.reason = e),
        (this.line = r ? r.line : null),
        (this.column = r ? r.column : null),
        (this.location = u),
        (this.source = n[0]),
        (this.ruleId = n[1]);
    }
    function K0(e) {
      var r = [null, null],
        t;
      return (
        typeof e == 'string' &&
          ((t = e.indexOf(':')),
          t === -1 ? (r[1] = e) : ((r[0] = e.slice(0, t)), (r[1] = e.slice(t + 1)))),
        r
      );
    }
  });
  var Bc = C(rr => {
    'use strict';
    rr.basename = J0;
    rr.dirname = X0;
    rr.extname = Q0;
    rr.join = Z0;
    rr.sep = '/';
    function J0(e, r) {
      var t = 0,
        n = -1,
        a,
        u,
        i,
        o;
      if (r !== void 0 && typeof r != 'string')
        throw new TypeError('"ext" argument must be a string');
      if ((wr(e), (a = e.length), r === void 0 || !r.length || r.length > e.length)) {
        for (; a--; )
          if (e.charCodeAt(a) === 47) {
            if (i) {
              t = a + 1;
              break;
            }
          } else n < 0 && ((i = !0), (n = a + 1));
        return n < 0 ? '' : e.slice(t, n);
      }
      if (r === e) return '';
      for (u = -1, o = r.length - 1; a--; )
        if (e.charCodeAt(a) === 47) {
          if (i) {
            t = a + 1;
            break;
          }
        } else
          u < 0 && ((i = !0), (u = a + 1)),
            o > -1 &&
              (e.charCodeAt(a) === r.charCodeAt(o--) ? o < 0 && (n = a) : ((o = -1), (n = u)));
      return t === n ? (n = u) : n < 0 && (n = e.length), e.slice(t, n);
    }
    function X0(e) {
      var r, t, n;
      if ((wr(e), !e.length)) return '.';
      for (r = -1, n = e.length; --n; )
        if (e.charCodeAt(n) === 47) {
          if (t) {
            r = n;
            break;
          }
        } else t || (t = !0);
      return r < 0
        ? e.charCodeAt(0) === 47
          ? '/'
          : '.'
        : r === 1 && e.charCodeAt(0) === 47
          ? '//'
          : e.slice(0, r);
    }
    function Q0(e) {
      var r = -1,
        t = 0,
        n = -1,
        a = 0,
        u,
        i,
        o;
      for (wr(e), o = e.length; o--; ) {
        if (((i = e.charCodeAt(o)), i === 47)) {
          if (u) {
            t = o + 1;
            break;
          }
          continue;
        }
        n < 0 && ((u = !0), (n = o + 1)),
          i === 46 ? (r < 0 ? (r = o) : a !== 1 && (a = 1)) : r > -1 && (a = -1);
      }
      return r < 0 || n < 0 || a === 0 || (a === 1 && r === n - 1 && r === t + 1)
        ? ''
        : e.slice(r, n);
    }
    function Z0() {
      for (var e = -1, r; ++e < arguments.length; )
        wr(arguments[e]),
          arguments[e] && (r = r === void 0 ? arguments[e] : r + '/' + arguments[e]);
      return r === void 0 ? '.' : em(r);
    }
    function em(e) {
      var r, t;
      return (
        wr(e),
        (r = e.charCodeAt(0) === 47),
        (t = rm(e, !r)),
        !t.length && !r && (t = '.'),
        t.length && e.charCodeAt(e.length - 1) === 47 && (t += '/'),
        r ? '/' + t : t
      );
    }
    function rm(e, r) {
      for (var t = '', n = 0, a = -1, u = 0, i = -1, o, s; ++i <= e.length; ) {
        if (i < e.length) o = e.charCodeAt(i);
        else {
          if (o === 47) break;
          o = 47;
        }
        if (o === 47) {
          if (!(a === i - 1 || u === 1))
            if (a !== i - 1 && u === 2) {
              if (
                t.length < 2 ||
                n !== 2 ||
                t.charCodeAt(t.length - 1) !== 46 ||
                t.charCodeAt(t.length - 2) !== 46
              ) {
                if (t.length > 2) {
                  if (((s = t.lastIndexOf('/')), s !== t.length - 1)) {
                    s < 0
                      ? ((t = ''), (n = 0))
                      : ((t = t.slice(0, s)), (n = t.length - 1 - t.lastIndexOf('/'))),
                      (a = i),
                      (u = 0);
                    continue;
                  }
                } else if (t.length) {
                  (t = ''), (n = 0), (a = i), (u = 0);
                  continue;
                }
              }
              r && ((t = t.length ? t + '/..' : '..'), (n = 2));
            } else
              t.length ? (t += '/' + e.slice(a + 1, i)) : (t = e.slice(a + 1, i)), (n = i - a - 1);
          (a = i), (u = 0);
        } else o === 46 && u > -1 ? u++ : (u = -1);
      }
      return t;
    }
    function wr(e) {
      if (typeof e != 'string')
        throw new TypeError('Path must be a string. Received ' + JSON.stringify(e));
    }
  });
  var qc = C(Tc => {
    'use strict';
    Tc.cwd = tm;
    function tm() {
      return '/';
    }
  });
  var Oc = C((lC, Sc) => {
    'use strict';
    var se = Bc(),
      nm = qc(),
      im = qn();
    Sc.exports = ge;
    var um = {}.hasOwnProperty,
      On = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
    ge.prototype.toString = mm;
    Object.defineProperty(ge.prototype, 'path', { get: am, set: om });
    Object.defineProperty(ge.prototype, 'dirname', { get: sm, set: cm });
    Object.defineProperty(ge.prototype, 'basename', { get: lm, set: fm });
    Object.defineProperty(ge.prototype, 'extname', { get: Dm, set: pm });
    Object.defineProperty(ge.prototype, 'stem', { get: hm, set: dm });
    function ge(e) {
      var r, t;
      if (!e) e = {};
      else if (typeof e == 'string' || im(e)) e = { contents: e };
      else if ('message' in e && 'messages' in e) return e;
      if (!(this instanceof ge)) return new ge(e);
      for (
        this.data = {}, this.messages = [], this.history = [], this.cwd = nm.cwd(), t = -1;
        ++t < On.length;

      )
        (r = On[t]), um.call(e, r) && (this[r] = e[r]);
      for (r in e) On.indexOf(r) < 0 && (this[r] = e[r]);
    }
    function am() {
      return this.history[this.history.length - 1];
    }
    function om(e) {
      Pn(e, 'path'), this.path !== e && this.history.push(e);
    }
    function sm() {
      return typeof this.path == 'string' ? se.dirname(this.path) : void 0;
    }
    function cm(e) {
      _c(this.path, 'dirname'), (this.path = se.join(e || '', this.basename));
    }
    function lm() {
      return typeof this.path == 'string' ? se.basename(this.path) : void 0;
    }
    function fm(e) {
      Pn(e, 'basename'), Ln(e, 'basename'), (this.path = se.join(this.dirname || '', e));
    }
    function Dm() {
      return typeof this.path == 'string' ? se.extname(this.path) : void 0;
    }
    function pm(e) {
      if ((Ln(e, 'extname'), _c(this.path, 'extname'), e)) {
        if (e.charCodeAt(0) !== 46) throw new Error('`extname` must start with `.`');
        if (e.indexOf('.', 1) > -1) throw new Error('`extname` cannot contain multiple dots');
      }
      this.path = se.join(this.dirname, this.stem + (e || ''));
    }
    function hm() {
      return typeof this.path == 'string' ? se.basename(this.path, this.extname) : void 0;
    }
    function dm(e) {
      Pn(e, 'stem'),
        Ln(e, 'stem'),
        (this.path = se.join(this.dirname || '', e + (this.extname || '')));
    }
    function mm(e) {
      return (this.contents || '').toString(e);
    }
    function Ln(e, r) {
      if (e && e.indexOf(se.sep) > -1)
        throw new Error('`' + r + '` cannot be a path: did not expect `' + se.sep + '`');
    }
    function Pn(e, r) {
      if (!e) throw new Error('`' + r + '` cannot be empty');
    }
    function _c(e, r) {
      if (!e) throw new Error('Setting `' + r + '` requires `path` to be set too');
    }
  });
  var Pc = C((fC, Lc) => {
    'use strict';
    var Fm = kc(),
      lt = Oc();
    Lc.exports = lt;
    lt.prototype.message = gm;
    lt.prototype.info = Em;
    lt.prototype.fail = vm;
    function gm(e, r, t) {
      var n = new Fm(e, r, t);
      return (
        this.path && ((n.name = this.path + ':' + n.name), (n.file = this.path)),
        (n.fatal = !1),
        this.messages.push(n),
        n
      );
    }
    function vm() {
      var e = this.message.apply(this, arguments);
      throw ((e.fatal = !0), e);
    }
    function Em() {
      var e = this.message.apply(this, arguments);
      return (e.fatal = null), e;
    }
  });
  var Nc = C((DC, Ic) => {
    'use strict';
    Ic.exports = Pc();
  });
  var $c = C((pC, jc) => {
    'use strict';
    var Rc = rc(),
      Cm = qn(),
      ft = fc(),
      Uc = pc(),
      Gc = Ec(),
      xr = Nc();
    jc.exports = Vc().freeze();
    var bm = [].slice,
      ym = {}.hasOwnProperty,
      Am = Gc().use(wm).use(xm).use(km);
    function wm(e, r) {
      r.tree = e.parse(r.file);
    }
    function xm(e, r, t) {
      e.run(r.tree, r.file, n);
      function n(a, u, i) {
        a ? t(a) : ((r.tree = u), (r.file = i), t());
      }
    }
    function km(e, r) {
      var t = e.stringify(r.tree, r.file);
      t == null ||
        (typeof t == 'string' || Cm(t)
          ? ('value' in r.file && (r.file.value = t), (r.file.contents = t))
          : (r.file.result = t));
    }
    function Vc() {
      var e = [],
        r = Gc(),
        t = {},
        n = -1,
        a;
      return (
        (u.data = o),
        (u.freeze = i),
        (u.attachers = e),
        (u.use = s),
        (u.parse = c),
        (u.stringify = d),
        (u.run = f),
        (u.runSync = p),
        (u.process = D),
        (u.processSync = h),
        u
      );
      function u() {
        for (var m = Vc(), F = -1; ++F < e.length; ) m.use.apply(null, e[F]);
        return m.data(ft(!0, {}, t)), m;
      }
      function i() {
        var m, F;
        if (a) return u;
        for (; ++n < e.length; )
          (m = e[n]),
            m[1] !== !1 &&
              (m[1] === !0 && (m[1] = void 0),
              (F = m[0].apply(u, m.slice(1))),
              typeof F == 'function' && r.use(F));
        return (a = !0), (n = 1 / 0), u;
      }
      function o(m, F) {
        return typeof m == 'string'
          ? arguments.length === 2
            ? (Rn('data', a), (t[m] = F), u)
            : (ym.call(t, m) && t[m]) || null
          : m
            ? (Rn('data', a), (t = m), u)
            : t;
      }
      function s(m) {
        var F;
        if ((Rn('use', a), m != null))
          if (typeof m == 'function') b.apply(null, arguments);
          else if (typeof m == 'object') 'length' in m ? B(m) : y(m);
          else throw new Error('Expected usable value, not `' + m + '`');
        return F && (t.settings = ft(t.settings || {}, F)), u;
        function y(g) {
          B(g.plugins), g.settings && (F = ft(F || {}, g.settings));
        }
        function E(g) {
          if (typeof g == 'function') b(g);
          else if (typeof g == 'object') 'length' in g ? b.apply(null, g) : y(g);
          else throw new Error('Expected usable value, not `' + g + '`');
        }
        function B(g) {
          var A = -1;
          if (g != null)
            if (typeof g == 'object' && 'length' in g) for (; ++A < g.length; ) E(g[A]);
            else throw new Error('Expected a list of plugins, not `' + g + '`');
        }
        function b(g, A) {
          var w = l(g);
          w ? (Uc(w[1]) && Uc(A) && (A = ft(!0, w[1], A)), (w[1] = A)) : e.push(bm.call(arguments));
        }
      }
      function l(m) {
        for (var F = -1; ++F < e.length; ) if (e[F][0] === m) return e[F];
      }
      function c(m) {
        var F = xr(m),
          y;
        return (
          i(),
          (y = u.Parser),
          In('parse', y),
          Mc(y, 'parse') ? new y(String(F), F).parse() : y(String(F), F)
        );
      }
      function f(m, F, y) {
        if ((zc(m), i(), !y && typeof F == 'function' && ((y = F), (F = null)), !y))
          return new Promise(E);
        E(null, y);
        function E(B, b) {
          r.run(m, xr(F), g);
          function g(A, w, v) {
            (w = w || m), A ? b(A) : B ? B(w) : y(null, w, v);
          }
        }
      }
      function p(m, F) {
        var y, E;
        return f(m, F, B), Yc('runSync', 'run', E), y;
        function B(b, g) {
          (E = !0), (y = g), Rc(b);
        }
      }
      function d(m, F) {
        var y = xr(F),
          E;
        return (
          i(),
          (E = u.Compiler),
          Nn('stringify', E),
          zc(m),
          Mc(E, 'compile') ? new E(m, y).compile() : E(m, y)
        );
      }
      function D(m, F) {
        if ((i(), In('process', u.Parser), Nn('process', u.Compiler), !F)) return new Promise(y);
        y(null, F);
        function y(E, B) {
          var b = xr(m);
          Am.run(u, { file: b }, g);
          function g(A) {
            A ? B(A) : E ? E(b) : F(null, b);
          }
        }
      }
      function h(m) {
        var F, y;
        return (
          i(),
          In('processSync', u.Parser),
          Nn('processSync', u.Compiler),
          (F = xr(m)),
          D(F, E),
          Yc('processSync', 'process', y),
          F
        );
        function E(B) {
          (y = !0), Rc(B);
        }
      }
    }
    function Mc(e, r) {
      return typeof e == 'function' && e.prototype && (Bm(e.prototype) || r in e.prototype);
    }
    function Bm(e) {
      var r;
      for (r in e) return !0;
      return !1;
    }
    function In(e, r) {
      if (typeof r != 'function') throw new Error('Cannot `' + e + '` without `Parser`');
    }
    function Nn(e, r) {
      if (typeof r != 'function') throw new Error('Cannot `' + e + '` without `Compiler`');
    }
    function Rn(e, r) {
      if (r)
        throw new Error(
          'Cannot invoke `' +
            e +
            '` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.'
        );
    }
    function zc(e) {
      if (!e || typeof e.type != 'string') throw new Error('Expected node, got `' + e + '`');
    }
    function Yc(e, r, t) {
      if (!t) throw new Error('`' + e + '` finished async. Use `' + r + '` instead');
    }
  });
  var Mm = {};
  Yn(Mm, { languages: () => zi, options: () => Yi, parsers: () => Mn, printers: () => Um });
  var ml = (e, r, t, n) => {
      if (!(e && r == null))
        return r.replaceAll ? r.replaceAll(t, n) : t.global ? r.replace(t, n) : r.split(t).join(n);
    },
    N = ml;
  var Fl = (e, r, t) => {
      if (!(e && r == null))
        return Array.isArray(r) || typeof r == 'string' ? r[t < 0 ? r.length + t : t] : r.at(t);
    },
    z = Fl;
  var Ui = Ue(Br(), 1);
  function le(e) {
    if (typeof e != 'string') throw new TypeError('Expected a string');
    return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
  }
  var G = 'string',
    H = 'array',
    Ce = 'cursor',
    re = 'indent',
    te = 'align',
    fe = 'trim',
    J = 'group',
    X = 'fill',
    K = 'if-break',
    De = 'indent-if-break',
    pe = 'line-suffix',
    he = 'line-suffix-boundary',
    V = 'line',
    de = 'label',
    ne = 'break-parent',
    Tr = new Set([Ce, re, te, fe, J, X, K, De, pe, he, V, de, ne]);
  function vl(e) {
    if (typeof e == 'string') return G;
    if (Array.isArray(e)) return H;
    if (!e) return;
    let { type: r } = e;
    if (Tr.has(r)) return r;
  }
  var Y = vl;
  var El = e => new Intl.ListFormat('en-US', { type: 'disjunction' }).format(e);
  function Cl(e) {
    let r = e === null ? 'null' : typeof e;
    if (r !== 'string' && r !== 'object')
      return `Unexpected doc '${r}', 
Expected it to be 'string' or 'object'.`;
    if (Y(e)) throw new Error('doc is valid.');
    let t = Object.prototype.toString.call(e);
    if (t !== '[object Object]') return `Unexpected doc '${t}'.`;
    let n = El([...Tr].map(a => `'${a}'`));
    return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
  }
  var pt = class extends Error {
      name = 'InvalidDocError';
      constructor(r) {
        super(Cl(r)), (this.doc = r);
      }
    },
    Te = pt;
  var Hn = {};
  function bl(e, r, t, n) {
    let a = [e];
    for (; a.length > 0; ) {
      let u = a.pop();
      if (u === Hn) {
        t(a.pop());
        continue;
      }
      t && a.push(u, Hn);
      let i = Y(u);
      if (!i) throw new Te(u);
      if ((r == null ? void 0 : r(u)) !== !1)
        switch (i) {
          case H:
          case X: {
            let o = i === H ? u : u.parts;
            for (let s = o.length, l = s - 1; l >= 0; --l) a.push(o[l]);
            break;
          }
          case K:
            a.push(u.flatContents, u.breakContents);
            break;
          case J:
            if (n && u.expandedStates)
              for (let o = u.expandedStates.length, s = o - 1; s >= 0; --s)
                a.push(u.expandedStates[s]);
            else a.push(u.contents);
            break;
          case te:
          case re:
          case De:
          case de:
          case pe:
            a.push(u.contents);
            break;
          case G:
          case Ce:
          case fe:
          case he:
          case V:
          case ne:
            break;
          default:
            throw new Te(u);
        }
    }
  }
  var ht = bl;
  function yl(e, r) {
    if (typeof e == 'string') return r(e);
    let t = new Map();
    return n(e);
    function n(u) {
      if (t.has(u)) return t.get(u);
      let i = a(u);
      return t.set(u, i), i;
    }
    function a(u) {
      switch (Y(u)) {
        case H:
          return r(u.map(n));
        case X:
          return r({ ...u, parts: u.parts.map(n) });
        case K:
          return r({ ...u, breakContents: n(u.breakContents), flatContents: n(u.flatContents) });
        case J: {
          let { expandedStates: i, contents: o } = u;
          return (
            i ? ((i = i.map(n)), (o = i[0])) : (o = n(o)),
            r({ ...u, contents: o, expandedStates: i })
          );
        }
        case te:
        case re:
        case De:
        case de:
        case pe:
          return r({ ...u, contents: n(u.contents) });
        case G:
        case Ce:
        case fe:
        case he:
        case V:
        case ne:
          return r(u);
        default:
          throw new Te(u);
      }
    }
  }
  function Kn(e) {
    if (e.length > 0) {
      let r = z(!1, e, -1);
      !r.expandedStates && !r.break && (r.break = 'propagated');
    }
    return null;
  }
  function Jn(e) {
    let r = new Set(),
      t = [];
    function n(u) {
      if ((u.type === ne && Kn(t), u.type === J)) {
        if ((t.push(u), r.has(u))) return !1;
        r.add(u);
      }
    }
    function a(u) {
      u.type === J && t.pop().break && Kn(t);
    }
    ht(e, n, a, !0);
  }
  function be(e, r = tr) {
    return yl(e, t =>
      typeof t == 'string'
        ? qr(
            r,
            t.split(`
`)
          )
        : t
    );
  }
  var dt = () => {},
    qe = dt,
    mt = dt,
    Xn = dt;
  function nr(e) {
    return qe(e), { type: re, contents: e };
  }
  function ye(e, r) {
    return qe(r), { type: te, contents: r, n: e };
  }
  function Me(e, r = {}) {
    return (
      qe(e),
      mt(r.expandedStates, !0),
      { type: J, id: r.id, contents: e, break: !!r.shouldBreak, expandedStates: r.expandedStates }
    );
  }
  function _e(e) {
    return ye({ type: 'root' }, e);
  }
  function ze(e) {
    return Xn(e), { type: X, parts: e };
  }
  function Qn(e, r = '', t = {}) {
    return (
      qe(e), r !== '' && qe(r), { type: K, breakContents: e, flatContents: r, groupId: t.groupId }
    );
  }
  var ir = { type: ne };
  var ur = { type: V, hard: !0 },
    Al = { type: V, hard: !0, literal: !0 },
    _r = { type: V },
    Sr = { type: V, soft: !0 },
    P = [ur, ir],
    tr = [Al, ir];
  function qr(e, r) {
    qe(e), mt(r);
    let t = [];
    for (let n = 0; n < r.length; n++) n !== 0 && t.push(e), t.push(r[n]);
    return t;
  }
  function wl(e, r) {
    let t = e.match(new RegExp(`(${le(r)})+`, 'gu'));
    return t === null ? 0 : t.reduce((n, a) => Math.max(n, a.length / r.length), 0);
  }
  var Or = wl;
  function xl(e, r) {
    let t = e.match(new RegExp(`(${le(r)})+`, 'gu'));
    if (t === null) return 0;
    let n = new Map(),
      a = 0;
    for (let u of t) {
      let i = u.length / r.length;
      n.set(i, !0), i > a && (a = i);
    }
    for (let u = 1; u < a; u++) if (!n.get(u)) return u;
    return a + 1;
  }
  var Zn = xl;
  var Lr = "'",
    ei = '"';
  function kl(e, r) {
    let t = r === !0 || r === Lr ? Lr : ei,
      n = t === Lr ? ei : Lr,
      a = 0,
      u = 0;
    for (let i of e) i === t ? a++ : i === n && u++;
    return a > u ? n : t;
  }
  var ri = kl;
  var Ft = class extends Error {
      name = 'UnexpectedNodeError';
      constructor(r, t, n = 'type') {
        super(`Unexpected ${t} node ${n}: ${JSON.stringify(r[n])}.`), (this.node = r);
      }
    },
    ti = Ft;
  var oi = Ue(Br(), 1);
  function Bl(e) {
    return (e == null ? void 0 : e.type) === 'front-matter';
  }
  var ni = Bl;
  var ar = 3;
  function Tl(e) {
    let r = e.slice(0, ar);
    if (r !== '---' && r !== '+++') return;
    let t = e.indexOf(
      `
`,
      ar
    );
    if (t === -1) return;
    let n = e.slice(ar, t).trim(),
      a = e.indexOf(
        `
${r}`,
        t
      ),
      u = n;
    if (
      (u || (u = r === '+++' ? 'toml' : 'yaml'),
      a === -1 &&
        r === '---' &&
        u === 'yaml' &&
        (a = e.indexOf(
          `
...`,
          t
        )),
      a === -1)
    )
      return;
    let i = a + 1 + ar,
      o = e.charAt(i + 1);
    if (!/\s?/u.test(o)) return;
    let s = e.slice(0, i);
    return {
      type: 'front-matter',
      language: u,
      explicitLanguage: n,
      value: e.slice(t + 1, a),
      startDelimiter: r,
      endDelimiter: s.slice(-ar),
      raw: s,
    };
  }
  function ql(e) {
    let r = Tl(e);
    if (!r) return { content: e };
    let { raw: t } = r;
    return { frontMatter: r, content: N(!1, t, /[^\n]/gu, ' ') + e.slice(t.length) };
  }
  var or = ql;
  var ii = ['format', 'prettier'];
  function gt(e) {
    let r = `@(${ii.join('|')})`,
      t = new RegExp(
        [
          `<!--\\s*${r}\\s*-->`,
          `\\{\\s*\\/\\*\\s*${r}\\s*\\*\\/\\s*\\}`,
          `<!--.*\r?
[\\s\\S]*(^|
)[^\\S
]*${r}[^\\S
]*($|
)[\\s\\S]*
.*-->`,
        ].join('|'),
        'mu'
      ),
      n = e.match(t);
    return (n == null ? void 0 : n.index) === 0;
  }
  var ui = e => gt(or(e).content.trimStart()),
    ai = e => {
      let r = or(e),
        t = `<!-- @${ii[0]} -->`;
      return r.frontMatter
        ? `${r.frontMatter.raw}

${t}

${r.content}`
        : `${t}

${r.content}`;
    };
  var _l = new Set(['position', 'raw']);
  function si(e, r, t) {
    if (
      ((e.type === 'front-matter' ||
        e.type === 'code' ||
        e.type === 'yaml' ||
        e.type === 'import' ||
        e.type === 'export' ||
        e.type === 'jsx') &&
        delete r.value,
      e.type === 'list' && delete r.isAligned,
      (e.type === 'list' || e.type === 'listItem') && delete r.spread,
      e.type === 'text')
    )
      return null;
    if (
      (e.type === 'inlineCode' &&
        (r.value = N(
          !1,
          e.value,
          `
`,
          ' '
        )),
      e.type === 'wikiLink' && (r.value = N(!1, e.value.trim(), /[\t\n]+/gu, ' ')),
      (e.type === 'definition' || e.type === 'linkReference' || e.type === 'imageReference') &&
        (r.label = (0, oi.default)(e.label)),
      (e.type === 'link' || e.type === 'image') && e.url && e.url.includes('('))
    )
      for (let n of '<>') r.url = N(!1, e.url, n, encodeURIComponent(n));
    if (
      ((e.type === 'definition' || e.type === 'link' || e.type === 'image') &&
        e.title &&
        (r.title = N(!1, e.title, /\\(?=["')])/gu, '')),
      (t == null ? void 0 : t.type) === 'root' &&
        t.children.length > 0 &&
        (t.children[0] === e || (ni(t.children[0]) && t.children[1] === e)) &&
        e.type === 'html' &&
        gt(e.value))
    )
      return null;
  }
  si.ignoredProperties = _l;
  var ci = si;
  var li =
      /(?:[\u{2ea}-\u{2eb}\u{1100}-\u{11ff}\u{2e80}-\u{2e99}\u{2e9b}-\u{2ef3}\u{2f00}-\u{2fd5}\u{2ff0}-\u{303f}\u{3041}-\u{3096}\u{3099}-\u{30ff}\u{3105}-\u{312f}\u{3131}-\u{318e}\u{3190}-\u{4dbf}\u{4e00}-\u{9fff}\u{a700}-\u{a707}\u{a960}-\u{a97c}\u{ac00}-\u{d7a3}\u{d7b0}-\u{d7c6}\u{d7cb}-\u{d7fb}\u{f900}-\u{fa6d}\u{fa70}-\u{fad9}\u{fe10}-\u{fe1f}\u{fe30}-\u{fe6f}\u{ff00}-\u{ffef}\u{16fe3}\u{1aff0}-\u{1aff3}\u{1aff5}-\u{1affb}\u{1affd}-\u{1affe}\u{1b000}-\u{1b122}\u{1b132}\u{1b150}-\u{1b152}\u{1b155}\u{1b164}-\u{1b167}\u{1f200}\u{1f250}-\u{1f251}\u{20000}-\u{2a6df}\u{2a700}-\u{2b739}\u{2b740}-\u{2b81d}\u{2b820}-\u{2cea1}\u{2ceb0}-\u{2ebe0}\u{2f800}-\u{2fa1d}\u{30000}-\u{3134a}\u{31350}-\u{323af}])(?:[\u{fe00}-\u{fe0f}\u{e0100}-\u{e01ef}])?/u,
    Se =
      /(?:[\u{21}-\u{2f}\u{3a}-\u{40}\u{5b}-\u{60}\u{7b}-\u{7e}]|\p{General_Category=Connector_Punctuation}|\p{General_Category=Dash_Punctuation}|\p{General_Category=Close_Punctuation}|\p{General_Category=Final_Punctuation}|\p{General_Category=Initial_Punctuation}|\p{General_Category=Other_Punctuation}|\p{General_Category=Open_Punctuation})/u;
  async function Sl(e, r) {
    if (e.language === 'yaml') {
      let t = e.value.trim(),
        n = t ? await r(t, { parser: 'yaml' }) : '';
      return _e([e.startDelimiter, e.explicitLanguage, P, n, n ? P : '', e.endDelimiter]);
    }
  }
  var fi = Sl;
  var Ol = e => String(e).split(/[/\\]/u).pop();
  function Di(e, r) {
    if (!r) return;
    let t = Ol(r).toLowerCase();
    return (
      e.find(({ filenames: n }) => (n == null ? void 0 : n.some(a => a.toLowerCase() === t))) ??
      e.find(({ extensions: n }) => (n == null ? void 0 : n.some(a => t.endsWith(a))))
    );
  }
  function Ll(e, r) {
    if (r)
      return (
        e.find(({ name: t }) => t.toLowerCase() === r) ??
        e.find(({ aliases: t }) => (t == null ? void 0 : t.includes(r))) ??
        e.find(({ extensions: t }) => (t == null ? void 0 : t.includes(`.${r}`)))
      );
  }
  function Pl(e, r) {
    let t = e.plugins.flatMap(a => a.languages ?? []),
      n = Ll(t, r.language) ?? Di(t, r.physicalFile) ?? Di(t, r.file) ?? (r.physicalFile, void 0);
    return n == null ? void 0 : n.parsers[0];
  }
  var pi = Pl;
  var Il = new Proxy(() => {}, { get: () => Il });
  function Oe(e) {
    return e.position.start.offset;
  }
  function Le(e) {
    return e.position.end.offset;
  }
  var vt = new Set([
      'liquidNode',
      'inlineCode',
      'emphasis',
      'esComment',
      'strong',
      'delete',
      'wikiLink',
      'link',
      'linkReference',
      'image',
      'imageReference',
      'footnote',
      'footnoteReference',
      'sentence',
      'whitespace',
      'word',
      'break',
      'inlineMath',
    ]),
    Pr = new Set([...vt, 'tableCell', 'paragraph', 'heading']),
    Ge = 'non-cjk',
    ie = 'cj-letter',
    Pe = 'k-letter',
    sr = 'cjk-punctuation',
    Nl = /\p{Script_Extensions=Hangul}/u;
  function Ir(e) {
    let r = [],
      t = e.split(/([\t\n ]+)/u);
    for (let [a, u] of t.entries()) {
      if (a % 2 === 1) {
        r.push({
          type: 'whitespace',
          value: /\n/u.test(u)
            ? `
`
            : ' ',
        });
        continue;
      }
      if ((a === 0 || a === t.length - 1) && u === '') continue;
      let i = u.split(new RegExp(`(${li.source})`, 'u'));
      for (let [o, s] of i.entries())
        if (!((o === 0 || o === i.length - 1) && s === '')) {
          if (o % 2 === 0) {
            s !== '' &&
              n({
                type: 'word',
                value: s,
                kind: Ge,
                isCJ: !1,
                hasLeadingPunctuation: Se.test(s[0]),
                hasTrailingPunctuation: Se.test(z(!1, s, -1)),
              });
            continue;
          }
          if (Se.test(s)) {
            n({
              type: 'word',
              value: s,
              kind: sr,
              isCJ: !0,
              hasLeadingPunctuation: !0,
              hasTrailingPunctuation: !0,
            });
            continue;
          }
          if (Nl.test(s)) {
            n({
              type: 'word',
              value: s,
              kind: Pe,
              isCJ: !1,
              hasLeadingPunctuation: !1,
              hasTrailingPunctuation: !1,
            });
            continue;
          }
          n({
            type: 'word',
            value: s,
            kind: ie,
            isCJ: !0,
            hasLeadingPunctuation: !1,
            hasTrailingPunctuation: !1,
          });
        }
    }
    return r;
    function n(a) {
      let u = z(!1, r, -1);
      (u == null ? void 0 : u.type) === 'word' &&
        !i(Ge, sr) &&
        ![u.value, a.value].some(o => /\u3000/u.test(o)) &&
        r.push({ type: 'whitespace', value: '' }),
        r.push(a);
      function i(o, s) {
        return (u.kind === o && a.kind === s) || (u.kind === s && a.kind === o);
      }
    }
  }
  function Ye(e, r) {
    let t = r.originalText.slice(e.position.start.offset, e.position.end.offset),
      { numberText: n, leadingSpaces: a } = t.match(
        /^\s*(?<numberText>\d+)(\.|\))(?<leadingSpaces>\s*)/u
      ).groups;
    return { number: Number(n), leadingSpaces: a };
  }
  function hi(e, r) {
    return !e.ordered || e.children.length < 2 || Ye(e.children[1], r).number !== 1
      ? !1
      : Ye(e.children[0], r).number !== 0
        ? !0
        : e.children.length > 2 && Ye(e.children[2], r).number === 1;
  }
  function Nr(e, r) {
    let { value: t } = e;
    return e.position.end.offset === r.length &&
      t.endsWith(`
`) &&
      r.endsWith(`
`)
      ? t.slice(0, -1)
      : t;
  }
  function Ae(e, r) {
    return (function t(n, a, u) {
      let i = { ...r(n, a, u) };
      return i.children && (i.children = i.children.map((o, s) => t(o, s, [i, ...u]))), i;
    })(e, null, []);
  }
  function Et(e) {
    if ((e == null ? void 0 : e.type) !== 'link' || e.children.length !== 1) return !1;
    let [r] = e.children;
    return Oe(e) === Oe(r) && Le(e) === Le(r);
  }
  function Rl(e, r) {
    let { node: t } = e;
    if (t.type === 'code' && t.lang !== null) {
      let n = pi(r, { language: t.lang });
      if (n)
        return async a => {
          let u = r.__inJsTemplate ? '~' : '`',
            i = u.repeat(Math.max(3, Or(t.value, u) + 1)),
            o = { parser: n };
          t.lang === 'ts' || t.lang === 'typescript'
            ? (o.filepath = 'dummy.ts')
            : t.lang === 'tsx' && (o.filepath = 'dummy.tsx');
          let s = await a(Nr(t, r.originalText), o);
          return _e([i, t.lang, t.meta ? ' ' + t.meta : '', P, be(s), P, i]);
        };
    }
    switch (t.type) {
      case 'front-matter':
        return n => fi(t, n);
      case 'import':
      case 'export':
        return n => n(t.value, { parser: 'babel' });
      case 'jsx':
        return n => n(`<$>${t.value}</$>`, { parser: '__js_expression', rootMarker: 'mdx' });
    }
    return null;
  }
  var di = Rl;
  var cr = null;
  function lr(e) {
    if (cr !== null && typeof cr.property) {
      let r = cr;
      return (cr = lr.prototype = null), r;
    }
    return (cr = lr.prototype = e ?? Object.create(null)), new lr();
  }
  var Ul = 10;
  for (let e = 0; e <= Ul; e++) lr();
  function Ct(e) {
    return lr(e);
  }
  function Ml(e, r = 'type') {
    Ct(e);
    function t(n) {
      let a = n[r],
        u = e[a];
      if (!Array.isArray(u))
        throw Object.assign(new Error(`Missing visitor keys for '${a}'.`), { node: n });
      return u;
    }
    return t;
  }
  var mi = Ml;
  var zl = {
      'front-matter': [],
      root: ['children'],
      paragraph: ['children'],
      sentence: ['children'],
      word: [],
      whitespace: [],
      emphasis: ['children'],
      strong: ['children'],
      delete: ['children'],
      inlineCode: [],
      wikiLink: [],
      link: ['children'],
      image: [],
      blockquote: ['children'],
      heading: ['children'],
      code: [],
      html: [],
      list: ['children'],
      thematicBreak: [],
      linkReference: ['children'],
      imageReference: [],
      definition: [],
      footnote: ['children'],
      footnoteReference: [],
      footnoteDefinition: ['children'],
      table: ['children'],
      tableCell: ['children'],
      break: [],
      liquidNode: [],
      import: [],
      export: [],
      esComment: [],
      jsx: [],
      math: [],
      inlineMath: [],
      tableRow: ['children'],
      listItem: ['children'],
      text: [],
    },
    Fi = zl;
  var Yl = mi(Fi),
    gi = Yl;
  function vi(e) {
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
  var Ei = () =>
    /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
  function Ci(e) {
    return e === 12288 || (e >= 65281 && e <= 65376) || (e >= 65504 && e <= 65510);
  }
  function bi(e) {
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
  var yi = e => !(Ci(e) || bi(e));
  var Gl = /[^\x20-\x7F]/u;
  function Vl(e) {
    if (!e) return 0;
    if (!Gl.test(e)) return e.length;
    e = e.replace(Ei(), '  ');
    let r = 0;
    for (let t of e) {
      let n = t.codePointAt(0);
      n <= 31 || (n >= 127 && n <= 159) || (n >= 768 && n <= 879) || (r += yi(n) ? 1 : 2);
    }
    return r;
  }
  var fr = Vl;
  var j = Symbol('MODE_BREAK'),
    ue = Symbol('MODE_FLAT'),
    Ve = Symbol('cursor'),
    bt = Symbol('DOC_FILL_PRINTED_LENGTH');
  function Ai() {
    return { value: '', length: 0, queue: [] };
  }
  function jl(e, r) {
    return yt(e, { type: 'indent' }, r);
  }
  function $l(e, r, t) {
    return r === Number.NEGATIVE_INFINITY
      ? e.root || Ai()
      : r < 0
        ? yt(e, { type: 'dedent' }, t)
        : r
          ? r.type === 'root'
            ? { ...e, root: e }
            : yt(e, { type: typeof r == 'string' ? 'stringAlign' : 'numberAlign', n: r }, t)
          : e;
  }
  function yt(e, r, t) {
    let n = r.type === 'dedent' ? e.queue.slice(0, -1) : [...e.queue, r],
      a = '',
      u = 0,
      i = 0,
      o = 0;
    for (let D of n)
      switch (D.type) {
        case 'indent':
          c(), t.useTabs ? s(1) : l(t.tabWidth);
          break;
        case 'stringAlign':
          c(), (a += D.n), (u += D.n.length);
          break;
        case 'numberAlign':
          (i += 1), (o += D.n);
          break;
        default:
          throw new Error(`Unexpected type '${D.type}'`);
      }
    return p(), { ...e, value: a, length: u, queue: n };
    function s(D) {
      (a += '	'.repeat(D)), (u += t.tabWidth * D);
    }
    function l(D) {
      (a += ' '.repeat(D)), (u += D);
    }
    function c() {
      t.useTabs ? f() : p();
    }
    function f() {
      i > 0 && s(i), d();
    }
    function p() {
      o > 0 && l(o), d();
    }
    function d() {
      (i = 0), (o = 0);
    }
  }
  function At(e) {
    let r = 0,
      t = 0,
      n = e.length;
    e: for (; n--; ) {
      let a = e[n];
      if (a === Ve) {
        t++;
        continue;
      }
      for (let u = a.length - 1; u >= 0; u--) {
        let i = a[u];
        if (i === ' ' || i === '	') r++;
        else {
          e[n] = a.slice(0, u + 1);
          break e;
        }
      }
    }
    if (r > 0 || t > 0) for (e.length = n + 1; t-- > 0; ) e.push(Ve);
    return r;
  }
  function Rr(e, r, t, n, a, u) {
    if (t === Number.POSITIVE_INFINITY) return !0;
    let i = r.length,
      o = [e],
      s = [];
    for (; t >= 0; ) {
      if (o.length === 0) {
        if (i === 0) return !0;
        o.push(r[--i]);
        continue;
      }
      let { mode: l, doc: c } = o.pop(),
        f = Y(c);
      switch (f) {
        case G:
          s.push(c), (t -= fr(c));
          break;
        case H:
        case X: {
          let p = f === H ? c : c.parts,
            d = c[bt] ?? 0;
          for (let D = p.length - 1; D >= d; D--) o.push({ mode: l, doc: p[D] });
          break;
        }
        case re:
        case te:
        case De:
        case de:
          o.push({ mode: l, doc: c.contents });
          break;
        case fe:
          t += At(s);
          break;
        case J: {
          if (u && c.break) return !1;
          let p = c.break ? j : l,
            d = c.expandedStates && p === j ? z(!1, c.expandedStates, -1) : c.contents;
          o.push({ mode: p, doc: d });
          break;
        }
        case K: {
          let d = (c.groupId ? a[c.groupId] || ue : l) === j ? c.breakContents : c.flatContents;
          d && o.push({ mode: l, doc: d });
          break;
        }
        case V:
          if (l === j || c.hard) return !0;
          c.soft || (s.push(' '), t--);
          break;
        case pe:
          n = !0;
          break;
        case he:
          if (n) return !1;
          break;
      }
    }
    return !1;
  }
  function wi(e, r) {
    let t = {},
      n = r.printWidth,
      a = vi(r.endOfLine),
      u = 0,
      i = [{ ind: Ai(), mode: j, doc: e }],
      o = [],
      s = !1,
      l = [],
      c = 0;
    for (Jn(e); i.length > 0; ) {
      let { ind: p, mode: d, doc: D } = i.pop();
      switch (Y(D)) {
        case G: {
          let h =
            a !==
            `
`
              ? N(
                  !1,
                  D,
                  `
`,
                  a
                )
              : D;
          o.push(h), i.length > 0 && (u += fr(h));
          break;
        }
        case H:
          for (let h = D.length - 1; h >= 0; h--) i.push({ ind: p, mode: d, doc: D[h] });
          break;
        case Ce:
          if (c >= 2) throw new Error("There are too many 'cursor' in doc.");
          o.push(Ve), c++;
          break;
        case re:
          i.push({ ind: jl(p, r), mode: d, doc: D.contents });
          break;
        case te:
          i.push({ ind: $l(p, D.n, r), mode: d, doc: D.contents });
          break;
        case fe:
          u -= At(o);
          break;
        case J:
          switch (d) {
            case ue:
              if (!s) {
                i.push({ ind: p, mode: D.break ? j : ue, doc: D.contents });
                break;
              }
            case j: {
              s = !1;
              let h = { ind: p, mode: ue, doc: D.contents },
                m = n - u,
                F = l.length > 0;
              if (!D.break && Rr(h, i, m, F, t)) i.push(h);
              else if (D.expandedStates) {
                let y = z(!1, D.expandedStates, -1);
                if (D.break) {
                  i.push({ ind: p, mode: j, doc: y });
                  break;
                } else
                  for (let E = 1; E < D.expandedStates.length + 1; E++)
                    if (E >= D.expandedStates.length) {
                      i.push({ ind: p, mode: j, doc: y });
                      break;
                    } else {
                      let B = D.expandedStates[E],
                        b = { ind: p, mode: ue, doc: B };
                      if (Rr(b, i, m, F, t)) {
                        i.push(b);
                        break;
                      }
                    }
              } else i.push({ ind: p, mode: j, doc: D.contents });
              break;
            }
          }
          D.id && (t[D.id] = z(!1, i, -1).mode);
          break;
        case X: {
          let h = n - u,
            m = D[bt] ?? 0,
            { parts: F } = D,
            y = F.length - m;
          if (y === 0) break;
          let E = F[m + 0],
            B = F[m + 1],
            b = { ind: p, mode: ue, doc: E },
            g = { ind: p, mode: j, doc: E },
            A = Rr(b, [], h, l.length > 0, t, !0);
          if (y === 1) {
            A ? i.push(b) : i.push(g);
            break;
          }
          let w = { ind: p, mode: ue, doc: B },
            v = { ind: p, mode: j, doc: B };
          if (y === 2) {
            A ? i.push(w, b) : i.push(v, g);
            break;
          }
          let x = F[m + 2],
            k = { ind: p, mode: d, doc: { ...D, [bt]: m + 2 } };
          Rr({ ind: p, mode: ue, doc: [E, B, x] }, [], h, l.length > 0, t, !0)
            ? i.push(k, w, b)
            : A
              ? i.push(k, v, b)
              : i.push(k, v, g);
          break;
        }
        case K:
        case De: {
          let h = D.groupId ? t[D.groupId] : d;
          if (h === j) {
            let m = D.type === K ? D.breakContents : D.negate ? D.contents : nr(D.contents);
            m && i.push({ ind: p, mode: d, doc: m });
          }
          if (h === ue) {
            let m = D.type === K ? D.flatContents : D.negate ? nr(D.contents) : D.contents;
            m && i.push({ ind: p, mode: d, doc: m });
          }
          break;
        }
        case pe:
          l.push({ ind: p, mode: d, doc: D.contents });
          break;
        case he:
          l.length > 0 && i.push({ ind: p, mode: d, doc: ur });
          break;
        case V:
          switch (d) {
            case ue:
              if (D.hard) s = !0;
              else {
                D.soft || (o.push(' '), (u += 1));
                break;
              }
            case j:
              if (l.length > 0) {
                i.push({ ind: p, mode: d, doc: D }, ...l.reverse()), (l.length = 0);
                break;
              }
              D.literal
                ? p.root
                  ? (o.push(a, p.root.value), (u = p.root.length))
                  : (o.push(a), (u = 0))
                : ((u -= At(o)), o.push(a + p.value), (u = p.length));
              break;
          }
          break;
        case de:
          i.push({ ind: p, mode: d, doc: D.contents });
          break;
        case ne:
          break;
        default:
          throw new Te(D);
      }
      i.length === 0 && l.length > 0 && (i.push(...l.reverse()), (l.length = 0));
    }
    let f = o.indexOf(Ve);
    if (f !== -1) {
      let p = o.indexOf(Ve, f + 1);
      if (p === -1) return { formatted: o.filter(m => m !== Ve).join('') };
      let d = o.slice(0, f).join(''),
        D = o.slice(f + 1, p).join(''),
        h = o.slice(p + 1).join('');
      return { formatted: d + D + h, cursorNodeStart: d.length, cursorNodeText: D };
    }
    return { formatted: o.join('') };
  }
  function xi(e, r, t) {
    let { node: n } = e,
      a = [],
      u = e.map(
        () =>
          e.map(({ index: f }) => {
            let p = wi(t(), r).formatted,
              d = fr(p);
            return (a[f] = Math.max(a[f] ?? 3, d)), { text: p, width: d };
          }, 'children'),
        'children'
      ),
      i = s(!1);
    if (r.proseWrap !== 'never') return [ir, i];
    let o = s(!0);
    return [ir, Me(Qn(o, i))];
    function s(f) {
      return qr(
        ur,
        [c(u[0], f), l(f), ...u.slice(1).map(p => c(p, f))].map(p => `| ${p.join(' | ')} |`)
      );
    }
    function l(f) {
      return a.map((p, d) => {
        let D = n.align[d],
          h = D === 'center' || D === 'left' ? ':' : '-',
          m = D === 'center' || D === 'right' ? ':' : '-',
          F = f ? '-' : '-'.repeat(p - 2);
        return `${h}${F}${m}`;
      });
    }
    function c(f, p) {
      return f.map(({ text: d, width: D }, h) => {
        if (p) return d;
        let m = a[h] - D,
          F = n.align[h],
          y = 0;
        F === 'right' ? (y = m) : F === 'center' && (y = Math.floor(m / 2));
        let E = m - y;
        return `${' '.repeat(y)}${d}${' '.repeat(E)}`;
      });
    }
  }
  function ki(e, r, t) {
    let n = e.map(t, 'children');
    return Wl(n);
  }
  function Wl(e) {
    let r = [''];
    return (
      (function t(n) {
        for (let a of n) {
          let u = Y(a);
          if (u === H) {
            t(a);
            continue;
          }
          let i = a,
            o = [];
          u === X && ([i, ...o] = a.parts), r.push([r.pop(), i], ...o);
        }
      })(e),
      ze(r)
    );
  }
  var Q,
    wt = class {
      constructor(r) {
        jn(this, Q);
        $n(this, Q, new Set(r));
      }
      getLeadingWhitespaceCount(r) {
        let t = ce(this, Q),
          n = 0;
        for (let a = 0; a < r.length && t.has(r.charAt(a)); a++) n++;
        return n;
      }
      getTrailingWhitespaceCount(r) {
        let t = ce(this, Q),
          n = 0;
        for (let a = r.length - 1; a >= 0 && t.has(r.charAt(a)); a--) n++;
        return n;
      }
      getLeadingWhitespace(r) {
        let t = this.getLeadingWhitespaceCount(r);
        return r.slice(0, t);
      }
      getTrailingWhitespace(r) {
        let t = this.getTrailingWhitespaceCount(r);
        return r.slice(r.length - t);
      }
      hasLeadingWhitespace(r) {
        return ce(this, Q).has(r.charAt(0));
      }
      hasTrailingWhitespace(r) {
        return ce(this, Q).has(z(!1, r, -1));
      }
      trimStart(r) {
        let t = this.getLeadingWhitespaceCount(r);
        return r.slice(t);
      }
      trimEnd(r) {
        let t = this.getTrailingWhitespaceCount(r);
        return r.slice(0, r.length - t);
      }
      trim(r) {
        return this.trimEnd(this.trimStart(r));
      }
      split(r, t = !1) {
        let n = `[${le([...ce(this, Q)].join(''))}]+`,
          a = new RegExp(t ? `(${n})` : n, 'u');
        return r.split(a);
      }
      hasWhitespaceCharacter(r) {
        let t = ce(this, Q);
        return Array.prototype.some.call(r, n => t.has(n));
      }
      hasNonWhitespaceCharacter(r) {
        let t = ce(this, Q);
        return Array.prototype.some.call(r, n => !t.has(n));
      }
      isWhitespaceOnly(r) {
        let t = ce(this, Q);
        return Array.prototype.every.call(r, n => t.has(n));
      }
    };
  Q = new WeakMap();
  var Bi = wt;
  var Hl = [
      '	',
      `
`,
      '\f',
      '\r',
      ' ',
    ],
    Kl = new Bi(Hl),
    xt = Kl;
  var Jl = /^.$/su;
  function Xl(e, r) {
    return (e = Ql(e, r)), (e = ef(e)), (e = tf(e, r)), (e = nf(e, r)), (e = rf(e)), e;
  }
  function Ql(e, r) {
    return Ae(e, t =>
      t.type !== 'text' ||
      t.value === '*' ||
      t.value === '_' ||
      !Jl.test(t.value) ||
      t.position.end.offset - t.position.start.offset === t.value.length
        ? t
        : { ...t, value: r.originalText.slice(t.position.start.offset, t.position.end.offset) }
    );
  }
  function Zl(e, r, t) {
    return Ae(e, n => {
      if (!n.children) return n;
      let a = n.children.reduce((u, i) => {
        let o = z(!1, u, -1);
        return o && r(o, i) ? u.splice(-1, 1, t(o, i)) : u.push(i), u;
      }, []);
      return { ...n, children: a };
    });
  }
  function ef(e) {
    return Zl(
      e,
      (r, t) => r.type === 'text' && t.type === 'text',
      (r, t) => ({
        type: 'text',
        value: r.value + t.value,
        position: { start: r.position.start, end: t.position.end },
      })
    );
  }
  function rf(e) {
    return Ae(e, (r, t, [n]) => {
      if (r.type !== 'text') return r;
      let { value: a } = r;
      return (
        n.type === 'paragraph' &&
          (t === 0 && (a = xt.trimStart(a)), t === n.children.length - 1 && (a = xt.trimEnd(a))),
        { type: 'sentence', position: r.position, children: Ir(a) }
      );
    });
  }
  function tf(e, r) {
    return Ae(e, (t, n, a) => {
      if (t.type === 'code') {
        let u = /^\n?(?: {4,}|\t)/u.test(
          r.originalText.slice(t.position.start.offset, t.position.end.offset)
        );
        if (((t.isIndented = u), u))
          for (let i = 0; i < a.length; i++) {
            let o = a[i];
            if (o.hasIndentedCodeblock) break;
            o.type === 'list' && (o.hasIndentedCodeblock = !0);
          }
      }
      return t;
    });
  }
  function nf(e, r) {
    return Ae(e, (a, u, i) => {
      if (a.type === 'list' && a.children.length > 0) {
        for (let o = 0; o < i.length; o++) {
          let s = i[o];
          if (s.type === 'list' && !s.isAligned) return (a.isAligned = !1), a;
        }
        a.isAligned = n(a);
      }
      return a;
    });
    function t(a) {
      return a.children.length === 0 ? -1 : a.children[0].position.start.column - 1;
    }
    function n(a) {
      if (!a.ordered) return !0;
      let [u, i] = a.children;
      if (Ye(u, r).leadingSpaces.length > 1) return !0;
      let s = t(u);
      if (s === -1) return !1;
      if (a.children.length === 1) return s % r.tabWidth === 0;
      let l = t(i);
      return s !== l ? !1 : s % r.tabWidth === 0 ? !0 : Ye(i, r).leadingSpaces.length > 1;
    }
  }
  var Ti = Xl;
  function qi(e, r) {
    let t = [''];
    return (
      e.each(() => {
        let { node: n } = e,
          a = r();
        switch (n.type) {
          case 'whitespace':
            if (Y(a) !== G) {
              t.push(a, '');
              break;
            }
          default:
            t.push([t.pop(), a]);
        }
      }, 'children'),
      ze(t)
    );
  }
  var uf = new Set(['heading', 'tableCell', 'link', 'wikiLink']),
    _i = new Set('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~');
  function af({ parent: e }) {
    if (e.usesCJSpaces === void 0) {
      let r = { ' ': 0, '': 0 },
        { children: t } = e;
      for (let n = 1; n < t.length - 1; ++n) {
        let a = t[n];
        if (a.type === 'whitespace' && (a.value === ' ' || a.value === '')) {
          let u = t[n - 1].kind,
            i = t[n + 1].kind;
          ((u === ie && i === Ge) || (u === Ge && i === ie)) && ++r[a.value];
        }
      }
      e.usesCJSpaces = r[' '] > r[''];
    }
    return e.usesCJSpaces;
  }
  function of(e, r) {
    if (r) return !0;
    let { previous: t, next: n } = e;
    if (!t || !n) return !0;
    let a = t.kind,
      u = n.kind;
    return (Si(a) && Si(u)) || (a === Pe && u === ie) || (u === Pe && a === ie)
      ? !0
      : a === sr || u === sr || (a === ie && u === ie)
        ? !1
        : _i.has(n.value[0]) || _i.has(z(!1, t.value, -1))
          ? !0
          : t.hasTrailingPunctuation || n.hasLeadingPunctuation
            ? !1
            : af(e);
  }
  function Si(e) {
    return e === Ge || e === Pe;
  }
  function sf(e, r, t, n) {
    if (t !== 'always' || e.hasAncestor(i => uf.has(i.type))) return !1;
    if (n) return r !== '';
    let { previous: a, next: u } = e;
    return !a || !u
      ? !0
      : r === ''
        ? !1
        : (a.kind === Pe && u.kind === ie) || (u.kind === Pe && a.kind === ie)
          ? !0
          : !(a.isCJ || u.isCJ);
  }
  function kt(e, r, t, n) {
    if (
      t === 'preserve' &&
      r ===
        `
`
    )
      return P;
    let a =
      r === ' ' ||
      (r ===
        `
` &&
        of(e, n));
    return sf(e, r, t, n) ? (a ? _r : Sr) : a ? ' ' : '';
  }
  var cf = new Set(['listItem', 'definition']);
  function lf(e, r, t) {
    var a, u;
    let { node: n } = e;
    if (mf(e)) {
      let i = [''],
        o = Ir(r.originalText.slice(n.position.start.offset, n.position.end.offset));
      for (let s of o) {
        if (s.type === 'word') {
          i.push([i.pop(), s.value]);
          continue;
        }
        let l = kt(e, s.value, r.proseWrap, !0);
        if (Y(l) === G) {
          i.push([i.pop(), l]);
          continue;
        }
        i.push(l, '');
      }
      return ze(i);
    }
    switch (n.type) {
      case 'front-matter':
        return r.originalText.slice(n.position.start.offset, n.position.end.offset);
      case 'root':
        return n.children.length === 0 ? '' : [pf(e, r, t), P];
      case 'paragraph':
        return ki(e, r, t);
      case 'sentence':
        return qi(e, t);
      case 'word': {
        let i = N(
            !1,
            N(!1, n.value, '*', String.raw`\*`),
            new RegExp([`(^|${Se.source})(_+)`, `(_+)(${Se.source}|$)`].join('|'), 'gu'),
            (l, c, f, p, d) => N(!1, f ? `${c}${f}` : `${p}${d}`, '_', String.raw`\_`)
          ),
          o = (l, c, f) => l.type === 'sentence' && f === 0,
          s = (l, c, f) => Et(l.children[f - 1]);
        return (
          i !== n.value &&
            (e.match(void 0, o, s) ||
              e.match(void 0, o, (l, c, f) => l.type === 'emphasis' && f === 0, s)) &&
            (i = i.replace(/^(\\?[*_])+/u, l => N(!1, l, '\\', ''))),
          i
        );
      }
      case 'whitespace': {
        let { next: i } = e,
          o = i && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/u.test(i.value) ? 'never' : r.proseWrap;
        return kt(e, n.value, o);
      }
      case 'emphasis': {
        let i;
        if (Et(n.children[0])) i = r.originalText[n.position.start.offset];
        else {
          let { previous: o, next: s } = e;
          i =
            ((o == null ? void 0 : o.type) === 'sentence' &&
              ((a = z(!1, o.children, -1)) == null ? void 0 : a.type) === 'word' &&
              !z(!1, o.children, -1).hasTrailingPunctuation) ||
            ((s == null ? void 0 : s.type) === 'sentence' &&
              ((u = s.children[0]) == null ? void 0 : u.type) === 'word' &&
              !s.children[0].hasLeadingPunctuation) ||
            e.hasAncestor(c => c.type === 'emphasis')
              ? '*'
              : '_';
        }
        return [i, $(e, r, t), i];
      }
      case 'strong':
        return ['**', $(e, r, t), '**'];
      case 'delete':
        return ['~~', $(e, r, t), '~~'];
      case 'inlineCode': {
        let i =
            r.proseWrap === 'preserve'
              ? n.value
              : N(
                  !1,
                  n.value,
                  `
`,
                  ' '
                ),
          o = Zn(i, '`'),
          s = '`'.repeat(o || 1),
          l =
            i.startsWith('`') ||
            i.endsWith('`') ||
            (/^[\n ]/u.test(i) && /[\n ]$/u.test(i) && /[^\n ]/u.test(i))
              ? ' '
              : '';
        return [s, l, i, l, s];
      }
      case 'wikiLink': {
        let i = '';
        return (
          r.proseWrap === 'preserve' ? (i = n.value) : (i = N(!1, n.value, /[\t\n]+/gu, ' ')),
          ['[[', i, ']]']
        );
      }
      case 'link':
        switch (r.originalText[n.position.start.offset]) {
          case '<': {
            let i = 'mailto:';
            return [
              '<',
              n.url.startsWith(i) &&
              r.originalText.slice(
                n.position.start.offset + 1,
                n.position.start.offset + 1 + i.length
              ) !== i
                ? n.url.slice(i.length)
                : n.url,
              '>',
            ];
          }
          case '[':
            return ['[', $(e, r, t), '](', Bt(n.url, ')'), Ur(n.title, r), ')'];
          default:
            return r.originalText.slice(n.position.start.offset, n.position.end.offset);
        }
      case 'image':
        return ['![', n.alt || '', '](', Bt(n.url, ')'), Ur(n.title, r), ')'];
      case 'blockquote':
        return ['> ', ye('> ', $(e, r, t))];
      case 'heading':
        return ['#'.repeat(n.depth) + ' ', $(e, r, t)];
      case 'code': {
        if (n.isIndented) {
          let s = ' '.repeat(4);
          return ye(s, [s, be(n.value, P)]);
        }
        let i = r.__inJsTemplate ? '~' : '`',
          o = i.repeat(Math.max(3, Or(n.value, i) + 1));
        return [o, n.lang || '', n.meta ? ' ' + n.meta : '', P, be(Nr(n, r.originalText), P), P, o];
      }
      case 'html': {
        let { parent: i, isLast: o } = e,
          s = i.type === 'root' && o ? n.value.trimEnd() : n.value,
          l = /^<!--.*-->$/su.test(s);
        return be(s, l ? P : _e(tr));
      }
      case 'list': {
        let i = Li(n, e.parent),
          o = hi(n, r);
        return $(e, r, t, {
          processor(s) {
            let l = f(),
              c = s.node;
            if (
              c.children.length === 2 &&
              c.children[1].type === 'html' &&
              c.children[0].position.start.column !== c.children[1].position.start.column
            )
              return [l, Oi(s, r, t, l)];
            return [l, ye(' '.repeat(l.length), Oi(s, r, t, l))];
            function f() {
              let p = n.ordered
                ? (s.isFirst ? n.start : o ? 1 : n.start + s.index) + (i % 2 === 0 ? '. ' : ') ')
                : i % 2 === 0
                  ? '- '
                  : '* ';
              return (n.isAligned || n.hasIndentedCodeblock) && n.ordered ? ff(p, r) : p;
            }
          },
        });
      }
      case 'thematicBreak': {
        let { ancestors: i } = e,
          o = i.findIndex(l => l.type === 'list');
        return o === -1 ? '---' : Li(i[o], i[o + 1]) % 2 === 0 ? '***' : '---';
      }
      case 'linkReference':
        return [
          '[',
          $(e, r, t),
          ']',
          n.referenceType === 'full' ? Tt(n) : n.referenceType === 'collapsed' ? '[]' : '',
        ];
      case 'imageReference':
        switch (n.referenceType) {
          case 'full':
            return ['![', n.alt || '', ']', Tt(n)];
          default:
            return ['![', n.alt, ']', n.referenceType === 'collapsed' ? '[]' : ''];
        }
      case 'definition': {
        let i = r.proseWrap === 'always' ? _r : ' ';
        return Me([
          Tt(n),
          ':',
          nr([i, Bt(n.url), n.title === null ? '' : [i, Ur(n.title, r, !1)]]),
        ]);
      }
      case 'footnote':
        return ['[^', $(e, r, t), ']'];
      case 'footnoteReference':
        return Ri(n);
      case 'footnoteDefinition': {
        let i =
          n.children.length === 1 &&
          n.children[0].type === 'paragraph' &&
          (r.proseWrap === 'never' ||
            (r.proseWrap === 'preserve' &&
              n.children[0].position.start.line === n.children[0].position.end.line));
        return [
          Ri(n),
          ': ',
          i
            ? $(e, r, t)
            : Me([
                ye(
                  ' '.repeat(4),
                  $(e, r, t, { processor: ({ isFirst: o }) => (o ? Me([Sr, t()]) : t()) })
                ),
              ]),
        ];
      }
      case 'table':
        return xi(e, r, t);
      case 'tableCell':
        return $(e, r, t);
      case 'break':
        return /\s/u.test(r.originalText[n.position.start.offset]) ? ['  ', _e(tr)] : ['\\', P];
      case 'liquidNode':
        return be(n.value, P);
      case 'import':
      case 'export':
      case 'jsx':
        return n.value;
      case 'esComment':
        return ['{/* ', n.value, ' */}'];
      case 'math':
        return ['$$', P, n.value ? [be(n.value, P), P] : '', '$$'];
      case 'inlineMath':
        return r.originalText.slice(Oe(n), Le(n));
      case 'tableRow':
      case 'listItem':
      case 'text':
      default:
        throw new ti(n, 'Markdown');
    }
  }
  function Oi(e, r, t, n) {
    let { node: a } = e,
      u = a.checked === null ? '' : a.checked ? '[x] ' : '[ ] ';
    return [
      u,
      $(e, r, t, {
        processor({ node: i, isFirst: o }) {
          if (o && i.type !== 'list') return ye(' '.repeat(u.length), t());
          let s = ' '.repeat(gf(r.tabWidth - n.length, 0, 3));
          return [s, ye(s, t())];
        },
      }),
    ];
  }
  function ff(e, r) {
    let t = n();
    return e + ' '.repeat(t >= 4 ? 0 : t);
    function n() {
      let a = e.length % r.tabWidth;
      return a === 0 ? 0 : r.tabWidth - a;
    }
  }
  function Li(e, r) {
    return Df(e, r, t => t.ordered === e.ordered);
  }
  function Df(e, r, t) {
    let n = -1;
    for (let a of r.children) if ((a.type === e.type && t(a) ? n++ : (n = -1), a === e)) return n;
  }
  function pf(e, r, t) {
    let n = [],
      a = null,
      { children: u } = e.node;
    for (let [i, o] of u.entries())
      switch (qt(o)) {
        case 'start':
          a === null && (a = { index: i, offset: o.position.end.offset });
          break;
        case 'end':
          a !== null &&
            (n.push({ start: a, end: { index: i, offset: o.position.start.offset } }), (a = null));
          break;
        default:
          break;
      }
    return $(e, r, t, {
      processor({ index: i }) {
        if (n.length > 0) {
          let o = n[0];
          if (i === o.start.index)
            return [
              Pi(u[o.start.index]),
              r.originalText.slice(o.start.offset, o.end.offset),
              Pi(u[o.end.index]),
            ];
          if (o.start.index < i && i < o.end.index) return !1;
          if (i === o.end.index) return n.shift(), !1;
        }
        return t();
      },
    });
  }
  function $(e, r, t, n = {}) {
    let { processor: a = t } = n,
      u = [];
    return (
      e.each(() => {
        let i = a(e);
        i !== !1 &&
          (u.length > 0 &&
            hf(e) &&
            (u.push(P), (df(e, r) || Ni(e)) && u.push(P), Ni(e) && u.push(P)),
          u.push(i));
      }, 'children'),
      u
    );
  }
  function Pi(e) {
    if (e.type === 'html') return e.value;
    if (
      e.type === 'paragraph' &&
      Array.isArray(e.children) &&
      e.children.length === 1 &&
      e.children[0].type === 'esComment'
    )
      return ['{/* ', e.children[0].value, ' */}'];
  }
  function qt(e) {
    let r;
    if (e.type === 'html') r = e.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/u);
    else {
      let t;
      e.type === 'esComment'
        ? (t = e)
        : e.type === 'paragraph' &&
          e.children.length === 1 &&
          e.children[0].type === 'esComment' &&
          (t = e.children[0]),
        t && (r = t.value.match(/^prettier-ignore(?:-(start|end))?$/u));
    }
    return r ? r[1] || 'next' : !1;
  }
  function hf({ node: e, parent: r }) {
    let t = vt.has(e.type),
      n = e.type === 'html' && Pr.has(r.type);
    return !t && !n;
  }
  function Ii(e, r) {
    return (
      e.type === 'listItem' &&
      (e.spread ||
        r.originalText.charAt(e.position.end.offset - 1) ===
          `
`)
    );
  }
  function df({ node: e, previous: r, parent: t }, n) {
    if (Ii(r, n)) return !0;
    let i = r.type === e.type && cf.has(e.type),
      o = t.type === 'listItem' && !Ii(t, n),
      s = qt(r) === 'next',
      l =
        e.type === 'html' && r.type === 'html' && r.position.end.line + 1 === e.position.start.line,
      c =
        e.type === 'html' &&
        t.type === 'listItem' &&
        r.type === 'paragraph' &&
        r.position.end.line + 1 === e.position.start.line;
    return !(i || o || s || l || c);
  }
  function Ni({ node: e, previous: r }) {
    let t = r.type === 'list',
      n = e.type === 'code' && e.isIndented;
    return t && n;
  }
  function mf(e) {
    let r = e.findAncestor(t => t.type === 'linkReference' || t.type === 'imageReference');
    return r && (r.type !== 'linkReference' || r.referenceType !== 'full');
  }
  var Ff = (e, r) => {
    for (let t of r) e = N(!1, e, t, encodeURIComponent(t));
    return e;
  };
  function Bt(e, r = []) {
    let t = [' ', ...(Array.isArray(r) ? r : [r])];
    return new RegExp(t.map(n => le(n)).join('|'), 'u').test(e) ? `<${Ff(e, '<>')}>` : e;
  }
  function Ur(e, r, t = !0) {
    if (!e) return '';
    if (t) return ' ' + Ur(e, r, !1);
    if (
      ((e = N(!1, e, /\\(?=["')])/gu, '')), e.includes('"') && e.includes("'") && !e.includes(')'))
    )
      return `(${e})`;
    let n = ri(e, r.singleQuote);
    return (e = N(!1, e, '\\', '\\\\')), (e = N(!1, e, n, `\\${n}`)), `${n}${e}${n}`;
  }
  function gf(e, r, t) {
    return Math.max(r, Math.min(e, t));
  }
  function vf(e) {
    return e.index > 0 && qt(e.previous) === 'next';
  }
  function Tt(e) {
    return `[${(0, Ui.default)(e.label)}]`;
  }
  function Ri(e) {
    return `[^${e.label}]`;
  }
  var Ef = {
      preprocess: Ti,
      print: lf,
      embed: di,
      massageAstNode: ci,
      hasPrettierIgnore: vf,
      insertPragma: ai,
      getVisitorKeys: gi,
    },
    Mi = Ef;
  var zi = [
    {
      linguistLanguageId: 222,
      name: 'Markdown',
      type: 'prose',
      color: '#083fa1',
      aliases: ['md', 'pandoc'],
      aceMode: 'markdown',
      codemirrorMode: 'gfm',
      codemirrorMimeType: 'text/x-gfm',
      wrap: !0,
      extensions: [
        '.md',
        '.livemd',
        '.markdown',
        '.mdown',
        '.mdwn',
        '.mkd',
        '.mkdn',
        '.mkdown',
        '.ronn',
        '.scd',
        '.workbook',
      ],
      filenames: ['contents.lr', 'README'],
      tmScope: 'text.md',
      parsers: ['markdown'],
      vscodeLanguageIds: ['markdown'],
    },
    {
      linguistLanguageId: 222,
      name: 'MDX',
      type: 'prose',
      color: '#083fa1',
      aliases: ['md', 'pandoc'],
      aceMode: 'markdown',
      codemirrorMode: 'gfm',
      codemirrorMimeType: 'text/x-gfm',
      wrap: !0,
      extensions: ['.mdx'],
      filenames: [],
      tmScope: 'text.md',
      parsers: ['mdx'],
      vscodeLanguageIds: ['mdx'],
    },
  ];
  var _t = {
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
  var Cf = { proseWrap: _t.proseWrap, singleQuote: _t.singleQuote },
    Yi = Cf;
  var Mn = {};
  Yn(Mn, { markdown: () => Nm, mdx: () => Rm, remark: () => Nm });
  var il = Ue(Vi(), 1),
    ul = Ue(iu(), 1),
    al = Ue(Zs(), 1),
    ol = Ue($c(), 1);
  var Tm = /^import\s/u,
    qm = /^export\s/u,
    Wc = String.raw`[a-z][a-z0-9]*(\.[a-z][a-z0-9]*)*|`,
    Hc = /<!---->|<!---?[^>-](?:-?[^-])*-->/u,
    _m = /^\{\s*\/\*(.*)\*\/\s*\}/u,
    Sm = `

`,
    Kc = e => Tm.test(e),
    Un = e => qm.test(e),
    Jc = (e, r) => {
      let t = r.indexOf(Sm),
        n = r.slice(0, t);
      if (Un(n) || Kc(n)) return e(n)({ type: Un(n) ? 'export' : 'import', value: n });
    },
    Xc = (e, r) => {
      let t = _m.exec(r);
      if (t) return e(t[0])({ type: 'esComment', value: t[1].trim() });
    };
  Jc.locator = e => (Un(e) || Kc(e) ? -1 : 1);
  Xc.locator = (e, r) => e.indexOf('{', r);
  var Qc = function () {
    let { Parser: e } = this,
      { blockTokenizers: r, blockMethods: t, inlineTokenizers: n, inlineMethods: a } = e.prototype;
    (r.esSyntax = Jc),
      (n.esComment = Xc),
      t.splice(t.indexOf('paragraph'), 0, 'esSyntax'),
      a.splice(a.indexOf('text'), 0, 'esComment');
  };
  var Om = function () {
      let e = this.Parser.prototype;
      (e.blockMethods = ['frontMatter', ...e.blockMethods]), (e.blockTokenizers.frontMatter = r);
      function r(t, n) {
        let a = or(n);
        if (a.frontMatter) return t(a.frontMatter.raw)(a.frontMatter);
      }
      r.onlyAtStart = !0;
    },
    Zc = Om;
  function Lm() {
    return e =>
      Ae(e, (r, t, [n]) =>
        r.type !== 'html' || Hc.test(r.value) || Pr.has(n.type) ? r : { ...r, type: 'jsx' }
      );
  }
  var el = Lm;
  var Pm = function () {
      let e = this.Parser.prototype,
        r = e.inlineMethods;
      r.splice(r.indexOf('text'), 0, 'liquid'), (e.inlineTokenizers.liquid = t);
      function t(n, a) {
        let u = a.match(/^(\{%.*?%\}|\{\{.*?\}\})/su);
        if (u) return n(u[0])({ type: 'liquidNode', value: u[0] });
      }
      t.locator = function (n, a) {
        return n.indexOf('{', a);
      };
    },
    rl = Pm;
  var Im = function () {
      let e = 'wikiLink',
        r = /^\[\[(?<linkContents>.+?)\]\]/su,
        t = this.Parser.prototype,
        n = t.inlineMethods;
      n.splice(n.indexOf('link'), 0, e), (t.inlineTokenizers.wikiLink = a);
      function a(u, i) {
        let o = r.exec(i);
        if (o) {
          let s = o.groups.linkContents.trim();
          return u(o[0])({ type: e, value: s });
        }
      }
      a.locator = function (u, i) {
        return u.indexOf('[', i);
      };
    },
    tl = Im;
  function sl({ isMDX: e }) {
    return r => {
      let t = (0, ol.default)()
        .use(al.default, { commonmark: !0, ...(e && { blocks: [Wc] }) })
        .use(il.default)
        .use(Zc)
        .use(ul.default)
        .use(e ? Qc : nl)
        .use(rl)
        .use(e ? el : nl)
        .use(tl);
      return t.run(t.parse(r));
    };
  }
  function nl() {}
  var cl = { astFormat: 'mdast', hasPragma: ui, locStart: Oe, locEnd: Le },
    Nm = { ...cl, parse: sl({ isMDX: !1 }) },
    Rm = { ...cl, parse: sl({ isMDX: !0 }) };
  var Um = { mdast: Mi };
  return dl(Mm);
});
