const FrequencyCounter = require("./huffman/FrequencyCounter");

const text = "AAABBC";

const frequency = FrequencyCounter.count(text);

console.log(frequency);