var isBoxMoved = false;

document.getElementById('controlButton').addEventListener('click', function() {
  var box = document.getElementById('box');
  var containerWidth = document.getElementById('container').clientWidth;
  var boxWidth = box.offsetWidth;

  var newX = containerWidth - boxWidth - 20; 

  if (!isBoxMoved) {
    box.style.transform = 'translateX(' + newX + 'px)';
    isBoxMoved = true;
  } else {
    box.style.transform = 'translate(-50%, -50%)';
    isBoxMoved = false;
  }
});
