import './style.css';
export function practice() {

  function calculateDiscount(price, discountPercentage) {
    return price - (price * discountPercentage / 100);
  }
  console.log(calculateDiscount(16, 10), 'calculateDiscount(16,10)');

  function reverseNumber(num) {
    let ans = "";
    num = num.toString();
    for (let i = num.length - 1; i >= 0; i--) {
      ans += num[i];
    }
    return typeof (Number(ans));
  }

    function square(num) {
      let sq = num ** 2;
      return sq;
    }

    function sumOfSquare(num1, num2) {
      let a = square(num1);
      let b = square(num2);
      return a + b;
    }

    console.log(sumOfSquare(6, 3));


    function tikTok() {
      let xArr = [];
      let yArr = [];
      let xTurn = true;
      let pattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 9], [0, 4, 8], [2, 4, 6]];
      let btn = document.querySelectorAll('.btnCnt');
      btn.forEach((item) => {
        item.addEventListener('click', (e) => {
          if (xTurn) {
            item.innerHTML = 'X';
          }
          else {
            item.innerHTML = 'O';
          }
          checkWinner();
          item.disabled = true;
        })
      })
      function checkWinner() {
        for (let i = 0; i < btn.length; i++) {
          if (btn[i].innerHTML == 'X') {
            xArr.push(i);
          }
          else if (btn[i].innerHTML == 'O') {
            yArr.push(i);
          }
        }
        for (let win of pattern) {
          let check = false;
          console.log(xTurn, 'xTirn');
          if (xTurn) {
            for (let i = 0; i < win.length; i++) {
              if (!xArr.includes(win[i])) {
                check = true;
              }
            }
          }
          else {
            console.log('called');
            for (let i = 0; i < win.length; i++) {
              if (!yArr.includes(win[i])) {
                check = true;
              }
            }
          }
          if (check == false) {
            alert(xTurn ? "X WINS" : "Y WINS");
          }
        }
        xTurn = !xTurn;
      }
    }

    tikTok();
  }

  practice();