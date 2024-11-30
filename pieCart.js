import './style.css';
function pieCart() {
   document.getElementById('rangeId').addEventListener('input',(e)=>{
        let val = e.target.value;
        console.log(val, 'val');
        val = val*3.6;
        //please remember `conic-gradient(red ${val}% , blue 0%);` adding semicolon at end will be wrong
        document.getElementById('piechartId').style.backgroundImage = `conic-gradient(red 0deg, red ${val}deg, blue ${val}deg, blue 360deg)`;
   })
}
let initialval = document.getElementById('rangeId').value;
initialval = initialval*3.6;
document.getElementById('piechartId').style.backgroundImage = `conic-gradient(red 0deg, red ${initialval}deg, blue ${initialval}deg, blue 360deg)`;
pieCart();