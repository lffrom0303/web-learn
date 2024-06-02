function debounce(fn, delay = 1000) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function throttle(fn, wait = 1000) {
  let isFinished = true;
  return function (...args) {
    if (!isFinished) return;
    isFinished = false;
    setTimeout(() => {
      fn.apply(this, args);
      isFinished = true;
    }, wait);
  };
}
