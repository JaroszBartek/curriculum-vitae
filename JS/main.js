const pointer = document.getElementById('pointer');

const pointerMove = (e) => {
  pointer.style.left = `${e.clientX}px`;
  pointer.style.top = `${e.clientY}px`;
};

if (matchMedia) {
const mq = window.matchMedia("(min-width: 1200px)");
mq.addListener(WidthChange);
WidthChange(mq);
}

function WidthChange(mq) {
  if (mq.matches) {
    document.addEventListener('mousemove', pointerMove)
  } else {
    document.removeEventListener('mousemove', pointerMove)
  }
}
