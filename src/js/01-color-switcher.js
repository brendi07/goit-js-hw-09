const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const window = document.querySelector('body')
let timerId = null;

console.log(start.textContent)

start.addEventListener('click', onStart);
function onStart(event) {
   timerId = setInterval(() => {

          
        function getRandomHexColor() {
          return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)}`;
        }
       
       window.style.backgroundColor = getRandomHexColor(window);

       start.setAttribute('disabled', '');
       stop.removeAttribute('disabled');
       
      }, 1000);
}

stop.addEventListener('click', () => {
    clearInterval(timerId);
    start.removeAttribute('disabled');
    stop.setAttribute('disabled', '');
  
});











