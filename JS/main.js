const pointer = document.getElementById('pointer');

function throttled(delay, fn) {
  let lastCall = 0;
  return function (...args) {
    const now = (new Date).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
}

const pointerMove = (e) => {
  pointer.style.left = `${e.clientX}px`;
  pointer.style.top = `${e.clientY}px`;
};
const optimizedPointerMove = throttled(70, pointerMove);

if (matchMedia) {
const mq = window.matchMedia("(min-width: 1200px)");
mq.addListener(WidthChange);
WidthChange(mq);
}

function WidthChange(mq) {
  if (mq.matches) {
    document.addEventListener('mousemove', optimizedPointerMove)
  } else {
    document.removeEventListener('mousemove', optimizedPointerMove)
  }
}
