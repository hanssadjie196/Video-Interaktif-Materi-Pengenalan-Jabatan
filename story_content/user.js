function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aYRoNJaLW8":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="Backsound.mp3";
audio.load();
audio.play();
audio.volume=0,3;

}

