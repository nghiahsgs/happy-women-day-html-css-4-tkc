let countHeartOver = 0;

for (i = 0; i < 800; i++)
  document.body.innerHTML += '<div id="' + i + '" class="TwitterHeart"></div>';

window.addEventListener("mouseover", HeartAnimation);

function HeartAnimation(event) {
  countHeartOver++;
  if (event.target.tagName != 'HTML') {
    var targetHeart = document.getElementById(event.target.id);
    var heartStateCounter = 1;
    let randomNumber = Math.floor(Math.random() * 10);
    document.getElementById('image'+randomNumber).style.opacity = 1;
    var timer = setInterval(function() {
      if (heartStateCounter != 29)
        targetHeart.style.backgroundPosition = -100 * heartStateCounter++ + 'px 0';
      else {
        clearInterval(timer);
      }
    }, 100);
    setTimeout(function() {
      document.getElementById('image'+randomNumber).style.opacity = 0;
    }, 5000);
  }
}

