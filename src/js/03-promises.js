document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  const stepInput = document.querySelector('input[name="step"]');
  const amountInput = document.querySelector('input[name="amount"]');

  const delay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);

  let position = 1;

  const interval = setInterval(() => {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Obietnica ${position} została spełniona po ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Obietnica ${position} została odrzucona po ${delay}ms`);
      });

    position += 1;

    if (position > amount) {
      clearInterval(interval);
    }

    delay += step;
  }, delay);
});
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
