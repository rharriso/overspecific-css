'use strict';

import _ from 'lodash';

/*
 * Lexer.js
 * Copyright (C) 2016 rharriso <rharriso@cub3>
 *
 * Distributed under terms of the MIT license.
 */

// match the block contents, and then sets of selectors
// experimenting [here](http://www.regexpal.com/)
const REGEX = /(\{[^\}]+\})|((([^\s\,{]|>)+\s*)+)/igm;

/*
 * Lexer exported as singleton
 * @class 
 */
class Lexer {
  /*
   * parse the passed text into selectors
   * @param {String} css text to parse
   * @returns {array} array of selector
   */
  parse(cssText) {
    var result = [];
    var match;

    while((match = REGEX.exec(cssText))){
      if (match[2]) {
        var selector = _.trim(match[2]).split(/\s+/);
        result.push(selector);
      }
    }
    
    return result;
  }
}

export default new Lexer();