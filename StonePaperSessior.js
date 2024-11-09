import './style.css';

let btnList = document.querySelectorAll('button');
console.log(btnList, 'btnList');

let userSelection;

let compSelection;
let youWin = 0;
let compWin = 0;
for (let i = 0; i < btnList.length; i++) {
  btnList[i].addEventListener('click', (e) => {
    userSelection = e.target.innerText;
    let val = Math.random() * 10;
    if (val >= 0 && val <= 3) {
      compSelection = 'Stone';
    } else if (val >= 4 && val <= 7) {
      compSelection = 'Paper';
    } else {
      compSelection = 'Sessior';
    }
    document.querySelector('#userId').innerHTML =
      'You Selected: ' + userSelection;
    document.querySelector('#computerId').innerHTML =
      'Computer Selected: ' + compSelection;

    setTimeout(function () {
      handleWin();
    }, 1000);
  });
}

function handleWin() {
  if (userSelection === compSelection) {
    alert('ITS A DRAW');
  } else if (userSelection === 'Stone') {
    if (compSelection === 'Paper') {
      compWin = compWin + 1;
      document.querySelector('#youScoreId').innerHTML += youWin;
      document.querySelector('#compScoreId').innerHTML += compWin;
      alert('COMPUTER WINS');
    } else {
      youWin = youWin + 1;
      document.querySelector('#youScoreId').innerHTML += youWin;
      document.querySelector('#compScoreId').innerHTML += compWin;
      alert('YOU WIN');
    }
  } else if (userSelection === 'Paper') {
    if (compSelection === 'Sessior') {
      compWin = compWin + 1;
      document.querySelector('#youScoreId').innerHTML += youWin;
      document.querySelector('#compScoreId').innerHTML += compWin;
      alert('COMPUTER WINS');
    } else {
      youWin = youWin + 1;
      document.querySelector('#youScoreId').innerHTML += youWin;
      document.querySelector('#compScoreId').innerHTML += compWin;
      alert('YOU WIN');
    }
  } else if (userSelection === 'Sessior') {
    if (compSelection === 'Stone') {
      compWin = compWin + 1;
      document.querySelector('#youScoreId').innerHTML += youWin;
      document.querySelector('#compScoreId').innerHTML += compWin;
      alert('COMPUTER WINS');
    } else {
      youWin = youWin + 1;
      document.querySelector('#youScoreId').innerHTML += youWin;
      document.querySelector('#compScoreId').innerHTML += compWin;
      alert('YOU WIN');
    }
  }
}
