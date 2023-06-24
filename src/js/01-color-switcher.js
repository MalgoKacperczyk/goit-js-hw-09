function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeColor() {
  const startButton = document.querySelector('button[data-start]');
  const stopButton = document.querySelector('button[data-stop]');
  const body = document.querySelector('body');
  let intervalId;

  startButton.disabled = true;
  intervalId = setInterval(function () {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  stopButton.addEventListener('click', function () {
    clearInterval(intervalId);
    startButton.disabled = false;
  });
}
