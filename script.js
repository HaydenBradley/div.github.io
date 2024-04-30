document.getElementById('controlButton').addEventListener('click', function() {
    var box = document.getElementById('box');
    var containerWidth = document.getElementById('container').clientWidth;
    var boxWidth = box.offsetWidth;
  
    var newX = containerWidth - boxWidth - 20; 
  
 
    box.style.transform = 'translateX(' + newX + 'px)';
    

    if (box.style.transform === 'translateX(' + newX + 'px)') {
      setTimeout(function() {
        box.style.transform = 'translate(-50%, -50%)';
      }, 500); 
    }
  });
  