var audio = document.getElementById("audio");
  var btnAudio = document.getElementById("btnAudio");

  btnAudio.addEventListener("click", function() {
    if (audio.paused) {
      // Áudio pausado, então reproduz
      audio.play();
      btnAudio.src = "../img/logos/unmute.png";
      btnAudio.alt = "Áudio Ligado";
    } else {
      // Áudio reproduzindo, então pausa
      audio.pause();
      btnAudio.src = "../img/logos/mute.png";
      btnAudio.alt = "Áudio Desligado";
    }
  });


var jogar_audio = document.getElementById("jogar_audio");
var jogar = document.getElementById("jogar");

jogar.addEventListener("mouseover", function() {
    // Reproduz o efeito sonoro ao passar o mouse por cima
    jogar_audio.play();
});

jogar.addEventListener("mouseout", function() {
    // Pausa o efeito sonoro quando o mouse sai de cima do botão
    jogar_audio.pause();
    jogar_audio.currentTime = 0; // Reinicia o áudio para o início
});


