// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var synth = window.speechSynthesis;
  var pressToTalk = document.querySelector('button');
  var voices = [];

  // Got from developer.mozille.org
  function populateVoices() {
    voices = synth.getVoices();
  
    for(var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById('voice-select').appendChild(option);
    }
  }

  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  pressToTalk.addEventListener('click', (event) => {
    var smileimage = document.querySelector('img');
    var texts = document.querySelector('textarea').value;
    var utterThis = new SpeechSynthesisUtterance(texts);

    var voiceoption = document.querySelector('select').value;

    utterThis.onstart = function (event) {
      smileimage.src = "assets/images/smiling-open.png";
    }

    utterThis.onend = function (event) {
      smileimage.src = "assets/images/smiling.png";
    }
    for (var i = 0; i < voices.length ; i++) {
      if ((voices[i].name + ' (' + voices[i].lang + ')') == voiceoption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
  })

}