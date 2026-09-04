class MinHeap {

    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    insert(node) {

        this.heap.push(node);

        let index = this.heap.length - 1;

        while (index > 0) {

            const parentIndex = Math.floor((index - 1) / 2);

            if (
                this.heap[parentIndex].frequency <=
                this.heap[index].frequency
            ) {
                break;
            }

            this.swap(parentIndex, index);

            index = parentIndex;
        }
    }

    extractMin() {

        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];

        this.heap[0] = this.heap.pop();

        let index = 0;

        while (true) {

            const left = 2 * index + 1;
            const right = 2 * index + 2;

            let smallest = index;

            if (
                left < this.heap.length &&
                this.heap[left].frequency <
                this.heap[smallest].frequency
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right].frequency <
                this.heap[smallest].frequency
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            this.swap(index, smallest);

            index = smallest;
        }

        return min;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] =
        [this.heap[j], this.heap[i]];
    }
}

module.exports = MinHeap;