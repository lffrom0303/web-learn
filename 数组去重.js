//Array.from(new Set(arr))、[...new Set(arr)]

function unique(arr) {
  let map = new Map();
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], arr[i]);
      array.push(arr[i]);
    }
  }
  return array;
}
function unique(arr) {
  let obj = {};
  return arr.filter((item) =>
    obj.hasOwnProperty(item) ? false : (obj[item] = true)
  );
}
function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

function unique(arr) {
  return arr.filter((item, index, arr) => arr.indexOf(item, 0) === index);
}

function unique(arr) {
  return arr.reduce(
    (prev, cur) => (prev.includes(cur) ? prev : [...prev, cur]),
    []
  );
}
