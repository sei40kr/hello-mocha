const assert = require('assert');
const sum = require('../lib/sum');

describe('sum()', () => {
    it('should return 3 when 1, 2 passed', () => {
        assert.equal(sum(1, 2), 3);
    })
});
