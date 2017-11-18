# binarysearch-tree

binary search tree with basic operations 

[![Build Status](https://travis-ci.org/incessantmeraki/binarysearch-tree.svg?branch=master)](https://travis-ci.org/incessantmeraki/binarysearch-tree)

## Usage

### Example

```js
  var BST = require('binarysearch-tree')
  var t = new BST()
  t.insert(1, 'one')
  t.insert(2, 'two')
  console.log(t.size()) //displays 2
  t.delete(1) //removes node with key 1 

  //perform inorder travel and print value of each node
  t.inorder(function (node) {
    console.log(node.val)
  })
```

### API

#### `tree= new BST()`
create new instance of binary tree

#### `tree.insert(key,val)`
inserts node with with key as key and value as val. returns 1 if successfully inserted

#### `tree.delete(key)`
removes node with key as key from the tree . returns 1 on successful deletion and 0 on failure 

#### `tree.size()`
returns the number of elements/nodes on the tree

#### `tree.find(key)`
returns value of node with key as key . returns null if such key not present

#### `tree.depth(key)`
returns depth of node with key as key

#### `tree.height()`
returns height of the tree

#### `tree.inorder(callback(node))`
performs in-order traversal of tree returning each node on callback function

#### `tree.postorder(callback(node))`
performs post-order traversal of tree returning each node on callback function

#### `tree.preorder(callback(node))`
performs pre-order traversal of tree returning each node on callback function

#### `tree.isEmpty()`
returns true if the tree is empty otherwise false

#### `tree.clear()`
resets the tree

#### `tree.isAVL()`
returns 1 if the tree is AVL(balanced) else returns 0

## License

MIT
