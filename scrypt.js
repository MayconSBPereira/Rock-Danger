let video = document.getElementById("mrd");

function retroceder(){
    video.currentTime -= 10;
}
function avançar(){
    video.currentTime += 10;
}
function play(){
    video.play();
}
function pause(){
    video.pause();
}
function showControles(e) {
    e.style.opacity = 1;
  }
  function hiddenControles(e) {
    e.style.opacity = 0;
  }
  