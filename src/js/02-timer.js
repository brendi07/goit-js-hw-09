import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const selector = document.querySelector('input#datetime-picker');
const btn = document.querySelector('button');

btn.setAttribute('disabled', true);

const currentDate = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

      
      if (selectedDates[0].getTime() < currentDate.getTime()) {
          Notify.failure('Please choose a date in the future');
          return
      };
      
      btn.removeAttribute('disabled', true);
  },
};
flatpickr(selector, options);

let intervalId = null;

btn.addEventListener('click', startTimer) 
function startTimer(event) {
    
    intervalId = setInterval(() => {
        const currentTime = new Date();
        
        const difDates = new Date(selector.value);
        const difference = difDates.getTime() - currentTime.getTime();

        function convertMs(ms) {
         
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const days = Math.floor(ms / day);
            // Remaining hours
            const hours = Math.floor((ms % day) / hour);
            // Remaining minutes
            const minutes = Math.floor(((ms % day) % hour) / minute);
            // Remaining seconds
            const seconds = Math.floor((((ms % day) % hour) % minute) / second);

            return { days, hours, minutes, seconds };
        };
        
        const { days, hours, minutes, seconds } = convertMs(difference);

            const timerDays = document.querySelector('[data-days]');
            const timerHours = document.querySelector('[data-hours]');
            const timerMinutes = document.querySelector('[data-minutes]');
            const timerSeconds = document.querySelector('[data-seconds]');

            timerDays.textContent = days.toString().padStart(2, "0");
            timerHours.textContent = hours.toString().padStart(2, '0');
            timerMinutes.textContent = minutes.toString().padStart(2, '0');
        timerSeconds.textContent = seconds.toString().padStart(2, '0');

        if (difference <= 1000) {
            clearInterval(intervalId)
        }

    }, 1000)
    

}


