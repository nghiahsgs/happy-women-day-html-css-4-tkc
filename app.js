let countHeartOver = 0;

let contentHTML = '';
for (i = 0; i < 250; i++){
  contentHTML += `<div id="${i}" class="TwitterHeart"></div>`
}
  document.body.innerHTML += contentHTML;

window.addEventListener("mouseover", HeartAnimation);

function HeartAnimation(event) {
  countHeartOver++;
  if (event.target.tagName != 'HTML') {
    var targetHeart = document.getElementById(event.target.id);
    var heartStateCounter = 1;
    
    let a = 0;
    let b = 5;
    let randomNumber = Math.floor(Math.random() * (b-a+1)+a);
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

