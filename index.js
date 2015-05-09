var Note = require('octavian').Note;

function Chord(n) {
    this.root = new Note(n);
}

Chord.prototype.major = function major() {
    return [this.root, this.root.majorThird(), this.root.perfectFifth()];
};

Chord.prototype.minor = function minor() {
    return [this.root, this.root.minorThird(), this.root.perfectFifth()];
};

module.exports = Chord;
