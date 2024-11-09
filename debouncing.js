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
    console.log('called is made to API....' , count);
}

handleDebouncing();