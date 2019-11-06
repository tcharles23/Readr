const mocha = require('mocha');
const { expect } = require('chai');

module.exports = () => {
  mocha.describe('Something', () => {
    mocha.it('It does something', () => {
      expect(1).to.eql(1);
    });
  });
};
