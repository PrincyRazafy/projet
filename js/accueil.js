document.addEventListener('DOMContentLoaded', function (){
var typed2 = new Typed('#typed2', {
    strings: [
      'Princy',
      'Tolotra',
    ],
    typeSpeed: 50,
    backSpeed: 50,
    fadeOut: true,
    loop: true,
  });
  document.querySelector('.loop2').addEventListener('click', function () {
    toggleLoop(typed2);
  });
});
function prettyLog(str) {
    console.log('%c ' + str, 'color: green; font-weight: bold;');
  }
  
  function toggleLoop(typed) {
    if (typed.loop) {
      typed.loop = false;
    } else {
      typed.loop = true;
    }
  }