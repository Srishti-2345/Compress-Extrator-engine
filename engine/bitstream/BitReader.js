class BitReader {

    constructor(buffer, validBits) {

        this.buffer = buffer;

        this.validBits =
            validBits === 0 ? 8 : validBits;

        this.byteIndex = 0;
        this.bitIndex = 0;
    }

    readBit() {

        // No more bytes
        if (this.byteIndex >= this.buffer.length) {
            return null;
        }

        // If we're in the final byte,
        // don't read padding bits.
        if (
            this.byteIndex === this.buffer.length - 1 &&
            this.bitIndex >= this.validBits
        ) {
            return null;
        }

        const currentByte =
            this.buffer[this.byteIndex];

        // Read from left to right
        const bit =
            (currentByte >> (7 - this.bitIndex)) & 1;

        this.bitIndex++;

        // Move to next byte
        if (this.bitIndex === 8) {

            this.bitIndex = 0;
            this.byteIndex++;
        }

        return bit;
    }

    readAllBits() {

        const bits = [];

        let bit;

        while ((bit = this.readBit()) !== null) {
            bits.push(bit);
        }

        return bits;
    }
}

module.exports = BitReader;