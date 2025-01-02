// 冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 相邻元素两两对比
        let temp = arr[j + 1]; // 元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
// 快速排序
// 规则：1、首先找到一个基准值，可以是数组第一项
// 2、需要两个指针，一个从开头、一个从末尾，两个指针要不断往中间移动，左指针往右移动，右指针往左移动。
// 3、先移动右指针
// 4、右指针向左移动，找到比基准数小的数，停止移动，左指针开始往右移动，先不交换的原因是，基准数不一定排在交换的位置上。
// 5、左指针向右移动，找到比基准数大的数，停止移动
// 6、当两个指针都停止，就交换位置
// 7、重复2-6步骤
// 8、当左右指针相遇，当前位置与基准数位置交换，此时基准数左边都小于基准数，基准数右边都大于基准数
function quickSort(arr, left, right) {
  if (left > right) return;
  // 基准数
  let base = arr[left],
    i = left,
    j = right;
  // 左右指针没相遇
  while (i !== j) {
    while (arr[j] >= base && i < j) {
      j--;
    }
    while (arr[i] <= base && i < j) {
      i++;
    }
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  // 左右指针相遇
  arr[left] = arr[i];
  arr[i] = base;
  quickSort(arr, left, i - 1);
  quickSort(arr, i + 1, arr.length - 1);
}
// let arr = [3, 48, 9, 10, 45];
// quickSort(arr, 0, arr.length - 1);
// bubbleSort(arr);
// console.log(arr);
