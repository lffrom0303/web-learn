function sum(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], i);
    }
    if (map.has(target - arr[i])) {
      return [map.get(target - arr[i]), i];
    }
  }
}

console.log(sum([1, 2, 7, 8, 11, 15], 9));
