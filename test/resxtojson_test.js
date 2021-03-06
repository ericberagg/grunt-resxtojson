'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.resxtojson = {
  setUp: function(done) {
    done();
  },

  transform: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/transform/Resources.js');
    var expected = grunt.file.read('test/expected/transform/Resources.js');
    test.equal(actual, expected);

    actual = grunt.file.read('tmp/transform/Resources.nl-NL.js');
    expected = grunt.file.read('test/expected/transform/Resources.nl-NL.js');
    test.equal(actual, expected);

    test.done();
  },

  transformMatch: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/transformMatch/Resources.js');
    var expected = grunt.file.read('test/expected/transformMatch/Resources.js');
    test.equal(actual, expected);

    actual = grunt.file.read('tmp/transformMatch/Resources.nl-NL.js');
    expected = grunt.file.read('test/expected/transformMatch/Resources.nl-NL.js');
    test.equal(actual, expected);

    test.done();
  }
};