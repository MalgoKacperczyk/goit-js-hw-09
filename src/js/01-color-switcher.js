function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let intervalId;

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();

  startButton.addEventListener('click', () => {
    intervalId = setInterval(changeColor, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
  });

  stopButton.addEventListener('click', function () {
    clearInterval(intervalId);
    startButton.disabled = false;
    stopButton.disabled = true;
  });
}
changeColor();
