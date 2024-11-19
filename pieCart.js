import './style.css';
function pieCart() {
   document.getElementById('rangeId').addEventListener('input',(e)=>{
        let val = e.target.value;
        console.log(document.getElementById('piechartId') , 'sdsa');
        //please remember `conic-gradient(red ${val}% , blue 0%);` adding semicolon at end will be wrong
        document.getElementById('piechartId').style.backgroundImage = `conic-gradient(red ${val}% , blue 0%)`;
   })
}
document.getElementById('piechartId').style.backgroundImage = `conic-gradient(red ${50}% , blue 0%)`;
pieCart();