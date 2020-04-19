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
}

var bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(11);
bst.insert(2);
bst.insert(16);
bst.insert(7);
