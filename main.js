import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector('#counter'));
let count = 0;
let btn = document.querySelector('.buttonCSS');
// let btn2 = document.getElementById('btn1');
console.log(btn, 'btn');
btn.addEventListener('click', (e) => {
  console.log(e, 'e');
  if (e.target.innerText == 'Click Me') {
    btn.innerHTML = 'Reset';
    btn.classList.remove('btnCSS');
    btn.classList.add('resetCSS');
    document.getElementById('mainId').appendChild(newDiv);
  } else {
    btn.innerHTML = 'Click Me';
    btn.classList.remove('resetCSS');
    btn.classList.add('btnCSS');
    document.getElementById('mainId').removeChild(newDiv);
  }
});

let newDiv = document.createElement('div');
newDiv.classList.add('profileCnt');

let mainDiv = document.getElementById('mainId');
console.log(mainDiv, 'mainDiv');

let inputDiv = document.getElementById('inputId');

inputDiv.addEventListener('change', (e) => {
  console.log(e.target.value, 'e.target.value');
  if (e.target.value === 'show') {
    mainDiv.innerHTML = `
      <div>
        Show Text
      </div>
    `;
  } else if (e.target.value.length > 0) {
    let lastChild = document.getElementById(e.target.value);
    mainDiv.removeChild(lastChild);
  } else {
    mainDiv.innerHTML = '';
  }
});

// btn.addEventListener('focus' ,()=>{
//   btn.classList.add('btnCSSFocus');
// })

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
  count++;
  let newProfile = document.createElement('div');
  newProfile.classList.add('profileCnt');
  newProfile.id = count + 'profile';
  mainDiv.appendChild(newProfile);
  console.log(mainDiv, 'mainDiv');
  console.log(count, 'conut');
});

let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
  count = 1;
  mainDiv.innerHTML = '';
  console.log(mainDiv, 'mainDiv');
});

let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
  // let lastChild = document.getElementById(count + 'profile');
  console.log(mainDiv.lastChild, 'lastChild');
  mainDiv.removeChild(mainDiv.lastChild);
});