class Node {
  constructor(data) {
    this.root = data;
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
    if (nodes[this.idx] === -1) {
      return null;
    }
    let newNode = new Node(nodes[this.idx]);
    newNode.left = this.buildTree(nodes);
    newNode.right = this.buildTree(nodes);
    return newNode;
  }
}
let nodes = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];
const binaryTree = new BinaryTree();
let tree = binaryTree.buildTree(nodes);
// console.log(tree);

let result = "";
function preorder(node) {
  if (node === null) {
    return;
  }
  result += node.root + " ";
  preorder(node.left);
  preorder(node.right);
}
// preorder(tree);

function inorder(node) {
  if (node === null) {
    return;
  }
  inorder(node.left);
  result += node.root + " ";

  inorder(node.right);
}
// inorder(tree);

function postorder(node) {
  if (node == null) {
    return;
  }
  postorder(node.left);
  postorder(node.right);
  result += node.root + " ";
}
postorder(tree);
console.log(result);
