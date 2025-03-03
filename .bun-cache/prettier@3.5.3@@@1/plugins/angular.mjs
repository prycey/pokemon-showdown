var $s = Object.defineProperty;
var Xt = t => {
  throw TypeError(t);
};
var Jt = (t, e) => {
  for (var n in e) $s(t, n, { get: e[n], enumerable: !0 });
};
var it = (t, e, n) => e.has(t) || Xt('Cannot ' + n);
var L = (t, e, n) => (it(t, e, 'read from private field'), n ? n.call(t) : e.get(t)),
  V = (t, e, n) =>
    e.has(t)
      ? Xt('Cannot add the same private member more than once')
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, n),
  K = (t, e, n, s) => (it(t, e, 'write to private field'), s ? s.call(t, n) : e.set(t, n), n),
  c = (t, e, n) => (it(t, e, 'access private method'), n);
var zt = {};
Jt(zt, { parsers: () => jt });
var jt = {};
Jt(jt, {
  __ng_action: () => Ur,
  __ng_binding: () => Wr,
  __ng_directive: () => jr,
  __ng_interpolation: () => qr,
});
var Gr = new RegExp(
  `(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`,
  'g'
);
var Yt;
(function (t) {
  (t[(t.Emulated = 0)] = 'Emulated'),
    (t[(t.None = 2)] = 'None'),
    (t[(t.ShadowDom = 3)] = 'ShadowDom');
})(Yt || (Yt = {}));
var Qt;
(function (t) {
  (t[(t.OnPush = 0)] = 'OnPush'), (t[(t.Default = 1)] = 'Default');
})(Qt || (Qt = {}));
var Kt;
(function (t) {
  (t[(t.None = 0)] = 'None'),
    (t[(t.SignalBased = 1)] = 'SignalBased'),
    (t[(t.HasDecoratorInputTransform = 2)] = 'HasDecoratorInputTransform');
})(Kt || (Kt = {}));
var B;
(function (t) {
  (t[(t.NONE = 0)] = 'NONE'),
    (t[(t.HTML = 1)] = 'HTML'),
    (t[(t.STYLE = 2)] = 'STYLE'),
    (t[(t.SCRIPT = 3)] = 'SCRIPT'),
    (t[(t.URL = 4)] = 'URL'),
    (t[(t.RESOURCE_URL = 5)] = 'RESOURCE_URL');
})(B || (B = {}));
var Zt;
(function (t) {
  (t[(t.Error = 0)] = 'Error'), (t[(t.Warning = 1)] = 'Warning'), (t[(t.Ignore = 2)] = 'Ignore');
})(Zt || (Zt = {}));
var en;
(function (t) {
  (t[(t.Little = 0)] = 'Little'), (t[(t.Big = 1)] = 'Big');
})(en || (en = {}));
var tn;
(function (t) {
  (t[(t.None = 0)] = 'None'), (t[(t.Const = 1)] = 'Const');
})(tn || (tn = {}));
var nn;
(function (t) {
  (t[(t.Dynamic = 0)] = 'Dynamic'),
    (t[(t.Bool = 1)] = 'Bool'),
    (t[(t.String = 2)] = 'String'),
    (t[(t.Int = 3)] = 'Int'),
    (t[(t.Number = 4)] = 'Number'),
    (t[(t.Function = 5)] = 'Function'),
    (t[(t.Inferred = 6)] = 'Inferred'),
    (t[(t.None = 7)] = 'None');
})(nn || (nn = {}));
var Rs = void 0;
var sn;
(function (t) {
  (t[(t.Minus = 0)] = 'Minus'), (t[(t.Plus = 1)] = 'Plus');
})(sn || (sn = {}));
var _;
(function (t) {
  (t[(t.Equals = 0)] = 'Equals'),
    (t[(t.NotEquals = 1)] = 'NotEquals'),
    (t[(t.Identical = 2)] = 'Identical'),
    (t[(t.NotIdentical = 3)] = 'NotIdentical'),
    (t[(t.Minus = 4)] = 'Minus'),
    (t[(t.Plus = 5)] = 'Plus'),
    (t[(t.Divide = 6)] = 'Divide'),
    (t[(t.Multiply = 7)] = 'Multiply'),
    (t[(t.Modulo = 8)] = 'Modulo'),
    (t[(t.And = 9)] = 'And'),
    (t[(t.Or = 10)] = 'Or'),
    (t[(t.BitwiseOr = 11)] = 'BitwiseOr'),
    (t[(t.BitwiseAnd = 12)] = 'BitwiseAnd'),
    (t[(t.Lower = 13)] = 'Lower'),
    (t[(t.LowerEquals = 14)] = 'LowerEquals'),
    (t[(t.Bigger = 15)] = 'Bigger'),
    (t[(t.BiggerEquals = 16)] = 'BiggerEquals'),
    (t[(t.NullishCoalesce = 17)] = 'NullishCoalesce');
})(_ || (_ = {}));
function Bs(t, e) {
  return t == null || e == null ? t == e : t.isEquivalent(e);
}
function Ds(t, e, n) {
  let s = t.length;
  if (s !== e.length) return !1;
  for (let r = 0; r < s; r++) if (!n(t[r], e[r])) return !1;
  return !0;
}
function tt(t, e) {
  return Ds(t, e, (n, s) => n.isEquivalent(s));
}
var k = class {
    type;
    sourceSpan;
    constructor(e, n) {
      (this.type = e || null), (this.sourceSpan = n || null);
    }
    prop(e, n) {
      return new gt(this, e, null, n);
    }
    key(e, n, s) {
      return new vt(this, e, n, s);
    }
    callFn(e, n, s) {
      return new Xe(this, e, null, n, s);
    }
    instantiate(e, n, s) {
      return new ft(this, e, n, s);
    }
    conditional(e, n = null, s) {
      return new mt(this, e, n, null, s);
    }
    equals(e, n) {
      return new C(_.Equals, this, e, null, n);
    }
    notEquals(e, n) {
      return new C(_.NotEquals, this, e, null, n);
    }
    identical(e, n) {
      return new C(_.Identical, this, e, null, n);
    }
    notIdentical(e, n) {
      return new C(_.NotIdentical, this, e, null, n);
    }
    minus(e, n) {
      return new C(_.Minus, this, e, null, n);
    }
    plus(e, n) {
      return new C(_.Plus, this, e, null, n);
    }
    divide(e, n) {
      return new C(_.Divide, this, e, null, n);
    }
    multiply(e, n) {
      return new C(_.Multiply, this, e, null, n);
    }
    modulo(e, n) {
      return new C(_.Modulo, this, e, null, n);
    }
    and(e, n) {
      return new C(_.And, this, e, null, n);
    }
    bitwiseOr(e, n, s = !0) {
      return new C(_.BitwiseOr, this, e, null, n, s);
    }
    bitwiseAnd(e, n, s = !0) {
      return new C(_.BitwiseAnd, this, e, null, n, s);
    }
    or(e, n) {
      return new C(_.Or, this, e, null, n);
    }
    lower(e, n) {
      return new C(_.Lower, this, e, null, n);
    }
    lowerEquals(e, n) {
      return new C(_.LowerEquals, this, e, null, n);
    }
    bigger(e, n) {
      return new C(_.Bigger, this, e, null, n);
    }
    biggerEquals(e, n) {
      return new C(_.BiggerEquals, this, e, null, n);
    }
    isBlank(e) {
      return this.equals(TYPED_NULL_EXPR, e);
    }
    nullishCoalesce(e, n) {
      return new C(_.NullishCoalesce, this, e, null, n);
    }
    toStmt() {
      return new xt(this, null);
    }
  },
  Ge = class t extends k {
    name;
    constructor(e, n, s) {
      super(n, s), (this.name = e);
    }
    isEquivalent(e) {
      return e instanceof t && this.name === e.name;
    }
    isConstant() {
      return !1;
    }
    visitExpression(e, n) {
      return e.visitReadVarExpr(this, n);
    }
    clone() {
      return new t(this.name, this.type, this.sourceSpan);
    }
    set(e) {
      return new ut(this.name, e, null, this.sourceSpan);
    }
  },
  ct = class t extends k {
    expr;
    constructor(e, n, s) {
      super(n, s), (this.expr = e);
    }
    visitExpression(e, n) {
      return e.visitTypeofExpr(this, n);
    }
    isEquivalent(e) {
      return e instanceof t && e.expr.isEquivalent(this.expr);
    }
    isConstant() {
      return this.expr.isConstant();
    }
    clone() {
      return new t(this.expr.clone());
    }
  };
var ut = class t extends k {
    name;
    value;
    constructor(e, n, s, r) {
      super(s || n.type, r), (this.name = e), (this.value = n);
    }
    isEquivalent(e) {
      return e instanceof t && this.name === e.name && this.value.isEquivalent(e.value);
    }
    isConstant() {
      return !1;
    }
    visitExpression(e, n) {
      return e.visitWriteVarExpr(this, n);
    }
    clone() {
      return new t(this.name, this.value.clone(), this.type, this.sourceSpan);
    }
    toDeclStmt(e, n) {
      return new wt(this.name, this.value, e, n, this.sourceSpan);
    }
    toConstDecl() {
      return this.toDeclStmt(Rs, Ee.Final);
    }
  },
  pt = class t extends k {
    receiver;
    index;
    value;
    constructor(e, n, s, r, o) {
      super(r || s.type, o), (this.receiver = e), (this.index = n), (this.value = s);
    }
    isEquivalent(e) {
      return (
        e instanceof t &&
        this.receiver.isEquivalent(e.receiver) &&
        this.index.isEquivalent(e.index) &&
        this.value.isEquivalent(e.value)
      );
    }
    isConstant() {
      return !1;
    }
    visitExpression(e, n) {
      return e.visitWriteKeyExpr(this, n);
    }
    clone() {
      return new t(
        this.receiver.clone(),
        this.index.clone(),
        this.value.clone(),
        this.type,
        this.sourceSpan
      );
    }
  },
  ht = class t extends k {
    receiver;
    name;
    value;
    constructor(e, n, s, r, o) {
      super(r || s.type, o), (this.receiver = e), (this.name = n), (this.value = s);
    }
    isEquivalent(e) {
      return (
        e instanceof t &&
        this.receiver.isEquivalent(e.receiver) &&
        this.name === e.name &&
        this.value.isEquivalent(e.value)
      );
    }
    isConstant() {
      return !1;
    }
    visitExpression(e, n) {
      return e.visitWritePropExpr(this, n);
    }
    clone() {
      return new t(
        this.receiver.clone(),
        this.name,
        this.value.clone(),
        this.type,
        this.sourceSpan
      );
    }
  },
  Xe = class t extends k {
    fn;
    args;
    pure;
    constructor(e, n, s, r, o = !1) {
      super(s, r), (this.fn = e), (this.args = n), (this.pure = o);
    }
    get receiver() {
      return this.fn;
    }
    isEquivalent(e) {
      return (
        e instanceof t &&
        this.fn.isEquivalent(e.fn) &&
        tt(this.args, e.args) &&
        this.pure === e.pure
      );
    }
    isConstant() {
      return !1;
    }
    visitExpression(e, n) {
      return e.visitInvokeFunctionExpr(this, n);
    }
    clone() {
      return new t(
        this.fn.clone(),
        this.args.map(e => e.clone()),
        this.type,
        this.sourceSpan,
        this.pure
      );
    }
  };
var ft = class t extends k {
    classExpr;
    args;
    constructor(e, n, s, r) {
      super(s, r), (this.classExpr = e), (this.args = n);
    }
    isEquivalent(e) {
      return e instanceof t && this.classExpr.isEquivalent(e.classExpr) && tt(this.args, e.args);
    }
    isConstant() {
      return !1;
    }
    visitExpression(e, n) {
      return e.visitInstantiateExpr(this, n);
    }
    clone() {
      return new t(
        this.classExpr.clone(),
        this.args.map(e => e.clone()),
        this.type,
        this.sourceSpan
      );
    }
  },
  Je = class t extends k {
    value;
    constructor(e, n, s) {
      super(n, s), (this.value = e);
    }
    isEquivalent(e) {
      return e instanceof t && this.value === e.value;
    }
    isConstant() {
      return !0;
    }
    visitExpression(e, n) {
      return e.visitLiteralExpr(this, n);
    }
    clone() {
      return new t(this.value, this.type, this.sourceSpan);
    }
  };
var dt = class t extends k {
  value;
  typeParams;
  constructor(e, n, s = null, r) {
    super(n, r), (this.value = e), (this.typeParams = s);
  }
  isEquivalent(e) {
    return (
      e instanceof t &&
      this.value.name === e.value.name &&
      this.value.moduleName === e.value.moduleName
    );
  }
  isConstant() {
    return !1;
  }
  visitExpression(e, n) {
    return e.visitExternalExpr(this, n);
  }
  clone() {
    return new t(this.value, this.type, this.typeParams, this.sourceSpan);
  }
};
var mt = class t extends k {
  condition;
  falseCase;
  trueCase;
  constructor(e, n, s = null, r, o) {
    super(r || n.type, o), (this.condition = e), (this.falseCase = s), (this.trueCase = n);
  }
  isEquivalent(e) {
    return (
      e instanceof t &&
      this.condition.isEquivalent(e.condition) &&
      this.trueCase.isEquivalent(e.trueCase) &&
      Bs(this.falseCase, e.falseCase)
    );
  }
  isConstant() {
    return !1;
  }
  visitExpression(e, n) {
    return e.visitConditionalExpr(this, n);
  }
  clone() {
    var e;
    return new t(
      this.condition.clone(),
      this.trueCase.clone(),
      (e = this.falseCase) == null ? void 0 : e.clone(),
      this.type,
      this.sourceSpan
    );
  }
};
var C = class t extends k {
    operator;
    rhs;
    parens;
    lhs;
    constructor(e, n, s, r, o, a = !0) {
      super(r || n.type, o), (this.operator = e), (this.rhs = s), (this.parens = a), (this.lhs = n);
    }
    isEquivalent(e) {
      return (
        e instanceof t &&
        this.operator === e.operator &&
        this.lhs.isEquivalent(e.lhs) &&
        this.rhs.isEquivalent(e.rhs)
      );
    }
    isConstant() {
      return !1;
    }
    visitExpression(e, n) {
      return e.visitBinaryOperatorExpr(this, n);
    }
    clone() {
      return new t(
        this.operator,
        this.lhs.clone(),
        this.rhs.clone(),
        this.type,
        this.sourceSpan,
        this.parens
      );
    }
  },
  gt = class t extends k {
    receiver;
    name;
    constructor(e, n, s, r) {
      super(s, r), (this.receiver = e), (this.name = n);
    }
    get index() {
      return this.name;
    }
    isEquivalent(e) {
      return e instanceof t && this.receiver.isEquivalent(e.receiver) && this.name === e.name;
    }
    isConstant() {
      return !1;
    }
    visitExpression(e, n) {
      return e.visitReadPropExpr(this, n);
    }
    set(e) {
      return new ht(this.receiver, this.name, e, null, this.sourceSpan);
    }
    clone() {
      return new t(this.receiver.clone(), this.name, this.type, this.sourceSpan);
    }
  },
  vt = class t extends k {
    receiver;
    index;
    constructor(e, n, s, r) {
      super(s, r), (this.receiver = e), (this.index = n);
    }
    isEquivalent(e) {
      return (
        e instanceof t && this.receiver.isEquivalent(e.receiver) && this.index.isEquivalent(e.index)
      );
    }
    isConstant() {
      return !1;
    }
    visitExpression(e, n) {
      return e.visitReadKeyExpr(this, n);
    }
    set(e) {
      return new pt(this.receiver, this.index, e, null, this.sourceSpan);
    }
    clone() {
      return new t(this.receiver.clone(), this.index.clone(), this.type, this.sourceSpan);
    }
  },
  Ye = class t extends k {
    entries;
    constructor(e, n, s) {
      super(n, s), (this.entries = e);
    }
    isConstant() {
      return this.entries.every(e => e.isConstant());
    }
    isEquivalent(e) {
      return e instanceof t && tt(this.entries, e.entries);
    }
    visitExpression(e, n) {
      return e.visitLiteralArrayExpr(this, n);
    }
    clone() {
      return new t(
        this.entries.map(e => e.clone()),
        this.type,
        this.sourceSpan
      );
    }
  };
var Qe = class t extends k {
  entries;
  valueType = null;
  constructor(e, n, s) {
    super(n, s), (this.entries = e), n && (this.valueType = n.valueType);
  }
  isEquivalent(e) {
    return e instanceof t && tt(this.entries, e.entries);
  }
  isConstant() {
    return this.entries.every(e => e.value.isConstant());
  }
  visitExpression(e, n) {
    return e.visitLiteralMapExpr(this, n);
  }
  clone() {
    let e = this.entries.map(n => n.clone());
    return new t(e, this.type, this.sourceSpan);
  }
};
var Ee;
(function (t) {
  (t[(t.None = 0)] = 'None'),
    (t[(t.Final = 1)] = 'Final'),
    (t[(t.Private = 2)] = 'Private'),
    (t[(t.Exported = 4)] = 'Exported'),
    (t[(t.Static = 8)] = 'Static');
})(Ee || (Ee = {}));
var Ke = class {
    modifiers;
    sourceSpan;
    leadingComments;
    constructor(e = Ee.None, n = null, s) {
      (this.modifiers = e), (this.sourceSpan = n), (this.leadingComments = s);
    }
    hasModifier(e) {
      return (this.modifiers & e) !== 0;
    }
    addLeadingComment(e) {
      (this.leadingComments = this.leadingComments ?? []), this.leadingComments.push(e);
    }
  },
  wt = class t extends Ke {
    name;
    value;
    type;
    constructor(e, n, s, r, o, a) {
      super(r, o, a), (this.name = e), (this.value = n), (this.type = s || (n && n.type) || null);
    }
    isEquivalent(e) {
      return (
        e instanceof t &&
        this.name === e.name &&
        (this.value ? !!e.value && this.value.isEquivalent(e.value) : !e.value)
      );
    }
    visitStatement(e, n) {
      return e.visitDeclareVarStmt(this, n);
    }
  };
var xt = class t extends Ke {
  expr;
  constructor(e, n, s) {
    super(Ee.None, n, s), (this.expr = e);
  }
  isEquivalent(e) {
    return e instanceof t && this.expr.isEquivalent(e.expr);
  }
  visitStatement(e, n) {
    return e.visitExpressionStmt(this, n);
  }
};
function Os(t, e, n) {
  return new Ge(t, e, n);
}
var Xr = Os('<unknown>');
var rn = class t {
  static INSTANCE = new t();
  keyOf(e) {
    if (e instanceof Je && typeof e.value == 'string') return `"${e.value}"`;
    if (e instanceof Je) return String(e.value);
    if (e instanceof Ye) {
      let n = [];
      for (let s of e.entries) n.push(this.keyOf(s));
      return `[${n.join(',')}]`;
    } else if (e instanceof Qe) {
      let n = [];
      for (let s of e.entries) {
        let r = s.key;
        s.quoted && (r = `"${r}"`), n.push(r + ':' + this.keyOf(s.value));
      }
      return `{${n.join(',')}}`;
    } else {
      if (e instanceof dt) return `import("${e.value.moduleName}", ${e.value.name})`;
      if (e instanceof Ge) return `read(${e.name})`;
      if (e instanceof ct) return `typeof(${this.keyOf(e.expr)})`;
      throw new Error(
        `${this.constructor.name} does not handle expressions of type ${e.constructor.name}`
      );
    }
  }
};
var i = '@angular/core',
  P = class {
    static NEW_METHOD = 'factory';
    static TRANSFORM_METHOD = 'transform';
    static PATCH_DEPS = 'patchedDeps';
    static core = { name: null, moduleName: i };
    static namespaceHTML = { name: '\u0275\u0275namespaceHTML', moduleName: i };
    static namespaceMathML = { name: '\u0275\u0275namespaceMathML', moduleName: i };
    static namespaceSVG = { name: '\u0275\u0275namespaceSVG', moduleName: i };
    static element = { name: '\u0275\u0275element', moduleName: i };
    static elementStart = { name: '\u0275\u0275elementStart', moduleName: i };
    static elementEnd = { name: '\u0275\u0275elementEnd', moduleName: i };
    static advance = { name: '\u0275\u0275advance', moduleName: i };
    static syntheticHostProperty = { name: '\u0275\u0275syntheticHostProperty', moduleName: i };
    static syntheticHostListener = { name: '\u0275\u0275syntheticHostListener', moduleName: i };
    static attribute = { name: '\u0275\u0275attribute', moduleName: i };
    static attributeInterpolate1 = { name: '\u0275\u0275attributeInterpolate1', moduleName: i };
    static attributeInterpolate2 = { name: '\u0275\u0275attributeInterpolate2', moduleName: i };
    static attributeInterpolate3 = { name: '\u0275\u0275attributeInterpolate3', moduleName: i };
    static attributeInterpolate4 = { name: '\u0275\u0275attributeInterpolate4', moduleName: i };
    static attributeInterpolate5 = { name: '\u0275\u0275attributeInterpolate5', moduleName: i };
    static attributeInterpolate6 = { name: '\u0275\u0275attributeInterpolate6', moduleName: i };
    static attributeInterpolate7 = { name: '\u0275\u0275attributeInterpolate7', moduleName: i };
    static attributeInterpolate8 = { name: '\u0275\u0275attributeInterpolate8', moduleName: i };
    static attributeInterpolateV = { name: '\u0275\u0275attributeInterpolateV', moduleName: i };
    static classProp = { name: '\u0275\u0275classProp', moduleName: i };
    static elementContainerStart = { name: '\u0275\u0275elementContainerStart', moduleName: i };
    static elementContainerEnd = { name: '\u0275\u0275elementContainerEnd', moduleName: i };
    static elementContainer = { name: '\u0275\u0275elementContainer', moduleName: i };
    static styleMap = { name: '\u0275\u0275styleMap', moduleName: i };
    static styleMapInterpolate1 = { name: '\u0275\u0275styleMapInterpolate1', moduleName: i };
    static styleMapInterpolate2 = { name: '\u0275\u0275styleMapInterpolate2', moduleName: i };
    static styleMapInterpolate3 = { name: '\u0275\u0275styleMapInterpolate3', moduleName: i };
    static styleMapInterpolate4 = { name: '\u0275\u0275styleMapInterpolate4', moduleName: i };
    static styleMapInterpolate5 = { name: '\u0275\u0275styleMapInterpolate5', moduleName: i };
    static styleMapInterpolate6 = { name: '\u0275\u0275styleMapInterpolate6', moduleName: i };
    static styleMapInterpolate7 = { name: '\u0275\u0275styleMapInterpolate7', moduleName: i };
    static styleMapInterpolate8 = { name: '\u0275\u0275styleMapInterpolate8', moduleName: i };
    static styleMapInterpolateV = { name: '\u0275\u0275styleMapInterpolateV', moduleName: i };
    static classMap = { name: '\u0275\u0275classMap', moduleName: i };
    static classMapInterpolate1 = { name: '\u0275\u0275classMapInterpolate1', moduleName: i };
    static classMapInterpolate2 = { name: '\u0275\u0275classMapInterpolate2', moduleName: i };
    static classMapInterpolate3 = { name: '\u0275\u0275classMapInterpolate3', moduleName: i };
    static classMapInterpolate4 = { name: '\u0275\u0275classMapInterpolate4', moduleName: i };
    static classMapInterpolate5 = { name: '\u0275\u0275classMapInterpolate5', moduleName: i };
    static classMapInterpolate6 = { name: '\u0275\u0275classMapInterpolate6', moduleName: i };
    static classMapInterpolate7 = { name: '\u0275\u0275classMapInterpolate7', moduleName: i };
    static classMapInterpolate8 = { name: '\u0275\u0275classMapInterpolate8', moduleName: i };
    static classMapInterpolateV = { name: '\u0275\u0275classMapInterpolateV', moduleName: i };
    static styleProp = { name: '\u0275\u0275styleProp', moduleName: i };
    static stylePropInterpolate1 = { name: '\u0275\u0275stylePropInterpolate1', moduleName: i };
    static stylePropInterpolate2 = { name: '\u0275\u0275stylePropInterpolate2', moduleName: i };
    static stylePropInterpolate3 = { name: '\u0275\u0275stylePropInterpolate3', moduleName: i };
    static stylePropInterpolate4 = { name: '\u0275\u0275stylePropInterpolate4', moduleName: i };
    static stylePropInterpolate5 = { name: '\u0275\u0275stylePropInterpolate5', moduleName: i };
    static stylePropInterpolate6 = { name: '\u0275\u0275stylePropInterpolate6', moduleName: i };
    static stylePropInterpolate7 = { name: '\u0275\u0275stylePropInterpolate7', moduleName: i };
    static stylePropInterpolate8 = { name: '\u0275\u0275stylePropInterpolate8', moduleName: i };
    static stylePropInterpolateV = { name: '\u0275\u0275stylePropInterpolateV', moduleName: i };
    static nextContext = { name: '\u0275\u0275nextContext', moduleName: i };
    static resetView = { name: '\u0275\u0275resetView', moduleName: i };
    static templateCreate = { name: '\u0275\u0275template', moduleName: i };
    static defer = { name: '\u0275\u0275defer', moduleName: i };
    static deferWhen = { name: '\u0275\u0275deferWhen', moduleName: i };
    static deferOnIdle = { name: '\u0275\u0275deferOnIdle', moduleName: i };
    static deferOnImmediate = { name: '\u0275\u0275deferOnImmediate', moduleName: i };
    static deferOnTimer = { name: '\u0275\u0275deferOnTimer', moduleName: i };
    static deferOnHover = { name: '\u0275\u0275deferOnHover', moduleName: i };
    static deferOnInteraction = { name: '\u0275\u0275deferOnInteraction', moduleName: i };
    static deferOnViewport = { name: '\u0275\u0275deferOnViewport', moduleName: i };
    static deferPrefetchWhen = { name: '\u0275\u0275deferPrefetchWhen', moduleName: i };
    static deferPrefetchOnIdle = { name: '\u0275\u0275deferPrefetchOnIdle', moduleName: i };
    static deferPrefetchOnImmediate = {
      name: '\u0275\u0275deferPrefetchOnImmediate',
      moduleName: i,
    };
    static deferPrefetchOnTimer = { name: '\u0275\u0275deferPrefetchOnTimer', moduleName: i };
    static deferPrefetchOnHover = { name: '\u0275\u0275deferPrefetchOnHover', moduleName: i };
    static deferPrefetchOnInteraction = {
      name: '\u0275\u0275deferPrefetchOnInteraction',
      moduleName: i,
    };
    static deferPrefetchOnViewport = { name: '\u0275\u0275deferPrefetchOnViewport', moduleName: i };
    static deferHydrateWhen = { name: '\u0275\u0275deferHydrateWhen', moduleName: i };
    static deferHydrateNever = { name: '\u0275\u0275deferHydrateNever', moduleName: i };
    static deferHydrateOnIdle = { name: '\u0275\u0275deferHydrateOnIdle', moduleName: i };
    static deferHydrateOnImmediate = { name: '\u0275\u0275deferHydrateOnImmediate', moduleName: i };
    static deferHydrateOnTimer = { name: '\u0275\u0275deferHydrateOnTimer', moduleName: i };
    static deferHydrateOnHover = { name: '\u0275\u0275deferHydrateOnHover', moduleName: i };
    static deferHydrateOnInteraction = {
      name: '\u0275\u0275deferHydrateOnInteraction',
      moduleName: i,
    };
    static deferHydrateOnViewport = { name: '\u0275\u0275deferHydrateOnViewport', moduleName: i };
    static deferEnableTimerScheduling = {
      name: '\u0275\u0275deferEnableTimerScheduling',
      moduleName: i,
    };
    static conditional = { name: '\u0275\u0275conditional', moduleName: i };
    static repeater = { name: '\u0275\u0275repeater', moduleName: i };
    static repeaterCreate = { name: '\u0275\u0275repeaterCreate', moduleName: i };
    static repeaterTrackByIndex = { name: '\u0275\u0275repeaterTrackByIndex', moduleName: i };
    static repeaterTrackByIdentity = { name: '\u0275\u0275repeaterTrackByIdentity', moduleName: i };
    static componentInstance = { name: '\u0275\u0275componentInstance', moduleName: i };
    static text = { name: '\u0275\u0275text', moduleName: i };
    static enableBindings = { name: '\u0275\u0275enableBindings', moduleName: i };
    static disableBindings = { name: '\u0275\u0275disableBindings', moduleName: i };
    static getCurrentView = { name: '\u0275\u0275getCurrentView', moduleName: i };
    static textInterpolate = { name: '\u0275\u0275textInterpolate', moduleName: i };
    static textInterpolate1 = { name: '\u0275\u0275textInterpolate1', moduleName: i };
    static textInterpolate2 = { name: '\u0275\u0275textInterpolate2', moduleName: i };
    static textInterpolate3 = { name: '\u0275\u0275textInterpolate3', moduleName: i };
    static textInterpolate4 = { name: '\u0275\u0275textInterpolate4', moduleName: i };
    static textInterpolate5 = { name: '\u0275\u0275textInterpolate5', moduleName: i };
    static textInterpolate6 = { name: '\u0275\u0275textInterpolate6', moduleName: i };
    static textInterpolate7 = { name: '\u0275\u0275textInterpolate7', moduleName: i };
    static textInterpolate8 = { name: '\u0275\u0275textInterpolate8', moduleName: i };
    static textInterpolateV = { name: '\u0275\u0275textInterpolateV', moduleName: i };
    static restoreView = { name: '\u0275\u0275restoreView', moduleName: i };
    static pureFunction0 = { name: '\u0275\u0275pureFunction0', moduleName: i };
    static pureFunction1 = { name: '\u0275\u0275pureFunction1', moduleName: i };
    static pureFunction2 = { name: '\u0275\u0275pureFunction2', moduleName: i };
    static pureFunction3 = { name: '\u0275\u0275pureFunction3', moduleName: i };
    static pureFunction4 = { name: '\u0275\u0275pureFunction4', moduleName: i };
    static pureFunction5 = { name: '\u0275\u0275pureFunction5', moduleName: i };
    static pureFunction6 = { name: '\u0275\u0275pureFunction6', moduleName: i };
    static pureFunction7 = { name: '\u0275\u0275pureFunction7', moduleName: i };
    static pureFunction8 = { name: '\u0275\u0275pureFunction8', moduleName: i };
    static pureFunctionV = { name: '\u0275\u0275pureFunctionV', moduleName: i };
    static pipeBind1 = { name: '\u0275\u0275pipeBind1', moduleName: i };
    static pipeBind2 = { name: '\u0275\u0275pipeBind2', moduleName: i };
    static pipeBind3 = { name: '\u0275\u0275pipeBind3', moduleName: i };
    static pipeBind4 = { name: '\u0275\u0275pipeBind4', moduleName: i };
    static pipeBindV = { name: '\u0275\u0275pipeBindV', moduleName: i };
    static hostProperty = { name: '\u0275\u0275hostProperty', moduleName: i };
    static property = { name: '\u0275\u0275property', moduleName: i };
    static propertyInterpolate = { name: '\u0275\u0275propertyInterpolate', moduleName: i };
    static propertyInterpolate1 = { name: '\u0275\u0275propertyInterpolate1', moduleName: i };
    static propertyInterpolate2 = { name: '\u0275\u0275propertyInterpolate2', moduleName: i };
    static propertyInterpolate3 = { name: '\u0275\u0275propertyInterpolate3', moduleName: i };
    static propertyInterpolate4 = { name: '\u0275\u0275propertyInterpolate4', moduleName: i };
    static propertyInterpolate5 = { name: '\u0275\u0275propertyInterpolate5', moduleName: i };
    static propertyInterpolate6 = { name: '\u0275\u0275propertyInterpolate6', moduleName: i };
    static propertyInterpolate7 = { name: '\u0275\u0275propertyInterpolate7', moduleName: i };
    static propertyInterpolate8 = { name: '\u0275\u0275propertyInterpolate8', moduleName: i };
    static propertyInterpolateV = { name: '\u0275\u0275propertyInterpolateV', moduleName: i };
    static i18n = { name: '\u0275\u0275i18n', moduleName: i };
    static i18nAttributes = { name: '\u0275\u0275i18nAttributes', moduleName: i };
    static i18nExp = { name: '\u0275\u0275i18nExp', moduleName: i };
    static i18nStart = { name: '\u0275\u0275i18nStart', moduleName: i };
    static i18nEnd = { name: '\u0275\u0275i18nEnd', moduleName: i };
    static i18nApply = { name: '\u0275\u0275i18nApply', moduleName: i };
    static i18nPostprocess = { name: '\u0275\u0275i18nPostprocess', moduleName: i };
    static pipe = { name: '\u0275\u0275pipe', moduleName: i };
    static projection = { name: '\u0275\u0275projection', moduleName: i };
    static projectionDef = { name: '\u0275\u0275projectionDef', moduleName: i };
    static reference = { name: '\u0275\u0275reference', moduleName: i };
    static inject = { name: '\u0275\u0275inject', moduleName: i };
    static injectAttribute = { name: '\u0275\u0275injectAttribute', moduleName: i };
    static directiveInject = { name: '\u0275\u0275directiveInject', moduleName: i };
    static invalidFactory = { name: '\u0275\u0275invalidFactory', moduleName: i };
    static invalidFactoryDep = { name: '\u0275\u0275invalidFactoryDep', moduleName: i };
    static templateRefExtractor = { name: '\u0275\u0275templateRefExtractor', moduleName: i };
    static forwardRef = { name: 'forwardRef', moduleName: i };
    static resolveForwardRef = { name: 'resolveForwardRef', moduleName: i };
    static replaceMetadata = { name: '\u0275\u0275replaceMetadata', moduleName: i };
    static ɵɵdefineInjectable = { name: '\u0275\u0275defineInjectable', moduleName: i };
    static declareInjectable = { name: '\u0275\u0275ngDeclareInjectable', moduleName: i };
    static InjectableDeclaration = { name: '\u0275\u0275InjectableDeclaration', moduleName: i };
    static resolveWindow = { name: '\u0275\u0275resolveWindow', moduleName: i };
    static resolveDocument = { name: '\u0275\u0275resolveDocument', moduleName: i };
    static resolveBody = { name: '\u0275\u0275resolveBody', moduleName: i };
    static getComponentDepsFactory = { name: '\u0275\u0275getComponentDepsFactory', moduleName: i };
    static defineComponent = { name: '\u0275\u0275defineComponent', moduleName: i };
    static declareComponent = { name: '\u0275\u0275ngDeclareComponent', moduleName: i };
    static setComponentScope = { name: '\u0275\u0275setComponentScope', moduleName: i };
    static ChangeDetectionStrategy = { name: 'ChangeDetectionStrategy', moduleName: i };
    static ViewEncapsulation = { name: 'ViewEncapsulation', moduleName: i };
    static ComponentDeclaration = { name: '\u0275\u0275ComponentDeclaration', moduleName: i };
    static FactoryDeclaration = { name: '\u0275\u0275FactoryDeclaration', moduleName: i };
    static declareFactory = { name: '\u0275\u0275ngDeclareFactory', moduleName: i };
    static FactoryTarget = { name: '\u0275\u0275FactoryTarget', moduleName: i };
    static defineDirective = { name: '\u0275\u0275defineDirective', moduleName: i };
    static declareDirective = { name: '\u0275\u0275ngDeclareDirective', moduleName: i };
    static DirectiveDeclaration = { name: '\u0275\u0275DirectiveDeclaration', moduleName: i };
    static InjectorDef = { name: '\u0275\u0275InjectorDef', moduleName: i };
    static InjectorDeclaration = { name: '\u0275\u0275InjectorDeclaration', moduleName: i };
    static defineInjector = { name: '\u0275\u0275defineInjector', moduleName: i };
    static declareInjector = { name: '\u0275\u0275ngDeclareInjector', moduleName: i };
    static NgModuleDeclaration = { name: '\u0275\u0275NgModuleDeclaration', moduleName: i };
    static ModuleWithProviders = { name: 'ModuleWithProviders', moduleName: i };
    static defineNgModule = { name: '\u0275\u0275defineNgModule', moduleName: i };
    static declareNgModule = { name: '\u0275\u0275ngDeclareNgModule', moduleName: i };
    static setNgModuleScope = { name: '\u0275\u0275setNgModuleScope', moduleName: i };
    static registerNgModuleType = { name: '\u0275\u0275registerNgModuleType', moduleName: i };
    static PipeDeclaration = { name: '\u0275\u0275PipeDeclaration', moduleName: i };
    static definePipe = { name: '\u0275\u0275definePipe', moduleName: i };
    static declarePipe = { name: '\u0275\u0275ngDeclarePipe', moduleName: i };
    static declareClassMetadata = { name: '\u0275\u0275ngDeclareClassMetadata', moduleName: i };
    static declareClassMetadataAsync = {
      name: '\u0275\u0275ngDeclareClassMetadataAsync',
      moduleName: i,
    };
    static setClassMetadata = { name: '\u0275setClassMetadata', moduleName: i };
    static setClassMetadataAsync = { name: '\u0275setClassMetadataAsync', moduleName: i };
    static setClassDebugInfo = { name: '\u0275setClassDebugInfo', moduleName: i };
    static queryRefresh = { name: '\u0275\u0275queryRefresh', moduleName: i };
    static viewQuery = { name: '\u0275\u0275viewQuery', moduleName: i };
    static loadQuery = { name: '\u0275\u0275loadQuery', moduleName: i };
    static contentQuery = { name: '\u0275\u0275contentQuery', moduleName: i };
    static viewQuerySignal = { name: '\u0275\u0275viewQuerySignal', moduleName: i };
    static contentQuerySignal = { name: '\u0275\u0275contentQuerySignal', moduleName: i };
    static queryAdvance = { name: '\u0275\u0275queryAdvance', moduleName: i };
    static twoWayProperty = { name: '\u0275\u0275twoWayProperty', moduleName: i };
    static twoWayBindingSet = { name: '\u0275\u0275twoWayBindingSet', moduleName: i };
    static twoWayListener = { name: '\u0275\u0275twoWayListener', moduleName: i };
    static declareLet = { name: '\u0275\u0275declareLet', moduleName: i };
    static storeLet = { name: '\u0275\u0275storeLet', moduleName: i };
    static readContextLet = { name: '\u0275\u0275readContextLet', moduleName: i };
    static attachSourceLocations = { name: '\u0275\u0275attachSourceLocations', moduleName: i };
    static NgOnChangesFeature = { name: '\u0275\u0275NgOnChangesFeature', moduleName: i };
    static InheritDefinitionFeature = {
      name: '\u0275\u0275InheritDefinitionFeature',
      moduleName: i,
    };
    static CopyDefinitionFeature = { name: '\u0275\u0275CopyDefinitionFeature', moduleName: i };
    static ProvidersFeature = { name: '\u0275\u0275ProvidersFeature', moduleName: i };
    static HostDirectivesFeature = { name: '\u0275\u0275HostDirectivesFeature', moduleName: i };
    static InputTransformsFeatureFeature = {
      name: '\u0275\u0275InputTransformsFeature',
      moduleName: i,
    };
    static ExternalStylesFeature = { name: '\u0275\u0275ExternalStylesFeature', moduleName: i };
    static listener = { name: '\u0275\u0275listener', moduleName: i };
    static getInheritedFactory = { name: '\u0275\u0275getInheritedFactory', moduleName: i };
    static sanitizeHtml = { name: '\u0275\u0275sanitizeHtml', moduleName: i };
    static sanitizeStyle = { name: '\u0275\u0275sanitizeStyle', moduleName: i };
    static sanitizeResourceUrl = { name: '\u0275\u0275sanitizeResourceUrl', moduleName: i };
    static sanitizeScript = { name: '\u0275\u0275sanitizeScript', moduleName: i };
    static sanitizeUrl = { name: '\u0275\u0275sanitizeUrl', moduleName: i };
    static sanitizeUrlOrResourceUrl = {
      name: '\u0275\u0275sanitizeUrlOrResourceUrl',
      moduleName: i,
    };
    static trustConstantHtml = { name: '\u0275\u0275trustConstantHtml', moduleName: i };
    static trustConstantResourceUrl = {
      name: '\u0275\u0275trustConstantResourceUrl',
      moduleName: i,
    };
    static validateIframeAttribute = { name: '\u0275\u0275validateIframeAttribute', moduleName: i };
    static InputSignalBrandWriteType = {
      name: '\u0275INPUT_SIGNAL_BRAND_WRITE_TYPE',
      moduleName: i,
    };
    static UnwrapDirectiveSignalInputs = {
      name: '\u0275UnwrapDirectiveSignalInputs',
      moduleName: i,
    };
    static unwrapWritableSignal = { name: '\u0275unwrapWritableSignal', moduleName: i };
  };
var St = class {
  full;
  major;
  minor;
  patch;
  constructor(e) {
    this.full = e;
    let n = e.split('.');
    (this.major = n[0]), (this.minor = n[1]), (this.patch = n.slice(2).join('.'));
  }
};
var on;
(function (t) {
  (t[(t.Class = 0)] = 'Class'), (t[(t.Function = 1)] = 'Function');
})(on || (on = {}));
var an;
(function (t) {
  (t[(t.Directive = 0)] = 'Directive'),
    (t[(t.Component = 1)] = 'Component'),
    (t[(t.Injectable = 2)] = 'Injectable'),
    (t[(t.Pipe = 3)] = 'Pipe'),
    (t[(t.NgModule = 4)] = 'NgModule');
})(an || (an = {}));
var ye = class {
    input;
    errLocation;
    ctxLocation;
    message;
    constructor(e, n, s, r) {
      (this.input = n),
        (this.errLocation = s),
        (this.ctxLocation = r),
        (this.message = `Parser Error: ${e} ${s} [${n}] in ${r}`);
    }
  },
  G = class {
    start;
    end;
    constructor(e, n) {
      (this.start = e), (this.end = n);
    }
    toAbsolute(e) {
      return new O(e + this.start, e + this.end);
    }
  },
  E = class {
    span;
    sourceSpan;
    constructor(e, n) {
      (this.span = e), (this.sourceSpan = n);
    }
    toString() {
      return 'AST';
    }
  },
  se = class extends E {
    nameSpan;
    constructor(e, n, s) {
      super(e, n), (this.nameSpan = s);
    }
  },
  b = class extends E {
    visit(e, n = null) {}
  },
  X = class extends E {
    visit(e, n = null) {
      return e.visitImplicitReceiver(this, n);
    }
  },
  Et = class extends X {
    visit(e, n = null) {
      var s;
      return (s = e.visitThisReceiver) == null ? void 0 : s.call(e, this, n);
    }
  },
  _e = class extends E {
    expressions;
    constructor(e, n, s) {
      super(e, n), (this.expressions = s);
    }
    visit(e, n = null) {
      return e.visitChain(this, n);
    }
  },
  Ce = class extends E {
    condition;
    trueExp;
    falseExp;
    constructor(e, n, s, r, o) {
      super(e, n), (this.condition = s), (this.trueExp = r), (this.falseExp = o);
    }
    visit(e, n = null) {
      return e.visitConditional(this, n);
    }
  },
  re = class extends se {
    receiver;
    name;
    constructor(e, n, s, r, o) {
      super(e, n, s), (this.receiver = r), (this.name = o);
    }
    visit(e, n = null) {
      return e.visitPropertyRead(this, n);
    }
  },
  Te = class extends se {
    receiver;
    name;
    value;
    constructor(e, n, s, r, o, a) {
      super(e, n, s), (this.receiver = r), (this.name = o), (this.value = a);
    }
    visit(e, n = null) {
      return e.visitPropertyWrite(this, n);
    }
  },
  ie = class extends se {
    receiver;
    name;
    constructor(e, n, s, r, o) {
      super(e, n, s), (this.receiver = r), (this.name = o);
    }
    visit(e, n = null) {
      return e.visitSafePropertyRead(this, n);
    }
  },
  ke = class extends E {
    receiver;
    key;
    constructor(e, n, s, r) {
      super(e, n), (this.receiver = s), (this.key = r);
    }
    visit(e, n = null) {
      return e.visitKeyedRead(this, n);
    }
  },
  oe = class extends E {
    receiver;
    key;
    constructor(e, n, s, r) {
      super(e, n), (this.receiver = s), (this.key = r);
    }
    visit(e, n = null) {
      return e.visitSafeKeyedRead(this, n);
    }
  },
  Ie = class extends E {
    receiver;
    key;
    value;
    constructor(e, n, s, r, o) {
      super(e, n), (this.receiver = s), (this.key = r), (this.value = o);
    }
    visit(e, n = null) {
      return e.visitKeyedWrite(this, n);
    }
  },
  be = class extends se {
    exp;
    name;
    args;
    constructor(e, n, s, r, o, a) {
      super(e, n, a), (this.exp = s), (this.name = r), (this.args = o);
    }
    visit(e, n = null) {
      return e.visitPipe(this, n);
    }
  },
  N = class extends E {
    value;
    constructor(e, n, s) {
      super(e, n), (this.value = s);
    }
    visit(e, n = null) {
      return e.visitLiteralPrimitive(this, n);
    }
  },
  Ne = class extends E {
    expressions;
    constructor(e, n, s) {
      super(e, n), (this.expressions = s);
    }
    visit(e, n = null) {
      return e.visitLiteralArray(this, n);
    }
  },
  Ae = class extends E {
    keys;
    values;
    constructor(e, n, s, r) {
      super(e, n), (this.keys = s), (this.values = r);
    }
    visit(e, n = null) {
      return e.visitLiteralMap(this, n);
    }
  },
  Pe = class extends E {
    strings;
    expressions;
    constructor(e, n, s, r) {
      super(e, n), (this.strings = s), (this.expressions = r);
    }
    visit(e, n = null) {
      return e.visitInterpolation(this, n);
    }
  },
  A = class extends E {
    operation;
    left;
    right;
    constructor(e, n, s, r, o) {
      super(e, n), (this.operation = s), (this.left = r), (this.right = o);
    }
    visit(e, n = null) {
      return e.visitBinary(this, n);
    }
  },
  ae = class t extends A {
    operator;
    expr;
    left = null;
    right = null;
    operation = null;
    static createMinus(e, n, s) {
      return new t(e, n, '-', s, '-', new N(e, n, 0), s);
    }
    static createPlus(e, n, s) {
      return new t(e, n, '+', s, '-', s, new N(e, n, 0));
    }
    constructor(e, n, s, r, o, a, l) {
      super(e, n, o, a, l), (this.operator = s), (this.expr = r);
    }
    visit(e, n = null) {
      return e.visitUnary !== void 0 ? e.visitUnary(this, n) : e.visitBinary(this, n);
    }
  },
  Le = class extends E {
    expression;
    constructor(e, n, s) {
      super(e, n), (this.expression = s);
    }
    visit(e, n = null) {
      return e.visitPrefixNot(this, n);
    }
  },
  Me = class extends E {
    expression;
    constructor(e, n, s) {
      super(e, n), (this.expression = s);
    }
    visit(e, n = null) {
      return e.visitTypeofExpression(this, n);
    }
  },
  $e = class extends E {
    expression;
    constructor(e, n, s) {
      super(e, n), (this.expression = s);
    }
    visit(e, n = null) {
      return e.visitNonNullAssert(this, n);
    }
  },
  Re = class extends E {
    receiver;
    args;
    argumentSpan;
    constructor(e, n, s, r, o) {
      super(e, n), (this.receiver = s), (this.args = r), (this.argumentSpan = o);
    }
    visit(e, n = null) {
      return e.visitCall(this, n);
    }
  },
  le = class extends E {
    receiver;
    args;
    argumentSpan;
    constructor(e, n, s, r, o) {
      super(e, n), (this.receiver = s), (this.args = r), (this.argumentSpan = o);
    }
    visit(e, n = null) {
      return e.visitSafeCall(this, n);
    }
  },
  O = class {
    start;
    end;
    constructor(e, n) {
      (this.start = e), (this.end = n);
    }
  },
  W = class extends E {
    ast;
    source;
    location;
    errors;
    constructor(e, n, s, r, o) {
      super(new G(0, n === null ? 0 : n.length), new O(r, n === null ? r : r + n.length)),
        (this.ast = e),
        (this.source = n),
        (this.location = s),
        (this.errors = o);
    }
    visit(e, n = null) {
      return e.visitASTWithSource ? e.visitASTWithSource(this, n) : this.ast.visit(e, n);
    }
    toString() {
      return `${this.source} in ${this.location}`;
    }
  },
  ce = class {
    sourceSpan;
    key;
    value;
    constructor(e, n, s) {
      (this.sourceSpan = e), (this.key = n), (this.value = s);
    }
  },
  Be = class {
    sourceSpan;
    key;
    value;
    constructor(e, n, s) {
      (this.sourceSpan = e), (this.key = n), (this.value = s);
    }
  },
  yt = class {
    visit(e, n) {
      e.visit(this, n);
    }
    visitUnary(e, n) {
      this.visit(e.expr, n);
    }
    visitBinary(e, n) {
      this.visit(e.left, n), this.visit(e.right, n);
    }
    visitChain(e, n) {
      this.visitAll(e.expressions, n);
    }
    visitConditional(e, n) {
      this.visit(e.condition, n), this.visit(e.trueExp, n), this.visit(e.falseExp, n);
    }
    visitPipe(e, n) {
      this.visit(e.exp, n), this.visitAll(e.args, n);
    }
    visitImplicitReceiver(e, n) {}
    visitThisReceiver(e, n) {}
    visitInterpolation(e, n) {
      this.visitAll(e.expressions, n);
    }
    visitKeyedRead(e, n) {
      this.visit(e.receiver, n), this.visit(e.key, n);
    }
    visitKeyedWrite(e, n) {
      this.visit(e.receiver, n), this.visit(e.key, n), this.visit(e.value, n);
    }
    visitLiteralArray(e, n) {
      this.visitAll(e.expressions, n);
    }
    visitLiteralMap(e, n) {
      this.visitAll(e.values, n);
    }
    visitLiteralPrimitive(e, n) {}
    visitPrefixNot(e, n) {
      this.visit(e.expression, n);
    }
    visitTypeofExpression(e, n) {
      this.visit(e.expression, n);
    }
    visitNonNullAssert(e, n) {
      this.visit(e.expression, n);
    }
    visitPropertyRead(e, n) {
      this.visit(e.receiver, n);
    }
    visitPropertyWrite(e, n) {
      this.visit(e.receiver, n), this.visit(e.value, n);
    }
    visitSafePropertyRead(e, n) {
      this.visit(e.receiver, n);
    }
    visitSafeKeyedRead(e, n) {
      this.visit(e.receiver, n), this.visit(e.key, n);
    }
    visitCall(e, n) {
      this.visit(e.receiver, n), this.visitAll(e.args, n);
    }
    visitSafeCall(e, n) {
      this.visit(e.receiver, n), this.visitAll(e.args, n);
    }
    visitAll(e, n) {
      for (let s of e) this.visit(s, n);
    }
  };
var ln;
(function (t) {
  (t[(t.DEFAULT = 0)] = 'DEFAULT'),
    (t[(t.LITERAL_ATTR = 1)] = 'LITERAL_ATTR'),
    (t[(t.ANIMATION = 2)] = 'ANIMATION'),
    (t[(t.TWO_WAY = 3)] = 'TWO_WAY');
})(ln || (ln = {}));
var cn;
(function (t) {
  (t[(t.Regular = 0)] = 'Regular'),
    (t[(t.Animation = 1)] = 'Animation'),
    (t[(t.TwoWay = 2)] = 'TwoWay');
})(cn || (cn = {}));
var H;
(function (t) {
  (t[(t.Property = 0)] = 'Property'),
    (t[(t.Attribute = 1)] = 'Attribute'),
    (t[(t.Class = 2)] = 'Class'),
    (t[(t.Style = 3)] = 'Style'),
    (t[(t.Animation = 4)] = 'Animation'),
    (t[(t.TwoWay = 5)] = 'TwoWay');
})(H || (H = {}));
var un;
(function (t) {
  (t[(t.RAW_TEXT = 0)] = 'RAW_TEXT'),
    (t[(t.ESCAPABLE_RAW_TEXT = 1)] = 'ESCAPABLE_RAW_TEXT'),
    (t[(t.PARSABLE_DATA = 2)] = 'PARSABLE_DATA');
})(un || (un = {}));
var Fs = [/@/, /^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
function Vs(t, e) {
  if (e != null && !(Array.isArray(e) && e.length == 2))
    throw new Error(`Expected '${t}' to be an array, [start, end].`);
  if (e != null) {
    let n = e[0],
      s = e[1];
    Fs.forEach(r => {
      if (r.test(n) || r.test(s))
        throw new Error(`['${n}', '${s}'] contains unusable interpolation symbol.`);
    });
  }
}
var _t = class t {
    start;
    end;
    static fromArray(e) {
      return e ? (Vs('interpolation', e), new t(e[0], e[1])) : Z;
    }
    constructor(e, n) {
      (this.start = e), (this.end = n);
    }
  },
  Z = new _t('{{', '}}');
var ot = 0;
var Un = 9,
  Hs = 10,
  Us = 11,
  Ws = 12,
  qs = 13,
  Wn = 32,
  js = 33,
  qn = 34,
  zs = 35,
  jn = 36,
  Gs = 37,
  pn = 38,
  zn = 39,
  je = 40,
  me = 41,
  Xs = 42,
  Gn = 43,
  ge = 44,
  Xn = 45,
  ee = 46,
  Ct = 47,
  te = 58,
  ve = 59,
  Js = 60,
  qe = 61,
  Ys = 62,
  hn = 63,
  Qs = 48;
var Ks = 57,
  Jn = 65,
  Zs = 69;
var Yn = 90,
  ze = 91,
  er = 92,
  we = 93,
  tr = 94,
  Mt = 95,
  Qn = 97;
var nr = 101,
  sr = 102,
  rr = 110,
  ir = 114,
  or = 116,
  ar = 117,
  lr = 118;
var Kn = 122,
  Tt = 123,
  fn = 124,
  xe = 125,
  Zn = 160;
var cr = 96;
function ur(t) {
  return (t >= Un && t <= Wn) || t == Zn;
}
function j(t) {
  return Qs <= t && t <= Ks;
}
function pr(t) {
  return (t >= Qn && t <= Kn) || (t >= Jn && t <= Yn);
}
function dn(t) {
  return t === zn || t === qn || t === cr;
}
var mn;
(function (t) {
  (t[(t.WARNING = 0)] = 'WARNING'), (t[(t.ERROR = 1)] = 'ERROR');
})(mn || (mn = {}));
var gn;
(function (t) {
  (t[(t.Inline = 0)] = 'Inline'),
    (t[(t.SideEffect = 1)] = 'SideEffect'),
    (t[(t.Omit = 2)] = 'Omit');
})(gn || (gn = {}));
var vn;
(function (t) {
  (t[(t.Global = 0)] = 'Global'), (t[(t.Local = 1)] = 'Local');
})(vn || (vn = {}));
var wn;
(function (t) {
  (t[(t.Directive = 0)] = 'Directive'),
    (t[(t.Pipe = 1)] = 'Pipe'),
    (t[(t.NgModule = 2)] = 'NgModule');
})(wn || (wn = {}));
var hr = '(:(where|is)\\()?';
var es = '-shadowcsshost',
  ts = '-shadowcsscontext',
  $t = '(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)',
  Jr = new RegExp(es + $t, 'gim'),
  Yr = new RegExp(hr + '(' + ts + $t + ')', 'gim'),
  Qr = new RegExp(ts + $t, 'im'),
  fr = es + '-no-combinator',
  Kr = new RegExp(`${fr}(?![^(]*\\))`, 'g');
var ns = '%COMMENT%',
  Zr = new RegExp(ns, 'g');
var ei = new RegExp(
  `(\\s*(?:${ns}\\s*)*)([^;\\{\\}]+?)(\\s*)((?:{%BLOCK%}?\\s*;?)|(?:\\s*;))`,
  'g'
);
var dr = '%COMMA_IN_PLACEHOLDER%',
  mr = '%SEMI_IN_PLACEHOLDER%',
  gr = '%COLON_IN_PLACEHOLDER%',
  ti = new RegExp(dr, 'g'),
  ni = new RegExp(mr, 'g'),
  si = new RegExp(gr, 'g');
var f;
(function (t) {
  (t[(t.ListEnd = 0)] = 'ListEnd'),
    (t[(t.Statement = 1)] = 'Statement'),
    (t[(t.Variable = 2)] = 'Variable'),
    (t[(t.ElementStart = 3)] = 'ElementStart'),
    (t[(t.Element = 4)] = 'Element'),
    (t[(t.Template = 5)] = 'Template'),
    (t[(t.ElementEnd = 6)] = 'ElementEnd'),
    (t[(t.ContainerStart = 7)] = 'ContainerStart'),
    (t[(t.Container = 8)] = 'Container'),
    (t[(t.ContainerEnd = 9)] = 'ContainerEnd'),
    (t[(t.DisableBindings = 10)] = 'DisableBindings'),
    (t[(t.Conditional = 11)] = 'Conditional'),
    (t[(t.EnableBindings = 12)] = 'EnableBindings'),
    (t[(t.Text = 13)] = 'Text'),
    (t[(t.Listener = 14)] = 'Listener'),
    (t[(t.InterpolateText = 15)] = 'InterpolateText'),
    (t[(t.Binding = 16)] = 'Binding'),
    (t[(t.Property = 17)] = 'Property'),
    (t[(t.StyleProp = 18)] = 'StyleProp'),
    (t[(t.ClassProp = 19)] = 'ClassProp'),
    (t[(t.StyleMap = 20)] = 'StyleMap'),
    (t[(t.ClassMap = 21)] = 'ClassMap'),
    (t[(t.Advance = 22)] = 'Advance'),
    (t[(t.Pipe = 23)] = 'Pipe'),
    (t[(t.Attribute = 24)] = 'Attribute'),
    (t[(t.ExtractedAttribute = 25)] = 'ExtractedAttribute'),
    (t[(t.Defer = 26)] = 'Defer'),
    (t[(t.DeferOn = 27)] = 'DeferOn'),
    (t[(t.DeferWhen = 28)] = 'DeferWhen'),
    (t[(t.I18nMessage = 29)] = 'I18nMessage'),
    (t[(t.HostProperty = 30)] = 'HostProperty'),
    (t[(t.Namespace = 31)] = 'Namespace'),
    (t[(t.ProjectionDef = 32)] = 'ProjectionDef'),
    (t[(t.Projection = 33)] = 'Projection'),
    (t[(t.RepeaterCreate = 34)] = 'RepeaterCreate'),
    (t[(t.Repeater = 35)] = 'Repeater'),
    (t[(t.TwoWayProperty = 36)] = 'TwoWayProperty'),
    (t[(t.TwoWayListener = 37)] = 'TwoWayListener'),
    (t[(t.DeclareLet = 38)] = 'DeclareLet'),
    (t[(t.StoreLet = 39)] = 'StoreLet'),
    (t[(t.I18nStart = 40)] = 'I18nStart'),
    (t[(t.I18n = 41)] = 'I18n'),
    (t[(t.I18nEnd = 42)] = 'I18nEnd'),
    (t[(t.I18nExpression = 43)] = 'I18nExpression'),
    (t[(t.I18nApply = 44)] = 'I18nApply'),
    (t[(t.IcuStart = 45)] = 'IcuStart'),
    (t[(t.IcuEnd = 46)] = 'IcuEnd'),
    (t[(t.IcuPlaceholder = 47)] = 'IcuPlaceholder'),
    (t[(t.I18nContext = 48)] = 'I18nContext'),
    (t[(t.I18nAttributes = 49)] = 'I18nAttributes'),
    (t[(t.SourceLocation = 50)] = 'SourceLocation');
})(f || (f = {}));
var J;
(function (t) {
  (t[(t.LexicalRead = 0)] = 'LexicalRead'),
    (t[(t.Context = 1)] = 'Context'),
    (t[(t.TrackContext = 2)] = 'TrackContext'),
    (t[(t.ReadVariable = 3)] = 'ReadVariable'),
    (t[(t.NextContext = 4)] = 'NextContext'),
    (t[(t.Reference = 5)] = 'Reference'),
    (t[(t.StoreLet = 6)] = 'StoreLet'),
    (t[(t.ContextLetReference = 7)] = 'ContextLetReference'),
    (t[(t.GetCurrentView = 8)] = 'GetCurrentView'),
    (t[(t.RestoreView = 9)] = 'RestoreView'),
    (t[(t.ResetView = 10)] = 'ResetView'),
    (t[(t.PureFunctionExpr = 11)] = 'PureFunctionExpr'),
    (t[(t.PureFunctionParameterExpr = 12)] = 'PureFunctionParameterExpr'),
    (t[(t.PipeBinding = 13)] = 'PipeBinding'),
    (t[(t.PipeBindingVariadic = 14)] = 'PipeBindingVariadic'),
    (t[(t.SafePropertyRead = 15)] = 'SafePropertyRead'),
    (t[(t.SafeKeyedRead = 16)] = 'SafeKeyedRead'),
    (t[(t.SafeInvokeFunction = 17)] = 'SafeInvokeFunction'),
    (t[(t.SafeTernaryExpr = 18)] = 'SafeTernaryExpr'),
    (t[(t.EmptyExpr = 19)] = 'EmptyExpr'),
    (t[(t.AssignTemporaryExpr = 20)] = 'AssignTemporaryExpr'),
    (t[(t.ReadTemporaryExpr = 21)] = 'ReadTemporaryExpr'),
    (t[(t.SlotLiteralExpr = 22)] = 'SlotLiteralExpr'),
    (t[(t.ConditionalCase = 23)] = 'ConditionalCase'),
    (t[(t.ConstCollected = 24)] = 'ConstCollected'),
    (t[(t.TwoWayBindingSet = 25)] = 'TwoWayBindingSet');
})(J || (J = {}));
var xn;
(function (t) {
  (t[(t.None = 0)] = 'None'), (t[(t.AlwaysInline = 1)] = 'AlwaysInline');
})(xn || (xn = {}));
var Sn;
(function (t) {
  (t[(t.Context = 0)] = 'Context'),
    (t[(t.Identifier = 1)] = 'Identifier'),
    (t[(t.SavedView = 2)] = 'SavedView'),
    (t[(t.Alias = 3)] = 'Alias');
})(Sn || (Sn = {}));
var En;
(function (t) {
  (t[(t.Normal = 0)] = 'Normal'),
    (t[(t.TemplateDefinitionBuilder = 1)] = 'TemplateDefinitionBuilder');
})(En || (En = {}));
var U;
(function (t) {
  (t[(t.Attribute = 0)] = 'Attribute'),
    (t[(t.ClassName = 1)] = 'ClassName'),
    (t[(t.StyleProperty = 2)] = 'StyleProperty'),
    (t[(t.Property = 3)] = 'Property'),
    (t[(t.Template = 4)] = 'Template'),
    (t[(t.I18n = 5)] = 'I18n'),
    (t[(t.Animation = 6)] = 'Animation'),
    (t[(t.TwoWayProperty = 7)] = 'TwoWayProperty');
})(U || (U = {}));
var yn;
(function (t) {
  (t[(t.Creation = 0)] = 'Creation'), (t[(t.Postproccessing = 1)] = 'Postproccessing');
})(yn || (yn = {}));
var _n;
(function (t) {
  (t[(t.I18nText = 0)] = 'I18nText'), (t[(t.I18nAttribute = 1)] = 'I18nAttribute');
})(_n || (_n = {}));
var Cn;
(function (t) {
  (t[(t.None = 0)] = 'None'),
    (t[(t.ElementTag = 1)] = 'ElementTag'),
    (t[(t.TemplateTag = 2)] = 'TemplateTag'),
    (t[(t.OpenTag = 4)] = 'OpenTag'),
    (t[(t.CloseTag = 8)] = 'CloseTag'),
    (t[(t.ExpressionIndex = 16)] = 'ExpressionIndex');
})(Cn || (Cn = {}));
var Tn;
(function (t) {
  (t[(t.HTML = 0)] = 'HTML'), (t[(t.SVG = 1)] = 'SVG'), (t[(t.Math = 2)] = 'Math');
})(Tn || (Tn = {}));
var kn;
(function (t) {
  (t[(t.Idle = 0)] = 'Idle'),
    (t[(t.Immediate = 1)] = 'Immediate'),
    (t[(t.Timer = 2)] = 'Timer'),
    (t[(t.Hover = 3)] = 'Hover'),
    (t[(t.Interaction = 4)] = 'Interaction'),
    (t[(t.Viewport = 5)] = 'Viewport'),
    (t[(t.Never = 6)] = 'Never');
})(kn || (kn = {}));
var In;
(function (t) {
  (t[(t.RootI18n = 0)] = 'RootI18n'), (t[(t.Icu = 1)] = 'Icu'), (t[(t.Attr = 2)] = 'Attr');
})(In || (In = {}));
var bn;
(function (t) {
  (t[(t.NgTemplate = 0)] = 'NgTemplate'),
    (t[(t.Structural = 1)] = 'Structural'),
    (t[(t.Block = 2)] = 'Block');
})(bn || (bn = {}));
var vr = Symbol('ConsumesSlot'),
  ss = Symbol('DependsOnSlotContext'),
  Oe = Symbol('ConsumesVars'),
  Rt = Symbol('UsesVarOffset'),
  ri = { [vr]: !0, numSlotsUsed: 1 },
  ii = { [ss]: !0 },
  oi = { [Oe]: !0 };
var Ze = class {
  strings;
  expressions;
  i18nPlaceholders;
  constructor(e, n, s) {
    if (
      ((this.strings = e),
      (this.expressions = n),
      (this.i18nPlaceholders = s),
      s.length !== 0 && s.length !== n.length)
    )
      throw new Error(
        `Expected ${n.length} placeholders to match interpolation expression count, but got ${s.length}`
      );
  }
};
var Y = class extends k {
  constructor(e = null) {
    super(null, e);
  }
};
var Nn = class t extends Y {
  target;
  value;
  sourceSpan;
  kind = J.StoreLet;
  [Oe] = !0;
  [ss] = !0;
  constructor(e, n, s) {
    super(), (this.target = e), (this.value = n), (this.sourceSpan = s);
  }
  visitExpression() {}
  isEquivalent(e) {
    return e instanceof t && e.target === this.target && e.value.isEquivalent(this.value);
  }
  isConstant() {
    return !1;
  }
  transformInternalExpressions(e, n) {
    this.value = (this.value, void 0);
  }
  clone() {
    return new t(this.target, this.value, this.sourceSpan);
  }
};
var An = class t extends Y {
  kind = J.PureFunctionExpr;
  [Oe] = !0;
  [Rt] = !0;
  varOffset = null;
  body;
  args;
  fn = null;
  constructor(e, n) {
    super(), (this.body = e), (this.args = n);
  }
  visitExpression(e, n) {
    var s;
    (s = this.body) == null || s.visitExpression(e, n);
    for (let r of this.args) r.visitExpression(e, n);
  }
  isEquivalent(e) {
    return !(e instanceof t) || e.args.length !== this.args.length
      ? !1
      : e.body !== null &&
          this.body !== null &&
          e.body.isEquivalent(this.body) &&
          e.args.every((n, s) => n.isEquivalent(this.args[s]));
  }
  isConstant() {
    return !1;
  }
  transformInternalExpressions(e, n) {
    this.body !== null
      ? (this.body = (this.body, n | bt.InChildOperation, void 0))
      : this.fn !== null && (this.fn = (this.fn, void 0));
    for (let s = 0; s < this.args.length; s++) this.args[s] = (this.args[s], void 0);
  }
  clone() {
    var n, s;
    let e = new t(
      ((n = this.body) == null ? void 0 : n.clone()) ?? null,
      this.args.map(r => r.clone())
    );
    return (
      (e.fn = ((s = this.fn) == null ? void 0 : s.clone()) ?? null),
      (e.varOffset = this.varOffset),
      e
    );
  }
};
var kt = class t extends Y {
    target;
    targetSlot;
    name;
    args;
    kind = J.PipeBinding;
    [Oe] = !0;
    [Rt] = !0;
    varOffset = null;
    constructor(e, n, s, r) {
      super(), (this.target = e), (this.targetSlot = n), (this.name = s), (this.args = r);
    }
    visitExpression(e, n) {
      for (let s of this.args) s.visitExpression(e, n);
    }
    isEquivalent() {
      return !1;
    }
    isConstant() {
      return !1;
    }
    transformInternalExpressions(e, n) {
      for (let s = 0; s < this.args.length; s++) this.args[s] = (this.args[s], void 0);
    }
    clone() {
      let e = new t(
        this.target,
        this.targetSlot,
        this.name,
        this.args.map(n => n.clone())
      );
      return (e.varOffset = this.varOffset), e;
    }
  },
  Pn = class t extends Y {
    target;
    targetSlot;
    name;
    args;
    numArgs;
    kind = J.PipeBindingVariadic;
    [Oe] = !0;
    [Rt] = !0;
    varOffset = null;
    constructor(e, n, s, r, o) {
      super(),
        (this.target = e),
        (this.targetSlot = n),
        (this.name = s),
        (this.args = r),
        (this.numArgs = o);
    }
    visitExpression(e, n) {
      this.args.visitExpression(e, n);
    }
    isEquivalent() {
      return !1;
    }
    isConstant() {
      return !1;
    }
    transformInternalExpressions(e, n) {
      this.args = (this.args, void 0);
    }
    clone() {
      let e = new t(this.target, this.targetSlot, this.name, this.args.clone(), this.numArgs);
      return (e.varOffset = this.varOffset), e;
    }
  };
var It = class t extends Y {
  receiver;
  args;
  kind = J.SafeInvokeFunction;
  constructor(e, n) {
    super(), (this.receiver = e), (this.args = n);
  }
  visitExpression(e, n) {
    this.receiver.visitExpression(e, n);
    for (let s of this.args) s.visitExpression(e, n);
  }
  isEquivalent() {
    return !1;
  }
  isConstant() {
    return !1;
  }
  transformInternalExpressions(e, n) {
    this.receiver = (this.receiver, void 0);
    for (let s = 0; s < this.args.length; s++) this.args[s] = (this.args[s], void 0);
  }
  clone() {
    return new t(
      this.receiver.clone(),
      this.args.map(e => e.clone())
    );
  }
};
var bt;
(function (t) {
  (t[(t.None = 0)] = 'None'), (t[(t.InChildOperation = 1)] = 'InChildOperation');
})(bt || (bt = {}));
var ai = new Set([
  f.Element,
  f.ElementStart,
  f.Container,
  f.ContainerStart,
  f.Template,
  f.RepeaterCreate,
]);
var Ln;
(function (t) {
  (t[(t.Tmpl = 0)] = 'Tmpl'), (t[(t.Host = 1)] = 'Host'), (t[(t.Both = 2)] = 'Both');
})(Ln || (Ln = {}));
var li = Object.freeze([]);
var ci = new Map([
    [f.ElementEnd, [f.ElementStart, f.Element]],
    [f.ContainerEnd, [f.ContainerStart, f.Container]],
    [f.I18nEnd, [f.I18nStart, f.I18n]],
  ]),
  ui = new Set([f.Pipe]);
var pi = [Xe, Ye, Qe, It, kt].map(t => t.constructor.name);
var wr = {},
  xr = '\uE500';
wr.ngsp = xr;
var Mn;
(function (t) {
  (t.HEX = 'hexadecimal'), (t.DEC = 'decimal');
})(Mn || (Mn = {}));
var rs = ` \f
\r	\v\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,
  hi = new RegExp(`[^${rs}]`),
  fi = new RegExp(`[${rs}]{2,}`, 'g');
var d;
(function (t) {
  (t[(t.Character = 0)] = 'Character'),
    (t[(t.Identifier = 1)] = 'Identifier'),
    (t[(t.PrivateIdentifier = 2)] = 'PrivateIdentifier'),
    (t[(t.Keyword = 3)] = 'Keyword'),
    (t[(t.String = 4)] = 'String'),
    (t[(t.Operator = 5)] = 'Operator'),
    (t[(t.Number = 6)] = 'Number'),
    (t[(t.Error = 7)] = 'Error');
})(d || (d = {}));
var Sr = ['var', 'let', 'as', 'null', 'undefined', 'true', 'false', 'if', 'else', 'this', 'typeof'],
  De = class {
    tokenize(e) {
      let n = new Nt(e),
        s = [],
        r = n.scanToken();
      for (; r != null; ) s.push(r), (r = n.scanToken());
      return s;
    }
  },
  M = class {
    index;
    end;
    type;
    numValue;
    strValue;
    constructor(e, n, s, r, o) {
      (this.index = e), (this.end = n), (this.type = s), (this.numValue = r), (this.strValue = o);
    }
    isCharacter(e) {
      return this.type == d.Character && this.numValue == e;
    }
    isNumber() {
      return this.type == d.Number;
    }
    isString() {
      return this.type == d.String;
    }
    isOperator(e) {
      return this.type == d.Operator && this.strValue == e;
    }
    isIdentifier() {
      return this.type == d.Identifier;
    }
    isPrivateIdentifier() {
      return this.type == d.PrivateIdentifier;
    }
    isKeyword() {
      return this.type == d.Keyword;
    }
    isKeywordLet() {
      return this.type == d.Keyword && this.strValue == 'let';
    }
    isKeywordAs() {
      return this.type == d.Keyword && this.strValue == 'as';
    }
    isKeywordNull() {
      return this.type == d.Keyword && this.strValue == 'null';
    }
    isKeywordUndefined() {
      return this.type == d.Keyword && this.strValue == 'undefined';
    }
    isKeywordTrue() {
      return this.type == d.Keyword && this.strValue == 'true';
    }
    isKeywordFalse() {
      return this.type == d.Keyword && this.strValue == 'false';
    }
    isKeywordThis() {
      return this.type == d.Keyword && this.strValue == 'this';
    }
    isKeywordTypeof() {
      return this.type === d.Keyword && this.strValue === 'typeof';
    }
    isError() {
      return this.type == d.Error;
    }
    toNumber() {
      return this.type == d.Number ? this.numValue : -1;
    }
    toString() {
      switch (this.type) {
        case d.Character:
        case d.Identifier:
        case d.Keyword:
        case d.Operator:
        case d.PrivateIdentifier:
        case d.String:
        case d.Error:
          return this.strValue;
        case d.Number:
          return this.numValue.toString();
        default:
          return null;
      }
    }
  };
function $n(t, e, n) {
  return new M(t, e, d.Character, n, String.fromCharCode(n));
}
function Er(t, e, n) {
  return new M(t, e, d.Identifier, 0, n);
}
function yr(t, e, n) {
  return new M(t, e, d.PrivateIdentifier, 0, n);
}
function _r(t, e, n) {
  return new M(t, e, d.Keyword, 0, n);
}
function at(t, e, n) {
  return new M(t, e, d.Operator, 0, n);
}
function Cr(t, e, n) {
  return new M(t, e, d.String, 0, n);
}
function Tr(t, e, n) {
  return new M(t, e, d.Number, n, '');
}
function kr(t, e, n) {
  return new M(t, e, d.Error, 0, n);
}
var lt = new M(-1, -1, d.Character, 0, ''),
  Nt = class {
    input;
    length;
    peek = 0;
    index = -1;
    constructor(e) {
      (this.input = e), (this.length = e.length), this.advance();
    }
    advance() {
      this.peek = ++this.index >= this.length ? ot : this.input.charCodeAt(this.index);
    }
    scanToken() {
      let e = this.input,
        n = this.length,
        s = this.peek,
        r = this.index;
      for (; s <= Wn; )
        if (++r >= n) {
          s = ot;
          break;
        } else s = e.charCodeAt(r);
      if (((this.peek = s), (this.index = r), r >= n)) return null;
      if (Rn(s)) return this.scanIdentifier();
      if (j(s)) return this.scanNumber(r);
      let o = r;
      switch (s) {
        case ee:
          return this.advance(), j(this.peek) ? this.scanNumber(o) : $n(o, this.index, ee);
        case je:
        case me:
        case Tt:
        case xe:
        case ze:
        case we:
        case ge:
        case te:
        case ve:
          return this.scanCharacter(o, s);
        case zn:
        case qn:
          return this.scanString();
        case zs:
          return this.scanPrivateIdentifier();
        case Gn:
        case Xn:
        case Xs:
        case Ct:
        case Gs:
        case tr:
          return this.scanOperator(o, String.fromCharCode(s));
        case hn:
          return this.scanQuestion(o);
        case Js:
        case Ys:
          return this.scanComplexOperator(o, String.fromCharCode(s), qe, '=');
        case js:
        case qe:
          return this.scanComplexOperator(o, String.fromCharCode(s), qe, '=', qe, '=');
        case pn:
          return this.scanComplexOperator(o, '&', pn, '&');
        case fn:
          return this.scanComplexOperator(o, '|', fn, '|');
        case Zn:
          for (; ur(this.peek); ) this.advance();
          return this.scanToken();
      }
      return this.advance(), this.error(`Unexpected character [${String.fromCharCode(s)}]`, 0);
    }
    scanCharacter(e, n) {
      return this.advance(), $n(e, this.index, n);
    }
    scanOperator(e, n) {
      return this.advance(), at(e, this.index, n);
    }
    scanComplexOperator(e, n, s, r, o, a) {
      this.advance();
      let l = n;
      return (
        this.peek == s && (this.advance(), (l += r)),
        o != null && this.peek == o && (this.advance(), (l += a)),
        at(e, this.index, l)
      );
    }
    scanIdentifier() {
      let e = this.index;
      for (this.advance(); Bn(this.peek); ) this.advance();
      let n = this.input.substring(e, this.index);
      return Sr.indexOf(n) > -1 ? _r(e, this.index, n) : Er(e, this.index, n);
    }
    scanPrivateIdentifier() {
      let e = this.index;
      if ((this.advance(), !Rn(this.peek))) return this.error('Invalid character [#]', -1);
      for (; Bn(this.peek); ) this.advance();
      let n = this.input.substring(e, this.index);
      return yr(e, this.index, n);
    }
    scanNumber(e) {
      let n = this.index === e,
        s = !1;
      for (this.advance(); ; ) {
        if (!j(this.peek))
          if (this.peek === Mt) {
            if (
              !j(this.input.charCodeAt(this.index - 1)) ||
              !j(this.input.charCodeAt(this.index + 1))
            )
              return this.error('Invalid numeric separator', 0);
            s = !0;
          } else if (this.peek === ee) n = !1;
          else if (Ir(this.peek)) {
            if ((this.advance(), br(this.peek) && this.advance(), !j(this.peek)))
              return this.error('Invalid exponent', -1);
            n = !1;
          } else break;
        this.advance();
      }
      let r = this.input.substring(e, this.index);
      s && (r = r.replace(/_/g, ''));
      let o = n ? Ar(r) : parseFloat(r);
      return Tr(e, this.index, o);
    }
    scanString() {
      let e = this.index,
        n = this.peek;
      this.advance();
      let s = '',
        r = this.index,
        o = this.input;
      for (; this.peek != n; )
        if (this.peek == er) {
          s += o.substring(r, this.index);
          let l;
          if ((this.advance(), this.peek == ar)) {
            let u = o.substring(this.index + 1, this.index + 5);
            if (/^[0-9a-f]+$/i.test(u)) l = parseInt(u, 16);
            else return this.error(`Invalid unicode escape [\\u${u}]`, 0);
            for (let h = 0; h < 5; h++) this.advance();
          } else (l = Nr(this.peek)), this.advance();
          (s += String.fromCharCode(l)), (r = this.index);
        } else {
          if (this.peek == ot) return this.error('Unterminated quote', 0);
          this.advance();
        }
      let a = o.substring(r, this.index);
      return this.advance(), Cr(e, this.index, s + a);
    }
    scanQuestion(e) {
      this.advance();
      let n = '?';
      return (
        (this.peek === hn || this.peek === ee) &&
          ((n += this.peek === ee ? '.' : '?'), this.advance()),
        at(e, this.index, n)
      );
    }
    error(e, n) {
      let s = this.index + n;
      return kr(s, this.index, `Lexer Error: ${e} at column ${s} in expression [${this.input}]`);
    }
  };
function Rn(t) {
  return (Qn <= t && t <= Kn) || (Jn <= t && t <= Yn) || t == Mt || t == jn;
}
function Bn(t) {
  return pr(t) || j(t) || t == Mt || t == jn;
}
function Ir(t) {
  return t == nr || t == Zs;
}
function br(t) {
  return t == Xn || t == Gn;
}
function Nr(t) {
  switch (t) {
    case rr:
      return Hs;
    case sr:
      return Ws;
    case ir:
      return qs;
    case or:
      return Un;
    case lr:
      return Us;
    default:
      return t;
  }
}
function Ar(t) {
  let e = parseInt(t);
  if (isNaN(e)) throw new Error('Invalid integer literal when parsing ' + t);
  return e;
}
var At = class {
    strings;
    expressions;
    offsets;
    constructor(e, n, s) {
      (this.strings = e), (this.expressions = n), (this.offsets = s);
    }
  },
  Pt = class {
    templateBindings;
    warnings;
    errors;
    constructor(e, n, s) {
      (this.templateBindings = e), (this.warnings = n), (this.errors = s);
    }
  },
  ue = class {
    _lexer;
    errors = [];
    constructor(e) {
      this._lexer = e;
    }
    parseAction(e, n, s, r = Z) {
      this._checkNoInterpolation(e, n, r);
      let o = this._stripComments(e),
        a = this._lexer.tokenize(o),
        l = new z(e, n, s, a, 1, this.errors, 0).parseChain();
      return new W(l, e, n, s, this.errors);
    }
    parseBinding(e, n, s, r = Z) {
      let o = this._parseBindingAst(e, n, s, r);
      return new W(o, e, n, s, this.errors);
    }
    checkSimpleExpression(e) {
      let n = new Lt();
      return e.visit(n), n.errors;
    }
    parseSimpleBinding(e, n, s, r = Z) {
      let o = this._parseBindingAst(e, n, s, r),
        a = this.checkSimpleExpression(o);
      return (
        a.length > 0 &&
          this._reportError(`Host binding expression cannot contain ${a.join(' ')}`, e, n),
        new W(o, e, n, s, this.errors)
      );
    }
    _reportError(e, n, s, r) {
      this.errors.push(new ye(e, n, s, r));
    }
    _parseBindingAst(e, n, s, r) {
      this._checkNoInterpolation(e, n, r);
      let o = this._stripComments(e),
        a = this._lexer.tokenize(o);
      return new z(e, n, s, a, 0, this.errors, 0).parseChain();
    }
    parseTemplateBindings(e, n, s, r, o) {
      let a = this._lexer.tokenize(n);
      return new z(n, s, o, a, 0, this.errors, 0).parseTemplateBindings({
        source: e,
        span: new O(r, r + e.length),
      });
    }
    parseInterpolation(e, n, s, r, o = Z) {
      let { strings: a, expressions: l, offsets: u } = this.splitInterpolation(e, n, r, o);
      if (l.length === 0) return null;
      let h = [];
      for (let g = 0; g < l.length; ++g) {
        let S = l[g].text,
          w = this._stripComments(S),
          y = this._lexer.tokenize(w),
          T = new z(e, n, s, y, 0, this.errors, u[g]).parseChain();
        h.push(T);
      }
      return this.createInterpolationAst(
        a.map(g => g.text),
        h,
        e,
        n,
        s
      );
    }
    parseInterpolationExpression(e, n, s) {
      let r = this._stripComments(e),
        o = this._lexer.tokenize(r),
        a = new z(e, n, s, o, 0, this.errors, 0).parseChain(),
        l = ['', ''];
      return this.createInterpolationAst(l, [a], e, n, s);
    }
    createInterpolationAst(e, n, s, r, o) {
      let a = new G(0, s.length),
        l = new Pe(a, a.toAbsolute(o), e, n);
      return new W(l, s, r, o, this.errors);
    }
    splitInterpolation(e, n, s, r = Z) {
      let o = [],
        a = [],
        l = [],
        u = s ? Pr(s) : null,
        h = 0,
        g = !1,
        S = !1,
        { start: w, end: y } = r;
      for (; h < e.length; )
        if (g) {
          let T = h,
            F = T + w.length,
            fe = this._getInterpolationEndIndex(e, y, F);
          if (fe === -1) {
            (g = !1), (S = !0);
            break;
          }
          let de = fe + y.length,
            q = e.substring(F, fe);
          q.trim().length === 0 &&
            this._reportError(
              'Blank expressions are not allowed in interpolated strings',
              e,
              `at column ${h} in`,
              n
            ),
            a.push({ text: q, start: T, end: de });
          let Ms = ((u == null ? void 0 : u.get(T)) ?? T) + w.length;
          l.push(Ms), (h = de), (g = !1);
        } else {
          let T = h;
          (h = e.indexOf(w, h)), h === -1 && (h = e.length);
          let F = e.substring(T, h);
          o.push({ text: F, start: T, end: h }), (g = !0);
        }
      if (!g)
        if (S) {
          let T = o[o.length - 1];
          (T.text += e.substring(h)), (T.end = e.length);
        } else o.push({ text: e.substring(h), start: h, end: e.length });
      return new At(o, a, l);
    }
    wrapLiteralPrimitive(e, n, s) {
      let r = new G(0, e == null ? 0 : e.length);
      return new W(new N(r, r.toAbsolute(s), e), e, n, s, this.errors);
    }
    _stripComments(e) {
      let n = this._commentStart(e);
      return n != null ? e.substring(0, n) : e;
    }
    _commentStart(e) {
      let n = null;
      for (let s = 0; s < e.length - 1; s++) {
        let r = e.charCodeAt(s),
          o = e.charCodeAt(s + 1);
        if (r === Ct && o == Ct && n == null) return s;
        n === r ? (n = null) : n == null && dn(r) && (n = r);
      }
      return null;
    }
    _checkNoInterpolation(e, n, { start: s, end: r }) {
      let o = -1,
        a = -1;
      for (let l of this._forEachUnquotedChar(e, 0))
        if (o === -1) e.startsWith(s) && (o = l);
        else if (((a = this._getInterpolationEndIndex(e, r, l)), a > -1)) break;
      o > -1 &&
        a > -1 &&
        this._reportError(
          `Got interpolation (${s}${r}) where expression was expected`,
          e,
          `at column ${o} in`,
          n
        );
    }
    _getInterpolationEndIndex(e, n, s) {
      for (let r of this._forEachUnquotedChar(e, s)) {
        if (e.startsWith(n, r)) return r;
        if (e.startsWith('//', r)) return e.indexOf(n, r);
      }
      return -1;
    }
    *_forEachUnquotedChar(e, n) {
      let s = null,
        r = 0;
      for (let o = n; o < e.length; o++) {
        let a = e[o];
        dn(e.charCodeAt(o)) && (s === null || s === a) && r % 2 === 0
          ? (s = s === null ? a : null)
          : s === null && (yield o),
          (r = a === '\\' ? r + 1 : 0);
      }
    }
  },
  ne;
(function (t) {
  (t[(t.None = 0)] = 'None'), (t[(t.Writable = 1)] = 'Writable');
})(ne || (ne = {}));
var z = class {
    input;
    location;
    absoluteOffset;
    tokens;
    parseFlags;
    errors;
    offset;
    rparensExpected = 0;
    rbracketsExpected = 0;
    rbracesExpected = 0;
    context = ne.None;
    sourceSpanCache = new Map();
    index = 0;
    constructor(e, n, s, r, o, a, l) {
      (this.input = e),
        (this.location = n),
        (this.absoluteOffset = s),
        (this.tokens = r),
        (this.parseFlags = o),
        (this.errors = a),
        (this.offset = l);
    }
    peek(e) {
      let n = this.index + e;
      return n < this.tokens.length ? this.tokens[n] : lt;
    }
    get next() {
      return this.peek(0);
    }
    get atEOF() {
      return this.index >= this.tokens.length;
    }
    get inputIndex() {
      return this.atEOF ? this.currentEndIndex : this.next.index + this.offset;
    }
    get currentEndIndex() {
      return this.index > 0
        ? this.peek(-1).end + this.offset
        : this.tokens.length === 0
          ? this.input.length + this.offset
          : this.next.index + this.offset;
    }
    get currentAbsoluteOffset() {
      return this.absoluteOffset + this.inputIndex;
    }
    span(e, n) {
      let s = this.currentEndIndex;
      if ((n !== void 0 && n > this.currentEndIndex && (s = n), e > s)) {
        let r = s;
        (s = e), (e = r);
      }
      return new G(e, s);
    }
    sourceSpan(e, n) {
      let s = `${e}@${this.inputIndex}:${n}`;
      return (
        this.sourceSpanCache.has(s) ||
          this.sourceSpanCache.set(s, this.span(e, n).toAbsolute(this.absoluteOffset)),
        this.sourceSpanCache.get(s)
      );
    }
    advance() {
      this.index++;
    }
    withContext(e, n) {
      this.context |= e;
      let s = n();
      return (this.context ^= e), s;
    }
    consumeOptionalCharacter(e) {
      return this.next.isCharacter(e) ? (this.advance(), !0) : !1;
    }
    peekKeywordLet() {
      return this.next.isKeywordLet();
    }
    peekKeywordAs() {
      return this.next.isKeywordAs();
    }
    expectCharacter(e) {
      this.consumeOptionalCharacter(e) || this.error(`Missing expected ${String.fromCharCode(e)}`);
    }
    consumeOptionalOperator(e) {
      return this.next.isOperator(e) ? (this.advance(), !0) : !1;
    }
    expectOperator(e) {
      this.consumeOptionalOperator(e) || this.error(`Missing expected operator ${e}`);
    }
    prettyPrintToken(e) {
      return e === lt ? 'end of input' : `token ${e}`;
    }
    expectIdentifierOrKeyword() {
      let e = this.next;
      return !e.isIdentifier() && !e.isKeyword()
        ? (e.isPrivateIdentifier()
            ? this._reportErrorForPrivateIdentifier(e, 'expected identifier or keyword')
            : this.error(`Unexpected ${this.prettyPrintToken(e)}, expected identifier or keyword`),
          null)
        : (this.advance(), e.toString());
    }
    expectIdentifierOrKeywordOrString() {
      let e = this.next;
      return !e.isIdentifier() && !e.isKeyword() && !e.isString()
        ? (e.isPrivateIdentifier()
            ? this._reportErrorForPrivateIdentifier(e, 'expected identifier, keyword or string')
            : this.error(
                `Unexpected ${this.prettyPrintToken(e)}, expected identifier, keyword, or string`
              ),
          '')
        : (this.advance(), e.toString());
    }
    parseChain() {
      let e = [],
        n = this.inputIndex;
      for (; this.index < this.tokens.length; ) {
        let s = this.parsePipe();
        if ((e.push(s), this.consumeOptionalCharacter(ve)))
          for (
            this.parseFlags & 1 ||
            this.error('Binding expression cannot contain chained expression');
            this.consumeOptionalCharacter(ve);

          );
        else if (this.index < this.tokens.length) {
          let r = this.index;
          if ((this.error(`Unexpected token '${this.next}'`), this.index === r)) break;
        }
      }
      if (e.length === 0) {
        let s = this.offset,
          r = this.offset + this.input.length;
        return new b(this.span(s, r), this.sourceSpan(s, r));
      }
      return e.length == 1 ? e[0] : new _e(this.span(n), this.sourceSpan(n), e);
    }
    parsePipe() {
      let e = this.inputIndex,
        n = this.parseExpression();
      if (this.consumeOptionalOperator('|')) {
        this.parseFlags & 1 && this.error('Cannot have a pipe in an action expression');
        do {
          let s = this.inputIndex,
            r = this.expectIdentifierOrKeyword(),
            o,
            a;
          r !== null
            ? (o = this.sourceSpan(s))
            : ((r = ''),
              (a = this.next.index !== -1 ? this.next.index : this.input.length + this.offset),
              (o = new G(a, a).toAbsolute(this.absoluteOffset)));
          let l = [];
          for (; this.consumeOptionalCharacter(te); ) l.push(this.parseExpression());
          n = new be(this.span(e), this.sourceSpan(e, a), n, r, l, o);
        } while (this.consumeOptionalOperator('|'));
      }
      return n;
    }
    parseExpression() {
      return this.parseConditional();
    }
    parseConditional() {
      let e = this.inputIndex,
        n = this.parseLogicalOr();
      if (this.consumeOptionalOperator('?')) {
        let s = this.parsePipe(),
          r;
        if (this.consumeOptionalCharacter(te)) r = this.parsePipe();
        else {
          let o = this.inputIndex,
            a = this.input.substring(e, o);
          this.error(`Conditional expression ${a} requires all 3 expressions`),
            (r = new b(this.span(e), this.sourceSpan(e)));
        }
        return new Ce(this.span(e), this.sourceSpan(e), n, s, r);
      } else return n;
    }
    parseLogicalOr() {
      let e = this.inputIndex,
        n = this.parseLogicalAnd();
      for (; this.consumeOptionalOperator('||'); ) {
        let s = this.parseLogicalAnd();
        n = new A(this.span(e), this.sourceSpan(e), '||', n, s);
      }
      return n;
    }
    parseLogicalAnd() {
      let e = this.inputIndex,
        n = this.parseNullishCoalescing();
      for (; this.consumeOptionalOperator('&&'); ) {
        let s = this.parseNullishCoalescing();
        n = new A(this.span(e), this.sourceSpan(e), '&&', n, s);
      }
      return n;
    }
    parseNullishCoalescing() {
      let e = this.inputIndex,
        n = this.parseEquality();
      for (; this.consumeOptionalOperator('??'); ) {
        let s = this.parseEquality();
        n = new A(this.span(e), this.sourceSpan(e), '??', n, s);
      }
      return n;
    }
    parseEquality() {
      let e = this.inputIndex,
        n = this.parseRelational();
      for (; this.next.type == d.Operator; ) {
        let s = this.next.strValue;
        switch (s) {
          case '==':
          case '===':
          case '!=':
          case '!==':
            this.advance();
            let r = this.parseRelational();
            n = new A(this.span(e), this.sourceSpan(e), s, n, r);
            continue;
        }
        break;
      }
      return n;
    }
    parseRelational() {
      let e = this.inputIndex,
        n = this.parseAdditive();
      for (; this.next.type == d.Operator; ) {
        let s = this.next.strValue;
        switch (s) {
          case '<':
          case '>':
          case '<=':
          case '>=':
            this.advance();
            let r = this.parseAdditive();
            n = new A(this.span(e), this.sourceSpan(e), s, n, r);
            continue;
        }
        break;
      }
      return n;
    }
    parseAdditive() {
      let e = this.inputIndex,
        n = this.parseMultiplicative();
      for (; this.next.type == d.Operator; ) {
        let s = this.next.strValue;
        switch (s) {
          case '+':
          case '-':
            this.advance();
            let r = this.parseMultiplicative();
            n = new A(this.span(e), this.sourceSpan(e), s, n, r);
            continue;
        }
        break;
      }
      return n;
    }
    parseMultiplicative() {
      let e = this.inputIndex,
        n = this.parsePrefix();
      for (; this.next.type == d.Operator; ) {
        let s = this.next.strValue;
        switch (s) {
          case '*':
          case '%':
          case '/':
            this.advance();
            let r = this.parsePrefix();
            n = new A(this.span(e), this.sourceSpan(e), s, n, r);
            continue;
        }
        break;
      }
      return n;
    }
    parsePrefix() {
      if (this.next.type == d.Operator) {
        let e = this.inputIndex,
          n = this.next.strValue,
          s;
        switch (n) {
          case '+':
            return (
              this.advance(),
              (s = this.parsePrefix()),
              ae.createPlus(this.span(e), this.sourceSpan(e), s)
            );
          case '-':
            return (
              this.advance(),
              (s = this.parsePrefix()),
              ae.createMinus(this.span(e), this.sourceSpan(e), s)
            );
          case '!':
            return (
              this.advance(), (s = this.parsePrefix()), new Le(this.span(e), this.sourceSpan(e), s)
            );
        }
      } else if (this.next.isKeywordTypeof()) {
        this.advance();
        let e = this.inputIndex,
          n = this.parsePrefix();
        return new Me(this.span(e), this.sourceSpan(e), n);
      }
      return this.parseCallChain();
    }
    parseCallChain() {
      let e = this.inputIndex,
        n = this.parsePrimary();
      for (;;)
        if (this.consumeOptionalCharacter(ee)) n = this.parseAccessMember(n, e, !1);
        else if (this.consumeOptionalOperator('?.'))
          this.consumeOptionalCharacter(je)
            ? (n = this.parseCall(n, e, !0))
            : (n = this.consumeOptionalCharacter(ze)
                ? this.parseKeyedReadOrWrite(n, e, !0)
                : this.parseAccessMember(n, e, !0));
        else if (this.consumeOptionalCharacter(ze)) n = this.parseKeyedReadOrWrite(n, e, !1);
        else if (this.consumeOptionalCharacter(je)) n = this.parseCall(n, e, !1);
        else if (this.consumeOptionalOperator('!')) n = new $e(this.span(e), this.sourceSpan(e), n);
        else return n;
    }
    parsePrimary() {
      let e = this.inputIndex;
      if (this.consumeOptionalCharacter(je)) {
        this.rparensExpected++;
        let n = this.parsePipe();
        return this.rparensExpected--, this.expectCharacter(me), n;
      } else {
        if (this.next.isKeywordNull())
          return this.advance(), new N(this.span(e), this.sourceSpan(e), null);
        if (this.next.isKeywordUndefined())
          return this.advance(), new N(this.span(e), this.sourceSpan(e), void 0);
        if (this.next.isKeywordTrue())
          return this.advance(), new N(this.span(e), this.sourceSpan(e), !0);
        if (this.next.isKeywordFalse())
          return this.advance(), new N(this.span(e), this.sourceSpan(e), !1);
        if (this.next.isKeywordThis())
          return this.advance(), new Et(this.span(e), this.sourceSpan(e));
        if (this.consumeOptionalCharacter(ze)) {
          this.rbracketsExpected++;
          let n = this.parseExpressionList(we);
          return (
            this.rbracketsExpected--,
            this.expectCharacter(we),
            new Ne(this.span(e), this.sourceSpan(e), n)
          );
        } else {
          if (this.next.isCharacter(Tt)) return this.parseLiteralMap();
          if (this.next.isIdentifier())
            return this.parseAccessMember(new X(this.span(e), this.sourceSpan(e)), e, !1);
          if (this.next.isNumber()) {
            let n = this.next.toNumber();
            return this.advance(), new N(this.span(e), this.sourceSpan(e), n);
          } else if (this.next.isString()) {
            let n = this.next.toString();
            return this.advance(), new N(this.span(e), this.sourceSpan(e), n);
          } else
            return this.next.isPrivateIdentifier()
              ? (this._reportErrorForPrivateIdentifier(this.next, null),
                new b(this.span(e), this.sourceSpan(e)))
              : this.index >= this.tokens.length
                ? (this.error(`Unexpected end of expression: ${this.input}`),
                  new b(this.span(e), this.sourceSpan(e)))
                : (this.error(`Unexpected token ${this.next}`),
                  new b(this.span(e), this.sourceSpan(e)));
        }
      }
    }
    parseExpressionList(e) {
      let n = [];
      do
        if (!this.next.isCharacter(e)) n.push(this.parsePipe());
        else break;
      while (this.consumeOptionalCharacter(ge));
      return n;
    }
    parseLiteralMap() {
      let e = [],
        n = [],
        s = this.inputIndex;
      if ((this.expectCharacter(Tt), !this.consumeOptionalCharacter(xe))) {
        this.rbracesExpected++;
        do {
          let r = this.inputIndex,
            o = this.next.isString(),
            a = this.expectIdentifierOrKeywordOrString(),
            l = { key: a, quoted: o };
          if ((e.push(l), o)) this.expectCharacter(te), n.push(this.parsePipe());
          else if (this.consumeOptionalCharacter(te)) n.push(this.parsePipe());
          else {
            l.isShorthandInitialized = !0;
            let u = this.span(r),
              h = this.sourceSpan(r);
            n.push(new re(u, h, h, new X(u, h), a));
          }
        } while (this.consumeOptionalCharacter(ge) && !this.next.isCharacter(xe));
        this.rbracesExpected--, this.expectCharacter(xe);
      }
      return new Ae(this.span(s), this.sourceSpan(s), e, n);
    }
    parseAccessMember(e, n, s) {
      let r = this.inputIndex,
        o = this.withContext(ne.Writable, () => {
          let u = this.expectIdentifierOrKeyword() ?? '';
          return (
            u.length === 0 && this.error('Expected identifier for property access', e.span.end), u
          );
        }),
        a = this.sourceSpan(r),
        l;
      if (s)
        this.consumeOptionalOperator('=')
          ? (this.error("The '?.' operator cannot be used in the assignment"),
            (l = new b(this.span(n), this.sourceSpan(n))))
          : (l = new ie(this.span(n), this.sourceSpan(n), a, e, o));
      else if (this.consumeOptionalOperator('=')) {
        if (!(this.parseFlags & 1))
          return (
            this.error('Bindings cannot contain assignments'),
            new b(this.span(n), this.sourceSpan(n))
          );
        let u = this.parseConditional();
        l = new Te(this.span(n), this.sourceSpan(n), a, e, o, u);
      } else l = new re(this.span(n), this.sourceSpan(n), a, e, o);
      return l;
    }
    parseCall(e, n, s) {
      let r = this.inputIndex;
      this.rparensExpected++;
      let o = this.parseCallArguments(),
        a = this.span(r, this.inputIndex).toAbsolute(this.absoluteOffset);
      this.expectCharacter(me), this.rparensExpected--;
      let l = this.span(n),
        u = this.sourceSpan(n);
      return s ? new le(l, u, e, o, a) : new Re(l, u, e, o, a);
    }
    parseCallArguments() {
      if (this.next.isCharacter(me)) return [];
      let e = [];
      do e.push(this.parsePipe());
      while (this.consumeOptionalCharacter(ge));
      return e;
    }
    expectTemplateBindingKey() {
      let e = '',
        n = !1,
        s = this.currentAbsoluteOffset;
      do
        (e += this.expectIdentifierOrKeywordOrString()),
          (n = this.consumeOptionalOperator('-')),
          n && (e += '-');
      while (n);
      return { source: e, span: new O(s, s + e.length) };
    }
    parseTemplateBindings(e) {
      let n = [];
      for (n.push(...this.parseDirectiveKeywordBindings(e)); this.index < this.tokens.length; ) {
        let s = this.parseLetBinding();
        if (s) n.push(s);
        else {
          let r = this.expectTemplateBindingKey(),
            o = this.parseAsBinding(r);
          o
            ? n.push(o)
            : ((r.source = e.source + r.source.charAt(0).toUpperCase() + r.source.substring(1)),
              n.push(...this.parseDirectiveKeywordBindings(r)));
        }
        this.consumeStatementTerminator();
      }
      return new Pt(n, [], this.errors);
    }
    parseKeyedReadOrWrite(e, n, s) {
      return this.withContext(ne.Writable, () => {
        this.rbracketsExpected++;
        let r = this.parsePipe();
        if (
          (r instanceof b && this.error('Key access cannot be empty'),
          this.rbracketsExpected--,
          this.expectCharacter(we),
          this.consumeOptionalOperator('='))
        )
          if (s) this.error("The '?.' operator cannot be used in the assignment");
          else {
            let o = this.parseConditional();
            return new Ie(this.span(n), this.sourceSpan(n), e, r, o);
          }
        else
          return s
            ? new oe(this.span(n), this.sourceSpan(n), e, r)
            : new ke(this.span(n), this.sourceSpan(n), e, r);
        return new b(this.span(n), this.sourceSpan(n));
      });
    }
    parseDirectiveKeywordBindings(e) {
      let n = [];
      this.consumeOptionalCharacter(te);
      let s = this.getDirectiveBoundTarget(),
        r = this.currentAbsoluteOffset,
        o = this.parseAsBinding(e);
      o || (this.consumeStatementTerminator(), (r = this.currentAbsoluteOffset));
      let a = new O(e.span.start, r);
      return n.push(new Be(a, e, s)), o && n.push(o), n;
    }
    getDirectiveBoundTarget() {
      if (this.next === lt || this.peekKeywordAs() || this.peekKeywordLet()) return null;
      let e = this.parsePipe(),
        { start: n, end: s } = e.span,
        r = this.input.substring(n, s);
      return new W(e, r, this.location, this.absoluteOffset + n, this.errors);
    }
    parseAsBinding(e) {
      if (!this.peekKeywordAs()) return null;
      this.advance();
      let n = this.expectTemplateBindingKey();
      this.consumeStatementTerminator();
      let s = new O(e.span.start, this.currentAbsoluteOffset);
      return new ce(s, n, e);
    }
    parseLetBinding() {
      if (!this.peekKeywordLet()) return null;
      let e = this.currentAbsoluteOffset;
      this.advance();
      let n = this.expectTemplateBindingKey(),
        s = null;
      this.consumeOptionalOperator('=') && (s = this.expectTemplateBindingKey()),
        this.consumeStatementTerminator();
      let r = new O(e, this.currentAbsoluteOffset);
      return new ce(r, n, s);
    }
    consumeStatementTerminator() {
      this.consumeOptionalCharacter(ve) || this.consumeOptionalCharacter(ge);
    }
    error(e, n = null) {
      this.errors.push(new ye(e, this.input, this.locationText(n), this.location)), this.skip();
    }
    locationText(e = null) {
      return (
        e == null && (e = this.index),
        e < this.tokens.length
          ? `at column ${this.tokens[e].index + 1} in`
          : 'at the end of the expression'
      );
    }
    _reportErrorForPrivateIdentifier(e, n) {
      let s = `Private identifiers are not supported. Unexpected private identifier: ${e}`;
      n !== null && (s += `, ${n}`), this.error(s);
    }
    skip() {
      let e = this.next;
      for (
        ;
        this.index < this.tokens.length &&
        !e.isCharacter(ve) &&
        !e.isOperator('|') &&
        (this.rparensExpected <= 0 || !e.isCharacter(me)) &&
        (this.rbracesExpected <= 0 || !e.isCharacter(xe)) &&
        (this.rbracketsExpected <= 0 || !e.isCharacter(we)) &&
        (!(this.context & ne.Writable) || !e.isOperator('='));

      )
        this.next.isError() &&
          this.errors.push(
            new ye(this.next.toString(), this.input, this.locationText(), this.location)
          ),
          this.advance(),
          (e = this.next);
    }
  },
  Lt = class extends yt {
    errors = [];
    visitPipe() {
      this.errors.push('pipes');
    }
  };
function Pr(t) {
  let e = new Map(),
    n = 0,
    s = 0,
    r = 0;
  for (; r < t.length; ) {
    let o = t[r];
    if (o.type === 9) {
      let [a, l] = o.parts;
      (n += l.length), (s += a.length);
    } else {
      let a = o.parts.reduce((l, u) => l + u.length, 0);
      (s += a), (n += a);
    }
    e.set(s, n), r++;
  }
  return e;
}
var Lr = new Map(
    Object.entries({
      class: 'className',
      for: 'htmlFor',
      formaction: 'formAction',
      innerHtml: 'innerHTML',
      readonly: 'readOnly',
      tabindex: 'tabIndex',
    })
  ),
  di = Array.from(Lr).reduce((t, [e, n]) => (t.set(e, n), t), new Map());
var mi = new ue(new De());
function D(t) {
  return e => e.kind === t;
}
function Se(t, e) {
  return n => n.kind === t && e === n.expression instanceof Ze;
}
function Mr(t) {
  return (t.kind === f.Property || t.kind === f.TwoWayProperty) && !(t.expression instanceof Ze);
}
var gi = [
    { test: D(f.StyleMap), transform: et },
    { test: D(f.ClassMap), transform: et },
    { test: D(f.StyleProp) },
    { test: D(f.ClassProp) },
    { test: Se(f.Attribute, !0) },
    { test: Se(f.Property, !0) },
    { test: Mr },
    { test: Se(f.Attribute, !1) },
  ],
  vi = [
    { test: Se(f.HostProperty, !0) },
    { test: Se(f.HostProperty, !1) },
    { test: D(f.Attribute) },
    { test: D(f.StyleMap), transform: et },
    { test: D(f.ClassMap), transform: et },
    { test: D(f.StyleProp) },
    { test: D(f.ClassProp) },
  ],
  wi = new Set([
    f.Listener,
    f.TwoWayListener,
    f.StyleMap,
    f.ClassMap,
    f.StyleProp,
    f.ClassProp,
    f.Property,
    f.TwoWayProperty,
    f.HostProperty,
    f.Attribute,
  ]);
function et(t) {
  return t.slice(t.length - 1);
}
var xi = new Map([
  ['window', P.resolveWindow],
  ['document', P.resolveDocument],
  ['body', P.resolveBody],
]);
var Si = new Map([
    [B.HTML, P.sanitizeHtml],
    [B.RESOURCE_URL, P.sanitizeResourceUrl],
    [B.SCRIPT, P.sanitizeScript],
    [B.STYLE, P.sanitizeStyle],
    [B.URL, P.sanitizeUrl],
  ]),
  Ei = new Map([
    [B.HTML, P.trustConstantHtml],
    [B.RESOURCE_URL, P.trustConstantResourceUrl],
  ]);
var Dn;
(function (t) {
  (t[(t.None = 0)] = 'None'),
    (t[(t.ViewContextRead = 1)] = 'ViewContextRead'),
    (t[(t.ViewContextWrite = 2)] = 'ViewContextWrite'),
    (t[(t.SideEffectful = 4)] = 'SideEffectful');
})(Dn || (Dn = {}));
var yi = new Map([
  [H.Property, U.Property],
  [H.TwoWay, U.TwoWayProperty],
  [H.Attribute, U.Attribute],
  [H.Class, U.ClassName],
  [H.Style, U.StyleProperty],
  [H.Animation, U.Animation],
]);
var _i = Symbol('queryAdvancePlaceholder');
var On;
(function (t) {
  (t[(t.NG_CONTENT = 0)] = 'NG_CONTENT'),
    (t[(t.STYLE = 1)] = 'STYLE'),
    (t[(t.STYLESHEET = 2)] = 'STYLESHEET'),
    (t[(t.SCRIPT = 3)] = 'SCRIPT'),
    (t[(t.OTHER = 4)] = 'OTHER');
})(On || (On = {}));
var Fn;
(function (t) {
  (t.IDLE = 'idle'),
    (t.TIMER = 'timer'),
    (t.INTERACTION = 'interaction'),
    (t.IMMEDIATE = 'immediate'),
    (t.HOVER = 'hover'),
    (t.VIEWPORT = 'viewport'),
    (t.NEVER = 'never');
})(Fn || (Fn = {}));
var is = '%COMP%',
  Ci = `_nghost-${is}`,
  Ti = `_ngcontent-${is}`;
var ki = new St('19.1.2');
var Vn;
(function (t) {
  (t[(t.Extract = 0)] = 'Extract'), (t[(t.Merge = 1)] = 'Merge');
})(Vn || (Vn = {}));
var Hn;
(function (t) {
  (t[(t.Directive = 0)] = 'Directive'),
    (t[(t.Component = 1)] = 'Component'),
    (t[(t.Injectable = 2)] = 'Injectable'),
    (t[(t.Pipe = 3)] = 'Pipe'),
    (t[(t.NgModule = 4)] = 'NgModule');
})(Hn || (Hn = {}));
function os({ start: t, end: e }, n) {
  let s = t,
    r = e;
  for (; r !== s && /\s/.test(n[r - 1]); ) r--;
  for (; s !== r && /\s/.test(n[s]); ) s++;
  return { start: s, end: r };
}
function Rr({ start: t, end: e }, n) {
  let s = t,
    r = e;
  for (; r !== n.length && /\s/.test(n[r]); ) r++;
  for (; s !== 0 && /\s/.test(n[s - 1]); ) s--;
  return { start: s, end: r };
}
function Br(t, e) {
  return e[t.start - 1] === '(' && e[t.end] === ')' ? { start: t.start - 1, end: t.end + 1 } : t;
}
function as(t, e, n) {
  let s = 0,
    r = { start: t.start, end: t.end };
  for (;;) {
    let o = Rr(r, e),
      a = Br(o, e);
    if (o.start === a.start && o.end === a.end) break;
    (r.start = a.start), (r.end = a.end), s++;
  }
  return {
    hasParens: (n ? s - 1 : s) !== 0,
    outerSpan: os(n ? { start: r.start + 1, end: r.end - 1 } : r, e),
    innerSpan: os(t, e),
  };
}
function ls(t) {
  return typeof t == 'string' ? e => e === t : e => t.test(e);
}
function cs(t, e, n) {
  let s = ls(e);
  for (let r = n; r >= 0; r--) {
    let o = t[r];
    if (s(o)) return r;
  }
  throw new Error(`Cannot find front char ${e} from index ${n} in ${JSON.stringify(t)}`);
}
function us(t, e, n) {
  let s = ls(e);
  for (let r = n; r < t.length; r++) {
    let o = t[r];
    if (s(o)) return r;
  }
  throw new Error(`Cannot find character ${e} from index ${n} in ${JSON.stringify(t)}`);
}
function ps(t) {
  return t.slice(0, 1).toLowerCase() + t.slice(1);
}
function Fe(t) {
  let { start: e, end: n } = t;
  return { start: e, end: n, range: [e, n] };
}
var Dr = t => ue.prototype._commentStart(t);
function Or(t, e) {
  let n = e ? Dr(t) : null;
  if (n === null) return { text: t, comments: [] };
  let s = { type: 'CommentLine', value: t.slice(n + 2), ...Fe({ start: n, end: t.length }) };
  return { text: t.slice(0, n), comments: [s] };
}
function Ve(t, e = !0) {
  return n => {
    let s = new De(),
      r = new ue(s),
      { text: o, comments: a } = Or(n, e),
      l = t(o, r);
    if (l.errors.length !== 0) {
      let [{ message: u }] = l.errors;
      throw new SyntaxError(u.replace(/^Parser Error: | at column \d+ in [^]*$/g, ''));
    }
    return { result: l, comments: a, text: o };
  };
}
var hs = Ve((t, e) => e.parseBinding(t, '', 0)),
  Fr = Ve((t, e) => e.parseSimpleBinding(t, '', 0)),
  fs = Ve((t, e) => e.parseAction(t, '', 0)),
  ds = Ve((t, e) => e.parseInterpolationExpression(t, '', 0)),
  ms = Ve((t, e) => e.parseTemplateBindings('', t, '', 0, 0), !1);
var Hr = (t, e, n) => {
    if (!(t && e == null))
      return Array.isArray(e) || typeof e == 'string' ? e[n < 0 ? e.length + n : n] : e.at(n);
  },
  nt = Hr;
var Bt = class {
    text;
    constructor(e) {
      this.text = e;
    }
    getCharacterIndex(e, n) {
      return us(this.text, e, n);
    }
    getCharacterLastIndex(e, n) {
      return cs(this.text, e, n);
    }
    transformSpan(e, { stripSpaces: n = !1, hasParentParens: s = !1 } = {}) {
      if (!n) return Fe(e);
      let { outerSpan: r, innerSpan: o, hasParens: a } = as(e, this.text, s),
        l = Fe(o);
      return a && (l.extra = { parenthesized: !0, parenStart: r.start, parenEnd: r.end }), l;
    }
    createNode(e, { stripSpaces: n = !0, hasParentParens: s = !1 } = {}) {
      let { type: r, start: o, end: a } = e,
        l = {
          ...e,
          ...this.transformSpan({ start: o, end: a }, { stripSpaces: n, hasParentParens: s }),
        };
      switch (r) {
        case 'NumericLiteral':
        case 'StringLiteral': {
          let u = this.text.slice(l.start, l.end),
            { value: h } = l;
          l.extra = { ...l.extra, raw: u, rawValue: h };
          break;
        }
        case 'ObjectProperty': {
          let { shorthand: u } = l;
          u && (l.extra = { ...l.extra, shorthand: u });
          break;
        }
      }
      return l;
    }
  },
  gs = Bt;
function Ot(t) {
  var e;
  return !!((e = t.extra) != null && e.parenthesized);
}
function $(t) {
  return Ot(t) ? t.extra.parenStart : t.start;
}
function R(t) {
  return Ot(t) ? t.extra.parenEnd : t.end;
}
function vs(t) {
  return (t.type === 'OptionalCallExpression' || t.type === 'OptionalMemberExpression') && !Ot(t);
}
function ws(t, e) {
  let { start: n, end: s } = t.sourceSpan;
  return n >= s || /^\s+$/.test(e.slice(n, s));
}
var We,
  pe,
  p,
  v,
  He,
  x,
  Dt,
  Ue = class extends gs {
    constructor(n, s) {
      super(s);
      V(this, p);
      V(this, We);
      V(this, pe);
      K(this, We, n), K(this, pe, s);
    }
    get node() {
      return c(this, p, x).call(this, L(this, We));
    }
    transformNode(n) {
      return c(this, p, Dt).call(this, n);
    }
  };
(We = new WeakMap()),
  (pe = new WeakMap()),
  (p = new WeakSet()),
  (v = function (n, { stripSpaces: s = !0, hasParentParens: r = !1 } = {}) {
    return this.createNode(n, { stripSpaces: s, hasParentParens: r });
  }),
  (He = function (n, s, { computed: r, optional: o, end: a = R(s), hasParentParens: l = !1 }) {
    if (ws(n, L(this, pe)) || n.sourceSpan.start === s.start) return s;
    let u = c(this, p, x).call(this, n),
      h = vs(u);
    return c(this, p, v).call(
      this,
      {
        type: o || h ? 'OptionalMemberExpression' : 'MemberExpression',
        object: u,
        property: s,
        computed: r,
        ...(o ? { optional: !0 } : h ? { optional: !1 } : void 0),
        start: $(u),
        end: a,
      },
      { hasParentParens: l }
    );
  }),
  (x = function (n, s = !1) {
    return c(this, p, Dt).call(this, n, s);
  }),
  (Dt = function (n, s = !1) {
    if (n instanceof Pe) {
      let { expressions: o } = n;
      if (o.length !== 1) throw new Error("Unexpected 'Interpolation'");
      return c(this, p, x).call(this, o[0]);
    }
    if (n instanceof ae)
      return c(this, p, v).call(
        this,
        {
          type: 'UnaryExpression',
          prefix: !0,
          argument: c(this, p, x).call(this, n.expr),
          operator: n.operator,
          ...n.sourceSpan,
        },
        { hasParentParens: s }
      );
    if (n instanceof A) {
      let { left: o, operation: a, right: l } = n,
        u = c(this, p, x).call(this, o),
        h = c(this, p, x).call(this, l),
        g = $(u),
        S = R(h),
        w = { left: u, right: h, start: g, end: S };
      return a === '&&' || a === '||' || a === '??'
        ? c(this, p, v).call(
            this,
            { ...w, type: 'LogicalExpression', operator: a },
            { hasParentParens: s }
          )
        : c(this, p, v).call(
            this,
            { ...w, type: 'BinaryExpression', operator: a },
            { hasParentParens: s }
          );
    }
    if (n instanceof be) {
      let { exp: o, name: a, args: l } = n,
        u = c(this, p, x).call(this, o),
        h = $(u),
        g = R(u),
        S = this.getCharacterIndex(/\S/, this.getCharacterIndex('|', g) + 1),
        w = c(this, p, v).call(this, { type: 'Identifier', name: a, start: S, end: S + a.length }),
        y = l.map(T => c(this, p, x).call(this, T));
      return c(this, p, v).call(
        this,
        {
          type: 'NGPipeExpression',
          left: u,
          right: w,
          arguments: y,
          start: h,
          end: R(y.length === 0 ? w : nt(!1, y, -1)),
        },
        { hasParentParens: s }
      );
    }
    if (n instanceof _e)
      return c(this, p, v).call(
        this,
        {
          type: 'NGChainedExpression',
          expressions: n.expressions.map(o => c(this, p, x).call(this, o)),
          ...n.sourceSpan,
        },
        { hasParentParens: s }
      );
    if (n instanceof Ce) {
      let { condition: o, trueExp: a, falseExp: l } = n,
        u = c(this, p, x).call(this, o),
        h = c(this, p, x).call(this, a),
        g = c(this, p, x).call(this, l);
      return c(this, p, v).call(
        this,
        {
          type: 'ConditionalExpression',
          test: u,
          consequent: h,
          alternate: g,
          start: $(u),
          end: R(g),
        },
        { hasParentParens: s }
      );
    }
    if (n instanceof b)
      return c(this, p, v).call(
        this,
        { type: 'NGEmptyExpression', ...n.sourceSpan },
        { hasParentParens: s }
      );
    if (n instanceof X)
      return c(this, p, v).call(
        this,
        { type: 'ThisExpression', ...n.sourceSpan },
        { hasParentParens: s }
      );
    if (n instanceof ke || n instanceof oe)
      return c(this, p, He).call(this, n.receiver, c(this, p, x).call(this, n.key), {
        computed: !0,
        optional: n instanceof oe,
        end: n.sourceSpan.end,
        hasParentParens: s,
      });
    if (n instanceof Ne)
      return c(this, p, v).call(
        this,
        {
          type: 'ArrayExpression',
          elements: n.expressions.map(o => c(this, p, x).call(this, o)),
          ...n.sourceSpan,
        },
        { hasParentParens: s }
      );
    if (n instanceof Ae) {
      let { keys: o, values: a } = n,
        l = a.map(h => c(this, p, x).call(this, h)),
        u = o.map(({ key: h, quoted: g }, S) => {
          let w = l[S],
            y = $(w),
            T = R(w),
            F = this.getCharacterIndex(
              /\S/,
              S === 0 ? n.sourceSpan.start + 1 : this.getCharacterIndex(',', R(l[S - 1])) + 1
            ),
            fe =
              y === F
                ? T
                : this.getCharacterLastIndex(/\S/, this.getCharacterLastIndex(':', y - 1) - 1) + 1,
            de = { start: F, end: fe },
            q = g
              ? c(this, p, v).call(this, { type: 'StringLiteral', value: h, ...de })
              : c(this, p, v).call(this, { type: 'Identifier', name: h, ...de }),
            Gt = q.end < q.start || F === y;
          return c(this, p, v).call(this, {
            type: 'ObjectProperty',
            key: q,
            value: w,
            shorthand: Gt,
            computed: !1,
            start: $(q),
            end: T,
          });
        });
      return c(this, p, v).call(
        this,
        { type: 'ObjectExpression', properties: u, ...n.sourceSpan },
        { hasParentParens: s }
      );
    }
    if (n instanceof N) {
      let { value: o } = n;
      switch (typeof o) {
        case 'boolean':
          return c(this, p, v).call(
            this,
            { type: 'BooleanLiteral', value: o, ...n.sourceSpan },
            { hasParentParens: s }
          );
        case 'number':
          return c(this, p, v).call(
            this,
            { type: 'NumericLiteral', value: o, ...n.sourceSpan },
            { hasParentParens: s }
          );
        case 'object':
          return c(this, p, v).call(
            this,
            { type: 'NullLiteral', ...n.sourceSpan },
            { hasParentParens: s }
          );
        case 'string':
          return c(this, p, v).call(
            this,
            { type: 'StringLiteral', value: o, ...n.sourceSpan },
            { hasParentParens: s }
          );
        case 'undefined':
          return c(this, p, v).call(
            this,
            { type: 'Identifier', name: 'undefined', ...n.sourceSpan },
            { hasParentParens: s }
          );
        default:
          throw new Error(`Unexpected LiteralPrimitive value type ${typeof o}`);
      }
    }
    if (n instanceof Re || n instanceof le) {
      let o = n instanceof le,
        { receiver: a, args: l } = n,
        u =
          l.length === 1
            ? [c(this, p, x).call(this, l[0], !0)]
            : l.map(w => c(this, p, x).call(this, w)),
        h = c(this, p, x).call(this, a),
        g = vs(h),
        S = o || g ? 'OptionalCallExpression' : 'CallExpression';
      return c(this, p, v).call(
        this,
        {
          type: S,
          callee: h,
          arguments: u,
          optional: S === 'OptionalCallExpression' ? o : void 0,
          start: $(h),
          end: n.sourceSpan.end,
        },
        { hasParentParens: s }
      );
    }
    if (n instanceof $e) {
      let o = c(this, p, x).call(this, n.expression);
      return c(this, p, v).call(
        this,
        { type: 'TSNonNullExpression', expression: o, start: $(o), end: n.sourceSpan.end },
        { hasParentParens: s }
      );
    }
    let r = n instanceof Le;
    if (r || n instanceof Me) {
      let o = c(this, p, x).call(this, n.expression),
        a = r ? '!' : 'typeof',
        { start: l } = n.sourceSpan;
      if (!r) {
        let u = this.text.lastIndexOf(a, l);
        if (u === -1)
          throw new Error(
            `Cannot find operator ${a} from index ${l} in ${JSON.stringify(this.text)}`
          );
        l = u;
      }
      return c(this, p, v).call(
        this,
        { type: 'UnaryExpression', prefix: !0, operator: a, argument: o, start: l, end: R(o) },
        { hasParentParens: s }
      );
    }
    if (n instanceof re || n instanceof ie) {
      let { receiver: o, name: a } = n,
        l = this.getCharacterLastIndex(/\S/, n.sourceSpan.end - 1) + 1,
        u = c(this, p, v).call(
          this,
          { type: 'Identifier', name: a, start: l - a.length, end: l },
          ws(o, L(this, pe)) ? { hasParentParens: s } : {}
        );
      return c(this, p, He).call(this, o, u, {
        computed: !1,
        optional: n instanceof ie,
        hasParentParens: s,
      });
    }
    if (n instanceof Ie) {
      let o = c(this, p, x).call(this, n.key),
        a = c(this, p, x).call(this, n.value),
        l = c(this, p, He).call(this, n.receiver, o, {
          computed: !0,
          optional: !1,
          end: this.getCharacterIndex(']', R(o)) + 1,
        });
      return c(this, p, v).call(
        this,
        { type: 'AssignmentExpression', left: l, operator: '=', right: a, start: $(l), end: R(a) },
        { hasParentParens: s }
      );
    }
    if (n instanceof Te) {
      let { receiver: o, name: a, value: l } = n,
        u = c(this, p, x).call(this, l),
        h = this.getCharacterLastIndex(/\S/, this.getCharacterLastIndex('=', $(u) - 1) - 1) + 1,
        g = c(this, p, v).call(this, { type: 'Identifier', name: a, start: h - a.length, end: h }),
        S = c(this, p, He).call(this, o, g, { computed: !1, optional: !1 });
      return c(this, p, v).call(
        this,
        { type: 'AssignmentExpression', left: S, operator: '=', right: u, start: $(S), end: R(u) },
        { hasParentParens: s }
      );
    }
    throw Object.assign(new Error('Unexpected node'), { node: n });
  });
function xs(t, e) {
  return new Ue(t, e).node;
}
function Ss(t) {
  return t instanceof Be;
}
function Es(t) {
  return t instanceof ce;
}
var he,
  Q,
  m,
  ys,
  I,
  Vt,
  Ht,
  Ut,
  _s,
  Cs,
  Ts,
  ks,
  Ft = class extends Ue {
    constructor(n, s) {
      super(void 0, s);
      V(this, m);
      V(this, he);
      V(this, Q);
      K(this, he, n), K(this, Q, s);
      for (let r of n) c(this, m, _s).call(this, r);
    }
    get expressions() {
      return c(this, m, Ts).call(this);
    }
  };
(he = new WeakMap()),
  (Q = new WeakMap()),
  (m = new WeakSet()),
  (ys = function () {
    return L(this, he)[0].key;
  }),
  (I = function (n, { stripSpaces: s = !0 } = {}) {
    return this.createNode(n, { stripSpaces: s });
  }),
  (Vt = function (n) {
    return this.transformNode(n);
  }),
  (Ht = function (n) {
    return ps(n.slice(L(this, m, ys).source.length));
  }),
  (Ut = function (n) {
    let s = L(this, Q);
    if (s[n.start] !== '"' && s[n.start] !== "'") return;
    let r = s[n.start],
      o = !1;
    for (let a = n.start + 1; a < s.length; a++)
      switch (s[a]) {
        case r:
          if (!o) {
            n.end = a + 1;
            return;
          }
        default:
          o = !1;
          break;
        case '\\':
          o = !o;
          break;
      }
  }),
  (_s = function (n) {
    c(this, m, Ut).call(this, n.key.span),
      Es(n) && n.value && c(this, m, Ut).call(this, n.value.span);
  }),
  (Cs = function (n) {
    if (!n.value || n.value.source) return n.value;
    let s = this.getCharacterIndex(/\S/, n.sourceSpan.start);
    return { source: '$implicit', span: { start: s, end: s } };
  }),
  (Ts = function () {
    let n = L(this, he),
      [s] = n,
      r =
        L(this, Q).slice(s.sourceSpan.start, s.sourceSpan.end).trim().length === 0 ? n.slice(1) : n,
      o = [],
      a = null;
    for (let [l, u] of r.entries()) {
      if (a && Ss(a) && Es(u) && u.value && u.value.source === a.key.source) {
        let h = c(this, m, I).call(this, {
            type: 'NGMicrosyntaxKey',
            name: u.key.source,
            ...u.key.span,
          }),
          g = (y, T) => ({ ...y, ...this.transformSpan({ start: y.start, end: T }) }),
          S = y => ({ ...g(y, h.end), alias: h }),
          w = o.pop();
        if (w.type === 'NGMicrosyntaxExpression') o.push(S(w));
        else if (w.type === 'NGMicrosyntaxKeyedExpression') {
          let y = S(w.expression);
          o.push(g({ ...w, expression: y }, y.end));
        } else throw new Error(`Unexpected type ${w.type}`);
      } else o.push(c(this, m, ks).call(this, u, l));
      a = u;
    }
    return c(this, m, I).call(this, {
      type: 'NGMicrosyntax',
      body: o,
      ...(o.length === 0 ? n[0].sourceSpan : { start: o[0].start, end: nt(!1, o, -1).end }),
    });
  }),
  (ks = function (n, s) {
    if (Ss(n)) {
      let { key: r, value: o } = n;
      return o
        ? s === 0
          ? c(this, m, I).call(this, {
              type: 'NGMicrosyntaxExpression',
              expression: c(this, m, Vt).call(this, o.ast),
              alias: null,
              ...o.sourceSpan,
            })
          : c(this, m, I).call(this, {
              type: 'NGMicrosyntaxKeyedExpression',
              key: c(this, m, I).call(this, {
                type: 'NGMicrosyntaxKey',
                name: c(this, m, Ht).call(this, r.source),
                ...r.span,
              }),
              expression: c(this, m, I).call(this, {
                type: 'NGMicrosyntaxExpression',
                expression: c(this, m, Vt).call(this, o.ast),
                alias: null,
                ...o.sourceSpan,
              }),
              start: r.span.start,
              end: o.sourceSpan.end,
            })
        : c(this, m, I).call(this, {
            type: 'NGMicrosyntaxKey',
            name: c(this, m, Ht).call(this, r.source),
            ...r.span,
          });
    } else {
      let { key: r, sourceSpan: o } = n;
      if (/^let\s$/.test(L(this, Q).slice(o.start, o.start + 4))) {
        let { value: l } = n;
        return c(this, m, I).call(this, {
          type: 'NGMicrosyntaxLet',
          key: c(this, m, I).call(this, { type: 'NGMicrosyntaxKey', name: r.source, ...r.span }),
          value: l
            ? c(this, m, I).call(this, { type: 'NGMicrosyntaxKey', name: l.source, ...l.span })
            : null,
          start: o.start,
          end: l ? l.span.end : r.span.end,
        });
      } else {
        let l = c(this, m, Cs).call(this, n);
        return c(this, m, I).call(this, {
          type: 'NGMicrosyntaxAs',
          key: c(this, m, I).call(this, { type: 'NGMicrosyntaxKey', name: l.source, ...l.span }),
          alias: c(this, m, I).call(this, { type: 'NGMicrosyntaxKey', name: r.source, ...r.span }),
          start: l.span.start,
          end: r.span.end,
        });
      }
    }
  });
function Is(t, e) {
  return new Ft(t, e).expressions;
}
function st({ result: { ast: t }, text: e, comments: n }) {
  return Object.assign(xs(t, e), { comments: n });
}
function bs({ result: { templateBindings: t }, text: e }) {
  return Is(t, e);
}
var Ns = t => st(hs(t));
var As = t => st(ds(t)),
  Wt = t => st(fs(t)),
  Ps = t => bs(ms(t));
function qt(t) {
  var s, r, o;
  let e = ((s = t.range) == null ? void 0 : s[0]) ?? t.start,
    n =
      (o = ((r = t.declaration) == null ? void 0 : r.decorators) ?? t.decorators) == null
        ? void 0
        : o[0];
  return n ? Math.min(qt(n), e) : e;
}
function Ls(t) {
  var e;
  return ((e = t.range) == null ? void 0 : e[1]) ?? t.end;
}
function rt(t) {
  return {
    astFormat: 'estree',
    parse(e) {
      let n = t(e);
      return {
        type: 'NGRoot',
        node:
          t === Wt && n.type !== 'NGChainedExpression'
            ? { ...n, type: 'NGChainedExpression', expressions: [n] }
            : n,
      };
    },
    locStart: qt,
    locEnd: Ls,
  };
}
var Ur = rt(Wt),
  Wr = rt(Ns),
  qr = rt(As),
  jr = rt(Ps);
var Zi = zt;
export { Zi as default, jt as parsers };
