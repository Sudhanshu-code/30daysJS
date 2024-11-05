//LinkedList
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      //if list is empty
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  displayNodes() {
    if (!this.head) {
      console.log("List is Empty");

      return;
    }
    let current = this.head;
    while (current) {
      console.log(current.value);

      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(6);
linkedList.add(7);
// linkedList.displayNodes();

//Stack

class Stack {
  constructor() {
    this.stack = [];
  }
  isEmpty() {
    return this.stack.length == 0;
  }
  push(data) {
    this.stack.push(data);
  }
  pop() {
    if (this.stack.length < 0) {
      return -1;
    }
    let size = this.stack.length - 1;
    let top = this.stack.pop(size);
    // this.stack = this.stack.slice(1, size);
    return top;
  }
  peek() {
    if (this.stack.length < 0) {
      return -1;
    }
    let size = this.stack.length - 1;
    let top = this.stack[size];
    return top;
  }
}

const stack = new Stack();

stack.push(2);
stack.push(5);
stack.pop();
stack.push(7);
stack.push(6);

//reverse the string using the stack
const strStack = new Stack();
let str = "sudhanshu";
for (let i = 0; i < str.length; i++) {
  strStack.push(str.charAt(i));
}
let reverseStr = "";
while (!strStack.isEmpty()) {
  reverseStr += strStack.pop();
}
// console.log(reverseStr);

//Queue

class Queue {
  constructor() {
    this.queue = [];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      return `Queue is empty`;
    }
    return this.queue.shift();
  }
  peek() {
    if (this.isEmpty()) {
      return `Queue is empty`;
    }
    return this.queue[0];
  }
  displayQueue() {
    console.log(this.queue);
  }
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(2);
queue.enqueue(8);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.peek());

// queue.displayQueue();

class TreeNode {
  constructor(value) {
    this.root = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.idx = -1;
  }
  buildTree(nodes) {
    this.idx++;

    if (nodes[this.idx] === -1) return null;

    const newNode = new TreeNode(nodes[this.idx]);
    newNode.left = this.buildTree(nodes);
    newNode.right = this.buildTree(nodes);
    return newNode;
  }
}
let nodes = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];
const binaryTree = new BinaryTree();
const tree = binaryTree.buildTree(nodes);
console.log(tree.root);

function printTree(node, level = 0) {
  if (node !== null) {
    printTree(node.right, level + 1);
    console.log(" ".repeat(4 * level) + node.root);
    printTree(node.left, level + 1);
  }
}

printTree(tree);

let preorder = "";
function preOrder(node) {
  if (node === null) {
    return;
  }
  preorder += node.root + " ";
  preOrder(node.left);
  preOrder(node.right);
}
preOrder(tree);
console.log(preorder);

let inorderResult = "";
function inorder(node) {
  if (node === null) {
    return;
  }
  inorder(node.left);
  inorderResult += node.root + " ";
  inorder(node.right);
}
inorder(tree);
console.log(inorderResult);

let postorderResult = "";
function postorder(node) {
  if (node === null) {
    return;
  }
  postorder(node.left);
  postorder(node.right);
  postorderResult += node.root + " ";
}
postorder(tree);
console.log(postorderResult);

function levelOrder(node) {
  let result = "";
  let q = new Queue();
  q.enqueue(node);
  q.enqueue(null);

  while (!q.isEmpty()) {
    let currNode = q.dequeue();
    if (currNode === null) {
      result += "\n";
      if (q.isEmpty()) {
        break;
      } else {
        q.enqueue(null);
      }
    } else {
      result += currNode.root + " ";
      if (currNode.left !== null) {
        q.enqueue(currNode.left);
      }
      if (currNode.right !== null) {
        q.enqueue(currNode.right);
      }
    }
  }
  return result;
}

console.log(levelOrder(tree));
