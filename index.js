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

Chord.prototype.major7th = function major7th() {
    return this.major().push(this.root.majorSeventh());
};

Chord.prototype.minor7th = function minor7th() {
    return this.minor().push(this.root.minorSeventh());
};

module.exports = Chord;
