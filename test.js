var test = require('tape')
var BST = require('./index.js')

var btree 

test ('setup', function (t) {
  btree = new BST()
  t.plan(3)
  t.true(btree.isEmpty())
  t.equal(btree.size(),0)
  t.equal(btree.height(),-1)
  t.end()
})

test('check if insertion and search works', function (t) {
  t.equal(btree.insert('f','f') , 1)
  t.equal(btree.insert('b','b') , 1)
  t.equal(btree.insert('g','g') , 1)
  t.equal(btree.insert('a','a') , 1)
  t.equal(btree.insert('c','c') , 1)
  t.equal(btree.insert('e','e') , 1)
  t.notEqual(btree.insert('e','e'), 1)
  t.equal(btree.height(), 3)
  t.equal(btree.depth('c'), 2)
  t.equal(btree.depth('g'), 1)
  t.equal(btree.depth('f'), 0)
  t.equal(btree.depth('i'), -1)
  t.equal(btree.find('a'), 'a')
  t.equal(btree.find('e'), 'e')
  t.equal(btree.find('i'), null)
  t.end()
})

test('check inorder traversal', function (t) {
  t.plan(1)
  var result  = ['a','b','c','e','f','g']  
  var output = []
  btree.inorder (function (node) {
    output.push(node.val)
  })
  t.equal(result.join(''), output.join(''))
  t.end()
})

test('check postorder traversal', function (t) {
  t.plan(1)
  var result  = ['a','e','c','b','g','f']  
  var output = []
  btree.postorder (function (node) {
    output.push(node.val)
  })
  t.equal(result.join(''), output.join(''))
  t.end()
})

test('check preorder traversal', function (t) {
  t.plan(1)
  var result  = ['f','b','a','c','e','g']  
  var output = []
  btree.preorder (function (node) {
    output.push(node.val)
  })
  t.equal(result.join(''), output.join(''))
  t.end()
})

test('check if deletion works', function (t) {
 t.equal(btree.delete('i'), 0)
 t.equal(btree.size(), 6)
 t.equal(btree.delete('e'), 1)
 t.equal(btree.size(), 5)
 t.equal(btree.find('e'), null)
 t.equal(btree.delete('g'), 1)
 t.equal(btree.size(), 4)
 t.equal(btree.find('g'), null)
 t.equal(btree.delete('b'), 1)
 t.equal(btree.size(), 3)
 t.equal(btree.find('b'), null)
 btree.clear()
 t.true(btree.isEmpty())
 t.equal(btree.size() , 0)
 t.end()
})

test('check if isAVL function works for balanced trees', function (t) {
  btree.clear()
  btree.insert('Eunice', 'Eunice')
  t.equal(btree.isAVL(), 1)
  btree.insert('Binky', 'Binky')
  t.equal(btree.isAVL(), 1)
  btree.insert('Fred', 'Fred')
  t.equal(btree.isAVL(), 1)
  btree.insert('BabyDaisy', 'BabyDaisy')
  t.equal(btree.isAVL(), 1)
  btree.insert('Daisy', 'Daisy')
  btree.insert('Calista', 'Calista')
  btree.insert('Luther', 'Luther')
  t.equal(btree.isAVL(), 1)
  t.end()
})

test('check if isAVL function works for non balanced trees', function (t) {
  btree.clear()
  btree.insert('Binky', 'Binky')
  btree.insert('Daisy', 'Daisy')
  btree.insert('Calista', 'Calista')
  t.equal(btree.isAVL(), 0)
  btree.clear()
  btree.insert('Eunice', 'Eunice')
  btree.insert('Binky', 'Binky')
  btree.insert('Fred', 'Fred')
  btree.insert('BabyDaisy', 'BabyDaisy')
  btree.insert('Daisy', 'Daisy')
  btree.insert('Calista', 'Calista')
  btree.insert('Luther', 'Luther')
  btree.insert('Luigi', 'Luigi')
  btree.insert('Waluigi', 'Waluigi')
  t.equal(btree.isAVL(), 0)
  t.end()
})


test('check if rotation works', function (t) {
  btree.clear()
  btree.insert('B', 'B')
  btree.insert('A', 'A')
  btree.insert('D', 'D')
  btree.insert ('C', 'C')
  btree.insert('E', 'E')
  t.equal(btree.rotate('B'), 0)
  t.equal(btree.rotate('F'), 0)
  btree.rotate('D')
  var expected = 'ACBED'
  var result = ''
  btree.postorder(function (node) {
    result += node.val
  })
  t.equal(result, expected)
  t.end()
})
