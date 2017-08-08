const soldiers = 3012210;

// Part 1:
const num2s = Math.ceil(Math.log2(soldiers));
const higherPwrOf2 = Math.pow(2, num2s);
const diff = higherPwrOf2 - soldiers;
const pos = soldiers + (1 - diff);

console.log(pos);

// Part 2:

class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }

  remove() {
    this.prev.next = this.next;
    this.next.prev = this.prev;
  }
}

let start = new Node(1);
let prev = start;

for (let i = 2; i <= soldiers; i++) {
  const newNode = new Node(i, null, prev);
  prev.next = newNode;
  prev = newNode;
}
prev.next = start;
start.prev = prev;

for (let i = 0; i < Math.floor(soldiers / 2); i++) {
  start = start.next;
}

let moveTwo = false;
while (start.next !== start) {
  const deadSoldier = start;
  start = moveTwo ? start.next.next : start.next;
  moveTwo = !moveTwo;
  deadSoldier.remove();
}

console.log(start.val);
