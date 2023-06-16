import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit)

console.log("hellp")

function onSubmit(event) {
  event.preventDefault();
  let delay = form.delay.value;
  delay = Number(delay);
  const step = Number(form.step.value);
  
  const amount = form.amount.value;


  for ( let i = 1; i <= amount; i += 1) {
  
    createPromise(i, delay)
      .then(value => {
        Notify.success(value);
      })
      .catch(error => {
        Notify.failure(error);
      });
    delay += step;
  }

}



function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      
      if (shouldResolve) {
        res(`Fulfield promise ${position} in ${delay}ms`);
      } else {
        rej(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay)
   
  });
}

