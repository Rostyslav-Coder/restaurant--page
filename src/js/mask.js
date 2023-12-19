// mask.js

function addMask() {
  document.onmousemove = function (e) {
    var x = e.pageX;
    var y = e.pageY;
    document.getElementById('mask').style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 180px, black 210px)`;
  }
}

export { addMask };
