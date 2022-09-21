var deleteDuplicates = function (head) {
  if (!head) return head;

  // 记录链表头结点地址
  const dummy = new ListNode(0, head);

  let cur = dummy;
  // 第一个结点和第二个结点
  while (cur.next && cur.next.next) {
    // 第一个结点和第二结点值相等
    if (cur.next.val == cur.next.next.val) {
      const x = cur.next.val;

      // 指针指向下个与 x 值不不相等的值地址
      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next;
      }
    } else {
      // 指针继续向前
      cur = cur.next;
    }
  }
  // dummy.next 指向的是 head 的地址
  return dummy.next;
}

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const B = new Array(26).fill(0);
  words2.forEach(w => {
    const tmp = new Array(26).fill(0);
    for (const c of w) {
      const idx = c.charCodeAt() - 97
      if (tmp[idx]++ === B[idx]) B[idx]++;
    }
  });
  return words1.filter(w => {
    const tmp = B.slice();
    for (const c of w) {
      const idx = c.charCodeAt() - 97;
      if (tmp[idx] > 0) tmp[idx]--;
    }
    return tmp.every(cnt => cnt === 0);
  })
};
