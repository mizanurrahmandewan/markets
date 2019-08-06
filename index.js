document.querySelector('#first').addEventListener('click', () => {
  const x = document.querySelector('.inner_content');
  const y = document.querySelector('.fas');
  const z = document.querySelector('#first');

  if (x.style.animation === '') {
    y.style.animation = 'fasRotate .3s ease-in-out';
    y.style.animationFillMode = 'forwards';
    z.style.animation = 'firstOpen .3s ease-in-out';
    z.style.animationFillMode = 'forwards';
    x.style.animation = 'moveDown .3s ease-in-out';
    x.style.animationFillMode = 'forwards';
  } else if (x.style.animation != '') {
    z.style.animation = 'fastClose .3s ease-in-out';
    y.style.animation = 'fasReset .3s ease-in-out';
    x.style.animation = 'moveUp .3s ease-in-out';
    setTimeout(function() {
      x.style.animation = '';
    }, 500);
  }
});
