import './style.css';
function radioCheckBox() {
    let name = "";
    let age = 0;
    let marriedHappy = false;
    let choices = [];
    document.getElementById('formId').addEventListener('input', (e) => {
        console.log(e, 'e.target');
        let ele = e.target;
        if (ele.id == "nameId") {
            name = e.target.value;
        }
        else if (ele.id == "ageId") {
            age = ele.value;
        }
        else if (ele.id == "magId1" || ele.id == "magId2") {
            if (ele.id == "magId1") {
                marriedHappy = true;
            }
            else {
                marriedHappy = false;
            }
        }
        else {
            choices.push(ele.id);
        }
        console.log(name, age, marriedHappy, choices);
    })
    document.getElementById('formId').addEventListener('submit', (e) => {
        console.log('clicked')
        e.preventDefault();
        let table = document.getElementById('tableId');
        let rData = document.createElement('tr');
        let newName = document.createElement('td');
        let newAge = document.createElement('td');
        let newMarriedStatus = document.createElement('td');
        let newChoices = document.createElement('td');
        newName.innerText = name;
        //newName.value = name; this will be wrong
        newAge.innerText = age;
        newMarriedStatus.innerText = marriedHappy;
        newChoices.innerText = choices;
        rData.appendChild(newName);
        rData.appendChild(newAge);
        rData.appendChild(newMarriedStatus);
        rData.appendChild(newChoices);
        table.appendChild(rData);
        console.log(document.getElementById('formId').children, 'allChildNodes')
    })

}

// function getObject(arr){
//     let parentArr  = ['choiceId1', 'choiceId2', 'choiceId3'];
//   let obj = {};
//   for(let i=0;i<arr.length;i++){
//     if(parentArr.includes(arr[i])){
//         obj[arr[i]] = true;
//     }
//   }
//   return obj;
// }

radioCheckBox();