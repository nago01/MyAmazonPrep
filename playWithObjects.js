export function playWithObject() {
    let userList = `[
      {
        "id": 11,
        "firstName": "Liam",
        "age": 29
      },
      {
        "id": 12,
        "firstName": "Mia",
        "age": 24
      },
      {
        "id": 13,
        "firstName": "Noah",
        "age": 40
      },
      {
        "id": 14,
        "firstName": "Charlotte",
        "age": 36
      },
      {
        "id": 15,
        "firstName": "William",
        "age": 32
      }
    ]`;
    let parsedUserList = JSON.parse(userList);


    

    let inputBox = document.querySelectorAll('input');
    console.log(inputBox , 'inputBox');
    showList();
    inputBox.forEach((item) => {
        item.addEventListener('change', (e) => {
            
            if(e.target.id === "rname"){
              removeObj(e.target.value);
            }
        })
    })
    // to do how to handle form data
    // document.getElementById('subBtn').addEventListener('submit',(e)=>{
    //    console.log(e , 'submit called');
    // })  

    document.getElementById('subBtn').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.positionCheck').innerHTML = "";
        let newObject = {};
        newObject["firstName"] = inputBox[0].value;
        newObject["id"] = inputBox[1].value;
        newObject["age"] = inputBox[2].value;
        parsedUserList.push(newObject);
        showList();
    })
    console.log(parsedUserList , 'parsedUserList');
    function showList() {
        for (let i = 0; i < parsedUserList.length; i++) {
            let newEle = document.createElement('div');
            newEle.id = parsedUserList[i].id;
            newEle.innerText = parsedUserList[i].firstName + ":" + parsedUserList[i].id;
            document.querySelector('.positionCheck').appendChild(newEle);
        }
        document.querySelector('.positionCheck').style = "margin: 10px";
    }

    function removeObj(rname){
      document.querySelector('.positionCheck').innerHTML = "";
      parsedUserList =  parsedUserList.filter((item)=>{
        return item.firstName!=rname;
      })
      console.log(parsedUserList,'parsedUserList');
      showList();
    }
}

playWithObject();