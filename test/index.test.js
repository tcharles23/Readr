const mocha = require('mocha');
const serverTest = require('./server/server.test');
const clientTest = require('./client/client.test');

mocha.describe('Readr', () => {
  mocha.it('Server', () => {
    serverTest();
  });
  mocha.it('Client', () => {
    clientTest();
  });
});
