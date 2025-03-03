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
    (t.prettierPlugins = t.prettierPlugins || {}), (t.prettierPlugins.estree = e());
  }
})(function () {
  'use strict';
  var wn = Object.defineProperty;
  var Ha = Object.getOwnPropertyDescriptor;
  var Va = Object.getOwnPropertyNames;
  var $a = Object.prototype.hasOwnProperty;
  var Ns = e => {
    throw TypeError(e);
  };
  var xr = (e, t) => {
      for (var r in t) wn(e, r, { get: t[r], enumerable: !0 });
    },
    Ka = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let s of Va(t))
          !$a.call(e, s) &&
            s !== r &&
            wn(e, s, { get: () => t[s], enumerable: !(n = Ha(t, s)) || n.enumerable });
      return e;
    };
  var Qa = e => Ka(wn({}, '__esModule', { value: !0 }), e);
  var Gs = (e, t, r) => t.has(e) || Ns('Cannot ' + r);
  var ct = (e, t, r) => (Gs(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
    Us = (e, t, r) =>
      t.has(e)
        ? Ns('Cannot add the same private member more than once')
        : t instanceof WeakSet
          ? t.add(e)
          : t.set(e, r),
    Ys = (e, t, r, n) => (Gs(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r), r);
  var Em = {};
  xr(Em, { languages: () => fm, options: () => Na, printers: () => Dm });
  var Xs = [
    {
      linguistLanguageId: 183,
      name: 'JavaScript',
      type: 'programming',
      tmScope: 'source.js',
      aceMode: 'javascript',
      codemirrorMode: 'javascript',
      codemirrorMimeType: 'text/javascript',
      color: '#f1e05a',
      aliases: ['js', 'node'],
      extensions: [
        '.js',
        '._js',
        '.bones',
        '.cjs',
        '.es',
        '.es6',
        '.frag',
        '.gs',
        '.jake',
        '.javascript',
        '.jsb',
        '.jscad',
        '.jsfl',
        '.jslib',
        '.jsm',
        '.jspre',
        '.jss',
        '.mjs',
        '.njs',
        '.pac',
        '.sjs',
        '.ssjs',
        '.xsjs',
        '.xsjslib',
        '.wxs',
      ],
      filenames: ['Jakefile'],
      interpreters: [
        'chakra',
        'd8',
        'gjs',
        'js',
        'node',
        'nodejs',
        'qjs',
        'rhino',
        'v8',
        'v8-shell',
        'zx',
      ],
      parsers: [
        'babel',
        'acorn',
        'espree',
        'meriyah',
        'babel-flow',
        'babel-ts',
        'flow',
        'typescript',
      ],
      vscodeLanguageIds: ['javascript', 'mongo'],
    },
    {
      linguistLanguageId: 183,
      name: 'Flow',
      type: 'programming',
      tmScope: 'source.js',
      aceMode: 'javascript',
      codemirrorMode: 'javascript',
      codemirrorMimeType: 'text/javascript',
      color: '#f1e05a',
      aliases: [],
      extensions: ['.js.flow'],
      filenames: [],
      interpreters: [
        'chakra',
        'd8',
        'gjs',
        'js',
        'node',
        'nodejs',
        'qjs',
        'rhino',
        'v8',
        'v8-shell',
      ],
      parsers: ['flow', 'babel-flow'],
      vscodeLanguageIds: ['javascript'],
    },
    {
      linguistLanguageId: 183,
      name: 'JSX',
      type: 'programming',
      tmScope: 'source.js.jsx',
      aceMode: 'javascript',
      codemirrorMode: 'jsx',
      codemirrorMimeType: 'text/jsx',
      color: void 0,
      aliases: void 0,
      extensions: ['.jsx'],
      filenames: void 0,
      interpreters: void 0,
      parsers: ['babel', 'babel-flow', 'babel-ts', 'flow', 'typescript', 'espree', 'meriyah'],
      vscodeLanguageIds: ['javascriptreact'],
      group: 'JavaScript',
    },
    {
      linguistLanguageId: 378,
      name: 'TypeScript',
      type: 'programming',
      color: '#3178c6',
      aliases: ['ts'],
      interpreters: ['deno', 'ts-node'],
      extensions: ['.ts', '.cts', '.mts'],
      tmScope: 'source.ts',
      aceMode: 'typescript',
      codemirrorMode: 'javascript',
      codemirrorMimeType: 'application/typescript',
      parsers: ['typescript', 'babel-ts'],
      vscodeLanguageIds: ['typescript'],
    },
    {
      linguistLanguageId: 94901924,
      name: 'TSX',
      type: 'programming',
      color: '#3178c6',
      group: 'TypeScript',
      extensions: ['.tsx'],
      tmScope: 'source.tsx',
      aceMode: 'javascript',
      codemirrorMode: 'jsx',
      codemirrorMimeType: 'text/jsx',
      parsers: ['typescript', 'babel-ts'],
      vscodeLanguageIds: ['typescriptreact'],
    },
  ];
  var js = {};
  xr(js, {
    canAttachComment: () => Bp,
    embed: () => ri,
    experimentalFeatures: () => om,
    getCommentChildNodes: () => bp,
    getVisitorKeys: () => br,
    handleComments: () => Zn,
    insertPragma: () => yi,
    isBlockComment: () => ee,
    isGap: () => Pp,
    massageAstNode: () => xu,
    print: () => ja,
    printComment: () => Ou,
    willPrintOwnComments: () => es,
  });
  var za = (e, t, r, n) => {
      if (!(e && t == null))
        return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
    },
    Y = za;
  var Za = (e, t, r) => {
      if (!(e && t == null))
        return Array.isArray(t) || typeof t == 'string' ? t[r < 0 ? t.length + r : r] : t.at(r);
    },
    M = Za;
  function eo(e) {
    return e !== null && typeof e == 'object';
  }
  var Hs = eo;
  function* to(e, t) {
    let { getVisitorKeys: r, filter: n = () => !0 } = t,
      s = u => Hs(u) && n(u);
    for (let u of r(e)) {
      let i = e[u];
      if (Array.isArray(i)) for (let a of i) s(a) && (yield a);
      else s(i) && (yield i);
    }
  }
  function* ro(e, t) {
    let r = [e];
    for (let n = 0; n < r.length; n++) {
      let s = r[n];
      for (let u of to(s, t)) yield u, r.push(u);
    }
  }
  function Vs(e, { getVisitorKeys: t, predicate: r }) {
    for (let n of ro(e, { getVisitorKeys: t })) if (r(n)) return !0;
    return !1;
  }
  var $s = () =>
    /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
  function Ks(e) {
    return e === 12288 || (e >= 65281 && e <= 65376) || (e >= 65504 && e <= 65510);
  }
  function Qs(e) {
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
  var zs = e => !(Ks(e) || Qs(e));
  var no = /[^\x20-\x7F]/u;
  function so(e) {
    if (!e) return 0;
    if (!no.test(e)) return e.length;
    e = e.replace($s(), '  ');
    let t = 0;
    for (let r of e) {
      let n = r.codePointAt(0);
      n <= 31 || (n >= 127 && n <= 159) || (n >= 768 && n <= 879) || (t += zs(n) ? 1 : 2);
    }
    return t;
  }
  var rt = so;
  function hr(e) {
    return (t, r, n) => {
      let s = !!(n != null && n.backwards);
      if (r === !1) return !1;
      let { length: u } = t,
        i = r;
      for (; i >= 0 && i < u; ) {
        let a = t.charAt(i);
        if (e instanceof RegExp) {
          if (!e.test(a)) return i;
        } else if (!e.includes(a)) return i;
        s ? i-- : i++;
      }
      return i === -1 || i === u ? i : !1;
    };
  }
  var _m = hr(/\s/u),
    Xe = hr(' 	'),
    Zs = hr(',; 	'),
    eu = hr(/[^\n\r]/u);
  function uo(e, t, r) {
    let n = !!(r != null && r.backwards);
    if (t === !1) return !1;
    let s = e.charAt(t);
    if (n) {
      if (
        e.charAt(t - 1) === '\r' &&
        s ===
          `
`
      )
        return t - 2;
      if (
        s ===
          `
` ||
        s === '\r' ||
        s === '\u2028' ||
        s === '\u2029'
      )
        return t - 1;
    } else {
      if (
        s === '\r' &&
        e.charAt(t + 1) ===
          `
`
      )
        return t + 2;
      if (
        s ===
          `
` ||
        s === '\r' ||
        s === '\u2028' ||
        s === '\u2029'
      )
        return t + 1;
    }
    return t;
  }
  var He = uo;
  function io(e, t, r = {}) {
    let n = Xe(e, r.backwards ? t - 1 : t, r),
      s = He(e, n, r);
    return n !== s;
  }
  var Z = io;
  function ao(e, t) {
    if (t === !1) return !1;
    if (e.charAt(t) === '/' && e.charAt(t + 1) === '*') {
      for (let r = t + 2; r < e.length; ++r)
        if (e.charAt(r) === '*' && e.charAt(r + 1) === '/') return r + 2;
    }
    return t;
  }
  var _t = ao;
  function oo(e, t) {
    return t === !1 ? !1 : e.charAt(t) === '/' && e.charAt(t + 1) === '/' ? eu(e, t) : t;
  }
  var vt = oo;
  function po(e, t) {
    let r = null,
      n = t;
    for (; n !== r; ) (r = n), (n = Zs(e, n)), (n = _t(e, n)), (n = Xe(e, n));
    return (n = vt(e, n)), (n = He(e, n)), n !== !1 && Z(e, n);
  }
  var jt = po;
  function co(e) {
    return Array.isArray(e) && e.length > 0;
  }
  var O = co;
  var tu = new Proxy(() => {}, { get: () => tu }),
    Mt = tu;
  var gr = "'",
    ru = '"';
  function lo(e, t) {
    let r = t === !0 || t === gr ? gr : ru,
      n = r === gr ? ru : gr,
      s = 0,
      u = 0;
    for (let i of e) i === r ? s++ : i === n && u++;
    return s > u ? n : r;
  }
  var Sr = lo;
  function mo(e, t, r) {
    let n = t === '"' ? "'" : '"',
      u = Y(!1, e, /\\(.)|(["'])/gsu, (i, a, o) =>
        a === n
          ? a
          : o === t
            ? '\\' + o
            : o || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(a) ? a : '\\' + a)
      );
    return t + u + t;
  }
  var nu = mo;
  function yo(e, t) {
    Mt.ok(/^(?<quote>["']).*\k<quote>$/su.test(e));
    let r = e.slice(1, -1),
      n =
        t.parser === 'json' ||
        t.parser === 'jsonc' ||
        (t.parser === 'json5' && t.quoteProps === 'preserve' && !t.singleQuote)
          ? '"'
          : t.__isInHtmlAttribute
            ? "'"
            : Sr(r, t.singleQuote);
    return e.charAt(0) === n ? e : nu(r, n, !1);
  }
  var nt = yo;
  function q(e) {
    var n, s, u;
    let t = ((n = e.range) == null ? void 0 : n[0]) ?? e.start,
      r =
        (u = ((s = e.declaration) == null ? void 0 : s.decorators) ?? e.decorators) == null
          ? void 0
          : u[0];
    return r ? Math.min(q(r), t) : t;
  }
  function k(e) {
    var t;
    return ((t = e.range) == null ? void 0 : t[1]) ?? e.end;
  }
  function Pt(e, t) {
    let r = q(e);
    return Number.isInteger(r) && r === q(t);
  }
  function Do(e, t) {
    let r = k(e);
    return Number.isInteger(r) && r === k(t);
  }
  function su(e, t) {
    return Pt(e, t) && Do(e, t);
  }
  var rr = null;
  function nr(e) {
    if (rr !== null && typeof rr.property) {
      let t = rr;
      return (rr = nr.prototype = null), t;
    }
    return (rr = nr.prototype = e ?? Object.create(null)), new nr();
  }
  var fo = 10;
  for (let e = 0; e <= fo; e++) nr();
  function On(e) {
    return nr(e);
  }
  function Eo(e, t = 'type') {
    On(e);
    function r(n) {
      let s = n[t],
        u = e[s];
      if (!Array.isArray(u))
        throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), { node: n });
      return u;
    }
    return r;
  }
  var Br = Eo;
  var uu = {
    ArrayExpression: ['elements'],
    AssignmentExpression: ['left', 'right'],
    BinaryExpression: ['left', 'right'],
    InterpreterDirective: [],
    Directive: ['value'],
    DirectiveLiteral: [],
    BlockStatement: ['directives', 'body'],
    BreakStatement: ['label'],
    CallExpression: ['callee', 'arguments', 'typeParameters', 'typeArguments'],
    CatchClause: ['param', 'body'],
    ConditionalExpression: ['test', 'consequent', 'alternate'],
    ContinueStatement: ['label'],
    DebuggerStatement: [],
    DoWhileStatement: ['body', 'test'],
    EmptyStatement: [],
    ExpressionStatement: ['expression'],
    File: ['program'],
    ForInStatement: ['left', 'right', 'body'],
    ForStatement: ['init', 'test', 'update', 'body'],
    FunctionDeclaration: ['id', 'typeParameters', 'params', 'predicate', 'returnType', 'body'],
    FunctionExpression: ['id', 'typeParameters', 'params', 'returnType', 'body'],
    Identifier: ['typeAnnotation', 'decorators'],
    IfStatement: ['test', 'consequent', 'alternate'],
    LabeledStatement: ['label', 'body'],
    StringLiteral: [],
    NumericLiteral: [],
    NullLiteral: [],
    BooleanLiteral: [],
    RegExpLiteral: [],
    LogicalExpression: ['left', 'right'],
    MemberExpression: ['object', 'property'],
    NewExpression: ['callee', 'arguments', 'typeParameters', 'typeArguments'],
    Program: ['directives', 'body'],
    ObjectExpression: ['properties'],
    ObjectMethod: ['decorators', 'key', 'typeParameters', 'params', 'returnType', 'body'],
    ObjectProperty: ['key', 'value', 'decorators'],
    RestElement: ['argument', 'typeAnnotation', 'decorators'],
    ReturnStatement: ['argument'],
    SequenceExpression: ['expressions'],
    ParenthesizedExpression: ['expression'],
    SwitchCase: ['test', 'consequent'],
    SwitchStatement: ['discriminant', 'cases'],
    ThisExpression: [],
    ThrowStatement: ['argument'],
    TryStatement: ['block', 'handler', 'finalizer'],
    UnaryExpression: ['argument'],
    UpdateExpression: ['argument'],
    VariableDeclaration: ['declarations'],
    VariableDeclarator: ['id', 'init'],
    WhileStatement: ['test', 'body'],
    WithStatement: ['object', 'body'],
    AssignmentPattern: ['left', 'right', 'decorators', 'typeAnnotation'],
    ArrayPattern: ['elements', 'typeAnnotation', 'decorators'],
    ArrowFunctionExpression: ['typeParameters', 'params', 'predicate', 'returnType', 'body'],
    ClassBody: ['body'],
    ClassExpression: [
      'decorators',
      'id',
      'typeParameters',
      'superClass',
      'superTypeParameters',
      'mixins',
      'implements',
      'body',
      'superTypeArguments',
    ],
    ClassDeclaration: [
      'decorators',
      'id',
      'typeParameters',
      'superClass',
      'superTypeParameters',
      'mixins',
      'implements',
      'body',
      'superTypeArguments',
    ],
    ExportAllDeclaration: ['source', 'attributes', 'exported'],
    ExportDefaultDeclaration: ['declaration'],
    ExportNamedDeclaration: ['declaration', 'specifiers', 'source', 'attributes'],
    ExportSpecifier: ['local', 'exported'],
    ForOfStatement: ['left', 'right', 'body'],
    ImportDeclaration: ['specifiers', 'source', 'attributes'],
    ImportDefaultSpecifier: ['local'],
    ImportNamespaceSpecifier: ['local'],
    ImportSpecifier: ['imported', 'local'],
    ImportExpression: ['source', 'options'],
    MetaProperty: ['meta', 'property'],
    ClassMethod: ['decorators', 'key', 'typeParameters', 'params', 'returnType', 'body'],
    ObjectPattern: ['properties', 'typeAnnotation', 'decorators'],
    SpreadElement: ['argument'],
    Super: [],
    TaggedTemplateExpression: ['tag', 'typeParameters', 'quasi', 'typeArguments'],
    TemplateElement: [],
    TemplateLiteral: ['quasis', 'expressions'],
    YieldExpression: ['argument'],
    AwaitExpression: ['argument'],
    BigIntLiteral: [],
    ExportNamespaceSpecifier: ['exported'],
    OptionalMemberExpression: ['object', 'property'],
    OptionalCallExpression: ['callee', 'arguments', 'typeParameters', 'typeArguments'],
    ClassProperty: ['decorators', 'variance', 'key', 'typeAnnotation', 'value'],
    ClassAccessorProperty: ['decorators', 'key', 'typeAnnotation', 'value'],
    ClassPrivateProperty: ['decorators', 'variance', 'key', 'typeAnnotation', 'value'],
    ClassPrivateMethod: ['decorators', 'key', 'typeParameters', 'params', 'returnType', 'body'],
    PrivateName: ['id'],
    StaticBlock: ['body'],
    AnyTypeAnnotation: [],
    ArrayTypeAnnotation: ['elementType'],
    BooleanTypeAnnotation: [],
    BooleanLiteralTypeAnnotation: [],
    NullLiteralTypeAnnotation: [],
    ClassImplements: ['id', 'typeParameters'],
    DeclareClass: ['id', 'typeParameters', 'extends', 'mixins', 'implements', 'body'],
    DeclareFunction: ['id', 'predicate'],
    DeclareInterface: ['id', 'typeParameters', 'extends', 'body'],
    DeclareModule: ['id', 'body'],
    DeclareModuleExports: ['typeAnnotation'],
    DeclareTypeAlias: ['id', 'typeParameters', 'right'],
    DeclareOpaqueType: ['id', 'typeParameters', 'supertype'],
    DeclareVariable: ['id'],
    DeclareExportDeclaration: ['declaration', 'specifiers', 'source', 'attributes'],
    DeclareExportAllDeclaration: ['source', 'attributes'],
    DeclaredPredicate: ['value'],
    ExistsTypeAnnotation: [],
    FunctionTypeAnnotation: ['typeParameters', 'this', 'params', 'rest', 'returnType'],
    FunctionTypeParam: ['name', 'typeAnnotation'],
    GenericTypeAnnotation: ['id', 'typeParameters'],
    InferredPredicate: [],
    InterfaceExtends: ['id', 'typeParameters'],
    InterfaceDeclaration: ['id', 'typeParameters', 'extends', 'body'],
    InterfaceTypeAnnotation: ['extends', 'body'],
    IntersectionTypeAnnotation: ['types'],
    MixedTypeAnnotation: [],
    EmptyTypeAnnotation: [],
    NullableTypeAnnotation: ['typeAnnotation'],
    NumberLiteralTypeAnnotation: [],
    NumberTypeAnnotation: [],
    ObjectTypeAnnotation: ['properties', 'indexers', 'callProperties', 'internalSlots'],
    ObjectTypeInternalSlot: ['id', 'value'],
    ObjectTypeCallProperty: ['value'],
    ObjectTypeIndexer: ['variance', 'id', 'key', 'value'],
    ObjectTypeProperty: ['key', 'value', 'variance'],
    ObjectTypeSpreadProperty: ['argument'],
    OpaqueType: ['id', 'typeParameters', 'supertype', 'impltype'],
    QualifiedTypeIdentifier: ['qualification', 'id'],
    StringLiteralTypeAnnotation: [],
    StringTypeAnnotation: [],
    SymbolTypeAnnotation: [],
    ThisTypeAnnotation: [],
    TupleTypeAnnotation: ['types', 'elementTypes'],
    TypeofTypeAnnotation: ['argument', 'typeArguments'],
    TypeAlias: ['id', 'typeParameters', 'right'],
    TypeAnnotation: ['typeAnnotation'],
    TypeCastExpression: ['expression', 'typeAnnotation'],
    TypeParameter: ['bound', 'default', 'variance'],
    TypeParameterDeclaration: ['params'],
    TypeParameterInstantiation: ['params'],
    UnionTypeAnnotation: ['types'],
    Variance: [],
    VoidTypeAnnotation: [],
    EnumDeclaration: ['id', 'body'],
    EnumBooleanBody: ['members'],
    EnumNumberBody: ['members'],
    EnumStringBody: ['members'],
    EnumSymbolBody: ['members'],
    EnumBooleanMember: ['id', 'init'],
    EnumNumberMember: ['id', 'init'],
    EnumStringMember: ['id', 'init'],
    EnumDefaultedMember: ['id'],
    IndexedAccessType: ['objectType', 'indexType'],
    OptionalIndexedAccessType: ['objectType', 'indexType'],
    JSXAttribute: ['name', 'value'],
    JSXClosingElement: ['name'],
    JSXElement: ['openingElement', 'children', 'closingElement'],
    JSXEmptyExpression: [],
    JSXExpressionContainer: ['expression'],
    JSXSpreadChild: ['expression'],
    JSXIdentifier: [],
    JSXMemberExpression: ['object', 'property'],
    JSXNamespacedName: ['namespace', 'name'],
    JSXOpeningElement: ['name', 'typeParameters', 'typeArguments', 'attributes'],
    JSXSpreadAttribute: ['argument'],
    JSXText: [],
    JSXFragment: ['openingFragment', 'children', 'closingFragment'],
    JSXOpeningFragment: [],
    JSXClosingFragment: [],
    Noop: [],
    Placeholder: [],
    V8IntrinsicIdentifier: [],
    ArgumentPlaceholder: [],
    BindExpression: ['object', 'callee'],
    ImportAttribute: ['key', 'value'],
    Decorator: ['expression'],
    DoExpression: ['body'],
    ExportDefaultSpecifier: ['exported'],
    RecordExpression: ['properties'],
    TupleExpression: ['elements'],
    ModuleExpression: ['body'],
    TopicReference: [],
    PipelineTopicExpression: ['expression'],
    PipelineBareFunction: ['callee'],
    PipelinePrimaryTopicReference: [],
    TSParameterProperty: ['parameter', 'decorators'],
    TSDeclareFunction: ['id', 'typeParameters', 'params', 'returnType', 'body'],
    TSDeclareMethod: ['decorators', 'key', 'typeParameters', 'params', 'returnType'],
    TSQualifiedName: ['left', 'right'],
    TSCallSignatureDeclaration: [
      'typeParameters',
      'parameters',
      'typeAnnotation',
      'params',
      'returnType',
    ],
    TSConstructSignatureDeclaration: [
      'typeParameters',
      'parameters',
      'typeAnnotation',
      'params',
      'returnType',
    ],
    TSPropertySignature: ['key', 'typeAnnotation'],
    TSMethodSignature: [
      'key',
      'typeParameters',
      'parameters',
      'typeAnnotation',
      'params',
      'returnType',
    ],
    TSIndexSignature: ['parameters', 'typeAnnotation'],
    TSAnyKeyword: [],
    TSBooleanKeyword: [],
    TSBigIntKeyword: [],
    TSIntrinsicKeyword: [],
    TSNeverKeyword: [],
    TSNullKeyword: [],
    TSNumberKeyword: [],
    TSObjectKeyword: [],
    TSStringKeyword: [],
    TSSymbolKeyword: [],
    TSUndefinedKeyword: [],
    TSUnknownKeyword: [],
    TSVoidKeyword: [],
    TSThisType: [],
    TSFunctionType: ['typeParameters', 'parameters', 'typeAnnotation', 'params', 'returnType'],
    TSConstructorType: ['typeParameters', 'parameters', 'typeAnnotation', 'params', 'returnType'],
    TSTypeReference: ['typeName', 'typeParameters', 'typeArguments'],
    TSTypePredicate: ['parameterName', 'typeAnnotation'],
    TSTypeQuery: ['exprName', 'typeParameters', 'typeArguments'],
    TSTypeLiteral: ['members'],
    TSArrayType: ['elementType'],
    TSTupleType: ['elementTypes'],
    TSOptionalType: ['typeAnnotation'],
    TSRestType: ['typeAnnotation'],
    TSNamedTupleMember: ['label', 'elementType'],
    TSUnionType: ['types'],
    TSIntersectionType: ['types'],
    TSConditionalType: ['checkType', 'extendsType', 'trueType', 'falseType'],
    TSInferType: ['typeParameter'],
    TSParenthesizedType: ['typeAnnotation'],
    TSTypeOperator: ['typeAnnotation'],
    TSIndexedAccessType: ['objectType', 'indexType'],
    TSMappedType: ['typeParameter', 'nameType', 'typeAnnotation'],
    TSTemplateLiteralType: ['quasis', 'types'],
    TSLiteralType: ['literal'],
    TSExpressionWithTypeArguments: ['expression', 'typeParameters'],
    TSInterfaceDeclaration: ['id', 'typeParameters', 'extends', 'body'],
    TSInterfaceBody: ['body'],
    TSTypeAliasDeclaration: ['id', 'typeParameters', 'typeAnnotation'],
    TSInstantiationExpression: ['expression', 'typeParameters', 'typeArguments'],
    TSAsExpression: ['expression', 'typeAnnotation'],
    TSSatisfiesExpression: ['expression', 'typeAnnotation'],
    TSTypeAssertion: ['typeAnnotation', 'expression'],
    TSEnumBody: ['members'],
    TSEnumDeclaration: ['id', 'members'],
    TSEnumMember: ['id', 'initializer'],
    TSModuleDeclaration: ['id', 'body'],
    TSModuleBlock: ['body'],
    TSImportType: ['argument', 'options', 'qualifier', 'typeParameters', 'typeArguments'],
    TSImportEqualsDeclaration: ['id', 'moduleReference'],
    TSExternalModuleReference: ['expression'],
    TSNonNullExpression: ['expression'],
    TSExportAssignment: ['expression'],
    TSNamespaceExportDeclaration: ['id'],
    TSTypeAnnotation: ['typeAnnotation'],
    TSTypeParameterInstantiation: ['params'],
    TSTypeParameterDeclaration: ['params'],
    TSTypeParameter: ['constraint', 'default', 'name'],
    ChainExpression: ['expression'],
    ExperimentalRestProperty: ['argument'],
    ExperimentalSpreadProperty: ['argument'],
    Literal: [],
    MethodDefinition: ['decorators', 'key', 'value'],
    PrivateIdentifier: [],
    Property: ['key', 'value'],
    PropertyDefinition: ['decorators', 'key', 'typeAnnotation', 'value', 'variance'],
    AccessorProperty: ['decorators', 'key', 'typeAnnotation', 'value'],
    TSAbstractAccessorProperty: ['decorators', 'key', 'typeAnnotation'],
    TSAbstractKeyword: [],
    TSAbstractMethodDefinition: ['key', 'value'],
    TSAbstractPropertyDefinition: ['decorators', 'key', 'typeAnnotation'],
    TSAsyncKeyword: [],
    TSClassImplements: ['expression', 'typeArguments', 'typeParameters'],
    TSDeclareKeyword: [],
    TSEmptyBodyFunctionExpression: ['id', 'typeParameters', 'params', 'returnType'],
    TSExportKeyword: [],
    TSInterfaceHeritage: ['expression', 'typeArguments', 'typeParameters'],
    TSPrivateKeyword: [],
    TSProtectedKeyword: [],
    TSPublicKeyword: [],
    TSReadonlyKeyword: [],
    TSStaticKeyword: [],
    AsConstExpression: ['expression'],
    AsExpression: ['expression', 'typeAnnotation'],
    BigIntLiteralTypeAnnotation: [],
    BigIntTypeAnnotation: [],
    ComponentDeclaration: ['id', 'params', 'body', 'typeParameters', 'rendersType'],
    ComponentParameter: ['name', 'local'],
    ComponentTypeAnnotation: ['params', 'rest', 'typeParameters', 'rendersType'],
    ComponentTypeParameter: ['name', 'typeAnnotation'],
    ConditionalTypeAnnotation: ['checkType', 'extendsType', 'trueType', 'falseType'],
    DeclareComponent: ['id', 'params', 'rest', 'typeParameters', 'rendersType'],
    DeclareEnum: ['id', 'body'],
    DeclareHook: ['id'],
    DeclareNamespace: ['id', 'body'],
    EnumBigIntBody: ['members'],
    EnumBigIntMember: ['id', 'init'],
    HookDeclaration: ['id', 'params', 'body', 'typeParameters', 'returnType'],
    HookTypeAnnotation: ['params', 'returnType', 'rest', 'typeParameters'],
    InferTypeAnnotation: ['typeParameter'],
    KeyofTypeAnnotation: ['argument'],
    ObjectTypeMappedTypeProperty: ['keyTparam', 'propType', 'sourceType', 'variance'],
    QualifiedTypeofIdentifier: ['qualification', 'id'],
    TupleTypeLabeledElement: ['label', 'elementType', 'variance'],
    TupleTypeSpreadElement: ['label', 'typeAnnotation'],
    TypeOperator: ['typeAnnotation'],
    TypePredicate: ['parameterName', 'typeAnnotation', 'asserts'],
    NGRoot: ['node'],
    NGPipeExpression: ['left', 'right', 'arguments'],
    NGChainedExpression: ['expressions'],
    NGEmptyExpression: [],
    NGMicrosyntax: ['body'],
    NGMicrosyntaxKey: [],
    NGMicrosyntaxExpression: ['expression', 'alias'],
    NGMicrosyntaxKeyedExpression: ['key', 'expression'],
    NGMicrosyntaxLet: ['key', 'value'],
    NGMicrosyntaxAs: ['key', 'alias'],
    JsExpressionRoot: ['node'],
    JsonRoot: ['node'],
    TSJSDocAllType: [],
    TSJSDocUnknownType: [],
    TSJSDocNullableType: ['typeAnnotation'],
    TSJSDocNonNullableType: ['typeAnnotation'],
    NeverTypeAnnotation: [],
    UndefinedTypeAnnotation: [],
    UnknownTypeAnnotation: [],
    SatisfiesExpression: ['expression', 'typeAnnotation'],
  };
  var Fo = Br(uu),
    br = Fo;
  function Co(e) {
    let t = new Set(e);
    return r => t.has(r == null ? void 0 : r.type);
  }
  var R = Co;
  var Ao = R(['Block', 'CommentBlock', 'MultiLine']),
    ee = Ao;
  var To = R([
      'AnyTypeAnnotation',
      'ThisTypeAnnotation',
      'NumberTypeAnnotation',
      'VoidTypeAnnotation',
      'BooleanTypeAnnotation',
      'BigIntTypeAnnotation',
      'SymbolTypeAnnotation',
      'StringTypeAnnotation',
      'NeverTypeAnnotation',
      'UndefinedTypeAnnotation',
      'UnknownTypeAnnotation',
      'EmptyTypeAnnotation',
      'MixedTypeAnnotation',
    ]),
    Pr = To;
  function xo(e, t) {
    let r = t.split('.');
    for (let n = r.length - 1; n >= 0; n--) {
      let s = r[n];
      if (n === 0) return e.type === 'Identifier' && e.name === s;
      if (
        e.type !== 'MemberExpression' ||
        e.optional ||
        e.computed ||
        e.property.type !== 'Identifier' ||
        e.property.name !== s
      )
        return !1;
      e = e.object;
    }
  }
  function ho(e, t) {
    return t.some(r => xo(e, r));
  }
  var iu = ho;
  function go({ type: e }) {
    return e.startsWith('TS') && e.endsWith('Keyword');
  }
  var kr = go;
  function ur(e, t) {
    return t(e) || Vs(e, { getVisitorKeys: br, predicate: t });
  }
  function Jt(e) {
    return (
      e.type === 'AssignmentExpression' ||
      e.type === 'BinaryExpression' ||
      e.type === 'LogicalExpression' ||
      e.type === 'NGPipeExpression' ||
      e.type === 'ConditionalExpression' ||
      L(e) ||
      W(e) ||
      e.type === 'SequenceExpression' ||
      e.type === 'TaggedTemplateExpression' ||
      e.type === 'BindExpression' ||
      (e.type === 'UpdateExpression' && !e.prefix) ||
      Ae(e) ||
      e.type === 'TSNonNullExpression' ||
      e.type === 'ChainExpression'
    );
  }
  function pu(e) {
    return e.expressions
      ? e.expressions[0]
      : (e.left ?? e.test ?? e.callee ?? e.object ?? e.tag ?? e.argument ?? e.expression);
  }
  function Lr(e) {
    if (e.expressions) return ['expressions', 0];
    if (e.left) return ['left'];
    if (e.test) return ['test'];
    if (e.object) return ['object'];
    if (e.callee) return ['callee'];
    if (e.tag) return ['tag'];
    if (e.argument) return ['argument'];
    if (e.expression) return ['expression'];
    throw new Error('Unexpected node has no left side.');
  }
  var At = R([
      'Line',
      'CommentLine',
      'SingleLine',
      'HashbangComment',
      'HTMLOpen',
      'HTMLClose',
      'Hashbang',
      'InterpreterDirective',
    ]),
    cu = R([
      'ExportDefaultDeclaration',
      'DeclareExportDeclaration',
      'ExportNamedDeclaration',
      'ExportAllDeclaration',
      'DeclareExportAllDeclaration',
    ]),
    U = R(['ArrayExpression', 'TupleExpression']),
    se = R(['ObjectExpression', 'RecordExpression']);
  function lu(e) {
    return e.type === 'LogicalExpression' && e.operator === '??';
  }
  function Fe(e) {
    return e.type === 'NumericLiteral' || (e.type === 'Literal' && typeof e.value == 'number');
  }
  function Rn(e) {
    return (
      e.type === 'UnaryExpression' && (e.operator === '+' || e.operator === '-') && Fe(e.argument)
    );
  }
  function te(e) {
    return !!(
      e &&
      (e.type === 'StringLiteral' || (e.type === 'Literal' && typeof e.value == 'string'))
    );
  }
  function Jn(e) {
    return e.type === 'RegExpLiteral' || (e.type === 'Literal' && !!e.regex);
  }
  var wr = R([
      'Literal',
      'BooleanLiteral',
      'BigIntLiteral',
      'DirectiveLiteral',
      'NullLiteral',
      'NumericLiteral',
      'RegExpLiteral',
      'StringLiteral',
    ]),
    So = R(['Identifier', 'ThisExpression', 'Super', 'PrivateName', 'PrivateIdentifier']),
    Re = R(['ObjectTypeAnnotation', 'TSTypeLiteral', 'TSMappedType']),
    Rt = R(['FunctionExpression', 'ArrowFunctionExpression']);
  function Bo(e) {
    return (
      e.type === 'FunctionExpression' ||
      (e.type === 'ArrowFunctionExpression' && e.body.type === 'BlockStatement')
    );
  }
  function _n(e) {
    return (
      L(e) &&
      e.callee.type === 'Identifier' &&
      ['async', 'inject', 'fakeAsync', 'waitForAsync'].includes(e.callee.name)
    );
  }
  var X = R(['JSXElement', 'JSXFragment']);
  function kt(e) {
    return (e.method && e.kind === 'init') || e.kind === 'get' || e.kind === 'set';
  }
  function Or(e) {
    return (
      (e.type === 'ObjectTypeProperty' || e.type === 'ObjectTypeInternalSlot') &&
      !e.static &&
      !e.method &&
      e.kind !== 'get' &&
      e.kind !== 'set' &&
      e.value.type === 'FunctionTypeAnnotation'
    );
  }
  function mu(e) {
    return (
      (e.type === 'TypeAnnotation' || e.type === 'TSTypeAnnotation') &&
      e.typeAnnotation.type === 'FunctionTypeAnnotation' &&
      !e.static &&
      !Pt(e, e.typeAnnotation)
    );
  }
  var De = R(['BinaryExpression', 'LogicalExpression', 'NGPipeExpression']);
  function Tt(e) {
    return W(e) || (e.type === 'BindExpression' && !!e.object);
  }
  var bo = R([
    'TSThisType',
    'NullLiteralTypeAnnotation',
    'BooleanLiteralTypeAnnotation',
    'StringLiteralTypeAnnotation',
    'BigIntLiteralTypeAnnotation',
    'NumberLiteralTypeAnnotation',
    'TSLiteralType',
    'TSTemplateLiteralType',
  ]);
  function qt(e) {
    return (
      kr(e) ||
      Pr(e) ||
      bo(e) ||
      ((e.type === 'GenericTypeAnnotation' || e.type === 'TSTypeReference') &&
        !e.typeParameters &&
        !e.typeArguments)
    );
  }
  function Po(e) {
    return (
      e.type === 'Identifier' &&
      (e.name === 'beforeEach' ||
        e.name === 'beforeAll' ||
        e.name === 'afterEach' ||
        e.name === 'afterAll')
    );
  }
  var ko = [
    'it',
    'it.only',
    'it.skip',
    'describe',
    'describe.only',
    'describe.skip',
    'test',
    'test.only',
    'test.skip',
    'test.step',
    'test.describe',
    'test.describe.only',
    'test.describe.parallel',
    'test.describe.parallel.only',
    'test.describe.serial',
    'test.describe.serial.only',
    'skip',
    'xit',
    'xdescribe',
    'xtest',
    'fit',
    'fdescribe',
    'ftest',
  ];
  function Io(e) {
    return iu(e, ko);
  }
  function It(e, t) {
    if ((e == null ? void 0 : e.type) !== 'CallExpression' || e.optional) return !1;
    let r = pe(e);
    if (r.length === 1) {
      if (_n(e) && It(t)) return Rt(r[0]);
      if (Po(e.callee)) return _n(r[0]);
    } else if (
      (r.length === 2 || r.length === 3) &&
      (r[0].type === 'TemplateLiteral' || te(r[0])) &&
      Io(e.callee)
    )
      return r[2] && !Fe(r[2])
        ? !1
        : (r.length === 2 ? Rt(r[1]) : Bo(r[1]) && z(r[1]).length <= 1) || _n(r[1]);
    return !1;
  }
  var yu = e => t => (
      (t == null ? void 0 : t.type) === 'ChainExpression' && (t = t.expression), e(t)
    ),
    L = yu(R(['CallExpression', 'OptionalCallExpression'])),
    W = yu(R(['MemberExpression', 'OptionalMemberExpression']));
  function qn(e, t = 5) {
    return Du(e, t) <= t;
  }
  function Du(e, t) {
    let r = 0;
    for (let n in e) {
      let s = e[n];
      if (
        (s && typeof s == 'object' && typeof s.type == 'string' && (r++, (r += Du(s, t - r))),
        r > t)
      )
        return r;
    }
    return r;
  }
  var Lo = 0.25;
  function ir(e, t) {
    let { printWidth: r } = t;
    if (T(e)) return !1;
    let n = r * Lo;
    if (
      e.type === 'ThisExpression' ||
      (e.type === 'Identifier' && e.name.length <= n) ||
      (Rn(e) && !T(e.argument))
    )
      return !0;
    let s =
      (e.type === 'Literal' && 'regex' in e && e.regex.pattern) ||
      (e.type === 'RegExpLiteral' && e.pattern);
    return s
      ? s.length <= n
      : te(e)
        ? nt(fe(e), t).length <= n
        : e.type === 'TemplateLiteral'
          ? e.expressions.length === 0 &&
            e.quasis[0].value.raw.length <= n &&
            !e.quasis[0].value.raw.includes(`
`)
          : e.type === 'UnaryExpression'
            ? ir(e.argument, { printWidth: r })
            : e.type === 'CallExpression' &&
                e.arguments.length === 0 &&
                e.callee.type === 'Identifier'
              ? e.callee.name.length <= n - 2
              : wr(e);
  }
  function Le(e, t) {
    return X(t) ? Lt(t) : T(t, h.Leading, r => Z(e, k(r)));
  }
  function au(e) {
    return e.quasis.some(t =>
      t.value.raw.includes(`
`)
    );
  }
  function _r(e, t) {
    return (
      ((e.type === 'TemplateLiteral' && au(e)) ||
        (e.type === 'TaggedTemplateExpression' && au(e.quasi))) &&
      !Z(t, q(e), { backwards: !0 })
    );
  }
  function vr(e) {
    if (!T(e)) return !1;
    let t = M(!1, lt(e, h.Dangling), -1);
    return t && !ee(t);
  }
  function fu(e) {
    if (e.length <= 1) return !1;
    let t = 0;
    for (let r of e)
      if (Rt(r)) {
        if (((t += 1), t > 1)) return !0;
      } else if (L(r)) {
        for (let n of pe(r)) if (Rt(n)) return !0;
      }
    return !1;
  }
  function jr(e) {
    let { node: t, parent: r, key: n } = e;
    return (
      n === 'callee' &&
      L(t) &&
      L(r) &&
      r.arguments.length > 0 &&
      t.arguments.length > r.arguments.length
    );
  }
  var wo = new Set(['!', '-', '+', '~']);
  function Ie(e, t = 2) {
    if (t <= 0) return !1;
    if (e.type === 'ChainExpression' || e.type === 'TSNonNullExpression')
      return Ie(e.expression, t);
    let r = n => Ie(n, t - 1);
    if (Jn(e)) return rt(e.pattern ?? e.regex.pattern) <= 5;
    if (wr(e) || So(e) || e.type === 'ArgumentPlaceholder') return !0;
    if (e.type === 'TemplateLiteral')
      return (
        e.quasis.every(
          n =>
            !n.value.raw.includes(`
`)
        ) && e.expressions.every(r)
      );
    if (se(e))
      return e.properties.every(n => !n.computed && (n.shorthand || (n.value && r(n.value))));
    if (U(e)) return e.elements.every(n => n === null || r(n));
    if (mt(e)) {
      if (e.type === 'ImportExpression' || Ie(e.callee, t)) {
        let n = pe(e);
        return n.length <= t && n.every(r);
      }
      return !1;
    }
    return W(e)
      ? Ie(e.object, t) && Ie(e.property, t)
      : (e.type === 'UnaryExpression' && wo.has(e.operator)) || e.type === 'UpdateExpression'
        ? Ie(e.argument, t)
        : !1;
  }
  function fe(e) {
    var t;
    return ((t = e.extra) == null ? void 0 : t.raw) ?? e.raw;
  }
  function Eu(e) {
    return e;
  }
  function oe(e, t = 'es5') {
    return (
      (e.trailingComma === 'es5' && t === 'es5') ||
      (e.trailingComma === 'all' && (t === 'all' || t === 'es5'))
    );
  }
  function ae(e, t) {
    switch (e.type) {
      case 'BinaryExpression':
      case 'LogicalExpression':
      case 'AssignmentExpression':
      case 'NGPipeExpression':
        return ae(e.left, t);
      case 'MemberExpression':
      case 'OptionalMemberExpression':
        return ae(e.object, t);
      case 'TaggedTemplateExpression':
        return e.tag.type === 'FunctionExpression' ? !1 : ae(e.tag, t);
      case 'CallExpression':
      case 'OptionalCallExpression':
        return e.callee.type === 'FunctionExpression' ? !1 : ae(e.callee, t);
      case 'ConditionalExpression':
        return ae(e.test, t);
      case 'UpdateExpression':
        return !e.prefix && ae(e.argument, t);
      case 'BindExpression':
        return e.object && ae(e.object, t);
      case 'SequenceExpression':
        return ae(e.expressions[0], t);
      case 'ChainExpression':
      case 'TSSatisfiesExpression':
      case 'TSAsExpression':
      case 'TSNonNullExpression':
      case 'AsExpression':
      case 'AsConstExpression':
      case 'SatisfiesExpression':
        return ae(e.expression, t);
      default:
        return t(e);
    }
  }
  var ou = { '==': !0, '!=': !0, '===': !0, '!==': !0 },
    Ir = { '*': !0, '/': !0, '%': !0 },
    Mn = { '>>': !0, '>>>': !0, '<<': !0 };
  function ar(e, t) {
    return !(
      sr(t) !== sr(e) ||
      e === '**' ||
      (ou[e] && ou[t]) ||
      (t === '%' && Ir[e]) ||
      (e === '%' && Ir[t]) ||
      (t !== e && Ir[t] && Ir[e]) ||
      (Mn[e] && Mn[t])
    );
  }
  var Oo = new Map(
    [
      ['|>'],
      ['??'],
      ['||'],
      ['&&'],
      ['|'],
      ['^'],
      ['&'],
      ['==', '===', '!=', '!=='],
      ['<', '>', '<=', '>=', 'in', 'instanceof'],
      ['>>', '<<', '>>>'],
      ['+', '-'],
      ['*', '/', '%'],
      ['**'],
    ].flatMap((e, t) => e.map(r => [r, t]))
  );
  function sr(e) {
    return Oo.get(e);
  }
  function Fu(e) {
    return !!Mn[e] || e === '|' || e === '^' || e === '&';
  }
  function Cu(e) {
    var r;
    if (e.rest) return !0;
    let t = z(e);
    return ((r = M(!1, t, -1)) == null ? void 0 : r.type) === 'RestElement';
  }
  var vn = new WeakMap();
  function z(e) {
    if (vn.has(e)) return vn.get(e);
    let t = [];
    return (
      e.this && t.push(e.this),
      Array.isArray(e.parameters)
        ? t.push(...e.parameters)
        : Array.isArray(e.params) && t.push(...e.params),
      e.rest && t.push(e.rest),
      vn.set(e, t),
      t
    );
  }
  function Au(e, t) {
    let { node: r } = e,
      n = 0,
      s = u => t(u, n++);
    r.this && e.call(s, 'this'),
      Array.isArray(r.parameters)
        ? e.each(s, 'parameters')
        : Array.isArray(r.params) && e.each(s, 'params'),
      r.rest && e.call(s, 'rest');
  }
  var jn = new WeakMap();
  function pe(e) {
    if (jn.has(e)) return jn.get(e);
    if (e.type === 'ChainExpression') return pe(e.expression);
    let t = e.arguments;
    return (
      e.type === 'ImportExpression' && ((t = [e.source]), e.options && t.push(e.options)),
      jn.set(e, t),
      t
    );
  }
  function Wt(e, t) {
    let { node: r } = e;
    if (r.type === 'ChainExpression') return e.call(() => Wt(e, t), 'expression');
    r.type === 'ImportExpression'
      ? (e.call(n => t(n, 0), 'source'), r.options && e.call(n => t(n, 1), 'options'))
      : e.each(t, 'arguments');
  }
  function Wn(e, t) {
    let r = [];
    if (
      (e.type === 'ChainExpression' && ((e = e.expression), r.push('expression')),
      e.type === 'ImportExpression')
    ) {
      if (t === 0 || t === (e.options ? -2 : -1)) return [...r, 'source'];
      if (e.options && (t === 1 || t === -1)) return [...r, 'options'];
      throw new RangeError('Invalid argument index');
    }
    if ((t < 0 && (t = e.arguments.length + t), t < 0 || t >= e.arguments.length))
      throw new RangeError('Invalid argument index');
    return [...r, 'arguments', t];
  }
  function or(e) {
    return e.value.trim() === 'prettier-ignore' && !e.unignore;
  }
  function Lt(e) {
    return (e == null ? void 0 : e.prettierIgnore) || T(e, h.PrettierIgnore);
  }
  var h = {
      Leading: 2,
      Trailing: 4,
      Dangling: 8,
      Block: 16,
      Line: 32,
      PrettierIgnore: 64,
      First: 128,
      Last: 256,
    },
    Tu = (e, t) => {
      if ((typeof e == 'function' && ((t = e), (e = 0)), e || t))
        return (r, n, s) =>
          !(
            (e & h.Leading && !r.leading) ||
            (e & h.Trailing && !r.trailing) ||
            (e & h.Dangling && (r.leading || r.trailing)) ||
            (e & h.Block && !ee(r)) ||
            (e & h.Line && !At(r)) ||
            (e & h.First && n !== 0) ||
            (e & h.Last && n !== s.length - 1) ||
            (e & h.PrettierIgnore && !or(r)) ||
            (t && !t(r))
          );
    };
  function T(e, t, r) {
    if (!O(e == null ? void 0 : e.comments)) return !1;
    let n = Tu(t, r);
    return n ? e.comments.some(n) : !0;
  }
  function lt(e, t, r) {
    if (!Array.isArray(e == null ? void 0 : e.comments)) return [];
    let n = Tu(t, r);
    return n ? e.comments.filter(n) : e.comments;
  }
  var ce = (e, { originalText: t }) => jt(t, k(e));
  function mt(e) {
    return L(e) || e.type === 'NewExpression' || e.type === 'ImportExpression';
  }
  function Ce(e) {
    return e && (e.type === 'ObjectProperty' || (e.type === 'Property' && !kt(e)));
  }
  var Ae = R([
      'TSAsExpression',
      'TSSatisfiesExpression',
      'AsExpression',
      'AsConstExpression',
      'SatisfiesExpression',
    ]),
    we = R(['TSUnionType', 'UnionTypeAnnotation']),
    Nt = R(['TSIntersectionType', 'IntersectionTypeAnnotation']),
    Je = R(['TSConditionalType', 'ConditionalTypeAnnotation']);
  var _o = new Set([
      'range',
      'raw',
      'comments',
      'leadingComments',
      'trailingComments',
      'innerComments',
      'extra',
      'start',
      'end',
      'loc',
      'flags',
      'errors',
      'tokens',
    ]),
    Gt = e => {
      for (let t of e.quasis) delete t.value;
    };
  function du(e, t, r) {
    var s, u;
    if (
      (e.type === 'Program' && delete t.sourceType,
      (e.type === 'BigIntLiteral' || e.type === 'BigIntLiteralTypeAnnotation') &&
        e.value &&
        (t.value = e.value.toLowerCase()),
      (e.type === 'BigIntLiteral' || e.type === 'Literal') &&
        e.bigint &&
        (t.bigint = e.bigint.toLowerCase()),
      e.type === 'EmptyStatement' ||
        e.type === 'JSXText' ||
        (e.type === 'JSXExpressionContainer' &&
          (e.expression.type === 'Literal' || e.expression.type === 'StringLiteral') &&
          e.expression.value === ' '))
    )
      return null;
    if (
      (e.type === 'Property' ||
        e.type === 'ObjectProperty' ||
        e.type === 'MethodDefinition' ||
        e.type === 'ClassProperty' ||
        e.type === 'ClassMethod' ||
        e.type === 'PropertyDefinition' ||
        e.type === 'TSDeclareMethod' ||
        e.type === 'TSPropertySignature' ||
        e.type === 'ObjectTypeProperty' ||
        e.type === 'ImportAttribute') &&
      e.key &&
      !e.computed
    ) {
      let { key: i } = e;
      te(i) || Fe(i) ? (t.key = String(i.value)) : i.type === 'Identifier' && (t.key = i.name);
    }
    if (
      e.type === 'JSXElement' &&
      e.openingElement.name.name === 'style' &&
      e.openingElement.attributes.some(i => i.type === 'JSXAttribute' && i.name.name === 'jsx')
    )
      for (let { type: i, expression: a } of t.children)
        i === 'JSXExpressionContainer' && a.type === 'TemplateLiteral' && Gt(a);
    e.type === 'JSXAttribute' &&
      e.name.name === 'css' &&
      e.value.type === 'JSXExpressionContainer' &&
      e.value.expression.type === 'TemplateLiteral' &&
      Gt(t.value.expression),
      e.type === 'JSXAttribute' &&
        ((s = e.value) == null ? void 0 : s.type) === 'Literal' &&
        /["']|&quot;|&apos;/u.test(e.value.value) &&
        (t.value.value = Y(!1, e.value.value, /["']|&quot;|&apos;/gu, '"'));
    let n = e.expression || e.callee;
    if (
      e.type === 'Decorator' &&
      n.type === 'CallExpression' &&
      n.callee.name === 'Component' &&
      n.arguments.length === 1
    ) {
      let i = e.expression.arguments[0].properties;
      for (let [a, o] of t.expression.arguments[0].properties.entries())
        switch (i[a].key.name) {
          case 'styles':
            U(o.value) && Gt(o.value.elements[0]);
            break;
          case 'template':
            o.value.type === 'TemplateLiteral' && Gt(o.value);
            break;
        }
    }
    e.type === 'TaggedTemplateExpression' &&
      (e.tag.type === 'MemberExpression' ||
        (e.tag.type === 'Identifier' &&
          (e.tag.name === 'gql' ||
            e.tag.name === 'graphql' ||
            e.tag.name === 'css' ||
            e.tag.name === 'md' ||
            e.tag.name === 'markdown' ||
            e.tag.name === 'html')) ||
        e.tag.type === 'CallExpression') &&
      Gt(t.quasi),
      e.type === 'TemplateLiteral' &&
        (((u = e.leadingComments) != null &&
          u.some(a => ee(a) && ['GraphQL', 'HTML'].some(o => a.value === ` ${o} `))) ||
          (r.type === 'CallExpression' && r.callee.name === 'graphql') ||
          !e.leadingComments) &&
        Gt(t),
      e.type === 'ChainExpression' &&
        e.expression.type === 'TSNonNullExpression' &&
        ((t.type = 'TSNonNullExpression'), (t.expression.type = 'ChainExpression')),
      e.type === 'TSMappedType' && (delete t.key, delete t.constraint),
      e.type === 'TSEnumDeclaration' && delete t.body;
  }
  du.ignoredProperties = _o;
  var xu = du;
  var qe = 'string',
    he = 'array',
    st = 'cursor',
    Ve = 'indent',
    $e = 'align',
    Ke = 'trim',
    me = 'group',
    Oe = 'fill',
    Te = 'if-break',
    Qe = 'indent-if-break',
    ze = 'line-suffix',
    We = 'line-suffix-boundary',
    ie = 'line',
    ge = 'label',
    _e = 'break-parent',
    Mr = new Set([st, Ve, $e, Ke, me, Oe, Te, Qe, ze, We, ie, ge, _e]);
  function vo(e) {
    if (typeof e == 'string') return qe;
    if (Array.isArray(e)) return he;
    if (!e) return;
    let { type: t } = e;
    if (Mr.has(t)) return t;
  }
  var Se = vo;
  var jo = e => new Intl.ListFormat('en-US', { type: 'disjunction' }).format(e);
  function Mo(e) {
    let t = e === null ? 'null' : typeof e;
    if (t !== 'string' && t !== 'object')
      return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
    if (Se(e)) throw new Error('doc is valid.');
    let r = Object.prototype.toString.call(e);
    if (r !== '[object Object]') return `Unexpected doc '${r}'.`;
    let n = jo([...Mr].map(s => `'${s}'`));
    return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
  }
  var Nn = class extends Error {
      name = 'InvalidDocError';
      constructor(t) {
        super(Mo(t)), (this.doc = t);
      }
    },
    dt = Nn;
  var hu = {};
  function Ro(e, t, r, n) {
    let s = [e];
    for (; s.length > 0; ) {
      let u = s.pop();
      if (u === hu) {
        r(s.pop());
        continue;
      }
      r && s.push(u, hu);
      let i = Se(u);
      if (!i) throw new dt(u);
      if ((t == null ? void 0 : t(u)) !== !1)
        switch (i) {
          case he:
          case Oe: {
            let a = i === he ? u : u.parts;
            for (let o = a.length, p = o - 1; p >= 0; --p) s.push(a[p]);
            break;
          }
          case Te:
            s.push(u.flatContents, u.breakContents);
            break;
          case me:
            if (n && u.expandedStates)
              for (let a = u.expandedStates.length, o = a - 1; o >= 0; --o)
                s.push(u.expandedStates[o]);
            else s.push(u.contents);
            break;
          case $e:
          case Ve:
          case Qe:
          case ge:
          case ze:
            s.push(u.contents);
            break;
          case qe:
          case st:
          case Ke:
          case We:
          case ie:
          case _e:
            break;
          default:
            throw new dt(u);
        }
    }
  }
  var pr = Ro;
  function yt(e, t) {
    if (typeof e == 'string') return t(e);
    let r = new Map();
    return n(e);
    function n(u) {
      if (r.has(u)) return r.get(u);
      let i = s(u);
      return r.set(u, i), i;
    }
    function s(u) {
      switch (Se(u)) {
        case he:
          return t(u.map(n));
        case Oe:
          return t({ ...u, parts: u.parts.map(n) });
        case Te:
          return t({ ...u, breakContents: n(u.breakContents), flatContents: n(u.flatContents) });
        case me: {
          let { expandedStates: i, contents: a } = u;
          return (
            i ? ((i = i.map(n)), (a = i[0])) : (a = n(a)),
            t({ ...u, contents: a, expandedStates: i })
          );
        }
        case $e:
        case Ve:
        case Qe:
        case ge:
        case ze:
          return t({ ...u, contents: n(u.contents) });
        case qe:
        case st:
        case Ke:
        case We:
        case ie:
        case _e:
          return t(u);
        default:
          throw new dt(u);
      }
    }
  }
  function Su(e, t, r) {
    let n = r,
      s = !1;
    function u(i) {
      if (s) return !1;
      let a = t(i);
      a !== void 0 && ((s = !0), (n = a));
    }
    return pr(e, u), n;
  }
  function Jo(e) {
    if ((e.type === me && e.break) || (e.type === ie && e.hard) || e.type === _e) return !0;
  }
  function re(e) {
    return Su(e, Jo, !1);
  }
  function gu(e) {
    if (e.length > 0) {
      let t = M(!1, e, -1);
      !t.expandedStates && !t.break && (t.break = 'propagated');
    }
    return null;
  }
  function Bu(e) {
    let t = new Set(),
      r = [];
    function n(u) {
      if ((u.type === _e && gu(r), u.type === me)) {
        if ((r.push(u), t.has(u))) return !1;
        t.add(u);
      }
    }
    function s(u) {
      u.type === me && r.pop().break && gu(r);
    }
    pr(e, n, s, !0);
  }
  function qo(e) {
    return e.type === ie && !e.hard ? (e.soft ? '' : ' ') : e.type === Te ? e.flatContents : e;
  }
  function cr(e) {
    return yt(e, qo);
  }
  function Wo(e) {
    switch (Se(e)) {
      case Oe:
        if (e.parts.every(t => t === '')) return '';
        break;
      case me:
        if (!e.contents && !e.id && !e.break && !e.expandedStates) return '';
        if (
          e.contents.type === me &&
          e.contents.id === e.id &&
          e.contents.break === e.break &&
          e.contents.expandedStates === e.expandedStates
        )
          return e.contents;
        break;
      case $e:
      case Ve:
      case Qe:
      case ze:
        if (!e.contents) return '';
        break;
      case Te:
        if (!e.flatContents && !e.breakContents) return '';
        break;
      case he: {
        let t = [];
        for (let r of e) {
          if (!r) continue;
          let [n, ...s] = Array.isArray(r) ? r : [r];
          typeof n == 'string' && typeof M(!1, t, -1) == 'string'
            ? (t[t.length - 1] += n)
            : t.push(n),
            t.push(...s);
        }
        return t.length === 0 ? '' : t.length === 1 ? t[0] : t;
      }
      case qe:
      case st:
      case Ke:
      case We:
      case ie:
      case ge:
      case _e:
        break;
      default:
        throw new dt(e);
    }
    return e;
  }
  function Ut(e) {
    return yt(e, t => Wo(t));
  }
  function ve(e, t = Rr) {
    return yt(e, r =>
      typeof r == 'string'
        ? b(
            t,
            r.split(`
`)
          )
        : r
    );
  }
  function No(e) {
    if (e.type === ie) return !0;
  }
  function bu(e) {
    return Su(e, No, !1);
  }
  function lr(e, t) {
    return e.type === ge ? { ...e, contents: t(e.contents) } : t(e);
  }
  function Pu(e) {
    let t = !0;
    return (
      pr(e, r => {
        switch (Se(r)) {
          case qe:
            if (r === '') break;
          case Ke:
          case We:
          case ie:
          case _e:
            return (t = !1), !1;
        }
      }),
      t
    );
  }
  var Gn = () => {},
    Ze = Gn,
    Un = Gn,
    ku = Gn;
  function f(e) {
    return Ze(e), { type: Ve, contents: e };
  }
  function Be(e, t) {
    return Ze(t), { type: $e, contents: t, n: e };
  }
  function l(e, t = {}) {
    return (
      Ze(e),
      Un(t.expandedStates, !0),
      { type: me, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates }
    );
  }
  function Iu(e) {
    return Be(Number.NEGATIVE_INFINITY, e);
  }
  function Jr(e) {
    return Be(-1, e);
  }
  function et(e, t) {
    return l(e[0], { ...t, expandedStates: e });
  }
  function qr(e) {
    return ku(e), { type: Oe, parts: e };
  }
  function B(e, t = '', r = {}) {
    return (
      Ze(e), t !== '' && Ze(t), { type: Te, breakContents: e, flatContents: t, groupId: r.groupId }
    );
  }
  function xt(e, t) {
    return Ze(e), { type: Qe, contents: e, groupId: t.groupId, negate: t.negate };
  }
  function Yn(e) {
    return Ze(e), { type: ze, contents: e };
  }
  var je = { type: We },
    Ee = { type: _e };
  var Xn = { type: ie, hard: !0 },
    Go = { type: ie, hard: !0, literal: !0 },
    x = { type: ie },
    E = { type: ie, soft: !0 },
    F = [Xn, Ee],
    Rr = [Go, Ee],
    mr = { type: st };
  function b(e, t) {
    Ze(e), Un(t);
    let r = [];
    for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
    return r;
  }
  function Lu(e, t, r) {
    Ze(e);
    let n = e;
    if (t > 0) {
      for (let s = 0; s < Math.floor(t / r); ++s) n = f(n);
      (n = Be(t % r, n)), (n = Be(Number.NEGATIVE_INFINITY, n));
    }
    return n;
  }
  function ut(e, t) {
    return Ze(t), e ? { type: ge, label: e, contents: t } : t;
  }
  function Uo(e) {
    let t = `*${e.value}*`.split(`
`);
    return t.length > 1 && t.every(r => r.trimStart()[0] === '*');
  }
  var wu = Uo;
  function Ou(e, t) {
    let r = e.node;
    if (At(r)) return t.originalText.slice(q(r), k(r)).trimEnd();
    if (ee(r)) return wu(r) ? Yo(r) : ['/*', ve(r.value), '*/'];
    throw new Error('Not a comment: ' + JSON.stringify(r));
  }
  function Yo(e) {
    let t = e.value.split(`
`);
    return [
      '/*',
      b(
        F,
        t.map((r, n) =>
          n === 0 ? r.trimEnd() : ' ' + (n < t.length - 1 ? r.trim() : r.trimStart())
        )
      ),
      '*/',
    ];
  }
  var Zn = {};
  xr(Zn, { endOfLine: () => zo, ownLine: () => Qo, remaining: () => Zo });
  function Xo(e) {
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
  function Hn(e, t) {
    (e.comments ?? (e.comments = [])).push(t), (t.printed = !1), (t.nodeDescription = Xo(e));
  }
  function le(e, t) {
    (t.leading = !0), (t.trailing = !1), Hn(e, t);
  }
  function Me(e, t, r) {
    (t.leading = !1), (t.trailing = !1), r && (t.marker = r), Hn(e, t);
  }
  function V(e, t) {
    (t.leading = !1), (t.trailing = !0), Hn(e, t);
  }
  function Ho(e, t) {
    let r = null,
      n = t;
    for (; n !== r; ) (r = n), (n = Xe(e, n)), (n = _t(e, n)), (n = vt(e, n)), (n = He(e, n));
    return n;
  }
  var it = Ho;
  function Vo(e, t) {
    let r = it(e, t);
    return r === !1 ? '' : e.charAt(r);
  }
  var be = Vo;
  function $o(e, t, r) {
    for (let n = t; n < r; ++n)
      if (
        e.charAt(n) ===
        `
`
      )
        return !0;
    return !1;
  }
  var de = $o;
  function Ko(e) {
    return ee(e) && e.value[0] === '*' && /@(?:type|satisfies)\b/u.test(e.value);
  }
  var Wr = Ko;
  function Qo(e) {
    return [Wu, vu, Ru, cp, tp, $n, Kn, _u, ju, Dp, mp, zn, qu, fp, Mu, Ju, Qn, rp, hp].some(t =>
      t(e)
    );
  }
  function zo(e) {
    return [ep, Ru, vu, qu, $n, Kn, _u, ju, Ju, lp, yp, zn, Cp, Qn, dp, xp, gp].some(t => t(e));
  }
  function Zo(e) {
    return [Wu, $n, Kn, np, pp, Mu, zn, op, ap, Tp, Qn, Ap].some(t => t(e));
  }
  function wt(e, t) {
    let r = (e.body || e.properties).find(({ type: n }) => n !== 'EmptyStatement');
    r ? le(r, t) : Me(e, t);
  }
  function Vn(e, t) {
    e.type === 'BlockStatement' ? wt(e, t) : le(e, t);
  }
  function ep({ comment: e, followingNode: t }) {
    return t && Wr(e) ? (le(t, e), !0) : !1;
  }
  function $n({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
    if ((r == null ? void 0 : r.type) !== 'IfStatement' || !n) return !1;
    if (be(s, k(e)) === ')') return V(t, e), !0;
    if (t === r.consequent && n === r.alternate) {
      let i = it(s, k(r.consequent));
      if (q(e) < i || r.alternate.type === 'BlockStatement') {
        if (t.type === 'BlockStatement') V(t, e);
        else {
          let a = At(e) || e.loc.start.line === e.loc.end.line,
            o = e.loc.start.line === t.loc.start.line;
          a && o ? V(t, e) : Me(r, e);
        }
        return !0;
      }
    }
    return n.type === 'BlockStatement'
      ? (wt(n, e), !0)
      : n.type === 'IfStatement'
        ? (Vn(n.consequent, e), !0)
        : r.consequent === n
          ? (le(n, e), !0)
          : !1;
  }
  function Kn({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
    return (r == null ? void 0 : r.type) !== 'WhileStatement' || !n
      ? !1
      : be(s, k(e)) === ')'
        ? (V(t, e), !0)
        : n.type === 'BlockStatement'
          ? (wt(n, e), !0)
          : r.body === n
            ? (le(n, e), !0)
            : !1;
  }
  function _u({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
    return ((r == null ? void 0 : r.type) !== 'TryStatement' &&
      (r == null ? void 0 : r.type) !== 'CatchClause') ||
      !n
      ? !1
      : r.type === 'CatchClause' && t
        ? (V(t, e), !0)
        : n.type === 'BlockStatement'
          ? (wt(n, e), !0)
          : n.type === 'TryStatement'
            ? (Vn(n.finalizer, e), !0)
            : n.type === 'CatchClause'
              ? (Vn(n.body, e), !0)
              : !1;
  }
  function tp({ comment: e, enclosingNode: t, followingNode: r }) {
    return W(t) && (r == null ? void 0 : r.type) === 'Identifier' ? (le(t, e), !0) : !1;
  }
  function rp({ comment: e, enclosingNode: t, followingNode: r, options: n }) {
    return !n.experimentalTernaries ||
      !((t == null ? void 0 : t.type) === 'ConditionalExpression' || Je(t))
      ? !1
      : (r == null ? void 0 : r.type) === 'ConditionalExpression' || Je(r)
        ? (Me(t, e), !0)
        : !1;
  }
  function vu({
    comment: e,
    precedingNode: t,
    enclosingNode: r,
    followingNode: n,
    text: s,
    options: u,
  }) {
    let i = t && !de(s, k(t), q(e));
    return (!t || !i) && ((r == null ? void 0 : r.type) === 'ConditionalExpression' || Je(r)) && n
      ? u.experimentalTernaries && r.alternate === n && !(ee(e) && !de(u.originalText, q(e), k(e)))
        ? (Me(r, e), !0)
        : (le(n, e), !0)
      : !1;
  }
  function np({ comment: e, precedingNode: t, enclosingNode: r }) {
    return Ce(r) && r.shorthand && r.key === t && r.value.type === 'AssignmentPattern'
      ? (V(r.value.left, e), !0)
      : !1;
  }
  var sp = new Set([
    'ClassDeclaration',
    'ClassExpression',
    'DeclareClass',
    'DeclareInterface',
    'InterfaceDeclaration',
    'TSInterfaceDeclaration',
  ]);
  function ju({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
    if (sp.has(r == null ? void 0 : r.type)) {
      if (O(r.decorators) && (n == null ? void 0 : n.type) !== 'Decorator')
        return V(M(!1, r.decorators, -1), e), !0;
      if (r.body && n === r.body) return wt(r.body, e), !0;
      if (n) {
        if (r.superClass && n === r.superClass && t && (t === r.id || t === r.typeParameters))
          return V(t, e), !0;
        for (let s of ['implements', 'extends', 'mixins'])
          if (r[s] && n === r[s][0])
            return (
              t && (t === r.id || t === r.typeParameters || t === r.superClass)
                ? V(t, e)
                : Me(r, e, s),
              !0
            );
      }
    }
    return !1;
  }
  var up = new Set([
    'ClassMethod',
    'ClassProperty',
    'PropertyDefinition',
    'TSAbstractPropertyDefinition',
    'TSAbstractMethodDefinition',
    'TSDeclareMethod',
    'MethodDefinition',
    'ClassAccessorProperty',
    'AccessorProperty',
    'TSAbstractAccessorProperty',
    'TSParameterProperty',
  ]);
  function Mu({ comment: e, precedingNode: t, enclosingNode: r, text: n }) {
    return r &&
      t &&
      be(n, k(e)) === '(' &&
      (r.type === 'Property' ||
        r.type === 'TSDeclareMethod' ||
        r.type === 'TSAbstractMethodDefinition') &&
      t.type === 'Identifier' &&
      r.key === t &&
      be(n, k(t)) !== ':'
      ? (V(t, e), !0)
      : (t == null ? void 0 : t.type) === 'Decorator' &&
          up.has(r == null ? void 0 : r.type) &&
          (At(e) || e.placement === 'ownLine')
        ? (V(t, e), !0)
        : !1;
  }
  var ip = new Set([
    'FunctionDeclaration',
    'FunctionExpression',
    'ClassMethod',
    'MethodDefinition',
    'ObjectMethod',
  ]);
  function ap({ comment: e, precedingNode: t, enclosingNode: r, text: n }) {
    return be(n, k(e)) !== '(' ? !1 : t && ip.has(r == null ? void 0 : r.type) ? (V(t, e), !0) : !1;
  }
  function op({ comment: e, enclosingNode: t, text: r }) {
    if ((t == null ? void 0 : t.type) !== 'ArrowFunctionExpression') return !1;
    let n = it(r, k(e));
    return n !== !1 && r.slice(n, n + 2) === '=>' ? (Me(t, e), !0) : !1;
  }
  function pp({ comment: e, enclosingNode: t, text: r }) {
    return be(r, k(e)) !== ')'
      ? !1
      : t && ((Nu(t) && z(t).length === 0) || (mt(t) && pe(t).length === 0))
        ? (Me(t, e), !0)
        : ((t == null ? void 0 : t.type) === 'MethodDefinition' ||
              (t == null ? void 0 : t.type) === 'TSAbstractMethodDefinition') &&
            z(t.value).length === 0
          ? (Me(t.value, e), !0)
          : !1;
  }
  function cp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
    return (t == null ? void 0 : t.type) === 'ComponentTypeParameter' &&
      ((r == null ? void 0 : r.type) === 'DeclareComponent' ||
        (r == null ? void 0 : r.type) === 'ComponentTypeAnnotation') &&
      (n == null ? void 0 : n.type) !== 'ComponentTypeParameter'
      ? (V(t, e), !0)
      : ((t == null ? void 0 : t.type) === 'ComponentParameter' ||
            (t == null ? void 0 : t.type) === 'RestElement') &&
          (r == null ? void 0 : r.type) === 'ComponentDeclaration' &&
          be(s, k(e)) === ')'
        ? (V(t, e), !0)
        : !1;
  }
  function Ru({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
    return (t == null ? void 0 : t.type) === 'FunctionTypeParam' &&
      (r == null ? void 0 : r.type) === 'FunctionTypeAnnotation' &&
      (n == null ? void 0 : n.type) !== 'FunctionTypeParam'
      ? (V(t, e), !0)
      : ((t == null ? void 0 : t.type) === 'Identifier' ||
            (t == null ? void 0 : t.type) === 'AssignmentPattern' ||
            (t == null ? void 0 : t.type) === 'ObjectPattern' ||
            (t == null ? void 0 : t.type) === 'ArrayPattern' ||
            (t == null ? void 0 : t.type) === 'RestElement' ||
            (t == null ? void 0 : t.type) === 'TSParameterProperty') &&
          Nu(r) &&
          be(s, k(e)) === ')'
        ? (V(t, e), !0)
        : !ee(e) &&
            ((r == null ? void 0 : r.type) === 'FunctionDeclaration' ||
              (r == null ? void 0 : r.type) === 'FunctionExpression' ||
              (r == null ? void 0 : r.type) === 'ObjectMethod') &&
            (n == null ? void 0 : n.type) === 'BlockStatement' &&
            r.body === n &&
            it(s, k(e)) === q(n)
          ? (wt(n, e), !0)
          : !1;
  }
  function Ju({ comment: e, enclosingNode: t }) {
    return (t == null ? void 0 : t.type) === 'LabeledStatement' ? (le(t, e), !0) : !1;
  }
  function Qn({ comment: e, enclosingNode: t }) {
    return ((t == null ? void 0 : t.type) === 'ContinueStatement' ||
      (t == null ? void 0 : t.type) === 'BreakStatement') &&
      !t.label
      ? (V(t, e), !0)
      : !1;
  }
  function lp({ comment: e, precedingNode: t, enclosingNode: r }) {
    return L(r) && t && r.callee === t && r.arguments.length > 0 ? (le(r.arguments[0], e), !0) : !1;
  }
  function mp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
    return we(r)
      ? (or(e) && ((n.prettierIgnore = !0), (e.unignore = !0)), t ? (V(t, e), !0) : !1)
      : (we(n) && or(e) && ((n.types[0].prettierIgnore = !0), (e.unignore = !0)), !1);
  }
  function yp({ comment: e, enclosingNode: t }) {
    return Ce(t) ? (le(t, e), !0) : !1;
  }
  function zn({ comment: e, enclosingNode: t, ast: r, isLastComment: n }) {
    var s;
    return ((s = r == null ? void 0 : r.body) == null ? void 0 : s.length) === 0
      ? (n ? Me(r, e) : le(r, e), !0)
      : (t == null ? void 0 : t.type) === 'Program' && t.body.length === 0 && !O(t.directives)
        ? (n ? Me(t, e) : le(t, e), !0)
        : !1;
  }
  function Dp({ comment: e, enclosingNode: t }) {
    return (t == null ? void 0 : t.type) === 'ForInStatement' ||
      (t == null ? void 0 : t.type) === 'ForOfStatement'
      ? (le(t, e), !0)
      : !1;
  }
  function qu({ comment: e, precedingNode: t, enclosingNode: r, text: n }) {
    if (
      (r == null ? void 0 : r.type) === 'ImportSpecifier' ||
      (r == null ? void 0 : r.type) === 'ExportSpecifier'
    )
      return le(r, e), !0;
    let s =
        (t == null ? void 0 : t.type) === 'ImportSpecifier' &&
        (r == null ? void 0 : r.type) === 'ImportDeclaration',
      u =
        (t == null ? void 0 : t.type) === 'ExportSpecifier' &&
        (r == null ? void 0 : r.type) === 'ExportNamedDeclaration';
    return (s || u) && Z(n, k(e)) ? (V(t, e), !0) : !1;
  }
  function fp({ comment: e, enclosingNode: t }) {
    return (t == null ? void 0 : t.type) === 'AssignmentPattern' ? (le(t, e), !0) : !1;
  }
  var Ep = new Set([
      'VariableDeclarator',
      'AssignmentExpression',
      'TypeAlias',
      'TSTypeAliasDeclaration',
    ]),
    Fp = new Set([
      'ObjectExpression',
      'RecordExpression',
      'ArrayExpression',
      'TupleExpression',
      'TemplateLiteral',
      'TaggedTemplateExpression',
      'ObjectTypeAnnotation',
      'TSTypeLiteral',
    ]);
  function Cp({ comment: e, enclosingNode: t, followingNode: r }) {
    return Ep.has(t == null ? void 0 : t.type) && r && (Fp.has(r.type) || ee(e))
      ? (le(r, e), !0)
      : !1;
  }
  function Ap({ comment: e, enclosingNode: t, followingNode: r, text: n }) {
    return !r &&
      ((t == null ? void 0 : t.type) === 'TSMethodSignature' ||
        (t == null ? void 0 : t.type) === 'TSDeclareFunction' ||
        (t == null ? void 0 : t.type) === 'TSAbstractMethodDefinition') &&
      be(n, k(e)) === ';'
      ? (V(t, e), !0)
      : !1;
  }
  function Wu({ comment: e, enclosingNode: t, followingNode: r }) {
    if (
      or(e) &&
      (t == null ? void 0 : t.type) === 'TSMappedType' &&
      (r == null ? void 0 : r.type) === 'TSTypeParameter' &&
      r.constraint
    )
      return (t.prettierIgnore = !0), (e.unignore = !0), !0;
  }
  function Tp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
    return (r == null ? void 0 : r.type) !== 'TSMappedType'
      ? !1
      : (n == null ? void 0 : n.type) === 'TSTypeParameter' && n.name
        ? (le(n.name, e), !0)
        : (t == null ? void 0 : t.type) === 'TSTypeParameter' && t.constraint
          ? (V(t.constraint, e), !0)
          : !1;
  }
  function dp({ comment: e, enclosingNode: t, followingNode: r }) {
    return !t || t.type !== 'SwitchCase' || t.test || !r || r !== t.consequent[0]
      ? !1
      : (r.type === 'BlockStatement' && At(e) ? wt(r, e) : Me(t, e), !0);
  }
  function xp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
    return we(t) &&
      (((r.type === 'TSArrayType' || r.type === 'ArrayTypeAnnotation') && !n) || Nt(r))
      ? (V(M(!1, t.types, -1), e), !0)
      : !1;
  }
  function hp({ comment: e, enclosingNode: t, precedingNode: r, followingNode: n }) {
    if (
      ((t == null ? void 0 : t.type) === 'ObjectPattern' ||
        (t == null ? void 0 : t.type) === 'ArrayPattern') &&
      (n == null ? void 0 : n.type) === 'TSTypeAnnotation'
    )
      return r ? V(r, e) : Me(t, e), !0;
  }
  function gp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
    var s;
    if (
      !n &&
      (r == null ? void 0 : r.type) === 'UnaryExpression' &&
      ((t == null ? void 0 : t.type) === 'LogicalExpression' ||
        (t == null ? void 0 : t.type) === 'BinaryExpression')
    ) {
      let u = ((s = r.argument.loc) == null ? void 0 : s.start.line) !== t.right.loc.start.line,
        i = At(e) || e.loc.start.line === e.loc.end.line,
        a = e.loc.start.line === t.right.loc.start.line;
      if (u && i && a) return V(t.right, e), !0;
    }
    return !1;
  }
  var Nu = R([
    'ArrowFunctionExpression',
    'FunctionExpression',
    'FunctionDeclaration',
    'ObjectMethod',
    'ClassMethod',
    'TSDeclareFunction',
    'TSCallSignatureDeclaration',
    'TSConstructSignatureDeclaration',
    'TSMethodSignature',
    'TSConstructorType',
    'TSFunctionType',
    'TSDeclareMethod',
  ]);
  var Sp = new Set([
    'EmptyStatement',
    'TemplateElement',
    'TSEmptyBodyFunctionExpression',
    'ChainExpression',
  ]);
  function Bp(e) {
    return !Sp.has(e.type);
  }
  function bp(e, t) {
    var r;
    if (
      (t.parser === 'typescript' ||
        t.parser === 'flow' ||
        t.parser === 'acorn' ||
        t.parser === 'espree' ||
        t.parser === 'meriyah' ||
        t.parser === '__babel_estree') &&
      e.type === 'MethodDefinition' &&
      ((r = e.value) == null ? void 0 : r.type) === 'FunctionExpression' &&
      z(e.value).length === 0 &&
      !e.value.returnType &&
      !O(e.value.typeParameters) &&
      e.value.body
    )
      return [...(e.decorators || []), e.key, e.value.body];
  }
  function es(e) {
    let { node: t, parent: r } = e;
    return (
      (X(t) ||
        (r &&
          (r.type === 'JSXSpreadAttribute' ||
            r.type === 'JSXSpreadChild' ||
            we(r) ||
            ((r.type === 'ClassDeclaration' || r.type === 'ClassExpression') &&
              r.superClass === t)))) &&
      (!Lt(t) || we(r))
    );
  }
  function Pp(e, { parser: t }) {
    if (t === 'flow' || t === 'babel-flow')
      return (e = Y(!1, e, /[\s(]/gu, '')), e === '' || e === '/*' || e === '/*::';
  }
  function Gu(e) {
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
  var Pe = Symbol('MODE_BREAK'),
    at = Symbol('MODE_FLAT'),
    Yt = Symbol('cursor'),
    ts = Symbol('DOC_FILL_PRINTED_LENGTH');
  function Uu() {
    return { value: '', length: 0, queue: [] };
  }
  function kp(e, t) {
    return rs(e, { type: 'indent' }, t);
  }
  function Ip(e, t, r) {
    return t === Number.NEGATIVE_INFINITY
      ? e.root || Uu()
      : t < 0
        ? rs(e, { type: 'dedent' }, r)
        : t
          ? t.type === 'root'
            ? { ...e, root: e }
            : rs(e, { type: typeof t == 'string' ? 'stringAlign' : 'numberAlign', n: t }, r)
          : e;
  }
  function rs(e, t, r) {
    let n = t.type === 'dedent' ? e.queue.slice(0, -1) : [...e.queue, t],
      s = '',
      u = 0,
      i = 0,
      a = 0;
    for (let c of n)
      switch (c.type) {
        case 'indent':
          y(), r.useTabs ? o(1) : p(r.tabWidth);
          break;
        case 'stringAlign':
          y(), (s += c.n), (u += c.n.length);
          break;
        case 'numberAlign':
          (i += 1), (a += c.n);
          break;
        default:
          throw new Error(`Unexpected type '${c.type}'`);
      }
    return m(), { ...e, value: s, length: u, queue: n };
    function o(c) {
      (s += '	'.repeat(c)), (u += r.tabWidth * c);
    }
    function p(c) {
      (s += ' '.repeat(c)), (u += c);
    }
    function y() {
      r.useTabs ? D() : m();
    }
    function D() {
      i > 0 && o(i), C();
    }
    function m() {
      a > 0 && p(a), C();
    }
    function C() {
      (i = 0), (a = 0);
    }
  }
  function ns(e) {
    let t = 0,
      r = 0,
      n = e.length;
    e: for (; n--; ) {
      let s = e[n];
      if (s === Yt) {
        r++;
        continue;
      }
      for (let u = s.length - 1; u >= 0; u--) {
        let i = s[u];
        if (i === ' ' || i === '	') t++;
        else {
          e[n] = s.slice(0, u + 1);
          break e;
        }
      }
    }
    if (t > 0 || r > 0) for (e.length = n + 1; r-- > 0; ) e.push(Yt);
    return t;
  }
  function Nr(e, t, r, n, s, u) {
    if (r === Number.POSITIVE_INFINITY) return !0;
    let i = t.length,
      a = [e],
      o = [];
    for (; r >= 0; ) {
      if (a.length === 0) {
        if (i === 0) return !0;
        a.push(t[--i]);
        continue;
      }
      let { mode: p, doc: y } = a.pop(),
        D = Se(y);
      switch (D) {
        case qe:
          o.push(y), (r -= rt(y));
          break;
        case he:
        case Oe: {
          let m = D === he ? y : y.parts,
            C = y[ts] ?? 0;
          for (let c = m.length - 1; c >= C; c--) a.push({ mode: p, doc: m[c] });
          break;
        }
        case Ve:
        case $e:
        case Qe:
        case ge:
          a.push({ mode: p, doc: y.contents });
          break;
        case Ke:
          r += ns(o);
          break;
        case me: {
          if (u && y.break) return !1;
          let m = y.break ? Pe : p,
            C = y.expandedStates && m === Pe ? M(!1, y.expandedStates, -1) : y.contents;
          a.push({ mode: m, doc: C });
          break;
        }
        case Te: {
          let C = (y.groupId ? s[y.groupId] || at : p) === Pe ? y.breakContents : y.flatContents;
          C && a.push({ mode: p, doc: C });
          break;
        }
        case ie:
          if (p === Pe || y.hard) return !0;
          y.soft || (o.push(' '), r--);
          break;
        case ze:
          n = !0;
          break;
        case We:
          if (n) return !1;
          break;
      }
    }
    return !1;
  }
  function ss(e, t) {
    let r = {},
      n = t.printWidth,
      s = Gu(t.endOfLine),
      u = 0,
      i = [{ ind: Uu(), mode: Pe, doc: e }],
      a = [],
      o = !1,
      p = [],
      y = 0;
    for (Bu(e); i.length > 0; ) {
      let { ind: m, mode: C, doc: c } = i.pop();
      switch (Se(c)) {
        case qe: {
          let A =
            s !==
            `
`
              ? Y(
                  !1,
                  c,
                  `
`,
                  s
                )
              : c;
          a.push(A), i.length > 0 && (u += rt(A));
          break;
        }
        case he:
          for (let A = c.length - 1; A >= 0; A--) i.push({ ind: m, mode: C, doc: c[A] });
          break;
        case st:
          if (y >= 2) throw new Error("There are too many 'cursor' in doc.");
          a.push(Yt), y++;
          break;
        case Ve:
          i.push({ ind: kp(m, t), mode: C, doc: c.contents });
          break;
        case $e:
          i.push({ ind: Ip(m, c.n, t), mode: C, doc: c.contents });
          break;
        case Ke:
          u -= ns(a);
          break;
        case me:
          switch (C) {
            case at:
              if (!o) {
                i.push({ ind: m, mode: c.break ? Pe : at, doc: c.contents });
                break;
              }
            case Pe: {
              o = !1;
              let A = { ind: m, mode: at, doc: c.contents },
                d = n - u,
                S = p.length > 0;
              if (!c.break && Nr(A, i, d, S, r)) i.push(A);
              else if (c.expandedStates) {
                let g = M(!1, c.expandedStates, -1);
                if (c.break) {
                  i.push({ ind: m, mode: Pe, doc: g });
                  break;
                } else
                  for (let _ = 1; _ < c.expandedStates.length + 1; _++)
                    if (_ >= c.expandedStates.length) {
                      i.push({ ind: m, mode: Pe, doc: g });
                      break;
                    } else {
                      let v = c.expandedStates[_],
                        j = { ind: m, mode: at, doc: v };
                      if (Nr(j, i, d, S, r)) {
                        i.push(j);
                        break;
                      }
                    }
              } else i.push({ ind: m, mode: Pe, doc: c.contents });
              break;
            }
          }
          c.id && (r[c.id] = M(!1, i, -1).mode);
          break;
        case Oe: {
          let A = n - u,
            d = c[ts] ?? 0,
            { parts: S } = c,
            g = S.length - d;
          if (g === 0) break;
          let _ = S[d + 0],
            v = S[d + 1],
            j = { ind: m, mode: at, doc: _ },
            I = { ind: m, mode: Pe, doc: _ },
            G = Nr(j, [], A, p.length > 0, r, !0);
          if (g === 1) {
            G ? i.push(j) : i.push(I);
            break;
          }
          let P = { ind: m, mode: at, doc: v },
            N = { ind: m, mode: Pe, doc: v };
          if (g === 2) {
            G ? i.push(P, j) : i.push(N, I);
            break;
          }
          let ue = S[d + 2],
            Q = { ind: m, mode: C, doc: { ...c, [ts]: d + 2 } };
          Nr({ ind: m, mode: at, doc: [_, v, ue] }, [], A, p.length > 0, r, !0)
            ? i.push(Q, P, j)
            : G
              ? i.push(Q, N, j)
              : i.push(Q, N, I);
          break;
        }
        case Te:
        case Qe: {
          let A = c.groupId ? r[c.groupId] : C;
          if (A === Pe) {
            let d = c.type === Te ? c.breakContents : c.negate ? c.contents : f(c.contents);
            d && i.push({ ind: m, mode: C, doc: d });
          }
          if (A === at) {
            let d = c.type === Te ? c.flatContents : c.negate ? f(c.contents) : c.contents;
            d && i.push({ ind: m, mode: C, doc: d });
          }
          break;
        }
        case ze:
          p.push({ ind: m, mode: C, doc: c.contents });
          break;
        case We:
          p.length > 0 && i.push({ ind: m, mode: C, doc: Xn });
          break;
        case ie:
          switch (C) {
            case at:
              if (c.hard) o = !0;
              else {
                c.soft || (a.push(' '), (u += 1));
                break;
              }
            case Pe:
              if (p.length > 0) {
                i.push({ ind: m, mode: C, doc: c }, ...p.reverse()), (p.length = 0);
                break;
              }
              c.literal
                ? m.root
                  ? (a.push(s, m.root.value), (u = m.root.length))
                  : (a.push(s), (u = 0))
                : ((u -= ns(a)), a.push(s + m.value), (u = m.length));
              break;
          }
          break;
        case ge:
          i.push({ ind: m, mode: C, doc: c.contents });
          break;
        case _e:
          break;
        default:
          throw new dt(c);
      }
      i.length === 0 && p.length > 0 && (i.push(...p.reverse()), (p.length = 0));
    }
    let D = a.indexOf(Yt);
    if (D !== -1) {
      let m = a.indexOf(Yt, D + 1);
      if (m === -1) return { formatted: a.filter(d => d !== Yt).join('') };
      let C = a.slice(0, D).join(''),
        c = a.slice(D + 1, m).join(''),
        A = a.slice(m + 1).join('');
      return { formatted: C + c + A, cursorNodeStart: C.length, cursorNodeText: c };
    }
    return { formatted: a.join('') };
  }
  function Lp(e, t, r = 0) {
    let n = 0;
    for (let s = r; s < e.length; ++s) e[s] === '	' ? (n = n + t - (n % t)) : n++;
    return n;
  }
  var Yu = Lp;
  function wp(e, t) {
    let r = e.lastIndexOf(`
`);
    return r === -1 ? 0 : Yu(e.slice(r + 1).match(/^[\t ]*/u)[0], t);
  }
  var Xu = wp;
  function Gr(e, t, r) {
    let { node: n } = e;
    if (n.type === 'TemplateLiteral' && vp(e)) {
      let p = Op(e, r, t);
      if (p) return p;
    }
    let u = 'expressions';
    n.type === 'TSTemplateLiteralType' && (u = 'types');
    let i = [],
      a = e.map(t, u);
    i.push(je, '`');
    let o = 0;
    return (
      e.each(({ index: p, node: y }) => {
        if ((i.push(t()), y.tail)) return;
        let { tabWidth: D } = r,
          m = y.value.raw,
          C = m.includes(`
`)
            ? Xu(m, D)
            : o;
        o = C;
        let c = a[p],
          A = n[u][p],
          d = de(r.originalText, k(y), q(n.quasis[p + 1]));
        if (!d) {
          let g = ss(c, { ...r, printWidth: Number.POSITIVE_INFINITY }).formatted;
          g.includes(`
`)
            ? (d = !0)
            : (c = g);
        }
        d &&
          (T(A) ||
            A.type === 'Identifier' ||
            W(A) ||
            A.type === 'ConditionalExpression' ||
            A.type === 'SequenceExpression' ||
            Ae(A) ||
            De(A)) &&
          (c = [f([E, c]), E]);
        let S =
          C === 0 &&
          m.endsWith(`
`)
            ? Be(Number.NEGATIVE_INFINITY, c)
            : Lu(c, C, D);
        i.push(l(['${', S, je, '}']));
      }, 'quasis'),
      i.push('`'),
      i
    );
  }
  function Hu(e, t) {
    let r = t('quasi');
    return ut(r.label && { tagged: !0, ...r.label }, [
      t('tag'),
      t(e.node.typeArguments ? 'typeArguments' : 'typeParameters'),
      je,
      r,
    ]);
  }
  function Op(e, t, r) {
    let { node: n } = e,
      s = n.quasis[0].value.raw.trim().split(/\s*\|\s*/u);
    if (s.length > 1 || s.some(u => u.length > 0)) {
      t.__inJestEach = !0;
      let u = e.map(r, 'expressions');
      t.__inJestEach = !1;
      let i = [],
        a = u.map(
          m =>
            '${' +
            ss(m, { ...t, printWidth: Number.POSITIVE_INFINITY, endOfLine: 'lf' }).formatted +
            '}'
        ),
        o = [{ hasLineBreak: !1, cells: [] }];
      for (let m = 1; m < n.quasis.length; m++) {
        let C = M(!1, o, -1),
          c = a[m - 1];
        C.cells.push(c),
          c.includes(`
`) && (C.hasLineBreak = !0),
          n.quasis[m].value.raw.includes(`
`) && o.push({ hasLineBreak: !1, cells: [] });
      }
      let p = Math.max(s.length, ...o.map(m => m.cells.length)),
        y = Array.from({ length: p }).fill(0),
        D = [{ cells: s }, ...o.filter(m => m.cells.length > 0)];
      for (let { cells: m } of D.filter(C => !C.hasLineBreak))
        for (let [C, c] of m.entries()) y[C] = Math.max(y[C], rt(c));
      return (
        i.push(
          je,
          '`',
          f([
            F,
            b(
              F,
              D.map(m =>
                b(
                  ' | ',
                  m.cells.map((C, c) => (m.hasLineBreak ? C : C + ' '.repeat(y[c] - rt(C))))
                )
              )
            ),
          ]),
          F,
          '`'
        ),
        i
      );
    }
  }
  function _p(e, t) {
    let { node: r } = e,
      n = t();
    return T(r) && (n = l([f([E, n]), E])), ['${', n, je, '}'];
  }
  function Xt(e, t) {
    return e.map(r => _p(r, t), 'expressions');
  }
  function Ur(e, t) {
    return yt(e, r => (typeof r == 'string' ? (t ? Y(!1, r, /(\\*)`/gu, '$1$1\\`') : us(r)) : r));
  }
  function us(e) {
    return Y(!1, e, /([\\`]|\$\{)/gu, String.raw`\$1`);
  }
  function vp({ node: e, parent: t }) {
    let r = /^[fx]?(?:describe|it|test)$/u;
    return (
      t.type === 'TaggedTemplateExpression' &&
      t.quasi === e &&
      t.tag.type === 'MemberExpression' &&
      t.tag.property.type === 'Identifier' &&
      t.tag.property.name === 'each' &&
      ((t.tag.object.type === 'Identifier' && r.test(t.tag.object.name)) ||
        (t.tag.object.type === 'MemberExpression' &&
          t.tag.object.property.type === 'Identifier' &&
          (t.tag.object.property.name === 'only' || t.tag.object.property.name === 'skip') &&
          t.tag.object.object.type === 'Identifier' &&
          r.test(t.tag.object.object.name)))
    );
  }
  var as = [
    (e, t) => e.type === 'ObjectExpression' && t === 'properties',
    (e, t) =>
      e.type === 'CallExpression' &&
      e.callee.type === 'Identifier' &&
      e.callee.name === 'Component' &&
      t === 'arguments',
    (e, t) => e.type === 'Decorator' && t === 'expression',
  ];
  function Vu(e) {
    let t = n => n.type === 'TemplateLiteral',
      r = (n, s) =>
        Ce(n) &&
        !n.computed &&
        n.key.type === 'Identifier' &&
        n.key.name === 'styles' &&
        s === 'value';
    return e.match(t, (n, s) => U(n) && s === 'elements', r, ...as) || e.match(t, r, ...as);
  }
  function $u(e) {
    return e.match(
      t => t.type === 'TemplateLiteral',
      (t, r) =>
        Ce(t) &&
        !t.computed &&
        t.key.type === 'Identifier' &&
        t.key.name === 'template' &&
        r === 'value',
      ...as
    );
  }
  function is(e, t) {
    return T(e, h.Block | h.Leading, ({ value: r }) => r === ` ${t} `);
  }
  function Yr({ node: e, parent: t }, r) {
    return is(e, r) || (jp(t) && is(t, r)) || (t.type === 'ExpressionStatement' && is(t, r));
  }
  function jp(e) {
    return (
      e.type === 'AsConstExpression' ||
      (e.type === 'TSAsExpression' &&
        e.typeAnnotation.type === 'TSTypeReference' &&
        e.typeAnnotation.typeName.type === 'Identifier' &&
        e.typeAnnotation.typeName.name === 'const')
    );
  }
  async function Mp(e, t, r) {
    let { node: n } = r,
      s = n.quasis.map(y => y.value.raw),
      u = 0,
      i = s.reduce((y, D, m) => (m === 0 ? D : y + '@prettier-placeholder-' + u++ + '-id' + D), ''),
      a = await e(i, { parser: 'scss' }),
      o = Xt(r, t),
      p = Rp(a, o);
    if (!p) throw new Error("Couldn't insert all the expressions");
    return ['`', f([F, p]), E, '`'];
  }
  function Rp(e, t) {
    if (!O(t)) return e;
    let r = 0,
      n = yt(Ut(e), s =>
        typeof s != 'string' || !s.includes('@prettier-placeholder')
          ? s
          : s
              .split(/@prettier-placeholder-(\d+)-id/u)
              .map((u, i) => (i % 2 === 0 ? ve(u) : (r++, t[u])))
      );
    return t.length === r ? n : null;
  }
  function Jp({ node: e, parent: t, grandparent: r }) {
    return (
      (r &&
        e.quasis &&
        t.type === 'JSXExpressionContainer' &&
        r.type === 'JSXElement' &&
        r.openingElement.name.name === 'style' &&
        r.openingElement.attributes.some(
          n => n.type === 'JSXAttribute' && n.name.name === 'jsx'
        )) ||
      ((t == null ? void 0 : t.type) === 'TaggedTemplateExpression' &&
        t.tag.type === 'Identifier' &&
        t.tag.name === 'css') ||
      ((t == null ? void 0 : t.type) === 'TaggedTemplateExpression' &&
        t.tag.type === 'MemberExpression' &&
        t.tag.object.name === 'css' &&
        (t.tag.property.name === 'global' || t.tag.property.name === 'resolve'))
    );
  }
  function Xr(e) {
    return e.type === 'Identifier' && e.name === 'styled';
  }
  function Ku(e) {
    return /^[A-Z]/u.test(e.object.name) && e.property.name === 'extend';
  }
  function qp({ parent: e }) {
    if (!e || e.type !== 'TaggedTemplateExpression') return !1;
    let t = e.tag.type === 'ParenthesizedExpression' ? e.tag.expression : e.tag;
    switch (t.type) {
      case 'MemberExpression':
        return Xr(t.object) || Ku(t);
      case 'CallExpression':
        return (
          Xr(t.callee) ||
          (t.callee.type === 'MemberExpression' &&
            ((t.callee.object.type === 'MemberExpression' &&
              (Xr(t.callee.object.object) || Ku(t.callee.object))) ||
              (t.callee.object.type === 'CallExpression' && Xr(t.callee.object.callee))))
        );
      case 'Identifier':
        return t.name === 'css';
      default:
        return !1;
    }
  }
  function Wp({ parent: e, grandparent: t }) {
    return (
      (t == null ? void 0 : t.type) === 'JSXAttribute' &&
      e.type === 'JSXExpressionContainer' &&
      t.name.type === 'JSXIdentifier' &&
      t.name.name === 'css'
    );
  }
  function Np(e) {
    if (Jp(e) || qp(e) || Wp(e) || Vu(e)) return Mp;
  }
  var Qu = Np;
  async function Gp(e, t, r) {
    let { node: n } = r,
      s = n.quasis.length,
      u = Xt(r, t),
      i = [];
    for (let a = 0; a < s; a++) {
      let o = n.quasis[a],
        p = a === 0,
        y = a === s - 1,
        D = o.value.cooked,
        m = D.split(`
`),
        C = m.length,
        c = u[a],
        A = C > 2 && m[0].trim() === '' && m[1].trim() === '',
        d = C > 2 && m[C - 1].trim() === '' && m[C - 2].trim() === '',
        S = m.every(_ => /^\s*(?:#[^\n\r]*)?$/u.test(_));
      if (!y && /#[^\n\r]*$/u.test(m[C - 1])) return null;
      let g = null;
      S ? (g = Up(m)) : (g = await e(D, { parser: 'graphql' })),
        g
          ? ((g = Ur(g, !1)), !p && A && i.push(''), i.push(g), !y && d && i.push(''))
          : !p && !y && A && i.push(''),
        c && i.push(c);
    }
    return ['`', f([F, b(F, i)]), F, '`'];
  }
  function Up(e) {
    let t = [],
      r = !1,
      n = e.map(s => s.trim());
    for (let [s, u] of n.entries())
      u !== '' && (n[s - 1] === '' && r ? t.push([F, u]) : t.push(u), (r = !0));
    return t.length === 0 ? null : b(F, t);
  }
  function Yp({ node: e, parent: t }) {
    return (
      Yr({ node: e, parent: t }, 'GraphQL') ||
      (t &&
        ((t.type === 'TaggedTemplateExpression' &&
          ((t.tag.type === 'MemberExpression' &&
            t.tag.object.name === 'graphql' &&
            t.tag.property.name === 'experimental') ||
            (t.tag.type === 'Identifier' && (t.tag.name === 'gql' || t.tag.name === 'graphql')))) ||
          (t.type === 'CallExpression' &&
            t.callee.type === 'Identifier' &&
            t.callee.name === 'graphql')))
    );
  }
  function Xp(e) {
    if (Yp(e)) return Gp;
  }
  var zu = Xp;
  var os = 0;
  async function Zu(e, t, r, n, s) {
    let { node: u } = n,
      i = os;
    os = (os + 1) >>> 0;
    let a = S => `PRETTIER_HTML_PLACEHOLDER_${S}_${i}_IN_JS`,
      o = u.quasis
        .map((S, g, _) => (g === _.length - 1 ? S.value.cooked : S.value.cooked + a(g)))
        .join(''),
      p = Xt(n, r),
      y = new RegExp(a(String.raw`(\d+)`), 'gu'),
      D = 0,
      m = await t(o, {
        parser: e,
        __onHtmlRoot(S) {
          D = S.children.length;
        },
      }),
      C = yt(m, S => {
        if (typeof S != 'string') return S;
        let g = [],
          _ = S.split(y);
        for (let v = 0; v < _.length; v++) {
          let j = _[v];
          if (v % 2 === 0) {
            j &&
              ((j = us(j)),
              s.__embeddedInHtml && (j = Y(!1, j, /<\/(?=script\b)/giu, String.raw`<\/`)),
              g.push(j));
            continue;
          }
          let I = Number(j);
          g.push(p[I]);
        }
        return g;
      }),
      c = /^\s/u.test(o) ? ' ' : '',
      A = /\s$/u.test(o) ? ' ' : '',
      d = s.htmlWhitespaceSensitivity === 'ignore' ? F : c && A ? x : null;
    return d
      ? l(['`', f([d, l(C)]), d, '`'])
      : ut({ hug: !1 }, l(['`', c, D > 1 ? f(l(C)) : l(C), A, '`']));
  }
  function Hp(e) {
    return (
      Yr(e, 'HTML') ||
      e.match(
        t => t.type === 'TemplateLiteral',
        (t, r) =>
          t.type === 'TaggedTemplateExpression' &&
          t.tag.type === 'Identifier' &&
          t.tag.name === 'html' &&
          r === 'quasi'
      )
    );
  }
  var Vp = Zu.bind(void 0, 'html'),
    $p = Zu.bind(void 0, 'angular');
  function Kp(e) {
    if (Hp(e)) return Vp;
    if ($u(e)) return $p;
  }
  var ei = Kp;
  async function Qp(e, t, r) {
    let { node: n } = r,
      s = Y(
        !1,
        n.quasis[0].value.raw,
        /((?:\\\\)*)\\`/gu,
        (o, p) => '\\'.repeat(p.length / 2) + '`'
      ),
      u = zp(s),
      i = u !== '';
    i && (s = Y(!1, s, new RegExp(`^${u}`, 'gmu'), ''));
    let a = Ur(await e(s, { parser: 'markdown', __inJsTemplate: !0 }), !0);
    return ['`', i ? f([E, a]) : [Rr, Iu(a)], E, '`'];
  }
  function zp(e) {
    let t = e.match(/^([^\S\n]*)\S/mu);
    return t === null ? '' : t[1];
  }
  function Zp(e) {
    if (ec(e)) return Qp;
  }
  function ec({ node: e, parent: t }) {
    return (
      (t == null ? void 0 : t.type) === 'TaggedTemplateExpression' &&
      e.quasis.length === 1 &&
      t.tag.type === 'Identifier' &&
      (t.tag.name === 'md' || t.tag.name === 'markdown')
    );
  }
  var ti = Zp;
  function tc(e) {
    let { node: t } = e;
    if (t.type !== 'TemplateLiteral' || rc(t)) return;
    let r;
    for (let n of [Qu, zu, ei, ti])
      if (((r = n(e)), !!r))
        return t.quasis.length === 1 && t.quasis[0].value.raw.trim() === ''
          ? '``'
          : async (...s) => {
              let u = await r(...s);
              return u && ut({ embed: !0, ...u.label }, u);
            };
  }
  function rc({ quasis: e }) {
    return e.some(({ value: { cooked: t } }) => t === null);
  }
  var ri = tc;
  var nc = /\*\/$/,
    sc = /^\/\*\*?/,
    ii = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
    uc = /(^|\s+)\/\/([^\n\r]*)/g,
    ni = /^(\r?\n)+/,
    ic = /(?:^|\r?\n) *(@[^\n\r]*?) *\r?\n *(?![^\n\r@]*\/\/[^]*)([^\s@][^\n\r@]+?) *\r?\n/g,
    si = /(?:^|\r?\n) *@(\S+) *([^\n\r]*)/g,
    ac = /(\r?\n|^) *\* ?/g,
    ai = [];
  function oi(e) {
    let t = e.match(ii);
    return t ? t[0].trimStart() : '';
  }
  function pi(e) {
    let t = e.match(ii),
      r = t == null ? void 0 : t[0];
    return r == null ? e : e.slice(r.length);
  }
  function ci(e) {
    let t = `
`;
    e = Y(!1, e.replace(sc, '').replace(nc, ''), ac, '$1');
    let r = '';
    for (; r !== e; ) (r = e), (e = Y(!1, e, ic, `${t}$1 $2${t}`));
    e = e.replace(ni, '').trimEnd();
    let n = Object.create(null),
      s = Y(!1, e, si, '').replace(ni, '').trimEnd(),
      u;
    for (; (u = si.exec(e)); ) {
      let i = Y(!1, u[2], uc, '');
      if (typeof n[u[1]] == 'string' || Array.isArray(n[u[1]])) {
        let a = n[u[1]];
        n[u[1]] = [...ai, ...(Array.isArray(a) ? a : [a]), i];
      } else n[u[1]] = i;
    }
    return { comments: s, pragmas: n };
  }
  function li({ comments: e = '', pragmas: t = {} }) {
    let r = `
`,
      n = '/**',
      s = ' *',
      u = ' */',
      i = Object.keys(t),
      a = i
        .flatMap(p => ui(p, t[p]))
        .map(p => `${s} ${p}${r}`)
        .join('');
    if (!e) {
      if (i.length === 0) return '';
      if (i.length === 1 && !Array.isArray(t[i[0]])) {
        let p = t[i[0]];
        return `${n} ${ui(i[0], p)[0]}${u}`;
      }
    }
    let o =
      e
        .split(r)
        .map(p => `${s} ${p}`)
        .join(r) + r;
    return n + r + (e ? o : '') + (e && i.length > 0 ? s + r : '') + a + u;
  }
  function ui(e, t) {
    return [...ai, ...(Array.isArray(t) ? t : [t])].map(r => `@${e} ${r}`.trim());
  }
  function oc(e) {
    if (!e.startsWith('#!')) return '';
    let t = e.indexOf(`
`);
    return t === -1 ? e : e.slice(0, t);
  }
  var mi = oc;
  function pc(e) {
    let t = mi(e);
    t && (e = e.slice(t.length + 1));
    let r = oi(e),
      { pragmas: n, comments: s } = ci(r);
    return { shebang: t, text: e, pragmas: n, comments: s };
  }
  function yi(e) {
    let { shebang: t, text: r, pragmas: n, comments: s } = pc(e),
      u = pi(r),
      i = li({ pragmas: { format: '', ...n }, comments: s.trimStart() });
    return (
      (t
        ? `${t}
`
        : '') +
      i +
      (u.startsWith(`
`)
        ? `
`
        : `

`) +
      u
    );
  }
  function cc(e, t) {
    let {
        originalText: r,
        [Symbol.for('comments')]: n,
        locStart: s,
        locEnd: u,
        [Symbol.for('printedComments')]: i,
      } = t,
      { node: a } = e,
      o = s(a),
      p = u(a);
    for (let y of n) s(y) >= o && u(y) <= p && i.add(y);
    return r.slice(o, p);
  }
  var Di = cc;
  function ps(e, t) {
    var u, i, a, o, p, y, D, m, C;
    if (e.isRoot) return !1;
    let { node: r, key: n, parent: s } = e;
    if (t.__isInHtmlInterpolation && !t.bracketSpacing && Dc(r) && yr(e)) return !0;
    if (lc(r)) return !1;
    if (r.type === 'Identifier') {
      if (
        ((u = r.extra) != null &&
          u.parenthesized &&
          /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(r.name)) ||
        (n === 'left' &&
          ((r.name === 'async' && !s.await) || r.name === 'let') &&
          s.type === 'ForOfStatement')
      )
        return !0;
      if (r.name === 'let') {
        let c = (i = e.findAncestor(A => A.type === 'ForOfStatement')) == null ? void 0 : i.left;
        if (c && ae(c, A => A === r)) return !0;
      }
      if (
        n === 'object' &&
        r.name === 'let' &&
        s.type === 'MemberExpression' &&
        s.computed &&
        !s.optional
      ) {
        let c = e.findAncestor(
            d =>
              d.type === 'ExpressionStatement' ||
              d.type === 'ForStatement' ||
              d.type === 'ForInStatement'
          ),
          A = c
            ? c.type === 'ExpressionStatement'
              ? c.expression
              : c.type === 'ForStatement'
                ? c.init
                : c.left
            : void 0;
        if (A && ae(A, d => d === r)) return !0;
      }
      if (n === 'expression')
        switch (r.name) {
          case 'await':
          case 'interface':
          case 'module':
          case 'using':
          case 'yield':
          case 'let':
          case 'component':
          case 'hook':
          case 'type': {
            let c = e.findAncestor(A => !Ae(A));
            if (c !== s && c.type === 'ExpressionStatement') return !0;
          }
        }
      return !1;
    }
    if (
      r.type === 'ObjectExpression' ||
      r.type === 'FunctionExpression' ||
      r.type === 'ClassExpression' ||
      r.type === 'DoExpression'
    ) {
      let c =
        (a = e.findAncestor(A => A.type === 'ExpressionStatement')) == null ? void 0 : a.expression;
      if (c && ae(c, A => A === r)) return !0;
    }
    if (r.type === 'ObjectExpression') {
      let c =
        (o = e.findAncestor(A => A.type === 'ArrowFunctionExpression')) == null ? void 0 : o.body;
      if (
        c &&
        c.type !== 'SequenceExpression' &&
        c.type !== 'AssignmentExpression' &&
        ae(c, A => A === r)
      )
        return !0;
    }
    switch (s.type) {
      case 'ParenthesizedExpression':
        return !1;
      case 'ClassDeclaration':
      case 'ClassExpression':
        if (
          n === 'superClass' &&
          (r.type === 'ArrowFunctionExpression' ||
            r.type === 'AssignmentExpression' ||
            r.type === 'AwaitExpression' ||
            r.type === 'BinaryExpression' ||
            r.type === 'ConditionalExpression' ||
            r.type === 'LogicalExpression' ||
            r.type === 'NewExpression' ||
            r.type === 'ObjectExpression' ||
            r.type === 'SequenceExpression' ||
            r.type === 'TaggedTemplateExpression' ||
            r.type === 'UnaryExpression' ||
            r.type === 'UpdateExpression' ||
            r.type === 'YieldExpression' ||
            r.type === 'TSNonNullExpression' ||
            (r.type === 'ClassExpression' && O(r.decorators)))
        )
          return !0;
        break;
      case 'ExportDefaultDeclaration':
        return fi(e, t) || r.type === 'SequenceExpression';
      case 'Decorator':
        if (n === 'expression' && !Ec(r)) return !0;
        break;
      case 'TypeAnnotation':
        if (
          e.match(
            void 0,
            void 0,
            (c, A) => A === 'returnType' && c.type === 'ArrowFunctionExpression'
          ) &&
          yc(r)
        )
          return !0;
        break;
      case 'BinaryExpression':
        if (
          n === 'left' &&
          (s.operator === 'in' || s.operator === 'instanceof') &&
          r.type === 'UnaryExpression'
        )
          return !0;
        break;
      case 'VariableDeclarator':
        if (
          n === 'init' &&
          e.match(
            void 0,
            void 0,
            (c, A) => A === 'declarations' && c.type === 'VariableDeclaration',
            (c, A) => A === 'left' && c.type === 'ForInStatement'
          )
        )
          return !0;
        break;
    }
    switch (r.type) {
      case 'UpdateExpression':
        if (s.type === 'UnaryExpression')
          return (
            r.prefix &&
            ((r.operator === '++' && s.operator === '+') ||
              (r.operator === '--' && s.operator === '-'))
          );
      case 'UnaryExpression':
        switch (s.type) {
          case 'UnaryExpression':
            return r.operator === s.operator && (r.operator === '+' || r.operator === '-');
          case 'BindExpression':
            return !0;
          case 'MemberExpression':
          case 'OptionalMemberExpression':
            return n === 'object';
          case 'TaggedTemplateExpression':
            return !0;
          case 'NewExpression':
          case 'CallExpression':
          case 'OptionalCallExpression':
            return n === 'callee';
          case 'BinaryExpression':
            return n === 'left' && s.operator === '**';
          case 'TSNonNullExpression':
            return !0;
          default:
            return !1;
        }
      case 'BinaryExpression':
        if (s.type === 'UpdateExpression' || (r.operator === 'in' && mc(e))) return !0;
        if (r.operator === '|>' && (p = r.extra) != null && p.parenthesized) {
          let c = e.grandparent;
          if (c.type === 'BinaryExpression' && c.operator === '|>') return !0;
        }
      case 'TSTypeAssertion':
      case 'TSAsExpression':
      case 'TSSatisfiesExpression':
      case 'AsExpression':
      case 'AsConstExpression':
      case 'SatisfiesExpression':
      case 'LogicalExpression':
        switch (s.type) {
          case 'TSAsExpression':
          case 'TSSatisfiesExpression':
          case 'AsExpression':
          case 'AsConstExpression':
          case 'SatisfiesExpression':
            return !Ae(r);
          case 'ConditionalExpression':
            return Ae(r) || lu(r);
          case 'CallExpression':
          case 'NewExpression':
          case 'OptionalCallExpression':
            return n === 'callee';
          case 'ClassExpression':
          case 'ClassDeclaration':
            return n === 'superClass';
          case 'TSTypeAssertion':
          case 'TaggedTemplateExpression':
          case 'UnaryExpression':
          case 'JSXSpreadAttribute':
          case 'SpreadElement':
          case 'BindExpression':
          case 'AwaitExpression':
          case 'TSNonNullExpression':
          case 'UpdateExpression':
            return !0;
          case 'MemberExpression':
          case 'OptionalMemberExpression':
            return n === 'object';
          case 'AssignmentExpression':
          case 'AssignmentPattern':
            return n === 'left' && (r.type === 'TSTypeAssertion' || Ae(r));
          case 'LogicalExpression':
            if (r.type === 'LogicalExpression') return s.operator !== r.operator;
          case 'BinaryExpression': {
            let { operator: c, type: A } = r;
            if (!c && A !== 'TSTypeAssertion') return !0;
            let d = sr(c),
              S = s.operator,
              g = sr(S);
            return g > d || (n === 'right' && g === d) || (g === d && !ar(S, c))
              ? !0
              : g < d && c === '%'
                ? S === '+' || S === '-'
                : !!Fu(S);
          }
          default:
            return !1;
        }
      case 'SequenceExpression':
        switch (s.type) {
          case 'ReturnStatement':
            return !1;
          case 'ForStatement':
            return !1;
          case 'ExpressionStatement':
            return n !== 'expression';
          case 'ArrowFunctionExpression':
            return n !== 'body';
          default:
            return !0;
        }
      case 'YieldExpression':
        if (s.type === 'AwaitExpression' || s.type === 'TSTypeAssertion') return !0;
      case 'AwaitExpression':
        switch (s.type) {
          case 'TaggedTemplateExpression':
          case 'UnaryExpression':
          case 'LogicalExpression':
          case 'SpreadElement':
          case 'TSAsExpression':
          case 'TSSatisfiesExpression':
          case 'TSNonNullExpression':
          case 'AsExpression':
          case 'AsConstExpression':
          case 'SatisfiesExpression':
          case 'BindExpression':
            return !0;
          case 'MemberExpression':
          case 'OptionalMemberExpression':
            return n === 'object';
          case 'NewExpression':
          case 'CallExpression':
          case 'OptionalCallExpression':
            return n === 'callee';
          case 'ConditionalExpression':
            return n === 'test';
          case 'BinaryExpression':
            return !(!r.argument && s.operator === '|>');
          default:
            return !1;
        }
      case 'TSFunctionType':
        if (
          e.match(
            c => c.type === 'TSFunctionType',
            (c, A) => A === 'typeAnnotation' && c.type === 'TSTypeAnnotation',
            (c, A) => A === 'returnType' && c.type === 'ArrowFunctionExpression'
          )
        )
          return !0;
      case 'TSConditionalType':
      case 'TSConstructorType':
      case 'ConditionalTypeAnnotation':
        if ((n === 'extendsType' && Je(r) && s.type === r.type) || (n === 'checkType' && Je(s)))
          return !0;
        if (n === 'extendsType' && s.type === 'TSConditionalType') {
          let { typeAnnotation: c } = r.returnType || r.typeAnnotation;
          if (
            (c.type === 'TSTypePredicate' &&
              c.typeAnnotation &&
              (c = c.typeAnnotation.typeAnnotation),
            c.type === 'TSInferType' && c.typeParameter.constraint)
          )
            return !0;
        }
      case 'TSUnionType':
      case 'TSIntersectionType':
        if ((we(s) || Nt(s)) && s.types.length > 1 && (!r.types || r.types.length > 1)) return !0;
      case 'TSInferType':
        if (r.type === 'TSInferType') {
          if (s.type === 'TSRestType') return !1;
          if (
            n === 'types' &&
            (s.type === 'TSUnionType' || s.type === 'TSIntersectionType') &&
            r.typeParameter.type === 'TSTypeParameter' &&
            r.typeParameter.constraint
          )
            return !0;
        }
      case 'TSTypeOperator':
        return (
          s.type === 'TSArrayType' ||
          s.type === 'TSOptionalType' ||
          s.type === 'TSRestType' ||
          (n === 'objectType' && s.type === 'TSIndexedAccessType') ||
          s.type === 'TSTypeOperator' ||
          (s.type === 'TSTypeAnnotation' && e.grandparent.type.startsWith('TSJSDoc'))
        );
      case 'TSTypeQuery':
        return (
          (n === 'objectType' && s.type === 'TSIndexedAccessType') ||
          (n === 'elementType' && s.type === 'TSArrayType')
        );
      case 'TypeOperator':
        return (
          s.type === 'ArrayTypeAnnotation' ||
          s.type === 'NullableTypeAnnotation' ||
          (n === 'objectType' &&
            (s.type === 'IndexedAccessType' || s.type === 'OptionalIndexedAccessType')) ||
          s.type === 'TypeOperator'
        );
      case 'TypeofTypeAnnotation':
        return (
          (n === 'objectType' &&
            (s.type === 'IndexedAccessType' || s.type === 'OptionalIndexedAccessType')) ||
          (n === 'elementType' && s.type === 'ArrayTypeAnnotation')
        );
      case 'ArrayTypeAnnotation':
        return s.type === 'NullableTypeAnnotation';
      case 'IntersectionTypeAnnotation':
      case 'UnionTypeAnnotation':
        return (
          s.type === 'TypeOperator' ||
          s.type === 'ArrayTypeAnnotation' ||
          s.type === 'NullableTypeAnnotation' ||
          s.type === 'IntersectionTypeAnnotation' ||
          s.type === 'UnionTypeAnnotation' ||
          (n === 'objectType' &&
            (s.type === 'IndexedAccessType' || s.type === 'OptionalIndexedAccessType'))
        );
      case 'InferTypeAnnotation':
      case 'NullableTypeAnnotation':
        return (
          s.type === 'ArrayTypeAnnotation' ||
          (n === 'objectType' &&
            (s.type === 'IndexedAccessType' || s.type === 'OptionalIndexedAccessType'))
        );
      case 'ComponentTypeAnnotation':
      case 'FunctionTypeAnnotation': {
        if (
          r.type === 'ComponentTypeAnnotation' &&
          (r.rendersType === null || r.rendersType === void 0)
        )
          return !1;
        if (
          e.match(
            void 0,
            (A, d) => d === 'typeAnnotation' && A.type === 'TypeAnnotation',
            (A, d) => d === 'returnType' && A.type === 'ArrowFunctionExpression'
          ) ||
          e.match(
            void 0,
            (A, d) => d === 'typeAnnotation' && A.type === 'TypePredicate',
            (A, d) => d === 'typeAnnotation' && A.type === 'TypeAnnotation',
            (A, d) => d === 'returnType' && A.type === 'ArrowFunctionExpression'
          )
        )
          return !0;
        let c = s.type === 'NullableTypeAnnotation' ? e.grandparent : s;
        return (
          c.type === 'UnionTypeAnnotation' ||
          c.type === 'IntersectionTypeAnnotation' ||
          c.type === 'ArrayTypeAnnotation' ||
          (n === 'objectType' &&
            (c.type === 'IndexedAccessType' || c.type === 'OptionalIndexedAccessType')) ||
          (n === 'checkType' && s.type === 'ConditionalTypeAnnotation') ||
          (n === 'extendsType' &&
            s.type === 'ConditionalTypeAnnotation' &&
            ((y = r.returnType) == null ? void 0 : y.type) === 'InferTypeAnnotation' &&
            ((D = r.returnType) == null ? void 0 : D.typeParameter.bound)) ||
          c.type === 'NullableTypeAnnotation' ||
          (s.type === 'FunctionTypeParam' &&
            s.name === null &&
            z(r).some(A => {
              var d;
              return (
                ((d = A.typeAnnotation) == null ? void 0 : d.type) === 'NullableTypeAnnotation'
              );
            }))
        );
      }
      case 'OptionalIndexedAccessType':
        return n === 'objectType' && s.type === 'IndexedAccessType';
      case 'StringLiteral':
      case 'NumericLiteral':
      case 'Literal':
        if (typeof r.value == 'string' && s.type === 'ExpressionStatement' && !s.directive) {
          let c = e.grandparent;
          return c.type === 'Program' || c.type === 'BlockStatement';
        }
        return n === 'object' && s.type === 'MemberExpression' && typeof r.value == 'number';
      case 'AssignmentExpression': {
        let c = e.grandparent;
        return n === 'body' && s.type === 'ArrowFunctionExpression'
          ? !0
          : (n === 'key' &&
                (s.type === 'ClassProperty' || s.type === 'PropertyDefinition') &&
                s.computed) ||
              ((n === 'init' || n === 'update') && s.type === 'ForStatement')
            ? !1
            : s.type === 'ExpressionStatement'
              ? r.left.type === 'ObjectPattern'
              : !(
                  (n === 'key' && s.type === 'TSPropertySignature') ||
                  s.type === 'AssignmentExpression' ||
                  (s.type === 'SequenceExpression' &&
                    c.type === 'ForStatement' &&
                    (c.init === s || c.update === s)) ||
                  (n === 'value' &&
                    s.type === 'Property' &&
                    c.type === 'ObjectPattern' &&
                    c.properties.includes(s)) ||
                  s.type === 'NGChainedExpression' ||
                  (n === 'node' && s.type === 'JsExpressionRoot')
                );
      }
      case 'ConditionalExpression':
        switch (s.type) {
          case 'TaggedTemplateExpression':
          case 'UnaryExpression':
          case 'SpreadElement':
          case 'BinaryExpression':
          case 'LogicalExpression':
          case 'NGPipeExpression':
          case 'ExportDefaultDeclaration':
          case 'AwaitExpression':
          case 'JSXSpreadAttribute':
          case 'TSTypeAssertion':
          case 'TypeCastExpression':
          case 'TSAsExpression':
          case 'TSSatisfiesExpression':
          case 'AsExpression':
          case 'AsConstExpression':
          case 'SatisfiesExpression':
          case 'TSNonNullExpression':
            return !0;
          case 'NewExpression':
          case 'CallExpression':
          case 'OptionalCallExpression':
            return n === 'callee';
          case 'ConditionalExpression':
            return t.experimentalTernaries ? !1 : n === 'test';
          case 'MemberExpression':
          case 'OptionalMemberExpression':
            return n === 'object';
          default:
            return !1;
        }
      case 'FunctionExpression':
        switch (s.type) {
          case 'NewExpression':
          case 'CallExpression':
          case 'OptionalCallExpression':
            return n === 'callee';
          case 'TaggedTemplateExpression':
            return !0;
          default:
            return !1;
        }
      case 'ArrowFunctionExpression':
        switch (s.type) {
          case 'BinaryExpression':
            return s.operator !== '|>' || ((m = r.extra) == null ? void 0 : m.parenthesized);
          case 'NewExpression':
          case 'CallExpression':
          case 'OptionalCallExpression':
            return n === 'callee';
          case 'MemberExpression':
          case 'OptionalMemberExpression':
            return n === 'object';
          case 'TSAsExpression':
          case 'TSSatisfiesExpression':
          case 'AsExpression':
          case 'AsConstExpression':
          case 'SatisfiesExpression':
          case 'TSNonNullExpression':
          case 'BindExpression':
          case 'TaggedTemplateExpression':
          case 'UnaryExpression':
          case 'LogicalExpression':
          case 'AwaitExpression':
          case 'TSTypeAssertion':
            return !0;
          case 'ConditionalExpression':
            return n === 'test';
          default:
            return !1;
        }
      case 'ClassExpression':
        switch (s.type) {
          case 'NewExpression':
            return n === 'callee';
          default:
            return !1;
        }
      case 'OptionalMemberExpression':
      case 'OptionalCallExpression':
      case 'CallExpression':
      case 'MemberExpression':
        if (fc(e)) return !0;
      case 'TaggedTemplateExpression':
      case 'TSNonNullExpression':
        if (n === 'callee' && (s.type === 'BindExpression' || s.type === 'NewExpression')) {
          let c = r;
          for (; c; )
            switch (c.type) {
              case 'CallExpression':
              case 'OptionalCallExpression':
                return !0;
              case 'MemberExpression':
              case 'OptionalMemberExpression':
              case 'BindExpression':
                c = c.object;
                break;
              case 'TaggedTemplateExpression':
                c = c.tag;
                break;
              case 'TSNonNullExpression':
                c = c.expression;
                break;
              default:
                return !1;
            }
        }
        return !1;
      case 'BindExpression':
        return (
          (n === 'callee' && (s.type === 'BindExpression' || s.type === 'NewExpression')) ||
          (n === 'object' && W(s))
        );
      case 'NGPipeExpression':
        return !(
          s.type === 'NGRoot' ||
          s.type === 'NGMicrosyntaxExpression' ||
          (s.type === 'ObjectProperty' && !((C = r.extra) != null && C.parenthesized)) ||
          U(s) ||
          (n === 'arguments' && L(s)) ||
          (n === 'right' && s.type === 'NGPipeExpression') ||
          (n === 'property' && s.type === 'MemberExpression') ||
          s.type === 'AssignmentExpression'
        );
      case 'JSXFragment':
      case 'JSXElement':
        return (
          n === 'callee' ||
          (n === 'left' && s.type === 'BinaryExpression' && s.operator === '<') ||
          (!U(s) &&
            s.type !== 'ArrowFunctionExpression' &&
            s.type !== 'AssignmentExpression' &&
            s.type !== 'AssignmentPattern' &&
            s.type !== 'BinaryExpression' &&
            s.type !== 'NewExpression' &&
            s.type !== 'ConditionalExpression' &&
            s.type !== 'ExpressionStatement' &&
            s.type !== 'JsExpressionRoot' &&
            s.type !== 'JSXAttribute' &&
            s.type !== 'JSXElement' &&
            s.type !== 'JSXExpressionContainer' &&
            s.type !== 'JSXFragment' &&
            s.type !== 'LogicalExpression' &&
            !L(s) &&
            !Ce(s) &&
            s.type !== 'ReturnStatement' &&
            s.type !== 'ThrowStatement' &&
            s.type !== 'TypeCastExpression' &&
            s.type !== 'VariableDeclarator' &&
            s.type !== 'YieldExpression')
        );
      case 'TSInstantiationExpression':
        return n === 'object' && W(s);
    }
    return !1;
  }
  var lc = R([
    'BlockStatement',
    'BreakStatement',
    'ComponentDeclaration',
    'ClassBody',
    'ClassDeclaration',
    'ClassMethod',
    'ClassProperty',
    'PropertyDefinition',
    'ClassPrivateProperty',
    'ContinueStatement',
    'DebuggerStatement',
    'DeclareComponent',
    'DeclareClass',
    'DeclareExportAllDeclaration',
    'DeclareExportDeclaration',
    'DeclareFunction',
    'DeclareHook',
    'DeclareInterface',
    'DeclareModule',
    'DeclareModuleExports',
    'DeclareNamespace',
    'DeclareVariable',
    'DeclareEnum',
    'DoWhileStatement',
    'EnumDeclaration',
    'ExportAllDeclaration',
    'ExportDefaultDeclaration',
    'ExportNamedDeclaration',
    'ExpressionStatement',
    'ForInStatement',
    'ForOfStatement',
    'ForStatement',
    'FunctionDeclaration',
    'HookDeclaration',
    'IfStatement',
    'ImportDeclaration',
    'InterfaceDeclaration',
    'LabeledStatement',
    'MethodDefinition',
    'ReturnStatement',
    'SwitchStatement',
    'ThrowStatement',
    'TryStatement',
    'TSDeclareFunction',
    'TSEnumDeclaration',
    'TSImportEqualsDeclaration',
    'TSInterfaceDeclaration',
    'TSModuleDeclaration',
    'TSNamespaceExportDeclaration',
    'TypeAlias',
    'VariableDeclaration',
    'WhileStatement',
    'WithStatement',
  ]);
  function mc(e) {
    let t = 0,
      { node: r } = e;
    for (; r; ) {
      let n = e.getParentNode(t++);
      if ((n == null ? void 0 : n.type) === 'ForStatement' && n.init === r) return !0;
      r = n;
    }
    return !1;
  }
  function yc(e) {
    return ur(
      e,
      t => t.type === 'ObjectTypeAnnotation' && ur(t, r => r.type === 'FunctionTypeAnnotation')
    );
  }
  function Dc(e) {
    return se(e);
  }
  function yr(e) {
    let { parent: t, key: r } = e;
    switch (t.type) {
      case 'NGPipeExpression':
        if (r === 'arguments' && e.isLast) return e.callParent(yr);
        break;
      case 'ObjectProperty':
        if (r === 'value') return e.callParent(() => e.key === 'properties' && e.isLast);
        break;
      case 'BinaryExpression':
      case 'LogicalExpression':
        if (r === 'right') return e.callParent(yr);
        break;
      case 'ConditionalExpression':
        if (r === 'alternate') return e.callParent(yr);
        break;
      case 'UnaryExpression':
        if (t.prefix) return e.callParent(yr);
        break;
    }
    return !1;
  }
  function fi(e, t) {
    let { node: r, parent: n } = e;
    return r.type === 'FunctionExpression' || r.type === 'ClassExpression'
      ? n.type === 'ExportDefaultDeclaration' || !ps(e, t)
      : !Jt(r) || (n.type !== 'ExportDefaultDeclaration' && ps(e, t))
        ? !1
        : e.call(() => fi(e, t), ...Lr(r));
  }
  function fc(e) {
    return !!(
      e.match(
        void 0,
        (t, r) => r === 'expression' && t.type === 'ChainExpression',
        (t, r) => r === 'tag' && t.type === 'TaggedTemplateExpression'
      ) ||
      e.match(
        t => t.type === 'OptionalCallExpression' || t.type === 'OptionalMemberExpression',
        (t, r) => r === 'tag' && t.type === 'TaggedTemplateExpression'
      ) ||
      e.match(
        t => t.type === 'OptionalCallExpression' || t.type === 'OptionalMemberExpression',
        (t, r) => r === 'expression' && t.type === 'TSNonNullExpression',
        (t, r) => r === 'tag' && t.type === 'TaggedTemplateExpression'
      ) ||
      e.match(
        void 0,
        (t, r) => r === 'expression' && t.type === 'ChainExpression',
        (t, r) => r === 'expression' && t.type === 'TSNonNullExpression',
        (t, r) => r === 'tag' && t.type === 'TaggedTemplateExpression'
      ) ||
      e.match(
        void 0,
        (t, r) => r === 'expression' && t.type === 'TSNonNullExpression',
        (t, r) => r === 'expression' && t.type === 'ChainExpression',
        (t, r) => r === 'tag' && t.type === 'TaggedTemplateExpression'
      ) ||
      e.match(
        t => t.type === 'OptionalMemberExpression' || t.type === 'OptionalCallExpression',
        (t, r) =>
          (r === 'object' && t.type === 'MemberExpression') ||
          (r === 'callee' && (t.type === 'CallExpression' || t.type === 'NewExpression'))
      ) ||
      e.match(
        t => t.type === 'OptionalMemberExpression' || t.type === 'OptionalCallExpression',
        (t, r) => r === 'expression' && t.type === 'TSNonNullExpression',
        (t, r) =>
          (r === 'object' && t.type === 'MemberExpression') ||
          (r === 'callee' && t.type === 'CallExpression')
      ) ||
      (e.match(
        t => t.type === 'CallExpression' || t.type === 'MemberExpression',
        (t, r) => r === 'expression' && t.type === 'ChainExpression'
      ) &&
        (e.match(
          void 0,
          void 0,
          (t, r) =>
            (r === 'callee' &&
              ((t.type === 'CallExpression' && !t.optional) || t.type === 'NewExpression')) ||
            (r === 'object' && t.type === 'MemberExpression' && !t.optional)
        ) ||
          e.match(
            void 0,
            void 0,
            (t, r) => r === 'expression' && t.type === 'TSNonNullExpression',
            (t, r) =>
              (r === 'object' && t.type === 'MemberExpression') ||
              (r === 'callee' && t.type === 'CallExpression')
          ))) ||
      e.match(
        t => t.type === 'CallExpression' || t.type === 'MemberExpression',
        (t, r) => r === 'expression' && t.type === 'TSNonNullExpression',
        (t, r) => r === 'expression' && t.type === 'ChainExpression',
        (t, r) =>
          (r === 'object' && t.type === 'MemberExpression') ||
          (r === 'callee' && t.type === 'CallExpression')
      )
    );
  }
  function cs(e) {
    return e.type === 'Identifier'
      ? !0
      : W(e)
        ? !e.computed && !e.optional && e.property.type === 'Identifier' && cs(e.object)
        : !1;
  }
  function Ec(e) {
    return (
      e.type === 'ChainExpression' && (e = e.expression),
      cs(e) || (L(e) && !e.optional && cs(e.callee))
    );
  }
  var ke = ps;
  function Fc(e, t) {
    let r = t - 1;
    (r = Xe(e, r, { backwards: !0 })),
      (r = He(e, r, { backwards: !0 })),
      (r = Xe(e, r, { backwards: !0 }));
    let n = He(e, r, { backwards: !0 });
    return r !== n;
  }
  var Ei = Fc;
  var Cc = () => !0;
  function ls(e, t) {
    let r = e.node;
    return (r.printed = !0), t.printer.printComment(e, t);
  }
  function Ac(e, t) {
    var y;
    let r = e.node,
      n = [ls(e, t)],
      { printer: s, originalText: u, locStart: i, locEnd: a } = t;
    if ((y = s.isBlockComment) == null ? void 0 : y.call(s, r)) {
      let D = Z(u, a(r)) ? (Z(u, i(r), { backwards: !0 }) ? F : x) : ' ';
      n.push(D);
    } else n.push(F);
    let p = He(u, Xe(u, a(r)));
    return p !== !1 && Z(u, p) && n.push(F), n;
  }
  function Tc(e, t, r) {
    var p;
    let n = e.node,
      s = ls(e, t),
      { printer: u, originalText: i, locStart: a } = t,
      o = (p = u.isBlockComment) == null ? void 0 : p.call(u, n);
    if (
      (r != null && r.hasLineSuffix && !(r != null && r.isBlock)) ||
      Z(i, a(n), { backwards: !0 })
    ) {
      let y = Ei(i, a(n));
      return { doc: Yn([F, y ? F : '', s]), isBlock: o, hasLineSuffix: !0 };
    }
    return !o || (r != null && r.hasLineSuffix)
      ? { doc: [Yn([' ', s]), Ee], isBlock: o, hasLineSuffix: !0 }
      : { doc: [' ', s], isBlock: o, hasLineSuffix: !1 };
  }
  function J(e, t, r = {}) {
    let { node: n } = e;
    if (!O(n == null ? void 0 : n.comments)) return '';
    let { indent: s = !1, marker: u, filter: i = Cc } = r,
      a = [];
    if (
      (e.each(({ node: p }) => {
        p.leading || p.trailing || p.marker !== u || !i(p) || a.push(ls(e, t));
      }, 'comments'),
      a.length === 0)
    )
      return '';
    let o = b(F, a);
    return s ? f([F, o]) : o;
  }
  function ms(e, t) {
    let r = e.node;
    if (!r) return {};
    let n = t[Symbol.for('printedComments')];
    if ((r.comments || []).filter(o => !n.has(o)).length === 0)
      return { leading: '', trailing: '' };
    let u = [],
      i = [],
      a;
    return (
      e.each(() => {
        let o = e.node;
        if (n != null && n.has(o)) return;
        let { leading: p, trailing: y } = o;
        p ? u.push(Ac(e, t)) : y && ((a = Tc(e, t, a)), i.push(a.doc));
      }, 'comments'),
      { leading: u, trailing: i }
    );
  }
  function ye(e, t, r) {
    let { leading: n, trailing: s } = ms(e, r);
    return !n && !s ? t : lr(t, u => [n, u, s]);
  }
  var ys = class extends Error {
      name = 'UnexpectedNodeError';
      constructor(t, r, n = 'type') {
        super(`Unexpected ${r} node ${n}: ${JSON.stringify(t[n])}.`), (this.node = t);
      }
    },
    Ne = ys;
  function Ds(e) {
    if (typeof e != 'string') throw new TypeError('Expected a string');
    return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
  }
  var Ge,
    fs = class {
      constructor(t) {
        Us(this, Ge);
        Ys(this, Ge, new Set(t));
      }
      getLeadingWhitespaceCount(t) {
        let r = ct(this, Ge),
          n = 0;
        for (let s = 0; s < t.length && r.has(t.charAt(s)); s++) n++;
        return n;
      }
      getTrailingWhitespaceCount(t) {
        let r = ct(this, Ge),
          n = 0;
        for (let s = t.length - 1; s >= 0 && r.has(t.charAt(s)); s--) n++;
        return n;
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
        return ct(this, Ge).has(t.charAt(0));
      }
      hasTrailingWhitespace(t) {
        return ct(this, Ge).has(M(!1, t, -1));
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
        let n = `[${Ds([...ct(this, Ge)].join(''))}]+`,
          s = new RegExp(r ? `(${n})` : n, 'u');
        return t.split(s);
      }
      hasWhitespaceCharacter(t) {
        let r = ct(this, Ge);
        return Array.prototype.some.call(t, n => r.has(n));
      }
      hasNonWhitespaceCharacter(t) {
        let r = ct(this, Ge);
        return Array.prototype.some.call(t, n => !r.has(n));
      }
      isWhitespaceOnly(t) {
        let r = ct(this, Ge);
        return Array.prototype.every.call(t, n => r.has(n));
      }
    };
  Ge = new WeakMap();
  var Fi = fs;
  var Hr = new Fi(` 
\r	`),
    Es = e => e === '' || e === x || e === F || e === E;
  function dc(e, t, r) {
    var _, v, j, I, G;
    let { node: n } = e;
    if (n.type === 'JSXElement' && vc(n)) return [r('openingElement'), r('closingElement')];
    let s = n.type === 'JSXElement' ? r('openingElement') : r('openingFragment'),
      u = n.type === 'JSXElement' ? r('closingElement') : r('closingFragment');
    if (
      n.children.length === 1 &&
      n.children[0].type === 'JSXExpressionContainer' &&
      (n.children[0].expression.type === 'TemplateLiteral' ||
        n.children[0].expression.type === 'TaggedTemplateExpression')
    )
      return [s, ...e.map(r, 'children'), u];
    n.children = n.children.map(P => (jc(P) ? { type: 'JSXText', value: ' ', raw: ' ' } : P));
    let i = n.children.some(X),
      a = n.children.filter(P => P.type === 'JSXExpressionContainer').length > 1,
      o = n.type === 'JSXElement' && n.openingElement.attributes.length > 1,
      p = re(s) || i || o || a,
      y = e.parent.rootMarker === 'mdx',
      D = t.singleQuote ? "{' '}" : '{" "}',
      m = y ? x : B([D, E], ' '),
      C =
        ((v = (_ = n.openingElement) == null ? void 0 : _.name) == null ? void 0 : v.name) ===
        'fbt',
      c = xc(e, t, r, m, C),
      A = n.children.some(P => Dr(P));
    for (let P = c.length - 2; P >= 0; P--) {
      let N = c[P] === '' && c[P + 1] === '',
        ue = c[P] === F && c[P + 1] === '' && c[P + 2] === F,
        Q = (c[P] === E || c[P] === F) && c[P + 1] === '' && c[P + 2] === m,
        Bt = c[P] === m && c[P + 1] === '' && (c[P + 2] === E || c[P + 2] === F),
        Ct = c[P] === m && c[P + 1] === '' && c[P + 2] === m,
        w =
          (c[P] === E && c[P + 1] === '' && c[P + 2] === F) ||
          (c[P] === F && c[P + 1] === '' && c[P + 2] === E);
      (ue && A) || N || Q || Ct || w ? c.splice(P, 2) : Bt && c.splice(P + 1, 2);
    }
    for (; c.length > 0 && Es(M(!1, c, -1)); ) c.pop();
    for (; c.length > 1 && Es(c[0]) && Es(c[1]); ) c.shift(), c.shift();
    let d = [''];
    for (let [P, N] of c.entries()) {
      if (N === m) {
        if (P === 1 && Pu(c[P - 1])) {
          if (c.length === 2) {
            d.push([d.pop(), D]);
            continue;
          }
          d.push([D, F], '');
          continue;
        } else if (P === c.length - 1) {
          d.push([d.pop(), D]);
          continue;
        } else if (c[P - 1] === '' && c[P - 2] === F) {
          d.push([d.pop(), D]);
          continue;
        }
      }
      P % 2 === 0 ? d.push([d.pop(), N]) : d.push(N, ''), re(N) && (p = !0);
    }
    let S = A ? qr(d) : l(d, { shouldBreak: !0 });
    if (
      (((j = t.cursorNode) == null ? void 0 : j.type) === 'JSXText' &&
      n.children.includes(t.cursorNode)
        ? (S = [mr, S, mr])
        : ((I = t.nodeBeforeCursor) == null ? void 0 : I.type) === 'JSXText' &&
            n.children.includes(t.nodeBeforeCursor)
          ? (S = [mr, S])
          : ((G = t.nodeAfterCursor) == null ? void 0 : G.type) === 'JSXText' &&
            n.children.includes(t.nodeAfterCursor) &&
            (S = [S, mr]),
      y)
    )
      return S;
    let g = l([s, f([F, S]), F, u]);
    return p ? g : et([l([s, ...c, u]), g]);
  }
  function xc(e, t, r, n, s) {
    let u = '',
      i = [u];
    function a(p) {
      (u = p), i.push([i.pop(), p]);
    }
    function o(p) {
      p !== '' && ((u = p), i.push(p, ''));
    }
    return (
      e.each(({ node: p, next: y }) => {
        if (p.type === 'JSXText') {
          let D = fe(p);
          if (Dr(p)) {
            let m = Hr.split(D, !0);
            m[0] === '' && (m.shift(), /\n/u.test(m[0]) ? o(Ai(s, m[1], p, y)) : o(n), m.shift());
            let C;
            if ((M(!1, m, -1) === '' && (m.pop(), (C = m.pop())), m.length === 0)) return;
            for (let [c, A] of m.entries()) c % 2 === 1 ? o(x) : a(A);
            C !== void 0 ? (/\n/u.test(C) ? o(Ai(s, u, p, y)) : o(n)) : o(Ci(s, u, p, y));
          } else /\n/u.test(D) ? D.match(/\n/gu).length > 1 && o(F) : o(n);
        } else {
          let D = r();
          if ((a(D), y && Dr(y))) {
            let C = Hr.trim(fe(y)),
              [c] = Hr.split(C);
            o(Ci(s, c, p, y));
          } else o(F);
        }
      }, 'children'),
      i
    );
  }
  function Ci(e, t, r, n) {
    return e
      ? ''
      : (r.type === 'JSXElement' && !r.closingElement) ||
          ((n == null ? void 0 : n.type) === 'JSXElement' && !n.closingElement)
        ? t.length === 1
          ? E
          : F
        : E;
  }
  function Ai(e, t, r, n) {
    return e
      ? F
      : t.length === 1
        ? (r.type === 'JSXElement' && !r.closingElement) ||
          ((n == null ? void 0 : n.type) === 'JSXElement' && !n.closingElement)
          ? F
          : E
        : F;
  }
  var hc = new Set([
    'ArrayExpression',
    'TupleExpression',
    'JSXAttribute',
    'JSXElement',
    'JSXExpressionContainer',
    'JSXFragment',
    'ExpressionStatement',
    'CallExpression',
    'OptionalCallExpression',
    'ConditionalExpression',
    'JsExpressionRoot',
  ]);
  function gc(e, t, r) {
    let { parent: n } = e;
    if (hc.has(n.type)) return t;
    let s = e.match(
        void 0,
        i => i.type === 'ArrowFunctionExpression',
        L,
        i => i.type === 'JSXExpressionContainer'
      ),
      u = ke(e, r);
    return l([u ? '' : B('('), f([E, t]), E, u ? '' : B(')')], { shouldBreak: s });
  }
  function Sc(e, t, r) {
    let { node: n } = e,
      s = [];
    if ((s.push(r('name')), n.value)) {
      let u;
      if (te(n.value)) {
        let i = fe(n.value),
          a = Y(!1, Y(!1, i.slice(1, -1), '&apos;', "'"), '&quot;', '"'),
          o = Sr(a, t.jsxSingleQuote);
        (a = o === '"' ? Y(!1, a, '"', '&quot;') : Y(!1, a, "'", '&apos;')),
          (u = e.call(() => ye(e, ve(o + a + o), t), 'value'));
      } else u = r('value');
      s.push('=', u);
    }
    return s;
  }
  function Bc(e, t, r) {
    let { node: n } = e,
      s = (u, i) =>
        u.type === 'JSXEmptyExpression' ||
        (!T(u) &&
          (U(u) ||
            se(u) ||
            u.type === 'ArrowFunctionExpression' ||
            (u.type === 'AwaitExpression' &&
              (s(u.argument, u) || u.argument.type === 'JSXElement')) ||
            L(u) ||
            (u.type === 'ChainExpression' && L(u.expression)) ||
            u.type === 'FunctionExpression' ||
            u.type === 'TemplateLiteral' ||
            u.type === 'TaggedTemplateExpression' ||
            u.type === 'DoExpression' ||
            (X(i) && (u.type === 'ConditionalExpression' || De(u)))));
    return s(n.expression, e.parent)
      ? l(['{', r('expression'), je, '}'])
      : l(['{', f([E, r('expression')]), E, je, '}']);
  }
  function bc(e, t, r) {
    var a, o;
    let { node: n } = e,
      s = T(n.name) || T(n.typeParameters) || T(n.typeArguments);
    if (n.selfClosing && n.attributes.length === 0 && !s)
      return ['<', r('name'), n.typeArguments ? r('typeArguments') : r('typeParameters'), ' />'];
    if (
      ((a = n.attributes) == null ? void 0 : a.length) === 1 &&
      te(n.attributes[0].value) &&
      !n.attributes[0].value.value.includes(`
`) &&
      !s &&
      !T(n.attributes[0])
    )
      return l([
        '<',
        r('name'),
        n.typeArguments ? r('typeArguments') : r('typeParameters'),
        ' ',
        ...e.map(r, 'attributes'),
        n.selfClosing ? ' />' : '>',
      ]);
    let u =
        (o = n.attributes) == null
          ? void 0
          : o.some(
              p =>
                te(p.value) &&
                p.value.value.includes(`
`)
            ),
      i = t.singleAttributePerLine && n.attributes.length > 1 ? F : x;
    return l(
      [
        '<',
        r('name'),
        n.typeArguments ? r('typeArguments') : r('typeParameters'),
        f(e.map(() => [i, r()], 'attributes')),
        ...Pc(n, t, s),
      ],
      { shouldBreak: u }
    );
  }
  function Pc(e, t, r) {
    return e.selfClosing ? [x, '/>'] : kc(e, t, r) ? ['>'] : [E, '>'];
  }
  function kc(e, t, r) {
    let n = e.attributes.length > 0 && T(M(!1, e.attributes, -1), h.Trailing);
    return (
      (e.attributes.length === 0 && !r) ||
      ((t.bracketSameLine || t.jsxBracketSameLine) && (!r || e.attributes.length > 0) && !n)
    );
  }
  function Ic(e, t, r) {
    let { node: n } = e,
      s = [];
    s.push('</');
    let u = r('name');
    return (
      T(n.name, h.Leading | h.Line)
        ? s.push(f([F, u]), F)
        : T(n.name, h.Leading | h.Block)
          ? s.push(' ', u)
          : s.push(u),
      s.push('>'),
      s
    );
  }
  function Lc(e, t) {
    let { node: r } = e,
      n = T(r),
      s = T(r, h.Line),
      u = r.type === 'JSXOpeningFragment';
    return [u ? '<' : '</', f([s ? F : n && !u ? ' ' : '', J(e, t)]), s ? F : '', '>'];
  }
  function wc(e, t, r) {
    let n = ye(e, dc(e, t, r), t);
    return gc(e, n, t);
  }
  function Oc(e, t) {
    let { node: r } = e,
      n = T(r, h.Line);
    return [J(e, t, { indent: n }), n ? F : ''];
  }
  function _c(e, t, r) {
    let { node: n } = e;
    return [
      '{',
      e.call(
        ({ node: s }) => {
          let u = ['...', r()];
          return !T(s) || !es(e) ? u : [f([E, ye(e, u, t)]), E];
        },
        n.type === 'JSXSpreadAttribute' ? 'argument' : 'expression'
      ),
      '}',
    ];
  }
  function Ti(e, t, r) {
    let { node: n } = e;
    if (n.type.startsWith('JSX'))
      switch (n.type) {
        case 'JSXAttribute':
          return Sc(e, t, r);
        case 'JSXIdentifier':
          return n.name;
        case 'JSXNamespacedName':
          return b(':', [r('namespace'), r('name')]);
        case 'JSXMemberExpression':
          return b('.', [r('object'), r('property')]);
        case 'JSXSpreadAttribute':
        case 'JSXSpreadChild':
          return _c(e, t, r);
        case 'JSXExpressionContainer':
          return Bc(e, t, r);
        case 'JSXFragment':
        case 'JSXElement':
          return wc(e, t, r);
        case 'JSXOpeningElement':
          return bc(e, t, r);
        case 'JSXClosingElement':
          return Ic(e, t, r);
        case 'JSXOpeningFragment':
        case 'JSXClosingFragment':
          return Lc(e, t);
        case 'JSXEmptyExpression':
          return Oc(e, t);
        case 'JSXText':
          throw new Error('JSXText should be handled by JSXElement');
        default:
          throw new Ne(n, 'JSX');
      }
  }
  function vc(e) {
    if (e.children.length === 0) return !0;
    if (e.children.length > 1) return !1;
    let t = e.children[0];
    return t.type === 'JSXText' && !Dr(t);
  }
  function Dr(e) {
    return e.type === 'JSXText' && (Hr.hasNonWhitespaceCharacter(fe(e)) || !/\n/u.test(fe(e)));
  }
  function jc(e) {
    return (
      e.type === 'JSXExpressionContainer' &&
      te(e.expression) &&
      e.expression.value === ' ' &&
      !T(e.expression)
    );
  }
  function di(e) {
    let { node: t, parent: r } = e;
    if (!X(t) || !X(r)) return !1;
    let { index: n, siblings: s } = e,
      u;
    for (let i = n; i > 0; i--) {
      let a = s[i - 1];
      if (!(a.type === 'JSXText' && !Dr(a))) {
        u = a;
        break;
      }
    }
    return (
      (u == null ? void 0 : u.type) === 'JSXExpressionContainer' &&
      u.expression.type === 'JSXEmptyExpression' &&
      Lt(u.expression)
    );
  }
  function Mc(e) {
    return Lt(e.node) || di(e);
  }
  var Vr = Mc;
  var Rc = 0;
  function $r(e, t, r) {
    var v;
    let { node: n, parent: s, grandparent: u, key: i } = e,
      a =
        i !== 'body' &&
        (s.type === 'IfStatement' ||
          s.type === 'WhileStatement' ||
          s.type === 'SwitchStatement' ||
          s.type === 'DoWhileStatement'),
      o = n.operator === '|>' && ((v = e.root.extra) == null ? void 0 : v.__isUsingHackPipeline),
      p = Fs(e, r, t, !1, a);
    if (a) return p;
    if (o) return l(p);
    if ((L(s) && s.callee === n) || s.type === 'UnaryExpression' || (W(s) && !s.computed))
      return l([f([E, ...p]), E]);
    let y =
        s.type === 'ReturnStatement' ||
        s.type === 'ThrowStatement' ||
        (s.type === 'JSXExpressionContainer' && u.type === 'JSXAttribute') ||
        (n.operator !== '|' && s.type === 'JsExpressionRoot') ||
        (n.type !== 'NGPipeExpression' &&
          ((s.type === 'NGRoot' && t.parser === '__ng_binding') ||
            (s.type === 'NGMicrosyntaxExpression' &&
              u.type === 'NGMicrosyntax' &&
              u.body.length === 1))) ||
        (n === s.body && s.type === 'ArrowFunctionExpression') ||
        (n !== s.body && s.type === 'ForStatement') ||
        (s.type === 'ConditionalExpression' &&
          u.type !== 'ReturnStatement' &&
          u.type !== 'ThrowStatement' &&
          !L(u)) ||
        s.type === 'TemplateLiteral',
      D =
        s.type === 'AssignmentExpression' ||
        s.type === 'VariableDeclarator' ||
        s.type === 'ClassProperty' ||
        s.type === 'PropertyDefinition' ||
        s.type === 'TSAbstractPropertyDefinition' ||
        s.type === 'ClassPrivateProperty' ||
        Ce(s),
      m = De(n.left) && ar(n.operator, n.left.operator);
    if (y || (Ht(n) && !m) || (!Ht(n) && D)) return l(p);
    if (p.length === 0) return '';
    let C = X(n.right),
      c = p.findIndex(j => typeof j != 'string' && !Array.isArray(j) && j.type === me),
      A = p.slice(0, c === -1 ? 1 : c + 1),
      d = p.slice(A.length, C ? -1 : void 0),
      S = Symbol('logicalChain-' + ++Rc),
      g = l([...A, f(d)], { id: S });
    if (!C) return g;
    let _ = M(!1, p, -1);
    return l([g, xt(_, { groupId: S })]);
  }
  function Fs(e, t, r, n, s) {
    var S;
    let { node: u } = e;
    if (!De(u)) return [l(t())];
    let i = [];
    ar(u.operator, u.left.operator)
      ? (i = e.call(g => Fs(g, t, r, !0, s), 'left'))
      : i.push(l(t('left')));
    let a = Ht(u),
      o =
        (u.operator === '|>' || u.type === 'NGPipeExpression' || Jc(e, r)) &&
        !Le(r.originalText, u.right),
      y = !T(u.right, h.Leading, Wr) && Le(r.originalText, u.right),
      D = u.type === 'NGPipeExpression' ? '|' : u.operator,
      m =
        u.type === 'NGPipeExpression' && u.arguments.length > 0
          ? l(
              f([
                E,
                ': ',
                b(
                  [x, ': '],
                  e.map(() => Be(2, l(t())), 'arguments')
                ),
              ])
            )
          : '',
      C;
    if (a) C = [D, ' ', t('right'), m];
    else {
      let _ =
        D === '|>' && ((S = e.root.extra) == null ? void 0 : S.__isUsingHackPipeline)
          ? e.call(v => Fs(v, t, r, !0, s), 'right')
          : t('right');
      if (r.experimentalOperatorPosition === 'start') {
        let v = '';
        if (y)
          switch (Se(_)) {
            case he:
              v = _.splice(0, 1)[0];
              break;
            case ge:
              v = _.contents.splice(0, 1)[0];
              break;
          }
        C = [x, v, D, ' ', _, m];
      } else C = [o ? x : '', D, o ? ' ' : x, _, m];
    }
    let { parent: c } = e,
      A = T(u.left, h.Trailing | h.Line);
    if (
      ((A ||
        (!(s && u.type === 'LogicalExpression') &&
          c.type !== u.type &&
          u.left.type !== u.type &&
          u.right.type !== u.type)) &&
        (C = l(C, { shouldBreak: A })),
      r.experimentalOperatorPosition === 'start'
        ? i.push(a || y ? ' ' : '', C)
        : i.push(o ? '' : ' ', C),
      n && T(u))
    ) {
      let g = Ut(ye(e, i, r));
      return g.type === Oe ? g.parts : Array.isArray(g) ? g : [g];
    }
    return i;
  }
  function Ht(e) {
    return e.type !== 'LogicalExpression'
      ? !1
      : !!(
          (se(e.right) && e.right.properties.length > 0) ||
          (U(e.right) && e.right.elements.length > 0) ||
          X(e.right)
        );
  }
  var xi = e => e.type === 'BinaryExpression' && e.operator === '|';
  function Jc(e, t) {
    return (
      (t.parser === '__vue_expression' || t.parser === '__vue_ts_expression') &&
      xi(e.node) &&
      !e.hasAncestor(r => !xi(r) && r.type !== 'JsExpressionRoot')
    );
  }
  function gi(e, t, r) {
    let { node: n } = e;
    if (n.type.startsWith('NG'))
      switch (n.type) {
        case 'NGRoot':
          return [r('node'), T(n.node) ? ' //' + lt(n.node)[0].value.trimEnd() : ''];
        case 'NGPipeExpression':
          return $r(e, t, r);
        case 'NGChainedExpression':
          return l(
            b(
              [';', x],
              e.map(() => (Wc(e) ? r() : ['(', r(), ')']), 'expressions')
            )
          );
        case 'NGEmptyExpression':
          return '';
        case 'NGMicrosyntax':
          return e.map(() => [e.isFirst ? '' : hi(e) ? ' ' : [';', x], r()], 'body');
        case 'NGMicrosyntaxKey':
          return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/iu.test(n.name)
            ? n.name
            : JSON.stringify(n.name);
        case 'NGMicrosyntaxExpression':
          return [r('expression'), n.alias === null ? '' : [' as ', r('alias')]];
        case 'NGMicrosyntaxKeyedExpression': {
          let { index: s, parent: u } = e,
            i =
              hi(e) ||
              (((s === 1 &&
                (n.key.name === 'then' || n.key.name === 'else' || n.key.name === 'as')) ||
                ((s === 2 || s === 3) &&
                  ((n.key.name === 'else' &&
                    u.body[s - 1].type === 'NGMicrosyntaxKeyedExpression' &&
                    u.body[s - 1].key.name === 'then') ||
                    n.key.name === 'track'))) &&
                u.body[0].type === 'NGMicrosyntaxExpression');
          return [r('key'), i ? ' ' : ': ', r('expression')];
        }
        case 'NGMicrosyntaxLet':
          return ['let ', r('key'), n.value === null ? '' : [' = ', r('value')]];
        case 'NGMicrosyntaxAs':
          return [r('key'), ' as ', r('alias')];
        default:
          throw new Ne(n, 'Angular');
      }
  }
  function hi({ node: e, index: t }) {
    return e.type === 'NGMicrosyntaxKeyedExpression' && e.key.name === 'of' && t === 1;
  }
  var qc = R(['CallExpression', 'OptionalCallExpression', 'AssignmentExpression']);
  function Wc({ node: e }) {
    return ur(e, qc);
  }
  function Cs(e, t, r) {
    let { node: n } = e;
    return l([b(x, e.map(r, 'decorators')), bi(n, t) ? F : x]);
  }
  function Si(e, t, r) {
    return Pi(e.node) ? [b(F, e.map(r, 'declaration', 'decorators')), F] : '';
  }
  function Bi(e, t, r) {
    let { node: n, parent: s } = e,
      { decorators: u } = n;
    if (!O(u) || Pi(s) || Vr(e)) return '';
    let i = n.type === 'ClassExpression' || n.type === 'ClassDeclaration' || bi(n, t);
    return [e.key === 'declaration' && cu(s) ? F : i ? Ee : '', b(x, e.map(r, 'decorators')), x];
  }
  function bi(e, t) {
    return e.decorators.some(r => Z(t.originalText, k(r)));
  }
  function Pi(e) {
    var r;
    if (
      e.type !== 'ExportDefaultDeclaration' &&
      e.type !== 'ExportNamedDeclaration' &&
      e.type !== 'DeclareExportDeclaration'
    )
      return !1;
    let t = (r = e.declaration) == null ? void 0 : r.decorators;
    return O(t) && Pt(e, t[0]);
  }
  var Dt = class extends Error {
    name = 'ArgExpansionBailout';
  };
  function Nc(e, t, r) {
    let { node: n } = e,
      s = pe(n);
    if (s.length === 0) return ['(', J(e, t), ')'];
    let u = s.length - 1;
    if (Yc(s)) {
      let D = ['('];
      return (
        Wt(e, (m, C) => {
          D.push(r()), C !== u && D.push(', ');
        }),
        D.push(')'),
        D
      );
    }
    let i = !1,
      a = [];
    Wt(e, ({ node: D }, m) => {
      let C = r();
      m === u || (ce(D, t) ? ((i = !0), (C = [C, ',', F, F])) : (C = [C, ',', x])), a.push(C);
    });
    let o =
      !t.parser.startsWith('__ng_') && n.type !== 'ImportExpression' && oe(t, 'all') ? ',' : '';
    function p() {
      return l(['(', f([x, ...a]), o, x, ')'], { shouldBreak: !0 });
    }
    if (i || (e.parent.type !== 'Decorator' && fu(s))) return p();
    if (Uc(s)) {
      let D = a.slice(1);
      if (D.some(re)) return p();
      let m;
      try {
        m = r(Wn(n, 0), { expandFirstArg: !0 });
      } catch (C) {
        if (C instanceof Dt) return p();
        throw C;
      }
      return re(m)
        ? [Ee, et([['(', l(m, { shouldBreak: !0 }), ', ', ...D, ')'], p()])]
        : et([['(', m, ', ', ...D, ')'], ['(', l(m, { shouldBreak: !0 }), ', ', ...D, ')'], p()]);
    }
    if (Gc(s, a, t)) {
      let D = a.slice(0, -1);
      if (D.some(re)) return p();
      let m;
      try {
        m = r(Wn(n, -1), { expandLastArg: !0 });
      } catch (C) {
        if (C instanceof Dt) return p();
        throw C;
      }
      return re(m)
        ? [Ee, et([['(', ...D, l(m, { shouldBreak: !0 }), ')'], p()])]
        : et([['(', ...D, m, ')'], ['(', ...D, l(m, { shouldBreak: !0 }), ')'], p()]);
    }
    let y = ['(', f([E, ...a]), B(o), E, ')'];
    return jr(e) ? y : l(y, { shouldBreak: a.some(re) || i });
  }
  function fr(e, t = !1) {
    return (
      (se(e) && (e.properties.length > 0 || T(e))) ||
      (U(e) && (e.elements.length > 0 || T(e))) ||
      (e.type === 'TSTypeAssertion' && fr(e.expression)) ||
      (Ae(e) && fr(e.expression)) ||
      e.type === 'FunctionExpression' ||
      (e.type === 'ArrowFunctionExpression' &&
        (!e.returnType ||
          !e.returnType.typeAnnotation ||
          e.returnType.typeAnnotation.type !== 'TSTypeReference' ||
          Xc(e.body)) &&
        (e.body.type === 'BlockStatement' ||
          (e.body.type === 'ArrowFunctionExpression' && fr(e.body, !0)) ||
          se(e.body) ||
          U(e.body) ||
          (!t && (L(e.body) || e.body.type === 'ConditionalExpression')) ||
          X(e.body))) ||
      e.type === 'DoExpression' ||
      e.type === 'ModuleExpression'
    );
  }
  function Gc(e, t, r) {
    var u, i;
    let n = M(!1, e, -1);
    if (e.length === 1) {
      let a = M(!1, t, -1);
      if ((u = a.label) != null && u.embed && ((i = a.label) == null ? void 0 : i.hug) !== !1)
        return !0;
    }
    let s = M(!1, e, -2);
    return (
      !T(n, h.Leading) &&
      !T(n, h.Trailing) &&
      fr(n) &&
      (!s || s.type !== n.type) &&
      (e.length !== 2 || s.type !== 'ArrowFunctionExpression' || !U(n)) &&
      !(e.length > 1 && As(n, r))
    );
  }
  function Uc(e) {
    if (e.length !== 2) return !1;
    let [t, r] = e;
    return t.type === 'ModuleExpression' && Hc(r)
      ? !0
      : !T(t) &&
          (t.type === 'FunctionExpression' ||
            (t.type === 'ArrowFunctionExpression' && t.body.type === 'BlockStatement')) &&
          r.type !== 'FunctionExpression' &&
          r.type !== 'ArrowFunctionExpression' &&
          r.type !== 'ConditionalExpression' &&
          Ii(r) &&
          !fr(r);
  }
  function Ii(e) {
    if (e.type === 'ParenthesizedExpression') return Ii(e.expression);
    if (Ae(e) || e.type === 'TypeCastExpression') {
      let { typeAnnotation: t } = e;
      if (
        (t.type === 'TypeAnnotation' && (t = t.typeAnnotation),
        t.type === 'TSArrayType' &&
          ((t = t.elementType), t.type === 'TSArrayType' && (t = t.elementType)),
        t.type === 'GenericTypeAnnotation' || t.type === 'TSTypeReference')
      ) {
        let r = t.typeArguments ?? t.typeParameters;
        (r == null ? void 0 : r.params.length) === 1 && (t = r.params[0]);
      }
      return qt(t) && Ie(e.expression, 1);
    }
    return mt(e) && pe(e).length > 1
      ? !1
      : De(e)
        ? Ie(e.left, 1) && Ie(e.right, 1)
        : Jn(e) || Ie(e);
  }
  function Yc(e) {
    return e.length === 2 ? ki(e, 0) : e.length === 3 ? e[0].type === 'Identifier' && ki(e, 1) : !1;
  }
  function ki(e, t) {
    let r = e[t],
      n = e[t + 1];
    return (
      r.type === 'ArrowFunctionExpression' &&
      z(r).length === 0 &&
      r.body.type === 'BlockStatement' &&
      n.type === 'ArrayExpression' &&
      !e.some(s => T(s))
    );
  }
  function Xc(e) {
    return (
      e.type === 'BlockStatement' &&
      (e.body.some(t => t.type !== 'EmptyStatement') || T(e, h.Dangling))
    );
  }
  function Hc(e) {
    return (
      e.type === 'ObjectExpression' &&
      e.properties.length === 1 &&
      Ce(e.properties[0]) &&
      e.properties[0].key.type === 'Identifier' &&
      e.properties[0].key.name === 'type' &&
      te(e.properties[0].value) &&
      e.properties[0].value.value === 'module'
    );
  }
  var Er = Nc;
  var Vc = e => (
    (e.type === 'ChainExpression' || e.type === 'TSNonNullExpression') && (e = e.expression),
    L(e) && pe(e).length > 0
  );
  function Li(e, t, r) {
    var p;
    let n = r('object'),
      s = Ts(e, t, r),
      { node: u } = e,
      i = e.findAncestor(y => !(W(y) || y.type === 'TSNonNullExpression')),
      a = e.findAncestor(y => !(y.type === 'ChainExpression' || y.type === 'TSNonNullExpression')),
      o =
        (i &&
          (i.type === 'NewExpression' ||
            i.type === 'BindExpression' ||
            (i.type === 'AssignmentExpression' && i.left.type !== 'Identifier'))) ||
        u.computed ||
        (u.object.type === 'Identifier' && u.property.type === 'Identifier' && !W(a)) ||
        ((a.type === 'AssignmentExpression' || a.type === 'VariableDeclarator') &&
          (Vc(u.object) || ((p = n.label) == null ? void 0 : p.memberChain)));
    return ut(n.label, [n, o ? s : l(f([E, s]))]);
  }
  function Ts(e, t, r) {
    let n = r('property'),
      { node: s } = e,
      u = $(e);
    return s.computed
      ? !s.property || Fe(s.property)
        ? [u, '[', n, ']']
        : l([u, '[', f([E, n]), E, ']'])
      : [u, '.', n];
  }
  function wi(e, t, r) {
    if (e.node.type === 'ChainExpression') return e.call(() => wi(e, t, r), 'expression');
    let { parent: n } = e,
      s = !n || n.type === 'ExpressionStatement',
      u = [];
    function i(w) {
      let { originalText: ne } = t,
        xe = it(ne, k(w));
      return ne.charAt(xe) === ')' ? xe !== !1 && jt(ne, xe + 1) : ce(w, t);
    }
    function a() {
      let { node: w } = e;
      if (w.type === 'ChainExpression') return e.call(a, 'expression');
      if (L(w) && (Tt(w.callee) || L(w.callee))) {
        let ne = i(w);
        u.unshift({
          node: w,
          hasTrailingEmptyLine: ne,
          printed: [ye(e, [$(e), tt(e, t, r), Er(e, t, r)], t), ne ? F : ''],
        }),
          e.call(a, 'callee');
      } else
        Tt(w)
          ? (u.unshift({
              node: w,
              needsParens: ke(e, t),
              printed: ye(e, W(w) ? Ts(e, t, r) : Kr(e, t, r), t),
            }),
            e.call(a, 'object'))
          : w.type === 'TSNonNullExpression'
            ? (u.unshift({ node: w, printed: ye(e, '!', t) }), e.call(a, 'expression'))
            : u.unshift({ node: w, printed: r() });
    }
    let { node: o } = e;
    u.unshift({ node: o, printed: [$(e), tt(e, t, r), Er(e, t, r)] }),
      o.callee && e.call(a, 'callee');
    let p = [],
      y = [u[0]],
      D = 1;
    for (
      ;
      D < u.length &&
      (u[D].node.type === 'TSNonNullExpression' ||
        L(u[D].node) ||
        (W(u[D].node) && u[D].node.computed && Fe(u[D].node.property)));
      ++D
    )
      y.push(u[D]);
    if (!L(u[0].node))
      for (; D + 1 < u.length && Tt(u[D].node) && Tt(u[D + 1].node); ++D) y.push(u[D]);
    p.push(y), (y = []);
    let m = !1;
    for (; D < u.length; ++D) {
      if (m && Tt(u[D].node)) {
        if (u[D].node.computed && Fe(u[D].node.property)) {
          y.push(u[D]);
          continue;
        }
        p.push(y), (y = []), (m = !1);
      }
      (L(u[D].node) || u[D].node.type === 'ImportExpression') && (m = !0),
        y.push(u[D]),
        T(u[D].node, h.Trailing) && (p.push(y), (y = []), (m = !1));
    }
    y.length > 0 && p.push(y);
    function C(w) {
      return /^[A-Z]|^[$_]+$/u.test(w);
    }
    function c(w) {
      return w.length <= t.tabWidth;
    }
    function A(w) {
      var pt;
      let ne = (pt = w[1][0]) == null ? void 0 : pt.node.computed;
      if (w[0].length === 1) {
        let bt = w[0][0].node;
        return (
          bt.type === 'ThisExpression' ||
          (bt.type === 'Identifier' && (C(bt.name) || (s && c(bt.name)) || ne))
        );
      }
      let xe = M(!1, w[0], -1).node;
      return W(xe) && xe.property.type === 'Identifier' && (C(xe.property.name) || ne);
    }
    let d = p.length >= 2 && !T(p[1][0].node) && A(p);
    function S(w) {
      let ne = w.map(xe => xe.printed);
      return w.length > 0 && M(!1, w, -1).needsParens ? ['(', ...ne, ')'] : ne;
    }
    function g(w) {
      return w.length === 0 ? '' : f([F, b(F, w.map(S))]);
    }
    let _ = p.map(S),
      v = _,
      j = d ? 3 : 2,
      I = p.flat(),
      G =
        I.slice(1, -1).some(w => T(w.node, h.Leading)) ||
        I.slice(0, -1).some(w => T(w.node, h.Trailing)) ||
        (p[j] && T(p[j][0].node, h.Leading));
    if (p.length <= j && !G && !p.some(w => M(!1, w, -1).hasTrailingEmptyLine))
      return jr(e) ? v : l(v);
    let P = M(!1, p[d ? 1 : 0], -1).node,
      N = !L(P) && i(P),
      ue = [S(p[0]), d ? p.slice(1, 2).map(S) : '', N ? F : '', g(p.slice(d ? 2 : 1))],
      Q = u.map(({ node: w }) => w).filter(L);
    function Bt() {
      let w = M(!1, M(!1, p, -1), -1).node,
        ne = M(!1, _, -1);
      return L(w) && re(ne) && Q.slice(0, -1).some(xe => xe.arguments.some(Rt));
    }
    let Ct;
    return (
      G ||
      (Q.length > 2 && Q.some(w => !w.arguments.every(ne => Ie(ne)))) ||
      _.slice(0, -1).some(re) ||
      Bt()
        ? (Ct = l(ue))
        : (Ct = [re(v) || N ? Ee : '', et([v, ue])]),
      ut({ memberChain: !0 }, Ct)
    );
  }
  var Oi = wi;
  function Qr(e, t, r) {
    var y;
    let { node: n } = e,
      s = n.type === 'NewExpression',
      u = n.type === 'ImportExpression',
      i = $(e),
      a = pe(n),
      o = a.length === 1 && _r(a[0], t.originalText);
    if (o || $c(e) || It(n, e.parent)) {
      let D = [];
      if (
        (Wt(e, () => {
          D.push(r());
        }),
        !(o && (y = D[0].label) != null && y.embed))
      )
        return [s ? 'new ' : '', _i(e, r), i, tt(e, t, r), '(', b(', ', D), ')'];
    }
    if (
      !u &&
      !s &&
      Tt(n.callee) &&
      !e.call(
        D => ke(D, t),
        'callee',
        ...(n.callee.type === 'ChainExpression' ? ['expression'] : [])
      )
    )
      return Oi(e, t, r);
    let p = [s ? 'new ' : '', _i(e, r), i, tt(e, t, r), Er(e, t, r)];
    return u || L(n.callee) ? l(p) : p;
  }
  function _i(e, t) {
    let { node: r } = e;
    return r.type === 'ImportExpression' ? `import${r.phase ? `.${r.phase}` : ''}` : t('callee');
  }
  function $c(e) {
    let { node: t } = e;
    if (t.type !== 'CallExpression' || t.optional || t.callee.type !== 'Identifier') return !1;
    let r = pe(t);
    return t.callee.name === 'require'
      ? (r.length === 1 && te(r[0])) || r.length > 1
      : t.callee.name === 'define' && e.parent.type === 'ExpressionStatement'
        ? r.length === 1 ||
          (r.length === 2 && r[0].type === 'ArrayExpression') ||
          (r.length === 3 && te(r[0]) && r[1].type === 'ArrayExpression')
        : !1;
  }
  function ht(e, t, r, n, s, u) {
    let i = Kc(e, t, r, n, u),
      a = u ? r(u, { assignmentLayout: i }) : '';
    switch (i) {
      case 'break-after-operator':
        return l([l(n), s, l(f([x, a]))]);
      case 'never-break-after-operator':
        return l([l(n), s, ' ', a]);
      case 'fluid': {
        let o = Symbol('assignment');
        return l([l(n), s, l(f(x), { id: o }), je, xt(a, { groupId: o })]);
      }
      case 'break-lhs':
        return l([n, s, ' ', l(a)]);
      case 'chain':
        return [l(n), s, x, a];
      case 'chain-tail':
        return [l(n), s, f([x, a])];
      case 'chain-tail-arrow-chain':
        return [l(n), s, a];
      case 'only-left':
        return n;
    }
  }
  function ji(e, t, r) {
    let { node: n } = e;
    return ht(e, t, r, r('left'), [' ', n.operator], 'right');
  }
  function Mi(e, t, r) {
    return ht(e, t, r, r('id'), ' =', 'init');
  }
  function Kc(e, t, r, n, s) {
    let { node: u } = e,
      i = u[s];
    if (!i) return 'only-left';
    let a = !zr(i);
    if (
      e.match(
        zr,
        Ri,
        m => !a || (m.type !== 'ExpressionStatement' && m.type !== 'VariableDeclaration')
      )
    )
      return a
        ? i.type === 'ArrowFunctionExpression' && i.body.type === 'ArrowFunctionExpression'
          ? 'chain-tail-arrow-chain'
          : 'chain-tail'
        : 'chain';
    if ((!a && zr(i.right)) || Le(t.originalText, i)) return 'break-after-operator';
    if (
      u.type === 'ImportAttribute' ||
      (i.type === 'CallExpression' && i.callee.name === 'require') ||
      t.parser === 'json5' ||
      t.parser === 'jsonc' ||
      t.parser === 'json'
    )
      return 'never-break-after-operator';
    let y = bu(n);
    if (zc(u) || rl(u) || (ds(u) && y)) return 'break-lhs';
    let D = sl(u, n, t);
    return e.call(() => Qc(e, t, r, D), s)
      ? 'break-after-operator'
      : Zc(u)
        ? 'break-lhs'
        : !y &&
            (D ||
              i.type === 'TemplateLiteral' ||
              i.type === 'TaggedTemplateExpression' ||
              i.type === 'BooleanLiteral' ||
              Fe(i) ||
              i.type === 'ClassExpression')
          ? 'never-break-after-operator'
          : 'fluid';
  }
  function Qc(e, t, r, n) {
    let s = e.node;
    if (De(s) && !Ht(s)) return !0;
    switch (s.type) {
      case 'StringLiteralTypeAnnotation':
      case 'SequenceExpression':
        return !0;
      case 'TSConditionalType':
      case 'ConditionalTypeAnnotation':
        if (!t.experimentalTernaries && !al(s)) break;
        return !0;
      case 'ConditionalExpression': {
        if (!t.experimentalTernaries) {
          let { test: p } = s;
          return De(p) && !Ht(p);
        }
        let { consequent: a, alternate: o } = s;
        return a.type === 'ConditionalExpression' || o.type === 'ConditionalExpression';
      }
      case 'ClassExpression':
        return O(s.decorators);
    }
    if (n) return !1;
    let u = s,
      i = [];
    for (;;)
      if (
        u.type === 'UnaryExpression' ||
        u.type === 'AwaitExpression' ||
        (u.type === 'YieldExpression' && u.argument !== null)
      )
        (u = u.argument), i.push('argument');
      else if (u.type === 'TSNonNullExpression') (u = u.expression), i.push('expression');
      else break;
    return !!(te(u) || e.call(() => Ji(e, t, r), ...i));
  }
  function zc(e) {
    if (Ri(e)) {
      let t = e.left || e.id;
      return (
        t.type === 'ObjectPattern' &&
        t.properties.length > 2 &&
        t.properties.some(r => {
          var n;
          return (
            Ce(r) &&
            (!r.shorthand || ((n = r.value) == null ? void 0 : n.type) === 'AssignmentPattern')
          );
        })
      );
    }
    return !1;
  }
  function zr(e) {
    return e.type === 'AssignmentExpression';
  }
  function Ri(e) {
    return zr(e) || e.type === 'VariableDeclarator';
  }
  function Zc(e) {
    let t = tl(e);
    if (O(t)) {
      let r = e.type === 'TSTypeAliasDeclaration' ? 'constraint' : 'bound';
      if (t.length > 1 && t.some(n => n[r] || n.default)) return !0;
    }
    return !1;
  }
  var el = R(['TSTypeAliasDeclaration', 'TypeAlias']);
  function tl(e) {
    var t;
    if (el(e)) return (t = e.typeParameters) == null ? void 0 : t.params;
  }
  function rl(e) {
    if (e.type !== 'VariableDeclarator') return !1;
    let { typeAnnotation: t } = e.id;
    if (!t || !t.typeAnnotation) return !1;
    let r = vi(t.typeAnnotation);
    return O(r) && r.length > 1 && r.some(n => O(vi(n)) || n.type === 'TSConditionalType');
  }
  function ds(e) {
    var t;
    return (
      e.type === 'VariableDeclarator' &&
      ((t = e.init) == null ? void 0 : t.type) === 'ArrowFunctionExpression'
    );
  }
  var nl = R(['TSTypeReference', 'GenericTypeAnnotation']);
  function vi(e) {
    var t;
    if (nl(e)) return (t = e.typeArguments ?? e.typeParameters) == null ? void 0 : t.params;
  }
  function Ji(e, t, r, n = !1) {
    var i;
    let { node: s } = e,
      u = () => Ji(e, t, r, !0);
    if (s.type === 'ChainExpression' || s.type === 'TSNonNullExpression')
      return e.call(u, 'expression');
    if (L(s)) {
      if ((i = Qr(e, t, r).label) != null && i.memberChain) return !1;
      let o = pe(s);
      return !(o.length === 0 || (o.length === 1 && ir(o[0], t))) || ul(s, r)
        ? !1
        : e.call(u, 'callee');
    }
    return W(s)
      ? e.call(u, 'object')
      : n && (s.type === 'Identifier' || s.type === 'ThisExpression');
  }
  function sl(e, t, r) {
    return Ce(e) ? ((t = Ut(t)), typeof t == 'string' && rt(t) < r.tabWidth + 3) : !1;
  }
  function ul(e, t) {
    let r = il(e);
    if (O(r)) {
      if (r.length > 1) return !0;
      if (r.length === 1) {
        let s = r[0];
        if (we(s) || Nt(s) || s.type === 'TSTypeLiteral' || s.type === 'ObjectTypeAnnotation')
          return !0;
      }
      let n = e.typeParameters ? 'typeParameters' : 'typeArguments';
      if (re(t(n))) return !0;
    }
    return !1;
  }
  function il(e) {
    var t;
    return (t = e.typeParameters ?? e.typeArguments) == null ? void 0 : t.params;
  }
  function al(e) {
    function t(r) {
      switch (r.type) {
        case 'FunctionTypeAnnotation':
        case 'GenericTypeAnnotation':
        case 'TSFunctionType':
          return !!r.typeParameters;
        case 'TSTypeReference':
          return !!(r.typeArguments ?? r.typeParameters);
        default:
          return !1;
      }
    }
    return t(e.checkType) || t(e.extendsType);
  }
  function Ue(e, t, r, n, s) {
    let u = e.node,
      i = z(u),
      a = s ? tt(e, r, t) : '';
    if (i.length === 0)
      return [a, '(', J(e, r, { filter: c => be(r.originalText, k(c)) === ')' }), ')'];
    let { parent: o } = e,
      p = It(o),
      y = xs(u),
      D = [];
    if (
      (Au(e, (c, A) => {
        let d = A === i.length - 1;
        d && u.rest && D.push('...'),
          D.push(t()),
          !d && (D.push(','), p || y ? D.push(' ') : ce(i[A], r) ? D.push(F, F) : D.push(x));
      }),
      n && !pl(e))
    ) {
      if (re(a) || re(D)) throw new Dt();
      return l([cr(a), '(', cr(D), ')']);
    }
    let m = i.every(c => !O(c.decorators));
    return y && m
      ? [a, '(', ...D, ')']
      : p
        ? [a, '(', ...D, ')']
        : (Or(o) ||
              mu(o) ||
              o.type === 'TypeAlias' ||
              o.type === 'UnionTypeAnnotation' ||
              o.type === 'IntersectionTypeAnnotation' ||
              (o.type === 'FunctionTypeAnnotation' && o.returnType === u)) &&
            i.length === 1 &&
            i[0].name === null &&
            u.this !== i[0] &&
            i[0].typeAnnotation &&
            u.typeParameters === null &&
            qt(i[0].typeAnnotation) &&
            !u.rest
          ? r.arrowParens === 'always' || u.type === 'HookTypeAnnotation'
            ? ['(', ...D, ')']
            : D
          : [a, '(', f([E, ...D]), B(!Cu(u) && oe(r, 'all') ? ',' : ''), E, ')'];
  }
  function xs(e) {
    if (!e) return !1;
    let t = z(e);
    if (t.length !== 1) return !1;
    let [r] = t;
    return (
      !T(r) &&
      (r.type === 'ObjectPattern' ||
        r.type === 'ArrayPattern' ||
        (r.type === 'Identifier' &&
          r.typeAnnotation &&
          (r.typeAnnotation.type === 'TypeAnnotation' ||
            r.typeAnnotation.type === 'TSTypeAnnotation') &&
          Re(r.typeAnnotation.typeAnnotation)) ||
        (r.type === 'FunctionTypeParam' && Re(r.typeAnnotation) && r !== e.rest) ||
        (r.type === 'AssignmentPattern' &&
          (r.left.type === 'ObjectPattern' || r.left.type === 'ArrayPattern') &&
          (r.right.type === 'Identifier' ||
            (se(r.right) && r.right.properties.length === 0) ||
            (U(r.right) && r.right.elements.length === 0))))
    );
  }
  function ol(e) {
    let t;
    return (
      e.returnType
        ? ((t = e.returnType), t.typeAnnotation && (t = t.typeAnnotation))
        : e.typeAnnotation && (t = e.typeAnnotation),
      t
    );
  }
  function ot(e, t) {
    var s;
    let r = ol(e);
    if (!r) return !1;
    let n = (s = e.typeParameters) == null ? void 0 : s.params;
    if (n) {
      if (n.length > 1) return !1;
      if (n.length === 1) {
        let u = n[0];
        if (u.constraint || u.default) return !1;
      }
    }
    return z(e).length === 1 && (Re(r) || re(t));
  }
  function pl(e) {
    return e.match(
      t => t.type === 'ArrowFunctionExpression' && t.body.type === 'BlockStatement',
      (t, r) => {
        if (
          t.type === 'CallExpression' &&
          r === 'arguments' &&
          t.arguments.length === 1 &&
          t.callee.type === 'CallExpression'
        ) {
          let n = t.callee.callee;
          return (
            n.type === 'Identifier' ||
            (n.type === 'MemberExpression' &&
              !n.computed &&
              n.object.type === 'Identifier' &&
              n.property.type === 'Identifier')
          );
        }
        return !1;
      },
      (t, r) =>
        (t.type === 'VariableDeclarator' && r === 'init') ||
        (t.type === 'ExportDefaultDeclaration' && r === 'declaration') ||
        (t.type === 'TSExportAssignment' && r === 'expression') ||
        (t.type === 'AssignmentExpression' &&
          r === 'right' &&
          t.left.type === 'MemberExpression' &&
          t.left.object.type === 'Identifier' &&
          t.left.object.name === 'module' &&
          t.left.property.type === 'Identifier' &&
          t.left.property.name === 'exports'),
      t => t.type !== 'VariableDeclaration' || (t.kind === 'const' && t.declarations.length === 1)
    );
  }
  function qi(e) {
    let t = z(e);
    return t.length > 1 && t.some(r => r.type === 'TSParameterProperty');
  }
  var cl = R(['VoidTypeAnnotation', 'TSVoidKeyword', 'NullLiteralTypeAnnotation', 'TSNullKeyword']),
    ll = R(['ObjectTypeAnnotation', 'TSTypeLiteral', 'GenericTypeAnnotation', 'TSTypeReference']);
  function ml(e) {
    let { types: t } = e;
    if (t.some(n => T(n))) return !1;
    let r = t.find(n => ll(n));
    return r ? t.every(n => n === r || cl(n)) : !1;
  }
  function hs(e) {
    return qt(e) || Re(e) ? !0 : we(e) ? ml(e) : !1;
  }
  function Wi(e, t, r) {
    let n = t.semi ? ';' : '',
      { node: s } = e,
      u = [K(e), 'opaque type ', r('id'), r('typeParameters')];
    return (
      s.supertype && u.push(': ', r('supertype')),
      s.impltype && u.push(' = ', r('impltype')),
      u.push(n),
      u
    );
  }
  function Zr(e, t, r) {
    let n = t.semi ? ';' : '',
      { node: s } = e,
      u = [K(e)];
    u.push('type ', r('id'), r('typeParameters'));
    let i = s.type === 'TSTypeAliasDeclaration' ? 'typeAnnotation' : 'right';
    return [ht(e, t, r, u, ' =', i), n];
  }
  function en(e, t, r) {
    let n = !1;
    return l(
      e.map(({ isFirst: s, previous: u, node: i, index: a }) => {
        let o = r();
        if (s) return o;
        let p = Re(i),
          y = Re(u);
        return y && p
          ? [' & ', n ? f(o) : o]
          : !y && !p
            ? t.experimentalOperatorPosition === 'start'
              ? f([x, '& ', o])
              : f([' &', x, o])
            : (a > 1 && (n = !0), [' & ', a > 1 ? f(o) : o]);
      }, 'types')
    );
  }
  function tn(e, t, r) {
    let { node: n } = e,
      { parent: s } = e,
      u =
        s.type !== 'TypeParameterInstantiation' &&
        (!Je(s) || !t.experimentalTernaries) &&
        s.type !== 'TSTypeParameterInstantiation' &&
        s.type !== 'GenericTypeAnnotation' &&
        s.type !== 'TSTypeReference' &&
        s.type !== 'TSTypeAssertion' &&
        s.type !== 'TupleTypeAnnotation' &&
        s.type !== 'TSTupleType' &&
        !(s.type === 'FunctionTypeParam' && !s.name && e.grandparent.this !== s) &&
        !(
          (s.type === 'TypeAlias' ||
            s.type === 'VariableDeclarator' ||
            s.type === 'TSTypeAliasDeclaration') &&
          Le(t.originalText, n)
        ),
      i = hs(n),
      a = e.map(y => {
        let D = r();
        return i || (D = Be(2, D)), ye(y, D, t);
      }, 'types');
    if (i) return b(' | ', a);
    let o = u && !Le(t.originalText, n),
      p = [B([o ? x : '', '| ']), b([x, '| '], a)];
    return ke(e, t)
      ? l([f(p), E])
      : (s.type === 'TupleTypeAnnotation' || s.type === 'TSTupleType') &&
          s[s.type === 'TupleTypeAnnotation' && s.types ? 'types' : 'elementTypes'].length > 1
        ? l([f([B(['(', E]), p]), E, B(')')])
        : l(u ? f(p) : p);
  }
  function yl(e) {
    var n;
    let { node: t, parent: r } = e;
    return (
      t.type === 'FunctionTypeAnnotation' &&
      (Or(r) ||
        !(
          ((r.type === 'ObjectTypeProperty' || r.type === 'ObjectTypeInternalSlot') &&
            !r.variance &&
            !r.optional &&
            Pt(r, t)) ||
          r.type === 'ObjectTypeCallProperty' ||
          ((n = e.getParentNode(2)) == null ? void 0 : n.type) === 'DeclareFunction'
        ))
    );
  }
  function rn(e, t, r) {
    let { node: n } = e,
      s = [Vt(e)];
    (n.type === 'TSConstructorType' || n.type === 'TSConstructSignatureDeclaration') &&
      s.push('new ');
    let u = Ue(e, r, t, !1, !0),
      i = [];
    return (
      n.type === 'FunctionTypeAnnotation'
        ? i.push(yl(e) ? ' => ' : ': ', r('returnType'))
        : i.push(H(e, r, n.returnType ? 'returnType' : 'typeAnnotation')),
      ot(n, i) && (u = l(u)),
      s.push(u, i),
      l(s)
    );
  }
  function nn(e, t, r) {
    return [r('objectType'), $(e), '[', r('indexType'), ']'];
  }
  function sn(e, t, r) {
    return ['infer ', r('typeParameter')];
  }
  function gs(e, t, r) {
    let { node: n } = e;
    return [n.postfix ? '' : r, H(e, t), n.postfix ? r : ''];
  }
  function un(e, t, r) {
    let { node: n } = e;
    return [
      '...',
      ...(n.type === 'TupleTypeSpreadElement' && n.label ? [r('label'), ': '] : []),
      r('typeAnnotation'),
    ];
  }
  function an(e, t, r) {
    let { node: n } = e;
    return [
      n.variance ? r('variance') : '',
      r('label'),
      n.optional ? '?' : '',
      ': ',
      r('elementType'),
    ];
  }
  var Dl = new WeakSet();
  function H(e, t, r = 'typeAnnotation') {
    let {
      node: { [r]: n },
    } = e;
    if (!n) return '';
    let s = !1;
    if (n.type === 'TSTypeAnnotation' || n.type === 'TypeAnnotation') {
      let u = e.call(Ni, r);
      (u === '=>' || (u === ':' && T(n, h.Leading))) && (s = !0), Dl.add(n);
    }
    return s ? [' ', t(r)] : t(r);
  }
  var Ni = e =>
    e.match(
      t => t.type === 'TSTypeAnnotation',
      (t, r) =>
        (r === 'returnType' || r === 'typeAnnotation') &&
        (t.type === 'TSFunctionType' || t.type === 'TSConstructorType')
    )
      ? '=>'
      : e.match(
            t => t.type === 'TSTypeAnnotation',
            (t, r) =>
              r === 'typeAnnotation' &&
              (t.type === 'TSJSDocNullableType' ||
                t.type === 'TSJSDocNonNullableType' ||
                t.type === 'TSTypePredicate')
          ) ||
          e.match(
            t => t.type === 'TypeAnnotation',
            (t, r) => r === 'typeAnnotation' && t.type === 'Identifier',
            (t, r) => r === 'id' && t.type === 'DeclareFunction'
          ) ||
          e.match(
            t => t.type === 'TypeAnnotation',
            (t, r) => r === 'typeAnnotation' && t.type === 'Identifier',
            (t, r) => r === 'id' && t.type === 'DeclareHook'
          ) ||
          e.match(
            t => t.type === 'TypeAnnotation',
            (t, r) => r === 'bound' && t.type === 'TypeParameter' && t.usesExtendsBound
          )
        ? ''
        : ':';
  function on(e, t, r) {
    let n = Ni(e);
    return n ? [n, ' ', r('typeAnnotation')] : r('typeAnnotation');
  }
  function pn(e) {
    return [e('elementType'), '[]'];
  }
  function cn({ node: e }, t) {
    let r = e.type === 'TSTypeQuery' ? 'exprName' : 'argument',
      n = e.type === 'TypeofTypeAnnotation' || e.typeArguments ? 'typeArguments' : 'typeParameters';
    return ['typeof ', t(r), t(n)];
  }
  function ln(e, t) {
    let { node: r } = e;
    return [
      r.type === 'TSTypePredicate' && r.asserts
        ? 'asserts '
        : r.type === 'TypePredicate' && r.kind
          ? `${r.kind} `
          : '',
      t('parameterName'),
      r.typeAnnotation ? [' is ', H(e, t)] : '',
    ];
  }
  function $(e) {
    let { node: t } = e;
    return !t.optional || (t.type === 'Identifier' && t === e.parent.key)
      ? ''
      : L(t) || (W(t) && t.computed) || t.type === 'OptionalIndexedAccessType'
        ? '?.'
        : '?';
  }
  function mn(e) {
    return e.node.definite ||
      e.match(void 0, (t, r) => r === 'id' && t.type === 'VariableDeclarator' && t.definite)
      ? '!'
      : '';
  }
  var fl = new Set([
    'DeclareClass',
    'DeclareComponent',
    'DeclareFunction',
    'DeclareHook',
    'DeclareVariable',
    'DeclareExportDeclaration',
    'DeclareExportAllDeclaration',
    'DeclareOpaqueType',
    'DeclareTypeAlias',
    'DeclareEnum',
    'DeclareInterface',
  ]);
  function K(e) {
    let { node: t } = e;
    return t.declare || (fl.has(t.type) && e.parent.type !== 'DeclareExportDeclaration')
      ? 'declare '
      : '';
  }
  var El = new Set([
    'TSAbstractMethodDefinition',
    'TSAbstractPropertyDefinition',
    'TSAbstractAccessorProperty',
  ]);
  function Vt({ node: e }) {
    return e.abstract || El.has(e.type) ? 'abstract ' : '';
  }
  function tt(e, t, r) {
    let n = e.node;
    return n.typeArguments ? r('typeArguments') : n.typeParameters ? r('typeParameters') : '';
  }
  function Kr(e, t, r) {
    return ['::', r('callee')];
  }
  function ft(e, t, r) {
    return e.type === 'EmptyStatement'
      ? ';'
      : e.type === 'BlockStatement' || r
        ? [' ', t]
        : f([x, t]);
  }
  function yn(e, t) {
    return ['...', t('argument'), H(e, t)];
  }
  function $t(e) {
    return e.accessibility ? e.accessibility + ' ' : '';
  }
  function Fl(e, t, r, n) {
    let { node: s } = e,
      u = s.inexact ? '...' : '';
    return T(s, h.Dangling) ? l([r, u, J(e, t, { indent: !0 }), E, n]) : [r, u, n];
  }
  function Kt(e, t, r) {
    let { node: n } = e,
      s = [],
      u = n.type === 'TupleExpression' ? '#[' : '[',
      i = ']',
      a =
        n.type === 'TupleTypeAnnotation' && n.types
          ? 'types'
          : n.type === 'TSTupleType' || n.type === 'TupleTypeAnnotation'
            ? 'elementTypes'
            : 'elements',
      o = n[a];
    if (o.length === 0) s.push(Fl(e, t, u, i));
    else {
      let p = M(!1, o, -1),
        y = (p == null ? void 0 : p.type) !== 'RestElement' && !n.inexact,
        D = p === null,
        m = Symbol('array'),
        C =
          !t.__inJestEach &&
          o.length > 1 &&
          o.every((d, S, g) => {
            let _ = d == null ? void 0 : d.type;
            if (!U(d) && !se(d)) return !1;
            let v = g[S + 1];
            if (v && _ !== v.type) return !1;
            let j = U(d) ? 'elements' : 'properties';
            return d[j] && d[j].length > 1;
          }),
        c = As(n, t),
        A = y ? (D ? ',' : oe(t) ? (c ? B(',', '', { groupId: m }) : B(',')) : '') : '';
      s.push(
        l([u, f([E, c ? Al(e, t, r, A) : [Cl(e, t, a, n.inexact, r), A], J(e, t)]), E, i], {
          shouldBreak: C,
          id: m,
        })
      );
    }
    return s.push($(e), H(e, r)), s;
  }
  function As(e, t) {
    return (
      U(e) &&
      e.elements.length > 1 &&
      e.elements.every(
        r =>
          r &&
          (Fe(r) || (Rn(r) && !T(r.argument))) &&
          !T(r, h.Trailing | h.Line, n => !Z(t.originalText, q(n), { backwards: !0 }))
      )
    );
  }
  function Gi({ node: e }, { originalText: t }) {
    let r = s => _t(t, vt(t, s)),
      n = s => (t[s] === ',' ? s : n(r(s + 1)));
    return jt(t, n(k(e)));
  }
  function Cl(e, t, r, n, s) {
    let u = [];
    return (
      e.each(({ node: i, isLast: a }) => {
        u.push(i ? l(s()) : ''), (!a || n) && u.push([',', x, i && Gi(e, t) ? E : '']);
      }, r),
      n && u.push('...'),
      u
    );
  }
  function Al(e, t, r, n) {
    let s = [];
    return (
      e.each(({ isLast: u, next: i }) => {
        s.push([r(), u ? n : ',']),
          u || s.push(Gi(e, t) ? [F, F] : T(i, h.Leading | h.Line) ? F : x);
      }, 'elements'),
      qr(s)
    );
  }
  var Tl =
      /^[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC][\$0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/,
    dl = e => Tl.test(e),
    Ui = dl;
  function xl(e) {
    return e.length === 1
      ? e
      : e
          .toLowerCase()
          .replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(?=\d)/u, '$1$2')
          .replace(/^([+-]?[\d.]+)e[+-]?0+$/u, '$1')
          .replace(/^([+-])?\./u, '$10.')
          .replace(/(\.\d+?)0+(?=e|$)/u, '$1')
          .replace(/\.(?=e|$)/u, '');
  }
  var Et = xl;
  var Dn = new WeakMap();
  function Xi(e) {
    return /^(?:\d+|\d+\.\d+)$/u.test(e);
  }
  function Yi(e, t) {
    return t.parser === 'json' ||
      t.parser === 'jsonc' ||
      !te(e.key) ||
      nt(fe(e.key), t).slice(1, -1) !== e.key.value
      ? !1
      : !!(
          (Ui(e.key.value) &&
            !(
              (t.parser === 'babel-ts' && e.type === 'ClassProperty') ||
              (t.parser === 'typescript' && e.type === 'PropertyDefinition')
            )) ||
          (Xi(e.key.value) &&
            String(Number(e.key.value)) === e.key.value &&
            e.type !== 'ImportAttribute' &&
            (t.parser === 'babel' ||
              t.parser === 'acorn' ||
              t.parser === 'espree' ||
              t.parser === 'meriyah' ||
              t.parser === '__babel_estree'))
        );
  }
  function hl(e, t) {
    let { key: r } = e.node;
    return (
      (r.type === 'Identifier' ||
        (Fe(r) &&
          Xi(Et(fe(r))) &&
          String(r.value) === Et(fe(r)) &&
          !(t.parser === 'typescript' || t.parser === 'babel-ts'))) &&
      (t.parser === 'json' ||
        t.parser === 'jsonc' ||
        (t.quoteProps === 'consistent' && Dn.get(e.parent)))
    );
  }
  function Ft(e, t, r) {
    let { node: n } = e;
    if (n.computed) return ['[', r('key'), ']'];
    let { parent: s } = e,
      { key: u } = n;
    if (t.quoteProps === 'consistent' && !Dn.has(s)) {
      let i = e.siblings.some(a => !a.computed && te(a.key) && !Yi(a, t));
      Dn.set(s, i);
    }
    if (hl(e, t)) {
      let i = nt(JSON.stringify(u.type === 'Identifier' ? u.name : u.value.toString()), t);
      return e.call(a => ye(a, i, t), 'key');
    }
    return Yi(n, t) &&
      (t.quoteProps === 'as-needed' || (t.quoteProps === 'consistent' && !Dn.get(s)))
      ? e.call(i => ye(i, /^\d/u.test(u.value) ? Et(u.value) : u.value, t), 'key')
      : r('key');
  }
  function fn(e, t, r) {
    let { node: n } = e;
    return n.shorthand ? r('value') : ht(e, t, r, Ft(e, t, r), ':', 'value');
  }
  var gl = ({ node: e, key: t, parent: r }) =>
    t === 'value' &&
    e.type === 'FunctionExpression' &&
    (r.type === 'ObjectMethod' ||
      r.type === 'ClassMethod' ||
      r.type === 'ClassPrivateMethod' ||
      r.type === 'MethodDefinition' ||
      r.type === 'TSAbstractMethodDefinition' ||
      r.type === 'TSDeclareMethod' ||
      (r.type === 'Property' && kt(r)));
  function En(e, t, r, n) {
    if (gl(e)) return Fn(e, r, t);
    let { node: s } = e,
      u = !1;
    if (
      (s.type === 'FunctionDeclaration' || s.type === 'FunctionExpression') &&
      n != null &&
      n.expandLastArg
    ) {
      let { parent: y } = e;
      L(y) &&
        (pe(y).length > 1 || z(s).every(D => D.type === 'Identifier' && !D.typeAnnotation)) &&
        (u = !0);
    }
    let i = [
        K(e),
        s.async ? 'async ' : '',
        `function${s.generator ? '*' : ''} `,
        s.id ? t('id') : '',
      ],
      a = Ue(e, t, r, u),
      o = Qt(e, t),
      p = ot(s, o);
    return (
      i.push(tt(e, r, t), l([p ? l(a) : a, o]), s.body ? ' ' : '', t('body')),
      r.semi && (s.declare || !s.body) && i.push(';'),
      i
    );
  }
  function Fr(e, t, r) {
    let { node: n } = e,
      { kind: s } = n,
      u = n.value || n,
      i = [];
    return (
      !s || s === 'init' || s === 'method' || s === 'constructor'
        ? u.async && i.push('async ')
        : (Mt.ok(s === 'get' || s === 'set'), i.push(s, ' ')),
      u.generator && i.push('*'),
      i.push(
        Ft(e, t, r),
        n.optional || n.key.optional ? '?' : '',
        n === u ? Fn(e, t, r) : r('value')
      ),
      i
    );
  }
  function Fn(e, t, r) {
    let { node: n } = e,
      s = Ue(e, r, t),
      u = Qt(e, r),
      i = qi(n),
      a = ot(n, u),
      o = [tt(e, t, r), l([i ? l(s, { shouldBreak: !0 }) : a ? l(s) : s, u])];
    return n.body ? o.push(' ', r('body')) : o.push(t.semi ? ';' : ''), o;
  }
  function Sl(e) {
    let t = z(e);
    return (
      t.length === 1 &&
      !e.typeParameters &&
      !T(e, h.Dangling) &&
      t[0].type === 'Identifier' &&
      !t[0].typeAnnotation &&
      !T(t[0]) &&
      !t[0].optional &&
      !e.predicate &&
      !e.returnType
    );
  }
  function Cn(e, t) {
    if (t.arrowParens === 'always') return !1;
    if (t.arrowParens === 'avoid') {
      let { node: r } = e;
      return Sl(r);
    }
    return !1;
  }
  function Qt(e, t) {
    let { node: r } = e,
      s = [H(e, t, 'returnType')];
    return r.predicate && s.push(t('predicate')), s;
  }
  function Hi(e, t, r) {
    let { node: n } = e,
      s = t.semi ? ';' : '',
      u = [];
    if (n.argument) {
      let o = r('argument');
      Bl(t, n.argument)
        ? (o = ['(', f([F, o]), F, ')'])
        : (De(n.argument) ||
            n.argument.type === 'SequenceExpression' ||
            (t.experimentalTernaries &&
              n.argument.type === 'ConditionalExpression' &&
              (n.argument.consequent.type === 'ConditionalExpression' ||
                n.argument.alternate.type === 'ConditionalExpression'))) &&
          (o = l([B('('), f([E, o]), E, B(')')])),
        u.push(' ', o);
    }
    let i = T(n, h.Dangling),
      a = s && i && T(n, h.Last | h.Line);
    return a && u.push(s), i && u.push(' ', J(e, t)), a || u.push(s), u;
  }
  function Vi(e, t, r) {
    return ['return', Hi(e, t, r)];
  }
  function $i(e, t, r) {
    return ['throw', Hi(e, t, r)];
  }
  function Bl(e, t) {
    if (Le(e.originalText, t) || (T(t, h.Leading, r => de(e.originalText, q(r), k(r))) && !X(t)))
      return !0;
    if (Jt(t)) {
      let r = t,
        n;
      for (; (n = pu(r)); ) if (((r = n), Le(e.originalText, r))) return !0;
    }
    return !1;
  }
  var Ss = new WeakMap();
  function Ki(e) {
    return (
      Ss.has(e) ||
        Ss.set(e, e.type === 'ConditionalExpression' && !ae(e, t => t.type === 'ObjectExpression')),
      Ss.get(e)
    );
  }
  var Qi = e => e.type === 'SequenceExpression';
  function zi(e, t, r, n = {}) {
    let s = [],
      u,
      i = [],
      a = !1,
      o = !n.expandLastArg && e.node.body.type === 'ArrowFunctionExpression',
      p;
    (function S() {
      let { node: g } = e,
        _ = bl(e, t, r, n);
      if (s.length === 0) s.push(_);
      else {
        let { leading: v, trailing: j } = ms(e, t);
        s.push([v, _]), i.unshift(j);
      }
      o &&
        (a ||
          (a =
            (g.returnType && z(g).length > 0) ||
            g.typeParameters ||
            z(g).some(v => v.type !== 'Identifier'))),
        !o || g.body.type !== 'ArrowFunctionExpression'
          ? ((u = r('body', n)), (p = g.body))
          : e.call(S, 'body');
    })();
    let y = !Le(t.originalText, p) && (Qi(p) || Pl(p, u, t) || (!a && Ki(p))),
      D = e.key === 'callee' && mt(e.parent),
      m = Symbol('arrow-chain'),
      C = kl(e, n, { signatureDocs: s, shouldBreak: a }),
      c = !1,
      A = !1,
      d = !1;
    return (
      o &&
        (D || n.assignmentLayout) &&
        ((A = !0),
        (d = !T(e.node, h.Leading & h.Line)),
        (c = n.assignmentLayout === 'chain-tail-arrow-chain' || (D && !y))),
      (u = Il(e, t, n, {
        bodyDoc: u,
        bodyComments: i,
        functionBody: p,
        shouldPutBodyOnSameLine: y,
      })),
      l([
        l(A ? f([d ? E : '', C]) : C, { shouldBreak: c, id: m }),
        ' =>',
        o ? xt(u, { groupId: m }) : l(u),
        o && D ? B(E, '', { groupId: m }) : '',
      ])
    );
  }
  function bl(e, t, r, n) {
    let { node: s } = e,
      u = [];
    if ((s.async && u.push('async '), Cn(e, t))) u.push(r(['params', 0]));
    else {
      let a = n.expandLastArg || n.expandFirstArg,
        o = Qt(e, r);
      if (a) {
        if (re(o)) throw new Dt();
        o = l(cr(o));
      }
      u.push(l([Ue(e, r, t, a, !0), o]));
    }
    let i = J(e, t, {
      filter(a) {
        let o = it(t.originalText, k(a));
        return o !== !1 && t.originalText.slice(o, o + 2) === '=>';
      },
    });
    return i && u.push(' ', i), u;
  }
  function Pl(e, t, r) {
    var n, s;
    return (
      U(e) ||
      se(e) ||
      e.type === 'ArrowFunctionExpression' ||
      e.type === 'DoExpression' ||
      e.type === 'BlockStatement' ||
      X(e) ||
      (((n = t.label) == null ? void 0 : n.hug) !== !1 &&
        (((s = t.label) == null ? void 0 : s.embed) || _r(e, r.originalText)))
    );
  }
  function kl(e, t, { signatureDocs: r, shouldBreak: n }) {
    if (r.length === 1) return r[0];
    let { parent: s, key: u } = e;
    return (u !== 'callee' && mt(s)) || De(s)
      ? l([r[0], ' =>', f([x, b([' =>', x], r.slice(1))])], { shouldBreak: n })
      : (u === 'callee' && mt(s)) || t.assignmentLayout
        ? l(b([' =>', x], r), { shouldBreak: n })
        : l(f(b([' =>', x], r)), { shouldBreak: n });
  }
  function Il(
    e,
    t,
    r,
    { bodyDoc: n, bodyComments: s, functionBody: u, shouldPutBodyOnSameLine: i }
  ) {
    let { node: a, parent: o } = e,
      p = r.expandLastArg && oe(t, 'all') ? B(',') : '',
      y = (r.expandLastArg || o.type === 'JSXExpressionContainer') && !T(a) ? E : '';
    return i && Ki(u)
      ? [' ', l([B('', '('), f([E, n]), B('', ')'), p, y]), s]
      : (Qi(u) && (n = l(['(', f([E, n]), E, ')'])), i ? [' ', n, s] : [f([x, n, s]), p, y]);
  }
  var Ll = (e, t, r) => {
      if (!(e && t == null)) {
        if (t.findLast) return t.findLast(r);
        for (let n = t.length - 1; n >= 0; n--) {
          let s = t[n];
          if (r(s, n, t)) return s;
        }
      }
    },
    Zi = Ll;
  function Cr(e, t, r, n) {
    let { node: s } = e,
      u = [],
      i = Zi(!1, s[n], a => a.type !== 'EmptyStatement');
    return (
      e.each(({ node: a }) => {
        a.type !== 'EmptyStatement' && (u.push(r()), a !== i && (u.push(F), ce(a, t) && u.push(F)));
      }, n),
      u
    );
  }
  function An(e, t, r) {
    let n = wl(e, t, r),
      { node: s, parent: u } = e;
    if (s.type === 'Program' && (u == null ? void 0 : u.type) !== 'ModuleExpression')
      return n ? [n, F] : '';
    let i = [];
    if ((s.type === 'StaticBlock' && i.push('static '), i.push('{'), n)) i.push(f([F, n]), F);
    else {
      let a = e.grandparent;
      u.type === 'ArrowFunctionExpression' ||
        u.type === 'FunctionExpression' ||
        u.type === 'FunctionDeclaration' ||
        u.type === 'ComponentDeclaration' ||
        u.type === 'HookDeclaration' ||
        u.type === 'ObjectMethod' ||
        u.type === 'ClassMethod' ||
        u.type === 'ClassPrivateMethod' ||
        u.type === 'ForStatement' ||
        u.type === 'WhileStatement' ||
        u.type === 'DoWhileStatement' ||
        u.type === 'DoExpression' ||
        u.type === 'ModuleExpression' ||
        (u.type === 'CatchClause' && !a.finalizer) ||
        u.type === 'TSModuleDeclaration' ||
        s.type === 'StaticBlock' ||
        i.push(F);
    }
    return i.push('}'), i;
  }
  function wl(e, t, r) {
    let { node: n } = e,
      s = O(n.directives),
      u = n.body.some(o => o.type !== 'EmptyStatement'),
      i = T(n, h.Dangling);
    if (!s && !u && !i) return '';
    let a = [];
    return (
      s &&
        (a.push(Cr(e, t, r, 'directives')),
        (u || i) && (a.push(F), ce(M(!1, n.directives, -1), t) && a.push(F))),
      u && a.push(Cr(e, t, r, 'body')),
      i && a.push(J(e, t)),
      a
    );
  }
  function Ol(e) {
    let t = new WeakMap();
    return function (r) {
      return t.has(r) || t.set(r, Symbol(e)), t.get(r);
    };
  }
  var Tn = Ol;
  function _l(e) {
    switch (e) {
      case null:
        return '';
      case 'PlusOptional':
        return '+?';
      case 'MinusOptional':
        return '-?';
      case 'Optional':
        return '?';
    }
  }
  function ea(e, t, r) {
    let { node: n } = e;
    return l([
      n.variance ? r('variance') : '',
      '[',
      f([r('keyTparam'), ' in ', r('sourceType')]),
      ']',
      _l(n.optional),
      ': ',
      r('propType'),
    ]);
  }
  function Bs(e, t) {
    return e === '+' || e === '-' ? e + t : t;
  }
  function ta(e, t, r) {
    let { node: n } = e,
      s = t.objectWrap === 'preserve' && de(t.originalText, q(n), q(n.typeParameter));
    return l(
      [
        '{',
        f([
          t.bracketSpacing ? x : E,
          l([
            r('typeParameter'),
            n.optional ? Bs(n.optional, '?') : '',
            n.typeAnnotation ? ': ' : '',
            r('typeAnnotation'),
          ]),
          t.semi ? B(';') : '',
        ]),
        J(e, t),
        t.bracketSpacing ? x : E,
        '}',
      ],
      { shouldBreak: s }
    );
  }
  var Ar = Tn('typeParameters');
  function vl(e, t, r) {
    let { node: n } = e;
    return (
      z(n).length === 1 &&
      n.type.startsWith('TS') &&
      !n[r][0].constraint &&
      e.parent.type === 'ArrowFunctionExpression' &&
      !(t.filepath && /\.ts$/u.test(t.filepath))
    );
  }
  function Ot(e, t, r, n) {
    let { node: s } = e;
    if (!s[n]) return '';
    if (!Array.isArray(s[n])) return r(n);
    let u = It(e.grandparent),
      i = e.match(
        p => !(p[n].length === 1 && Re(p[n][0])),
        void 0,
        (p, y) => y === 'typeAnnotation',
        p => p.type === 'Identifier',
        ds
      );
    if (
      s[n].length === 0 ||
      (!i &&
        (u || (s[n].length === 1 && (s[n][0].type === 'NullableTypeAnnotation' || hs(s[n][0])))))
    )
      return ['<', b(', ', e.map(r, n)), jl(e, t), '>'];
    let o =
      s.type === 'TSTypeParameterInstantiation' ? '' : vl(e, t, n) ? ',' : oe(t) ? B(',') : '';
    return l(['<', f([E, b([',', x], e.map(r, n))]), o, E, '>'], { id: Ar(s) });
  }
  function jl(e, t) {
    let { node: r } = e;
    if (!T(r, h.Dangling)) return '';
    let n = !T(r, h.Line),
      s = J(e, t, { indent: !n });
    return n ? s : [s, F];
  }
  function dn(e, t, r) {
    let { node: n, parent: s } = e,
      u = [n.const ? 'const ' : ''],
      i = n.type === 'TSTypeParameter' ? r('name') : n.name;
    if (s.type === 'TSMappedType')
      return (
        s.readonly && u.push(Bs(s.readonly, 'readonly'), ' '),
        u.push('[', i),
        n.constraint && u.push(' in ', r('constraint')),
        s.nameType &&
          u.push(
            ' as ',
            e.callParent(() => r('nameType'))
          ),
        u.push(']'),
        u
      );
    if (
      (n.variance && u.push(r('variance')),
      n.in && u.push('in '),
      n.out && u.push('out '),
      u.push(i),
      n.bound && (n.usesExtendsBound && u.push(' extends '), u.push(H(e, r, 'bound'))),
      n.constraint)
    ) {
      let a = Symbol('constraint');
      u.push(' extends', l(f(x), { id: a }), je, xt(r('constraint'), { groupId: a }));
    }
    return n.default && u.push(' = ', r('default')), l(u);
  }
  var ra = R([
    'ClassProperty',
    'PropertyDefinition',
    'ClassPrivateProperty',
    'ClassAccessorProperty',
    'AccessorProperty',
    'TSAbstractPropertyDefinition',
    'TSAbstractAccessorProperty',
  ]);
  function xn(e, t, r) {
    let { node: n } = e,
      s = [K(e), Vt(e), 'class'],
      u =
        T(n.id, h.Trailing) ||
        T(n.typeParameters, h.Trailing) ||
        T(n.superClass) ||
        O(n.extends) ||
        O(n.mixins) ||
        O(n.implements),
      i = [],
      a = [];
    if ((n.id && i.push(' ', r('id')), i.push(r('typeParameters')), n.superClass)) {
      let y = [Rl(e, t, r), r(n.superTypeArguments ? 'superTypeArguments' : 'superTypeParameters')],
        D = e.call(m => ['extends ', ye(m, y, t)], 'superClass');
      u ? a.push(x, l(D)) : a.push(' ', D);
    } else a.push(bs(e, t, r, 'extends'));
    a.push(bs(e, t, r, 'mixins'), bs(e, t, r, 'implements'));
    let o;
    if (u) {
      let y;
      ua(n) ? (y = [...i, f(a)]) : (y = f([...i, a])), (o = na(n)), s.push(l(y, { id: o }));
    } else s.push(...i, ...a);
    let p = n.body;
    return u && O(p.body) ? s.push(B(F, ' ', { groupId: o })) : s.push(' '), s.push(r('body')), s;
  }
  var na = Tn('heritageGroup');
  function sa(e) {
    return B(F, '', { groupId: na(e) });
  }
  function Ml(e) {
    return (
      ['extends', 'mixins', 'implements'].reduce(
        (t, r) => t + (Array.isArray(e[r]) ? e[r].length : 0),
        e.superClass ? 1 : 0
      ) > 1
    );
  }
  function ua(e) {
    return e.typeParameters && !T(e.typeParameters, h.Trailing | h.Line) && !Ml(e);
  }
  function bs(e, t, r, n) {
    let { node: s } = e;
    if (!O(s[n])) return '';
    let u = J(e, t, { marker: n });
    return [
      ua(s) ? B(' ', x, { groupId: Ar(s.typeParameters) }) : x,
      u,
      u && F,
      n,
      l(f([x, b([',', x], e.map(r, n))])),
    ];
  }
  function Rl(e, t, r) {
    let n = r('superClass'),
      { parent: s } = e;
    return s.type === 'AssignmentExpression' ? l(B(['(', f([E, n]), E, ')'], n)) : n;
  }
  function hn(e, t, r) {
    let { node: n } = e,
      s = [];
    return (
      O(n.decorators) && s.push(Cs(e, t, r)),
      s.push($t(n)),
      n.static && s.push('static '),
      s.push(Vt(e)),
      n.override && s.push('override '),
      s.push(Fr(e, t, r)),
      s
    );
  }
  function gn(e, t, r) {
    let { node: n } = e,
      s = [],
      u = t.semi ? ';' : '';
    O(n.decorators) && s.push(Cs(e, t, r)),
      s.push(K(e), $t(n)),
      n.static && s.push('static '),
      s.push(Vt(e)),
      n.override && s.push('override '),
      n.readonly && s.push('readonly '),
      n.variance && s.push(r('variance')),
      (n.type === 'ClassAccessorProperty' ||
        n.type === 'AccessorProperty' ||
        n.type === 'TSAbstractAccessorProperty') &&
        s.push('accessor '),
      s.push(Ft(e, t, r), $(e), mn(e), H(e, r));
    let i = n.type === 'TSAbstractPropertyDefinition' || n.type === 'TSAbstractAccessorProperty';
    return [ht(e, t, r, s, ' =', i ? void 0 : 'value'), u];
  }
  function ia(e, t, r) {
    let { node: n } = e,
      s = [];
    return (
      e.each(({ node: u, next: i, isLast: a }) => {
        s.push(r()),
          !t.semi && ra(u) && Jl(u, i) && s.push(';'),
          a || (s.push(F), ce(u, t) && s.push(F));
      }, 'body'),
      T(n, h.Dangling) && s.push(J(e, t)),
      ['{', s.length > 0 ? [f([F, s]), F] : '', '}']
    );
  }
  function Jl(e, t) {
    var s;
    let { type: r, name: n } = e.key;
    if (
      !e.computed &&
      r === 'Identifier' &&
      (n === 'static' || n === 'get' || n === 'set') &&
      !e.value &&
      !e.typeAnnotation
    )
      return !0;
    if (!t || t.static || t.accessibility || t.readonly) return !1;
    if (!t.computed) {
      let u = (s = t.key) == null ? void 0 : s.name;
      if (u === 'in' || u === 'instanceof') return !0;
    }
    if (ra(t) && t.variance && !t.static && !t.declare) return !0;
    switch (t.type) {
      case 'ClassProperty':
      case 'PropertyDefinition':
      case 'TSAbstractPropertyDefinition':
        return t.computed;
      case 'MethodDefinition':
      case 'TSAbstractMethodDefinition':
      case 'ClassMethod':
      case 'ClassPrivateMethod': {
        if ((t.value ? t.value.async : t.async) || t.kind === 'get' || t.kind === 'set') return !1;
        let i = t.value ? t.value.generator : t.generator;
        return !!(t.computed || i);
      }
      case 'TSIndexSignature':
        return !0;
    }
    return !1;
  }
  var ql = R([
    'TSAsExpression',
    'TSTypeAssertion',
    'TSNonNullExpression',
    'TSInstantiationExpression',
    'TSSatisfiesExpression',
  ]);
  function Ps(e) {
    return ql(e) ? Ps(e.expression) : e;
  }
  var aa = R(['FunctionExpression', 'ArrowFunctionExpression']);
  function oa(e) {
    return (
      e.type === 'MemberExpression' ||
      e.type === 'OptionalMemberExpression' ||
      (e.type === 'Identifier' && e.name !== 'undefined')
    );
  }
  function pa(e, t) {
    if (t.semi || ks(e, t) || Is(e, t)) return !1;
    let { node: r, key: n, parent: s } = e;
    return !!(
      r.type === 'ExpressionStatement' &&
      ((n === 'body' &&
        (s.type === 'Program' ||
          s.type === 'BlockStatement' ||
          s.type === 'StaticBlock' ||
          s.type === 'TSModuleBlock')) ||
        (n === 'consequent' && s.type === 'SwitchCase')) &&
      e.call(() => ca(e, t), 'expression')
    );
  }
  function ca(e, t) {
    let { node: r } = e;
    switch (r.type) {
      case 'ParenthesizedExpression':
      case 'TypeCastExpression':
      case 'ArrayExpression':
      case 'ArrayPattern':
      case 'TemplateLiteral':
      case 'TemplateElement':
      case 'RegExpLiteral':
        return !0;
      case 'ArrowFunctionExpression':
        if (!Cn(e, t)) return !0;
        break;
      case 'UnaryExpression': {
        let { prefix: n, operator: s } = r;
        if (n && (s === '+' || s === '-')) return !0;
        break;
      }
      case 'BindExpression':
        if (!r.object) return !0;
        break;
      case 'Literal':
        if (r.regex) return !0;
        break;
      default:
        if (X(r)) return !0;
    }
    return ke(e, t) ? !0 : Jt(r) ? e.call(() => ca(e, t), ...Lr(r)) : !1;
  }
  function ks({ node: e, parent: t }, r) {
    return (
      (r.parentParser === 'markdown' || r.parentParser === 'mdx') &&
      e.type === 'ExpressionStatement' &&
      X(e.expression) &&
      t.type === 'Program' &&
      t.body.length === 1
    );
  }
  function Is({ node: e, parent: t }, r) {
    return (
      (r.parser === '__vue_event_binding' || r.parser === '__vue_ts_event_binding') &&
      e.type === 'ExpressionStatement' &&
      t.type === 'Program' &&
      t.body.length === 1
    );
  }
  function la(e, t, r) {
    let n = [r('expression')];
    if (Is(e, t)) {
      let s = Ps(e.node.expression);
      (aa(s) || oa(s)) && n.push(';');
    } else ks(e, t) || (t.semi && n.push(';'));
    return n;
  }
  function ma(e, t, r) {
    if (t.__isVueBindings || t.__isVueForBindingLeft) {
      let n = e.map(r, 'program', 'body', 0, 'params');
      if (n.length === 1) return n[0];
      let s = b([',', x], n);
      return t.__isVueForBindingLeft ? ['(', f([E, l(s)]), E, ')'] : s;
    }
    if (t.__isEmbeddedTypescriptGenericParameters) {
      let n = e.map(r, 'program', 'body', 0, 'typeParameters', 'params');
      return b([',', x], n);
    }
  }
  function fa(e, t) {
    let { node: r } = e;
    switch (r.type) {
      case 'RegExpLiteral':
        return ya(r);
      case 'BigIntLiteral':
        return Sn(r.extra.raw);
      case 'NumericLiteral':
        return Et(r.extra.raw);
      case 'StringLiteral':
        return ve(nt(r.extra.raw, t));
      case 'NullLiteral':
        return 'null';
      case 'BooleanLiteral':
        return String(r.value);
      case 'DirectiveLiteral':
        return Da(r.extra.raw, t);
      case 'Literal': {
        if (r.regex) return ya(r.regex);
        if (r.bigint) return Sn(r.raw);
        let { value: n } = r;
        return typeof n == 'number'
          ? Et(r.raw)
          : typeof n == 'string'
            ? Wl(e)
              ? Da(r.raw, t)
              : ve(nt(r.raw, t))
            : String(n);
      }
    }
  }
  function Wl(e) {
    if (e.key !== 'expression') return;
    let { parent: t } = e;
    return t.type === 'ExpressionStatement' && t.directive;
  }
  function Sn(e) {
    return e.toLowerCase();
  }
  function ya({ pattern: e, flags: t }) {
    return (t = [...t].sort().join('')), `/${e}/${t}`;
  }
  function Da(e, t) {
    let r = e.slice(1, -1);
    if (r.includes('"') || r.includes("'")) return e;
    let n = t.singleQuote ? "'" : '"';
    return n + r + n;
  }
  function Nl(e, t, r) {
    let n = e.originalText.slice(t, r);
    for (let s of e[Symbol.for('comments')]) {
      let u = q(s);
      if (u > r) break;
      let i = k(s);
      if (i < t) continue;
      let a = i - u;
      n = n.slice(0, u - t) + ' '.repeat(a) + n.slice(i - t);
    }
    return n;
  }
  var Ls = Nl;
  function Ea(e, t, r) {
    let { node: n } = e;
    return [
      'import',
      n.phase ? ` ${n.phase}` : '',
      Os(n),
      Aa(e, t, r),
      Ca(e, t, r),
      da(e, t, r),
      t.semi ? ';' : '',
    ];
  }
  var Fa = e =>
    e.type === 'ExportDefaultDeclaration' || (e.type === 'DeclareExportDeclaration' && e.default);
  function Bn(e, t, r) {
    let { node: n } = e,
      s = [Si(e, t, r), K(e), 'export', Fa(n) ? ' default' : ''],
      { declaration: u, exported: i } = n;
    return (
      T(n, h.Dangling) && (s.push(' ', J(e, t)), vr(n) && s.push(F)),
      u
        ? s.push(' ', r('declaration'))
        : (s.push(Yl(n)),
          n.type === 'ExportAllDeclaration' || n.type === 'DeclareExportAllDeclaration'
            ? (s.push(' *'), i && s.push(' as ', r('exported')))
            : s.push(Aa(e, t, r)),
          s.push(Ca(e, t, r), da(e, t, r))),
      s.push(Ul(n, t)),
      s
    );
  }
  var Gl = R([
    'ClassDeclaration',
    'ComponentDeclaration',
    'FunctionDeclaration',
    'TSInterfaceDeclaration',
    'DeclareClass',
    'DeclareComponent',
    'DeclareFunction',
    'DeclareHook',
    'HookDeclaration',
    'TSDeclareFunction',
    'EnumDeclaration',
  ]);
  function Ul(e, t) {
    return t.semi && (!e.declaration || (Fa(e) && !Gl(e.declaration))) ? ';' : '';
  }
  function ws(e, t = !0) {
    return e && e !== 'value' ? `${t ? ' ' : ''}${e}${t ? '' : ' '}` : '';
  }
  function Os(e, t) {
    return ws(e.importKind, t);
  }
  function Yl(e) {
    return ws(e.exportKind);
  }
  function Ca(e, t, r) {
    let { node: n } = e;
    if (!n.source) return '';
    let s = [];
    return Ta(n, t) && s.push(' from'), s.push(' ', r('source')), s;
  }
  function Aa(e, t, r) {
    let { node: n } = e;
    if (!Ta(n, t)) return '';
    let s = [' '];
    if (O(n.specifiers)) {
      let u = [],
        i = [];
      e.each(() => {
        let a = e.node.type;
        if (
          a === 'ExportNamespaceSpecifier' ||
          a === 'ExportDefaultSpecifier' ||
          a === 'ImportNamespaceSpecifier' ||
          a === 'ImportDefaultSpecifier'
        )
          u.push(r());
        else if (a === 'ExportSpecifier' || a === 'ImportSpecifier') i.push(r());
        else throw new Ne(n, 'specifier');
      }, 'specifiers'),
        s.push(b(', ', u)),
        i.length > 0 &&
          (u.length > 0 && s.push(', '),
          i.length > 1 || u.length > 0 || n.specifiers.some(o => T(o))
            ? s.push(
                l([
                  '{',
                  f([t.bracketSpacing ? x : E, b([',', x], i)]),
                  B(oe(t) ? ',' : ''),
                  t.bracketSpacing ? x : E,
                  '}',
                ])
              )
            : s.push(['{', t.bracketSpacing ? ' ' : '', ...i, t.bracketSpacing ? ' ' : '', '}']));
    } else s.push('{}');
    return s;
  }
  function Ta(e, t) {
    return e.type !== 'ImportDeclaration' || O(e.specifiers) || e.importKind === 'type'
      ? !0
      : Ls(t, q(e), q(e.source)).trimEnd().endsWith('from');
  }
  function Xl(e, t) {
    var n, s;
    if ((n = e.extra) != null && n.deprecatedAssertSyntax) return 'assert';
    let r = Ls(
      t,
      k(e.source),
      (s = e.attributes) != null && s[0] ? q(e.attributes[0]) : k(e)
    ).trimStart();
    return r.startsWith('assert')
      ? 'assert'
      : r.startsWith('with') || O(e.attributes)
        ? 'with'
        : void 0;
  }
  function da(e, t, r) {
    let { node: n } = e;
    if (!n.source) return '';
    let s = Xl(n, t);
    if (!s) return '';
    let u = [` ${s} {`];
    return (
      O(n.attributes) &&
        (t.bracketSpacing && u.push(' '),
        u.push(b(', ', e.map(r, 'attributes'))),
        t.bracketSpacing && u.push(' ')),
      u.push('}'),
      u
    );
  }
  function xa(e, t, r) {
    let { node: n } = e,
      { type: s } = n,
      u = s.startsWith('Import'),
      i = u ? 'imported' : 'local',
      a = u ? 'local' : 'exported',
      o = n[i],
      p = n[a],
      y = '',
      D = '';
    return (
      s === 'ExportNamespaceSpecifier' || s === 'ImportNamespaceSpecifier'
        ? (y = '*')
        : o && (y = r(i)),
      p && !Hl(n) && (D = r(a)),
      [ws(s === 'ImportSpecifier' ? n.importKind : n.exportKind, !1), y, y && D ? ' as ' : '', D]
    );
  }
  function Hl(e) {
    if (e.type !== 'ImportSpecifier' && e.type !== 'ExportSpecifier') return !1;
    let { local: t, [e.type === 'ImportSpecifier' ? 'imported' : 'exported']: r } = e;
    if (t.type !== r.type || !su(t, r)) return !1;
    if (te(t)) return t.value === r.value && fe(t) === fe(r);
    switch (t.type) {
      case 'Identifier':
        return t.name === r.name;
      default:
        return !1;
    }
  }
  function gt(e, t, r) {
    var j;
    let n = t.semi ? ';' : '',
      { node: s } = e,
      u = s.type === 'ObjectTypeAnnotation',
      i =
        s.type === 'TSEnumDeclaration' ||
        s.type === 'EnumBooleanBody' ||
        s.type === 'EnumNumberBody' ||
        s.type === 'EnumBigIntBody' ||
        s.type === 'EnumStringBody' ||
        s.type === 'EnumSymbolBody',
      a = [
        s.type === 'TSTypeLiteral' || i
          ? 'members'
          : s.type === 'TSInterfaceBody'
            ? 'body'
            : 'properties',
      ];
    u && a.push('indexers', 'callProperties', 'internalSlots');
    let o = a.flatMap(I => e.map(({ node: G }) => ({ node: G, printed: r(), loc: q(G) }), I));
    a.length > 1 && o.sort((I, G) => I.loc - G.loc);
    let { parent: p, key: y } = e,
      D =
        u &&
        y === 'body' &&
        (p.type === 'InterfaceDeclaration' ||
          p.type === 'DeclareInterface' ||
          p.type === 'DeclareClass'),
      m =
        s.type === 'TSInterfaceBody' ||
        i ||
        D ||
        (s.type === 'ObjectPattern' &&
          p.type !== 'FunctionDeclaration' &&
          p.type !== 'FunctionExpression' &&
          p.type !== 'ArrowFunctionExpression' &&
          p.type !== 'ObjectMethod' &&
          p.type !== 'ClassMethod' &&
          p.type !== 'ClassPrivateMethod' &&
          p.type !== 'AssignmentPattern' &&
          p.type !== 'CatchClause' &&
          s.properties.some(
            I => I.value && (I.value.type === 'ObjectPattern' || I.value.type === 'ArrayPattern')
          )) ||
        (s.type !== 'ObjectPattern' &&
          t.objectWrap === 'preserve' &&
          o.length > 0 &&
          de(t.originalText, q(s), o[0].loc)),
      C = D ? ';' : s.type === 'TSInterfaceBody' || s.type === 'TSTypeLiteral' ? B(n, ';') : ',',
      c = s.type === 'RecordExpression' ? '#{' : s.exact ? '{|' : '{',
      A = s.exact ? '|}' : '}',
      d = [],
      S = o.map(I => {
        let G = [...d, l(I.printed)];
        return (
          (d = [C, x]),
          (I.node.type === 'TSPropertySignature' ||
            I.node.type === 'TSMethodSignature' ||
            I.node.type === 'TSConstructSignatureDeclaration' ||
            I.node.type === 'TSCallSignatureDeclaration') &&
            T(I.node, h.PrettierIgnore) &&
            d.shift(),
          ce(I.node, t) && d.push(F),
          G
        );
      });
    if (s.inexact || s.hasUnknownMembers) {
      let I;
      if (T(s, h.Dangling)) {
        let G = T(s, h.Line);
        I = [J(e, t), G || Z(t.originalText, k(M(!1, lt(s), -1))) ? F : x, '...'];
      } else I = ['...'];
      S.push([...d, ...I]);
    }
    let g = (j = M(!1, o, -1)) == null ? void 0 : j.node,
      _ = !(
        s.inexact ||
        s.hasUnknownMembers ||
        (g &&
          (g.type === 'RestElement' ||
            ((g.type === 'TSPropertySignature' ||
              g.type === 'TSCallSignatureDeclaration' ||
              g.type === 'TSMethodSignature' ||
              g.type === 'TSConstructSignatureDeclaration') &&
              T(g, h.PrettierIgnore))))
      ),
      v;
    if (S.length === 0) {
      if (!T(s, h.Dangling)) return [c, A, H(e, r)];
      v = l([c, J(e, t, { indent: !0 }), E, A, $(e), H(e, r)]);
    } else
      v = [
        D && O(s.properties) ? sa(p) : '',
        c,
        f([t.bracketSpacing ? x : E, ...S]),
        B(_ && (C !== ',' || oe(t)) ? C : ''),
        t.bracketSpacing ? x : E,
        A,
        $(e),
        H(e, r),
      ];
    return e.match(I => I.type === 'ObjectPattern' && !O(I.decorators), _s) ||
      (Re(s) &&
        (e.match(
          void 0,
          (I, G) => G === 'typeAnnotation',
          (I, G) => G === 'typeAnnotation',
          _s
        ) ||
          e.match(
            void 0,
            (I, G) => I.type === 'FunctionTypeParam' && G === 'typeAnnotation',
            _s
          ))) ||
      (!m &&
        e.match(
          I => I.type === 'ObjectPattern',
          I => I.type === 'AssignmentExpression' || I.type === 'VariableDeclarator'
        ))
      ? v
      : l(v, { shouldBreak: m });
  }
  function _s(e, t) {
    return (t === 'params' || t === 'parameters' || t === 'this' || t === 'rest') && xs(e);
  }
  function Vl(e) {
    let t = [e];
    for (let r = 0; r < t.length; r++) {
      let n = t[r];
      for (let s of ['test', 'consequent', 'alternate']) {
        let u = n[s];
        if (X(u)) return !0;
        u.type === 'ConditionalExpression' && t.push(u);
      }
    }
    return !1;
  }
  function $l(e, t, r) {
    let { node: n } = e,
      s = n.type === 'ConditionalExpression',
      u = s ? 'alternate' : 'falseType',
      { parent: i } = e,
      a = s ? r('test') : [r('checkType'), ' ', 'extends', ' ', r('extendsType')];
    return i.type === n.type && i[u] === n ? Be(2, a) : a;
  }
  var Kl = new Map([
    ['AssignmentExpression', 'right'],
    ['VariableDeclarator', 'init'],
    ['ReturnStatement', 'argument'],
    ['ThrowStatement', 'argument'],
    ['UnaryExpression', 'argument'],
    ['YieldExpression', 'argument'],
    ['AwaitExpression', 'argument'],
  ]);
  function Ql(e) {
    let { node: t } = e;
    if (t.type !== 'ConditionalExpression') return !1;
    let r,
      n = t;
    for (let s = 0; !r; s++) {
      let u = e.getParentNode(s);
      if (
        (u.type === 'ChainExpression' && u.expression === n) ||
        (L(u) && u.callee === n) ||
        (W(u) && u.object === n) ||
        (u.type === 'TSNonNullExpression' && u.expression === n)
      ) {
        n = u;
        continue;
      }
      (u.type === 'NewExpression' && u.callee === n) || (Ae(u) && u.expression === n)
        ? ((r = e.getParentNode(s + 1)), (n = u))
        : (r = u);
    }
    return n === t ? !1 : r[Kl.get(r.type)] === n;
  }
  function ha(e, t, r) {
    let { node: n } = e,
      s = n.type === 'ConditionalExpression',
      u = s ? 'consequent' : 'trueType',
      i = s ? 'alternate' : 'falseType',
      a = s ? ['test'] : ['checkType', 'extendsType'],
      o = n[u],
      p = n[i],
      y = [],
      D = !1,
      { parent: m } = e,
      C = m.type === n.type && a.some(N => m[N] === n),
      c = m.type === n.type && !C,
      A,
      d,
      S = 0;
    do (d = A || n), (A = e.getParentNode(S)), S++;
    while (A && A.type === n.type && a.every(N => A[N] !== d));
    let g = A || m,
      _ = d;
    if (s && (X(n[a[0]]) || X(o) || X(p) || Vl(_))) {
      (D = !0), (c = !0);
      let N = Q => [B('('), f([E, Q]), E, B(')')],
        ue = Q =>
          Q.type === 'NullLiteral' ||
          (Q.type === 'Literal' && Q.value === null) ||
          (Q.type === 'Identifier' && Q.name === 'undefined');
      y.push(' ? ', ue(o) ? r(u) : N(r(u)), ' : ', p.type === n.type || ue(p) ? r(i) : N(r(i)));
    } else {
      let N = Q => (t.useTabs ? f(r(Q)) : Be(2, r(Q))),
        ue = [
          x,
          '? ',
          o.type === n.type ? B('', '(') : '',
          N(u),
          o.type === n.type ? B('', ')') : '',
          x,
          ': ',
          N(i),
        ];
      y.push(
        m.type !== n.type || m[i] === n || C
          ? ue
          : t.useTabs
            ? Jr(f(ue))
            : Be(Math.max(0, t.tabWidth - 2), ue)
      );
    }
    let v = [u, i, ...a].some(N => T(n[N], ue => ee(ue) && de(t.originalText, q(ue), k(ue)))),
      j = N => (m === g ? l(N, { shouldBreak: v }) : v ? [N, Ee] : N),
      I = !D && (W(m) || (m.type === 'NGPipeExpression' && m.left === n)) && !m.computed,
      G = Ql(e),
      P = j([$l(e, t, r), c ? y : f(y), s && I && !G ? E : '']);
    return C || G ? l([f([E, P]), E]) : P;
  }
  function zl(e, t) {
    return (W(t) || (t.type === 'NGPipeExpression' && t.left === e)) && !t.computed;
  }
  function Zl(e, t, r, n) {
    return [...e.map(u => lt(u)), lt(t), lt(r)]
      .flat()
      .some(u => ee(u) && de(n.originalText, q(u), k(u)));
  }
  var em = new Map([
    ['AssignmentExpression', 'right'],
    ['VariableDeclarator', 'init'],
    ['ReturnStatement', 'argument'],
    ['ThrowStatement', 'argument'],
    ['UnaryExpression', 'argument'],
    ['YieldExpression', 'argument'],
    ['AwaitExpression', 'argument'],
  ]);
  function tm(e) {
    let { node: t } = e;
    if (t.type !== 'ConditionalExpression') return !1;
    let r,
      n = t;
    for (let s = 0; !r; s++) {
      let u = e.getParentNode(s);
      if (
        (u.type === 'ChainExpression' && u.expression === n) ||
        (L(u) && u.callee === n) ||
        (W(u) && u.object === n) ||
        (u.type === 'TSNonNullExpression' && u.expression === n)
      ) {
        n = u;
        continue;
      }
      (u.type === 'NewExpression' && u.callee === n) || (Ae(u) && u.expression === n)
        ? ((r = e.getParentNode(s + 1)), (n = u))
        : (r = u);
    }
    return n === t ? !1 : r[em.get(r.type)] === n;
  }
  var vs = e => [B('('), f([E, e]), E, B(')')];
  function zt(e, t, r, n) {
    if (!t.experimentalTernaries) return ha(e, t, r);
    let { node: s } = e,
      u = s.type === 'ConditionalExpression',
      i = Je(s),
      a = u ? 'consequent' : 'trueType',
      o = u ? 'alternate' : 'falseType',
      p = u ? ['test'] : ['checkType', 'extendsType'],
      y = s[a],
      D = s[o],
      m = p.map(Ye => s[Ye]),
      { parent: C } = e,
      c = C.type === s.type,
      A = c && p.some(Ye => C[Ye] === s),
      d = c && C[o] === s,
      S = y.type === s.type,
      g = D.type === s.type,
      _ = g || d,
      v = t.tabWidth > 2 || t.useTabs,
      j,
      I,
      G = 0;
    do (I = j || s), (j = e.getParentNode(G)), G++;
    while (j && j.type === s.type && p.every(Ye => j[Ye] !== I));
    let P = j || C,
      N =
        n &&
        n.assignmentLayout &&
        n.assignmentLayout !== 'break-after-operator' &&
        (C.type === 'AssignmentExpression' ||
          C.type === 'VariableDeclarator' ||
          C.type === 'ClassProperty' ||
          C.type === 'PropertyDefinition' ||
          C.type === 'ClassPrivateProperty' ||
          C.type === 'ObjectProperty' ||
          C.type === 'Property'),
      ue = (C.type === 'ReturnStatement' || C.type === 'ThrowStatement') && !(S || g),
      Q = u && P.type === 'JSXExpressionContainer' && e.grandparent.type !== 'JSXAttribute',
      Bt = tm(e),
      Ct = zl(s, C),
      w = i && ke(e, t),
      ne = v ? (t.useTabs ? '	' : ' '.repeat(t.tabWidth - 1)) : '',
      xe = Zl(m, y, D, t) || S || g,
      pt =
        !_ &&
        !c &&
        !i &&
        (Q
          ? y.type === 'NullLiteral' || (y.type === 'Literal' && y.value === null)
          : ir(y, t) && qn(s.test, 3)),
      bt = _ || d || (i && !c) || (c && u && qn(s.test, 1)) || pt,
      Rs = [];
    !S &&
      T(y, h.Dangling) &&
      e.call(Ye => {
        Rs.push(J(Ye, t), F);
      }, 'consequent');
    let er = [];
    T(s.test, h.Dangling) &&
      e.call(Ye => {
        er.push(J(Ye, t));
      }, 'test'),
      !g &&
        T(D, h.Dangling) &&
        e.call(Ye => {
          er.push(J(Ye, t));
        }, 'alternate'),
      T(s, h.Dangling) && er.push(J(e, t));
    let Js = Symbol('test'),
      Ga = Symbol('consequent'),
      Tr = Symbol('test-and-consequent'),
      Ua = u
        ? [vs(r('test')), s.test.type === 'ConditionalExpression' ? Ee : '']
        : [
            r('checkType'),
            ' ',
            'extends',
            ' ',
            Je(s.extendsType) || s.extendsType.type === 'TSMappedType'
              ? r('extendsType')
              : l(vs(r('extendsType'))),
          ],
      qs = l([Ua, ' ?'], { id: Js }),
      Ya = r(a),
      dr = f([S || (Q && (X(y) || c || _)) ? F : x, Rs, Ya]),
      Xa = bt ? l([qs, _ ? dr : B(dr, l(dr, { id: Ga }), { groupId: Js })], { id: Tr }) : [qs, dr],
      Ln = r(o),
      Ws = pt ? B(Ln, Jr(vs(Ln)), { groupId: Tr }) : Ln,
      tr = [
        Xa,
        er.length > 0 ? [f([F, er]), F] : g ? F : pt ? B(x, ' ', { groupId: Tr }) : x,
        ':',
        g ? ' ' : v ? (bt ? B(ne, B(_ || pt ? ' ' : ne, ' '), { groupId: Tr }) : B(ne, ' ')) : ' ',
        g ? Ws : l([f(Ws), Q && !pt ? E : '']),
        Ct && !Bt ? E : '',
        xe ? Ee : '',
      ];
    return N && !xe
      ? l(f([E, l(tr)]))
      : N || ue
        ? l(f(tr))
        : Bt || (i && A)
          ? l([f([E, tr]), w ? E : ''])
          : C === P
            ? l(tr)
            : tr;
  }
  function ga(e, t, r, n) {
    let { node: s } = e;
    if (wr(s)) return fa(e, t);
    let u = t.semi ? ';' : '',
      i = [];
    switch (s.type) {
      case 'JsExpressionRoot':
        return r('node');
      case 'JsonRoot':
        return [r('node'), F];
      case 'File':
        return ma(e, t, r) ?? r('program');
      case 'EmptyStatement':
        return '';
      case 'ExpressionStatement':
        return la(e, t, r);
      case 'ChainExpression':
        return r('expression');
      case 'ParenthesizedExpression':
        return !T(s.expression) && (se(s.expression) || U(s.expression))
          ? ['(', r('expression'), ')']
          : l(['(', f([E, r('expression')]), E, ')']);
      case 'AssignmentExpression':
        return ji(e, t, r);
      case 'VariableDeclarator':
        return Mi(e, t, r);
      case 'BinaryExpression':
      case 'LogicalExpression':
        return $r(e, t, r);
      case 'AssignmentPattern':
        return [r('left'), ' = ', r('right')];
      case 'OptionalMemberExpression':
      case 'MemberExpression':
        return Li(e, t, r);
      case 'MetaProperty':
        return [r('meta'), '.', r('property')];
      case 'BindExpression':
        return s.object && i.push(r('object')), i.push(l(f([E, Kr(e, t, r)]))), i;
      case 'Identifier':
        return [s.name, $(e), mn(e), H(e, r)];
      case 'V8IntrinsicIdentifier':
        return ['%', s.name];
      case 'SpreadElement':
      case 'SpreadElementPattern':
      case 'SpreadPropertyPattern':
      case 'RestElement':
        return yn(e, r);
      case 'FunctionDeclaration':
      case 'FunctionExpression':
        return En(e, r, t, n);
      case 'ArrowFunctionExpression':
        return zi(e, t, r, n);
      case 'YieldExpression':
        return (
          i.push('yield'), s.delegate && i.push('*'), s.argument && i.push(' ', r('argument')), i
        );
      case 'AwaitExpression':
        if ((i.push('await'), s.argument)) {
          i.push(' ', r('argument'));
          let { parent: a } = e;
          if ((L(a) && a.callee === s) || (W(a) && a.object === s)) {
            i = [f([E, ...i]), E];
            let o = e.findAncestor(
              p => p.type === 'AwaitExpression' || p.type === 'BlockStatement'
            );
            if (
              (o == null ? void 0 : o.type) !== 'AwaitExpression' ||
              !ae(o.argument, p => p === s)
            )
              return l(i);
          }
        }
        return i;
      case 'ExportDefaultDeclaration':
      case 'ExportNamedDeclaration':
      case 'ExportAllDeclaration':
        return Bn(e, t, r);
      case 'ImportDeclaration':
        return Ea(e, t, r);
      case 'ImportSpecifier':
      case 'ExportSpecifier':
      case 'ImportNamespaceSpecifier':
      case 'ExportNamespaceSpecifier':
      case 'ImportDefaultSpecifier':
      case 'ExportDefaultSpecifier':
        return xa(e, t, r);
      case 'ImportAttribute':
        return fn(e, t, r);
      case 'Program':
      case 'BlockStatement':
      case 'StaticBlock':
        return An(e, t, r);
      case 'ClassBody':
        return ia(e, t, r);
      case 'ThrowStatement':
        return $i(e, t, r);
      case 'ReturnStatement':
        return Vi(e, t, r);
      case 'NewExpression':
      case 'ImportExpression':
      case 'OptionalCallExpression':
      case 'CallExpression':
        return Qr(e, t, r);
      case 'ObjectExpression':
      case 'ObjectPattern':
      case 'RecordExpression':
        return gt(e, t, r);
      case 'Property':
        return kt(s) ? Fr(e, t, r) : fn(e, t, r);
      case 'ObjectProperty':
        return fn(e, t, r);
      case 'ObjectMethod':
        return Fr(e, t, r);
      case 'Decorator':
        return ['@', r('expression')];
      case 'ArrayExpression':
      case 'ArrayPattern':
      case 'TupleExpression':
        return Kt(e, t, r);
      case 'SequenceExpression': {
        let { parent: a } = e;
        if (a.type === 'ExpressionStatement' || a.type === 'ForStatement') {
          let o = [];
          return (
            e.each(({ isFirst: p }) => {
              p ? o.push(r()) : o.push(',', f([x, r()]));
            }, 'expressions'),
            l(o)
          );
        }
        return l(b([',', x], e.map(r, 'expressions')));
      }
      case 'ThisExpression':
        return 'this';
      case 'Super':
        return 'super';
      case 'Directive':
        return [r('value'), u];
      case 'UnaryExpression':
        return (
          i.push(s.operator),
          /[a-z]$/u.test(s.operator) && i.push(' '),
          T(s.argument) ? i.push(l(['(', f([E, r('argument')]), E, ')'])) : i.push(r('argument')),
          i
        );
      case 'UpdateExpression':
        return [s.prefix ? s.operator : '', r('argument'), s.prefix ? '' : s.operator];
      case 'ConditionalExpression':
        return zt(e, t, r, n);
      case 'VariableDeclaration': {
        let a = e.map(r, 'declarations'),
          o = e.parent,
          p =
            o.type === 'ForStatement' || o.type === 'ForInStatement' || o.type === 'ForOfStatement',
          y = s.declarations.some(m => m.init),
          D;
        return (
          a.length === 1 && !T(s.declarations[0]) ? (D = a[0]) : a.length > 0 && (D = f(a[0])),
          (i = [
            K(e),
            s.kind,
            D ? [' ', D] : '',
            f(a.slice(1).map(m => [',', y && !p ? F : x, m])),
          ]),
          (p && o.body !== s) || i.push(u),
          l(i)
        );
      }
      case 'WithStatement':
        return l(['with (', r('object'), ')', ft(s.body, r('body'))]);
      case 'IfStatement': {
        let a = ft(s.consequent, r('consequent')),
          o = l(['if (', l([f([E, r('test')]), E]), ')', a]);
        if ((i.push(o), s.alternate)) {
          let p = T(s.consequent, h.Trailing | h.Line) || vr(s),
            y = s.consequent.type === 'BlockStatement' && !p;
          i.push(y ? ' ' : F),
            T(s, h.Dangling) && i.push(J(e, t), p ? F : ' '),
            i.push('else', l(ft(s.alternate, r('alternate'), s.alternate.type === 'IfStatement')));
        }
        return i;
      }
      case 'ForStatement': {
        let a = ft(s.body, r('body')),
          o = J(e, t),
          p = o ? [o, E] : '';
        return !s.init && !s.test && !s.update
          ? [p, l(['for (;;)', a])]
          : [
              p,
              l([
                'for (',
                l([f([E, r('init'), ';', x, r('test'), ';', x, r('update')]), E]),
                ')',
                a,
              ]),
            ];
      }
      case 'WhileStatement':
        return l(['while (', l([f([E, r('test')]), E]), ')', ft(s.body, r('body'))]);
      case 'ForInStatement':
        return l(['for (', r('left'), ' in ', r('right'), ')', ft(s.body, r('body'))]);
      case 'ForOfStatement':
        return l([
          'for',
          s.await ? ' await' : '',
          ' (',
          r('left'),
          ' of ',
          r('right'),
          ')',
          ft(s.body, r('body')),
        ]);
      case 'DoWhileStatement': {
        let a = ft(s.body, r('body'));
        return (
          (i = [l(['do', a])]),
          s.body.type === 'BlockStatement' ? i.push(' ') : i.push(F),
          i.push('while (', l([f([E, r('test')]), E]), ')', u),
          i
        );
      }
      case 'DoExpression':
        return [s.async ? 'async ' : '', 'do ', r('body')];
      case 'BreakStatement':
      case 'ContinueStatement':
        return (
          i.push(s.type === 'BreakStatement' ? 'break' : 'continue'),
          s.label && i.push(' ', r('label')),
          i.push(u),
          i
        );
      case 'LabeledStatement':
        return s.body.type === 'EmptyStatement'
          ? [r('label'), ':;']
          : [r('label'), ': ', r('body')];
      case 'TryStatement':
        return [
          'try ',
          r('block'),
          s.handler ? [' ', r('handler')] : '',
          s.finalizer ? [' finally ', r('finalizer')] : '',
        ];
      case 'CatchClause':
        if (s.param) {
          let a = T(
              s.param,
              p =>
                !ee(p) ||
                (p.leading && Z(t.originalText, k(p))) ||
                (p.trailing && Z(t.originalText, q(p), { backwards: !0 }))
            ),
            o = r('param');
          return ['catch ', a ? ['(', f([E, o]), E, ') '] : ['(', o, ') '], r('body')];
        }
        return ['catch ', r('body')];
      case 'SwitchStatement':
        return [
          l(['switch (', f([E, r('discriminant')]), E, ')']),
          ' {',
          s.cases.length > 0
            ? f([
                F,
                b(
                  F,
                  e.map(({ node: a, isLast: o }) => [r(), !o && ce(a, t) ? F : ''], 'cases')
                ),
              ])
            : '',
          F,
          '}',
        ];
      case 'SwitchCase': {
        s.test ? i.push('case ', r('test'), ':') : i.push('default:'),
          T(s, h.Dangling) && i.push(' ', J(e, t));
        let a = s.consequent.filter(o => o.type !== 'EmptyStatement');
        if (a.length > 0) {
          let o = Cr(e, t, r, 'consequent');
          i.push(a.length === 1 && a[0].type === 'BlockStatement' ? [' ', o] : f([F, o]));
        }
        return i;
      }
      case 'DebuggerStatement':
        return ['debugger', u];
      case 'ClassDeclaration':
      case 'ClassExpression':
        return xn(e, t, r);
      case 'ClassMethod':
      case 'ClassPrivateMethod':
      case 'MethodDefinition':
        return hn(e, t, r);
      case 'ClassProperty':
      case 'PropertyDefinition':
      case 'ClassPrivateProperty':
      case 'ClassAccessorProperty':
      case 'AccessorProperty':
        return gn(e, t, r);
      case 'TemplateElement':
        return ve(s.value.raw);
      case 'TemplateLiteral':
        return Gr(e, r, t);
      case 'TaggedTemplateExpression':
        return Hu(e, r);
      case 'PrivateIdentifier':
        return ['#', s.name];
      case 'PrivateName':
        return ['#', r('id')];
      case 'TopicReference':
        return '%';
      case 'ArgumentPlaceholder':
        return '?';
      case 'ModuleExpression':
        return ['module ', r('body')];
      case 'InterpreterDirective':
      default:
        throw new Ne(s, 'ESTree');
    }
  }
  function bn(e, t, r) {
    let { parent: n, node: s, key: u } = e,
      i = [r('expression')];
    switch (s.type) {
      case 'AsConstExpression':
        i.push(' as const');
        break;
      case 'AsExpression':
      case 'TSAsExpression':
        i.push(' as ', r('typeAnnotation'));
        break;
      case 'SatisfiesExpression':
      case 'TSSatisfiesExpression':
        i.push(' satisfies ', r('typeAnnotation'));
        break;
    }
    return (u === 'callee' && L(n)) || (u === 'object' && W(n)) ? l([f([E, ...i]), E]) : i;
  }
  function Sa(e, t, r) {
    let { node: n } = e,
      s = [K(e), 'component'];
    n.id && s.push(' ', r('id')), s.push(r('typeParameters'));
    let u = rm(e, r, t);
    return (
      n.rendersType ? s.push(l([u, ' ', r('rendersType')])) : s.push(l([u])),
      n.body && s.push(' ', r('body')),
      t.semi && n.type === 'DeclareComponent' && s.push(';'),
      s
    );
  }
  function rm(e, t, r) {
    let { node: n } = e,
      s = n.params;
    if ((n.rest && (s = [...s, n.rest]), s.length === 0))
      return ['(', J(e, r, { filter: i => be(r.originalText, k(i)) === ')' }), ')'];
    let u = [];
    return (
      sm(e, (i, a) => {
        let o = a === s.length - 1;
        o && n.rest && u.push('...'),
          u.push(t()),
          !o && (u.push(','), ce(s[a], r) ? u.push(F, F) : u.push(x));
      }),
      ['(', f([E, ...u]), B(oe(r, 'all') && !nm(n, s) ? ',' : ''), E, ')']
    );
  }
  function nm(e, t) {
    var r;
    return e.rest || ((r = M(!1, t, -1)) == null ? void 0 : r.type) === 'RestElement';
  }
  function sm(e, t) {
    let { node: r } = e,
      n = 0,
      s = u => t(u, n++);
    e.each(s, 'params'), r.rest && e.call(s, 'rest');
  }
  function Ba(e, t, r) {
    let { node: n } = e;
    return n.shorthand ? r('local') : [r('name'), ' as ', r('local')];
  }
  function ba(e, t, r) {
    let { node: n } = e,
      s = [];
    return n.name && s.push(r('name'), n.optional ? '?: ' : ': '), s.push(r('typeAnnotation')), s;
  }
  function Pa(e, t, r) {
    return gt(e, r, t);
  }
  function Pn(e, t) {
    let { node: r } = e,
      n = t('id');
    r.computed && (n = ['[', n, ']']);
    let s = '';
    return (
      r.initializer && (s = t('initializer')), r.init && (s = t('init')), s ? [n, ' = ', s] : n
    );
  }
  function ka(e, t, r) {
    let { node: n } = e,
      s;
    if (n.type === 'EnumSymbolBody' || n.explicitType)
      switch (n.type) {
        case 'EnumBooleanBody':
          s = 'boolean';
          break;
        case 'EnumNumberBody':
          s = 'number';
          break;
        case 'EnumBigIntBody':
          s = 'bigint';
          break;
        case 'EnumStringBody':
          s = 'string';
          break;
        case 'EnumSymbolBody':
          s = 'symbol';
          break;
      }
    return [s ? `of ${s} ` : '', Pa(e, t, r)];
  }
  function kn(e, t, r) {
    let { node: n } = e;
    return [
      K(e),
      n.const ? 'const ' : '',
      'enum ',
      t('id'),
      ' ',
      n.type === 'TSEnumDeclaration' ? Pa(e, t, r) : t('body'),
    ];
  }
  function La(e, t, r) {
    let { node: n } = e,
      s = ['hook'];
    n.id && s.push(' ', r('id'));
    let u = Ue(e, r, t, !1, !0),
      i = Qt(e, r),
      a = ot(n, i);
    return s.push(l([a ? l(u) : u, i]), n.body ? ' ' : '', r('body')), s;
  }
  function wa(e, t, r) {
    let { node: n } = e,
      s = [K(e), 'hook'];
    return n.id && s.push(' ', r('id')), t.semi && s.push(';'), s;
  }
  function Ia(e) {
    var r;
    let { node: t } = e;
    return (
      t.type === 'HookTypeAnnotation' &&
      ((r = e.getParentNode(2)) == null ? void 0 : r.type) === 'DeclareHook'
    );
  }
  function Oa(e, t, r) {
    let { node: n } = e,
      s = [];
    s.push(Ia(e) ? '' : 'hook ');
    let u = Ue(e, r, t, !1, !0),
      i = [];
    return (
      i.push(Ia(e) ? ': ' : ' => ', r('returnType')), ot(n, i) && (u = l(u)), s.push(u, i), l(s)
    );
  }
  function In(e, t, r) {
    let { node: n } = e,
      s = [K(e), 'interface'],
      u = [],
      i = [];
    n.type !== 'InterfaceTypeAnnotation' && u.push(' ', r('id'), r('typeParameters'));
    let a = n.typeParameters && !T(n.typeParameters, h.Trailing | h.Line);
    return (
      O(n.extends) &&
        i.push(
          a ? B(' ', x, { groupId: Ar(n.typeParameters) }) : x,
          'extends ',
          (n.extends.length === 1 ? Eu : f)(b([',', x], e.map(r, 'extends')))
        ),
      T(n.id, h.Trailing) || O(n.extends)
        ? a
          ? s.push(l([...u, f(i)]))
          : s.push(l(f([...u, ...i])))
        : s.push(...u, ...i),
      s.push(' ', r('body')),
      l(s)
    );
  }
  function _a(e, t, r) {
    let { node: n } = e;
    if (Pr(n)) return n.type.slice(0, -14).toLowerCase();
    let s = t.semi ? ';' : '';
    switch (n.type) {
      case 'ComponentDeclaration':
      case 'DeclareComponent':
      case 'ComponentTypeAnnotation':
        return Sa(e, t, r);
      case 'ComponentParameter':
        return Ba(e, t, r);
      case 'ComponentTypeParameter':
        return ba(e, t, r);
      case 'HookDeclaration':
        return La(e, t, r);
      case 'DeclareHook':
        return wa(e, t, r);
      case 'HookTypeAnnotation':
        return Oa(e, t, r);
      case 'DeclareClass':
        return xn(e, t, r);
      case 'DeclareFunction':
        return [K(e), 'function ', r('id'), r('predicate'), s];
      case 'DeclareModule':
        return ['declare module ', r('id'), ' ', r('body')];
      case 'DeclareModuleExports':
        return ['declare module.exports', H(e, r), s];
      case 'DeclareNamespace':
        return ['declare namespace ', r('id'), ' ', r('body')];
      case 'DeclareVariable':
        return [K(e), n.kind ?? 'var', ' ', r('id'), s];
      case 'DeclareExportDeclaration':
      case 'DeclareExportAllDeclaration':
        return Bn(e, t, r);
      case 'DeclareOpaqueType':
      case 'OpaqueType':
        return Wi(e, t, r);
      case 'DeclareTypeAlias':
      case 'TypeAlias':
        return Zr(e, t, r);
      case 'IntersectionTypeAnnotation':
        return en(e, t, r);
      case 'UnionTypeAnnotation':
        return tn(e, t, r);
      case 'ConditionalTypeAnnotation':
        return zt(e, t, r);
      case 'InferTypeAnnotation':
        return sn(e, t, r);
      case 'FunctionTypeAnnotation':
        return rn(e, t, r);
      case 'TupleTypeAnnotation':
        return Kt(e, t, r);
      case 'TupleTypeLabeledElement':
        return an(e, t, r);
      case 'TupleTypeSpreadElement':
        return un(e, t, r);
      case 'GenericTypeAnnotation':
        return [r('id'), Ot(e, t, r, 'typeParameters')];
      case 'IndexedAccessType':
      case 'OptionalIndexedAccessType':
        return nn(e, t, r);
      case 'TypeAnnotation':
        return on(e, t, r);
      case 'TypeParameter':
        return dn(e, t, r);
      case 'TypeofTypeAnnotation':
        return cn(e, r);
      case 'ExistsTypeAnnotation':
        return '*';
      case 'ArrayTypeAnnotation':
        return pn(r);
      case 'DeclareEnum':
      case 'EnumDeclaration':
        return kn(e, r, t);
      case 'EnumBooleanBody':
      case 'EnumNumberBody':
      case 'EnumBigIntBody':
      case 'EnumStringBody':
      case 'EnumSymbolBody':
        return ka(e, r, t);
      case 'EnumBooleanMember':
      case 'EnumNumberMember':
      case 'EnumBigIntMember':
      case 'EnumStringMember':
      case 'EnumDefaultedMember':
        return Pn(e, r);
      case 'FunctionTypeParam': {
        let u = n.name ? r('name') : e.parent.this === n ? 'this' : '';
        return [u, $(e), u ? ': ' : '', r('typeAnnotation')];
      }
      case 'DeclareInterface':
      case 'InterfaceDeclaration':
      case 'InterfaceTypeAnnotation':
        return In(e, t, r);
      case 'ClassImplements':
      case 'InterfaceExtends':
        return [r('id'), r('typeParameters')];
      case 'NullableTypeAnnotation':
        return ['?', r('typeAnnotation')];
      case 'Variance': {
        let { kind: u } = n;
        return Mt.ok(u === 'plus' || u === 'minus'), u === 'plus' ? '+' : '-';
      }
      case 'KeyofTypeAnnotation':
        return ['keyof ', r('argument')];
      case 'ObjectTypeCallProperty':
        return [n.static ? 'static ' : '', r('value')];
      case 'ObjectTypeMappedTypeProperty':
        return ea(e, t, r);
      case 'ObjectTypeIndexer':
        return [
          n.static ? 'static ' : '',
          n.variance ? r('variance') : '',
          '[',
          r('id'),
          n.id ? ': ' : '',
          r('key'),
          ']: ',
          r('value'),
        ];
      case 'ObjectTypeProperty': {
        let u = '';
        return (
          n.proto ? (u = 'proto ') : n.static && (u = 'static '),
          [
            u,
            n.kind !== 'init' ? n.kind + ' ' : '',
            n.variance ? r('variance') : '',
            Ft(e, t, r),
            $(e),
            kt(n) ? '' : ': ',
            r('value'),
          ]
        );
      }
      case 'ObjectTypeAnnotation':
        return gt(e, t, r);
      case 'ObjectTypeInternalSlot':
        return [
          n.static ? 'static ' : '',
          '[[',
          r('id'),
          ']]',
          $(e),
          n.method ? '' : ': ',
          r('value'),
        ];
      case 'ObjectTypeSpreadProperty':
        return yn(e, r);
      case 'QualifiedTypeofIdentifier':
      case 'QualifiedTypeIdentifier':
        return [r('qualification'), '.', r('id')];
      case 'NullLiteralTypeAnnotation':
        return 'null';
      case 'BooleanLiteralTypeAnnotation':
        return String(n.value);
      case 'StringLiteralTypeAnnotation':
        return ve(nt(fe(n), t));
      case 'NumberLiteralTypeAnnotation':
        return Et(n.raw ?? n.extra.raw);
      case 'BigIntLiteralTypeAnnotation':
        return Sn(n.raw ?? n.extra.raw);
      case 'TypeCastExpression':
        return ['(', r('expression'), H(e, r), ')'];
      case 'TypePredicate':
        return ln(e, r);
      case 'TypeOperator':
        return [n.operator, ' ', r('typeAnnotation')];
      case 'TypeParameterDeclaration':
      case 'TypeParameterInstantiation':
        return Ot(e, t, r, 'params');
      case 'InferredPredicate':
      case 'DeclaredPredicate':
        return [
          e.key === 'predicate' && e.parent.type !== 'DeclareFunction' && !e.parent.returnType
            ? ': '
            : ' ',
          '%checks',
          ...(n.type === 'DeclaredPredicate' ? ['(', r('value'), ')'] : []),
        ];
      case 'AsExpression':
      case 'AsConstExpression':
      case 'SatisfiesExpression':
        return bn(e, t, r);
    }
  }
  function va(e, t, r) {
    var i;
    let { node: n } = e;
    if (!n.type.startsWith('TS')) return;
    if (kr(n)) return n.type.slice(2, -7).toLowerCase();
    let s = t.semi ? ';' : '',
      u = [];
    switch (n.type) {
      case 'TSThisType':
        return 'this';
      case 'TSTypeAssertion': {
        let a = !(U(n.expression) || se(n.expression)),
          o = l(['<', f([E, r('typeAnnotation')]), E, '>']),
          p = [B('('), f([E, r('expression')]), E, B(')')];
        return a
          ? et([
              [o, r('expression')],
              [o, l(p, { shouldBreak: !0 })],
              [o, r('expression')],
            ])
          : l([o, r('expression')]);
      }
      case 'TSDeclareFunction':
        return En(e, r, t);
      case 'TSExportAssignment':
        return ['export = ', r('expression'), s];
      case 'TSModuleBlock':
        return An(e, t, r);
      case 'TSInterfaceBody':
      case 'TSTypeLiteral':
        return gt(e, t, r);
      case 'TSTypeAliasDeclaration':
        return Zr(e, t, r);
      case 'TSQualifiedName':
        return [r('left'), '.', r('right')];
      case 'TSAbstractMethodDefinition':
      case 'TSDeclareMethod':
        return hn(e, t, r);
      case 'TSAbstractAccessorProperty':
      case 'TSAbstractPropertyDefinition':
        return gn(e, t, r);
      case 'TSInterfaceHeritage':
      case 'TSClassImplements':
      case 'TSExpressionWithTypeArguments':
      case 'TSInstantiationExpression':
        return [r('expression'), r(n.typeArguments ? 'typeArguments' : 'typeParameters')];
      case 'TSTemplateLiteralType':
        return Gr(e, r, t);
      case 'TSNamedTupleMember':
        return an(e, t, r);
      case 'TSRestType':
        return un(e, t, r);
      case 'TSOptionalType':
        return [r('typeAnnotation'), '?'];
      case 'TSInterfaceDeclaration':
        return In(e, t, r);
      case 'TSTypeParameterDeclaration':
      case 'TSTypeParameterInstantiation':
        return Ot(e, t, r, 'params');
      case 'TSTypeParameter':
        return dn(e, t, r);
      case 'TSAsExpression':
      case 'TSSatisfiesExpression':
        return bn(e, t, r);
      case 'TSArrayType':
        return pn(r);
      case 'TSPropertySignature':
        return [n.readonly ? 'readonly ' : '', Ft(e, t, r), $(e), H(e, r)];
      case 'TSParameterProperty':
        return [
          $t(n),
          n.static ? 'static ' : '',
          n.override ? 'override ' : '',
          n.readonly ? 'readonly ' : '',
          r('parameter'),
        ];
      case 'TSTypeQuery':
        return cn(e, r);
      case 'TSIndexSignature': {
        let a = n.parameters.length > 1 ? B(oe(t) ? ',' : '') : '',
          o = l([f([E, b([', ', E], e.map(r, 'parameters'))]), a, E]),
          p = e.parent.type === 'ClassBody' && e.key === 'body';
        return [
          p && n.static ? 'static ' : '',
          n.readonly ? 'readonly ' : '',
          '[',
          n.parameters ? o : '',
          ']',
          H(e, r),
          p ? s : '',
        ];
      }
      case 'TSTypePredicate':
        return ln(e, r);
      case 'TSNonNullExpression':
        return [r('expression'), '!'];
      case 'TSImportType':
        return [
          'import(',
          r('argument'),
          ')',
          n.qualifier ? ['.', r('qualifier')] : '',
          Ot(e, t, r, n.typeArguments ? 'typeArguments' : 'typeParameters'),
        ];
      case 'TSLiteralType':
        return r('literal');
      case 'TSIndexedAccessType':
        return nn(e, t, r);
      case 'TSTypeOperator':
        return [n.operator, ' ', r('typeAnnotation')];
      case 'TSMappedType':
        return ta(e, t, r);
      case 'TSMethodSignature': {
        let a = n.kind && n.kind !== 'method' ? `${n.kind} ` : '';
        u.push($t(n), a, n.computed ? '[' : '', r('key'), n.computed ? ']' : '', $(e));
        let o = Ue(e, r, t, !1, !0),
          p = n.returnType ? 'returnType' : 'typeAnnotation',
          y = n[p],
          D = y ? H(e, r, p) : '',
          m = ot(n, D);
        return u.push(m ? l(o) : o), y && u.push(l(D)), l(u);
      }
      case 'TSNamespaceExportDeclaration':
        return ['export as namespace ', r('id'), t.semi ? ';' : ''];
      case 'TSEnumDeclaration':
        return kn(e, r, t);
      case 'TSEnumMember':
        return Pn(e, r);
      case 'TSImportEqualsDeclaration':
        return [
          n.isExport ? 'export ' : '',
          'import ',
          Os(n, !1),
          r('id'),
          ' = ',
          r('moduleReference'),
          t.semi ? ';' : '',
        ];
      case 'TSExternalModuleReference':
        return ['require(', r('expression'), ')'];
      case 'TSModuleDeclaration': {
        let { parent: a } = e,
          o = a.type === 'TSModuleDeclaration',
          p = ((i = n.body) == null ? void 0 : i.type) === 'TSModuleDeclaration';
        return (
          o ? u.push('.') : (u.push(K(e)), n.kind !== 'global' && u.push(n.kind, ' ')),
          u.push(r('id')),
          p ? u.push(r('body')) : n.body ? u.push(' ', l(r('body'))) : u.push(s),
          u
        );
      }
      case 'TSConditionalType':
        return zt(e, t, r);
      case 'TSInferType':
        return sn(e, t, r);
      case 'TSIntersectionType':
        return en(e, t, r);
      case 'TSUnionType':
        return tn(e, t, r);
      case 'TSFunctionType':
      case 'TSCallSignatureDeclaration':
      case 'TSConstructorType':
      case 'TSConstructSignatureDeclaration':
        return rn(e, t, r);
      case 'TSTupleType':
        return Kt(e, t, r);
      case 'TSTypeReference':
        return [r('typeName'), Ot(e, t, r, n.typeArguments ? 'typeArguments' : 'typeParameters')];
      case 'TSTypeAnnotation':
        return on(e, t, r);
      case 'TSEmptyBodyFunctionExpression':
        return Fn(e, t, r);
      case 'TSJSDocAllType':
        return '*';
      case 'TSJSDocUnknownType':
        return '?';
      case 'TSJSDocNullableType':
        return gs(e, r, '?');
      case 'TSJSDocNonNullableType':
        return gs(e, r, '!');
      case 'TSParenthesizedType':
      default:
        throw new Ne(n, 'TypeScript');
    }
  }
  function um(e, t, r, n) {
    if (Vr(e)) return Di(e, t);
    for (let s of [gi, Ti, _a, va, ga]) {
      let u = s(e, t, r, n);
      if (u !== void 0) return u;
    }
  }
  var im = R([
    'ClassMethod',
    'ClassPrivateMethod',
    'ClassProperty',
    'ClassAccessorProperty',
    'AccessorProperty',
    'TSAbstractAccessorProperty',
    'PropertyDefinition',
    'TSAbstractPropertyDefinition',
    'ClassPrivateProperty',
    'MethodDefinition',
    'TSAbstractMethodDefinition',
    'TSDeclareMethod',
  ]);
  function am(e, t, r, n) {
    var D;
    e.isRoot && ((D = t.__onHtmlBindingRoot) == null || D.call(t, e.node, t));
    let s = um(e, t, r, n);
    if (!s) return '';
    let { node: u } = e;
    if (im(u)) return s;
    let i = O(u.decorators),
      a = Bi(e, t, r),
      o = u.type === 'ClassExpression';
    if (i && !o) return lr(s, m => l([a, m]));
    let p = ke(e, t),
      y = pa(e, t);
    return !a && !p && !y
      ? s
      : lr(s, m => [
          y ? ';' : '',
          p ? '(' : '',
          p && o && i ? [f([x, a, m]), x] : [a, m],
          p ? ')' : '',
        ]);
  }
  var ja = am;
  var om = { avoidAstMutation: !0 };
  var Ma = [
    {
      linguistLanguageId: 174,
      name: 'JSON.stringify',
      type: 'data',
      color: '#292929',
      tmScope: 'source.json',
      aceMode: 'json',
      codemirrorMode: 'javascript',
      codemirrorMimeType: 'application/json',
      aliases: ['geojson', 'jsonl', 'topojson'],
      extensions: ['.importmap'],
      filenames: ['package.json', 'package-lock.json', 'composer.json'],
      parsers: ['json-stringify'],
      vscodeLanguageIds: ['json'],
    },
    {
      linguistLanguageId: 174,
      name: 'JSON',
      type: 'data',
      color: '#292929',
      tmScope: 'source.json',
      aceMode: 'json',
      codemirrorMode: 'javascript',
      codemirrorMimeType: 'application/json',
      aliases: ['geojson', 'jsonl', 'topojson'],
      extensions: [
        '.json',
        '.4DForm',
        '.4DProject',
        '.avsc',
        '.geojson',
        '.gltf',
        '.har',
        '.ice',
        '.JSON-tmLanguage',
        '.mcmeta',
        '.tfstate',
        '.tfstate.backup',
        '.topojson',
        '.webapp',
        '.webmanifest',
        '.yy',
        '.yyp',
      ],
      filenames: [
        '.all-contributorsrc',
        '.arcconfig',
        '.auto-changelog',
        '.c8rc',
        '.htmlhintrc',
        '.imgbotconfig',
        '.nycrc',
        '.tern-config',
        '.tern-project',
        '.watchmanconfig',
        'Pipfile.lock',
        'composer.lock',
        'flake.lock',
        'mcmod.info',
        '.babelrc',
        '.jscsrc',
        '.jshintrc',
        '.jslintrc',
        '.swcrc',
      ],
      parsers: ['json'],
      vscodeLanguageIds: ['json'],
    },
    {
      linguistLanguageId: 423,
      name: 'JSON with Comments',
      type: 'data',
      color: '#292929',
      group: 'JSON',
      tmScope: 'source.js',
      aceMode: 'javascript',
      codemirrorMode: 'javascript',
      codemirrorMimeType: 'text/javascript',
      aliases: ['jsonc'],
      extensions: [
        '.jsonc',
        '.code-snippets',
        '.code-workspace',
        '.sublime-build',
        '.sublime-commands',
        '.sublime-completions',
        '.sublime-keymap',
        '.sublime-macro',
        '.sublime-menu',
        '.sublime-mousemap',
        '.sublime-project',
        '.sublime-settings',
        '.sublime-theme',
        '.sublime-workspace',
        '.sublime_metrics',
        '.sublime_session',
      ],
      filenames: [],
      parsers: ['jsonc'],
      vscodeLanguageIds: ['jsonc'],
    },
    {
      linguistLanguageId: 175,
      name: 'JSON5',
      type: 'data',
      color: '#267CB9',
      extensions: ['.json5'],
      tmScope: 'source.js',
      aceMode: 'javascript',
      codemirrorMode: 'javascript',
      codemirrorMimeType: 'application/json',
      parsers: ['json5'],
      vscodeLanguageIds: ['json5'],
    },
  ];
  var Ms = {};
  xr(Ms, { getVisitorKeys: () => Ja, massageAstNode: () => Wa, print: () => lm });
  var pm = {
      JsonRoot: ['node'],
      ArrayExpression: ['elements'],
      ObjectExpression: ['properties'],
      ObjectProperty: ['key', 'value'],
      UnaryExpression: ['argument'],
      NullLiteral: [],
      BooleanLiteral: [],
      StringLiteral: [],
      NumericLiteral: [],
      Identifier: [],
      TemplateLiteral: ['quasis'],
      TemplateElement: [],
    },
    Ra = pm;
  var cm = Br(Ra),
    Ja = cm;
  function lm(e, t, r) {
    let { node: n } = e;
    switch (n.type) {
      case 'JsonRoot':
        return [r('node'), F];
      case 'ArrayExpression': {
        if (n.elements.length === 0) return '[]';
        let s = e.map(() => (e.node === null ? 'null' : r()), 'elements');
        return ['[', f([F, b([',', F], s)]), F, ']'];
      }
      case 'ObjectExpression':
        return n.properties.length === 0
          ? '{}'
          : ['{', f([F, b([',', F], e.map(r, 'properties'))]), F, '}'];
      case 'ObjectProperty':
        return [r('key'), ': ', r('value')];
      case 'UnaryExpression':
        return [n.operator === '+' ? '' : n.operator, r('argument')];
      case 'NullLiteral':
        return 'null';
      case 'BooleanLiteral':
        return n.value ? 'true' : 'false';
      case 'StringLiteral':
        return JSON.stringify(n.value);
      case 'NumericLiteral':
        return qa(e) ? JSON.stringify(String(n.value)) : JSON.stringify(n.value);
      case 'Identifier':
        return qa(e) ? JSON.stringify(n.name) : n.name;
      case 'TemplateLiteral':
        return r(['quasis', 0]);
      case 'TemplateElement':
        return JSON.stringify(n.value.cooked);
      default:
        throw new Ne(n, 'JSON');
    }
  }
  function qa(e) {
    return e.key === 'key' && e.parent.type === 'ObjectProperty';
  }
  var mm = new Set([
    'start',
    'end',
    'extra',
    'loc',
    'comments',
    'leadingComments',
    'trailingComments',
    'innerComments',
    'errors',
    'range',
    'tokens',
  ]);
  function Wa(e, t) {
    let { type: r } = e;
    if (r === 'ObjectProperty') {
      let { key: n } = e;
      n.type === 'Identifier'
        ? (t.key = { type: 'StringLiteral', value: n.name })
        : n.type === 'NumericLiteral' &&
          (t.key = { type: 'StringLiteral', value: String(n.value) });
      return;
    }
    if (r === 'UnaryExpression' && e.operator === '+') return t.argument;
    if (r === 'ArrayExpression') {
      for (let [n, s] of e.elements.entries())
        s === null && t.elements.splice(n, 0, { type: 'NullLiteral' });
      return;
    }
    if (r === 'TemplateLiteral') return { type: 'StringLiteral', value: e.quasis[0].value.cooked };
  }
  Wa.ignoredProperties = mm;
  var Zt = {
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
  var St = 'JavaScript',
    ym = {
      arrowParens: {
        category: St,
        type: 'choice',
        default: 'always',
        description: 'Include parentheses around a sole arrow function parameter.',
        choices: [
          { value: 'always', description: 'Always include parens. Example: `(x) => x`' },
          { value: 'avoid', description: 'Omit parens when possible. Example: `x => x`' },
        ],
      },
      bracketSameLine: Zt.bracketSameLine,
      objectWrap: Zt.objectWrap,
      bracketSpacing: Zt.bracketSpacing,
      jsxBracketSameLine: {
        category: St,
        type: 'boolean',
        description: 'Put > on the last line instead of at a new line.',
        deprecated: '2.4.0',
      },
      semi: {
        category: St,
        type: 'boolean',
        default: !0,
        description: 'Print semicolons.',
        oppositeDescription:
          'Do not print semicolons, except at the beginning of lines which may need them.',
      },
      experimentalOperatorPosition: {
        category: St,
        type: 'choice',
        default: 'end',
        description: 'Where to print operators when binary expressions wrap lines.',
        choices: [
          { value: 'start', description: 'Print operators at the start of new lines.' },
          { value: 'end', description: 'Print operators at the end of previous lines.' },
        ],
      },
      experimentalTernaries: {
        category: St,
        type: 'boolean',
        default: !1,
        description: 'Use curious ternaries, with the question mark after the condition.',
        oppositeDescription:
          'Default behavior of ternaries; keep question marks on the same line as the consequent.',
      },
      singleQuote: Zt.singleQuote,
      jsxSingleQuote: {
        category: St,
        type: 'boolean',
        default: !1,
        description: 'Use single quotes in JSX.',
      },
      quoteProps: {
        category: St,
        type: 'choice',
        default: 'as-needed',
        description: 'Change when properties in objects are quoted.',
        choices: [
          {
            value: 'as-needed',
            description: 'Only add quotes around object properties where required.',
          },
          {
            value: 'consistent',
            description:
              'If at least one property in an object requires quotes, quote all properties.',
          },
          {
            value: 'preserve',
            description: 'Respect the input use of quotes in object properties.',
          },
        ],
      },
      trailingComma: {
        category: St,
        type: 'choice',
        default: 'all',
        description: 'Print trailing commas wherever possible when multi-line.',
        choices: [
          {
            value: 'all',
            description: 'Trailing commas wherever possible (including function arguments).',
          },
          {
            value: 'es5',
            description: 'Trailing commas where valid in ES5 (objects, arrays, etc.)',
          },
          { value: 'none', description: 'No trailing commas.' },
        ],
      },
      singleAttributePerLine: Zt.singleAttributePerLine,
    },
    Na = ym;
  var Dm = { estree: js, 'estree-json': Ms },
    fm = [...Xs, ...Ma];
  return Qa(Em);
});
