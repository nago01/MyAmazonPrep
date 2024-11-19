import './style.css';
import { practice } from './practice.js';

let mapping = [1, 0, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14];
function gridCnt() {
  for (let i = 0; i < 16; i++) {
    let newEle = document.createElement('button');
    newEle.id = 'box' + i;
    newEle.innerText = i;
    document.getElementById('gridId').appendChild(newEle);
  };
}
gridCnt();
let currSelection = -1;
document.getElementById('gridId').addEventListener('click', (e) => {
  console.log(typeof(parseInt(e.target.innerText)), 'typeOf');
  if (currSelection === -1) {
    currSelection = e.target.innerText;
  }
  else {
    if (mapping[currSelection] == e.target.innerText) {
      console.log('called the logic');
      document.getElementById('box' + e.target.innerText).style.backgroundColor = 'red';
      document.getElementById('box' + currSelection).style.backgroundColor = 'red';
      currSelection = -1;
    }
    else {
      currSelection = -1;
    }
  }
  console.log(currSelection, 'currSelection after');
});

function printval() {
  var val = 1;
  setInterval(() => {
    console.log(val, 'val');
    val++;
  }, 1000)
}
// printval();

let fun = function () {
  console.log('called the anou');
};
fun();

function Carausal() {
  document.getElementById('btnGroup').addEventListener('click', (e) => {

    let allCards = document.querySelectorAll('.card');
    console.log(allCards, 'allCards');
    if (e.target.id === "btn1") {
      console.log('called 1');
      allCards[1].style.zIndex = 1;
      allCards[2].style.zIndex = 1;
      allCards[0].style.zIndex = 1000;
      allCards[0].style.background = 'grey';
      allCards[1].style.background = 'white';
      allCards[2].style.background = 'white';
    }
    else if (e.target.id === "btn2") {
      console.log('called 2');
      allCards[0].style.zIndex = 1;
      allCards[2].style.zIndex = 1;
      allCards[1].style.zIndex = 1000;
      allCards[1].style.background = 'grey';
      allCards[0].style.background = 'white';
      allCards[2].style.background = 'white';
    }
    else {
      console.log('called 3');
      allCards[1].style.zIndex = 1;
      allCards[0].style.zIndex = 1;
      allCards[2].style.zIndex = 1000;
      allCards[2].style.background = 'grey';
      allCards[1].style.background = 'white';
      allCards[0].style.background = 'white';
    }
  });
}
Carausal();

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
let htmlString = `<button class="btn1">fixed This button is fixed 100px from top even for scroll, with respect to window</button>
<button class="btn2">relative to its positon will be at 50px down but will take the space</button>
<button class="btn3">absolute will position itself with 10px left respect to nearest absolute, will not take up space at original</button>

<button class="btn4">sticky with respect to container wher it is defined</button>`

document.querySelector('.positionCheck').innerHTML = htmlString;

// setupCounter(document.querySelector('#counter'));
let sads = document.querySelectorAll('button');
console.log(sads, 'sadsadaa');
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
let mainDiv2 = document.querySelector('.mainCtnCss');
console.log(mainDiv, 'mainDiv');
console.log(mainDiv2, 'mainDiv2');

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
btn2.addEventListener('click', (e) => {
  count++;
  let newProfile = document.createElement('div');
  newProfile.classList.add('profileCnt');
  newProfile.innerText = count;
  newProfile.id = count + 'profile';
  mainDiv.appendChild(newProfile);
  console.log(e, 'e');
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


let data;

function fetchData() {
  fetch("https://jsonmock.hackerrank.com/api/food_outlets?city=Seattle").then((response) => {
    return response.json();
  }).then((response2) => {
    data = response2.data;
    console.log(data, 'data');
    for (let i = 0; i < data.length; i++) {
      let newNode = document.createElement('div');
      newNode.innerText = data[i].name;
      mainDiv.appendChild(newNode);
    }
    return response2;
  })
}
// fetchData();


function boxWithBox() {

  for (let i = 1; i <= 10; i++) {
    let currentBox = document.createElement('div');
    currentBox.style = `width: ${i * 100}px; height: ${i * 100}px; border: 2px solid black; position:absolute`;
    document.getElementById('boxId').appendChild(currentBox);
  }

  console.log(currentBox, 'currentBox');
}

// boxWithBox();

// getting all button elements and adding the css to 2nd element (index 1) in the list 
document.querySelectorAll('button')[1].style = "height: 200px; border: 10px solid pink; border-radius: 20%";

console.log(document.querySelectorAll('button')[1].parentElement, 'parent')
console.log(document.querySelectorAll('button')[1].parentNode, 'parentNode')

document.querySelector(".modalBtn").addEventListener('click', () => {
  let modalDiv = document.createElement('div');
  let closeBtn = document.createElement('button');
  closeBtn.innerText = 'Close Modal Button';
  closeBtn.addEventListener('click', () => {
    document.querySelector(".bodyCnt").style = "background-color: none ; opacity: none";
    modalDiv.remove();
  });
  modalDiv.appendChild(closeBtn);
  modalDiv.classList.add('modalCSS');
  document.querySelector(".bodyCnt").style = "background-color: pink ; opacity: 50%"
  document.querySelector(".bodyCnt").appendChild(modalDiv);
})

// counterNew();

practice();

playWithObject();

