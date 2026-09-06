class BitWriter {

    constructor() {
        this.bytes = [];

        // Stores bits that haven't formed a complete byte yet
        this.currentByte = 0;

        // Number of bits currently stored
        this.bitCount = 0;
    }

    writeBit(bit) {

        if (bit !== 0 && bit !== 1) {
            throw new Error("Bit must be 0 or 1");
        }

        // Shift existing bits left
        this.currentByte =
            (this.currentByte << 1) | bit;

        this.bitCount++;

        // Once we have 8 bits, store the byte
        if (this.bitCount === 8) {

            this.bytes.push(this.currentByte);

            this.currentByte = 0;
            this.bitCount = 0;
        }
    }

    writeBits(bits) {

        for (const bit of bits) {
            this.writeBit(Number(bit));
        }
    }

flush() {

    if (this.bitCount === 0) {
        return 0;
    }

    const validBits = this.bitCount;

    this.currentByte =
        this.currentByte << (8 - this.bitCount);

    this.bytes.push(this.currentByte);

    this.currentByte = 0;
    this.bitCount = 0;

    return validBits;
}

   getBytes() {

    const validBits = this.flush();

    return {
        buffer: Buffer.from(this.bytes),
        validBits: validBits === 0 ? 8 : validBits
    };
}
}

module.exports = BitWriter;