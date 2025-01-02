function debounce(fn, wait = 1000) {
  let time = null;
  return (...args) => {
    if (time) clearTimeout(time);
    time = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

function throttle(fn, wait = 1000) {
  let finished = true;
  return (...args) => {
    if (!finished) return;
    finished = false;
    setTimeout(() => {
      fn.apply(this, args);
      finished = true;
    }, wait);
  };
}
