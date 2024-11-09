import './style.css';


function handleDebouncing() {
    let searchBox = document.getElementById("searchId");
    let timeOut;
    searchBox.addEventListener('change', (e) => {
        clearTimeout(timeOut);
        timeOut = setTimeout(()=>{
            fetchAPI();
        },1000)
        console.log(timeOut , 'timeOut');
    });
}
let count = 0;
function fetchAPI() {
    count++;
    console.log('called is made to API....' , count , new Date().getTime());
}

handleDebouncing();

let lastCall = 0;
function handleThrottling(delay) {
    let scrollBox = document.querySelector(".bodyCSS");
   
    scrollBox.addEventListener('scroll', (e) => {
        const now = new Date().getTime();
        if(now - lastCall > delay){
            fetchAPI();
            lastCall = now;
        }
    });
}

handleThrottling(1000);