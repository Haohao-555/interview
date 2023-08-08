const heapSort = array => {
  // 初始化大顶堆
  for (let i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
    heapify(array, i, array.length)
  }

  // 排序，每一次 for 循环找出一个当前最大值，数组长度减一
  for (let i = Math.floor(array.length - 1); i > 0; i--) {
    swap(array, 0, i);
    heapify(array, 0, i);
  }

  return array;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function heapify(array, i, length) {
  // 当前父节点
  let temp = array[i];
  // j < length 的目的是堆结点 i 以下的结点全部做顺序调整
  for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
    // 将 array[i] 取出，整个过程相当于找到array[i]应处于的位置
    if (j + 1 < length && array[j] < array[j + 1]) {
      // 找到 两个孩子中较大的一个，再与父结点比较
      j++;
    }
    if (temp < array[j]) {
      swap(array, i, j);
      i = j; // 交换后， temp 的下标变为j
    } else {
      break;
    }
  }
}
const array = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
const newArr = heapSort(array);
console.log(newArr);