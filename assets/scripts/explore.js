// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var synth = window.speechSynthesis;
  var voiceSelect = document.querySelector('select');
  var pressToTalk = document.querySelector('button');
  var voices = [];

  // Got from developer.mozille.org
  function populateVoices() {
    voices = synth.getVoices();
  
    for(var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  pressToTalk.addEventListener('click', (event) => {
    var smileimage = document.querySelector('img');
    var text = document.querySelector('textarea').value;
    var utterThis = new SpeechSynthesisUtterance(text);

    utterThis.onstart = function (event) {
      smileimage.src = "assets/images/smiling-open.png";
    }

    utterThis.onend = function (event) {
      smileimage.src = "assets/images/smiling.png";
    }


    var voiceoption = document.querySelector('select').value;
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].name == voiceoption) {
        utterThis.voice = voice[i];
      }
    }
    synth.speak(utterThis);

  });

}