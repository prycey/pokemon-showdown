'use strict';

// Description of supported double byte encodings and aliases.
// Tables are not require()-d until they are needed to speed up library load.
// require()-s are direct to support Browserify.

module.exports = {
  // == Japanese/ShiftJIS ====================================================
  // All japanese encodings are based on JIS X set of standards:
  // JIS X 0201 - Single-byte encoding of ASCII + ¥ + Kana chars at 0xA1-0xDF.
  // JIS X 0208 - Main set of 6879 characters, placed in 94x94 plane, to be encoded by 2 bytes.
  //              Has several variations in 1978, 1983, 1990 and 1997.
  // JIS X 0212 - Supplementary plane of 6067 chars in 94x94 plane. 1990. Effectively dead.
  // JIS X 0213 - Extension and modern replacement of 0208 and 0212. Total chars: 11233.
  //              2 planes, first is superset of 0208, second - revised 0212.
  //              Introduced in 2000, revised 2004. Some characters are in Unicode Plane 2 (0x2xxxx)

  // Byte encodings are:
  //  * Shift_JIS: Compatible with 0201, uses not defined chars in top half as lead bytes for double-byte
  //               encoding of 0208. Lead byte ranges: 0x81-0x9F, 0xE0-0xEF; Trail byte ranges: 0x40-0x7E, 0x80-0x9E, 0x9F-0xFC.
  //               Windows CP932 is a superset of Shift_JIS. Some companies added more chars, notably KDDI.
  //  * EUC-JP:    Up to 3 bytes per character. Used mostly on *nixes.
  //               0x00-0x7F       - lower part of 0201
  //               0x8E, 0xA1-0xDF - upper part of 0201
  //               (0xA1-0xFE)x2   - 0208 plane (94x94).
  //               0x8F, (0xA1-0xFE)x2 - 0212 plane (94x94).
  //  * JIS X 208: 7-bit, direct encoding of 0208. Byte ranges: 0x21-0x7E (94 values). Uncommon.
  //               Used as-is in ISO2022 family.
  //  * ISO2022-JP: Stateful encoding, with escape sequences to switch between ASCII,
  //                0201-1976 Roman, 0208-1978, 0208-1983.
  //  * ISO2022-JP-1: Adds esc seq for 0212-1990.
  //  * ISO2022-JP-2: Adds esc seq for GB2313-1980, KSX1001-1992, ISO8859-1, ISO8859-7.
  //  * ISO2022-JP-3: Adds esc seq for 0201-1976 Kana set, 0213-2000 Planes 1, 2.
  //  * ISO2022-JP-2004: Adds 0213-2004 Plane 1.
  //
  // After JIS X 0213 appeared, Shift_JIS-2004, EUC-JISX0213 and ISO2022-JP-2004 followed, with just changing the planes.
  //
  // Overall, it seems that it's a mess :( http://www8.plala.or.jp/tkubota1/unicode-symbols-map2.html

  shiftjis: {
    type: '_dbcs',
    table: function () {
      return require('./tables/shiftjis.json');
    },
    encodeAdd: { '\u00a5': 0x5c, '\u203E': 0x7e },
    encodeSkipVals: [{ from: 0xed40, to: 0xf940 }],
  },
  csshiftjis: 'shiftjis',
  mskanji: 'shiftjis',
  sjis: 'shiftjis',
  windows31j: 'shiftjis',
  ms31j: 'shiftjis',
  xsjis: 'shiftjis',
  windows932: 'shiftjis',
  ms932: 'shiftjis',
  932: 'shiftjis',
  cp932: 'shiftjis',

  eucjp: {
    type: '_dbcs',
    table: function () {
      return require('./tables/eucjp.json');
    },
    encodeAdd: { '\u00a5': 0x5c, '\u203E': 0x7e },
  },

  // TODO: KDDI extension to Shift_JIS
  // TODO: IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
  // TODO: IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.

  // == Chinese/GBK ==========================================================
  // http://en.wikipedia.org/wiki/GBK
  // We mostly implement W3C recommendation: https://www.w3.org/TR/encoding/#gbk-encoder

  // Oldest GB2312 (1981, ~7600 chars) is a subset of CP936
  gb2312: 'cp936',
  gb231280: 'cp936',
  gb23121980: 'cp936',
  csgb2312: 'cp936',
  csiso58gb231280: 'cp936',
  euccn: 'cp936',

  // Microsoft's CP936 is a subset and approximation of GBK.
  windows936: 'cp936',
  ms936: 'cp936',
  936: 'cp936',
  cp936: {
    type: '_dbcs',
    table: function () {
      return require('./tables/cp936.json');
    },
  },

  // GBK (~22000 chars) is an extension of CP936 that added user-mapped chars and some other.
  gbk: {
    type: '_dbcs',
    table: function () {
      return require('./tables/cp936.json').concat(require('./tables/gbk-added.json'));
    },
  },
  xgbk: 'gbk',
  isoir58: 'gbk',

  // GB18030 is an algorithmic extension of GBK.
  // Main source: https://www.w3.org/TR/encoding/#gbk-encoder
  // http://icu-project.org/docs/papers/gb18030.html
  // http://source.icu-project.org/repos/icu/data/trunk/charset/data/xml/gb-18030-2000.xml
  // http://www.khngai.com/chinese/charmap/tblgbk.php?page=0
  gb18030: {
    type: '_dbcs',
    table: function () {
      return require('./tables/cp936.json').concat(require('./tables/gbk-added.json'));
    },
    gb18030: function () {
      return require('./tables/gb18030-ranges.json');
    },
    encodeSkipVals: [0x80],
    encodeAdd: { '€': 0xa2e3 },
  },

  chinese: 'gb18030',

  // == Korean ===============================================================
  // EUC-KR, KS_C_5601 and KS X 1001 are exactly the same.
  windows949: 'cp949',
  ms949: 'cp949',
  949: 'cp949',
  cp949: {
    type: '_dbcs',
    table: function () {
      return require('./tables/cp949.json');
    },
  },

  cseuckr: 'cp949',
  csksc56011987: 'cp949',
  euckr: 'cp949',
  isoir149: 'cp949',
  korean: 'cp949',
  ksc56011987: 'cp949',
  ksc56011989: 'cp949',
  ksc5601: 'cp949',

  // == Big5/Taiwan/Hong Kong ================================================
  // There are lots of tables for Big5 and cp950. Please see the following links for history:
  // http://moztw.org/docs/big5/  http://www.haible.de/bruno/charsets/conversion-tables/Big5.html
  // Variations, in roughly number of defined chars:
  //  * Windows CP 950: Microsoft variant of Big5. Canonical: http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT
  //  * Windows CP 951: Microsoft variant of Big5-HKSCS-2001. Seems to be never public. http://me.abelcheung.org/articles/research/what-is-cp951/
  //  * Big5-2003 (Taiwan standard) almost superset of cp950.
  //  * Unicode-at-on (UAO) / Mozilla 1.8. Falling out of use on the Web. Not supported by other browsers.
  //  * Big5-HKSCS (-2001, -2004, -2008). Hong Kong standard.
  //    many unicode code points moved from PUA to Supplementary plane (U+2XXXX) over the years.
  //    Plus, it has 4 combining sequences.
  //    Seems that Mozilla refused to support it for 10 yrs. https://bugzilla.mozilla.org/show_bug.cgi?id=162431 https://bugzilla.mozilla.org/show_bug.cgi?id=310299
  //    because big5-hkscs is the only encoding to include astral characters in non-algorithmic way.
  //    Implementations are not consistent within browsers; sometimes labeled as just big5.
  //    MS Internet Explorer switches from big5 to big5-hkscs when a patch applied.
  //    Great discussion & recap of what's going on https://bugzilla.mozilla.org/show_bug.cgi?id=912470#c31
  //    In the encoder, it might make sense to support encoding old PUA mappings to Big5 bytes seq-s.
  //    Official spec: http://www.ogcio.gov.hk/en/business/tech_promotion/ccli/terms/doc/2003cmp_2008.txt
  //                   http://www.ogcio.gov.hk/tc/business/tech_promotion/ccli/terms/doc/hkscs-2008-big5-iso.txt
  //
  // Current understanding of how to deal with Big5(-HKSCS) is in the Encoding Standard, http://encoding.spec.whatwg.org/#big5-encoder
  // Unicode mapping (http://www.unicode.org/Public/MAPPINGS/OBSOLETE/EASTASIA/OTHER/BIG5.TXT) is said to be wrong.

  windows950: 'cp950',
  ms950: 'cp950',
  950: 'cp950',
  cp950: {
    type: '_dbcs',
    table: function () {
      return require('./tables/cp950.json');
    },
  },

  // Big5 has many variations and is an extension of cp950. We use Encoding Standard's as a consensus.
  big5: 'big5hkscs',
  big5hkscs: {
    type: '_dbcs',
    table: function () {
      return require('./tables/cp950.json').concat(require('./tables/big5-added.json'));
    },
    encodeSkipVals: [0xa2cc],
  },

  cnbig5: 'big5hkscs',
  csbig5: 'big5hkscs',
  xxbig5: 'big5hkscs',
};
