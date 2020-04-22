class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      var currentNode = this.root;

      while (true) {
        if (val === currentNode.val) return undefined;

        if (val < currentNode.val) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (val > currentNode.val) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false;

    var currentNode = this.root,
      found = false;

    while (currentNode && !found) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.right) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;

    return currentNode;
  }

  BFS() {
    var data = [],
      queue = [],
      node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    console.log(data);
    return data;
  }

  DFSPreOrder() {
    var data = [];

    function traverse(node) {
      data.push(node.val);

      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    console.log(data);
    return data;
  }

  DFSPostOrder() {
    var data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);

      data.push(node.val);
    }

    traverse(this.root);

    console.log(data);
    return data;
  }

  DFSInOrder() {
    var data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);

      data.push(node.val);

      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    console.log(data);
    return data;
  }
}

var bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

bst.BFS();
bst.DFSPreOrder();
bst.DFSPostOrder();
bst.DFSInOrder();
