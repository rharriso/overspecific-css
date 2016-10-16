'use strict';

import assert from 'assert';
import _ from 'lodash';

import Lexer from '../src/Lexer'

describe('Lexer', () => { 
  describe('#parse(cssText)', () => { 
    it('should return an empty array with passed and empty string', () => {
      const result = Lexer.parse('');
      assert(_.isArray(result));
      assert(_.isEmpty(result));
    });
    
    it('should return one')
    
    it('should return multiple selectors')
  });
});

