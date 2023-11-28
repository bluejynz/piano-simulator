const keys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let audio = new Audio();
let mappedKeys = [];

const playTune = (k) => {
  audio.src = `src/tunes/${k}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${k}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
}

const handleVolume = (e) => {
  audio.volume = e.target.value;
}

const toggleKeys = () => {
  keys.forEach(k => k.classList.toggle("hide"));
}

keys.forEach((k) => {
  k.addEventListener("click", () => playTune(k.dataset.key));
  mappedKeys.push(k.dataset.key)
});

document.addEventListener("keydown", (e) => {
  if(mappedKeys.includes(e.key)) {
    playTune(e.key);
  }
});

volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", toggleKeys);