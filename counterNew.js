document.getElementById("counterId").addEventListener('click',(e)=>{
  let curr = document.getElementById("countId");
  console.log(curr,'document.getElementById("countId").value;')
  document.getElementById("countId").value = curr+1;
})