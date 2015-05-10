var test = require('tape');
var Chord = require('..');

test('basics', function (t) {
    t.plan(1);

    var chord = new Chord('C3');
    var expected = [{ letter: 'C', modifier: null, octave: 3 }, { letter: 'E', modifier: null, octave: 3 }, { letter: 'G', modifier: null, octave: 3 }];
    t.deepEqual(expected, chord.major(), 'Major chord should equal');
});
