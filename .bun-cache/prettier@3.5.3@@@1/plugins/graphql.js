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
    (t.prettierPlugins = t.prettierPlugins || {}), (t.prettierPlugins.graphql = e());
  }
})(function () {
  'use strict';
  var ce = Object.defineProperty;
  var ft = Object.getOwnPropertyDescriptor;
  var ht = Object.getOwnPropertyNames;
  var dt = Object.prototype.hasOwnProperty;
  var ye = (e, t) => {
      for (var n in t) ce(e, n, { get: t[n], enumerable: !0 });
    },
    mt = (e, t, n, i) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let r of ht(t))
          !dt.call(e, r) &&
            r !== n &&
            ce(e, r, { get: () => t[r], enumerable: !(i = ft(t, r)) || i.enumerable });
      return e;
    };
  var Et = e => mt(ce({}, '__esModule', { value: !0 }), e);
  var fn = {};
  ye(fn, { languages: () => Je, options: () => qe, parsers: () => _e, printers: () => pn });
  var Tt = (e, t, n, i) => {
      if (!(e && t == null))
        return t.replaceAll ? t.replaceAll(n, i) : n.global ? t.replace(n, i) : t.split(n).join(i);
    },
    j = Tt;
  var G = 'indent';
  var $ = 'group';
  var F = 'if-break';
  var C = 'line';
  var J = 'break-parent';
  var ve = () => {},
    L = ve,
    pe = ve;
  function _(e) {
    return L(e), { type: G, contents: e };
  }
  function x(e, t = {}) {
    return (
      L(e),
      pe(t.expandedStates, !0),
      { type: $, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates }
    );
  }
  function I(e, t = '', n = {}) {
    return (
      L(e), t !== '' && L(t), { type: F, breakContents: e, flatContents: t, groupId: n.groupId }
    );
  }
  var xt = { type: J };
  var Ot = { type: C, hard: !0 };
  var k = { type: C },
    p = { type: C, soft: !0 },
    f = [Ot, xt];
  function E(e, t) {
    L(e), pe(t);
    let n = [];
    for (let i = 0; i < t.length; i++) i !== 0 && n.push(e), n.push(t[i]);
    return n;
  }
  function X(e) {
    return (t, n, i) => {
      let r = !!(i != null && i.backwards);
      if (n === !1) return !1;
      let { length: s } = t,
        a = n;
      for (; a >= 0 && a < s; ) {
        let u = t.charAt(a);
        if (e instanceof RegExp) {
          if (!e.test(u)) return a;
        } else if (!e.includes(u)) return a;
        r ? a-- : a++;
      }
      return a === -1 || a === s ? a : !1;
    };
  }
  var qn = X(/\s/u),
    q = X(' 	'),
    be = X(',; 	'),
    Le = X(/[^\n\r]/u);
  function It(e, t, n) {
    let i = !!(n != null && n.backwards);
    if (t === !1) return !1;
    let r = e.charAt(t);
    if (i) {
      if (
        e.charAt(t - 1) === '\r' &&
        r ===
          `
`
      )
        return t - 2;
      if (
        r ===
          `
` ||
        r === '\r' ||
        r === '\u2028' ||
        r === '\u2029'
      )
        return t - 1;
    } else {
      if (
        r === '\r' &&
        e.charAt(t + 1) ===
          `
`
      )
        return t + 2;
      if (
        r ===
          `
` ||
        r === '\r' ||
        r === '\u2028' ||
        r === '\u2029'
      )
        return t + 1;
    }
    return t;
  }
  var Q = It;
  function Dt(e, t, n = {}) {
    let i = q(e, n.backwards ? t - 1 : t, n),
      r = Q(e, i, n);
    return i !== r;
  }
  var Re = Dt;
  function gt(e, t) {
    if (t === !1) return !1;
    if (e.charAt(t) === '/' && e.charAt(t + 1) === '*') {
      for (let n = t + 2; n < e.length; ++n)
        if (e.charAt(n) === '*' && e.charAt(n + 1) === '/') return n + 2;
    }
    return t;
  }
  var Pe = gt;
  function At(e, t) {
    return t === !1 ? !1 : e.charAt(t) === '/' && e.charAt(t + 1) === '/' ? Le(e, t) : t;
  }
  var Fe = At;
  function kt(e, t) {
    let n = null,
      i = t;
    for (; i !== n; ) (n = i), (i = be(e, i)), (i = Pe(e, i)), (i = q(e, i));
    return (i = Fe(e, i)), (i = Q(e, i)), i !== !1 && Re(e, i);
  }
  var we = kt;
  function Ct(e) {
    return Array.isArray(e) && e.length > 0;
  }
  var fe = Ct;
  var he = class extends Error {
      name = 'UnexpectedNodeError';
      constructor(t, n, i = 'type') {
        super(`Unexpected ${n} node ${i}: ${JSON.stringify(t[i])}.`), (this.node = t);
      }
    },
    Be = he;
  var w = null;
  function B(e) {
    if (w !== null && typeof w.property) {
      let t = w;
      return (w = B.prototype = null), t;
    }
    return (w = B.prototype = e ?? Object.create(null)), new B();
  }
  var St = 10;
  for (let e = 0; e <= St; e++) B();
  function de(e) {
    return B(e);
  }
  function vt(e, t = 'type') {
    de(e);
    function n(i) {
      let r = i[t],
        s = e[r];
      if (!Array.isArray(s))
        throw Object.assign(new Error(`Missing visitor keys for '${r}'.`), { node: i });
      return s;
    }
    return n;
  }
  var Ue = vt;
  var H = class {
      constructor(t, n, i) {
        (this.start = t.start),
          (this.end = n.end),
          (this.startToken = t),
          (this.endToken = n),
          (this.source = i);
      }
      get [Symbol.toStringTag]() {
        return 'Location';
      }
      toJSON() {
        return { start: this.start, end: this.end };
      }
    },
    U = class {
      constructor(t, n, i, r, s, a) {
        (this.kind = t),
          (this.start = n),
          (this.end = i),
          (this.line = r),
          (this.column = s),
          (this.value = a),
          (this.prev = null),
          (this.next = null);
      }
      get [Symbol.toStringTag]() {
        return 'Token';
      }
      toJSON() {
        return { kind: this.kind, value: this.value, line: this.line, column: this.column };
      }
    },
    W = {
      Name: [],
      Document: ['definitions'],
      OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
      VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
      Variable: ['name'],
      SelectionSet: ['selections'],
      Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
      Argument: ['name', 'value'],
      FragmentSpread: ['name', 'directives'],
      InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
      FragmentDefinition: [
        'name',
        'variableDefinitions',
        'typeCondition',
        'directives',
        'selectionSet',
      ],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ['values'],
      ObjectValue: ['fields'],
      ObjectField: ['name', 'value'],
      Directive: ['name', 'arguments'],
      NamedType: ['name'],
      ListType: ['type'],
      NonNullType: ['type'],
      SchemaDefinition: ['description', 'directives', 'operationTypes'],
      OperationTypeDefinition: ['type'],
      ScalarTypeDefinition: ['description', 'name', 'directives'],
      ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
      FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
      InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
      InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
      UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
      EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
      EnumValueDefinition: ['description', 'name', 'directives'],
      InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
      DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
      SchemaExtension: ['directives', 'operationTypes'],
      ScalarTypeExtension: ['name', 'directives'],
      ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
      InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
      UnionTypeExtension: ['name', 'directives', 'types'],
      EnumTypeExtension: ['name', 'directives', 'values'],
      InputObjectTypeExtension: ['name', 'directives', 'fields'],
    },
    hr = new Set(Object.keys(W));
  var S;
  (function (e) {
    (e.QUERY = 'query'), (e.MUTATION = 'mutation'), (e.SUBSCRIPTION = 'subscription');
  })(S || (S = {}));
  var bt = Ue(W, 'kind'),
    Ve = bt;
  function K(e) {
    return e.loc.start;
  }
  function z(e) {
    return e.loc.end;
  }
  function Ye(e) {
    return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/u.test(e);
  }
  function Me(e) {
    return (
      `# @format

` + e
    );
  }
  function Lt(e, t, n) {
    let { node: i } = e;
    if (!i.description) return '';
    let r = [n('description')];
    return i.kind === 'InputValueDefinition' && !i.description.block ? r.push(k) : r.push(f), r;
  }
  var g = Lt;
  function Rt(e, t, n) {
    let { node: i } = e;
    switch (i.kind) {
      case 'Document':
        return [...E(f, A(e, t, n, 'definitions')), f];
      case 'OperationDefinition': {
        let r = t.originalText[K(i)] !== '{',
          s = !!i.name;
        return [
          r ? i.operation : '',
          r && s ? [' ', n('name')] : '',
          r && !s && fe(i.variableDefinitions) ? ' ' : '',
          je(e, n),
          y(e, n, i),
          !r && !s ? '' : ' ',
          n('selectionSet'),
        ];
      }
      case 'FragmentDefinition':
        return [
          'fragment ',
          n('name'),
          je(e, n),
          ' on ',
          n('typeCondition'),
          y(e, n, i),
          ' ',
          n('selectionSet'),
        ];
      case 'SelectionSet':
        return ['{', _([f, E(f, A(e, t, n, 'selections'))]), f, '}'];
      case 'Field':
        return x([
          i.alias ? [n('alias'), ': '] : '',
          n('name'),
          i.arguments.length > 0
            ? x(['(', _([p, E([I('', ', '), p], A(e, t, n, 'arguments'))]), p, ')'])
            : '',
          y(e, n, i),
          i.selectionSet ? ' ' : '',
          n('selectionSet'),
        ]);
      case 'Name':
        return i.value;
      case 'StringValue':
        if (i.block) {
          let r = j(!1, i.value, '"""', String.raw`\"""`).split(`
`);
          return (
            r.length === 1 && (r[0] = r[0].trim()),
            r.every(s => s === '') && (r.length = 0),
            E(f, ['"""', ...r, '"""'])
          );
        }
        return [
          '"',
          j(
            !1,
            j(!1, i.value, /["\\]/gu, String.raw`\$&`),
            `
`,
            String.raw`\n`
          ),
          '"',
        ];
      case 'IntValue':
      case 'FloatValue':
      case 'EnumValue':
        return i.value;
      case 'BooleanValue':
        return i.value ? 'true' : 'false';
      case 'NullValue':
        return 'null';
      case 'Variable':
        return ['$', n('name')];
      case 'ListValue':
        return x(['[', _([p, E([I('', ', '), p], e.map(n, 'values'))]), p, ']']);
      case 'ObjectValue': {
        let r = t.bracketSpacing && i.fields.length > 0 ? ' ' : '';
        return x(['{', r, _([p, E([I('', ', '), p], e.map(n, 'fields'))]), p, I('', r), '}']);
      }
      case 'ObjectField':
      case 'Argument':
        return [n('name'), ': ', n('value')];
      case 'Directive':
        return [
          '@',
          n('name'),
          i.arguments.length > 0
            ? x(['(', _([p, E([I('', ', '), p], A(e, t, n, 'arguments'))]), p, ')'])
            : '',
        ];
      case 'NamedType':
        return n('name');
      case 'VariableDefinition':
        return [
          n('variable'),
          ': ',
          n('type'),
          i.defaultValue ? [' = ', n('defaultValue')] : '',
          y(e, n, i),
        ];
      case 'ObjectTypeExtension':
      case 'ObjectTypeDefinition':
      case 'InputObjectTypeExtension':
      case 'InputObjectTypeDefinition':
      case 'InterfaceTypeExtension':
      case 'InterfaceTypeDefinition': {
        let { kind: r } = i,
          s = [];
        return (
          r.endsWith('TypeDefinition') ? s.push(g(e, t, n)) : s.push('extend '),
          r.startsWith('ObjectType')
            ? s.push('type')
            : r.startsWith('InputObjectType')
              ? s.push('input')
              : s.push('interface'),
          s.push(' ', n('name')),
          !r.startsWith('InputObjectType') &&
            i.interfaces.length > 0 &&
            s.push(' implements ', ...wt(e, t, n)),
          s.push(y(e, n, i)),
          i.fields.length > 0 && s.push([' {', _([f, E(f, A(e, t, n, 'fields'))]), f, '}']),
          s
        );
      }
      case 'FieldDefinition':
        return [
          g(e, t, n),
          n('name'),
          i.arguments.length > 0
            ? x(['(', _([p, E([I('', ', '), p], A(e, t, n, 'arguments'))]), p, ')'])
            : '',
          ': ',
          n('type'),
          y(e, n, i),
        ];
      case 'DirectiveDefinition':
        return [
          g(e, t, n),
          'directive ',
          '@',
          n('name'),
          i.arguments.length > 0
            ? x(['(', _([p, E([I('', ', '), p], A(e, t, n, 'arguments'))]), p, ')'])
            : '',
          i.repeatable ? ' repeatable' : '',
          ' on ',
          ...E(' | ', e.map(n, 'locations')),
        ];
      case 'EnumTypeExtension':
      case 'EnumTypeDefinition':
        return [
          g(e, t, n),
          i.kind === 'EnumTypeExtension' ? 'extend ' : '',
          'enum ',
          n('name'),
          y(e, n, i),
          i.values.length > 0 ? [' {', _([f, E(f, A(e, t, n, 'values'))]), f, '}'] : '',
        ];
      case 'EnumValueDefinition':
        return [g(e, t, n), n('name'), y(e, n, i)];
      case 'InputValueDefinition':
        return [
          g(e, t, n),
          n('name'),
          ': ',
          n('type'),
          i.defaultValue ? [' = ', n('defaultValue')] : '',
          y(e, n, i),
        ];
      case 'SchemaExtension':
        return [
          'extend schema',
          y(e, n, i),
          ...(i.operationTypes.length > 0
            ? [' {', _([f, E(f, A(e, t, n, 'operationTypes'))]), f, '}']
            : []),
        ];
      case 'SchemaDefinition':
        return [
          g(e, t, n),
          'schema',
          y(e, n, i),
          ' {',
          i.operationTypes.length > 0 ? _([f, E(f, A(e, t, n, 'operationTypes'))]) : '',
          f,
          '}',
        ];
      case 'OperationTypeDefinition':
        return [i.operation, ': ', n('type')];
      case 'FragmentSpread':
        return ['...', n('name'), y(e, n, i)];
      case 'InlineFragment':
        return [
          '...',
          i.typeCondition ? [' on ', n('typeCondition')] : '',
          y(e, n, i),
          ' ',
          n('selectionSet'),
        ];
      case 'UnionTypeExtension':
      case 'UnionTypeDefinition':
        return x([
          g(e, t, n),
          x([
            i.kind === 'UnionTypeExtension' ? 'extend ' : '',
            'union ',
            n('name'),
            y(e, n, i),
            i.types.length > 0
              ? [' =', I('', ' '), _([I([k, '| ']), E([k, '| '], e.map(n, 'types'))])]
              : '',
          ]),
        ]);
      case 'ScalarTypeExtension':
      case 'ScalarTypeDefinition':
        return [
          g(e, t, n),
          i.kind === 'ScalarTypeExtension' ? 'extend ' : '',
          'scalar ',
          n('name'),
          y(e, n, i),
        ];
      case 'NonNullType':
        return [n('type'), '!'];
      case 'ListType':
        return ['[', n('type'), ']'];
      default:
        throw new Be(i, 'Graphql', 'kind');
    }
  }
  function y(e, t, n) {
    if (n.directives.length === 0) return '';
    let i = E(k, e.map(t, 'directives'));
    return n.kind === 'FragmentDefinition' || n.kind === 'OperationDefinition'
      ? x([k, i])
      : [' ', x(_([p, i]))];
  }
  function A(e, t, n, i) {
    return e.map(({ isLast: r, node: s }) => {
      let a = n();
      return !r && we(t.originalText, z(s)) ? [a, f] : a;
    }, i);
  }
  function Pt(e) {
    return e.kind !== 'Comment';
  }
  function Ft(e) {
    let t = e.node;
    if (t.kind === 'Comment') return '#' + t.value.trimEnd();
    throw new Error('Not a comment: ' + JSON.stringify(t));
  }
  function wt(e, t, n) {
    let { node: i } = e,
      r = [],
      { interfaces: s } = i,
      a = e.map(n, 'interfaces');
    for (let u = 0; u < s.length; u++) {
      let l = s[u];
      r.push(a[u]);
      let T = s[u + 1];
      if (T) {
        let D = t.originalText.slice(l.loc.end, T.loc.start).includes('#');
        r.push(' &', D ? k : ' ');
      }
    }
    return r;
  }
  function je(e, t) {
    let { node: n } = e;
    return fe(n.variableDefinitions)
      ? x(['(', _([p, E([I('', ', '), p], e.map(t, 'variableDefinitions'))]), p, ')'])
      : '';
  }
  function Ge(e, t) {
    e.kind === 'StringValue' &&
      e.block &&
      !e.value.includes(`
`) &&
      (t.value = e.value.trim());
  }
  Ge.ignoredProperties = new Set(['loc', 'comments']);
  function Bt(e) {
    var n;
    let { node: t } = e;
    return (n = t == null ? void 0 : t.comments) == null
      ? void 0
      : n.some(i => i.value.trim() === 'prettier-ignore');
  }
  var Ut = {
      print: Rt,
      massageAstNode: Ge,
      hasPrettierIgnore: Bt,
      insertPragma: Me,
      printComment: Ft,
      canAttachComment: Pt,
      getVisitorKeys: Ve,
    },
    $e = Ut;
  var Je = [
    {
      linguistLanguageId: 139,
      name: 'GraphQL',
      type: 'data',
      color: '#e10098',
      extensions: ['.graphql', '.gql', '.graphqls'],
      tmScope: 'source.graphql',
      aceMode: 'text',
      parsers: ['graphql'],
      vscodeLanguageIds: ['graphql'],
    },
  ];
  var Xe = {
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
  var Vt = { bracketSpacing: Xe.bracketSpacing },
    qe = Vt;
  var _e = {};
  ye(_e, { graphql: () => ln });
  function Qe(e) {
    return typeof e == 'object' && e !== null;
  }
  function He(e, t) {
    if (!!!e) throw new Error(t ?? 'Unexpected invariant triggered.');
  }
  var Yt = /\r\n|[\n\r]/g;
  function V(e, t) {
    let n = 0,
      i = 1;
    for (let r of e.body.matchAll(Yt)) {
      if ((typeof r.index == 'number' || He(!1), r.index >= t)) break;
      (n = r.index + r[0].length), (i += 1);
    }
    return { line: i, column: t + 1 - n };
  }
  function Ke(e) {
    return me(e.source, V(e.source, e.start));
  }
  function me(e, t) {
    let n = e.locationOffset.column - 1,
      i = ''.padStart(n) + e.body,
      r = t.line - 1,
      s = e.locationOffset.line - 1,
      a = t.line + s,
      u = t.line === 1 ? n : 0,
      l = t.column + u,
      T = `${e.name}:${a}:${l}
`,
      h = i.split(/\r\n|[\n\r]/g),
      D = h[r];
    if (D.length > 120) {
      let O = Math.floor(l / 80),
        ae = l % 80,
        N = [];
      for (let b = 0; b < D.length; b += 80) N.push(D.slice(b, b + 80));
      return (
        T +
        We([
          [`${a} |`, N[0]],
          ...N.slice(1, O + 1).map(b => ['|', b]),
          ['|', '^'.padStart(ae)],
          ['|', N[O + 1]],
        ])
      );
    }
    return (
      T +
      We([
        [`${a - 1} |`, h[r - 1]],
        [`${a} |`, D],
        ['|', '^'.padStart(l)],
        [`${a + 1} |`, h[r + 1]],
      ])
    );
  }
  function We(e) {
    let t = e.filter(([i, r]) => r !== void 0),
      n = Math.max(...t.map(([i]) => i.length));
    return t.map(([i, r]) => i.padStart(n) + (r ? ' ' + r : '')).join(`
`);
  }
  function Mt(e) {
    let t = e[0];
    return t == null || 'kind' in t || 'length' in t
      ? {
          nodes: t,
          source: e[1],
          positions: e[2],
          path: e[3],
          originalError: e[4],
          extensions: e[5],
        }
      : t;
  }
  var Z = class e extends Error {
    constructor(t, ...n) {
      var i, r, s;
      let { nodes: a, source: u, positions: l, path: T, originalError: h, extensions: D } = Mt(n);
      super(t),
        (this.name = 'GraphQLError'),
        (this.path = T ?? void 0),
        (this.originalError = h ?? void 0),
        (this.nodes = ze(Array.isArray(a) ? a : a ? [a] : void 0));
      let O = ze(
        (i = this.nodes) === null || i === void 0
          ? void 0
          : i.map(N => N.loc).filter(N => N != null)
      );
      (this.source = u ?? (O == null || (r = O[0]) === null || r === void 0 ? void 0 : r.source)),
        (this.positions = l ?? (O == null ? void 0 : O.map(N => N.start))),
        (this.locations =
          l && u ? l.map(N => V(u, N)) : O == null ? void 0 : O.map(N => V(N.source, N.start)));
      let ae = Qe(h == null ? void 0 : h.extensions) ? (h == null ? void 0 : h.extensions) : void 0;
      (this.extensions = (s = D ?? ae) !== null && s !== void 0 ? s : Object.create(null)),
        Object.defineProperties(this, {
          message: { writable: !0, enumerable: !0 },
          name: { enumerable: !1 },
          nodes: { enumerable: !1 },
          source: { enumerable: !1 },
          positions: { enumerable: !1 },
          originalError: { enumerable: !1 },
        }),
        h != null && h.stack
          ? Object.defineProperty(this, 'stack', { value: h.stack, writable: !0, configurable: !0 })
          : Error.captureStackTrace
            ? Error.captureStackTrace(this, e)
            : Object.defineProperty(this, 'stack', {
                value: Error().stack,
                writable: !0,
                configurable: !0,
              });
    }
    get [Symbol.toStringTag]() {
      return 'GraphQLError';
    }
    toString() {
      let t = this.message;
      if (this.nodes)
        for (let n of this.nodes)
          n.loc &&
            (t +=
              `

` + Ke(n.loc));
      else if (this.source && this.locations)
        for (let n of this.locations)
          t +=
            `

` + me(this.source, n);
      return t;
    }
    toJSON() {
      let t = { message: this.message };
      return (
        this.locations != null && (t.locations = this.locations),
        this.path != null && (t.path = this.path),
        this.extensions != null &&
          Object.keys(this.extensions).length > 0 &&
          (t.extensions = this.extensions),
        t
      );
    }
  };
  function ze(e) {
    return e === void 0 || e.length === 0 ? void 0 : e;
  }
  function d(e, t, n) {
    return new Z(`Syntax Error: ${n}`, { source: e, positions: [t] });
  }
  var ee;
  (function (e) {
    (e.QUERY = 'QUERY'),
      (e.MUTATION = 'MUTATION'),
      (e.SUBSCRIPTION = 'SUBSCRIPTION'),
      (e.FIELD = 'FIELD'),
      (e.FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION'),
      (e.FRAGMENT_SPREAD = 'FRAGMENT_SPREAD'),
      (e.INLINE_FRAGMENT = 'INLINE_FRAGMENT'),
      (e.VARIABLE_DEFINITION = 'VARIABLE_DEFINITION'),
      (e.SCHEMA = 'SCHEMA'),
      (e.SCALAR = 'SCALAR'),
      (e.OBJECT = 'OBJECT'),
      (e.FIELD_DEFINITION = 'FIELD_DEFINITION'),
      (e.ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION'),
      (e.INTERFACE = 'INTERFACE'),
      (e.UNION = 'UNION'),
      (e.ENUM = 'ENUM'),
      (e.ENUM_VALUE = 'ENUM_VALUE'),
      (e.INPUT_OBJECT = 'INPUT_OBJECT'),
      (e.INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION');
  })(ee || (ee = {}));
  var c;
  (function (e) {
    (e.NAME = 'Name'),
      (e.DOCUMENT = 'Document'),
      (e.OPERATION_DEFINITION = 'OperationDefinition'),
      (e.VARIABLE_DEFINITION = 'VariableDefinition'),
      (e.SELECTION_SET = 'SelectionSet'),
      (e.FIELD = 'Field'),
      (e.ARGUMENT = 'Argument'),
      (e.FRAGMENT_SPREAD = 'FragmentSpread'),
      (e.INLINE_FRAGMENT = 'InlineFragment'),
      (e.FRAGMENT_DEFINITION = 'FragmentDefinition'),
      (e.VARIABLE = 'Variable'),
      (e.INT = 'IntValue'),
      (e.FLOAT = 'FloatValue'),
      (e.STRING = 'StringValue'),
      (e.BOOLEAN = 'BooleanValue'),
      (e.NULL = 'NullValue'),
      (e.ENUM = 'EnumValue'),
      (e.LIST = 'ListValue'),
      (e.OBJECT = 'ObjectValue'),
      (e.OBJECT_FIELD = 'ObjectField'),
      (e.DIRECTIVE = 'Directive'),
      (e.NAMED_TYPE = 'NamedType'),
      (e.LIST_TYPE = 'ListType'),
      (e.NON_NULL_TYPE = 'NonNullType'),
      (e.SCHEMA_DEFINITION = 'SchemaDefinition'),
      (e.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition'),
      (e.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
      (e.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
      (e.FIELD_DEFINITION = 'FieldDefinition'),
      (e.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
      (e.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition'),
      (e.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
      (e.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
      (e.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
      (e.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition'),
      (e.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
      (e.SCHEMA_EXTENSION = 'SchemaExtension'),
      (e.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
      (e.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
      (e.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension'),
      (e.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
      (e.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
      (e.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension');
  })(c || (c = {}));
  function Ze(e) {
    return e === 9 || e === 32;
  }
  function R(e) {
    return e >= 48 && e <= 57;
  }
  function et(e) {
    return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
  }
  function Ee(e) {
    return et(e) || e === 95;
  }
  function tt(e) {
    return et(e) || R(e) || e === 95;
  }
  function nt(e) {
    var t;
    let n = Number.MAX_SAFE_INTEGER,
      i = null,
      r = -1;
    for (let a = 0; a < e.length; ++a) {
      var s;
      let u = e[a],
        l = jt(u);
      l !== u.length &&
        ((i = (s = i) !== null && s !== void 0 ? s : a), (r = a), a !== 0 && l < n && (n = l));
    }
    return e
      .map((a, u) => (u === 0 ? a : a.slice(n)))
      .slice((t = i) !== null && t !== void 0 ? t : 0, r + 1);
  }
  function jt(e) {
    let t = 0;
    for (; t < e.length && Ze(e.charCodeAt(t)); ) ++t;
    return t;
  }
  var o;
  (function (e) {
    (e.SOF = '<SOF>'),
      (e.EOF = '<EOF>'),
      (e.BANG = '!'),
      (e.DOLLAR = '$'),
      (e.AMP = '&'),
      (e.PAREN_L = '('),
      (e.PAREN_R = ')'),
      (e.SPREAD = '...'),
      (e.COLON = ':'),
      (e.EQUALS = '='),
      (e.AT = '@'),
      (e.BRACKET_L = '['),
      (e.BRACKET_R = ']'),
      (e.BRACE_L = '{'),
      (e.PIPE = '|'),
      (e.BRACE_R = '}'),
      (e.NAME = 'Name'),
      (e.INT = 'Int'),
      (e.FLOAT = 'Float'),
      (e.STRING = 'String'),
      (e.BLOCK_STRING = 'BlockString'),
      (e.COMMENT = 'Comment');
  })(o || (o = {}));
  var te = class {
    constructor(t) {
      let n = new U(o.SOF, 0, 0, 0, 0);
      (this.source = t),
        (this.lastToken = n),
        (this.token = n),
        (this.line = 1),
        (this.lineStart = 0);
    }
    get [Symbol.toStringTag]() {
      return 'Lexer';
    }
    advance() {
      return (this.lastToken = this.token), (this.token = this.lookahead());
    }
    lookahead() {
      let t = this.token;
      if (t.kind !== o.EOF)
        do
          if (t.next) t = t.next;
          else {
            let n = Gt(this, t.end);
            (t.next = n), (n.prev = t), (t = n);
          }
        while (t.kind === o.COMMENT);
      return t;
    }
  };
  function it(e) {
    return (
      e === o.BANG ||
      e === o.DOLLAR ||
      e === o.AMP ||
      e === o.PAREN_L ||
      e === o.PAREN_R ||
      e === o.SPREAD ||
      e === o.COLON ||
      e === o.EQUALS ||
      e === o.AT ||
      e === o.BRACKET_L ||
      e === o.BRACKET_R ||
      e === o.BRACE_L ||
      e === o.PIPE ||
      e === o.BRACE_R
    );
  }
  function P(e) {
    return (e >= 0 && e <= 55295) || (e >= 57344 && e <= 1114111);
  }
  function ne(e, t) {
    return st(e.charCodeAt(t)) && ot(e.charCodeAt(t + 1));
  }
  function st(e) {
    return e >= 55296 && e <= 56319;
  }
  function ot(e) {
    return e >= 56320 && e <= 57343;
  }
  function v(e, t) {
    let n = e.source.body.codePointAt(t);
    if (n === void 0) return o.EOF;
    if (n >= 32 && n <= 126) {
      let i = String.fromCodePoint(n);
      return i === '"' ? `'"'` : `"${i}"`;
    }
    return 'U+' + n.toString(16).toUpperCase().padStart(4, '0');
  }
  function m(e, t, n, i, r) {
    let s = e.line,
      a = 1 + n - e.lineStart;
    return new U(t, n, i, s, a, r);
  }
  function Gt(e, t) {
    let n = e.source.body,
      i = n.length,
      r = t;
    for (; r < i; ) {
      let s = n.charCodeAt(r);
      switch (s) {
        case 65279:
        case 9:
        case 32:
        case 44:
          ++r;
          continue;
        case 10:
          ++r, ++e.line, (e.lineStart = r);
          continue;
        case 13:
          n.charCodeAt(r + 1) === 10 ? (r += 2) : ++r, ++e.line, (e.lineStart = r);
          continue;
        case 35:
          return $t(e, r);
        case 33:
          return m(e, o.BANG, r, r + 1);
        case 36:
          return m(e, o.DOLLAR, r, r + 1);
        case 38:
          return m(e, o.AMP, r, r + 1);
        case 40:
          return m(e, o.PAREN_L, r, r + 1);
        case 41:
          return m(e, o.PAREN_R, r, r + 1);
        case 46:
          if (n.charCodeAt(r + 1) === 46 && n.charCodeAt(r + 2) === 46)
            return m(e, o.SPREAD, r, r + 3);
          break;
        case 58:
          return m(e, o.COLON, r, r + 1);
        case 61:
          return m(e, o.EQUALS, r, r + 1);
        case 64:
          return m(e, o.AT, r, r + 1);
        case 91:
          return m(e, o.BRACKET_L, r, r + 1);
        case 93:
          return m(e, o.BRACKET_R, r, r + 1);
        case 123:
          return m(e, o.BRACE_L, r, r + 1);
        case 124:
          return m(e, o.PIPE, r, r + 1);
        case 125:
          return m(e, o.BRACE_R, r, r + 1);
        case 34:
          return n.charCodeAt(r + 1) === 34 && n.charCodeAt(r + 2) === 34 ? Wt(e, r) : Xt(e, r);
      }
      if (R(s) || s === 45) return Jt(e, r, s);
      if (Ee(s)) return Kt(e, r);
      throw d(
        e.source,
        r,
        s === 39
          ? `Unexpected single quote character ('), did you mean to use a double quote (")?`
          : P(s) || ne(n, r)
            ? `Unexpected character: ${v(e, r)}.`
            : `Invalid character: ${v(e, r)}.`
      );
    }
    return m(e, o.EOF, i, i);
  }
  function $t(e, t) {
    let n = e.source.body,
      i = n.length,
      r = t + 1;
    for (; r < i; ) {
      let s = n.charCodeAt(r);
      if (s === 10 || s === 13) break;
      if (P(s)) ++r;
      else if (ne(n, r)) r += 2;
      else break;
    }
    return m(e, o.COMMENT, t, r, n.slice(t + 1, r));
  }
  function Jt(e, t, n) {
    let i = e.source.body,
      r = t,
      s = n,
      a = !1;
    if ((s === 45 && (s = i.charCodeAt(++r)), s === 48)) {
      if (((s = i.charCodeAt(++r)), R(s)))
        throw d(e.source, r, `Invalid number, unexpected digit after 0: ${v(e, r)}.`);
    } else (r = Te(e, r, s)), (s = i.charCodeAt(r));
    if (
      (s === 46 && ((a = !0), (s = i.charCodeAt(++r)), (r = Te(e, r, s)), (s = i.charCodeAt(r))),
      (s === 69 || s === 101) &&
        ((a = !0),
        (s = i.charCodeAt(++r)),
        (s === 43 || s === 45) && (s = i.charCodeAt(++r)),
        (r = Te(e, r, s)),
        (s = i.charCodeAt(r))),
      s === 46 || Ee(s))
    )
      throw d(e.source, r, `Invalid number, expected digit but got: ${v(e, r)}.`);
    return m(e, a ? o.FLOAT : o.INT, t, r, i.slice(t, r));
  }
  function Te(e, t, n) {
    if (!R(n)) throw d(e.source, t, `Invalid number, expected digit but got: ${v(e, t)}.`);
    let i = e.source.body,
      r = t + 1;
    for (; R(i.charCodeAt(r)); ) ++r;
    return r;
  }
  function Xt(e, t) {
    let n = e.source.body,
      i = n.length,
      r = t + 1,
      s = r,
      a = '';
    for (; r < i; ) {
      let u = n.charCodeAt(r);
      if (u === 34) return (a += n.slice(s, r)), m(e, o.STRING, t, r + 1, a);
      if (u === 92) {
        a += n.slice(s, r);
        let l =
          n.charCodeAt(r + 1) === 117
            ? n.charCodeAt(r + 2) === 123
              ? qt(e, r)
              : Qt(e, r)
            : Ht(e, r);
        (a += l.value), (r += l.size), (s = r);
        continue;
      }
      if (u === 10 || u === 13) break;
      if (P(u)) ++r;
      else if (ne(n, r)) r += 2;
      else throw d(e.source, r, `Invalid character within String: ${v(e, r)}.`);
    }
    throw d(e.source, r, 'Unterminated string.');
  }
  function qt(e, t) {
    let n = e.source.body,
      i = 0,
      r = 3;
    for (; r < 12; ) {
      let s = n.charCodeAt(t + r++);
      if (s === 125) {
        if (r < 5 || !P(i)) break;
        return { value: String.fromCodePoint(i), size: r };
      }
      if (((i = (i << 4) | Y(s)), i < 0)) break;
    }
    throw d(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + r)}".`);
  }
  function Qt(e, t) {
    let n = e.source.body,
      i = rt(n, t + 2);
    if (P(i)) return { value: String.fromCodePoint(i), size: 6 };
    if (st(i) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
      let r = rt(n, t + 8);
      if (ot(r)) return { value: String.fromCodePoint(i, r), size: 12 };
    }
    throw d(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
  }
  function rt(e, t) {
    return (
      (Y(e.charCodeAt(t)) << 12) |
      (Y(e.charCodeAt(t + 1)) << 8) |
      (Y(e.charCodeAt(t + 2)) << 4) |
      Y(e.charCodeAt(t + 3))
    );
  }
  function Y(e) {
    return e >= 48 && e <= 57
      ? e - 48
      : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
          ? e - 87
          : -1;
  }
  function Ht(e, t) {
    let n = e.source.body;
    switch (n.charCodeAt(t + 1)) {
      case 34:
        return { value: '"', size: 2 };
      case 92:
        return { value: '\\', size: 2 };
      case 47:
        return { value: '/', size: 2 };
      case 98:
        return { value: '\b', size: 2 };
      case 102:
        return { value: '\f', size: 2 };
      case 110:
        return {
          value: `
`,
          size: 2,
        };
      case 114:
        return { value: '\r', size: 2 };
      case 116:
        return { value: '	', size: 2 };
    }
    throw d(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
  }
  function Wt(e, t) {
    let n = e.source.body,
      i = n.length,
      r = e.lineStart,
      s = t + 3,
      a = s,
      u = '',
      l = [];
    for (; s < i; ) {
      let T = n.charCodeAt(s);
      if (T === 34 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34) {
        (u += n.slice(a, s)), l.push(u);
        let h = m(
          e,
          o.BLOCK_STRING,
          t,
          s + 3,
          nt(l).join(`
`)
        );
        return (e.line += l.length - 1), (e.lineStart = r), h;
      }
      if (
        T === 92 &&
        n.charCodeAt(s + 1) === 34 &&
        n.charCodeAt(s + 2) === 34 &&
        n.charCodeAt(s + 3) === 34
      ) {
        (u += n.slice(a, s)), (a = s + 1), (s += 4);
        continue;
      }
      if (T === 10 || T === 13) {
        (u += n.slice(a, s)),
          l.push(u),
          T === 13 && n.charCodeAt(s + 1) === 10 ? (s += 2) : ++s,
          (u = ''),
          (a = s),
          (r = s);
        continue;
      }
      if (P(T)) ++s;
      else if (ne(n, s)) s += 2;
      else throw d(e.source, s, `Invalid character within String: ${v(e, s)}.`);
    }
    throw d(e.source, s, 'Unterminated string.');
  }
  function Kt(e, t) {
    let n = e.source.body,
      i = n.length,
      r = t + 1;
    for (; r < i; ) {
      let s = n.charCodeAt(r);
      if (tt(s)) ++r;
      else break;
    }
    return m(e, o.NAME, t, r, n.slice(t, r));
  }
  function re(e, t) {
    if (!!!e) throw new Error(t);
  }
  function ie(e) {
    return se(e, []);
  }
  function se(e, t) {
    switch (typeof e) {
      case 'string':
        return JSON.stringify(e);
      case 'function':
        return e.name ? `[function ${e.name}]` : '[function]';
      case 'object':
        return zt(e, t);
      default:
        return String(e);
    }
  }
  function zt(e, t) {
    if (e === null) return 'null';
    if (t.includes(e)) return '[Circular]';
    let n = [...t, e];
    if (Zt(e)) {
      let i = e.toJSON();
      if (i !== e) return typeof i == 'string' ? i : se(i, n);
    } else if (Array.isArray(e)) return tn(e, n);
    return en(e, n);
  }
  function Zt(e) {
    return typeof e.toJSON == 'function';
  }
  function en(e, t) {
    let n = Object.entries(e);
    return n.length === 0
      ? '{}'
      : t.length > 2
        ? '[' + nn(e) + ']'
        : '{ ' + n.map(([r, s]) => r + ': ' + se(s, t)).join(', ') + ' }';
  }
  function tn(e, t) {
    if (e.length === 0) return '[]';
    if (t.length > 2) return '[Array]';
    let n = Math.min(10, e.length),
      i = e.length - n,
      r = [];
    for (let s = 0; s < n; ++s) r.push(se(e[s], t));
    return (
      i === 1 ? r.push('... 1 more item') : i > 1 && r.push(`... ${i} more items`),
      '[' + r.join(', ') + ']'
    );
  }
  function nn(e) {
    let t = Object.prototype.toString
      .call(e)
      .replace(/^\[object /, '')
      .replace(/]$/, '');
    if (t === 'Object' && typeof e.constructor == 'function') {
      let n = e.constructor.name;
      if (typeof n == 'string' && n !== '') return n;
    }
    return t;
  }
  var rn = globalThis.process && !0,
    at = rn
      ? function (t, n) {
          return t instanceof n;
        }
      : function (t, n) {
          if (t instanceof n) return !0;
          if (typeof t == 'object' && t !== null) {
            var i;
            let r = n.prototype[Symbol.toStringTag],
              s =
                Symbol.toStringTag in t
                  ? t[Symbol.toStringTag]
                  : (i = t.constructor) === null || i === void 0
                    ? void 0
                    : i.name;
            if (r === s) {
              let a = ie(t);
              throw new Error(`Cannot use ${r} "${a}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
            }
          }
          return !1;
        };
  var M = class {
    constructor(t, n = 'GraphQL request', i = { line: 1, column: 1 }) {
      typeof t == 'string' || re(!1, `Body must be a string. Received: ${ie(t)}.`),
        (this.body = t),
        (this.name = n),
        (this.locationOffset = i),
        this.locationOffset.line > 0 ||
          re(!1, 'line in locationOffset is 1-indexed and must be positive.'),
        this.locationOffset.column > 0 ||
          re(!1, 'column in locationOffset is 1-indexed and must be positive.');
    }
    get [Symbol.toStringTag]() {
      return 'Source';
    }
  };
  function ct(e) {
    return at(e, M);
  }
  function ut(e, t) {
    let n = new Ne(e, t),
      i = n.parseDocument();
    return Object.defineProperty(i, 'tokenCount', { enumerable: !1, value: n.tokenCount }), i;
  }
  var Ne = class {
    constructor(t, n = {}) {
      let i = ct(t) ? t : new M(t);
      (this._lexer = new te(i)), (this._options = n), (this._tokenCounter = 0);
    }
    get tokenCount() {
      return this._tokenCounter;
    }
    parseName() {
      let t = this.expectToken(o.NAME);
      return this.node(t, { kind: c.NAME, value: t.value });
    }
    parseDocument() {
      return this.node(this._lexer.token, {
        kind: c.DOCUMENT,
        definitions: this.many(o.SOF, this.parseDefinition, o.EOF),
      });
    }
    parseDefinition() {
      if (this.peek(o.BRACE_L)) return this.parseOperationDefinition();
      let t = this.peekDescription(),
        n = t ? this._lexer.lookahead() : this._lexer.token;
      if (n.kind === o.NAME) {
        switch (n.value) {
          case 'schema':
            return this.parseSchemaDefinition();
          case 'scalar':
            return this.parseScalarTypeDefinition();
          case 'type':
            return this.parseObjectTypeDefinition();
          case 'interface':
            return this.parseInterfaceTypeDefinition();
          case 'union':
            return this.parseUnionTypeDefinition();
          case 'enum':
            return this.parseEnumTypeDefinition();
          case 'input':
            return this.parseInputObjectTypeDefinition();
          case 'directive':
            return this.parseDirectiveDefinition();
        }
        if (t)
          throw d(
            this._lexer.source,
            this._lexer.token.start,
            'Unexpected description, descriptions are supported only on type definitions.'
          );
        switch (n.value) {
          case 'query':
          case 'mutation':
          case 'subscription':
            return this.parseOperationDefinition();
          case 'fragment':
            return this.parseFragmentDefinition();
          case 'extend':
            return this.parseTypeSystemExtension();
        }
      }
      throw this.unexpected(n);
    }
    parseOperationDefinition() {
      let t = this._lexer.token;
      if (this.peek(o.BRACE_L))
        return this.node(t, {
          kind: c.OPERATION_DEFINITION,
          operation: S.QUERY,
          name: void 0,
          variableDefinitions: [],
          directives: [],
          selectionSet: this.parseSelectionSet(),
        });
      let n = this.parseOperationType(),
        i;
      return (
        this.peek(o.NAME) && (i = this.parseName()),
        this.node(t, {
          kind: c.OPERATION_DEFINITION,
          operation: n,
          name: i,
          variableDefinitions: this.parseVariableDefinitions(),
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet(),
        })
      );
    }
    parseOperationType() {
      let t = this.expectToken(o.NAME);
      switch (t.value) {
        case 'query':
          return S.QUERY;
        case 'mutation':
          return S.MUTATION;
        case 'subscription':
          return S.SUBSCRIPTION;
      }
      throw this.unexpected(t);
    }
    parseVariableDefinitions() {
      return this.optionalMany(o.PAREN_L, this.parseVariableDefinition, o.PAREN_R);
    }
    parseVariableDefinition() {
      return this.node(this._lexer.token, {
        kind: c.VARIABLE_DEFINITION,
        variable: this.parseVariable(),
        type: (this.expectToken(o.COLON), this.parseTypeReference()),
        defaultValue: this.expectOptionalToken(o.EQUALS) ? this.parseConstValueLiteral() : void 0,
        directives: this.parseConstDirectives(),
      });
    }
    parseVariable() {
      let t = this._lexer.token;
      return this.expectToken(o.DOLLAR), this.node(t, { kind: c.VARIABLE, name: this.parseName() });
    }
    parseSelectionSet() {
      return this.node(this._lexer.token, {
        kind: c.SELECTION_SET,
        selections: this.many(o.BRACE_L, this.parseSelection, o.BRACE_R),
      });
    }
    parseSelection() {
      return this.peek(o.SPREAD) ? this.parseFragment() : this.parseField();
    }
    parseField() {
      let t = this._lexer.token,
        n = this.parseName(),
        i,
        r;
      return (
        this.expectOptionalToken(o.COLON) ? ((i = n), (r = this.parseName())) : (r = n),
        this.node(t, {
          kind: c.FIELD,
          alias: i,
          name: r,
          arguments: this.parseArguments(!1),
          directives: this.parseDirectives(!1),
          selectionSet: this.peek(o.BRACE_L) ? this.parseSelectionSet() : void 0,
        })
      );
    }
    parseArguments(t) {
      let n = t ? this.parseConstArgument : this.parseArgument;
      return this.optionalMany(o.PAREN_L, n, o.PAREN_R);
    }
    parseArgument(t = !1) {
      let n = this._lexer.token,
        i = this.parseName();
      return (
        this.expectToken(o.COLON),
        this.node(n, { kind: c.ARGUMENT, name: i, value: this.parseValueLiteral(t) })
      );
    }
    parseConstArgument() {
      return this.parseArgument(!0);
    }
    parseFragment() {
      let t = this._lexer.token;
      this.expectToken(o.SPREAD);
      let n = this.expectOptionalKeyword('on');
      return !n && this.peek(o.NAME)
        ? this.node(t, {
            kind: c.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1),
          })
        : this.node(t, {
            kind: c.INLINE_FRAGMENT,
            typeCondition: n ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
          });
    }
    parseFragmentDefinition() {
      let t = this._lexer.token;
      return (
        this.expectKeyword('fragment'),
        this._options.allowLegacyFragmentVariables === !0
          ? this.node(t, {
              kind: c.FRAGMENT_DEFINITION,
              name: this.parseFragmentName(),
              variableDefinitions: this.parseVariableDefinitions(),
              typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
              directives: this.parseDirectives(!1),
              selectionSet: this.parseSelectionSet(),
            })
          : this.node(t, {
              kind: c.FRAGMENT_DEFINITION,
              name: this.parseFragmentName(),
              typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
              directives: this.parseDirectives(!1),
              selectionSet: this.parseSelectionSet(),
            })
      );
    }
    parseFragmentName() {
      if (this._lexer.token.value === 'on') throw this.unexpected();
      return this.parseName();
    }
    parseValueLiteral(t) {
      let n = this._lexer.token;
      switch (n.kind) {
        case o.BRACKET_L:
          return this.parseList(t);
        case o.BRACE_L:
          return this.parseObject(t);
        case o.INT:
          return this.advanceLexer(), this.node(n, { kind: c.INT, value: n.value });
        case o.FLOAT:
          return this.advanceLexer(), this.node(n, { kind: c.FLOAT, value: n.value });
        case o.STRING:
        case o.BLOCK_STRING:
          return this.parseStringLiteral();
        case o.NAME:
          switch ((this.advanceLexer(), n.value)) {
            case 'true':
              return this.node(n, { kind: c.BOOLEAN, value: !0 });
            case 'false':
              return this.node(n, { kind: c.BOOLEAN, value: !1 });
            case 'null':
              return this.node(n, { kind: c.NULL });
            default:
              return this.node(n, { kind: c.ENUM, value: n.value });
          }
        case o.DOLLAR:
          if (t)
            if ((this.expectToken(o.DOLLAR), this._lexer.token.kind === o.NAME)) {
              let i = this._lexer.token.value;
              throw d(
                this._lexer.source,
                n.start,
                `Unexpected variable "$${i}" in constant value.`
              );
            } else throw this.unexpected(n);
          return this.parseVariable();
        default:
          throw this.unexpected();
      }
    }
    parseConstValueLiteral() {
      return this.parseValueLiteral(!0);
    }
    parseStringLiteral() {
      let t = this._lexer.token;
      return (
        this.advanceLexer(),
        this.node(t, { kind: c.STRING, value: t.value, block: t.kind === o.BLOCK_STRING })
      );
    }
    parseList(t) {
      let n = () => this.parseValueLiteral(t);
      return this.node(this._lexer.token, {
        kind: c.LIST,
        values: this.any(o.BRACKET_L, n, o.BRACKET_R),
      });
    }
    parseObject(t) {
      let n = () => this.parseObjectField(t);
      return this.node(this._lexer.token, {
        kind: c.OBJECT,
        fields: this.any(o.BRACE_L, n, o.BRACE_R),
      });
    }
    parseObjectField(t) {
      let n = this._lexer.token,
        i = this.parseName();
      return (
        this.expectToken(o.COLON),
        this.node(n, { kind: c.OBJECT_FIELD, name: i, value: this.parseValueLiteral(t) })
      );
    }
    parseDirectives(t) {
      let n = [];
      for (; this.peek(o.AT); ) n.push(this.parseDirective(t));
      return n;
    }
    parseConstDirectives() {
      return this.parseDirectives(!0);
    }
    parseDirective(t) {
      let n = this._lexer.token;
      return (
        this.expectToken(o.AT),
        this.node(n, {
          kind: c.DIRECTIVE,
          name: this.parseName(),
          arguments: this.parseArguments(t),
        })
      );
    }
    parseTypeReference() {
      let t = this._lexer.token,
        n;
      if (this.expectOptionalToken(o.BRACKET_L)) {
        let i = this.parseTypeReference();
        this.expectToken(o.BRACKET_R), (n = this.node(t, { kind: c.LIST_TYPE, type: i }));
      } else n = this.parseNamedType();
      return this.expectOptionalToken(o.BANG)
        ? this.node(t, { kind: c.NON_NULL_TYPE, type: n })
        : n;
    }
    parseNamedType() {
      return this.node(this._lexer.token, { kind: c.NAMED_TYPE, name: this.parseName() });
    }
    peekDescription() {
      return this.peek(o.STRING) || this.peek(o.BLOCK_STRING);
    }
    parseDescription() {
      if (this.peekDescription()) return this.parseStringLiteral();
    }
    parseSchemaDefinition() {
      let t = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('schema');
      let i = this.parseConstDirectives(),
        r = this.many(o.BRACE_L, this.parseOperationTypeDefinition, o.BRACE_R);
      return this.node(t, {
        kind: c.SCHEMA_DEFINITION,
        description: n,
        directives: i,
        operationTypes: r,
      });
    }
    parseOperationTypeDefinition() {
      let t = this._lexer.token,
        n = this.parseOperationType();
      this.expectToken(o.COLON);
      let i = this.parseNamedType();
      return this.node(t, { kind: c.OPERATION_TYPE_DEFINITION, operation: n, type: i });
    }
    parseScalarTypeDefinition() {
      let t = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('scalar');
      let i = this.parseName(),
        r = this.parseConstDirectives();
      return this.node(t, {
        kind: c.SCALAR_TYPE_DEFINITION,
        description: n,
        name: i,
        directives: r,
      });
    }
    parseObjectTypeDefinition() {
      let t = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('type');
      let i = this.parseName(),
        r = this.parseImplementsInterfaces(),
        s = this.parseConstDirectives(),
        a = this.parseFieldsDefinition();
      return this.node(t, {
        kind: c.OBJECT_TYPE_DEFINITION,
        description: n,
        name: i,
        interfaces: r,
        directives: s,
        fields: a,
      });
    }
    parseImplementsInterfaces() {
      return this.expectOptionalKeyword('implements')
        ? this.delimitedMany(o.AMP, this.parseNamedType)
        : [];
    }
    parseFieldsDefinition() {
      return this.optionalMany(o.BRACE_L, this.parseFieldDefinition, o.BRACE_R);
    }
    parseFieldDefinition() {
      let t = this._lexer.token,
        n = this.parseDescription(),
        i = this.parseName(),
        r = this.parseArgumentDefs();
      this.expectToken(o.COLON);
      let s = this.parseTypeReference(),
        a = this.parseConstDirectives();
      return this.node(t, {
        kind: c.FIELD_DEFINITION,
        description: n,
        name: i,
        arguments: r,
        type: s,
        directives: a,
      });
    }
    parseArgumentDefs() {
      return this.optionalMany(o.PAREN_L, this.parseInputValueDef, o.PAREN_R);
    }
    parseInputValueDef() {
      let t = this._lexer.token,
        n = this.parseDescription(),
        i = this.parseName();
      this.expectToken(o.COLON);
      let r = this.parseTypeReference(),
        s;
      this.expectOptionalToken(o.EQUALS) && (s = this.parseConstValueLiteral());
      let a = this.parseConstDirectives();
      return this.node(t, {
        kind: c.INPUT_VALUE_DEFINITION,
        description: n,
        name: i,
        type: r,
        defaultValue: s,
        directives: a,
      });
    }
    parseInterfaceTypeDefinition() {
      let t = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('interface');
      let i = this.parseName(),
        r = this.parseImplementsInterfaces(),
        s = this.parseConstDirectives(),
        a = this.parseFieldsDefinition();
      return this.node(t, {
        kind: c.INTERFACE_TYPE_DEFINITION,
        description: n,
        name: i,
        interfaces: r,
        directives: s,
        fields: a,
      });
    }
    parseUnionTypeDefinition() {
      let t = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('union');
      let i = this.parseName(),
        r = this.parseConstDirectives(),
        s = this.parseUnionMemberTypes();
      return this.node(t, {
        kind: c.UNION_TYPE_DEFINITION,
        description: n,
        name: i,
        directives: r,
        types: s,
      });
    }
    parseUnionMemberTypes() {
      return this.expectOptionalToken(o.EQUALS)
        ? this.delimitedMany(o.PIPE, this.parseNamedType)
        : [];
    }
    parseEnumTypeDefinition() {
      let t = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('enum');
      let i = this.parseName(),
        r = this.parseConstDirectives(),
        s = this.parseEnumValuesDefinition();
      return this.node(t, {
        kind: c.ENUM_TYPE_DEFINITION,
        description: n,
        name: i,
        directives: r,
        values: s,
      });
    }
    parseEnumValuesDefinition() {
      return this.optionalMany(o.BRACE_L, this.parseEnumValueDefinition, o.BRACE_R);
    }
    parseEnumValueDefinition() {
      let t = this._lexer.token,
        n = this.parseDescription(),
        i = this.parseEnumValueName(),
        r = this.parseConstDirectives();
      return this.node(t, {
        kind: c.ENUM_VALUE_DEFINITION,
        description: n,
        name: i,
        directives: r,
      });
    }
    parseEnumValueName() {
      if (
        this._lexer.token.value === 'true' ||
        this._lexer.token.value === 'false' ||
        this._lexer.token.value === 'null'
      )
        throw d(
          this._lexer.source,
          this._lexer.token.start,
          `${oe(this._lexer.token)} is reserved and cannot be used for an enum value.`
        );
      return this.parseName();
    }
    parseInputObjectTypeDefinition() {
      let t = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('input');
      let i = this.parseName(),
        r = this.parseConstDirectives(),
        s = this.parseInputFieldsDefinition();
      return this.node(t, {
        kind: c.INPUT_OBJECT_TYPE_DEFINITION,
        description: n,
        name: i,
        directives: r,
        fields: s,
      });
    }
    parseInputFieldsDefinition() {
      return this.optionalMany(o.BRACE_L, this.parseInputValueDef, o.BRACE_R);
    }
    parseTypeSystemExtension() {
      let t = this._lexer.lookahead();
      if (t.kind === o.NAME)
        switch (t.value) {
          case 'schema':
            return this.parseSchemaExtension();
          case 'scalar':
            return this.parseScalarTypeExtension();
          case 'type':
            return this.parseObjectTypeExtension();
          case 'interface':
            return this.parseInterfaceTypeExtension();
          case 'union':
            return this.parseUnionTypeExtension();
          case 'enum':
            return this.parseEnumTypeExtension();
          case 'input':
            return this.parseInputObjectTypeExtension();
        }
      throw this.unexpected(t);
    }
    parseSchemaExtension() {
      let t = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('schema');
      let n = this.parseConstDirectives(),
        i = this.optionalMany(o.BRACE_L, this.parseOperationTypeDefinition, o.BRACE_R);
      if (n.length === 0 && i.length === 0) throw this.unexpected();
      return this.node(t, { kind: c.SCHEMA_EXTENSION, directives: n, operationTypes: i });
    }
    parseScalarTypeExtension() {
      let t = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('scalar');
      let n = this.parseName(),
        i = this.parseConstDirectives();
      if (i.length === 0) throw this.unexpected();
      return this.node(t, { kind: c.SCALAR_TYPE_EXTENSION, name: n, directives: i });
    }
    parseObjectTypeExtension() {
      let t = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('type');
      let n = this.parseName(),
        i = this.parseImplementsInterfaces(),
        r = this.parseConstDirectives(),
        s = this.parseFieldsDefinition();
      if (i.length === 0 && r.length === 0 && s.length === 0) throw this.unexpected();
      return this.node(t, {
        kind: c.OBJECT_TYPE_EXTENSION,
        name: n,
        interfaces: i,
        directives: r,
        fields: s,
      });
    }
    parseInterfaceTypeExtension() {
      let t = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('interface');
      let n = this.parseName(),
        i = this.parseImplementsInterfaces(),
        r = this.parseConstDirectives(),
        s = this.parseFieldsDefinition();
      if (i.length === 0 && r.length === 0 && s.length === 0) throw this.unexpected();
      return this.node(t, {
        kind: c.INTERFACE_TYPE_EXTENSION,
        name: n,
        interfaces: i,
        directives: r,
        fields: s,
      });
    }
    parseUnionTypeExtension() {
      let t = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('union');
      let n = this.parseName(),
        i = this.parseConstDirectives(),
        r = this.parseUnionMemberTypes();
      if (i.length === 0 && r.length === 0) throw this.unexpected();
      return this.node(t, { kind: c.UNION_TYPE_EXTENSION, name: n, directives: i, types: r });
    }
    parseEnumTypeExtension() {
      let t = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('enum');
      let n = this.parseName(),
        i = this.parseConstDirectives(),
        r = this.parseEnumValuesDefinition();
      if (i.length === 0 && r.length === 0) throw this.unexpected();
      return this.node(t, { kind: c.ENUM_TYPE_EXTENSION, name: n, directives: i, values: r });
    }
    parseInputObjectTypeExtension() {
      let t = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('input');
      let n = this.parseName(),
        i = this.parseConstDirectives(),
        r = this.parseInputFieldsDefinition();
      if (i.length === 0 && r.length === 0) throw this.unexpected();
      return this.node(t, {
        kind: c.INPUT_OBJECT_TYPE_EXTENSION,
        name: n,
        directives: i,
        fields: r,
      });
    }
    parseDirectiveDefinition() {
      let t = this._lexer.token,
        n = this.parseDescription();
      this.expectKeyword('directive'), this.expectToken(o.AT);
      let i = this.parseName(),
        r = this.parseArgumentDefs(),
        s = this.expectOptionalKeyword('repeatable');
      this.expectKeyword('on');
      let a = this.parseDirectiveLocations();
      return this.node(t, {
        kind: c.DIRECTIVE_DEFINITION,
        description: n,
        name: i,
        arguments: r,
        repeatable: s,
        locations: a,
      });
    }
    parseDirectiveLocations() {
      return this.delimitedMany(o.PIPE, this.parseDirectiveLocation);
    }
    parseDirectiveLocation() {
      let t = this._lexer.token,
        n = this.parseName();
      if (Object.prototype.hasOwnProperty.call(ee, n.value)) return n;
      throw this.unexpected(t);
    }
    node(t, n) {
      return (
        this._options.noLocation !== !0 &&
          (n.loc = new H(t, this._lexer.lastToken, this._lexer.source)),
        n
      );
    }
    peek(t) {
      return this._lexer.token.kind === t;
    }
    expectToken(t) {
      let n = this._lexer.token;
      if (n.kind === t) return this.advanceLexer(), n;
      throw d(this._lexer.source, n.start, `Expected ${lt(t)}, found ${oe(n)}.`);
    }
    expectOptionalToken(t) {
      return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1;
    }
    expectKeyword(t) {
      let n = this._lexer.token;
      if (n.kind === o.NAME && n.value === t) this.advanceLexer();
      else throw d(this._lexer.source, n.start, `Expected "${t}", found ${oe(n)}.`);
    }
    expectOptionalKeyword(t) {
      let n = this._lexer.token;
      return n.kind === o.NAME && n.value === t ? (this.advanceLexer(), !0) : !1;
    }
    unexpected(t) {
      let n = t ?? this._lexer.token;
      return d(this._lexer.source, n.start, `Unexpected ${oe(n)}.`);
    }
    any(t, n, i) {
      this.expectToken(t);
      let r = [];
      for (; !this.expectOptionalToken(i); ) r.push(n.call(this));
      return r;
    }
    optionalMany(t, n, i) {
      if (this.expectOptionalToken(t)) {
        let r = [];
        do r.push(n.call(this));
        while (!this.expectOptionalToken(i));
        return r;
      }
      return [];
    }
    many(t, n, i) {
      this.expectToken(t);
      let r = [];
      do r.push(n.call(this));
      while (!this.expectOptionalToken(i));
      return r;
    }
    delimitedMany(t, n) {
      this.expectOptionalToken(t);
      let i = [];
      do i.push(n.call(this));
      while (this.expectOptionalToken(t));
      return i;
    }
    advanceLexer() {
      let { maxTokens: t } = this._options,
        n = this._lexer.advance();
      if (n.kind !== o.EOF && (++this._tokenCounter, t !== void 0 && this._tokenCounter > t))
        throw d(
          this._lexer.source,
          n.start,
          `Document contains more that ${t} tokens. Parsing aborted.`
        );
    }
  };
  function oe(e) {
    let t = e.value;
    return lt(e.kind) + (t != null ? ` "${t}"` : '');
  }
  function lt(e) {
    return it(e) ? `"${e}"` : e;
  }
  function sn(e, t) {
    let n = new SyntaxError(e + ' (' + t.loc.start.line + ':' + t.loc.start.column + ')');
    return Object.assign(n, t);
  }
  var pt = sn;
  function on(e) {
    let t = [],
      { startToken: n, endToken: i } = e.loc;
    for (let r = n; r !== i; r = r.next)
      r.kind === 'Comment' && t.push({ ...r, loc: { start: r.start, end: r.end } });
    return t;
  }
  var an = { allowLegacyFragmentVariables: !0 };
  function cn(e) {
    if ((e == null ? void 0 : e.name) === 'GraphQLError') {
      let {
        message: t,
        locations: [n],
      } = e;
      return pt(t, { loc: { start: n }, cause: e });
    }
    return e;
  }
  function un(e) {
    let t;
    try {
      t = ut(e, an);
    } catch (n) {
      throw cn(n);
    }
    return (t.comments = on(t)), t;
  }
  var ln = { parse: un, astFormat: 'graphql', hasPragma: Ye, locStart: K, locEnd: z };
  var pn = { graphql: $e };
  return Et(fn);
});
