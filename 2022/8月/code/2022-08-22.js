var addBinary = function(a, b) {
  let add = 0
  let sum = []
  for(let i = a.length -1, j = b.length -1; i >= 0 || j >= 0; i--, j--) {
      let num1 = +a[i] || 0
      let num2 = +b[j] || 0
      sum.unshift(num1 ^ num2 ^ add)
      add = num1 + num2 + add > 1 ? 1 : 0
      
  }
  if (add === 1) sum.unshift(1)
  return sum.join('')
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
  if (head == null) return head;
  let start = head;
  let end = head;

  // start ~ end 反转链表
  let reverse = (start, end) => {
      let prevNode = end;
      let currentNode = start;
      let nextNode = start;
      while(currentNode != end) {
          let nextNode = currentNode.next;
          
          // 当前节点指向上一个节点
          currentNode.next = prevNode;

          // 指向下一个结点
          currentNode = nextNode;
          // 更新上一个结点
          prevNode = currentNode;
      }
      // 返回链表的起始头
      return prevNode;
  }

 //  获取 k 个结点 的起始头
 for (let i = 0; i < k; i++) {
        if (end == null) return head;
        end = end.next;
 }

// 更新反转后链表的起始头
let newHead = reverse(start, end);
// 递归，并连接之前递归结果
start.next = reverseKGroup(end, k);
return newHead;
};