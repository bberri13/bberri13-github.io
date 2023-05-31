document.addEventListener('DOMContentLoaded', function() {
    var showFloatingImage = document.getElementById('cry-div');
    var floatingImageContainer = document.getElementById('floating-image-container');
  
    showFloatingImage.addEventListener('click', function() {
      floatingImageContainer.style.display = 'block';
    });
  
    floatingImageContainer.addEventListener('click', function() {
      floatingImageContainer.style.display = 'none';
    });
  });
  