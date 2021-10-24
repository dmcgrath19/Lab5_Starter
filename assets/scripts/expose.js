
window.addEventListener('DOMContentLoaded', init);

function init() {
  const confetti = new JSConfetti();
  const images = document.querySelectorAll('img');
  const hornImage = images[0];
  const volumeImage = images[1];
  const sound =  document.querySelector('audio');

  const hornSelect = document.querySelector("#horn-select");
  const volumeControl = document.querySelector('#volume');
  const soundSelect = document.querySelector('button');

  //select horn
  hornSelect.addEventListener('change', (event)=>{
    hornImage.src = "assets/images/" + hornSelect.value + ".svg"; //load img
    sound.src = "assets/audio/" + hornSelect.value + ".mp3"; //load audio
    console.log(sound.src);
  })

  //start audio when clicked
  soundSelect.addEventListener('click', (event)=>{
    console.log(sound);
    sound.play();
    if(hornSelect.value == "party-horn"){
      confetti.addConfetti({
        confettiNumber: 555,
      })
    }
  })

  //modify volume of icon
  volumeControl.addEventListener('change', (event)=>{

    let volume = volumeControl.value;
    console.log(volume);
    sound.volume = volume / 100;

    if(volume <= 0)
      volumeImage.src = "assets/icons/volume-level-0.svg";

    else if(volume >= 1 && volume < 33)
      volumeImage.src = "assets/icons/volume-level-1.svg";

    else if(volume >= 33 && volume < 67)
      volumeImage.src = "assets/icons/volume-level-2.svg";

    else
      volumeImage.src = "assets/icons/volume-level-3.svg";
  })


}