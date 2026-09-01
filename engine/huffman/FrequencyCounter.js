class FrequencyCounter {

    static count(text) {

        const frequencyMap = new Map();

        for (const char of text) {

            if (frequencyMap.has(char)) {
                frequencyMap.set(
                    char,
                    frequencyMap.get(char) + 1
                );
            } else {
                frequencyMap.set(char, 1);
            }
        }

        return frequencyMap;
    }
}

module.exports = FrequencyCounter;