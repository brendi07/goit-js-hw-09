import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit)


function onSubmit(event) {
  event.preventDefault();
  let ms = form.delay.value;
  ms = Number(ms);
  const step = form.step.value;
  
  const amount = form.amount.value;
  console.log(ms)

  for ( let i = 1; i <= amount; i += 1) {
  
    createPromise(i, ms)
      .then(value => {
        Notify.success(value);
      })
      .catch(error => {
        Notify.failure(error);
      });
    ms += step;
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

