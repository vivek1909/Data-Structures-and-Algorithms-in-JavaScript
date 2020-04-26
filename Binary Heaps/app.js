class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  // function used for inserting the elements into the heap
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    this.sinkDown();

    return max;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
  }
}

let heap = new MaxBinaryHeap();

heap.insert(27);
heap.insert(39);
heap.insert(55);
heap.insert(33);
heap.insert(12);
heap.insert(18);
heap.insert(41);
heap.insert(119);

console.log(heap);
