'use strict';
const stripAnsi = require('strip-ansi');
const isFullwidthCodePoint = require('is-fullwidth-code-point');
const emojiRegex = require('emoji-regex');

const stringWidth = string => {
  if (typeof string !== 'string' || string.length === 0) {
    return 0;
  }

  string = stripAnsi(string);

  if (string.length === 0) {
    return 0;
  }

  string = string.replace(emojiRegex(), '  ');

  let width = 0;

  for (let i = 0; i < string.length; i++) {
    const code = string.codePointAt(i);

    // Ignore control characters
    if (code <= 0x1f || (code >= 0x7f && code <= 0x9f)) {
      continue;
    }

    // Ignore combining characters
    if (code >= 0x300 && code <= 0x36f) {
      continue;
    }

    // Surrogates
    if (code > 0xffff) {
      i++;
    }

    width += isFullwidthCodePoint(code) ? 2 : 1;
  }

  return width;
};

module.exports = stringWidth;
// TODO: remove this in the next major version
module.exports.default = stringWidth;
