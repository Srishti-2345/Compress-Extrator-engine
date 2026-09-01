class HuffmanNode {
    constructor(character, frequency) {
        this.character = character;
        this.frequency = frequency;

        this.left = null;
        this.right = null;
    }
}

module.exports = HuffmanNode;