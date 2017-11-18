module.exports = BSTree

function BSTNode() {
  var left = null
  var right = null
  var parent = null
  var key
  var val
}

function BSTree() {
  this._sentinel = new BSTNode
  this._sentinel.parent = null
  this._sentinel.left = null
  this._sentinel.right = this._sentinel
  this._size = 0
}

BSTree.prototype.insert = function(key, val) {
  var sentinel = this._sentinel
  
  var parent = sentinel 
  var n = sentinel.right

  while (n !== sentinel) {
    if (n.key === key) return
    parent = n
    if (key < n.key) 
      n = n.left
    else
      n = n.right
  }

  n = new BSTNode
  n.key = key
  n.val = val
  n.parent = parent
  n.left = sentinel
  n.right = sentinel

  if (parent === sentinel) {
    sentinel.right = n
  } else if (key < parent.key) {
    parent.left = n
  } else {
    parent.right = n
  }
  this._size++
  return 1
  
}

BSTree.prototype.find = function (key) {
  var sentinel = this._sentinel
  n = sentinel.right
  while (true) {
    if (n === sentinel) return null
    if (key === n.key) return n.val
    if (key < n.key) n = n.left
    else n = n.right
  }
}

BSTree.prototype.delete = function (key) {
  var sentinel = this._sentinel

  var n = sentinel.right
  //if (n === sentinel) return 0
  while (n !== sentinel && key != n.key) {
    if (key < n.key) 
      n = n.left
    else
      n = n.right
  }

  if (n === sentinel) return 0
  var parent = n.parent

  if (n.left === sentinel) {
    if (n === parent.left) 
      parent.left = n.right
    else
      parent.right = n.right
    if (n.right !==sentinel) n.right.parent = parent
    n = null
    this._size--
  }
  else if (n.right === sentinel) {
    if (n === parent.left) 
      parent.left = n.left
    else
      parent.right = n.left
    n.left.parent = parent
    n = null
    this._size--
  }
  else {
    for (var mlc = n.left; mlc.right !== sentinel; mlc = mlc.right) {} 
    var tmpkey = mlc.key
    var tmpval = mlc.val
    console.log(tmpkey)
    this.delete.call(this,tmpkey)
    n.key = tmpkey
    n.val = tmpval
  }
  return 1
}

BSTree.prototype.inorder = function (cb) {
  this._recursiveInorder(this._sentinel.right, cb)
}

BSTree.prototype.preorder = function (cb) {
  this._recursivePreorder(this._sentinel.right, cb)
}

BSTree.prototype.postorder = function (cb) {
  this._recursivePostorder(this._sentinel.right, cb)
}

BSTree.prototype._recursiveInorder = function(node, cb) {
  if (node === this._sentinel) return
  this._recursiveInorder(node.left, cb)
  cb(node)
  this._recursiveInorder(node.right, cb)
}


BSTree.prototype._recursivePostorder = function(node, cb) {
  if (node === this._sentinel) return
  this._recursivePostorder(node.left, cb)
  this._recursivePostorder(node.right, cb)
  cb(node)
}

BSTree.prototype._recursivePreorder = function(node, cb) {
  if (node === this._sentinel) return
  cb(node)
  this._recursivePreorder(node.left, cb)
  this._recursivePreorder(node.right, cb)
}

BSTree.prototype.size = function () {
  return this._size
}

BSTree.prototype.isEmpty = function () {
  return (this._size === 0)
}

BSTree.prototype.clear = function() {
  this._sentinel.parent = null
  this._sentinel.left = null
  this._sentinel.right = this._sentinel
  this._size = 0
}

BSTree.prototype.depth = function (key) {
  var sentinel = this._sentinel
  var depth = 0
  n = sentinel.right
  while (true) {
    if (n === sentinel) return -1
    if (key === n.key) return depth
    if (key < n.key) n = n.left
    else n = n.right
    depth++
  }
}

BSTree.prototype.height = function () {
  var sentinel = this._sentinel
  return this._recursiveHeight(sentinel.right)
}

BSTree.prototype._recursiveHeight = function (node) {
  if (node === this._sentinel) return -1
  var lh = this._recursiveHeight(node.left)
  var rh = this._recursiveHeight(node.right)
  if (lh > rh)
    return 1 + lh
  else
    return 1 + rh
}

BSTree.prototype.isAVL = function () {
  var sentinel = this._sentinel
  return this._recursive_height_and_avl_check(sentinel.right)
}

BSTree.prototype._recursive_height_and_avl_check = function (n) {
  var lh,rh

  if (n == this._sentinel) return 1

  lh = this._recursiveHeight(n.left)
  rh = this._recursiveHeight(n.right)
  
  if (Math.abs(lh-rh) <=1 &&
    this._recursive_height_and_avl_check(n.left) &&
    this._recursive_height_and_avl_check(n.right))
    return 1 

  return 0
}

BSTree.prototype.rotate = function (key) {
  // performs rotation about key return 1 if successful or 0 if no key or is root
}


