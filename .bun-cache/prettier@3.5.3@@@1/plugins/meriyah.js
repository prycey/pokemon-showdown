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
    (t.prettierPlugins = t.prettierPlugins || {}), (t.prettierPlugins.meriyah = e());
  }
})(function () {
  'use strict';
  var x2 = Object.defineProperty;
  var Ne = Object.getOwnPropertyDescriptor;
  var Ve = Object.getOwnPropertyNames;
  var Oe = Object.prototype.hasOwnProperty;
  var In = (n, e) => {
      for (var u in e) x2(n, u, { get: e[u], enumerable: !0 });
    },
    Re = (n, e, u, t) => {
      if ((e && typeof e == 'object') || typeof e == 'function')
        for (let o of Ve(e))
          !Oe.call(n, o) &&
            o !== u &&
            x2(n, o, { get: () => e[o], enumerable: !(t = Ne(e, o)) || t.enumerable });
      return n;
    };
  var Ue = n => Re(x2({}, '__esModule', { value: !0 }), n);
  var Q1 = {};
  In(Q1, { parsers: () => Bn });
  var Bn = {};
  In(Bn, { meriyah: () => Y1 });
  var Me = (n, e, u, t) => {
      if (!(n && e == null))
        return e.replaceAll ? e.replaceAll(u, t) : u.global ? e.replace(u, t) : e.split(u).join(t);
    },
    i2 = Me;
  var Je = {
      0: 'Unexpected token',
      30: "Unexpected token: '%0'",
      1: 'Octal escape sequences are not allowed in strict mode',
      2: 'Octal escape sequences are not allowed in template strings',
      3: '\\8 and \\9 are not allowed in template strings',
      4: 'Private identifier #%0 is not defined',
      5: 'Illegal Unicode escape sequence',
      6: 'Invalid code point %0',
      7: 'Invalid hexadecimal escape sequence',
      9: 'Octal literals are not allowed in strict mode',
      8: 'Decimal integer literals with a leading zero are forbidden in strict mode',
      10: 'Expected number in radix %0',
      151: 'Invalid left-hand side assignment to a destructible right-hand side',
      11: 'Non-number found after exponent indicator',
      12: 'Invalid BigIntLiteral',
      13: 'No identifiers allowed directly after numeric literal',
      14: 'Escapes \\8 or \\9 are not syntactically valid escapes',
      15: 'Escapes \\8 or \\9 are not allowed in strict mode',
      16: 'Unterminated string literal',
      17: 'Unterminated template literal',
      18: 'Multiline comment was not closed properly',
      19: 'The identifier contained dynamic unicode escape that was not closed',
      20: "Illegal character '%0'",
      21: 'Missing hexadecimal digits',
      22: 'Invalid implicit octal',
      23: 'Invalid line break in string literal',
      24: 'Only unicode escapes are legal in identifier names',
      25: "Expected '%0'",
      26: 'Invalid left-hand side in assignment',
      27: 'Invalid left-hand side in async arrow',
      28: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass',
      29: 'Member access on super must be in a method',
      31: 'Await expression not allowed in formal parameter',
      32: 'Yield expression not allowed in formal parameter',
      95: "Unexpected token: 'escaped keyword'",
      33: 'Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses',
      123: 'Async functions can only be declared at the top level or inside a block',
      34: 'Unterminated regular expression',
      35: 'Unexpected regular expression flag',
      36: "Duplicate regular expression flag '%0'",
      37: '%0 functions must have exactly %1 argument%2',
      38: 'Setter function argument must not be a rest parameter',
      39: '%0 declaration must have a name in this context',
      40: 'Function name may not contain any reserved words or be eval or arguments in strict mode',
      41: 'The rest operator is missing an argument',
      42: 'A getter cannot be a generator',
      43: 'A setter cannot be a generator',
      44: 'A computed property name must be followed by a colon or paren',
      134: 'Object literal keys that are strings or numbers must be a method or have a colon',
      46: 'Found `* async x(){}` but this should be `async * x(){}`',
      45: 'Getters and setters can not be generators',
      47: "'%0' can not be generator method",
      48: "No line break is allowed after '=>'",
      49: 'The left-hand side of the arrow can only be destructed through assignment',
      50: 'The binding declaration is not destructible',
      51: 'Async arrow can not be followed by new expression',
      52: "Classes may not have a static property named 'prototype'",
      53: 'Class constructor may not be a %0',
      54: 'Duplicate constructor method in class',
      55: 'Invalid increment/decrement operand',
      56: 'Invalid use of `new` keyword on an increment/decrement expression',
      57: '`=>` is an invalid assignment target',
      58: 'Rest element may not have a trailing comma',
      59: 'Missing initializer in %0 declaration',
      60: "'for-%0' loop head declarations can not have an initializer",
      61: 'Invalid left-hand side in for-%0 loop: Must have a single binding',
      62: 'Invalid shorthand property initializer',
      63: 'Property name __proto__ appears more than once in object literal',
      64: 'Let is disallowed as a lexically bound name',
      65: "Invalid use of '%0' inside new expression",
      66: "Illegal 'use strict' directive in function with non-simple parameter list",
      67: 'Identifier "let" disallowed as left-hand side expression in strict mode',
      68: 'Illegal continue statement',
      69: 'Illegal break statement',
      70: 'Cannot have `let[...]` as a var name in strict mode',
      71: 'Invalid destructuring assignment target',
      72: 'Rest parameter may not have a default initializer',
      73: 'The rest argument must the be last parameter',
      74: 'Invalid rest argument',
      76: 'In strict mode code, functions can only be declared at top level or inside a block',
      77: 'In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement',
      78: 'Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement',
      79: "Class declaration can't appear in single-statement context",
      80: 'Invalid left-hand side in for-%0',
      81: 'Invalid assignment in for-%0',
      82: 'for await (... of ...) is only valid in async functions and async generators',
      83: 'The first token after the template expression should be a continuation of the template',
      85: '`let` declaration not allowed here and `let` cannot be a regular var name in strict mode',
      84: '`let \n [` is a restricted production at the start of a statement',
      86: 'Catch clause requires exactly one parameter, not more (and no trailing comma)',
      87: 'Catch clause parameter does not support default values',
      88: 'Missing catch or finally after try',
      89: 'More than one default clause in switch statement',
      90: 'Illegal newline after throw',
      91: 'Strict mode code may not include a with statement',
      92: 'Illegal return statement',
      93: 'The left hand side of the for-header binding declaration is not destructible',
      94: 'new.target only allowed within functions or static blocks',
      96: "'#' not followed by identifier",
      102: 'Invalid keyword',
      101: "Can not use 'let' as a class name",
      100: "'A lexical declaration can't define a 'let' binding",
      99: 'Can not use `let` as variable name in strict mode',
      97: "'%0' may not be used as an identifier in this context",
      98: 'Await is only valid in async functions',
      103: 'The %0 keyword can only be used with the module goal',
      104: 'Unicode codepoint must not be greater than 0x10FFFF',
      105: '%0 source must be string',
      106: 'Only a identifier or string can be used to indicate alias',
      107: "Only '*' or '{...}' can be imported after default",
      108: 'Trailing decorator may be followed by method',
      109: "Decorators can't be used with a constructor",
      110: 'Can not use `await` as identifier in module or async func',
      111: 'Can not use `await` as identifier in module',
      112: 'HTML comments are only allowed with web compatibility (Annex B)',
      113: "The identifier 'let' must not be in expression position in strict mode",
      114: 'Cannot assign to `eval` and `arguments` in strict mode',
      115: "The left-hand side of a for-of loop may not start with 'let'",
      116: 'Block body arrows can not be immediately invoked without a group',
      117: 'Block body arrows can not be immediately accessed without a group',
      118: 'Unexpected strict mode reserved word',
      119: 'Unexpected eval or arguments in strict mode',
      120: 'Decorators must not be followed by a semicolon',
      121: 'Calling delete on expression not allowed in strict mode',
      122: 'Pattern can not have a tail',
      124: 'Can not have a `yield` expression on the left side of a ternary',
      125: 'An arrow function can not have a postfix update operator',
      126: 'Invalid object literal key character after generator star',
      127: 'Private fields can not be deleted',
      129: 'Classes may not have a field called constructor',
      128: 'Classes may not have a private element named constructor',
      130: 'A class field initializer or static block may not contain arguments',
      131: 'Generators can only be declared at the top level or inside a block',
      132: 'Async methods are a restricted production and cannot have a newline following it',
      133: 'Unexpected character after object literal property name',
      135: 'Invalid key token',
      136: "Label '%0' has already been declared",
      137: 'continue statement must be nested within an iteration statement',
      138: "Undefined label '%0'",
      139: 'Trailing comma is disallowed inside import(...) arguments',
      140: 'Invalid binding in JSON import',
      141: 'import() requires exactly one argument',
      142: 'Cannot use new with import(...)',
      143: '... is not allowed in import()',
      144: "Expected '=>'",
      145: "Duplicate binding '%0'",
      146: 'Duplicate private identifier #%0',
      147: "Cannot export a duplicate name '%0'",
      150: 'Duplicate %0 for-binding',
      148: "Exported binding '%0' needs to refer to a top-level declared variable",
      149: 'Unexpected private field',
      153: 'Numeric separators are not allowed at the end of numeric literals',
      152: 'Only one underscore is allowed as numeric separator',
      154: 'JSX value should be either an expression or a quoted JSX text',
      155: 'Expected corresponding JSX closing tag for %0',
      156: 'Adjacent JSX elements must be wrapped in an enclosing tag',
      157: "JSX attributes must only be assigned a non-empty 'expression'",
      158: "'%0' has already been declared",
      159: "'%0' shadowed a catch clause binding",
      160: 'Dot property must be an identifier',
      161: 'Encountered invalid input after spread/rest argument',
      162: 'Catch without try',
      163: 'Finally without try',
      164: 'Expected corresponding closing tag for JSX fragment',
      165: 'Coalescing and logical operators used together in the same expression must be disambiguated with parentheses',
      166: 'Invalid tagged template on optional chain',
      167: 'Invalid optional chain from super property',
      168: 'Invalid optional chain from new expression',
      169: 'Cannot use "import.meta" outside a module',
      170: 'Leading decorators must be attached to a class declaration',
      171: 'An export name cannot include a lone surrogate, found %0',
      172: 'A string literal cannot be used as an exported binding without `from`',
      173: "Private fields can't be accessed on super",
      174: "The only valid meta property for import is 'import.meta'",
      175: "'import.meta' must not contain escaped characters",
      176: 'cannot use "await" as identifier inside an async function',
      177: 'cannot use "await" in static blocks',
    },
    m2 = class extends SyntaxError {
      constructor(e, u, t, o, i, l, f, ...d) {
        let g =
          '[' + u + ':' + t + '-' + i + ':' + l + ']: ' + Je[f].replace(/%(\d+)/g, (m, y) => d[y]);
        super(`${g}`),
          (this.start = e),
          (this.end = o),
          (this.range = [e, o]),
          (this.loc = { start: { line: u, column: t }, end: { line: i, column: l } }),
          (this.description = g);
      }
    };
  function c(n, e, ...u) {
    throw new m2(n.tokenIndex, n.tokenLine, n.tokenColumn, n.index, n.line, n.column, e, ...u);
  }
  function z2(n) {
    throw new m2(
      n.tokenIndex,
      n.tokenLine,
      n.tokenColumn,
      n.index,
      n.line,
      n.column,
      n.type,
      ...n.params
    );
  }
  function $(n, e, u, t, o, i, l, ...f) {
    throw new m2(n, e, u, t, o, i, l, ...f);
  }
  function h2(n, e, u, t, o, i, l) {
    throw new m2(n, e, u, t, o, i, l);
  }
  function je(n) {
    return ((On[(n >>> 5) + 0] >>> n) & 31 & 1) !== 0;
  }
  function Vn(n) {
    return ((On[(n >>> 5) + 34816] >>> n) & 31 & 1) !== 0;
  }
  var On = ((n, e) => {
    let u = new Uint32Array(104448),
      t = 0,
      o = 0;
    for (; t < 3822; ) {
      let i = n[t++];
      if (i < 0) o -= i;
      else {
        let l = n[t++];
        i & 2 && (l = e[l]), i & 1 ? u.fill(l, o, (o += n[t++])) : (u[o++] = l);
      }
    }
    return u;
  })(
    [
      -1, 2, 26, 2, 27, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 63, 2, 64, 3, 0, 3, 0,
      3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 65,
      2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 66, 0, 134152192, 3, 0, 2, 0,
      4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 18, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19,
      2, 0, 0, 608174079, 2, 0, 2, 60, 2, 7, 2, 6, 0, 4286611199, 3, 0, 2, 2, 1, 3, 0, 3, 0,
      4294901711, 2, 40, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023,
      0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2,
      0, 2967484831, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 2, 203, 2, 3, 0,
      4093640191, 0, 660618719, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1616920031, 0, 982991, 2,
      3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 71, 0, 4284449919, 0, 851904, 2, 4,
      2, 12, 0, 67076095, -1, 2, 72, 0, 1073741743, 0, 4093607775, -1, 0, 50331649, 0, 3265266687,
      2, 33, 0, 4294844415, 0, 4278190047, 2, 20, 2, 137, -1, 3, 0, 2, 2, 23, 2, 0, 2, 10, 2, 0, 2,
      15, 2, 22, 3, 0, 10, 2, 74, 2, 0, 2, 75, 2, 76, 2, 77, 2, 0, 2, 78, 2, 0, 2, 11, 0, 261632, 2,
      25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 79, 2, 5, 3, 0, 2, 2, 80, 0, 2151677951, 2, 29, 2, 9,
      0, 909311, 3, 0, 2, 0, 814743551, 2, 49, 0, 67090432, 3, 0, 2, 2, 42, 2, 0, 2, 6, 2, 0, 2, 30,
      2, 8, 0, 268374015, 2, 110, 2, 51, 2, 0, 2, 81, 0, 134153215, -1, 2, 7, 2, 0, 2, 8, 0,
      2684354559, 0, 67044351, 0, 3221160064, 2, 17, -1, 3, 0, 2, 2, 53, 0, 1046528, 3, 0, 3, 2, 9,
      2, 0, 2, 54, 0, 4294960127, 2, 10, 2, 6, 2, 11, 0, 4294377472, 2, 12, 3, 0, 16, 2, 13, 2, 0,
      2, 82, 2, 10, 2, 0, 2, 83, 2, 84, 2, 85, 2, 210, 2, 55, 0, 1048577, 2, 86, 2, 14, -1, 2, 14,
      0, 131042, 2, 87, 2, 88, 2, 89, 2, 0, 2, 34, -83, 3, 0, 7, 0, 1046559, 2, 0, 2, 15, 2, 0, 0,
      2147516671, 2, 21, 3, 90, 2, 2, 0, -16, 2, 91, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4,
      3, 0, 2, 2, 28, 2, 16, 3, 0, 2, 2, 17, 2, 0, -1, 2, 18, -16, 3, 0, 206, -2, 3, 0, 692, 2, 73,
      -1, 2, 18, 2, 10, 3, 0, 8, 2, 93, 2, 133, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 94, 2, 95,
      3, 0, 2, 2, 96, 2, 0, 2, 97, 2, 46, 2, 0, 0, 4351, 2, 0, 2, 9, 3, 0, 2, 0, 67043391, 0,
      3909091327, 2, 0, 2, 24, 2, 9, 2, 20, 3, 0, 2, 0, 67076097, 2, 8, 2, 0, 2, 21, 0, 67059711, 0,
      4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 101, 2, 102, 2, 22, 2, 23, 3, 0, 3, 0,
      67057663, 3, 0, 349, 2, 103, 2, 104, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0,
      3774349439, 2, 105, 2, 106, 3, 0, 2, 2, 19, 2, 107, 3, 0, 10, 2, 10, 2, 18, 2, 0, 2, 47, 2, 0,
      2, 31, 2, 108, 2, 25, 0, 1638399, 2, 183, 2, 109, 3, 0, 3, 2, 20, 2, 26, 2, 27, 2, 5, 2, 28,
      2, 0, 2, 8, 2, 111, -1, 2, 112, 2, 113, 2, 114, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -3, 2,
      163, -4, 2, 20, 2, 0, 2, 36, 0, 1, 2, 0, 2, 67, 2, 6, 2, 12, 2, 10, 2, 0, 2, 115, -1, 3, 0, 4,
      2, 10, 2, 23, 2, 116, 2, 7, 2, 0, 2, 117, 2, 0, 2, 118, 2, 119, 2, 120, 2, 0, 2, 9, 3, 0, 9,
      2, 21, 2, 30, 2, 31, 2, 121, 2, 122, -2, 2, 123, 2, 124, 2, 30, 2, 21, 2, 8, -2, 2, 125, 2,
      30, 2, 32, -2, 2, 0, 2, 39, -2, 0, 4277137519, 0, 2269118463, -1, 3, 20, 2, -1, 2, 33, 2, 38,
      2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 48,
      2, 0, 0, 4294950463, 2, 37, -7, 2, 0, 0, 203775, 2, 57, 2, 167, 2, 20, 2, 43, 2, 36, 2, 18, 2,
      37, 2, 18, 2, 126, 2, 21, 3, 0, 2, 2, 38, 0, 2151677888, 2, 0, 2, 12, 0, 4294901764, 2, 144,
      2, 0, 2, 58, 2, 56, 0, 5242879, 3, 0, 2, 0, 402644511, -1, 2, 128, 2, 39, 0, 3, -1, 2, 129, 2,
      130, 2, 0, 0, 67045375, 2, 40, 0, 4226678271, 0, 3766565279, 0, 2039759, 2, 132, 2, 41, 0,
      1046437, 0, 6, 3, 0, 2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0,
      1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 42, 2, 23, 2, 50, 2, 11, 2, 61, 2, 38, -5,
      2, 0, 2, 12, -3, 3, 0, 2, 0, 2147484671, 2, 134, 0, 4190109695, 2, 52, -2, 2, 135, 0,
      4244635647, 0, 27, 2, 0, 2, 8, 2, 43, 2, 0, 2, 68, 2, 18, 2, 0, 2, 42, -6, 2, 0, 2, 45, 2, 59,
      2, 44, 2, 45, 2, 46, 2, 47, 0, 8388351, -2, 2, 136, 0, 3028287487, 2, 48, 2, 138, 0, 33259519,
      2, 49, -9, 2, 21, 0, 4294836223, 0, 3355443199, 0, 134152199, -2, 2, 69, -2, 3, 0, 28, 2, 32,
      -3, 3, 0, 3, 2, 17, 3, 0, 6, 2, 50, -81, 2, 18, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 2, 30, 3, 0,
      124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 0, 2, 32, -54, 3, 0, 17, 2, 42, 2, 8, 2, 23, 2, 0, 2, 8,
      2, 23, 2, 51, 2, 0, 2, 21, 2, 52, 2, 139, 2, 25, -13, 2, 0, 2, 53, -6, 3, 0, 2, -4, 3, 0, 2,
      0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 196635, 3, 0, 191, 2, 54, 3, 0, 38, 2, 30, 2, 55,
      2, 34, -278, 2, 140, 3, 0, 9, 2, 141, 2, 142, 2, 56, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 143, 0,
      1677656575, -130, 2, 26, -16, 2, 0, 2, 24, 2, 38, -16, 0, 4161266656, 0, 4071, 2, 205, -4, 2,
      57, -13, 3, 0, 2, 2, 58, 2, 0, 2, 145, 2, 146, 2, 62, 2, 0, 2, 147, 2, 148, 2, 149, 3, 0, 10,
      2, 150, 2, 151, 2, 22, 3, 58, 2, 3, 152, 2, 3, 59, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 92,
      2, 0, 0, 2105343, 0, 4160749584, 2, 177, -34, 2, 8, 2, 154, -6, 0, 4194303871, 0, 4294903771,
      2, 0, 2, 60, 2, 100, -3, 2, 0, 0, 1073684479, 0, 17407, -9, 2, 18, 2, 17, 2, 0, 2, 32, -14, 2,
      18, 2, 32, -6, 2, 18, 2, 12, -15, 2, 155, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 61, -37, 2, 62,
      2, 156, 2, 157, 2, 158, 2, 159, 2, 160, -105, 2, 26, -32, 3, 0, 1335, -1, 3, 0, 129, 2, 32, 3,
      0, 6, 2, 10, 3, 0, 180, 2, 161, 3, 0, 233, 2, 162, 3, 0, 18, 2, 10, -77, 3, 0, 16, 2, 10, -47,
      3, 0, 154, 2, 6, 3, 0, 130, 2, 25, -22250, 3, 0, 7, 2, 25, -6130, 3, 5, 2, -1, 0, 69207040, 3,
      44, 2, 3, 0, 14, 2, 63, 2, 64, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 41, 3, 0, 4,
      0, 4294966275, 3, 0, 4, 2, 16, 2, 65, 2, 0, 2, 34, -1, 2, 18, 2, 66, -1, 2, 0, 0, 2047, 0,
      4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 25, 2, 67, 3, 0, 2, 0,
      131135, 2, 98, 0, 70256639, 0, 71303167, 0, 272, 2, 42, 2, 6, 0, 32511, 2, 0, 2, 49, -1, 2,
      99, 2, 68, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0,
      268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 70, 2, 69,
      0, 33554435, 2, 131, 2, 70, 2, 164, 0, 131075, 0, 3594373096, 0, 67094296, 2, 69, -1, 0,
      4294828e3, 0, 603979263, 0, 654311424, 0, 3, 0, 4294828001, 0, 602930687, 2, 171, 0, 393219,
      0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 71, 2, 38, -1, 2,
      4, 0, 917503, 2, 38, -1, 2, 72, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 33, 2, 73, 0,
      7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 15, 2, 22, 3,
      0, 10, 2, 74, 2, 0, 2, 75, 2, 76, 2, 77, 2, 0, 2, 78, 2, 0, 2, 12, -1, 2, 25, 3, 0, 2, 2, 13,
      2, 4, 3, 0, 18, 2, 79, 2, 5, 3, 0, 2, 2, 80, 0, 2147745791, 3, 19, 2, 0, 122879, 2, 0, 2, 9,
      0, 276824064, -2, 3, 0, 2, 2, 42, 2, 0, 0, 4294903295, 2, 0, 2, 30, 2, 8, -1, 2, 18, 2, 51, 2,
      0, 2, 81, 2, 49, -1, 2, 21, 2, 0, 2, 29, -2, 0, 128, -2, 2, 28, 2, 9, 0, 8160, -1, 2, 127, 0,
      4227907585, 2, 0, 2, 37, 2, 0, 2, 50, 2, 184, 2, 10, 2, 6, 2, 11, -1, 0, 74440192, 3, 0, 6,
      -2, 3, 0, 8, 2, 13, 2, 0, 2, 82, 2, 10, 2, 0, 2, 83, 2, 84, 2, 85, -3, 2, 86, 2, 14, -3, 2,
      87, 2, 88, 2, 89, 2, 0, 2, 34, -83, 3, 0, 7, 0, 817183, 2, 0, 2, 15, 2, 0, 0, 33023, 2, 21, 3,
      90, 2, -17, 2, 91, 0, 524157950, 2, 4, 2, 0, 2, 92, 2, 4, 2, 0, 2, 22, 2, 28, 2, 16, 3, 0, 2,
      2, 17, 2, 0, -1, 2, 18, -16, 3, 0, 206, -2, 3, 0, 692, 2, 73, -1, 2, 18, 2, 10, 3, 0, 8, 2,
      93, 0, 3072, 2, 0, 0, 2147516415, 2, 10, 3, 0, 2, 2, 25, 2, 94, 2, 95, 3, 0, 2, 2, 96, 2, 0,
      2, 97, 2, 46, 0, 4294965179, 0, 7, 2, 0, 2, 9, 2, 95, 2, 9, -1, 0, 1761345536, 2, 98, 0,
      4294901823, 2, 38, 2, 20, 2, 99, 2, 35, 2, 100, 0, 2080440287, 2, 0, 2, 34, 2, 153, 0,
      3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 101, 2, 102, 2, 22, 2, 23, 3, 0,
      3, 0, 7, 3, 0, 349, 2, 103, 2, 104, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0,
      2700607615, 2, 105, 2, 106, 3, 0, 2, 2, 19, 2, 107, 3, 0, 10, 2, 10, 2, 18, 2, 0, 2, 47, 2, 0,
      2, 31, 2, 108, -3, 2, 109, 3, 0, 3, 2, 20, -1, 3, 5, 2, 2, 110, 2, 0, 2, 8, 2, 111, -1, 2,
      112, 2, 113, 2, 114, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -8, 2, 20, 2, 0, 2, 36, -1, 2, 0, 2,
      67, 2, 6, 2, 30, 2, 10, 2, 0, 2, 115, -1, 3, 0, 4, 2, 10, 2, 18, 2, 116, 2, 7, 2, 0, 2, 117,
      2, 0, 2, 118, 2, 119, 2, 120, 2, 0, 2, 9, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 121, 2, 122, -2, 2,
      123, 2, 124, 2, 30, 2, 21, 2, 8, -2, 2, 125, 2, 30, 2, 32, -2, 2, 0, 2, 39, -2, 0, 4277075969,
      2, 30, -1, 3, 20, 2, -1, 2, 33, 2, 126, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1,
      2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 50, 2, 98, 0, 4294934591, 2, 37, -7, 2, 0, 0, 197631, 2,
      57, -1, 2, 20, 2, 43, 2, 37, 2, 18, 0, 3, 2, 18, 2, 126, 2, 21, 2, 127, 2, 54, -1, 0, 2490368,
      2, 127, 2, 25, 2, 18, 2, 34, 2, 127, 2, 38, 0, 4294901904, 0, 4718591, 2, 127, 2, 35, 0,
      335544350, -1, 2, 128, 0, 2147487743, 0, 1, -1, 2, 129, 2, 130, 2, 8, -1, 2, 131, 2, 70, 0,
      3758161920, 0, 3, 2, 132, 0, 12582911, 0, 655360, -1, 2, 0, 2, 29, 0, 2147485568, 0, 3, 2, 0,
      2, 25, 0, 176, -5, 2, 0, 2, 17, 2, 192, -1, 2, 0, 2, 25, 2, 209, -1, 2, 0, 0, 16779263, -2, 2,
      12, -1, 2, 38, -5, 2, 0, 2, 133, -3, 3, 0, 2, 2, 55, 2, 134, 0, 2147549183, 0, 2, -2, 2, 135,
      2, 36, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 536871935, 2, 18, 2, 0, 2,
      42, -6, 2, 0, 0, 1, 2, 59, 2, 17, 0, 1, 2, 46, 2, 25, -3, 2, 136, 2, 36, 2, 137, 2, 138, 0,
      16778239, -10, 2, 35, 0, 4294836212, 2, 9, -3, 2, 69, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 17,
      3, 0, 6, 2, 50, -81, 2, 18, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 0, 126, 3, 0, 124, 2, 12, 3, 0,
      18, 2, 38, -213, 2, 10, -55, 3, 0, 17, 2, 42, 2, 8, 2, 18, 2, 0, 2, 8, 2, 18, 2, 60, 2, 0, 2,
      25, 2, 50, 2, 139, 2, 25, -13, 2, 0, 2, 73, -6, 3, 0, 2, -4, 3, 0, 2, 0, 67583, -1, 2, 107,
      -2, 0, 11, 3, 0, 191, 2, 54, 3, 0, 38, 2, 30, 2, 55, 2, 34, -278, 2, 140, 3, 0, 9, 2, 141, 2,
      142, 2, 56, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 143, 2, 144, -187, 3, 0, 2, 2, 58, 2, 0, 2, 145,
      2, 146, 2, 62, 2, 0, 2, 147, 2, 148, 2, 149, 3, 0, 10, 2, 150, 2, 151, 2, 22, 3, 58, 2, 3,
      152, 2, 3, 59, 2, 2, 153, -57, 2, 8, 2, 154, -7, 2, 18, 2, 0, 2, 60, -4, 2, 0, 0, 1065361407,
      0, 16384, -9, 2, 18, 2, 60, 2, 0, 2, 133, -14, 2, 18, 2, 133, -6, 2, 18, 0, 81919, -15, 2,
      155, 3, 0, 6, 2, 126, -1, 3, 0, 2, 0, 2063, -37, 2, 62, 2, 156, 2, 157, 2, 158, 2, 159, 2,
      160, -138, 3, 0, 1335, -1, 3, 0, 129, 2, 32, 3, 0, 6, 2, 10, 3, 0, 180, 2, 161, 3, 0, 233, 2,
      162, 3, 0, 18, 2, 10, -77, 3, 0, 16, 2, 10, -47, 3, 0, 154, 2, 6, 3, 0, 130, 2, 25, -28386, 2,
      0, 0, 1, -1, 2, 55, 2, 0, 0, 8193, -21, 2, 201, 0, 10255, 0, 4, -11, 2, 69, 2, 182, -1, 0,
      71680, -1, 2, 174, 0, 4292900864, 0, 268435519, -5, 2, 163, -1, 2, 173, -1, 0, 6144, -2, 2,
      46, -1, 2, 168, -1, 0, 2147532800, 2, 164, 2, 170, 0, 8355840, -2, 0, 4, -4, 2, 198, 0,
      205128192, 0, 1333757536, 0, 2147483696, 0, 423953, 0, 747766272, 0, 2717763192, 0,
      4286578751, 0, 278545, 2, 165, 0, 4294886464, 0, 33292336, 0, 417809, 2, 165, 0, 1327482464,
      0, 4278190128, 0, 700594195, 0, 1006647527, 0, 4286497336, 0, 4160749631, 2, 166, 0,
      201327104, 0, 3634348576, 0, 8323120, 2, 166, 0, 202375680, 0, 2678047264, 0, 4293984304, 2,
      166, -1, 0, 983584, 0, 48, 0, 58720273, 0, 3489923072, 0, 10517376, 0, 4293066815, 0, 1, 2,
      213, 2, 167, 2, 0, 0, 2089, 0, 3221225552, 0, 201359520, 2, 0, -2, 0, 256, 0, 122880, 0,
      16777216, 2, 163, 0, 4160757760, 2, 0, -6, 2, 179, -11, 0, 3263218176, -1, 0, 49664, 0,
      2160197632, 0, 8388802, -1, 0, 12713984, -1, 2, 168, 2, 186, 2, 187, -2, 2, 175, -20, 0,
      3758096385, -2, 2, 169, 2, 195, 2, 94, 2, 180, 0, 4294057984, -2, 2, 176, 2, 172, 0,
      4227874816, -2, 2, 169, -1, 2, 170, -1, 2, 181, 2, 55, 0, 4026593280, 0, 14, 0, 4292919296,
      -1, 2, 178, 0, 939588608, -1, 0, 805306368, -1, 2, 55, 2, 171, 2, 172, 2, 173, 2, 211, 2, 0,
      -2, 0, 8192, -4, 0, 267386880, -1, 0, 117440512, 0, 7168, -1, 2, 170, 2, 168, 2, 174, 2, 188,
      -16, 2, 175, -1, 0, 1426112704, 2, 176, -1, 2, 196, 0, 271581216, 0, 2149777408, 2, 25, 2,
      174, 2, 55, 0, 851967, 2, 189, -1, 2, 177, 2, 190, -4, 2, 178, -20, 2, 98, 2, 208, -56, 0,
      3145728, 2, 191, -10, 0, 32505856, -1, 2, 179, -1, 0, 2147385088, 2, 94, 1, 2155905152, 2, -3,
      2, 176, 2, 0, 0, 67108864, -2, 2, 180, -6, 2, 181, 2, 25, 0, 1, -1, 0, 1, -1, 2, 182, -3, 2,
      126, 2, 69, -2, 2, 100, -2, 0, 32704, 2, 55, -915, 2, 183, -1, 2, 207, -10, 2, 194, -5, 2,
      185, -6, 0, 3759456256, 2, 19, -1, 2, 184, -1, 2, 185, -2, 0, 4227874752, -3, 0, 2146435072,
      2, 186, -2, 0, 1006649344, 2, 55, -1, 2, 94, 0, 201375744, -3, 0, 134217720, 2, 94, 0,
      4286677377, 0, 32896, -1, 2, 178, -3, 0, 4227907584, -349, 0, 65520, 0, 1920, 2, 167, 3, 0,
      264, -11, 2, 173, -2, 2, 187, 2, 0, 0, 520617856, 0, 2692743168, 0, 36, -3, 0, 524280, -13, 2,
      193, -1, 0, 4294934272, 2, 25, 2, 187, -1, 2, 215, 0, 2158720, -3, 2, 186, 0, 1, -4, 2, 55, 0,
      3808625411, 0, 3489628288, 0, 4096, 0, 1207959680, 0, 3221274624, 2, 0, -3, 2, 188, 0, 120, 0,
      7340032, -2, 2, 189, 2, 4, 2, 25, 2, 176, 3, 0, 4, 2, 186, -1, 2, 190, 2, 167, -1, 0, 8176, 2,
      170, 2, 188, 0, 1073741824, -1, 0, 4290773232, 2, 0, -4, 2, 176, 2, 197, 0, 15728640, 2, 167,
      -1, 2, 174, -1, 0, 134250480, 0, 4720640, 0, 3825467396, -1, 2, 180, -9, 2, 94, 2, 181, 0,
      4294967040, 2, 137, 0, 4160880640, 3, 0, 2, 0, 704, 0, 1849688064, 2, 191, -1, 2, 55, 0,
      4294901887, 2, 0, 0, 130547712, 0, 1879048192, 2, 212, 3, 0, 2, -1, 2, 192, 2, 193, -1, 0,
      17829776, 0, 2025848832, 0, 4261477888, -2, 2, 0, -1, 0, 4286580608, -1, 0, 29360128, 2, 200,
      0, 16252928, 0, 3791388672, 2, 130, 3, 0, 2, -2, 2, 206, 2, 0, -1, 2, 107, -1, 0, 66584576,
      -1, 2, 199, -1, 0, 448, 0, 4294918080, 3, 0, 6, 2, 55, -1, 0, 4294755328, 0, 4294967267, 2, 7,
      -1, 2, 174, 2, 187, 2, 25, 2, 98, 2, 25, 2, 194, 2, 94, -2, 0, 245760, 2, 195, -1, 2, 163, 2,
      202, 0, 4227923456, -1, 2, 196, 2, 174, 2, 94, -3, 0, 4292870145, 0, 262144, -1, 2, 95, 2, 0,
      0, 1073758848, 2, 197, -1, 0, 4227921920, 2, 198, 0, 68289024, 0, 528402016, 0, 4292927536, 0,
      46080, 2, 191, 0, 4265609306, 0, 4294967289, -2, 0, 268435456, 2, 95, -2, 2, 199, 3, 0, 5, -1,
      2, 200, 2, 176, 2, 0, -2, 0, 4227923936, 2, 67, -1, 2, 187, 2, 197, 2, 99, 2, 168, 2, 178, 2,
      204, 3, 0, 5, -1, 2, 167, 3, 0, 3, -2, 0, 2146959360, 0, 9440640, 0, 104857600, 0, 4227923840,
      3, 0, 2, 0, 768, 2, 201, 2, 28, -2, 2, 174, -2, 2, 202, -1, 2, 169, 2, 98, 3, 0, 5, -1, 0,
      4227923964, 0, 512, 0, 8388608, 2, 203, 2, 183, 2, 193, 0, 4286578944, 3, 0, 2, 0, 1152, 0,
      1266679808, 2, 199, 0, 576, 0, 4261707776, 2, 98, 3, 0, 9, 2, 169, 0, 131072, 0, 939524096, 2,
      188, 3, 0, 2, 2, 16, -1, 0, 2147221504, -28, 2, 187, 3, 0, 3, -3, 0, 4292902912, -6, 2, 99, 3,
      0, 81, 2, 25, -2, 2, 107, -33, 2, 18, 2, 181, -124, 2, 188, -18, 2, 204, 3, 0, 213, -1, 2,
      187, 3, 0, 54, -17, 2, 169, 2, 55, 2, 205, -1, 2, 55, 2, 197, 0, 4290822144, -2, 0, 67174336,
      0, 520093700, 2, 18, 3, 0, 13, -1, 2, 187, 3, 0, 6, -2, 2, 188, 3, 0, 3, -2, 0, 30720, -1, 0,
      32512, 3, 0, 2, 0, 4294770656, -191, 2, 185, -38, 2, 181, 2, 8, 2, 206, 3, 0, 278, 0,
      2417033215, -9, 0, 4294705144, 0, 4292411391, 0, 65295, -11, 2, 167, 3, 0, 72, -3, 0,
      3758159872, 0, 201391616, 3, 0, 123, -7, 2, 187, -13, 2, 180, 3, 0, 2, -1, 2, 173, 2, 207, -3,
      2, 99, 2, 0, -7, 2, 181, -1, 0, 384, -1, 0, 133693440, -3, 2, 208, -2, 2, 110, 3, 0, 3, 3,
      180, 2, -2, 2, 94, 2, 169, 3, 0, 4, -2, 2, 196, -1, 2, 163, 0, 335552923, 2, 209, -1, 0,
      538974272, 0, 2214592512, 0, 132e3, -10, 0, 192, -8, 2, 210, -21, 0, 134213632, 2, 162, 3, 0,
      34, 2, 55, 0, 4294965279, 3, 0, 6, 0, 100663424, 0, 63524, -1, 2, 214, 2, 152, 3, 0, 3, -1, 0,
      3221282816, 0, 4294917120, 3, 0, 9, 2, 25, 2, 211, -1, 2, 212, 3, 0, 14, 2, 25, 2, 187, 3, 0,
      6, 2, 25, 2, 213, 3, 0, 15, 0, 2147520640, -6, 0, 4286578784, 2, 0, -2, 0, 1006694400, 3, 0,
      24, 2, 36, -1, 0, 4292870144, 3, 0, 2, 0, 1, 2, 176, 3, 0, 6, 2, 209, 0, 4110942569, 0,
      1432950139, 0, 2701658217, 0, 4026532864, 0, 4026532881, 2, 0, 2, 47, 3, 0, 8, -1, 2, 178, -2,
      2, 180, 0, 98304, 0, 65537, 2, 181, -5, 2, 214, 2, 0, 2, 37, 2, 202, 2, 167, 0, 4294770176, 2,
      110, 3, 0, 4, -30, 2, 192, 0, 3758153728, -3, 0, 125829120, -2, 2, 187, 0, 4294897664, 2, 178,
      -1, 2, 199, -1, 2, 174, 0, 4026580992, 2, 95, 2, 0, -10, 2, 180, 0, 3758145536, 0, 31744, -1,
      0, 1610628992, 0, 4261477376, -4, 2, 215, -2, 2, 187, 3, 0, 32, -1335, 2, 0, -129, 2, 187, -6,
      2, 176, -180, 0, 65532, -233, 2, 177, -18, 2, 176, 3, 0, 77, -16, 2, 176, 3, 0, 47, -154, 2,
      170, -130, 2, 18, 3, 0, 22250, -7, 2, 18, 3, 0, 6128,
    ],
    [
      4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726, 4294903807, 268435455,
      2147483647, 1048575, 1073741823, 3892314111, 134217727, 1061158911, 536805376, 4294910143,
      4294901759, 32767, 4294901760, 262143, 536870911, 8388607, 4160749567, 4294902783, 4294918143,
      65535, 67043328, 2281701374, 4294967264, 2097151, 4194303, 255, 67108863, 4294967039, 511,
      524287, 131071, 63, 127, 3238002687, 4294549487, 4290772991, 33554431, 4294901888, 4286578687,
      67043329, 4294705152, 4294770687, 67043583, 1023, 15, 2047999, 67043343, 67051519, 16777215,
      2147483648, 4294902e3, 28, 4292870143, 4294966783, 16383, 67047423, 4294967279, 262083, 20511,
      41943039, 493567, 4294959104, 603979775, 65536, 602799615, 805044223, 4294965206, 8191,
      1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855,
      2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376,
      2139062143, 224, 4169138175, 4294909951, 4286578688, 4294967292, 4294965759, 535511039,
      4294966272, 4294967280, 32768, 8289918, 4294934399, 4294901775, 4294965375, 1602223615,
      4294967259, 4294443008, 268369920, 4292804608, 4294967232, 486341884, 4294963199, 3087007615,
      1073692671, 4128527, 4279238655, 4294902015, 4160684047, 4290246655, 469499899, 4294967231,
      134086655, 4294966591, 2445279231, 3670015, 31, 4294967288, 4294705151, 3221208447,
      4294902271, 4294549472, 4294921215, 4095, 4285526655, 4294966527, 4294966143, 64, 4294966719,
      3774873592, 1877934080, 262151, 2555904, 536807423, 67043839, 3758096383, 3959414372,
      3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4294934527, 4087, 2016,
      2147446655, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901763, 4294901761,
      536870912, 2952790016, 202506752, 139264, 4026531840, 402653184, 4261412864, 63488,
      1610612736, 4227922944, 49152, 65280, 3233808384, 3221225472, 65534, 61440, 57152, 4293918720,
      4290772992, 25165824, 57344, 4227915776, 4278190080, 3758096384, 4227858432, 4160749568,
      3758129152, 4294836224, 4194304, 251658240, 196608, 4294963200, 2143289344, 2097152, 64512,
      417808, 4227923712, 12582912, 50331648, 65528, 65472, 4294967168, 15360, 4294966784, 65408,
      4294965248, 16, 12288, 4294934528, 2080374784, 2013265920, 4294950912, 524288,
    ]
  );
  function A(n) {
    return n.column++, (n.currentChar = n.source.charCodeAt(++n.index));
  }
  function tn(n) {
    let e = n.currentChar;
    if ((e & 64512) !== 55296) return 0;
    let u = n.source.charCodeAt(n.index + 1);
    return (u & 64512) !== 56320 ? 0 : 65536 + ((e & 1023) << 10) + (u & 1023);
  }
  function on(n, e) {
    (n.currentChar = n.source.charCodeAt(++n.index)),
      (n.flags |= 1),
      (e & 4) === 0 && ((n.column = 0), n.line++);
  }
  function k2(n) {
    (n.flags |= 1), (n.currentChar = n.source.charCodeAt(++n.index)), (n.column = 0), n.line++;
  }
  function Xe(n) {
    return (
      n === 160 ||
      n === 65279 ||
      n === 133 ||
      n === 5760 ||
      (n >= 8192 && n <= 8203) ||
      n === 8239 ||
      n === 8287 ||
      n === 12288 ||
      n === 8201 ||
      n === 65519
    );
  }
  function W(n) {
    return n < 65 ? n - 48 : (n - 65 + 10) & 15;
  }
  function He(n) {
    switch (n) {
      case 134283266:
        return 'NumericLiteral';
      case 134283267:
        return 'StringLiteral';
      case 86021:
      case 86022:
        return 'BooleanLiteral';
      case 86023:
        return 'NullLiteral';
      case 65540:
        return 'RegularExpression';
      case 67174408:
      case 67174409:
      case 131:
        return 'TemplateLiteral';
      default:
        return (n & 143360) === 143360
          ? 'Identifier'
          : (n & 4096) === 4096
            ? 'Keyword'
            : 'Punctuator';
    }
  }
  var N = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1032, 0, 0, 2056, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 8192, 0, 3, 0, 0, 8192, 0, 0, 0, 256, 0, 33024, 0, 0, 242, 242, 114, 114, 114,
      114, 114, 114, 594, 594, 0, 0, 16384, 0, 0, 0, 0, 67, 67, 67, 67, 67, 67, 3, 3, 3, 3, 3, 3, 3,
      3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 0, 4099, 0, 71, 71, 71, 71, 71, 71, 7, 7, 7,
      7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16384, 0, 0, 0, 0,
    ],
    ze = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
      0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 0, 0, 0,
    ],
    Rn = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
      0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
      0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 0, 0, 0,
    ];
  function M2(n) {
    return n <= 127 ? ze[n] > 0 : Vn(n);
  }
  function V2(n) {
    return n <= 127 ? Rn[n] > 0 : je(n) || n === 8204 || n === 8205;
  }
  var Un = ['SingleLine', 'MultiLine', 'HTMLOpen', 'HTMLClose', 'HashbangComment'];
  function Ke(n) {
    let { source: e } = n;
    n.currentChar === 35 &&
      e.charCodeAt(n.index + 1) === 33 &&
      (A(n), A(n), ln(n, e, 0, 4, n.tokenIndex, n.tokenLine, n.tokenColumn));
  }
  function Ln(n, e, u, t, o, i, l, f) {
    return t & 512 && c(n, 0), ln(n, e, u, o, i, l, f);
  }
  function ln(n, e, u, t, o, i, l) {
    let { index: f } = n;
    for (
      n.tokenIndex = n.index, n.tokenLine = n.line, n.tokenColumn = n.column;
      n.index < n.end;

    ) {
      if (N[n.currentChar] & 8) {
        let d = n.currentChar === 13;
        k2(n),
          d && n.index < n.end && n.currentChar === 10 && (n.currentChar = e.charCodeAt(++n.index));
        break;
      } else if ((n.currentChar ^ 8232) <= 1) {
        k2(n);
        break;
      }
      A(n), (n.tokenIndex = n.index), (n.tokenLine = n.line), (n.tokenColumn = n.column);
    }
    if (n.onComment) {
      let d = { start: { line: i, column: l }, end: { line: n.tokenLine, column: n.tokenColumn } };
      n.onComment(Un[t & 255], e.slice(f, n.tokenIndex), o, n.tokenIndex, d);
    }
    return u | 1;
  }
  function $e(n, e, u) {
    let { index: t } = n;
    for (; n.index < n.end; )
      if (n.currentChar < 43) {
        let o = !1;
        for (; n.currentChar === 42; )
          if ((o || ((u &= -5), (o = !0)), A(n) === 47)) {
            if ((A(n), n.onComment)) {
              let i = {
                start: { line: n.tokenLine, column: n.tokenColumn },
                end: { line: n.line, column: n.column },
              };
              n.onComment(Un[1], e.slice(t, n.index - 2), t - 2, n.index, i);
            }
            return (n.tokenIndex = n.index), (n.tokenLine = n.line), (n.tokenColumn = n.column), u;
          }
        if (o) continue;
        N[n.currentChar] & 8
          ? n.currentChar === 13
            ? ((u |= 5), k2(n))
            : (on(n, u), (u = (u & -5) | 1))
          : A(n);
      } else (n.currentChar ^ 8232) <= 1 ? ((u = (u & -5) | 1), k2(n)) : ((u &= -5), A(n));
    c(n, 18);
  }
  var o2;
  (function (n) {
    (n[(n.Empty = 0)] = 'Empty'), (n[(n.Escape = 1)] = 'Escape'), (n[(n.Class = 2)] = 'Class');
  })(o2 || (o2 = {}));
  var X;
  (function (n) {
    (n[(n.Empty = 0)] = 'Empty'),
      (n[(n.IgnoreCase = 1)] = 'IgnoreCase'),
      (n[(n.Global = 2)] = 'Global'),
      (n[(n.Multiline = 4)] = 'Multiline'),
      (n[(n.Unicode = 16)] = 'Unicode'),
      (n[(n.Sticky = 8)] = 'Sticky'),
      (n[(n.DotAll = 32)] = 'DotAll'),
      (n[(n.Indices = 64)] = 'Indices'),
      (n[(n.UnicodeSets = 128)] = 'UnicodeSets');
  })(X || (X = {}));
  function We(n, e) {
    let u = n.index,
      t = o2.Empty;
    n: for (;;) {
      let m = n.currentChar;
      if ((A(n), t & o2.Escape)) t &= ~o2.Escape;
      else
        switch (m) {
          case 47:
            if (t) break;
            break n;
          case 92:
            t |= o2.Escape;
            break;
          case 91:
            t |= o2.Class;
            break;
          case 93:
            t &= o2.Escape;
            break;
        }
      if (
        ((m === 13 || m === 10 || m === 8232 || m === 8233) && c(n, 34), n.index >= n.source.length)
      )
        return c(n, 34);
    }
    let o = n.index - 1,
      i = X.Empty,
      l = n.currentChar,
      { index: f } = n;
    for (; V2(l); ) {
      switch (l) {
        case 103:
          i & X.Global && c(n, 36, 'g'), (i |= X.Global);
          break;
        case 105:
          i & X.IgnoreCase && c(n, 36, 'i'), (i |= X.IgnoreCase);
          break;
        case 109:
          i & X.Multiline && c(n, 36, 'm'), (i |= X.Multiline);
          break;
        case 117:
          i & X.Unicode && c(n, 36, 'u'), i & X.UnicodeSets && c(n, 36, 'vu'), (i |= X.Unicode);
          break;
        case 118:
          i & X.Unicode && c(n, 36, 'uv'), i & X.UnicodeSets && c(n, 36, 'v'), (i |= X.UnicodeSets);
          break;
        case 121:
          i & X.Sticky && c(n, 36, 'y'), (i |= X.Sticky);
          break;
        case 115:
          i & X.DotAll && c(n, 36, 's'), (i |= X.DotAll);
          break;
        case 100:
          i & X.Indices && c(n, 36, 'd'), (i |= X.Indices);
          break;
        default:
          c(n, 35);
      }
      l = A(n);
    }
    let d = n.source.slice(f, n.index),
      g = n.source.slice(u, o);
    return (
      (n.tokenRegExp = { pattern: g, flags: d }),
      e & 128 && (n.tokenRaw = n.source.slice(n.tokenIndex, n.index)),
      (n.tokenValue = _e(n, g, d)),
      65540
    );
  }
  function _e(n, e, u) {
    try {
      return new RegExp(e, u);
    } catch {
      try {
        return new RegExp(e, u), null;
      } catch {
        c(n, 34);
      }
    }
  }
  function Ye(n, e, u) {
    let { index: t } = n,
      o = '',
      i = A(n),
      l = n.index;
    for (; (N[i] & 8) === 0; ) {
      if (i === u)
        return (
          (o += n.source.slice(l, n.index)),
          A(n),
          e & 128 && (n.tokenRaw = n.source.slice(t, n.index)),
          (n.tokenValue = o),
          134283267
        );
      if ((i & 8) === 8 && i === 92) {
        if (((o += n.source.slice(l, n.index)), (i = A(n)), i < 127 || i === 8232 || i === 8233)) {
          let f = Mn(n, e, i);
          f >= 0 ? (o += String.fromCodePoint(f)) : Jn(n, f, 0);
        } else o += String.fromCodePoint(i);
        l = n.index + 1;
      }
      n.index >= n.end && c(n, 16), (i = A(n));
    }
    c(n, 16);
  }
  function Mn(n, e, u, t = 0) {
    switch (u) {
      case 98:
        return 8;
      case 102:
        return 12;
      case 114:
        return 13;
      case 110:
        return 10;
      case 116:
        return 9;
      case 118:
        return 11;
      case 13:
        if (n.index < n.end) {
          let o = n.source.charCodeAt(n.index + 1);
          o === 10 && ((n.index = n.index + 1), (n.currentChar = o));
        }
      case 10:
      case 8232:
      case 8233:
        return (n.column = -1), n.line++, -1;
      case 48:
      case 49:
      case 50:
      case 51: {
        let o = u - 48,
          i = n.index + 1,
          l = n.column + 1;
        if (i < n.end) {
          let f = n.source.charCodeAt(i);
          if ((N[f] & 32) === 0) {
            if (o !== 0 || N[f] & 512) {
              if (e & 256 || t) return -2;
              n.flags |= 64;
            }
          } else {
            if (e & 256 || t) return -2;
            if (((n.currentChar = f), (o = (o << 3) | (f - 48)), i++, l++, i < n.end)) {
              let d = n.source.charCodeAt(i);
              N[d] & 32 && ((n.currentChar = d), (o = (o << 3) | (d - 48)), i++, l++);
            }
            n.flags |= 64;
          }
          (n.index = i - 1), (n.column = l - 1);
        }
        return o;
      }
      case 52:
      case 53:
      case 54:
      case 55: {
        if (t || e & 256) return -2;
        let o = u - 48,
          i = n.index + 1,
          l = n.column + 1;
        if (i < n.end) {
          let f = n.source.charCodeAt(i);
          N[f] & 32 &&
            ((o = (o << 3) | (f - 48)), (n.currentChar = f), (n.index = i), (n.column = l));
        }
        return (n.flags |= 64), o;
      }
      case 120: {
        let o = A(n);
        if ((N[o] & 64) === 0) return -4;
        let i = W(o),
          l = A(n);
        if ((N[l] & 64) === 0) return -4;
        let f = W(l);
        return (i << 4) | f;
      }
      case 117: {
        let o = A(n);
        if (n.currentChar === 123) {
          let i = 0;
          for (; (N[A(n)] & 64) !== 0; )
            if (((i = (i << 4) | W(n.currentChar)), i > 1114111)) return -5;
          return n.currentChar < 1 || n.currentChar !== 125 ? -4 : i;
        } else {
          if ((N[o] & 64) === 0) return -4;
          let i = n.source.charCodeAt(n.index + 1);
          if ((N[i] & 64) === 0) return -4;
          let l = n.source.charCodeAt(n.index + 2);
          if ((N[l] & 64) === 0) return -4;
          let f = n.source.charCodeAt(n.index + 3);
          return (N[f] & 64) === 0
            ? -4
            : ((n.index += 3),
              (n.column += 3),
              (n.currentChar = n.source.charCodeAt(n.index)),
              (W(o) << 12) | (W(i) << 8) | (W(l) << 4) | W(f));
        }
      }
      case 56:
      case 57:
        if (t || (e & 64) === 0 || e & 256) return -3;
        n.flags |= 4096;
      default:
        return u;
    }
  }
  function Jn(n, e, u) {
    switch (e) {
      case -1:
        return;
      case -2:
        c(n, u ? 2 : 1);
      case -3:
        c(n, u ? 3 : 14);
      case -4:
        c(n, 7);
      case -5:
        c(n, 104);
    }
  }
  function jn(n, e) {
    let { index: u } = n,
      t = 67174409,
      o = '',
      i = A(n);
    for (; i !== 96; ) {
      if (i === 36 && n.source.charCodeAt(n.index + 1) === 123) {
        A(n), (t = 67174408);
        break;
      } else if (i === 92)
        if (((i = A(n)), i > 126)) o += String.fromCodePoint(i);
        else {
          let { index: l, line: f, column: d } = n,
            g = Mn(n, e | 256, i, 1);
          if (g >= 0) o += String.fromCodePoint(g);
          else if (g !== -1 && e & 16384) {
            (n.index = l),
              (n.line = f),
              (n.column = d),
              (o = null),
              (i = Qe(n, i)),
              i < 0 && (t = 67174408);
            break;
          } else Jn(n, g, 1);
        }
      else
        n.index < n.end &&
          (i === 13 &&
            n.source.charCodeAt(n.index) === 10 &&
            ((o += String.fromCodePoint(i)), (n.currentChar = n.source.charCodeAt(++n.index))),
          (((i & 83) < 3 && i === 10) || (i ^ 8232) <= 1) && ((n.column = -1), n.line++),
          (o += String.fromCodePoint(i)));
      n.index >= n.end && c(n, 17), (i = A(n));
    }
    return (
      A(n),
      (n.tokenValue = o),
      (n.tokenRaw = n.source.slice(u + 1, n.index - (t === 67174409 ? 1 : 2))),
      t
    );
  }
  function Qe(n, e) {
    for (; e !== 96; ) {
      switch (e) {
        case 36: {
          let u = n.index + 1;
          if (u < n.end && n.source.charCodeAt(u) === 123) return (n.index = u), n.column++, -e;
          break;
        }
        case 10:
        case 8232:
        case 8233:
          (n.column = -1), n.line++;
      }
      n.index >= n.end && c(n, 17), (e = A(n));
    }
    return e;
  }
  function Ze(n, e) {
    return n.index >= n.end && c(n, 0), n.index--, n.column--, jn(n, e);
  }
  function Fn(n, e, u) {
    let t = n.currentChar,
      o = 0,
      i = 9,
      l = u & 64 ? 0 : 1,
      f = 0,
      d = 0;
    if (u & 64) (o = '.' + v2(n, t)), (t = n.currentChar), t === 110 && c(n, 12);
    else {
      if (t === 48)
        if (((t = A(n)), (t | 32) === 120)) {
          for (u = 136, t = A(n); N[t] & 4160; ) {
            if (t === 95) {
              d || c(n, 152), (d = 0), (t = A(n));
              continue;
            }
            (d = 1), (o = o * 16 + W(t)), f++, (t = A(n));
          }
          (f === 0 || !d) && c(n, f === 0 ? 21 : 153);
        } else if ((t | 32) === 111) {
          for (u = 132, t = A(n); N[t] & 4128; ) {
            if (t === 95) {
              d || c(n, 152), (d = 0), (t = A(n));
              continue;
            }
            (d = 1), (o = o * 8 + (t - 48)), f++, (t = A(n));
          }
          (f === 0 || !d) && c(n, f === 0 ? 0 : 153);
        } else if ((t | 32) === 98) {
          for (u = 130, t = A(n); N[t] & 4224; ) {
            if (t === 95) {
              d || c(n, 152), (d = 0), (t = A(n));
              continue;
            }
            (d = 1), (o = o * 2 + (t - 48)), f++, (t = A(n));
          }
          (f === 0 || !d) && c(n, f === 0 ? 0 : 153);
        } else if (N[t] & 32)
          for (e & 256 && c(n, 1), u = 1; N[t] & 16; ) {
            if (N[t] & 512) {
              (u = 32), (l = 0);
              break;
            }
            (o = o * 8 + (t - 48)), (t = A(n));
          }
        else N[t] & 512 ? (e & 256 && c(n, 1), (n.flags |= 64), (u = 32)) : t === 95 && c(n, 0);
      if (u & 48) {
        if (l) {
          for (; i >= 0 && N[t] & 4112; ) {
            if (t === 95) {
              (t = A(n)),
                (t === 95 || u & 32) &&
                  h2(n.index, n.line, n.column, n.index + 1, n.line, n.column, 152),
                (d = 1);
              continue;
            }
            (d = 0), (o = 10 * o + (t - 48)), (t = A(n)), --i;
          }
          if (
            (d && h2(n.index, n.line, n.column, n.index + 1, n.line, n.column, 153),
            i >= 0 && !M2(t) && t !== 46)
          )
            return (
              (n.tokenValue = o),
              e & 128 && (n.tokenRaw = n.source.slice(n.tokenIndex, n.index)),
              134283266
            );
        }
        (o += v2(n, t)),
          (t = n.currentChar),
          t === 46 &&
            (A(n) === 95 && c(n, 0),
            (u = 64),
            (o += '.' + v2(n, n.currentChar)),
            (t = n.currentChar));
      }
    }
    let g = n.index,
      m = 0;
    if (t === 110 && u & 128) (m = 1), (t = A(n));
    else if ((t | 32) === 101) {
      (t = A(n)), N[t] & 256 && (t = A(n));
      let { index: y } = n;
      (N[t] & 16) === 0 && c(n, 11),
        (o += n.source.substring(g, y) + v2(n, t)),
        (t = n.currentChar);
    }
    return (
      ((n.index < n.end && N[t] & 16) || M2(t)) && c(n, 13),
      m
        ? ((n.tokenRaw = n.source.slice(n.tokenIndex, n.index)),
          (n.tokenValue = BigInt(i2(!1, n.tokenRaw.slice(0, -1), '_', ''))),
          134283388)
        : ((n.tokenValue =
            u & 15 ? o : u & 32 ? parseFloat(n.source.substring(n.tokenIndex, n.index)) : +o),
          e & 128 && (n.tokenRaw = n.source.slice(n.tokenIndex, n.index)),
          134283266)
    );
  }
  function v2(n, e) {
    let u = 0,
      t = n.index,
      o = '';
    for (; N[e] & 4112; ) {
      if (e === 95) {
        let { index: i } = n;
        (e = A(n)),
          e === 95 && h2(n.index, n.line, n.column, n.index + 1, n.line, n.column, 152),
          (u = 1),
          (o += n.source.substring(t, i)),
          (t = n.index);
        continue;
      }
      (u = 0), (e = A(n));
    }
    return (
      u && h2(n.index, n.line, n.column, n.index + 1, n.line, n.column, 153),
      o + n.source.substring(t, n.index)
    );
  }
  var V = [
      'end of source',
      'identifier',
      'number',
      'string',
      'regular expression',
      'false',
      'true',
      'null',
      'template continuation',
      'template tail',
      '=>',
      '(',
      '{',
      '.',
      '...',
      '}',
      ')',
      ';',
      ',',
      '[',
      ']',
      ':',
      '?',
      "'",
      '"',
      '++',
      '--',
      '=',
      '<<=',
      '>>=',
      '>>>=',
      '**=',
      '+=',
      '-=',
      '*=',
      '/=',
      '%=',
      '^=',
      '|=',
      '&=',
      '||=',
      '&&=',
      '??=',
      'typeof',
      'delete',
      'void',
      '!',
      '~',
      '+',
      '-',
      'in',
      'instanceof',
      '*',
      '%',
      '/',
      '**',
      '&&',
      '||',
      '===',
      '!==',
      '==',
      '!=',
      '<=',
      '>=',
      '<',
      '>',
      '<<',
      '>>',
      '>>>',
      '&',
      '|',
      '^',
      'var',
      'let',
      'const',
      'break',
      'case',
      'catch',
      'class',
      'continue',
      'debugger',
      'default',
      'do',
      'else',
      'export',
      'extends',
      'finally',
      'for',
      'function',
      'if',
      'import',
      'new',
      'return',
      'super',
      'switch',
      'this',
      'throw',
      'try',
      'while',
      'with',
      'implements',
      'interface',
      'package',
      'private',
      'protected',
      'public',
      'static',
      'yield',
      'as',
      'async',
      'await',
      'constructor',
      'get',
      'set',
      'accessor',
      'from',
      'of',
      'enum',
      'eval',
      'arguments',
      'escaped keyword',
      'escaped future reserved keyword',
      'reserved if strict',
      '#',
      'BigIntLiteral',
      '??',
      '?.',
      'WhiteSpace',
      'Illegal',
      'LineTerminator',
      'PrivateField',
      'Template',
      '@',
      'target',
      'meta',
      'LineFeed',
      'Escaped',
      'JSXText',
    ],
    Xn = Object.create(null, {
      this: { value: 86111 },
      function: { value: 86104 },
      if: { value: 20569 },
      return: { value: 20572 },
      var: { value: 86088 },
      else: { value: 20563 },
      for: { value: 20567 },
      new: { value: 86107 },
      in: { value: 8673330 },
      typeof: { value: 16863275 },
      while: { value: 20578 },
      case: { value: 20556 },
      break: { value: 20555 },
      try: { value: 20577 },
      catch: { value: 20557 },
      delete: { value: 16863276 },
      throw: { value: 86112 },
      switch: { value: 86110 },
      continue: { value: 20559 },
      default: { value: 20561 },
      instanceof: { value: 8411187 },
      do: { value: 20562 },
      void: { value: 16863277 },
      finally: { value: 20566 },
      async: { value: 209005 },
      await: { value: 209006 },
      class: { value: 86094 },
      const: { value: 86090 },
      constructor: { value: 12399 },
      debugger: { value: 20560 },
      export: { value: 20564 },
      extends: { value: 20565 },
      false: { value: 86021 },
      from: { value: 12403 },
      get: { value: 12400 },
      implements: { value: 36964 },
      import: { value: 86106 },
      interface: { value: 36965 },
      let: { value: 241737 },
      null: { value: 86023 },
      of: { value: 274548 },
      package: { value: 36966 },
      private: { value: 36967 },
      protected: { value: 36968 },
      public: { value: 36969 },
      set: { value: 12401 },
      static: { value: 36970 },
      super: { value: 86109 },
      true: { value: 86022 },
      with: { value: 20579 },
      yield: { value: 241771 },
      enum: { value: 86133 },
      eval: { value: 537079926 },
      as: { value: 77932 },
      arguments: { value: 537079927 },
      target: { value: 209029 },
      meta: { value: 209030 },
      accessor: { value: 12402 },
    });
  function qn(n, e, u) {
    for (; Rn[A(n)]; );
    return (
      (n.tokenValue = n.source.slice(n.tokenIndex, n.index)),
      n.currentChar !== 92 && n.currentChar <= 126 ? Xn[n.tokenValue] || 208897 : fn(n, e, 0, u)
    );
  }
  function Ge(n, e) {
    let u = Hn(n);
    return M2(u) || c(n, 5), (n.tokenValue = String.fromCodePoint(u)), fn(n, e, 1, N[u] & 4);
  }
  function fn(n, e, u, t) {
    let o = n.index;
    for (; n.index < n.end; )
      if (n.currentChar === 92) {
        (n.tokenValue += n.source.slice(o, n.index)), (u = 1);
        let l = Hn(n);
        V2(l) || c(n, 5),
          (t = t && N[l] & 4),
          (n.tokenValue += String.fromCodePoint(l)),
          (o = n.index);
      } else {
        let l = tn(n);
        if (l > 0)
          V2(l) || c(n, 20, String.fromCodePoint(l)), (n.currentChar = l), n.index++, n.column++;
        else if (!V2(n.currentChar)) break;
        A(n);
      }
    n.index <= n.end && (n.tokenValue += n.source.slice(o, n.index));
    let { length: i } = n.tokenValue;
    if (t && i >= 2 && i <= 11) {
      let l = Xn[n.tokenValue];
      return l === void 0
        ? 208897 | (u ? -2147483648 : 0)
        : u
          ? l === 209006
            ? (e & 524800) === 0
              ? l | -2147483648
              : -2147483528
            : e & 256
              ? l === 36970 || (l & 36864) === 36864
                ? -2147483527
                : (l & 20480) === 20480
                  ? e & 67108864 && (e & 2048) === 0
                    ? l | -2147483648
                    : -2147483528
                  : -2147274630
              : e & 67108864 && (e & 2048) === 0 && (l & 20480) === 20480
                ? l | -2147483648
                : l === 241771
                  ? e & 67108864
                    ? -2147274630
                    : e & 262144
                      ? -2147483528
                      : l | -2147483648
                  : l === 209005
                    ? -2147274630
                    : (l & 36864) === 36864
                      ? l | 12288 | -2147483648
                      : -2147483528
          : l;
    }
    return 208897 | (u ? -2147483648 : 0);
  }
  function xe(n) {
    let e = A(n);
    if (e === 92) return 130;
    let u = tn(n);
    return u && (e = u), M2(e) || c(n, 96), 130;
  }
  function Hn(n) {
    return (
      n.source.charCodeAt(n.index + 1) !== 117 && c(n, 5),
      (n.currentChar = n.source.charCodeAt((n.index += 2))),
      re(n)
    );
  }
  function re(n) {
    let e = 0,
      u = n.currentChar;
    if (u === 123) {
      let l = n.index - 2;
      for (; N[A(n)] & 64; )
        (e = (e << 4) | W(n.currentChar)),
          e > 1114111 && h2(l, n.line, n.column, n.index, n.line, n.column, 104);
      return (
        n.currentChar !== 125 && h2(l, n.line, n.column, n.index, n.line, n.column, 7), A(n), e
      );
    }
    (N[u] & 64) === 0 && c(n, 7);
    let t = n.source.charCodeAt(n.index + 1);
    (N[t] & 64) === 0 && c(n, 7);
    let o = n.source.charCodeAt(n.index + 2);
    (N[o] & 64) === 0 && c(n, 7);
    let i = n.source.charCodeAt(n.index + 3);
    return (
      (N[i] & 64) === 0 && c(n, 7),
      (e = (W(u) << 12) | (W(t) << 8) | (W(o) << 4) | W(i)),
      (n.currentChar = n.source.charCodeAt((n.index += 4))),
      e
    );
  }
  var pe = [
    128, 128, 128, 128, 128, 128, 128, 128, 128, 127, 135, 127, 127, 129, 128, 128, 128, 128, 128,
    128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 127, 16842798, 134283267, 130,
    208897, 8391477, 8390213, 134283267, 67174411, 16, 8391476, 25233968, 18, 25233969, 67108877,
    8457014, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266,
    134283266, 134283266, 21, 1074790417, 8456256, 1077936155, 8390721, 22, 132, 208897, 208897,
    208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897,
    208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897,
    69271571, 136, 20, 8389959, 208897, 131, 4096, 4096, 4096, 4096, 4096, 4096, 4096, 208897, 4096,
    208897, 208897, 4096, 208897, 4096, 208897, 4096, 208897, 4096, 4096, 4096, 208897, 4096, 4096,
    208897, 4096, 4096, 2162700, 8389702, 1074790415, 16842799, 128,
  ];
  function b(n, e) {
    (n.flags = (n.flags | 1) ^ 1),
      (n.startIndex = n.index),
      (n.startColumn = n.column),
      (n.startLine = n.line),
      n.setToken(zn(n, e, 0));
  }
  function zn(n, e, u) {
    let t = n.index === 0,
      { source: o } = n,
      i = n.index,
      l = n.line,
      f = n.column;
    for (; n.index < n.end; ) {
      (n.tokenIndex = n.index), (n.tokenColumn = n.column), (n.tokenLine = n.line);
      let d = n.currentChar;
      if (d <= 126) {
        let g = pe[d];
        switch (g) {
          case 67174411:
          case 16:
          case 2162700:
          case 1074790415:
          case 69271571:
          case 20:
          case 21:
          case 1074790417:
          case 18:
          case 16842799:
          case 132:
          case 128:
            return A(n), g;
          case 208897:
            return qn(n, e, 0);
          case 4096:
            return qn(n, e, 1);
          case 134283266:
            return Fn(n, e, 144);
          case 134283267:
            return Ye(n, e, d);
          case 131:
            return jn(n, e);
          case 136:
            return Ge(n, e);
          case 130:
            return xe(n);
          case 127:
            A(n);
            break;
          case 129:
            (u |= 5), k2(n);
            break;
          case 135:
            on(n, u), (u = (u & -5) | 1);
            break;
          case 8456256: {
            let m = A(n);
            if (n.index < n.end) {
              if (m === 60) return n.index < n.end && A(n) === 61 ? (A(n), 4194332) : 8390978;
              if (m === 61) return A(n), 8390718;
              if (m === 33) {
                let y = n.index + 1;
                if (y + 1 < n.end && o.charCodeAt(y) === 45 && o.charCodeAt(y + 1) == 45) {
                  (n.column += 3),
                    (n.currentChar = o.charCodeAt((n.index += 3))),
                    (u = Ln(n, o, u, e, 2, n.tokenIndex, n.tokenLine, n.tokenColumn)),
                    (i = n.tokenIndex),
                    (l = n.tokenLine),
                    (f = n.tokenColumn);
                  continue;
                }
                return 8456256;
              }
            }
            return 8456256;
          }
          case 1077936155: {
            A(n);
            let m = n.currentChar;
            return m === 61
              ? A(n) === 61
                ? (A(n), 8390458)
                : 8390460
              : m === 62
                ? (A(n), 10)
                : 1077936155;
          }
          case 16842798:
            return A(n) !== 61 ? 16842798 : A(n) !== 61 ? 8390461 : (A(n), 8390459);
          case 8391477:
            return A(n) !== 61 ? 8391477 : (A(n), 4194340);
          case 8391476: {
            if ((A(n), n.index >= n.end)) return 8391476;
            let m = n.currentChar;
            return m === 61
              ? (A(n), 4194338)
              : m !== 42
                ? 8391476
                : A(n) !== 61
                  ? 8391735
                  : (A(n), 4194335);
          }
          case 8389959:
            return A(n) !== 61 ? 8389959 : (A(n), 4194341);
          case 25233968: {
            A(n);
            let m = n.currentChar;
            return m === 43 ? (A(n), 33619993) : m === 61 ? (A(n), 4194336) : 25233968;
          }
          case 25233969: {
            A(n);
            let m = n.currentChar;
            if (m === 45) {
              if ((A(n), (u & 1 || t) && n.currentChar === 62)) {
                (e & 64) === 0 && c(n, 112),
                  A(n),
                  (u = Ln(n, o, u, e, 3, i, l, f)),
                  (i = n.tokenIndex),
                  (l = n.tokenLine),
                  (f = n.tokenColumn);
                continue;
              }
              return 33619994;
            }
            return m === 61 ? (A(n), 4194337) : 25233969;
          }
          case 8457014: {
            if ((A(n), n.index < n.end)) {
              let m = n.currentChar;
              if (m === 47) {
                A(n),
                  (u = ln(n, o, u, 0, n.tokenIndex, n.tokenLine, n.tokenColumn)),
                  (i = n.tokenIndex),
                  (l = n.tokenLine),
                  (f = n.tokenColumn);
                continue;
              }
              if (m === 42) {
                A(n), (u = $e(n, o, u)), (i = n.tokenIndex), (l = n.tokenLine), (f = n.tokenColumn);
                continue;
              }
              if (e & 8192) return We(n, e);
              if (m === 61) return A(n), 4259875;
            }
            return 8457014;
          }
          case 67108877: {
            let m = A(n);
            if (m >= 48 && m <= 57) return Fn(n, e, 80);
            if (m === 46) {
              let y = n.index + 1;
              if (y < n.end && o.charCodeAt(y) === 46)
                return (n.column += 2), (n.currentChar = o.charCodeAt((n.index += 2))), 14;
            }
            return 67108877;
          }
          case 8389702: {
            A(n);
            let m = n.currentChar;
            return m === 124
              ? (A(n), n.currentChar === 61 ? (A(n), 4194344) : 8913465)
              : m === 61
                ? (A(n), 4194342)
                : 8389702;
          }
          case 8390721: {
            A(n);
            let m = n.currentChar;
            if (m === 61) return A(n), 8390719;
            if (m !== 62) return 8390721;
            if ((A(n), n.index < n.end)) {
              let y = n.currentChar;
              if (y === 62) return A(n) === 61 ? (A(n), 4194334) : 8390980;
              if (y === 61) return A(n), 4194333;
            }
            return 8390979;
          }
          case 8390213: {
            A(n);
            let m = n.currentChar;
            return m === 38
              ? (A(n), n.currentChar === 61 ? (A(n), 4194345) : 8913720)
              : m === 61
                ? (A(n), 4194343)
                : 8390213;
          }
          case 22: {
            let m = A(n);
            if (m === 63) return A(n), n.currentChar === 61 ? (A(n), 4194346) : 276824445;
            if (m === 46) {
              let y = n.index + 1;
              if (y < n.end && ((m = o.charCodeAt(y)), !(m >= 48 && m <= 57)))
                return A(n), 67108990;
            }
            return 22;
          }
        }
      } else {
        if ((d ^ 8232) <= 1) {
          (u = (u & -5) | 1), k2(n);
          continue;
        }
        let g = tn(n);
        if ((g > 0 && (d = g), Vn(d))) return (n.tokenValue = ''), fn(n, e, 0, 0);
        if (Xe(d)) {
          A(n);
          continue;
        }
        c(n, 20, String.fromCodePoint(d));
      }
    }
    return 1048576;
  }
  function nu(n, e) {
    return (
      (n.startIndex = n.tokenIndex = n.index),
      (n.startColumn = n.tokenColumn = n.column),
      (n.startLine = n.tokenLine = n.line),
      n.setToken(N[n.currentChar] & 8192 ? eu(n, e) : zn(n, e, 0)),
      n.getToken()
    );
  }
  function eu(n, e) {
    let u = n.currentChar,
      t = A(n),
      o = n.index;
    for (; t !== u; ) n.index >= n.end && c(n, 16), (t = A(n));
    return (
      t !== u && c(n, 16),
      (n.tokenValue = n.source.slice(o, n.index)),
      A(n),
      e & 128 && (n.tokenRaw = n.source.slice(n.tokenIndex, n.index)),
      134283267
    );
  }
  function w2(n, e) {
    if (
      ((n.startIndex = n.tokenIndex = n.index),
      (n.startColumn = n.tokenColumn = n.column),
      (n.startLine = n.tokenLine = n.line),
      n.index >= n.end)
    ) {
      n.setToken(1048576);
      return;
    }
    if (n.currentChar === 60) {
      A(n), n.setToken(8456256);
      return;
    }
    if (n.currentChar === 123) {
      A(n), n.setToken(2162700);
      return;
    }
    let u = 0;
    for (; n.index < n.end; ) {
      let o = N[n.source.charCodeAt(n.index)];
      if (
        (o & 1024 ? ((u |= 5), k2(n)) : o & 2048 ? (on(n, u), (u = (u & -5) | 1)) : A(n),
        N[n.currentChar] & 16384)
      )
        break;
    }
    n.tokenIndex === n.index && c(n, 0);
    let t = n.source.slice(n.tokenIndex, n.index);
    e & 128 && (n.tokenRaw = t), (n.tokenValue = t), n.setToken(137);
  }
  function r2(n) {
    if ((n.getToken() & 143360) === 143360) {
      let { index: e } = n,
        u = n.currentChar;
      for (; N[u] & 32770; ) u = A(n);
      (n.tokenValue += n.source.slice(e, n.index)), n.setToken(208897, !0);
    }
    return n.getToken();
  }
  function K(n, e) {
    var u;
    (n.flags & 1) === 0 && (n.getToken() & 1048576) !== 1048576 && c(n, 30, V[n.getToken() & 255]),
      P(n, e, 1074790417) || (u = n.onInsertedSemicolon) == null || u.call(n, n.startIndex);
  }
  function Kn(n, e, u, t) {
    return e - u < 13 && t === 'use strict' && ((n.getToken() & 1048576) === 1048576 || n.flags & 1)
      ? 1
      : 0;
  }
  function dn(n, e, u) {
    return n.getToken() !== u ? 0 : (b(n, e), 1);
  }
  function P(n, e, u) {
    return n.getToken() !== u ? !1 : (b(n, e), !0);
  }
  function C(n, e, u) {
    n.getToken() !== u && c(n, 25, V[u & 255]), b(n, e);
  }
  function r(n, e) {
    switch (e.type) {
      case 'ArrayExpression': {
        e.type = 'ArrayPattern';
        let { elements: u } = e;
        for (let t = 0, o = u.length; t < o; ++t) {
          let i = u[t];
          i && r(n, i);
        }
        return;
      }
      case 'ObjectExpression': {
        e.type = 'ObjectPattern';
        let { properties: u } = e;
        for (let t = 0, o = u.length; t < o; ++t) r(n, u[t]);
        return;
      }
      case 'AssignmentExpression':
        (e.type = 'AssignmentPattern'),
          e.operator !== '=' && c(n, 71),
          delete e.operator,
          r(n, e.left);
        return;
      case 'Property':
        r(n, e.value);
        return;
      case 'SpreadElement':
        (e.type = 'RestElement'), r(n, e.argument);
    }
  }
  function J2(n, e, u, t, o) {
    e & 256 &&
      ((t & 36864) === 36864 && c(n, 118), !o && (t & 537079808) === 537079808 && c(n, 119)),
      ((t & 20480) === 20480 || t === -2147483528) && c(n, 102),
      u & 24 && (t & 255) === 73 && c(n, 100),
      e & 524800 && t === 209006 && c(n, 110),
      e & 262400 && t === 241771 && c(n, 97, 'yield');
  }
  function $n(n, e, u) {
    e & 256 &&
      ((u & 36864) === 36864 && c(n, 118),
      (u & 537079808) === 537079808 && c(n, 119),
      u === -2147483527 && c(n, 95),
      u === -2147483528 && c(n, 95)),
      (u & 20480) === 20480 && c(n, 102),
      e & 524800 && u === 209006 && c(n, 110),
      e & 262400 && u === 241771 && c(n, 97, 'yield');
  }
  function Wn(n, e, u) {
    return (
      u === 209006 && (e & 524800 && c(n, 110), (n.destructible |= 128)),
      u === 241771 && e & 262144 && c(n, 97, 'yield'),
      (u & 20480) === 20480 || (u & 36864) === 36864 || u == -2147483527
    );
  }
  function uu(n) {
    return n.property ? n.property.type === 'PrivateIdentifier' : !1;
  }
  function _n(n, e, u, t) {
    for (; e; ) {
      if (e['$' + u]) return t && c(n, 137), 1;
      t && e.loop && (t = 0), (e = e.$);
    }
    return 0;
  }
  function tu(n, e, u) {
    let t = e;
    for (; t; ) t['$' + u] && c(n, 136, u), (t = t.$);
    e['$' + u] = 1;
  }
  function s(n, e, u, t, o, i) {
    return (
      e & 2 && ((i.start = u), (i.end = n.startIndex), (i.range = [u, n.startIndex])),
      e & 4 &&
        ((i.loc = {
          start: { line: t, column: o },
          end: { line: n.startLine, column: n.startColumn },
        }),
        n.sourceFile && (i.loc.source = n.sourceFile)),
      i
    );
  }
  function j2(n) {
    switch (n.type) {
      case 'JSXIdentifier':
        return n.name;
      case 'JSXNamespacedName':
        return n.namespace + ':' + n.name;
      case 'JSXMemberExpression':
        return j2(n.object) + '.' + j2(n.property);
    }
  }
  function K2(n, e, u) {
    let t = j(a2(), 1024);
    return d2(n, e, t, u, 1, 0), t;
  }
  function p2(n, e, ...u) {
    let { index: t, line: o, column: i, tokenIndex: l, tokenLine: f, tokenColumn: d } = n;
    return {
      type: e,
      params: u,
      index: t,
      line: o,
      column: i,
      tokenIndex: l,
      tokenLine: f,
      tokenColumn: d,
    };
  }
  function a2() {
    return { parent: void 0, type: 2 };
  }
  function j(n, e) {
    return { parent: n, type: e, scopeError: void 0 };
  }
  function iu(n) {
    return { parent: n, refs: Object.create(null) };
  }
  function n2(n, e, u, t, o, i) {
    o & 4 ? Yn(n, e, u, t, o) : d2(n, e, u, t, o, i), i & 64 && g2(n, t);
  }
  function d2(n, e, u, t, o, i) {
    let l = u['#' + t];
    l &&
      (l & 2) === 0 &&
      (o & 1
        ? (u.scopeError = p2(n, 145, t))
        : (e & 64 && (e & 256) === 0 && i & 2 && l === 64 && o === 64) || c(n, 145, t)),
      u.type & 128 && u.parent['#' + t] && (u.parent['#' + t] & 2) === 0 && c(n, 145, t),
      u.type & 1024 && l && (l & 2) === 0 && o & 1 && (u.scopeError = p2(n, 145, t)),
      u.type & 64 && u.parent['#' + t] & 768 && c(n, 159, t),
      (u['#' + t] = o);
  }
  function Yn(n, e, u, t, o) {
    let i = u;
    for (; i && (i.type & 256) === 0; ) {
      let l = i['#' + t];
      l & 248 &&
        ((e & 64 && (e & 256) === 0 && ((o & 128 && l & 68) || (l & 128 && o & 68))) ||
          c(n, 145, t)),
        i === u && l & 1 && o & 1 && (i.scopeError = p2(n, 145, t)),
        (l & 256 || (l & 512 && (e & 64) === 0)) && c(n, 145, t),
        (i['#' + t] = o),
        (i = i.parent);
    }
  }
  function ou(n, e, u, t) {
    let o = t & 800;
    o & 768 || (o |= 768);
    let i = e['#' + u];
    i !== void 0 && ((i & 32) !== (o & 32) || i & o & 768) && c(n, 146, u),
      (e['#' + u] = i ? i | o : o);
  }
  function lu(n, e, u) {
    var t;
    (t = e.refs)[u] ?? (t[u] = []),
      e.refs[u].push({ index: n.tokenIndex, line: n.tokenLine, column: n.tokenColumn });
  }
  function Qn(n, e) {
    return e['#' + n] ? 1 : e.parent ? Qn(n, e.parent) : 0;
  }
  function fu(n) {
    for (let e in n.refs)
      if (!Qn(e, n)) {
        let { index: u, line: t, column: o } = n.refs[e][0];
        throw new m2(u, t, o, u + e.length, t, o + e.length, 4, e);
      }
  }
  function g2(n, e) {
    n.exportedNames !== void 0 &&
      e !== '' &&
      (n.exportedNames['#' + e] && c(n, 147, e), (n.exportedNames['#' + e] = 1));
  }
  function du(n, e) {
    n.exportedBindings !== void 0 && e !== '' && (n.exportedBindings['#' + e] = 1);
  }
  function gu(n, e) {
    return function (u, t, o, i, l) {
      let f = { type: u, value: t };
      n & 2 && ((f.start = o), (f.end = i), (f.range = [o, i])), n & 4 && (f.loc = l), e.push(f);
    };
  }
  function cu(n, e) {
    return function (u, t, o, i) {
      let l = { token: u };
      n & 2 && ((l.start = t), (l.end = o), (l.range = [t, o])), n & 4 && (l.loc = i), e.push(l);
    };
  }
  function B2(n, e) {
    return n & 262400
      ? (n & 512 && e === 209006) || (n & 262144 && e === 241771)
        ? !1
        : (e & 12288) === 12288
      : (e & 12288) === 12288 || (e & 36864) === 36864;
  }
  function $2(n, e, u) {
    (u & 537079808) === 537079808 && (e & 256 && c(n, 119), (n.flags |= 512)), B2(e, u) || c(n, 0);
  }
  function mu(n, e, u, t, o) {
    let i = 1048576,
      l = null;
    return {
      source: n,
      flags: 0,
      index: 0,
      line: 1,
      column: 0,
      startIndex: 0,
      end: n.length,
      tokenIndex: 0,
      startColumn: 0,
      tokenColumn: 0,
      tokenLine: 1,
      startLine: 1,
      sourceFile: e,
      tokenValue: '',
      getToken() {
        return i;
      },
      setToken(f, d = !1) {
        if (t)
          if (f !== 1048576) {
            let g = {
              start: { line: this.tokenLine, column: this.tokenColumn },
              end: { line: this.line, column: this.column },
            };
            !d && l && t(...l), (l = [He(f), this.tokenIndex, this.index, g]);
          } else l && (t(...l), (l = null));
        return (i = f);
      },
      tokenRaw: '',
      tokenRegExp: void 0,
      currentChar: n.charCodeAt(0),
      exportedNames: [],
      exportedBindings: [],
      assignable: 1,
      destructible: 0,
      onComment: u,
      onToken: t,
      onInsertedSemicolon: o,
      leadingDecorators: [],
    };
  }
  function ku(n, e, u) {
    let t = '',
      o,
      i,
      l;
    e != null &&
      (e.module && (u |= 768),
      e.next && (u |= 1),
      e.loc && (u |= 4),
      e.ranges && (u |= 2),
      e.uniqueKeyInPattern && (u |= 134217728),
      e.lexical && (u |= 16),
      e.webcompat && (u |= 64),
      e.globalReturn && (u |= 1048576),
      e.raw && (u |= 128),
      e.preserveParens && (u |= 32),
      e.impliedStrict && (u |= 256),
      e.jsx && (u |= 8),
      e.source && (t = e.source),
      e.onComment != null && (o = Array.isArray(e.onComment) ? gu(u, e.onComment) : e.onComment),
      e.onInsertedSemicolon != null && (i = e.onInsertedSemicolon),
      e.onToken != null && (l = Array.isArray(e.onToken) ? cu(u, e.onToken) : e.onToken));
    let f = mu(n, t, o, l, i);
    Ke(f);
    let d = u & 16 ? a2() : void 0,
      g = [],
      m = 'script';
    if (u & 512) {
      if (((m = 'module'), (g = yu(f, u | 2048, d)), d))
        for (let a in f.exportedBindings) a[0] === '#' && !d[a] && c(f, 148, a.slice(1));
    } else g = au(f, u | 2048, d);
    let y = { type: 'Program', sourceType: m, body: g };
    return (
      u & 2 && ((y.start = 0), (y.end = n.length), (y.range = [0, n.length])),
      u & 4 &&
        ((y.loc = { start: { line: 1, column: 0 }, end: { line: f.line, column: f.column } }),
        f.sourceFile && (y.loc.source = t)),
      y
    );
  }
  function au(n, e, u) {
    b(n, e | 8192 | 67108864);
    let t = [];
    for (; n.getToken() === 134283267; ) {
      let { index: o, tokenIndex: i, tokenValue: l, tokenLine: f, tokenColumn: d } = n,
        g = n.getToken(),
        m = H(n, e);
      Kn(n, o, i, l) &&
        ((e |= 256),
        n.flags & 64 && $(n.tokenIndex, n.tokenLine, n.tokenColumn, n.index, n.line, n.column, 9),
        n.flags & 4096 &&
          $(n.tokenIndex, n.tokenLine, n.tokenColumn, n.index, n.line, n.column, 15)),
        t.push(cn(n, e, m, g, i, f, d));
    }
    for (; n.getToken() !== 1048576; ) t.push(I2(n, e, u, void 0, 4, {}));
    return t;
  }
  function yu(n, e, u) {
    b(n, e | 8192);
    let t = [];
    for (; n.getToken() === 134283267; ) {
      let { tokenIndex: o, tokenLine: i, tokenColumn: l } = n,
        f = n.getToken();
      t.push(cn(n, e, H(n, e), f, o, i, l));
    }
    for (; n.getToken() !== 1048576; ) t.push(su(n, e, u));
    return t;
  }
  function su(n, e, u) {
    n.leadingDecorators = Y2(n, e, void 0);
    let t;
    switch (n.getToken()) {
      case 20564:
        t = Ru(n, e, u);
        break;
      case 86106:
        t = Vu(n, e, u);
        break;
      default:
        t = I2(n, e, u, void 0, 4, {});
    }
    return n.leadingDecorators.length && c(n, 170), t;
  }
  function I2(n, e, u, t, o, i) {
    let l = n.tokenIndex,
      f = n.tokenLine,
      d = n.tokenColumn;
    switch (n.getToken()) {
      case 86104:
        return f2(n, e, u, t, o, 1, 0, 0, l, f, d);
      case 132:
      case 86094:
        return un(n, e, u, t, 0, l, f, d);
      case 86090:
        return nn(n, e, u, t, 16, 0, l, f, d);
      case 241737:
        return vu(n, e, u, t, o, l, f, d);
      case 20564:
        c(n, 103, 'export');
      case 86106:
        switch ((b(n, e), n.getToken())) {
          case 67174411:
            return pn(n, e, t, l, f, d);
          case 67108877:
            return rn(n, e, l, f, d);
          default:
            c(n, 103, 'import');
        }
      case 209005:
        return Zn(n, e, u, t, o, i, 1, l, f, d);
      default:
        return L2(n, e, u, t, o, i, 1, l, f, d);
    }
  }
  function L2(n, e, u, t, o, i, l, f, d, g) {
    switch (n.getToken()) {
      case 86088:
        return Gn(n, e, u, t, 0, f, d, g);
      case 20572:
        return Au(n, e, t, f, d, g);
      case 20569:
        return Tu(n, e, u, t, i, f, d, g);
      case 20567:
        return Nu(n, e, u, t, i, f, d, g);
      case 20562:
        return Pu(n, e, u, t, i, f, d, g);
      case 20578:
        return Eu(n, e, u, t, i, f, d, g);
      case 86110:
        return Cu(n, e, u, t, i, f, d, g);
      case 1074790417:
        return bu(n, e, f, d, g);
      case 2162700:
        return E2(n, e, u && j(u, 2), t, i, f, d, g);
      case 86112:
        return Du(n, e, t, f, d, g);
      case 20555:
        return Bu(n, e, i, f, d, g);
      case 20559:
        return wu(n, e, i, f, d, g);
      case 20577:
        return Fu(n, e, u, t, i, f, d, g);
      case 20579:
        return Iu(n, e, u, t, i, f, d, g);
      case 20560:
        return Lu(n, e, f, d, g);
      case 209005:
        return Zn(n, e, u, t, o, i, 0, f, d, g);
      case 20557:
        c(n, 162);
      case 20566:
        c(n, 163);
      case 86104:
        c(n, e & 256 ? 76 : (e & 64) === 0 ? 78 : 77);
      case 86094:
        c(n, 79);
      default:
        return hu(n, e, u, t, o, i, l, f, d, g);
    }
  }
  function hu(n, e, u, t, o, i, l, f, d, g) {
    let { tokenValue: m } = n,
      y = n.getToken(),
      a;
    switch (y) {
      case 241737:
        (a = R(n, e)), e & 256 && c(n, 85), n.getToken() === 69271571 && c(n, 84);
        break;
      default:
        a = _(n, e, t, 2, 0, 1, 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn);
    }
    return y & 143360 && n.getToken() === 21
      ? gn(n, e, u, t, o, i, m, a, y, l, f, d, g)
      : ((a = O(n, e, t, a, 0, 0, f, d, g)),
        (a = J(n, e, t, 0, 0, f, d, g, a)),
        n.getToken() === 18 && (a = e2(n, e, t, 0, f, d, g, a)),
        A2(n, e, a, f, d, g));
  }
  function E2(n, e, u, t, o, i, l, f) {
    let d = [];
    for (C(n, e | 8192, 2162700); n.getToken() !== 1074790415; )
      d.push(I2(n, e, u, t, 2, { $: o }));
    return C(n, e | 8192, 1074790415), s(n, e, i, l, f, { type: 'BlockStatement', body: d });
  }
  function Au(n, e, u, t, o, i) {
    (e & 1048576) === 0 && c(n, 92), b(n, e | 8192);
    let l =
      n.flags & 1 || n.getToken() & 1048576
        ? null
        : z(n, e, u, 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return K(n, e | 8192), s(n, e, t, o, i, { type: 'ReturnStatement', argument: l });
  }
  function A2(n, e, u, t, o, i) {
    return K(n, e | 8192), s(n, e, t, o, i, { type: 'ExpressionStatement', expression: u });
  }
  function gn(n, e, u, t, o, i, l, f, d, g, m, y, a) {
    J2(n, e, 0, d, 1), tu(n, i, l), b(n, e | 8192);
    let k =
      g && (e & 256) === 0 && e & 64 && n.getToken() === 86104
        ? f2(n, e, j(u, 2), t, o, 0, 0, 0, n.tokenIndex, n.tokenLine, n.tokenColumn)
        : L2(n, e, u, t, o, i, g, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return s(n, e, m, y, a, { type: 'LabeledStatement', label: f, body: k });
  }
  function Zn(n, e, u, t, o, i, l, f, d, g) {
    let { tokenValue: m } = n,
      y = n.getToken(),
      a = R(n, e);
    if (n.getToken() === 21) return gn(n, e, u, t, o, i, m, a, y, 1, f, d, g);
    let k = n.flags & 1;
    if (!k) {
      if (n.getToken() === 86104) return l || c(n, 123), f2(n, e, u, t, o, 1, 0, 1, f, d, g);
      if (B2(e, n.getToken()))
        return (
          (a = le(n, e, t, 1, f, d, g)),
          n.getToken() === 18 && (a = e2(n, e, t, 0, f, d, g, a)),
          A2(n, e, a, f, d, g)
        );
    }
    return (
      n.getToken() === 67174411
        ? (a = hn(n, e, t, a, 1, 1, 0, k, f, d, g))
        : (n.getToken() === 10 &&
            ($2(n, e, y),
            (y & 36864) === 36864 && (n.flags |= 256),
            (a = _2(n, e | 524288, t, n.tokenValue, a, 0, 1, 0, f, d, g))),
          (n.assignable = 1)),
      (a = O(n, e, t, a, 0, 0, f, d, g)),
      (a = J(n, e, t, 0, 0, f, d, g, a)),
      (n.assignable = 1),
      n.getToken() === 18 && (a = e2(n, e, t, 0, f, d, g, a)),
      A2(n, e, a, f, d, g)
    );
  }
  function cn(n, e, u, t, o, i, l) {
    let f = n.startIndex;
    return (
      t !== 1074790417 &&
        ((n.assignable = 2),
        (u = O(n, e, void 0, u, 0, 0, o, i, l)),
        n.getToken() !== 1074790417 &&
          ((u = J(n, e, void 0, 0, 0, o, i, l, u)),
          n.getToken() === 18 && (u = e2(n, e, void 0, 0, o, i, l, u))),
        K(n, e | 8192)),
      u.type === 'Literal' && typeof u.value == 'string'
        ? s(n, e, o, i, l, {
            type: 'ExpressionStatement',
            expression: u,
            directive: n.source.slice(o + 1, f - 1),
          })
        : s(n, e, o, i, l, { type: 'ExpressionStatement', expression: u })
    );
  }
  function bu(n, e, u, t, o) {
    return b(n, e | 8192), s(n, e, u, t, o, { type: 'EmptyStatement' });
  }
  function Du(n, e, u, t, o, i) {
    b(n, e | 8192), n.flags & 1 && c(n, 90);
    let l = z(n, e, u, 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return K(n, e | 8192), s(n, e, t, o, i, { type: 'ThrowStatement', argument: l });
  }
  function Tu(n, e, u, t, o, i, l, f) {
    b(n, e), C(n, e | 8192, 67174411), (n.assignable = 1);
    let d = z(n, e, t, 0, 1, n.tokenIndex, n.line, n.tokenColumn);
    C(n, e | 8192, 16);
    let g = Sn(n, e, u, t, o, n.tokenIndex, n.tokenLine, n.tokenColumn),
      m = null;
    return (
      n.getToken() === 20563 &&
        (b(n, e | 8192), (m = Sn(n, e, u, t, o, n.tokenIndex, n.tokenLine, n.tokenColumn))),
      s(n, e, i, l, f, { type: 'IfStatement', test: d, consequent: g, alternate: m })
    );
  }
  function Sn(n, e, u, t, o, i, l, f) {
    return e & 256 || (e & 64) === 0 || n.getToken() !== 86104
      ? L2(n, e, u, t, 0, { $: o }, 0, n.tokenIndex, n.tokenLine, n.tokenColumn)
      : f2(n, e, j(u, 2), t, 0, 0, 0, 0, i, l, f);
  }
  function Cu(n, e, u, t, o, i, l, f) {
    b(n, e), C(n, e | 8192, 67174411);
    let d = z(n, e, t, 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn);
    C(n, e, 16), C(n, e, 2162700);
    let g = [],
      m = 0;
    for (u && (u = j(u, 8)); n.getToken() !== 1074790415; ) {
      let { tokenIndex: y, tokenLine: a, tokenColumn: k } = n,
        h = null,
        T = [];
      for (
        P(n, e | 8192, 20556)
          ? (h = z(n, e, t, 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn))
          : (C(n, e | 8192, 20561), m && c(n, 89), (m = 1)),
          C(n, e | 8192, 21);
        n.getToken() !== 20556 && n.getToken() !== 1074790415 && n.getToken() !== 20561;

      )
        T.push(I2(n, e | 1024, u, t, 2, { $: o }));
      g.push(s(n, e, y, a, k, { type: 'SwitchCase', test: h, consequent: T }));
    }
    return (
      C(n, e | 8192, 1074790415),
      s(n, e, i, l, f, { type: 'SwitchStatement', discriminant: d, cases: g })
    );
  }
  function Eu(n, e, u, t, o, i, l, f) {
    b(n, e), C(n, e | 8192, 67174411);
    let d = z(n, e, t, 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn);
    C(n, e | 8192, 16);
    let g = C2(n, e, u, t, o);
    return s(n, e, i, l, f, { type: 'WhileStatement', test: d, body: g });
  }
  function C2(n, e, u, t, o) {
    return L2(
      n,
      ((e | 33554432) ^ 33554432) | 32768,
      u,
      t,
      0,
      { loop: 1, $: o },
      0,
      n.tokenIndex,
      n.tokenLine,
      n.tokenColumn
    );
  }
  function wu(n, e, u, t, o, i) {
    (e & 32768) === 0 && c(n, 68), b(n, e);
    let l = null;
    if ((n.flags & 1) === 0 && n.getToken() & 143360) {
      let { tokenValue: f } = n;
      (l = R(n, e | 8192)), _n(n, u, f, 1) || c(n, 138, f);
    }
    return K(n, e | 8192), s(n, e, t, o, i, { type: 'ContinueStatement', label: l });
  }
  function Bu(n, e, u, t, o, i) {
    b(n, e | 8192);
    let l = null;
    if ((n.flags & 1) === 0 && n.getToken() & 143360) {
      let { tokenValue: f } = n;
      (l = R(n, e | 8192)), _n(n, u, f, 0) || c(n, 138, f);
    } else (e & 33792) === 0 && c(n, 69);
    return K(n, e | 8192), s(n, e, t, o, i, { type: 'BreakStatement', label: l });
  }
  function Iu(n, e, u, t, o, i, l, f) {
    b(n, e), e & 256 && c(n, 91), C(n, e | 8192, 67174411);
    let d = z(n, e, t, 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn);
    C(n, e | 8192, 16);
    let g = L2(n, e, u, t, 2, o, 0, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return s(n, e, i, l, f, { type: 'WithStatement', object: d, body: g });
  }
  function Lu(n, e, u, t, o) {
    return b(n, e | 8192), K(n, e | 8192), s(n, e, u, t, o, { type: 'DebuggerStatement' });
  }
  function Fu(n, e, u, t, o, i, l, f) {
    b(n, e | 8192);
    let d = u ? j(u, 32) : void 0,
      g = E2(n, e, d, t, { $: o }, n.tokenIndex, n.tokenLine, n.tokenColumn),
      { tokenIndex: m, tokenLine: y, tokenColumn: a } = n,
      k = P(n, e | 8192, 20557) ? qu(n, e, u, t, o, m, y, a) : null,
      h = null;
    if (n.getToken() === 20566) {
      b(n, e | 8192);
      let T = d ? j(u, 4) : void 0;
      h = E2(n, e, T, t, { $: o }, n.tokenIndex, n.tokenLine, n.tokenColumn);
    }
    return (
      !k && !h && c(n, 88),
      s(n, e, i, l, f, { type: 'TryStatement', block: g, handler: k, finalizer: h })
    );
  }
  function qu(n, e, u, t, o, i, l, f) {
    let d = null,
      g = u;
    P(n, e, 67174411) &&
      (u && (u = j(u, 4)),
      (d = ge(
        n,
        e,
        u,
        t,
        (n.getToken() & 2097152) === 2097152 ? 256 : 512,
        0,
        n.tokenIndex,
        n.tokenLine,
        n.tokenColumn
      )),
      n.getToken() === 18 ? c(n, 86) : n.getToken() === 1077936155 && c(n, 87),
      C(n, e | 8192, 16)),
      u && (g = j(u, 64));
    let m = E2(n, e, g, t, { $: o }, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return s(n, e, i, l, f, { type: 'CatchClause', param: d, body: m });
  }
  function Su(n, e, u, t, o, i, l) {
    u && (u = j(u, 2));
    let f = 1475584;
    e = ((e | f) ^ f) | 65536 | 524288 | 268435456 | 16777216;
    let { body: d } = E2(n, e, u, t, {}, o, i, l);
    return s(n, e, o, i, l, { type: 'StaticBlock', body: d });
  }
  function Pu(n, e, u, t, o, i, l, f) {
    b(n, e | 8192);
    let d = C2(n, e, u, t, o);
    C(n, e, 20578), C(n, e | 8192, 67174411);
    let g = z(n, e, t, 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return (
      C(n, e | 8192, 16),
      P(n, e | 8192, 1074790417),
      s(n, e, i, l, f, { type: 'DoWhileStatement', body: d, test: g })
    );
  }
  function vu(n, e, u, t, o, i, l, f) {
    let { tokenValue: d } = n,
      g = n.getToken(),
      m = R(n, e);
    if (n.getToken() & 2240512) {
      let y = s2(n, e, u, t, 8, 0);
      return (
        K(n, e | 8192),
        s(n, e, i, l, f, { type: 'VariableDeclaration', kind: 'let', declarations: y })
      );
    }
    if (((n.assignable = 1), e & 256 && c(n, 85), n.getToken() === 21))
      return gn(n, e, u, t, o, {}, d, m, g, 0, i, l, f);
    if (n.getToken() === 10) {
      let y;
      e & 16 && (y = K2(n, e, d)),
        (n.flags = (n.flags | 128) ^ 128),
        (m = F2(n, e, y, t, [m], 0, i, l, f));
    } else (m = O(n, e, t, m, 0, 0, i, l, f)), (m = J(n, e, t, 0, 0, i, l, f, m));
    return n.getToken() === 18 && (m = e2(n, e, t, 0, i, l, f, m)), A2(n, e, m, i, l, f);
  }
  function nn(n, e, u, t, o, i, l, f, d) {
    b(n, e);
    let g = s2(n, e, u, t, o, i);
    return (
      K(n, e | 8192),
      s(n, e, l, f, d, {
        type: 'VariableDeclaration',
        kind: o & 8 ? 'let' : 'const',
        declarations: g,
      })
    );
  }
  function Gn(n, e, u, t, o, i, l, f) {
    b(n, e);
    let d = s2(n, e, u, t, 4, o);
    return (
      K(n, e | 8192),
      s(n, e, i, l, f, { type: 'VariableDeclaration', kind: 'var', declarations: d })
    );
  }
  function s2(n, e, u, t, o, i) {
    let l = 1,
      f = [Pn(n, e, u, t, o, i)];
    for (; P(n, e, 18); ) l++, f.push(Pn(n, e, u, t, o, i));
    return l > 1 && i & 32 && n.getToken() & 262144 && c(n, 61, V[n.getToken() & 255]), f;
  }
  function Pn(n, e, u, t, o, i) {
    let { tokenIndex: l, tokenLine: f, tokenColumn: d } = n,
      g = n.getToken(),
      m = null,
      y = ge(n, e, u, t, o, i, l, f, d);
    return (
      n.getToken() === 1077936155
        ? (b(n, e | 8192),
          (m = M(n, e, t, 1, 0, n.tokenIndex, n.tokenLine, n.tokenColumn)),
          (i & 32 || (g & 2097152) === 0) &&
            (n.getToken() === 274548 ||
              (n.getToken() === 8673330 && (g & 2097152 || (o & 4) === 0 || e & 256))) &&
            $(l, f, d, n.index, n.line, n.column, 60, n.getToken() === 274548 ? 'of' : 'in'))
        : (o & 16 || (g & 2097152) > 0) &&
          (n.getToken() & 262144) !== 262144 &&
          c(n, 59, o & 16 ? 'const' : 'destructuring'),
      s(n, e, l, f, d, { type: 'VariableDeclarator', id: y, init: m })
    );
  }
  function Nu(n, e, u, t, o, i, l, f) {
    b(n, e);
    let d = ((e & 524288) > 0 || ((e & 512) > 0 && (e & 2048) > 0)) && P(n, e, 209006);
    C(n, e | 8192, 67174411), u && (u = j(u, 1));
    let g = null,
      m = null,
      y = 0,
      a = null,
      k = n.getToken() === 86088 || n.getToken() === 241737 || n.getToken() === 86090,
      h,
      { tokenIndex: T, tokenLine: E, tokenColumn: w } = n,
      I = n.getToken();
    if (
      (k
        ? I === 241737
          ? ((a = R(n, e)),
            n.getToken() & 2240512
              ? (n.getToken() === 8673330
                  ? e & 256 && c(n, 67)
                  : (a = s(n, e, T, E, w, {
                      type: 'VariableDeclaration',
                      kind: 'let',
                      declarations: s2(n, e | 33554432, u, t, 8, 32),
                    })),
                (n.assignable = 1))
              : e & 256
                ? c(n, 67)
                : ((k = !1),
                  (n.assignable = 1),
                  (a = O(n, e, t, a, 0, 0, T, E, w)),
                  n.getToken() === 274548 && c(n, 115)))
          : (b(n, e),
            (a = s(
              n,
              e,
              T,
              E,
              w,
              I === 86088
                ? {
                    type: 'VariableDeclaration',
                    kind: 'var',
                    declarations: s2(n, e | 33554432, u, t, 4, 32),
                  }
                : {
                    type: 'VariableDeclaration',
                    kind: 'const',
                    declarations: s2(n, e | 33554432, u, t, 16, 32),
                  }
            )),
            (n.assignable = 1))
        : I === 1074790417
          ? d && c(n, 82)
          : (I & 2097152) === 2097152
            ? ((a =
                I === 2162700
                  ? Z(n, e, void 0, t, 1, 0, 0, 2, 32, T, E, w)
                  : Q(n, e, void 0, t, 1, 0, 0, 2, 32, T, E, w)),
              (y = n.destructible),
              y & 64 && c(n, 63),
              (n.assignable = y & 16 ? 2 : 1),
              (a = O(n, e | 33554432, t, a, 0, 0, n.tokenIndex, n.tokenLine, n.tokenColumn)))
            : (a = Y(n, e | 33554432, t, 1, 0, 1, T, E, w)),
      (n.getToken() & 262144) === 262144)
    ) {
      if (n.getToken() === 274548) {
        n.assignable & 2 && c(n, 80, d ? 'await' : 'of'),
          r(n, a),
          b(n, e | 8192),
          (h = M(n, e, t, 1, 0, n.tokenIndex, n.tokenLine, n.tokenColumn)),
          C(n, e | 8192, 16);
        let F = C2(n, e, u, t, o);
        return s(n, e, i, l, f, { type: 'ForOfStatement', left: a, right: h, body: F, await: d });
      }
      n.assignable & 2 && c(n, 80, 'in'),
        r(n, a),
        b(n, e | 8192),
        d && c(n, 82),
        (h = z(n, e, t, 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn)),
        C(n, e | 8192, 16);
      let q = C2(n, e, u, t, o);
      return s(n, e, i, l, f, { type: 'ForInStatement', body: q, left: a, right: h });
    }
    d && c(n, 82),
      k ||
        (y & 8 && n.getToken() !== 1077936155 && c(n, 80, 'loop'),
        (a = J(n, e | 33554432, t, 0, 0, T, E, w, a))),
      n.getToken() === 18 && (a = e2(n, e, t, 0, n.tokenIndex, n.tokenLine, n.tokenColumn, a)),
      C(n, e | 8192, 1074790417),
      n.getToken() !== 1074790417 &&
        (g = z(n, e, t, 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn)),
      C(n, e | 8192, 1074790417),
      n.getToken() !== 16 && (m = z(n, e, t, 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn)),
      C(n, e | 8192, 16);
    let v = C2(n, e, u, t, o);
    return s(n, e, i, l, f, { type: 'ForStatement', init: a, test: g, update: m, body: v });
  }
  function xn(n, e, u) {
    return (
      B2(e, n.getToken()) || c(n, 118),
      (n.getToken() & 537079808) === 537079808 && c(n, 119),
      u && d2(n, e, u, n.tokenValue, 8, 0),
      R(n, e)
    );
  }
  function Vu(n, e, u) {
    let t = n.tokenIndex,
      o = n.tokenLine,
      i = n.tokenColumn;
    b(n, e);
    let l = null,
      { tokenIndex: f, tokenLine: d, tokenColumn: g } = n,
      m = [];
    if (n.getToken() === 134283267) l = H(n, e);
    else {
      if (n.getToken() & 143360) {
        let a = xn(n, e, u);
        if (((m = [s(n, e, f, d, g, { type: 'ImportDefaultSpecifier', local: a })]), P(n, e, 18)))
          switch (n.getToken()) {
            case 8391476:
              m.push(vn(n, e, u));
              break;
            case 2162700:
              Nn(n, e, u, m);
              break;
            default:
              c(n, 107);
          }
      } else
        switch (n.getToken()) {
          case 8391476:
            m = [vn(n, e, u)];
            break;
          case 2162700:
            Nn(n, e, u, m);
            break;
          case 67174411:
            return pn(n, e, void 0, t, o, i);
          case 67108877:
            return rn(n, e, t, o, i);
          default:
            c(n, 30, V[n.getToken() & 255]);
        }
      l = Ou(n, e);
    }
    let y = { type: 'ImportDeclaration', specifiers: m, source: l };
    return e & 1 && (y.attributes = en(n, e, m)), K(n, e | 8192), s(n, e, t, o, i, y);
  }
  function vn(n, e, u) {
    let { tokenIndex: t, tokenLine: o, tokenColumn: i } = n;
    return (
      b(n, e),
      C(n, e, 77932),
      (n.getToken() & 134217728) === 134217728 &&
        $(t, o, i, n.index, n.line, n.column, 30, V[n.getToken() & 255]),
      s(n, e, t, o, i, { type: 'ImportNamespaceSpecifier', local: xn(n, e, u) })
    );
  }
  function Ou(n, e) {
    return C(n, e, 12403), n.getToken() !== 134283267 && c(n, 105, 'Import'), H(n, e);
  }
  function Nn(n, e, u, t) {
    for (b(n, e); n.getToken() & 143360 || n.getToken() === 134283267; ) {
      let { tokenValue: o, tokenIndex: i, tokenLine: l, tokenColumn: f } = n,
        d = n.getToken(),
        g = O2(n, e),
        m;
      P(n, e, 77932)
        ? ((n.getToken() & 134217728) === 134217728 || n.getToken() === 18
            ? c(n, 106)
            : J2(n, e, 16, n.getToken(), 0),
          (o = n.tokenValue),
          (m = R(n, e)))
        : g.type === 'Identifier'
          ? (J2(n, e, 16, d, 0), (m = g))
          : c(n, 25, V[108]),
        u && d2(n, e, u, o, 8, 0),
        t.push(s(n, e, i, l, f, { type: 'ImportSpecifier', local: m, imported: g })),
        n.getToken() !== 1074790415 && C(n, e, 18);
    }
    return C(n, e, 1074790415), t;
  }
  function rn(n, e, u, t, o) {
    let i = ne(n, e, s(n, e, u, t, o, { type: 'Identifier', name: 'import' }), u, t, o);
    return (
      (i = O(n, e, void 0, i, 0, 0, u, t, o)),
      (i = J(n, e, void 0, 0, 0, u, t, o, i)),
      n.getToken() === 18 && (i = e2(n, e, void 0, 0, u, t, o, i)),
      A2(n, e, i, u, t, o)
    );
  }
  function pn(n, e, u, t, o, i) {
    let l = ee(n, e, u, 0, t, o, i);
    return (
      (l = O(n, e, u, l, 0, 0, t, o, i)),
      n.getToken() === 18 && (l = e2(n, e, u, 0, t, o, i, l)),
      A2(n, e, l, t, o, i)
    );
  }
  function Ru(n, e, u) {
    let t = n.tokenIndex,
      o = n.tokenLine,
      i = n.tokenColumn;
    b(n, e | 8192);
    let l = [],
      f = null,
      d = null,
      g = null;
    if (P(n, e | 8192, 20561)) {
      switch (n.getToken()) {
        case 86104: {
          f = f2(n, e, u, void 0, 4, 1, 1, 0, n.tokenIndex, n.tokenLine, n.tokenColumn);
          break;
        }
        case 132:
        case 86094:
          f = un(n, e, u, void 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn);
          break;
        case 209005: {
          let { tokenIndex: y, tokenLine: a, tokenColumn: k } = n;
          f = R(n, e);
          let { flags: h } = n;
          (h & 1) === 0 &&
            (n.getToken() === 86104
              ? (f = f2(n, e, u, void 0, 4, 1, 1, 1, y, a, k))
              : n.getToken() === 67174411
                ? ((f = hn(n, e, void 0, f, 1, 1, 0, h, y, a, k)),
                  (f = O(n, e, void 0, f, 0, 0, y, a, k)),
                  (f = J(n, e, void 0, 0, 0, y, a, k, f)))
                : n.getToken() & 143360 &&
                  (u && (u = K2(n, e, n.tokenValue)),
                  (f = R(n, e)),
                  (f = F2(n, e, u, void 0, [f], 1, y, a, k))));
          break;
        }
        default:
          (f = M(n, e, void 0, 1, 0, n.tokenIndex, n.tokenLine, n.tokenColumn)), K(n, e | 8192);
      }
      return (
        u && g2(n, 'default'),
        s(n, e, t, o, i, { type: 'ExportDefaultDeclaration', declaration: f })
      );
    }
    switch (n.getToken()) {
      case 8391476: {
        b(n, e);
        let y = null;
        P(n, e, 77932) && (u && g2(n, n.tokenValue), (y = O2(n, e))),
          C(n, e, 12403),
          n.getToken() !== 134283267 && c(n, 105, 'Export'),
          (d = H(n, e));
        let k = { type: 'ExportAllDeclaration', source: d, exported: y };
        return e & 1 && (k.attributes = en(n, e)), K(n, e | 8192), s(n, e, t, o, i, k);
      }
      case 2162700: {
        b(n, e);
        let y = [],
          a = [],
          k = 0;
        for (; n.getToken() & 143360 || n.getToken() === 134283267; ) {
          let { tokenIndex: h, tokenValue: T, tokenLine: E, tokenColumn: w } = n,
            I = O2(n, e);
          I.type === 'Literal' && (k = 1);
          let v;
          n.getToken() === 77932
            ? (b(n, e),
              (n.getToken() & 143360) === 0 && n.getToken() !== 134283267 && c(n, 106),
              u && (y.push(n.tokenValue), a.push(T)),
              (v = O2(n, e)))
            : (u && (y.push(n.tokenValue), a.push(n.tokenValue)), (v = I)),
            l.push(s(n, e, h, E, w, { type: 'ExportSpecifier', local: I, exported: v })),
            n.getToken() !== 1074790415 && C(n, e, 18);
        }
        C(n, e, 1074790415),
          P(n, e, 12403)
            ? (n.getToken() !== 134283267 && c(n, 105, 'Export'),
              (d = H(n, e)),
              e & 1 && (g = en(n, e, l)),
              u && y.forEach(h => g2(n, h)))
            : (k && c(n, 172), u && (y.forEach(h => g2(n, h)), a.forEach(h => du(n, h)))),
          K(n, e | 8192);
        break;
      }
      case 86094:
        f = un(n, e, u, void 0, 2, n.tokenIndex, n.tokenLine, n.tokenColumn);
        break;
      case 86104:
        f = f2(n, e, u, void 0, 4, 1, 2, 0, n.tokenIndex, n.tokenLine, n.tokenColumn);
        break;
      case 241737:
        f = nn(n, e, u, void 0, 8, 64, n.tokenIndex, n.tokenLine, n.tokenColumn);
        break;
      case 86090:
        f = nn(n, e, u, void 0, 16, 64, n.tokenIndex, n.tokenLine, n.tokenColumn);
        break;
      case 86088:
        f = Gn(n, e, u, void 0, 64, n.tokenIndex, n.tokenLine, n.tokenColumn);
        break;
      case 209005: {
        let { tokenIndex: y, tokenLine: a, tokenColumn: k } = n;
        if ((b(n, e), (n.flags & 1) === 0 && n.getToken() === 86104)) {
          f = f2(n, e, u, void 0, 4, 1, 2, 1, y, a, k);
          break;
        }
      }
      default:
        c(n, 30, V[n.getToken() & 255]);
    }
    let m = { type: 'ExportNamedDeclaration', declaration: f, specifiers: l, source: d };
    return g && (m.attributes = g), s(n, e, t, o, i, m);
  }
  function M(n, e, u, t, o, i, l, f) {
    let d = _(n, e, u, 2, 0, t, o, 1, i, l, f);
    return (d = O(n, e, u, d, o, 0, i, l, f)), J(n, e, u, o, 0, i, l, f, d);
  }
  function e2(n, e, u, t, o, i, l, f) {
    let d = [f];
    for (; P(n, e | 8192, 18); ) d.push(M(n, e, u, 1, t, n.tokenIndex, n.tokenLine, n.tokenColumn));
    return s(n, e, o, i, l, { type: 'SequenceExpression', expressions: d });
  }
  function z(n, e, u, t, o, i, l, f) {
    let d = M(n, e, u, o, t, i, l, f);
    return n.getToken() === 18 ? e2(n, e, u, t, i, l, f, d) : d;
  }
  function J(n, e, u, t, o, i, l, f, d) {
    let g = n.getToken();
    if ((g & 4194304) === 4194304) {
      n.assignable & 2 && c(n, 26),
        ((!o && g === 1077936155 && d.type === 'ArrayExpression') ||
          d.type === 'ObjectExpression') &&
          r(n, d),
        b(n, e | 8192);
      let m = M(n, e, u, 1, t, n.tokenIndex, n.tokenLine, n.tokenColumn);
      return (
        (n.assignable = 2),
        s(
          n,
          e,
          i,
          l,
          f,
          o
            ? { type: 'AssignmentPattern', left: d, right: m }
            : { type: 'AssignmentExpression', left: d, operator: V[g & 255], right: m }
        )
      );
    }
    return (
      (g & 8388608) === 8388608 && (d = l2(n, e, u, t, i, l, f, 4, g, d)),
      P(n, e | 8192, 22) && (d = c2(n, e, u, d, i, l, f)),
      d
    );
  }
  function N2(n, e, u, t, o, i, l, f, d) {
    let g = n.getToken();
    b(n, e | 8192);
    let m = M(n, e, u, 1, t, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return (
      (d = s(
        n,
        e,
        i,
        l,
        f,
        o
          ? { type: 'AssignmentPattern', left: d, right: m }
          : { type: 'AssignmentExpression', left: d, operator: V[g & 255], right: m }
      )),
      (n.assignable = 2),
      d
    );
  }
  function c2(n, e, u, t, o, i, l) {
    let f = M(n, (e | 33554432) ^ 33554432, u, 1, 0, n.tokenIndex, n.tokenLine, n.tokenColumn);
    C(n, e | 8192, 21), (n.assignable = 1);
    let d = M(n, e, u, 1, 0, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return (
      (n.assignable = 2),
      s(n, e, o, i, l, { type: 'ConditionalExpression', test: t, consequent: f, alternate: d })
    );
  }
  function l2(n, e, u, t, o, i, l, f, d, g) {
    let m = -((e & 33554432) > 0) & 8673330,
      y,
      a;
    for (
      n.assignable = 2;
      n.getToken() & 8388608 &&
      ((y = n.getToken()),
      (a = y & 3840),
      ((y & 524288 && d & 268435456) || (d & 524288 && y & 268435456)) && c(n, 165),
      !(a + ((y === 8391735) << 8) - ((m === y) << 12) <= f));

    )
      b(n, e | 8192),
        (g = s(n, e, o, i, l, {
          type: y & 524288 || y & 268435456 ? 'LogicalExpression' : 'BinaryExpression',
          left: g,
          right: l2(
            n,
            e,
            u,
            t,
            n.tokenIndex,
            n.tokenLine,
            n.tokenColumn,
            a,
            y,
            Y(n, e, u, 0, t, 1, n.tokenIndex, n.tokenLine, n.tokenColumn)
          ),
          operator: V[y & 255],
        }));
    return n.getToken() === 1077936155 && c(n, 26), g;
  }
  function Uu(n, e, u, t, o, i, l, f) {
    t || c(n, 0);
    let d = n.getToken();
    b(n, e | 8192);
    let g = Y(n, e, u, 0, f, 1, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return (
      n.getToken() === 8391735 && c(n, 33),
      e & 256 && d === 16863276 && (g.type === 'Identifier' ? c(n, 121) : uu(g) && c(n, 127)),
      (n.assignable = 2),
      s(n, e, o, i, l, { type: 'UnaryExpression', operator: V[d & 255], argument: g, prefix: !0 })
    );
  }
  function Mu(n, e, u, t, o, i, l, f, d, g) {
    let m = n.getToken(),
      y = R(n, e),
      { flags: a } = n;
    if ((a & 1) === 0) {
      if (n.getToken() === 86104) return te(n, e, u, 1, t, f, d, g);
      if (B2(e, n.getToken()))
        return (
          o || c(n, 0),
          (n.getToken() & 36864) === 36864 && (n.flags |= 256),
          le(n, e, u, i, f, d, g)
        );
    }
    return !l && n.getToken() === 67174411
      ? hn(n, e, u, y, i, 1, 0, a, f, d, g)
      : n.getToken() === 10
        ? ($2(n, e, m),
          l && c(n, 51),
          (m & 36864) === 36864 && (n.flags |= 256),
          _2(n, e, u, n.tokenValue, y, l, i, 0, f, d, g))
        : ((n.assignable = 1), y);
  }
  function Ju(n, e, u, t, o, i, l, f) {
    if ((t && (n.destructible |= 256), e & 262144)) {
      b(n, e | 8192), e & 2097152 && c(n, 32), o || c(n, 26), n.getToken() === 22 && c(n, 124);
      let d = null,
        g = !1;
      return (
        (n.flags & 1) === 0
          ? ((g = P(n, e | 8192, 8391476)),
            (n.getToken() & 77824 || g) &&
              (d = M(n, e, u, 1, 0, n.tokenIndex, n.tokenLine, n.tokenColumn)))
          : n.getToken() === 8391476 && c(n, 30, V[n.getToken() & 255]),
        (n.assignable = 2),
        s(n, e, i, l, f, { type: 'YieldExpression', argument: d, delegate: g })
      );
    }
    return e & 256 && c(n, 97, 'yield'), sn(n, e, u, i, l, f);
  }
  function ju(n, e, u, t, o, i, l, f) {
    o && (n.destructible |= 128), e & 268435456 && c(n, 177);
    let d = sn(n, e, u, i, l, f);
    if (d.type === 'ArrowFunctionExpression' || (n.getToken() & 65536) === 0)
      return (
        e & 524288 && $(i, l, f, n.startIndex, n.startLine, n.startColumn, 176),
        e & 512 && $(i, l, f, n.startIndex, n.startLine, n.startColumn, 110),
        e & 2097152 && e & 524288 && $(i, l, f, n.startIndex, n.startLine, n.startColumn, 110),
        d
      );
    if (
      (e & 2097152 && $(i, l, f, n.startIndex, n.startLine, n.startColumn, 31),
      e & 524288 || (e & 512 && e & 2048))
    ) {
      t && $(i, l, f, n.startIndex, n.startLine, n.startColumn, 0);
      let m = Y(n, e, u, 0, 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn);
      return (
        n.getToken() === 8391735 && c(n, 33),
        (n.assignable = 2),
        s(n, e, i, l, f, { type: 'AwaitExpression', argument: m })
      );
    }
    return e & 512 && $(i, l, f, n.startIndex, n.startLine, n.startColumn, 98), d;
  }
  function W2(n, e, u, t, o, i, l) {
    let { tokenIndex: f, tokenLine: d, tokenColumn: g } = n;
    C(n, e | 8192, 2162700);
    let m = [];
    if (n.getToken() !== 1074790415) {
      for (; n.getToken() === 134283267; ) {
        let { index: y, tokenIndex: a, tokenValue: k } = n,
          h = n.getToken(),
          T = H(n, e);
        Kn(n, y, a, k) &&
          ((e |= 256),
          n.flags & 128 && $(a, d, g, n.index, n.line, n.column, 66),
          n.flags & 64 && $(a, d, g, n.index, n.line, n.column, 9),
          n.flags & 4096 && $(a, d, g, n.index, n.line, n.column, 15),
          l && z2(l)),
          m.push(cn(n, e, T, h, a, n.tokenLine, n.tokenColumn));
      }
      e & 256 &&
        (i && ((i & 537079808) === 537079808 && c(n, 119), (i & 36864) === 36864 && c(n, 40)),
        n.flags & 512 && c(n, 119),
        n.flags & 256 && c(n, 118));
    }
    for (
      n.flags = (n.flags | 512 | 256 | 64 | 4096) ^ 4928,
        n.destructible = (n.destructible | 256) ^ 256;
      n.getToken() !== 1074790415;

    )
      m.push(I2(n, e, u, t, 4, {}));
    return (
      C(n, o & 24 ? e | 8192 : e, 1074790415),
      (n.flags &= -4289),
      n.getToken() === 1077936155 && c(n, 26),
      s(n, e, f, d, g, { type: 'BlockStatement', body: m })
    );
  }
  function Xu(n, e, u, t, o) {
    switch ((b(n, e), n.getToken())) {
      case 67108990:
        c(n, 167);
      case 67174411: {
        (e & 131072) === 0 && c(n, 28), (n.assignable = 2);
        break;
      }
      case 69271571:
      case 67108877: {
        (e & 65536) === 0 && c(n, 29), (n.assignable = 1);
        break;
      }
      default:
        c(n, 30, 'super');
    }
    return s(n, e, u, t, o, { type: 'Super' });
  }
  function Y(n, e, u, t, o, i, l, f, d) {
    let g = _(n, e, u, 2, 0, t, o, i, l, f, d);
    return O(n, e, u, g, o, 0, l, f, d);
  }
  function Hu(n, e, u, t, o, i) {
    n.assignable & 2 && c(n, 55);
    let l = n.getToken();
    return (
      b(n, e),
      (n.assignable = 2),
      s(n, e, t, o, i, { type: 'UpdateExpression', argument: u, operator: V[l & 255], prefix: !1 })
    );
  }
  function O(n, e, u, t, o, i, l, f, d) {
    if ((n.getToken() & 33619968) === 33619968 && (n.flags & 1) === 0) t = Hu(n, e, t, l, f, d);
    else if ((n.getToken() & 67108864) === 67108864) {
      switch (((e = (e | 33554432) ^ 33554432), n.getToken())) {
        case 67108877: {
          b(n, (e | 67108864 | 2048) ^ 2048),
            e & 4096 && n.getToken() === 130 && n.tokenValue === 'super' && c(n, 173),
            (n.assignable = 1);
          let g = mn(n, e | 16384, u);
          t = s(n, e, l, f, d, { type: 'MemberExpression', object: t, computed: !1, property: g });
          break;
        }
        case 69271571: {
          let g = !1;
          (n.flags & 2048) === 2048 && ((g = !0), (n.flags = (n.flags | 2048) ^ 2048)),
            b(n, e | 8192);
          let { tokenIndex: m, tokenLine: y, tokenColumn: a } = n,
            k = z(n, e, u, o, 1, m, y, a);
          C(n, e, 20),
            (n.assignable = 1),
            (t = s(n, e, l, f, d, {
              type: 'MemberExpression',
              object: t,
              computed: !0,
              property: k,
            })),
            g && (n.flags |= 2048);
          break;
        }
        case 67174411: {
          if ((n.flags & 1024) === 1024) return (n.flags = (n.flags | 1024) ^ 1024), t;
          let g = !1;
          (n.flags & 2048) === 2048 && ((g = !0), (n.flags = (n.flags | 2048) ^ 2048));
          let m = yn(n, e, u, o);
          (n.assignable = 2),
            (t = s(n, e, l, f, d, { type: 'CallExpression', callee: t, arguments: m })),
            g && (n.flags |= 2048);
          break;
        }
        case 67108990: {
          b(n, (e | 67108864 | 2048) ^ 2048),
            (n.flags |= 2048),
            (n.assignable = 2),
            (t = zu(n, e, u, t, l, f, d));
          break;
        }
        default:
          (n.flags & 2048) === 2048 && c(n, 166),
            (n.assignable = 2),
            (t = s(n, e, l, f, d, {
              type: 'TaggedTemplateExpression',
              tag: t,
              quasi:
                n.getToken() === 67174408
                  ? an(n, e | 16384, u)
                  : kn(n, e, n.tokenIndex, n.tokenLine, n.tokenColumn),
            }));
      }
      t = O(n, e, u, t, 0, 1, l, f, d);
    }
    return (
      i === 0 &&
        (n.flags & 2048) === 2048 &&
        ((n.flags = (n.flags | 2048) ^ 2048),
        (t = s(n, e, l, f, d, { type: 'ChainExpression', expression: t }))),
      t
    );
  }
  function zu(n, e, u, t, o, i, l) {
    let f = !1,
      d;
    if (
      ((n.getToken() === 69271571 || n.getToken() === 67174411) &&
        (n.flags & 2048) === 2048 &&
        ((f = !0), (n.flags = (n.flags | 2048) ^ 2048)),
      n.getToken() === 69271571)
    ) {
      b(n, e | 8192);
      let { tokenIndex: g, tokenLine: m, tokenColumn: y } = n,
        a = z(n, e, u, 0, 1, g, m, y);
      C(n, e, 20),
        (n.assignable = 2),
        (d = s(n, e, o, i, l, {
          type: 'MemberExpression',
          object: t,
          computed: !0,
          optional: !0,
          property: a,
        }));
    } else if (n.getToken() === 67174411) {
      let g = yn(n, e, u, 0);
      (n.assignable = 2),
        (d = s(n, e, o, i, l, { type: 'CallExpression', callee: t, arguments: g, optional: !0 }));
    } else {
      let g = mn(n, e, u);
      (n.assignable = 2),
        (d = s(n, e, o, i, l, {
          type: 'MemberExpression',
          object: t,
          computed: !1,
          optional: !0,
          property: g,
        }));
    }
    return f && (n.flags |= 2048), d;
  }
  function mn(n, e, u) {
    return (
      (n.getToken() & 143360) === 0 &&
        n.getToken() !== -2147483528 &&
        n.getToken() !== -2147483527 &&
        n.getToken() !== 130 &&
        c(n, 160),
      n.getToken() === 130 ? H2(n, e, u, 0, n.tokenIndex, n.tokenLine, n.tokenColumn) : R(n, e)
    );
  }
  function Ku(n, e, u, t, o, i, l, f) {
    t && c(n, 56), o || c(n, 0);
    let d = n.getToken();
    b(n, e | 8192);
    let g = Y(n, e, u, 0, 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return (
      n.assignable & 2 && c(n, 55),
      (n.assignable = 2),
      s(n, e, i, l, f, { type: 'UpdateExpression', argument: g, operator: V[d & 255], prefix: !0 })
    );
  }
  function _(n, e, u, t, o, i, l, f, d, g, m) {
    if ((n.getToken() & 143360) === 143360) {
      switch (n.getToken()) {
        case 209006:
          return ju(n, e, u, o, l, d, g, m);
        case 241771:
          return Ju(n, e, u, l, i, d, g, m);
        case 209005:
          return Mu(n, e, u, l, f, i, o, d, g, m);
      }
      let { tokenValue: y } = n,
        a = n.getToken(),
        k = R(n, e | 16384);
      return n.getToken() === 10
        ? (f || c(n, 0),
          $2(n, e, a),
          (a & 36864) === 36864 && (n.flags |= 256),
          _2(n, e, u, y, k, o, i, 0, d, g, m))
        : (e & 4096 &&
            !(e & 8388608) &&
            !(e & 2097152) &&
            n.tokenValue === 'arguments' &&
            c(n, 130),
          (a & 255) === 73 && (e & 256 && c(n, 113), t & 24 && c(n, 100)),
          (n.assignable = e & 256 && (a & 537079808) === 537079808 ? 2 : 1),
          k);
    }
    if ((n.getToken() & 134217728) === 134217728) return H(n, e);
    switch (n.getToken()) {
      case 33619993:
      case 33619994:
        return Ku(n, e, u, o, f, d, g, m);
      case 16863276:
      case 16842798:
      case 16842799:
      case 25233968:
      case 25233969:
      case 16863275:
      case 16863277:
        return Uu(n, e, u, f, d, g, m, l);
      case 86104:
        return te(n, e, u, 0, l, d, g, m);
      case 2162700:
        return ru(n, e, u, i ? 0 : 1, l, d, g, m);
      case 69271571:
        return xu(n, e, u, i ? 0 : 1, l, d, g, m);
      case 67174411:
        return n1(n, e | 16384, u, i, 1, 0, d, g, m);
      case 86021:
      case 86022:
      case 86023:
        return Zu(n, e, d, g, m);
      case 86111:
        return Gu(n, e);
      case 65540:
        return t1(n, e, d, g, m);
      case 132:
      case 86094:
        return i1(n, e, u, l, d, g, m);
      case 86109:
        return Xu(n, e, d, g, m);
      case 67174409:
        return kn(n, e, d, g, m);
      case 67174408:
        return an(n, e, u);
      case 86107:
        return e1(n, e, u, l, d, g, m);
      case 134283388:
        return ue(n, e, d, g, m);
      case 130:
        return H2(n, e, u, 0, d, g, m);
      case 86106:
        return $u(n, e, u, o, l, d, g, m);
      case 8456256:
        if (e & 8) return Q2(n, e, u, 0, d, g, m);
      default:
        if (B2(e, n.getToken())) return sn(n, e, u, d, g, m);
        c(n, 30, V[n.getToken() & 255]);
    }
  }
  function $u(n, e, u, t, o, i, l, f) {
    let d = R(n, e);
    return n.getToken() === 67108877
      ? ne(n, e, d, i, l, f)
      : (t && c(n, 142),
        (d = ee(n, e, u, o, i, l, f)),
        (n.assignable = 2),
        O(n, e, u, d, o, 0, i, l, f));
  }
  function ne(n, e, u, t, o, i) {
    (e & 512) === 0 && c(n, 169), b(n, e);
    let l = n.getToken();
    return (
      l !== 209030 && n.tokenValue !== 'meta' ? c(n, 174) : l & -2147483648 && c(n, 175),
      (n.assignable = 2),
      s(n, e, t, o, i, { type: 'MetaProperty', meta: u, property: R(n, e) })
    );
  }
  function ee(n, e, u, t, o, i, l) {
    C(n, e | 8192, 67174411), n.getToken() === 14 && c(n, 143);
    let d = {
      type: 'ImportExpression',
      source: M(n, e, u, 1, t, n.tokenIndex, n.tokenLine, n.tokenColumn),
    };
    if (e & 1) {
      let g = null;
      if (n.getToken() === 18 && (C(n, e, 18), n.getToken() !== 16)) {
        let m = (e | 33554432) ^ 33554432;
        g = M(n, m, u, 1, t, n.tokenIndex, n.tokenLine, n.tokenColumn);
      }
      (d.options = g), P(n, e, 18);
    }
    return C(n, e, 16), s(n, e, o, i, l, d);
  }
  function en(n, e, u = null) {
    if (!P(n, e, 20579)) return [];
    C(n, e, 2162700);
    let t = [],
      o = new Set();
    for (; n.getToken() !== 1074790415; ) {
      let i = n.tokenIndex,
        l = n.tokenLine,
        f = n.tokenColumn,
        d = _u(n, e);
      C(n, e, 21);
      let g = Wu(n, e),
        m = d.type === 'Literal' ? d.value : d.name;
      m === 'type' &&
        g.value === 'json' &&
        (u === null ||
          (u.length === 1 &&
            (u[0].type === 'ImportDefaultSpecifier' ||
              u[0].type === 'ImportNamespaceSpecifier' ||
              (u[0].type === 'ImportSpecifier' &&
                u[0].imported.type === 'Identifier' &&
                u[0].imported.name === 'default') ||
              (u[0].type === 'ExportSpecifier' &&
                u[0].local.type === 'Identifier' &&
                u[0].local.name === 'default'))) ||
          c(n, 140)),
        o.has(m) && c(n, 145, `${m}`),
        o.add(m),
        t.push(s(n, e, i, l, f, { type: 'ImportAttribute', key: d, value: g })),
        n.getToken() !== 1074790415 && C(n, e, 18);
    }
    return C(n, e, 1074790415), t;
  }
  function Wu(n, e) {
    if (n.getToken() === 134283267) return H(n, e);
    c(n, 30, V[n.getToken() & 255]);
  }
  function _u(n, e) {
    if (n.getToken() === 134283267) return H(n, e);
    if (n.getToken() & 143360) return R(n, e);
    c(n, 30, V[n.getToken() & 255]);
  }
  function Yu(n, e) {
    let u = e.length;
    for (let t = 0; t < u; t++) {
      let o = e.charCodeAt(t);
      (o & 64512) === 55296 &&
        (o > 56319 || ++t >= u || (e.charCodeAt(t) & 64512) !== 56320) &&
        c(n, 171, JSON.stringify(e.charAt(t--)));
    }
  }
  function O2(n, e) {
    if (n.getToken() === 134283267) return Yu(n, n.tokenValue), H(n, e);
    if (n.getToken() & 143360) return R(n, e);
    c(n, 30, V[n.getToken() & 255]);
  }
  function ue(n, e, u, t, o) {
    let { tokenRaw: i, tokenValue: l } = n;
    return (
      b(n, e),
      (n.assignable = 2),
      s(
        n,
        e,
        u,
        t,
        o,
        e & 128
          ? { type: 'Literal', value: l, bigint: i.slice(0, -1), raw: i }
          : { type: 'Literal', value: l, bigint: i.slice(0, -1) }
      )
    );
  }
  function kn(n, e, u, t, o) {
    n.assignable = 2;
    let { tokenValue: i, tokenRaw: l, tokenIndex: f, tokenLine: d, tokenColumn: g } = n;
    C(n, e, 67174409);
    let m = [R2(n, e, i, l, f, d, g, !0)];
    return s(n, e, u, t, o, { type: 'TemplateLiteral', expressions: [], quasis: m });
  }
  function an(n, e, u) {
    e = (e | 33554432) ^ 33554432;
    let { tokenValue: t, tokenRaw: o, tokenIndex: i, tokenLine: l, tokenColumn: f } = n;
    C(n, (e & -16385) | 8192, 67174408);
    let d = [R2(n, e, t, o, i, l, f, !1)],
      g = [z(n, e & -16385, u, 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn)];
    for (n.getToken() !== 1074790415 && c(n, 83); n.setToken(Ze(n, e), !0) !== 67174409; ) {
      let { tokenValue: m, tokenRaw: y, tokenIndex: a, tokenLine: k, tokenColumn: h } = n;
      C(n, (e & -16385) | 8192, 67174408),
        d.push(R2(n, e, m, y, a, k, h, !1)),
        g.push(z(n, e, u, 0, 1, n.tokenIndex, n.tokenLine, n.tokenColumn)),
        n.getToken() !== 1074790415 && c(n, 83);
    }
    {
      let { tokenValue: m, tokenRaw: y, tokenIndex: a, tokenLine: k, tokenColumn: h } = n;
      C(n, e, 67174409), d.push(R2(n, e, m, y, a, k, h, !0));
    }
    return s(n, e, i, l, f, { type: 'TemplateLiteral', expressions: g, quasis: d });
  }
  function R2(n, e, u, t, o, i, l, f) {
    let d = s(n, e, o, i, l, { type: 'TemplateElement', value: { cooked: u, raw: t }, tail: f }),
      g = f ? 1 : 2;
    return (
      e & 2 && ((d.start += 1), (d.range[0] += 1), (d.end -= g), (d.range[1] -= g)),
      e & 4 && ((d.loc.start.column += 1), (d.loc.end.column -= g)),
      d
    );
  }
  function Qu(n, e, u, t, o, i) {
    (e = (e | 33554432) ^ 33554432), C(n, e | 8192, 14);
    let l = M(n, e, u, 1, 0, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return (n.assignable = 1), s(n, e, t, o, i, { type: 'SpreadElement', argument: l });
  }
  function yn(n, e, u, t) {
    b(n, e | 8192);
    let o = [];
    if (n.getToken() === 16) return b(n, e | 16384), o;
    for (
      ;
      n.getToken() !== 16 &&
      (n.getToken() === 14
        ? o.push(Qu(n, e, u, n.tokenIndex, n.tokenLine, n.tokenColumn))
        : o.push(M(n, e, u, 1, t, n.tokenIndex, n.tokenLine, n.tokenColumn)),
      !(n.getToken() !== 18 || (b(n, e | 8192), n.getToken() === 16)));

    );
    return C(n, e | 16384, 16), o;
  }
  function R(n, e) {
    let { tokenValue: u, tokenIndex: t, tokenLine: o, tokenColumn: i } = n,
      l = u === 'await' && (n.getToken() & -2147483648) === 0;
    return b(n, e | (l ? 8192 : 0)), s(n, e, t, o, i, { type: 'Identifier', name: u });
  }
  function H(n, e) {
    let { tokenValue: u, tokenRaw: t, tokenIndex: o, tokenLine: i, tokenColumn: l } = n;
    return n.getToken() === 134283388
      ? ue(n, e, o, i, l)
      : (b(n, e),
        (n.assignable = 2),
        s(
          n,
          e,
          o,
          i,
          l,
          e & 128 ? { type: 'Literal', value: u, raw: t } : { type: 'Literal', value: u }
        ));
  }
  function Zu(n, e, u, t, o) {
    let i = V[n.getToken() & 255],
      l = n.getToken() === 86023 ? null : i === 'true';
    return (
      b(n, e),
      (n.assignable = 2),
      s(
        n,
        e,
        u,
        t,
        o,
        e & 128 ? { type: 'Literal', value: l, raw: i } : { type: 'Literal', value: l }
      )
    );
  }
  function Gu(n, e) {
    let { tokenIndex: u, tokenLine: t, tokenColumn: o } = n;
    return b(n, e), (n.assignable = 2), s(n, e, u, t, o, { type: 'ThisExpression' });
  }
  function f2(n, e, u, t, o, i, l, f, d, g, m) {
    b(n, e | 8192);
    let y = i ? dn(n, e, 8391476) : 0,
      a = null,
      k,
      h = u ? a2() : void 0;
    if (n.getToken() === 67174411) (l & 1) === 0 && c(n, 39, 'Function');
    else {
      let v =
        o & 4 && ((e & 2048) === 0 || (e & 512) === 0) ? 4 : 64 | (f ? 1024 : 0) | (y ? 1024 : 0);
      $n(n, e, n.getToken()),
        u &&
          (v & 4 ? Yn(n, e, u, n.tokenValue, v) : d2(n, e, u, n.tokenValue, v, o),
          (h = j(h, 256)),
          l && l & 2 && g2(n, n.tokenValue)),
        (k = n.getToken()),
        n.getToken() & 143360 ? (a = R(n, e)) : c(n, 30, V[n.getToken() & 255]);
    }
    let T = 7274496;
    (e = ((e | T) ^ T) | 16777216 | (f ? 524288 : 0) | (y ? 262144 : 0) | (y ? 0 : 67108864)),
      u && (h = j(h, 512));
    let E = oe(n, (e | 2097152) & -268435457, h, t, 0, 1),
      w = 268471296,
      I = W2(
        n,
        ((e | w) ^ w) | 8388608 | 1048576,
        u ? j(h, 128) : h,
        t,
        8,
        k,
        h == null ? void 0 : h.scopeError
      );
    return s(n, e, d, g, m, {
      type: 'FunctionDeclaration',
      id: a,
      params: E,
      body: I,
      async: f === 1,
      generator: y === 1,
    });
  }
  function te(n, e, u, t, o, i, l, f) {
    b(n, e | 8192);
    let d = dn(n, e, 8391476),
      g = (t ? 524288 : 0) | (d ? 262144 : 0),
      m = null,
      y,
      a = e & 16 ? a2() : void 0,
      k = 275709952;
    n.getToken() & 143360 &&
      ($n(n, ((e | k) ^ k) | g, n.getToken()),
      a && (a = j(a, 256)),
      (y = n.getToken()),
      (m = R(n, e))),
      (e = ((e | k) ^ k) | 16777216 | g | (d ? 0 : 67108864)),
      a && (a = j(a, 512));
    let h = oe(n, (e | 2097152) & -268435457, a, u, o, 1),
      T = W2(
        n,
        (e & -33594369) | 8388608 | 1048576,
        a && j(a, 128),
        u,
        0,
        y,
        a == null ? void 0 : a.scopeError
      );
    return (
      (n.assignable = 2),
      s(n, e, i, l, f, {
        type: 'FunctionExpression',
        id: m,
        params: h,
        body: T,
        async: t === 1,
        generator: d === 1,
      })
    );
  }
  function xu(n, e, u, t, o, i, l, f) {
    let d = Q(n, e, void 0, u, t, o, 0, 2, 0, i, l, f);
    return n.destructible & 64 && c(n, 63), n.destructible & 8 && c(n, 62), d;
  }
  function Q(n, e, u, t, o, i, l, f, d, g, m, y) {
    b(n, e | 8192);
    let a = [],
      k = 0;
    for (e = (e | 33554432) ^ 33554432; n.getToken() !== 20; )
      if (P(n, e | 8192, 18)) a.push(null);
      else {
        let T,
          { tokenIndex: E, tokenLine: w, tokenColumn: I, tokenValue: v } = n,
          q = n.getToken();
        if (q & 143360)
          if (((T = _(n, e, t, f, 0, 1, i, 1, E, w, I)), n.getToken() === 1077936155)) {
            n.assignable & 2 && c(n, 26), b(n, e | 8192), u && n2(n, e, u, v, f, d);
            let F = M(n, e, t, 1, i, n.tokenIndex, n.tokenLine, n.tokenColumn);
            (T = s(
              n,
              e,
              E,
              w,
              I,
              l
                ? { type: 'AssignmentPattern', left: T, right: F }
                : { type: 'AssignmentExpression', operator: '=', left: T, right: F }
            )),
              (k |= n.destructible & 256 ? 256 : 0 | (n.destructible & 128) ? 128 : 0);
          } else
            n.getToken() === 18 || n.getToken() === 20
              ? (n.assignable & 2 ? (k |= 16) : u && n2(n, e, u, v, f, d),
                (k |= n.destructible & 256 ? 256 : 0 | (n.destructible & 128) ? 128 : 0))
              : ((k |= f & 1 ? 32 : (f & 2) === 0 ? 16 : 0),
                (T = O(n, e, t, T, i, 0, E, w, I)),
                n.getToken() !== 18 && n.getToken() !== 20
                  ? (n.getToken() !== 1077936155 && (k |= 16), (T = J(n, e, t, i, l, E, w, I, T)))
                  : n.getToken() !== 1077936155 && (k |= n.assignable & 2 ? 16 : 32));
        else
          q & 2097152
            ? ((T =
                n.getToken() === 2162700
                  ? Z(n, e, u, t, 0, i, l, f, d, E, w, I)
                  : Q(n, e, u, t, 0, i, l, f, d, E, w, I)),
              (k |= n.destructible),
              (n.assignable = n.destructible & 16 ? 2 : 1),
              n.getToken() === 18 || n.getToken() === 20
                ? n.assignable & 2 && (k |= 16)
                : n.destructible & 8
                  ? c(n, 71)
                  : ((T = O(n, e, t, T, i, 0, E, w, I)),
                    (k = n.assignable & 2 ? 16 : 0),
                    n.getToken() !== 18 && n.getToken() !== 20
                      ? (T = J(n, e, t, i, l, E, w, I, T))
                      : n.getToken() !== 1077936155 && (k |= n.assignable & 2 ? 16 : 32)))
            : q === 14
              ? ((T = b2(n, e, u, t, 20, f, d, 0, i, l, E, w, I)),
                (k |= n.destructible),
                n.getToken() !== 18 && n.getToken() !== 20 && c(n, 30, V[n.getToken() & 255]))
              : ((T = Y(n, e, t, 1, 0, 1, E, w, I)),
                n.getToken() !== 18 && n.getToken() !== 20
                  ? ((T = J(n, e, t, i, l, E, w, I, T)),
                    (f & 3) === 0 && q === 67174411 && (k |= 16))
                  : n.assignable & 2
                    ? (k |= 16)
                    : q === 67174411 && (k |= n.assignable & 1 && f & 3 ? 32 : 16));
        if ((a.push(T), P(n, e | 8192, 18))) {
          if (n.getToken() === 20) break;
        } else break;
      }
    C(n, e, 20);
    let h = s(n, e, g, m, y, { type: l ? 'ArrayPattern' : 'ArrayExpression', elements: a });
    return !o && n.getToken() & 4194304
      ? ie(n, e, t, k, i, l, g, m, y, h)
      : ((n.destructible = k), h);
  }
  function ie(n, e, u, t, o, i, l, f, d, g) {
    n.getToken() !== 1077936155 && c(n, 26), b(n, e | 8192), t & 16 && c(n, 26), i || r(n, g);
    let { tokenIndex: m, tokenLine: y, tokenColumn: a } = n,
      k = M(n, e, u, 1, o, m, y, a);
    return (
      (n.destructible =
        ((t | 64 | 8) ^ 72) | (n.destructible & 128 ? 128 : 0) | (n.destructible & 256 ? 256 : 0)),
      s(
        n,
        e,
        l,
        f,
        d,
        i
          ? { type: 'AssignmentPattern', left: g, right: k }
          : { type: 'AssignmentExpression', left: g, operator: '=', right: k }
      )
    );
  }
  function b2(n, e, u, t, o, i, l, f, d, g, m, y, a) {
    b(n, e | 8192);
    let k = null,
      h = 0,
      { tokenValue: T, tokenIndex: E, tokenLine: w, tokenColumn: I } = n,
      v = n.getToken();
    if (v & 143360)
      (n.assignable = 1),
        (k = _(n, e, t, i, 0, 1, d, 1, E, w, I)),
        (v = n.getToken()),
        (k = O(n, e, t, k, d, 0, E, w, I)),
        n.getToken() !== 18 &&
          n.getToken() !== o &&
          (n.assignable & 2 && n.getToken() === 1077936155 && c(n, 71),
          (h |= 16),
          (k = J(n, e, t, d, g, E, w, I, k))),
        n.assignable & 2 ? (h |= 16) : v === o || v === 18 ? u && n2(n, e, u, T, i, l) : (h |= 32),
        (h |= n.destructible & 128 ? 128 : 0);
    else if (v === o) c(n, 41);
    else if (v & 2097152)
      (k =
        n.getToken() === 2162700
          ? Z(n, e, u, t, 1, d, g, i, l, E, w, I)
          : Q(n, e, u, t, 1, d, g, i, l, E, w, I)),
        (v = n.getToken()),
        v !== 1077936155 && v !== o && v !== 18
          ? (n.destructible & 8 && c(n, 71),
            (k = O(n, e, t, k, d, 0, E, w, I)),
            (h |= n.assignable & 2 ? 16 : 0),
            (n.getToken() & 4194304) === 4194304
              ? (n.getToken() !== 1077936155 && (h |= 16), (k = J(n, e, t, d, g, E, w, I, k)))
              : ((n.getToken() & 8388608) === 8388608 && (k = l2(n, e, t, 1, E, w, I, 4, v, k)),
                P(n, e | 8192, 22) && (k = c2(n, e, t, k, E, w, I)),
                (h |= n.assignable & 2 ? 16 : 32)))
          : (h |= o === 1074790415 && v !== 1077936155 ? 16 : n.destructible);
    else {
      (h |= 32), (k = Y(n, e, t, 1, d, 1, n.tokenIndex, n.tokenLine, n.tokenColumn));
      let { tokenIndex: q, tokenLine: F, tokenColumn: U } = n,
        D = n.getToken();
      return (
        D === 1077936155
          ? (n.assignable & 2 && c(n, 26), (k = J(n, e, t, d, g, q, F, U, k)), (h |= 16))
          : (D === 18 ? (h |= 16) : D !== o && (k = J(n, e, t, d, g, q, F, U, k)),
            (h |= n.assignable & 1 ? 32 : 16)),
        (n.destructible = h),
        n.getToken() !== o && n.getToken() !== 18 && c(n, 161),
        s(n, e, m, y, a, { type: g ? 'RestElement' : 'SpreadElement', argument: k })
      );
    }
    if (n.getToken() !== o)
      if ((i & 1 && (h |= f ? 16 : 32), P(n, e | 8192, 1077936155))) {
        h & 16 && c(n, 26), r(n, k);
        let q = M(n, e, t, 1, d, n.tokenIndex, n.tokenLine, n.tokenColumn);
        (k = s(
          n,
          e,
          E,
          w,
          I,
          g
            ? { type: 'AssignmentPattern', left: k, right: q }
            : { type: 'AssignmentExpression', left: k, operator: '=', right: q }
        )),
          (h = 16);
      } else h |= 16;
    return (
      (n.destructible = h),
      s(n, e, m, y, a, { type: g ? 'RestElement' : 'SpreadElement', argument: k })
    );
  }
  function x(n, e, u, t, o, i, l, f) {
    var a;
    let d = 2883584 | ((t & 64) === 0 ? 4325376 : 0);
    e =
      ((e | d) ^ d) |
      (t & 8 ? 262144 : 0) |
      (t & 16 ? 524288 : 0) |
      (t & 64 ? 4194304 : 0) |
      65536 |
      8388608 |
      16777216;
    let g = e & 16 ? j(a2(), 512) : void 0,
      m = pu(n, (e | 2097152) & -268435457, g, u, t, 1, o);
    g && (g = j(g, 128));
    let y = W2(
      n,
      (e & -301992961) | 8388608 | 1048576,
      g,
      u,
      0,
      void 0,
      (a = g == null ? void 0 : g.parent) == null ? void 0 : a.scopeError
    );
    return s(n, e, i, l, f, {
      type: 'FunctionExpression',
      params: m,
      body: y,
      async: (t & 16) > 0,
      generator: (t & 8) > 0,
      id: null,
    });
  }
  function ru(n, e, u, t, o, i, l, f) {
    let d = Z(n, e, void 0, u, t, o, 0, 2, 0, i, l, f);
    return n.destructible & 64 && c(n, 63), n.destructible & 8 && c(n, 62), d;
  }
  function Z(n, e, u, t, o, i, l, f, d, g, m, y) {
    b(n, e);
    let a = [],
      k = 0,
      h = 0;
    for (e = (e | 33554432) ^ 33554432; n.getToken() !== 1074790415; ) {
      let { tokenValue: E, tokenLine: w, tokenColumn: I, tokenIndex: v } = n,
        q = n.getToken();
      if (q === 14) a.push(b2(n, e, u, t, 1074790415, f, d, 0, i, l, v, w, I));
      else {
        let F = 0,
          U = null,
          D;
        if (n.getToken() & 143360 || n.getToken() === -2147483528 || n.getToken() === -2147483527)
          if (
            (n.getToken() === -2147483527 && (k |= 16),
            (U = R(n, e)),
            n.getToken() === 18 || n.getToken() === 1074790415 || n.getToken() === 1077936155)
          )
            if (
              ((F |= 4),
              e & 256 && (q & 537079808) === 537079808 ? (k |= 16) : J2(n, e, f, q, 0),
              u && n2(n, e, u, E, f, d),
              P(n, e | 8192, 1077936155))
            ) {
              k |= 8;
              let B = M(n, e, t, 1, i, n.tokenIndex, n.tokenLine, n.tokenColumn);
              (k |= n.destructible & 256 ? 256 : 0 | (n.destructible & 128) ? 128 : 0),
                (D = s(n, e, v, w, I, {
                  type: 'AssignmentPattern',
                  left: e & 134217728 ? Object.assign({}, U) : U,
                  right: B,
                }));
            } else
              (k |= (q === 209006 ? 128 : 0) | (q === -2147483528 ? 16 : 0)),
                (D = e & 134217728 ? Object.assign({}, U) : U);
          else if (P(n, e | 8192, 21)) {
            let { tokenIndex: B, tokenLine: L, tokenColumn: S } = n;
            if ((E === '__proto__' && h++, n.getToken() & 143360)) {
              let D2 = n.getToken(),
                t2 = n.tokenValue;
              D = _(n, e, t, f, 0, 1, i, 1, B, L, S);
              let p = n.getToken();
              (D = O(n, e, t, D, i, 0, B, L, S)),
                n.getToken() === 18 || n.getToken() === 1074790415
                  ? p === 1077936155 || p === 1074790415 || p === 18
                    ? ((k |= n.destructible & 128 ? 128 : 0),
                      n.assignable & 2
                        ? (k |= 16)
                        : u && (D2 & 143360) === 143360 && n2(n, e, u, t2, f, d))
                    : (k |= n.assignable & 1 ? 32 : 16)
                  : (n.getToken() & 4194304) === 4194304
                    ? (n.assignable & 2
                        ? (k |= 16)
                        : p !== 1077936155
                          ? (k |= 32)
                          : u && n2(n, e, u, t2, f, d),
                      (D = J(n, e, t, i, l, B, L, S, D)))
                    : ((k |= 16),
                      (n.getToken() & 8388608) === 8388608 &&
                        (D = l2(n, e, t, 1, B, L, S, 4, p, D)),
                      P(n, e | 8192, 22) && (D = c2(n, e, t, D, B, L, S)));
            } else
              (n.getToken() & 2097152) === 2097152
                ? ((D =
                    n.getToken() === 69271571
                      ? Q(n, e, u, t, 0, i, l, f, d, B, L, S)
                      : Z(n, e, u, t, 0, i, l, f, d, B, L, S)),
                  (k = n.destructible),
                  (n.assignable = k & 16 ? 2 : 1),
                  n.getToken() === 18 || n.getToken() === 1074790415
                    ? n.assignable & 2 && (k |= 16)
                    : n.destructible & 8
                      ? c(n, 71)
                      : ((D = O(n, e, t, D, i, 0, B, L, S)),
                        (k = n.assignable & 2 ? 16 : 0),
                        (n.getToken() & 4194304) === 4194304
                          ? (D = N2(n, e, t, i, l, B, L, S, D))
                          : ((n.getToken() & 8388608) === 8388608 &&
                              (D = l2(n, e, t, 1, B, L, S, 4, q, D)),
                            P(n, e | 8192, 22) && (D = c2(n, e, t, D, B, L, S)),
                            (k |= n.assignable & 2 ? 16 : 32))))
                : ((D = Y(n, e, t, 1, i, 1, B, L, S)),
                  (k |= n.assignable & 1 ? 32 : 16),
                  n.getToken() === 18 || n.getToken() === 1074790415
                    ? n.assignable & 2 && (k |= 16)
                    : ((D = O(n, e, t, D, i, 0, B, L, S)),
                      (k = n.assignable & 2 ? 16 : 0),
                      n.getToken() !== 18 &&
                        q !== 1074790415 &&
                        (n.getToken() !== 1077936155 && (k |= 16),
                        (D = J(n, e, t, i, l, B, L, S, D)))));
          } else
            n.getToken() === 69271571
              ? ((k |= 16),
                q === 209005 && (F |= 16),
                (F |= (q === 12400 ? 256 : q === 12401 ? 512 : 1) | 2),
                (U = y2(n, e, t, i)),
                (k |= n.assignable),
                (D = x(n, e, t, F, i, n.tokenIndex, n.tokenLine, n.tokenColumn)))
              : n.getToken() & 143360
                ? ((k |= 16),
                  q === -2147483528 && c(n, 95),
                  q === 209005
                    ? (n.flags & 1 && c(n, 132), (F |= 17))
                    : q === 12400
                      ? (F |= 256)
                      : q === 12401
                        ? (F |= 512)
                        : c(n, 0),
                  (U = R(n, e)),
                  (D = x(n, e, t, F, i, n.tokenIndex, n.tokenLine, n.tokenColumn)))
                : n.getToken() === 67174411
                  ? ((k |= 16),
                    (F |= 1),
                    (D = x(n, e, t, F, i, n.tokenIndex, n.tokenLine, n.tokenColumn)))
                  : n.getToken() === 8391476
                    ? ((k |= 16),
                      q === 12400
                        ? c(n, 42)
                        : q === 12401
                          ? c(n, 43)
                          : q !== 209005 && c(n, 30, V[52]),
                      b(n, e),
                      (F |= 9 | (q === 209005 ? 16 : 0)),
                      n.getToken() & 143360
                        ? (U = R(n, e))
                        : (n.getToken() & 134217728) === 134217728
                          ? (U = H(n, e))
                          : n.getToken() === 69271571
                            ? ((F |= 2), (U = y2(n, e, t, i)), (k |= n.assignable))
                            : c(n, 30, V[n.getToken() & 255]),
                      (D = x(n, e, t, F, i, n.tokenIndex, n.tokenLine, n.tokenColumn)))
                    : (n.getToken() & 134217728) === 134217728
                      ? (q === 209005 && (F |= 16),
                        (F |= q === 12400 ? 256 : q === 12401 ? 512 : 1),
                        (k |= 16),
                        (U = H(n, e)),
                        (D = x(n, e, t, F, i, n.tokenIndex, n.tokenLine, n.tokenColumn)))
                      : c(n, 133);
        else if ((n.getToken() & 134217728) === 134217728)
          if (((U = H(n, e)), n.getToken() === 21)) {
            C(n, e | 8192, 21);
            let { tokenIndex: B, tokenLine: L, tokenColumn: S } = n;
            if ((E === '__proto__' && h++, n.getToken() & 143360)) {
              D = _(n, e, t, f, 0, 1, i, 1, B, L, S);
              let { tokenValue: D2 } = n,
                t2 = n.getToken();
              (D = O(n, e, t, D, i, 0, B, L, S)),
                n.getToken() === 18 || n.getToken() === 1074790415
                  ? t2 === 1077936155 || t2 === 1074790415 || t2 === 18
                    ? n.assignable & 2
                      ? (k |= 16)
                      : u && n2(n, e, u, D2, f, d)
                    : (k |= n.assignable & 1 ? 32 : 16)
                  : n.getToken() === 1077936155
                    ? (n.assignable & 2 && (k |= 16), (D = J(n, e, t, i, l, B, L, S, D)))
                    : ((k |= 16), (D = J(n, e, t, i, l, B, L, S, D)));
            } else
              (n.getToken() & 2097152) === 2097152
                ? ((D =
                    n.getToken() === 69271571
                      ? Q(n, e, u, t, 0, i, l, f, d, B, L, S)
                      : Z(n, e, u, t, 0, i, l, f, d, B, L, S)),
                  (k = n.destructible),
                  (n.assignable = k & 16 ? 2 : 1),
                  n.getToken() === 18 || n.getToken() === 1074790415
                    ? n.assignable & 2 && (k |= 16)
                    : (n.destructible & 8) !== 8 &&
                      ((D = O(n, e, t, D, i, 0, B, L, S)),
                      (k = n.assignable & 2 ? 16 : 0),
                      (n.getToken() & 4194304) === 4194304
                        ? (D = N2(n, e, t, i, l, B, L, S, D))
                        : ((n.getToken() & 8388608) === 8388608 &&
                            (D = l2(n, e, t, 1, B, L, S, 4, q, D)),
                          P(n, e | 8192, 22) && (D = c2(n, e, t, D, B, L, S)),
                          (k |= n.assignable & 2 ? 16 : 32))))
                : ((D = Y(n, e, t, 1, 0, 1, B, L, S)),
                  (k |= n.assignable & 1 ? 32 : 16),
                  n.getToken() === 18 || n.getToken() === 1074790415
                    ? n.assignable & 2 && (k |= 16)
                    : ((D = O(n, e, t, D, i, 0, B, L, S)),
                      (k = n.assignable & 1 ? 0 : 16),
                      n.getToken() !== 18 &&
                        n.getToken() !== 1074790415 &&
                        (n.getToken() !== 1077936155 && (k |= 16),
                        (D = J(n, e, t, i, l, B, L, S, D)))));
          } else
            n.getToken() === 67174411
              ? ((F |= 1),
                (D = x(n, e, t, F, i, n.tokenIndex, n.tokenLine, n.tokenColumn)),
                (k = n.assignable | 16))
              : c(n, 134);
        else if (n.getToken() === 69271571)
          if (
            ((U = y2(n, e, t, i)),
            (k |= n.destructible & 256 ? 256 : 0),
            (F |= 2),
            n.getToken() === 21)
          ) {
            b(n, e | 8192);
            let { tokenIndex: B, tokenLine: L, tokenColumn: S, tokenValue: D2 } = n,
              t2 = n.getToken();
            if (n.getToken() & 143360) {
              D = _(n, e, t, f, 0, 1, i, 1, B, L, S);
              let p = n.getToken();
              (D = O(n, e, t, D, i, 0, B, L, S)),
                (n.getToken() & 4194304) === 4194304
                  ? ((k |= n.assignable & 2 ? 16 : p === 1077936155 ? 0 : 32),
                    (D = N2(n, e, t, i, l, B, L, S, D)))
                  : n.getToken() === 18 || n.getToken() === 1074790415
                    ? p === 1077936155 || p === 1074790415 || p === 18
                      ? n.assignable & 2
                        ? (k |= 16)
                        : u && (t2 & 143360) === 143360 && n2(n, e, u, D2, f, d)
                      : (k |= n.assignable & 1 ? 32 : 16)
                    : ((k |= 16), (D = J(n, e, t, i, l, B, L, S, D)));
            } else
              (n.getToken() & 2097152) === 2097152
                ? ((D =
                    n.getToken() === 69271571
                      ? Q(n, e, u, t, 0, i, l, f, d, B, L, S)
                      : Z(n, e, u, t, 0, i, l, f, d, B, L, S)),
                  (k = n.destructible),
                  (n.assignable = k & 16 ? 2 : 1),
                  n.getToken() === 18 || n.getToken() === 1074790415
                    ? n.assignable & 2 && (k |= 16)
                    : k & 8
                      ? c(n, 62)
                      : ((D = O(n, e, t, D, i, 0, B, L, S)),
                        (k = n.assignable & 2 ? k | 16 : 0),
                        (n.getToken() & 4194304) === 4194304
                          ? (n.getToken() !== 1077936155 && (k |= 16),
                            (D = N2(n, e, t, i, l, B, L, S, D)))
                          : ((n.getToken() & 8388608) === 8388608 &&
                              (D = l2(n, e, t, 1, B, L, S, 4, q, D)),
                            P(n, e | 8192, 22) && (D = c2(n, e, t, D, B, L, S)),
                            (k |= n.assignable & 2 ? 16 : 32))))
                : ((D = Y(n, e, t, 1, 0, 1, B, L, S)),
                  (k |= n.assignable & 1 ? 32 : 16),
                  n.getToken() === 18 || n.getToken() === 1074790415
                    ? n.assignable & 2 && (k |= 16)
                    : ((D = O(n, e, t, D, i, 0, B, L, S)),
                      (k = n.assignable & 1 ? 0 : 16),
                      n.getToken() !== 18 &&
                        n.getToken() !== 1074790415 &&
                        (n.getToken() !== 1077936155 && (k |= 16),
                        (D = J(n, e, t, i, l, B, L, S, D)))));
          } else
            n.getToken() === 67174411
              ? ((F |= 1), (D = x(n, e, t, F, i, n.tokenIndex, w, I)), (k = 16))
              : c(n, 44);
        else if (q === 8391476)
          if ((C(n, e | 8192, 8391476), (F |= 8), n.getToken() & 143360)) {
            let B = n.getToken();
            (U = R(n, e)),
              (F |= 1),
              n.getToken() === 67174411
                ? ((k |= 16), (D = x(n, e, t, F, i, n.tokenIndex, n.tokenLine, n.tokenColumn)))
                : $(
                    n.tokenIndex,
                    n.tokenLine,
                    n.tokenColumn,
                    n.index,
                    n.line,
                    n.column,
                    B === 209005 ? 46 : B === 12400 || n.getToken() === 12401 ? 45 : 47,
                    V[B & 255]
                  );
          } else
            (n.getToken() & 134217728) === 134217728
              ? ((k |= 16), (U = H(n, e)), (F |= 1), (D = x(n, e, t, F, i, v, w, I)))
              : n.getToken() === 69271571
                ? ((k |= 16),
                  (F |= 3),
                  (U = y2(n, e, t, i)),
                  (D = x(n, e, t, F, i, n.tokenIndex, n.tokenLine, n.tokenColumn)))
                : c(n, 126);
        else c(n, 30, V[q & 255]);
        (k |= n.destructible & 128 ? 128 : 0),
          (n.destructible = k),
          a.push(
            s(n, e, v, w, I, {
              type: 'Property',
              key: U,
              value: D,
              kind: F & 768 ? (F & 512 ? 'set' : 'get') : 'init',
              computed: (F & 2) > 0,
              method: (F & 1) > 0,
              shorthand: (F & 4) > 0,
            })
          );
      }
      if (((k |= n.destructible), n.getToken() !== 18)) break;
      b(n, e);
    }
    C(n, e, 1074790415), h > 1 && (k |= 64);
    let T = s(n, e, g, m, y, { type: l ? 'ObjectPattern' : 'ObjectExpression', properties: a });
    return !o && n.getToken() & 4194304
      ? ie(n, e, t, k, i, l, g, m, y, T)
      : ((n.destructible = k), T);
  }
  function pu(n, e, u, t, o, i, l) {
    C(n, e, 67174411);
    let f = [];
    if (((n.flags = (n.flags | 128) ^ 128), n.getToken() === 16))
      return o & 512 && c(n, 37, 'Setter', 'one', ''), b(n, e), f;
    o & 256 && c(n, 37, 'Getter', 'no', 's'),
      o & 512 && n.getToken() === 14 && c(n, 38),
      (e = (e | 33554432) ^ 33554432);
    let d = 0,
      g = 0;
    for (; n.getToken() !== 18; ) {
      let m = null,
        { tokenIndex: y, tokenLine: a, tokenColumn: k } = n;
      if (
        (n.getToken() & 143360
          ? ((e & 256) === 0 &&
              ((n.getToken() & 36864) === 36864 && (n.flags |= 256),
              (n.getToken() & 537079808) === 537079808 && (n.flags |= 512)),
            (m = An(n, e, u, o | 1, 0, y, a, k)))
          : (n.getToken() === 2162700
              ? (m = Z(n, e, u, t, 1, l, 1, i, 0, y, a, k))
              : n.getToken() === 69271571
                ? (m = Q(n, e, u, t, 1, l, 1, i, 0, y, a, k))
                : n.getToken() === 14 && (m = b2(n, e, u, t, 16, i, 0, 0, l, 1, y, a, k)),
            (g = 1),
            n.destructible & 48 && c(n, 50)),
        n.getToken() === 1077936155)
      ) {
        b(n, e | 8192), (g = 1);
        let h = M(n, e, t, 1, 0, n.tokenIndex, n.tokenLine, n.tokenColumn);
        m = s(n, e, y, a, k, { type: 'AssignmentPattern', left: m, right: h });
      }
      if ((d++, f.push(m), !P(n, e, 18) || n.getToken() === 16)) break;
    }
    return (
      o & 512 && d !== 1 && c(n, 37, 'Setter', 'one', ''),
      u && u.scopeError && z2(u.scopeError),
      g && (n.flags |= 128),
      C(n, e, 16),
      f
    );
  }
  function y2(n, e, u, t) {
    b(n, e | 8192);
    let o = M(n, (e | 33554432) ^ 33554432, u, 1, t, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return C(n, e, 20), o;
  }
  function n1(n, e, u, t, o, i, l, f, d) {
    n.flags = (n.flags | 128) ^ 128;
    let { tokenIndex: g, tokenLine: m, tokenColumn: y } = n;
    b(n, e | 8192 | 67108864);
    let a = e & 16 ? j(a2(), 1024) : void 0;
    if (((e = (e | 33554432) ^ 33554432), P(n, e, 16))) return X2(n, e, a, u, [], t, 0, l, f, d);
    let k = 0;
    n.destructible &= -385;
    let h,
      T = [],
      E = 0,
      w = 0,
      I = 0,
      { tokenIndex: v, tokenLine: q, tokenColumn: F } = n;
    for (n.assignable = 1; n.getToken() !== 16; ) {
      let { tokenIndex: U, tokenLine: D, tokenColumn: B } = n,
        L = n.getToken();
      if (L & 143360)
        a && d2(n, e, a, n.tokenValue, 1, 0),
          (L & 537079808) === 537079808 ? (w = 1) : (L & 36864) === 36864 && (I = 1),
          (h = _(n, e, u, o, 0, 1, 1, 1, U, D, B)),
          n.getToken() === 16 || n.getToken() === 18
            ? n.assignable & 2 && ((k |= 16), (w = 1))
            : (n.getToken() === 1077936155 ? (w = 1) : (k |= 16),
              (h = O(n, e, u, h, 1, 0, U, D, B)),
              n.getToken() !== 16 && n.getToken() !== 18 && (h = J(n, e, u, 1, 0, U, D, B, h)));
      else if ((L & 2097152) === 2097152)
        (h =
          L === 2162700
            ? Z(n, e | 67108864, a, u, 0, 1, 0, o, i, U, D, B)
            : Q(n, e | 67108864, a, u, 0, 1, 0, o, i, U, D, B)),
          (k |= n.destructible),
          (w = 1),
          (n.assignable = 2),
          n.getToken() !== 16 &&
            n.getToken() !== 18 &&
            (k & 8 && c(n, 122),
            (h = O(n, e, u, h, 0, 0, U, D, B)),
            (k |= 16),
            n.getToken() !== 16 && n.getToken() !== 18 && (h = J(n, e, u, 0, 0, U, D, B, h)));
      else if (L === 14) {
        (h = b2(n, e, a, u, 16, o, i, 0, 1, 0, U, D, B)),
          n.destructible & 16 && c(n, 74),
          (w = 1),
          E && (n.getToken() === 16 || n.getToken() === 18) && T.push(h),
          (k |= 8);
        break;
      } else {
        if (
          ((k |= 16),
          (h = M(n, e, u, 1, 1, U, D, B)),
          E && (n.getToken() === 16 || n.getToken() === 18) && T.push(h),
          n.getToken() === 18 && (E || ((E = 1), (T = [h]))),
          E)
        ) {
          for (; P(n, e | 8192, 18); )
            T.push(M(n, e, u, 1, 1, n.tokenIndex, n.tokenLine, n.tokenColumn));
          (n.assignable = 2),
            (h = s(n, e, v, q, F, { type: 'SequenceExpression', expressions: T }));
        }
        return C(n, e, 16), (n.destructible = k), h;
      }
      if ((E && (n.getToken() === 16 || n.getToken() === 18) && T.push(h), !P(n, e | 8192, 18)))
        break;
      if ((E || ((E = 1), (T = [h])), n.getToken() === 16)) {
        k |= 8;
        break;
      }
    }
    return (
      E &&
        ((n.assignable = 2),
        (h = s(n, e, v, q, F, { type: 'SequenceExpression', expressions: T }))),
      C(n, e, 16),
      k & 16 && k & 8 && c(n, 151),
      (k |= n.destructible & 256 ? 256 : 0 | (n.destructible & 128) ? 128 : 0),
      n.getToken() === 10
        ? (k & 48 && c(n, 49),
          e & 524800 && k & 128 && c(n, 31),
          e & 262400 && k & 256 && c(n, 32),
          w && (n.flags |= 128),
          I && (n.flags |= 256),
          X2(n, e, a, u, E ? T : [h], t, 0, l, f, d))
        : (k & 64 && c(n, 63),
          k & 8 && c(n, 144),
          (n.destructible = ((n.destructible | 256) ^ 256) | k),
          e & 32 ? s(n, e, g, m, y, { type: 'ParenthesizedExpression', expression: h }) : h)
    );
  }
  function sn(n, e, u, t, o, i) {
    let { tokenValue: l } = n,
      f = 0,
      d = 0;
    (n.getToken() & 537079808) === 537079808
      ? (f = 1)
      : (n.getToken() & 36864) === 36864 && (d = 1);
    let g = R(n, e);
    if (((n.assignable = 1), n.getToken() === 10)) {
      let m;
      return (
        e & 16 && (m = K2(n, e, l)),
        f && (n.flags |= 128),
        d && (n.flags |= 256),
        F2(n, e, m, u, [g], 0, t, o, i)
      );
    }
    return g;
  }
  function _2(n, e, u, t, o, i, l, f, d, g, m) {
    l || c(n, 57), i && c(n, 51), (n.flags &= -129);
    let y = e & 16 ? K2(n, e, t) : void 0;
    return F2(n, e, y, u, [o], f, d, g, m);
  }
  function X2(n, e, u, t, o, i, l, f, d, g) {
    i || c(n, 57);
    for (let m = 0; m < o.length; ++m) r(n, o[m]);
    return F2(n, e, u, t, o, l, f, d, g);
  }
  function F2(n, e, u, t, o, i, l, f, d) {
    n.flags & 1 && c(n, 48), C(n, e | 8192, 10);
    let g = 271319040;
    e = ((e | g) ^ g) | (i ? 524288 : 0);
    let m = n.getToken() !== 2162700,
      y;
    if ((u && u.scopeError && z2(u.scopeError), m))
      (n.flags = (n.flags | 512 | 256 | 64 | 4096) ^ 4928),
        (y = M(n, e, t, 1, 0, n.tokenIndex, n.tokenLine, n.tokenColumn));
    else {
      u && (u = j(u, 128));
      let a = 33557504;
      switch (((y = W2(n, ((e | a) ^ a) | 1048576, u, t, 16, void 0, void 0)), n.getToken())) {
        case 69271571:
          (n.flags & 1) === 0 && c(n, 116);
          break;
        case 67108877:
        case 67174409:
        case 22:
          c(n, 117);
        case 67174411:
          (n.flags & 1) === 0 && c(n, 116), (n.flags |= 1024);
          break;
      }
      (n.getToken() & 8388608) === 8388608 &&
        (n.flags & 1) === 0 &&
        c(n, 30, V[n.getToken() & 255]),
        (n.getToken() & 33619968) === 33619968 && c(n, 125);
    }
    return (
      (n.assignable = 2),
      s(n, e, l, f, d, {
        type: 'ArrowFunctionExpression',
        params: o,
        body: y,
        async: i === 1,
        expression: m,
      })
    );
  }
  function oe(n, e, u, t, o, i) {
    C(n, e, 67174411), (n.flags = (n.flags | 128) ^ 128);
    let l = [];
    if (P(n, e, 16)) return l;
    e = (e | 33554432) ^ 33554432;
    let f = 0;
    for (; n.getToken() !== 18; ) {
      let d,
        { tokenIndex: g, tokenLine: m, tokenColumn: y } = n,
        a = n.getToken();
      if (
        (a & 143360
          ? ((e & 256) === 0 &&
              ((a & 36864) === 36864 && (n.flags |= 256),
              (a & 537079808) === 537079808 && (n.flags |= 512)),
            (d = An(n, e, u, i | 1, 0, g, m, y)))
          : (a === 2162700
              ? (d = Z(n, e, u, t, 1, o, 1, i, 0, g, m, y))
              : a === 69271571
                ? (d = Q(n, e, u, t, 1, o, 1, i, 0, g, m, y))
                : a === 14
                  ? (d = b2(n, e, u, t, 16, i, 0, 0, o, 1, g, m, y))
                  : c(n, 30, V[a & 255]),
            (f = 1),
            n.destructible & 48 && c(n, 50)),
        n.getToken() === 1077936155)
      ) {
        b(n, e | 8192), (f = 1);
        let k = M(n, e, t, 1, o, n.tokenIndex, n.tokenLine, n.tokenColumn);
        d = s(n, e, g, m, y, { type: 'AssignmentPattern', left: d, right: k });
      }
      if ((l.push(d), !P(n, e, 18) || n.getToken() === 16)) break;
    }
    return (
      f && (n.flags |= 128), u && (f || e & 256) && u.scopeError && z2(u.scopeError), C(n, e, 16), l
    );
  }
  function U2(n, e, u, t, o, i, l, f) {
    let d = n.getToken();
    if (d & 67108864) {
      if (d === 67108877) {
        b(n, e | 67108864), (n.assignable = 1);
        let g = mn(n, e, u);
        return U2(
          n,
          e,
          u,
          s(n, e, i, l, f, { type: 'MemberExpression', object: t, computed: !1, property: g }),
          0,
          i,
          l,
          f
        );
      } else if (d === 69271571) {
        b(n, e | 8192);
        let { tokenIndex: g, tokenLine: m, tokenColumn: y } = n,
          a = z(n, e, u, o, 1, g, m, y);
        return (
          C(n, e, 20),
          (n.assignable = 1),
          U2(
            n,
            e,
            u,
            s(n, e, i, l, f, { type: 'MemberExpression', object: t, computed: !0, property: a }),
            0,
            i,
            l,
            f
          )
        );
      } else if (d === 67174408 || d === 67174409)
        return (
          (n.assignable = 2),
          U2(
            n,
            e,
            u,
            s(n, e, i, l, f, {
              type: 'TaggedTemplateExpression',
              tag: t,
              quasi:
                n.getToken() === 67174408
                  ? an(n, e | 16384, u)
                  : kn(n, e | 16384, n.tokenIndex, n.tokenLine, n.tokenColumn),
            }),
            0,
            i,
            l,
            f
          )
        );
    }
    return t;
  }
  function e1(n, e, u, t, o, i, l) {
    let f = R(n, e | 8192),
      { tokenIndex: d, tokenLine: g, tokenColumn: m } = n;
    if (P(n, e, 67108877)) {
      if (e & 16777216 && n.getToken() === 209029) return (n.assignable = 2), u1(n, e, f, o, i, l);
      c(n, 94);
    }
    (n.assignable = 2), (n.getToken() & 16842752) === 16842752 && c(n, 65, V[n.getToken() & 255]);
    let y = _(n, e, u, 2, 1, 0, t, 1, d, g, m);
    (e = (e | 33554432) ^ 33554432), n.getToken() === 67108990 && c(n, 168);
    let a = U2(n, e, u, y, t, d, g, m);
    return (
      (n.assignable = 2),
      s(n, e, o, i, l, {
        type: 'NewExpression',
        callee: a,
        arguments: n.getToken() === 67174411 ? yn(n, e, u, t) : [],
      })
    );
  }
  function u1(n, e, u, t, o, i) {
    let l = R(n, e);
    return s(n, e, t, o, i, { type: 'MetaProperty', meta: u, property: l });
  }
  function le(n, e, u, t, o, i, l) {
    return (
      n.getToken() === 209006 && c(n, 31),
      e & 262400 && n.getToken() === 241771 && c(n, 32),
      $2(n, e, n.getToken()),
      (n.getToken() & 36864) === 36864 && (n.flags |= 256),
      _2(n, (e & -268435457) | 524288, u, n.tokenValue, R(n, e), 0, t, 1, o, i, l)
    );
  }
  function hn(n, e, u, t, o, i, l, f, d, g, m) {
    b(n, e | 8192);
    let y = e & 16 ? j(a2(), 1024) : void 0;
    if (((e = (e | 33554432) ^ 33554432), P(n, e, 16)))
      return n.getToken() === 10
        ? (f & 1 && c(n, 48), X2(n, e, y, u, [], o, 1, d, g, m))
        : s(n, e, d, g, m, { type: 'CallExpression', callee: t, arguments: [] });
    let a = 0,
      k = null,
      h = 0;
    n.destructible = (n.destructible | 256 | 128) ^ 384;
    let T = [];
    for (; n.getToken() !== 16; ) {
      let { tokenIndex: E, tokenLine: w, tokenColumn: I } = n,
        v = n.getToken();
      if (v & 143360)
        y && d2(n, e, y, n.tokenValue, i, 0),
          (v & 537079808) === 537079808
            ? (n.flags |= 512)
            : (v & 36864) === 36864 && (n.flags |= 256),
          (k = _(n, e, u, i, 0, 1, 1, 1, E, w, I)),
          n.getToken() === 16 || n.getToken() === 18
            ? n.assignable & 2 && ((a |= 16), (h = 1))
            : (n.getToken() === 1077936155 ? (h = 1) : (a |= 16),
              (k = O(n, e, u, k, 1, 0, E, w, I)),
              n.getToken() !== 16 && n.getToken() !== 18 && (k = J(n, e, u, 1, 0, E, w, I, k)));
      else if (v & 2097152)
        (k =
          v === 2162700
            ? Z(n, e, y, u, 0, 1, 0, i, l, E, w, I)
            : Q(n, e, y, u, 0, 1, 0, i, l, E, w, I)),
          (a |= n.destructible),
          (h = 1),
          n.getToken() !== 16 &&
            n.getToken() !== 18 &&
            (a & 8 && c(n, 122),
            (k = O(n, e, u, k, 0, 0, E, w, I)),
            (a |= 16),
            (n.getToken() & 8388608) === 8388608 && (k = l2(n, e, u, 1, d, g, m, 4, v, k)),
            P(n, e | 8192, 22) && (k = c2(n, e, u, k, d, g, m)));
      else if (v === 14)
        (k = b2(n, e, y, u, 16, i, l, 1, 1, 0, E, w, I)),
          (a |= (n.getToken() === 16 ? 0 : 16) | n.destructible),
          (h = 1);
      else {
        for (k = M(n, e, u, 1, 0, E, w, I), a = n.assignable, T.push(k); P(n, e | 8192, 18); )
          T.push(M(n, e, u, 1, 0, E, w, I));
        return (
          (a |= n.assignable),
          C(n, e, 16),
          (n.destructible = a | 16),
          (n.assignable = 2),
          s(n, e, d, g, m, { type: 'CallExpression', callee: t, arguments: T })
        );
      }
      if ((T.push(k), !P(n, e | 8192, 18))) break;
    }
    return (
      C(n, e, 16),
      (a |= n.destructible & 256 ? 256 : 0 | (n.destructible & 128) ? 128 : 0),
      n.getToken() === 10
        ? (a & 48 && c(n, 27),
          (n.flags & 1 || f & 1) && c(n, 48),
          a & 128 && c(n, 31),
          e & 262400 && a & 256 && c(n, 32),
          h && (n.flags |= 128),
          X2(n, e | 524288, y, u, T, o, 1, d, g, m))
        : (a & 64 && c(n, 63),
          a & 8 && c(n, 62),
          (n.assignable = 2),
          s(n, e, d, g, m, { type: 'CallExpression', callee: t, arguments: T }))
    );
  }
  function t1(n, e, u, t, o) {
    let { tokenRaw: i, tokenRegExp: l, tokenValue: f } = n;
    return (
      b(n, e),
      (n.assignable = 2),
      e & 128
        ? s(n, e, u, t, o, { type: 'Literal', value: f, regex: l, raw: i })
        : s(n, e, u, t, o, { type: 'Literal', value: f, regex: l })
    );
  }
  function un(n, e, u, t, o, i, l, f) {
    let d = Y2(n, e, t);
    d.length && ((i = n.tokenIndex), (l = n.tokenLine), (f = n.tokenColumn)),
      n.leadingDecorators.length &&
        (n.leadingDecorators.push(...d), (d = n.leadingDecorators), (n.leadingDecorators = [])),
      (e = (e | 4194304 | 256) ^ 4194304),
      b(n, e);
    let g = null,
      m = null,
      { tokenValue: y } = n;
    n.getToken() & 4096 && n.getToken() !== 20565
      ? (Wn(n, e, n.getToken()) && c(n, 118),
        (n.getToken() & 537079808) === 537079808 && c(n, 119),
        u && (d2(n, e, u, y, 32, 0), o && o & 2 && g2(n, y)),
        (g = R(n, e)))
      : (o & 1) === 0 && c(n, 39, 'Class');
    let a = e;
    P(n, e | 8192, 20565)
      ? ((m = Y(n, e, t, 0, 0, 0, n.tokenIndex, n.tokenLine, n.tokenColumn)), (a |= 131072))
      : (a = (a | 131072) ^ 131072);
    let k = fe(n, a, e, u, t, 2, 8, 0);
    return s(n, e, i, l, f, {
      type: 'ClassDeclaration',
      id: g,
      superClass: m,
      body: k,
      ...(e & 1 ? { decorators: d } : null),
    });
  }
  function i1(n, e, u, t, o, i, l) {
    let f = null,
      d = null,
      g = Y2(n, e, u);
    g.length && ((o = n.tokenIndex), (i = n.tokenLine), (l = n.tokenColumn)),
      (e = (e | 256 | 4194304) ^ 4194304),
      b(n, e),
      n.getToken() & 4096 &&
        n.getToken() !== 20565 &&
        (Wn(n, e, n.getToken()) && c(n, 118),
        (n.getToken() & 537079808) === 537079808 && c(n, 119),
        (f = R(n, e)));
    let m = e;
    P(n, e | 8192, 20565)
      ? ((d = Y(n, e, u, 0, t, 0, n.tokenIndex, n.tokenLine, n.tokenColumn)), (m |= 131072))
      : (m = (m | 131072) ^ 131072);
    let y = fe(n, m, e, void 0, u, 2, 0, t);
    return (
      (n.assignable = 2),
      s(n, e, o, i, l, {
        type: 'ClassExpression',
        id: f,
        superClass: d,
        body: y,
        ...(e & 1 ? { decorators: g } : null),
      })
    );
  }
  function Y2(n, e, u) {
    let t = [];
    if (e & 1)
      for (; n.getToken() === 132; ) t.push(o1(n, e, u, n.tokenIndex, n.tokenLine, n.tokenColumn));
    return t;
  }
  function o1(n, e, u, t, o, i) {
    b(n, e | 8192);
    let l = _(n, e, u, 2, 0, 1, 0, 1, t, o, i);
    return (
      (l = O(n, e, u, l, 0, 0, t, o, i)), s(n, e, t, o, i, { type: 'Decorator', expression: l })
    );
  }
  function fe(n, e, u, t, o, i, l, f) {
    let { tokenIndex: d, tokenLine: g, tokenColumn: m } = n,
      y = e & 16 ? iu(o) : void 0;
    C(n, e | 8192, 2162700);
    let a = 301989888;
    e = (e | a) ^ a;
    let k = n.flags & 32;
    n.flags = (n.flags | 32) ^ 32;
    let h = [],
      T;
    for (; n.getToken() !== 1074790415; ) {
      let E = 0;
      if (
        ((T = Y2(n, e, y)),
        (E = T.length),
        E > 0 && n.tokenValue === 'constructor' && c(n, 109),
        n.getToken() === 1074790415 && c(n, 108),
        P(n, e, 1074790417))
      ) {
        E > 0 && c(n, 120);
        continue;
      }
      h.push(de(n, e, t, y, u, i, T, 0, f, n.tokenIndex, n.tokenLine, n.tokenColumn));
    }
    return (
      C(n, l & 8 ? e | 8192 : e, 1074790415),
      y && fu(y),
      (n.flags = (n.flags & -33) | k),
      s(n, e, d, g, m, { type: 'ClassBody', body: h })
    );
  }
  function de(n, e, u, t, o, i, l, f, d, g, m, y) {
    let a = f ? 32 : 0,
      k = null,
      { tokenIndex: h, tokenLine: T, tokenColumn: E } = n,
      w = n.getToken();
    if (w & 176128 || w === -2147483528)
      switch (((k = R(n, e)), w)) {
        case 36970:
          if (
            !f &&
            n.getToken() !== 67174411 &&
            (n.getToken() & 1048576) !== 1048576 &&
            n.getToken() !== 1077936155
          )
            return de(n, e, u, t, o, i, l, 1, d, g, m, y);
          break;
        case 209005:
          if (n.getToken() !== 67174411 && (n.flags & 1) === 0) {
            if ((n.getToken() & 1073741824) === 1073741824) return T2(n, e, t, k, a, l, h, T, E);
            a |= 16 | (dn(n, e, 8391476) ? 8 : 0);
          }
          break;
        case 12400:
          if (n.getToken() !== 67174411) {
            if ((n.getToken() & 1073741824) === 1073741824) return T2(n, e, t, k, a, l, h, T, E);
            a |= 256;
          }
          break;
        case 12401:
          if (n.getToken() !== 67174411) {
            if ((n.getToken() & 1073741824) === 1073741824) return T2(n, e, t, k, a, l, h, T, E);
            a |= 512;
          }
          break;
        case 12402:
          if (n.getToken() !== 67174411 && (n.flags & 1) === 0) {
            if ((n.getToken() & 1073741824) === 1073741824) return T2(n, e, t, k, a, l, h, T, E);
            e & 1 && (a |= 1024);
          }
          break;
      }
    else if (w === 69271571) (a |= 2), (k = y2(n, o, t, d));
    else if ((w & 134217728) === 134217728) k = H(n, e);
    else if (w === 8391476) (a |= 8), b(n, e);
    else if (n.getToken() === 130) (a |= 8192), (k = H2(n, e | 4096, t, 768, h, T, E));
    else if ((n.getToken() & 1073741824) === 1073741824) a |= 128;
    else {
      if (f && w === 2162700) return Su(n, e | 4096, u, t, h, T, E);
      w === -2147483527
        ? ((k = R(n, e)), n.getToken() !== 67174411 && c(n, 30, V[n.getToken() & 255]))
        : c(n, 30, V[n.getToken() & 255]);
    }
    if (
      (a & 1816 &&
        (n.getToken() & 143360 || n.getToken() === -2147483528 || n.getToken() === -2147483527
          ? (k = R(n, e))
          : (n.getToken() & 134217728) === 134217728
            ? (k = H(n, e))
            : n.getToken() === 69271571
              ? ((a |= 2), (k = y2(n, e, t, 0)))
              : n.getToken() === 130
                ? ((a |= 8192), (k = H2(n, e, t, a, h, T, E)))
                : c(n, 135)),
      (a & 2) === 0 &&
        (n.tokenValue === 'constructor'
          ? ((n.getToken() & 1073741824) === 1073741824
              ? c(n, 129)
              : (a & 32) === 0 &&
                n.getToken() === 67174411 &&
                (a & 920
                  ? c(n, 53, 'accessor')
                  : (e & 131072) === 0 && (n.flags & 32 ? c(n, 54) : (n.flags |= 32))),
            (a |= 64))
          : (a & 8192) === 0 && a & 32 && n.tokenValue === 'prototype' && c(n, 52)),
      a & 1024 || (n.getToken() !== 67174411 && (a & 768) === 0))
    )
      return T2(n, e, t, k, a, l, h, T, E);
    let I = x(n, e | 4096, t, a, d, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return s(n, e, g, m, y, {
      type: 'MethodDefinition',
      kind: (a & 32) === 0 && a & 64 ? 'constructor' : a & 256 ? 'get' : a & 512 ? 'set' : 'method',
      static: (a & 32) > 0,
      computed: (a & 2) > 0,
      key: k,
      value: I,
      ...(e & 1 ? { decorators: l } : null),
    });
  }
  function H2(n, e, u, t, o, i, l) {
    b(n, e);
    let { tokenValue: f } = n;
    return (
      f === 'constructor' && c(n, 128),
      e & 16 && (u || c(n, 4, f), t ? ou(n, u, f, t) : lu(n, u, f)),
      b(n, e),
      s(n, e, o, i, l, { type: 'PrivateIdentifier', name: f })
    );
  }
  function T2(n, e, u, t, o, i, l, f, d) {
    let g = null;
    if ((o & 8 && c(n, 0), n.getToken() === 1077936155)) {
      b(n, e | 8192);
      let { tokenIndex: m, tokenLine: y, tokenColumn: a } = n;
      n.getToken() === 537079927 && c(n, 119);
      let k = 2883584 | ((o & 64) === 0 ? 4325376 : 0);
      (e =
        ((e | k) ^ k) |
        (o & 8 ? 262144 : 0) |
        (o & 16 ? 524288 : 0) |
        (o & 64 ? 4194304 : 0) |
        65536 |
        16777216),
        (g = _(n, e | 4096, u, 2, 0, 1, 0, 1, m, y, a)),
        ((n.getToken() & 1073741824) !== 1073741824 || (n.getToken() & 4194304) === 4194304) &&
          ((g = O(n, e | 4096, u, g, 0, 0, m, y, a)), (g = J(n, e | 4096, u, 0, 0, m, y, a, g)));
    }
    return (
      K(n, e),
      s(n, e, l, f, d, {
        type: o & 1024 ? 'AccessorProperty' : 'PropertyDefinition',
        key: t,
        value: g,
        static: (o & 32) > 0,
        computed: (o & 2) > 0,
        ...(e & 1 ? { decorators: i } : null),
      })
    );
  }
  function ge(n, e, u, t, o, i, l, f, d) {
    if (n.getToken() & 143360 || ((e & 256) === 0 && n.getToken() === -2147483527))
      return An(n, e, u, o, i, l, f, d);
    (n.getToken() & 2097152) !== 2097152 && c(n, 30, V[n.getToken() & 255]);
    let g =
      n.getToken() === 69271571
        ? Q(n, e, u, t, 1, 0, 1, o, i, l, f, d)
        : Z(n, e, u, t, 1, 0, 1, o, i, l, f, d);
    return n.destructible & 16 && c(n, 50), n.destructible & 32 && c(n, 50), g;
  }
  function An(n, e, u, t, o, i, l, f) {
    let { tokenValue: d } = n,
      g = n.getToken();
    return (
      e & 256 &&
        ((g & 537079808) === 537079808
          ? c(n, 119)
          : ((g & 36864) === 36864 || g === -2147483527) && c(n, 118)),
      (g & 20480) === 20480 && c(n, 102),
      g === 241771 && (e & 262144 && c(n, 32), e & 512 && c(n, 111)),
      (g & 255) === 73 && t & 24 && c(n, 100),
      g === 209006 && (e & 524288 && c(n, 176), e & 512 && c(n, 110)),
      b(n, e),
      u && n2(n, e, u, d, t, o),
      s(n, e, i, l, f, { type: 'Identifier', name: d })
    );
  }
  function Q2(n, e, u, t, o, i, l) {
    if ((t || C(n, e, 8456256), n.getToken() === 8390721)) {
      let m = l1(n, e, o, i, l),
        [y, a] = c1(n, e, u, t);
      return s(n, e, o, i, l, {
        type: 'JSXFragment',
        openingFragment: m,
        children: y,
        closingFragment: a,
      });
    }
    n.getToken() === 8457014 && c(n, 30, V[n.getToken() & 255]);
    let f = null,
      d = [],
      g = a1(n, e, u, t, o, i, l);
    if (!g.selfClosing) {
      [d, f] = g1(n, e, u, t);
      let m = j2(f.name);
      j2(g.name) !== m && c(n, 155, m);
    }
    return s(n, e, o, i, l, {
      type: 'JSXElement',
      children: d,
      openingElement: g,
      closingElement: f,
    });
  }
  function l1(n, e, u, t, o) {
    return w2(n, e), s(n, e, u, t, o, { type: 'JSXOpeningFragment' });
  }
  function f1(n, e, u, t, o, i) {
    C(n, e, 8457014);
    let l = me(n, e, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return (
      n.getToken() !== 8390721 && c(n, 25, V[65]),
      u ? w2(n, e) : b(n, e),
      s(n, e, t, o, i, { type: 'JSXClosingElement', name: l })
    );
  }
  function d1(n, e, u, t, o, i) {
    return (
      C(n, e, 8457014),
      n.getToken() !== 8390721 && c(n, 25, V[65]),
      u ? w2(n, e) : b(n, e),
      s(n, e, t, o, i, { type: 'JSXClosingFragment' })
    );
  }
  function g1(n, e, u, t) {
    let o = [];
    for (;;) {
      let i = m1(n, e, u, t, n.tokenIndex, n.tokenLine, n.tokenColumn);
      if (i.type === 'JSXClosingElement') return [o, i];
      o.push(i);
    }
  }
  function c1(n, e, u, t) {
    let o = [];
    for (;;) {
      let i = k1(n, e, u, t, n.tokenIndex, n.tokenLine, n.tokenColumn);
      if (i.type === 'JSXClosingFragment') return [o, i];
      o.push(i);
    }
  }
  function m1(n, e, u, t, o, i, l) {
    if (n.getToken() === 137) return ce(n, e, o, i, l);
    if (n.getToken() === 2162700) return bn(n, e, u, 1, 0, o, i, l);
    if (n.getToken() === 8456256)
      return b(n, e), n.getToken() === 8457014 ? f1(n, e, t, o, i, l) : Q2(n, e, u, 1, o, i, l);
    c(n, 0);
  }
  function k1(n, e, u, t, o, i, l) {
    if (n.getToken() === 137) return ce(n, e, o, i, l);
    if (n.getToken() === 2162700) return bn(n, e, u, 1, 0, o, i, l);
    if (n.getToken() === 8456256)
      return b(n, e), n.getToken() === 8457014 ? d1(n, e, t, o, i, l) : Q2(n, e, u, 1, o, i, l);
    c(n, 0);
  }
  function ce(n, e, u, t, o) {
    b(n, e);
    let i = { type: 'JSXText', value: n.tokenValue };
    return e & 128 && (i.raw = n.tokenRaw), s(n, e, u, t, o, i);
  }
  function a1(n, e, u, t, o, i, l) {
    (n.getToken() & 143360) !== 143360 && (n.getToken() & 4096) !== 4096 && c(n, 0);
    let f = me(n, e, n.tokenIndex, n.tokenLine, n.tokenColumn),
      d = s1(n, e, u),
      g = n.getToken() === 8457014;
    return (
      g && C(n, e, 8457014),
      n.getToken() !== 8390721 && c(n, 25, V[65]),
      t || !g ? w2(n, e) : b(n, e),
      s(n, e, o, i, l, { type: 'JSXOpeningElement', name: f, attributes: d, selfClosing: g })
    );
  }
  function me(n, e, u, t, o) {
    r2(n);
    let i = Z2(n, e, u, t, o);
    if (n.getToken() === 21) return ke(n, e, i, u, t, o);
    for (; P(n, e, 67108877); ) r2(n), (i = y1(n, e, i, u, t, o));
    return i;
  }
  function y1(n, e, u, t, o, i) {
    let l = Z2(n, e, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return s(n, e, t, o, i, { type: 'JSXMemberExpression', object: u, property: l });
  }
  function s1(n, e, u) {
    let t = [];
    for (; n.getToken() !== 8457014 && n.getToken() !== 8390721 && n.getToken() !== 1048576; )
      t.push(A1(n, e, u, n.tokenIndex, n.tokenLine, n.tokenColumn));
    return t;
  }
  function h1(n, e, u, t, o, i) {
    b(n, e), C(n, e, 14);
    let l = M(n, e, u, 1, 0, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return C(n, e, 1074790415), s(n, e, t, o, i, { type: 'JSXSpreadAttribute', argument: l });
  }
  function A1(n, e, u, t, o, i) {
    if (n.getToken() === 2162700) return h1(n, e, u, t, o, i);
    r2(n);
    let l = null,
      f = Z2(n, e, t, o, i);
    if ((n.getToken() === 21 && (f = ke(n, e, f, t, o, i)), n.getToken() === 1077936155)) {
      let d = nu(n, e),
        { tokenIndex: g, tokenLine: m, tokenColumn: y } = n;
      switch (d) {
        case 134283267:
          l = H(n, e);
          break;
        case 8456256:
          l = Q2(n, e, u, 0, g, m, y);
          break;
        case 2162700:
          l = bn(n, e, u, 0, 1, g, m, y);
          break;
        default:
          c(n, 154);
      }
    }
    return s(n, e, t, o, i, { type: 'JSXAttribute', value: l, name: f });
  }
  function ke(n, e, u, t, o, i) {
    C(n, e, 21);
    let l = Z2(n, e, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return s(n, e, t, o, i, { type: 'JSXNamespacedName', namespace: u, name: l });
  }
  function bn(n, e, u, t, o, i, l, f) {
    b(n, e | 8192);
    let { tokenIndex: d, tokenLine: g, tokenColumn: m } = n;
    if (n.getToken() === 14) return b1(n, e, u, i, l, f);
    let y = null;
    return (
      n.getToken() === 1074790415
        ? (o && c(n, 157), (y = D1(n, e, n.startIndex, n.startLine, n.startColumn)))
        : (y = M(n, e, u, 1, 0, d, g, m)),
      n.getToken() !== 1074790415 && c(n, 25, V[15]),
      t ? w2(n, e) : b(n, e),
      s(n, e, i, l, f, { type: 'JSXExpressionContainer', expression: y })
    );
  }
  function b1(n, e, u, t, o, i) {
    C(n, e, 14);
    let l = M(n, e, u, 1, 0, n.tokenIndex, n.tokenLine, n.tokenColumn);
    return C(n, e, 1074790415), s(n, e, t, o, i, { type: 'JSXSpreadChild', expression: l });
  }
  function D1(n, e, u, t, o) {
    return (
      (n.startIndex = n.tokenIndex),
      (n.startLine = n.tokenLine),
      (n.startColumn = n.tokenColumn),
      s(n, e, u, t, o, { type: 'JSXEmptyExpression' })
    );
  }
  function Z2(n, e, u, t, o) {
    n.getToken() & 143360 || c(n, 30, V[n.getToken() & 255]);
    let { tokenValue: i } = n;
    return b(n, e), s(n, e, u, t, o, { type: 'JSXIdentifier', name: i });
  }
  function ae(n, e) {
    return ku(n, e, 0);
  }
  function T1(n, e) {
    let u = new SyntaxError(n + ' (' + e.loc.start.line + ':' + e.loc.start.column + ')');
    return Object.assign(u, e);
  }
  var ye = T1;
  function C1(n) {
    let e = [];
    for (let u of n)
      try {
        return u();
      } catch (t) {
        e.push(t);
      }
    throw Object.assign(new Error('All combinations failed'), { errors: e });
  }
  var se = C1;
  var E1 = (n, e, u) => {
      if (!(n && e == null))
        return Array.isArray(e) || typeof e == 'string' ? e[u < 0 ? e.length + u : u] : e.at(u);
    },
    Dn = E1;
  function w1(n) {
    return Array.isArray(n) && n.length > 0;
  }
  var he = w1;
  function G(n) {
    var t, o, i;
    let e = ((t = n.range) == null ? void 0 : t[0]) ?? n.start,
      u =
        (i = ((o = n.declaration) == null ? void 0 : o.decorators) ?? n.decorators) == null
          ? void 0
          : i[0];
    return u ? Math.min(G(u), e) : e;
  }
  function u2(n) {
    var e;
    return ((e = n.range) == null ? void 0 : e[1]) ?? n.end;
  }
  function B1(n) {
    let e = new Set(n);
    return u => e.has(u == null ? void 0 : u.type);
  }
  var Ae = B1;
  var I1 = Ae(['Block', 'CommentBlock', 'MultiLine']),
    q2 = I1;
  function L1(n) {
    let e = `*${n.value}*`.split(`
`);
    return e.length > 1 && e.every(u => u.trimStart()[0] === '*');
  }
  var Tn = L1;
  function F1(n) {
    return q2(n) && n.value[0] === '*' && /@(?:type|satisfies)\b/u.test(n.value);
  }
  var be = F1;
  var S2 = null;
  function P2(n) {
    if (S2 !== null && typeof S2.property) {
      let e = S2;
      return (S2 = P2.prototype = null), e;
    }
    return (S2 = P2.prototype = n ?? Object.create(null)), new P2();
  }
  var q1 = 10;
  for (let n = 0; n <= q1; n++) P2();
  function Cn(n) {
    return P2(n);
  }
  function S1(n, e = 'type') {
    Cn(n);
    function u(t) {
      let o = t[e],
        i = n[o];
      if (!Array.isArray(i))
        throw Object.assign(new Error(`Missing visitor keys for '${o}'.`), { node: t });
      return i;
    }
    return u;
  }
  var De = S1;
  var Te = {
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
  var P1 = De(Te),
    Ce = P1;
  function En(n, e) {
    if (!(n !== null && typeof n == 'object')) return n;
    if (Array.isArray(n)) {
      for (let t = 0; t < n.length; t++) n[t] = En(n[t], e);
      return n;
    }
    let u = Ce(n);
    for (let t = 0; t < u.length; t++) n[u[t]] = En(n[u[t]], e);
    return e(n) || n;
  }
  var G2 = En;
  function v1(n, e) {
    let { parser: u, text: t } = e;
    if (n.type === 'File' && n.program.interpreter) {
      let {
        program: { interpreter: o },
        comments: i,
      } = n;
      delete n.program.interpreter, i.unshift(o);
    }
    if (u === 'babel') {
      let o = new Set();
      (n = G2(n, i => {
        var l;
        (l = i.leadingComments) != null && l.some(be) && o.add(G(i));
      })),
        (n = G2(n, i => {
          if (i.type === 'ParenthesizedExpression') {
            let { expression: l } = i;
            if (l.type === 'TypeCastExpression') return (l.range = [...i.range]), l;
            let f = G(i);
            if (!o.has(f)) return (l.extra = { ...l.extra, parenthesized: !0 }), l;
          }
        }));
    }
    if (
      ((n = G2(n, o => {
        switch (o.type) {
          case 'LogicalExpression':
            if (Ee(o)) return wn(o);
            break;
          case 'VariableDeclaration': {
            let i = Dn(!1, o.declarations, -1);
            i != null && i.init && t[u2(i)] !== ';' && (o.range = [G(o), u2(i)]);
            break;
          }
          case 'TSParenthesizedType':
            return o.typeAnnotation;
          case 'TSTypeParameter':
            if (typeof o.name == 'string') {
              let i = G(o);
              o.name = { type: 'Identifier', name: o.name, range: [i, i + o.name.length] };
            }
            break;
          case 'TopicReference':
            n.extra = { ...n.extra, __isUsingHackPipeline: !0 };
            break;
          case 'TSUnionType':
          case 'TSIntersectionType':
            if (o.types.length === 1) return o.types[0];
            break;
        }
      })),
      he(n.comments))
    ) {
      let o = Dn(!1, n.comments, -1);
      for (let i = n.comments.length - 2; i >= 0; i--) {
        let l = n.comments[i];
        u2(l) === G(o) &&
          q2(l) &&
          q2(o) &&
          Tn(l) &&
          Tn(o) &&
          (n.comments.splice(i + 1, 1), (l.value += '*//*' + o.value), (l.range = [G(l), u2(o)])),
          (o = l);
      }
    }
    return n.type === 'Program' && (n.range = [0, t.length]), n;
  }
  function Ee(n) {
    return (
      n.type === 'LogicalExpression' &&
      n.right.type === 'LogicalExpression' &&
      n.operator === n.right.operator
    );
  }
  function wn(n) {
    return Ee(n)
      ? wn({
          type: 'LogicalExpression',
          operator: n.operator,
          left: wn({
            type: 'LogicalExpression',
            operator: n.operator,
            left: n.left,
            right: n.right.left,
            range: [G(n.left), u2(n.right.left)],
          }),
          right: n.right.right,
          range: [G(n), u2(n)],
        })
      : n;
  }
  var we = v1;
  var N1 = /\*\/$/,
    V1 = /^\/\*\*?/,
    O1 = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
    R1 = /(^|\s+)\/\/([^\n\r]*)/g,
    Be = /^(\r?\n)+/,
    U1 = /(?:^|\r?\n) *(@[^\n\r]*?) *\r?\n *(?![^\n\r@]*\/\/[^]*)([^\s@][^\n\r@]+?) *\r?\n/g,
    Ie = /(?:^|\r?\n) *@(\S+) *([^\n\r]*)/g,
    M1 = /(\r?\n|^) *\* ?/g,
    J1 = [];
  function Le(n) {
    let e = n.match(O1);
    return e ? e[0].trimStart() : '';
  }
  function Fe(n) {
    let e = `
`;
    n = i2(!1, n.replace(V1, '').replace(N1, ''), M1, '$1');
    let u = '';
    for (; u !== n; ) (u = n), (n = i2(!1, n, U1, `${e}$1 $2${e}`));
    n = n.replace(Be, '').trimEnd();
    let t = Object.create(null),
      o = i2(!1, n, Ie, '').replace(Be, '').trimEnd(),
      i;
    for (; (i = Ie.exec(n)); ) {
      let l = i2(!1, i[2], R1, '');
      if (typeof t[i[1]] == 'string' || Array.isArray(t[i[1]])) {
        let f = t[i[1]];
        t[i[1]] = [...J1, ...(Array.isArray(f) ? f : [f]), l];
      } else t[i[1]] = l;
    }
    return { comments: o, pragmas: t };
  }
  function j1(n) {
    if (!n.startsWith('#!')) return '';
    let e = n.indexOf(`
`);
    return e === -1 ? n : n.slice(0, e);
  }
  var qe = j1;
  function X1(n) {
    let e = qe(n);
    e && (n = n.slice(e.length + 1));
    let u = Le(n),
      { pragmas: t, comments: o } = Fe(u);
    return { shebang: e, text: n, pragmas: t, comments: o };
  }
  function Se(n) {
    let { pragmas: e } = X1(n);
    return (
      Object.prototype.hasOwnProperty.call(e, 'prettier') ||
      Object.prototype.hasOwnProperty.call(e, 'format')
    );
  }
  function H1(n) {
    return (
      (n = typeof n == 'function' ? { parse: n } : n),
      { astFormat: 'estree', hasPragma: Se, locStart: G, locEnd: u2, ...n }
    );
  }
  var Pe = H1;
  function z1(n) {
    let { filepath: e } = n;
    if (e) {
      if (((e = e.toLowerCase()), e.endsWith('.cjs') || e.endsWith('.cts'))) return 'script';
      if (e.endsWith('.mjs') || e.endsWith('.mts')) return 'module';
    }
  }
  var ve = z1;
  var K1 = {
    next: !0,
    ranges: !0,
    webcompat: !0,
    loc: !0,
    raw: !0,
    directives: !0,
    globalReturn: !0,
    impliedStrict: !1,
    preserveParens: !1,
    lexical: !1,
    jsx: !0,
    uniqueKeyInPattern: !1,
  };
  function $1(n, e) {
    let u = [],
      t = [],
      o = ae(n, { ...K1, module: e === 'module', onComment: u, onToken: t });
    return (o.comments = u), (o.tokens = t), o;
  }
  function W1(n) {
    let { message: e, loc: u } = n;
    if (!u) return n;
    let t = `[${[u.start, u.end].map(({ line: o, column: i }) => [o, i].join(':')).join('-')}]: `;
    return (
      e.startsWith(t) && (e = e.slice(t.length)),
      ye(e, {
        loc: {
          start: { line: u.start.line, column: u.start.column + 1 },
          end: { line: u.end.line, column: u.end.column + 1 },
        },
        cause: n,
      })
    );
  }
  function _1(n, e = {}) {
    let u = ve(e),
      t = (u ? [u] : ['module', 'script']).map(i => () => $1(n, i)),
      o;
    try {
      o = se(t);
    } catch ({ errors: [i] }) {
      throw W1(i);
    }
    return we(o, { parser: 'meriyah', text: n });
  }
  var Y1 = Pe(_1);
  return Ue(Q1);
});
