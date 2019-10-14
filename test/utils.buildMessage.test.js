const assert = require('assert');

const buildMessage = require('../utils/schemas/buildMessage');

describe('utils - buildMessage', () => {
  describe('when receives an entity and an action', () => {
    it('should return the respective message', () => {
      const result = buildMessage('movie', 'create');
      const expect = 'movie created';
      assert.strictEqual(result, expect);
    });
  });
  describe('when it recieves an entinty and an action and it is a list', () => {
    it('should return the respective message with the entity in plural', () => {
      const result = buildMessage('movie', 'list');
      const expected = 'movies listed';
      assert.strictEqual(result, expected);
    });
  });
});
