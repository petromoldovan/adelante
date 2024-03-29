//CHEAT SHEET

//Closure - function that has reference to a private variable.constructor
function Person() {
  let name = "Jim";

  this.getName = function() {
    return name;
  }
}

let user = new Person()
user.getName()   <--- is closure function because it has reference and will return privat variable name from person;

#----------

//arr sum
arr.reduce((a,b)=>a+b)

//arr sort
arr.sort((a,b)=>a<b)

//arr max number
Math.max.apply(Math, arr)

#----------

//check if prime
function isPrime(n){
  var incrementer = 2;

  while(n > incrementer) {
    debugger
    console.log(n % incrementer)
    if(n % incrementer == 0){
      console.log("false")
      return false
    } else {
      incrementer++
    }
  }

  console.log("true")
  return true
}

isPrime(13)

#----------

//build fibonacci array
function fibonacci(n) {
  var fibbo = [0,1]

  for (var i =2; i<=n;i++) {
    fibbo[i] = fibbo[i-1] + fibbo[i-2]
  }

  console.log(fibbo)
  return fibbo[n]
}

fibonacci(8)

#----------

//find duplicate
var array = [1,2,3,1,5,6,7,8,3]

function removeDuplicate(arr) {
  console.log("comes here")
  console.log(arr.length)
  for (var i = 0; i<=arr.length; i++) {
    debugger
    for (var x= i+1; x<=arr.length;x++) {
      console.log(arr.indexOf(arr[i]))
      console.log(arr.indexOf(arr[x]))

      if (arr[i] === arr[x] ) {
        console.log("match", arr[i])
      }
    }
  }
}

removeDuplicate(array)


//remove duplicate
function removeDups(arr) {
  var exists = {}
  var res = []

  for (var i = 0;i<=arr.length;i++) {
    debugger
    if(!exists[arr[i]]) {
      res.push(arr[i])
      exists[arr[i]] = true
    }

  }

  console.log(res)
  return res
}

removeDups(array)


//find all prime factors of a number
function findPrime(n){
  let res = []
  let divisor = 2;

  debugger

  while(n>2) {
    if(n % divisor === 0) {
      res.push(divisor)
      n = n/divisor

    } else {
      divisor++
    }

  }

  console.log(res)
  return res;
}

findPrime(54)


//sort and merge two arrays
function mergeTwoArrays(a, b){
  //sort arrays
  a.sort(function(x,y){return x-y})
  b.sort(function(x,y){return x-y})

  console.log("sorted", a)

  let i = 0
  let j = 0
  let elemA = a[i]
  let elemB = b[j]
  let res = []

  if (a.length === 0) return b;
  if (b.length === 0) return a;

  while(elemA || elemB) {
    if(elemA && !elemB || elemA < elemB) {
      res.push(elemA)
      elemA = a[i++]
    } else {
      res.push(elemB)
      elemB = b[j++]
    }
  }

  console.log(res)
  return res

}
mergeTwoArrays([22,33,12,1,2,4,6,9,10], [1])


//swap two numbers
function swapTwoNumbers(a, b) {
  console.log("before swap: " +"a:" + a + " b:" + b)
  a = b - a
  b = b - a
  a = b + a
  console.log("after swap: " +"a:" + a + " b:" + b)
}

swapTwoNumbers(1,22)


//reverse a string
function reverseString(str) {
  let revStr = "";

  for (let i = str.length-1; i>=0;i--) {
    revStr = revStr + str[i]
  }

  console.log(revStr)
  return revStr
}

reverseString("some awesome bro")


//find the max value in array
arr.reduce((a,b)=>Math.max(a,b))

//find non repeating char in string
function nonRepeatingCharInString(str){
  let counted = {}

  for (i=0; i<str.length;i++ ) {
    if(counted[str[i]]) {
      counted[str[i]]++
    } else {
      counted[str[i]]=1
    }
  }

  for(let n in counted) {
    if(counted[n] === 1) {
      return n
    }
  }

  return "not found"
}


nonRepeatingCharInString("some randoem str")


//find missing number in arr
//Solution calculate expected and actual sum of the arr
function findMissingNum(arr) {
  //1. sort arr
  arr.sort(function(a,b){return a-b})

  //1.what is length of numbers, like from 1 to 10;
  let n=10
  let expectedSum = n * (n+1)/2

  let missingNum = expectedSum - arr.reduce((a,b)=>a+b)

  console.log(missingNum)
  return missingNum

}

findMissingNum([1,2,3,4,5,6,7,9,10])


//ASYNC calls
const url = "https://api.github.com/users/petromoldovan";

//normal function
function testFetch() {
  fetch(url)
    .then(res=>console.log("res1", res))
}

//awesome async func
async function testAsync() {
  const res = await fetch(url);

  //print user but not return
  console.log(res)

  //async functions return a promise
  return res;
}

//use async function
testAsync().then(res=>console.log("dosmth"))


//--------example with own promise
//simple promise
function simplePromise(urlToFetch){
  return new Promise((resolve, reject)=> {
    fetch(urlToFetch)
      .then((response) => {
        resolve("success")
      })
      .catch((e) => reject("this is error"))
  })
}

async function testAsync() {
  const res = await simplePromise(url);

  //print user but not return
  console.log(res)

  //async functions return a promise
  return res;
}
//----------------------------------



//Linked List
//single-----------------------------------------
function singleLinkedList() {
  this.head = null;
}

singleLinkedList.prototype.push = function(val) {
  let node = {
    value: val,
    next: null
  }

  if (!this.head) {
    this.head = node;
  }
  else {
    //searching for the last elem
    let current = this.head;
    while (current.next) {
      current = current.next
    }
    //---------------------------

    //elem whose next property is null is the tail of inked list
    current.next = node;
  }

}

let sll = new singleLinkedList();

sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);


//find the linked list middle.
//the thing is that you make two pointers: one moves one object at a time and the second moves two objects at a time
//When the second(fast) pointer hits the tail of a list, it means that the slower pointer in hist halfway, therefore in the middle
function getMiddleNodeValue(sll) {
  let fastPointer = sll.head;
  let slowPointer = sll.head;

  while(fastPointer && fastPointer.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  return slowPointer.value
}


//get depth of a linked list
//move through nodes till you reach tail. You know it by hitting node where next is null
function getLengthOfLinkedList(sll) {
  let depth = 1;
  let node = sll.head;

  while(node && node.next) {
    node = node.next;
    depth++
  }

  return depth;
}


//detect a loop
//check if linked list in not broken in the way that one of the node references the previos node and loop occures when you do node.next.next
detectSingleDistanceLoop(sll) {
  let fast = sll.head;
  let slow = sll.head;

  while(slow && fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      return true
    }
  }

  return false
}

//END: single-----------------------------------------


//Doubly LinkedList-------------------------------------------
function doublyLinkedList() {
  this.head = null;
}

doublyLinkedList.prototype.push = function(val) {
  let head = this.head,
    current = head,
    previous = head;

  if (!this.head) {
    this.head = {value: val, next: null, previous: null}
  }
  else {
    while (current && current.next) {
      previous = current;
      current = current.next;
    }
    current.next = {value: val, next: null, previous: current}
  }
}

let dll = new doublyLinkedList();

dll.push(1)
dll.push(2)
dll.push(3)
dll.push(4)


//Binary Tree.
//At the top of the tree there is a root node with certain value and right and left nodes. If the newly inserted node
//is less than the existing node value than we insert it to the left of node. If it is more than the existing node than
//we insert it to the right.
function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this.root = null;
}

//add node to the tree. Either to left(less than node value) or right(more than node value).
BinaryTree.prototype.push = function(val) {
  let node = new Node(val);
  let current = this.root;

  if (!this.root) {
    this.root = node;
    return;
  }

  while(current) {
    if (val < current.value) {
      if (!current.left) {
        current.left = node;
        break;
      }

      current = current.left;
    } else {
      if (!current.right) {
        current.right = node;
        break;
      }

      current = current.right;
    }
  }
}


//find min value. You need to find the most left node of a tree.
function minValue(binaryTreeRoot) {
  if (!binaryTreeRoot) {
    return 0;
  }

  if (binaryTreeRoot.left) {
    minValue(binaryTreeRoot.left)
  }

  return binaryTreeRoot.left;
}

//In-order traversal(go through all elements of a tree)
function inOrderTransversal(treeRoot) {
  if (treeRoot) {
    console.log(treeRoot.value)
    inOrderTransversal(treeRoot.left)
    inOrderTransversal(treeRoot.right)
  }
}

//Arrays and strings

//1.1 Implement an algorithm to determine if a string has all unique characters.
function allUniqueChars(string) {
  let res = {};
  let char = "";
  for (let i = 0; i < string.length; i++) {
    char = string[i];

    if (res[char]) {
      return false;
    }

    if (!res[char]) {
      res[char] = 1;
    } else {
      res[char]++;
    }
  }

  return true;
}

allUniqueChars("bajvbbpsc");
//Time complexity is O(n), where n is the length of the string, and space complexity is O(n)

//What if you can not use additional data structures?
//1.1.A Double loop. Unique char must occur only one
function allUniqueCharsDoubleLoop(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count = 0;

    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }

    if (count > 1) {
      return false;
    }
  }

  return true
}

allUniqueCharsDoubleLoop("double")


//1.1.B Sort the string and then check for repetitions
function allUniqueCharsDestruct(str) {
  let str2 = str.split("").sort().join("")

  for (let i = 0; i < str2.length; i++) {
    if (str2[i + 1] && str2[i] === str2[i+1]) return false
  }

  return true
}

allUniqueCharsDestruct("triple")



//1.2 Write code to reverse a C-Style String (C-String means that “abcd” is represented as five characters, including the null character)
//1.2.A loop
function reverse(str) {
  let res = ""
  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i]
  }

  return res
}
reverse("abcd")

//1.2.A In place
//THIS IS ANSWER FOR ALL LANGUAGES BUT NOT JS! In js strings are immutable!!!
function reverse2(str) {
  let data = str;
  let i = 0;
  let j = str.length - 1;
  let temp = "";

  while (i < j) {
    temp = data[i]
    data[i] = data[j]
    data[j] = temp
    i++
    j--
  }

  console.log(data)

  return data
}

reverse2("abcd5")
