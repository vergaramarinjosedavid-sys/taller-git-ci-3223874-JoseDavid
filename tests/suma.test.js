const test = require('node:test');
const assert = require('node:assert');
const { suma } = require('../src/app');

test('la función suma debe funcionar correctamente', () => {
  assert.strictEqual(suma(2, 2), 4);
  assert.strictEqual(suma(5, 3), 8);
  assert.strictEqual(suma(0, 0), 0);
});
