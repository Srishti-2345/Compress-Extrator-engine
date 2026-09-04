const HuffmanNode = require("./HuffmanNode");
const MinHeap = require("./MinHeap");

class HuffmanTree {

    build(frequencyMap) {

        const heap = new MinHeap();

        // Create a node for every character
        for (const [character, frequency] of frequencyMap) {
            const node = new HuffmanNode(character, frequency);
            heap.insert(node);
        }

        // Special case: empty input
        if (heap.size() === 0) {
            return null;
        }

        // Special case: only one unique character
        if (heap.size() === 1) {
            return heap.extractMin();
        }

        // Build the tree
        while (heap.size() > 1) {

            const left = heap.extractMin();
            const right = heap.extractMin();

            const parent = new HuffmanNode(
                null,
                left.frequency + right.frequency
            );

            parent.left = left;
            parent.right = right;

            heap.insert(parent);
        }

        // Remaining node is the root
        return heap.extractMin();
    }
}

module.exports = HuffmanTree;