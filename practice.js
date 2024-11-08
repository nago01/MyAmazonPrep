export function practice() {

function calculateDiscount(price, discountPercentage) {
    return price - (price * discountPercentage / 100);
  }
  console.log(calculateDiscount(16,10) , 'calculateDiscount(16,10)');
  
  function reverseNumber(num){
    let ans="";
    num = num.toString();
    for(let i=num.length-1;i>=0;i--){
      ans+=num[i];
    }
    return typeof(Number(ans));
  }
  
  console.log(reverseNumber(1234) , 'reverseNumber(1234)');

function chill(){
  console.log("chill");
 
  for(let i=0;i<10;i++){
    let j =  i+1;
    console.log("Chill...."+j);
  }
}

// chill();

function square(num){
   let sq = num**2;
   return sq;
}

function sumOfSquare(num1 , num2){
   let a = square(num1);
   let b = square(num2);
   return a+b;
}

console.log(sumOfSquare(6,3));
}

function numberOfVowel(a){
    
}