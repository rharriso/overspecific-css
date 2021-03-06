import assert from 'assert';
import { expect } from 'chai';
import _ from 'lodash';

import Lexer from '../src/Lexer'
import fs from 'fs'


function runCase (testCase) {
  describe('Lexer', () => {
    describe(`#parse ${testCase.name}`, () => {
      it(testCase.name, (done) => {
        const fixtureFile = './test/fixtures/Lexer/'+testCase.file;

        fs.readFile(fixtureFile, 'utf8', function (err,data) {
          if (err) {
            done(err);
          }

          var result = Lexer.parse(data.toString());
          expect(result).to.deep.equal(testCase.result);
          done();
        });
      });
    });
  });
}

const testCases = [
  {
    name: "Empty css file",
    file: "empty.css",
    result: []
  },
  {
    name: "Simple Selctor",
    file: "simple-selector.css",
    result: [['.class-one']]
  },
  {
    name: "Single Selctor",
    file: "single-selector.css",
    result: [['.class-one', '.class-two']]
  }

];

testCases.map(runCase);
