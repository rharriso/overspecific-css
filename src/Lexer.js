'use strict';

import _ from 'lodash';
import css from 'css';


/*
 * Lexer.js
 * Copyright (C) 2016 rharriso <rharriso@cub3>
 *
 * Distributed under terms of the MIT license.
 */

// match selector components, with and without parens
// experimenting [here](http://www.regexpal.com/)
const SELECTOR_SPLITTER = /(([^\s]+)(\([^\)]+\))|([^\s]+))/igm;

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
    let obj = css.parse(cssText, {silent: true});
    let selectors = _.flatten(_.map(obj.stylesheet.rules, 'selectors'));
    return _.map(selectors, (selector) => {
      return selector.match(SELECTOR_SPLITTER);
    });
  }
}

export default new Lexer();
