'use strict';

function importTest(name, path) {
  describe(name, function () {
    require(path);
  });
}

describe('top', function() {
  importTest('Lexer', './Lexer.test');
});
