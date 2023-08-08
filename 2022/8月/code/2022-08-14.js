var removeElement = function(nums, val) {
  const n = nums.length;
  let left = 0;
  for (let right = 0; right < n; right++) {
      if (nums[right] !== val) {
          nums[left] = nums[right];
          left++;
      }
  }
  return left;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
  // 头部
  let head = null;
  let temp = null;
  while (true) {
      // 当前最小值下标
      let = minIndex = -1;
      for (let i = 0; i < lists.length; i++) {
         if (lists[i] != null) {
             if (minIndex == -1) { // 初始化
                 minIndex = i;
             } else {
                 if (lists[i].val < lists[minIndex].val) minIndex = i;
             }
         }
      }
      if (minIndex == -1) break; // 结束

      // 找到最小值
      if (head == null) {
          head = lists[minIndex];
          temp = head;
      } else {
          temp.next = lists[minIndex];
          // 为下一次循环做准备
          temp = temp.next;
      }
      // 把当前最小值的位置下移（未下一次寻找最小值做准备）
      lists[minIndex] = lists[minIndex].next;
  }
  return head;
};