/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  // 当前节点
  let cur = head;
  // 上一个节点
  let prev = null;
  while(cur !== null) {
    // 下一个节点
    let next = cur.next;
    // 当前节点next指向上一个节点
    cur.next = prev;
    
    // 更新
    prev = cur;
    cur = next;
  }
  return prev;
};