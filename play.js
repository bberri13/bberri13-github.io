document.addEventListener("DOMContentLoaded", function() {
    // video
    var video = document.getElementById("videoPlayer");
    var videoRect = video.getBoundingClientRect();
  
    // play/pause
    video.addEventListener("click", function() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  
    var customCursor = new Image();
    customCursor.src = "images/crystalheart.png";
    customCursor.style.position = "absolute";
    customCursor.style.display = "none";
    document.body.appendChild(customCursor);
  
    document.addEventListener("mousemove", function(event) {
      var mouseX = event.clientX;
      var mouseY = event.clientY;
  
      if (mouseX < videoRect.left || mouseX > videoRect.right || mouseY < videoRect.top || mouseY > videoRect.bottom) {
        // Show the custom cursor and position it at the current mouse coordinates
        customCursor.style.display = "block";
        customCursor.style.left = mouseX + "px";
        customCursor.style.top = mouseY + "px";
  
        document.body.style.cursor = "none";
      } else {

        customCursor.style.display = "none";
        document.body.style.cursor = "auto";
      }
    });
  });
  